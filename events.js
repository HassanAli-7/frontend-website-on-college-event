
document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ === 'undefined') {
        initializeEventsPage();
    }
});

function initializeEventsPage() {
    loadAndDisplayEvents();
    setupEventFilters();
    setupViewModeToggle();
}

function loadAndDisplayEvents() {
    const events = eventsData;
    // Determine current view based on available radios
    const checkedView = document.querySelector('input[name="viewMode"]:checked');
    const viewMode = checkedView && checkedView.id === 'tableView' ? 'table' : 'card';
    displayEvents(events, viewMode);
}

function displayEvents(events, viewMode = 'card') {
    // Support SPA ids and standalone page ids
    const cardContainer = document.getElementById('eventsCardView') || document.getElementById('cardViewContainer');
    const tableContainer = document.getElementById('eventsTableView') || document.getElementById('tableViewContainer');
    const tableBody = document.getElementById('eventsTableBody');
    const noEventsMessage = document.getElementById('noEventsMessage');
    
    if (events.length === 0) {
        if (cardContainer) cardContainer.innerHTML = '';
        if (tableBody) tableBody.innerHTML = '';
        if (noEventsMessage) noEventsMessage.classList.remove('d-none');
        return;
    }
    
    if (noEventsMessage) noEventsMessage.classList.add('d-none');
    
    if (viewMode === 'card') {
        if (cardContainer) {
            displayEventCards(events, cardContainer);
            if (cardContainer.parentElement) cardContainer.parentElement.classList.remove('d-none');
        }
        if (tableContainer) tableContainer.classList.add('d-none');
    } else {
        if (tableBody) displayEventTable(events, tableBody);
        if (cardContainer && cardContainer.parentElement) cardContainer.parentElement.classList.add('d-none');
        if (tableContainer) tableContainer.classList.remove('d-none');
    }
}

function displayEventCards(events, container) {
    container.innerHTML = events.map(event => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.name}" style="height: 200px; object-fit: cover;" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='Techfest-2025-scaled.webp';">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div class="event-date">${formatDate(event.date)}</div>
                        <button class="btn btn-sm btn-outline-primary bookmark-btn" data-event-id="${event.id}">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-muted mb-3">${event.description}</p>
                    <div class="row mb-3">
                        <div class="col-6">
                            <small class="text-muted">
                                <i class="fas fa-clock me-1"></i>${event.time}
                            </small>
                        </div>
                        <div class="col-6">
                            <small class="text-muted">
                                <i class="fas fa-map-marker-alt me-1"></i>${event.venue}
                            </small>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="event-category">${event.category}</span>
                        <button class="btn btn-sm btn-primary" onclick="showEventDetails('${event.id}')">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add bookmark functionality
    addBookmarkListeners();
}

function displayEventTable(events, tableBody) {
    tableBody.innerHTML = events.map(event => `
        <tr>
            <td>
                <strong>${event.name}</strong>
                <br>
                <small class="text-muted">${event.description}</small>
            </td>
            <td>
                <div>${formatDate(event.date)}</div>
                <small class="text-muted">${event.time}</small>
            </td>
            <td>${event.venue}</td>
            <td>
                <span class="event-category">${event.category}</span>
            </td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="showEventDetails('${event.id}')">
                    <i class="fas fa-eye me-1"></i>View
                </button>
                <button class="btn btn-sm btn-outline-warning bookmark-btn" data-event-id="${event.id}">
                    <i class="fas fa-bookmark"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    // Add bookmark functionality
    addBookmarkListeners();
}

function setupEventFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    const searchInput = document.getElementById('eventSearch') || document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // Filter and search functionality
    function applyFilters() {
        const category = categoryFilter ? categoryFilter.value : '';
        const sort = sortBy ? sortBy.value : 'date';
        const query = searchInput ? searchInput.value.trim() : '';
        
        // Get current events (you might want to store this globally)
        const events = eventsData;
                let filteredEvents = events;
                
                // Apply search filter
                if (query) {
                    filteredEvents = filteredEvents.filter(event => 
                        event.name.toLowerCase().includes(query.toLowerCase()) ||
                        event.description.toLowerCase().includes(query.toLowerCase())
                    );
                }
                
                // Apply category filter
                if (category) {
                    filteredEvents = filteredEvents.filter(event => event.category === category);
                }
                
                // Apply sorting
                switch (sort) {
                    case 'name':
                        filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'category':
                        filteredEvents.sort((a, b) => a.category.localeCompare(b.category));
                        break;
                    case 'date':
                    default:
                        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
                        break;
                }
                
                // Display filtered events
                const checkedView = document.querySelector('input[name="viewMode"]:checked');
                const viewMode = checkedView && checkedView.id === 'cardView' ? 'card' : 'table';
                displayEvents(filteredEvents, viewMode);
    }
    
    // Event listeners (guarded for nulls)
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (sortBy) sortBy.addEventListener('change', applyFilters);
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyFilters();
            }
        });
    }
    if (searchBtn) searchBtn.addEventListener('click', applyFilters);
}

function setupViewModeToggle() {
    const cardView = document.getElementById('cardView');
    const tableView = document.getElementById('tableView');
    
    if (cardView) {
        cardView.addEventListener('change', function() {
            if (this.checked) {
                // Reload events in card view
                loadAndDisplayEvents();
            }
        });
    }
    
    if (tableView) {
        tableView.addEventListener('change', function() {
            if (this.checked) {
                // Reload events in table view
                loadAndDisplayEvents();
            }
        });
    }
}

function showEventDetails(eventId) {
    // This would typically open a modal with detailed event information
    // For now, we'll just show an alert
    const event = events.find(e => e.id === eventId);
    if (event) {
        alert(`Event Details:\n\nName: ${event.name}\nDate: ${formatDate(event.date)}\nTime: ${event.time}\nVenue: ${event.venue}\nCategory: ${event.category}\n\nDescription: ${event.description}`);
    }
}

function addBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventId = this.getAttribute('data-event-id');
            if (window.CampusConnect) {
                window.CampusConnect.toggleEventBookmark(eventId);
            }
        });
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger text-center';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle me-2"></i>
        ${message}
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(errorDiv, container.firstChild);
    }
}

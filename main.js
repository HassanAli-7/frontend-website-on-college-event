var events = [];
var galleryImages = [];
var contactDataObj = {};

document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ === 'undefined') {
        initializeApp();
    }
});
function initializeApp() {
    loadEvents();
    loadGalleryImages();
    loadContactData();
    initializeBookmarking();
    initializeAnimations();
}

function loadEvents() {
    events = eventsData;
    displayUpcomingEvents();
}

function loadGalleryImages() {
    galleryImages = galleryData;
}

function loadContactData() {
    contactDataObj = contactData;
    displayContactData();
}

function displayUpcomingEvents() {
    const container = document.getElementById('upcomingEvents');
    if (!container) return;

    // Get next 3 upcoming events
    let upcomingEvents = events
        .filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    if (upcomingEvents.length === 0) {
        // Fallback: show 3 most recent events when no future events exist
        upcomingEvents = [...events]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
    }

    container.innerHTML = upcomingEvents.map(event => `
        <div class="col-md-4 mb-4">
            <div class="card event-card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.name}" style="height: 200px; object-fit: cover;" onerror="this.onerror=null; this.src='Techfest-2025-scaled.webp';">
                <div class="card-body">
                    <div class="event-date">${formatDate(event.date)}</div>
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-muted">${event.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="event-category">${event.category}</span>
                        <button class="btn btn-sm btn-outline-primary bookmark-btn" data-event-id="${event.id}">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add bookmark functionality
    addBookmarkListeners();
}

function displayContactData() {
    if (!contactDataObj.faculty || !contactDataObj.students) return;

    // Display Faculty Coordinators
    const facultyContainer = document.getElementById('facultyCoordinators');
    if (facultyContainer) {
        facultyContainer.innerHTML = contactDataObj.faculty.map(person => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="contact-card">
                    <div class="text-center mb-3">
                        <i class="fas fa-user-tie fa-3x text-primary mb-2"></i>
                        <h5 class="mb-1">${person.name}</h5>
                        <p class="text-muted mb-2">${person.designation}</p>
                        <small class="text-primary">${person.department}</small>
                    </div>
                    <div class="contact-details">
                        <p class="mb-1"><i class="fas fa-phone me-2"></i>${person.phone}</p>
                        <p class="mb-0"><i class="fas fa-envelope me-2"></i>${person.email}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Display Student Coordinators
    const studentContainer = document.getElementById('studentCoordinators');
    if (studentContainer) {
        studentContainer.innerHTML = contactDataObj.students.map(person => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="contact-card">
                    <div class="text-center mb-3">
                        <i class="fas fa-user-graduate fa-3x text-success mb-2"></i>
                        <h5 class="mb-1">${person.name}</h5>
                        <p class="text-muted mb-2">${person.designation}</p>
                        <small class="text-success">${person.department}</small>
                    </div>
                    <div class="contact-details">
                        <p class="mb-1"><i class="fas fa-phone me-2"></i>${person.phone}</p>
                        <p class="mb-0"><i class="fas fa-envelope me-2"></i>${person.email}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeBookmarking() {
    // Load bookmarks from localStorage
    const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
    const bookmarkedImages = JSON.parse(localStorage.getItem('bookmarkedImages') || '[]');
    
    // Update bookmark buttons
    updateBookmarkButtons();
}

function addBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventId = this.getAttribute('data-event-id');
            toggleEventBookmark(eventId);
        });
    });
}

function toggleEventBookmark(eventId) {
    const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
    const index = bookmarkedEvents.indexOf(eventId);
    
    if (index > -1) {
        bookmarkedEvents.splice(index, 1);
        showNotification('Event removed from bookmarks', 'info');
    } else {
        bookmarkedEvents.push(eventId);
        showNotification('Event bookmarked successfully', 'success');
    }
    
    localStorage.setItem('bookmarkedEvents', JSON.stringify(bookmarkedEvents));
    updateBookmarkButtons();
}

function toggleImageBookmark(imageId) {
    const bookmarkedImages = JSON.parse(localStorage.getItem('bookmarkedImages') || '[]');
    const index = bookmarkedImages.indexOf(imageId);
    
    if (index > -1) {
        bookmarkedImages.splice(index, 1);
        showNotification('Image removed from bookmarks', 'info');
    } else {
        bookmarkedImages.push(imageId);
        showNotification('Image bookmarked successfully', 'success');
    }
    
    localStorage.setItem('bookmarkedImages', JSON.stringify(bookmarkedImages));
    updateBookmarkButtons();
}

function updateBookmarkButtons() {
    const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
    const bookmarkedImages = JSON.parse(localStorage.getItem('bookmarkedImages') || '[]');
    
    // Update event bookmark buttons
    document.querySelectorAll('.bookmark-btn[data-event-id]').forEach(btn => {
        const eventId = btn.getAttribute('data-event-id');
        const isBookmarked = bookmarkedEvents.includes(eventId);
        btn.innerHTML = isBookmarked ? '<i class="fas fa-bookmark text-warning"></i>' : '<i class="fas fa-bookmark"></i>';
        btn.classList.toggle('text-warning', isBookmarked);
    });
    
    // Update image bookmark buttons
    document.querySelectorAll('.bookmark-btn[data-image-id]').forEach(btn => {
        const imageId = btn.getAttribute('data-image-id');
        const isBookmarked = bookmarkedImages.includes(imageId);
        btn.innerHTML = isBookmarked ? '<i class="fas fa-bookmark text-warning"></i>' : '<i class="fas fa-bookmark"></i>';
        btn.classList.toggle('text-warning', isBookmarked);
    });
}

function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.card, .feature-card, .event-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(dateString, timeString) {
    const date = new Date(`${dateString}T${timeString}`);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger text-center';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle me-2"></i>
        ${message}
    `;
    
    // Insert at the top of the main content
    const mainContent = document.querySelector('main') || document.querySelector('.container');
    if (mainContent) {
        mainContent.insertBefore(errorDiv, mainContent.firstChild);
    }
}

// Search and Filter Functions
function searchEvents(query, category = '', sortBy = 'date') {
    let filteredEvents = events;
    
    // Filter by search query
    if (query) {
        filteredEvents = filteredEvents.filter(event => 
            event.name.toLowerCase().includes(query.toLowerCase()) ||
            event.description.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    // Filter by category
    if (category) {
        filteredEvents = filteredEvents.filter(event => event.category === category);
    }
    
    // Sort events
    switch (sortBy) {
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
    
    return filteredEvents;
}

function searchGalleryImages(year = '', category = '', event = '') {
    let filteredImages = galleryImages;
    
    // Filter by year
    if (year) {
        filteredImages = filteredImages.filter(img => img.year === year);
    }
    
    // Filter by category
    if (category) {
        filteredImages = filteredImages.filter(img => img.category === category);
    }
    
    // Filter by event
    if (event) {
        filteredImages = filteredImages.filter(img => img.event === event);
    }
    
    return filteredImages;
}

// Export functions for use in other files
window.CampusConnect = {
    loadEvents,
    loadGalleryImages,
    loadContactData,
    searchEvents,
    searchGalleryImages,
    toggleEventBookmark,
    toggleImageBookmark,
    formatDate,
    formatDateTime,
    showNotification,
    displayError
};

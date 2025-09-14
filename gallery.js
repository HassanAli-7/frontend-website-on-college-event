
document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ === 'undefined') {
        initializeGalleryPage();
    }
});

function initializeGalleryPage() {
    loadAndDisplayGallery();
    setupGalleryFilters();
    setupViewModeToggle();
    setupImageModal();
}

function loadAndDisplayGallery() {
    const images = galleryData;
    displayGalleryImages(images);
    populateEventFilter(images);
}

function displayGalleryImages(images, viewMode = 'grid') {
    const gridContainer = document.getElementById('gridViewContainer');
    const masonryContainer = document.getElementById('masonryViewContainer');
    const noImagesMessage = document.getElementById('noImagesMessage');
    
    if (images.length === 0) {
        gridContainer.innerHTML = '';
        masonryContainer.innerHTML = '';
        noImagesMessage.classList.remove('d-none');
        return;
    }
    
    noImagesMessage.classList.add('d-none');
    
    if (viewMode === 'grid') {
        displayGridImages(images, gridContainer);
        gridContainer.parentElement.classList.remove('d-none');
        masonryContainer.classList.add('d-none');
    } else {
        displayMasonryImages(images, masonryContainer);
        gridContainer.parentElement.classList.add('d-none');
        masonryContainer.classList.remove('d-none');
    }
}

function displayGridImages(images, container) {
    container.innerHTML = images.map(image => `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="gallery-item" onclick="openImageModal('${image.id}')">
                <img src="${image.url}" alt="${image.title}" class="img-fluid" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='Techfest-2025-scaled.webp';">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="gallery-info p-3">
                    <h6 class="mb-1">${image.title}</h6>
                    <small class="text-muted">${image.event} - ${image.year}</small>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <span class="badge bg-primary">${image.category}</span>
                        <button class="btn btn-sm btn-outline-warning bookmark-btn" data-image-id="${image.id}" onclick="event.stopPropagation()">
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

function displayMasonryImages(images, container) {
    container.innerHTML = images.map(image => `
        <div class="masonry-item">
            <div class="gallery-item" onclick="openImageModal('${image.id}')">
                <img src="${image.url}" alt="${image.title}" class="img-fluid" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='Techfest-2025-scaled.webp';">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="gallery-info p-3">
                    <h6 class="mb-1">${image.title}</h6>
                    <small class="text-muted">${image.event} - ${image.year}</small>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <span class="badge bg-primary">${image.category}</span>
                        <button class="btn btn-sm btn-outline-warning bookmark-btn" data-image-id="${image.id}" onclick="event.stopPropagation()">
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

function setupGalleryFilters() {
    const yearFilter = document.getElementById('yearFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const eventFilter = document.getElementById('eventFilter');
    
    // Filter functionality
    function applyFilters() {
        const year = yearFilter.value;
        const category = categoryFilter.value;
        const event = eventFilter.value;
        
        const images = galleryData;
        let filteredImages = images;
        
        // Apply year filter
        if (year) {
            filteredImages = filteredImages.filter(img => img.year === year);
        }
        
        // Apply category filter
        if (category) {
            filteredImages = filteredImages.filter(img => img.category === category);
        }
        
        // Apply event filter
        if (event) {
            filteredImages = filteredImages.filter(img => img.event === event);
        }
        
        // Display filtered images
        const checkedView = document.querySelector('input[name="galleryViewMode"]:checked');
        const viewMode = checkedView && checkedView.id === 'gridView' ? 'grid' : 'masonry';
        displayGalleryImages(filteredImages, viewMode);
    }
    
    // Event listeners
    yearFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    eventFilter.addEventListener('change', applyFilters);
}

function populateEventFilter(images) {
    const eventFilter = document.getElementById('eventFilter');
    const uniqueEvents = [...new Set(images.map(img => img.event))].sort();
    
    // Clear existing options except the first one
    eventFilter.innerHTML = '<option value="">All Events</option>';
    
    // Add unique events
    uniqueEvents.forEach(event => {
        const option = document.createElement('option');
        option.value = event;
        option.textContent = event;
        eventFilter.appendChild(option);
    });
}

function setupViewModeToggle() {
    const gridView = document.getElementById('gridView');
    const masonryView = document.getElementById('masonryView');
    
    if (gridView) {
        gridView.addEventListener('change', function() {
            if (this.checked) {
                loadAndDisplayGallery();
            }
        });
    }
    
    if (masonryView) {
        masonryView.addEventListener('change', function() {
            if (this.checked) {
                loadAndDisplayGallery();
            }
        });
    }
}

function setupImageModal() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalDescription = document.getElementById('modalImageDescription');
    const bookmarkBtn = document.getElementById('bookmarkImageBtn');
    const downloadBtn = document.getElementById('downloadImageBtn');
    
    // Store current image data
    let currentImage = null;
    
    // Open image modal
    window.openImageModal = function(imageId) {
        const images = galleryData;
        currentImage = images.find(img => img.id === imageId);
        if (currentImage) {
            modalImage.src = currentImage.url;
            modalImage.alt = currentImage.title;
            modalTitle.textContent = currentImage.title;
            modalDescription.textContent = `${currentImage.event} - ${currentImage.year} | ${currentImage.category}`;
            
            // Update bookmark button
            const bookmarkedImages = JSON.parse(localStorage.getItem('bookmarkedImages') || '[]');
            const isBookmarked = bookmarkedImages.includes(imageId);
            bookmarkBtn.innerHTML = isBookmarked ? 
                '<i class="fas fa-bookmark me-2"></i>Remove Bookmark' : 
                '<i class="fas fa-bookmark me-2"></i>Bookmark';
            bookmarkBtn.classList.toggle('btn-warning', isBookmarked);
            bookmarkBtn.classList.toggle('btn-primary', !isBookmarked);
            
            // Show modal
            const modal = new bootstrap.Modal(imageModal);
            modal.show();
        }
    };
    
    // Bookmark button functionality
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
        if (currentImage) {
            if (window.CampusConnect) {
                window.CampusConnect.toggleImageBookmark(currentImage.id);
                // Update button state
                const bookmarkedImages = JSON.parse(localStorage.getItem('bookmarkedImages') || '[]');
                const isBookmarked = bookmarkedImages.includes(currentImage.id);
                this.innerHTML = isBookmarked ? 
                    '<i class="fas fa-bookmark me-2"></i>Remove Bookmark' : 
                    '<i class="fas fa-bookmark me-2"></i>Bookmark';
                this.classList.toggle('btn-warning', isBookmarked);
                this.classList.toggle('btn-primary', !isBookmarked);
            }
        }
        });
    }
    
    // Download button functionality
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
        if (currentImage) {
            const link = document.createElement('a');
            link.href = currentImage.url;
            link.download = `${currentImage.title}.jpg`;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        });
    }
}

function addBookmarkListeners() {
    document.querySelectorAll('.bookmark-btn[data-image-id]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const imageId = this.getAttribute('data-image-id');
            if (window.CampusConnect) {
                window.CampusConnect.toggleImageBookmark(imageId);
            }
        });
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

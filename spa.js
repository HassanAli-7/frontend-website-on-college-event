$(document).ready(function() {
    initializeSPANavigation();
    initializeSPAEventHandlers();
    loadInitialData();
});

function loadInitialData() {
    if (typeof eventsData !== 'undefined') {
        window.events = eventsData;
    }
    if (typeof galleryData !== 'undefined') {
        window.galleryImages = galleryData;
    }
    if (typeof contactData !== 'undefined') {
        window.contactData = contactData;
    }
    
    setTimeout(() => {
        if (typeof initializeBookmarking === 'function') {
            initializeBookmarking();
        }
    }, 100);
}

function initializeSPANavigation() {
    $('.page-section').addClass('d-none');
    $('#home').removeClass('d-none');
    
    $('.navbar-nav .nav-link').removeClass('active');
    $('.navbar-nav .nav-link[data-target="home"]').addClass('active');
}

function initializeSPAEventHandlers() {
    $('.navbar-nav .nav-link[data-target]').on('click', function(e) {
        e.preventDefault();
        
        const targetSection = $(this).data('target');
        navigateToSection(targetSection);
    });
    
    $('a[data-target]').on('click', function(e) {
        e.preventDefault();
        
        const targetSection = $(this).data('target');
        navigateToSection(targetSection);
    });
    
    $(window).on('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash && $('#' + hash).length) {
            navigateToSection(hash);
        }
    });
    
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash && $('#' + hash).length) {
            navigateToSection(hash);
        }
    }
}

function navigateToSection(sectionId) {
    if (!$('#' + sectionId).length) {
        return;
    }
    
    $('.page-section').addClass('d-none');
    $('#' + sectionId).removeClass('d-none');
    
    $('.navbar-nav .nav-link').removeClass('active');
    $('.navbar-nav .nav-link[data-target="' + sectionId + '"]').addClass('active');
    
    window.location.hash = sectionId;
    
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    
    if (sectionId === 'events') {
        loadEventsPage();
    } else if (sectionId === 'gallery') {
        loadGalleryPage();
    } else if (sectionId === 'feedback') {
        loadFeedbackPage();
    } else if (sectionId === 'contact') {
        loadContactPage();
    } else if (sectionId === 'about') {
        loadAboutPage();
    } else if (sectionId === 'home') {
        loadHomePage();
    }
}

function loadHomePage() {
    if (typeof displayUpcomingEvents === 'function') {
        displayUpcomingEvents();
    }
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function loadAboutPage() {
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function loadEventsPage() {
    if (typeof loadAndDisplayEvents === 'function') {
        loadAndDisplayEvents();
    }
    if (typeof setupEventFilters === 'function') {
        setupEventFilters();
    }
    if (typeof setupViewModeToggle === 'function') {
        setupViewModeToggle();
    }
    if (typeof addBookmarkListeners === 'function') {
        addBookmarkListeners();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function loadGalleryPage() {
    if (typeof loadAndDisplayGallery === 'function') {
        loadAndDisplayGallery();
    }
    if (typeof setupGalleryFilters === 'function') {
        setupGalleryFilters();
    }
    if (typeof setupViewModeToggle === 'function') {
        setupViewModeToggle();
    }
    if (typeof setupImageModal === 'function') {
        setupImageModal();
    }
    if (typeof addBookmarkListeners === 'function') {
        addBookmarkListeners();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function loadFeedbackPage() {
    if (typeof setupFeedbackForm === 'function') {
        setupFeedbackForm();
    }
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function loadContactPage() {
    if (typeof loadAndDisplayContact === 'function') {
        loadAndDisplayContact();
    }
    if (typeof setupContactForm === 'function') {
        setupContactForm();
    }
    if (typeof initializeAnimations === 'function') {
        initializeAnimations();
    }
    if (typeof initializeBookmarking === 'function') {
        initializeBookmarking();
    }
}

function showNotification(message, type = 'info') {
    const alertClass = type === 'success' ? 'alert-success' : 
                      type === 'error' ? 'alert-danger' : 
                      type === 'warning' ? 'alert-warning' : 'alert-info';
    
    const notification = $(`
        <div class="alert ${alertClass} alert-dismissible fade show position-fixed" 
             style="top: 100px; right: 20px; z-index: 9999; min-width: 300px;">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.alert('close');
    }, 5000);
}

function initializeSPAAnimations() {
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
    
    document.querySelectorAll('.card, .feature-card').forEach(card => {
        observer.observe(card);
    });
}

$(document).ready(function() {
    initializeSPAAnimations();
});

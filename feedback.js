
document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ === 'undefined') {
        initializeFeedbackPage();
    }
});

function initializeFeedbackPage() {
    setupFeedbackForm();
    setupRatingStars();
}

function setupFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFeedbackSubmission();
    });
    
    // Form reset functionality
    const resetBtn = form.querySelector('button[type="reset"]');
    resetBtn.addEventListener('click', function() {
        resetRatingStars();
    });
}

function handleFeedbackSubmission() {
    const form = document.getElementById('feedbackForm');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateFeedbackForm()) {
        return;
    }
    
    // Get form data
    const feedbackData = {
        name: formData.get('name'),
        email: formData.get('email'),
        userType: formData.get('userType'),
        eventAttended: formData.get('eventAttended'),
        rating: formData.get('rating'),
        comments: formData.get('comments'),
        newsletter: formData.get('newsletter') === 'on',
        timestamp: new Date().toISOString()
    };
    
    // Store feedback locally (since this is a static form)
    storeFeedbackLocally(feedbackData);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    form.reset();
    resetRatingStars();
}

function validateFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const userType = (formData.get('userType') || '').toString();
    const rating = formData.get('rating');
    
    let isValid = true;
    let errorMessage = '';
    
    // Validate name
    if (!name) {
        errorMessage += 'Name is required.\n';
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        errorMessage += 'Email is required.\n';
        isValid = false;
    } else if (!isValidEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
        isValid = false;
    }
    
    // Validate user type
    if (!userType) {
        errorMessage += 'Please select your user type.\n';
        isValid = false;
    }
    
    // Validate rating
    if (!rating) {
        errorMessage += 'Please provide a rating.\n';
        isValid = false;
    }
    
    if (!isValid) {
        alert('Please fix the following errors:\n\n' + errorMessage);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function storeFeedbackLocally(feedbackData) {
    try {
        // Get existing feedback from localStorage
        const existingFeedback = JSON.parse(localStorage.getItem('feedbackSubmissions') || '[]');
        
        // Add new feedback
        existingFeedback.push(feedbackData);
        
        // Store back to localStorage
        localStorage.setItem('feedbackSubmissions', JSON.stringify(existingFeedback));
        
        console.log('Feedback stored locally:', feedbackData);
    } catch (error) {
        console.error('Error storing feedback:', error);
    }
}

function showSuccessMessage() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show';
    successAlert.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <strong>Thank you for your feedback!</strong> Your response has been recorded locally. 
        Note: This is a static form, so your feedback is not sent to our servers.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the form
    const form = document.getElementById('feedbackForm');
    form.parentNode.insertBefore(successAlert, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (successAlert.parentNode) {
            successAlert.remove();
        }
    }, 5000);
}

function setupRatingStars() {
    const stars = document.querySelectorAll('.rating-stars input[type="radio"]');
    const labels = document.querySelectorAll('.rating-stars .star');
    
    stars.forEach((star, index) => {
        star.addEventListener('change', function() {
            updateStarDisplay(index + 1);
        });
        
        star.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });
    });
    
    // Add hover effect for labels
    labels.forEach((label, index) => {
        label.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });
    });
    
    // Reset stars when mouse leaves the rating container
    const ratingContainer = document.querySelector('.rating-stars');
    ratingContainer.addEventListener('mouseleave', function() {
        const checkedStar = document.querySelector('input[name="rating"]:checked');
        if (checkedStar) {
            const checkedIndex = Array.from(stars).indexOf(checkedStar);
            updateStarDisplay(checkedIndex + 1);
        } else {
            resetStarDisplay();
        }
    });
}

function updateStarDisplay(rating) {
    const labels = document.querySelectorAll('.rating-stars .star');
    
    labels.forEach((label, index) => {
        if (index < rating) {
            label.style.color = '#ffc107';
        } else {
            label.style.color = '#ddd';
        }
    });
}

function highlightStars(rating) {
    const labels = document.querySelectorAll('.rating-stars .star');
    
    labels.forEach((label, index) => {
        if (index < rating) {
            label.style.color = '#ffc107';
        } else {
            label.style.color = '#ddd';
        }
    });
}

function resetStarDisplay() {
    const labels = document.querySelectorAll('.rating-stars .star');
    
    labels.forEach(label => {
        label.style.color = '#ddd';
    });
}

function resetRatingStars() {
    const checkedStar = document.querySelector('input[name="rating"]:checked');
    if (checkedStar) {
        checkedStar.checked = false;
    }
    resetStarDisplay();
}

function displayStoredFeedback() {
    try {
        const feedback = JSON.parse(localStorage.getItem('feedbackSubmissions') || '[]');
        console.log('Stored feedback:', feedback);
        return feedback;
    } catch (error) {
        console.error('Error retrieving stored feedback:', error);
        return [];
    }
}

function clearStoredFeedback() {
    localStorage.removeItem('feedbackSubmissions');
    console.log('Stored feedback cleared');
}

window.FeedbackManager = {
    displayStoredFeedback,
    clearStoredFeedback
};

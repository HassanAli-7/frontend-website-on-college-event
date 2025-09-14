
document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ === 'undefined') {
        initializeContactPage();
    }
});

function initializeContactPage() {
    setupContactForm();
    loadAndDisplayContact();
}

function loadAndDisplayContact() {
    loadContactData();
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    // Prevent duplicate listeners when navigating SPA
    if (form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmission();
    });
}

function handleContactSubmission() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Validate form
    if (!validateContactForm()) {
        return;
    }
    
    // Get form data
    const contactData = {
        name: formData.get('contactName'),
        email: formData.get('contactEmail'),
        subject: formData.get('contactSubject'),
        message: formData.get('contactMessage'),
        timestamp: new Date().toISOString()
    };
    
    // Store contact message locally (since this is a static form)
    storeContactMessageLocally(contactData);
    
    // Show success message
    showContactSuccessMessage();
    
    // Reset form
    form.reset();
}

function validateContactForm() {
    const form = document.getElementById('contactForm');
    const fd = new FormData(form);
    const name = (fd.get('contactName') || '').toString().trim();
    const email = (fd.get('contactEmail') || '').toString().trim();
    const subject = (fd.get('contactSubject') || '').toString().trim();
    const message = (fd.get('contactMessage') || '').toString().trim();
    
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
    
    // Validate subject
    if (!subject) {
        errorMessage += 'Subject is required.\n';
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        errorMessage += 'Message is required.\n';
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

function storeContactMessageLocally(contactData) {
    try {
        // Get existing messages from localStorage
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        
        // Add new message
        existingMessages.push(contactData);
        
        // Store back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
        
        console.log('Contact message stored locally:', contactData);
    } catch (error) {
        console.error('Error storing contact message:', error);
    }
}

function showContactSuccessMessage() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show';
    successAlert.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <strong>Message sent successfully!</strong> Thank you for contacting us. 
        Note: This is a static form, so your message is not sent to our servers.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successAlert, form);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (successAlert.parentNode) {
            successAlert.remove();
        }
    }, 5000);
}

function loadContactData() {
    try {
        const data = contactData;
        displayContactData(data);
    } catch (error) {
        console.error('Error loading contact data:', error);
        displayContactError('Failed to load contact information. Please try again later.');
    }
}

function displayContactData(data) {
    // Display Faculty Coordinators
    const facultyContainer = document.getElementById('facultyCoordinators');
    if (facultyContainer && data.faculty) {
        facultyContainer.innerHTML = data.faculty.map(person => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="contact-card">
                    <div class="text-center mb-3">
                        <i class="fas fa-user-tie fa-3x text-primary mb-2"></i>
                        <h5 class="mb-1">${person.name}</h5>
                        <p class="text-muted mb-2">${person.designation}</p>
                        <small class="text-primary">${person.department}</small>
                    </div>
                    <div class="contact-details">
                        <p class="mb-1">
                            <i class="fas fa-phone me-2"></i>
                            <a href="tel:${person.phone}" class="text-decoration-none">${person.phone}</a>
                        </p>
                        <p class="mb-0">
                            <i class="fas fa-envelope me-2"></i>
                            <a href="mailto:${person.email}" class="text-decoration-none">${person.email}</a>
                        </p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Display Student Coordinators
    const studentContainer = document.getElementById('studentCoordinators');
    if (studentContainer && data.students) {
        studentContainer.innerHTML = data.students.map(person => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="contact-card">
                    <div class="text-center mb-3">
                        <i class="fas fa-user-graduate fa-3x text-success mb-2"></i>
                        <h5 class="mb-1">${person.name}</h5>
                        <p class="text-muted mb-2">${person.designation}</p>
                        <small class="text-success">${person.department}</small>
                    </div>
                    <div class="contact-details">
                        <p class="mb-1">
                            <i class="fas fa-phone me-2"></i>
                            <a href="tel:${person.phone}" class="text-decoration-none">${person.phone}</a>
                        </p>
                        <p class="mb-0">
                            <i class="fas fa-envelope me-2"></i>
                            <a href="mailto:${person.email}" class="text-decoration-none">${person.email}</a>
                        </p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function displayContactError(message) {
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

function displayStoredContactMessages() {
    try {
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        console.log('Stored contact messages:', messages);
        return messages;
    } catch (error) {
        console.error('Error retrieving stored contact messages:', error);
        return [];
    }
}

function clearStoredContactMessages() {
    localStorage.removeItem('contactMessages');
    console.log('Stored contact messages cleared');
}

window.ContactManager = {
    displayStoredContactMessages,
    clearStoredContactMessages
};

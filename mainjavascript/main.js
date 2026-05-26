const emailInput = document.getElementById('email');
const emailForm = document.getElementById('emailForm');

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('invalid');
        return true;
    } else {
        emailInput.classList.add('invalid');
        return false;
    }
}

// Check validation on blur (when user clicks away)
emailInput.addEventListener('blur', validateEmail);

// Handle form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page refresh
    
    if (validateEmail()) {
        alert('Form submitted successfully!');
        emailForm.reset();
    } else {
        console.log('Submission blocked: Invalid email');
    }
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or show a thank you message)
    alert('Your message has been sent!');
    this.reset();
});


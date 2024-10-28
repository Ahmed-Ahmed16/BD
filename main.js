// script.js
document.getElementById('revealButton').addEventListener('click', function() {
    const message = document.getElementById('birthdayMessage');
    message.classList.toggle('show');
    
    // Optional: Add party effects
    document.body.style.backgroundColor = '#ffeb3b'; // Change background color
    setTimeout(() => {
        document.body.style.backgroundColor = '#f0f8ff'; // Reset after a moment
    }, 2000);
});
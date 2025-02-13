document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('newsletter-popup-overlay');
    const popupCloseButton = document.getElementById('popup-close-button');
    const newsletterForm = document.getElementById('newsletter-form');

    // Function to show the pop-up
    function showPopup() {
        popupOverlay.style.display = 'block'; // Make the overlay visible
    }

    // Function to hide the pop-up
    function hidePopup() {
        popupOverlay.style.display = 'none'; // Hide the overlay
    }

    // Show pop-up after a delay (e.g., 3 seconds)
    setTimeout(showPopup, 3000); // 3000 milliseconds = 3 seconds

    // Event listener for the close button
    popupCloseButton.addEventListener('click', hidePopup);

    // Event listener for form submission (you can customize this part)
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission (page reload)

        // In a real scenario, you would:
        // 1. Send the email to your newsletter service (e.g., using fetch or AJAX)
        // 2. Handle success/error responses from the service
        // 3. (If successful) Maybe show a confirmation message in the popup

        // For this example, we'll just:
        alert('Thank you for subscribing! You will receive your 10% discount code soon.'); // Simple confirmation
        hidePopup(); // Close the popup after "submission"

        // (Optional) You could also redirect to a "thank you" page or update content dynamically here.
    });

    // (Optional) Close the popup if user clicks outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});


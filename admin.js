// Admin Dashboard JavaScript

// Get all navigation links
let menuLinks = document.querySelectorAll(".menu a");

// Add a click event to each menu link
menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Remove active class from all links
        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        // Add active class to the clicked link
        this.classList.add("active");

    });

});


// Display a message when the dashboard loads
document.addEventListener("DOMContentLoaded", function() {

    console.log("Admin Dashboard loaded successfully");

});
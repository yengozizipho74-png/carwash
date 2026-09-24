// ===============================
// SHINE WASH JAVASCRIPT
// ===============================


// ===============================
// BOOKING BUTTONS
// ===============================

let bookingButtons = document.querySelectorAll('a[href="booking.html"]');

bookingButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        alert("Welcome to Shine Wash! Please choose your wash package and booking time.");

    });

});


// ===============================
// LOGIN BUTTON
// ===============================

let loginButton = document.querySelector('a[href="login.html"]');

if (loginButton) {

    loginButton.addEventListener("click", function() {

        alert("Welcome to the Shine Wash login page.");

    });

}


// ===============================
// SERVICE LINKS
// ===============================

let serviceLinks = document.querySelectorAll(".service-link");

serviceLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        let serviceName = link
            .closest(".service-card")
            .querySelector(".service-title h3")
            .innerHTML;

        alert("You selected: " + serviceName);

    });

});


// ===============================
// VIEW ALL SERVICES
// ===============================

let viewServicesButton = document.querySelector(
    'a[href="services.html"]'
);

if (viewServicesButton) {

    viewServicesButton.addEventListener("click", function() {

        alert("Opening all Shine Wash services.");

    });

}


// ===============================
// LEARN MORE
// ===============================

let learnMoreButton = document.querySelector(
    'a[href="about.html"]'
);

if (learnMoreButton) {

    learnMoreButton.addEventListener("click", function() {

        alert("Learn more about Shine Wash and our services.");

    });

}


// ===============================
// WELCOME OFFER
// ===============================

let offerButton = document.querySelector(".offer .white-button");

if (offerButton) {

    offerButton.addEventListener("click", function() {

        alert("You will receive 10% off your first booking!");

    });

}


// ===============================
// CONTACT EMAIL
// ===============================

let email = document.querySelector(
    ".contact-item strong"
);

if (email) {

    email.addEventListener("click", function() {

        window.location.href = "mailto:hello@shinewash.co.za";

    });

}


// ===============================
// PHONE NUMBER
// ===============================

let contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach(function(item) {

    let text = item.innerText;

    if (text.includes("073 452 2543")) {

        item.addEventListener("click", function() {

            window.location.href = "tel:0734522543";

        });

    }

});


// ===============================
// CURRENT YEAR
// ===============================

let copyright = document.querySelector(".copyright");

if (copyright) {

    let currentYear = new Date().getFullYear();

    copyright.innerHTML =
        "© " + currentYear + " Shine Wash. All rights reserved.";

}


// ===============================
// SMOOTH SCROLLING
// ===============================

let navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        let targetID = link.getAttribute("href");

        if (targetID !== "#") {

            let target = document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

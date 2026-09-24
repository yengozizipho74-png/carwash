let selectedTime = "";

function selectTime(element) {
    document.querySelectorAll(".time").forEach(
        item => item.classList.remove("selected")
    );

    element.classList.add("selected");

    selectedTime = element.innerText;
}

function submitBooking(event) {

    event.preventDefault();

    if (selectedTime === "") {

        alert("Please select a time slot.");

        return;

    }

    // === GET LOGGED IN USER ===
    let userEmail = localStorage.getItem("email") || localStorage.getItem("userName") || "Guest";
    let userName = localStorage.getItem("userName") || userEmail;

    // === GET BOOKING DETAILS FROM PAGE ===
    // Try to find wash type, date, car type - works even if IDs are different
    let washType = document.querySelector(".selected-service")?.innerText ||
                   document.querySelector('input[name="service"]:checked')?.value ||
                   document.getElementById("washType")?.value ||
                   localStorage.getItem("selectedService") ||
                   "Premium Wash";

    let bookingDate = document.getElementById("date")?.value ||
                      document.querySelector('input[type="date"]')?.value ||
                      new Date().toLocaleDateString();

    let carType = document.getElementById("carType")?.value ||
                  document.querySelector('select')?.value ||
                  "";

    // === SAVE BOOKING FOR THIS SPECIFIC USER ===
    let allBookings = JSON.parse(localStorage.getItem("carwashBookings") || "{}");

    let myNewBooking = {
        service: washType,
        date: bookingDate,
        time: selectedTime,
        car: carType,
        bookedAt: new Date().toString()
    };

    // Save under both email and username so dashboard will find it
    allBookings[userEmail] = myNewBooking;
    if(userName && userName!== userEmail){
        allBookings[userName] = myNewBooking;
    }

    localStorage.setItem("carwashBookings", JSON.stringify(allBookings));
    localStorage.setItem("lastBooking", JSON.stringify(myNewBooking));

    // Go to confirmation
    window.location.href = "booking-confirmation.html";
}

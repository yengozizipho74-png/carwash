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

    window.location.href = "booking-confirmation.html";

}
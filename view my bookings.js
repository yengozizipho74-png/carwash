function searchBookings() {

    let search =
        document.getElementById("search")
        .value.toLowerCase();

    let bookings =
        document.querySelectorAll(".booking-card");

    bookings.forEach(function(booking) {

        let text =
            booking.innerText.toLowerCase();

        if (text.includes(search)) {

            booking.style.display = "flex";

        } else {

            booking.style.display = "none";

        }

    });

}
// ===============================
// DASHBOARD JAVASCRIPT
// ===============================

// Get the elements from the HTML
let profile = document.querySelector(".profile");
let greeting = document.querySelector(".top h1");

// Display user's name
let userName = "Sfundo";

profile.innerHTML = "👤 " + userName;

// Display greeting
greeting.innerHTML = "Good afternoon 👋";

// ===============================
// BOOKING INFORMATION
// ===============================

let bookingName = "Premium Wash";
let bookingDate = "25 September 2026";
let bookingTime = "14:00";

let booking = document.querySelector(".booking");

booking.innerHTML = `
    <div>
        <strong>${bookingName}</strong>
        <p>${bookingDate} • ${bookingTime}</p>
    </div>

    <span class="status">
        Confirmed
    </span>
`;

// ===============================
// BAY STATUS
// ===============================

let bays = [
    "🟢 Bay 1 — Free",
    "🔴 Bay 2 — Busy",
    "🟢 Bay 3 — Free",
    "🟢 Bay 4 — Free",
    "🔴 Bay 5 — Busy",
    "🔴 Bay 6 — Busy"
];

let bayPanel = document.querySelectorAll(".panel")[1];

// Display bay status
bayPanel.innerHTML = "<h2>Live Bays</h2>";

for (let i = 0; i < bays.length; i++) {
    bayPanel.innerHTML += "<p>" + bays[i] + "</p><br>";
}
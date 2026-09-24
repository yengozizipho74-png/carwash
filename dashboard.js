// ==============================
// DASHBOARD JAVASCRIPT
// ==============================

// Get the elements from the HTML
let profile = document.querySelector(".profile");
let greeting = document.querySelector(".top h1");

// Display user's name - DYNAMIC for whoever logged in
let userName = localStorage.getItem("userName") || localStorage.getItem("name") || "Guest";
let userEmail = localStorage.getItem("email") || userName;

if(profile) profile.innerHTML = "👤 " + userName;
if(greeting) greeting.innerHTML = "Good afternoon 👋 " + userName;

// ==============================
// BOOKING INFORMATION - DYNAMIC PER USER
// ==============================

// Get all bookings
let allBookings = JSON.parse(localStorage.getItem("carwashBookings") || "{}");
let myBooking = allBookings[userEmail] || allBookings[userName];

// If this user has a real booking, use it. If not, show default
let bookingName = myBooking? myBooking.service : "No booking yet";
let bookingDate = myBooking? myBooking.date : "";
let bookingTime = myBooking? myBooking.time : "";

let booking = document.querySelector(".booking");

if(myBooking){
  booking.innerHTML = `
    <div>
      <h3>${bookingName}</h3>
      <p>${bookingDate} • ${bookingTime}</p>
    </div>
    <span class="status">
      Confirmed
    </span>
  `;
} else {
  booking.innerHTML = `
    <div>
      <h3>No booking yet</h3>
      <p><a href="my-bookings.html">Click to book now</a></p>
    </div>
    <span class="status">
      Empty
    </span>
  `;
}

// ==============================
// BAY STATUS
// ==============================

let bays = [
  "🟢 Bay 1 - Free",
  "🔴 Bay 2 - Busy",
  "🟢 Bay 3 - Free",
  "🟢 Bay 4 - Free",
  "🔴 Bay 5 - Busy",
  "🔴 Bay 6 - Busy"
];

let bayPanel = document.querySelectorAll(".panel")[1];

// Display bay status
bayPanel.innerHTML = "<h2>Live Bays</h2>";

for (let i = 0; i < bays.length; i++) {
  bayPanel.innerHTML += "<p>" + bays[i] + "</p><br>";
}

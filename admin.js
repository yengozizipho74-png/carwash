// Admin Dashboard JavaScript 

// 1. Menu active effect
let menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    menuLinks.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// 2. LOAD ALL USER BOOKINGS - THIS IS THE IMPORTANT PART
document.addEventListener("DOMContentLoaded", function() {
  console.log("Admin Dashboard loaded successfully");

  let allBookings = JSON.parse(localStorage.getItem("carwashBookings") || "{}");
  let tbody = document.getElementById("bookingTableBody");
  let totalCount = document.getElementById("totalCount");

  if(totalCount) totalCount.innerText = Object.keys(allBookings).length;

  if(!tbody) return;

  if(Object.keys(allBookings).length === 0){
    tbody.innerHTML = `<tr><td colspan="4">No bookings yet</td></tr>`;
  } else {
    let html = "";
    for(let user in allBookings){
      let b = allBookings[user];
      html += `
        <tr>
          <td>${user}</td>
          <td>${b.service || 'Premium Wash'}</td>
          <td>${b.date || ''} ${b.time || ''}</td>
          <td><span style="background:#22c55e;color:white;padding:4px 10px;border-radius:12px;font-size:12px;">Confirmed</span></td>
        </tr>
      `;
    }
    tbody.innerHTML = html;
  }
});

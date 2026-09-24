// Get all the wash bays
let bays = document.querySelectorAll(".bay");

// Change the status of each bay randomly
function updateBayStatus() {

    bays.forEach(function(bay) {

        let status = bay.querySelector(".status");

        // Randomly choose FREE or BUSY
        let randomNumber = Math.random();

        if (randomNumber < 0.5) {

            status.innerHTML = "● FREE";

            status.classList.remove("busy");
            status.classList.add("free");

        } else {

            status.innerHTML = "● BUSY";

            status.classList.remove("free");
            status.classList.add("busy");

        }

    });

}

// Update the bay status every 5 seconds
setInterval(updateBayStatus, 5000);
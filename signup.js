function registerUser(event) {

    event.preventDefault();

    // Get values from the HTML inputs
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {

        alert("Passwords do not match!");
        return;

    }

    // Display success message
    alert("Account created successfully!");

    // Go to login page
    window.location.href = "login.html";
}


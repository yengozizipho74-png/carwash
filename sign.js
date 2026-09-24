function loginUser(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email===""){
        alert("Please eenter your email address.");
        return;
    }
    if(password===""){
        alert("Please enter your password.");
        return;
    }


    // ===============================
    // LOGIN CHECK
    // ===============================

    if (email.includes("admin")) {

        window.location.href = "admin-dashboard.html";

    } else {

        window.location.href = "booking page.html";

    }

}

    


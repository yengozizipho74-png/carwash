

    

function loginUser(event){
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email===""){
    alert("Please enter your email address.");
    return;
  }
  if(password===""){
    alert("Please enter your password.");
    return;
  }

  
  let nameToShow = email.split("@")[0];
  localStorage.setItem("userName", nameToShow);
  localStorage.setItem("email", email);

  // LOGIN CHECK
  if (email.includes("admin")) {
      window.location.href = "admin-dashboard.html";
  } else {
      window.location.href = "dashboard.html";
  }
}

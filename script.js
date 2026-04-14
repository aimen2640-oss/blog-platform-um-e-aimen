function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Dummy users (for demo)
  if (email === "admin@gmail.com" && password === "123") {
    alert("Welcome Admin");
  }
  else if (email === "editor@gmail.com" && password === "123") {
    alert("Welcome Editor");
  }
  else if (email === "viewer@gmail.com" && password === "123") {
    alert("Welcome Viewer");
  }
  else {
    alert("Invalid login");
  }
}

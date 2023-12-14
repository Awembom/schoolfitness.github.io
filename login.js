


document.getElementById("signupLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
});

document.getElementById("signinLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Perform login validation here
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
  } else {
    
    window.location.href = "indexR.html";
    // alert("Login successful!");
    // Redirect the user to the dashboard or another page
  }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  // Perform sign-up logic here
  if (name === "" || email === "" || username === "" || password === "") {
    alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    window.location.href = "indexR.html";
    // alert("Sign up successful!");
    // Redirect the user to the dashboard or another page
  }
});

function validateEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




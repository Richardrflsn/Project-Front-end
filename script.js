// Popup login
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

// Validation login
function validated() {
    // Get the values of the email and password fields
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the email and password fields are not empty
    if (email.trim() == "") {
      // Display an error message for the email field
    document.getElementById("email_error").style.display = "block";
    return false;
    } else {
      // Hide the error message for the email field
    document.getElementById("email_error").style.display = "none";
    }

    if (password.trim() == "") {
      // Display an error message for the password field
    document.getElementById("pass_error").style.display = "block";
    return false;
    } else {
      // Hide the error message for the password field
    document.getElementById("pass_error").style.display = "none";
    }

    // If the email and password fields are not empty, allow the form to submit
    return true;
}

  // Add an event listener to the form's submit button
    var form = document.querySelector(".form");
    var submitButton = form.querySelector("button");

    submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    validated();
});
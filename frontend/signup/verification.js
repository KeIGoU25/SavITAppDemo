let submitBtn = document.getElementById("submitBtn");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function chkInputs() {

    if (firstname.value === "" || lastname.value === "" || email.value === "" || 
        password.value === "" || confirm_password.value === "") {
        alert("Please insert value on all fields.");
        return false; // Prevent form submission
    }

    if (password.value !== confirm_password.value) {
        alert("Password doesn't match...");
        return false; // Prevent form submission
    }
}

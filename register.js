function register() {
    var role = document.getElementById("role").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var password = document.getElementById("password").value;

    if (name == "" || email == "" || phone == "" || city == "" || password == "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Registration successful! Welcome, " + name + ". Please login.");
    window.location.href = "login.html";
}

function login() {
    var role = document.getElementById("role").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill in all fields.");
        return;
    }

    // Save user info to localStorage for use across pages
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    if (role == "buyer") {
        window.location.href = "buyer.html";
    } else if (role == "farmer") {
        window.location.href = "farmer.html";
    } else if (role == "admin") {
        window.location.href = "admin.html";
    }
}

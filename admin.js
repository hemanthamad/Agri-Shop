// Delete any table row
function deleteRow(btn) {
    var row = btn.closest("tr");
    row.remove();
}

// Approve a pending user
function approveUser(btn) {
    var row = btn.closest("tr");
    var statusCell = row.querySelector(".badge");
    statusCell.textContent = "Active";
    statusCell.className = "badge badge-green";
    btn.remove(); // remove Approve button only
}

// Add a new category
function addCategory() {
    var name = document.getElementById("cat-name").value.trim();
    var desc = document.getElementById("cat-desc").value.trim();

    if (name == "") {
        alert("Please enter a category name.");
        return;
    }

    if (desc == "") {
        desc = "-";
    }

    var tbody = document.getElementById("cat-table");
    var newRow = '<tr>' +
                     '<td>' + name + '</td>' +
                     '<td>' + desc + '</td>' +
                     '<td>0</td>' +
                     '<td><button class="btn btn-red" onclick="deleteRow(this)">Delete</button></td>' +
                 '</tr>';

    tbody.insertAdjacentHTML("beforeend", newRow);

    document.getElementById("cat-name").value = "";
    document.getElementById("cat-desc").value = "";

    alert('Category "' + name + '" added successfully!');
}

// Search/filter users table
function searchUsers() {
    var keyword = document.getElementById("user-search").value.toLowerCase();
    var roleFilter = document.getElementById("user-role-filter").value;
    var rows = document.querySelectorAll("#users-table tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].querySelectorAll("td");
        var name  = cells[0].textContent.toLowerCase();
        var email = cells[1].textContent.toLowerCase();
        var role  = cells[2].textContent;

        var matchesSearch = name.includes(keyword) || email.includes(keyword);
        var matchesRole   = (roleFilter == "" || role == roleFilter);

        if (matchesSearch && matchesRole) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

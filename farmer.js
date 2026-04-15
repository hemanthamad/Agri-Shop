// Add a new product to the table
function addProduct() {
    var name = document.getElementById("prod-name").value.trim();
    var category = document.getElementById("prod-cat").value;
    var price = document.getElementById("prod-price").value.trim();
    var stock = document.getElementById("prod-stock").value.trim();

    if (name == "" || category == "" || price == "" || stock == "") {
        alert("Please fill in all fields.");
        return;
    }

    var tbody = document.getElementById("farmer-product-table");
    var newRow = '<tr>' +
                     '<td>' + name + '</td>' +
                     '<td>' + category + '</td>' +
                     '<td>₹' + price + '/kg</td>' +
                     '<td>' + stock + ' kg</td>' +
                     '<td><button class="btn btn-red" onclick="deleteRow(this)">Delete</button></td>' +
                 '</tr>';

    tbody.insertAdjacentHTML("beforeend", newRow);

    // Update stat count
    var stat = document.getElementById("total-products-stat");
    stat.textContent = parseInt(stat.textContent) + 1;

    // Clear form
    document.getElementById("prod-name").value = "";
    document.getElementById("prod-cat").value = "";
    document.getElementById("prod-price").value = "";
    document.getElementById("prod-stock").value = "";
    document.getElementById("prod-desc").value = "";

    alert("Product added successfully!");

    // Switch to My Products tab
    openTab("my-products", document.querySelectorAll(".tab-btn")[1]);
}

// Delete a table row
function deleteRow(btn) {
    var row = btn.closest("tr");
    row.remove();

    // Update stat count if on farmer page
    var stat = document.getElementById("total-products-stat");
    if (stat) {
        var current = parseInt(stat.textContent);
        if (current > 0) {
            stat.textContent = current - 1;
        }
    }
}

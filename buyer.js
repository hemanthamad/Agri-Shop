var cart = [];

// Load featured + all products on page load
window.onload = function () {
    loadFeatured();
    loadAllProducts();
};

function loadFeatured() {
    var container = document.getElementById("featured-products");
    var html = "";
    for (var i = 0; i < 4; i++) {
        html += buildProductCard(productList[i]);
    }
    container.innerHTML = html;
}

function loadAllProducts() {
    var container = document.getElementById("all-products");
    var html = "";
    for (var i = 0; i < productList.length; i++) {
        html += buildProductCard(productList[i]);
    }
    container.innerHTML = html;
}

// Search and filter products
function searchProducts() {
    var keyword = document.getElementById("search-input").value.toLowerCase();
    var selectedCat = document.getElementById("filter-cat").value;
    var container = document.getElementById("all-products");
    var html = "";

    for (var i = 0; i < productList.length; i++) {
        var p = productList[i];
        var matchesSearch = p.name.toLowerCase().includes(keyword) || p.farmer.toLowerCase().includes(keyword);
        var matchesCat = (selectedCat == "" || p.category == selectedCat);

        if (matchesSearch && matchesCat) {
            html += buildProductCard(p);
        }
    }

    if (html == "") {
        container.innerHTML = "<p style='color:#888; padding:10px;'>No products found.</p>";
    } else {
        container.innerHTML = html;
    }
}

// Filter from categories tab
function filterByCategory(catName) {
    document.getElementById("filter-cat").value = catName;
    document.getElementById("search-input").value = "";
    openTab("products", document.querySelectorAll(".tab-btn")[1]);
    searchProducts();
}

// Add item to cart
function addToCart(productId) {
    var product = null;
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].id == productId) {
            product = productList[i];
            break;
        }
    }
    if (!product) return;

    // Check if already in cart
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == productId) {
            cart[i].qty += 1;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, qty: 1 });
    }

    alert(product.name + " added to cart!");
    renderCart();
}

// Render cart tab
function renderCart() {
    var cartList = document.getElementById("cart-list");
    var cartEmpty = document.getElementById("cart-empty");
    var cartSummary = document.getElementById("cart-summary");

    if (cart.length == 0) {
        cartList.innerHTML = "";
        cartEmpty.style.display = "block";
        cartSummary.style.display = "none";
        return;
    }

    cartEmpty.style.display = "none";
    cartSummary.style.display = "block";

    var html = "";
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.qty;
        total += itemTotal;

        html += '<div class="cart-row">' +
                    '<div class="cart-name">' + item.name + '</div>' +
                    '<div style="color:#555; font-size:14px;">Qty: ' + item.qty + ' kg</div>' +
                    '<div class="cart-price">Rs. ' + itemTotal + '</div>' +
                    '<button class="btn btn-red" onclick="removeFromCart(' + item.id + ')">Remove</button>' +
                '</div>';
    }

    cartList.innerHTML = html;
    document.getElementById("subtotal").textContent = "Rs. " + total;
    document.getElementById("total-amount").textContent = "Rs. " + total;
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(function (item) { return item.id != productId; });
    renderCart();
}

// Place order
function placeOrder() {
    if (cart.length == 0) {
        alert("Your cart is empty.");
        return;
    }

    // Add to orders table
    var tbody = document.getElementById("orders-table");
    var orderId = "#" + (Math.floor(Math.random() * 900) + 1100);

    for (var i = 0; i < cart.length; i++) {
        var row = '<tr>' +
                      '<td>' + orderId + '</td>' +
                      '<td>' + cart[i].name + '</td>' +
                      '<td>' + cart[i].qty + ' kg</td>' +
                      '<td>Rs. ' + (cart[i].price * cart[i].qty) + '</td>' +
                      '<td><span class="badge badge-orange">Processing</span></td>' +
                  '</tr>';
        tbody.insertAdjacentHTML("afterbegin", row);
    }

    cart = [];
    renderCart();
    alert("Order placed successfully! Check My Orders tab.");
}

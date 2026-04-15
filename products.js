// Shared tab switching function used in all dashboards
function openTab(tabId, btn) {
    var allTabs = document.querySelectorAll(".tab-content");
    for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].classList.remove("active");
    }

    var allBtns = document.querySelectorAll(".tab-btn");
    for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");
}

// Product data used by buyer dashboard
// NOTE: Place your images inside the /images folder with these exact filenames
var productList = [
    { id: 1, name: "Fresh Tomatoes", category: "Vegetables", price: 50,  farmer: "Ramesh Patel",  img: "../images/tomatoes.jpg" },
    { id: 2, name: "Wheat",          category: "Grains",     price: 35,  farmer: "Suresh Yadav",  img: "../images/wheat.jpg" },
    { id: 3, name: "Sweet Mangoes",  category: "Fruits",     price: 90,  farmer: "Dinesh Kumar",  img: "../images/mangoes.jpg" },
    { id: 4, name: "Fresh Onions",   category: "Vegetables", price: 30,  farmer: "Ramesh Patel",  img: "../images/onions.jpg" },
    { id: 5, name: "Gram (Chana)",   category: "Pulses",     price: 60,  farmer: "Suresh Yadav",  img: "../images/chana.jpg" },
    { id: 6, name: "Corn (Makka)",   category: "Grains",     price: 25,  farmer: "Dinesh Kumar",  img: "../images/corn.jpg" },
    { id: 7, name: "Fresh Apples",   category: "Fruits",     price: 120, farmer: "Kishan Singh",  img: "../images/apples.jpg" },
    { id: 8, name: "Spinach",        category: "Vegetables", price: 20,  farmer: "Ramesh Patel",  img: "../images/spinach.jpg" }
];

// Build a single product card HTML
function buildProductCard(product) {
    return '<div class="product-card">' +
               '<img class="p-img" src="' + product.img + '" alt="' + product.name + '">' +
               '<div class="p-body">' +
                   '<div class="p-name">' + product.name + '</div>' +
                   '<div class="p-price">Rs. ' + product.price + '/kg</div>' +
                   '<div class="p-farmer">by ' + product.farmer + '</div>' +
                   '<button class="btn btn-green" onclick="addToCart(' + product.id + ')">Add to Cart</button>' +
               '</div>' +
           '</div>';
}

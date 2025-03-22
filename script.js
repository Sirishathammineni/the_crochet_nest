document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "0";
});
document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "-250px";
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) document.getElementById("userDetails").innerText = ${user.username} (${user.email});
});
// Sidebar Toggle
document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "0";
});
document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "-280px";
});

// Load User Details
document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) document.getElementById("userDetails").innerText = ${user.username} (${user.email});
});

// Add to Cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

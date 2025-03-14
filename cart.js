document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalAmount = 0;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            let itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <p>${item.name} - ₹${item.price}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalAmount += item.price;
        });
    }

    document.getElementById("total-amount").textContent = totalAmount;
});

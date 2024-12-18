function addToCart() {
    var variantSelect = document.getElementById("variantSelect");
    var quantityInput = document.getElementById("quantity");

    console.log("Add to Cart clicked"); // Debug log

    if (!variantSelect || !quantityInput) {
        alert("Please select a variant and enter a quantity.");
        return;
    }

    // Get selected variant details
    var selectedIndex = variantSelect.value;
    var data = productData[selectedIndex];

    console.log(data); // Debug log to see what data is retrieved

    if (data) {
        // Calculate subtotal
        var price = parseFloat(data.price.replace('$', ''));
        var quantity = parseInt(quantityInput.value) || 1;
        var subtotal = price * quantity;

        // Retrieve product details to store
        var cartItem = {
            image: MainImg.src,
            title: data.title,
            price: data.price,
            quantity: quantity,
            subtotal: subtotal.toFixed(2)
        };

        // Retrieve cart from localStorage or create empty array if none exists
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add item to cart
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        // Show notification with a slight delay
        setTimeout(function() {
            showNotification("Item added to cart!");
        }, 100); // Adjust as needed

    } else {
        console.error("Invalid product selection.");
        alert("Please select a variant and enter a quantity.");
    }
}


// Function to show notification
function showNotification(message) {
    var notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");
    notification.classList.add("show");

    // Automatically hide after 3 seconds
    setTimeout(function() {
        notification.classList.remove("show");
        notification.classList.add("hidden");
    }, 3000);
}


function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartTableBody = document.getElementById("cartTableBody");
    var cartSubtotalElem = document.getElementById("cartSubtotal");
    var totalAmountElem = document.getElementById("totalAmount");

    // Initialize subtotal
    let cartSubtotal = 0;

    // Clear previous cart data in the table
    cartTableBody.innerHTML = '';

    cart.forEach(function(item, index) {
        var row = document.createElement("tr");

        // Remove button with index for identifying which item to remove
        var removeCell = document.createElement("td");
        removeCell.innerHTML = `<a href="#" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash-can"></i></a>`;
        row.appendChild(removeCell);

        // Product image
        var imageCell = document.createElement("td");
        imageCell.innerHTML = `<img src="${item.image}" width="50" alt="Product Image">`;
        row.appendChild(imageCell);

        // Product title
        var titleCell = document.createElement("td");
        titleCell.textContent = item.title;
        row.appendChild(titleCell);

        // Price
        var priceCell = document.createElement("td");
        priceCell.textContent = item.price;
        row.appendChild(priceCell);

        // Quantity
        var quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        // Subtotal
        var subtotalCell = document.createElement("td");
        subtotalCell.textContent = `$${item.subtotal}`;
        row.appendChild(subtotalCell);

        // Append row to the table
        cartTableBody.appendChild(row);

        // Add item subtotal to cartSubtotal
        cartSubtotal += parseFloat(item.subtotal);
    });

    // Update Cart Subtotal and Total
    cartSubtotalElem.textContent = `$${cartSubtotal.toFixed(2)}`;
    totalAmountElem.textContent = `$${cartSubtotal.toFixed(2)}`;
}

// Remove item from cart function
function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item at specified index
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Refresh cart display
}

// Initialize cart display on page load
window.onload = displayCart;

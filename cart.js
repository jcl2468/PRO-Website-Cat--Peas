// Get elements
const checkoutModal = document.getElementById("checkoutModal");
const proceedButton = document.querySelector("#subtotal .normal");
const closeBtn = document.querySelector(".close-btn");
const modalSubtotal = document.getElementById("modalSubtotal");
const modalShipping = document.getElementById("modalShipping");
const modalTotalAmount = document.getElementById("modalTotalAmount");


// Function to populate modal with cart data
function populateModal() {
    // Grab the content from cart elements
    const cartSubtotal = document.getElementById("cartSubtotal").textContent;
    const shipping = document.getElementById("shipping").textContent;
    const totalAmount = document.getElementById("totalAmount").textContent;


    // Set modal content with current values
    modalSubtotal.textContent = cartSubtotal;
    modalShipping.textContent = shipping;
    modalTotalAmount.textContent = totalAmount;
}

// Open modal and populate data on proceed button click
proceedButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page reload

    // Populate modal data
    populateModal();
    
    // Display the modal
    checkoutModal.style.display = "block";
});

// Close modal on close button click
closeBtn.addEventListener("click", function() {
    checkoutModal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === checkoutModal) {
        checkoutModal.style.display = "none";
    }
});

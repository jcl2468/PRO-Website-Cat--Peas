var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Ray-Ban RB3569 - Black On Silver [Grey] Variant 1",
        "price": "$216.00",
        "description": "Introducing Ray-Ban RB3569 sunglasses, a square metal frame with a timeless design that will never go out of style. The unisex model features a polished black on gold finish with grey mirror silver gradient lenses, giving you an unmistakable look from dawn till dusk. With these shades on your face, you'll always be ready for the spotlight wherever you go.",
        "productInfo": {
            "Style": "RB3569",
            "Model Code": "RB3569 187/88 59-17",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey Mirror Silver Gradient","Material: Polycarbonate", "Technology: Gradient - Mirror"],
        "frameDetails": ["Color: Black On Gold", "Material: Metal", "Shape: Square"]
    },
    "1": {
        "title": "Ray-Ban RB3569 - Black On Silver [Grey] Variant 2",
        "price": "$206.00",
        "description": "The Ray-Ban RB3569 is a square metal frame with a unique look and feel. These unisex sunglasses are designed with light grey gradient dark grey lenses, perfect for those who want to make a statement without being too flashy. The black on silver metal frames add an extra touch of sophistication to these trendy shades, making them suitable for any occasion from casual hangouts to business meetings.",
        "productInfo": {
            "Style": "RB3569",
            "Model Code": "RB3569 90048G 59-17",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Light Grey Gradient Dark Grey","Material: Polycarbonate", "Technology: Gradient"],
        "frameDetails": ["Color: Black On Silver", "Material: Metal", "Shape: Square"]
    },
};


// Update product details based on selected variant
function updateProductDetails(selectedIndex) {
    var data = productData[selectedIndex];
    if (data) {
        document.getElementById("productTitle").textContent = data.title;
        document.getElementById("productPrice").textContent = data.price;
        document.getElementById("productDescription").textContent = data.description;
        
        // Update product information
        var productInfo = document.getElementById("productInformation").querySelector("ul");
        productInfo.innerHTML = ""; // Clear existing items
        for (const key in data.productInfo) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.textContent = key + " "; // Remove the colon
            li.appendChild(span);
            li.appendChild(document.createTextNode(data.productInfo[key])); // Add the value
            productInfo.appendChild(li);
        }

        // Update lens details
        var lensDetails = document.getElementById("lensDetails").querySelector("ul");
        lensDetails.innerHTML = ""; // Clear existing items
        data.lensDetails.forEach(function(detail) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.textContent = detail.split(":")[0] + " "; // Remove the colon
            li.appendChild(span);
            li.appendChild(document.createTextNode(detail.split(":")[1])); // Get the part after the colon
            lensDetails.appendChild(li);
        });
        
        // Update frame details
        var frameDetails = document.getElementById("frameDetails").querySelector("ul");
        frameDetails.innerHTML = ""; // Clear existing items
        data.frameDetails.forEach(function(detail) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.textContent = detail.split(":")[0] + " "; // Remove the colon
            li.appendChild(span);
            li.appendChild(document.createTextNode(detail.split(":")[1])); // Get the part after the colon
            frameDetails.appendChild(li);
        });
    }
}

// Update image and product details when selecting from dropdown
variantSelect.onchange = function() {
    var selectedIndex = variantSelect.value; // Get selected option value
    if (selectedIndex) {
        MainImg.src = smallimg[selectedIndex].src; // Update MainImg based on selected option
        updateProductDetails(selectedIndex); // Update product details
    }
};

// Allow image clicks to update the MainImg and product details
for (var i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        var selectedIndex = Array.prototype.indexOf.call(smallimg, this);
        MainImg.src = this.src;
        variantSelect.value = selectedIndex; // Update the select dropdown
        updateProductDetails(selectedIndex); // Update product details
    };
}

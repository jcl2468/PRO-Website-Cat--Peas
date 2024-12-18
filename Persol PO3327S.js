var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Persol PO3327S - Black [Green]",
        "price": "$398.00",
        "description": "A modern twist on the iconic Persol rectangle shape, PO3327S sunglasses are designed for those who seek style and sophistication. The polished black acetate frame with green lenses exudes timeless appeal, while the Meflecto system ensures comfort and functionality. These sunglasses offer an alternative to everyday wear with their unique color combination that adds a touch of edginess to your look.",
        "productInfo": {
            "Style": "PO3327S",
            "Model Code": "PO3327S 95/31 56-20",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Green","Material: Crystal", "Technology: Classic"],
        "frameDetails": ["Color: Black", "Material: Acetate", "Shape: Rectangle"]
    },
    "1": {
        "title": "Persol PO3327S - Brown Tortoise [Black-Polarized]",
        "price": "$398.00",
        "description": "Experience the allure of vintage-inspired style with Persol PO3327S sunglasses. These unisex rectangle frames feature a captivating brown tortoise color and are crafted from premium quality acetate materials, adding durability and comfort to your everyday look. The polar black lenses provide optimal protection against harmful UV rays while effortlessly complementing the polished frame finish in brown tortoise hue for added sophistication.",
        "productInfo": {
            "Style": "PO3327S",
            "Model Code": "PO3327S 107148 56-20",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Polar Black", "Material: Crystal", "Technology: Classic"],
        "frameDetails": ["Color: Tortoise", "Material: Acetate", "Shape: Rectangle"]
    },
    "2": {
        "title": "Persol PO3327S - Terra Di Seina [Blue-Polarized]",
        "price": "$398.00",
        "description": "A unique style for those who want to stand out from the crowd, Persol PO3327S sunglasses feature a polished terra di seina frame with blue gradient lenses for an elegant look. The rectangle shape and acetate material exude timeless appeal, while the polarized lens treatment ensures optimal visual clarity and comfort.",
        "productInfo": {
            "Style": "PO3327S",
            "Model Code": "PO3327S 96/S3 56-20",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Blue", "Material: Crystal", "Technology: Gradient"],
        "frameDetails": ["Color: Brown", "Material: Acetate", "Shape: Rectangle"]
    }
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

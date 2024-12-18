var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Versace VE2258 - Dark Grey [Grey]",
        "price": "$392.00",
        "description": "Elevate your style with Versace VE2258 sunglasses, a perfect embodiment of the iconic brand's bold and modern aesthetic. The metal frame in dark grey color exudes timeless elegance and sophistication, while the irregular shape adds a touch of allure. These unisex shades feature solid dark grey lenses that offer both fashion-forward appeal and optimal protection against harmful UV rays. Elevated yet approachable, these sunglasses embody the essence of Versace's enduring legacy and contemporary spirit.",
        "productInfo": {
            "Style": "VE2258",
            "Model Code": "VE2258 100287 0-145",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Dark Grey", "Material: Metal", "Shape: Irregular"]
    },
    "1": {
        "title": "Versace VE2258 - Grey Mirror Silver [Silver]",
        "price": "$392.00",
        "description": "Elevate your style with Versace VE2258, a unique blend of iconic Medusa and Greco-Roman motifs. The irregular metal frame is adorned with golden details and features grey mirror silver lenses. Designed for those who want to make a statement without saying a word, these sunglasses embody timeless elegance paired with contemporary flair.",
        "productInfo": {
            "Style": "VE2258",
            "Model Code": "VE2258 10026G 0-145",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey Mirror Silver","Material: Polyamide", "Technology: Solid Color - Mirror"],
        "frameDetails": ["Color: Grey Mirror Silver", "Material: Metal", "Shape: Irregular"]
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

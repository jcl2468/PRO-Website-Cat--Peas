var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Versace VE4461 - Black [Grey]",
        "price": "$434.00",
        "description": "Experience the essence of style with a pair of Versace sunglasses. The irregular frame shape and solid dark grey lenses exude timeless sophistication, while the black color adds an extra touch of elegance to the design. Crafted from high-quality materials, these shades offer both comfort and durability for everyday wear. Embrace iconic luxury with this exquisite fusion of past and present styles that seamlessly blends tradition with contemporary flair.",
        "productInfo": {
            "Style": "VE4461",
            "Model Code": "VE4461 GB1/87 0-147",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey/Mirror Gold","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Black", "Material: Injected", "Shape: Irregular"]
    },
    "1": {
        "title": "Versace VE4461 - Crystal [Grey]",
        "price": "$434.00",
        "description": "Experience the essence of luxury with Versace VE4461 sunglasses. These solid grey mirror black lenses paired with crystal colored frames exude timeless elegance and style. Crafted from high-quality materials, these unisex shades feature an irregular shape that offers both comfort and versatility. Elevated by iconic medusa detailing, embrace a fusion of contemporary design and traditional craftsmanship that seamlessly blends past and present.",
        "productInfo": {
            "Style": "VE4461",
            "Model Code": "VE4461 148/6V 0-147",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey Mirror Black/Mirror Blue Violet","Material: Polyamide", "Technology: Solid Color - Mirror"],
        "frameDetails": ["Color: Crystal", "Material: Injected", "Shape: Irregular"]
    },
    "2": {
        "title": "Versace VE4461 - White [Grey]",
        "price": "$434.00",
        "description": "Elevate your style with Versace VE4461 sunglasses, a perfect blend of iconic design and contemporary flair. The irregular frame shape in white color exudes timeless elegance, while the dark grey lenses add a touch of sophistication to the overall look. Crafted from premium materials for comfort and durability, these sunglasses offer both style and functionality that make them an ideal choice for those seeking versatile wearability",
        "productInfo": {
            "Style": "VE4461",
            "Model Code": "VE4461 314/87 0-147",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey/Mirror Silver","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: White", "Material: Injected", "Shape: Irregular"]
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

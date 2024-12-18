var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Ray-Ban RB3741 Emy Bio-Based - Gold [Grey]",
        "price": "$176.00",
        "description": "Introducing Ray-Ban Emy Bio-Based sunglasses. Designed to impress with its unique combination of metal gold frame and mirror dark grey flash silver lenses, this model offers style and innovation. The rectangle shape is perfect for those looking for an everyday accessory that can easily transition from casual to formal occasions.",
        "productInfo": {
            "Style": "RB3741 Emy Bio-Based",
            "Model Code": "RB3741 003/9A 59-17",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Green","Material: Polycarbonate", "Technology: Solid Color"],
        "frameDetails": ["Color: Silver", "Material: Metal", "Shape: Rectangle"]
    },
    "1": {
        "title": "Ray-Ban RB3741 Emy Bio-Based - Silver [Blue]",
        "price": "$151.00",
        "description": "Ray-Ban Emy Bio-Based sunglasses are a modern take on the metal frame. The rectangle shape and metal construction give these shades an unmistakable style. The polished silver frames paired with blue lenses create a cool, casual look that's perfect for any occasion. Wear them as your everyday go-to accessory or save them for special occasions like concerts, parties, or nights out on the town.",
        "productInfo": {
            "Style": "RB3741 Emy Bio-Based",
            "Model Code": "RB3741 003/80 59-17",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Blue","Material: Polyamide Bio", "Technology: Solid Color"],
        "frameDetails": ["Color: Silver", "Material: Metal", "Shape: Rectangle"]
    },
    "2": {
        "title": "Ray-Ban RB3741 Emy Bio-Based - Silver [Green-Polarized]",
        "price": "$186.00",
        "description": "Ray-Ban Emy Bio-Based sunglasses in silver frame are a timeless style that has been worn by everyone. The metal frame with its sleek silver finish and rectangle shape exude sophistication, while the dark green polarized lenses add an extra touch of cool. These silver-framed sunglasses are perfect for those who want to make a statement without being too flashy.",
        "productInfo": {
            "Style": "RB3741 Emy Bio-Based",
            "Model Code": "RB3741 003/9A 59-17",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Green","Material: Polycarbonate", "Technology: Solid Color"],
        "frameDetails": ["Color: Silver", "Material: Metal", "Shape: Rectangle"]
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

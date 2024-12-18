var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
var productData = {
    "0": {
        "title": "Giorgio Armani AR6135 - Pale Gold [Grey]",
        "price": "$585.00",
        "description": "Elevate your style with Giorgio Armani AR6135 sunglasses, a perfect blend of sophistication and modernity. The round pale gold frame, crafted from steel material, exudes timeless elegance while the gradient grey lenses add an extra touch of sophistication. These shades perfectly embody the essence of luxury and are guaranteed to turn heads wherever you go.",
        "productInfo": {
            "Style": "AR6135",
            "Model Code": "AR6135 301311 56-19",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Gradient Grey","Material: Polycarbonate", "Technology: Gradient"],
        "frameDetails": ["Color: Pale Gold", "Material: Steel", "Shape: Round"]
    },
    "1": {
        "title": "Giorgio Armani AR6135 - Silver [Green]",
        "price": "$585.00",
        "description": "Elevate your style with Giorgio Armani AR6135 sunglasses, a perfect blend of sophistication and contemporary design. The round silver frame crafted in steel material exudes elegance, while the gradient green lenses add a touch of youthful charm. These shades are designed to impress with their timeless allure and effortlessly cool attitude. Elevated yet understated, these sunglasses embody the essence of Armani's fashion DNA in all its glory, perfectly complemented by the sleek silver finish",
        "productInfo": {
            "Style": "AR6135",
            "Model Code": "AR6135 30158E 56-19",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Gradient Green","Material: Polycarbonate", "Technology: Gradient"],
        "frameDetails": ["Color: Silver", "Material: Steel", "Shape: Round"]
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

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Burberry BE4291 - Beige [Grey]",
        "price": "$296.00",
        "description": "Introducing Burberry BE4291 sunglasses, a striking embodiment of the iconic British brand's timeless allure. The solid dark grey lenses exude sophistication, while the beige frame adds an understated elegance that epitomizes Burberry's iconic style. These rectangle frames effortlessly capture the essence of contemporary luxury that has made the brand so beloved by fashion enthusiasts around the globe.",
        "productInfo": {
            "Style": "BE4291",
            "Model Code": "BE4291 404787 0-138",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Beige", "Material: Nylon", "Shape: Rectangle"]
    },
    "1": {
        "title": "Burberry BE4291 - Matte Black [Grey]",
        "price": "$296.00",
        "description": "Find it here first: this exclusive oversized square frame is the first style designed by Burberry’s Chief Creative Officer, Riccardo Tisci. The feminine and elegant frame features the brand’s new TB monogram in metal on the temple.",
        "productInfo": {
            "Style": "BE4291",
            "Model Code": "BE4291 346487 0-138",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Matte Black", "Material: Nylon", "Shape: Rectangle"]
    },
    "2": {
        "title": "Burberry BE4291 - White [Grey] Variant 1",
        "price": "$296.00",
        "description": "Find it here first: this exclusive oversized square frame is the first style designed by Burberry’s Chief Creative Officer, Riccardo Tisci. The feminine and elegant frame features the brand’s new TB monogram in metal on the temple.",
        "productInfo": {
            "Style": "BE4291",
            "Model Code": "BE4291 3007/H 0-138",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey Tampo Burberry Silver/Gold2","Material: Polyamide", "Technology: Solid Color - Mirror"],
        "frameDetails": ["Color: White", "Material: Nylon", "Shape: Rectangle"]
    },
    "3": {
        "title": "Burberry BE4291 - White [Grey] Variant 2",
        "price": "$296.00",
        "description": "Experience the essence of luxury with Burberry BE4291 sunglasses. These stylish shades embrace the iconic British brand's rich heritage and contemporary style, exuding timeless elegance. The polished white frame perfectly complements the grey mirror black lenses, creating a striking contrast that captures attention wherever you go. Elevated by designer details, these rectangle frames seamlessly blend tradition and innovation for an effortlessly sophisticated look that speaks volumes about your impeccable taste in fashion.",
        "productInfo": {
            "Style": "BE4291",
            "Model Code": "BE4291 40496G 0-138",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Grey Mirror Black","Material: Polyamide", "Technology: Solid Color - Mirror"],
        "frameDetails": ["Color: White", "Material: Nylon", "Shape: Rectangle"]
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
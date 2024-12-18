var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Ray-Ban RB3686 Chromance - Black [Grey-Polarized]",
        "price": "$268.00",
        "description": "Ray-Ban RB3686 Chromance are a new square shape made for those who dare to stand out from the crowd. The black on silver steel frame and temples ensure durability, while the dark green polarized lenses provide 100% UV protection. These sunglasses feature chromance lens treatment that will make you look and feel your best all day long.",
        "productInfo": {
            "Style": "RB3686 Chromance",
            "Model Code": "RB3686 9144P1 57-19",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Green","Material: Crystal", "Technology: Chromance"],
        "frameDetails": ["Color: Black On Silver", "Material: Steel", "Shape: Square"]
    },
    "1": {
        "title": "Ray-Ban RB3686 Chromance - Black On Silver [Green-Polarized]",
        "price": "$268.00",
        "description": "Ray-Ban RB3686 Chromance sunglasses are a new square shape made to impress. The steel frame is matte black colored and features dark grey polarized lenses, giving them a modern look with plenty of attitude. These shades are ready to take on the world in style and comfort, so get ready for some chromance action.",
        "productInfo": {
            "Style": "RB3686 Chromance",
            "Model Code": "RB3686 186/K8 57-19",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Crystal", "Technology: Chromance"],
        "frameDetails": ["Color: Black", "Material: Steel", "Shape: Square"]
    },
    "2": {
        "title": "Ray-Ban RB3686 Chromance - Blue On Gunmetal [Blue-Polarized]",
        "price": "$288.00",
        "description": "Ray-Ban RB3686 Chromance sunglasses are a must-have for those who love to stand out from the crowd. The square shape and steel construction exude confidence, while the blue on gunmetal frame adds an extra touch of style. These unisex sunglasses are designed to make a statement wherever you go, with chromance lenses that provide optimal color contrast and clarity.",
        "productInfo": {
            "Style": "RB3686 Chromance",
            "Model Code": "RB3686 92044L 57-19",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Blue","Material: Crystal", "Technology: Chromance"],
        "frameDetails": ["Color: Blue On Gunmetal", "Material: Steel", "Shape: Square"]
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

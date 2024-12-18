var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Versace VE43921 - Black [Grey]",
        "price": "$363.00",
        "description": "Discover the iconic style of Versace VE4391 sunglasses, where iconic patterns meet contemporary aesthetics. The irregular shape and solid color dark grey lenses are perfect for those who seek timeless elegance with a twist. Crafted in black frame color with polished finish, these shades exude sophistication and high fashion attitude. Embrace the allure of this exquisite fusion of past and present, where tradition meets innovation in these versatile designs that seamlessly transition from day to night styling.",
        "productInfo": {
            "Style": "VE4391",
            "Model Code": "VE4391 GB1/87 0-148",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Dark Grey", "Material: Nylon", "Shape: Irregular"]
    },
    "1": {
        "title": "Versace VE43921 - Black [Orange]",
        "price": "$363.00",
        "description": "Experience the iconic style of Versace with the VE4391 sunglasses. These stylish shades feature an irregular frame shape crafted from black colored material, adding an air of sophistication to your look. The solid orange lenses provide a striking contrast and complete the design with unmistakable flair. Embrace timeless luxury in these versatile frames that effortlessly transition from day to night activities.",
        "productInfo": {
            "Style": "VE4391",
            "Model Code": "VE4391 GB1/7 0-148",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Orange","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Black", "Material: Nylon", "Shape: Irregular"]
    },
    "2": {
        "title": "Versace VE43921 - Havana [Green]",
        "price": "$363.00",
        "description": "Experience the allure of Versace VE4391 sunglasses, where iconic design meets premium craftsmanship. The solid dark green lenses are paired with an irregular havana frame crafted from durable and resilient materials, creating a stylish yet timeless look that effortlessly transitions from day to night. Elevate your everyday style with these exquisite shades, where iconic design meets premium craftsmanship.",
        "productInfo": {
            "Style": "VE4391",
            "Model Code": "VE4391 531771 0-148",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Green","Material: Polyamide", "Technology: Solid Color"],
        "frameDetails": ["Color: Havana", "Material: Nylon", "Shape: Irregular"]
    },
    "3": {
        "title": "Versace VE43921 - Transparent Grey [Silver]",
        "price": "$363.00",
        "description": "Experience the ultimate fusion of style and sophistication with Versace VE4391 sunglasses, a testament to fine craftsmanship and impeccable design. Featuring an irregular frame shape crafted from premium materials, these shades exude timeless elegance in transparent grey color paired with light grey mirror silver lenses. Embrace the allure of iconic Medusa head emblem on temple tips for an unmistakable mark of luxury that transcends generations.",
        "productInfo": {
            "Style": "VE4391",
            "Model Code": "VE4391 311/6G 0-148",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Light Grey Mirror Silver","Material: Polyamide", "Technology: Solid Color - Mirror"],
        "frameDetails": ["Color: Transparent Grey", "Material: Nylon", "Shape: Irregular"]
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

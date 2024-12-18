var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Burberry BE4431U - Top Black On Vintage Check [Grey-Polarized]",
        "price": "$331.00",
        "description": "Introducing Burberry BE4431U sunglasses, a perfect blend of vintage charm and modern sophistication. The square shape frame is crafted from top black on vintage check colored front and temples paired with dark grey polarized lenses for an understated yet striking aesthetic. These sunglasses offer both style and functionality with their solid color lens treatment and polarized lenses that provide optimal protection against harmful UV rays. Elevated by the iconic Burberry check pattern in matching colors across the temple, these shades exude timeless elegance while seamlessly blending into any contemporary setting.",
        "productInfo": {
            "Style": "BE4431U",
            "Model Code": "BE4431U 412181 56-20",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey Polarized","Material: Cr39", "Technology: Solid Color"],
        "frameDetails": ["Color: Top Black On Vintage Check", "Material: Acetate", "Shape: Square"]
    },
    "1": {
        "title": "Burberry BE4431U - Top Black On Vintage Check [Grey]",
        "price": "$281.00",
        "description": "Introducing Burberry BE4431U, a cutting-edge fusion of past and present. The solid dark grey lenses exude timeless sophistication, while the square top black on vintage check frame adds an iconic touch of luxury. A shiny finish completes the picture, embodying traditional craftsmanship in contemporary design to create a truly exquisite aesthetic experience. Elevate your style with this unique fusion of heritage and modernity, where past meets present in perfect harmony.",
        "productInfo": {
            "Style": "BE4431U",
            "Model Code": "BE4431U 412187 56-2",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Polyamide Bio", "Technology: Solid Color"],
        "frameDetails": ["Color: Top Black On Vintage Check", "Material: Acetate", "Shape: Square"]
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
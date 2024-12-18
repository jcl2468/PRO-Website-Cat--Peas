var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Oakley OO9406 Sutro - Black Ink [Green]",
        "price": "$220.00",
        "description": "Oakley Latch™ Panel sunglasses are the perfect accessory for those who value style and functionality. The shield shape and polished clear O Matter™ frame, paired with prizm sapphire lenses, create a timeless design that will never go out of fashion. These shades offer both comfort and protection with high-performance lens technology that blocks 100% of all harmful UV rays as well as blue light up to 400nm.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-1835",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire","Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Clear", "Material: O_matter", "Shape: Shield"]
    },
    "1": {
        "title": "Oakley OO9406 Sutro - Clear [Blue]",
        "price": "$220.00",
        "description": "The Oakley Latch™ Panel in prizm 24k grey smoke is a new era of shield sunglasses. Designed for surfers and athletes, the frame features seamless lens integration and patented latch technology that allows you to wear it like a necklace when you don't need it. This unique feature lets you easily switch between looks by simply unlocking the panel on the side of your face and placing it around your neck when not in use. With its innovative design, this sunglass in prizm 24k grey smoke is crafted from premium material that provides maximum comfort and protection from harmful UV rays.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-0535",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm 24K","Material: Polycarbonate", "Technology: Gold", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Grey Smoke", "Material: O_matter", "Shape: Shield"]
    },
    "2": {
        "title": "Oakley OO9406 Sutro - Grey Ink [Green]",
        "price": "$220.00",
        "description": "Oakley Latch™ Panel is a new evolution of the latch system that has been embraced by surfers and snowboarders around the world. The matte black frame with prizm black lenses offers all-day comfort, while the shield shape provides optimal coverage for enhanced peripheral vision and protection. Engineered to seamlessly integrate with your life on and off the water, this sunglass features a cutout on the temple that allows you to easily clip it onto your shirt or jacket when you're ready to hit the waves or slopes again.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-0135",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Black","Material: Polycarbonate", "Technology: Grey", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Black", "Material: O_matter", "Shape: Shield"]
    },
    "3": {
        "title": "Oakley OO9406 Sutro - Matte Clear [Violet]",
        "price": "$220.00",
        "description": "Introducing Oakley Latch™ Panel sunglasses, a new era of performance and style. The shield lens design with matte clear frame delivers optimal coverage and protection from the elements, while prizm violet lenses enhance contrast and boost color vividness for an enhanced visual experience. Engineered with o matter material for durability and comfort, these shades feature latch technology to seamlessly integrate into your active lifestyle. Elevate your everyday routine with these sunglasses where form meets function for maximum utility across all environments.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-0235",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Violet","Material: Polycarbonate", "Technology: Violet", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Clear", "Material: O_matter", "Shape: Shield"]
    },
    "4": {
        "title": "Oakley OO9406 Sutro - Matte Carbon [Blue]",
        "price": "$220.00",
        "description": "Introducing Oakley Latch™ Panel, a shield lens design that redefines the meaning of fit. The O Matter™ frame is engineered for comfort and durability, while prizm snow sapphire lenses enhance contrast and definition to help you spot every detail on the mountain. With its low-profile, shield lens design, this matte grey smoke colored frame offers optimal coverage so you can stay focused on your next epic adventure.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-1235",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Snow Sapphire","Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Grey Smoke", "Material: O_matter", "Shape: Shield"]
    },
    "5": {
        "title": "Oakley OO9406 Sutro - Matte Carbon [Gold]",
        "price": "$220.00",
        "description": "Oakley Latch™ Panel are a new addition to the Oakley family. These shades, featuring a matte transparent navy color and shield shape, offer both style and functionality, with an integrated latch system for easy handling. The prizm sapphire lenses provide exceptional color contrast and clarity so you can always see what's ahead.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-0635",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire","Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Transparent Navy", "Material: O_matter", "Shape: Shield"]
    },
    "6": {
        "title": "Oakley OO9406 Sutro - Matte Cyan-Blue Colorship [Violet]",
        "price": "$220.00",
        "description": "Oakley Latch™ Panel are a new style that feature the innovative latch on front frame system. This design allows you to wear them like a regular pair of shades or attach them to your shirt for convenience. The shield lens shape provides maximum coverage and protection from the elements, while the olive ink color with prizm tungsten lenses adds style and functionality.",
        "productInfo": {
            "Style": "OO9404 Latch™ Panel",
            "Model Code": "OO9404-0335",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Tungsten","Material: Polycarbonate", "Technology: Brown", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Olive Ink", "Material: O_matter", "Shape: Shield"]
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

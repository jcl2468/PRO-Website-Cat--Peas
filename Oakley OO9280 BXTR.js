var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Oakley OO9280 BXTR - Clear [Blue]",
        "price": "$242.00",
        "description": "Elevate your performance with Oakley BXTR sunglasses, designed for athletes who push their limits. The shield shape in prizm sapphire offers an unobstructed field of view, while the o matter frame in clear adds durability and comfort. These shades are built to withstand rigorous training sessions and feature a polished finish that adds understated style to your look.",
        "productInfo": {
            "Style": "OO9280 BXTR",
            "Model Code": "OO9280-1239",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire","Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Transparent", "Material: O_matter", "Shape: Shield"]
    },
    "1": {
        "title": "Oakley OO9280 BXTR - Matte Black [Blue]",
        "price": "$242.00",
        "description": "Introducing Oakley BXTR, a new generation of shield sunglasses designed for those who dare to challenge the status quo. The matte black frame paired with prizm sapphire lenses exudes an attitude that embodies confidence and authenticity. With its o matter construction and shield shape, these shades are ready to take on anything that comes your way. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9280 BXTR",
            "Model Code": "OO9280 03-39",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire", "Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Black", "Material: O_matter", "Shape: Shield"]
    },
    "2": {
        "title": "Oakley OO9280 BXTR - Matte Black [Grey] Variant 1",
        "price": "$242.00",
        "description": "Oakley BXTR sunglasses are designed with a shield lens shape and matte black frame color, making them an instant icon of style. These sunglasses feature the innovative prizm black lens technology that fine-tunes colors for enhanced contrast and unprecedented detail across a variety of activities. Engineered with o matter material for all-day comfort and durability, these shades are ready to rock the scene in any setting. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9280 BXTR",
            "Model Code": "OO9280 05-39",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Black", "Material: Polycarbonate", "Technology: Grey", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Black", "Material: O_matter", "Shape: Shield"]
    },
    "3": {
        "title": "Oakley OO9280 BXTR - Matte Black [Grey] Variant 2",
        "price": "$242.00",
        "description": "Introducing the Oakley BXTR, a shield lens design that pushes boundaries and redefines what's possible in sunglass performance. Engineered for everyday wear, these shades feature an innovative o matter frame material that offers both comfort and durability. The matte black colorway adds a touch of sophistication to this cutting-edge frame design, while prizm black lenses enhance contrast and boost visibility across all environments. Elevate your style with a pair of sunglasses that blends fashion-forward aesthetics with advanced technology for optimal vision. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9280 BXTR",
            "Model Code": "OO9280-0139",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Black", "Material: Polycarbonate", "Technology: Grey", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Black", "Material: O_matter", "Shape: Shield"]
    },
    "4": {
        "title": "Oakley OO9280 BXTR - Matte Desert Tan [Orange]",
        "price": "$242.00",
        "description": "Introducing Oakley BXTR, a new generation of performance sunglasses engineered for action. This cutting-edge shield style boasts an innovative design and high-tech features that enhance visibility in any setting. The matte desert tan color creates a sleek, modern aesthetic, while the o matter frame delivers durability and comfort. Engineered to meet the demands of elite athletes, these shades boast a shield lens shape for maximum coverage and prizm Ruby lens technology for enhanced contrast and depth perception. Elevate your game with this fusion of artistry and innovation where form meets function with the added benefit of prizm Ruby lenses. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9280 BXTR",
            "Model Code": "OO9280 04-39",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Ruby", "Material: Polycarbonate", "Technology: Orange", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Brown", "Material: O_matter", "Shape: Shield"]
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

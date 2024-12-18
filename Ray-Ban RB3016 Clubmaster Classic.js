var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Black On Gold [Green]",
        "price": "$180.00",
        "description":"Ray-Ban Clubmaster Classic is a new take on an iconic model. The square shape and acetate frame are designed to ensure comfort and durability. The classic g-15 green lenses provide 100% UV protection, while the polarized option offers even more glare reduction. With its polished black finish, this square-shaped frame is perfect for those who want to make a statement without being too flashy.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 W0365 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: G-15 Green","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Black On Gold", "Material: Acetate", "Shape: Square"]
    },
    "1": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Grey On Black [Green-Polarized]",
        "price": "$230.00",
        "description":"Ray-Ban Clubmaster Classic is a modern take on the original iconic style. These sunglasses are designed with square lenses and an acetate frame in a black on gold color combination. The classic G-15 green lens treatment adds a pop of color to your look, while maintaining the timeless appeal of this square-framed design.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 901/58 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: G-15 Green","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Black On Gold", "Material: Acetate", "Shape: Square"]
    },
    "2": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Grey On Black [Grey]",
        "price": "$180.00",
        "description":"Ray-Ban Clubmaster Classic is a modern take on the original design from 1957. This unisex square frame is crafted in acetate and features dark grey lenses. The polished finish on the front and temples adds an extra touch of sophistication, while the grey on black color combination makes these shades perfect for any occasion.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 1367B1 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Grey On Black", "Material: Acetate", "Shape: Square"]
    },
    "3": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Gunmetal Blue [Grey]",
        "price": "$180.00",
        "description":"Ray-Ban Clubmaster are a modern take on the iconic design. These sunglasses feature a square shape and are crafted from acetate material for comfort and durability. The solid dark grey lens color provides an alternative look to the traditional black frame, while the gunmetal blue frame adds some extra style to this model.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 1278B1 49-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Dark Grey","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Gunmetal Blue", "Material: Acetate", "Shape: Square"]
    },
    "4": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Tortoise On Gold [Green-Polarized]",
        "price": "$230.00",
        "description":"Ray-Ban Clubmaster Classic is a stylish, square-shaped unisex frame crafted in acetate. This frame is designed with classic g-15 green polarized lenses and features a polished red havana color finish on the front and temples. The square shape will add an extra touch of sophistication to your look.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 990/58 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: G-15 Green","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Tortoise On Gold", "Material: Acetate", "Shape: Square"]
    },
    "5": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Tortoise On Gold [Green]",
        "price": "$230.00",
        "description":"Ray-Ban Clubmaster Classic is a stylish addition to the iconic collection. With its square frame shape and gold tortoise on gold color, these sunglasses exude vintage charm. The classic green lenses provide optimal visual clarity, while the g-15 lens treatment adds an extra touch of authenticity to this timeless design.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 W0366 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: G-15 Green","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Tortoise On Gold", "Material: Acetate", "Shape: Square"]
    },
    "6": {
        "title": "Ray-Ban RB3016 Clubmaster Classic - Wrinkled Black On Black [Black-Polarized]",
        "price": "$230.00",
        "description":"Ray-Ban Clubmaster Classic is a square-shaped frame that will add an extra touch of style to your look. With its acetate construction, this unisex model is designed for comfort and durability. The black polarized lenses provide optimal vision and protection from the sun's rays, while the wrinkled black on black finish adds an edgy touch to these shades.",
        "productInfo": {
            "Style": "RB3016 Clubmaster Classic",
            "Model Code": "RB3016 130548 51-21",
            "Made in": "Italy"
        },
        "lensDetails": ["Color: Black","Material: Crystal", "Technology: Solid Color"],
        "frameDetails": ["Color: Wrinkled Black On Black", "Material: Acetate", "Shape: Square"]
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

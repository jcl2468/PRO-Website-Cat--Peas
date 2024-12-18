var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var variantSelect = document.getElementById("variantSelect");

// Product data
    var productData = {
    "0": {
        "title": "Oakley OO9406 Sutro - Black Ink [Green]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro sunglasses, a unisex design engineered for dynamic urban lifestyles. The polished black ink frame, coupled with prizm jade lenses, offers unparalleled clarity and contrast for an enhanced visual experience. Designed with a sleek rectangle shape, these shades provide optimal coverage and peripheral vision. Crafted from resilient o matter material, these sunglasses are built to withstand diverse weather conditions, ensuring a perfect blend of style and performance for those who seek cutting-edge design in their eyewear. Elevate your vision with Oakley Sutro: where urban flair meets exceptional clarity. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0337",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Jade","Material: Polycarbonate", "Technology: Green", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Black Ink", "Material: O_matter", "Shape: Shield"]
    },
    "1": {
        "title": "Oakley OO9406 Sutro - Clear [Blue]",
        "price": "$192.00",
        "description": "Oakley Sutro is a new addition to the Shield family, with an edge design that stands out from the crowd. The o matter frame material is paired with prizm lens technology in prizm sapphire color for optimized light transmission and enhanced color vividness. This shield shape frame features a polished finish on the front and temples, adding an extra touch of luxury to your look with its vibrant prizm sapphire hue and clear frame color. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-A337",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire","Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Clear", "Material: O_matter", "Shape: Shield"]
    },
    "2": {
        "title": "Oakley OO9406 Sutro - Grey Ink [Green]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro, a frame that reimagines the boundary between sport and style. Elevated design meets performance innovation in this unisex model crafted from o matter material for all-day comfort and durability. The rectangle lens shape paired with the prizm Road Jade color and Grey Ink frame creates an aesthetic that seamlessly blends fashion-forward attitude with active appeal. Elevating your look with its modern edge, Oakley Sutro is ready to conquer your next adventure in style and comfort with its signature prizm Road Jade lenses. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-1037",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Road Jade","Material: Polycarbonate", "Technology: Green", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Grey Ink", "Material: O_matter", "Shape: Shield"]
    },
    "3": {
        "title": "Oakley OO9406 Sutro - Matte Black [Violet]",
        "price": "$192.00",
        "description": "Oakley Sutro is a new addition to the lifestyle shield collection, featuring a design inspired by the spirit of cycling. The matte black frame paired with prizm road lens offers optimal color and contrast so you can seize every moment on your ride. These shades are engineered for performance and designed for style, making them perfect for those who love to challenge their limits. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0837",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Road", "Material: Polycarbonate", "Technology: Violet", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Black", "Material: Injected", "Shape: Shield"]
    },
    "4": {
        "title": "Oakley OO9406 Sutro - Matte Carbon [Blue]",
        "price": "$192.00",
        "description": "Oakley Sutro is a style that captures the essence of sports performance. Designed to handle any condition, it features a matte carbon frame and prizm sapphire lenses that heighten contrast and enhance color for optimized vision. With its unique rectangle shape, this unisex frame offers an adaptable fit for a wide range of face shapes and sizes.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-9537",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire", "Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Carbon", "Material: O_matter", "Shape: Shield"]
    },
    "5": {
        "title": "Oakley OO9406 Sutro - Matte Carbon [Gold]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro, a new addition to the lifestyle category that taps into the spirit of adventure. With a matte carbon frame and prizm 24k lenses, this model captures the essence of urban exploration. The rectangle shape design makes it an everyday essential for those who seek both style and substance. Elevate your look with these shades crafted with o matter material for comfort and durability. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0537",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm 24K","Material: Polycarbonate", "Technology: Gold", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Carbon", "Material: O_matter", "Shape: Shield"]
    },
    "6": {
        "title": "Oakley OO9406 Sutro - Matte Cyan-Blue Colorship [Violet]",
        "price": "$192.00",
        "description": "Oakley Sutro are a new shield lens shape that matches the attitude of modern urban riders. With Prizm Road lens technology for unparalleled color and contrast, this style optimizes visibility in any light condition. The matte cyan/blue colorshift frame paired with Prizm Road lenses provides optimal brightness control and clarity on sunny days, while the low-light version offers enhanced definition and contrast on overcast or cloudy days.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-C137",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Road", "Material: Polycarbonate", "Technology: Violet", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte Cyan/Blue Colorshift", "Material: O_matter", "Shape: Shield"]
    },
    "7": {
        "title": "Oakley OO9406 Sutro - Matte Transparent Light Curry [Brown]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro, a new shield frame that reimagines the spirit of adventure. With a matte transparent light curry color and a golf lens tint, specifically the Prizm Dark Golf lens, this style elevates your performance while embracing an urban aesthetic. Engineered for cyclists, these shades feature Prizm lenses designed to enhance contrast and boost color on the road or trail. Experience the fusion of sport and style with Oakley Sutro sunglasses where high-performance meets cutting-edge design.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-B937",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Dark Golf", "Material: Polycarbonate", "Technology: Brown", "Lens Protextion Index: 2N"],
        "frameDetails": ["Color: Matte Transparent Light Curry", "Material: O_matter", "Shape: Shield"]
    },
    "8": {
        "title": "Oakley OO9406 Sutro - Matte White [Violet]",
        "price": "$192.00",
        "description": "Experience the evolution of cycling with Oakley Sutro, a frame that pushes design to the limit while optimizing performance. The matte white color and rectangle shape exude sophistication, while o matter material ensures durability and comfort. Elevating your style on two wheels, these shades feature prizm road lens technology for enhanced visibility in any lighting condition - perfect for cyclists who want to stay safe and stylish. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0637",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Road", "Material: Polycarbonate", "Technology: Violet", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Matte White", "Material: O_matter", "Shape: Shield"]
    },
    "9": {
        "title": "Oakley OO9406 Sutro - Polished Black [Blue]",
        "price": "$192.00",
        "description": "Experience the evolution of design with Oakley Sutro sunglasses. These shades are crafted with a polished black frame and feature prizm lens technology in a striking sapphire color. The o matter frame material delivers all-day comfort and durability, while the rectangle shape creates a timeless style statement. Elevate your look with these premium shades that seamlessly blend performance and style for an unmatched fusion of aesthetics and functionality, featuring prizm sapphire lenses that provide enhanced contrast and vivid colors. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-9037",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire", "Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Polished Black", "Material: O_matter", "Shape: Shield"]
    },
    "10": {
        "title": "Oakley OO9406 Sutro - Polished Black [Grey]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro, a performance-driven shield lens crafted with a style that complements any ride. This edition features polished black frame color with prizm black lens technology, designed to enhance contrast and boost color for an optimized visual experience. Engineered for road cyclists and urban commuters alike, these sunglasses offer optimal coverage and clarity so you can stay focused on the road ahead. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0137",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Black","Material: Polycarbonate", "Technology: Grey", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Polished Black", "Material: Injected", "Shape: Shield"]
    },
    "11": {
        "title": "Oakley OO9406 Sutro - Sky Blue [Blue]",
        "price": "$192.00",
        "description": "Introducing Oakley Sutro, a pinnacle of performance crafted with a polished sky blue frame and prizm sapphire lens. Designed for athletes chasing new frontiers, this unisex style pushes limits with a rectangle shape and o matter frame material. Elevate your game with the innovative technology that optimizes clarity and contrast in any condition. Embrace the future of sports performance where form meets function in perfect harmony. Available with lens contrast enhancement technology.",
        "productInfo": {
            "Style": "OO9406 Sutro",
            "Model Code": "OO9406-0737",
            "Made in": "United States"
        },
        "lensDetails": ["Color: Prizm Sapphire", "Material: Polycarbonate", "Technology: Blue", "Lens Protextion Index: 3N"],
        "frameDetails": ["Color: Sky Blue", "Material: O_matter", "Shape: Shield"]
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

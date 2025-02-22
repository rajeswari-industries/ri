const products = [
    { id: 1, image: 'images/minisl.png', title: "Shiva Lingam(1cm)", price: 150, description: "Material: Bronze mixed Panchalohas, Height: 1 cm (approx.)" },
    { id: 2, image: 'images/minisl2.png', title: "Shiva Lingam(2.5cm)", price: 300, description: "Material: Bronze mixed Panchalohas, Height: 2.5 cm (approx.)" },
    { id: 3, image: 'images/minisl3.png', title: "Shiva Lingam(4cm)", price: 600, description: "Material: Bronze mixed Panchalohas, Height: 4 cm (approx.)" },
    { id: 4, image: 'images/shivalingam.png', title: "Shiva Lingam(5.5cm)", price: 1200, description: "Material: Bronze mixed Panchalohas, Height: 5.5 cm (approx.)" },

    { id: 5, image: 'images/150.png', title: "Mini Hand Bell(150gms)", price: 450, description: "Material: Bronze mixed Panchalohas, Weight: 150 grams, Height: 10 cm (approx.), Base Diameter: 6 cm (approx.)" },
    { id: 6, image: 'images/350.png', title: "Small Hand Bell(350gms)", price: 750, description: "Material: Bronze mixed Panchalohas, Weight: 350 grams, Height: 14 cm (approx.), Base Diameter: 6 cm (approx.)" },
    { id: 7, image: 'images/500.png', title: "Hand Bell(500gms)", price: 1100, description: "Material: Bronze mixed Panchalohas, Weight: 500 grams, Height: 17.5 cm (approx.), Base Diameter: 7.5 cm (approx.)" },
    { id: 8, image: 'images/1.1kg.png', title: "Hand Bell(1kg)", price: 2100, description: "Material: Bronze mixed Panchalohas, Weight: 1 kilogram, Height: 22 cm (approx.), Base Diameter: 10 cm (approx.)" },

    { id: 9, image: 'images/6kg.png', title: "Temple Bell(1kg)", price: 1800, description: "Material: Bronze mixed Panchalohas, Weight: 1 kg, Height: 8 cm (approx.), Diameter: 10 cm (approx.)" },
    { id: 10, image: 'images/6kg.png', title: "Temple Bell(2kg)", price: 3600, description: "Material: Bronze mixed Panchalohas, Weight: 2 kg, Height: 10 cm (approx.), Base Diameter: 13 cm (approx.)" },
    { id: 11, image: 'images/6kg.png', title: "Temple Bell(3kg)", baseWeight: 3, description: "Material: Bronze mixed Panchalohas, Weight: 3 kg, Height: 13 cm (approx.), Base Diameter: 15 cm (approx.)" },
    { id: 12, image: 'images/6kg.png', title: "Temple Bell(4kg)", baseWeight: 4, description: "Material: Bronze mixed Panchalohas, Weight: 4 kg, Height: 15 cm (approx.), Base Diameter: 18 cm (approx.)" },
    { id: 13, image: 'images/6kg.png', title: "Temple Bell(5kg)", baseWeight: 5, description: "Material: Bronze mixed Panchalohas, Weight: 5 kg, Height: 16 cm (approx.), Base Diameter: 20 cm (approx.)" },
    { id: 14, image: 'images/6kg.png', title: "Temple Bell(6kg)", baseWeight: 6, description: "Material: Bronze mixed Panchalohas, Weight: 6 kg, Height: 16.5 cm (approx.), Base Diameter: 20.5 cm (approx.)" },
    { id: 15, image: 'images/6kg.png', title: "Temple Bell(7kg)", baseWeight: 7, description: "Material: Bronze mixed Panchalohas, Weight: 7 kg, Height: 17 cm (approx.), Base Diameter: 21 cm (approx.)" },
    { id: 16, image: 'images/6kg.png', title: "Temple Bell(8kg)", baseWeight: 8, description: "Material: Bronze mixed Panchalohas, Weight: 8 kg, Height: 19 cm (approx.), Base Diameter: 23 cm (approx.)" },
    { id: 17, image: 'images/9kg.png', title: "Temple Bell(10kg)", baseWeight: 10, description: "Material: Bronze mixed Panchalohas, Weight: 10 kg, Height: 19.5 cm (approx.), Base Diameter: 25 cm (approx.)" },
    { id: 18, image: 'images/9kg.png', title: "Temple Bell(11kg)", baseWeight: 11, description: "Material: Bronze mixed Panchalohas, Weight: 11 kg, Height: 20 cm (approx.), Base Diameter: 26 cm (approx.)" },
    { id: 19, image: 'images/9kg.png', title: "Temple Bell(16kg)", baseWeight: 16, description: "Material: Bronze mixed Panchalohas, Weight: 16 kg, Height: 24 cm (approx.), Base Diameter: 30 cm (approx.)" },
    { id: 20, image: 'images/9kg.png', title: "Temple Bell(18kg)", baseWeight: 18, description: "Material: Bronze mixed Panchalohas, Weight: 18 kg, Height: 26 cm (approx.), Base Diameter: 31 cm (approx.)" },
    { id: 21, image: 'images/bell.png', title: "Temple Bell(23kg)", baseWeight: 23, description: "Material: Bronze mixed Panchalohas, Weight: 23 kg, Height: 27 cm (approx.), Base Diameter: 34 cm (approx.)" },
    { id: 22, image: 'images/bell.png', title: "Temple Bell(33kg)", baseWeight: 33, description: "Material: Bronze mixed Panchalohas, Weight: 33 kg, Height: 33 cm (approx.), Base Diameter: 39 cm (approx.)" },
    { id: 23, image: 'images/bell.png', title: "Temple Bell(45kg)", baseWeight: 45, description: "Material: Bronze mixed Panchalohas, Weight: 45 kg, Height: 38 cm (approx.), Base Diameter: 46 cm (approx.)" },
    { id: 24, image: 'images/bell.png', title: "Temple Bell(100kg)", baseWeight: 100, description: "Material: Bronze mixed Panchalohas, Weight: 100 kg, Height: 45.7 cm (approx.), Base Diameter: 54 cm (approx.)" },

    { id: 25, image: 'images/jayaganta1.png', title: "Jaya Ganta(500gms)", price: 750, description: "Material: Bronze mixed Panchalohas, Weight: 500 gms (approx.), Diameter: 6 inches (approx.)" },
    { id: 26, image: 'images/jayaganta2.png', title: "Jaya Ganta(1500gms)", price: 2250, description: "Material: Bronze mixed Panchalohas, Weight: 1.5 kg (approx.), Diameter: 9 inches (approx.)" }
];


const METAL_PRICE_PER_KG = 1600;
const WOOD_PRICE_PER_KG = 1800;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        let priceHtml = '';

        // Dynamically calculate price for Temple Bells based on weight
        if (product.title.includes("Temple Bell") && product.baseWeight) {
            const metalPrice = product.baseWeight * METAL_PRICE_PER_KG;
            const woodPrice = product.baseWeight * WOOD_PRICE_PER_KG;

            priceHtml = `
                <select id="material-${product.id}" class="form-control" onchange="updatePrice(${product.id})">
                    <option value="metal" selected>Metal - ₹${metalPrice.toLocaleString("en-IN")}</option>
                    <option value="wood">Wood - ₹${woodPrice.toLocaleString("en-IN")}</option>
                </select>
                <p class="card-text mt-2" id="price-${product.id}">Price: ₹${metalPrice.toLocaleString("en-IN")}</p>
            `;
        } else {
            priceHtml = `<p class="card-text mt-2" id="price-${product.id}">Price: ₹${product.price.toLocaleString("en-IN")}</p>`;
        }

        productList.innerHTML += `
            <div class="col-6 col-md-3">
                <div class="card p-2">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="product-description" id="desc-${product.id}" style="display: none;">${product.description}</p>
                        ${priceHtml}
                        <button class="btn btn-secondary show-more" onclick="toggleDescription(${product.id})">Show More</button>
                    </div>
                </div>
            </div>
        `;
    });
}


renderProducts();
updateCart();


function filterProducts() {
    const searchText = document.getElementById("search-box").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
}

function toggleDescription(productId) {
    const descElement = document.getElementById(`desc-${productId}`);
    const button = document.querySelector(`button[onclick="toggleDescription(${productId})"]`);

    if (descElement.style.display === "none" || descElement.style.display === "") {
        descElement.style.display = "block";
        button.innerText = "Show Less";
    } else {
        descElement.style.display = "none";
        button.innerText = "Show More";
    }
}

function updatePrice(productId) {
    const product = products.find(p => p.id === productId);
    const material = document.getElementById(`material-${productId}`).value;
    const priceElement = document.getElementById(`price-${productId}`);

    if (product.baseWeight) {
        const price = (material === "metal")
            ? product.baseWeight * METAL_PRICE_PER_KG
            : product.baseWeight * WOOD_PRICE_PER_KG;
            priceElement.innerText = `Price: ₹${price.toLocaleString("en-IN")}`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let material = "N/A";
    let price = product.price;

    if (product.baseWeight) {
        material = document.getElementById(`material-${productId}`).value;
        price = (material === "metal")
            ? product.baseWeight * METAL_PRICE_PER_KG
            : product.baseWeight * WOOD_PRICE_PER_KG;
    }

    const existingItem = cart.find(item => item.id === productId && item.material === material);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, material, price, quantity: 1 });
    }

    updateCart();
}


function updateCart() {
    document.getElementById("cart-count").innerText = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="cart-item-info d-flex align-items-center">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="ml-2">
                        <h6>${item.title} (${item.material})</h6>
                        <div class="quantity-controls">
                            <button onclick="decreaseQuantity(${item.id}, '${item.material}')">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="increaseQuantity(${item.id}, '${item.material}')">+</button>
                        </div>
                    </div>
                </div>
               <span>&#8377; ${(item.price * item.quantity).toLocaleString("en-IN")}</span>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id}, '${item.material}')">X</button>
            </li>
        `;
    });

    cartTotal.innerText = total;
}

function increaseQuantity(productId, material) {
    const item = cart.find(i => i.id === productId && i.material === material);
    if (item) {
        item.quantity += 1;
    }
    updateCart();
}

function decreaseQuantity(productId, material) {
    const item = cart.find(i => i.id === productId && i.material === material);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    }
    updateCart();
}


function removeFromCart(productId, material) {
    cart = cart.filter(item => !(item.id === productId && item.material === material));
    updateCart();
}


function clearCart() {
    cart = [];
    updateCart();
}


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("phone1").addEventListener("click", function () {
        window.location.href = "tel:+919440520050";
    });

    document.getElementById("phone2").addEventListener("click", function () {
        window.location.href = "tel:+919440865004";
    });

    document.getElementById("email").addEventListener("click", function () {
        window.location.href = "mailto:rajeswariind@ymail.com";
    });

    document.getElementById("location").addEventListener("click", function () {
        window.open("https://maps.app.goo.gl/JQgqVdGzjSAGSCLB9", "_blank");
    });
});

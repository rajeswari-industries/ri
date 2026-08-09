const products = [
    {
        id: 1,
        image: 'images/minisl.png',
        title: "Shiva Lingam(1cm)",
        category: "Shivalingas",
        description: "Material: Bronze mixed Panchalohas, Height: 1 cm (approx.)"
    },
    {
        id: 2,
        image: 'images/minisl2.png',
        title: "Shiva Lingam(2.5cm)",
        category: "Shivalingas",
        description: "Material: Bronze mixed Panchalohas, Height: 2.5 cm (approx.)"
    },
    {
        id: 3,
        image: 'images/minisl3.png',
        title: "Shiva Lingam(4cm)",
        category: "Shivalingas",
        description: "Material: Bronze mixed Panchalohas, Height: 4 cm (approx.)"
    },
    {
        id: 4,
        image: 'images/shivalingam.png',
        title: "Shiva Lingam(5.5cm)",
        category: "Shivalingas",
        description: "Material: Bronze mixed Panchalohas, Height: 5.5 cm (approx.)"
    },
    {
        id: 5,
        image: 'images/150.png',
        title: "Mini Hand Bell(150gms)",
        category: "Hand Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 150 grams, Height: 10 cm (approx.), Base Diameter: 6 cm (approx.)"
    },
    {
        id: 6,
        image: 'images/350.png',
        title: "Small Hand Bell(350gms)",
        category: "Hand Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 350 grams, Height: 14 cm (approx.), Base Diameter: 6 cm (approx.)"
    },
    {
        id: 7,
        image: 'images/500.png',
        title: "Hand Bell(500gms)",
        category: "Hand Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 500 grams, Height: 17.5 cm (approx.), Base Diameter: 7.5 cm (approx.)"
    },
    {
        id: 8,
        image: 'images/1.1kg.png',
        title: "Hand Bell(1kg)",
        category: "Hand Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 1 kilogram, Height: 22 cm (approx.), Base Diameter: 10 cm (approx.)"
    },
    {
        id: 9,
        image: 'images/6kg.png',
        title: "Temple Bell(1kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 1 kg, Height: 8 cm (approx.), Diameter: 10 cm (approx.)"
    },
    {
        id: 10,
        image: 'images/6kg.png',
        title: "Temple Bell(2kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 2 kg, Height: 10 cm (approx.), Base Diameter: 13 cm (approx.)"
    },
    {
        id: 11,
        image: 'images/6kg.png',
        title: "Temple Bell(3kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 3 kg, Height: 13 cm (approx.), Base Diameter: 15 cm (approx.)"
    },
    {
        id: 12,
        image: 'images/6kg.png',
        title: "Temple Bell(4kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 4 kg, Height: 15 cm (approx.), Base Diameter: 18 cm (approx.)"
    },
    {
        id: 13,
        image: 'images/6kg.png',
        title: "Temple Bell(5kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 5 kg, Height: 16 cm (approx.), Base Diameter: 20 cm (approx.)"
    },
    {
        id: 14,
        image: 'images/6kg.png',
        title: "Temple Bell(6kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 6 kg, Height: 16.5 cm (approx.), Base Diameter: 20.5 cm (approx.)"
    },
    {
        id: 15,
        image: 'images/6kg.png',
        title: "Temple Bell(7kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 7 kg, Height: 17 cm (approx.), Base Diameter: 21 cm (approx.)"
    },
    {
        id: 16,
        image: 'images/6kg.png',
        title: "Temple Bell(8kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 8 kg, Height: 19 cm (approx.), Base Diameter: 23 cm (approx.)"
    },
    {
        id: 17,
        image: 'images/9kg.png',
        title: "Temple Bell(10kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 10 kg, Height: 19.5 cm (approx.), Base Diameter: 25 cm (approx.)"
    },
    {
        id: 18,
        image: 'images/9kg.png',
        title: "Temple Bell(11kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 11 kg, Height: 20 cm (approx.), Base Diameter: 26 cm (approx.)"
    },
    {
        id: 19,
        image: 'images/9kg.png',
        title: "Temple Bell(16kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 16 kg, Height: 24 cm (approx.), Base Diameter: 30 cm (approx.)"
    },
    {
        id: 20,
        image: 'images/9kg.png',
        title: "Temple Bell(18kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 18 kg, Height: 26 cm (approx.), Base Diameter: 31 cm (approx.)"
    },
    {
        id: 21,
        image: 'images/bell.png',
        title: "Temple Bell(23kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 23 kg, Height: 27 cm (approx.), Base Diameter: 34 cm (approx.)"
    },
    {
        id: 22,
        image: 'images/bell.png',
        title: "Temple Bell(33kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 33 kg, Height: 33 cm (approx.), Base Diameter: 39 cm (approx.)"
    },
    {
        id: 23,
        image: 'images/bell.png',
        title: "Temple Bell(45kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 45 kg, Height: 38 cm (approx.), Base Diameter: 46 cm (approx.)"
    },
    {
        id: 24,
        image: 'images/bell.png',
        title: "Temple Bell(100kg)",
        category: "Temple Bells",
        description: "Material: Bronze mixed Panchalohas, Weight: 100 kg, Height: 45.7 cm (approx.), Base Diameter: 54 cm (approx.)"
    },
    {
        id: 25,
        image: 'images/jayaganta1.png',
        title: "Jaya Ganta(500gms)",
        category: "Jaya Gantalu",
        description: "Material: Bronze mixed Panchalohas, Weight: 500 gms (approx.), Diameter: 6 inches (approx.)"
    },
    {
        id: 26,
        image: 'images/jayaganta2.png',
        title: "Jaya Ganta(1500gms)",
        category: "Jaya Gantalu",
        description: "Material: Bronze mixed Panchalohas, Weight: 1.5 kg (approx.), Diameter: 9 inches (approx.)"
    },
    {
        id: 27,
        image: 'images/holder.jpeg',
        title: "Brass Utility Collection",
        category: "Brass Utility Products",
        description: "Includes Paper Weight, Pen Stand and Agarbatti Stand. Material: Brass, suitable for office, home and traditional use."
    }
];

let activeCategory = "all";

document.addEventListener("DOMContentLoaded", function () {
    renderProducts(products);
    setupBackToTop();
});

function filterProducts() {
    const searchBox = document.getElementById("search-box");
    if (!searchBox) return;
    const search = searchBox.value.trim().toLowerCase();
    let filtered = products;

    if (activeCategory !== "all") {
        filtered = filtered.filter(product => product.category === activeCategory);
    }

    if (search !== "") {
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
        );
    }

    renderProducts(filtered);
}

function filterCategory(category) {
    activeCategory = category;
    filterProducts();
}

function renderProducts(list) {
    const container = document.getElementById("product-sections");
    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
<div class="no-results">
<div class="no-results-icon">
<i class="fa-solid fa-box-open"></i>
</div>
<h3>No products found</h3>
<p>Try another product name.</p>
<button class="reset-search" onclick="clearAllFilters()">View All Products</button>
</div>`;
        return;
    }

    const categories = [...new Set(list.map(product => product.category))];

    categories.forEach((category, index) => {
        const items = list.filter(product => product.category === category);
        const section = document.createElement("section");
        section.className = "category-section";

        section.innerHTML = `
<div class="category-heading">
<div>
<span class="category-number">${String(index + 1).padStart(2, "0")}</span>
<h3>${category}</h3>
</div>
<span class="product-count">${items.length} ${items.length === 1 ? "Product" : "Products"}</span>
</div>
<div class="product-grid"></div>`;

        const grid = section.querySelector(".product-grid");

        items.forEach(product => {
            const card = document.createElement("article");
            card.className = "product-card";

            card.innerHTML = `
<div class="product-image-wrap" onclick="openModal(${product.id})">
<img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
<span class="image-badge"><i class="fa-solid fa-eye"></i></span>
</div>
<div class="product-content">
<span class="product-category">${product.category}</span>
<h4>${product.title}</h4>
<p>${shortDescription(product.description)}</p>
<button class="view-product" onclick="openModal(${product.id})">
<span>View Details</span>
<i class="fa-solid fa-arrow-right"></i>
</button>
</div>`;

            grid.appendChild(card);
        });

        container.appendChild(section);
    });
}

function shortDescription(text) {
    if (text.length <= 85) return text;
    return text.substring(0, 85) + "...";
}

function openModal(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const modal = document.getElementById("product-modal");
    if (!modal) return;

    const image = document.getElementById("modal-image");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (image) {
        image.src = product.image;
        image.alt = product.title;
    }

    if (title) {
        title.innerText = product.title;
    }

    if (description) {
        description.innerHTML = `
<span class="modal-category">${product.category}</span>
<span class="modal-description-text">${product.description}</span>`;
    }

    const whatsapp = document.getElementById("modal-whatsapp");

    if (whatsapp) {
        const message = `Hello Rajeswari Industries, I am interested in ${product.title}. Please share more details.`;
        whatsapp.href = "https://wa.me/919440520050?text=" + encodeURIComponent(message);
    }

    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal() {
    const modal = document.getElementById("product-modal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

document.addEventListener("click", function (event) {
    const modal = document.getElementById("product-modal");
    if (modal && event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

function clearAllFilters() {
    activeCategory = "all";
    const search = document.getElementById("search-box");
    if (search) search.value = "";
    renderProducts(products);
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobileNav");
    if (!menu) return;
    menu.classList.toggle("open");
}

function closeMobileMenu() {
    const menu = document.getElementById("mobileNav");
    if (!menu) return;
    menu.classList.remove("open");
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobileNav");
    const toggle = document.querySelector(".mobile-toggle");
    if (!menu || !toggle) return;

    if (menu.classList.contains("open") && !menu.contains(event.target) && !toggle.contains(event.target)) {
        closeMobileMenu();
    }
});

function setupBackToTop() {
    const button = document.getElementById("back-to-top");
    if (!button) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });
}

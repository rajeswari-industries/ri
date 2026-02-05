const products = [
  // Shivalingas
  { id: 1, image: 'images/minisl.png', title: "Shiva Lingam (1cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 1 cm" },
  { id: 2, image: 'images/minisl2.png', title: "Shiva Lingam (2.5cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 2.5 cm" },
  { id: 3, image: 'images/minisl3.png', title: "Shiva Lingam (4cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 4 cm" },
  { id: 4, image: 'images/shivalingam.png', title: "Shiva Lingam (5.5cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 5.5 cm" },

  // Hand Bells
  { id: 5, image: 'images/150.png', title: "Mini Hand Bell (150g)", category: "Hand Bells", description: "Weight: 150g" },
  { id: 6, image: 'images/350.png', title: "Hand Bell (350g)", category: "Hand Bells", description: "Weight: 350g" },
  { id: 7, image: 'images/500.png', title: "Hand Bell (500g)", category: "Hand Bells", description: "Weight: 500g" },
  { id: 8, image: 'images/1.1kg.png', title: "Hand Bell (1kg)", category: "Hand Bells", description: "Weight: 1kg" },

  // Temple Bells (FULL LIST)
  { id: 9, image: 'images/6kg.png', title: "Temple Bell (1kg)", category: "Temple Bells", description: "Weight: 1kg" },
  { id: 10, image: 'images/6kg.png', title: "Temple Bell (2kg)", category: "Temple Bells", description: "Weight: 2kg" },
  { id: 11, image: 'images/6kg.png', title: "Temple Bell (3kg)", category: "Temple Bells", description: "Weight: 3kg" },
  { id: 12, image: 'images/6kg.png', title: "Temple Bell (4kg)", category: "Temple Bells", description: "Weight: 4kg" },
  { id: 13, image: 'images/6kg.png', title: "Temple Bell (5kg)", category: "Temple Bells", description: "Weight: 5kg" },
  { id: 14, image: 'images/6kg.png', title: "Temple Bell (6kg)", category: "Temple Bells", description: "Weight: 6kg" },
  { id: 15, image: 'images/6kg.png', title: "Temple Bell (7kg)", category: "Temple Bells", description: "Weight: 7kg" },
  { id: 16, image: 'images/6kg.png', title: "Temple Bell (8kg)", category: "Temple Bells", description: "Weight: 8kg" },
  { id: 17, image: 'images/9kg.png', title: "Temple Bell (10kg)", category: "Temple Bells", description: "Weight: 10kg" },
  { id: 18, image: 'images/9kg.png', title: "Temple Bell (11kg)", category: "Temple Bells", description: "Weight: 11kg" },
  { id: 19, image: 'images/9kg.png', title: "Temple Bell (16kg)", category: "Temple Bells", description: "Weight: 16kg" },
  { id: 20, image: 'images/9kg.png', title: "Temple Bell (18kg)", category: "Temple Bells", description: "Weight: 18kg" },
  { id: 21, image: 'images/bell.png', title: "Temple Bell (23kg)", category: "Temple Bells", description: "Weight: 23kg" },
  { id: 22, image: 'images/bell.png', title: "Temple Bell (33kg)", category: "Temple Bells", description: "Weight: 33kg" },
  { id: 23, image: 'images/bell.png', title: "Temple Bell (45kg)", category: "Temple Bells", description: "Weight: 45kg" },
  { id: 24, image: 'images/bell.png', title: "Temple Bell (100kg)", category: "Temple Bells", description: "Weight: 100kg" },

  // Jaya Gantalu
  { id: 25, image: 'images/jayaganta1.png', title: "Jaya Ganta (500g)", category: "Jaya Gantalu", description: "Weight: 500g" },
  { id: 26, image: 'images/jayaganta2.png', title: "Jaya Ganta (1.5kg)", category: "Jaya Gantalu", description: "Weight: 1.5kg" },

  // Bushes
  { id: 27, image: 'images/bushes.png', title: "Bushes", category: "Bushes", description: "Size based on order" }
];

function renderSections(list = products) {
  const container = document.getElementById("product-sections");
  container.innerHTML = "";

  const categories = [...new Set(list.map(p => p.category))];

  categories.forEach(cat => {
    const items = list.filter(p => p.category === cat);

    container.innerHTML += `
      <div class="category-section">
        <h4 class="category-title">${cat}</h4>
        <div class="horizontal-scroll">
          ${items.map(p => `
            <div class="product-card">
              <img src="${p.image}" alt="${p.title}">
              <div class="p-2 text-center">
                <small>${p.title}</small><br>
                <button class="btn btn-sm btn-primary"
                  onclick="openModal(${p.id})">View</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  });
}

function filterProducts() {
  const q = document.getElementById("search-box").value.toLowerCase();
  renderSections(products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  ));
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  document.getElementById("modal-image").src = p.image;
  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-description").innerHTML =
    `${p.description}<br><b style="color:red">Contact for price</b>`;
  document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

renderSections();

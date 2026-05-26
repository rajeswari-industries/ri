const products = [
  // Shivalingas
  { id: 1, image: 'images/minisl.png', title: "Shiva Lingam(1cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 1 cm (approx.)" },
  { id: 2, image: 'images/minisl2.png', title: "Shiva Lingam(2.5cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 2.5 cm (approx.)" },
  { id: 3, image: 'images/minisl3.png', title: "Shiva Lingam(4cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 4 cm (approx.)" },
  { id: 4, image: 'images/shivalingam.png', title: "Shiva Lingam(5.5cm)", category: "Shivalingas", description: "Material: Bronze mixed Panchalohas, Height: 5.5 cm (approx.)" },

  // Hand Bells
  { id: 5, image: 'images/150.png', title: "Mini Hand Bell(150gms)", category: "Hand Bells", description: "Material: Bronze mixed Panchalohas, Weight: 150 grams, Height: 10 cm (approx.), Base Diameter: 6 cm (approx.)" },
  { id: 6, image: 'images/350.png', title: "Small Hand Bell(350gms)", category: "Hand Bells", description: "Material: Bronze mixed Panchalohas, Weight: 350 grams, Height: 14 cm (approx.), Base Diameter: 6 cm (approx.)" },
  { id: 7, image: 'images/500.png', title: "Hand Bell(500gms)", category: "Hand Bells", description: "Material: Bronze mixed Panchalohas, Weight: 500 grams, Height: 17.5 cm (approx.), Base Diameter: 7.5 cm (approx.)" },
  { id: 8, image: 'images/1.1kg.png', title: "Hand Bell(1kg)", category: "Hand Bells", description: "Material: Bronze mixed Panchalohas, Weight: 1 kilogram, Height: 22 cm (approx.), Base Diameter: 10 cm (approx.)" },

  // Temple Bells
  { id: 9, image: 'images/6kg.png', title: "Temple Bell(1kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 1 kg, Height: 8 cm (approx.), Diameter: 10 cm (approx.)" },
  { id: 10, image: 'images/6kg.png', title: "Temple Bell(2kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 2 kg, Height: 10 cm (approx.), Base Diameter: 13 cm (approx.)" },
  { id: 11, image: 'images/6kg.png', title: "Temple Bell(3kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 3 kg, Height: 13 cm (approx.), Base Diameter: 15 cm (approx.)" },
  { id: 12, image: 'images/6kg.png', title: "Temple Bell(4kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 4 kg, Height: 15 cm (approx.), Base Diameter: 18 cm (approx.)" },
  { id: 13, image: 'images/6kg.png', title: "Temple Bell(5kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 5 kg, Height: 16 cm (approx.), Base Diameter: 20 cm (approx.)" },
  { id: 14, image: 'images/6kg.png', title: "Temple Bell(6kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 6 kg, Height: 16.5 cm (approx.), Base Diameter: 20.5 cm (approx.)" },
  { id: 15, image: 'images/6kg.png', title: "Temple Bell(7kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 7 kg, Height: 17 cm (approx.), Base Diameter: 21 cm (approx.)" },
  { id: 16, image: 'images/6kg.png', title: "Temple Bell(8kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 8 kg, Height: 19 cm (approx.), Base Diameter: 23 cm (approx.)" },
  { id: 17, image: 'images/9kg.png', title: "Temple Bell(10kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 10 kg, Height: 19.5 cm (approx.), Base Diameter: 25 cm (approx.)" },
  { id: 18, image: 'images/9kg.png', title: "Temple Bell(11kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 11 kg, Height: 20 cm (approx.), Base Diameter: 26 cm (approx.)" },
  { id: 19, image: 'images/9kg.png', title: "Temple Bell(16kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 16 kg, Height: 24 cm (approx.), Base Diameter: 30 cm (approx.)" },
  { id: 20, image: 'images/9kg.png', title: "Temple Bell(18kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 18 kg, Height: 26 cm (approx.), Base Diameter: 31 cm (approx.)" },
  { id: 21, image: 'images/bell.png', title: "Temple Bell(23kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 23 kg, Height: 27 cm (approx.), Base Diameter: 34 cm (approx.)" },
  { id: 22, image: 'images/bell.png', title: "Temple Bell(33kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 33 kg, Height: 33 cm (approx.), Base Diameter: 39 cm (approx.)" },
  { id: 23, image: 'images/bell.png', title: "Temple Bell(45kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 45 kg, Height: 38 cm (approx.), Base Diameter: 46 cm (approx.)" },
  { id: 24, image: 'images/bell.png', title: "Temple Bell(100kg)", category: "Temple Bells", description: "Material: Bronze mixed Panchalohas, Weight: 100 kg, Height: 45.7 cm (approx.), Base Diameter: 54 cm (approx.)" },

  // Jaya Gantalu
  { id: 25, image: 'images/jayaganta1.png', title: "Jaya Ganta(500gms)", category: "Jaya Gantalu", description: "Material: Bronze mixed Panchalohas, Weight: 500 gms (approx.), Diameter: 6 inches (approx.)" },
  { id: 26, image: 'images/jayaganta2.png', title: "Jaya Ganta(1500gms)", category: "Jaya Gantalu", description: "Material: Bronze mixed Panchalohas, Weight: 1.5 kg (approx.), Diameter: 9 inches (approx.)" }
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

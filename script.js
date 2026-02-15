// Produkte (hier kannst du TikTok-Trendprodukte einfügen)
const products = [
  {
    id: 1,
    name: "LED Strip Lights",
    price: 15,
    img: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Spicker Stift (Scherzartikel)",
    price: 5,
    img: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Mini USB Ventilator",
    price: 10,
    img: "https://via.placeholder.com/150"
  }
];

// Produkte rendern
const productsContainer = document.getElementById("products");
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} €</p>
    <button onclick="addToCart(${product.id})">In den Warenkorb</button>
  `;
  productsContainer.appendChild(div);
});

// Warenkorb
let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} €`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = `Gesamt: ${total} €`;
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("Checkout Demo – keine echte Zahlung möglich 😎");
});

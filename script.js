// Übersetzungen
const translations = {
  de: { shopTitle:"🔥 TikTok Trend Shop", cartTitle:"Warenkorb", total:"Gesamt", checkout:"Checkout (Demo)" },
  en: { shopTitle:"🔥 TikTok Trend Shop", cartTitle:"Cart", total:"Total", checkout:"Checkout (Demo)" }
};

// Produkte mit richtigen Platzhalterbildern (TikTok-Trend)
const products = [
  {id:1, name:"LED Strip Lights", price:15, img:"https://images.unsplash.com/photo-1580894732444-27a71f0b81ed?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"},
  {id:2, name:"Spicker Stift", price:5, img:"https://images.unsplash.com/photo-1586260739960-f0d61e184f80?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"},
  {id:3, name:"Mini USB Ventilator", price:10, img:"https://images.unsplash.com/photo-1619028132125-4a1e91c9a784?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"},
  {id:4, name:"Anti Gravity Luftbefeuchter", price:18, img:"https://images.unsplash.com/photo-1618005198919-19be37b0c876?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"},
  {id:5, name:"Reusable Makeup Pads", price:7, img:"https://images.unsplash.com/photo-1593011958442-1c1e4072ad04?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"},
  {id:6, name:"Magnetisches Handyhalter Gadget", price:12, img:"https://images.unsplash.com/photo-1614651701561-ff108da923c0?crop=entropy&cs=tinysrgb&fit=max&h=150&w=220"}
];

// Laden aus LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let lang = "de";

// Produkte rendern
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} €</p>
      <button onclick="addToCart(${p.id})">${translations[lang].checkout}</button>
    `;
    container.appendChild(div);
  });
}

// Warenkorb rendern
function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  itemsEl.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} €`;
    itemsEl.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = `${translations[lang].total}: ${total} €`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Warenkorb Funktionen
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Checkout Demo
document.getElementById("checkout").addEventListener("click", () => {
  alert(lang==="de" ? "Checkout Demo – keine echte Zahlung 😎" : "Checkout Demo – no real payment 😎");
});

// Sprache wechseln
document.getElementById("language-select").addEventListener("change", (e)=>{
  lang = e.target.value;
  document.getElementById("shop-title").textContent = translations[lang].shopTitle;
  document.getElementById("cart-title").textContent = translations[lang].cartTitle;
  document.getElementById("checkout").textContent = translations[lang].checkout;
  renderCart();
});

renderProducts();
renderCart();
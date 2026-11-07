const products = [
    { id: 1, name: "Wireless Earbuds", price: 1499, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400" },
    { id: 2, name: "Smart Watch", price: 2499, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 3, name: "Backpack", price: 899, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 4, name: "Sunglasses", price: 599, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
    { id: 5, name: "Water Bottle", price: 399, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400" },
    { id: 6, name: "Notebook", price: 199, img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400" },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const cartPanel = document.getElementById("cart-panel");

function renderProducts() {
    productList.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join("");
}

function addToCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += 1;
    } else {
        const product = products.find(p => p.id === id);
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    cartItems.innerHTML = cart.map(item => `
        <li>${item.name} (x${item.qty}) - ₹${item.price * item.qty}</li>
    `).join("");
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    totalPrice.textContent = total;
    cartCount.textContent = count;
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function toggleCart() {
    cartPanel.classList.toggle("open");
}

renderProducts();
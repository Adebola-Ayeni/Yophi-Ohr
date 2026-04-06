const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id === productId);

// if product exists, show it
if (product) {
  document.querySelector(".productinfo-name").textContent = product.name;
  document.querySelector(".productinfo-price").textContent = product.price;
  document.querySelector(".productinfo-img").src = product.image;
  document.querySelector(".productinfo-desc").textContent = product.description;
}

if (!product) {
  document.body.appendChild("<h2>Product not found</h2>");
}
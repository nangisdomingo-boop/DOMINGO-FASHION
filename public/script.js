// public/script.js

// Function to load featured products from the API endpoint
async function loadFeaturedProducts() {
    try {
        const response = await fetch('https://api.example.com/featured-products'); // Replace with actual API endpoint
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error loading featured products:', error);
    }
}

// Function to display products on the page
function displayProducts(products) {
    const productsContainer = document.getElementById('featured-products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to handle adding a product to the cart
function addToCart(productId) {
    console.log(`Product ${productId} added to cart!`);
    // Implement cart logic here
}

// Load featured products on page load
window.onload = loadFeaturedProducts;
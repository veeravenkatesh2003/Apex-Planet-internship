const products = [
    { name: "Smartphone", category: "electronics", price: 299, rating: 4.5 },
    { name: "T-Shirt", category: "clothing", price: 20, rating: 4.2 },
    { name: "Laptop", category: "electronics", price: 999, rating: 4.8 },
    { name: "Jeans", category: "clothing", price: 40, rating: 4.0 },
    { name: "Novel", category: "books", price: 15, rating: 4.7 },
    { name: "Headphones", category: "electronics", price: 89, rating: 4.3 },
  ];
  
  function filterAndSortProducts() {
    const category = document.getElementById('category').value;
    const sort = document.getElementById('sort').value;
    let filtered = [...products];
    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }
    if (sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filtered);
  }
  
  function displayProducts(productList) {
    const container = document.getElementById('productList');
    container.innerHTML = '';
    productList.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>Rating: ⭐ ${product.rating}</p>
        </div>
      `;
    });
  }
  
  document.addEventListener('DOMContentLoaded', filterAndSortProducts);
  
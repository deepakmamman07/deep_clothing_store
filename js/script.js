
const productsApiUrl = "https://dummyjson.com/products";
const productsList = document.querySelector('.productsList');

async function productsdata() {
    try {
        const res = await fetch(productsApiUrl);
        const data = await res.json();
        console.log(data);
        showAllProducts(data.products);
    } catch (error) {
        console.log(error);
    }

}

function showAllProducts(products) {
  // map each products to HTML
  const html = products.map(products => {
    return `
     <div class="container">
   

    <img
      id="productImage"
      src="${products.images[0]}"
      alt="${products.title}"
      class="product-image"
    />

    <div class="product-details">
  <h4 id="productName">${products.title}</h4>
  <p><strong>Price:</strong> $${products.price}</p>
  <p class="description"><strong>Description:</strong> ${products.description.trim().slice(0, 50)}</p>
  
  <button onclick="addToCart()">Add to Cart</button>
</div>

  </div>
  </div>
    `;
  }).join('');

  // inject into container
  productsList.innerHTML = html;
  
}

productsdata();
// const productsImage = document.getElementById('productsImage');
// const productsNameInput = document.getElementById('productsName');
// const productsPriceInput = document.getElementById('productsPrice');
// const productsDescriptionInput = document.getElementById('productsDescription');


// product.js
function createProduct(name, imageSrc) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    
    productItem.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h3>${name}</h3>
        <a href="#">Agregar al carrito</a>
    `;
    
    return productItem;
}

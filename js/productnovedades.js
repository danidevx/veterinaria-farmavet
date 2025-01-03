// productnovedades.js
const productListNovedades = document.getElementById('product-listrenovedades');

// Ejemplo de productos novedades (puedes usar los mismos o diferentes)
const productsNovedades = [
    { name: 'ANTRIFORMINT FM ®', imageSrc: 'img/product/reme1.png' },
    { name: 'ANTRIBAM 4G ®', imageSrc: 'img/product/atriban.png' },
    { name: 'ASCEND', imageSrc: 'img/product/ascend.png' },
    { name: 'ENROFLOXACINA 10% ®', imageSrc: 'img/product/enrofloxasina.png' },
    { name: 'FLUXIPEN ®', imageSrc: 'img/product/fluxipen.png' },
    { name: 'RESANIQ ®', imageSrc: 'img/product/RESANIQ.png' }
];

// Agregar cada producto al DOM
productsNovedades.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc);
    productListNovedades.appendChild(productElement);
});

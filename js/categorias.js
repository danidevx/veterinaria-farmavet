function Categorias (name, img) {
	const Categoria = document.createElement('div')
	Categoria.className = 'product-item';

	Categoria.innerHTML = `

	<div id="categorias" >
		<a href="#"><img src="${img}" alt="${name}"></a>
    </div>
	`
return Categoria;

}

const listCategorias = document.getElementById('listCategorias')

const category = [

	

	{ name: 'Analgésicos', img: 'img/categorias/Analgesicos.jpg' },
	{ name: 'Antiinflamatorios', img: 'img/categorias/Antiinflamatorios.jpg' },
	{ name: 'Antiinflamatorios', img: 'img/categorias/Antipireticos.jpg' },


// 1. Analgésicos/Antiinflamatorios/Antipiréticos.
// 2. Anestésicos.
// 3. Antianémicos.
// 4. Antibióticos.
// 5. Antidiarréicos.
// 6. Antihistamínicos
// 7. Antiparasitarios Orales/Inyectables.
// 8. Biológicos.
// 9. Hormonales.
// 10. Multivitamínicos.
// 11. Otros.

];

category.forEach(product => {
    const productElement = Categorias(product.name, product.img);
    listCategorias.appendChild(productElement);
});
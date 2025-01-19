const form = document.getElementById('productForm');
const productsGrid = document.querySelector('.products-grid');


form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Con esto se obtiene los valores de los inputs
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>$ ${parseFloat(price).toFixed(2)}</p>
        <button class="delete-btn" data-delete>Eliminar</button>
    `;

    // Agrega la tarjeta al grid de productos
    productsGrid.appendChild(productCard);

    // Limpia el formulario
    form.reset();
});

// Confirma si se elimina el productos
productsGrid.addEventListener('click', (event) => {
    if (event.target.matches('[data-delete]')) {
        const userConfirmed = confirm('¿Está seguro de que desea eliminar este producto?');
        if (userConfirmed) {
            const productCard = event.target.closest('.product-card');
            productCard.remove();
        }
    }
});

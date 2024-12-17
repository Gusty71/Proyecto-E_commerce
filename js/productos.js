fetch('productos.json')
    .then(response => response.json())
    .then(data => {

      const productoDiv = document.getElementById('productos');
      data.forEach(producto => {
       
        const div = document.createElement('div');

        div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src="./imagenes/${producto.imagen} alt=${producto.imagen} width=200">
        <p>Descripcion: ${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productoDiv.appendChild(div);
      });

  });

function obtenerProductoPorId(id){
    return producto.find(producto => producto.id === id) || {};
}  

function agregarAlCarrito(id){
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = {id, cantidad: 1};
  
  
  const encontrado = carrito.find(p => p.id === id);

  if (encontrado){
      encontrado.cantidad++;
  }else{
    carrito.push(producto);
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  
}


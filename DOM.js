let card= `
      <img src="./imagenes/logonegocio.jpg" class="logo" alt="logo comercial">
      <nav class="navi">
          <ul>
              <li>
                  <a href="index.html">Nosotros</a>
              </li>
              <li>
                  <a href="elaboracion.html">Productos</a>
              </li>
              <li>
                  <a href="contacto.html">Contacto</a>
              </li>
              <li>
                <a href="carrito.html">Carrito</a>
            </li>
          </ul>    
      </nav>

`
document.querySelector("header").innerHTML=card;

card =`
 <div class="social"> 
    <h4>Encontranos en las redes sociales:</h4>
    <ul>
      <li>
          <a href="https:\\www.whatsapp.com">
            <img src="./imagenes/whatsapp.png" 
            width="50" height="auto"></a>
      </li>
      <li>
          <a href="https:\\www.facebook.com">
            <img src="./imagenes/facebook.png" 
            width="50" height="auto"></a>
      </li>
      <li>
          <a href="https:\\linkedin.com">
            <img src="./imagenes/linkedin.png"
            width="50" height="auto"></a>
      </li>
  </ul> 
  <p>Realizado por Tolay Norberto</p>
</div>

`
document.querySelector("footer").innerHTML = card;
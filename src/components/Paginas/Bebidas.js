import React from 'react'
import be1 from './assets/be1.jpg';
import be2 from './assets/be2.jpg';
import be3 from './assets/be3.jpg';

const Bebidas = () => {
  return (
    <div class="container">
      <div class="row" style={{ marginBottom: 2 + 'em' }}>
        <div class=" col-md-8" >

          <h1 class="titulos">Bebidas</h1>
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={be1} class="d-block w-100" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={be2} class="d-block w-90" height={800} style={{ marginLeft: 5 + 'em' }} />
              </div>
              <div class="carousel-item">
                <img src={be3} class="d-block w-100" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-4" >
        <h5 class="text-uppercase mb-4 font-weight-bold titulos" >Acerda de nuestras Bebidas</h5>
        <hr class="mb-4"></hr>
        <p class="text-alert">Descubre el deleite de nuestras bebidas, un viaje sensorial donde la creatividad y la frescura se entrelazan en cada sorbo. Desde nuestros cócteles artesanales, que despiertan los sentidos, hasta la complejidad de nuestros vinos seleccionados, cada elección refleja la pasión por la calidad y la maestría en la mixología. Sumérgete en un universo de cervezas artesanales, destilados premium y opciones sin alcohol, donde cada bebida es una expresión única de nuestro compromiso con la excelencia. En nuestro restaurante, cada brindis cuenta una historia de innovación y sabor. ¡Salud a la experiencia culinaria completa!</p>

      </div>
      </div>
      
    </div>
  )
}

export default Bebidas;
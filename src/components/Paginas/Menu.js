import React from 'react'
import pl1 from './assets/pl1.jpg';
import pl2 from './assets/pl2.jpg';
import pl3 from './assets/pl3.jpg';
import pl4 from './assets/pl4.jpeg';
import pl5 from './assets/pl5.jpg';

const Menu = () => {
  return (
    <div class="container">
      <div class="row" style={{ marginBottom: 2 + 'em' }}>
        <div class=" col-md-8" >
          <div class="col ml-2">
            <h1 class="titulos">Algunos platillos</h1>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators" >
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={pl1} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Primer platillo </h5>
                    <p>50 Bs</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl2} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>segundo platillo</h5>
                    <p>25 Bs</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl3} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>tercer platillo</h5>
                    <p>30 Bs</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class=" col-md-4" >
            <h5 class="text-uppercase mb-4 font-weight-bold titulos" >Acerda de nuestro menu</h5>
            <hr class="mb-4"></hr>
            <p class="desc">Bienvenido a nuestro menú, donde cada plato es una obra maestra de sabores y texturas cuidadosamente equilibrados. Desde entradas irresistibles hasta postres decadentes, nuestro menú celebra la diversidad culinaria con ingredientes frescos y presentaciones artísticas. Descubre la perfección en cada bocado con nuestras especialidades del chef y deléitate con una experiencia gastronómica inolvidable. En nuestro menú, la pasión por la cocina se traduce en cada plato, creando momentos memorables en cada visita. ¡Sumérgete en un viaje culinario excepcional y deja que tu paladar sea el guía!</p>
          
        </div>
      </div>

    </div>
  )
}

export default Menu;
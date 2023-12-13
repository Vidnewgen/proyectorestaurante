import React from 'react'
import Card from 'react-bootstrap/Card';
import f1re from './assets/f1re.jpg'
import p2re from './assets/p2re.jpg'
import p3re from './assets/p3re.jpg'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div class="total">
      <div class="container">
        <div class="row">
          <div class="card col-md-6" >
            <img src={f1re} />
            <div class="card-body">
              <h5 class="card-title">Somos Restaurante Sazón</h5>
              <p class="card-text">acercate a nuestras sucursales a degustar nuestros deliciosos platillos.</p>
              <Link to='/menu' className="btn btn-primary">Menu</Link>
            </div>
          </div>
          <div class="card col-md-6" >
            <img src={p2re} />
            <div class="card-body">
              <h5 class="card-title">Un lugar elegante y sofisticado</h5>
              <p class="card-text">Sumérgete en un ambiente sofisticado diseñado para cautivar tus sentidos. Con una iluminación suave, una decoración elegante y un mobiliario cuidadosamente seleccionado, nuestro restaurante te invita a disfrutar de momentos memorables.</p>
            </div>
          </div>
          <div class="row">
          <div class="card mb-5 " >
            <div class="row g-0">
              <div class="col-md-5">
                <img src={p3re} class="d-block w-100"/>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">Bar</h5>
                  <p class="card-text">Descubre nuestro bar exclusivo, un rincón íntimo donde la elegancia se fusiona con la mixología creativa. Disfruta de cócteles artesanales, una cuidada selección de licores y un ambiente vibrante que complementa la experiencia culinaria. Relájate y socializa mientras nuestros talentosos bartenders crean magia en cada vaso. ¡Bienvenido a un mundo de sabores en nuestro bar único!</p>
                  <p class="card-text"><small class="text-body-secondary">Solo mayores de 18</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Inicio;
import React from 'react'
import ped from './assets/ped.png'
function pedido() {
  let a = document.getElementsByName("nombre")[0].value;
  let b = document.getElementsByName("correo")[0].value;
  let c = document.getElementsByName("telefono")[0].value;
  let d = document.getElementsByName("pedido")[0].value;
  let e = document.getElementsByName("direccion")[0].value;
  if (a === "" || b === "" || c === "" || d === "" || e === "") {
    alert("rellene toso los recuadros");
  }
  else {
    alert("Usuario: " + a);
    alert("Su pedido fue aceptado correctamente pronto le llegara un mensaje a su telefono " + c);
    alert("con la descripcion del pedido " + d);
    document.getElementsByName("nombre")[0].value = "";
    document.getElementsByName("correo")[0].value = "";
    document.getElementsByName("telefono")[0].value = "";
    document.getElementsByName("pedido")[0].value = "";
    document.getElementsByName("direccion")[0].value = "";
  }
};

const Pedidoonline = () => {
  return (
    <div class="total">
      <div class="container">
        <div class="row" style={{ marginBottom: 2 + 'em' }}>
          <div class="card col-md-7" >
            <div class="container mt-5">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <h2 class="text-center mb-4">Pedido Online</h2>
                  <form>
                    <div class="form-group">
                      <label for="nombre">Nombre:</label>
                      <input type="text" class="form-control" id="nombre" name="nombre" required />
                    </div>
                    <div class="form-group">
                      <label for="correo">Correo Electrónico:</label>
                      <input type="email" class="form-control" id="correo" name="correo" required />
                    </div>
                    <div class="form-group">
                      <label for="telefono">Teléfono:</label>
                      <input type="text" class="form-control" id="telefono" name="telefono" required />
                    </div>
                    <div class="form-group">
                      <label for="direccion">Dirección de Entrega:</label>
                      <textarea class="form-control" id="direccion" name="direccion" rows="3" required></textarea>
                    </div>
                    <div class="form-group">
                      <label for="pedido">Pedido:</label>
                      <textarea class="form-control" id="pedido" name="pedido" rows="5" required></textarea>
                    </div>
                    <button type="submit" onClick={pedido} class="btn btn-primary">Realizar Pedido</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-5" >
            <img src={ped}/>
            <h1 class="titulos">Realice sus pedidos sin costo de envio</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pedidoonline;
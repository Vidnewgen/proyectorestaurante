import React from 'react'
function reserva() {
  alert("su reserva a sido registrarda")
}

const Reserva = () => {
  return (
    <div class="total">
      <div class="container">
        <div class="row">
          <div className="col-md-6">
            <h2 className="mb-4">Formulario de Datos</h2>
                  <form>
                    <div class="form-group">
                      <label for="nombre">Nombre:</label>
                      <input type="text" class="form-control" id="nombre" name="nombre" required />
                    </div>
                    <div class="form-group">
                      <label for="correo">Correo Electrónico:</label>
                      <input type="text" class="form-control" id="correo" name="correo" required />
                    </div>
                    <div class="form-group">
                      <label for="telefono">Carnet Identidad(ci):</label>
                      <input type="text" class="form-control" id="ano" name="ano" required />
                    </div>
                    <div class="form-group">
                      <label for="telefono">Dia:</label>
                      <input type="text" class="form-control" id="dia" name="dia" required />
                    </div>
                    <div class="form-group">
                      <label for="telefono">Mes:</label>
                      <input type="text" class="form-control" id="mes" name="mes" required />
                    </div>
                    <div class="form-group">
                      <label for="telefono">Año:</label>
                      <input type="text" class="form-control" id="ano" name="ano" required />
                      
                    </div>
                    <button type="submit" onClick={reserva} class="btn btn-primary">Realizar Pedido</button>
                  </form>
          </div>
          <div className="col-md-6">
            <h2>Reservación</h2>
              <h2>Información Adicional</h2>
              <p>
                Bienvenido a nuestro sistema de reservas. Completa el formulario a la izquierda
                para asegurar tu reserva. Si tienes alguna pregunta, no dudes en contactarnos.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reserva
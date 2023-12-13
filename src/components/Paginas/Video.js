import React from 'react'

const Video = () => {
  return (
    <div class="titulos">
      <h1> Videos</h1>
      <div class="container">

        <div class="row">
          <div class="card col-md-6" >
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/n8YwWZy3bcM?si=MHFNercGu03HravX" title="YouTube video" allowfullscreen ></iframe>
            </div>
            <h2 > Una pequeña publicidad que realizamos en una de nuestras sucursales</h2>
          </div>
          <div class="card col-md-6" >
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/aoU0DWBah6c?si=2gWGBlDOHYVRJ88q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h2 >Platillo a proxima incormporacion al menu</h2>
          </div>

          <div class="row " style={{ marginBottom: 2 + 'em' }}>
            <div class="card col-md-6" >
              <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/GUEytLX72rw?si=koCukkiIXOftjhal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h2 > Decoracion de pasteles</h2>
            </div>
            <div class="card col-md-6" >
              <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/DIWHdB6P9oc?si=l_-8ZXyC3qu_0YKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h2 > Proxima infraestructura a estrenarse</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video

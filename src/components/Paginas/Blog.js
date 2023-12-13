import React from 'react'
import re1 from './assets/re1.webp'
import re2 from './assets/re2.jpg'
import re3 from './assets/re3.jpg'
import re4 from './assets/re4.jpg'
import re5 from './assets/re5.jpg'
import re6 from './assets/re6.jpg'

const Blog = () => {
  return (
    <div class="total">
      <h1 class="titulos">Algunas recetas para compartir</h1>
      <div class="container">
        <div class="row">
          <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={re1} class="img-fluid rounded-start" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Ensalada de Verano con Fresas y Queso Feta:</h5>
                  <p class="card-text">Esta ensalada refrescante combina la dulzura de las fresas frescas con la salinidad del queso feta. Mezcladas con una variedad de hojas verdes, como espinacas y rúcula, y aderezadas con una vinagreta de miel y mostaza, cada bocado es una explosión de sabores y texturas. Las nueces tostadas añaden un crujido irresistible. Una opción perfecta para días soleados.</p>
                  <p class="card-text"><small class="text-body-secondary">Una sinfonía de frescura con hojas verdes, fresas jugosas y queso feta, todo abrazado por una vinagreta de miel y mostaza. Nueces tostadas proporcionan el toque crujiente final.</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card mb-3" >
            <div class="row g-0">

              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Salmón a la Parrilla con Salsa de Limón y Eneldo:</h5>
                  <p class="card-text">Este plato presenta filetes de salmón a la parrilla, sazonados con hierbas frescas y acompañados de una vibrante salsa de limón y eneldo. La parrilla aporta un toque ahumado, mientras que la salsa cítrica realza la frescura del pescado. Servido sobre un lecho de espinacas, este plato es una elegante combinación de sabores saludables.</p>
                  <p class="card-text"><small class="text-body-secondary">Salmón en su máxima expresión: a la parrilla, realzado con una salsa cítrica de limón y eneldo. Una experiencia de frescura marina y sabores intensos.</small></p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={re2} class="img-fluid rounded-start" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={re3} class="img-fluid rounded-start" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Risotto de Champiñones y Queso Parmesano:</h5>
                  <p class="card-text">Un plato reconfortante y cremoso que combina arroz arborio con champiñones salteados y queso parmesano rallado. La mezcla de texturas entre el arroz al dente y los champiñones tiernos crea una experiencia deliciosa. Este risotto es una opción indulgente para los amantes de la cocina reconfortante.</p>
                  <p class="card-text"><small class="text-body-secondary">Una indulgencia reconfortante: arroz arborio cremoso con champiñones y queso parmesano, equilibrando texturas y sabores en cada bocado.</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card mb-3" >
            <div class="row g-0">

              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Mousse de Chocolate con Frutos Rojos:</h5>
                  <p class="card-text">Este indulgente mousse comienza con la fusión de chocolate oscuro derretido y yemas de huevo. Las claras batidas a punto de nieve se incorporan delicadamente para lograr una textura aireada. Refrigera la mezcla hasta que tome consistencia y sírvela en copas individuales. Decora con frutos rojos frescos, creando un equilibrio perfecto entre la riqueza del chocolate y la frescura de las frutas.</p>
                  <p class="card-text"><small class="text-body-secondary">Un deleite de chocolate sedoso en copa, adornado con frutos rojos frescos. La armonía perfecta entre la riqueza del chocolate y la frescura de las frutas.</small></p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={re4} class="img-fluid rounded-start" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={re5} class="img-fluid rounded-start" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Tiramisú Clásico Italiano:</h5>
                  <p class="card-text">Crea capas de bizcochos de soletilla empapados en café fuerte y licor de café. Entre las capas, extiende una mezcla cremosa de mascarpone, yemas y azúcar. Después de refrigerar, espolvorea generosamente con cacao en polvo justo antes de servir. Un postre clásico italiano que combina la suavidad y la intensidad de los sabores.</p>
                  <p class="card-text"><small class="text-body-secondary">La auténtica delicia italiana: capas de bizcochos de soletilla, mascarpone y cacao, sumergidos en café. Un postre que fusiona suavidad y intensidad.</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row"style={{ marginBottom: 2 + 'em' }}>
          <div class="card mb-3" >
            <div class="row g-0">

              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Panna Cotta de Vainilla con Salsa de Caramelo:</h5>
                  <p class="card-text">Prepara una panna cotta infusionada con vainilla de vaina real para obtener un aroma rico y natural. Sirve cada porción con una salsa decadente de caramelo casero. La panna cotta, delicadamente firme, se combina perfectamente con la dulzura sedosa del caramelo. Una experiencia elegante y deliciosa que deleitará a los amantes de los postres sofisticados.</p>
                  <p class="card-text"><small class="text-body-secondary">Elegancia en cada cucharada: panna cotta de vainilla con una indulgente salsa de caramelo. Un matrimonio celestial de sabores suaves y dulces.</small></p>
                </div>
              </div>
              <div class="col-md-4">
                <img src={re6} class="img-fluid rounded-start" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog

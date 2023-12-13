import React from 'react'

const Nosotros = () => {
  return (
    <div class="total">
      <h1 class="titulos">Nosotros</h1>
      <div class="container">
        <div class="row" style={{ marginBottom: 2 + 'em' }}>
          <div class="card col-md-6" >
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Historia del Restaurante:
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    Desde su humilde inicio en 1985, el "Restaurante Sazón" ha sido el resultado de la pasión culinaria de la familia Sánchez. Fundado por la visionaria chef Isabella Sánchez, este icónico establecimiento se ha convertido en un símbolo de excelencia gastronómica y hospitalidad. Inspirados por las recetas transmitidas de generación en generación, el restaurante ha evolucionado para ofrecer experiencias culinarias memorables a lo largo de los años.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Filosofía y Valores:
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    En "Restaurante Sazón", nuestra filosofía se centra en la fusión armoniosa de tradición y creatividad. Valoramos la calidad de los ingredientes, el respeto por las técnicas culinarias y la conexión con la comunidad local. Nos enorgullece comprometernos con la sostenibilidad y ofrecer una experiencia gastronómica auténtica que celebra la diversidad de sabores.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Enfoque Gastronómico:
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    Nuestro enfoque culinario en "Restaurante Sazón" se inspira en la riqueza de las tradiciones culinarias locales e internacionales. Desde platos clásicos reinterpretados hasta creaciones vanguardistas, cada menú refleja la pasión por la gastronomía. Destacamos ingredientes frescos y de calidad, respetando la temporada y ofreciendo una experiencia única en cada bocado.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card col-md-6" >
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Compromiso con la Comunidad:
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"> En "Restaurante Sazón", no solo nos esforzamos por deleitar los paladares, sino también por contribuir positivamente a nuestra comunidad. Nos comprometemos con prácticas sostenibles, apoyamos a proveedores locales y participamos activamente en iniciativas comunitarias. Creemos que la prosperidad de la comunidad va de la mano con nuestro éxito.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Premios y Reconocimientos:
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"> A lo largo de los años, "Restaurante Sazón" ha sido honrado con diversos premios y reconocimientos, destacando nuestra dedicación a la excelencia gastronómica. Estos logros son testimonio de nuestro compromiso continuo con la calidad y la satisfacción de nuestros clientes. Cada premio es un recordatorio de la pasión que dedicamos a nuestro arte culinario.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Eventos y Colaboraciones:
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">En "Restaurante Sazón", la experiencia va más allá de la mesa. Regularmente organizamos eventos temáticos y colaboramos con talentosos chefs y artistas locales para ofrecer momentos únicos a nuestros comensales. Desde noches de degustación hasta colaboraciones especiales con productores locales, cada evento está diseñado para cautivar a nuestros clientes y sumergirlos en una experiencia gastronómica inolvidable. Mantente atento a nuestro calendario de eventos para descubrir las sorpresas que tenemos preparadas para ti. ¡Bienvenido a una celebración constante de sabores y creatividad en "Restaurante Sazón"!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
import CardImpacto from '../CardImpacto/CardImpacto';
import './iphone-mockup.css'

function IphoneMockup() {
  return (
      <div className="iphone_section">
        <div className="iphone">

          <div className="left_button_1"></div>
          <div className="left_button_2"></div>
          <div className="left_button_3"></div>
          <div className="right_button"></div>

          <div className="iphone_border">
            <div className="iphone_intern_border">

              <div className="iphone_notch"></div>
              <div className="sound_notch"></div>

              <h2 className="title_iphone">IMPACTO SOCIAL</h2>

              <CardImpacto
                classe="card1"
                imagem="77.png"
                alt="77%"
                texto="77% das propriedades rurais do Brasil são de agricultura familiar"
              />

              <CardImpacto
                classe="card2"
                imagem="20.png"
                alt="20%"
                texto="Menos de 20% têm acesso à tecnologia"
              />

              <CardImpacto
                classe="card3"
                imagem="/rec.png"
                alt="reciclagem"
                texto="27 milhões de toneladas de comida são desperdiçadas por ano."
              />


              <img
                className="logo"
                src="/image.png"
                alt="logo AgroViva Web"
              />

            </div>
          </div>

        </div>
      </div>
  );
}

export default IphoneMockup;
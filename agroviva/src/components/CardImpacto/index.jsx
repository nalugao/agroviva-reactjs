import './card-impacto.css'

function CardImpacto({ imagem, alt, texto, classe }) {
  return (
    <div className={classe}>
      <img
        className="icone"
        src={imagem}
        alt={alt}
      />
      <p className="p_iphone">
        {texto}
      </p>
    </div>
  );
}

export default CardImpacto;
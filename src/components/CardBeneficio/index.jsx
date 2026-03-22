import "./cardBeneficio.css"

function CardBeneficio({ icone, titulo, descricao }) {
  return (
    <div className="agri-card d-flex align-items-start gap-3 p-3 rounded-3 h-100">
      <div className="agri-icon">
        <i className={`bi ${icone}`}></i>
      </div>

      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <h5 className="fw-semibold">{titulo}</h5>
        <p className="mb-0">{descricao}</p>
      </div>
    </div>
  )
}

export default CardBeneficio
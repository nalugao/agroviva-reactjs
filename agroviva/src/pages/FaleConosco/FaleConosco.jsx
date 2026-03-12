import { useState } from "react";
import "./FaleConosco.css";

function FaleConosco() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo: "",
    contato: "",
    mensagem: ""
  });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const regex = {
    nome: /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    telefone: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }
  function validar() {
    const novosErros = {};
    if (!regex.nome.test(form.nome)) {
      novosErros.nome = "Digite nome e sobrenome.";
    }
    if (!regex.email.test(form.email)) {
      novosErros.email = "Digite um email válido.";
    }
    if (!regex.telefone.test(form.telefone)) {
      novosErros.telefone = "Telefone inválido.";
    }
    if (!form.tipo) {
      novosErros.tipo = "Escolha uma opção.";
    }
    if (!form.contato) {
      novosErros.contato = "Escolha uma opção.";
    }
    if (!form.mensagem || form.mensagem.length > 500) {
      novosErros.mensagem = "Mensagem inválida (máx 500 caracteres).";
    }
    return novosErros;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errosValidacao = validar();
    if (Object.keys(errosValidacao).length > 0) {
      setErros(errosValidacao);
      setSucesso(false);
      return;
    }
    setErros({});
    setSucesso(true);
    setForm({
      nome: "",
      email: "",
      telefone: "",
      tipo: "",
      contato: "",
      mensagem: ""
    });
  }
  return (
    <section className="fale-conosco">
      <div className="container py-5">
        <div className="row align-items-start">

          {/* COLUNA ESQUERDA - FAQ */}
          <div className="col-md-6 fale">
            <h1 className="fw-bold mb-4 titulo">
              Fale Conosco
            </h1>
            <p className="mb-5 subtitulo">
              Com AgroViva, queremos transformar esse cenário!
            </p>
            <h5 className="mb-3 subtitulo">
              FAQ - Perguntas Frequentes
            </h5>
            <div id="faqArea" className="uw-ignore">
              <div className="accordion" id="faqAccordion">
                {/* PERGUNTA 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resposta1"
                    >
                      Sou da comunidade, como vou receber as informações de ofertas?
                    </button>
                  </h2>
                  <div id="resposta1" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      As informações de ofertas serão enviadas diretamente no e-mail e WhatsApp.
                    </div>
                  </div>
                </div>
                {/* PERGUNTA 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resposta2"
                    >
                      Sou produtor, como vou receber as informações de demandas?
                    </button>
                  </h2>
                  <div id="resposta2" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Você receberá as informações por meio do e-mail e WhatsApp.
                    </div>
                  </div>
                </div>
                {/* PERGUNTA 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resposta3"
                    >
                      Como faço para me cadastrar?
                    </button>
                  </h2>
                  <div id="resposta3" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Preencha o formulário e selecione a opção “Quero me cadastrar”.
                    </div>
                  </div>
                </div>
                {/* PERGUNTA 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resposta4"
                    >
                      Qual o principal propósito da AgroViva?
                    </button>
                  </h2>
                  <div id="resposta4" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Conectar produtores e comunidades para fortalecer o consumo sustentável.
                    </div>
                  </div>
                </div>
                {/* PERGUNTA 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resposta5"
                    >
                      A AgroViva certifica seus produtores? Quais são os critérios?
                    </button>
                  </h2>
                  <div id="resposta5" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      A AgroViva realiza a certificação dos produtores com base em critérios de boas práticas agrícolas, responsabilidade ambiental e qualidade dos produtos. O objetivo é garantir que toda a produção seja segura, sustentável e alinhada aos valores da plataforma.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - FORMULÁRIO */}
          <div className="col-md-6 form">
            {sucesso && (
              <div className="alert alert-success">
                Mensagem enviada com sucesso!
              </div>
            )}
            <div className="card shadow p-4">
              <h4 className="mb-4 fw-bold">
                Entre em contato conosco
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    className={`form-control ${erros.nome ? "is-invalid" : ""}`}
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                  <div className="invalid-feedback">
                    {erros.nome}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${erros.email ? "is-invalid" : ""}`}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                  />
                  <div className="invalid-feedback">
                    {erros.email}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    className={`form-control ${erros.telefone ? "is-invalid" : ""}`}
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                  />
                  <div className="invalid-feedback">
                    {erros.telefone}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Escolha seu perfil</label>
                  <select
                    name="tipo"
                    className={`form-select ${erros.tipo ? "is-invalid" : ""}`}
                    value={form.tipo}
                    onChange={handleChange}
                  >
                    <option value="">Escolha uma opção</option>
                    <option>Agricultor</option>
                    <option>Comunidade</option>
                  </select>
                  <div className="invalid-feedback">
                    {erros.tipo}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Motivo do contato</label>
                  <select
                    name="contato"
                    className={`form-select ${erros.contato ? "is-invalid" : ""}`}
                    value={form.contato}
                    onChange={handleChange}
                  >
                    <option value="">Escolha uma opção</option>
                    <option>Quero me cadastrar</option>
                    <option>Quero tirar uma dúvida</option>
                  </select>
                  <div className="invalid-feedback">
                    {erros.contato}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Mensagem</label>
                  <textarea
                    name="mensagem"
                    rows="4"
                    maxLength="500"
                    className={`form-control ${erros.mensagem ? "is-invalid" : ""}`}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem"
                />
                  <div className="invalid-feedback">
                    {erros.mensagem}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  style={{ fontWeight: "800" }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FaleConosco;
import { useState } from "react";
import "./FaleConosco.css";

function FaleConosco() {
	const [form, setForm] = useState({
		nome: "",
		email: "",
		telefone: "",
		tipo: "",
		contato: "",
		mensagem: "",
	});

	const [erros, setErros] = useState({});
	const [sucesso, setSucesso] = useState(false);

	const regex = {
		nome: /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/,
		email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		telefone: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
	};

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	// FIX: textarea agora atualiza o estado corretamente e também auto-redimensiona
	function handleMensagemChange(e) {
		const { value } = e.target;
		setForm((prev) => ({ ...prev, mensagem: value }));
		e.target.style.height = "auto";
		e.target.style.height = e.target.scrollHeight + "px";
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
			mensagem: "",
		});
	}

	// Classe dinâmica do contador de caracteres
	const charCounterClass = `char-counter${form.mensagem.length >= 450 ? " quase-limite" : ""}`;

	return (
		<section className="fale-conosco">
			<div className="container py-5">
				<div className="row align-items-start">

					{/* ── COLUNA ESQUERDA - FAQ ── */}
					<div className="col-md-6 fale">
						<h1 className="fw-bold mb-4 titulo">Fale Conosco</h1>

						<p className="mb-5 subtitulo">
							Com AgroViva, queremos transformar esse cenário!
						</p>

						<h5 className="mb-3 subtitulo">FAQ - Perguntas Frequentes</h5>

						<div className="accordion" id="faqAccordion">
							{[
								{
									id: "resposta1",
									pergunta: "Sou da comunidade, como vou receber as informações de ofertas?",
									resposta: "As informações de ofertas serão enviadas diretamente no e-mail e WhatsApp.",
								},
								{
									id: "resposta2",
									pergunta: "Sou produtor, como vou receber as informações de demandas?",
									resposta: "Você receberá as informações por meio do e-mail e WhatsApp.",
								},
								{
									id: "resposta3",
									pergunta: "Como faço para me cadastrar?",
									resposta: 'Preencha o formulário e selecione a opção "Quero me cadastrar".',
								},
								{
									id: "resposta4",
									pergunta: "Qual o principal propósito da AgroViva?",
									resposta: "Conectar produtores e comunidades para fortalecer o consumo sustentável.",
								},
								{
									id: "resposta5",
									pergunta: "A AgroViva certifica seus produtores? Quais são os critérios?",
									resposta: "A AgroViva realiza a certificação dos produtores com base em critérios de boas práticas agrícolas, responsabilidade ambiental e qualidade dos produtos.",
								},
							].map(({ id, pergunta, resposta }) => (
								<div className="accordion-item" key={id}>
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed"
											data-bs-toggle="collapse"
											data-bs-target={`#${id}`}
										>
											{pergunta}
										</button>
									</h2>
									<div id={id} className="accordion-collapse collapse">
										<div className="accordion-body">{resposta}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* ── COLUNA DIREITA - FORMULÁRIO ── */}
					<div className="col-md-6 form">
						{sucesso && (
							<div className="alert alert-success" role="alert">
								✓ Mensagem enviada com sucesso!
							</div>
						)}
						<div className="card shadow">
							<h4 className="mb-4 fw-bold text-center">
								Entre em contato conosco
							</h4>
							<form onSubmit={handleSubmit} noValidate>
								{/* NOME */}
								<div className="mb-3">
									<label className="form-label">Nome Completo</label>
									<div className="input-wrapper">
										<i className="bi bi-person"></i>
										<input
											type="text"
											name="nome"
											className={`form-control ${erros.nome ? "is-invalid" : ""}`}
											value={form.nome}
											onChange={handleChange}
											placeholder="Seu nome completo"
										/>
									</div>
									{erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
								</div>
								{/* EMAIL */}
								<div className="mb-3">
									<label className="form-label">E-mail</label>
									<div className="input-wrapper">
										<i className="bi bi-envelope"></i>
										<input
											type="email"
											name="email"
											className={`form-control ${erros.email ? "is-invalid" : ""}`}
											value={form.email}
											onChange={handleChange}
											placeholder="seuemail@exemplo.com"
										/>
									</div>
									{erros.email && <div className="invalid-feedback">{erros.email}</div>}
								</div>
								{/* TELEFONE */}
								<div className="mb-3">
									<label className="form-label">Telefone</label>
									<div className="input-wrapper">
										<i className="bi bi-telephone"></i>
										<input
											type="tel"
											name="telefone"
											className={`form-control ${erros.telefone ? "is-invalid" : ""}`}
											value={form.telefone}
											onChange={handleChange}
											placeholder="(11) 99999-9999"
										/>
									</div>
									{erros.telefone && <div className="invalid-feedback">{erros.telefone}</div>}
								</div>
								{/* PERFIL */}
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
									{erros.tipo && <div className="invalid-feedback">{erros.tipo}</div>}
								</div>
								{/* MOTIVO */}
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
									{erros.contato && <div className="invalid-feedback">{erros.contato}</div>}
								</div>
								{/* MENSAGEM */}
								<div className="mb-3">
									<label className="form-label">Mensagem</label>
									<textarea
										name="mensagem"
										rows="4"
										maxLength="500"
										className={`form-control ${erros.mensagem ? "is-invalid" : ""}`}
										value={form.mensagem}
										onChange={handleMensagemChange}
										placeholder="Digite sua mensagem"
										style={{ overflow: "hidden" }}
									/>
									{erros.mensagem && <div className="invalid-feedback">{erros.mensagem}</div>}
									<div className={charCounterClass}>{form.mensagem.length}/500</div>
								</div>
								{/* BOTÃO */}
								<button type="submit" className="btn btn-success">
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
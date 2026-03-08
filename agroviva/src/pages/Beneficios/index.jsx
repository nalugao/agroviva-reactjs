import Agricultor from "../../assets/Agricultor.png"
import Alimentacao from "../../assets/Alimentacao.png"
import Feiras from "../../assets/Feiras.png"
import Solidariedade from "../../assets/Solidariedade.png"

function Beneficios(){
    return(
        <> 
        <main className="main-bg py-5 text-center text-dark">
        <div className="container mb-5">
            <h1 className="fw-bold text-dark lh-sm">
                Benefícios 
            </h1>
        </div>

        <section className="container">
            <div className="row g-4 justify-content-center">
            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Agricultor}
                    alt="Agricultor local"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Acesso direto ao agricultor local
                </h2>
                <p className="text-muted small mb-0">
                    Comprar frutas, verduras e legumes sem atravessadores, com preço
                    justo.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Alimentacao}
                    alt="Alimentação saudável"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Alimentação mais barata e nutritiva
                </h2>
                <p className="text-muted small mb-0">
                    Mais acesso a comida fresca, menos dependência de
                    ultraprocessados.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Feiras}
                    alt="Feiras e cozinhas comunitárias"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Mapas de feiras e cozinhas comunitárias
                </h2>
                <p className="text-muted small mb-0">
                    Veja no celular os locais mais próximos para retirada de
                    alimentos.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Solidariedade}
                    alt="Rede de solidariedade"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">Rede de solidariedade</h2>
                <p className="text-muted small mb-0">
                    Se houver sobra de produção, ela chegará à sua comunidade
                    através de doações ou preços populares.
                </p>
                </div>
            </article>
            </div>
        </section>
        </main>

        {/*  
        <main id="conteudo">
      <section class="agri py-5">
        <div class="container">
          <h1 class="titulo_h1">Agricultor mais conectado com o cliente</h1>

          <div class="row align-items-center gy-5">
            <!-- Coluna Esquerda -->
            <div class="col-lg-6 text-center text-lg-start">
              <img
                src="/img/548890 1.png"
                alt="Agricultores no campo"
                class="img-fluid agri-img mb-4"
              />

              <div
                class="tag d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3"
              >
                <img src="/img/globo.png" alt="Ícone globo" class="tag-icon" />
                <span class="text-white fw-semibold"
                  >Agricultor mais conectado com o cliente</span
                >
              </div>
              <p class="subtitle">
                Do clima à feira: tudo que o agricultor precisa para crescer!
              </p>
            </div>

            <!-- Coluna Direita -->
            <div class="col-lg-6">
              <div class="agri-right bg-success text-white p-4 rounded-4">
                <div class="text-center mb-4">
                  <h1 class="fw-bold fs-4">
                    Benefícios ao agricultor parceiro:
                  </h1>
                </div>

                <!-- Cards -->
                <div class="agri-card d-flex align-items-start gap-3 mb-3">
                  <img src="/img/nuvem.png" alt="Ícone clima" width="48" />
                  <div>
                    <h5 class="fw-semibold">Acesso ao clima local</h5>
                    <p class="mb-0">
                      Acompanhe alertas climáticos automaticamente.
                    </p>
                  </div>
                </div>

                <div class="agri-card d-flex align-items-start gap-3 mb-3">
                  <img src="/img/pc.png" alt="Ícone cadastro" width="48" />
                  <div>
                    <h5 class="fw-semibold">Cadastro de produtos fácil</h5>
                    <p class="mb-0">
                      Em um clique ou por áudio, mesmo para quem tem pouca
                      alfabetização.
                    </p>
                  </div>
                </div>

                <div class="agri-card d-flex align-items-start gap-3 mb-3">
                  <img src="/img/carrinho.png" alt="Ícone vendas" width="48" />
                  <div>
                    <h5 class="fw-semibold">Mais oportunidades de venda</h5>
                    <p class="mb-0">
                      Venda excedentes para feiras e comunidades locais.
                    </p>
                  </div>
                </div>

                <div class="agri-card d-flex align-items-start gap-3">
                  <img src="/img/planta.png" alt="Ícone plantio" width="48" />
                  <div>
                    <h5 class="fw-semibold">Orientações de plantio</h5>
                    <p class="mb-0">
                      Boas práticas simples para melhorar o cultivo e
                      produtividade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
        
        */}

        </>


    )
}
export default Beneficios;
const chatbotQuestionario = {
  agricultor: {
    Planejamento: [
      {
        pergunta: "O que eu planto agora?",
        resposta: "Depende da época do ano, das chuvas e do tipo de solo. Em regiões semiáridas, culturas resistentes como mandioca, feijão e milho costumam ter melhor adaptação. Sempre que possível, priorize culturas já testadas na sua região."
      },
      {
        pergunta: "Como sei a melhor janela de plantio?",
        resposta: "A melhor época de plantio depende do clima da região. Normalmente ela coincide com o início do período chuvoso. Caso tenha dúvida, observe o calendário agrícola local ou consulte agricultores mais experientes da região."
      },
      {
        pergunta: "Como escolher uma cultura mais segura?",
        resposta: "Prefira culturas que já são tradicionais na sua região e que tenham boa adaptação ao clima local. Culturas de ciclo curto também ajudam a reduzir riscos."
      },
      {
        pergunta: "Como planejar produção para ter oferta constante?",
        resposta: "Faça plantios em períodos diferentes ao longo do mês ou da semana. Isso evita colher tudo ao mesmo tempo e permite vender continuamente."
      },
      {
        pergunta: "Como saber se devo colher agora ou esperar?",
        resposta: "Observe o tamanho, a cor e a firmeza do produto. Se houver risco de chuva forte ou pragas, pode ser melhor antecipar a colheita."
      }
    ],

    Manejo: [
      {
        pergunta: "O que fazer quando chove demais?",
        resposta: "Evite trabalhar no solo muito molhado para não compactar a terra. Também observe sinais de doenças nas plantas, pois a umidade favorece fungos."
      },
      {
        pergunta: "O que fazer em período de seca?",
        resposta: "Use cobertura vegetal no solo para manter a umidade e priorize irrigação nas culturas mais sensíveis."
      },
      {
        pergunta: "Como lidar com pragas de forma simples?",
        resposta: "Faça inspeções frequentes nas plantas. Muitas pragas podem ser controladas com retirada manual ou uso de práticas simples de manejo."
      },
      {
        pergunta: "Como organizar colheita para não perder qualidade?",
        resposta: "Prefira colher nas primeiras horas da manhã ou no final da tarde, quando o clima está mais fresco."
      },
      {
        pergunta: "Como reduzir perdas na colheita?",
        resposta: "Evite machucar os produtos durante a colheita e utilize recipientes adequados para armazená-los."
      }
    ],

    Armazenamento: [
      {
        pergunta: "Como armazenar hortaliças por mais tempo?",
        resposta: "Guarde os produtos em local fresco, ventilado e protegido do sol direto."
      },
      {
        pergunta: "Como reduzir desperdício no transporte?",
        resposta: "Use caixas resistentes, evite empilhar peso excessivo e mantenha os produtos protegidos do calor."
      },
      {
        pergunta: "Como organizar retirada ou entrega?",
        resposta: "Defina um ponto fixo e um horário específico para retirada. Isso facilita o encontro entre quem vende e quem compra."
      },
      {
        pergunta: "Como separar produtos para doação e venda?",
        resposta: "Separe os produtos em três grupos: venda principal, venda com desconto e doação."
      },
      {
        pergunta: "O que fazer se sobrar muito produto?",
        resposta: "Tente vender rapidamente com preço promocional ou destinar para doação antes que estrague."
      }
    ],

    Comercializacao: [
      {
        pergunta: "Como vender excedente rápido?",
        resposta: "Anuncie o produto informando quantidade, preço e horário de retirada. Quanto mais claro for o anúncio, mais fácil será a venda."
      },
      {
        pergunta: "Qual a forma mais simples de anunciar no aplicativo?",
        resposta: "Selecione o produto, informe a quantidade disponível e o horário de retirada."
      },
      {
        pergunta: "Como definir um preço justo?",
        resposta: "Observe o preço da feira local e calcule os custos básicos de produção e transporte."
      },
      {
        pergunta: "O que é melhor: vender na feira ou direto para pessoas?",
        resposta: "Vender direto pode gerar maior lucro, enquanto a feira pode garantir maior volume de vendas."
      },
      {
        pergunta: "Como evitar vender abaixo do custo?",
        resposta: "Conheça seus custos de produção e transporte. Sempre tente vender acima desse valor."
      }
    ],

    Parcerias: [
      {
        pergunta: "Posso vender junto com outros agricultores?",
        resposta: "Sim. A união de produtores aumenta a quantidade de produtos e facilita a venda em maiores volumes."
      },
      {
        pergunta: "Vale a pena doar excedente?",
        resposta: "Sim. A doação evita desperdício e fortalece relações com a comunidade."
      },
      {
        pergunta: "Como saber se meu produto tem demanda na comunidade?",
        resposta: "Observe quais produtos são mais solicitados na plataforma ou na comunidade local."
      },
      {
        pergunta: "Se eu não sei ler muito bem, consigo usar o aplicativo?",
        resposta: "Sim. O aplicativo utiliza ícones e áudios para facilitar a navegação."
      },
      {
        pergunta: "Como registrar meu produto sem digitar?",
        resposta: "Você pode selecionar ícones ou gravar uma mensagem de áudio informando o produto disponível."
      }
    ]
  },

  comunidade: {
    Acesso: [
      {
        pergunta: "Como encontrar comida perto de casa?",
        resposta: "No aplicativo você pode visualizar os pontos de distribuição, feiras ou agricultores próximos."
      },
      {
        pergunta: "Como saber o que está disponível hoje?",
        resposta: "Os produtos disponíveis aparecem atualizados na lista do aplicativo."
      },
      {
        pergunta: "Como funciona a distribuição nas feiras?",
        resposta: "As feiras geralmente possuem dias e horários específicos. O aplicativo informa essas datas."
      },
      {
        pergunta: "Como saber os horários mais seguros para retirada?",
        resposta: "O aplicativo mostra os horários indicados para retirada de alimentos."
      },
      {
        pergunta: "O que fazer em caso de necessidade urgente?",
        resposta: "Você pode selecionar a opção de urgência para visualizar as opções mais próximas e rápidas."
      }
    ],

    Solicitacao: [
      {
        pergunta: "Como solicitar alimentos sem digitar?",
        resposta: "Basta selecionar os ícones dos alimentos desejados."
      },
      {
        pergunta: "Quem pode solicitar alimentos?",
        resposta: "Tanto famílias quanto líderes comunitários podem solicitar alimentos."
      },
      {
        pergunta: "Como registrar demanda para um grupo grande?",
        resposta: "Selecione o número aproximado de pessoas que serão atendidas."
      },
      {
        pergunta: "Como criar uma lista semanal de necessidades?",
        resposta: "Escolha os alimentos desejados e marque a frequência semanal."
      },
      {
        pergunta: "Como avisar que precisamos de um alimento específico?",
        resposta: "Você pode selecionar o item desejado na lista de necessidades."
      }
    ],

    Logistica: [
      {
        pergunta: "Como organizar retirada sem filas?",
        resposta: "Defina horários diferentes para grupos ou famílias."
      },
      {
        pergunta: "O que fazer se não existe ponto de distribuição?",
        resposta: "A comunidade pode escolher um local comum, como escola ou associação."
      },
      {
        pergunta: "Como confirmar que os alimentos foram recebidos?",
        resposta: "Após retirar os alimentos, basta confirmar no aplicativo."
      },
      {
        pergunta: "O que fazer quando não há transporte disponível?",
        resposta: "Tente organizar a retirada coletiva ou buscar pontos mais próximos."
      },
      {
        pergunta: "Como avisar que um ponto de distribuição está fechado?",
        resposta: "Use a opção de aviso dentro do aplicativo."
      }
    ],

    Conservacao: [
      {
        pergunta: "Como reduzir desperdício de alimentos?",
        resposta: "Solicite apenas a quantidade necessária e distribua rapidamente."
      },
      {
        pergunta: "Como lidar com alimentos perecíveis?",
        resposta: "Priorize o consumo rápido e mantenha em local fresco."
      },
      {
        pergunta: "Como saber se o alimento ainda está adequado?",
        resposta: "Observe cor, cheiro e textura antes de consumir."
      },
      {
        pergunta: "Como combinar doação e compra?",
        resposta: "Alguns produtos podem ser doados, enquanto outros podem ser comprados diretamente dos agricultores."
      },
      {
        pergunta: "Como apoiar agricultores locais?",
        resposta: "Sempre que possível, priorize alimentos produzidos por agricultores da região."
      }
    ],

    Comunicacao: [
      {
        pergunta: "Como receber alertas de feiras e doações?",
        resposta: "Você pode ativar notificações ou avisos por áudio."
      },
      {
        pergunta: "Como ouvir informações em áudio?",
        resposta: "Basta tocar no botão de áudio disponível nas perguntas."
      },
      {
        pergunta: "Como ajudar pessoas que não usam celular?",
        resposta: "Um líder comunitário pode registrar a solicitação por várias famílias."
      },
      {
        pergunta: "Como solicitar alimentos para cozinhas comunitárias?",
        resposta: "Selecione a opção de cozinha comunitária e informe o número de pessoas atendidas."
      },
      {
        pergunta: "Como funciona a prioridade de atendimento?",
        resposta: "Casos urgentes e grupos maiores podem receber prioridade na distribuição."
      }
    ]
  }
};

export default chatbotQuestionario;
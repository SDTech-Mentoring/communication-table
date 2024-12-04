const images = require.context("../images/schoolRoutine", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const RotinaData = [



  {
    id: 12,
    imgSrc: path("fazerAChamada"),
    text: "FAZER A CHAMADA",
  },


  {
    id: 20,
    imgSrc: path("agua"),
    text: "ÁGUA",
  },
  {
    id: 21,
    imgSrc: path("materialEscolar"),
    text: "MATERIAL ESCOLAR",
    rota: "/materialEscolar",
  },
  {
    id: 121,
    imgSrc: path("rotinaEscolar"),
    text: "ROTINA ESCOLAR",
    rota: "/routine",
  },
  {
    id: 122,
    imgSrc: path("espaco"),
    text: "ESPAÇO ESCOLA",
    rota: "/espaco-escola",
  },

  {
    id: 1122,
    imgSrc: path("atividadeEscolar"),
    text: "ATIVIDADE ESCOLAR",
    rota: "/atividade-escolar",
  },

  {
    id: 22,
    imgSrc: path("carroEscolar"),
    text: "TRANSPORTE ESCOLAR",
  },
  {
    id: 23,
    imgSrc: path("jogarNoLixo"),
    text: "LIXO",
  },

  {
    id: 27,
    imgSrc: path("tirarMaterial"),
    text: "TIRAR CADERNO",
  },
  {
    id: 28,
    imgSrc: path("guardarMaterial"),
    text: "GUARDAR CADERNOS",
  },

  {
    id: 42,
    imgSrc: path("recortar"),
    text: "RECORTAR",
  },
  {
    id: 43,
    imgSrc: path("colar"),
    text: "COLAR",
  },
  {
    id: 44,
    imgSrc: path("pintar"),
    text: "PINTAR",
  },
  {
    id: 45,
    imgSrc: path("escrever"),
    text: "ESCREVER",
  },
  {
    id: 46,
    imgSrc: path("ler"),
    text: "LER",
  },
  {
    id: 47,
    imgSrc: path("rasgar"),
    text: "RASGAR",
  },
  {
    id: 48,
    imgSrc: path("amassar"),
    text: "AMASSAR",
  },

  {
    id: 50,
    imgSrc: path("esporte"),
    text: "ESPORTE",
  },
  {
    id: 51,
    imgSrc: path("reuniaoProfessor"),
    text: "REUNIÃO COM PROFESSOR",
  },

  {
    id: 52,
    imgSrc: path("amigos"),
    text: "AMIGOS",
  },
  {
    id: 53,
    imgSrc: path("ajuda"),
    text: "AJUDA DO PROFESSOR",
  },

  // {
  //   id: 141,
  //   imgSrc: path("atividadesManuais"),
  //   text: "ATIVIDADES MANUAIS",
  // },
];

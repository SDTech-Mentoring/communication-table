const images = require.context("../images/atividadeEscolarImg", false, /\.png$/);
const path=(name)=>{
 return images(`./${name}.png`);

};


export const AtividadeData=[

  {
    id: 20,
    imgSrc: path("agua"),
    text: "ÁGUA",
  },
  {
    id: 22,
    imgSrc: path("carroEscolar"),
    text: "TRANSPORTE ESCOLAR",
  },
  {
    id: 23,
    imgSrc: path("jogarNoLixo"),
    text: "JOGAR LIXO",
  },

  {
    id: 12,
    imgSrc: path("assistirAula"),
    text: "AULA",
  },
  {
    id: 48,
    imgSrc: path("amassar"),
    text: "AMASSAR",
  },

  {
  id:3,
  imgSrc:path('atividadesManuais'),
  text:"ATIVIDADES MANUAIS",

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





];


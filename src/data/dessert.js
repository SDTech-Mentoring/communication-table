const images = require.context("../images/dessert", false, /\.png$/);
const path = (name) => {
  return images(`./${name}.png`);
};

export const SobremesaData = [
  {
    id: 1,
    imgSrc: path("casquinha"),
    text: "CASQUINHA",
  },
  {
    id: 2,
    imgSrc: path("casquinhaDeChocolate"),
    text: "SORVETE DE CHOCOLATE",
  },

  {
    id: 3,
    imgSrc: path("alfajorDoceLeite"),
    text: "ALFAJOR DOCE DE LEITE",
  },
  {
    id: 4,
    imgSrc: path("alfajorAmendoas"),
    text: "ALFAJOR AMENDOAS",
  },

  {
    id: 5,
    imgSrc: path("bolachasChocolate"),
    text: "BOLACHAS DE CHOCOLATE",
  },
  {
    id: 6,
    imgSrc: path("bolachas"),
    text: "BOLACHAS",
  },

  {
    id: 7,
    imgSrc: path("bolachasLeite"),
    text: "BOLACHAS DE LEITE",
  },

  {
    id: 8,
    imgSrc: path("bolachasOreo"),
    text: "BOLACHAS OREO",
  },

  {
    id: 9,
    imgSrc: path("bolo"),
    text: "BOLO",
  },

  {
    id: 10,
    imgSrc: path("boloAniversario"),
    text: "BOLO DE ANIVERSÁRIO",
  },

  {
    id: 11,
    imgSrc: path("boloCasamento"),
    text: "BOLO DE CASAMENTO",
  },

  {
    id: 12,
    imgSrc: path("boloCenoura"),
    text: "BOLO DE CENOURA",
  },

  {
    id: 13,
    imgSrc: path("boloChocolate"),
    text: "BOLO DE CHOCOLATE",
  },

  {
    id: 14,
    imgSrc: path("boloCreme"),
    text: "BOLO DE CREME",
  },

  {
    id: 15,
    imgSrc: path("bombons"),
    text: "BOMBONS",
  },

  {
    id: 16,
    imgSrc: path("caracolCanela"),
    text: "CARACOL DE CANELA",
  },

  {
    id: 17,
    imgSrc: path("churros"),
    text: "CHURROS",
  },

  {
    id: 18,
    imgSrc: path("donut"),
    text: "DONUT",
  },

  {
    id: 19,
    imgSrc: path("gelatinaMorango"),
    text: "GELATINA DE MORANGO",
  },

  {
    id: 20,
    imgSrc: path("muffinBaunilha"),
    text: "MUFFIN DE BAUNILHA",
  },

  {
    id: 21,
    imgSrc: path("muffinChocolate"),
    text: "MUFFIN DE CHOCOLATE",
  },

  {
    id: 22,
    imgSrc: path("pudinFlan"),
    text: "PUDIN FLAN",
  },

  {
    id: 22,
    imgSrc: path("rosquinha"),
    text: "ROSQUINHA",
  },
  {
    id: 23,
    imgSrc: path("torraoChocolate"),
    text: "TORRÃO DE CHOCOLATE",
  },
  {
    id: 24,
    imgSrc: path("tortaCreme"),
    text: "TORTA DE CREME",
  },
  {
    id: 25,
    imgSrc: path("torta"),
    text: "TORTA",
  },

  {
    id: 26,
    imgSrc: path("tortaMaca"),
    text: "TORTA DE MAÇÃ",
  },

  {
    id: 27,
    imgSrc: path("tortaQueijo"),
    text: "TORTA DE QUEIJO",
  },
  {
    id: 28,
    imgSrc: path("tortaChocolate"),
    text: "TORTA DE CHOCOLATE",
  },
  {
    id: 29,
    imgSrc: path("yogurte"),
    text: "IOGURTE",
  },

  {
    id: 30,
    imgSrc: path("pudimDeChocolate"),
    text: "PUDIM DE CHOCOLATE",
  },

  {
    id: 31,
    imgSrc: path("panetone"),
    text: "PANETONE",
  },

  {
    id: 32,
    imgSrc: path("panqueca"),
    text: "PANQUECA",
  },

  {
    id: 33,
    imgSrc: path("poteSorvete"),
    text: "POTE DE SORVETE",
  },

  {
    id: 34,
    imgSrc: path("merengue"),
    text: "MERENGUE",
  },

  {
    id: 35,
    imgSrc: path("torrao"),
    text: "TORRÃO",
  },
  /*{
      id:1,
      imgSrc:path(""),
      text:"",
      },*/
];
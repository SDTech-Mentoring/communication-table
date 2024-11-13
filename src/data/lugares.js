const images = require.context("../images/places", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const lugaresData = [
  {
    id: 1,
    imgSrc: path("capela"),
    text: "igreja",
  },
  {
    id: 3,
    imgSrc: path("casaCampo"),
    text: "casa no campo",
  },
  {
    id: 2,
    imgSrc: path("chacara"),
    text: "chácara",
  },

  {
    id: 3,
    imgSrc: path("cidade"),
    text: "cidade",
  },

  {
    id: 4,
    imgSrc: path("cinema"),
    text: "cinema",
  },
  {
    id: 4,
    imgSrc: path("hospital"),
    text: "hospital",
  },

  {
    id: 6,
    imgSrc: path("montanha"),
    text: "montanha",
  },

  {
    id: 7,
    imgSrc: path("museu"),
    text: "museu",
  },
  {
    id: 21,
    imgSrc: path("padaria"),
    text: "padaria",
  },

  {
    id: 9,
    imgSrc: path("parque"),
    text: "parque",
  },

  {
    id: 12,
    imgSrc: path("praia"),
    text: "praia",
  },



  {
    id: 19,
    imgSrc: path("restaurante"),
    text: "restaurante",
  },
  {
    id: 22,
    imgSrc: path("shopping"),
    text: "shopping",
  },
  {
    id: 23,
    imgSrc: path("zoologico"),
    text: "zoológico",
  },

  /*{
            id:,
            imgSrc:path(''),
            text:"",
            },*/
];

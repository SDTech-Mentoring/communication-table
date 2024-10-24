

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
    id: 5,
    imgSrc: path("mirante"),
    text: "mirante",
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
    id: 8,
    imgSrc: path("palacioGoverno"),
    text: "palácio do governo",
  },
  {
    id: 9,
    imgSrc: path("parque"),
    text: "parque",
  },

  {
    id: 10,
    imgSrc: path("piscina"),
    text: "piscina",
  },

  {
    id: 11,
    imgSrc: path("plantacao"),
    text: "plantação",
  },

  {
    id: 12,
    imgSrc: path("praia"),
    text: "praia",
  },

  {
    id: 13,
    imgSrc: path("horta"),
    text: "horta",
  },

  {
    id: 14,
    imgSrc: path("construcao"),
    text: "construcão",
  },
  {
    id: 15,
    imgSrc: path("obraGoverno"),
    text: "obra do governo",
  },
  {
    id: 16,
    imgSrc: path("oficina"),
    text: "oficina mecânica",
  },

  {
    id: 17,
    imgSrc: path("escritorio"),
    text: "escritório",
  },

  {
    id: 18,
    imgSrc: path("hospital"),
    text: "hospital",
  },

  /*{
            id:,
            imgSrc:path(''),
            text:"",
            },*/
];

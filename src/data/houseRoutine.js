

const images = require.context("../images/houseRoutine", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const HouseRoutineData = [
  {
    id: 1,
    imgSrc: path("acordar"),
    text: "acordar",
  },
  {
    id: 2,
    imgSrc: path("almoco"),
    text: "almoço",
  },
  {
    id: 3,
    imgSrc: path("brincar"),
    text: "brincar",
  },
  {
    id: 4,
    imgSrc: path("dormir"),
    text: "dormir",
  }, {
    id: 5,
    imgSrc: path("escovarDentes"),
    text: "escovar dentes",
  }, {
    id: 6,
    imgSrc: path("estudar"),
    text: "estudar",
  },
  {
    id: 7,
    imgSrc: path("irEscola"),
    text: "ir à escola",
  },
   {
    id: 8,
    imgSrc: path("jantar"),
    text: "jantar",
  },
  {
    id: 9,
    imgSrc: path("tomarBanho"),
    text: "tomar banho",
  },
  {
    id: 10,
    imgSrc: path("tomarLeite"),
    text: "tomar leite",
  },

  {
    id:11,
    imgSrc: path("verTv"),
    text: "ver tv",
  },

 {
    id: 12,
    imgSrc: path("familia"),
    text: "família",
  },
  {
    id: 13,
    imgSrc: path("irIgreja"),
    text: "ir igreja",
  },

   {
    id: 14,
    imgSrc: path("irMedico"),
    text: "ir ao médico",
  },
  /*{
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
  },*/

  /*{
            id:,
            imgSrc:path(''),
            text:"",
            },*/
];

const images = require.context("../images/schoolRoutine", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const RotinaData = [





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









  // {
  //   id: 141,
  //   imgSrc: path("atividadesManuais"),
  //   text: "ATIVIDADES MANUAIS",
  // },
];

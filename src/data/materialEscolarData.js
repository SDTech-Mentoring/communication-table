const images = require.context("../images/materialEscolar", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const MaterialEscolarData = [
  {
    id: 1,
    imgSrc: path("caderno"),
    text: "CADERNO",
  },
  {
    id: 2,
    imgSrc: path("lapis"),
    text: "LÁPIS",
  },
  {
    id: 3,
    imgSrc: path("caneta"),
    text: "CANETA",
  },
];

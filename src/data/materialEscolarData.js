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
  {
    id:33,
    imgSrc:path('apontador'),
    text:"APONTADOR"
  },
  {
    id:34,
    imgSrc:path('borracha'),
    text:"BORRACHA"
  },
  {
    id:35,
    imgSrc:path('gizDeCera'),
    text:"GIZ DE CÊRA"
  },
  {
    id:31,
    imgSrc:(path('lapisColorido')),
    text:"LÁPIS COLORIDO"
  },

  {
    id:35,
    imgSrc:(path('livro')),
    text:"LIVRO"
  },

  {
    id:37,
    imgSrc:(path('regua')),
    text:"RÉGUA"
  },
  {
    id:38,
    imgSrc:(path('tesoura')),
    text:"TESOURA"
  },
  {
    id:39,
    imgSrc:(path('colaBastao')),
    text:"COLA BASTÃO"
  },
  {
    id:40,
    imgSrc:(path('cola')),
    text:"COLA"
  },

];


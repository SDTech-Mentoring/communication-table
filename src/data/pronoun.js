const images = require.context("../images/pronoun", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};

export const pronounData = [
  {
    id: 1,
    imgSrc: path("eu"),
    text: "eu",
  },
  {
    id: 2,
    imgSrc: path("ela"),
    text: "ela",
  },
  {
    id: 3,
    imgSrc: path("ele"),
    text: "ele",
  },
  {
    id: 4,
    imgSrc: path("nos"),
    text: "nós",
  },
  {
    id: 5,
    imgSrc: path("voce"),
    text: "você",
  },

  {
    id: 6,
    imgSrc: path("voce"),
    text: "vocês",
  },


  {
    id: 7,
    imgSrc: path("aquele"),
    text: "aquele",
  },
  {
    id: 8,
    imgSrc: path("isso"),
    text: "isso",
  },
  {
    id: 9,
    imgSrc: path("isto"),
    text: "isto",
  },
  {
    id: 10,
    imgSrc: path("teu"),
    text: "teu",
  },
  {
    id: 11,
    imgSrc: path("meu"),
    text: "meu",
  },

  /*{
    id:,
    imgSrc:path(''),
    text:"",
    },*/
];

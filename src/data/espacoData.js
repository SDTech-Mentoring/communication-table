const images = require.context("../images/espacoImg", false, /\.png$/);
const path=(name)=>{
 return images(`./${name}.png`);

};


export const EspacoData=[
  {
  id:3,
  imgSrc:path('salaDosProfessores'),
  text:"SALA DOS PROFESSORES",

  },
  {
    id:70,
    imgSrc:(path('biblioteca')),
    text:"BIBLIOTECA"
  },
  {
    id:19,
    imgSrc:(path('banheiro')),
    text:"BANHEIRO"
  },
  {
    id:24,
    imgSrc:(path('banheiroParaDeficientes')),
    text:"BANHEIRO DEFICIENTES"
  },
  {
    id:25,
    imgSrc:(path('banheiroMeninas')),
    text:"BANHEIRO MENINAS"
  },

  {
    id:26,
    imgSrc:path('banheiroMeninos'),
    text:"BANHEIRO MENINOS"
  },
  {
    id: 8,
    imgSrc: path("salaDeAula"),
    text: "SALA DE AULA",
  },
  {
    id: 9,
    imgSrc: path("refeitorio"),
    text: "REFEITÓRIO",
  },
  {
    id: 13,
    imgSrc: path("quadra"),
    text: "QUADRA",
  },


];


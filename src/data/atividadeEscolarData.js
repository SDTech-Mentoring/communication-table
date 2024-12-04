const images = require.context("../images/atividadeEscolarImg", false, /\.png$/);
const path=(name)=>{
 return images(`./${name}.png`);

};


export const AtividadeData=[
  {
  id:3,
  imgSrc:path('atividadesManuais'),
  text:"ATIVIDADES MANUAIS",

  },



];


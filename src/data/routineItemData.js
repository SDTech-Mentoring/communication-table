const images = require.context("../images/routineImg", false, /\.png$/);
const path=(name)=>{
 return images(`./${name}.png`);

};


export const RoutineItemData=[
  {
  id:3,
  imgSrc:path('entrada'),
  text:"CHEGADA",

  },

  {
    id:4,
    imgSrc:path("sairEscola"),
    text:"SAÍDA"

  },
];

export default RoutineItemData;
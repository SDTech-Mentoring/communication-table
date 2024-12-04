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
  {
    id:18,
    imgSrc:path('aulaDeCienciasSociais'),
    text:"AULA DE CIÊNCIAS"
  },
  {
    id:14,
    imgSrc:path('aulaDeEducacaoFisica'),
    text:"AULA EDUCAÇÃO FÍSICA"
  },
  {
    id:16,
    imgSrc:(path('aulaDeLinguaPortuguesa')),
    text:"AULA DE LÍNGUA PORTUGUESA"
  },
  {
    id:15,
    imgSrc:path('aulaDeMatematica'),
    text:"AULA DE MATEMÁTICA"
  },
  {
    id:17,
    imgSrc:(path('aulaDeTrabalhosManuais')),
    text:"TRABALHOS MANUAIS"
  },
  {
    id:117,
    imgSrc:(path('aulaLeitura')),
    text:"AULA DE LEITURA"
  },
  {
    id:171,
    imgSrc:(path('aulaMusica')),
    text:"AULA DE MÚSICA"
  },
  {
    id:49,
    imgSrc:(path('tecnologia')),
    text:"AULA DE TECNOLOGIA COMPUTADOR"
  },
];

export default RoutineItemData;
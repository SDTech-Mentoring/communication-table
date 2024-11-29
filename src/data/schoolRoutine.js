const images = require.context("../images/schoolRoutine", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};


export const RotinaData=[

    // {
    //   id:3,
    //   imgSrc: path('entrada'),
    //   text:"CHEGADA"
    // },
    // {
    //   id:4,
    //   imgSrc: path('sairEscola'),
    //   text:"SAÍDA"
    // },


    {
      id:7,
      imgSrc:path('salaDosProfessores'),
      text:"SALA DOS PROFESSORES"
    },
    {
      id:8,
      imgSrc:path('salaDeAula'),
      text:"SALA DE AULA"
    },
   {
      id:9,
      imgSrc:(path('refeitorio')),
      text:"REFEITÓRIO"
    },

    {
      id:12,
      imgSrc:(path('fazerAChamada')),
      text:"FAZER A CHAMADA"
    },
    {
      id:13,
      imgSrc:(path('quadra')),
      text:"QUADRA"
    },
    {
      id:14,
      imgSrc:path('aulaDeEducacaoFisica'),
      text:"AULA EDUCAÇÃO FÍSICA"
    },
    {
      id:15,
      imgSrc:path('aulaDeMatematica'),
      text:"AULA DE MATEMÁTICA"
    },
    {
      id:16,
      imgSrc:(path('aulaDeLinguaPortuguesa')),
      text:"AULA DE LÍNGUA PORTUGUESA"
    },
    {
      id:17,
      imgSrc:(path('aulaDeTrabalhosManuais')),
      text:"TRABALHOS MANUAIS"
    },
   {
      id:18,
      imgSrc:(path('aulaDeCienciasSociais')),
      text:"AULA DE CIÊNCIAS"
    },
    {
      id:19,
      imgSrc:(path('banheiro')),
      text:"BANHEIRO"
    },
    {
      id:20,
      imgSrc:(path('agua')),
      text:"ÁGUA"
    },
     {
      id:21,
      imgSrc:(path('materialEscolar')),
      text:"MATERIAL ESCOLAR",
      rota:'/materialEscolar'
    },
    {
      id:121,
      imgSrc:(path('rotinaEscolar')),
      text:"ROTINA ESCOLAR",
      rota:'/routine'
    },
   {
      id:22,
      imgSrc:(path('carroEscolar')),
      text:"TRANSPORTE ESCOLAR"
    },
     {
      id:23,
      imgSrc:(path('jogarNoLixo')),
      text:"LIXO"
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
      id:27,
      imgSrc:(path('tirarMaterial')),
      text:"TIRAR CADERNO"
    },
    {
      id:28,
      imgSrc:(path('guardarMaterial')),
      text:"GUARDAR CADERNOS"
    },

    {
      id:30,
      imgSrc:(path('lapis')),
      text:"LÁPIS"
    },
    {
      id:31,
      imgSrc:(path('lapisColorido')),
      text:"LÁPIS COLORIDO"
    },
    {
      id:32,
      imgSrc:(path('lapisDeCera')),
      text:"LÁPIS DE CERA"
    },
    {
      id:33,
      imgSrc:(path('apontador')),
      text:"APONTADOR"
    },
    {
      id:34,
      imgSrc:(path('borracha')),
      text:"BORRACHA"
    },
    {
      id:35,
      imgSrc:(path('livro')),
      text:"LIVRO"
    },
    {
      id:36,
      imgSrc:(path('caneta')),
      text:"CANETA"
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


    {
      id:42,
      imgSrc:(path('recortar')),
      text:"RECORTAR"
    },
   {
      id:43,
      imgSrc:(path('colar')),
      text:"COLAR"
    },
    {
      id:44,
      imgSrc:(path('pintar')),
      text:"PINTAR"
    },
    {
      id:45,
      imgSrc:(path('escrever')),
      text:"ESCREVER"
    },
     {
      id:46,
      imgSrc:(path('ler')),
      text:"LER"
    },
    {
      id:47,
      imgSrc:(path('rasgar')),
      text:"RASGAR"
    },
    {
      id:48,
      imgSrc:(path('amassar')),
      text:"AMASSAR"
    },
    {
      id:49,
      imgSrc:(path('tecnologia')),
      text:"TECNOLOGIA COMPUTADOR"
    },
    {
      id:50,
      imgSrc:(path('esporte')),
      text:"ESPORTE"
    },
    {
      id:51,
      imgSrc:(path('reuniaoProfessor')),
      text:"REUNIÃO COM PROFESSOR"
    },
    {
      id:70,
      imgSrc:(path('biblioteca')),
      text:"BIBLIOTECA"
    },
    {
      id:52,
      imgSrc:(path('amigos')),
      text:"AMIGOS"
    },
    {
      id:53,
      imgSrc:(path('ajuda')),
      text:"AJUDA DO PROFESSOR"
    },

    {
      id:141,
      imgSrc:(path('atividadesManuais')),
      text:"ATIVIDADES MANUAIS"
    },

    {
      id:142,
      imgSrc:(path('aulaLeitura')),
      text:"AULA DE LEITURA"
    },





  ];
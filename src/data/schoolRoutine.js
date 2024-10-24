const images = require.context("../images/schoolRoutine", false, /\.png$/);

const path = (name) => {
  return images(`./${name}.png`);
};


export const RotinaData=[
    {
    id:1,
    imgSrc: path('levarEscola'),
    text:"LEVAR NA ESCOLA"
    },
    {
      id:2,
      imgSrc:path('buscarNaEscola'),
      text:"BUSCAR NA ESCOLA"
    },
    {
      id:3,
      imgSrc: path('entrada'),
      text:"ENTRADA"
    },
    {
      id:4,
      imgSrc: path('saida'),
      text:"SAÍDA"
    },
    {
      id:5,
      imgSrc:(path('irParaCasa')),
      text:"IR PARA CASA"
    },
    {
      id:6,
      imgSrc:(path('irEscola')),
      text:"IR PARA ESCOLA"
    },
    {
      id:7,
      imgSrc:(path('salaDosProfessores')),
      text:"SALA DOS PROFESSORES"
    },
    {
      id:8,
      imgSrc:(path('salaDeAula')),
      text:"SALA DE AULA"
    },
   {
      id:9,
      imgSrc:(path('refeitorio')),
      text:"REFEITÓRIO"
    },
    {
      id:10,
      imgSrc:(path('aluno')),
      text:"ALUNO"
    },
     {
      id:11,
      imgSrc:(path('aluna')),
      text:"ALUNA"
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
      imgSrc:(path('aulaDeEducacaoFisica')),
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
      text:"AULA DE CIÊNCIAS SOCIAIS"
    },
    {
      id:19,
      imgSrc:(path('banheiro')),
      text:"BANHEIRO"
    },
    {
      id:20,
      imgSrc:(path('aguaPotavel')),
      text:"ÁGUA"
    },
     {
      id:21,
      imgSrc:(path('materialEscolar')),
      text:"MATERIAL ESCOLAR"
    },
   {
      id:22,
      imgSrc:(path('carroEscolar')),
      text:"PERUA ESCOLAR"
    },
     {
      id:23,
      imgSrc:(path('jogarNoLixo')),
      text:"JOGAR NO LIXO"
    },
    {
      id:24,
      imgSrc:(path('banheiroParaDeficientes')),
      text:"BANHEIRO PARA DEFICIENTES"
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
      id:29,
      imgSrc:(path('caderno')),
      text:"CADERNO"
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




  ];
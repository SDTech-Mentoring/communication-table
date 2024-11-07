const images = require.context("../images/toysGames", false, /\.png$/);
const path = (name) => {
  return images(`./${name}.png`);
};

export const toysGameData = [
  {
    id: 1,
    imgSrc: path("pularCorda"),
    text: "PULAR CORDA",
  },

  {
    id: 2,
    imgSrc: path("amarelinha"),
    text: "amarelinha",
  },

   {
    id:3,
    imgSrc: path("autorama"),
    text: "autorama",
  },
  {
    id: 4,
    imgSrc: path("balance"),
    text: "balanço",
  },
  {
    id:5 ,
    imgSrc: path("bexiga"),
    text: "balão",
  },
  {
    id: 6,
    imgSrc: path("baldePa"),
    text: "balde e pá",
  },
  {
    id:7 ,
    imgSrc: path("barbie"),
    text: "barbie",
  },

  {
    id:8 ,
    imgSrc: path("bilhar"),
    text: "bilhar",
  },
  {
    id:9 ,
    imgSrc: path("bingo"),
    text: "bingo"
  },
  {
    id:10 ,
    imgSrc: path("boliche"),
    text: "boliche",
  },
  {
    id:11 ,
    imgSrc: path("boneca"),
    text: "boneca",
  },
  {
    id:12 ,
    imgSrc: path("boneco"),
    text: "boneco",
  },
  {
    id:13 ,
    imgSrc: path("cama"),
    text: "cama elástica",
  },
  {
    id:14 ,
    imgSrc: path("caminhao"),
    text: "caminhão",
  },
  {
    id:15 ,
    imgSrc: path("catavento"),
    text: "cata-vento",
  },
  {
    id:16 ,
    imgSrc: path("cavaloBalanco"),
    text: "cavalo de balanço",
  },
  {
    id:17 ,
    imgSrc: path("console"),
    text: "video game",
  },
  {
    id:18 ,
    imgSrc: path("dados"),
    text: "dados",
  },
  {
    id:19 ,
    imgSrc: path("damas"),
    text: "damas",
  },
  {
    id:20 ,
    imgSrc: path("domino"),
    text: "dominó",
  },
  {
    id:21 ,
    imgSrc: path("encaixes"),
    text: "encaixes",
  },
  {
    id:22 ,
    imgSrc: path("escalar"),
    text: "escalar",
  },
  {
    id:23 ,
    imgSrc: path("escorrega"),
    text: "escorrega",
  },
  {
    id:24 ,
    imgSrc: path("fantoche"),
    text: "fantoche",
  },
  {
    id:25 ,
    imgSrc: path("gira-gira"),
    text: "gira-gira",
  },
  {
    id:26 ,
    imgSrc: path("ioio"),
    text: "ioiô",
  },
  {
    id:27 ,
    imgSrc: path("jogarCelular"),
    text: "jogar no celular",
  },
  {
    id:28 ,
    imgSrc: path("jogarComputador"),
    text: "jogar no computador",
  },
  {
    id:29 ,
    imgSrc: path("jogarTablete"),
    text: "jogar no tablet",
  },
  {
    id:30 ,
    imgSrc: path("jogoArgola"),
    text: "jogo de argolas",
  },
  {
    id:31 ,
    imgSrc: path("labirinto"),
    text: "labirinto",
  },
  {
    id:32 ,
    imgSrc: path("pa"),
    text: "pá",
  },
  {
    id:33 ,
    imgSrc: path("parqueInfantil"),
    text: "parque infantil",
  },
  {
    id:34 ,
    imgSrc: path("pebolim"),
    text: "pebolim",
  },
  {
    id:35 ,
    imgSrc: path("pecasLego"),
    text: "peças de lego",
  },
  {
    id:35 ,
    imgSrc: path("pipa"),
    text: "pipa",
  },
  {
    id:36 ,
    imgSrc: path("piscina"),
    text: "piscina de água",
  },
  {
    id:37 ,
    imgSrc: path("pularCorda"),
    text: "pular Corda",
  },

  {
    id:38 ,
    imgSrc: path("guardarBrinquedos"),
    text: "guardar brinquedos",
  },

  {
    id:39 ,
    imgSrc: path("quebraCabeca"),
    text: "quebra cabeça",
  },
  {
    id:40 ,
    imgSrc: path("rastelo"),
    text: "rastelo",
  },
  {
    id:41 ,
    imgSrc: path("tetris"),
    text: "tetris",
  },
  {
    id:42 ,
    imgSrc: path("tirolesa"),
    text: "tirolesa",
  },
  {
    id:43 ,
    imgSrc: path("triciclo"),
    text: "triciclo",
  },
  {
    id:44 ,
    imgSrc: path("urso"),
    text: "ursinho",
  },
  {
    id:45 ,
    imgSrc: path("xadrez"),
    text: "xadrez",
  },
  {
    id:46 ,
    imgSrc: path("bola"),
    text: "bola",
  },
  {
    id:47 ,
    imgSrc: path("sacoBrinquedo"),
    text: "saco de brinquedos",
  },
  {
    id:48 ,
    imgSrc: path("cubo"),
    text: "cubo",
  },
  {
    id:49 ,
    imgSrc: path("piscinaAreia"),
    text: "piscina de Areia",
  },
  {
    id:50 ,
    imgSrc: path("skate"),
    text: "skate",
  },
  {
    id:51 ,
    imgSrc: path("pacMan"),
    text: "pac man",
  },
  {
    id:52 ,
    imgSrc: path("cartas"),
    text: "jogos de carta",
  },
  {
    id:53 ,
    imgSrc: path("cozinha"),
    text: "cozinha de brincar",
  },
  {
    id:54 ,
    imgSrc: path("patins"),
    text: "patins",
  },
  {
    id:55 ,
    imgSrc: path("dardos"),
    text: "Jogo com Dardos",
  },




  // /*{
  //     id:1,
  //     imgSrc:path(""),
  //     text:"",
  //     },*/
];
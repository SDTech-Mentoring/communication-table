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
     id: 2,
     imgSrc: path("atravessarPonte"),
     text: "atravessar ponte",
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
    imgSrc: path("balao"),
    text: "balao",
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
    text: "cata-ventos",
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
    text: "escorregador",
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
    text: "jogar tablet",
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
    imgSrc: path("piscinaAgua"),
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




  // {
  //   id: 3,
  //   imgSrc: path("alfajorDoceLeite"),
  //   text: "ALFAJOR DOCE DE LEITE",
  // },
  // {
  //   id: 4,
  //   imgSrc: path("alfajorAmendoas"),
  //   text: "ALFAJOR AMENDOAS",
  // },

  // {
  //   id: 5,
  //   imgSrc: path("bolachasChocolate"),
  //   text: "BOLACHAS DE CHOCOLATE",
  // },
  // {
  //   id: 6,
  //   imgSrc: path("bolachas"),
  //   text: "BOLACHAS",
  // },

  // {
  //   id: 7,
  //   imgSrc: path("bolachasLeite"),
  //   text: "BOLACHAS DE LEITE",
  // },

  // {
  //   id: 8,
  //   imgSrc: path("bolachasOreo"),
  //   text: "BOLACHAS OREO",
  // },

  // {
  //   id: 9,
  //   imgSrc: path("bolo"),
  //   text: "BOLO",
  // },

  // {
  //   id: 10,
  //   imgSrc: path("boloAniversario"),
  //   text: "BOLO DE ANIVERSÁRIO",
  // },

  // {
  //   id: 11,
  //   imgSrc: path("boloCasamento"),
  //   text: "BOLO DE CASAMENTO",
  // },

  // {
  //   id: 12,
  //   imgSrc: path("boloCenoura"),
  //   text: "BOLO DE CENOURA",
  // },

  // {
  //   id: 13,
  //   imgSrc: path("boloChocolate"),
  //   text: "BOLO DE CHOCOLATE",
  // },

  // {
  //   id: 14,
  //   imgSrc: path("boloCreme"),
  //   text: "BOLO DE CREME",
  // },

  // {
  //   id: 15,
  //   imgSrc: path("bombons"),
  //   text: "BOMBONS",
  // },

  // {
  //   id: 16,
  //   imgSrc: path("caracolCanela"),
  //   text: "CARACOL DE CANELA",
  // },

  // {
  //   id: 17,
  //   imgSrc: path("churros"),
  //   text: "CHURROS",
  // },

  // {
  //   id: 18,
  //   imgSrc: path("donut"),
  //   text: "DONUT",
  // },

  // {
  //   id: 19,
  //   imgSrc: path("gelatinaMorango"),
  //   text: "GELATINA DE MORANGO",
  // },

  // {
  //   id: 20,
  //   imgSrc: path("muffinBaunilha"),
  //   text: "MUFFIN DE BAUNILHA",
  // },

  // {
  //   id: 21,
  //   imgSrc: path("muffinChocolate"),
  //   text: "MUFFIN DE CHOCOLATE",
  // },

  // {
  //   id: 22,
  //   imgSrc: path("pudinFlan"),
  //   text: "PUDIN FLAN",
  // },

  // {
  //   id: 22,
  //   imgSrc: path("rosquinha"),
  //   text: "ROSQUINHA",
  // },
  // {
  //   id: 23,
  //   imgSrc: path("torraoChocolate"),
  //   text: "TORRÃO DE CHOCOLATE",
  // },
  // {
  //   id: 24,
  //   imgSrc: path("tortaCreme"),
  //   text: "TORTA DE CREME",
  // },
  // {
  //   id: 25,
  //   imgSrc: path("torta"),
  //   text: "TORTA",
  // },

  // {
  //   id: 26,
  //   imgSrc: path("tortaMaca"),
  //   text: "TORTA DE MAÇA",
  // },

  // {
  //   id: 27,
  //   imgSrc: path("tortaQueijo"),
  //   text: "TORTA DE QUEIJO",
  // },
  // {
  //   id: 28,
  //   imgSrc: path("tortaChocolate"),
  //   text: "TORTA DE CHOCOLATE",
  // },
  // {
  //   id: 29,
  //   imgSrc: path("yogurte"),
  //   text: "IOGURTE",
  // },

  // {
  //   id: 30,
  //   imgSrc: path("pudimDeChocolate"),
  //   text: "PUDIM DE CHOCOLATE",
  // },

  // {
  //   id: 31,
  //   imgSrc: path("panetone"),
  //   text: "PANETONE",
  // },

  // {
  //   id: 32,
  //   imgSrc: path("panqueca"),
  //   text: "PANQUECA",
  // },

  // {
  //   id: 33,
  //   imgSrc: path("poteSorvete"),
  //   text: "POTE DE SORVETE",
  // },

  // {
  //   id: 34,
  //   imgSrc: path("merengue"),
  //   text: "MERENGUE",
  // },

  // {
  //   id: 35,
  //   imgSrc: path("torrao"),
  //   text: "TORRÃO",
  // },
  // /*{
  //     id:1,
  //     imgSrc:path(""),
  //     text:"",
  //     },*/
];
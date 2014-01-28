/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'scena2_soba',
            type:'image',
            rect:['0px','-53px','1280px','853px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena2_soba.png",'0px','0px']
         },
         {
            id:'scena2_ormari_back',
            type:'image',
            rect:['80px','-53px','1200px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena2_ormari_back.png",'0px','0px']
         },
         {
            id:'ormar1',
            type:'rect',
            rect:['85','-46','auto','auto','auto','auto']
         },
         {
            id:'ormar2',
            type:'rect',
            rect:['272','271','auto','auto','auto','auto']
         },
         {
            id:'ormar3',
            type:'rect',
            rect:['459','271','auto','auto','auto','auto']
         },
         {
            id:'pecnica',
            type:'rect',
            rect:['644','271','auto','auto','auto','auto']
         },
         {
            id:'ormar4',
            type:'rect',
            rect:['883','271','auto','auto','auto','auto']
         },
         {
            id:'ormar5',
            type:'rect',
            rect:['1070','-46','auto','auto','auto','auto']
         },
         {
            id:'prozor1',
            type:'rect',
            rect:['361','0','auto','auto','auto','auto']
         },
         {
            id:'prozor2',
            type:'rect',
            rect:['687','0','auto','auto','auto','auto']
         },
         {
            id:'mis2',
            type:'rect',
            rect:['0','597','auto','auto','auto','auto']
         },
         {
            id:'crvenkapica1',
            type:'rect',
            rect:['157','336','auto','auto','auto','auto']
         },
         {
            id:'mama1',
            type:'rect',
            rect:['337','111','auto','auto','auto','auto']
         },
         {
            id:'kolaciivino',
            type:'rect',
            rect:['898','104','auto','auto','auto','auto']
         },
         {
            id:'scena2_kosara',
            type:'image',
            rect:['343px','598px','205px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena2_kosara.png",'0px','0px']
         },
         {
            id:'text_slide2',
            type:'rect',
            rect:['1225','54','auto','auto','auto','auto']
         },
         {
            id:'meni2',
            type:'rect',
            rect:['147','745','auto','auto','auto','auto']
         },
         {
            id:'button_back',
            type:'image',
            rect:['16px','670px','75px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_back.png",'0px','0px']
         },
         {
            id:'button_next',
            type:'image',
            rect:['1187px','669px','75px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_next.png",'0px','0px']
         },
         {
            id:'button_play_',
            type:'rect',
            rect:['190','10','auto','auto','auto','auto']
         },
         {
            id:'button_stop_',
            type:'rect',
            rect:['195','10','auto','auto','auto','auto']
         },
         {
            id:'button_meni',
            type:'image',
            rect:['15px','10px','75px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_meni.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'button_stop_',
            symbolName:'button_stop_'
         },
         {
            id:'ormar4',
            symbolName:'ormar4_'
         },
         {
            id:'button_play_',
            symbolName:'button_play_'
         },
         {
            id:'prozor2',
            symbolName:'prozor2'
         },
         {
            id:'mis2',
            symbolName:'mis'
         },
         {
            id:'ormar1',
            symbolName:'ormar1'
         },
         {
            id:'meni2',
            symbolName:'meni'
         },
         {
            id:'pecnica',
            symbolName:'pecnica_'
         },
         {
            id:'text_slide2',
            symbolName:'text_slide'
         },
         {
            id:'ormar2',
            symbolName:'ormar2'
         },
         {
            id:'ormar3',
            symbolName:'ormar33'
         },
         {
            id:'prozor1',
            symbolName:'prozor1'
         },
         {
            id:'crvenkapica1',
            symbolName:'crvenkapica1'
         },
         {
            id:'ormar5',
            symbolName:'ormar5_'
         },
         {
            id:'kolaciivino',
            symbolName:'kolaciivino'
         },
         {
            id:'mama1',
            symbolName:'mama1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_mis2}": [
            ["style", "top", '547px'],
            ["style", "left", '16px']
         ],
         "${_button_play_}": [
            ["style", "left", '105px']
         ],
         "${_pecnica}": [
            ["style", "left", '644px']
         ],
         "${_crvenkapica1}": [
            ["style", "clip", [0,298,464,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_scena2_kosara}": [
            ["style", "height", '200px'],
            ["style", "top", '598px'],
            ["style", "left", '343px'],
            ["style", "width", '205px']
         ],
         "${_scena2_soba}": [
            ["style", "top", '-53px'],
            ["style", "height", '853px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_mama1}": [
            ["style", "clip", [0,428,664,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_scena2_ormari_back}": [
            ["style", "top", '-53px'],
            ["style", "height", '650px'],
            ["style", "left", '80px'],
            ["style", "width", '1200px']
         ],
         "${_ormar3}": [
            ["style", "left", '459px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1280px'],
            ["style", "height", '755px'],
            ["style", "overflow", 'hidden']
         ],
         "${_button_next}": [
            ["style", "height", '75px'],
            ["style", "top", '669px'],
            ["style", "left", '1187px'],
            ["style", "width", '75px']
         ],
         "${_button_back}": [
            ["style", "height", '75px'],
            ["style", "top", '670px'],
            ["style", "left", '16px'],
            ["style", "width", '75px']
         ],
         "${_button_meni}": [
            ["style", "left", '15px'],
            ["style", "top", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid178", tween: [ "style", "${_mis2}", "left", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
            { id: "eid175", tween: [ "style", "${_Stage}", "height", '755px', { fromValue: '755px'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_mis2}", "top", '547px', { fromValue: '547px'}], position: 0, duration: 0 }         ]
      }
   }
},
"ormar1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar1',
      type: 'group',
      rect: ['0px','0px','196px','641px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar1_closed',
         type: 'image',
         rect: ['85px','-48px','196px','641px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar1_closed.png','0px','0px']
      },
      {
         rect: ['226px','0px','196px','641px','auto','auto'],
         id: 'scena2_ormar1_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar1_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar1_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '641px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar1_open}": [
            ["style", "top", '0px'],
            ["style", "height", '641px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '641px'],
            ["style", "width", '196px']
         ],
         "${_ormar1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "style", "${_scena2_ormar1_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_scena2_ormar1_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid10", tween: [ "style", "${_scena2_ormar1_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar2',
      type: 'group',
      rect: ['0px','0px','196px','324px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar2_closed',
         type: 'image',
         rect: ['413px','442px','196px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar2_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['272px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar2_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar2_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ormar2}": [
            ["style", "height", '324px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar2_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar2_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '324px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid14", tween: [ "style", "${_scena2_ormar2_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid12", tween: [ "style", "${_scena2_ormar2_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_scena2_ormar2_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar3',
      type: 'group',
      rect: ['613px','232px','196px','324px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar3_closed',
         type: 'image',
         rect: ['613px','232px','196px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar3_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['459px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar3_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar3_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar3_open}": [
            ["style", "top", '-232px'],
            ["style", "display", 'none'],
            ["style", "height", '324px'],
            ["style", "left", '-613px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar3_closed}": [
            ["style", "top", '-232px'],
            ["style", "display", 'block'],
            ["style", "height", '324px'],
            ["style", "left", '-613px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '595px'],
            ["style", "width", '809px']
         ],
         "${_ormar3}": [
            ["style", "top", '232px'],
            ["style", "height", '324px'],
            ["style", "left", '613px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_scena2_ormar3_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_scena2_ormar3_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_scena2_ormar3_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"pecnica": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pecnica',
      type: 'group',
      rect: ['800px','232px','247px','324px','auto','auto'],
      c: [
      {
         id: 'pecnica_closed',
         type: 'image',
         rect: ['800px','232px','247px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pecnica_closed.png','0px','0px']
      },
      {
         rect: ['646px','271px','247px','324px','auto','auto'],
         id: 'pecnica_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/pecnica_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pecnica}": [
            ["style", "top", '232px'],
            ["style", "height", '324px'],
            ["style", "left", '800px'],
            ["style", "width", '247px']
         ],
         "${_pecnica_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ],
         "${_pecnica_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ],
         "${symbolSelector}": [
            ["style", "height", '595px'],
            ["style", "width", '1047px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "style", "${_pecnica_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_pecnica_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid21", tween: [ "style", "${_pecnica_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar4": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar4',
      type: 'group',
      rect: ['1039px','232px','196px','324px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar4_closed',
         type: 'image',
         rect: ['1039px','232px','196px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar4_closed.png','0px','0px']
      },
      {
         rect: ['885px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar4_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar4_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar4_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar4_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_ormar4}": [
            ["style", "top", '232px'],
            ["style", "height", '324px'],
            ["style", "left", '1039px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '595px'],
            ["style", "width", '1235px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid25", tween: [ "style", "${_scena2_ormar4_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_scena2_ormar4_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_scena2_ormar4_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar5": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar5',
      type: 'group',
      rect: ['1226px','46px','205px','641','auto','auto'],
      c: [
      {
         id: 'scena2_ormar5_closed',
         type: 'image',
         rect: ['1226px','0px','205px','641px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar5_closed.png','0px','0px']
      },
      {
         rect: ['1072px','-46px','205px','641px','auto','auto'],
         id: 'scena2_ormar5_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar5_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '687px'],
            ["style", "width", '1431px']
         ],
         "${_scena2_ormar5_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '641px'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ],
         "${_ormar5}": [
            ["style", "top", '46px'],
            ["style", "left", '1226px'],
            ["style", "width", '205px']
         ],
         "${_scena2_ormar5_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '641px'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_scena2_ormar5_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_scena2_ormar5_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_scena2_ormar5_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar33": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar3',
      type: 'group',
      rect: ['0px','0px','196px','324px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar3_closed',
         type: 'image',
         rect: ['173px','31px','196px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar3_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['459px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar3_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar3_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar3_open}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar3_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${symbolSelector}": [
            ["style", "height", '324px'],
            ["style", "width", '196px']
         ],
         "${_ormar3}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid70", tween: [ "style", "${_scena2_ormar3_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_scena2_ormar3_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_scena2_ormar3_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"pecnica_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pecnica',
      type: 'group',
      rect: ['0px','0px','247px','324px','auto','auto'],
      c: [
      {
         id: 'pecnica_closed',
         type: 'image',
         rect: ['643px','271px','247px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pecnica_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['692px','286px','247px','324px','auto','auto'],
         id: 'pecnica_open',
         fill: ['rgba(0,0,0,0)','images/pecnica_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pecnica}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ],
         "${_pecnica_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ],
         "${_pecnica_open}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ],
         "${symbolSelector}": [
            ["style", "height", '324px'],
            ["style", "width", '247px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid79", tween: [ "style", "${_pecnica_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_pecnica_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_pecnica_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar4_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar4',
      type: 'group',
      rect: ['0px','0px','196','324','auto','auto'],
      c: [
      {
         id: 'scena2_ormar4_closed',
         type: 'image',
         rect: ['0px','0px','196px','324px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar4_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['0px','0px','196px','324px','auto','auto'],
         id: 'scena2_ormar4_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar4_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar4_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_ormar4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_scena2_ormar4_open}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '324px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid88", tween: [ "style", "${_scena2_ormar4_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid86", tween: [ "style", "${_scena2_ormar4_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_scena2_ormar4_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"ormar5_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ormar5',
      type: 'group',
      rect: ['0px','0px','205px','641px','auto','auto'],
      c: [
      {
         id: 'scena2_ormar5_closed',
         type: 'image',
         rect: ['1070px','-46px','205px','641px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_ormar5_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['260px','0px','205px','641px','auto','auto'],
         id: 'scena2_ormar5_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar5_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_ormar5_open}": [
            ["style", "top", '0px'],
            ["style", "height", '641px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ],
         "${_ormar5}": [
            ["style", "top", '0px'],
            ["style", "height", '641px'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ],
         "${_scena2_ormar5_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '641px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ],
         "${symbolSelector}": [
            ["style", "height", '641px'],
            ["style", "width", '205px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid89", tween: [ "style", "${_scena2_ormar5_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_scena2_ormar5_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid91", tween: [ "style", "${_scena2_ormar5_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"prozor1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'prozor1',
      type: 'group',
      rect: ['0px','0px','196px','243px','auto','auto'],
      c: [
      {
         id: 'scena2_prozor1_closed',
         type: 'image',
         rect: ['741px','213px','196px','243px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_prozor1_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['361px','0px','196px','243px','auto','auto'],
         id: 'scena2_prozor1_open',
         fill: ['rgba(0,0,0,0)','images/scena2_prozor1_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_prozor1_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '243px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_prozor1}": [
            ["style", "top", '0px'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_prozor1_open}": [
            ["style", "top", '0px'],
            ["style", "height", '243px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid95", tween: [ "style", "${_scena2_prozor1_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_scena2_prozor1_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid97", tween: [ "style", "${_scena2_prozor1_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"prozor2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'prozor2',
      type: 'group',
      rect: ['0px','0px','196','243','auto','auto'],
      c: [
      {
         id: 'scena2_prozor2_closed',
         type: 'image',
         rect: ['0px','0px','196px','243px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_prozor2_closed.png','0px','0px']
      },
      {
         type: 'image',
         display: 'none',
         rect: ['0px','0px','196px','243px','auto','auto'],
         id: 'scena2_prozor2_open',
         fill: ['rgba(0,0,0,0)','images/scena2_prozor2_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_prozor2_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '243px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_prozor2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_scena2_prozor2_open}": [
            ["style", "top", '0px'],
            ["style", "height", '243px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid101", tween: [ "style", "${_scena2_prozor2_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_scena2_prozor2_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid103", tween: [ "style", "${_scena2_prozor2_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"mis": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mis',
      type: 'group',
      rect: ['-7px','13px','205','101','auto','auto'],
      c: [
      {
         id: 'scena2_misjarupa',
         type: 'image',
         rect: ['32px','28px','9px','73px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena2_misjarupa.png','0px','0px']
      },
      {
         rect: ['-8px','0px','205px','99px','auto','auto'],
         id: 'scena2_mis',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_mis.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_mis}": [
            ["style", "top", '2px'],
            ["style", "height", '99px'],
            ["style", "display", 'none'],
            ["style", "left", '-221px'],
            ["style", "width", '205px']
         ],
         "${_mis}": [
            ["style", "left", '-7px'],
            ["style", "top", '13px']
         ],
         "${_scena2_misjarupa}": [
            ["style", "top", '-38px'],
            ["style", "height", '139px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '101px'],
            ["style", "width", '205px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid196", tween: [ "style", "${_scena2_misjarupa}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_scena2_mis}", "left", '1282px', { fromValue: '-221px'}], position: 95, duration: 1155 },
            { id: "eid184", tween: [ "style", "${_scena2_misjarupa}", "height", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_scena2_misjarupa}", "width", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_scena2_mis}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0 },
            { id: "eid185", tween: [ "style", "${_scena2_misjarupa}", "top", '-38px', { fromValue: '-38px'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_scena2_misjarupa}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"crvenkapica1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','2980px','464px','auto','auto'],
      id: 'scena2_crvenkapica_sprite',
      type: 'image',
      clip: ['rect(0px 298px 464px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena2_crvenkapica_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_crvenkapica_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '464px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,298,464,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '2980px']
         ],
         "${symbolSelector}": [
            ["style", "height", '464px'],
            ["style", "width", '2980px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1350,
         autoPlay: true,
         timeline: [
            { id: "eid130", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-298,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 150, duration: 0 },
            { id: "eid131", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-596,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-298,0]}], position: 300, duration: 0 },
            { id: "eid133", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-894,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-596,0]}], position: 450, duration: 0 },
            { id: "eid134", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-1192,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-894,0]}], position: 600, duration: 0 },
            { id: "eid135", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-1490,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1192,0]}], position: 750, duration: 0 },
            { id: "eid136", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-1788,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1490,0]}], position: 900, duration: 0 },
            { id: "eid137", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-2086,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1788,0]}], position: 1050, duration: 0 },
            { id: "eid138", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-2384,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2086,0]}], position: 1200, duration: 0 },
            { id: "eid139", tween: [ "style", "${_scena2_crvenkapica_sprite}", "background-position", [-2682,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2384,0]}], position: 1350, duration: 0 }         ]
      }
   }
},
"meni": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'meni',
      type: 'image',
      rect: ['0px','0px','994px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/meni.png','0px','0px']
   },
   {
      id: 'str5',
      type: 'image',
      rect: ['754px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/5.png','0px','0px']
   },
   {
      id: 'str4',
      type: 'image',
      rect: ['520px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/4.png','0px','0px']
   },
   {
      id: 'str3',
      type: 'image',
      rect: ['283px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/3.png','0px','0px']
   },
   {
      id: 'str1',
      type: 'image',
      rect: ['49px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_str5}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '754px'],
            ["style", "width", '195px']
         ],
         "${_meni}": [
            ["style", "height", '243px'],
            ["style", "top", '-48px'],
            ["style", "left", '0px'],
            ["style", "width", '994px']
         ],
         "${_str4}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '520px'],
            ["style", "width", '195px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '994px']
         ],
         "${_str1}": [
            ["style", "left", '49px'],
            ["style", "top", '37px']
         ],
         "${_str3}": [
            ["style", "height", '130px'],
            ["style", "top", '37px'],
            ["style", "left", '283px'],
            ["style", "width", '195px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid191", tween: [ "style", "${_str3}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid192", tween: [ "style", "${_str3}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid187", tween: [ "style", "${_str5}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid188", tween: [ "style", "${_str5}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid197", tween: [ "style", "${_str1}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid198", tween: [ "style", "${_str1}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid189", tween: [ "style", "${_str4}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid190", tween: [ "style", "${_str4}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_meni}", "top", '-236px', { fromValue: '-48px'}], position: 0, duration: 1000 },
            { id: "eid151", tween: [ "style", "${_meni}", "top", '-48px', { fromValue: '-236px'}], position: 1000, duration: 1000 }         ]
      }
   }
},
"text_slide": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'text_slide',
      type: 'image',
      rect: ['0px','0px','564px','678px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/text_slide.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['70','18','476px','640px','auto','auto'],
      id: 'Text2',
      text: 'Jednog dana majka je rekla Crvenkapici: <br>\"Draga moja, ovdje je kolač koji sam ispekla i boca vina, odnesi to svojoj baki jer je bolesna i slaba i to će joj pomoći da ozdravi. Otiđi odmah, dok još nije prevruće i hodaj pažljivo i polako i nikako nemoj skretati sa puta. Kada dođeš kod bake nemoj zaboraviti reći \'Dobro jutro\' i nemoj zaviriti u svaki kutak prije nego što to kažeš.\"<br>\"Biti ću pažljiva i neću skretati s puta\" svečano obeća Crvenkapica.<br>',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',25,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '761px']
         ],
         "${symbolSelector}": [
            ["style", "height", '761px'],
            ["style", "width", '564px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "height", '640px'],
            ["style", "width", '476px'],
            ["style", "left", '70px'],
            ["style", "font-size", '25px']
         ],
         "${_text_slide}": [
            ["style", "top", '0px'],
            ["style", "height", '678px'],
            ["style", "left", '0px'],
            ["style", "width", '564px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid147", tween: [ "style", "${_Text2}", "left", '-439px', { fromValue: '70px'}], position: 0, duration: 1000 },
            { id: "eid149", tween: [ "style", "${_Text2}", "left", '-439px', { fromValue: '-439px'}], position: 1000, duration: 0 },
            { id: "eid179", tween: [ "style", "${_Text2}", "left", '-439px', { fromValue: '-439px'}], position: 1250, duration: 0 },
            { id: "eid145", tween: [ "style", "${_text_slide}", "left", '-509px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "eid150", tween: [ "style", "${_text_slide}", "left", '-509px', { fromValue: '-509px'}], position: 1000, duration: 0 },
            { id: "eid180", tween: [ "style", "${_text_slide}", "left", '-509px', { fromValue: '-509px'}], position: 1250, duration: 0 }         ]
      }
   }
},
"mama1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','5992px','664px','auto','auto'],
      id: 'scena2_mama_sprite',
      type: 'image',
      clip: ['rect(0px 428px 664px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena2_mama_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_mama_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '664px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,428,664,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '5992px']
         ],
         "${symbolSelector}": [
            ["style", "height", '664px'],
            ["style", "width", '5992px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid154", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-428,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid156", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-856,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-428,0]}], position: 500, duration: 0 },
            { id: "eid157", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-1284,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-856,0]}], position: 750, duration: 0 },
            { id: "eid158", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-1712,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1284,0]}], position: 1000, duration: 0 },
            { id: "eid159", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-2140,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1712,0]}], position: 1250, duration: 0 },
            { id: "eid160", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-2568,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2140,0]}], position: 1500, duration: 0 },
            { id: "eid161", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-2996,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2568,0]}], position: 1750, duration: 0 },
            { id: "eid162", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-3424,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2996,0]}], position: 2000, duration: 0 },
            { id: "eid163", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-3852,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3424,0]}], position: 2250, duration: 0 },
            { id: "eid164", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-4280,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3852,0]}], position: 2500, duration: 0 },
            { id: "eid165", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-4708,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4280,0]}], position: 2750, duration: 0 },
            { id: "eid166", tween: [ "style", "${_scena2_mama_sprite}", "background-position", [-5136,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4708,0]}], position: 3000, duration: 0 }         ]
      }
   }
},
"kolaciivino": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scena2_kolacivino',
      type: 'image',
      rect: ['0px','0px','165px','178px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena2_kolacivino.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena2_kolacivino}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '178px'],
            ["style", "left", '0px'],
            ["style", "width", '165px']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "width", '165px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid173", tween: [ "style", "${_scena2_kolacivino}", "top", '484px', { fromValue: '0px'}], position: 0, duration: 1500 },
            { id: "eid183", tween: [ "style", "${_scena2_kolacivino}", "top", '484px', { fromValue: '484px'}], position: 1750, duration: 0 },
            { id: "eid176", tween: [ "style", "${_scena2_kolacivino}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_scena2_kolacivino}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid181", tween: [ "style", "${_scena2_kolacivino}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid172", tween: [ "style", "${_scena2_kolacivino}", "left", '-536px', { fromValue: '0px'}], position: 0, duration: 1500 },
            { id: "eid182", tween: [ "style", "${_scena2_kolacivino}", "left", '-536px', { fromValue: '-536px'}], position: 1750, duration: 0 }         ]
      }
   }
},
"button_mute_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button_mute',
      type: 'image',
      rect: ['0px','0px','75px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_mute.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_mute}": [
            ["style", "top", '0px'],
            ["style", "height", '75px'],
            ["style", "left", '0px'],
            ["style", "width", '75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"button_play_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button_play',
      type: 'image',
      rect: ['0px','0px','75px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_play.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_play}": [
            ["style", "top", '0px'],
            ["style", "height", '75px'],
            ["style", "left", '0px'],
            ["style", "width", '75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"button_stop_": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button_stop',
      type: 'image',
      rect: ['0px','0px','75px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_stop.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_stop}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1207506893");

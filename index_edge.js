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
            id:'naslovnica_background',
            type:'image',
            rect:['0px','-41px','1280px','853px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"naslovnica_background.png",'0px','0px']
         },
         {
            id:'naslovnica_pop',
            type:'rect',
            rect:['188','-78','auto','auto','auto','auto']
         },
         {
            id:'naslovnica_naslov1',
            type:'rect',
            rect:['368','574','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'naslovnica_pop',
            symbolName:'naslovnica_pop'
         },
         {
            id:'naslovnica_naslov1',
            symbolName:'naslovnica_naslov1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '755px'],
            ["style", "width", '1280px']
         ],
         "${_naslovnica_background}": [
            ["style", "left", '0px'],
            ["style", "top", '-41px']
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
            { id: "eid175", tween: [ "style", "${_Stage}", "height", '755px', { fromValue: '755px'}], position: 0, duration: 0 }         ]
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
         type: 'image',
         display: 'none',
         rect: ['226px','0px','196px','641px','auto','auto'],
         id: 'scena2_ormar1_open',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar1_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ormar1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '641px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar1_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '641px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar1_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '641px'],
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
            { id: "eid10", tween: [ "style", "${_scena2_ormar1_open}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid8", tween: [ "style", "${_scena2_ormar1_closed}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_scena2_ormar1_closed}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
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
         rect: ['272px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar2_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_ormar2_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ormar2}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar2_open}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar2_closed}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'block'],
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
         rect: ['459px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar3_open',
         type: 'image',
         display: 'none',
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
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '-613px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar3_closed}": [
            ["style", "top", '-232px'],
            ["style", "height", '324px'],
            ["style", "display", 'block'],
            ["style", "left", '-613px'],
            ["style", "width", '196px']
         ],
         "${_ormar3}": [
            ["style", "height", '324px'],
            ["style", "top", '232px'],
            ["style", "left", '613px'],
            ["style", "width", '196px']
         ],
         "${symbolSelector}": [
            ["style", "height", '595px'],
            ["style", "width", '809px']
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
         type: 'image',
         display: 'none',
         rect: ['646px','271px','247px','324px','auto','auto'],
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
            ["style", "height", '324px'],
            ["style", "top", '232px'],
            ["style", "left", '800px'],
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
         type: 'image',
         display: 'none',
         rect: ['885px','271px','196px','324px','auto','auto'],
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
            ["style", "height", '324px'],
            ["style", "top", '232px'],
            ["style", "left", '1039px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar4_open}": [
            ["style", "top", '0px'],
            ["style", "height", '324px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
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
         type: 'image',
         display: 'none',
         rect: ['1072px','-46px','205px','641px','auto','auto'],
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
            ["style", "top", '46px'],
            ["style", "left", '1226px'],
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
            ["style", "height", '687px'],
            ["style", "width", '1431px']
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
         rect: ['459px','271px','196px','324px','auto','auto'],
         id: 'scena2_ormar3_open',
         type: 'image',
         display: 'none',
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
            ["style", "display", 'none'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_ormar3_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '324px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
         ],
         "${_ormar3}": [
            ["style", "height", '324px'],
            ["style", "top", '0px'],
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
         rect: ['692px','286px','247px','324px','auto','auto'],
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
            ["style", "height", '324px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
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
         rect: ['0px','0px','196px','324px','auto','auto'],
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
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
         rect: ['260px','0px','205px','641px','auto','auto'],
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
            ["style", "height", '641px'],
            ["style", "width", '205px']
         ],
         "${_scena2_ormar5_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '641px'],
            ["style", "left", '0px'],
            ["style", "width", '205px']
         ],
         "${_ormar5}": [
            ["style", "height", '641px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
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
         rect: ['361px','0px','196px','243px','auto','auto'],
         id: 'scena2_prozor1_open',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/scena2_prozor1_open.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '196px']
         ],
         "${_prozor1}": [
            ["style", "height", '243px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_prozor1_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena2_prozor1_closed}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '243px'],
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
         rect: ['0px','0px','196px','243px','auto','auto'],
         id: 'scena2_prozor2_open',
         type: 'image',
         display: 'none',
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
            ["style", "display", 'block'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_prozor2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '196px']
         ],
         "${_scena2_prozor2_open}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '243px'],
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
         type: 'image',
         display: 'none',
         rect: ['-8px','0px','205px','99px','auto','auto'],
         id: 'scena2_mis',
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
            ["style", "display", 'none'],
            ["style", "height", '99px'],
            ["style", "left", '-221px'],
            ["style", "width", '205px']
         ],
         "${_mis}": [
            ["style", "left", '-7px'],
            ["style", "top", '13px']
         ],
         "${_scena2_misjarupa}": [
            ["style", "top", '-38px'],
            ["style", "display", 'block'],
            ["style", "height", '139px'],
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
            { id: "eid104", tween: [ "style", "${_scena2_misjarupa}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_scena2_misjarupa}", "top", '-38px', { fromValue: '-38px'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_scena2_misjarupa}", "height", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_scena2_misjarupa}", "width", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_scena2_mis}", "left", '1282px', { fromValue: '-221px'}], position: 95, duration: 1155 },
            { id: "eid105", tween: [ "style", "${_scena2_mis}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0 },
            { id: "eid196", tween: [ "style", "${_scena2_misjarupa}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
      type: 'image',
      id: 'scena2_crvenkapica_sprite',
      rect: ['0px','0px','2980px','464px','auto','auto'],
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
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_str5}": [
            ["style", "height", '130px'],
            ["style", "top", '37px'],
            ["style", "left", '754px'],
            ["style", "width", '195px']
         ],
         "${_meni}": [
            ["style", "top", '-48px'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '994px']
         ],
         "${_str4}": [
            ["style", "height", '130px'],
            ["style", "top", '37px'],
            ["style", "left", '520px'],
            ["style", "width", '195px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '994px']
         ],
         "${_str3}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
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
         "${_text_slide}": [
            ["style", "height", '678px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '564px']
         ],
         "${_Text2}": [
            ["style", "top", '19px'],
            ["style", "height", '640px'],
            ["style", "font-size", '25px'],
            ["style", "left", '70px'],
            ["style", "width", '476px']
         ],
         "${symbolSelector}": [
            ["style", "height", '761px'],
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
      type: 'image',
      id: 'scena2_mama_sprite',
      rect: ['0px','0px','5992px','664px','auto','auto'],
      clip: ['rect(0px 428px 664px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena2_mama_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '664px'],
            ["style", "width", '5992px']
         ],
         "${_scena2_mama_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '664px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,428,664,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "width", '165px']
         ],
         "${_scena2_kolacivino}": [
            ["style", "top", '0px'],
            ["style", "height", '178px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
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
"naslovnica_naslov1": {
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
      transform: [],
      id: 'naslovnica_naslov',
      type: 'image',
      rect: ['0px','0px','564px','164px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/naslovnica_naslov.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_naslovnica_naslov}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '164px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '564px']
         ],
         "${symbolSelector}": [
            ["style", "height", '164px'],
            ["style", "width", '564px']
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
            { id: "eid224", tween: [ "transform", "${_naslovnica_naslov}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 500 },
            { id: "eid226", tween: [ "transform", "${_naslovnica_naslov}", "scaleX", '1', { fromValue: '1.1'}], position: 500, duration: 500 },
            { id: "eid228", tween: [ "transform", "${_naslovnica_naslov}", "scaleX", '1.1', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid230", tween: [ "transform", "${_naslovnica_naslov}", "scaleX", '1', { fromValue: '1.1'}], position: 1500, duration: 500 },
            { id: "eid225", tween: [ "transform", "${_naslovnica_naslov}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 500 },
            { id: "eid227", tween: [ "transform", "${_naslovnica_naslov}", "scaleY", '1', { fromValue: '1.1'}], position: 500, duration: 500 },
            { id: "eid229", tween: [ "transform", "${_naslovnica_naslov}", "scaleY", '1.1', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid231", tween: [ "transform", "${_naslovnica_naslov}", "scaleY", '1', { fromValue: '1.1'}], position: 1500, duration: 500 }         ]
      }
   }
},
"naslovnica_pop": {
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
      id: 'naslovnica_nebo',
      type: 'image',
      rect: ['124px','55px','625px','625px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/naslovnica_nebo.png','0px','0px']
   },
   {
      id: 'naslovnica_okvir_back',
      type: 'image',
      rect: ['124px','55px','625px','625px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/naslovnica_okvir_back.png','0px','0px']
   },
   {
      rect: ['281px','83px','594px','512px','auto','auto'],
      id: 'naslovnica_vuk',
      transform: [[],['19']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/naslovnica_vuk.png','0px','0px']
   },
   {
      rect: ['402px','262px','269px','539px','auto','auto'],
      id: 'naslovnica_mama',
      transform: [[],['25']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/naslovnica_mama.png','0px','0px']
   },
   {
      rect: ['50px','60px','465px','615px','auto','auto'],
      id: 'naslovnica_lovac',
      transform: [[],['-10']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/naslovnica_lovac.png','0px','0px']
   },
   {
      rect: ['146px','231px','211px','418px','auto','auto'],
      id: 'naslovnica_baka',
      transform: [[],['-32']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/naslovnica_baka.png','0px','0px']
   },
   {
      rect: ['282px','116px','3900px','536px','auto','auto'],
      id: 'naslovnica_crvenkapica_sprite',
      type: 'image',
      clip: ['rect(0px 325px 536px 0px)'],
      fill: ['rgba(0,0,0,0)','images/naslovnica_crvenkapica_sprite.png','0px','0px']
   },
   {
      id: 'naslovnica_okvir_front',
      type: 'image',
      rect: ['124px','55px','625px','625px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/naslovnica_okvir_front.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_naslovnica_mama}": [
            ["style", "top", '262px'],
            ["style", "clip", [0,269,363.6844177246094,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '25deg'],
            ["style", "height", '539px'],
            ["style", "opacity", '0'],
            ["style", "left", '402px'],
            ["style", "width", '269px']
         ],
         "${_naslovnica_okvir_back}": [
            ["style", "top", '55px'],
            ["style", "height", '625px'],
            ["style", "left", '124px'],
            ["style", "width", '625px']
         ],
         "${_naslovnica_nebo}": [
            ["style", "top", '55px'],
            ["style", "height", '625px'],
            ["style", "left", '124px'],
            ["style", "width", '625px']
         ],
         "${_naslovnica_vuk}": [
            ["style", "top", '83px'],
            ["transform", "rotateZ", '19deg'],
            ["style", "height", '512px'],
            ["style", "opacity", '0'],
            ["style", "left", '281px'],
            ["style", "width", '594px']
         ],
         "${symbolSelector}": [
            ["style", "height", '832px'],
            ["style", "width", '4182px']
         ],
         "${_naslovnica_okvir_front}": [
            ["style", "top", '55px'],
            ["style", "height", '625px'],
            ["style", "left", '124px'],
            ["style", "width", '625px']
         ],
         "${_naslovnica_baka}": [
            ["style", "top", '231px'],
            ["style", "clip", [0,211,405.2801818847656,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '-32deg'],
            ["style", "height", '418px'],
            ["style", "opacity", '0'],
            ["style", "left", '146px'],
            ["style", "width", '211px']
         ],
         "${_naslovnica_lovac}": [
            ["style", "top", '60px'],
            ["style", "clip", [0,465,548.9608154296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '-10deg'],
            ["style", "height", '615px'],
            ["style", "opacity", '0'],
            ["style", "left", '50px'],
            ["style", "width", '465px']
         ],
         "${_naslovnica_crvenkapica_sprite}": [
            ["style", "top", '116px'],
            ["style", "left", '282px'],
            ["style", "height", '536px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,325,504,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '3900px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid213", tween: [ "style", "${_naslovnica_lovac}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid234", tween: [ "style", "${_naslovnica_lovac}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid238", tween: [ "style", "${_naslovnica_lovac}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
            { id: "eid214", tween: [ "style", "${_naslovnica_vuk}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid235", tween: [ "style", "${_naslovnica_vuk}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid239", tween: [ "style", "${_naslovnica_vuk}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
            { id: "eid216", tween: [ "style", "${_naslovnica_baka}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid233", tween: [ "style", "${_naslovnica_baka}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid237", tween: [ "style", "${_naslovnica_baka}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
            { id: "eid215", tween: [ "style", "${_naslovnica_mama}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid232", tween: [ "style", "${_naslovnica_mama}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid236", tween: [ "style", "${_naslovnica_mama}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 1000 },
            { id: "eid218", tween: [ "style", "${_naslovnica_lovac}", "clip", [0,465,548.9608154296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,465,548.9608154296875,0]}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_naslovnica_baka}", "clip", [0,211,405.2801818847656,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,211,405.2801818847656,0]}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_naslovnica_mama}", "clip", [0,269,363.6844177246094,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,269,363.6844177246094,0]}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-325,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid199", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-325,0]}], position: 500, duration: 0 },
            { id: "eid200", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-975,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 750, duration: 0 },
            { id: "eid201", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-1300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-975,0]}], position: 1000, duration: 0 },
            { id: "eid202", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-1625,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1300,0]}], position: 1250, duration: 0 },
            { id: "eid203", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-1950,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1625,0]}], position: 1500, duration: 0 },
            { id: "eid204", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-2275,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1950,0]}], position: 1750, duration: 0 },
            { id: "eid205", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-2600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2275,0]}], position: 2000, duration: 0 },
            { id: "eid206", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-2925,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2600,0]}], position: 2250, duration: 0 },
            { id: "eid207", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-3250,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2925,0]}], position: 2500, duration: 0 },
            { id: "eid208", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "background-position", [-3575,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3250,0]}], position: 2750, duration: 0 },
            { id: "eid221", tween: [ "style", "${_naslovnica_crvenkapica_sprite}", "clip", [0,325,504,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,325,504,0]}], position: 0, duration: 0 }         ]
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

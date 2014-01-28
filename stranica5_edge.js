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
            id:'scena5_nebo',
            type:'image',
            rect:['0px','-59px','1280px','853px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena5_nebo.png",'0px','0px']
         },
         {
            id:'scena5_drvo2',
            type:'image',
            rect:['417px','-103px','986px','784px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena5_drvo2.png",'0px','0px']
         },
         {
            id:'scena5_bakina_kuca',
            type:'image',
            rect:['723px','48px','680px','640px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena5_bakina_kuca.png",'0px','0px']
         },
         {
            id:'scena5_drvo_ptice',
            type:'rect',
            rect:['-717','-163','auto','auto','auto','auto']
         },
         {
            id:'scena5_vuk',
            type:'rect',
            rect:['145','384','auto','auto','auto','auto']
         },
         {
            id:'scena5_grmlje_jez',
            type:'rect',
            rect:['1055','510','auto','auto','auto','auto']
         },
         {
            id:'scena5_trava_back',
            type:'image',
            rect:['0px','647px','1280px','108px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena5_trava_back.png",'0px','0px']
         },
         {
            id:'scena5_trava',
            type:'image',
            rect:['0px','573px','1280px','81px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena5_trava.png",'0px','0px']
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
            id:'button_play_',
            symbolName:'button_play_'
         },
         {
            id:'scena5_vuk',
            symbolName:'scena5_vuk'
         },
         {
            id:'text_slide2',
            symbolName:'text_slide'
         },
         {
            id:'scena5_grmlje_jez',
            symbolName:'scena5_grmlje_jez'
         },
         {
            id:'button_stop_',
            symbolName:'button_stop_'
         },
         {
            id:'meni2',
            symbolName:'meni'
         },
         {
            id:'scena5_drvo_ptice',
            symbolName:'scena5_drvo_ptice'
         }
         ]
      },
   states: {
      "Base State": {
         "${_button_back}": [
            ["style", "top", '670px'],
            ["style", "height", '75px'],
            ["style", "left", '16px'],
            ["style", "width", '75px']
         ],
         "${_scena5_bakina_kuca}": [
            ["style", "top", '48px'],
            ["style", "height", '640px'],
            ["style", "left", '723px'],
            ["style", "width", '680px']
         ],
         "${_scena5_drvo2}": [
            ["style", "top", '-103px'],
            ["style", "height", '784px'],
            ["style", "left", '417px'],
            ["style", "width", '986px']
         ],
         "${_button_play_}": [
            ["style", "left", '105px']
         ],
         "${_scena5_trava}": [
            ["style", "top", '573px'],
            ["style", "height", '81px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_scena5_nebo}": [
            ["style", "top", '-59px'],
            ["style", "height", '853px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_button_next}": [
            ["style", "top", '669px'],
            ["style", "height", '75px'],
            ["style", "left", '1187px'],
            ["style", "width", '75px']
         ],
         "${_scena5_trava_back}": [
            ["style", "top", '647px'],
            ["style", "height", '108px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '755px'],
            ["style", "width", '1280px']
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
            { id: "eid531", tween: [ "style", "${_Stage}", "height", '755px', { fromValue: '755px'}], position: 0, duration: 0 }         ]
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
      rect: ['0px','0px','205','101','auto','auto'],
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
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_scena2_misjarupa}": [
            ["style", "top", '28px'],
            ["style", "display", 'block'],
            ["style", "height", '73px'],
            ["style", "left", '32px'],
            ["style", "width", '9px']
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
            { id: "eid105", tween: [ "style", "${_scena2_mis}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0 },
            { id: "eid113", tween: [ "style", "${_scena2_mis}", "left", '1282px', { fromValue: '-221px'}], position: 95, duration: 1155 }         ]
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
            ["style", "left", '0px'],
            ["style", "height", '464px'],
            ["style", "clip", [0,298,464,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
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
      id: 'str6',
      type: 'image',
      rect: ['518px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/6.png','0px','0px']
   },
   {
      id: 'str4',
      type: 'image',
      rect: ['285px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/4.png','0px','0px']
   },
   {
      id: 'str3',
      type: 'image',
      rect: ['51px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/3.png','0px','0px']
   },
   {
      id: 'str7',
      type: 'image',
      rect: ['-362','-91','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/7.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_meni}": [
            ["style", "top", '-48px'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '994px']
         ],
         "${_str4}": [
            ["style", "height", '130px'],
            ["style", "top", '37px'],
            ["style", "left", '285px'],
            ["style", "width", '195px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '994px']
         ],
         "${_str7}": [
            ["style", "top", '37px'],
            ["style", "left", '753px']
         ],
         "${_str3}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '51px'],
            ["style", "width", '195px']
         ],
         "${_str6}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '518px'],
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
            { id: "eid525", tween: [ "style", "${_str3}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid526", tween: [ "style", "${_str3}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_meni}", "top", '-236px', { fromValue: '-48px'}], position: 0, duration: 1000 },
            { id: "eid151", tween: [ "style", "${_meni}", "top", '-48px', { fromValue: '-236px'}], position: 1000, duration: 1000 },
            { id: "eid523", tween: [ "style", "${_str4}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid524", tween: [ "style", "${_str4}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid528", tween: [ "style", "${_str7}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid529", tween: [ "style", "${_str7}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid521", tween: [ "style", "${_str6}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid522", tween: [ "style", "${_str6}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 }         ]
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
      font: ['Arial, Helvetica, sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'A vuk je za to vrijeme krenuo prečicom do bakine kuće u šumi i malo poslije zakucao je na bakina vrata.<br>\"Tko je?\"<br>\"Crvenkapica,\" reče vuk malo promijenjenim glasom. \"Donijela sam ti kolača i vina, otvori mi vrata.\"<br>\"Samo okreni kvaku\" dovikne baka, \"ja sam preslaba da izađem iz kreveta.\"<br>Vuk okrene kvaku, otvori vrata i bez ijedne riječi jurne preko sobe, ravno na bakin krevet i proguta baku u jednom zalogaju. Zatim obuće njezinu spavačicu, stavi njezinu noćnu kapicu na glavu, navuče zavjese na prozore i legne u krevet. Crvenkapica je u međuvremenu bila zauzeta branjem cvijeća, i tek kada je ubrala toliko cvijeća da ga više nije mogla držati u naručju, sjetila se da je vrijeme da pođe kod bake.<br>',
      align: 'left',
      rect: ['70','18','476px','640px','auto','auto']
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
            ["style", "font-size", '25px'],
            ["style", "left", '70px'],
            ["style", "width", '476px']
         ],
         "${_text_slide}": [
            ["style", "height", '678px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '564px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
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
            ["style", "left", '0px'],
            ["style", "height", '664px'],
            ["style", "clip", [0,428,664,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
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
"nebo": {
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
      id: 'scena3_nebo',
      type: 'image',
      rect: ['469px','629px','1280px','853px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena3_nebo.png','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['-1536','164','3580','1844','auto','auto'],
      c: [
      {
         id: 'scena3_zrake',
         type: 'image',
         rect: ['1736px','0px','2226px','2226px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena3_zrake.png','0px','0px']
      },
      {
         id: 'scena3_oblaci',
         type: 'image',
         rect: ['0px','465px','3285px','363px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/scena3_oblaci.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_zrake}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '1844px'],
            ["style", "left", '1736px'],
            ["style", "width", '1844px']
         ],
         "${_scena3_oblaci}": [
            ["style", "top", '465px'],
            ["style", "height", '363px'],
            ["style", "left", '2005px'],
            ["style", "width", '3285px']
         ],
         "${_scena3_nebo}": [
            ["style", "top", '629px'],
            ["style", "height", '853px'],
            ["style", "left", '469px'],
            ["style", "width", '1280px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2226px'],
            ["style", "width", '3754px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid185", tween: [ "transform", "${_scena3_zrake}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 10000 },
            { id: "eid193", tween: [ "style", "${_scena3_oblaci}", "left", '0px', { fromValue: '2005px'}], position: 0, duration: 10000 }         ]
      }
   }
},
"vuk1_sprite": {
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
      id: 'vuk_sprite1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'vuk_sprite1',
      symbolName: 'vuk_sprite1'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '498px'],
            ["style", "width", '6040px']
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
         ]
      }
   }
},
"crvenkapica3_sprite": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '457px'],
            ["style", "width", '2328px']
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
"jez": {
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
      id: 'scena3_jez',
      type: 'image',
      rect: ['78px','18px','202px','137px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena3_jez.png','0px','0px']
   },
   {
      id: 'scena3_grmlje',
      type: 'image',
      rect: ['0px','0px','513px','300px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena3_grmlje.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_jez}": [
            ["style", "top", '18px'],
            ["style", "height", '137px'],
            ["style", "left", '78px'],
            ["style", "width", '202px']
         ],
         "${_scena3_grmlje}": [
            ["style", "height", '300px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '513px']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '513px']
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
            { id: "eid264", tween: [ "style", "${_scena3_jez}", "left", '-1079px', { fromValue: '78px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"borovi": {
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
      id: 'borovi1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'borovi1',
      symbolName: 'borovi1'
   }   ]
   },
   states: {
      "Base State": {
         "${_borovi1}": [
            ["style", "left", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '370px'],
            ["style", "width", '445px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid301", tween: [ "style", "${_borovi1}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 }         ]
      }
   }
},
"ptica_plava_1": {
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
      rect: ['0px','-1px','720px','88px','auto','auto'],
      id: 'scena3_ptica_plava_sprite',
      type: 'image',
      clip: ['rect(0px 180px 88px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_ptica_plava_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_ptica_plava_sprite}": [
            ["style", "top", '-1px'],
            ["style", "left", '0px'],
            ["style", "height", '88px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '720px']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '720px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid217", tween: [ "style", "${_scena3_ptica_plava_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_scena3_ptica_plava_sprite}", "background-position", [-180,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid219", tween: [ "style", "${_scena3_ptica_plava_sprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-180,0]}], position: 500, duration: 0 },
            { id: "eid220", tween: [ "style", "${_scena3_ptica_plava_sprite}", "background-position", [-540,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"ptica_crvena_1": {
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
      id: 'scena3_ptica_crvena_sprite',
      rect: ['0px','0px','720px','88px','auto','auto'],
      clip: ['rect(0px 180px 88px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_ptica_crvena_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_ptica_crvena_sprite}": [
            ["style", "top", '-1px'],
            ["style", "left", '0px'],
            ["style", "height", '88px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '720px']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '720px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid235", tween: [ "style", "${_scena3_ptica_crvena_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_scena3_ptica_crvena_sprite}", "background-position", [-180,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid237", tween: [ "style", "${_scena3_ptica_crvena_sprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-180,0]}], position: 500, duration: 0 },
            { id: "eid238", tween: [ "style", "${_scena3_ptica_crvena_sprite}", "background-position", [-540,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"borovi1": {
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
      id: 'ptica_crvena_1',
      type: 'rect',
      rect: ['84px','227px','auto','auto','auto','auto']
   },
   {
      id: 'ptica_plava_1',
      type: 'rect',
      rect: ['77px','507px','auto','auto','auto','auto']
   },
   {
      id: 'scena3_borovi2',
      type: 'image',
      rect: ['0px','0px','445px','370px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena3_borovi2.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'ptica_crvena_1',
      symbolName: 'ptica_crvena_1'
   },
   {
      id: 'ptica_plava_1',
      symbolName: 'ptica_plava_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_ptica_plava_1}": [
            ["motion", "location", '445px 169px'],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_scena3_borovi2}": [
            ["style", "height", '370px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '445px']
         ],
         "${_ptica_crvena_1}": [
            ["motion", "location", '443.99987792969px 271px'],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '370px'],
            ["style", "width", '887px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid256", tween: [ "motion", "${_ptica_crvena_1}", [[444,271,0,0],[242,206,0,0]]], position: 0, duration: 750 },
            { id: "eid257", tween: [ "motion", "${_ptica_crvena_1}", [[242,206,0,0],[94.5,83.5,0,0]]], position: 750, duration: 750 },
            { id: "eid258", tween: [ "motion", "${_ptica_crvena_1}", [[94.5,83.5,0,0],[-940.5,453.5,0,0]]], position: 1500, duration: 750 },
            { id: "eid251", tween: [ "motion", "${_ptica_plava_1}", [[445,169,0,0],[202.5,54,0,0]]], position: 0, duration: 750 },
            { id: "eid252", tween: [ "motion", "${_ptica_plava_1}", [[202.5,54,0,0],[0,149,0,0]]], position: 750, duration: 750 },
            { id: "eid253", tween: [ "motion", "${_ptica_plava_1}", [[0,149,0,0],[-475,-181,0,0]]], position: 1500, duration: 750 }         ]
      }
   }
},
"crvenkapica3_sprite_1": {
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
      id: 'scena3_crvenkapica_sprite',
      rect: ['0px','0px','2328px','457px','auto','auto'],
      clip: ['rect(0px 291px 457px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_crvenkapica_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '457px'],
            ["style", "width", '2328px']
         ],
         "${_scena3_crvenkapica_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '457px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,291,457,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '2328px']
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
            { id: "eid203", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid204", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-291,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid205", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-582,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-291,0]}], position: 500, duration: 0 },
            { id: "eid206", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-873,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-582,0]}], position: 750, duration: 0 },
            { id: "eid207", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1164,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-873,0]}], position: 1000, duration: 0 },
            { id: "eid208", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1455,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1164,0]}], position: 1250, duration: 0 },
            { id: "eid209", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1746,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1455,0]}], position: 1500, duration: 0 },
            { id: "eid210", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-2037,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1746,0]}], position: 1750, duration: 0 }         ]
      }
   }
},
"vuk_sprite1": {
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
      id: 'scena3_vuk_sprite',
      rect: ['-43px','21px','6040px','498px','auto','auto'],
      clip: ['rect(0px 755px 498px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_vuk_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '498px'],
            ["style", "width", '6040px']
         ],
         "${_scena3_vuk_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '498px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,755,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '6040px']
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
            { id: "eid194", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid196", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-1510,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 500, duration: 0 },
            { id: "eid197", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-2265,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1510,0]}], position: 750, duration: 0 },
            { id: "eid198", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3020,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2265,0]}], position: 1000, duration: 0 },
            { id: "eid199", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3775,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3020,0]}], position: 1250, duration: 0 },
            { id: "eid200", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-4530,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3775,0]}], position: 1500, duration: 0 },
            { id: "eid211", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-5285,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4530,0]}], position: 1750, duration: 0 }         ]
      }
   }
},
"ptica_zuta_1": {
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
      id: 'ptica_zuta_sprite1',
      type: 'rect',
      rect: ['870','241','auto','auto','auto','auto']
   },
   {
      id: 'scena3_drvece',
      type: 'image',
      rect: ['541px','0px','760px','887px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena3_drvece.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'ptica_zuta_sprite1',
      symbolName: 'ptica_zuta_sprite1'
   }   ]
   },
   states: {
      "Base State": {
         "${_ptica_zuta_sprite1}": [
            ["style", "left", '870px'],
            ["style", "top", '241px']
         ],
         "${_scena3_drvece}": [
            ["style", "height", '887px'],
            ["style", "top", '0px'],
            ["style", "left", '541px'],
            ["style", "width", '760px']
         ],
         "${symbolSelector}": [
            ["style", "height", '887px'],
            ["style", "width", '1301px']
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
            { id: "eid304", tween: [ "style", "${_ptica_zuta_sprite1}", "left", '1258px', { fromValue: '870px'}], position: 0, duration: 750 },
            { id: "eid307", tween: [ "style", "${_ptica_zuta_sprite1}", "left", '1471px', { fromValue: '1258px'}], position: 750, duration: 750 },
            { id: "eid308", tween: [ "style", "${_ptica_zuta_sprite1}", "left", '1679px', { fromValue: '1471px'}], position: 1500, duration: 750 },
            { id: "eid310", tween: [ "style", "${_ptica_zuta_sprite1}", "left", '2622px', { fromValue: '1679px'}], position: 2250, duration: 750 },
            { id: "eid305", tween: [ "style", "${_ptica_zuta_sprite1}", "top", '99px', { fromValue: '241px'}], position: 0, duration: 750 },
            { id: "eid306", tween: [ "style", "${_ptica_zuta_sprite1}", "top", '289px', { fromValue: '99px'}], position: 750, duration: 750 },
            { id: "eid309", tween: [ "style", "${_ptica_zuta_sprite1}", "top", '129px', { fromValue: '289px'}], position: 1500, duration: 750 },
            { id: "eid311", tween: [ "style", "${_ptica_zuta_sprite1}", "top", '632px', { fromValue: '129px'}], position: 2250, duration: 750 }         ]
      }
   }
},
"ptica_zuta_sprite1": {
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
      rect: ['-870px','297px','1032px','126px','auto','auto'],
      id: 'scena3_ptica_zuta_sprite',
      type: 'image',
      clip: ['rect(0px 258px 126px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_ptica_zuta_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_ptica_zuta_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '126px'],
            ["style", "clip", [0,258,126,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '1032px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '1032px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid294", tween: [ "style", "${_scena3_ptica_zuta_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid296", tween: [ "style", "${_scena3_ptica_zuta_sprite}", "background-position", [-258,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid297", tween: [ "style", "${_scena3_ptica_zuta_sprite}", "background-position", [-516,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-258,0]}], position: 500, duration: 0 },
            { id: "eid298", tween: [ "style", "${_scena3_ptica_zuta_sprite}", "background-position", [-774,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-516,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"crvenkapica_i_vuk": {
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
      id: 'scena3_kamenje',
      rect: ['269px','392px','466px','915px','auto','auto'],
      clip: ['rect(0px 466px 277.5px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_kamenje.png','0px','-650px']
   },
   {
      id: 'vuk1_sprite',
      type: 'rect',
      rect: ['1px','-3px','auto','auto','auto','auto']
   },
   {
      id: 'crvenkapica3_sprite_1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'vuk1_sprite',
      symbolName: 'vuk1_sprite'
   },
   {
      id: 'crvenkapica3_sprite_1',
      symbolName: 'crvenkapica3_sprite_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_scena3_kamenje}": [
            ["style", "top", '392px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '915px'],
            ["style", "clip", [0,466,277.5,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '269px'],
            ["style", "width", '466px']
         ],
         "${_vuk1_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,755,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_crvenkapica3_sprite_1}": [
            ["style", "left", '430px'],
            ["style", "top", '58px']
         ],
         "${symbolSelector}": [
            ["style", "height", '498px'],
            ["style", "width", '6040px']
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
            { id: "eid319", tween: [ "style", "${_scena3_kamenje}", "background-position", [0,-680], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 1750 }         ]
      }
   }
},
"scena4_grm_plava_ptica": {
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
      id: 'scena4_plava_ptica',
      type: 'rect',
      rect: ['0','30','auto','auto','auto','auto']
   },
   {
      id: 'scena4_grm',
      type: 'image',
      rect: ['326px','0px','289px','234px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_grm.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'scena4_plava_ptica',
      symbolName: 'scena4_plava_ptica'
   }   ]
   },
   states: {
      "Base State": {
         "${_scena4_plava_ptica}": [
            ["style", "left", '0px'],
            ["style", "top", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '234px'],
            ["style", "width", '615px']
         ],
         "${_scena4_grm}": [
            ["style", "top", '0px'],
            ["style", "height", '234px'],
            ["style", "left", '326px'],
            ["style", "width", '289px']
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
            { id: "eid357", tween: [ "style", "${_scena4_plava_ptica}", "top", '-112px', { fromValue: '30px'}], position: 0, duration: 750 },
            { id: "eid359", tween: [ "style", "${_scena4_plava_ptica}", "top", '-331px', { fromValue: '-112px'}], position: 750, duration: 750 },
            { id: "eid361", tween: [ "style", "${_scena4_plava_ptica}", "top", '-29px', { fromValue: '-331px'}], position: 1500, duration: 750 },
            { id: "eid363", tween: [ "style", "${_scena4_plava_ptica}", "top", '-466px', { fromValue: '-29px'}], position: 2250, duration: 750 },
            { id: "eid356", tween: [ "style", "${_scena4_plava_ptica}", "left", '519px', { fromValue: '0px'}], position: 0, duration: 750 },
            { id: "eid358", tween: [ "style", "${_scena4_plava_ptica}", "left", '704px', { fromValue: '519px'}], position: 750, duration: 750 },
            { id: "eid360", tween: [ "style", "${_scena4_plava_ptica}", "left", '1158px', { fromValue: '704px'}], position: 1500, duration: 750 },
            { id: "eid362", tween: [ "style", "${_scena4_plava_ptica}", "left", '1712px', { fromValue: '1158px'}], position: 2250, duration: 750 }         ]
      }
   }
},
"scena4_plava_ptica": {
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
      rect: ['0px','0px','580px','71px','auto','auto'],
      id: 'scena4_ptica_plava_sprite',
      type: 'image',
      clip: ['rect(0px 145px 71px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena4_ptica_plava_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '580px']
         ],
         "${_scena4_ptica_plava_sprite}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,145,71,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '71px'],
            ["style", "left", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '580px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid350", tween: [ "style", "${_scena4_ptica_plava_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid351", tween: [ "style", "${_scena4_ptica_plava_sprite}", "background-position", [-145,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid352", tween: [ "style", "${_scena4_ptica_plava_sprite}", "background-position", [-290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-145,0]}], position: 500, duration: 0 },
            { id: "eid353", tween: [ "style", "${_scena4_ptica_plava_sprite}", "background-position", [-435,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-290,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena4_panj_jez": {
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
      rect: ['40px','0px','120px','135px','auto','auto'],
      id: 'scena4_jez',
      transform: [[0,0],[],[],['-1.65913']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/scena4_jez.png','0px','0px']
   },
   {
      id: 'scena4_panj',
      type: 'image',
      rect: ['342px','95px','210px','93px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_panj.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '188px'],
            ["style", "width", '552px']
         ],
         "${_scena4_panj}": [
            ["style", "top", '95px'],
            ["style", "height", '93px'],
            ["style", "left", '342px'],
            ["style", "width", '210px']
         ],
         "${_scena4_jez}": [
            ["style", "top", '44px'],
            ["transform", "scaleX", '-1.65913'],
            ["style", "height", '91px'],
            ["style", "left", '27px'],
            ["style", "width", '81px']
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
            { id: "eid368", tween: [ "style", "${_scena4_jez}", "top", '44px', { fromValue: '44px'}], position: 0, duration: 0 },
            { id: "eid365", tween: [ "style", "${_scena4_jez}", "left", '1809px', { fromValue: '27px'}], position: 0, duration: 3000 },
            { id: "eid369", tween: [ "style", "${_scena4_jez}", "width", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
            { id: "eid367", tween: [ "style", "${_scena4_jez}", "height", '91px', { fromValue: '91px'}], position: 0, duration: 0 }         ]
      }
   }
},
"scena4_ptica_zuta_1": {
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
      id: 'scena4_ptica_zuta_sprite',
      type: 'image',
      rect: ['-1254px','113px','580px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_ptica_zuta_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_ptica_zuta_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '71px'],
            ["style", "clip", [0,145,71,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '580px']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '580px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid343", tween: [ "style", "${_scena4_ptica_zuta_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_scena4_ptica_zuta_sprite}", "background-position", [-145,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid345", tween: [ "style", "${_scena4_ptica_zuta_sprite}", "background-position", [-290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-145,0]}], position: 500, duration: 0 },
            { id: "eid346", tween: [ "style", "${_scena4_ptica_zuta_sprite}", "background-position", [-435,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-290,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena4_drvo2_ptica_zuta": {
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
      id: 'scena4_ptica_zuta_1',
      type: 'rect',
      rect: ['543px','9px','auto','auto','auto','auto']
   },
   {
      id: 'scena4_drvo2',
      type: 'image',
      rect: ['0px','0px','574px','723px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_drvo2.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'scena4_ptica_zuta_1',
      symbolName: 'scena4_ptica_zuta_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_scena4_ptica_zuta_1}": [
            ["style", "left", '543px'],
            ["style", "top", '9px']
         ],
         "${_scena4_drvo2}": [
            ["style", "top", '0px'],
            ["style", "height", '723px'],
            ["style", "left", '0px'],
            ["style", "width", '574px']
         ],
         "${symbolSelector}": [
            ["style", "height", '723px'],
            ["style", "width", '1123px']
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
            { id: "eid381", tween: [ "style", "${_scena4_ptica_zuta_1}", "top", '538px', { fromValue: '9px'}], position: 0, duration: 750 },
            { id: "eid383", tween: [ "style", "${_scena4_ptica_zuta_1}", "top", '232px', { fromValue: '538px'}], position: 750, duration: 750 },
            { id: "eid385", tween: [ "style", "${_scena4_ptica_zuta_1}", "top", '436px', { fromValue: '232px'}], position: 1500, duration: 750 },
            { id: "eid387", tween: [ "style", "${_scena4_ptica_zuta_1}", "top", '124px', { fromValue: '436px'}], position: 2250, duration: 750 },
            { id: "eid380", tween: [ "style", "${_scena4_ptica_zuta_1}", "left", '47px', { fromValue: '543px'}], position: 0, duration: 750 },
            { id: "eid382", tween: [ "style", "${_scena4_ptica_zuta_1}", "left", '-126px', { fromValue: '47px'}], position: 750, duration: 750 },
            { id: "eid384", tween: [ "style", "${_scena4_ptica_zuta_1}", "left", '-507px', { fromValue: '-126px'}], position: 1500, duration: 750 },
            { id: "eid386", tween: [ "style", "${_scena4_ptica_zuta_1}", "left", '-947px', { fromValue: '-507px'}], position: 2250, duration: 750 }         ]
      }
   }
},
"scena4_crvenkapica": {
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
      id: 'scena4_crvenkapica1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scena4_crvenkapica1',
      symbolName: 'scena4_crvenkapica1'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '338px'],
            ["style", "width", '1680px']
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
"scena4_crvenkapica1": {
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
      rect: ['0px','0px','1680px','338px','auto','auto'],
      id: 'scena4_crvenkapica_sprite',
      type: 'image',
      clip: ['rect(0px 210px 338px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena4_crvenkapica_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_crvenkapica_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '338px'],
            ["style", "clip", [0,210,338,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '1680px']
         ],
         "${symbolSelector}": [
            ["style", "height", '338px'],
            ["style", "width", '1680px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid331", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid332", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-210,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid333", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-420,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-210,0]}], position: 500, duration: 0 },
            { id: "eid334", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-630,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-420,0]}], position: 750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-630,0]}], position: 1000, duration: 0 },
            { id: "eid336", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1050,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-840,0]}], position: 1250, duration: 0 },
            { id: "eid337", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1050,0]}], position: 1500, duration: 0 },
            { id: "eid338", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1260,0]}], position: 1750, duration: 0 },
            { id: "eid398", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1470,0]}], position: 2000, duration: 0 },
            { id: "eid399", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-210,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid400", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-420,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-210,0]}], position: 2500, duration: 0 },
            { id: "eid401", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-630,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-420,0]}], position: 2750, duration: 0 },
            { id: "eid402", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-630,0]}], position: 3000, duration: 0 },
            { id: "eid403", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1050,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-840,0]}], position: 3250, duration: 0 },
            { id: "eid404", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1050,0]}], position: 3500, duration: 0 },
            { id: "eid405", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1260,0]}], position: 3750, duration: 0 },
            { id: "eid406", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1470,0]}], position: 4000, duration: 0 },
            { id: "eid407", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-210,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4250, duration: 0 },
            { id: "eid408", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-420,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-210,0]}], position: 4500, duration: 0 },
            { id: "eid409", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-630,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-420,0]}], position: 4750, duration: 0 },
            { id: "eid410", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-840,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-630,0]}], position: 5000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1050,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-840,0]}], position: 5250, duration: 0 },
            { id: "eid412", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1050,0]}], position: 5500, duration: 0 },
            { id: "eid413", tween: [ "style", "${_scena4_crvenkapica_sprite}", "background-position", [-1470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1260,0]}], position: 5750, duration: 0 }         ]
      }
   }
},
"scena4_vuk": {
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
      rect: ['0px','0px','3760px','414px','auto','auto'],
      id: 'scena4_vuk_sprite',
      type: 'image',
      clip: ['rect(0px 470px 414px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena4_vuk_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '414px'],
            ["style", "width", '3760px']
         ],
         "${_scena4_vuk_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '414px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,470,414,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '3760px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid323", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid324", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid325", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-940,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-470,0]}], position: 500, duration: 0 },
            { id: "eid326", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1410,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-940,0]}], position: 750, duration: 0 },
            { id: "eid327", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1880,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1410,0]}], position: 1000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2350,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1880,0]}], position: 1250, duration: 0 },
            { id: "eid329", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2820,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2350,0]}], position: 1500, duration: 0 },
            { id: "eid330", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-3290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2820,0]}], position: 1750, duration: 0 },
            { id: "eid415", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3290,0]}], position: 2000, duration: 0 },
            { id: "eid416", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid417", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-940,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-470,0]}], position: 2500, duration: 0 },
            { id: "eid418", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1410,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-940,0]}], position: 2750, duration: 0 },
            { id: "eid419", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1880,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1410,0]}], position: 3000, duration: 0 },
            { id: "eid420", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2350,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1880,0]}], position: 3250, duration: 0 },
            { id: "eid421", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2820,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2350,0]}], position: 3500, duration: 0 },
            { id: "eid422", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-3290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2820,0]}], position: 3750, duration: 0 },
            { id: "eid423", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3290,0]}], position: 4000, duration: 0 },
            { id: "eid424", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-470,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4250, duration: 0 },
            { id: "eid425", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-940,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-470,0]}], position: 4500, duration: 0 },
            { id: "eid426", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1410,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-940,0]}], position: 4750, duration: 0 },
            { id: "eid427", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-1880,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1410,0]}], position: 5000, duration: 0 },
            { id: "eid428", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2350,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1880,0]}], position: 5250, duration: 0 },
            { id: "eid429", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-2820,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2350,0]}], position: 5500, duration: 0 },
            { id: "eid430", tween: [ "style", "${_scena4_vuk_sprite}", "background-position", [-3290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2820,0]}], position: 5750, duration: 0 }         ]
      }
   }
},
"scena4_ptica_crvena_1": {
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
      rect: ['0px','0px','580px','71px','auto','auto'],
      id: 'scena4_ptica_crvena_sprite',
      type: 'image',
      clip: ['rect(0px 145px 71px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena4_ptica_crvena_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_ptica_crvena_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '71px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,145,71,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '580px']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '580px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid339", tween: [ "style", "${_scena4_ptica_crvena_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid340", tween: [ "style", "${_scena4_ptica_crvena_sprite}", "background-position", [-145,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid341", tween: [ "style", "${_scena4_ptica_crvena_sprite}", "background-position", [-290,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-145,0]}], position: 500, duration: 0 },
            { id: "eid342", tween: [ "style", "${_scena4_ptica_crvena_sprite}", "background-position", [-435,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-290,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena4_drvo1_ptica_crvena": {
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
      id: 'scena4_ptica_crvena_1',
      type: 'rect',
      rect: ['0px','263px','auto','auto','auto','auto']
   },
   {
      id: 'scena4_drvo1',
      type: 'image',
      rect: ['500px','0px','530px','667px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_drvo1.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'scena4_ptica_crvena_1',
      symbolName: 'scena4_ptica_crvena_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_scena4_ptica_crvena_1}": [
            ["style", "left", '951px'],
            ["style", "top", '-150px']
         ],
         "${_scena4_drvo1}": [
            ["style", "top", '0px'],
            ["style", "height", '667px'],
            ["style", "left", '500px'],
            ["style", "width", '530px']
         ],
         "${symbolSelector}": [
            ["style", "height", '667px'],
            ["style", "width", '1030px']
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
            { id: "eid436", tween: [ "style", "${_scena4_ptica_crvena_1}", "top", '480px', { fromValue: '-150px'}], position: 0, duration: 750 },
            { id: "eid438", tween: [ "style", "${_scena4_ptica_crvena_1}", "top", '44px', { fromValue: '480px'}], position: 750, duration: 750 },
            { id: "eid440", tween: [ "style", "${_scena4_ptica_crvena_1}", "top", '369px', { fromValue: '44px'}], position: 1500, duration: 750 },
            { id: "eid442", tween: [ "style", "${_scena4_ptica_crvena_1}", "top", '39px', { fromValue: '369px'}], position: 2250, duration: 750 },
            { id: "eid435", tween: [ "style", "${_scena4_ptica_crvena_1}", "left", '481px', { fromValue: '951px'}], position: 0, duration: 750 },
            { id: "eid437", tween: [ "style", "${_scena4_ptica_crvena_1}", "left", '317px', { fromValue: '481px'}], position: 750, duration: 750 },
            { id: "eid439", tween: [ "style", "${_scena4_ptica_crvena_1}", "left", '87px', { fromValue: '317px'}], position: 1500, duration: 750 },
            { id: "eid441", tween: [ "style", "${_scena4_ptica_crvena_1}", "left", '-181px', { fromValue: '87px'}], position: 2250, duration: 750 }         ]
      }
   }
},
"scena4_nebo_oblaci": {
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
      id: 'scena4_nebo',
      type: 'image',
      rect: ['0px','0px','1280px','853px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_nebo.png','0px','0px']
   },
   {
      id: 'scena4_oblaci',
      type: 'image',
      rect: ['0px','54px','3095px','344px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_oblaci.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_oblaci}": [
            ["style", "top", '54px'],
            ["style", "height", '344px'],
            ["style", "left", '0px'],
            ["style", "width", '3095px']
         ],
         "${_scena4_nebo}": [
            ["style", "top", '0px'],
            ["style", "height", '853px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${symbolSelector}": [
            ["style", "height", '853px'],
            ["style", "width", '3095px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid444", tween: [ "style", "${_scena4_oblaci}", "left", '-1815px', { fromValue: '0px'}], position: 0, duration: 10000 }         ]
      }
   }
},
"scena4_trava_back_tava": {
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
      id: 'scena4_trava_back',
      type: 'image',
      rect: ['0px','93px','1280px','182px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_trava_back.png','0px','0px']
   },
   {
      id: 'scena4_trava',
      type: 'image',
      rect: ['0px','0px','4014px','93px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_trava.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_trava_back}": [
            ["style", "top", '93px'],
            ["style", "height", '182px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${symbolSelector}": [
            ["style", "height", '275px'],
            ["style", "width", '4014px']
         ],
         "${_scena4_trava}": [
            ["style", "top", '0px'],
            ["style", "height", '93px'],
            ["style", "left", '0px'],
            ["style", "width", '4014px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid446", tween: [ "style", "${_scena4_trava}", "left", '-2734px', { fromValue: '0px'}], position: 0, duration: 8000 }         ]
      }
   }
},
"scena4_cvijece_1": {
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
      id: 'scena4_cvijece',
      type: 'image',
      rect: ['0px','0px','2790px','178px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena4_cvijece.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena4_cvijece}": [
            ["style", "top", '0px'],
            ["style", "height", '178px'],
            ["style", "left", '0px'],
            ["style", "width", '2790px']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "width", '2790px']
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
            { id: "eid448", tween: [ "style", "${_scena4_cvijece}", "left", '-1508px', { fromValue: '0px'}], position: 0, duration: 6000 }         ]
      }
   }
},
"scena5_vuk": {
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
      rect: ['0px','0px','6500px','276px','auto','auto'],
      id: 'scena5_vuk_sprite',
      type: 'image',
      clip: ['rect(0px 325px 276px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena5_vuk_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena5_vuk_sprite}": [
            ["style", "top", '0px'],
            ["style", "left", '-156px'],
            ["style", "height", '276px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,325,276,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '6500px']
         ],
         "${symbolSelector}": [
            ["style", "height", '276px'],
            ["style", "width", '6500px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4750,
         autoPlay: true,
         timeline: [
            { id: "eid450", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-325,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid452", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-325,0]}], position: 500, duration: 0 },
            { id: "eid453", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-975,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 750, duration: 0 },
            { id: "eid454", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-1300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-975,0]}], position: 1000, duration: 0 },
            { id: "eid455", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-1625,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1300,0]}], position: 1250, duration: 0 },
            { id: "eid456", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-1950,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1625,0]}], position: 1500, duration: 0 },
            { id: "eid457", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-2275,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1950,0]}], position: 1750, duration: 0 },
            { id: "eid458", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-2600,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2275,0]}], position: 2000, duration: 0 },
            { id: "eid459", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-2925,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2600,0]}], position: 2250, duration: 0 },
            { id: "eid460", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-3250,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2925,0]}], position: 2500, duration: 0 },
            { id: "eid461", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-3575,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3250,0]}], position: 2750, duration: 0 },
            { id: "eid462", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-3900,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3575,0]}], position: 3000, duration: 0 },
            { id: "eid463", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-4225,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3900,0]}], position: 3250, duration: 0 },
            { id: "eid464", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-4550,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4225,0]}], position: 3500, duration: 0 },
            { id: "eid465", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-4875,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4550,0]}], position: 3750, duration: 0 },
            { id: "eid466", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-5200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4875,0]}], position: 4000, duration: 0 },
            { id: "eid467", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-5525,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5200,0]}], position: 4250, duration: 0 },
            { id: "eid468", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-5850,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5525,0]}], position: 4500, duration: 0 },
            { id: "eid469", tween: [ "style", "${_scena5_vuk_sprite}", "background-position", [-6175,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5850,0]}], position: 4750, duration: 0 },
            { id: "eid473", tween: [ "style", "${_scena5_vuk_sprite}", "left", '437px', { fromValue: '-156px'}], position: 0, duration: 1750 }         ]
      }
   }
},
"scena5_drvo_ptice": {
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
      id: 'scena5_drvo1',
      type: 'image',
      rect: ['640px','0px','691px','871px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena5_drvo1.png','0px','0px']
   },
   {
      id: 'scena5_ptica_zuta',
      type: 'rect',
      rect: ['0','522','auto','auto','auto','auto']
   },
   {
      id: 'scena5_ptica_crvena',
      type: 'rect',
      rect: ['10','328','auto','auto','auto','auto']
   },
   {
      id: 'scena5_ptica_plava',
      type: 'rect',
      rect: ['27','173','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scena5_ptica_plava',
      symbolName: 'scena5_ptica_plava'
   },
   {
      id: 'scena5_ptica_crvena',
      symbolName: 'scena5_ptica_crvena'
   },
   {
      id: 'scena5_ptica_zuta',
      symbolName: 'scena5_ptica_zuta'
   }   ]
   },
   states: {
      "Base State": {
         "${_scena5_ptica_plava}": [
            ["style", "left", '27px'],
            ["style", "top", '173px']
         ],
         "${_scena5_ptica_crvena}": [
            ["style", "left", '19px'],
            ["style", "top", '356px']
         ],
         "${symbolSelector}": [
            ["style", "height", '871px'],
            ["style", "width", '1332px']
         ],
         "${_scena5_ptica_zuta}": [
            ["style", "left", '0px'],
            ["style", "top", '522px']
         ],
         "${_scena5_drvo1}": [
            ["style", "height", '871px'],
            ["style", "top", '0px'],
            ["style", "left", '640px'],
            ["style", "width", '691px']
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
            { id: "eid510", tween: [ "style", "${_scena5_ptica_zuta}", "left", '985px', { fromValue: '0px'}], position: 0, duration: 750 },
            { id: "eid512", tween: [ "style", "${_scena5_ptica_zuta}", "left", '1289px', { fromValue: '985px'}], position: 750, duration: 750 },
            { id: "eid514", tween: [ "style", "${_scena5_ptica_zuta}", "left", '1600px', { fromValue: '1289px'}], position: 1500, duration: 750 },
            { id: "eid516", tween: [ "style", "${_scena5_ptica_zuta}", "left", '2013px', { fromValue: '1600px'}], position: 2250, duration: 750 },
            { id: "eid501", tween: [ "style", "${_scena5_ptica_crvena}", "top", '667px', { fromValue: '356px'}], position: 0, duration: 750 },
            { id: "eid503", tween: [ "style", "${_scena5_ptica_crvena}", "top", '209px', { fromValue: '667px'}], position: 750, duration: 750 },
            { id: "eid504", tween: [ "style", "${_scena5_ptica_crvena}", "top", '436px', { fromValue: '209px'}], position: 1500, duration: 750 },
            { id: "eid507", tween: [ "style", "${_scena5_ptica_crvena}", "top", '0px', { fromValue: '436px'}], position: 2250, duration: 750 },
            { id: "eid500", tween: [ "style", "${_scena5_ptica_crvena}", "left", '1001px', { fromValue: '19px'}], position: 0, duration: 750 },
            { id: "eid502", tween: [ "style", "${_scena5_ptica_crvena}", "left", '1174px', { fromValue: '1001px'}], position: 750, duration: 750 },
            { id: "eid505", tween: [ "style", "${_scena5_ptica_crvena}", "left", '1392px', { fromValue: '1174px'}], position: 1500, duration: 750 },
            { id: "eid506", tween: [ "style", "${_scena5_ptica_crvena}", "left", '1868px', { fromValue: '1392px'}], position: 2250, duration: 750 },
            { id: "eid489", tween: [ "style", "${_scena5_ptica_plava}", "top", '182px', { fromValue: '173px'}], position: 0, duration: 750 },
            { id: "eid491", tween: [ "style", "${_scena5_ptica_plava}", "top", '498px', { fromValue: '182px'}], position: 750, duration: 750 },
            { id: "eid493", tween: [ "style", "${_scena5_ptica_plava}", "top", '229px', { fromValue: '498px'}], position: 1500, duration: 750 },
            { id: "eid495", tween: [ "style", "${_scena5_ptica_plava}", "top", '538px', { fromValue: '229px'}], position: 2250, duration: 750 },
            { id: "eid511", tween: [ "style", "${_scena5_ptica_zuta}", "top", '391px', { fromValue: '522px'}], position: 0, duration: 750 },
            { id: "eid513", tween: [ "style", "${_scena5_ptica_zuta}", "top", '633px', { fromValue: '391px'}], position: 750, duration: 750 },
            { id: "eid515", tween: [ "style", "${_scena5_ptica_zuta}", "top", '324px', { fromValue: '633px'}], position: 1500, duration: 750 },
            { id: "eid517", tween: [ "style", "${_scena5_ptica_zuta}", "top", '211px', { fromValue: '324px'}], position: 2250, duration: 750 },
            { id: "eid488", tween: [ "style", "${_scena5_ptica_plava}", "left", '940px', { fromValue: '27px'}], position: 0, duration: 750 },
            { id: "eid490", tween: [ "style", "${_scena5_ptica_plava}", "left", '1160px', { fromValue: '940px'}], position: 750, duration: 750 },
            { id: "eid492", tween: [ "style", "${_scena5_ptica_plava}", "left", '1438px', { fromValue: '1160px'}], position: 1500, duration: 750 },
            { id: "eid494", tween: [ "style", "${_scena5_ptica_plava}", "left", '2022px', { fromValue: '1438px'}], position: 2250, duration: 750 }         ]
      }
   }
},
"scena5_ptica_plava": {
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
      rect: ['0px','0px','600px','73px','auto','auto'],
      id: 'scena5_ptica_plava_sprite',
      type: 'image',
      clip: ['rect(0px 150px 73px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena5_ptica_plava_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '600px']
         ],
         "${_scena5_ptica_plava_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '73px'],
            ["style", "clip", [0,150,73,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid474", tween: [ "style", "${_scena5_ptica_plava_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_scena5_ptica_plava_sprite}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid480", tween: [ "style", "${_scena5_ptica_plava_sprite}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 500, duration: 0 },
            { id: "eid483", tween: [ "style", "${_scena5_ptica_plava_sprite}", "background-position", [-450,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena5_ptica_crvena": {
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
      rect: ['0px','0px','600px','73px','auto','auto'],
      id: 'scena5_ptica_crvena_sprite',
      type: 'image',
      clip: ['rect(0px 150px 73px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena5_ptica_crvena_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '600px']
         ],
         "${_scena5_ptica_crvena_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '73px'],
            ["style", "clip", [0,150,73,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid475", tween: [ "style", "${_scena5_ptica_crvena_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid479", tween: [ "style", "${_scena5_ptica_crvena_sprite}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid482", tween: [ "style", "${_scena5_ptica_crvena_sprite}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 500, duration: 0 },
            { id: "eid485", tween: [ "style", "${_scena5_ptica_crvena_sprite}", "background-position", [-450,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena5_ptica_zuta": {
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
      rect: ['0px','0px','600px','73px','auto','auto'],
      id: 'scena5_ptica_zuta_sprite',
      type: 'image',
      clip: ['rect(0px 150px 73px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena5_ptica_zuta_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '600px']
         ],
         "${_scena5_ptica_zuta_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '73px'],
            ["style", "clip", [0,150,73,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid476", tween: [ "style", "${_scena5_ptica_zuta_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid478", tween: [ "style", "${_scena5_ptica_zuta_sprite}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid481", tween: [ "style", "${_scena5_ptica_zuta_sprite}", "background-position", [-300,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 500, duration: 0 },
            { id: "eid484", tween: [ "style", "${_scena5_ptica_zuta_sprite}", "background-position", [-450,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-300,0]}], position: 750, duration: 0 }         ]
      }
   }
},
"scena5_grmlje_jez": {
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
      id: 'scena5_grmlje',
      type: 'image',
      rect: ['0px','0px','196px','159px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena5_grmlje.png','0px','0px']
   },
   {
      id: 'scena5_jez',
      type: 'image',
      rect: ['241px','56px','137px','93px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scena5_jez.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena5_grmlje}": [
            ["style", "height", '159px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '196px']
         ],
         "${_scena5_jez}": [
            ["style", "height", '93px'],
            ["style", "top", '56px'],
            ["style", "left", '237px'],
            ["style", "width", '137px']
         ],
         "${symbolSelector}": [
            ["style", "height", '159px'],
            ["style", "width", '902px']
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
            { id: "eid520", tween: [ "style", "${_scena5_jez}", "left", '-1210px', { fromValue: '237px'}], position: 0, duration: 3000 }         ]
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
            ["style", "height", '75px'],
            ["style", "top", '0px'],
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
            ["style", "height", '75px'],
            ["style", "top", '0px'],
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

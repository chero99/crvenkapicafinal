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
            id:'nebo',
            type:'rect',
            rect:['-469','-678','auto','auto','auto','auto']
         },
         {
            id:'scena3_background',
            type:'image',
            rect:['0px','172px','1280px','627px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"scena3_background.png",'0px','0px']
         },
         {
            id:'borovi',
            type:'rect',
            rect:['869','-25','auto','auto','auto','auto']
         },
         {
            id:'scena3_kamenje1',
            type:'rect',
            rect:['417','486','auto','auto','auto','auto']
         },
         {
            id:'jez',
            type:'rect',
            rect:['818','416','auto','auto','auto','auto']
         },
         {
            id:'ptica_zuta_1',
            type:'rect',
            rect:['-797','-132','auto','auto','auto','auto']
         },
         {
            id:'scena3_vuk1',
            type:'rect',
            rect:['1px','-3px','auto','auto','auto','auto']
         },
         {
            id:'scena3_crvenkapica1',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            clip:['rect(0px 2328pxpx 457pxpx 0px)']
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
            id:'borovi',
            symbolName:'borovi'
         },
         {
            id:'button_play_',
            symbolName:'button_play_'
         },
         {
            id:'scena3_kamenje1',
            symbolName:'scena3_kamenje1'
         },
         {
            id:'text_slide2',
            symbolName:'text_slide'
         },
         {
            id:'button_stop_',
            symbolName:'button_stop_'
         },
         {
            id:'nebo',
            symbolName:'nebo'
         },
         {
            id:'ptica_zuta_1',
            symbolName:'ptica_zuta_1'
         },
         {
            id:'meni2',
            symbolName:'meni'
         },
         {
            id:'jez',
            symbolName:'jez'
         },
         {
            id:'scena3_crvenkapica1',
            symbolName:'crvenkapica3_sprite_1'
         },
         {
            id:'scena3_vuk1',
            symbolName:'vuk1_sprite'
         }
         ]
      },
   states: {
      "Base State": {
         "${_scena3_kamenje1}": [
            ["style", "left", '418px'],
            ["style", "top", '526px']
         ],
         "${_button_back}": [
            ["style", "top", '670px'],
            ["style", "height", '75px'],
            ["style", "left", '16px'],
            ["style", "width", '75px']
         ],
         "${_scena3_vuk1}": [
            ["style", "top", '160px'],
            ["style", "left", '165px'],
            ["style", "clip", [0,755,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_scena3_crvenkapica1}": [
            ["style", "top", '218px'],
            ["style", "left", '595px'],
            ["style", "clip", [0,291,457,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_button_play_}": [
            ["style", "left", '105px']
         ],
         "${_nebo}": [
            ["style", "left", '-471px'],
            ["style", "top", '-679px']
         ],
         "${_borovi}": [
            ["style", "left", '867px']
         ],
         "${_scena3_background}": [
            ["style", "top", '172px'],
            ["style", "height", '627px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_button_next}": [
            ["style", "top", '669px'],
            ["style", "height", '75px'],
            ["style", "left", '1187px'],
            ["style", "width", '75px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '755px'],
            ["style", "width", '1280px']
         ],
         "${_jez}": [
            ["style", "left", '816px']
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
            { id: "eid391", tween: [ "style", "${_scena3_crvenkapica1}", "clip", [0,291,457,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,291,457,0]}], position: 0, duration: 0 },
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
            ["style", "clip", [0,298,464,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '464px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
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
      rect: ['756px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/5.png','0px','0px']
   },
   {
      id: 'str4',
      type: 'image',
      rect: ['516px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/4.png','0px','0px']
   },
   {
      id: 'str2',
      type: 'image',
      rect: ['283px','37px','195px','130px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/2.png','0px','0px']
   },
   {
      id: 'str1',
      type: 'image',
      rect: ['48px','37px','195px','130px','auto','auto'],
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
            ["style", "left", '756px'],
            ["style", "width", '195px']
         ],
         "${_meni}": [
            ["style", "top", '-48px'],
            ["style", "height", '243px'],
            ["style", "left", '0px'],
            ["style", "width", '994px']
         ],
         "${_str2}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '283px'],
            ["style", "width", '195px']
         ],
         "${symbolSelector}": [
            ["style", "height", '243px'],
            ["style", "width", '994px']
         ],
         "${_str4}": [
            ["style", "top", '37px'],
            ["style", "height", '130px'],
            ["style", "left", '521px'],
            ["style", "width", '195px']
         ],
         "${_str1}": [
            ["style", "left", '48px'],
            ["style", "top", '37px']
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
            { id: "eid396", tween: [ "style", "${_str2}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid397", tween: [ "style", "${_str2}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_meni}", "top", '-236px', { fromValue: '-48px'}], position: 0, duration: 1000 },
            { id: "eid151", tween: [ "style", "${_meni}", "top", '-48px', { fromValue: '-236px'}], position: 1000, duration: 1000 },
            { id: "eid392", tween: [ "style", "${_str5}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid393", tween: [ "style", "${_str5}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid394", tween: [ "style", "${_str4}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid395", tween: [ "style", "${_str4}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 },
            { id: "eid398", tween: [ "style", "${_str1}", "top", '-151px', { fromValue: '37px'}], position: 0, duration: 1000 },
            { id: "eid399", tween: [ "style", "${_str1}", "top", '37px', { fromValue: '-151px'}], position: 1000, duration: 1000 }         ]
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
      rect: ['70','18','476px','640px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',25,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'Bakina kuća nalazila se u šumi, na kilometar od sela i do nje je vodio šumski put. Tek što je Crvenkapica ušla u šumu, pred nju na stazu iskoči vuk. Crvenkapica nije znala kako opasan može biti i nije ga se uopće preplašila.<br>\"Dobar dan, Crvenkapice\", reče on.<br>\"Dobar dan i tebi vuče.\"<br>\"Kuda si se zaputila tako rano, Crvenkapice?\"<br>\"Idem kod svoje bake.\"<br>\"Što to nosiš u košari?\"<br>\"Kolač i vino. Moja baka se ne osjeća dobro pa ju želim malo razveseliti.\"<br>\"A gdje živi tvoja baka, Crvenkapice?\"<br>\"U šumi, na kilometar odavde. Njena kuća se nalazi pored tri stara hrasta, ispod stogodišnjeg brijesta. Sigurno je poznaješ.\" odgovori Crvenkapica.<br>',
      align: 'left',
      type: 'text'
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
            ["style", "clip", [0,428,664,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '664px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
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
      rect: ['-43px','21px','6040px','498px','auto','auto'],
      id: 'scena3_vuk_sprite',
      type: 'image',
      clip: ['rect(0px 755px 498px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_vuk_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_vuk_sprite}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,755,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '498px'],
            ["style", "left", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '6040px']
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
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid356", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid357", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid358", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-1510,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 500, duration: 0 },
            { id: "eid359", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-2265,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1510,0]}], position: 750, duration: 0 },
            { id: "eid360", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3020,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2265,0]}], position: 1000, duration: 0 },
            { id: "eid361", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3775,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3020,0]}], position: 1250, duration: 0 },
            { id: "eid362", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-4530,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3775,0]}], position: 1500, duration: 0 },
            { id: "eid363", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-5285,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4530,0]}], position: 1750, duration: 0 },
            { id: "eid364", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5285,0]}], position: 2000, duration: 0 },
            { id: "eid365", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid366", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-1510,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 2500, duration: 0 },
            { id: "eid367", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-2265,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1510,0]}], position: 2750, duration: 0 },
            { id: "eid368", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3020,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2265,0]}], position: 3000, duration: 0 },
            { id: "eid369", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3775,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3020,0]}], position: 3250, duration: 0 },
            { id: "eid370", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-4530,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3775,0]}], position: 3500, duration: 0 },
            { id: "eid371", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-5285,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4530,0]}], position: 3750, duration: 0 },
            { id: "eid372", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-5285,0]}], position: 4000, duration: 0 },
            { id: "eid373", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4250, duration: 0 },
            { id: "eid374", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-1510,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 4500, duration: 0 },
            { id: "eid375", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-2265,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1510,0]}], position: 4750, duration: 0 },
            { id: "eid376", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3020,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2265,0]}], position: 5000, duration: 0 },
            { id: "eid377", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-3775,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3020,0]}], position: 5250, duration: 0 },
            { id: "eid378", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-4530,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-3775,0]}], position: 5500, duration: 0 },
            { id: "eid379", tween: [ "style", "${_scena3_vuk_sprite}", "background-position", [-5285,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-4530,0]}], position: 5750, duration: 0 }         ]
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
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '88px'],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
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
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '88px'],
            ["style", "clip", [0,180,88,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
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
      fill: ['rgba(0,0,0,0)','images/scena3_borovi.png','0px','0px']
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
      rect: ['0px','0px','2328px','457px','auto','auto'],
      id: 'scena3_crvenkapica_sprite',
      type: 'image',
      clip: ['rect(0px 291px 457px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_crvenkapica_sprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_crvenkapica_sprite}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '457px'],
            ["style", "clip", [0,291,457,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '2328px']
         ],
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
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid203", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid204", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-291,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid205", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-582,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-291,0]}], position: 500, duration: 0 },
            { id: "eid206", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-873,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-582,0]}], position: 750, duration: 0 },
            { id: "eid207", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1164,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-873,0]}], position: 1000, duration: 0 },
            { id: "eid208", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1455,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1164,0]}], position: 1250, duration: 0 },
            { id: "eid209", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1746,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1455,0]}], position: 1500, duration: 0 },
            { id: "eid210", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-2037,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1746,0]}], position: 1750, duration: 0 },
            { id: "eid323", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2037,0]}], position: 2000, duration: 0 },
            { id: "eid324", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-291,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid325", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-582,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-291,0]}], position: 2500, duration: 0 },
            { id: "eid326", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-873,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-582,0]}], position: 2750, duration: 0 },
            { id: "eid327", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1164,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-873,0]}], position: 3000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1455,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1164,0]}], position: 3250, duration: 0 },
            { id: "eid329", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1746,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1455,0]}], position: 3500, duration: 0 },
            { id: "eid330", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-2037,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1746,0]}], position: 3750, duration: 0 },
            { id: "eid331", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2037,0]}], position: 4000, duration: 0 },
            { id: "eid332", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-291,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4250, duration: 0 },
            { id: "eid333", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-582,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-291,0]}], position: 4500, duration: 0 },
            { id: "eid334", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-873,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-582,0]}], position: 4750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1164,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-873,0]}], position: 5000, duration: 0 },
            { id: "eid336", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1455,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1164,0]}], position: 5250, duration: 0 },
            { id: "eid337", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-1746,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1455,0]}], position: 5500, duration: 0 },
            { id: "eid338", tween: [ "style", "${_scena3_crvenkapica_sprite}", "background-position", [-2037,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1746,0]}], position: 5750, duration: 0 }         ]
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
         duration: 5750,
         autoPlay: true,
         timeline: [
         ]
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
            ["style", "clip", [0,258,126,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '126px'],
            ["style", "left", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
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
         duration: 5750,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"scena3_crvenkapica_vuk_kamenje": {
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
            ["style", "height", '1307px'],
            ["style", "width", '6040px']
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
         ]
      }
   }
},
"scena3_kamenje1": {
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
      rect: ['-148px','-94px','466px','915px','auto','auto'],
      id: 'scena3_kamenje',
      type: 'image',
      clip: ['rect(0px 466px 277.5px 0px)'],
      fill: ['rgba(0,0,0,0)','images/scena3_kamenje.png','0px','-650px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scena3_kamenje}": [
            ["style", "top", '0px'],
            ["style", "left", '-1px'],
            ["style", "height", '915px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,466,277.5,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '466px']
         ],
         "${symbolSelector}": [
            ["style", "height", '915px'],
            ["style", "width", '466px']
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
            { id: "eid384", tween: [ "style", "${_scena3_kamenje}", "background-position", [0,-680], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 5750 }         ]
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

/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_button_back}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica3.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button_next}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica5.html", "_self");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_button_meni}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ormar1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar1_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar1_closed}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar1");
   //Edge symbol end:'ormar1'

   //=========================================================
   
   //Edge symbol: 'ormar2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar2_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar2_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar2");
   //Edge symbol end:'ormar2'

   //=========================================================
   
   //Edge symbol: 'ormar3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar3_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar3_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar3");
   //Edge symbol end:'ormar3'

   //=========================================================
   
   //Edge symbol: 'pecnica'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_pecnica_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pecnica_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("pecnica");
   //Edge symbol end:'pecnica'

   //=========================================================
   
   //Edge symbol: 'ormar4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar4_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar4_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar4");
   //Edge symbol end:'ormar4'

   //=========================================================
   
   //Edge symbol: 'ormar5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar5_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar5_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar5");
   //Edge symbol end:'ormar5'

   //=========================================================
   
   //Edge symbol: 'ormar33'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar3_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar3_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar33");
   //Edge symbol end:'ormar33'

   //=========================================================
   
   //Edge symbol: 'pecnica_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_pecnica_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pecnica_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("pecnica_");
   //Edge symbol end:'pecnica_'

   //=========================================================
   
   //Edge symbol: 'ormar4_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar4_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar4_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ormar4_");
   //Edge symbol end:'ormar4_'

   //=========================================================
   
   //Edge symbol: 'ormar5_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar5_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_ormar5_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("ormar5_");
   //Edge symbol end:'ormar5_'

   //=========================================================
   
   //Edge symbol: 'prozor1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_prozor1_open}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_prozor1_closed}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("prozor1");
   //Edge symbol end:'prozor1'

   //=========================================================
   
   //Edge symbol: 'prozor2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_prozor2_closed}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena2_prozor2_open}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("prozor2");
   //Edge symbol end:'prozor2'

   //=========================================================
   
   //Edge symbol: 'mis'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_misjarupa}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("mis");
   //Edge symbol end:'mis'

   //=========================================================
   
   //Edge symbol: 'crvenkapica1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_crvenkapica_sprite}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1350, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("crvenkapica1");
   //Edge symbol end:'crvenkapica1'

   //=========================================================
   
   //Edge symbol: 'meni'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_meni}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_str6}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica6.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_str5}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica5.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_str3}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica3.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_str2}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("stranica2.html", "_self");
         

      });
      //Edge binding end

   })("meni");
   //Edge symbol end:'meni'

   //=========================================================
   
   //Edge symbol: 'text_slide'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_text_slide}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("text_slide");
   //Edge symbol end:'text_slide'

   //=========================================================
   
   //Edge symbol: 'mama1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_mama_sprite}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("mama1");
   //Edge symbol end:'mama1'

   //=========================================================
   
   //Edge symbol: 'kolaciivino'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena2_kolacivino}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("kolaciivino");
   //Edge symbol end:'kolaciivino'

   //=========================================================
   
   //Edge symbol: 'nebo'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Group}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("nebo");
   //Edge symbol end:'nebo'

   //=========================================================
   
   //Edge symbol: 'vuk1_sprite'
   (function(symbolName) {   
   
      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_vuk_sprite1}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("vuk1_sprite");
   //Edge symbol end:'vuk1_sprite'

   //=========================================================
   
   //Edge symbol: 'crvenkapica3_sprite'
   (function(symbolName) {   
   
      

      

      

      

      

      

   })("crvenkapica3_sprite");
   //Edge symbol end:'crvenkapica3_sprite'

   //=========================================================
   
   //Edge symbol: 'jez'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_scena3_grmlje}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("jez");
   //Edge symbol end:'jez'

   //=========================================================
   
   //Edge symbol: 'borovi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      

   })("borovi");
   //Edge symbol end:'borovi'

   //=========================================================
   
   //Edge symbol: 'ptica_plava_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("ptica_plava_1");
   //Edge symbol end:'ptica_plava_1'

   //=========================================================
   
   //Edge symbol: 'ptica_crvena_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("ptica_crvena_1");
   //Edge symbol end:'ptica_crvena_1'

   //=========================================================
   
   //Edge symbol: 'borovi1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena3_borovi2}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("borovi1");
   //Edge symbol end:'borovi1'

   //=========================================================
   
   //Edge symbol: 'crvenkapica3_sprite_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena3_crvenkapica_sprite}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("crvenkapica3_sprite_1");
   //Edge symbol end:'crvenkapica3_sprite_1'

   //=========================================================
   
   //Edge symbol: 'vuk_sprite1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena3_vuk_sprite}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("vuk_sprite1");
   //Edge symbol end:'vuk_sprite1'

   //=========================================================
   
   //Edge symbol: 'ptica_zuta_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_scena3_drvece}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ptica_zuta_1");
   //Edge symbol end:'ptica_zuta_1'

   //=========================================================
   
   //Edge symbol: 'ptica_zuta_sprite1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("ptica_zuta_sprite1");
   //Edge symbol end:'ptica_zuta_sprite1'

   //=========================================================
   
   //Edge symbol: 'crvenkapica_i_vuk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena3_kamenje}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("crvenkapica_i_vuk");
   //Edge symbol end:'crvenkapica_i_vuk'

   //=========================================================
   
   //Edge symbol: 'scena4_grm_plava_ptica'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_grm}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play("position");

      });
      //Edge binding end

   })("scena4_grm_plava_ptica");
   //Edge symbol end:'scena4_grm_plava_ptica'

   //=========================================================
   
   //Edge symbol: 'scena4_plava_ptica'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("scena4_plava_ptica");
   //Edge symbol end:'scena4_plava_ptica'

   //=========================================================
   
   //Edge symbol: 'scena4_panj_jez'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_panj}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_panj_jez");
   //Edge symbol end:'scena4_panj_jez'

   //=========================================================
   
   //Edge symbol: 'scena4_ptica_zuta_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("scena4_ptica_zuta_1");
   //Edge symbol end:'scena4_ptica_zuta_1'

   //=========================================================
   
   //Edge symbol: 'scena4_drvo2_ptica_zuta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_drvo2}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_drvo2_ptica_zuta");
   //Edge symbol end:'scena4_drvo2_ptica_zuta'

   //=========================================================
   
   //Edge symbol: 'scena4_crvenkapica'
   (function(symbolName) {   
   
   })("scena4_crvenkapica");
   //Edge symbol end:'scena4_crvenkapica'

   //=========================================================
   
   //Edge symbol: 'scena4_crvenkapica1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_crvenkapica_sprite}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_crvenkapica1");
   //Edge symbol end:'scena4_crvenkapica1'

   //=========================================================
   
   //Edge symbol: 'scena4_vuk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_vuk_sprite}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_vuk");
   //Edge symbol end:'scena4_vuk'

   //=========================================================
   
   //Edge symbol: 'scena4_ptica_crvena_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("scena4_ptica_crvena_1");
   //Edge symbol end:'scena4_ptica_crvena_1'

   //=========================================================
   
   //Edge symbol: 'scena4_drvo1_ptica_crvena'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_scena4_drvo1}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_drvo1_ptica_crvena");
   //Edge symbol end:'scena4_drvo1_ptica_crvena'

   //=========================================================
   
   //Edge symbol: 'scena4_nebo_oblaci'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_oblaci}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_nebo_oblaci");
   //Edge symbol end:'scena4_nebo_oblaci'

   //=========================================================
   
   //Edge symbol: 'scena4_trava_back_tava'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_trava}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_trava_back_tava");
   //Edge symbol end:'scena4_trava_back_tava'

   //=========================================================
   
   //Edge symbol: 'scena4_cvijece_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_scena4_cvijece}", "touchstart", function(sym, e) {
         sym.play("position");
         

      });
      //Edge binding end

   })("scena4_cvijece_1");
   //Edge symbol end:'scena4_cvijece_1'

   //=========================================================
   
   //Edge symbol: 'button_mute_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button_mute}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().stranica4.stop();

      });
      //Edge binding end

   })("button_mute_");
   //Edge symbol end:'button_mute_'

   //=========================================================
   
   //Edge symbol: 'button_play_'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_button_play}", "touchstart", function(sym, e) {
         storyPlay();

      });
      //Edge binding end

   })("button_play_");
   //Edge symbol end:'button_play_'

   //=========================================================
   
   //Edge symbol: 'button_stop_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button_stop}", "touchstart", function(sym, e) {
         storyStop();

      });
      //Edge binding end

   })("button_stop_");
   //Edge symbol end:'button_stop_'

})(jQuery, AdobeEdge, "EDGE-1207506893");
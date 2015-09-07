var limitCharacts = ( function limitCharacts() {

  "use strict";

  function returnFields( limitField, limitNum ){
    if( limitField.length ) {

      if( typeof limitField == "string" ) { // NodeJS support
        limitField = limitField.substring( 0, limitNum )
        return limitField;
      }
      else if( typeof limitField == "object" ) { // Web/HTML support
        for ( var i = 0;  i < limitField.length; i++ ) {
          var elem = limitField[i];
          var dataCount = elem.getAttribute("data-count"),
              countElem = document.querySelector(dataCount);

          valueCountElem( countElem, limitNum );

          elem.addEventListener( "keydown", function() {
            limiter( elem, countElem );
          });
          elem.addEventListener( "keyup", function() {
            limiter( elem, countElem );
          });
        };
      }
      else {
        return ""; // fallback gracefully
      }
    }

    function limiter( elem, countElem ){
      if ( elem.value.length > limitNum ) {
        elem.value = elem.value.substring( 0, limitNum );
        return elem.value;
      } else {
        var currentCount = limitNum - elem.value.length;
        valueCountElem( countElem, currentCount );
      }
    }

    function valueCountElem( elem, count ){
      if( elem instanceof HTMLInputElement && elem.type === "text" ){
        elem.value = count;
      } else {
        elem.textContent = count;
      }
    }

  }

  return returnFields;


})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export for use in Node
  module.exports.limitCharacts = function ( limitField, limitNum ) {
    return limitCharacts( limitField, limitNum );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export for use in AMD
  define([], function ( limitField, limitNum ) {
    return limitCharacts( limitField, limitNum );
  });
}

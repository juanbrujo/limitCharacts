function limitCharacts(limitField, limitNum) {

  "use strict";

  if( limitField.length ) {
    
    [].forEach.call(limitField, function(elem) {
      var dataCount = elem.getAttribute("data-count"),
          countElem = document.querySelector(dataCount);

      valueCountElem(countElem,limitNum);
      
      elem.addEventListener("keydown",function(){
        limiter(elem,countElem);
      });
      elem.addEventListener("keyup",function(){
        limiter(elem,countElem);
      });
      
    });
    
  }
  
  function limiter(elem,countElem){
    if (elem.value.length > limitNum) {
      elem.value = elem.value.substring(0, limitNum);
    } else {
      var currentCount = limitNum - elem.value.length;
      valueCountElem(countElem,currentCount);
    }
  }

  function valueCountElem(elem,count){
    if( elem instanceof HTMLInputElement && elem.type === "text" ){
      elem.value = count;
    } else {
      elem.textContent = count;
    }
  }

}

// module.exports = typeof limitCharacts(limitField, limitNum) === 'function' ? limitCharacts(limitField, limitNum) : limitCharacts(limitField, limitNum);

// if ( typeof module !== "undefined" && module.exports ) {
//   // export functions for use in Node
//   module.exports = limitCharacts(limitField, limitNum);
// } else if ( typeof define !== "undefined" && define.amd ) {
//   // export function for use in AMD
//   define([], limitCharacts(limitField, limitNum));
// }


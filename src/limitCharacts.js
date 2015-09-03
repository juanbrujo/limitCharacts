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
    // split on surrogate pairs and preserve surrogates. this plays
    // nicely with emoji and other unicode characters
    var pairs = elem.value.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/),
      chars = [],
      elemLength = 0;
    // create a set of pairs. splits the emoji information out but
    // non-emoji strings get lumped together
    for (var p in pairs) {
      if (pairs[p] === "") {
        continue;
      }
      if (pairs[p].match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/) !== null) {
        // push emoji and treat as 1 character
        chars.push(pairs[p]);
      } else {
        // non-emoji, split and add to the array
        chars = chars.concat(pairs[p].split(""));
      }
    }
    elemLength = chars.length;
    if (elemLength > limitNum) {
      elem.value = chars.splice(0, limitNum).join("");
    } else {
      var currentCount = limitNum - elemLength;
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

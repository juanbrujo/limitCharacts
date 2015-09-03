/*
 *  limitCharacts - v0.0.1
 *  Limits and trim the amount of characters added to any input/textarea tag
 *
 *  https://github.com/juanbrujo/limitCharacts
 *  Demo: http://juanbrujo.github.io/limitCharacts/
 *
 *  Author: Jorge Epuñan H. |  @csslab
 *  License: MIT
 *  ©2015
 */
function limitCharacts(limitField, limitNum) {
    "use strict";
    function limiter(elem, countElem) {
        var pairs = elem.value.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/), chars = [], elemLength = 0;
        for (var p in pairs) "" !== pairs[p] && (null !== pairs[p].match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/) ? chars.push(pairs[p]) : chars = chars.concat(pairs[p].split("")));
        if (elemLength = chars.length, elemLength > limitNum) elem.value = chars.splice(0, limitNum).join(""); else {
            var currentCount = limitNum - elemLength;
            valueCountElem(countElem, currentCount);
        }
    }
    function valueCountElem(elem, count) {
        elem instanceof HTMLInputElement && "text" === elem.type ? elem.value = count : elem.textContent = count;
    }
    limitField.length && [].forEach.call(limitField, function(elem) {
        var dataCount = elem.getAttribute("data-count"), countElem = document.querySelector(dataCount);
        valueCountElem(countElem, limitNum), elem.addEventListener("keydown", function() {
            limiter(elem, countElem);
        }), elem.addEventListener("keyup", function() {
            limiter(elem, countElem);
        });
    });
}
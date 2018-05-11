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
!function() {
    function limitCharacts(limitField, limitNum) {
        "use strict";
        function limiter(elem, countElem) {
            if (elem.value.length > limitNum) elem.value = elem.value.substring(0, limitNum); else {
                var currentCount = limitNum - elem.value.length;
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
    "function" == typeof define && define.amd ? define(limitCharacts) : "undefined" != typeof module ? module.exports = limitCharacts : window.limitCharacts = limitCharacts;
}();
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
var limitCharacts = function() {
    "use strict";
    function returnFields(limitField, limitNum) {
        function limiter(elem, countElem) {
            if (elem.value.length > limitNum) return elem.value = elem.value.substring(0, limitNum), 
            elem.value;
            var currentCount = limitNum - elem.value.length;
            valueCountElem(countElem, currentCount);
        }
        function valueCountElem(elem, count) {
            elem instanceof HTMLInputElement && "text" === elem.type ? elem.value = count : elem.textContent = count;
        }
        if (limitField.length) {
            if ("string" == typeof limitField) return limitField = limitField.substring(0, limitNum);
            if ("object" != typeof limitField) return "";
            for (var i = 0; i < limitField.length; i++) {
                var elem = limitField[i], dataCount = elem.getAttribute("data-count"), countElem = document.querySelector(dataCount);
                valueCountElem(countElem, limitNum), elem.addEventListener("keydown", function() {
                    limiter(elem, countElem);
                }), elem.addEventListener("keyup", function() {
                    limiter(elem, countElem);
                });
            }
        }
    }
    return returnFields;
}(this);

"undefined" != typeof module && module.exports ? module.exports.limitCharacts = function(limitField, limitNum) {
    return limitCharacts(limitField, limitNum);
} : "undefined" != typeof define && define.amd && define([], function(limitField, limitNum) {
    return limitCharacts(limitField, limitNum);
});
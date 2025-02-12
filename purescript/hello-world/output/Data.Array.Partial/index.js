// Generated by purs version 0.13.5
"use strict";
var Data_Array = require("../Data.Array/index.js");
var tail = function (dictPartial) {
    return function (xs) {
        return Data_Array.slice(1)(Data_Array.length(xs))(xs);
    };
};
var last = function (dictPartial) {
    return function (xs) {
        return xs[Data_Array.length(xs) - 1 | 0];
    };
};
var init = function (dictPartial) {
    return function (xs) {
        return Data_Array.slice(0)(Data_Array.length(xs) - 1 | 0)(xs);
    };
};
var head = function (dictPartial) {
    return function (xs) {
        return xs[0];
    };
};
module.exports = {
    head: head,
    tail: tail,
    last: last,
    init: init
};

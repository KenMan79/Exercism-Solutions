// Generated by purs version 0.13.5
"use strict";
var Control_Comonad_Store_Trans = require("../Control.Comonad.Store.Trans/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var store = function (f) {
    return function (x) {
        return Control_Comonad_Store_Trans.StoreT(new Data_Tuple.Tuple(f, x));
    };
};
var runStore = function (v) {
    return Data_Tuple.swap(Data_Functor.map(Data_Tuple.functorTuple)(Data_Newtype.unwrap(Data_Identity.newtypeIdentity))(Data_Tuple.swap(v)));
};
module.exports = {
    runStore: runStore,
    store: store
};

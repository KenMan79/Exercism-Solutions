// Generated by purs version 0.13.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var MonadAsk = function (Monad0, ask) {
    this.Monad0 = Monad0;
    this.ask = ask;
};
var MonadReader = function (MonadAsk0, local) {
    this.MonadAsk0 = MonadAsk0;
    this.local = local;
};
var monadAskFun = new MonadAsk(function () {
    return Control_Monad.monadFn;
}, Control_Category.identity(Control_Category.categoryFn));
var monadReaderFun = new MonadReader(function () {
    return monadAskFun;
}, Control_Semigroupoid.composeFlipped(Control_Semigroupoid.semigroupoidFn));
var local = function (dict) {
    return dict.local;
};
var ask = function (dict) {
    return dict.ask;
};
var asks = function (dictMonadAsk) {
    return function (f) {
        return Data_Functor.map((((dictMonadAsk.Monad0()).Bind1()).Apply0()).Functor0())(f)(ask(dictMonadAsk));
    };
};
module.exports = {
    ask: ask,
    local: local,
    MonadAsk: MonadAsk,
    asks: asks,
    MonadReader: MonadReader,
    monadAskFun: monadAskFun,
    monadReaderFun: monadReaderFun
};

// Generated by purs version 0.13.5
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var GenericTop = function (genericTop$prime) {
    this["genericTop'"] = genericTop$prime;
};
var GenericBottom = function (genericBottom$prime) {
    this["genericBottom'"] = genericBottom$prime;
};
var genericTopNoArguments = new GenericTop(Data_Generic_Rep.NoArguments.value);
var genericTopArgument = function (dictBounded) {
    return new GenericTop(Data_Bounded.top(dictBounded));
};
var genericTop$prime = function (dict) {
    return dict["genericTop'"];
};
var genericTopConstructor = function (dictGenericTop) {
    return new GenericTop(genericTop$prime(dictGenericTop));
};
var genericTopProduct = function (dictGenericTop) {
    return function (dictGenericTop1) {
        return new GenericTop(new Data_Generic_Rep.Product(genericTop$prime(dictGenericTop), genericTop$prime(dictGenericTop1)));
    };
};
var genericTopSum = function (dictGenericTop) {
    return new GenericTop(new Data_Generic_Rep.Inr(genericTop$prime(dictGenericTop)));
};
var genericTop = function (dictGeneric) {
    return function (dictGenericTop) {
        return Data_Generic_Rep.to(dictGeneric)(genericTop$prime(dictGenericTop));
    };
};
var genericBottomNoArguments = new GenericBottom(Data_Generic_Rep.NoArguments.value);
var genericBottomArgument = function (dictBounded) {
    return new GenericBottom(Data_Bounded.bottom(dictBounded));
};
var genericBottom$prime = function (dict) {
    return dict["genericBottom'"];
};
var genericBottomConstructor = function (dictGenericBottom) {
    return new GenericBottom(genericBottom$prime(dictGenericBottom));
};
var genericBottomProduct = function (dictGenericBottom) {
    return function (dictGenericBottom1) {
        return new GenericBottom(new Data_Generic_Rep.Product(genericBottom$prime(dictGenericBottom), genericBottom$prime(dictGenericBottom1)));
    };
};
var genericBottomSum = function (dictGenericBottom) {
    return new GenericBottom(new Data_Generic_Rep.Inl(genericBottom$prime(dictGenericBottom)));
};
var genericBottom = function (dictGeneric) {
    return function (dictGenericBottom) {
        return Data_Generic_Rep.to(dictGeneric)(genericBottom$prime(dictGenericBottom));
    };
};
module.exports = {
    GenericBottom: GenericBottom,
    "genericBottom'": genericBottom$prime,
    genericBottom: genericBottom,
    GenericTop: GenericTop,
    "genericTop'": genericTop$prime,
    genericTop: genericTop,
    genericBottomNoArguments: genericBottomNoArguments,
    genericBottomArgument: genericBottomArgument,
    genericBottomSum: genericBottomSum,
    genericBottomProduct: genericBottomProduct,
    genericBottomConstructor: genericBottomConstructor,
    genericTopNoArguments: genericTopNoArguments,
    genericTopArgument: genericTopArgument,
    genericTopSum: genericTopSum,
    genericTopProduct: genericTopProduct,
    genericTopConstructor: genericTopConstructor
};

// Generated by purs version 0.13.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Op = function (x) {
    return x;
};
var semigroupoidOp = new Control_Semigroupoid.Semigroupoid(function (v) {
    return function (v1) {
        return function ($12) {
            return v1(v($12));
        };
    };
});
var semigroupOp = function (dictSemigroup) {
    return Data_Semigroup.semigroupFn(dictSemigroup);
};
var newtypeOp = new Data_Newtype.Newtype(function (n) {
    return n;
}, Op);
var monoidOp = function (dictMonoid) {
    return Data_Monoid.monoidFn(dictMonoid);
};
var contravariantOp = new Data_Functor_Contravariant.Contravariant(function (f) {
    return function (v) {
        return function ($13) {
            return v(f($13));
        };
    };
});
var categoryOp = new Control_Category.Category(function () {
    return semigroupoidOp;
}, Control_Category.identity(Control_Category.categoryFn));
module.exports = {
    Op: Op,
    newtypeOp: newtypeOp,
    semigroupOp: semigroupOp,
    monoidOp: monoidOp,
    semigroupoidOp: semigroupoidOp,
    categoryOp: categoryOp,
    contravariantOp: contravariantOp
};

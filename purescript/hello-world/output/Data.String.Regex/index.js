// Generated by purs version 0.13.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_Regex_Flags = require("../Data.String.Regex.Flags/index.js");
var showRegex = new Data_Show.Show($foreign["showRegex'"]);
var search = $foreign["_search"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var renderFlags = function (v) {
    return (function () {
        if (v.value0.global) {
            return "g";
        };
        return "";
    })() + ((function () {
        if (v.value0.ignoreCase) {
            return "i";
        };
        return "";
    })() + ((function () {
        if (v.value0.multiline) {
            return "m";
        };
        return "";
    })() + ((function () {
        if (v.value0.sticky) {
            return "y";
        };
        return "";
    })() + (function () {
        if (v.value0.unicode) {
            return "u";
        };
        return "";
    })())));
};
var regex = function (s) {
    return function (f) {
        return $foreign["regex'"](Data_Either.Left.create)(Data_Either.Right.create)(s)(renderFlags(f));
    };
};
var parseFlags = function (s) {
    return new Data_String_Regex_Flags.RegexFlags({
        global: Data_String_CodeUnits.contains("g")(s),
        ignoreCase: Data_String_CodeUnits.contains("i")(s),
        multiline: Data_String_CodeUnits.contains("m")(s),
        sticky: Data_String_CodeUnits.contains("y")(s),
        unicode: Data_String_CodeUnits.contains("u")(s)
    });
};
var match = $foreign["_match"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var flags = function ($8) {
    return Data_String_Regex_Flags.RegexFlags.create($foreign["flags'"]($8));
};
module.exports = {
    regex: regex,
    flags: flags,
    renderFlags: renderFlags,
    parseFlags: parseFlags,
    match: match,
    search: search,
    showRegex: showRegex,
    source: $foreign.source,
    test: $foreign.test,
    replace: $foreign.replace,
    "replace'": $foreign["replace'"],
    split: $foreign.split
};

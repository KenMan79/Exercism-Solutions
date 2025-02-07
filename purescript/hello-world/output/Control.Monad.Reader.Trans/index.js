// Generated by purs version 0.13.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Cont_Class = require("../Control.Monad.Cont.Class/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Distributive = require("../Data.Distributive/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var ReaderT = function (x) {
    return x;
};
var withReaderT = function (f) {
    return function (v) {
        return function ($66) {
            return v(f($66));
        };
    };
};
var runReaderT = function (v) {
    return v;
};
var newtypeReaderT = new Data_Newtype.Newtype(function (n) {
    return n;
}, ReaderT);
var monadTransReaderT = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return function ($67) {
        return ReaderT(Data_Function["const"]($67));
    };
});
var mapReaderT = function (f) {
    return function (v) {
        return function ($68) {
            return f(v($68));
        };
    };
};
var functorReaderT = function (dictFunctor) {
    return new Data_Functor.Functor((function () {
        var $69 = Data_Functor.map(dictFunctor);
        return function ($70) {
            return mapReaderT($69($70));
        };
    })());
};
var distributiveReaderT = function (dictDistributive) {
    return new Data_Distributive.Distributive(function () {
        return functorReaderT(dictDistributive.Functor0());
    }, function (dictFunctor) {
        return function (f) {
            var $71 = Data_Distributive.distribute(distributiveReaderT(dictDistributive))(dictFunctor);
            var $72 = Data_Functor.map(dictFunctor)(f);
            return function ($73) {
                return $71($72($73));
            };
        };
    }, function (dictFunctor) {
        return function (a) {
            return function (e) {
                return Data_Distributive.collect(dictDistributive)(dictFunctor)(function (r) {
                    return r(e);
                })(a);
            };
        };
    });
};
var applyReaderT = function (dictApply) {
    return new Control_Apply.Apply(function () {
        return functorReaderT(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return function (r) {
                return Control_Apply.apply(dictApply)(v(r))(v1(r));
            };
        };
    });
};
var bindReaderT = function (dictBind) {
    return new Control_Bind.Bind(function () {
        return applyReaderT(dictBind.Apply0());
    }, function (v) {
        return function (k) {
            return function (r) {
                return Control_Bind.bind(dictBind)(v(r))(function (a) {
                    var v1 = k(a);
                    return v1(r);
                });
            };
        };
    });
};
var semigroupReaderT = function (dictApply) {
    return function (dictSemigroup) {
        return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyReaderT(dictApply))(Data_Semigroup.append(dictSemigroup)));
    };
};
var applicativeReaderT = function (dictApplicative) {
    return new Control_Applicative.Applicative(function () {
        return applyReaderT(dictApplicative.Apply0());
    }, (function () {
        var $74 = Control_Applicative.pure(dictApplicative);
        return function ($75) {
            return ReaderT(Data_Function["const"]($74($75)));
        };
    })());
};
var monadReaderT = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeReaderT(dictMonad.Applicative0());
    }, function () {
        return bindReaderT(dictMonad.Bind1());
    });
};
var monadAskReaderT = function (dictMonad) {
    return new Control_Monad_Reader_Class.MonadAsk(function () {
        return monadReaderT(dictMonad);
    }, Control_Applicative.pure(dictMonad.Applicative0()));
};
var monadReaderReaderT = function (dictMonad) {
    return new Control_Monad_Reader_Class.MonadReader(function () {
        return monadAskReaderT(dictMonad);
    }, withReaderT);
};
var monadContReaderT = function (dictMonadCont) {
    return new Control_Monad_Cont_Class.MonadCont(function () {
        return monadReaderT(dictMonadCont.Monad0());
    }, function (f) {
        return function (r) {
            return Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
                var v = f(function ($76) {
                    return ReaderT(Data_Function["const"](c($76)));
                });
                return v(r);
            });
        };
    });
};
var monadEffectReader = function (dictMonadEffect) {
    return new Effect_Class.MonadEffect(function () {
        return monadReaderT(dictMonadEffect.Monad0());
    }, (function () {
        var $77 = Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadEffect.Monad0());
        var $78 = Effect_Class.liftEffect(dictMonadEffect);
        return function ($79) {
            return $77($78($79));
        };
    })());
};
var monadRecReaderT = function (dictMonadRec) {
    return new Control_Monad_Rec_Class.MonadRec(function () {
        return monadReaderT(dictMonadRec.Monad0());
    }, function (k) {
        return function (a) {
            var k$prime = function (r) {
                return function (a$prime) {
                    var v = k(a$prime);
                    return Control_Bind.bindFlipped((dictMonadRec.Monad0()).Bind1())(Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0()))(v(r));
                };
            };
            return function (r) {
                return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(k$prime(r))(a);
            };
        };
    });
};
var monadStateReaderT = function (dictMonadState) {
    return new Control_Monad_State_Class.MonadState(function () {
        return monadReaderT(dictMonadState.Monad0());
    }, (function () {
        var $80 = Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadState.Monad0());
        var $81 = Control_Monad_State_Class.state(dictMonadState);
        return function ($82) {
            return $80($81($82));
        };
    })());
};
var monadTellReaderT = function (dictMonadTell) {
    return new Control_Monad_Writer_Class.MonadTell(function () {
        return monadReaderT(dictMonadTell.Monad0());
    }, (function () {
        var $83 = Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadTell.Monad0());
        var $84 = Control_Monad_Writer_Class.tell(dictMonadTell);
        return function ($85) {
            return $83($84($85));
        };
    })());
};
var monadWriterReaderT = function (dictMonadWriter) {
    return new Control_Monad_Writer_Class.MonadWriter(function () {
        return monadTellReaderT(dictMonadWriter.MonadTell0());
    }, mapReaderT(Control_Monad_Writer_Class.listen(dictMonadWriter)), mapReaderT(Control_Monad_Writer_Class.pass(dictMonadWriter)));
};
var monadThrowReaderT = function (dictMonadThrow) {
    return new Control_Monad_Error_Class.MonadThrow(function () {
        return monadReaderT(dictMonadThrow.Monad0());
    }, (function () {
        var $86 = Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadThrow.Monad0());
        var $87 = Control_Monad_Error_Class.throwError(dictMonadThrow);
        return function ($88) {
            return $86($87($88));
        };
    })());
};
var monadErrorReaderT = function (dictMonadError) {
    return new Control_Monad_Error_Class.MonadError(function () {
        return monadThrowReaderT(dictMonadError.MonadThrow0());
    }, function (v) {
        return function (h) {
            return function (r) {
                return Control_Monad_Error_Class.catchError(dictMonadError)(v(r))(function (e) {
                    var v1 = h(e);
                    return v1(r);
                });
            };
        };
    });
};
var monoidReaderT = function (dictApplicative) {
    return function (dictMonoid) {
        return new Data_Monoid.Monoid(function () {
            return semigroupReaderT(dictApplicative.Apply0())(dictMonoid.Semigroup0());
        }, Control_Applicative.pure(applicativeReaderT(dictApplicative))(Data_Monoid.mempty(dictMonoid)));
    };
};
var altReaderT = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorReaderT(dictAlt.Functor0());
    }, function (v) {
        return function (v1) {
            return function (r) {
                return Control_Alt.alt(dictAlt)(v(r))(v1(r));
            };
        };
    });
};
var plusReaderT = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altReaderT(dictPlus.Alt0());
    }, Data_Function["const"](Control_Plus.empty(dictPlus)));
};
var alternativeReaderT = function (dictAlternative) {
    return new Control_Alternative.Alternative(function () {
        return applicativeReaderT(dictAlternative.Applicative0());
    }, function () {
        return plusReaderT(dictAlternative.Plus1());
    });
};
var monadZeroReaderT = function (dictMonadZero) {
    return new Control_MonadZero.MonadZero(function () {
        return alternativeReaderT(dictMonadZero.Alternative1());
    }, function () {
        return monadReaderT(dictMonadZero.Monad0());
    });
};
var monadPlusReaderT = function (dictMonadPlus) {
    return new Control_MonadPlus.MonadPlus(function () {
        return monadZeroReaderT(dictMonadPlus.MonadZero0());
    });
};
module.exports = {
    ReaderT: ReaderT,
    runReaderT: runReaderT,
    withReaderT: withReaderT,
    mapReaderT: mapReaderT,
    newtypeReaderT: newtypeReaderT,
    functorReaderT: functorReaderT,
    applyReaderT: applyReaderT,
    applicativeReaderT: applicativeReaderT,
    altReaderT: altReaderT,
    plusReaderT: plusReaderT,
    alternativeReaderT: alternativeReaderT,
    bindReaderT: bindReaderT,
    monadReaderT: monadReaderT,
    monadZeroReaderT: monadZeroReaderT,
    semigroupReaderT: semigroupReaderT,
    monoidReaderT: monoidReaderT,
    monadPlusReaderT: monadPlusReaderT,
    monadTransReaderT: monadTransReaderT,
    monadEffectReader: monadEffectReader,
    monadContReaderT: monadContReaderT,
    monadThrowReaderT: monadThrowReaderT,
    monadErrorReaderT: monadErrorReaderT,
    monadAskReaderT: monadAskReaderT,
    monadReaderReaderT: monadReaderReaderT,
    monadStateReaderT: monadStateReaderT,
    monadTellReaderT: monadTellReaderT,
    monadWriterReaderT: monadWriterReaderT,
    distributiveReaderT: distributiveReaderT,
    monadRecReaderT: monadRecReaderT
};

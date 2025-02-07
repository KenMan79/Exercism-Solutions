// Generated by purs version 0.13.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Cont_Trans = require("../Control.Monad.Cont.Trans/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Control_Monad_Maybe_Trans = require("../Control.Monad.Maybe.Trans/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_Writer_Trans = require("../Control.Monad.Writer.Trans/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Compose = require("../Data.Functor.Compose/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var ParCont = function (x) {
    return x;
};
var Parallel = function (Applicative1, Monad0, parallel, sequential) {
    this.Applicative1 = Applicative1;
    this.Monad0 = Monad0;
    this.parallel = parallel;
    this.sequential = sequential;
};
var sequential = function (dict) {
    return dict.sequential;
};
var parallel = function (dict) {
    return dict.parallel;
};
var newtypeParCont = new Data_Newtype.Newtype(function (n) {
    return n;
}, ParCont);
var monadParWriterT = function (dictMonoid) {
    return function (dictParallel) {
        return new Parallel(function () {
            return Control_Monad_Writer_Trans.applicativeWriterT(dictMonoid)(dictParallel.Applicative1());
        }, function () {
            return Control_Monad_Writer_Trans.monadWriterT(dictMonoid)(dictParallel.Monad0());
        }, Control_Monad_Writer_Trans.mapWriterT(parallel(dictParallel)), Control_Monad_Writer_Trans.mapWriterT(sequential(dictParallel)));
    };
};
var monadParReaderT = function (dictParallel) {
    return new Parallel(function () {
        return Control_Monad_Reader_Trans.applicativeReaderT(dictParallel.Applicative1());
    }, function () {
        return Control_Monad_Reader_Trans.monadReaderT(dictParallel.Monad0());
    }, Control_Monad_Reader_Trans.mapReaderT(parallel(dictParallel)), Control_Monad_Reader_Trans.mapReaderT(sequential(dictParallel)));
};
var monadParMaybeT = function (dictParallel) {
    return new Parallel(function () {
        return Data_Functor_Compose.applicativeCompose(dictParallel.Applicative1())(Data_Maybe.applicativeMaybe);
    }, function () {
        return Control_Monad_Maybe_Trans.monadMaybeT(dictParallel.Monad0());
    }, function (v) {
        return parallel(dictParallel)(v);
    }, function (v) {
        return sequential(dictParallel)(v);
    });
};
var monadParExceptT = function (dictParallel) {
    return new Parallel(function () {
        return Data_Functor_Compose.applicativeCompose(dictParallel.Applicative1())(Data_Either.applicativeEither);
    }, function () {
        return Control_Monad_Except_Trans.monadExceptT(dictParallel.Monad0());
    }, function (v) {
        return parallel(dictParallel)(v);
    }, function (v) {
        return sequential(dictParallel)(v);
    });
};
var monadParParCont = function (dictMonadEffect) {
    return new Parallel(function () {
        return applicativeParCont(dictMonadEffect);
    }, function () {
        return Control_Monad_Cont_Trans.monadContT(dictMonadEffect.Monad0());
    }, ParCont, function (v) {
        return v;
    });
};
var functorParCont = function (dictMonadEffect) {
    return new Data_Functor.Functor(function (f) {
        var $54 = parallel(monadParParCont(dictMonadEffect));
        var $55 = Data_Functor.map(Control_Monad_Cont_Trans.functorContT((((dictMonadEffect.Monad0()).Bind1()).Apply0()).Functor0()))(f);
        var $56 = sequential(monadParParCont(dictMonadEffect));
        return function ($57) {
            return $54($55($56($57)));
        };
    });
};
var applyParCont = function (dictMonadEffect) {
    return new Control_Apply.Apply(function () {
        return functorParCont(dictMonadEffect);
    }, function (v) {
        return function (v1) {
            return ParCont(function (k) {
                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (v2) {
                    return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (v3) {
                        return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                            return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(v3)))(function (v4) {
                                if (v4 instanceof Data_Maybe.Nothing) {
                                    return Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(new Data_Maybe.Just(a))(v2));
                                };
                                if (v4 instanceof Data_Maybe.Just) {
                                    return k(a(v4.value0));
                                };
                                throw new Error("Failed pattern match at Control.Parallel.Class (line 71, column 7 - line 73, column 26): " + [ v4.constructor.name ]);
                            });
                        }))(function () {
                            return Control_Monad_Cont_Trans.runContT(v1)(function (b) {
                                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(v2)))(function (v4) {
                                    if (v4 instanceof Data_Maybe.Nothing) {
                                        return Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(new Data_Maybe.Just(b))(v3));
                                    };
                                    if (v4 instanceof Data_Maybe.Just) {
                                        return k(v4.value0(b));
                                    };
                                    throw new Error("Failed pattern match at Control.Parallel.Class (line 77, column 7 - line 79, column 26): " + [ v4.constructor.name ]);
                                });
                            });
                        });
                    });
                });
            });
        };
    });
};
var applicativeParCont = function (dictMonadEffect) {
    return new Control_Applicative.Applicative(function () {
        return applyParCont(dictMonadEffect);
    }, (function () {
        var $58 = parallel(monadParParCont(dictMonadEffect));
        var $59 = Control_Applicative.pure(Control_Monad_Cont_Trans.applicativeContT((dictMonadEffect.Monad0()).Applicative0()));
        return function ($60) {
            return $58($59($60));
        };
    })());
};
var altParCont = function (dictMonadEffect) {
    return new Control_Alt.Alt(function () {
        return functorParCont(dictMonadEffect);
    }, function (v) {
        return function (v1) {
            return ParCont(function (k) {
                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](false)))(function (v2) {
                    return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                        return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(v2)))(function (v3) {
                            if (v3) {
                                return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
                            };
                            return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(true)(v2)))(function () {
                                return k(a);
                            });
                        });
                    }))(function () {
                        return Control_Monad_Cont_Trans.runContT(v1)(function (a) {
                            return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(v2)))(function (v3) {
                                if (v3) {
                                    return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
                                };
                                return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(true)(v2)))(function () {
                                    return k(a);
                                });
                            });
                        });
                    });
                });
            });
        };
    });
};
var plusParCont = function (dictMonadEffect) {
    return new Control_Plus.Plus(function () {
        return altParCont(dictMonadEffect);
    }, ParCont(function (v) {
        return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
    }));
};
var alternativeParCont = function (dictMonadEffect) {
    return new Control_Alternative.Alternative(function () {
        return applicativeParCont(dictMonadEffect);
    }, function () {
        return plusParCont(dictMonadEffect);
    });
};
module.exports = {
    parallel: parallel,
    sequential: sequential,
    Parallel: Parallel,
    ParCont: ParCont,
    monadParExceptT: monadParExceptT,
    monadParReaderT: monadParReaderT,
    monadParWriterT: monadParWriterT,
    monadParMaybeT: monadParMaybeT,
    newtypeParCont: newtypeParCont,
    functorParCont: functorParCont,
    applyParCont: applyParCont,
    applicativeParCont: applicativeParCont,
    altParCont: altParCont,
    plusParCont: plusParCont,
    alternativeParCont: alternativeParCont,
    monadParParCont: monadParParCont
};

/*! For license information please see h5p-interactive-book.js.LICENSE.txt */
(() => {
    var t = {
            6124: (t, e, r) => {
                "use strict";
                if ((r(1934), r(5666), r(7694), r.g._babelPolyfill)) throw new Error("only one instance of babel-polyfill is allowed");
                r.g._babelPolyfill = !0;
                function n(t, e, r) {
                    t[e] || Object.defineProperty(t, e, { writable: !0, configurable: !0, value: r });
                }
                n(String.prototype, "padLeft", "".padStart),
                    n(String.prototype, "padRight", "".padEnd),
                    "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"
                        .split(",")
                        .forEach(function (t) {
                            [][t] && n(Array, t, Function.call.bind([][t]));
                        });
            },
            7694: (t, e, r) => {
                r(1761), (t.exports = r(5645).RegExp.escape);
            },
            4963: (t) => {
                t.exports = function (t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t;
                };
            },
            3365: (t, e, r) => {
                var n = r(2032);
                t.exports = function (t, e) {
                    if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
                    return +t;
                };
            },
            7722: (t, e, r) => {
                var n = r(6314)("unscopables"),
                    i = Array.prototype;
                null == i[n] && r(7728)(i, n, {}),
                    (t.exports = function (t) {
                        i[n][t] = !0;
                    });
            },
            6793: (t, e, r) => {
                "use strict";
                var n = r(4496)(!0);
                t.exports = function (t, e, r) {
                    return e + (r ? n(t, e).length : 1);
                };
            },
            3328: (t) => {
                t.exports = function (t, e, r, n) {
                    if (!(t instanceof e) || (void 0 !== n && n in t)) throw TypeError(r + ": incorrect invocation!");
                    return t;
                };
            },
            7007: (t, e, r) => {
                var n = r(5286);
                t.exports = function (t) {
                    if (!n(t)) throw TypeError(t + " is not an object!");
                    return t;
                };
            },
            5216: (t, e, r) => {
                "use strict";
                var n = r(508),
                    i = r(2337),
                    o = r(875);
                t.exports =
                    [].copyWithin ||
                    function (t, e) {
                        var r = n(this),
                            a = o(r.length),
                            s = i(t, a),
                            c = i(e, a),
                            u = arguments.length > 2 ? arguments[2] : void 0,
                            l = Math.min((void 0 === u ? a : i(u, a)) - c, a - s),
                            p = 1;
                        for (c < s && s < c + l && ((p = -1), (c += l - 1), (s += l - 1)); l-- > 0; ) c in r ? (r[s] = r[c]) : delete r[s], (s += p), (c += p);
                        return r;
                    };
            },
            6852: (t, e, r) => {
                "use strict";
                var n = r(508),
                    i = r(2337),
                    o = r(875);
                t.exports = function (t) {
                    for (var e = n(this), r = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, r), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? r : i(c, r); u > s; ) e[s++] = t;
                    return e;
                };
            },
            9490: (t, e, r) => {
                var n = r(3531);
                t.exports = function (t, e) {
                    var r = [];
                    return n(t, !1, r.push, r, e), r;
                };
            },
            9315: (t, e, r) => {
                var n = r(2110),
                    i = r(875),
                    o = r(2337);
                t.exports = function (t) {
                    return function (e, r, a) {
                        var s,
                            c = n(e),
                            u = i(c.length),
                            l = o(a, u);
                        if (t && r != r) {
                            for (; u > l; ) if ((s = c[l++]) != s) return !0;
                        } else for (; u > l; l++) if ((t || l in c) && c[l] === r) return t || l || 0;
                        return !t && -1;
                    };
                };
            },
            50: (t, e, r) => {
                var n = r(741),
                    i = r(9797),
                    o = r(508),
                    a = r(875),
                    s = r(6886);
                t.exports = function (t, e) {
                    var r = 1 == t,
                        c = 2 == t,
                        u = 3 == t,
                        l = 4 == t,
                        p = 6 == t,
                        f = 5 == t || p,
                        h = e || s;
                    return function (e, s, d) {
                        for (var v, m, g = o(e), y = i(g), b = n(s, d, 3), S = a(y.length), w = 0, k = r ? h(e, S) : c ? h(e, 0) : void 0; S > w; w++)
                            if ((f || w in y) && ((m = b((v = y[w]), w, g)), t))
                                if (r) k[w] = m;
                                else if (m)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return v;
                                        case 6:
                                            return w;
                                        case 2:
                                            k.push(v);
                                    }
                                else if (l) return !1;
                        return p ? -1 : u || l ? l : k;
                    };
                };
            },
            7628: (t, e, r) => {
                var n = r(4963),
                    i = r(508),
                    o = r(9797),
                    a = r(875);
                t.exports = function (t, e, r, s, c) {
                    n(e);
                    var u = i(t),
                        l = o(u),
                        p = a(u.length),
                        f = c ? p - 1 : 0,
                        h = c ? -1 : 1;
                    if (r < 2)
                        for (;;) {
                            if (f in l) {
                                (s = l[f]), (f += h);
                                break;
                            }
                            if (((f += h), c ? f < 0 : p <= f)) throw TypeError("Reduce of empty array with no initial value");
                        }
                    for (; c ? f >= 0 : p > f; f += h) f in l && (s = e(s, l[f], f, u));
                    return s;
                };
            },
            2736: (t, e, r) => {
                var n = r(5286),
                    i = r(4302),
                    o = r(6314)("species");
                t.exports = function (t) {
                    var e;
                    return i(t) && ("function" != typeof (e = t.constructor) || (e !== Array && !i(e.prototype)) || (e = void 0), n(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e;
                };
            },
            6886: (t, e, r) => {
                var n = r(2736);
                t.exports = function (t, e) {
                    return new (n(t))(e);
                };
            },
            4398: (t, e, r) => {
                "use strict";
                var n = r(4963),
                    i = r(5286),
                    o = r(7242),
                    a = [].slice,
                    s = {},
                    c = function (t, e, r) {
                        if (!(e in s)) {
                            for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
                            s[e] = Function("F,a", "return new F(" + n.join(",") + ")");
                        }
                        return s[e](t, r);
                    };
                t.exports =
                    Function.bind ||
                    function (t) {
                        var e = n(this),
                            r = a.call(arguments, 1),
                            s = function () {
                                var n = r.concat(a.call(arguments));
                                return this instanceof s ? c(e, n.length, n) : o(e, n, t);
                            };
                        return i(e.prototype) && (s.prototype = e.prototype), s;
                    };
            },
            1488: (t, e, r) => {
                var n = r(2032),
                    i = r(6314)("toStringTag"),
                    o =
                        "Arguments" ==
                        n(
                            (function () {
                                return arguments;
                            })()
                        );
                t.exports = function (t) {
                    var e, r, a;
                    return void 0 === t
                        ? "Undefined"
                        : null === t
                        ? "Null"
                        : "string" ==
                          typeof (r = (function (t, e) {
                              try {
                                  return t[e];
                              } catch (t) {}
                          })((e = Object(t)), i))
                        ? r
                        : o
                        ? n(e)
                        : "Object" == (a = n(e)) && "function" == typeof e.callee
                        ? "Arguments"
                        : a;
                };
            },
            2032: (t) => {
                var e = {}.toString;
                t.exports = function (t) {
                    return e.call(t).slice(8, -1);
                };
            },
            9824: (t, e, r) => {
                "use strict";
                var n = r(9275).f,
                    i = r(2503),
                    o = r(4408),
                    a = r(741),
                    s = r(3328),
                    c = r(3531),
                    u = r(2923),
                    l = r(5436),
                    p = r(2974),
                    f = r(7057),
                    h = r(4728).fastKey,
                    d = r(1616),
                    v = f ? "_s" : "size",
                    m = function (t, e) {
                        var r,
                            n = h(e);
                        if ("F" !== n) return t._i[n];
                        for (r = t._f; r; r = r.n) if (r.k == e) return r;
                    };
                t.exports = {
                    getConstructor: function (t, e, r, u) {
                        var l = t(function (t, n) {
                            s(t, l, e, "_i"), (t._t = e), (t._i = i(null)), (t._f = void 0), (t._l = void 0), (t[v] = 0), null != n && c(n, r, t[u], t);
                        });
                        return (
                            o(l.prototype, {
                                clear: function () {
                                    for (var t = d(this, e), r = t._i, n = t._f; n; n = n.n) (n.r = !0), n.p && (n.p = n.p.n = void 0), delete r[n.i];
                                    (t._f = t._l = void 0), (t[v] = 0);
                                },
                                delete: function (t) {
                                    var r = d(this, e),
                                        n = m(r, t);
                                    if (n) {
                                        var i = n.n,
                                            o = n.p;
                                        delete r._i[n.i], (n.r = !0), o && (o.n = i), i && (i.p = o), r._f == n && (r._f = i), r._l == n && (r._l = o), r[v]--;
                                    }
                                    return !!n;
                                },
                                forEach: function (t) {
                                    d(this, e);
                                    for (var r, n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); (r = r ? r.n : this._f); ) for (n(r.v, r.k, this); r && r.r; ) r = r.p;
                                },
                                has: function (t) {
                                    return !!m(d(this, e), t);
                                },
                            }),
                            f &&
                                n(l.prototype, "size", {
                                    get: function () {
                                        return d(this, e)[v];
                                    },
                                }),
                            l
                        );
                    },
                    def: function (t, e, r) {
                        var n,
                            i,
                            o = m(t, e);
                        return o ? (o.v = r) : ((t._l = o = { i: (i = h(e, !0)), k: e, v: r, p: (n = t._l), n: void 0, r: !1 }), t._f || (t._f = o), n && (n.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t;
                    },
                    getEntry: m,
                    setStrong: function (t, e, r) {
                        u(
                            t,
                            e,
                            function (t, r) {
                                (this._t = d(t, e)), (this._k = r), (this._l = void 0);
                            },
                            function () {
                                for (var t = this, e = t._k, r = t._l; r && r.r; ) r = r.p;
                                return t._t && (t._l = r = r ? r.n : t._t._f) ? l(0, "keys" == e ? r.k : "values" == e ? r.v : [r.k, r.v]) : ((t._t = void 0), l(1));
                            },
                            r ? "entries" : "values",
                            !r,
                            !0
                        ),
                            p(e);
                    },
                };
            },
            6132: (t, e, r) => {
                var n = r(1488),
                    i = r(9490);
                t.exports = function (t) {
                    return function () {
                        if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
                        return i(this);
                    };
                };
            },
            3657: (t, e, r) => {
                "use strict";
                var n = r(4408),
                    i = r(4728).getWeak,
                    o = r(7007),
                    a = r(5286),
                    s = r(3328),
                    c = r(3531),
                    u = r(50),
                    l = r(9181),
                    p = r(1616),
                    f = u(5),
                    h = u(6),
                    d = 0,
                    v = function (t) {
                        return t._l || (t._l = new m());
                    },
                    m = function () {
                        this.a = [];
                    },
                    g = function (t, e) {
                        return f(t.a, function (t) {
                            return t[0] === e;
                        });
                    };
                (m.prototype = {
                    get: function (t) {
                        var e = g(this, t);
                        if (e) return e[1];
                    },
                    has: function (t) {
                        return !!g(this, t);
                    },
                    set: function (t, e) {
                        var r = g(this, t);
                        r ? (r[1] = e) : this.a.push([t, e]);
                    },
                    delete: function (t) {
                        var e = h(this.a, function (e) {
                            return e[0] === t;
                        });
                        return ~e && this.a.splice(e, 1), !!~e;
                    },
                }),
                    (t.exports = {
                        getConstructor: function (t, e, r, o) {
                            var u = t(function (t, n) {
                                s(t, u, e, "_i"), (t._t = e), (t._i = d++), (t._l = void 0), null != n && c(n, r, t[o], t);
                            });
                            return (
                                n(u.prototype, {
                                    delete: function (t) {
                                        if (!a(t)) return !1;
                                        var r = i(t);
                                        return !0 === r ? v(p(this, e)).delete(t) : r && l(r, this._i) && delete r[this._i];
                                    },
                                    has: function (t) {
                                        if (!a(t)) return !1;
                                        var r = i(t);
                                        return !0 === r ? v(p(this, e)).has(t) : r && l(r, this._i);
                                    },
                                }),
                                u
                            );
                        },
                        def: function (t, e, r) {
                            var n = i(o(e), !0);
                            return !0 === n ? v(t).set(e, r) : (n[t._i] = r), t;
                        },
                        ufstore: v,
                    });
            },
            5795: (t, e, r) => {
                "use strict";
                var n = r(3816),
                    i = r(2985),
                    o = r(7234),
                    a = r(4408),
                    s = r(4728),
                    c = r(3531),
                    u = r(3328),
                    l = r(5286),
                    p = r(4253),
                    f = r(7462),
                    h = r(2943),
                    d = r(266);
                t.exports = function (t, e, r, v, m, g) {
                    var y = n[t],
                        b = y,
                        S = m ? "set" : "add",
                        w = b && b.prototype,
                        k = {},
                        x = function (t) {
                            var e = w[t];
                            o(
                                w,
                                t,
                                "delete" == t || "has" == t
                                    ? function (t) {
                                          return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t);
                                      }
                                    : "get" == t
                                    ? function (t) {
                                          return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                                      }
                                    : "add" == t
                                    ? function (t) {
                                          return e.call(this, 0 === t ? 0 : t), this;
                                      }
                                    : function (t, r) {
                                          return e.call(this, 0 === t ? 0 : t, r), this;
                                      }
                            );
                        };
                    if (
                        "function" == typeof b &&
                        (g ||
                            (w.forEach &&
                                !p(function () {
                                    new b().entries().next();
                                })))
                    ) {
                        var C = new b(),
                            E = C[S](g ? {} : -0, 1) != C,
                            P = p(function () {
                                C.has(1);
                            }),
                            L = f(function (t) {
                                new b(t);
                            }),
                            O =
                                !g &&
                                p(function () {
                                    for (var t = new b(), e = 5; e--; ) t[S](e, e);
                                    return !t.has(-0);
                                });
                        L ||
                            (((b = e(function (e, r) {
                                u(e, b, t);
                                var n = d(new y(), e, b);
                                return null != r && c(r, m, n[S], n), n;
                            })).prototype = w),
                            (w.constructor = b)),
                            (P || O) && (x("delete"), x("has"), m && x("get")),
                            (O || E) && x(S),
                            g && w.clear && delete w.clear;
                    } else (b = v.getConstructor(e, t, m, S)), a(b.prototype, r), (s.NEED = !0);
                    return h(b, t), (k[t] = b), i(i.G + i.W + i.F * (b != y), k), g || v.setStrong(b, t, m), b;
                };
            },
            5645: (t) => {
                var e = (t.exports = { version: "2.6.12" });
                "number" == typeof __e && (__e = e);
            },
            2811: (t, e, r) => {
                "use strict";
                var n = r(9275),
                    i = r(681);
                t.exports = function (t, e, r) {
                    e in t ? n.f(t, e, i(0, r)) : (t[e] = r);
                };
            },
            741: (t, e, r) => {
                var n = r(4963);
                t.exports = function (t, e, r) {
                    if ((n(t), void 0 === e)) return t;
                    switch (r) {
                        case 1:
                            return function (r) {
                                return t.call(e, r);
                            };
                        case 2:
                            return function (r, n) {
                                return t.call(e, r, n);
                            };
                        case 3:
                            return function (r, n, i) {
                                return t.call(e, r, n, i);
                            };
                    }
                    return function () {
                        return t.apply(e, arguments);
                    };
                };
            },
            3537: (t, e, r) => {
                "use strict";
                var n = r(4253),
                    i = Date.prototype.getTime,
                    o = Date.prototype.toISOString,
                    a = function (t) {
                        return t > 9 ? t : "0" + t;
                    };
                t.exports =
                    n(function () {
                        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001));
                    }) ||
                    !n(function () {
                        o.call(new Date(NaN));
                    })
                        ? function () {
                              if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
                              var t = this,
                                  e = t.getUTCFullYear(),
                                  r = t.getUTCMilliseconds(),
                                  n = e < 0 ? "-" : e > 9999 ? "+" : "";
                              return (
                                  n +
                                  ("00000" + Math.abs(e)).slice(n ? -6 : -4) +
                                  "-" +
                                  a(t.getUTCMonth() + 1) +
                                  "-" +
                                  a(t.getUTCDate()) +
                                  "T" +
                                  a(t.getUTCHours()) +
                                  ":" +
                                  a(t.getUTCMinutes()) +
                                  ":" +
                                  a(t.getUTCSeconds()) +
                                  "." +
                                  (r > 99 ? r : "0" + a(r)) +
                                  "Z"
                              );
                          }
                        : o;
            },
            870: (t, e, r) => {
                "use strict";
                var n = r(7007),
                    i = r(1689),
                    o = "number";
                t.exports = function (t) {
                    if ("string" !== t && t !== o && "default" !== t) throw TypeError("Incorrect hint");
                    return i(n(this), t != o);
                };
            },
            1355: (t) => {
                t.exports = function (t) {
                    if (null == t) throw TypeError("Can't call method on  " + t);
                    return t;
                };
            },
            7057: (t, e, r) => {
                t.exports = !r(4253)(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
            },
            2457: (t, e, r) => {
                var n = r(5286),
                    i = r(3816).document,
                    o = n(i) && n(i.createElement);
                t.exports = function (t) {
                    return o ? i.createElement(t) : {};
                };
            },
            4430: (t) => {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
            },
            5541: (t, e, r) => {
                var n = r(7184),
                    i = r(4548),
                    o = r(4682);
                t.exports = function (t) {
                    var e = n(t),
                        r = i.f;
                    if (r) for (var a, s = r(t), c = o.f, u = 0; s.length > u; ) c.call(t, (a = s[u++])) && e.push(a);
                    return e;
                };
            },
            2985: (t, e, r) => {
                var n = r(3816),
                    i = r(5645),
                    o = r(7728),
                    a = r(7234),
                    s = r(741),
                    c = function (t, e, r) {
                        var u,
                            l,
                            p,
                            f,
                            h = t & c.F,
                            d = t & c.G,
                            v = t & c.S,
                            m = t & c.P,
                            g = t & c.B,
                            y = d ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                            b = d ? i : i[e] || (i[e] = {}),
                            S = b.prototype || (b.prototype = {});
                        for (u in (d && (r = e), r))
                            (p = ((l = !h && y && void 0 !== y[u]) ? y : r)[u]),
                                (f = g && l ? s(p, n) : m && "function" == typeof p ? s(Function.call, p) : p),
                                y && a(y, u, p, t & c.U),
                                b[u] != p && o(b, u, f),
                                m && S[u] != p && (S[u] = p);
                    };
                (n.core = i), (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (t.exports = c);
            },
            8852: (t, e, r) => {
                var n = r(6314)("match");
                t.exports = function (t) {
                    var e = /./;
                    try {
                        "/./"[t](e);
                    } catch (r) {
                        try {
                            return (e[n] = !1), !"/./"[t](e);
                        } catch (t) {}
                    }
                    return !0;
                };
            },
            4253: (t) => {
                t.exports = function (t) {
                    try {
                        return !!t();
                    } catch (t) {
                        return !0;
                    }
                };
            },
            8082: (t, e, r) => {
                "use strict";
                r(8269);
                var n = r(7234),
                    i = r(7728),
                    o = r(4253),
                    a = r(1355),
                    s = r(6314),
                    c = r(1165),
                    u = s("species"),
                    l = !o(function () {
                        var t = /./;
                        return (
                            (t.exec = function () {
                                var t = [];
                                return (t.groups = { a: "7" }), t;
                            }),
                            "7" !== "".replace(t, "$<a>")
                        );
                    }),
                    p = (function () {
                        var t = /(?:)/,
                            e = t.exec;
                        t.exec = function () {
                            return e.apply(this, arguments);
                        };
                        var r = "ab".split(t);
                        return 2 === r.length && "a" === r[0] && "b" === r[1];
                    })();
                t.exports = function (t, e, r) {
                    var f = s(t),
                        h = !o(function () {
                            var e = {};
                            return (
                                (e[f] = function () {
                                    return 7;
                                }),
                                7 != ""[t](e)
                            );
                        }),
                        d = h
                            ? !o(function () {
                                  var e = !1,
                                      r = /a/;
                                  return (
                                      (r.exec = function () {
                                          return (e = !0), null;
                                      }),
                                      "split" === t &&
                                          ((r.constructor = {}),
                                          (r.constructor[u] = function () {
                                              return r;
                                          })),
                                      r[f](""),
                                      !e
                                  );
                              })
                            : void 0;
                    if (!h || !d || ("replace" === t && !l) || ("split" === t && !p)) {
                        var v = /./[f],
                            m = r(a, f, ""[t], function (t, e, r, n, i) {
                                return e.exec === c ? (h && !i ? { done: !0, value: v.call(e, r, n) } : { done: !0, value: t.call(r, e, n) }) : { done: !1 };
                            }),
                            g = m[0],
                            y = m[1];
                        n(String.prototype, t, g),
                            i(
                                RegExp.prototype,
                                f,
                                2 == e
                                    ? function (t, e) {
                                          return y.call(t, this, e);
                                      }
                                    : function (t) {
                                          return y.call(t, this);
                                      }
                            );
                    }
                };
            },
            3218: (t, e, r) => {
                "use strict";
                var n = r(7007);
                t.exports = function () {
                    var t = n(this),
                        e = "";
                    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
                };
            },
            3325: (t, e, r) => {
                "use strict";
                var n = r(4302),
                    i = r(5286),
                    o = r(875),
                    a = r(741),
                    s = r(6314)("isConcatSpreadable");
                t.exports = function t(e, r, c, u, l, p, f, h) {
                    for (var d, v, m = l, g = 0, y = !!f && a(f, h, 3); g < u; ) {
                        if (g in c) {
                            if (((d = y ? y(c[g], g, r) : c[g]), (v = !1), i(d) && (v = void 0 !== (v = d[s]) ? !!v : n(d)), v && p > 0)) m = t(e, r, d, o(d.length), m, p - 1) - 1;
                            else {
                                if (m >= 9007199254740991) throw TypeError();
                                e[m] = d;
                            }
                            m++;
                        }
                        g++;
                    }
                    return m;
                };
            },
            3531: (t, e, r) => {
                var n = r(741),
                    i = r(8851),
                    o = r(6555),
                    a = r(7007),
                    s = r(875),
                    c = r(9002),
                    u = {},
                    l = {},
                    p = (t.exports = function (t, e, r, p, f) {
                        var h,
                            d,
                            v,
                            m,
                            g = f
                                ? function () {
                                      return t;
                                  }
                                : c(t),
                            y = n(r, p, e ? 2 : 1),
                            b = 0;
                        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
                        if (o(g)) {
                            for (h = s(t.length); h > b; b++) if ((m = e ? y(a((d = t[b]))[0], d[1]) : y(t[b])) === u || m === l) return m;
                        } else for (v = g.call(t); !(d = v.next()).done; ) if ((m = i(v, y, d.value, e)) === u || m === l) return m;
                    });
                (p.BREAK = u), (p.RETURN = l);
            },
            18: (t, e, r) => {
                t.exports = r(3825)("native-function-to-string", Function.toString);
            },
            3816: (t) => {
                var e = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
                "number" == typeof __g && (__g = e);
            },
            9181: (t) => {
                var e = {}.hasOwnProperty;
                t.exports = function (t, r) {
                    return e.call(t, r);
                };
            },
            7728: (t, e, r) => {
                var n = r(9275),
                    i = r(681);
                t.exports = r(7057)
                    ? function (t, e, r) {
                          return n.f(t, e, i(1, r));
                      }
                    : function (t, e, r) {
                          return (t[e] = r), t;
                      };
            },
            639: (t, e, r) => {
                var n = r(3816).document;
                t.exports = n && n.documentElement;
            },
            1734: (t, e, r) => {
                t.exports =
                    !r(7057) &&
                    !r(4253)(function () {
                        return (
                            7 !=
                            Object.defineProperty(r(2457)("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a
                        );
                    });
            },
            266: (t, e, r) => {
                var n = r(5286),
                    i = r(7375).set;
                t.exports = function (t, e, r) {
                    var o,
                        a = e.constructor;
                    return a !== r && "function" == typeof a && (o = a.prototype) !== r.prototype && n(o) && i && i(t, o), t;
                };
            },
            7242: (t) => {
                t.exports = function (t, e, r) {
                    var n = void 0 === r;
                    switch (e.length) {
                        case 0:
                            return n ? t() : t.call(r);
                        case 1:
                            return n ? t(e[0]) : t.call(r, e[0]);
                        case 2:
                            return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
                        case 3:
                            return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
                        case 4:
                            return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3]);
                    }
                    return t.apply(r, e);
                };
            },
            9797: (t, e, r) => {
                var n = r(2032);
                t.exports = Object("z").propertyIsEnumerable(0)
                    ? Object
                    : function (t) {
                          return "String" == n(t) ? t.split("") : Object(t);
                      };
            },
            6555: (t, e, r) => {
                var n = r(2803),
                    i = r(6314)("iterator"),
                    o = Array.prototype;
                t.exports = function (t) {
                    return void 0 !== t && (n.Array === t || o[i] === t);
                };
            },
            4302: (t, e, r) => {
                var n = r(2032);
                t.exports =
                    Array.isArray ||
                    function (t) {
                        return "Array" == n(t);
                    };
            },
            8367: (t, e, r) => {
                var n = r(5286),
                    i = Math.floor;
                t.exports = function (t) {
                    return !n(t) && isFinite(t) && i(t) === t;
                };
            },
            5286: (t) => {
                t.exports = function (t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t;
                };
            },
            5364: (t, e, r) => {
                var n = r(5286),
                    i = r(2032),
                    o = r(6314)("match");
                t.exports = function (t) {
                    var e;
                    return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
                };
            },
            8851: (t, e, r) => {
                var n = r(7007);
                t.exports = function (t, e, r, i) {
                    try {
                        return i ? e(n(r)[0], r[1]) : e(r);
                    } catch (e) {
                        var o = t.return;
                        throw (void 0 !== o && n(o.call(t)), e);
                    }
                };
            },
            9988: (t, e, r) => {
                "use strict";
                var n = r(2503),
                    i = r(681),
                    o = r(2943),
                    a = {};
                r(7728)(a, r(6314)("iterator"), function () {
                    return this;
                }),
                    (t.exports = function (t, e, r) {
                        (t.prototype = n(a, { next: i(1, r) })), o(t, e + " Iterator");
                    });
            },
            2923: (t, e, r) => {
                "use strict";
                var n = r(4461),
                    i = r(2985),
                    o = r(7234),
                    a = r(7728),
                    s = r(2803),
                    c = r(9988),
                    u = r(2943),
                    l = r(468),
                    p = r(6314)("iterator"),
                    f = !([].keys && "next" in [].keys()),
                    h = "keys",
                    d = "values",
                    v = function () {
                        return this;
                    };
                t.exports = function (t, e, r, m, g, y, b) {
                    c(r, e, m);
                    var S,
                        w,
                        k,
                        x = function (t) {
                            if (!f && t in L) return L[t];
                            switch (t) {
                                case h:
                                case d:
                                    return function () {
                                        return new r(this, t);
                                    };
                            }
                            return function () {
                                return new r(this, t);
                            };
                        },
                        C = e + " Iterator",
                        E = g == d,
                        P = !1,
                        L = t.prototype,
                        O = L[p] || L["@@iterator"] || (g && L[g]),
                        A = O || x(g),
                        T = g ? (E ? x("entries") : A) : void 0,
                        _ = ("Array" == e && L.entries) || O;
                    if (
                        (_ && (k = l(_.call(new t()))) !== Object.prototype && k.next && (u(k, C, !0), n || "function" == typeof k[p] || a(k, p, v)),
                        E &&
                            O &&
                            O.name !== d &&
                            ((P = !0),
                            (A = function () {
                                return O.call(this);
                            })),
                        (n && !b) || (!f && !P && L[p]) || a(L, p, A),
                        (s[e] = A),
                        (s[C] = v),
                        g)
                    )
                        if (((S = { values: E ? A : x(d), keys: y ? A : x(h), entries: T }), b)) for (w in S) w in L || o(L, w, S[w]);
                        else i(i.P + i.F * (f || P), e, S);
                    return S;
                };
            },
            7462: (t, e, r) => {
                var n = r(6314)("iterator"),
                    i = !1;
                try {
                    var o = [7][n]();
                    (o.return = function () {
                        i = !0;
                    }),
                        Array.from(o, function () {
                            throw 2;
                        });
                } catch (t) {}
                t.exports = function (t, e) {
                    if (!e && !i) return !1;
                    var r = !1;
                    try {
                        var o = [7],
                            a = o[n]();
                        (a.next = function () {
                            return { done: (r = !0) };
                        }),
                            (o[n] = function () {
                                return a;
                            }),
                            t(o);
                    } catch (t) {}
                    return r;
                };
            },
            5436: (t) => {
                t.exports = function (t, e) {
                    return { value: e, done: !!t };
                };
            },
            2803: (t) => {
                t.exports = {};
            },
            4461: (t) => {
                t.exports = !1;
            },
            3086: (t) => {
                var e = Math.expm1;
                t.exports =
                    !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17)
                        ? function (t) {
                              return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + (t * t) / 2 : Math.exp(t) - 1;
                          }
                        : e;
            },
            4934: (t, e, r) => {
                var n = r(1801),
                    i = Math.pow,
                    o = i(2, -52),
                    a = i(2, -23),
                    s = i(2, 127) * (2 - a),
                    c = i(2, -126);
                t.exports =
                    Math.fround ||
                    function (t) {
                        var e,
                            r,
                            i = Math.abs(t),
                            u = n(t);
                        return i < c ? u * (i / c / a + 1 / o - 1 / o) * c * a : (r = (e = (1 + a / o) * i) - (e - i)) > s || r != r ? u * (1 / 0) : u * r;
                    };
            },
            6206: (t) => {
                t.exports =
                    Math.log1p ||
                    function (t) {
                        return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
                    };
            },
            8757: (t) => {
                t.exports =
                    Math.scale ||
                    function (t, e, r, n, i) {
                        return 0 === arguments.length || t != t || e != e || r != r || n != n || i != i ? NaN : t === 1 / 0 || t === -1 / 0 ? t : ((t - e) * (i - n)) / (r - e) + n;
                    };
            },
            1801: (t) => {
                t.exports =
                    Math.sign ||
                    function (t) {
                        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
                    };
            },
            4728: (t, e, r) => {
                var n = r(3953)("meta"),
                    i = r(5286),
                    o = r(9181),
                    a = r(9275).f,
                    s = 0,
                    c =
                        Object.isExtensible ||
                        function () {
                            return !0;
                        },
                    u = !r(4253)(function () {
                        return c(Object.preventExtensions({}));
                    }),
                    l = function (t) {
                        a(t, n, { value: { i: "O" + ++s, w: {} } });
                    },
                    p = (t.exports = {
                        KEY: n,
                        NEED: !1,
                        fastKey: function (t, e) {
                            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!o(t, n)) {
                                if (!c(t)) return "F";
                                if (!e) return "E";
                                l(t);
                            }
                            return t[n].i;
                        },
                        getWeak: function (t, e) {
                            if (!o(t, n)) {
                                if (!c(t)) return !0;
                                if (!e) return !1;
                                l(t);
                            }
                            return t[n].w;
                        },
                        onFreeze: function (t) {
                            return u && p.NEED && c(t) && !o(t, n) && l(t), t;
                        },
                    });
            },
            133: (t, e, r) => {
                var n = r(8416),
                    i = r(2985),
                    o = r(3825)("metadata"),
                    a = o.store || (o.store = new (r(147))()),
                    s = function (t, e, r) {
                        var i = a.get(t);
                        if (!i) {
                            if (!r) return;
                            a.set(t, (i = new n()));
                        }
                        var o = i.get(e);
                        if (!o) {
                            if (!r) return;
                            i.set(e, (o = new n()));
                        }
                        return o;
                    };
                t.exports = {
                    store: a,
                    map: s,
                    has: function (t, e, r) {
                        var n = s(e, r, !1);
                        return void 0 !== n && n.has(t);
                    },
                    get: function (t, e, r) {
                        var n = s(e, r, !1);
                        return void 0 === n ? void 0 : n.get(t);
                    },
                    set: function (t, e, r, n) {
                        s(r, n, !0).set(t, e);
                    },
                    keys: function (t, e) {
                        var r = s(t, e, !1),
                            n = [];
                        return (
                            r &&
                                r.forEach(function (t, e) {
                                    n.push(e);
                                }),
                            n
                        );
                    },
                    key: function (t) {
                        return void 0 === t || "symbol" == typeof t ? t : String(t);
                    },
                    exp: function (t) {
                        i(i.S, "Reflect", t);
                    },
                };
            },
            4351: (t, e, r) => {
                var n = r(3816),
                    i = r(4193).set,
                    o = n.MutationObserver || n.WebKitMutationObserver,
                    a = n.process,
                    s = n.Promise,
                    c = "process" == r(2032)(a);
                t.exports = function () {
                    var t,
                        e,
                        r,
                        u = function () {
                            var n, i;
                            for (c && (n = a.domain) && n.exit(); t; ) {
                                (i = t.fn), (t = t.next);
                                try {
                                    i();
                                } catch (n) {
                                    throw (t ? r() : (e = void 0), n);
                                }
                            }
                            (e = void 0), n && n.enter();
                        };
                    if (c)
                        r = function () {
                            a.nextTick(u);
                        };
                    else if (!o || (n.navigator && n.navigator.standalone))
                        if (s && s.resolve) {
                            var l = s.resolve(void 0);
                            r = function () {
                                l.then(u);
                            };
                        } else
                            r = function () {
                                i.call(n, u);
                            };
                    else {
                        var p = !0,
                            f = document.createTextNode("");
                        new o(u).observe(f, { characterData: !0 }),
                            (r = function () {
                                f.data = p = !p;
                            });
                    }
                    return function (n) {
                        var i = { fn: n, next: void 0 };
                        e && (e.next = i), t || ((t = i), r()), (e = i);
                    };
                };
            },
            3499: (t, e, r) => {
                "use strict";
                var n = r(4963);
                function i(t) {
                    var e, r;
                    (this.promise = new t(function (t, n) {
                        if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                        (e = t), (r = n);
                    })),
                        (this.resolve = n(e)),
                        (this.reject = n(r));
                }
                t.exports.f = function (t) {
                    return new i(t);
                };
            },
            5345: (t, e, r) => {
                "use strict";
                var n = r(7057),
                    i = r(7184),
                    o = r(4548),
                    a = r(4682),
                    s = r(508),
                    c = r(9797),
                    u = Object.assign;
                t.exports =
                    !u ||
                    r(4253)(function () {
                        var t = {},
                            e = {},
                            r = Symbol(),
                            n = "abcdefghijklmnopqrst";
                        return (
                            (t[r] = 7),
                            n.split("").forEach(function (t) {
                                e[t] = t;
                            }),
                            7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
                        );
                    })
                        ? function (t, e) {
                              for (var r = s(t), u = arguments.length, l = 1, p = o.f, f = a.f; u > l; )
                                  for (var h, d = c(arguments[l++]), v = p ? i(d).concat(p(d)) : i(d), m = v.length, g = 0; m > g; ) (h = v[g++]), (n && !f.call(d, h)) || (r[h] = d[h]);
                              return r;
                          }
                        : u;
            },
            2503: (t, e, r) => {
                var n = r(7007),
                    i = r(5588),
                    o = r(4430),
                    a = r(9335)("IE_PROTO"),
                    s = function () {},
                    c = function () {
                        var t,
                            e = r(2457)("iframe"),
                            n = o.length;
                        for (e.style.display = "none", r(639).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), c = t.F; n--; ) delete c.prototype[o[n]];
                        return c();
                    };
                t.exports =
                    Object.create ||
                    function (t, e) {
                        var r;
                        return null !== t ? ((s.prototype = n(t)), (r = new s()), (s.prototype = null), (r[a] = t)) : (r = c()), void 0 === e ? r : i(r, e);
                    };
            },
            9275: (t, e, r) => {
                var n = r(7007),
                    i = r(1734),
                    o = r(1689),
                    a = Object.defineProperty;
                e.f = r(7057)
                    ? Object.defineProperty
                    : function (t, e, r) {
                          if ((n(t), (e = o(e, !0)), n(r), i))
                              try {
                                  return a(t, e, r);
                              } catch (t) {}
                          if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                          return "value" in r && (t[e] = r.value), t;
                      };
            },
            5588: (t, e, r) => {
                var n = r(9275),
                    i = r(7007),
                    o = r(7184);
                t.exports = r(7057)
                    ? Object.defineProperties
                    : function (t, e) {
                          i(t);
                          for (var r, a = o(e), s = a.length, c = 0; s > c; ) n.f(t, (r = a[c++]), e[r]);
                          return t;
                      };
            },
            1670: (t, e, r) => {
                "use strict";
                t.exports =
                    r(4461) ||
                    !r(4253)(function () {
                        var t = Math.random();
                        __defineSetter__.call(null, t, function () {}), delete r(3816)[t];
                    });
            },
            8693: (t, e, r) => {
                var n = r(4682),
                    i = r(681),
                    o = r(2110),
                    a = r(1689),
                    s = r(9181),
                    c = r(1734),
                    u = Object.getOwnPropertyDescriptor;
                e.f = r(7057)
                    ? u
                    : function (t, e) {
                          if (((t = o(t)), (e = a(e, !0)), c))
                              try {
                                  return u(t, e);
                              } catch (t) {}
                          if (s(t, e)) return i(!n.f.call(t, e), t[e]);
                      };
            },
            9327: (t, e, r) => {
                var n = r(2110),
                    i = r(616).f,
                    o = {}.toString,
                    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t.exports.f = function (t) {
                    return a && "[object Window]" == o.call(t)
                        ? (function (t) {
                              try {
                                  return i(t);
                              } catch (t) {
                                  return a.slice();
                              }
                          })(t)
                        : i(n(t));
                };
            },
            616: (t, e, r) => {
                var n = r(189),
                    i = r(4430).concat("length", "prototype");
                e.f =
                    Object.getOwnPropertyNames ||
                    function (t) {
                        return n(t, i);
                    };
            },
            4548: (t, e) => {
                e.f = Object.getOwnPropertySymbols;
            },
            468: (t, e, r) => {
                var n = r(9181),
                    i = r(508),
                    o = r(9335)("IE_PROTO"),
                    a = Object.prototype;
                t.exports =
                    Object.getPrototypeOf ||
                    function (t) {
                        return (t = i(t)), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
                    };
            },
            189: (t, e, r) => {
                var n = r(9181),
                    i = r(2110),
                    o = r(9315)(!1),
                    a = r(9335)("IE_PROTO");
                t.exports = function (t, e) {
                    var r,
                        s = i(t),
                        c = 0,
                        u = [];
                    for (r in s) r != a && n(s, r) && u.push(r);
                    for (; e.length > c; ) n(s, (r = e[c++])) && (~o(u, r) || u.push(r));
                    return u;
                };
            },
            7184: (t, e, r) => {
                var n = r(189),
                    i = r(4430);
                t.exports =
                    Object.keys ||
                    function (t) {
                        return n(t, i);
                    };
            },
            4682: (t, e) => {
                e.f = {}.propertyIsEnumerable;
            },
            3160: (t, e, r) => {
                var n = r(2985),
                    i = r(5645),
                    o = r(4253);
                t.exports = function (t, e) {
                    var r = (i.Object || {})[t] || Object[t],
                        a = {};
                    (a[t] = e(r)),
                        n(
                            n.S +
                                n.F *
                                    o(function () {
                                        r(1);
                                    }),
                            "Object",
                            a
                        );
                };
            },
            1131: (t, e, r) => {
                var n = r(7057),
                    i = r(7184),
                    o = r(2110),
                    a = r(4682).f;
                t.exports = function (t) {
                    return function (e) {
                        for (var r, s = o(e), c = i(s), u = c.length, l = 0, p = []; u > l; ) (r = c[l++]), (n && !a.call(s, r)) || p.push(t ? [r, s[r]] : s[r]);
                        return p;
                    };
                };
            },
            7643: (t, e, r) => {
                var n = r(616),
                    i = r(4548),
                    o = r(7007),
                    a = r(3816).Reflect;
                t.exports =
                    (a && a.ownKeys) ||
                    function (t) {
                        var e = n.f(o(t)),
                            r = i.f;
                        return r ? e.concat(r(t)) : e;
                    };
            },
            7743: (t, e, r) => {
                var n = r(3816).parseFloat,
                    i = r(9599).trim;
                t.exports =
                    1 / n(r(4644) + "-0") != -1 / 0
                        ? function (t) {
                              var e = i(String(t), 3),
                                  r = n(e);
                              return 0 === r && "-" == e.charAt(0) ? -0 : r;
                          }
                        : n;
            },
            5960: (t, e, r) => {
                var n = r(3816).parseInt,
                    i = r(9599).trim,
                    o = r(4644),
                    a = /^[-+]?0[xX]/;
                t.exports =
                    8 !== n(o + "08") || 22 !== n(o + "0x16")
                        ? function (t, e) {
                              var r = i(String(t), 3);
                              return n(r, e >>> 0 || (a.test(r) ? 16 : 10));
                          }
                        : n;
            },
            188: (t) => {
                t.exports = function (t) {
                    try {
                        return { e: !1, v: t() };
                    } catch (t) {
                        return { e: !0, v: t };
                    }
                };
            },
            94: (t, e, r) => {
                var n = r(7007),
                    i = r(5286),
                    o = r(3499);
                t.exports = function (t, e) {
                    if ((n(t), i(e) && e.constructor === t)) return e;
                    var r = o.f(t);
                    return (0, r.resolve)(e), r.promise;
                };
            },
            681: (t) => {
                t.exports = function (t, e) {
                    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
                };
            },
            4408: (t, e, r) => {
                var n = r(7234);
                t.exports = function (t, e, r) {
                    for (var i in e) n(t, i, e[i], r);
                    return t;
                };
            },
            7234: (t, e, r) => {
                var n = r(3816),
                    i = r(7728),
                    o = r(9181),
                    a = r(3953)("src"),
                    s = r(18),
                    c = "toString",
                    u = ("" + s).split(c);
                (r(5645).inspectSource = function (t) {
                    return s.call(t);
                }),
                    (t.exports = function (t, e, r, s) {
                        var c = "function" == typeof r;
                        c && (o(r, "name") || i(r, "name", e)), t[e] !== r && (c && (o(r, a) || i(r, a, t[e] ? "" + t[e] : u.join(String(e)))), t === n ? (t[e] = r) : s ? (t[e] ? (t[e] = r) : i(t, e, r)) : (delete t[e], i(t, e, r)));
                    })(Function.prototype, c, function () {
                        return ("function" == typeof this && this[a]) || s.call(this);
                    });
            },
            7787: (t, e, r) => {
                "use strict";
                var n = r(1488),
                    i = RegExp.prototype.exec;
                t.exports = function (t, e) {
                    var r = t.exec;
                    if ("function" == typeof r) {
                        var o = r.call(t, e);
                        if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                        return o;
                    }
                    if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                    return i.call(t, e);
                };
            },
            1165: (t, e, r) => {
                "use strict";
                var n,
                    i,
                    o = r(3218),
                    a = RegExp.prototype.exec,
                    s = String.prototype.replace,
                    c = a,
                    u = ((n = /a/), (i = /b*/g), a.call(n, "a"), a.call(i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
                    l = void 0 !== /()??/.exec("")[1];
                (u || l) &&
                    (c = function (t) {
                        var e,
                            r,
                            n,
                            i,
                            c = this;
                        return (
                            l && (r = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))),
                            u && (e = c.lastIndex),
                            (n = a.call(c, t)),
                            u && n && (c.lastIndex = c.global ? n.index + n[0].length : e),
                            l &&
                                n &&
                                n.length > 1 &&
                                s.call(n[0], r, function () {
                                    for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0);
                                }),
                            n
                        );
                    }),
                    (t.exports = c);
            },
            5496: (t) => {
                t.exports = function (t, e) {
                    var r =
                        e === Object(e)
                            ? function (t) {
                                  return e[t];
                              }
                            : e;
                    return function (e) {
                        return String(e).replace(t, r);
                    };
                };
            },
            7195: (t) => {
                t.exports =
                    Object.is ||
                    function (t, e) {
                        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
                    };
            },
            1024: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(4963),
                    o = r(741),
                    a = r(3531);
                t.exports = function (t) {
                    n(n.S, t, {
                        from: function (t) {
                            var e,
                                r,
                                n,
                                s,
                                c = arguments[1];
                            return (
                                i(this),
                                (e = void 0 !== c) && i(c),
                                null == t
                                    ? new this()
                                    : ((r = []),
                                      e
                                          ? ((n = 0),
                                            (s = o(c, arguments[2], 2)),
                                            a(t, !1, function (t) {
                                                r.push(s(t, n++));
                                            }))
                                          : a(t, !1, r.push, r),
                                      new this(r))
                            );
                        },
                    });
                };
            },
            4881: (t, e, r) => {
                "use strict";
                var n = r(2985);
                t.exports = function (t) {
                    n(n.S, t, {
                        of: function () {
                            for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t];
                            return new this(e);
                        },
                    });
                };
            },
            7375: (t, e, r) => {
                var n = r(5286),
                    i = r(7007),
                    o = function (t, e) {
                        if ((i(t), !n(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
                    };
                t.exports = {
                    set:
                        Object.setPrototypeOf ||
                        ("__proto__" in {}
                            ? (function (t, e, n) {
                                  try {
                                      (n = r(741)(Function.call, r(8693).f(Object.prototype, "__proto__").set, 2))(t, []), (e = !(t instanceof Array));
                                  } catch (t) {
                                      e = !0;
                                  }
                                  return function (t, r) {
                                      return o(t, r), e ? (t.__proto__ = r) : n(t, r), t;
                                  };
                              })({}, !1)
                            : void 0),
                    check: o,
                };
            },
            2974: (t, e, r) => {
                "use strict";
                var n = r(3816),
                    i = r(9275),
                    o = r(7057),
                    a = r(6314)("species");
                t.exports = function (t) {
                    var e = n[t];
                    o &&
                        e &&
                        !e[a] &&
                        i.f(e, a, {
                            configurable: !0,
                            get: function () {
                                return this;
                            },
                        });
                };
            },
            2943: (t, e, r) => {
                var n = r(9275).f,
                    i = r(9181),
                    o = r(6314)("toStringTag");
                t.exports = function (t, e, r) {
                    t && !i((t = r ? t : t.prototype), o) && n(t, o, { configurable: !0, value: e });
                };
            },
            9335: (t, e, r) => {
                var n = r(3825)("keys"),
                    i = r(3953);
                t.exports = function (t) {
                    return n[t] || (n[t] = i(t));
                };
            },
            3825: (t, e, r) => {
                var n = r(5645),
                    i = r(3816),
                    o = "__core-js_shared__",
                    a = i[o] || (i[o] = {});
                (t.exports = function (t, e) {
                    return a[t] || (a[t] = void 0 !== e ? e : {});
                })("versions", []).push({ version: n.version, mode: r(4461) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
            },
            8364: (t, e, r) => {
                var n = r(7007),
                    i = r(4963),
                    o = r(6314)("species");
                t.exports = function (t, e) {
                    var r,
                        a = n(t).constructor;
                    return void 0 === a || null == (r = n(a)[o]) ? e : i(r);
                };
            },
            7717: (t, e, r) => {
                "use strict";
                var n = r(4253);
                t.exports = function (t, e) {
                    return (
                        !!t &&
                        n(function () {
                            e ? t.call(null, function () {}, 1) : t.call(null);
                        })
                    );
                };
            },
            4496: (t, e, r) => {
                var n = r(1467),
                    i = r(1355);
                t.exports = function (t) {
                    return function (e, r) {
                        var o,
                            a,
                            s = String(i(e)),
                            c = n(r),
                            u = s.length;
                        return c < 0 || c >= u
                            ? t
                                ? ""
                                : void 0
                            : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
                            ? t
                                ? s.charAt(c)
                                : o
                            : t
                            ? s.slice(c, c + 2)
                            : a - 56320 + ((o - 55296) << 10) + 65536;
                    };
                };
            },
            2094: (t, e, r) => {
                var n = r(5364),
                    i = r(1355);
                t.exports = function (t, e, r) {
                    if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
                    return String(i(t));
                };
            },
            9395: (t, e, r) => {
                var n = r(2985),
                    i = r(4253),
                    o = r(1355),
                    a = /"/g,
                    s = function (t, e, r, n) {
                        var i = String(o(t)),
                            s = "<" + e;
                        return "" !== r && (s += " " + r + '="' + String(n).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">";
                    };
                t.exports = function (t, e) {
                    var r = {};
                    (r[t] = e(s)),
                        n(
                            n.P +
                                n.F *
                                    i(function () {
                                        var e = ""[t]('"');
                                        return e !== e.toLowerCase() || e.split('"').length > 3;
                                    }),
                            "String",
                            r
                        );
                };
            },
            5442: (t, e, r) => {
                var n = r(875),
                    i = r(8595),
                    o = r(1355);
                t.exports = function (t, e, r, a) {
                    var s = String(o(t)),
                        c = s.length,
                        u = void 0 === r ? " " : String(r),
                        l = n(e);
                    if (l <= c || "" == u) return s;
                    var p = l - c,
                        f = i.call(u, Math.ceil(p / u.length));
                    return f.length > p && (f = f.slice(0, p)), a ? f + s : s + f;
                };
            },
            8595: (t, e, r) => {
                "use strict";
                var n = r(1467),
                    i = r(1355);
                t.exports = function (t) {
                    var e = String(i(this)),
                        r = "",
                        o = n(t);
                    if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
                    for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (r += e);
                    return r;
                };
            },
            9599: (t, e, r) => {
                var n = r(2985),
                    i = r(1355),
                    o = r(4253),
                    a = r(4644),
                    s = "[" + a + "]",
                    c = RegExp("^" + s + s + "*"),
                    u = RegExp(s + s + "*$"),
                    l = function (t, e, r) {
                        var i = {},
                            s = o(function () {
                                return !!a[t]() || "​" != "​"[t]();
                            }),
                            c = (i[t] = s ? e(p) : a[t]);
                        r && (i[r] = c), n(n.P + n.F * s, "String", i);
                    },
                    p = (l.trim = function (t, e) {
                        return (t = String(i(t))), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t;
                    });
                t.exports = l;
            },
            4644: (t) => {
                t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
            },
            4193: (t, e, r) => {
                var n,
                    i,
                    o,
                    a = r(741),
                    s = r(7242),
                    c = r(639),
                    u = r(2457),
                    l = r(3816),
                    p = l.process,
                    f = l.setImmediate,
                    h = l.clearImmediate,
                    d = l.MessageChannel,
                    v = l.Dispatch,
                    m = 0,
                    g = {},
                    y = "onreadystatechange",
                    b = function () {
                        var t = +this;
                        if (g.hasOwnProperty(t)) {
                            var e = g[t];
                            delete g[t], e();
                        }
                    },
                    S = function (t) {
                        b.call(t.data);
                    };
                (f && h) ||
                    ((f = function (t) {
                        for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
                        return (
                            (g[++m] = function () {
                                s("function" == typeof t ? t : Function(t), e);
                            }),
                            n(m),
                            m
                        );
                    }),
                    (h = function (t) {
                        delete g[t];
                    }),
                    "process" == r(2032)(p)
                        ? (n = function (t) {
                              p.nextTick(a(b, t, 1));
                          })
                        : v && v.now
                        ? (n = function (t) {
                              v.now(a(b, t, 1));
                          })
                        : d
                        ? ((o = (i = new d()).port2), (i.port1.onmessage = S), (n = a(o.postMessage, o, 1)))
                        : l.addEventListener && "function" == typeof postMessage && !l.importScripts
                        ? ((n = function (t) {
                              l.postMessage(t + "", "*");
                          }),
                          l.addEventListener("message", S, !1))
                        : (n =
                              y in u("script")
                                  ? function (t) {
                                        c.appendChild(u("script")).onreadystatechange = function () {
                                            c.removeChild(this), b.call(t);
                                        };
                                    }
                                  : function (t) {
                                        setTimeout(a(b, t, 1), 0);
                                    })),
                    (t.exports = { set: f, clear: h });
            },
            2337: (t, e, r) => {
                var n = r(1467),
                    i = Math.max,
                    o = Math.min;
                t.exports = function (t, e) {
                    return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e);
                };
            },
            4843: (t, e, r) => {
                var n = r(1467),
                    i = r(875);
                t.exports = function (t) {
                    if (void 0 === t) return 0;
                    var e = n(t),
                        r = i(e);
                    if (e !== r) throw RangeError("Wrong length!");
                    return r;
                };
            },
            1467: (t) => {
                var e = Math.ceil,
                    r = Math.floor;
                t.exports = function (t) {
                    return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
                };
            },
            2110: (t, e, r) => {
                var n = r(9797),
                    i = r(1355);
                t.exports = function (t) {
                    return n(i(t));
                };
            },
            875: (t, e, r) => {
                var n = r(1467),
                    i = Math.min;
                t.exports = function (t) {
                    return t > 0 ? i(n(t), 9007199254740991) : 0;
                };
            },
            508: (t, e, r) => {
                var n = r(1355);
                t.exports = function (t) {
                    return Object(n(t));
                };
            },
            1689: (t, e, r) => {
                var n = r(5286);
                t.exports = function (t, e) {
                    if (!n(t)) return t;
                    var r, i;
                    if (e && "function" == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
                    if ("function" == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
                    if (!e && "function" == typeof (r = t.toString) && !n((i = r.call(t)))) return i;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            8440: (t, e, r) => {
                "use strict";
                if (r(7057)) {
                    var n = r(4461),
                        i = r(3816),
                        o = r(4253),
                        a = r(2985),
                        s = r(9383),
                        c = r(1125),
                        u = r(741),
                        l = r(3328),
                        p = r(681),
                        f = r(7728),
                        h = r(4408),
                        d = r(1467),
                        v = r(875),
                        m = r(4843),
                        g = r(2337),
                        y = r(1689),
                        b = r(9181),
                        S = r(1488),
                        w = r(5286),
                        k = r(508),
                        x = r(6555),
                        C = r(2503),
                        E = r(468),
                        P = r(616).f,
                        L = r(9002),
                        O = r(3953),
                        A = r(6314),
                        T = r(50),
                        _ = r(9315),
                        I = r(8364),
                        F = r(6997),
                        M = r(2803),
                        j = r(7462),
                        N = r(2974),
                        R = r(6852),
                        B = r(5216),
                        D = r(9275),
                        H = r(8693),
                        W = D.f,
                        U = H.f,
                        z = i.RangeError,
                        V = i.TypeError,
                        G = i.Uint8Array,
                        q = "ArrayBuffer",
                        X = "SharedArrayBuffer",
                        J = "BYTES_PER_ELEMENT",
                        Y = Array.prototype,
                        $ = c.ArrayBuffer,
                        K = c.DataView,
                        Q = T(0),
                        Z = T(2),
                        tt = T(3),
                        et = T(4),
                        rt = T(5),
                        nt = T(6),
                        it = _(!0),
                        ot = _(!1),
                        at = F.values,
                        st = F.keys,
                        ct = F.entries,
                        ut = Y.lastIndexOf,
                        lt = Y.reduce,
                        pt = Y.reduceRight,
                        ft = Y.join,
                        ht = Y.sort,
                        dt = Y.slice,
                        vt = Y.toString,
                        mt = Y.toLocaleString,
                        gt = A("iterator"),
                        yt = A("toStringTag"),
                        bt = O("typed_constructor"),
                        St = O("def_constructor"),
                        wt = s.CONSTR,
                        kt = s.TYPED,
                        xt = s.VIEW,
                        Ct = "Wrong length!",
                        Et = T(1, function (t, e) {
                            return Tt(I(t, t[St]), e);
                        }),
                        Pt = o(function () {
                            return 1 === new G(new Uint16Array([1]).buffer)[0];
                        }),
                        Lt =
                            !!G &&
                            !!G.prototype.set &&
                            o(function () {
                                new G(1).set({});
                            }),
                        Ot = function (t, e) {
                            var r = d(t);
                            if (r < 0 || r % e) throw z("Wrong offset!");
                            return r;
                        },
                        At = function (t) {
                            if (w(t) && kt in t) return t;
                            throw V(t + " is not a typed array!");
                        },
                        Tt = function (t, e) {
                            if (!w(t) || !(bt in t)) throw V("It is not a typed array constructor!");
                            return new t(e);
                        },
                        _t = function (t, e) {
                            return It(I(t, t[St]), e);
                        },
                        It = function (t, e) {
                            for (var r = 0, n = e.length, i = Tt(t, n); n > r; ) i[r] = e[r++];
                            return i;
                        },
                        Ft = function (t, e, r) {
                            W(t, e, {
                                get: function () {
                                    return this._d[r];
                                },
                            });
                        },
                        Mt = function (t) {
                            var e,
                                r,
                                n,
                                i,
                                o,
                                a,
                                s = k(t),
                                c = arguments.length,
                                l = c > 1 ? arguments[1] : void 0,
                                p = void 0 !== l,
                                f = L(s);
                            if (null != f && !x(f)) {
                                for (a = f.call(s), n = [], e = 0; !(o = a.next()).done; e++) n.push(o.value);
                                s = n;
                            }
                            for (p && c > 2 && (l = u(l, arguments[2], 2)), e = 0, r = v(s.length), i = Tt(this, r); r > e; e++) i[e] = p ? l(s[e], e) : s[e];
                            return i;
                        },
                        jt = function () {
                            for (var t = 0, e = arguments.length, r = Tt(this, e); e > t; ) r[t] = arguments[t++];
                            return r;
                        },
                        Nt =
                            !!G &&
                            o(function () {
                                mt.call(new G(1));
                            }),
                        Rt = function () {
                            return mt.apply(Nt ? dt.call(At(this)) : At(this), arguments);
                        },
                        Bt = {
                            copyWithin: function (t, e) {
                                return B.call(At(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                            },
                            every: function (t) {
                                return et(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            fill: function (t) {
                                return R.apply(At(this), arguments);
                            },
                            filter: function (t) {
                                return _t(this, Z(At(this), t, arguments.length > 1 ? arguments[1] : void 0));
                            },
                            find: function (t) {
                                return rt(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            findIndex: function (t) {
                                return nt(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            forEach: function (t) {
                                Q(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            indexOf: function (t) {
                                return ot(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            includes: function (t) {
                                return it(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            join: function (t) {
                                return ft.apply(At(this), arguments);
                            },
                            lastIndexOf: function (t) {
                                return ut.apply(At(this), arguments);
                            },
                            map: function (t) {
                                return Et(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            reduce: function (t) {
                                return lt.apply(At(this), arguments);
                            },
                            reduceRight: function (t) {
                                return pt.apply(At(this), arguments);
                            },
                            reverse: function () {
                                for (var t, e = this, r = At(e).length, n = Math.floor(r / 2), i = 0; i < n; ) (t = e[i]), (e[i++] = e[--r]), (e[r] = t);
                                return e;
                            },
                            some: function (t) {
                                return tt(At(this), t, arguments.length > 1 ? arguments[1] : void 0);
                            },
                            sort: function (t) {
                                return ht.call(At(this), t);
                            },
                            subarray: function (t, e) {
                                var r = At(this),
                                    n = r.length,
                                    i = g(t, n);
                                return new (I(r, r[St]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, v((void 0 === e ? n : g(e, n)) - i));
                            },
                        },
                        Dt = function (t, e) {
                            return _t(this, dt.call(At(this), t, e));
                        },
                        Ht = function (t) {
                            At(this);
                            var e = Ot(arguments[1], 1),
                                r = this.length,
                                n = k(t),
                                i = v(n.length),
                                o = 0;
                            if (i + e > r) throw z(Ct);
                            for (; o < i; ) this[e + o] = n[o++];
                        },
                        Wt = {
                            entries: function () {
                                return ct.call(At(this));
                            },
                            keys: function () {
                                return st.call(At(this));
                            },
                            values: function () {
                                return at.call(At(this));
                            },
                        },
                        Ut = function (t, e) {
                            return w(t) && t[kt] && "symbol" != typeof e && e in t && String(+e) == String(e);
                        },
                        zt = function (t, e) {
                            return Ut(t, (e = y(e, !0))) ? p(2, t[e]) : U(t, e);
                        },
                        Vt = function (t, e, r) {
                            return !(Ut(t, (e = y(e, !0))) && w(r) && b(r, "value")) || b(r, "get") || b(r, "set") || r.configurable || (b(r, "writable") && !r.writable) || (b(r, "enumerable") && !r.enumerable)
                                ? W(t, e, r)
                                : ((t[e] = r.value), t);
                        };
                    wt || ((H.f = zt), (D.f = Vt)),
                        a(a.S + a.F * !wt, "Object", { getOwnPropertyDescriptor: zt, defineProperty: Vt }),
                        o(function () {
                            vt.call({});
                        }) &&
                            (vt = mt = function () {
                                return ft.call(this);
                            });
                    var Gt = h({}, Bt);
                    h(Gt, Wt),
                        f(Gt, gt, Wt.values),
                        h(Gt, { slice: Dt, set: Ht, constructor: function () {}, toString: vt, toLocaleString: Rt }),
                        Ft(Gt, "buffer", "b"),
                        Ft(Gt, "byteOffset", "o"),
                        Ft(Gt, "byteLength", "l"),
                        Ft(Gt, "length", "e"),
                        W(Gt, yt, {
                            get: function () {
                                return this[kt];
                            },
                        }),
                        (t.exports = function (t, e, r, c) {
                            var u = t + ((c = !!c) ? "Clamped" : "") + "Array",
                                p = "get" + t,
                                h = "set" + t,
                                d = i[u],
                                g = d || {},
                                y = d && E(d),
                                b = !d || !s.ABV,
                                k = {},
                                x = d && d.prototype,
                                L = function (t, r) {
                                    W(t, r, {
                                        get: function () {
                                            return (function (t, r) {
                                                var n = t._d;
                                                return n.v[p](r * e + n.o, Pt);
                                            })(this, r);
                                        },
                                        set: function (t) {
                                            return (function (t, r, n) {
                                                var i = t._d;
                                                c && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), i.v[h](r * e + i.o, n, Pt);
                                            })(this, r, t);
                                        },
                                        enumerable: !0,
                                    });
                                };
                            b
                                ? ((d = r(function (t, r, n, i) {
                                      l(t, d, u, "_d");
                                      var o,
                                          a,
                                          s,
                                          c,
                                          p = 0,
                                          h = 0;
                                      if (w(r)) {
                                          if (!(r instanceof $ || (c = S(r)) == q || c == X)) return kt in r ? It(d, r) : Mt.call(d, r);
                                          (o = r), (h = Ot(n, e));
                                          var g = r.byteLength;
                                          if (void 0 === i) {
                                              if (g % e) throw z(Ct);
                                              if ((a = g - h) < 0) throw z(Ct);
                                          } else if ((a = v(i) * e) + h > g) throw z(Ct);
                                          s = a / e;
                                      } else (s = m(r)), (o = new $((a = s * e)));
                                      for (f(t, "_d", { b: o, o: h, l: a, e: s, v: new K(o) }); p < s; ) L(t, p++);
                                  })),
                                  (x = d.prototype = C(Gt)),
                                  f(x, "constructor", d))
                                : (o(function () {
                                      d(1);
                                  }) &&
                                      o(function () {
                                          new d(-1);
                                      }) &&
                                      j(function (t) {
                                          new d(), new d(null), new d(1.5), new d(t);
                                      }, !0)) ||
                                  ((d = r(function (t, r, n, i) {
                                      var o;
                                      return (
                                          l(t, d, u),
                                          w(r) ? (r instanceof $ || (o = S(r)) == q || o == X ? (void 0 !== i ? new g(r, Ot(n, e), i) : void 0 !== n ? new g(r, Ot(n, e)) : new g(r)) : kt in r ? It(d, r) : Mt.call(d, r)) : new g(m(r))
                                      );
                                  })),
                                  Q(y !== Function.prototype ? P(g).concat(P(y)) : P(g), function (t) {
                                      t in d || f(d, t, g[t]);
                                  }),
                                  (d.prototype = x),
                                  n || (x.constructor = d));
                            var O = x[gt],
                                A = !!O && ("values" == O.name || null == O.name),
                                T = Wt.values;
                            f(d, bt, !0),
                                f(x, kt, u),
                                f(x, xt, !0),
                                f(x, St, d),
                                (c ? new d(1)[yt] == u : yt in x) ||
                                    W(x, yt, {
                                        get: function () {
                                            return u;
                                        },
                                    }),
                                (k[u] = d),
                                a(a.G + a.W + a.F * (d != g), k),
                                a(a.S, u, { BYTES_PER_ELEMENT: e }),
                                a(
                                    a.S +
                                        a.F *
                                            o(function () {
                                                g.of.call(d, 1);
                                            }),
                                    u,
                                    { from: Mt, of: jt }
                                ),
                                J in x || f(x, J, e),
                                a(a.P, u, Bt),
                                N(u),
                                a(a.P + a.F * Lt, u, { set: Ht }),
                                a(a.P + a.F * !A, u, Wt),
                                n || x.toString == vt || (x.toString = vt),
                                a(
                                    a.P +
                                        a.F *
                                            o(function () {
                                                new d(1).slice();
                                            }),
                                    u,
                                    { slice: Dt }
                                ),
                                a(
                                    a.P +
                                        a.F *
                                            (o(function () {
                                                return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString();
                                            }) ||
                                                !o(function () {
                                                    x.toLocaleString.call([1, 2]);
                                                })),
                                    u,
                                    { toLocaleString: Rt }
                                ),
                                (M[u] = A ? O : T),
                                n || A || f(x, gt, T);
                        });
                } else t.exports = function () {};
            },
            1125: (t, e, r) => {
                "use strict";
                var n = r(3816),
                    i = r(7057),
                    o = r(4461),
                    a = r(9383),
                    s = r(7728),
                    c = r(4408),
                    u = r(4253),
                    l = r(3328),
                    p = r(1467),
                    f = r(875),
                    h = r(4843),
                    d = r(616).f,
                    v = r(9275).f,
                    m = r(6852),
                    g = r(2943),
                    y = "ArrayBuffer",
                    b = "DataView",
                    S = "Wrong index!",
                    w = n.ArrayBuffer,
                    k = n.DataView,
                    x = n.Math,
                    C = n.RangeError,
                    E = n.Infinity,
                    P = w,
                    L = x.abs,
                    O = x.pow,
                    A = x.floor,
                    T = x.log,
                    _ = x.LN2,
                    I = "buffer",
                    F = "byteLength",
                    M = "byteOffset",
                    j = i ? "_b" : I,
                    N = i ? "_l" : F,
                    R = i ? "_o" : M;
                function B(t, e, r) {
                    var n,
                        i,
                        o,
                        a = new Array(r),
                        s = 8 * r - e - 1,
                        c = (1 << s) - 1,
                        u = c >> 1,
                        l = 23 === e ? O(2, -24) - O(2, -77) : 0,
                        p = 0,
                        f = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                    for (
                        (t = L(t)) != t || t === E
                            ? ((i = t != t ? 1 : 0), (n = c))
                            : ((n = A(T(t) / _)),
                              t * (o = O(2, -n)) < 1 && (n--, (o *= 2)),
                              (t += n + u >= 1 ? l / o : l * O(2, 1 - u)) * o >= 2 && (n++, (o /= 2)),
                              n + u >= c ? ((i = 0), (n = c)) : n + u >= 1 ? ((i = (t * o - 1) * O(2, e)), (n += u)) : ((i = t * O(2, u - 1) * O(2, e)), (n = 0)));
                        e >= 8;
                        a[p++] = 255 & i, i /= 256, e -= 8
                    );
                    for (n = (n << e) | i, s += e; s > 0; a[p++] = 255 & n, n /= 256, s -= 8);
                    return (a[--p] |= 128 * f), a;
                }
                function D(t, e, r) {
                    var n,
                        i = 8 * r - e - 1,
                        o = (1 << i) - 1,
                        a = o >> 1,
                        s = i - 7,
                        c = r - 1,
                        u = t[c--],
                        l = 127 & u;
                    for (u >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
                    for (n = l & ((1 << -s) - 1), l >>= -s, s += e; s > 0; n = 256 * n + t[c], c--, s -= 8);
                    if (0 === l) l = 1 - a;
                    else {
                        if (l === o) return n ? NaN : u ? -E : E;
                        (n += O(2, e)), (l -= a);
                    }
                    return (u ? -1 : 1) * n * O(2, l - e);
                }
                function H(t) {
                    return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
                }
                function W(t) {
                    return [255 & t];
                }
                function U(t) {
                    return [255 & t, (t >> 8) & 255];
                }
                function z(t) {
                    return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
                }
                function V(t) {
                    return B(t, 52, 8);
                }
                function G(t) {
                    return B(t, 23, 4);
                }
                function q(t, e, r) {
                    v(t.prototype, e, {
                        get: function () {
                            return this[r];
                        },
                    });
                }
                function X(t, e, r, n) {
                    var i = h(+r);
                    if (i + e > t[N]) throw C(S);
                    var o = t[j]._b,
                        a = i + t[R],
                        s = o.slice(a, a + e);
                    return n ? s : s.reverse();
                }
                function J(t, e, r, n, i, o) {
                    var a = h(+r);
                    if (a + e > t[N]) throw C(S);
                    for (var s = t[j]._b, c = a + t[R], u = n(+i), l = 0; l < e; l++) s[c + l] = u[o ? l : e - l - 1];
                }
                if (a.ABV) {
                    if (
                        !u(function () {
                            w(1);
                        }) ||
                        !u(function () {
                            new w(-1);
                        }) ||
                        u(function () {
                            return new w(), new w(1.5), new w(NaN), w.name != y;
                        })
                    ) {
                        for (
                            var Y,
                                $ = ((w = function (t) {
                                    return l(this, w), new P(h(t));
                                }).prototype = P.prototype),
                                K = d(P),
                                Q = 0;
                            K.length > Q;

                        )
                            (Y = K[Q++]) in w || s(w, Y, P[Y]);
                        o || ($.constructor = w);
                    }
                    var Z = new k(new w(2)),
                        tt = k.prototype.setInt8;
                    Z.setInt8(0, 2147483648),
                        Z.setInt8(1, 2147483649),
                        (!Z.getInt8(0) && Z.getInt8(1)) ||
                            c(
                                k.prototype,
                                {
                                    setInt8: function (t, e) {
                                        tt.call(this, t, (e << 24) >> 24);
                                    },
                                    setUint8: function (t, e) {
                                        tt.call(this, t, (e << 24) >> 24);
                                    },
                                },
                                !0
                            );
                } else
                    (w = function (t) {
                        l(this, w, y);
                        var e = h(t);
                        (this._b = m.call(new Array(e), 0)), (this[N] = e);
                    }),
                        (k = function (t, e, r) {
                            l(this, k, b), l(t, w, b);
                            var n = t[N],
                                i = p(e);
                            if (i < 0 || i > n) throw C("Wrong offset!");
                            if (i + (r = void 0 === r ? n - i : f(r)) > n) throw C("Wrong length!");
                            (this[j] = t), (this[R] = i), (this[N] = r);
                        }),
                        i && (q(w, F, "_l"), q(k, I, "_b"), q(k, F, "_l"), q(k, M, "_o")),
                        c(k.prototype, {
                            getInt8: function (t) {
                                return (X(this, 1, t)[0] << 24) >> 24;
                            },
                            getUint8: function (t) {
                                return X(this, 1, t)[0];
                            },
                            getInt16: function (t) {
                                var e = X(this, 2, t, arguments[1]);
                                return (((e[1] << 8) | e[0]) << 16) >> 16;
                            },
                            getUint16: function (t) {
                                var e = X(this, 2, t, arguments[1]);
                                return (e[1] << 8) | e[0];
                            },
                            getInt32: function (t) {
                                return H(X(this, 4, t, arguments[1]));
                            },
                            getUint32: function (t) {
                                return H(X(this, 4, t, arguments[1])) >>> 0;
                            },
                            getFloat32: function (t) {
                                return D(X(this, 4, t, arguments[1]), 23, 4);
                            },
                            getFloat64: function (t) {
                                return D(X(this, 8, t, arguments[1]), 52, 8);
                            },
                            setInt8: function (t, e) {
                                J(this, 1, t, W, e);
                            },
                            setUint8: function (t, e) {
                                J(this, 1, t, W, e);
                            },
                            setInt16: function (t, e) {
                                J(this, 2, t, U, e, arguments[2]);
                            },
                            setUint16: function (t, e) {
                                J(this, 2, t, U, e, arguments[2]);
                            },
                            setInt32: function (t, e) {
                                J(this, 4, t, z, e, arguments[2]);
                            },
                            setUint32: function (t, e) {
                                J(this, 4, t, z, e, arguments[2]);
                            },
                            setFloat32: function (t, e) {
                                J(this, 4, t, G, e, arguments[2]);
                            },
                            setFloat64: function (t, e) {
                                J(this, 8, t, V, e, arguments[2]);
                            },
                        });
                g(w, y), g(k, b), s(k.prototype, a.VIEW, !0), (e.ArrayBuffer = w), (e.DataView = k);
            },
            9383: (t, e, r) => {
                for (
                    var n,
                        i = r(3816),
                        o = r(7728),
                        a = r(3953),
                        s = a("typed_array"),
                        c = a("view"),
                        u = !(!i.ArrayBuffer || !i.DataView),
                        l = u,
                        p = 0,
                        f = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
                    p < 9;

                )
                    (n = i[f[p++]]) ? (o(n.prototype, s, !0), o(n.prototype, c, !0)) : (l = !1);
                t.exports = { ABV: u, CONSTR: l, TYPED: s, VIEW: c };
            },
            3953: (t) => {
                var e = 0,
                    r = Math.random();
                t.exports = function (t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
                };
            },
            575: (t, e, r) => {
                var n = r(3816).navigator;
                t.exports = (n && n.userAgent) || "";
            },
            1616: (t, e, r) => {
                var n = r(5286);
                t.exports = function (t, e) {
                    if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                    return t;
                };
            },
            6074: (t, e, r) => {
                var n = r(3816),
                    i = r(5645),
                    o = r(4461),
                    a = r(8787),
                    s = r(9275).f;
                t.exports = function (t) {
                    var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
                    "_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
                };
            },
            8787: (t, e, r) => {
                e.f = r(6314);
            },
            6314: (t, e, r) => {
                var n = r(3825)("wks"),
                    i = r(3953),
                    o = r(3816).Symbol,
                    a = "function" == typeof o;
                (t.exports = function (t) {
                    return n[t] || (n[t] = (a && o[t]) || (a ? o : i)("Symbol." + t));
                }).store = n;
            },
            9002: (t, e, r) => {
                var n = r(1488),
                    i = r(6314)("iterator"),
                    o = r(2803);
                t.exports = r(5645).getIteratorMethod = function (t) {
                    if (null != t) return t[i] || t["@@iterator"] || o[n(t)];
                };
            },
            1761: (t, e, r) => {
                var n = r(2985),
                    i = r(5496)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                n(n.S, "RegExp", {
                    escape: function (t) {
                        return i(t);
                    },
                });
            },
            2e3: (t, e, r) => {
                var n = r(2985);
                n(n.P, "Array", { copyWithin: r(5216) }), r(7722)("copyWithin");
            },
            5745: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(4);
                n(n.P + n.F * !r(7717)([].every, !0), "Array", {
                    every: function (t) {
                        return i(this, t, arguments[1]);
                    },
                });
            },
            8977: (t, e, r) => {
                var n = r(2985);
                n(n.P, "Array", { fill: r(6852) }), r(7722)("fill");
            },
            8837: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(2);
                n(n.P + n.F * !r(7717)([].filter, !0), "Array", {
                    filter: function (t) {
                        return i(this, t, arguments[1]);
                    },
                });
            },
            4899: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(6),
                    o = "findIndex",
                    a = !0;
                o in [] &&
                    Array(1)[o](function () {
                        a = !1;
                    }),
                    n(n.P + n.F * a, "Array", {
                        findIndex: function (t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }),
                    r(7722)(o);
            },
            2310: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(5),
                    o = "find",
                    a = !0;
                o in [] &&
                    Array(1).find(function () {
                        a = !1;
                    }),
                    n(n.P + n.F * a, "Array", {
                        find: function (t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }),
                    r(7722)(o);
            },
            4336: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(0),
                    o = r(7717)([].forEach, !0);
                n(n.P + n.F * !o, "Array", {
                    forEach: function (t) {
                        return i(this, t, arguments[1]);
                    },
                });
            },
            522: (t, e, r) => {
                "use strict";
                var n = r(741),
                    i = r(2985),
                    o = r(508),
                    a = r(8851),
                    s = r(6555),
                    c = r(875),
                    u = r(2811),
                    l = r(9002);
                i(
                    i.S +
                        i.F *
                            !r(7462)(function (t) {
                                Array.from(t);
                            }),
                    "Array",
                    {
                        from: function (t) {
                            var e,
                                r,
                                i,
                                p,
                                f = o(t),
                                h = "function" == typeof this ? this : Array,
                                d = arguments.length,
                                v = d > 1 ? arguments[1] : void 0,
                                m = void 0 !== v,
                                g = 0,
                                y = l(f);
                            if ((m && (v = n(v, d > 2 ? arguments[2] : void 0, 2)), null == y || (h == Array && s(y)))) for (r = new h((e = c(f.length))); e > g; g++) u(r, g, m ? v(f[g], g) : f[g]);
                            else for (p = y.call(f), r = new h(); !(i = p.next()).done; g++) u(r, g, m ? a(p, v, [i.value, g], !0) : i.value);
                            return (r.length = g), r;
                        },
                    }
                );
            },
            3369: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(9315)(!1),
                    o = [].indexOf,
                    a = !!o && 1 / [1].indexOf(1, -0) < 0;
                n(n.P + n.F * (a || !r(7717)(o)), "Array", {
                    indexOf: function (t) {
                        return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1]);
                    },
                });
            },
            774: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Array", { isArray: r(4302) });
            },
            6997: (t, e, r) => {
                "use strict";
                var n = r(7722),
                    i = r(5436),
                    o = r(2803),
                    a = r(2110);
                (t.exports = r(2923)(
                    Array,
                    "Array",
                    function (t, e) {
                        (this._t = a(t)), (this._i = 0), (this._k = e);
                    },
                    function () {
                        var t = this._t,
                            e = this._k,
                            r = this._i++;
                        return !t || r >= t.length ? ((this._t = void 0), i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
                    },
                    "values"
                )),
                    (o.Arguments = o.Array),
                    n("keys"),
                    n("values"),
                    n("entries");
            },
            7842: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(2110),
                    o = [].join;
                n(n.P + n.F * (r(9797) != Object || !r(7717)(o)), "Array", {
                    join: function (t) {
                        return o.call(i(this), void 0 === t ? "," : t);
                    },
                });
            },
            9564: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(2110),
                    o = r(1467),
                    a = r(875),
                    s = [].lastIndexOf,
                    c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
                n(n.P + n.F * (c || !r(7717)(s)), "Array", {
                    lastIndexOf: function (t) {
                        if (c) return s.apply(this, arguments) || 0;
                        var e = i(this),
                            r = a(e.length),
                            n = r - 1;
                        for (arguments.length > 1 && (n = Math.min(n, o(arguments[1]))), n < 0 && (n = r + n); n >= 0; n--) if (n in e && e[n] === t) return n || 0;
                        return -1;
                    },
                });
            },
            1802: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(1);
                n(n.P + n.F * !r(7717)([].map, !0), "Array", {
                    map: function (t) {
                        return i(this, t, arguments[1]);
                    },
                });
            },
            8295: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(2811);
                n(
                    n.S +
                        n.F *
                            r(4253)(function () {
                                function t() {}
                                return !(Array.of.call(t) instanceof t);
                            }),
                    "Array",
                    {
                        of: function () {
                            for (var t = 0, e = arguments.length, r = new ("function" == typeof this ? this : Array)(e); e > t; ) i(r, t, arguments[t++]);
                            return (r.length = e), r;
                        },
                    }
                );
            },
            3750: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(7628);
                n(n.P + n.F * !r(7717)([].reduceRight, !0), "Array", {
                    reduceRight: function (t) {
                        return i(this, t, arguments.length, arguments[1], !0);
                    },
                });
            },
            3057: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(7628);
                n(n.P + n.F * !r(7717)([].reduce, !0), "Array", {
                    reduce: function (t) {
                        return i(this, t, arguments.length, arguments[1], !1);
                    },
                });
            },
            110: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(639),
                    o = r(2032),
                    a = r(2337),
                    s = r(875),
                    c = [].slice;
                n(
                    n.P +
                        n.F *
                            r(4253)(function () {
                                i && c.call(i);
                            }),
                    "Array",
                    {
                        slice: function (t, e) {
                            var r = s(this.length),
                                n = o(this);
                            if (((e = void 0 === e ? r : e), "Array" == n)) return c.call(this, t, e);
                            for (var i = a(t, r), u = a(e, r), l = s(u - i), p = new Array(l), f = 0; f < l; f++) p[f] = "String" == n ? this.charAt(i + f) : this[i + f];
                            return p;
                        },
                    }
                );
            },
            6773: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(50)(3);
                n(n.P + n.F * !r(7717)([].some, !0), "Array", {
                    some: function (t) {
                        return i(this, t, arguments[1]);
                    },
                });
            },
            75: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(4963),
                    o = r(508),
                    a = r(4253),
                    s = [].sort,
                    c = [1, 2, 3];
                n(
                    n.P +
                        n.F *
                            (a(function () {
                                c.sort(void 0);
                            }) ||
                                !a(function () {
                                    c.sort(null);
                                }) ||
                                !r(7717)(s)),
                    "Array",
                    {
                        sort: function (t) {
                            return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t));
                        },
                    }
                );
            },
            1842: (t, e, r) => {
                r(2974)("Array");
            },
            1822: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Date", {
                    now: function () {
                        return new Date().getTime();
                    },
                });
            },
            1031: (t, e, r) => {
                var n = r(2985),
                    i = r(3537);
                n(n.P + n.F * (Date.prototype.toISOString !== i), "Date", { toISOString: i });
            },
            9977: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(508),
                    o = r(1689);
                n(
                    n.P +
                        n.F *
                            r(4253)(function () {
                                return (
                                    null !== new Date(NaN).toJSON() ||
                                    1 !==
                                        Date.prototype.toJSON.call({
                                            toISOString: function () {
                                                return 1;
                                            },
                                        })
                                );
                            }),
                    "Date",
                    {
                        toJSON: function (t) {
                            var e = i(this),
                                r = o(e);
                            return "number" != typeof r || isFinite(r) ? e.toISOString() : null;
                        },
                    }
                );
            },
            1560: (t, e, r) => {
                var n = r(6314)("toPrimitive"),
                    i = Date.prototype;
                n in i || r(7728)(i, n, r(870));
            },
            6331: (t, e, r) => {
                var n = Date.prototype,
                    i = "Invalid Date",
                    o = "toString",
                    a = n.toString,
                    s = n.getTime;
                new Date(NaN) + "" != i &&
                    r(7234)(n, o, function () {
                        var t = s.call(this);
                        return t == t ? a.call(this) : i;
                    });
            },
            9730: (t, e, r) => {
                var n = r(2985);
                n(n.P, "Function", { bind: r(4398) });
            },
            8377: (t, e, r) => {
                "use strict";
                var n = r(5286),
                    i = r(468),
                    o = r(6314)("hasInstance"),
                    a = Function.prototype;
                o in a ||
                    r(9275).f(a, o, {
                        value: function (t) {
                            if ("function" != typeof this || !n(t)) return !1;
                            if (!n(this.prototype)) return t instanceof this;
                            for (; (t = i(t)); ) if (this.prototype === t) return !0;
                            return !1;
                        },
                    });
            },
            6059: (t, e, r) => {
                var n = r(9275).f,
                    i = Function.prototype,
                    o = /^\s*function ([^ (]*)/,
                    a = "name";
                a in i ||
                    (r(7057) &&
                        n(i, a, {
                            configurable: !0,
                            get: function () {
                                try {
                                    return ("" + this).match(o)[1];
                                } catch (t) {
                                    return "";
                                }
                            },
                        }));
            },
            8416: (t, e, r) => {
                "use strict";
                var n = r(9824),
                    i = r(1616),
                    o = "Map";
                t.exports = r(5795)(
                    o,
                    function (t) {
                        return function () {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0);
                        };
                    },
                    {
                        get: function (t) {
                            var e = n.getEntry(i(this, o), t);
                            return e && e.v;
                        },
                        set: function (t, e) {
                            return n.def(i(this, o), 0 === t ? 0 : t, e);
                        },
                    },
                    n,
                    !0
                );
            },
            6503: (t, e, r) => {
                var n = r(2985),
                    i = r(6206),
                    o = Math.sqrt,
                    a = Math.acosh;
                n(n.S + n.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                    acosh: function (t) {
                        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
                    },
                });
            },
            6786: (t, e, r) => {
                var n = r(2985),
                    i = Math.asinh;
                n(n.S + n.F * !(i && 1 / i(0) > 0), "Math", {
                    asinh: function t(e) {
                        return isFinite((e = +e)) && 0 != e ? (e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1))) : e;
                    },
                });
            },
            932: (t, e, r) => {
                var n = r(2985),
                    i = Math.atanh;
                n(n.S + n.F * !(i && 1 / i(-0) < 0), "Math", {
                    atanh: function (t) {
                        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
                    },
                });
            },
            7526: (t, e, r) => {
                var n = r(2985),
                    i = r(1801);
                n(n.S, "Math", {
                    cbrt: function (t) {
                        return i((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
                    },
                });
            },
            1591: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    clz32: function (t) {
                        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
                    },
                });
            },
            9073: (t, e, r) => {
                var n = r(2985),
                    i = Math.exp;
                n(n.S, "Math", {
                    cosh: function (t) {
                        return (i((t = +t)) + i(-t)) / 2;
                    },
                });
            },
            347: (t, e, r) => {
                var n = r(2985),
                    i = r(3086);
                n(n.S + n.F * (i != Math.expm1), "Math", { expm1: i });
            },
            579: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { fround: r(4934) });
            },
            4669: (t, e, r) => {
                var n = r(2985),
                    i = Math.abs;
                n(n.S, "Math", {
                    hypot: function (t, e) {
                        for (var r, n, o = 0, a = 0, s = arguments.length, c = 0; a < s; ) c < (r = i(arguments[a++])) ? ((o = o * (n = c / r) * n + 1), (c = r)) : (o += r > 0 ? (n = r / c) * n : r);
                        return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o);
                    },
                });
            },
            7710: (t, e, r) => {
                var n = r(2985),
                    i = Math.imul;
                n(
                    n.S +
                        n.F *
                            r(4253)(function () {
                                return -5 != i(4294967295, 5) || 2 != i.length;
                            }),
                    "Math",
                    {
                        imul: function (t, e) {
                            var r = 65535,
                                n = +t,
                                i = +e,
                                o = r & n,
                                a = r & i;
                            return 0 | (o * a + ((((r & (n >>> 16)) * a + o * (r & (i >>> 16))) << 16) >>> 0));
                        },
                    }
                );
            },
            5789: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    log10: function (t) {
                        return Math.log(t) * Math.LOG10E;
                    },
                });
            },
            3514: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { log1p: r(6206) });
            },
            9978: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    log2: function (t) {
                        return Math.log(t) / Math.LN2;
                    },
                });
            },
            8472: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { sign: r(1801) });
            },
            6946: (t, e, r) => {
                var n = r(2985),
                    i = r(3086),
                    o = Math.exp;
                n(
                    n.S +
                        n.F *
                            r(4253)(function () {
                                return -2e-17 != !Math.sinh(-2e-17);
                            }),
                    "Math",
                    {
                        sinh: function (t) {
                            return Math.abs((t = +t)) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
                        },
                    }
                );
            },
            5068: (t, e, r) => {
                var n = r(2985),
                    i = r(3086),
                    o = Math.exp;
                n(n.S, "Math", {
                    tanh: function (t) {
                        var e = i((t = +t)),
                            r = i(-t);
                        return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (o(t) + o(-t));
                    },
                });
            },
            413: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    trunc: function (t) {
                        return (t > 0 ? Math.floor : Math.ceil)(t);
                    },
                });
            },
            1246: (t, e, r) => {
                "use strict";
                var n = r(3816),
                    i = r(9181),
                    o = r(2032),
                    a = r(266),
                    s = r(1689),
                    c = r(4253),
                    u = r(616).f,
                    l = r(8693).f,
                    p = r(9275).f,
                    f = r(9599).trim,
                    h = "Number",
                    d = n.Number,
                    v = d,
                    m = d.prototype,
                    g = o(r(2503)(m)) == h,
                    y = "trim" in String.prototype,
                    b = function (t) {
                        var e = s(t, !1);
                        if ("string" == typeof e && e.length > 2) {
                            var r,
                                n,
                                i,
                                o = (e = y ? e.trim() : f(e, 3)).charCodeAt(0);
                            if (43 === o || 45 === o) {
                                if (88 === (r = e.charCodeAt(2)) || 120 === r) return NaN;
                            } else if (48 === o) {
                                switch (e.charCodeAt(1)) {
                                    case 66:
                                    case 98:
                                        (n = 2), (i = 49);
                                        break;
                                    case 79:
                                    case 111:
                                        (n = 8), (i = 55);
                                        break;
                                    default:
                                        return +e;
                                }
                                for (var a, c = e.slice(2), u = 0, l = c.length; u < l; u++) if ((a = c.charCodeAt(u)) < 48 || a > i) return NaN;
                                return parseInt(c, n);
                            }
                        }
                        return +e;
                    };
                if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
                    d = function (t) {
                        var e = arguments.length < 1 ? 0 : t,
                            r = this;
                        return r instanceof d &&
                            (g
                                ? c(function () {
                                      m.valueOf.call(r);
                                  })
                                : o(r) != h)
                            ? a(new v(b(e)), r, d)
                            : b(e);
                    };
                    for (
                        var S,
                            w = r(7057) ? u(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),
                            k = 0;
                        w.length > k;
                        k++
                    )
                        i(v, (S = w[k])) && !i(d, S) && p(d, S, l(v, S));
                    (d.prototype = m), (m.constructor = d), r(7234)(n, h, d);
                }
            },
            5972: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Number", { EPSILON: Math.pow(2, -52) });
            },
            3403: (t, e, r) => {
                var n = r(2985),
                    i = r(3816).isFinite;
                n(n.S, "Number", {
                    isFinite: function (t) {
                        return "number" == typeof t && i(t);
                    },
                });
            },
            2516: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Number", { isInteger: r(8367) });
            },
            9371: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Number", {
                    isNaN: function (t) {
                        return t != t;
                    },
                });
            },
            6479: (t, e, r) => {
                var n = r(2985),
                    i = r(8367),
                    o = Math.abs;
                n(n.S, "Number", {
                    isSafeInteger: function (t) {
                        return i(t) && o(t) <= 9007199254740991;
                    },
                });
            },
            1736: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
            },
            1889: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
            },
            5177: (t, e, r) => {
                var n = r(2985),
                    i = r(7743);
                n(n.S + n.F * (Number.parseFloat != i), "Number", { parseFloat: i });
            },
            6943: (t, e, r) => {
                var n = r(2985),
                    i = r(5960);
                n(n.S + n.F * (Number.parseInt != i), "Number", { parseInt: i });
            },
            726: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(1467),
                    o = r(3365),
                    a = r(8595),
                    s = (1).toFixed,
                    c = Math.floor,
                    u = [0, 0, 0, 0, 0, 0],
                    l = "Number.toFixed: incorrect invocation!",
                    p = "0",
                    f = function (t, e) {
                        for (var r = -1, n = e; ++r < 6; ) (n += t * u[r]), (u[r] = n % 1e7), (n = c(n / 1e7));
                    },
                    h = function (t) {
                        for (var e = 6, r = 0; --e >= 0; ) (r += u[e]), (u[e] = c(r / t)), (r = (r % t) * 1e7);
                    },
                    d = function () {
                        for (var t = 6, e = ""; --t >= 0; )
                            if ("" !== e || 0 === t || 0 !== u[t]) {
                                var r = String(u[t]);
                                e = "" === e ? r : e + a.call(p, 7 - r.length) + r;
                            }
                        return e;
                    },
                    v = function (t, e, r) {
                        return 0 === e ? r : e % 2 == 1 ? v(t, e - 1, r * t) : v(t * t, e / 2, r);
                    };
                n(
                    n.P +
                        n.F *
                            ((!!s && ("0.000" !== (8e-5).toFixed(3) || "1" !== (0.9).toFixed(0) || "1.25" !== (1.255).toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
                                !r(4253)(function () {
                                    s.call({});
                                })),
                    "Number",
                    {
                        toFixed: function (t) {
                            var e,
                                r,
                                n,
                                s,
                                c = o(this, l),
                                u = i(t),
                                m = "",
                                g = p;
                            if (u < 0 || u > 20) throw RangeError(l);
                            if (c != c) return "NaN";
                            if (c <= -1e21 || c >= 1e21) return String(c);
                            if ((c < 0 && ((m = "-"), (c = -c)), c > 1e-21))
                                if (
                                    ((e =
                                        (function (t) {
                                            for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
                                            for (; r >= 2; ) (e += 1), (r /= 2);
                                            return e;
                                        })(c * v(2, 69, 1)) - 69),
                                    (r = e < 0 ? c * v(2, -e, 1) : c / v(2, e, 1)),
                                    (r *= 4503599627370496),
                                    (e = 52 - e) > 0)
                                ) {
                                    for (f(0, r), n = u; n >= 7; ) f(1e7, 0), (n -= 7);
                                    for (f(v(10, n, 1), 0), n = e - 1; n >= 23; ) h(1 << 23), (n -= 23);
                                    h(1 << n), f(1, 1), h(2), (g = d());
                                } else f(0, r), f(1 << -e, 0), (g = d() + a.call(p, u));
                            return (g = u > 0 ? m + ((s = g.length) <= u ? "0." + a.call(p, u - s) + g : g.slice(0, s - u) + "." + g.slice(s - u)) : m + g);
                        },
                    }
                );
            },
            1901: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(4253),
                    o = r(3365),
                    a = (1).toPrecision;
                n(
                    n.P +
                        n.F *
                            (i(function () {
                                return "1" !== a.call(1, void 0);
                            }) ||
                                !i(function () {
                                    a.call({});
                                })),
                    "Number",
                    {
                        toPrecision: function (t) {
                            var e = o(this, "Number#toPrecision: incorrect invocation!");
                            return void 0 === t ? a.call(e) : a.call(e, t);
                        },
                    }
                );
            },
            5115: (t, e, r) => {
                var n = r(2985);
                n(n.S + n.F, "Object", { assign: r(5345) });
            },
            8132: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Object", { create: r(2503) });
            },
            7470: (t, e, r) => {
                var n = r(2985);
                n(n.S + n.F * !r(7057), "Object", { defineProperties: r(5588) });
            },
            8388: (t, e, r) => {
                var n = r(2985);
                n(n.S + n.F * !r(7057), "Object", { defineProperty: r(9275).f });
            },
            9375: (t, e, r) => {
                var n = r(5286),
                    i = r(4728).onFreeze;
                r(3160)("freeze", function (t) {
                    return function (e) {
                        return t && n(e) ? t(i(e)) : e;
                    };
                });
            },
            4882: (t, e, r) => {
                var n = r(2110),
                    i = r(8693).f;
                r(3160)("getOwnPropertyDescriptor", function () {
                    return function (t, e) {
                        return i(n(t), e);
                    };
                });
            },
            9622: (t, e, r) => {
                r(3160)("getOwnPropertyNames", function () {
                    return r(9327).f;
                });
            },
            1520: (t, e, r) => {
                var n = r(508),
                    i = r(468);
                r(3160)("getPrototypeOf", function () {
                    return function (t) {
                        return i(n(t));
                    };
                });
            },
            9892: (t, e, r) => {
                var n = r(5286);
                r(3160)("isExtensible", function (t) {
                    return function (e) {
                        return !!n(e) && (!t || t(e));
                    };
                });
            },
            4157: (t, e, r) => {
                var n = r(5286);
                r(3160)("isFrozen", function (t) {
                    return function (e) {
                        return !n(e) || (!!t && t(e));
                    };
                });
            },
            5095: (t, e, r) => {
                var n = r(5286);
                r(3160)("isSealed", function (t) {
                    return function (e) {
                        return !n(e) || (!!t && t(e));
                    };
                });
            },
            9176: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Object", { is: r(7195) });
            },
            7476: (t, e, r) => {
                var n = r(508),
                    i = r(7184);
                r(3160)("keys", function () {
                    return function (t) {
                        return i(n(t));
                    };
                });
            },
            4672: (t, e, r) => {
                var n = r(5286),
                    i = r(4728).onFreeze;
                r(3160)("preventExtensions", function (t) {
                    return function (e) {
                        return t && n(e) ? t(i(e)) : e;
                    };
                });
            },
            3533: (t, e, r) => {
                var n = r(5286),
                    i = r(4728).onFreeze;
                r(3160)("seal", function (t) {
                    return function (e) {
                        return t && n(e) ? t(i(e)) : e;
                    };
                });
            },
            8838: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Object", { setPrototypeOf: r(7375).set });
            },
            6253: (t, e, r) => {
                "use strict";
                var n = r(1488),
                    i = {};
                (i[r(6314)("toStringTag")] = "z"),
                    i + "" != "[object z]" &&
                        r(7234)(
                            Object.prototype,
                            "toString",
                            function () {
                                return "[object " + n(this) + "]";
                            },
                            !0
                        );
            },
            4299: (t, e, r) => {
                var n = r(2985),
                    i = r(7743);
                n(n.G + n.F * (parseFloat != i), { parseFloat: i });
            },
            1084: (t, e, r) => {
                var n = r(2985),
                    i = r(5960);
                n(n.G + n.F * (parseInt != i), { parseInt: i });
            },
            851: (t, e, r) => {
                "use strict";
                var n,
                    i,
                    o,
                    a,
                    s = r(4461),
                    c = r(3816),
                    u = r(741),
                    l = r(1488),
                    p = r(2985),
                    f = r(5286),
                    h = r(4963),
                    d = r(3328),
                    v = r(3531),
                    m = r(8364),
                    g = r(4193).set,
                    y = r(4351)(),
                    b = r(3499),
                    S = r(188),
                    w = r(575),
                    k = r(94),
                    x = "Promise",
                    C = c.TypeError,
                    E = c.process,
                    P = E && E.versions,
                    L = (P && P.v8) || "",
                    O = c.Promise,
                    A = "process" == l(E),
                    T = function () {},
                    _ = (i = b.f),
                    I = !!(function () {
                        try {
                            var t = O.resolve(1),
                                e = ((t.constructor = {})[r(6314)("species")] = function (t) {
                                    t(T, T);
                                });
                            return (A || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof e && 0 !== L.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
                        } catch (t) {}
                    })(),
                    F = function (t) {
                        var e;
                        return !(!f(t) || "function" != typeof (e = t.then)) && e;
                    },
                    M = function (t, e) {
                        if (!t._n) {
                            t._n = !0;
                            var r = t._c;
                            y(function () {
                                for (
                                    var n = t._v,
                                        i = 1 == t._s,
                                        o = 0,
                                        a = function (e) {
                                            var r,
                                                o,
                                                a,
                                                s = i ? e.ok : e.fail,
                                                c = e.resolve,
                                                u = e.reject,
                                                l = e.domain;
                                            try {
                                                s
                                                    ? (i || (2 == t._h && R(t), (t._h = 1)),
                                                      !0 === s ? (r = n) : (l && l.enter(), (r = s(n)), l && (l.exit(), (a = !0))),
                                                      r === e.promise ? u(C("Promise-chain cycle")) : (o = F(r)) ? o.call(r, c, u) : c(r))
                                                    : u(n);
                                            } catch (t) {
                                                l && !a && l.exit(), u(t);
                                            }
                                        };
                                    r.length > o;

                                )
                                    a(r[o++]);
                                (t._c = []), (t._n = !1), e && !t._h && j(t);
                            });
                        }
                    },
                    j = function (t) {
                        g.call(c, function () {
                            var e,
                                r,
                                n,
                                i = t._v,
                                o = N(t);
                            if (
                                (o &&
                                    ((e = S(function () {
                                        A ? E.emit("unhandledRejection", i, t) : (r = c.onunhandledrejection) ? r({ promise: t, reason: i }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", i);
                                    })),
                                    (t._h = A || N(t) ? 2 : 1)),
                                (t._a = void 0),
                                o && e.e)
                            )
                                throw e.v;
                        });
                    },
                    N = function (t) {
                        return 1 !== t._h && 0 === (t._a || t._c).length;
                    },
                    R = function (t) {
                        g.call(c, function () {
                            var e;
                            A ? E.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({ promise: t, reason: t._v });
                        });
                    },
                    B = function (t) {
                        var e = this;
                        e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), M(e, !0));
                    },
                    D = function (t) {
                        var e,
                            r = this;
                        if (!r._d) {
                            (r._d = !0), (r = r._w || r);
                            try {
                                if (r === t) throw C("Promise can't be resolved itself");
                                (e = F(t))
                                    ? y(function () {
                                          var n = { _w: r, _d: !1 };
                                          try {
                                              e.call(t, u(D, n, 1), u(B, n, 1));
                                          } catch (t) {
                                              B.call(n, t);
                                          }
                                      })
                                    : ((r._v = t), (r._s = 1), M(r, !1));
                            } catch (t) {
                                B.call({ _w: r, _d: !1 }, t);
                            }
                        }
                    };
                I ||
                    ((O = function (t) {
                        d(this, O, x, "_h"), h(t), n.call(this);
                        try {
                            t(u(D, this, 1), u(B, this, 1));
                        } catch (t) {
                            B.call(this, t);
                        }
                    }),
                    ((n = function (t) {
                        (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
                    }).prototype = r(4408)(O.prototype, {
                        then: function (t, e) {
                            var r = _(m(this, O));
                            return (r.ok = "function" != typeof t || t), (r.fail = "function" == typeof e && e), (r.domain = A ? E.domain : void 0), this._c.push(r), this._a && this._a.push(r), this._s && M(this, !1), r.promise;
                        },
                        catch: function (t) {
                            return this.then(void 0, t);
                        },
                    })),
                    (o = function () {
                        var t = new n();
                        (this.promise = t), (this.resolve = u(D, t, 1)), (this.reject = u(B, t, 1));
                    }),
                    (b.f = _ = function (t) {
                        return t === O || t === a ? new o(t) : i(t);
                    })),
                    p(p.G + p.W + p.F * !I, { Promise: O }),
                    r(2943)(O, x),
                    r(2974)(x),
                    (a = r(5645).Promise),
                    p(p.S + p.F * !I, x, {
                        reject: function (t) {
                            var e = _(this);
                            return (0, e.reject)(t), e.promise;
                        },
                    }),
                    p(p.S + p.F * (s || !I), x, {
                        resolve: function (t) {
                            return k(s && this === a ? O : this, t);
                        },
                    }),
                    p(
                        p.S +
                            p.F *
                                !(
                                    I &&
                                    r(7462)(function (t) {
                                        O.all(t).catch(T);
                                    })
                                ),
                        x,
                        {
                            all: function (t) {
                                var e = this,
                                    r = _(e),
                                    n = r.resolve,
                                    i = r.reject,
                                    o = S(function () {
                                        var r = [],
                                            o = 0,
                                            a = 1;
                                        v(t, !1, function (t) {
                                            var s = o++,
                                                c = !1;
                                            r.push(void 0),
                                                a++,
                                                e.resolve(t).then(function (t) {
                                                    c || ((c = !0), (r[s] = t), --a || n(r));
                                                }, i);
                                        }),
                                            --a || n(r);
                                    });
                                return o.e && i(o.v), r.promise;
                            },
                            race: function (t) {
                                var e = this,
                                    r = _(e),
                                    n = r.reject,
                                    i = S(function () {
                                        v(t, !1, function (t) {
                                            e.resolve(t).then(r.resolve, n);
                                        });
                                    });
                                return i.e && n(i.v), r.promise;
                            },
                        }
                    );
            },
            1572: (t, e, r) => {
                var n = r(2985),
                    i = r(4963),
                    o = r(7007),
                    a = (r(3816).Reflect || {}).apply,
                    s = Function.apply;
                n(
                    n.S +
                        n.F *
                            !r(4253)(function () {
                                a(function () {});
                            }),
                    "Reflect",
                    {
                        apply: function (t, e, r) {
                            var n = i(t),
                                c = o(r);
                            return a ? a(n, e, c) : s.call(n, e, c);
                        },
                    }
                );
            },
            2139: (t, e, r) => {
                var n = r(2985),
                    i = r(2503),
                    o = r(4963),
                    a = r(7007),
                    s = r(5286),
                    c = r(4253),
                    u = r(4398),
                    l = (r(3816).Reflect || {}).construct,
                    p = c(function () {
                        function t() {}
                        return !(l(function () {}, [], t) instanceof t);
                    }),
                    f = !c(function () {
                        l(function () {});
                    });
                n(n.S + n.F * (p || f), "Reflect", {
                    construct: function (t, e) {
                        o(t), a(e);
                        var r = arguments.length < 3 ? t : o(arguments[2]);
                        if (f && !p) return l(t, e, r);
                        if (t == r) {
                            switch (e.length) {
                                case 0:
                                    return new t();
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                            }
                            var n = [null];
                            return n.push.apply(n, e), new (u.apply(t, n))();
                        }
                        var c = r.prototype,
                            h = i(s(c) ? c : Object.prototype),
                            d = Function.apply.call(t, h, e);
                        return s(d) ? d : h;
                    },
                });
            },
            685: (t, e, r) => {
                var n = r(9275),
                    i = r(2985),
                    o = r(7007),
                    a = r(1689);
                i(
                    i.S +
                        i.F *
                            r(4253)(function () {
                                Reflect.defineProperty(n.f({}, 1, { value: 1 }), 1, { value: 2 });
                            }),
                    "Reflect",
                    {
                        defineProperty: function (t, e, r) {
                            o(t), (e = a(e, !0)), o(r);
                            try {
                                return n.f(t, e, r), !0;
                            } catch (t) {
                                return !1;
                            }
                        },
                    }
                );
            },
            5535: (t, e, r) => {
                var n = r(2985),
                    i = r(8693).f,
                    o = r(7007);
                n(n.S, "Reflect", {
                    deleteProperty: function (t, e) {
                        var r = i(o(t), e);
                        return !(r && !r.configurable) && delete t[e];
                    },
                });
            },
            7347: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(7007),
                    o = function (t) {
                        (this._t = i(t)), (this._i = 0);
                        var e,
                            r = (this._k = []);
                        for (e in t) r.push(e);
                    };
                r(9988)(o, "Object", function () {
                    var t,
                        e = this,
                        r = e._k;
                    do {
                        if (e._i >= r.length) return { value: void 0, done: !0 };
                    } while (!((t = r[e._i++]) in e._t));
                    return { value: t, done: !1 };
                }),
                    n(n.S, "Reflect", {
                        enumerate: function (t) {
                            return new o(t);
                        },
                    });
            },
            6633: (t, e, r) => {
                var n = r(8693),
                    i = r(2985),
                    o = r(7007);
                i(i.S, "Reflect", {
                    getOwnPropertyDescriptor: function (t, e) {
                        return n.f(o(t), e);
                    },
                });
            },
            8989: (t, e, r) => {
                var n = r(2985),
                    i = r(468),
                    o = r(7007);
                n(n.S, "Reflect", {
                    getPrototypeOf: function (t) {
                        return i(o(t));
                    },
                });
            },
            3049: (t, e, r) => {
                var n = r(8693),
                    i = r(468),
                    o = r(9181),
                    a = r(2985),
                    s = r(5286),
                    c = r(7007);
                a(a.S, "Reflect", {
                    get: function t(e, r) {
                        var a,
                            u,
                            l = arguments.length < 3 ? e : arguments[2];
                        return c(e) === l ? e[r] : (a = n.f(e, r)) ? (o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0) : s((u = i(e))) ? t(u, r, l) : void 0;
                    },
                });
            },
            8270: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Reflect", {
                    has: function (t, e) {
                        return e in t;
                    },
                });
            },
            4510: (t, e, r) => {
                var n = r(2985),
                    i = r(7007),
                    o = Object.isExtensible;
                n(n.S, "Reflect", {
                    isExtensible: function (t) {
                        return i(t), !o || o(t);
                    },
                });
            },
            3984: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Reflect", { ownKeys: r(7643) });
            },
            5769: (t, e, r) => {
                var n = r(2985),
                    i = r(7007),
                    o = Object.preventExtensions;
                n(n.S, "Reflect", {
                    preventExtensions: function (t) {
                        i(t);
                        try {
                            return o && o(t), !0;
                        } catch (t) {
                            return !1;
                        }
                    },
                });
            },
            6014: (t, e, r) => {
                var n = r(2985),
                    i = r(7375);
                i &&
                    n(n.S, "Reflect", {
                        setPrototypeOf: function (t, e) {
                            i.check(t, e);
                            try {
                                return i.set(t, e), !0;
                            } catch (t) {
                                return !1;
                            }
                        },
                    });
            },
            55: (t, e, r) => {
                var n = r(9275),
                    i = r(8693),
                    o = r(468),
                    a = r(9181),
                    s = r(2985),
                    c = r(681),
                    u = r(7007),
                    l = r(5286);
                s(s.S, "Reflect", {
                    set: function t(e, r, s) {
                        var p,
                            f,
                            h = arguments.length < 4 ? e : arguments[3],
                            d = i.f(u(e), r);
                        if (!d) {
                            if (l((f = o(e)))) return t(f, r, s, h);
                            d = c(0);
                        }
                        if (a(d, "value")) {
                            if (!1 === d.writable || !l(h)) return !1;
                            if ((p = i.f(h, r))) {
                                if (p.get || p.set || !1 === p.writable) return !1;
                                (p.value = s), n.f(h, r, p);
                            } else n.f(h, r, c(0, s));
                            return !0;
                        }
                        return void 0 !== d.set && (d.set.call(h, s), !0);
                    },
                });
            },
            3946: (t, e, r) => {
                var n = r(3816),
                    i = r(266),
                    o = r(9275).f,
                    a = r(616).f,
                    s = r(5364),
                    c = r(3218),
                    u = n.RegExp,
                    l = u,
                    p = u.prototype,
                    f = /a/g,
                    h = /a/g,
                    d = new u(f) !== f;
                if (
                    r(7057) &&
                    (!d ||
                        r(4253)(function () {
                            return (h[r(6314)("match")] = !1), u(f) != f || u(h) == h || "/a/i" != u(f, "i");
                        }))
                ) {
                    u = function (t, e) {
                        var r = this instanceof u,
                            n = s(t),
                            o = void 0 === e;
                        return !r && n && t.constructor === u && o ? t : i(d ? new l(n && !o ? t.source : t, e) : l((n = t instanceof u) ? t.source : t, n && o ? c.call(t) : e), r ? this : p, u);
                    };
                    for (
                        var v = function (t) {
                                (t in u) ||
                                    o(u, t, {
                                        configurable: !0,
                                        get: function () {
                                            return l[t];
                                        },
                                        set: function (e) {
                                            l[t] = e;
                                        },
                                    });
                            },
                            m = a(l),
                            g = 0;
                        m.length > g;

                    )
                        v(m[g++]);
                    (p.constructor = u), (u.prototype = p), r(7234)(n, "RegExp", u);
                }
                r(2974)("RegExp");
            },
            8269: (t, e, r) => {
                "use strict";
                var n = r(1165);
                r(2985)({ target: "RegExp", proto: !0, forced: n !== /./.exec }, { exec: n });
            },
            6774: (t, e, r) => {
                r(7057) && "g" != /./g.flags && r(9275).f(RegExp.prototype, "flags", { configurable: !0, get: r(3218) });
            },
            1466: (t, e, r) => {
                "use strict";
                var n = r(7007),
                    i = r(875),
                    o = r(6793),
                    a = r(7787);
                r(8082)("match", 1, function (t, e, r, s) {
                    return [
                        function (r) {
                            var n = t(this),
                                i = null == r ? void 0 : r[e];
                            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n));
                        },
                        function (t) {
                            var e = s(r, t, this);
                            if (e.done) return e.value;
                            var c = n(t),
                                u = String(this);
                            if (!c.global) return a(c, u);
                            var l = c.unicode;
                            c.lastIndex = 0;
                            for (var p, f = [], h = 0; null !== (p = a(c, u)); ) {
                                var d = String(p[0]);
                                (f[h] = d), "" === d && (c.lastIndex = o(u, i(c.lastIndex), l)), h++;
                            }
                            return 0 === h ? null : f;
                        },
                    ];
                });
            },
            9357: (t, e, r) => {
                "use strict";
                var n = r(7007),
                    i = r(508),
                    o = r(875),
                    a = r(1467),
                    s = r(6793),
                    c = r(7787),
                    u = Math.max,
                    l = Math.min,
                    p = Math.floor,
                    f = /\$([$&`']|\d\d?|<[^>]*>)/g,
                    h = /\$([$&`']|\d\d?)/g;
                r(8082)("replace", 2, function (t, e, r, d) {
                    return [
                        function (n, i) {
                            var o = t(this),
                                a = null == n ? void 0 : n[e];
                            return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i);
                        },
                        function (t, e) {
                            var i = d(r, t, this, e);
                            if (i.done) return i.value;
                            var p = n(t),
                                f = String(this),
                                h = "function" == typeof e;
                            h || (e = String(e));
                            var m = p.global;
                            if (m) {
                                var g = p.unicode;
                                p.lastIndex = 0;
                            }
                            for (var y = []; ; ) {
                                var b = c(p, f);
                                if (null === b) break;
                                if ((y.push(b), !m)) break;
                                "" === String(b[0]) && (p.lastIndex = s(f, o(p.lastIndex), g));
                            }
                            for (var S, w = "", k = 0, x = 0; x < y.length; x++) {
                                b = y[x];
                                for (var C = String(b[0]), E = u(l(a(b.index), f.length), 0), P = [], L = 1; L < b.length; L++) P.push(void 0 === (S = b[L]) ? S : String(S));
                                var O = b.groups;
                                if (h) {
                                    var A = [C].concat(P, E, f);
                                    void 0 !== O && A.push(O);
                                    var T = String(e.apply(void 0, A));
                                } else T = v(C, f, E, P, O, e);
                                E >= k && ((w += f.slice(k, E) + T), (k = E + C.length));
                            }
                            return w + f.slice(k);
                        },
                    ];
                    function v(t, e, n, o, a, s) {
                        var c = n + t.length,
                            u = o.length,
                            l = h;
                        return (
                            void 0 !== a && ((a = i(a)), (l = f)),
                            r.call(s, l, function (r, i) {
                                var s;
                                switch (i.charAt(0)) {
                                    case "$":
                                        return "$";
                                    case "&":
                                        return t;
                                    case "`":
                                        return e.slice(0, n);
                                    case "'":
                                        return e.slice(c);
                                    case "<":
                                        s = a[i.slice(1, -1)];
                                        break;
                                    default:
                                        var l = +i;
                                        if (0 === l) return r;
                                        if (l > u) {
                                            var f = p(l / 10);
                                            return 0 === f ? r : f <= u ? (void 0 === o[f - 1] ? i.charAt(1) : o[f - 1] + i.charAt(1)) : r;
                                        }
                                        s = o[l - 1];
                                }
                                return void 0 === s ? "" : s;
                            })
                        );
                    }
                });
            },
            6142: (t, e, r) => {
                "use strict";
                var n = r(7007),
                    i = r(7195),
                    o = r(7787);
                r(8082)("search", 1, function (t, e, r, a) {
                    return [
                        function (r) {
                            var n = t(this),
                                i = null == r ? void 0 : r[e];
                            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n));
                        },
                        function (t) {
                            var e = a(r, t, this);
                            if (e.done) return e.value;
                            var s = n(t),
                                c = String(this),
                                u = s.lastIndex;
                            i(u, 0) || (s.lastIndex = 0);
                            var l = o(s, c);
                            return i(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index;
                        },
                    ];
                });
            },
            1876: (t, e, r) => {
                "use strict";
                var n = r(5364),
                    i = r(7007),
                    o = r(8364),
                    a = r(6793),
                    s = r(875),
                    c = r(7787),
                    u = r(1165),
                    l = r(4253),
                    p = Math.min,
                    f = [].push,
                    h = 4294967295,
                    d = !l(function () {
                        RegExp(h, "y");
                    });
                r(8082)("split", 2, function (t, e, r, l) {
                    var v;
                    return (
                        (v =
                            "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
                                ? function (t, e) {
                                      var i = String(this);
                                      if (void 0 === t && 0 === e) return [];
                                      if (!n(t)) return r.call(i, t, e);
                                      for (
                                          var o,
                                              a,
                                              s,
                                              c = [],
                                              l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                                              p = 0,
                                              d = void 0 === e ? h : e >>> 0,
                                              v = new RegExp(t.source, l + "g");
                                          (o = u.call(v, i)) && !((a = v.lastIndex) > p && (c.push(i.slice(p, o.index)), o.length > 1 && o.index < i.length && f.apply(c, o.slice(1)), (s = o[0].length), (p = a), c.length >= d));

                                      )
                                          v.lastIndex === o.index && v.lastIndex++;
                                      return p === i.length ? (!s && v.test("")) || c.push("") : c.push(i.slice(p)), c.length > d ? c.slice(0, d) : c;
                                  }
                                : "0".split(void 0, 0).length
                                ? function (t, e) {
                                      return void 0 === t && 0 === e ? [] : r.call(this, t, e);
                                  }
                                : r),
                        [
                            function (r, n) {
                                var i = t(this),
                                    o = null == r ? void 0 : r[e];
                                return void 0 !== o ? o.call(r, i, n) : v.call(String(i), r, n);
                            },
                            function (t, e) {
                                var n = l(v, t, this, e, v !== r);
                                if (n.done) return n.value;
                                var u = i(t),
                                    f = String(this),
                                    m = o(u, RegExp),
                                    g = u.unicode,
                                    y = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (d ? "y" : "g"),
                                    b = new m(d ? u : "^(?:" + u.source + ")", y),
                                    S = void 0 === e ? h : e >>> 0;
                                if (0 === S) return [];
                                if (0 === f.length) return null === c(b, f) ? [f] : [];
                                for (var w = 0, k = 0, x = []; k < f.length; ) {
                                    b.lastIndex = d ? k : 0;
                                    var C,
                                        E = c(b, d ? f : f.slice(k));
                                    if (null === E || (C = p(s(b.lastIndex + (d ? 0 : k)), f.length)) === w) k = a(f, k, g);
                                    else {
                                        if ((x.push(f.slice(w, k)), x.length === S)) return x;
                                        for (var P = 1; P <= E.length - 1; P++) if ((x.push(E[P]), x.length === S)) return x;
                                        k = w = C;
                                    }
                                }
                                return x.push(f.slice(w)), x;
                            },
                        ]
                    );
                });
            },
            6108: (t, e, r) => {
                "use strict";
                r(6774);
                var n = r(7007),
                    i = r(3218),
                    o = r(7057),
                    a = "toString",
                    s = /./.toString,
                    c = function (t) {
                        r(7234)(RegExp.prototype, a, t, !0);
                    };
                r(4253)(function () {
                    return "/a/b" != s.call({ source: "a", flags: "b" });
                })
                    ? c(function () {
                          var t = n(this);
                          return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
                      })
                    : s.name != a &&
                      c(function () {
                          return s.call(this);
                      });
            },
            8184: (t, e, r) => {
                "use strict";
                var n = r(9824),
                    i = r(1616);
                t.exports = r(5795)(
                    "Set",
                    function (t) {
                        return function () {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0);
                        };
                    },
                    {
                        add: function (t) {
                            return n.def(i(this, "Set"), (t = 0 === t ? 0 : t), t);
                        },
                    },
                    n
                );
            },
            856: (t, e, r) => {
                "use strict";
                r(9395)("anchor", function (t) {
                    return function (e) {
                        return t(this, "a", "name", e);
                    };
                });
            },
            703: (t, e, r) => {
                "use strict";
                r(9395)("big", function (t) {
                    return function () {
                        return t(this, "big", "", "");
                    };
                });
            },
            1539: (t, e, r) => {
                "use strict";
                r(9395)("blink", function (t) {
                    return function () {
                        return t(this, "blink", "", "");
                    };
                });
            },
            5292: (t, e, r) => {
                "use strict";
                r(9395)("bold", function (t) {
                    return function () {
                        return t(this, "b", "", "");
                    };
                });
            },
            9539: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(4496)(!1);
                n(n.P, "String", {
                    codePointAt: function (t) {
                        return i(this, t);
                    },
                });
            },
            6620: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(875),
                    o = r(2094),
                    a = "endsWith",
                    s = "".endsWith;
                n(n.P + n.F * r(8852)(a), "String", {
                    endsWith: function (t) {
                        var e = o(this, t, a),
                            r = arguments.length > 1 ? arguments[1] : void 0,
                            n = i(e.length),
                            c = void 0 === r ? n : Math.min(i(r), n),
                            u = String(t);
                        return s ? s.call(e, u, c) : e.slice(c - u.length, c) === u;
                    },
                });
            },
            6629: (t, e, r) => {
                "use strict";
                r(9395)("fixed", function (t) {
                    return function () {
                        return t(this, "tt", "", "");
                    };
                });
            },
            3694: (t, e, r) => {
                "use strict";
                r(9395)("fontcolor", function (t) {
                    return function (e) {
                        return t(this, "font", "color", e);
                    };
                });
            },
            7648: (t, e, r) => {
                "use strict";
                r(9395)("fontsize", function (t) {
                    return function (e) {
                        return t(this, "font", "size", e);
                    };
                });
            },
            191: (t, e, r) => {
                var n = r(2985),
                    i = r(2337),
                    o = String.fromCharCode,
                    a = String.fromCodePoint;
                n(n.S + n.F * (!!a && 1 != a.length), "String", {
                    fromCodePoint: function (t) {
                        for (var e, r = [], n = arguments.length, a = 0; n > a; ) {
                            if (((e = +arguments[a++]), i(e, 1114111) !== e)) throw RangeError(e + " is not a valid code point");
                            r.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320));
                        }
                        return r.join("");
                    },
                });
            },
            2850: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(2094),
                    o = "includes";
                n(n.P + n.F * r(8852)(o), "String", {
                    includes: function (t) {
                        return !!~i(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                });
            },
            7795: (t, e, r) => {
                "use strict";
                r(9395)("italics", function (t) {
                    return function () {
                        return t(this, "i", "", "");
                    };
                });
            },
            9115: (t, e, r) => {
                "use strict";
                var n = r(4496)(!0);
                r(2923)(
                    String,
                    "String",
                    function (t) {
                        (this._t = String(t)), (this._i = 0);
                    },
                    function () {
                        var t,
                            e = this._t,
                            r = this._i;
                        return r >= e.length ? { value: void 0, done: !0 } : ((t = n(e, r)), (this._i += t.length), { value: t, done: !1 });
                    }
                );
            },
            4531: (t, e, r) => {
                "use strict";
                r(9395)("link", function (t) {
                    return function (e) {
                        return t(this, "a", "href", e);
                    };
                });
            },
            8306: (t, e, r) => {
                var n = r(2985),
                    i = r(2110),
                    o = r(875);
                n(n.S, "String", {
                    raw: function (t) {
                        for (var e = i(t.raw), r = o(e.length), n = arguments.length, a = [], s = 0; r > s; ) a.push(String(e[s++])), s < n && a.push(String(arguments[s]));
                        return a.join("");
                    },
                });
            },
            823: (t, e, r) => {
                var n = r(2985);
                n(n.P, "String", { repeat: r(8595) });
            },
            3605: (t, e, r) => {
                "use strict";
                r(9395)("small", function (t) {
                    return function () {
                        return t(this, "small", "", "");
                    };
                });
            },
            7732: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(875),
                    o = r(2094),
                    a = "startsWith",
                    s = "".startsWith;
                n(n.P + n.F * r(8852)(a), "String", {
                    startsWith: function (t) {
                        var e = o(this, t, a),
                            r = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                            n = String(t);
                        return s ? s.call(e, n, r) : e.slice(r, r + n.length) === n;
                    },
                });
            },
            6780: (t, e, r) => {
                "use strict";
                r(9395)("strike", function (t) {
                    return function () {
                        return t(this, "strike", "", "");
                    };
                });
            },
            9937: (t, e, r) => {
                "use strict";
                r(9395)("sub", function (t) {
                    return function () {
                        return t(this, "sub", "", "");
                    };
                });
            },
            511: (t, e, r) => {
                "use strict";
                r(9395)("sup", function (t) {
                    return function () {
                        return t(this, "sup", "", "");
                    };
                });
            },
            4564: (t, e, r) => {
                "use strict";
                r(9599)("trim", function (t) {
                    return function () {
                        return t(this, 3);
                    };
                });
            },
            5767: (t, e, r) => {
                "use strict";
                var n = r(3816),
                    i = r(9181),
                    o = r(7057),
                    a = r(2985),
                    s = r(7234),
                    c = r(4728).KEY,
                    u = r(4253),
                    l = r(3825),
                    p = r(2943),
                    f = r(3953),
                    h = r(6314),
                    d = r(8787),
                    v = r(6074),
                    m = r(5541),
                    g = r(4302),
                    y = r(7007),
                    b = r(5286),
                    S = r(508),
                    w = r(2110),
                    k = r(1689),
                    x = r(681),
                    C = r(2503),
                    E = r(9327),
                    P = r(8693),
                    L = r(4548),
                    O = r(9275),
                    A = r(7184),
                    T = P.f,
                    _ = O.f,
                    I = E.f,
                    F = n.Symbol,
                    M = n.JSON,
                    j = M && M.stringify,
                    N = h("_hidden"),
                    R = h("toPrimitive"),
                    B = {}.propertyIsEnumerable,
                    D = l("symbol-registry"),
                    H = l("symbols"),
                    W = l("op-symbols"),
                    U = Object.prototype,
                    z = "function" == typeof F && !!L.f,
                    V = n.QObject,
                    G = !V || !V.prototype || !V.prototype.findChild,
                    q =
                        o &&
                        u(function () {
                            return (
                                7 !=
                                C(
                                    _({}, "a", {
                                        get: function () {
                                            return _(this, "a", { value: 7 }).a;
                                        },
                                    })
                                ).a
                            );
                        })
                            ? function (t, e, r) {
                                  var n = T(U, e);
                                  n && delete U[e], _(t, e, r), n && t !== U && _(U, e, n);
                              }
                            : _,
                    X = function (t) {
                        var e = (H[t] = C(F.prototype));
                        return (e._k = t), e;
                    },
                    J =
                        z && "symbol" == typeof F.iterator
                            ? function (t) {
                                  return "symbol" == typeof t;
                              }
                            : function (t) {
                                  return t instanceof F;
                              },
                    Y = function (t, e, r) {
                        return (
                            t === U && Y(W, e, r),
                            y(t),
                            (e = k(e, !0)),
                            y(r),
                            i(H, e) ? (r.enumerable ? (i(t, N) && t[N][e] && (t[N][e] = !1), (r = C(r, { enumerable: x(0, !1) }))) : (i(t, N) || _(t, N, x(1, {})), (t[N][e] = !0)), q(t, e, r)) : _(t, e, r)
                        );
                    },
                    $ = function (t, e) {
                        y(t);
                        for (var r, n = m((e = w(e))), i = 0, o = n.length; o > i; ) Y(t, (r = n[i++]), e[r]);
                        return t;
                    },
                    K = function (t) {
                        var e = B.call(this, (t = k(t, !0)));
                        return !(this === U && i(H, t) && !i(W, t)) && (!(e || !i(this, t) || !i(H, t) || (i(this, N) && this[N][t])) || e);
                    },
                    Q = function (t, e) {
                        if (((t = w(t)), (e = k(e, !0)), t !== U || !i(H, e) || i(W, e))) {
                            var r = T(t, e);
                            return !r || !i(H, e) || (i(t, N) && t[N][e]) || (r.enumerable = !0), r;
                        }
                    },
                    Z = function (t) {
                        for (var e, r = I(w(t)), n = [], o = 0; r.length > o; ) i(H, (e = r[o++])) || e == N || e == c || n.push(e);
                        return n;
                    },
                    tt = function (t) {
                        for (var e, r = t === U, n = I(r ? W : w(t)), o = [], a = 0; n.length > a; ) !i(H, (e = n[a++])) || (r && !i(U, e)) || o.push(H[e]);
                        return o;
                    };
                z ||
                    (s(
                        (F = function () {
                            if (this instanceof F) throw TypeError("Symbol is not a constructor!");
                            var t = f(arguments.length > 0 ? arguments[0] : void 0),
                                e = function (r) {
                                    this === U && e.call(W, r), i(this, N) && i(this[N], t) && (this[N][t] = !1), q(this, t, x(1, r));
                                };
                            return o && G && q(U, t, { configurable: !0, set: e }), X(t);
                        }).prototype,
                        "toString",
                        function () {
                            return this._k;
                        }
                    ),
                    (P.f = Q),
                    (O.f = Y),
                    (r(616).f = E.f = Z),
                    (r(4682).f = K),
                    (L.f = tt),
                    o && !r(4461) && s(U, "propertyIsEnumerable", K, !0),
                    (d.f = function (t) {
                        return X(h(t));
                    })),
                    a(a.G + a.W + a.F * !z, { Symbol: F });
                for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; et.length > rt; ) h(et[rt++]);
                for (var nt = A(h.store), it = 0; nt.length > it; ) v(nt[it++]);
                a(a.S + a.F * !z, "Symbol", {
                    for: function (t) {
                        return i(D, (t += "")) ? D[t] : (D[t] = F(t));
                    },
                    keyFor: function (t) {
                        if (!J(t)) throw TypeError(t + " is not a symbol!");
                        for (var e in D) if (D[e] === t) return e;
                    },
                    useSetter: function () {
                        G = !0;
                    },
                    useSimple: function () {
                        G = !1;
                    },
                }),
                    a(a.S + a.F * !z, "Object", {
                        create: function (t, e) {
                            return void 0 === e ? C(t) : $(C(t), e);
                        },
                        defineProperty: Y,
                        defineProperties: $,
                        getOwnPropertyDescriptor: Q,
                        getOwnPropertyNames: Z,
                        getOwnPropertySymbols: tt,
                    });
                var ot = u(function () {
                    L.f(1);
                });
                a(a.S + a.F * ot, "Object", {
                    getOwnPropertySymbols: function (t) {
                        return L.f(S(t));
                    },
                }),
                    M &&
                        a(
                            a.S +
                                a.F *
                                    (!z ||
                                        u(function () {
                                            var t = F();
                                            return "[null]" != j([t]) || "{}" != j({ a: t }) || "{}" != j(Object(t));
                                        })),
                            "JSON",
                            {
                                stringify: function (t) {
                                    for (var e, r, n = [t], i = 1; arguments.length > i; ) n.push(arguments[i++]);
                                    if (((r = e = n[1]), (b(e) || void 0 !== t) && !J(t)))
                                        return (
                                            g(e) ||
                                                (e = function (t, e) {
                                                    if (("function" == typeof r && (e = r.call(this, t, e)), !J(e))) return e;
                                                }),
                                            (n[1] = e),
                                            j.apply(M, n)
                                        );
                                },
                            }
                        ),
                    F.prototype[R] || r(7728)(F.prototype, R, F.prototype.valueOf),
                    p(F, "Symbol"),
                    p(Math, "Math", !0),
                    p(n.JSON, "JSON", !0);
            },
            142: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(9383),
                    o = r(1125),
                    a = r(7007),
                    s = r(2337),
                    c = r(875),
                    u = r(5286),
                    l = r(3816).ArrayBuffer,
                    p = r(8364),
                    f = o.ArrayBuffer,
                    h = o.DataView,
                    d = i.ABV && l.isView,
                    v = f.prototype.slice,
                    m = i.VIEW,
                    g = "ArrayBuffer";
                n(n.G + n.W + n.F * (l !== f), { ArrayBuffer: f }),
                    n(n.S + n.F * !i.CONSTR, g, {
                        isView: function (t) {
                            return (d && d(t)) || (u(t) && m in t);
                        },
                    }),
                    n(
                        n.P +
                            n.U +
                            n.F *
                                r(4253)(function () {
                                    return !new f(2).slice(1, void 0).byteLength;
                                }),
                        g,
                        {
                            slice: function (t, e) {
                                if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                                for (var r = a(this).byteLength, n = s(t, r), i = s(void 0 === e ? r : e, r), o = new (p(this, f))(c(i - n)), u = new h(this), l = new h(o), d = 0; n < i; ) l.setUint8(d++, u.getUint8(n++));
                                return o;
                            },
                        }
                    ),
                    r(2974)(g);
            },
            1786: (t, e, r) => {
                var n = r(2985);
                n(n.G + n.W + n.F * !r(9383).ABV, { DataView: r(1125).DataView });
            },
            162: (t, e, r) => {
                r(8440)("Float32", 4, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            3834: (t, e, r) => {
                r(8440)("Float64", 8, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            4821: (t, e, r) => {
                r(8440)("Int16", 2, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            1303: (t, e, r) => {
                r(8440)("Int32", 4, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            5368: (t, e, r) => {
                r(8440)("Int8", 1, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            9103: (t, e, r) => {
                r(8440)("Uint16", 2, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            3318: (t, e, r) => {
                r(8440)("Uint32", 4, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            6964: (t, e, r) => {
                r(8440)("Uint8", 1, function (t) {
                    return function (e, r, n) {
                        return t(this, e, r, n);
                    };
                });
            },
            2152: (t, e, r) => {
                r(8440)(
                    "Uint8",
                    1,
                    function (t) {
                        return function (e, r, n) {
                            return t(this, e, r, n);
                        };
                    },
                    !0
                );
            },
            147: (t, e, r) => {
                "use strict";
                var n,
                    i = r(3816),
                    o = r(50)(0),
                    a = r(7234),
                    s = r(4728),
                    c = r(5345),
                    u = r(3657),
                    l = r(5286),
                    p = r(1616),
                    f = r(1616),
                    h = !i.ActiveXObject && "ActiveXObject" in i,
                    d = "WeakMap",
                    v = s.getWeak,
                    m = Object.isExtensible,
                    g = u.ufstore,
                    y = function (t) {
                        return function () {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0);
                        };
                    },
                    b = {
                        get: function (t) {
                            if (l(t)) {
                                var e = v(t);
                                return !0 === e ? g(p(this, d)).get(t) : e ? e[this._i] : void 0;
                            }
                        },
                        set: function (t, e) {
                            return u.def(p(this, d), t, e);
                        },
                    },
                    S = (t.exports = r(5795)(d, y, b, u, !0, !0));
                f &&
                    h &&
                    (c((n = u.getConstructor(y, d)).prototype, b),
                    (s.NEED = !0),
                    o(["delete", "has", "get", "set"], function (t) {
                        var e = S.prototype,
                            r = e[t];
                        a(e, t, function (e, i) {
                            if (l(e) && !m(e)) {
                                this._f || (this._f = new n());
                                var o = this._f[t](e, i);
                                return "set" == t ? this : o;
                            }
                            return r.call(this, e, i);
                        });
                    }));
            },
            9192: (t, e, r) => {
                "use strict";
                var n = r(3657),
                    i = r(1616),
                    o = "WeakSet";
                r(5795)(
                    o,
                    function (t) {
                        return function () {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0);
                        };
                    },
                    {
                        add: function (t) {
                            return n.def(i(this, o), t, !0);
                        },
                    },
                    n,
                    !1,
                    !0
                );
            },
            1268: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(3325),
                    o = r(508),
                    a = r(875),
                    s = r(4963),
                    c = r(6886);
                n(n.P, "Array", {
                    flatMap: function (t) {
                        var e,
                            r,
                            n = o(this);
                        return s(t), (e = a(n.length)), (r = c(n, 0)), i(r, n, n, e, 0, 1, t, arguments[1]), r;
                    },
                }),
                    r(7722)("flatMap");
            },
            4692: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(3325),
                    o = r(508),
                    a = r(875),
                    s = r(1467),
                    c = r(6886);
                n(n.P, "Array", {
                    flatten: function () {
                        var t = arguments[0],
                            e = o(this),
                            r = a(e.length),
                            n = c(e, 0);
                        return i(n, e, e, r, 0, void 0 === t ? 1 : s(t)), n;
                    },
                }),
                    r(7722)("flatten");
            },
            2773: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(9315)(!0);
                n(n.P, "Array", {
                    includes: function (t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }),
                    r(7722)("includes");
            },
            8267: (t, e, r) => {
                var n = r(2985),
                    i = r(4351)(),
                    o = r(3816).process,
                    a = "process" == r(2032)(o);
                n(n.G, {
                    asap: function (t) {
                        var e = a && o.domain;
                        i(e ? e.bind(t) : t);
                    },
                });
            },
            2559: (t, e, r) => {
                var n = r(2985),
                    i = r(2032);
                n(n.S, "Error", {
                    isError: function (t) {
                        return "Error" === i(t);
                    },
                });
            },
            5575: (t, e, r) => {
                var n = r(2985);
                n(n.G, { global: r(3816) });
            },
            525: (t, e, r) => {
                r(1024)("Map");
            },
            8211: (t, e, r) => {
                r(4881)("Map");
            },
            7698: (t, e, r) => {
                var n = r(2985);
                n(n.P + n.R, "Map", { toJSON: r(6132)("Map") });
            },
            8865: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    clamp: function (t, e, r) {
                        return Math.min(r, Math.max(e, t));
                    },
                });
            },
            368: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { DEG_PER_RAD: Math.PI / 180 });
            },
            6427: (t, e, r) => {
                var n = r(2985),
                    i = 180 / Math.PI;
                n(n.S, "Math", {
                    degrees: function (t) {
                        return t * i;
                    },
                });
            },
            286: (t, e, r) => {
                var n = r(2985),
                    i = r(8757),
                    o = r(4934);
                n(n.S, "Math", {
                    fscale: function (t, e, r, n, a) {
                        return o(i(t, e, r, n, a));
                    },
                });
            },
            2816: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    iaddh: function (t, e, r, n) {
                        var i = t >>> 0,
                            o = r >>> 0;
                        return ((e >>> 0) + (n >>> 0) + (((i & o) | ((i | o) & ~((i + o) >>> 0))) >>> 31)) | 0;
                    },
                });
            },
            2082: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    imulh: function (t, e) {
                        var r = 65535,
                            n = +t,
                            i = +e,
                            o = n & r,
                            a = i & r,
                            s = n >> 16,
                            c = i >> 16,
                            u = ((s * a) >>> 0) + ((o * a) >>> 16);
                        return s * c + (u >> 16) + ((((o * c) >>> 0) + (u & r)) >> 16);
                    },
                });
            },
            5986: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    isubh: function (t, e, r, n) {
                        var i = t >>> 0,
                            o = r >>> 0;
                        return ((e >>> 0) - (n >>> 0) - (((~i & o) | (~(i ^ o) & ((i - o) >>> 0))) >>> 31)) | 0;
                    },
                });
            },
            6308: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { RAD_PER_DEG: 180 / Math.PI });
            },
            9221: (t, e, r) => {
                var n = r(2985),
                    i = Math.PI / 180;
                n(n.S, "Math", {
                    radians: function (t) {
                        return t * i;
                    },
                });
            },
            3570: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", { scale: r(8757) });
            },
            3776: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    signbit: function (t) {
                        return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0;
                    },
                });
            },
            6754: (t, e, r) => {
                var n = r(2985);
                n(n.S, "Math", {
                    umulh: function (t, e) {
                        var r = 65535,
                            n = +t,
                            i = +e,
                            o = n & r,
                            a = i & r,
                            s = n >>> 16,
                            c = i >>> 16,
                            u = ((s * a) >>> 0) + ((o * a) >>> 16);
                        return s * c + (u >>> 16) + ((((o * c) >>> 0) + (u & r)) >>> 16);
                    },
                });
            },
            8646: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(508),
                    o = r(4963),
                    a = r(9275);
                r(7057) &&
                    n(n.P + r(1670), "Object", {
                        __defineGetter__: function (t, e) {
                            a.f(i(this), t, { get: o(e), enumerable: !0, configurable: !0 });
                        },
                    });
            },
            2658: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(508),
                    o = r(4963),
                    a = r(9275);
                r(7057) &&
                    n(n.P + r(1670), "Object", {
                        __defineSetter__: function (t, e) {
                            a.f(i(this), t, { set: o(e), enumerable: !0, configurable: !0 });
                        },
                    });
            },
            3276: (t, e, r) => {
                var n = r(2985),
                    i = r(1131)(!0);
                n(n.S, "Object", {
                    entries: function (t) {
                        return i(t);
                    },
                });
            },
            8351: (t, e, r) => {
                var n = r(2985),
                    i = r(7643),
                    o = r(2110),
                    a = r(8693),
                    s = r(2811);
                n(n.S, "Object", {
                    getOwnPropertyDescriptors: function (t) {
                        for (var e, r, n = o(t), c = a.f, u = i(n), l = {}, p = 0; u.length > p; ) void 0 !== (r = c(n, (e = u[p++]))) && s(l, e, r);
                        return l;
                    },
                });
            },
            6917: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(508),
                    o = r(1689),
                    a = r(468),
                    s = r(8693).f;
                r(7057) &&
                    n(n.P + r(1670), "Object", {
                        __lookupGetter__: function (t) {
                            var e,
                                r = i(this),
                                n = o(t, !0);
                            do {
                                if ((e = s(r, n))) return e.get;
                            } while ((r = a(r)));
                        },
                    });
            },
            372: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(508),
                    o = r(1689),
                    a = r(468),
                    s = r(8693).f;
                r(7057) &&
                    n(n.P + r(1670), "Object", {
                        __lookupSetter__: function (t) {
                            var e,
                                r = i(this),
                                n = o(t, !0);
                            do {
                                if ((e = s(r, n))) return e.set;
                            } while ((r = a(r)));
                        },
                    });
            },
            6409: (t, e, r) => {
                var n = r(2985),
                    i = r(1131)(!1);
                n(n.S, "Object", {
                    values: function (t) {
                        return i(t);
                    },
                });
            },
            6534: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(3816),
                    o = r(5645),
                    a = r(4351)(),
                    s = r(6314)("observable"),
                    c = r(4963),
                    u = r(7007),
                    l = r(3328),
                    p = r(4408),
                    f = r(7728),
                    h = r(3531),
                    d = h.RETURN,
                    v = function (t) {
                        return null == t ? void 0 : c(t);
                    },
                    m = function (t) {
                        var e = t._c;
                        e && ((t._c = void 0), e());
                    },
                    g = function (t) {
                        return void 0 === t._o;
                    },
                    y = function (t) {
                        g(t) || ((t._o = void 0), m(t));
                    },
                    b = function (t, e) {
                        u(t), (this._c = void 0), (this._o = t), (t = new S(this));
                        try {
                            var r = e(t),
                                n = r;
                            null != r &&
                                ("function" == typeof r.unsubscribe
                                    ? (r = function () {
                                          n.unsubscribe();
                                      })
                                    : c(r),
                                (this._c = r));
                        } catch (e) {
                            return void t.error(e);
                        }
                        g(this) && m(this);
                    };
                b.prototype = p(
                    {},
                    {
                        unsubscribe: function () {
                            y(this);
                        },
                    }
                );
                var S = function (t) {
                    this._s = t;
                };
                S.prototype = p(
                    {},
                    {
                        next: function (t) {
                            var e = this._s;
                            if (!g(e)) {
                                var r = e._o;
                                try {
                                    var n = v(r.next);
                                    if (n) return n.call(r, t);
                                } catch (t) {
                                    try {
                                        y(e);
                                    } finally {
                                        throw t;
                                    }
                                }
                            }
                        },
                        error: function (t) {
                            var e = this._s;
                            if (g(e)) throw t;
                            var r = e._o;
                            e._o = void 0;
                            try {
                                var n = v(r.error);
                                if (!n) throw t;
                                t = n.call(r, t);
                            } catch (t) {
                                try {
                                    m(e);
                                } finally {
                                    throw t;
                                }
                            }
                            return m(e), t;
                        },
                        complete: function (t) {
                            var e = this._s;
                            if (!g(e)) {
                                var r = e._o;
                                e._o = void 0;
                                try {
                                    var n = v(r.complete);
                                    t = n ? n.call(r, t) : void 0;
                                } catch (t) {
                                    try {
                                        m(e);
                                    } finally {
                                        throw t;
                                    }
                                }
                                return m(e), t;
                            }
                        },
                    }
                );
                var w = function (t) {
                    l(this, w, "Observable", "_f")._f = c(t);
                };
                p(w.prototype, {
                    subscribe: function (t) {
                        return new b(t, this._f);
                    },
                    forEach: function (t) {
                        var e = this;
                        return new (o.Promise || i.Promise)(function (r, n) {
                            c(t);
                            var i = e.subscribe({
                                next: function (e) {
                                    try {
                                        return t(e);
                                    } catch (t) {
                                        n(t), i.unsubscribe();
                                    }
                                },
                                error: n,
                                complete: r,
                            });
                        });
                    },
                }),
                    p(w, {
                        from: function (t) {
                            var e = "function" == typeof this ? this : w,
                                r = v(u(t)[s]);
                            if (r) {
                                var n = u(r.call(t));
                                return n.constructor === e
                                    ? n
                                    : new e(function (t) {
                                          return n.subscribe(t);
                                      });
                            }
                            return new e(function (e) {
                                var r = !1;
                                return (
                                    a(function () {
                                        if (!r) {
                                            try {
                                                if (
                                                    h(t, !1, function (t) {
                                                        if ((e.next(t), r)) return d;
                                                    }) === d
                                                )
                                                    return;
                                            } catch (t) {
                                                if (r) throw t;
                                                return void e.error(t);
                                            }
                                            e.complete();
                                        }
                                    }),
                                    function () {
                                        r = !0;
                                    }
                                );
                            });
                        },
                        of: function () {
                            for (var t = 0, e = arguments.length, r = new Array(e); t < e; ) r[t] = arguments[t++];
                            return new ("function" == typeof this ? this : w)(function (t) {
                                var e = !1;
                                return (
                                    a(function () {
                                        if (!e) {
                                            for (var n = 0; n < r.length; ++n) if ((t.next(r[n]), e)) return;
                                            t.complete();
                                        }
                                    }),
                                    function () {
                                        e = !0;
                                    }
                                );
                            });
                        },
                    }),
                    f(w.prototype, s, function () {
                        return this;
                    }),
                    n(n.G, { Observable: w }),
                    r(2974)("Observable");
            },
            9865: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(5645),
                    o = r(3816),
                    a = r(8364),
                    s = r(94);
                n(n.P + n.R, "Promise", {
                    finally: function (t) {
                        var e = a(this, i.Promise || o.Promise),
                            r = "function" == typeof t;
                        return this.then(
                            r
                                ? function (r) {
                                      return s(e, t()).then(function () {
                                          return r;
                                      });
                                  }
                                : t,
                            r
                                ? function (r) {
                                      return s(e, t()).then(function () {
                                          throw r;
                                      });
                                  }
                                : t
                        );
                    },
                });
            },
            1898: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(3499),
                    o = r(188);
                n(n.S, "Promise", {
                    try: function (t) {
                        var e = i.f(this),
                            r = o(t);
                        return (r.e ? e.reject : e.resolve)(r.v), e.promise;
                    },
                });
            },
            3364: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = n.key,
                    a = n.set;
                n.exp({
                    defineMetadata: function (t, e, r, n) {
                        a(t, e, i(r), o(n));
                    },
                });
            },
            1432: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = n.key,
                    a = n.map,
                    s = n.store;
                n.exp({
                    deleteMetadata: function (t, e) {
                        var r = arguments.length < 3 ? void 0 : o(arguments[2]),
                            n = a(i(e), r, !1);
                        if (void 0 === n || !n.delete(t)) return !1;
                        if (n.size) return !0;
                        var c = s.get(e);
                        return c.delete(r), !!c.size || s.delete(e);
                    },
                });
            },
            4416: (t, e, r) => {
                var n = r(8184),
                    i = r(9490),
                    o = r(133),
                    a = r(7007),
                    s = r(468),
                    c = o.keys,
                    u = o.key,
                    l = function (t, e) {
                        var r = c(t, e),
                            o = s(t);
                        if (null === o) return r;
                        var a = l(o, e);
                        return a.length ? (r.length ? i(new n(r.concat(a))) : a) : r;
                    };
                o.exp({
                    getMetadataKeys: function (t) {
                        return l(a(t), arguments.length < 2 ? void 0 : u(arguments[1]));
                    },
                });
            },
            6562: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = r(468),
                    a = n.has,
                    s = n.get,
                    c = n.key,
                    u = function (t, e, r) {
                        if (a(t, e, r)) return s(t, e, r);
                        var n = o(e);
                        return null !== n ? u(t, n, r) : void 0;
                    };
                n.exp({
                    getMetadata: function (t, e) {
                        return u(t, i(e), arguments.length < 3 ? void 0 : c(arguments[2]));
                    },
                });
            },
            2213: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = n.keys,
                    a = n.key;
                n.exp({
                    getOwnMetadataKeys: function (t) {
                        return o(i(t), arguments.length < 2 ? void 0 : a(arguments[1]));
                    },
                });
            },
            8681: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = n.get,
                    a = n.key;
                n.exp({
                    getOwnMetadata: function (t, e) {
                        return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]));
                    },
                });
            },
            3471: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = r(468),
                    a = n.has,
                    s = n.key,
                    c = function (t, e, r) {
                        if (a(t, e, r)) return !0;
                        var n = o(e);
                        return null !== n && c(t, n, r);
                    };
                n.exp({
                    hasMetadata: function (t, e) {
                        return c(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]));
                    },
                });
            },
            4329: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = n.has,
                    a = n.key;
                n.exp({
                    hasOwnMetadata: function (t, e) {
                        return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]));
                    },
                });
            },
            5159: (t, e, r) => {
                var n = r(133),
                    i = r(7007),
                    o = r(4963),
                    a = n.key,
                    s = n.set;
                n.exp({
                    metadata: function (t, e) {
                        return function (r, n) {
                            s(t, e, (void 0 !== n ? i : o)(r), a(n));
                        };
                    },
                });
            },
            9467: (t, e, r) => {
                r(1024)("Set");
            },
            4837: (t, e, r) => {
                r(4881)("Set");
            },
            8739: (t, e, r) => {
                var n = r(2985);
                n(n.P + n.R, "Set", { toJSON: r(6132)("Set") });
            },
            7220: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(4496)(!0),
                    o = r(4253)(function () {
                        return "𠮷" !== "𠮷".at(0);
                    });
                n(n.P + n.F * o, "String", {
                    at: function (t) {
                        return i(this, t);
                    },
                });
            },
            4208: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(1355),
                    o = r(875),
                    a = r(5364),
                    s = r(3218),
                    c = RegExp.prototype,
                    u = function (t, e) {
                        (this._r = t), (this._s = e);
                    };
                r(9988)(u, "RegExp String", function () {
                    var t = this._r.exec(this._s);
                    return { value: t, done: null === t };
                }),
                    n(n.P, "String", {
                        matchAll: function (t) {
                            if ((i(this), !a(t))) throw TypeError(t + " is not a regexp!");
                            var e = String(this),
                                r = "flags" in c ? String(t.flags) : s.call(t),
                                n = new RegExp(t.source, ~r.indexOf("g") ? r : "g" + r);
                            return (n.lastIndex = o(t.lastIndex)), new u(n, e);
                        },
                    });
            },
            2770: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(5442),
                    o = r(575),
                    a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                n(n.P + n.F * a, "String", {
                    padEnd: function (t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
                    },
                });
            },
            1784: (t, e, r) => {
                "use strict";
                var n = r(2985),
                    i = r(5442),
                    o = r(575),
                    a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                n(n.P + n.F * a, "String", {
                    padStart: function (t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
                    },
                });
            },
            5869: (t, e, r) => {
                "use strict";
                r(9599)(
                    "trimLeft",
                    function (t) {
                        return function () {
                            return t(this, 1);
                        };
                    },
                    "trimStart"
                );
            },
            4325: (t, e, r) => {
                "use strict";
                r(9599)(
                    "trimRight",
                    function (t) {
                        return function () {
                            return t(this, 2);
                        };
                    },
                    "trimEnd"
                );
            },
            9665: (t, e, r) => {
                r(6074)("asyncIterator");
            },
            9593: (t, e, r) => {
                r(6074)("observable");
            },
            8967: (t, e, r) => {
                var n = r(2985);
                n(n.S, "System", { global: r(3816) });
            },
            4188: (t, e, r) => {
                r(1024)("WeakMap");
            },
            7594: (t, e, r) => {
                r(4881)("WeakMap");
            },
            3495: (t, e, r) => {
                r(1024)("WeakSet");
            },
            9550: (t, e, r) => {
                r(4881)("WeakSet");
            },
            1181: (t, e, r) => {
                for (
                    var n = r(6997),
                        i = r(7184),
                        o = r(7234),
                        a = r(3816),
                        s = r(7728),
                        c = r(2803),
                        u = r(6314),
                        l = u("iterator"),
                        p = u("toStringTag"),
                        f = c.Array,
                        h = {
                            CSSRuleList: !0,
                            CSSStyleDeclaration: !1,
                            CSSValueList: !1,
                            ClientRectList: !1,
                            DOMRectList: !1,
                            DOMStringList: !1,
                            DOMTokenList: !0,
                            DataTransferItemList: !1,
                            FileList: !1,
                            HTMLAllCollection: !1,
                            HTMLCollection: !1,
                            HTMLFormElement: !1,
                            HTMLSelectElement: !1,
                            MediaList: !0,
                            MimeTypeArray: !1,
                            NamedNodeMap: !1,
                            NodeList: !0,
                            PaintRequestList: !1,
                            Plugin: !1,
                            PluginArray: !1,
                            SVGLengthList: !1,
                            SVGNumberList: !1,
                            SVGPathSegList: !1,
                            SVGPointList: !1,
                            SVGStringList: !1,
                            SVGTransformList: !1,
                            SourceBufferList: !1,
                            StyleSheetList: !0,
                            TextTrackCueList: !1,
                            TextTrackList: !1,
                            TouchList: !1,
                        },
                        d = i(h),
                        v = 0;
                    v < d.length;
                    v++
                ) {
                    var m,
                        g = d[v],
                        y = h[g],
                        b = a[g],
                        S = b && b.prototype;
                    if (S && (S[l] || s(S, l, f), S[p] || s(S, p, g), (c[g] = f), y)) for (m in n) S[m] || o(S, m, n[m], !0);
                }
            },
            4633: (t, e, r) => {
                var n = r(2985),
                    i = r(4193);
                n(n.G + n.B, { setImmediate: i.set, clearImmediate: i.clear });
            },
            2564: (t, e, r) => {
                var n = r(3816),
                    i = r(2985),
                    o = r(575),
                    a = [].slice,
                    s = /MSIE .\./.test(o),
                    c = function (t) {
                        return function (e, r) {
                            var n = arguments.length > 2,
                                i = !!n && a.call(arguments, 2);
                            return t(
                                n
                                    ? function () {
                                          ("function" == typeof e ? e : Function(e)).apply(this, i);
                                      }
                                    : e,
                                r
                            );
                        };
                    };
                i(i.G + i.B + i.F * s, { setTimeout: c(n.setTimeout), setInterval: c(n.setInterval) });
            },
            1934: (t, e, r) => {
                r(5767),
                    r(8132),
                    r(8388),
                    r(7470),
                    r(4882),
                    r(1520),
                    r(7476),
                    r(9622),
                    r(9375),
                    r(3533),
                    r(4672),
                    r(4157),
                    r(5095),
                    r(9892),
                    r(5115),
                    r(9176),
                    r(8838),
                    r(6253),
                    r(9730),
                    r(6059),
                    r(8377),
                    r(1084),
                    r(4299),
                    r(1246),
                    r(726),
                    r(1901),
                    r(5972),
                    r(3403),
                    r(2516),
                    r(9371),
                    r(6479),
                    r(1736),
                    r(1889),
                    r(5177),
                    r(6943),
                    r(6503),
                    r(6786),
                    r(932),
                    r(7526),
                    r(1591),
                    r(9073),
                    r(347),
                    r(579),
                    r(4669),
                    r(7710),
                    r(5789),
                    r(3514),
                    r(9978),
                    r(8472),
                    r(6946),
                    r(5068),
                    r(413),
                    r(191),
                    r(8306),
                    r(4564),
                    r(9115),
                    r(9539),
                    r(6620),
                    r(2850),
                    r(823),
                    r(7732),
                    r(856),
                    r(703),
                    r(1539),
                    r(5292),
                    r(6629),
                    r(3694),
                    r(7648),
                    r(7795),
                    r(4531),
                    r(3605),
                    r(6780),
                    r(9937),
                    r(511),
                    r(1822),
                    r(9977),
                    r(1031),
                    r(6331),
                    r(1560),
                    r(774),
                    r(522),
                    r(8295),
                    r(7842),
                    r(110),
                    r(75),
                    r(4336),
                    r(1802),
                    r(8837),
                    r(6773),
                    r(5745),
                    r(3057),
                    r(3750),
                    r(3369),
                    r(9564),
                    r(2e3),
                    r(8977),
                    r(2310),
                    r(4899),
                    r(1842),
                    r(6997),
                    r(3946),
                    r(8269),
                    r(6108),
                    r(6774),
                    r(1466),
                    r(9357),
                    r(6142),
                    r(1876),
                    r(851),
                    r(8416),
                    r(8184),
                    r(147),
                    r(9192),
                    r(142),
                    r(1786),
                    r(5368),
                    r(6964),
                    r(2152),
                    r(4821),
                    r(9103),
                    r(1303),
                    r(3318),
                    r(162),
                    r(3834),
                    r(1572),
                    r(2139),
                    r(685),
                    r(5535),
                    r(7347),
                    r(3049),
                    r(6633),
                    r(8989),
                    r(8270),
                    r(4510),
                    r(3984),
                    r(5769),
                    r(55),
                    r(6014),
                    r(2773),
                    r(1268),
                    r(4692),
                    r(7220),
                    r(1784),
                    r(2770),
                    r(5869),
                    r(4325),
                    r(4208),
                    r(9665),
                    r(9593),
                    r(8351),
                    r(6409),
                    r(3276),
                    r(8646),
                    r(2658),
                    r(6917),
                    r(372),
                    r(7698),
                    r(8739),
                    r(8211),
                    r(4837),
                    r(7594),
                    r(9550),
                    r(525),
                    r(9467),
                    r(4188),
                    r(3495),
                    r(5575),
                    r(8967),
                    r(2559),
                    r(8865),
                    r(368),
                    r(6427),
                    r(286),
                    r(2816),
                    r(5986),
                    r(2082),
                    r(6308),
                    r(9221),
                    r(3570),
                    r(6754),
                    r(3776),
                    r(9865),
                    r(1898),
                    r(3364),
                    r(1432),
                    r(6562),
                    r(4416),
                    r(8681),
                    r(2213),
                    r(3471),
                    r(4329),
                    r(5159),
                    r(8267),
                    r(6534),
                    r(2564),
                    r(4633),
                    r(1181),
                    (t.exports = r(5645));
            },
            634: () => {
                var t, e;
                (t = function (t) {
                    return (t = +t), isNaN(t) || t == 1 / 0 || t == -1 / 0 ? 0 : t;
                }),
                    (e = function (t) {
                        t = t || document.getElementsByTagName("BODY")[0];
                        var e = window.getComputedStyle(t),
                            r = window.getComputedStyle(t.parent),
                            n = e.overflowX,
                            i = e.overflowY,
                            o = r.overflowX,
                            a = r.overflowY;
                        return ("table-column" == e.display || "table-column-group" == e.display) && "visible" != o && "clip" != o && "visible" != a && "clip" != a && "visible" != n && "clip" != n && "visible" != i && "clip" != i;
                    }),
                    Element.prototype.scroll ||
                        (Element.prototype.scroll = function () {
                            var r,
                                n,
                                i = arguments.length,
                                o = this.ownerDocument,
                                a = o.defaultView,
                                s = "BackCompat" == o.compatMode,
                                c = document.getElementsByTagName("BODY")[0],
                                u = {};
                            if (o == window.document && a && 0 !== i) {
                                if (1 === i) {
                                    var l = arguments[0];
                                    if ("object" != typeof l) throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
                                    "left" in l && (u.left = t(l.left)), "top" in l && (u.top = t(l.top)), (r = "left" in u ? u.left : this.scrollLeft), (n = "top" in u ? u.top : this.scrollTop);
                                } else (u.left = r = t(arguments[0])), (u.top = n = t(arguments[1]));
                                if (this != document.documentElement) this != c || !s || e(c) ? ((this.scrollLeft = r), (this.scrollTop = n)) : a.scroll(u.left, u.top);
                                else {
                                    if (s) return;
                                    a.scroll("scrollX" in a ? a.scrollX : "pageXOffset" in a ? a.pageXOffset : this.scrollLeft, n);
                                }
                            }
                        }),
                    Element.prototype.scrollTo || (Element.prototype.scrollTo = Element.prototype.scroll),
                    Element.prototype.scrollBy ||
                        (Element.prototype.scrollBy = function () {
                            var e = arguments.length,
                                r = {};
                            if (0 !== e) {
                                if (1 === e) {
                                    var n = arguments[0];
                                    if ("object" != typeof n) throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
                                    "left" in n && (r.left = t(n.left)), "top" in n && (r.top = t(n.top));
                                } else (r.left = t(arguments[0])), (r.top = t(arguments[1]));
                                (r.left = "left" in r ? r.left + this.scrollLeft : this.scrollLeft), (r.top = "top" in r ? r.top + this.scrollTop : this.scrollTop), this.scroll(r);
                            }
                        });
            },
            4059: (t, e, r) => {
                var n, i, o;
                (i = [r(5998)]),
                    (n = function (t) {
                        function e(t) {
                            this.init(t);
                        }
                        (e.prototype = {
                            value: 0,
                            size: 100,
                            startAngle: -Math.PI,
                            thickness: "auto",
                            fill: { gradient: ["#3aeabb", "#fdd250"] },
                            emptyFill: "rgba(0, 0, 0, .1)",
                            animation: { duration: 1200, easing: "circleProgressEasing" },
                            animationStartValue: 0,
                            reverse: !1,
                            lineCap: "butt",
                            insertMode: "prepend",
                            constructor: e,
                            el: null,
                            canvas: null,
                            ctx: null,
                            radius: 0,
                            arcFill: null,
                            lastFrameValue: 0,
                            init: function (e) {
                                t.extend(this, e), (this.radius = this.size / 2), this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited");
                            },
                            initWidget: function () {
                                this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
                                var e = this.canvas;
                                if (((e.width = this.size), (e.height = this.size), (this.ctx = e.getContext("2d")), window.devicePixelRatio > 1)) {
                                    var r = window.devicePixelRatio;
                                    (e.style.width = e.style.height = this.size + "px"), (e.width = e.height = this.size * r), this.ctx.scale(r, r);
                                }
                            },
                            initFill: function () {
                                var e,
                                    r = this,
                                    n = this.fill,
                                    i = this.ctx,
                                    o = this.size;
                                if (!n) throw Error("The fill is not specified!");
                                if (("string" == typeof n && (n = { color: n }), n.color && (this.arcFill = n.color), n.gradient)) {
                                    var a = n.gradient;
                                    if (1 == a.length) this.arcFill = a[0];
                                    else if (a.length > 1) {
                                        for (
                                            var s = n.gradientAngle || 0,
                                                c = n.gradientDirection || [(o / 2) * (1 - Math.cos(s)), (o / 2) * (1 + Math.sin(s)), (o / 2) * (1 + Math.cos(s)), (o / 2) * (1 - Math.sin(s))],
                                                u = i.createLinearGradient.apply(i, c),
                                                l = 0;
                                            l < a.length;
                                            l++
                                        ) {
                                            var p = a[l],
                                                f = l / (a.length - 1);
                                            t.isArray(p) && ((f = p[1]), (p = p[0])), u.addColorStop(f, p);
                                        }
                                        this.arcFill = u;
                                    }
                                }
                                function h() {
                                    var n = t("<canvas>")[0];
                                    (n.width = r.size), (n.height = r.size), n.getContext("2d").drawImage(e, 0, 0, o, o), (r.arcFill = r.ctx.createPattern(n, "no-repeat")), r.drawFrame(r.lastFrameValue);
                                }
                                n.image && (n.image instanceof Image ? (e = n.image) : ((e = new Image()).src = n.image), e.complete ? h() : (e.onload = h));
                            },
                            draw: function () {
                                this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value);
                            },
                            drawFrame: function (t) {
                                (this.lastFrameValue = t), this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t);
                            },
                            drawArc: function (t) {
                                if (0 !== t) {
                                    var e = this.ctx,
                                        r = this.radius,
                                        n = this.getThickness(),
                                        i = this.startAngle;
                                    e.save(),
                                        e.beginPath(),
                                        this.reverse ? e.arc(r, r, r - n / 2, i - 2 * Math.PI * t, i) : e.arc(r, r, r - n / 2, i, i + 2 * Math.PI * t),
                                        (e.lineWidth = n),
                                        (e.lineCap = this.lineCap),
                                        (e.strokeStyle = this.arcFill),
                                        e.stroke(),
                                        e.restore();
                                }
                            },
                            drawEmptyArc: function (t) {
                                var e = this.ctx,
                                    r = this.radius,
                                    n = this.getThickness(),
                                    i = this.startAngle;
                                t < 1 &&
                                    (e.save(),
                                    e.beginPath(),
                                    t <= 0 ? e.arc(r, r, r - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(r, r, r - n / 2, i, i - 2 * Math.PI * t) : e.arc(r, r, r - n / 2, i + 2 * Math.PI * t, i),
                                    (e.lineWidth = n),
                                    (e.strokeStyle = this.emptyFill),
                                    e.stroke(),
                                    e.restore());
                            },
                            drawAnimated: function (e) {
                                var r = this,
                                    n = this.el,
                                    i = t(this.canvas);
                                i.stop(!0, !1),
                                    n.trigger("circle-animation-start"),
                                    i
                                        .css({ animationProgress: 0 })
                                        .animate(
                                            { animationProgress: 1 },
                                            t.extend({}, this.animation, {
                                                step: function (t) {
                                                    var i = r.animationStartValue * (1 - t) + e * t;
                                                    r.drawFrame(i), n.trigger("circle-animation-progress", [t, i]);
                                                },
                                            })
                                        )
                                        .promise()
                                        .always(function () {
                                            n.trigger("circle-animation-end");
                                        });
                            },
                            getThickness: function () {
                                return t.isNumeric(this.thickness) ? this.thickness : this.size / 14;
                            },
                            getValue: function () {
                                return this.value;
                            },
                            setValue: function (t) {
                                this.animation && (this.animationStartValue = this.lastFrameValue), (this.value = t), this.draw();
                            },
                        }),
                            (t.circleProgress = { defaults: e.prototype }),
                            (t.easing.circleProgressEasing = function (t) {
                                return t < 0.5 ? 0.5 * (t *= 2) * t * t : 1 - 0.5 * (t = 2 - 2 * t) * t * t;
                            }),
                            (t.fn.circleProgress = function (r, n) {
                                var i = "circle-progress",
                                    o = this.data(i);
                                if ("widget" == r) {
                                    if (!o) throw Error('Calling "widget" method on not initialized instance is forbidden');
                                    return o.canvas;
                                }
                                if ("value" == r) {
                                    if (!o) throw Error('Calling "value" method on not initialized instance is forbidden');
                                    if (void 0 === n) return o.getValue();
                                    var a = arguments[1];
                                    return this.each(function () {
                                        t(this).data(i).setValue(a);
                                    });
                                }
                                return this.each(function () {
                                    var n = t(this),
                                        o = n.data(i),
                                        a = t.isPlainObject(r) ? r : {};
                                    if (o) o.init(a);
                                    else {
                                        var s = t.extend({}, n.data());
                                        "string" == typeof s.fill && (s.fill = JSON.parse(s.fill)), "string" == typeof s.animation && (s.animation = JSON.parse(s.animation)), ((a = t.extend(s, a)).el = n), (o = new e(a)), n.data(i, o);
                                    }
                                });
                            });
                    }),
                    void 0 === (o = "function" == typeof n ? n.apply(e, i) : n) || (t.exports = o);
            },
            5666: function (t, e, r) {
                !(function (e) {
                    "use strict";
                    var r,
                        n = Object.prototype,
                        i = n.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        s = o.asyncIterator || "@@asyncIterator",
                        c = o.toStringTag || "@@toStringTag",
                        u = e.regeneratorRuntime;
                    if (u) t.exports = u;
                    else {
                        (u = e.regeneratorRuntime = t.exports).wrap = b;
                        var l = "suspendedStart",
                            p = "suspendedYield",
                            f = "executing",
                            h = "completed",
                            d = {},
                            v = {};
                        v[a] = function () {
                            return this;
                        };
                        var m = Object.getPrototypeOf,
                            g = m && m(m(T([])));
                        g && g !== n && i.call(g, a) && (v = g);
                        var y = (x.prototype = w.prototype = Object.create(v));
                        (k.prototype = y.constructor = x),
                            (x.constructor = k),
                            (x[c] = k.displayName = "GeneratorFunction"),
                            (u.isGeneratorFunction = function (t) {
                                var e = "function" == typeof t && t.constructor;
                                return !!e && (e === k || "GeneratorFunction" === (e.displayName || e.name));
                            }),
                            (u.mark = function (t) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), c in t || (t[c] = "GeneratorFunction")), (t.prototype = Object.create(y)), t;
                            }),
                            (u.awrap = function (t) {
                                return { __await: t };
                            }),
                            C(E.prototype),
                            (E.prototype[s] = function () {
                                return this;
                            }),
                            (u.AsyncIterator = E),
                            (u.async = function (t, e, r, n) {
                                var i = new E(b(t, e, r, n));
                                return u.isGeneratorFunction(e)
                                    ? i
                                    : i.next().then(function (t) {
                                          return t.done ? t.value : i.next();
                                      });
                            }),
                            C(y),
                            (y[c] = "Generator"),
                            (y[a] = function () {
                                return this;
                            }),
                            (y.toString = function () {
                                return "[object Generator]";
                            }),
                            (u.keys = function (t) {
                                var e = [];
                                for (var r in t) e.push(r);
                                return (
                                    e.reverse(),
                                    function r() {
                                        for (; e.length; ) {
                                            var n = e.pop();
                                            if (n in t) return (r.value = n), (r.done = !1), r;
                                        }
                                        return (r.done = !0), r;
                                    }
                                );
                            }),
                            (u.values = T),
                            (A.prototype = {
                                constructor: A,
                                reset: function (t) {
                                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = r), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = r), this.tryEntries.forEach(O), !t))
                                        for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval;
                                },
                                dispatchException: function (t) {
                                    if (this.done) throw t;
                                    var e = this;
                                    function n(n, i) {
                                        return (s.type = "throw"), (s.arg = t), (e.next = n), i && ((e.method = "next"), (e.arg = r)), !!i;
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o],
                                            s = a.completion;
                                        if ("root" === a.tryLoc) return n("end");
                                        if (a.tryLoc <= this.prev) {
                                            var c = i.call(a, "catchLoc"),
                                                u = i.call(a, "finallyLoc");
                                            if (c && u) {
                                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                            } else if (c) {
                                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                            } else {
                                                if (!u) throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (t, e) {
                                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var n = this.tryEntries[r];
                                        if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                            var o = n;
                                            break;
                                        }
                                    }
                                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                    var a = o ? o.completion : {};
                                    return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), d) : this.complete(a);
                                },
                                complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return (
                                        "break" === t.type || "continue" === t.type
                                            ? (this.next = t.arg)
                                            : "return" === t.type
                                            ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                            : "normal" === t.type && e && (this.next = e),
                                        d
                                    );
                                },
                                finish: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var r = this.tryEntries[e];
                                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), d;
                                    }
                                },
                                catch: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var r = this.tryEntries[e];
                                        if (r.tryLoc === t) {
                                            var n = r.completion;
                                            if ("throw" === n.type) {
                                                var i = n.arg;
                                                O(r);
                                            }
                                            return i;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (t, e, n) {
                                    return (this.delegate = { iterator: T(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = r), d;
                                },
                            });
                    }
                    function b(t, e, r, n) {
                        var i = e && e.prototype instanceof w ? e : w,
                            o = Object.create(i.prototype),
                            a = new A(n || []);
                        return (
                            (o._invoke = (function (t, e, r) {
                                var n = l;
                                return function (i, o) {
                                    if (n === f) throw new Error("Generator is already running");
                                    if (n === h) {
                                        if ("throw" === i) throw o;
                                        return _();
                                    }
                                    for (r.method = i, r.arg = o; ; ) {
                                        var a = r.delegate;
                                        if (a) {
                                            var s = P(a, r);
                                            if (s) {
                                                if (s === d) continue;
                                                return s;
                                            }
                                        }
                                        if ("next" === r.method) r.sent = r._sent = r.arg;
                                        else if ("throw" === r.method) {
                                            if (n === l) throw ((n = h), r.arg);
                                            r.dispatchException(r.arg);
                                        } else "return" === r.method && r.abrupt("return", r.arg);
                                        n = f;
                                        var c = S(t, e, r);
                                        if ("normal" === c.type) {
                                            if (((n = r.done ? h : p), c.arg === d)) continue;
                                            return { value: c.arg, done: r.done };
                                        }
                                        "throw" === c.type && ((n = h), (r.method = "throw"), (r.arg = c.arg));
                                    }
                                };
                            })(t, r, a)),
                            o
                        );
                    }
                    function S(t, e, r) {
                        try {
                            return { type: "normal", arg: t.call(e, r) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    function w() {}
                    function k() {}
                    function x() {}
                    function C(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            t[e] = function (t) {
                                return this._invoke(e, t);
                            };
                        });
                    }
                    function E(t) {
                        function r(e, n, o, a) {
                            var s = S(t[e], t, n);
                            if ("throw" !== s.type) {
                                var c = s.arg,
                                    u = c.value;
                                return u && "object" == typeof u && i.call(u, "__await")
                                    ? Promise.resolve(u.__await).then(
                                          function (t) {
                                              r("next", t, o, a);
                                          },
                                          function (t) {
                                              r("throw", t, o, a);
                                          }
                                      )
                                    : Promise.resolve(u).then(function (t) {
                                          (c.value = t), o(c);
                                      }, a);
                            }
                            a(s.arg);
                        }
                        var n;
                        "object" == typeof e.process && e.process.domain && (r = e.process.domain.bind(r)),
                            (this._invoke = function (t, e) {
                                function i() {
                                    return new Promise(function (n, i) {
                                        r(t, e, n, i);
                                    });
                                }
                                return (n = n ? n.then(i, i) : i());
                            });
                    }
                    function P(t, e) {
                        var n = t.iterator[e.method];
                        if (n === r) {
                            if (((e.delegate = null), "throw" === e.method)) {
                                if (t.iterator.return && ((e.method = "return"), (e.arg = r), P(t, e), "throw" === e.method)) return d;
                                (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                            }
                            return d;
                        }
                        var i = S(n, t.iterator, e.arg);
                        if ("throw" === i.type) return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), d;
                        var o = i.arg;
                        return o
                            ? o.done
                                ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = r)), (e.delegate = null), d)
                                : o
                            : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), d);
                    }
                    function L(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                    }
                    function O(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function A(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(L, this), this.reset(!0);
                    }
                    function T(t) {
                        if (t) {
                            var e = t[a];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var n = -1,
                                    o = function e() {
                                        for (; ++n < t.length; ) if (i.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                                        return (e.value = r), (e.done = !0), e;
                                    };
                                return (o.next = o);
                            }
                        }
                        return { next: _ };
                    }
                    function _() {
                        return { value: r, done: !0 };
                    }
                })("object" == typeof r.g ? r.g : "object" == typeof window ? window : "object" == typeof self ? self : this);
            },
            5998: (t) => {
                "use strict";
                t.exports = H5P.jQuery;
            },
        },
        e = {};
    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = (e[n] = { exports: {} });
        return t[n].call(o.exports, o, o.exports, r), o.exports;
    }
    (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    })()),
        (() => {
            "use strict";
            r(6124);
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            const e = (function () {
                function e() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var r, n, i;
                return (
                    (r = e),
                    (i = [
                        {
                            key: "extractFragmentsFromURL",
                            value: function (t, e) {
                                if (!e.location.hash) return {};
                                var r = {};
                                return (
                                    e.location.hash
                                        .replace("#", "")
                                        .split("&")
                                        .forEach(function (t) {
                                            if (-1 !== t.indexOf("=")) {
                                                var e = t.split("=");
                                                r[e[0]] = e[1];
                                            }
                                        }),
                                    "function" != typeof t || t(r) ? r : {}
                                );
                            },
                        },
                        {
                            key: "createFragmentsString",
                            value: function (t) {
                                var e = [];
                                for (var r in t) e.push("".concat(r, "=").concat(t[r]));
                                return "#".concat(e.join("&"));
                            },
                        },
                        {
                            key: "areFragmentsEqual",
                            value: function (t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                for (var n in t)
                                    if (t.hasOwnProperty(n)) {
                                        if (r.length > 0 && -1 === r.indexOf(n)) continue;
                                        if (!e[n] || t[n].toString() !== e[n].toString()) return !1;
                                    }
                                return !0;
                            },
                        },
                    ]),
                    (n = null) && t(r.prototype, n),
                    i && t(r, i),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    e
                );
            })();
            function n(t) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    n(t)
                );
            }
            function i(t, e) {
                var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!r) {
                    if (
                        Array.isArray(t) ||
                        (r = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return o(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        r && (t = r);
                        var n = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a,
                    s = !0,
                    c = !1;
                return {
                    s: function () {
                        r = r.call(t);
                    },
                    n: function () {
                        var t = r.next();
                        return (s = t.done), t;
                    },
                    e: function (t) {
                        (c = !0), (a = t);
                    },
                    f: function () {
                        try {
                            s || null == r.return || r.return();
                        } finally {
                            if (c) throw a;
                        }
                    },
                };
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function s(t, e) {
                return (
                    (s =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    s(t, e)
                );
            }
            function c(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = l(t);
                    if (e) {
                        var i = l(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return u(this, r);
                };
            }
            function u(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(t);
            }
            function l(t) {
                return (
                    (l = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    l(t)
                );
            }
            const p = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && s(t, e);
                })(u, H5P.EventDispatcher);
                var e,
                    r,
                    n,
                    o = c(u);
                function u(t, e, r, n) {
                    var i;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, u),
                        ((i = o.call(this)).id = e),
                        (i.parent = n),
                        (i.behaviour = t.behaviour),
                        (i.content = document.createElement("ul")),
                        i.content.classList.add("navigation-list"),
                        (i.container = i.addSideBar()),
                        (i.l10n = t.l10n),
                        (i.chapters = i.findAllChapters(t.chapters)),
                        (i.chapterNodes = i.getChapterNodes()),
                        r && ((i.titleElem = i.addMainTitle(r)), i.container.appendChild(i.titleElem)),
                        i.chapterNodes.forEach(function (t) {
                            i.content.appendChild(t);
                        }),
                        i.chapters.length > 20 && i.content.classList.add("large-navigation-list"),
                        i.container.appendChild(i.content),
                        i.addTransformListener(),
                        i.initializeNavigationControls(),
                        i
                    );
                }
                return (
                    (e = u),
                    (r = [
                        {
                            key: "initializeNavigationControls",
                            value: function () {
                                var t = this,
                                    e = Object.freeze({ UP: 38, DOWN: 40 });
                                this.chapterNodes.forEach(function (r, n) {
                                    r.querySelector(".h5p-interactive-book-navigation-chapter-button").addEventListener("keydown", function (r) {
                                        switch (r.keyCode) {
                                            case e.UP:
                                                t.setFocusToChapterItem(n, -1), r.preventDefault();
                                                break;
                                            case e.DOWN:
                                                t.setFocusToChapterItem(n, 1), r.preventDefault();
                                        }
                                    });
                                    for (
                                        var i = r.querySelectorAll(".h5p-interactive-book-navigation-section"),
                                            o = function (r) {
                                                i[r].querySelector(".section-button").addEventListener("keydown", function (i) {
                                                    switch (i.keyCode) {
                                                        case e.UP:
                                                            t.setFocusToSectionItem(n, r, -1), i.preventDefault();
                                                            break;
                                                        case e.DOWN:
                                                            t.setFocusToSectionItem(n, r, 1), i.preventDefault();
                                                    }
                                                });
                                            },
                                            a = 0;
                                        a < i.length;
                                        a++
                                    )
                                        o(a);
                                });
                            },
                        },
                        {
                            key: "setFocusToChapterItem",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    r = t + e;
                                if ((r < 0 ? (r = this.chapterNodes.length - 1) : r > this.chapterNodes.length - 1 && (r = 0), e)) {
                                    var n = e > 0 ? t : r,
                                        i = this.chapterNodes[n];
                                    if (!i.classList.contains("h5p-interactive-book-navigation-closed")) {
                                        var o = i.querySelectorAll(".h5p-interactive-book-navigation-section");
                                        if (o.length) {
                                            var a = e > 0 ? 0 : o.length - 1;
                                            return void this.setFocusToSectionItem(n, a);
                                        }
                                    }
                                }
                                var s = this.chapterNodes[r],
                                    c = s.querySelector(".h5p-interactive-book-navigation-chapter-button");
                                this.setFocusToItem(c, r);
                            },
                        },
                        {
                            key: "setFocusToSectionItem",
                            value: function (t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    n = this.chapterNodes[t],
                                    i = n.querySelectorAll(".h5p-interactive-book-navigation-section"),
                                    o = e + r;
                                if (o > i.length - 1) this.setFocusToChapterItem(t + 1);
                                else if (o < 0) this.setFocusToChapterItem(t);
                                else {
                                    var a = i[o],
                                        s = a.querySelector(".section-button");
                                    this.setFocusToItem(s, t);
                                }
                            },
                        },
                        {
                            key: "setFocusToItem",
                            value: function (t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                this.chapterNodes.forEach(function (t, r) {
                                    var n = t.querySelector(".h5p-interactive-book-navigation-chapter-button");
                                    r === e ? n.classList.add("h5p-interactive-book-navigation-current") : n.classList.remove("h5p-interactive-book-navigation-current"), n.setAttribute("tabindex", "-1");
                                    for (var i = t.querySelectorAll(".h5p-interactive-book-navigation-section"), o = 0; o < i.length; o++) i[o].querySelector(".section-button").setAttribute("tabindex", "-1");
                                }),
                                    t.setAttribute("tabindex", "0"),
                                    (this.focusedChapter = e),
                                    r || t.focus();
                            },
                        },
                        {
                            key: "addSideBar",
                            value: function () {
                                var t = document.createElement("div");
                                return (t.id = "h5p-interactive-book-navigation-menu"), t.classList.add("h5p-interactive-book-navigation"), t;
                            },
                        },
                        {
                            key: "addMainTitle",
                            value: function (t) {
                                var e = document.createElement("h2");
                                e.classList.add("navigation-title"), (e.innerHTML = t), e.setAttribute("title", t);
                                var r = document.createElement("div");
                                return r.classList.add("h5p-interactive-book-navigation-maintitle"), r.appendChild(e), r;
                            },
                        },
                        {
                            key: "findSectionsInChapter",
                            value: function (t) {
                                for (var e = [], r = t.params.content, n = 0; n < r.length; n++) {
                                    var i = r[n].content,
                                        o = "";
                                    (o = "H5P.Link" === i.library.split(" ")[0] ? (i.params.title ? i.params.title : "New link") : i.metadata.title),
                                        e.push({ title: o, id: i.subContentId ? "h5p-interactive-book-section-".concat(i.subContentId) : void 0 });
                                }
                                return e;
                            },
                        },
                        {
                            key: "findAllChapters",
                            value: function (t) {
                                for (var e = [], r = 0; r < t.length; r++) {
                                    var n = this.findSectionsInChapter(t[r]),
                                        i = t[r].metadata.title,
                                        o = "h5p-interactive-book-chapter-".concat(t[r].subContentId);
                                    e.push({ sections: n, title: i, id: o, isSummary: !1 });
                                }
                                return this.parent.hasSummary() && e.push({ sections: [], title: this.l10n.summaryHeader, id: "h5p-interactive-book-chapter-summary", isSummary: !0 }), e;
                            },
                        },
                        {
                            key: "toggleChapter",
                            value: function (t, e) {
                                e = void 0 !== e ? e : !t.classList.contains("h5p-interactive-book-navigation-closed");
                                var r = t.querySelector(".h5p-interactive-book-navigation-sectionlist"),
                                    n = t.getElementsByClassName("h5p-interactive-book-navigation-chapter-accordion")[0];
                                t.querySelector(".h5p-interactive-book-navigation-chapter-button").setAttribute("aria-expanded", (!e).toString()),
                                    !0 === e
                                        ? (t.classList.add("h5p-interactive-book-navigation-closed"),
                                          n && (n.classList.remove("icon-expanded"), n.classList.add("icon-collapsed"), r && (r.setAttribute("aria-hidden", !0), r.setAttribute("tabindex", "-1"))))
                                        : (t.classList.remove("h5p-interactive-book-navigation-closed"),
                                          n && (n.classList.remove("icon-collapsed"), n.classList.add("icon-expanded"), r && (r.removeAttribute("aria-hidden"), r.removeAttribute("tabindex"))));
                            },
                        },
                        {
                            key: "redirectHandler",
                            value: function (t) {
                                var e = this;
                                if (
                                    (this.chapterNodes.forEach(function (r, n) {
                                        e.toggleChapter(r, n !== t);
                                    }),
                                    this.parent.trigger("resize"),
                                    t !== this.focusedChapter)
                                ) {
                                    var r = this.chapterNodes[t].querySelector(".h5p-interactive-book-navigation-chapter-button");
                                    this.setFocusToItem(r, t, !0);
                                }
                            },
                        },
                        {
                            key: "resetIndicators",
                            value: function () {
                                var t = this;
                                this.chapterNodes.forEach(function (e, r) {
                                    t.updateChapterProgressIndicator(r, "BLANK");
                                    var n,
                                        o = i(e.getElementsByClassName("h5p-interactive-book-navigation-section"));
                                    try {
                                        for (o.s(); !(n = o.n()).done; ) {
                                            var a = n.value.querySelector(".h5p-interactive-book-navigation-section-icon");
                                            a && (a.classList.remove("icon-question-answered"), a.classList.add("icon-chapter-blank"));
                                        }
                                    } catch (t) {
                                        o.e(t);
                                    } finally {
                                        o.f();
                                    }
                                });
                            },
                        },
                        {
                            key: "updateChapterProgressIndicator",
                            value: function (t, e) {
                                if (this.behaviour.progressIndicators && !this.chapters[t].isSummary) {
                                    var r = this.chapterNodes[t].getElementsByClassName("h5p-interactive-book-navigation-chapter-progress")[0];
                                    "BLANK" === e
                                        ? (r.classList.remove("icon-chapter-started"), r.classList.remove("icon-chapter-done"), r.classList.add("icon-chapter-blank"))
                                        : "DONE" === e
                                        ? (r.classList.remove("icon-chapter-blank"), r.classList.remove("icon-chapter-started"), r.classList.add("icon-chapter-done"))
                                        : "STARTED" === e && (r.classList.remove("icon-chapter-blank"), r.classList.remove("icon-chapter-done"), r.classList.add("icon-chapter-started"));
                                }
                            },
                        },
                        {
                            key: "setSectionMarker",
                            value: function (t, e) {
                                var r = this.chapterNodes[t].querySelector(".h5p-interactive-book-navigation-section-" + e + " .h5p-interactive-book-navigation-section-icon");
                                r && (r.classList.remove("icon-chapter-blank"), r.classList.add("icon-question-answered"));
                            },
                        },
                        {
                            key: "getNodesFromChapter",
                            value: function (t, e) {
                                var r = this,
                                    n = document.createElement("li");
                                if ((n.classList.add("h5p-interactive-book-navigation-chapter"), t.isSummary)) {
                                    n.classList.add("h5p-interactive-book-navigation-summary-button");
                                    var i = this.parent.chapters[e].instance.summaryMenuButton;
                                    return i.classList.add("h5p-interactive-book-navigation-chapter-button"), n.appendChild(i), n;
                                }
                                var o = document.createElement("div");
                                o.classList.add("h5p-interactive-book-navigation-chapter-accordion");
                                var a = document.createElement("div");
                                a.classList.add("h5p-interactive-book-navigation-chapter-title-text"), (a.innerHTML = t.title), a.setAttribute("title", t.title);
                                var s = document.createElement("div");
                                this.behaviour.progressIndicators && (s.classList.add("icon-chapter-blank"), s.classList.add("h5p-interactive-book-navigation-chapter-progress"));
                                var c = document.createElement("button");
                                c.setAttribute("tabindex", 0 === e ? "0" : "-1"),
                                    c.classList.add("h5p-interactive-book-navigation-chapter-button"),
                                    this.parent.activeChapter !== e ? (o.classList.add("icon-collapsed"), c.setAttribute("aria-expanded", "false")) : (o.classList.add("icon-expanded"), c.setAttribute("aria-expanded", "true")),
                                    c.setAttribute("aria-controls", l),
                                    (c.onclick = function (t) {
                                        var n = !t.currentTarget.querySelector(".h5p-interactive-book-navigation-chapter-accordion").classList.contains("hidden"),
                                            i = "true" === t.currentTarget.getAttribute("aria-expanded");
                                        if ((r.isOpenOnMobile() && r.parent.trigger("toggleMenu"), r.isOpenOnMobile() || !n || !i)) {
                                            var o = { h5pbookid: r.parent.contentId, chapter: r.chapters[e].id, section: 0 };
                                            r.parent.trigger("newChapter", o);
                                        }
                                        n && (r.toggleChapter(t.currentTarget.parentElement), r.parent.trigger("resize"));
                                    }),
                                    c.appendChild(o),
                                    c.appendChild(a),
                                    c.appendChild(s),
                                    n.appendChild(c),
                                    this.parent.activeChapter === e ? n.querySelector(".h5p-interactive-book-navigation-chapter-button").classList.add("h5p-interactive-book-navigation-current") : this.toggleChapter(n, !0);
                                var u = document.createElement("ul");
                                u.classList.add("h5p-interactive-book-navigation-sectionlist");
                                var l = "h5p-interactive-book-sectionlist-" + e;
                                u.id = l;
                                for (var p = [], f = 0; f < this.chapters[e].sections.length; f++)
                                    if (this.parent.chapters[e].sections[f].isTask) {
                                        var h = this.createSectionLink(e, f);
                                        p.push(h), u.appendChild(h);
                                    } else {
                                        var d = this.parent.params.chapters[e].params.content[f].content;
                                        if ("H5P.AdvancedText" === d.library.split(" ")[0]) {
                                            var v = document.createElement("div");
                                            v.innerHTML = d.params.text;
                                            for (var m = v.querySelectorAll("h2, h3"), g = 0; g < m.length; g++) {
                                                var y = m[g],
                                                    b = this.createSectionLink(e, f, y.textContent, g);
                                                p.push(b), u.appendChild(b);
                                            }
                                        }
                                    }
                                if ((t.tasksLeft && (t.maxTasks = t.tasksLeft), 0 === p.length)) {
                                    var S = n.querySelector(".h5p-interactive-book-navigation-chapter-accordion");
                                    S && S.classList.add("hidden");
                                }
                                return n.appendChild(u), n;
                            },
                        },
                        {
                            key: "createSectionLink",
                            value: function (t, e) {
                                var r = this,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                    o = this.chapters[t].sections[e],
                                    a = document.createElement("div");
                                (a.innerHTML = n || o.title), a.setAttribute("title", n || o.title), a.classList.add("h5p-interactive-book-navigation-section-title");
                                var s = document.createElement("div");
                                s.classList.add("h5p-interactive-book-navigation-section-icon"),
                                    s.classList.add("icon-chapter-blank"),
                                    this.parent.chapters[t].sections[e].isTask && s.classList.add("h5p-interactive-book-navigation-section-task");
                                var c = document.createElement("button");
                                c.classList.add("section-button"),
                                    c.setAttribute("tabindex", "-1"),
                                    (c.onclick = function (e) {
                                        var n = { h5pbookid: r.parent.contentId, chapter: r.chapters[t].id, section: o.id };
                                        null !== i && (n.headerNumber = i), r.parent.trigger("newChapter", n), r.isOpenOnMobile() && r.parent.trigger("toggleMenu"), e.preventDefault();
                                    }),
                                    c.appendChild(s),
                                    c.appendChild(a);
                                var u = document.createElement("li");
                                return u.classList.add("h5p-interactive-book-navigation-section"), u.classList.add("h5p-interactive-book-navigation-section-" + e), u.appendChild(c), u;
                            },
                        },
                        {
                            key: "getChapterNodes",
                            value: function () {
                                var t = this;
                                return this.chapters.map(function (e, r) {
                                    return t.getNodesFromChapter(e, r);
                                });
                            },
                        },
                        {
                            key: "isOpenOnMobile",
                            value: function () {
                                return this.parent.isMenuOpen() && this.parent.isSmallSurface();
                            },
                        },
                        {
                            key: "addTransformListener",
                            value: function () {
                                var t = this;
                                this.container.addEventListener("transitionend", function (e) {
                                    "flex-basis" === e.propertyName && t.parent.trigger("resize");
                                });
                            },
                        },
                    ]),
                    r && a(e.prototype, r),
                    n && a(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    u
                );
            })();
            function f(t) {
                return (
                    (f =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    f(t)
                );
            }
            function h() {
                return (
                    (h =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    h.apply(this, arguments)
                );
            }
            function d(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function v(t, e) {
                return (
                    (v =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    v(t, e)
                );
            }
            function m(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = y(t);
                    if (e) {
                        var i = y(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return g(this, r);
                };
            }
            function g(t, e) {
                if (e && ("object" === f(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(t);
            }
            function y(t) {
                return (
                    (y = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    y(t)
                );
            }
            const b = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && v(t, e);
                })(o, H5P.EventDispatcher);
                var e,
                    r,
                    n,
                    i = m(o);
                function o(t, e, r, n, a) {
                    var s;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, o),
                        ((s = i.call(this)).id = t),
                        (s.parent = r),
                        (s.params = n || {}),
                        (s.params.l10n = n.l10n),
                        (s.params.a11y = h({ progress: "Page @page of @total", menu: "Toggle navigation menu" }, s.params.a11y || {})),
                        (s.totalChapters = e),
                        (s.arrows = s.addArrows()),
                        (s.progressBar = s.createProgressBar()),
                        (s.progressIndicator = s.createProgressIndicator()),
                        (s.chapterTitle = s.addChapterTitle()),
                        (s.menuToggleButton = s.createMenuToggleButton());
                    var c = document.createElement("div");
                    return (
                        c.classList.add("h5p-interactive-book-status"),
                        c.appendChild(s.menuToggleButton),
                        c.appendChild(s.createToTopButton()),
                        c.appendChild(s.chapterTitle.wrapper),
                        c.appendChild(s.progressIndicator.wrapper),
                        c.appendChild(s.arrows.buttonWrapperPrevious),
                        c.appendChild(s.arrows.buttonWrapperNext),
                        s.params.displayFullScreenButton && H5P.fullscreenSupported && c.appendChild(s.createFullScreenButton()),
                        (s.wrapper = document.createElement("div")),
                        s.wrapper.classList.add(a),
                        s.wrapper.setAttribute("tabindex", "-1"),
                        s.wrapper.appendChild(s.progressBar.wrapper),
                        s.wrapper.appendChild(c),
                        s.on("updateStatusBar", s.updateStatusBar),
                        s.on("seqChapter", function (t) {
                            var e = { h5pbookid: s.parent.contentId };
                            t.data.toTop && (e.section = "top"),
                                "next" === t.data.direction
                                    ? s.parent.activeChapter + 1 < s.parent.chapters.length
                                        ? (e.chapter = "h5p-interactive-book-chapter-".concat(s.parent.chapters[s.parent.activeChapter + 1].instance.subContentId))
                                        : s.parent.hasSummary() && s.parent.activeChapter + 1 === s.parent.chapters.length && s.parent.trigger("viewSummary", e)
                                    : "prev" === t.data.direction && s.parent.activeChapter > 0 && (e.chapter = "h5p-interactive-book-chapter-".concat(s.parent.chapters[s.parent.activeChapter - 1].instance.subContentId)),
                                e.chapter && s.parent.trigger("newChapter", e);
                        }),
                        s
                    );
                }
                return (
                    (e = o),
                    (r = [
                        {
                            key: "updateProgressBar",
                            value: function (t) {
                                var e = "".concat((t / this.totalChapters) * 100, "%");
                                this.progressBar.progress.style.width = e;
                                var r = this.params.a11y.progress.replace("@page", t).replace("@total", this.totalChapters);
                                this.progressBar.progress.title = r;
                            },
                        },
                        {
                            key: "updateA11yProgress",
                            value: function (t) {
                                this.progressIndicator.hiddenButRead.innerHTML = this.params.a11y.progress.replace("@page", t).replace("@total", this.totalChapters);
                            },
                        },
                        {
                            key: "updateStatusBar",
                            value: function () {
                                var t = this.parent.getActiveChapter() + 1,
                                    e = this.parent.chapters[t - 1].title;
                                (this.progressIndicator.current.innerHTML = t),
                                    this.updateA11yProgress(t),
                                    this.updateProgressBar(t),
                                    (this.chapterTitle.text.innerHTML = e),
                                    this.chapterTitle.text.setAttribute("title", e),
                                    this.parent.activeChapter <= 0 ? this.setButtonStatus("Previous", !0) : this.setButtonStatus("Previous", !1),
                                    this.parent.activeChapter + 1 >= this.totalChapters ? this.setButtonStatus("Next", !0) : this.setButtonStatus("Next", !1);
                            },
                        },
                        {
                            key: "addArrows",
                            value: function () {
                                var t = this,
                                    e = {};
                                return (
                                    (e.buttonPrevious = document.createElement("div")),
                                    e.buttonPrevious.classList.add("navigation-button"),
                                    e.buttonPrevious.classList.add("icon-previous"),
                                    e.buttonPrevious.setAttribute("title", this.params.l10n.previousPage),
                                    e.buttonPrevious.setAttribute("aria-label", this.params.l10n.previousPage),
                                    (e.buttonWrapperPrevious = document.createElement("button")),
                                    e.buttonWrapperPrevious.classList.add("h5p-interactive-book-status-arrow"),
                                    e.buttonWrapperPrevious.classList.add("h5p-interactive-book-status-button"),
                                    (e.buttonWrapperPrevious.onclick = function () {
                                        t.trigger("seqChapter", { direction: "prev", toTop: !0 });
                                    }),
                                    e.buttonWrapperPrevious.appendChild(e.buttonPrevious),
                                    (e.buttonNext = document.createElement("div")),
                                    e.buttonNext.classList.add("navigation-button"),
                                    e.buttonNext.classList.add("icon-next"),
                                    e.buttonNext.setAttribute("title", this.params.l10n.nextPage),
                                    e.buttonNext.setAttribute("aria-label", this.params.l10n.nextPage),
                                    (e.buttonWrapperNext = document.createElement("button")),
                                    e.buttonWrapperNext.classList.add("h5p-interactive-book-status-arrow"),
                                    e.buttonWrapperNext.classList.add("h5p-interactive-book-status-button"),
                                    (e.buttonWrapperNext.onclick = function () {
                                        t.trigger("seqChapter", { direction: "next", toTop: !0 });
                                    }),
                                    e.buttonWrapperNext.appendChild(e.buttonNext),
                                    e
                                );
                            },
                        },
                        {
                            key: "createMenuToggleButton",
                            value: function () {
                                var t = this,
                                    e = document.createElement("a");
                                e.classList.add("icon-menu");
                                var r = document.createElement("button");
                                return (
                                    r.classList.add("h5p-interactive-book-status-menu"),
                                    r.classList.add("h5p-interactive-book-status-button"),
                                    (r.title = this.params.a11y.menu),
                                    r.setAttribute("aria-expanded", "false"),
                                    r.setAttribute("aria-controls", "h5p-interactive-book-navigation-menu"),
                                    (r.onclick = function () {
                                        t.parent.trigger("toggleMenu");
                                    }),
                                    r.appendChild(e),
                                    r
                                );
                            },
                        },
                        {
                            key: "isMenuOpen",
                            value: function () {
                                return this.menuToggleButton.classList.contains("h5p-interactive-book-status-menu-active");
                            },
                        },
                        {
                            key: "createProgressBar",
                            value: function () {
                                var t = document.createElement("div");
                                t.classList.add("h5p-interactive-book-status-progressbar-front"), t.setAttribute("tabindex", "-1");
                                var e = document.createElement("div");
                                return e.classList.add("h5p-interactive-book-status-progressbar-back"), e.appendChild(t), { wrapper: e, progress: t };
                            },
                        },
                        {
                            key: "addChapterTitle",
                            value: function () {
                                var t = document.createElement("h1");
                                t.classList.add("title");
                                var e = document.createElement("div");
                                return e.classList.add("h5p-interactive-book-status-chapter"), e.appendChild(t), { wrapper: e, text: t };
                            },
                        },
                        {
                            key: "createToTopButton",
                            value: function () {
                                var t = this,
                                    e = document.createElement("div");
                                e.classList.add("icon-up"), e.classList.add("navigation-button");
                                var r = document.createElement("button");
                                return (
                                    r.classList.add("h5p-interactive-book-status-to-top"),
                                    r.classList.add("h5p-interactive-book-status-button"),
                                    r.classList.add("h5p-interactive-book-status-arrow"),
                                    r.setAttribute("aria-label", this.params.l10n.navigateToTop),
                                    r.addEventListener("click", function () {
                                        t.parent.trigger("scrollToTop"), document.querySelector(".h5p-interactive-book-status-menu").focus();
                                    }),
                                    r.appendChild(e),
                                    r
                                );
                            },
                        },
                        {
                            key: "setVisibility",
                            value: function (t) {
                                t ? this.wrapper.classList.add("footer-hidden") : this.wrapper.classList.remove("footer-hidden");
                            },
                        },
                        {
                            key: "createProgressIndicator",
                            value: function () {
                                var t = document.createElement("span");
                                t.classList.add("h5p-interactive-book-status-progress-number"), t.setAttribute("aria-hidden", "true");
                                var e = document.createElement("span");
                                e.classList.add("h5p-interactive-book-status-progress-divider"), (e.innerHTML = " / "), e.setAttribute("aria-hidden", "true");
                                var r = document.createElement("span");
                                r.classList.add("h5p-interactive-book-status-progress-number"), (r.innerHTML = this.totalChapters), r.setAttribute("aria-hidden", "true");
                                var n = document.createElement("p");
                                n.classList.add("hidden-but-read");
                                var i = document.createElement("p");
                                i.classList.add("h5p-interactive-book-status-progress"), i.appendChild(t), i.appendChild(e), i.appendChild(r), i.appendChild(n);
                                var o = document.createElement("div");
                                return o.appendChild(i), { wrapper: o, current: t, total: r, divider: e, progressText: i, hiddenButRead: n };
                            },
                        },
                        {
                            key: "setButtonStatus",
                            value: function (t, e) {
                                e
                                    ? (this.arrows["buttonWrapper" + t].setAttribute("disabled", "disabled"), this.arrows["button" + t].classList.add("disabled"))
                                    : (this.arrows["buttonWrapper" + t].removeAttribute("disabled"), this.arrows["button" + t].classList.remove("disabled"));
                            },
                        },
                        {
                            key: "createFullScreenButton",
                            value: function () {
                                var t = this,
                                    e = function () {
                                        !0 === H5P.isFullscreen ? H5P.exitFullScreen() : H5P.fullScreen(t.parent.mainWrapper, t.parent);
                                    },
                                    r = document.createElement("button");
                                return (
                                    r.classList.add("h5p-interactive-book-status-fullscreen"),
                                    r.classList.add("h5p-interactive-book-status-button"),
                                    r.classList.add("h5p-interactive-book-enter-fullscreen"),
                                    r.setAttribute("title", this.params.l10n.fullscreen),
                                    r.setAttribute("aria-label", this.params.l10n.fullscreen),
                                    r.addEventListener("click", e),
                                    r.addEventListener("keyPress", function (t) {
                                        (13 !== t.which && 32 !== t.which) || (e(), t.preventDefault());
                                    }),
                                    this.parent.on("enterFullScreen", function () {
                                        (t.parent.isFullscreen = !0),
                                            r.classList.remove("h5p-interactive-book-enter-fullscreen"),
                                            r.classList.add("h5p-interactive-book-exit-fullscreen"),
                                            r.setAttribute("title", t.params.l10n.exitFullscreen),
                                            r.setAttribute("aria-label", t.params.l10n.exitFullScreen),
                                            t.parent.pageContent.updateFooter();
                                    }),
                                    this.parent.on("exitFullScreen", function () {
                                        (t.parent.isFullscreen = !1),
                                            r.classList.remove("h5p-interactive-book-exit-fullscreen"),
                                            r.classList.add("h5p-interactive-book-enter-fullscreen"),
                                            r.setAttribute("title", t.params.l10n.fullscreen),
                                            r.setAttribute("aria-label", t.params.l10n.fullscreen),
                                            t.parent.pageContent.updateFooter();
                                    }),
                                    r
                                );
                            },
                        },
                    ]) && d(e.prototype, r),
                    n && d(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    o
                );
            })();
            function S(t) {
                return (
                    (S =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    S(t)
                );
            }
            function w(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function k(t, e) {
                return (
                    (k =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    k(t, e)
                );
            }
            function x(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = E(t);
                    if (e) {
                        var i = E(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return C(this, r);
                };
            }
            function C(t, e) {
                if (e && ("object" === S(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(t);
            }
            function E(t) {
                return (
                    (E = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    E(t)
                );
            }
            const P = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && k(t, e);
                })(o, H5P.EventDispatcher);
                var e,
                    r,
                    n,
                    i = x(o);
                function o(t, e, r, n, a) {
                    var s;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, o),
                        ((s = i.call(this)).parent = a),
                        (s.container = s.createContainer()),
                        t.coverImage ? s.container.appendChild(s.createVisualsElement(t, n)) : s.container.classList.add("h5p-cover-nographics"),
                        s.container.appendChild(s.createTitleElement(e)),
                        t.coverDescription && s.container.appendChild(s.createDescriptionElement(t.coverDescription)),
                        s.container.appendChild(s.createReadButton(r)),
                        s
                    );
                }
                return (
                    (e = o),
                    (r = [
                        {
                            key: "createContainer",
                            value: function () {
                                var t = document.createElement("div");
                                return t.classList.add("h5p-interactive-book-cover"), t;
                            },
                        },
                        {
                            key: "createVisualsElement",
                            value: function (t, e) {
                                if (!t || !t.coverImage) return null;
                                var r = document.createElement("div");
                                return r.classList.add("h5p-interactive-book-cover-graphics"), r.appendChild(this.createImage(t.coverImage.path, e, t.coverAltText)), r.appendChild(this.createCoverBar()), r;
                            },
                        },
                        {
                            key: "createImage",
                            value: function (t, e, r) {
                                var n = document.createElement("img");
                                return n.classList.add("h5p-interactive-book-cover-image"), (n.src = H5P.getPath(t, e)), n.setAttribute("draggable", "false"), r && (n.alt = r), n;
                            },
                        },
                        {
                            key: "createCoverBar",
                            value: function () {
                                var t = document.createElement("div");
                                return t.classList.add("h5p-interactive-book-cover-bar"), t;
                            },
                        },
                        {
                            key: "createTitleElement",
                            value: function (t) {
                                var e = document.createElement("p");
                                e.innerHTML = t;
                                var r = document.createElement("div");
                                return r.classList.add("h5p-interactive-book-cover-title"), r.appendChild(e), r;
                            },
                        },
                        {
                            key: "createDescriptionElement",
                            value: function (t) {
                                if (!t) return null;
                                var e = document.createElement("div");
                                return e.classList.add("h5p-interactive-book-cover-description"), (e.innerHTML = t), e;
                            },
                        },
                        {
                            key: "createReadButton",
                            value: function (t) {
                                var e = this,
                                    r = document.createElement("button");
                                (r.innerHTML = t),
                                    (r.onclick = function () {
                                        e.removeCover();
                                    });
                                var n = document.createElement("div");
                                return n.classList.add("h5p-interactive-book-cover-readbutton"), n.appendChild(r), n;
                            },
                        },
                        {
                            key: "removeCover",
                            value: function () {
                                this.container.parentElement.classList.remove("covered"), this.container.parentElement.removeChild(this.container), (this.hidden = !0), this.parent.trigger("coverRemoved");
                            },
                        },
                    ]) && w(e.prototype, r),
                    n && w(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    o
                );
            })();
            r(4059);
            function L(t) {
                return (
                    (L =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    L(t)
                );
            }
            function O(t, e) {
                var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!r) {
                    if (
                        Array.isArray(t) ||
                        (r = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return A(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        r && (t = r);
                        var n = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var o,
                    a = !0,
                    s = !1;
                return {
                    s: function () {
                        r = r.call(t);
                    },
                    n: function () {
                        var t = r.next();
                        return (a = t.done), t;
                    },
                    e: function (t) {
                        (s = !0), (o = t);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (s) throw o;
                        }
                    },
                };
            }
            function A(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function _(t, e) {
                return (
                    (_ =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    _(t, e)
                );
            }
            function I(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = M(t);
                    if (e) {
                        var i = M(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return F(this, r);
                };
            }
            function F(t, e) {
                if (e && ("object" === L(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(t);
            }
            function M(t) {
                return (
                    (M = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    M(t)
                );
            }
            const j = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && _(t, e);
                })(o, H5P.EventDispatcher);
                var e,
                    r,
                    n,
                    i = I(o);
                function o(t, e, r) {
                    var n;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, o),
                        ((n = i.call(this)).parent = e),
                        (n.behaviour = t.behaviour),
                        (n.l10n = t.l10n),
                        (n.chapters = r || []),
                        (n.subContentId = "summary"),
                        (n.wrapper = null),
                        (n.summaryMenuButton = n.createSummaryButton()),
                        (n.filterActionAll = "all"),
                        (n.filterActionUnanswered = "unanswered"),
                        (n.bookCompleted = !1),
                        (n.tempState = JSON.stringify(n.parent.previousState && n.parent.previousState.chapters ? n.parent.previousState.chapters : n.getChapterStats())),
                        e.on("bookCompleted", function (t) {
                            return n.setBookComplete(t.data.completed);
                        }),
                        e.on("toggleMenu", function () {
                            var t = document.querySelector(".h5p-interactive-book-summary-footer");
                            t && n.bookCompleted && (n.parent.isMenuOpen() ? t.classList.add("menu-open") : t.classList.remove("menu-open"));
                        }),
                        n
                    );
                }
                return (
                    (e = o),
                    (r = [
                        {
                            key: "setBookComplete",
                            value: function (t) {
                                var e = this.parent.mainWrapper ? this.parent.mainWrapper[0].querySelector(".h5p-interactive-book-summary-footer") : null;
                                !e && this.parent.isSmallSurface() && ((e = document.createElement("div")).classList.add("h5p-interactive-book-summary-footer"), e.appendChild(this.createSummaryButton()), this.parent.mainWrapper.append(e)),
                                    e &&
                                        t &&
                                        setTimeout(function () {
                                            return e.classList.add("show-footer");
                                        }, 0),
                                    (this.bookCompleted = t),
                                    Array.from(document.querySelectorAll(".h5p-interactive-book-summary-menu-button")).forEach(function (e) {
                                        return e.setAttribute("data-book-completed", t.toString());
                                    });
                            },
                        },
                        {
                            key: "setChapters",
                            value: function (t) {
                                this.chapters = Array.isArray(t) ? t : [];
                            },
                        },
                        {
                            key: "setSummaryMenuButtonDisabled",
                            value: function () {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                this.summaryMenuButton.disabled = t;
                            },
                        },
                        {
                            key: "setFilter",
                            value: function (t) {
                                var e = this,
                                    r = this.wrapper.querySelector(".h5p-interactive-book-summary-overview-list"),
                                    n = Array.from(r.querySelectorAll(".h5p-interactive-book-summary-overview-section"));
                                n.forEach(function (t) {
                                    t.classList.remove("h5p-interactive-book-summary-top-section"), t.classList.remove("h5p-interactive-book-summary-bottom-section");
                                });
                                var i = r.querySelector(".h5p-interactive-book-summary-overview-list-empty");
                                if (((i.style.display = "none"), t === this.filterActionUnanswered)) {
                                    r.classList.add("h5p-interactive-book-summary-overview-list-only-unanswered");
                                    var o = n.filter(function (t) {
                                        return !t.classList.contains("h5p-interactive-book-summary-no-interactions");
                                    });
                                    o.length ? (o[0].classList.add("h5p-interactive-book-summary-top-section"), o[o.length - 1].classList.add("h5p-interactive-book-summary-bottom-section")) : (i.style.display = "block");
                                } else t === this.filterActionAll && r.classList.remove("h5p-interactive-book-summary-overview-list-only-unanswered");
                                setTimeout(function () {
                                    return e.trigger("resize");
                                }, 1);
                            },
                        },
                        {
                            key: "createSummaryButton",
                            value: function () {
                                var t = this,
                                    e = document.createElement("button");
                                e.classList.add("h5p-interactive-book-summary-menu-button"),
                                    (e.onclick = function () {
                                        var e = { h5pbookid: t.parent.contentId, chapter: "h5p-interactive-book-chapter-summary", section: "top" };
                                        t.parent.trigger("newChapter", e), t.parent.isMenuOpen() && t.parent.isSmallSurface() && t.parent.trigger("toggleMenu");
                                    });
                                var r = document.createElement("span");
                                r.classList.add("h5p-interactive-book-summary-icon"), r.classList.add("icon-paper"), r.setAttribute("aria-hidden", "true");
                                var n = document.createElement("span");
                                n.classList.add("h5p-interactive-book-summary-text"), (n.innerHTML = this.l10n.summaryAndSubmit);
                                var i = document.createElement("span");
                                return i.classList.add("h5p-interactive-book-summary-menu-button-arrow"), i.classList.add("icon-up"), i.setAttribute("aria-hidden", "true"), e.appendChild(r), e.appendChild(n), e.appendChild(i), e;
                            },
                        },
                        {
                            key: "createCircle",
                            value: function (t) {
                                var e = document.createElement("div");
                                return (
                                    e.classList.add("h5p-interactive-book-summary-progress-circle"),
                                    e.setAttribute("data-value", t),
                                    e.setAttribute("data-start-angle", -Math.PI / 3),
                                    e.setAttribute("data-thickness", 13),
                                    e.setAttribute("data-empty-fill", "rgba(45, 122, 210, .1)"),
                                    e.setAttribute("data-fill", JSON.stringify({ color: "#2d7ad2" })),
                                    e
                                );
                            },
                        },
                        {
                            key: "createProgress",
                            value: function (t, e, r, n) {
                                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                    o = arguments.length > 5 ? arguments[5] : void 0,
                                    a = arguments.length > 6 ? arguments[6] : void 0,
                                    s = document.createElement("div"),
                                    c = document.createElement("h3");
                                c.innerHTML = t;
                                var u = (100 * r) / n;
                                void 0 === o && (o = r), void 0 === a && (a = n);
                                var l = document.createElement("p");
                                if ((l.classList.add("h5p-interactive-book-summary-progressbox-bigtext"), (l.innerHTML = Math.round(u) + "%"), i)) {
                                    var p = document.createElement("span");
                                    p.classList.add("absolute-value"), (p.innerHTML = r);
                                    var f = document.createElement("span");
                                    f.classList.add("separator"), (f.innerHTML = "/");
                                    var h = document.createElement("span");
                                    h.classList.add("absolute-value"), (h.innerHTML = n), (l.innerHTML = ""), l.appendChild(p), l.appendChild(f), l.appendChild(h);
                                }
                                var d = document.createElement("span");
                                d.classList.add("h5p-interactive-book-summary-progressbox-smalltext"), (d.innerHTML = e.replace("@count", o).replace("@total", a)), s.appendChild(c), s.appendChild(l), s.appendChild(d);
                                var v = document.createElement("div");
                                return v.appendChild(s), v.appendChild(this.createCircle(r / n)), v;
                            },
                        },
                        {
                            key: "addScoreProgress",
                            value: function () {
                                var t,
                                    e = 0,
                                    r = 0,
                                    n = O(this.chapters);
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var i = t.value;
                                        (e += i.maxTasks), (r += i.tasksLeft);
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                                var o = this.createProgress(this.l10n.totalScoreLabel, this.l10n.interactionsProgressSubtext, this.parent.getScore(), this.parent.getMaxScore(), !0, Math.max(e - r, 0), e);
                                o.classList.add("h5p-interactive-book-summary-progress-container"), o.classList.add("h5p-interactive-book-summary-score-progress");
                                var a = o.querySelector(".h5p-interactive-book-summary-progress-circle");
                                return a.setAttribute("data-empty-fill", "rgb(198, 220, 212)"), a.setAttribute("data-fill", JSON.stringify({ color: "#0e7c57" })), o;
                            },
                        },
                        {
                            key: "addBookProgress",
                            value: function () {
                                var t = this.createProgress(
                                    this.l10n.bookProgress,
                                    this.l10n.bookProgressSubtext,
                                    this.chapters.filter(function (t) {
                                        return t.completed;
                                    }).length,
                                    this.chapters.length
                                );
                                return t.classList.add("h5p-interactive-book-summary-progress-container"), t.classList.add("h5p-interactive-book-summary-book-progress"), t;
                            },
                        },
                        {
                            key: "addInteractionsProgress",
                            value: function () {
                                var t,
                                    e = 0,
                                    r = 0,
                                    n = O(this.chapters);
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var i = t.value;
                                        (e += i.maxTasks), (r += i.tasksLeft);
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                                var o = this.createProgress(this.l10n.interactionsProgress, this.l10n.interactionsProgressSubtext, Math.max(e - r, 0), e);
                                return o.classList.add("h5p-interactive-book-summary-progress-container"), o.classList.add("h5p-interactive-book-summary-interactions-progress"), o;
                            },
                        },
                        {
                            key: "addProgressIndicators",
                            value: function () {
                                if (this.behaviour.progressIndicators) {
                                    var t = document.createElement("div");
                                    t.classList.add("h5p-interactive-box-summary-progress"),
                                        t.appendChild(this.addScoreProgress()),
                                        t.appendChild(this.addBookProgress()),
                                        t.appendChild(this.addInteractionsProgress()),
                                        setTimeout(function () {
                                            return H5P.jQuery(".h5p-interactive-book-summary-progress-circle").circleProgress();
                                        }, 100),
                                        this.wrapper.appendChild(t);
                                }
                            },
                        },
                        {
                            key: "addActionButtons",
                            value: function () {
                                var t = this,
                                    e = document.createElement("div");
                                if ((e.classList.add("h5p-interactive-book-summary-buttons"), this.checkTheAnswerIsUpdated(), this.parent.isSubmitButtonEnabled && this.parent.isAnswerUpdated)) {
                                    var r = this.addButton("icon-paper-pencil", this.l10n.submitReport);
                                    r.classList.add("h5p-interactive-book-summary-submit"),
                                        (r.onclick = function () {
                                            t.trigger("submitted"),
                                                t.parent.triggerXAPIScored(t.parent.getScore(), t.parent.getMaxScore(), "completed"),
                                                e.classList.add("submitted"),
                                                e.querySelector(".answers-submitted").focus(),
                                                (t.tempState = JSON.stringify(t.getChapterStats())),
                                                (t.parent.isAnswerUpdated = !1);
                                        }),
                                        e.appendChild(r);
                                }
                                e.appendChild(this.createRestartButton()), e.appendChild(this.createSubmittedConfirmation()), this.wrapper.appendChild(e);
                            },
                        },
                        {
                            key: "createRestartButton",
                            value: function () {
                                var t = this,
                                    e = this.addButton("icon-restart", this.l10n.restartLabel);
                                return (
                                    e.classList.add("h5p-interactive-book-summary-restart"),
                                    (e.onclick = function () {
                                        return t.parent.resetTask();
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "createSubmittedConfirmation",
                            value: function () {
                                var t = document.createElement("div");
                                t.classList.add("h5p-interactive-book-summary-submitted");
                                var e = document.createElement("span");
                                e.classList.add("icon-chapter-done"), e.classList.add("icon-check-mark"), t.appendChild(e);
                                var r = document.createElement("p");
                                return (r.innerHTML = this.l10n.yourAnswersAreSubmittedForReview), (r.tabIndex = -1), r.classList.add("answers-submitted"), t.appendChild(r), t.appendChild(this.createRestartButton()), t;
                            },
                        },
                        {
                            key: "addButton",
                            value: function (t, e) {
                                var r = document.createElement("button");
                                (r.type = "button"), r.classList.add("h5p-interactive-book-summary-button"), (r.innerHTML = e);
                                var n = document.createElement("span");
                                return n.classList.add(t), n.setAttribute("aria-hidden", "true"), r.appendChild(n), r;
                            },
                        },
                        {
                            key: "createSectionList",
                            value: function (t, e) {
                                var r,
                                    n = this,
                                    i = [],
                                    o = !1,
                                    a = O(t);
                                try {
                                    var s = function () {
                                        var t = r.value,
                                            a = document.createElement("li");
                                        if ((a.classList.add("h5p-interactive-book-summary-overview-section-details"), n.behaviour.progressIndicators)) {
                                            var s = document.createElement("span");
                                            s.classList.add("h5p-interactive-book-summary-section-icon"), s.classList.add(t.taskDone ? "icon-chapter-done" : "icon-chapter-blank"), a.appendChild(s);
                                        }
                                        var c = document.createElement("button");
                                        (c.type = "button"),
                                            c.classList.add("h5p-interactive-book-summary-section-title"),
                                            (c.onclick = function () {
                                                var r = { h5pbookid: n.parent.contentId, chapter: "h5p-interactive-book-chapter-".concat(e), section: "h5p-interactive-book-section-".concat(t.instance.subContentId) };
                                                n.parent.trigger("newChapter", r);
                                            });
                                        var u = t.instance.contentData && t.instance.contentData.metadata && t.instance.contentData.metadata.title,
                                            l = t.content && t.content.metadata && t.content.metadata.title;
                                        c.innerHTML = u || l || "Untitled";
                                        var p = document.createElement("div");
                                        p.classList.add("h5p-interactive-book-summary-section-score"),
                                            (p.innerHTML = "-"),
                                            "function" == typeof t.instance.getScore && (p.innerHTML = n.l10n.scoreText.replace("@score", t.instance.getScore()).replace("@maxscore", t.instance.getMaxScore())),
                                            t.taskDone ? a.classList.add("h5p-interactive-book-summary-overview-section-details-task-done") : (o = !0),
                                            a.appendChild(c),
                                            a.appendChild(p),
                                            i.push(a);
                                    };
                                    for (a.s(); !(r = a.n()).done; ) s();
                                } catch (t) {
                                    a.e(t);
                                } finally {
                                    a.f();
                                }
                                if (i.length) {
                                    var c = document.createElement("div");
                                    c.classList.add("h5p-interactive-book-summary-overview-section-score-header");
                                    var u = document.createElement("div");
                                    (u.innerHTML = this.l10n.score), c.appendChild(u), i.unshift(c);
                                }
                                return { hasUnansweredInteractions: o, sectionElements: i };
                            },
                        },
                        {
                            key: "createChapterOverview",
                            value: function (t) {
                                var e = this,
                                    r = document.createElement("li");
                                r.classList.add("h5p-interactive-book-summary-overview-section");
                                var n = document.createElement("h4");
                                n.onclick = function () {
                                    var r = { h5pbookid: e.parent.contentId, chapter: "h5p-interactive-book-chapter-".concat(t.instance.subContentId), section: "top" };
                                    e.parent.trigger("newChapter", r);
                                };
                                var i = document.createElement("span");
                                if (((i.innerHTML = t.title), n.appendChild(i), this.behaviour.progressIndicators)) {
                                    var o = document.createElement("span"),
                                        a = this.parent.getChapterStatus(t);
                                    o.classList.add("icon-chapter-".concat(a.toLowerCase())), n.appendChild(o);
                                }
                                r.appendChild(n);
                                var s = this.createSectionList(
                                        t.sections.filter(function (t) {
                                            return t.isTask;
                                        }),
                                        t.instance.subContentId
                                    ),
                                    c = s.sectionElements;
                                !1 === s.hasUnansweredInteractions && r.classList.add("h5p-interactive-book-summary-no-interactions");
                                var u = document.createElement("div");
                                u.classList.add("h5p-interactive-book-summary-chapter-subheader"),
                                    t.maxTasks ? (u.innerHTML = this.l10n.leftOutOfTotalCompleted.replace("@left", Math.max(t.maxTasks - t.tasksLeft, 0)).replace("@max", t.maxTasks)) : (u.innerHTML = this.l10n.noInteractions),
                                    r.appendChild(u);
                                var l = document.createElement("ul");
                                return (
                                    c.length &&
                                        c.map(function (t) {
                                            return l.appendChild(t);
                                        }),
                                    r.appendChild(l),
                                    r
                                );
                            },
                        },
                        {
                            key: "createFilterDropdown",
                            value: function () {
                                var t = this,
                                    e = function (e, o) {
                                        var a = document.createElement("li");
                                        a.role = "menuitem";
                                        var s = document.createElement("button");
                                        return (
                                            (s.textContent = e),
                                            (s.type = "button"),
                                            (s.onclick = function (e) {
                                                t.setFilter(o), r.removeAttribute("active"), n.setAttribute("aria-expanded", "false"), (i.textContent = e.currentTarget.innerHTML);
                                            }),
                                            a.appendChild(s),
                                            a
                                        );
                                    },
                                    r = document.createElement("div");
                                r.classList.add("h5p-interactive-book-summary-dropdown");
                                var n = document.createElement("button");
                                n.setAttribute("aria-haspopup", "true"),
                                    n.setAttribute("aria-expanded", "false"),
                                    (n.type = "button"),
                                    (n.onclick = function () {
                                        r.hasAttribute("active") ? (r.removeAttribute("active"), n.setAttribute("aria-expanded", "false")) : (r.setAttribute("active", ""), n.setAttribute("aria-expanded", "true"), n.focus());
                                    });
                                var i = document.createElement("span");
                                (i.textContent = this.l10n.allInteractions), n.appendChild(i);
                                var o = document.createElement("span");
                                o.classList.add("h5p-interactive-book-summary-dropdown-icon"), o.classList.add("icon-expanded"), o.setAttribute("aria-hidden", "true"), n.appendChild(o);
                                var a = document.createElement("ul");
                                (a.role = "menu"), a.classList.add("h5p-interactive-book-summary-dropdown-menu");
                                var s = e(this.l10n.allInteractions, this.filterActionAll),
                                    c = e(this.l10n.unansweredInteractions, this.filterActionUnanswered);
                                return a.appendChild(s), a.appendChild(c), r.appendChild(n), r.appendChild(a), r;
                            },
                        },
                        {
                            key: "addSummaryOverview",
                            value: function () {
                                var t = document.createElement("ul");
                                t.classList.add("h5p-interactive-book-summary-list");
                                var e = document.createElement("li");
                                e.classList.add("h5p-interactive-book-summary-overview-header");
                                var r = document.createElement("h3");
                                (r.innerHTML = this.l10n.summaryHeader), e.appendChild(r), e.appendChild(this.createFilterDropdown()), t.appendChild(e);
                                var n = document.createElement("ol");
                                n.classList.add("h5p-interactive-book-summary-overview-list");
                                var i,
                                    o = O(this.chapters);
                                try {
                                    for (o.s(); !(i = o.n()).done; ) {
                                        var a = i.value;
                                        n.appendChild(this.createChapterOverview(a));
                                    }
                                } catch (t) {
                                    o.e(t);
                                } finally {
                                    o.f();
                                }
                                var s = document.createElement("p");
                                s.classList.add("h5p-interactive-book-summary-overview-list-empty"),
                                    s.classList.add("h5p-interactive-book-summary-top-section"),
                                    s.classList.add("h5p-interactive-book-summary-bottom-section"),
                                    (s.innerHTML = this.l10n.noInteractions),
                                    n.appendChild(s),
                                    t.appendChild(n),
                                    this.wrapper.appendChild(t);
                            },
                        },
                        {
                            key: "addScoreBar",
                            value: function () {
                                var t = document.createElement("div");
                                t.classList.add("h5p-interactive-book-summary-score-bar");
                                var e = H5P.JoubelUI.createScoreBar(this.parent.getMaxScore());
                                e.setScore(this.parent.getScore()), e.appendTo(t), this.wrapper.appendChild(t);
                            },
                        },
                        {
                            key: "noChapterInteractions",
                            value: function () {
                                var t = document.createElement("div");
                                t.classList.add("h5p-interactive-book-summary-no-chapter-interactions");
                                var e = document.createElement("p");
                                e.innerHTML = this.l10n.noChapterInteractionBoldText;
                                var r = document.createElement("p");
                                r.classList.add("h5p-interactive-book-summary-no-initialized-chapters"), (r.innerHTML = this.l10n.noChapterInteractionText), t.appendChild(e), t.appendChild(r), this.wrapper.appendChild(t);
                            },
                        },
                        {
                            key: "addSummaryPage",
                            value: function (t) {
                                if (
                                    ((this.wrapper = document.createElement("div")),
                                    this.wrapper.classList.add("h5p-interactive-book-summary-page"),
                                    this.chapters.filter(function (t) {
                                        return t.isInitialized;
                                    }).length > 0 ||
                                        this.chapters.some(function (t) {
                                            return t.sections.some(function (t) {
                                                return t.taskDone;
                                            });
                                        }))
                                ) {
                                    if ((this.parent.pageContent && this.parent.chapters[this.parent.getChapterId(this.parent.pageContent.targetPage.chapter)].isSummary) || 0 === this.parent.chapters.length) {
                                        if (this.parent.chapters.length > 0) for (var e in this.chapters) this.parent.pageContent.initializeChapter(e);
                                        this.addProgressIndicators(), this.addActionButtons(), this.addSummaryOverview(), this.addScoreBar();
                                    }
                                } else this.noChapterInteractions();
                                return (
                                    Array.from(document.querySelectorAll(".h5p-interactive-book-summary-footer")).forEach(function (t) {
                                        return t.remove();
                                    }),
                                    t.append(this.wrapper),
                                    t
                                );
                            },
                        },
                        {
                            key: "checkTheAnswerIsUpdated",
                            value: function () {
                                var t,
                                    e = this.getChapterStats(),
                                    r = JSON.parse(this.tempState),
                                    n = O(e.keys());
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var i,
                                            o = t.value,
                                            a = r[o].state.instances,
                                            s = e[o].state.instances,
                                            c = e[o].sections,
                                            u = O(a.keys());
                                        try {
                                            for (u.s(); !(i = u.n()).done; ) {
                                                var l = i.value;
                                                null !== a[l] &&
                                                    void 0 !== a[l] &&
                                                    (Array.isArray(a[l]) && !this.compareStates(a[l], s[l]) && c[l].taskDone && (this.parent.isAnswerUpdated = !0),
                                                    "object" === L(a[l]) && !Array.isArray(a[l]) && JSON.stringify(a[l]) !== JSON.stringify(s[l]) && c[l].taskDone && (this.parent.isAnswerUpdated = !0));
                                            }
                                        } catch (t) {
                                            u.e(t);
                                        } finally {
                                            u.f();
                                        }
                                        if (this.parent.isAnswerUpdated) break;
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                            },
                        },
                        {
                            key: "getChapterStats",
                            value: function () {
                                return this.chapters
                                    .filter(function (t) {
                                        return !t.isSummary;
                                    })
                                    .map(function (t) {
                                        return {
                                            sections: t.sections.map(function (t) {
                                                return { taskDone: t.taskDone };
                                            }),
                                            state: t.instance.getCurrentState(),
                                        };
                                    });
                            },
                        },
                        {
                            key: "compareStates",
                            value: function (t, e) {
                                return (
                                    Array.isArray(t) &&
                                    Array.isArray(e) &&
                                    t.length === e.length &&
                                    t.every(function (t, r) {
                                        return t === e[r] || "" === e[r];
                                    })
                                );
                            },
                        },
                    ]),
                    r && T(e.prototype, r),
                    n && T(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    o
                );
            })();
            function N(t) {
                return (
                    (N =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    N(t)
                );
            }
            function R(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function B(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? R(Object(r), !0).forEach(function (e) {
                              D(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : R(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            function D(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function H() {
                return (
                    (H =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    H.apply(this, arguments)
                );
            }
            function W(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function U(t, e) {
                return (
                    (U =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    U(t, e)
                );
            }
            function z(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = G(t);
                    if (e) {
                        var i = G(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return V(this, r);
                };
            }
            function V(t, e) {
                if (e && ("object" === N(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })(t);
            }
            function G(t) {
                return (
                    (G = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    G(t)
                );
            }
            const q = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && U(t, e);
                })(a, H5P.EventDispatcher);
                var r,
                    n,
                    i,
                    o = z(a);
                function a(t, e, r, n, i) {
                    var s;
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, a),
                        ((s = o.call(this)).parent = n),
                        (s.behaviour = t.behaviour),
                        (s.params = i),
                        (s.targetPage = {}),
                        (s.targetPage.redirectFromComponent = !1),
                        (s.columnNodes = []),
                        (s.chapters = []),
                        (s.l10n = t.l10n),
                        (s.previousState = r.previousState && Object.keys(r.previousState).length > 0 ? r.previousState : null),
                        n.hasValidChapters())
                    ) {
                        var c = s.createColumns(t, e, r);
                        s.preloadChapter(c);
                    }
                    return (s.content = s.createPageContent()), (s.container = document.createElement("div")), s.container.classList.add("h5p-interactive-book-main"), s.container.appendChild(s.content), s;
                }
                return (
                    (r = a),
                    (n = [
                        {
                            key: "getChapters",
                            value: function () {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                return this.chapters.filter(function (e) {
                                    return !e.isSummary || (e.isSummary && !!t);
                                });
                            },
                        },
                        {
                            key: "resetChapters",
                            value: function () {
                                this.behaviour.progressIndicators &&
                                    !this.behaviour.progressAuto &&
                                    this.columnNodes.forEach(function (t) {
                                        Array.from(t.querySelectorAll(".h5p-interactive-book-status-progress-marker > input[type=checkbox]")).forEach(function (t) {
                                            return (t.checked = !1);
                                        });
                                    });
                            },
                        },
                        {
                            key: "createPageContent",
                            value: function () {
                                var t = document.createElement("div");
                                return (
                                    t.classList.add("h5p-interactive-book-content"),
                                    this.columnNodes.forEach(function (e) {
                                        t.appendChild(e);
                                    }),
                                    this.setChapterOrder(this.parent.getActiveChapter()),
                                    t
                                );
                            },
                        },
                        {
                            key: "setChapterOrder",
                            value: function (t) {
                                t < 0 ||
                                    t > this.columnNodes.length - 1 ||
                                    this.columnNodes.forEach(function (e, r) {
                                        e.classList.remove("h5p-interactive-book-previous"),
                                            e.classList.remove("h5p-interactive-book-current"),
                                            e.classList.remove("h5p-interactive-book-next"),
                                            r === t - 1 || (r === t && e.classList.add("h5p-interactive-book-current"));
                                    });
                            },
                        },
                        {
                            key: "createChapterReadCheckbox",
                            value: function (t) {
                                var e = this,
                                    r = document.createElement("input");
                                r.setAttribute("type", "checkbox"),
                                    (r.checked = t),
                                    (r.onclick = function (t) {
                                        e.parent.setChapterRead(void 0, t.target.checked);
                                    });
                                var n = document.createElement("p");
                                n.innerHTML = this.params.l10n.markAsFinished;
                                var i = document.createElement("label");
                                return i.classList.add("h5p-interactive-book-status-progress-marker"), i.appendChild(r), i.appendChild(n), i;
                            },
                        },
                        {
                            key: "injectSectionId",
                            value: function (t, e) {
                                for (var r = e.getElementsByClassName("h5p-column-content"), n = 0; n < t.length; n++) r[n].id = "h5p-interactive-book-section-".concat(t[n].instance.subContentId);
                            },
                        },
                        {
                            key: "preloadChapter",
                            value: function (t) {
                                this.initializeChapter(t), this.initializeChapter(t + 1);
                            },
                        },
                        {
                            key: "initializeChapter",
                            value: function (t) {
                                if (!(t < 0 || t > this.chapters.length - 1)) {
                                    var e = this.chapters[t];
                                    if (e.isSummary) {
                                        var r = this.columnNodes[t];
                                        return e.isInitialized && (e.instance.setChapters(this.getChapters(!1)), (r.innerHTML = "")), e.instance.addSummaryPage(H5P.jQuery(r)), void (e.isInitialized = !0);
                                    }
                                    if (!e.isInitialized) {
                                        var n = this.columnNodes[t];
                                        if ((e.instance.attach(H5P.jQuery(n)), this.injectSectionId(e.sections, n), this.behaviour.progressIndicators && !this.behaviour.progressAuto)) {
                                            var i = !!this.previousState && this.previousState.chapters[t].completed;
                                            n.appendChild(this.createChapterReadCheckbox(i));
                                        }
                                        e.isInitialized = !0;
                                    }
                                }
                            },
                        },
                        {
                            key: "createColumns",
                            value: function (t, r, n) {
                                var i = this,
                                    o = (n = H({}, n)).previousState && Object.keys(n.previousState).length > 0 ? n.previousState : null,
                                    a = e.extractFragmentsFromURL(this.parent.validateFragments, this.parent.hashWindow);
                                0 === Object.keys(a).length && n && o && o.urlFragments && (a = o.urlFragments);
                                var s = [];
                                this.chapters = s;
                                for (
                                    var c = function (e) {
                                            var a = document.createElement("div"),
                                                c = B(B({}, n), {}, { metadata: B({}, n.metadata), previousState: o ? o.chapters[e].state : {} }),
                                                u = H5P.newRunnable(t.chapters[e], r, void 0, void 0, c);
                                            i.parent.bubbleUp(u, "resize", i.parent);
                                            var l = {
                                                isInitialized: !1,
                                                instance: u,
                                                title: t.chapters[e].metadata.title,
                                                completed: !!o && o.chapters[e].completed,
                                                tasksLeft: o ? o.chapters[e].tasksLeft : 0,
                                                isSummary: !1,
                                                sections: u.getInstances().map(function (r, n) {
                                                    return { content: t.chapters[e].params.content[n].content, instance: r, isTask: !1 };
                                                }),
                                            };
                                            a.classList.add("h5p-interactive-book-chapter"),
                                                (a.id = "h5p-interactive-book-chapter-".concat(u.subContentId)),
                                                (l.maxTasks = 0),
                                                (l.tasksLeft = 0),
                                                l.sections.forEach(function (t, r) {
                                                    H5P.Column.isTask(t.instance) &&
                                                        ((t.isTask = !0), l.maxTasks++, l.tasksLeft++, i.behaviour.progressIndicators && ((t.taskDone = !!o && o.chapters[e].sections[r].taskDone), t.taskDone && l.tasksLeft--));
                                                }),
                                                s.push(l),
                                                i.columnNodes.push(a);
                                        },
                                        u = 0;
                                    u < t.chapters.length;
                                    u++
                                )
                                    c(u);
                                if (this.parent.hasSummary(s)) {
                                    var l = document.createElement("div"),
                                        p = new j(B({}, t), this.parent, this.getChapters(!1));
                                    this.parent.bubbleUp(p, "resize", this.parent);
                                    var f = { isInitialized: !1, instance: p, title: this.l10n.summaryHeader, isSummary: !0, sections: [] };
                                    l.classList.add("h5p-interactive-book-chapter"), (l.id = "h5p-interactive-book-chapter-summary"), (f.maxTasks = f.tasksLeft), s.push(f), this.columnNodes.push(l);
                                }
                                if (a.chapter && a.h5pbookid == this.parent.contentId) {
                                    var h = this.findChapterIndex(a.chapter);
                                    this.parent.setActiveChapter(h);
                                    var d = a.headerNumber;
                                    return (
                                        a.section &&
                                            setTimeout(function () {
                                                i.redirectSection(a.section, d), i.parent.hasCover() && i.parent.cover.removeCover();
                                            }, 1e3),
                                        h
                                    );
                                }
                                return 0;
                            },
                        },
                        {
                            key: "redirectSection",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if ("top" === t) this.parent.trigger("scrollToTop");
                                else {
                                    var r = document.getElementById(t);
                                    if (r) {
                                        if (null !== e) {
                                            var n = r.querySelectorAll("h2, h3");
                                            n[e] && (r = n[e]);
                                        }
                                        var i = document.createElement("div");
                                        i.setAttribute("tabindex", "-1"),
                                            r.parentNode.insertBefore(i, r),
                                            i.focus(),
                                            i.addEventListener("blur", function () {
                                                i.parentNode.removeChild(i);
                                            }),
                                            (this.targetPage.redirectFromComponent = !1),
                                            setTimeout(function () {
                                                r.scrollIntoView(!0);
                                            }, 100);
                                    }
                                }
                            },
                        },
                        {
                            key: "findChapterIndex",
                            value: function (t) {
                                var e = -1;
                                return (
                                    this.columnNodes.forEach(function (r, n) {
                                        -1 === e && r.id === t && (e = n);
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "changeChapter",
                            value: function (t, e) {
                                var r = this;
                                if (!this.columnNodes[this.parent.getActiveChapter()].classList.contains("h5p-interactive-book-animate")) {
                                    this.targetPage = e;
                                    var n = this.parent.getActiveChapter(),
                                        i = this.parent.getChapterId(this.targetPage.chapter),
                                        o = n !== i;
                                    if ((t || this.parent.updateChapterProgress(n, o), this.preloadChapter(i), i < this.columnNodes.length)) {
                                        var a = this.columnNodes[n],
                                            s = this.columnNodes[i];
                                        if (o && !t) {
                                            this.parent.setActiveChapter(i);
                                            var c = n < i ? "next" : "previous";
                                            s.classList.add("h5p-interactive-book-".concat(c)),
                                                s.classList.add("h5p-interactive-book-animate"),
                                                a.classList.add("h5p-interactive-book-animate"),
                                                setTimeout(function () {
                                                    "previous" === c ? a.classList.add("h5p-interactive-book-next") : (a.classList.remove("h5p-interactive-book-current"), a.classList.add("h5p-interactive-book-previous")),
                                                        s.classList.remove("h5p-interactive-book-".concat(c));
                                                }, 1),
                                                setTimeout(function () {
                                                    a.classList.remove("h5p-interactive-book-next"),
                                                        a.classList.remove("h5p-interactive-book-previous"),
                                                        a.classList.remove("h5p-interactive-book-current"),
                                                        s.classList.add("h5p-interactive-book-current"),
                                                        s.classList.remove("h5p-interactive-book-animate"),
                                                        a.classList.remove("h5p-interactive-book-animate"),
                                                        r.redirectSection(r.targetPage.section, r.targetPage.headerNumber),
                                                        r.parent.trigger("resize");
                                                }, 250);
                                        } else
                                            this.parent.cover && !this.parent.cover.hidden
                                                ? this.parent.on("coverRemoved", function () {
                                                      r.redirectSection(r.targetPage.section, r.targetPage.headerNumber);
                                                  })
                                                : this.redirectSection(this.targetPage.section, this.targetPage.headerNumber);
                                        this.parent.sideBar.redirectHandler(i);
                                    }
                                }
                            },
                        },
                        {
                            key: "updateFooter",
                            value: function () {
                                if (0 !== this.chapters.length) {
                                    var t = this.parent.getActiveChapter(),
                                        e = this.columnNodes[t],
                                        r = this.parent.shouldFooterBeHidden(e.clientHeight),
                                        n = this.parent.statusBarFooter.wrapper.parentNode;
                                    r ? n !== this.content && this.content.appendChild(this.parent.statusBarFooter.wrapper) : n !== this.parent.$wrapper && this.parent.$wrapper.append(this.parent.statusBarFooter.wrapper);
                                }
                            },
                        },
                        {
                            key: "toggleNavigationMenu",
                            value: function () {
                                this.container.classList.toggle("h5p-interactive-book-navigation-open");
                            },
                        },
                    ]),
                    n && W(r.prototype, n),
                    i && W(r, i),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    a
                );
            })();
            r(634);
            function X(t) {
                return (
                    (X =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    X(t)
                );
            }
            var J = [
                "read",
                "displayTOC",
                "hideTOC",
                "nextPage",
                "previousPage",
                "chapterCompleted",
                "partCompleted",
                "incompleteChapter",
                "navigateToTop",
                "markAsFinished",
                "fullscreen",
                "exitFullscreen",
                "bookProgressSubtext",
                "interactionsProgressSubtext",
                "submitReport",
                "restartLabel",
                "summaryHeader",
                "allInteractions",
                "unansweredInteractions",
                "scoreText",
                "leftOutOfTotalCompleted",
                "noInteractions",
                "score",
                "summaryAndSubmit",
                "noChapterInteractionBoldText",
                "noChapterInteractionText",
                "yourAnswersAreSubmittedForReview",
                "bookProgress",
                "interactionsProgress",
                "totalScoreLabel",
            ];
            function Y(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    i = (function (t, e) {
                        if (null == t) return {};
                        var r,
                            n,
                            i = {},
                            o = Object.keys(t);
                        for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                        return i;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
                }
                return i;
            }
            function $(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function K(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? $(Object(r), !0).forEach(function (e) {
                              Q(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : $(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            function Q(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function Z() {
                return (
                    (Z =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    Z.apply(this, arguments)
                );
            }
            function tt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function et(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function rt(t, e) {
                return (
                    (rt =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    rt(t, e)
                );
            }
            function nt(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var r,
                        n = at(t);
                    if (e) {
                        var i = at(this).constructor;
                        r = Reflect.construct(n, arguments, i);
                    } else r = n.apply(this, arguments);
                    return it(this, r);
                };
            }
            function it(t, e) {
                if (e && ("object" === X(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return ot(t);
            }
            function ot(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function at(t) {
                return (
                    (at = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    at(t)
                );
            }
            var st = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && rt(t, e);
                })(a, H5P.EventDispatcher);
                var r,
                    n,
                    i,
                    o = nt(a);
                function a(t, r) {
                    var n,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    tt(this, a);
                    var s = ot((n = o.call(this)));
                    (n.contentId = r),
                        (n.previousState = i.previousState),
                        (n.activeChapter = 0),
                        (n.newHandler = {}),
                        (n.completed = !1),
                        (n.params = a.sanitizeConfig(t)),
                        (n.l10n = n.params.l10n),
                        (n.params.behaviour = n.params.behaviour || {}),
                        (n.mainWrapper = null),
                        (n.currentRatio = null),
                        (n.smallSurface = "h5p-interactive-book-small"),
                        (n.mediumSurface = "h5p-interactive-book-medium"),
                        (n.largeSurface = "h5p-interactive-book-large"),
                        (n.chapters = []),
                        (n.isSubmitButtonEnabled = !1),
                        (n.isAnswerUpdated = !1),
                        void 0 !== i.isScoringEnabled || void 0 !== i.isReportingEnabled
                            ? (n.isSubmitButtonEnabled = i.isScoringEnabled || i.isReportingEnabled)
                            : void 0 !== H5PIntegration.reportingIsEnabled && (n.isSubmitButtonEnabled = H5PIntegration.reportingIsEnabled),
                        (n.params.behaviour.enableSolutionsButton = !1),
                        (n.params.behaviour.enableRetry = !1),
                        (n.getAnswerGiven = function () {
                            return n.chapters.reduce(function (t, e) {
                                return "function" == typeof e.instance.getAnswerGiven ? t && e.instance.getAnswerGiven() : t;
                            }, !0);
                        }),
                        (n.getScore = function () {
                            return n.chapters.length > 0
                                ? n.chapters.reduce(function (t, e) {
                                      return "function" == typeof e.instance.getScore ? t + e.instance.getScore() : t;
                                  }, 0)
                                : (n.previousState && n.previousState.score) || 0;
                        }),
                        (n.getMaxScore = function () {
                            return n.chapters.length > 0
                                ? n.chapters.reduce(function (t, e) {
                                      return "function" == typeof e.instance.getMaxScore ? t + e.instance.getMaxScore() : t;
                                  }, 0)
                                : (n.previousState && n.previousState.maxScore) || 0;
                        }),
                        (n.showSolutions = function () {
                            n.chapters.forEach(function (t) {
                                "function" == typeof t.instance.toggleReadSpeaker && t.instance.toggleReadSpeaker(!0),
                                    "function" == typeof t.instance.showSolutions && t.instance.showSolutions(),
                                    "function" == typeof t.instance.toggleReadSpeaker && t.instance.toggleReadSpeaker(!1);
                            });
                        }),
                        (n.resetTask = function () {
                            n.hasValidChapters() &&
                                (n.chapters.forEach(function (t, e) {
                                    t.isInitialized &&
                                        !t.isSummary &&
                                        ("function" == typeof t.instance.resetTask && t.instance.resetTask(),
                                        (t.tasksLeft = t.maxTasks),
                                        t.sections.forEach(function (t) {
                                            return (t.taskDone = !1);
                                        }),
                                        n.setChapterRead(e, !1));
                                }),
                                n.setActivityStarted(!0),
                                n.pageContent.resetChapters(),
                                n.sideBar.resetIndicators(),
                                n.trigger("newChapter", { h5pbookid: n.contentId, chapter: n.pageContent.columnNodes[0].id, section: "top" }),
                                n.hasCover() && n.displayCover(n.mainWrapper),
                                (n.isAnswerUpdated = !1));
                        }),
                        (n.getXAPIData = function () {
                            var t = n.createXAPIEventTemplate("answered");
                            return (
                                n.addQuestionToXAPI(t),
                                t.setScoredResult(n.getScore(), n.getMaxScore(), ot(n), !0, n.getScore() === n.getMaxScore()),
                                {
                                    statement: t.data.statement,
                                    children: n.getXAPIDataFromChildren(
                                        n.chapters.map(function (t) {
                                            return t.instance;
                                        })
                                    ),
                                }
                            );
                        }),
                        (n.getXAPIDataFromChildren = function (t) {
                            return t
                                .map(function (t) {
                                    if ("function" == typeof t.getXAPIData) return t.getXAPIData();
                                })
                                .filter(function (t) {
                                    return !!t;
                                });
                        }),
                        (n.addQuestionToXAPI = function (t) {
                            Z(t.getVerifiedStatementValue(["object", "definition"]), n.getxAPIDefinition());
                        }),
                        (n.getxAPIDefinition = function () {
                            return { interactionType: "compound", type: "http://adlnet.gov/expapi/activities/cmi.interaction", description: { "en-US": "" } };
                        }),
                        (n.getCurrentState = function () {
                            var t = n.chapters
                                .filter(function (t) {
                                    return !t.isSummary;
                                })
                                .map(function (t) {
                                    return {
                                        completed: t.completed,
                                        sections: t.sections.map(function (t) {
                                            return { taskDone: t.taskDone };
                                        }),
                                        state: t.instance.getCurrentState(),
                                    };
                                });
                            return { urlFragments: e.extractFragmentsFromURL(n.validateFragments, n.hashWindow), chapters: t, score: n.getScore(), maxScore: n.getMaxScore() };
                        }),
                        (n.getContext = function () {
                            return n.cover && !n.cover.hidden ? {} : { type: "page", value: n.activeChapter + 1 };
                        }),
                        (n.hasCover = function () {
                            return n.cover && n.cover.container;
                        }),
                        (n.hasSummary = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.chapters;
                            return n.hasChaptersTasks(t) && n.params.behaviour.displaySummary && !0 === n.params.behaviour.displaySummary;
                        }),
                        (n.hasChaptersTasks = function (t) {
                            return (
                                t.filter(function (t) {
                                    return (
                                        t.sections.filter(function (t) {
                                            return !0 === t.isTask;
                                        }).length > 0
                                    );
                                }).length > 0
                            );
                        }),
                        (n.hasValidChapters = function () {
                            return n.params.chapters.length > 0;
                        }),
                        (n.getActiveChapter = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return t ? n.chapters[n.activeChapter] : n.activeChapter;
                        }),
                        (n.setActiveChapter = function (t) {
                            (t = parseInt(t)), isNaN(t) || (n.activeChapter = t);
                        }),
                        (n.validateFragments = function (t) {
                            return void 0 !== t.chapter && String(t.h5pbookid) === String(s.contentId);
                        }),
                        (n.bubbleUp = function (t, e, r) {
                            t.on(e, function (t) {
                                (r.bubblingUpwards = !0), r.trigger(e, t), (r.bubblingUpwards = !1);
                            });
                        }),
                        (n.isMenuOpen = function () {
                            return n.statusBarHeader.isMenuOpen();
                        }),
                        (n.isSmallSurface = function () {
                            return n.mainWrapper && n.mainWrapper.hasClass(n.smallSurface);
                        }),
                        (n.getRatio = function () {
                            return n.mainWrapper.width() / parseFloat(n.mainWrapper.css("font-size"));
                        }),
                        (n.setWrapperClassFromRatio = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.getRatio();
                            e !== n.currentRatio &&
                                (n.breakpoints().forEach(function (t) {
                                    t.shouldAdd(e) ? n.mainWrapper.addClass(t.className) : n.mainWrapper.removeClass(t.className);
                                }),
                                (n.currentRatio = e));
                        }),
                        (n.resize = function () {
                            if (n.pageContent && n.hasValidChapters() && n.mainWrapper) {
                                n.setWrapperClassFromRatio(n.mainWrapper);
                                var t = n.getActiveChapter(),
                                    e = n.pageContent.columnNodes[t];
                                null !== e.offsetParent &&
                                    (n.bubblingUpwards || n.pageContent.chapters[t].instance.trigger("resize"),
                                    n.pageContent.content.style.height === "".concat(e.offsetHeight, "px") ||
                                        e.classList.contains("h5p-interactive-book-animate") ||
                                        ((n.pageContent.content.style.height = "".concat(e.offsetHeight, "px")),
                                        n.pageContent.updateFooter(),
                                        setTimeout(function () {
                                            n.trigger("resize");
                                        }, 10)));
                            }
                        }),
                        n.on("resize", n.resize, ot(n)),
                        n.on("toggleMenu", function () {
                            n.pageContent.toggleNavigationMenu(),
                                n.statusBarHeader.menuToggleButton.setAttribute("aria-expanded", n.statusBarHeader.menuToggleButton.classList.toggle("h5p-interactive-book-status-menu-active") ? "true" : "false"),
                                setTimeout(function () {
                                    n.trigger("resize");
                                }, 150);
                        }),
                        n.on("scrollToTop", function () {
                            if (!0 === H5P.isFullscreen) {
                                var t = n.pageContent.container;
                                t.scrollBy(0, -t.scrollHeight);
                            } else n.statusBarHeader.wrapper.scrollIntoView(!0);
                        }),
                        n.on("newChapter", function (t) {
                            if (!n.pageContent.columnNodes[n.getActiveChapter()].classList.contains("h5p-interactive-book-animate")) {
                                if (((n.newHandler = t.data), (t.data.newHash = e.createFragmentsString(n.newHandler)), (n.newHandler.redirectFromComponent = !0), n.getChapterId(t.data.chapter) === n.activeChapter))
                                    if (e.areFragmentsEqual(t.data, e.extractFragmentsFromURL(n.validateFragments, n.hashWindow), ["h5pbookid", "chapter", "section", "headerNumber"])) return void n.pageContent.changeChapter(!1, t.data);
                                if (n.params.behaviour.progressAuto) {
                                    var r = n.getChapterId(n.newHandler.chapter);
                                    n.isFinalChapterWithoutTask(r) && n.setChapterRead(r);
                                }
                                H5P.trigger(ot(n), "changeHash", t.data), H5P.trigger(ot(n), "scrollToTop");
                            }
                        }),
                        (n.isCurrentChapterRead = function () {
                            return n.isChapterRead(n.chapters[n.activeChapter], n.params.behaviour.progressAuto);
                        }),
                        (n.isChapterRead = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.params.behaviour.progressAuto;
                            return t.completed || (e && 0 === t.tasksLeft);
                        }),
                        (n.isFinalChapterWithoutTask = function (t) {
                            return (
                                0 === n.chapters[t].maxTasks &&
                                n.chapters
                                    .slice(0, t)
                                    .concat(n.chapters.slice(t + 1))
                                    .every(function (t) {
                                        return 0 === t.tasksLeft;
                                    })
                            );
                        }),
                        (n.setChapterRead = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.activeChapter,
                                e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            n.handleChapterCompletion(t, e), n.sideBar.updateChapterProgressIndicator(t, e ? "DONE" : n.hasChapterStartedTasks(n.chapters[t]) ? "STARTED" : "BLANK");
                        }),
                        (n.hasChapterStartedTasks = function (t) {
                            return (
                                t.sections.filter(function (t) {
                                    return t.taskDone;
                                }).length > 0
                            );
                        }),
                        (n.getChapterStatus = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.params.behaviour.progressAuto,
                                r = "BLANK";
                            return n.isChapterRead(t, e) ? (r = "DONE") : n.hasChapterStartedTasks(t) && (r = "STARTED"), r;
                        }),
                        (n.updateChapterProgress = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (n.params.behaviour.progressIndicators) {
                                var r,
                                    i = n.chapters[t];
                                "DONE" === (r = i.maxTasks ? n.getChapterStatus(i) : n.isChapterRead(i) && e ? "DONE" : "BLANK") && n.handleChapterCompletion(t), n.sideBar.updateChapterProgressIndicator(t, r);
                            }
                        }),
                        (n.getChapterId = function (t) {
                            return (
                                (t = t.replace("h5p-interactive-book-chapter-", "")),
                                n.chapters
                                    .map(function (t) {
                                        return t.instance.subContentId;
                                    })
                                    .indexOf(t)
                            );
                        }),
                        (n.handleChapterCompletion = function (t) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = n.chapters[t];
                            if (!0 !== r.isSummary) {
                                if (!e) return (r.completed = !1), (n.completed = !1), void n.trigger("bookCompleted", { completed: n.completed });
                                r.completed || ((r.completed = !0), r.instance.triggerXAPIScored(r.instance.getScore(), r.instance.getMaxScore(), "completed")),
                                    !n.completed &&
                                        n.chapters
                                            .filter(function (t) {
                                                return !t.isSummary;
                                            })
                                            .every(function (t) {
                                                return t.completed;
                                            }) &&
                                        ((n.completed = !0), n.trigger("bookCompleted", { completed: n.completed }));
                            }
                        }),
                        (n.shouldFooterBeHidden = function () {
                            return n.isFullscreen;
                        }),
                        (n.getContainerWidth = function () {
                            return n.pageContent && n.pageContent.container ? n.pageContent.container.offsetWidth : 0;
                        }),
                        (n.changeChapter = function (t) {
                            n.pageContent.changeChapter(t, n.newHandler), n.statusBarHeader.updateStatusBar(), n.statusBarFooter.updateStatusBar(), (n.newHandler.redirectFromComponent = !1);
                        }),
                        (n.breakpoints = function () {
                            return [
                                {
                                    className: n.smallSurface,
                                    shouldAdd: function (t) {
                                        return t < 43;
                                    },
                                },
                                {
                                    className: n.mediumSurface,
                                    shouldAdd: function (t) {
                                        return t >= 43 && t < 60;
                                    },
                                },
                                {
                                    className: n.largeSurface,
                                    shouldAdd: function (t) {
                                        return t >= 60;
                                    },
                                },
                            ];
                        }),
                        H5P.on(ot(n), "respondChangeHash", function () {
                            var t = e.extractFragmentsFromURL(s.validateFragments, n.hashWindow);
                            t.h5pbookid && String(t.h5pbookid) === String(s.contentId) && n.redirectChapter(t);
                        }),
                        H5P.on(ot(n), "changeHash", function (t) {
                            String(t.data.h5pbookid) === String(n.contentId) && (n.hashWindow.location.hash = t.data.newHash);
                        }),
                        H5P.externalDispatcher.on("xAPI", function (t) {
                            var e = ["answered", "completed", "interacted", "attempted"].indexOf(t.getVerb()) > -1,
                                r = s.chapters.length;
                            s !== this && e && r && s.setSectionStatusByID(this.subContentId || this.contentData.subContentId, s.activeChapter);
                        }),
                        (n.redirectChapter = function (t) {
                            n.newHandler.redirectFromComponent ||
                                (t.h5pbookid && String(t.h5pbookid) === String(s.contentId)
                                    ? (s.newHandler = t)
                                    : (s.newHandler = { chapter: "h5p-interactive-book-chapter-".concat(s.chapters[0].instance.subContentId), h5pbookid: s.h5pbookid })),
                                s.changeChapter(!1);
                        }),
                        (n.setSectionStatusByID = function (t, e) {
                            n.chapters[e].sections.forEach(function (r, i) {
                                var o = r.instance;
                                o.subContentId !== t || r.taskDone || ((r.taskDone = !o.getAnswerGiven || o.getAnswerGiven()), n.sideBar.setSectionMarker(e, i), r.taskDone && (n.chapters[e].tasksLeft -= 1), n.updateChapterProgress(e));
                            });
                        }),
                        (n.addHashListener = function (t) {
                            t.addEventListener("hashchange", function (t) {
                                H5P.trigger(ot(n), "respondChangeHash", t);
                            }),
                                (n.hashWindow = t);
                        });
                    try {
                        n.addHashListener(top);
                    } catch (t) {
                        if (!(t instanceof DOMException)) throw t;
                        n.addHashListener(window);
                    }
                    (n.displayCover = function (t) {
                        n.hideAllElements(!0), t.append(n.cover.container), t.addClass("covered");
                    }),
                        (n.attach = function (t) {
                            (n.mainWrapper = t),
                                t.addClass("h5p-interactive-book h5p-scrollable-fullscreen"),
                                n.isEdge18orEarlier() && t.addClass("edge-18"),
                                n.setWrapperClassFromRatio(n.mainWrapper),
                                n.cover && n.displayCover(t),
                                t.append(n.statusBarHeader.wrapper);
                            var e = n.pageContent.container.firstChild;
                            e && n.pageContent.container.insertBefore(n.sideBar.container, e),
                                t.append(n.pageContent.container),
                                t.append(n.statusBarFooter.wrapper),
                                (n.$wrapper = t),
                                n.params.behaviour.defaultTableOfContents && !n.isSmallSurface() && n.trigger("toggleMenu"),
                                n.pageContent.updateFooter();
                        }),
                        (n.isEdge18orEarlier = function () {
                            var t = window.navigator.userAgent,
                                e = t.indexOf("Edge/");
                            if (e < 0) return !1;
                            var r = t.substring(e + 5, t.indexOf(".", e));
                            return parseInt(r) <= 18;
                        }),
                        (n.hideAllElements = function (t) {
                            var e = [this.statusBarHeader.wrapper, this.statusBarFooter.wrapper, this.pageContent.container];
                            t
                                ? e.forEach(function (t) {
                                      t.classList.add("h5p-content-hidden"), t.classList.add("h5p-interactive-book-cover-present");
                                  })
                                : e.forEach(function (t) {
                                      t.classList.remove("h5p-content-hidden"), t.classList.remove("h5p-interactive-book-cover-present");
                                  });
                        }),
                        n.params.showCoverPage && (n.cover = new P(n.params.bookCover, i.metadata.title, n.l10n.read, r, ot(n)));
                    var c = K(K({}, i), {}, { parent: ot(n) });
                    return (
                        (n.pageContent = new q(n.params, r, c, ot(n), { l10n: { markAsFinished: n.l10n.markAsFinished }, behaviour: n.params.behaviour })),
                        (n.chapters = n.pageContent.getChapters()),
                        (n.sideBar = new p(n.params, r, i.metadata.title, ot(n))),
                        n.chapters.forEach(function (t, e) {
                            n.setChapterRead(e, t.completed);
                        }),
                        (n.statusBarHeader = new b(r, n.chapters.length, ot(n), { l10n: n.l10n, a11y: n.params.a11y, behaviour: n.params.behaviour, displayFullScreenButton: !0 }, "h5p-interactive-book-status-header")),
                        (n.statusBarFooter = new b(r, n.chapters.length, ot(n), { l10n: n.l10n, a11y: n.params.a11y, behaviour: n.params.behaviour }, "h5p-interactive-book-status-footer")),
                        n.hasCover()
                            ? (n.hideAllElements(!0),
                              n.on("coverRemoved", function () {
                                  n.hideAllElements(!1), n.trigger("resize"), n.setActivityStarted(), n.statusBarHeader.progressBar.progress.focus();
                              }))
                            : n.setActivityStarted(),
                        n.hasValidChapters() && (n.statusBarHeader.updateStatusBar(), n.statusBarFooter.updateStatusBar()),
                        n
                    );
                }
                return (
                    (r = a),
                    (i = [
                        {
                            key: "sanitizeConfig",
                            value: function (t) {
                                var e = t.read,
                                    r = void 0 === e ? "Read" : e,
                                    n = t.displayTOC,
                                    i = void 0 === n ? "Display &#039;Table of contents&#039;" : n,
                                    o = t.hideTOC,
                                    a = void 0 === o ? "Hide &#039;Table of contents&#039;" : o,
                                    s = t.nextPage,
                                    c = void 0 === s ? "Next page" : s,
                                    u = t.previousPage,
                                    l = void 0 === u ? "Previous page" : u,
                                    p = t.chapterCompleted,
                                    f = void 0 === p ? "Page completed!" : p,
                                    h = t.partCompleted,
                                    d = void 0 === h ? "@pages of @total completed" : h,
                                    v = t.incompleteChapter,
                                    m = void 0 === v ? "Incomplete page" : v,
                                    g = t.navigateToTop,
                                    y = void 0 === g ? "Navigate to the top" : g,
                                    b = t.markAsFinished,
                                    S = void 0 === b ? "I have finished this page" : b,
                                    w = t.fullscreen,
                                    k = void 0 === w ? "Fullscreen" : w,
                                    x = t.exitFullscreen,
                                    C = void 0 === x ? "Exit fullscreen" : x,
                                    E = t.bookProgressSubtext,
                                    P = void 0 === E ? "@count of @total pages" : E,
                                    L = t.interactionsProgressSubtext,
                                    O = void 0 === L ? "@count of @total interactions" : L,
                                    A = t.submitReport,
                                    T = void 0 === A ? "Submit Report" : A,
                                    _ = t.restartLabel,
                                    I = void 0 === _ ? "Restart" : _,
                                    F = t.summaryHeader,
                                    M = void 0 === F ? "Summary" : F,
                                    j = t.allInteractions,
                                    N = void 0 === j ? "All interactions" : j,
                                    R = t.unansweredInteractions,
                                    B = void 0 === R ? "Unanswered interactions" : R,
                                    D = t.scoreText,
                                    H = void 0 === D ? "@score / @maxscore" : D,
                                    W = t.leftOutOfTotalCompleted,
                                    U = void 0 === W ? "@left of @max interactinos completed" : W,
                                    z = t.noInteractions,
                                    V = void 0 === z ? "No interactions" : z,
                                    G = t.score,
                                    q = void 0 === G ? "Score" : G,
                                    X = t.summaryAndSubmit,
                                    $ = void 0 === X ? "Summary & submit" : X,
                                    K = t.noChapterInteractionBoldText,
                                    Q = void 0 === K ? "You have not interacted with any pages." : K,
                                    Z = t.noChapterInteractionText,
                                    tt = void 0 === Z ? "You have to interact with at least one page before you can see the summary." : Z,
                                    et = t.yourAnswersAreSubmittedForReview,
                                    rt = void 0 === et ? "Your answers are submitted for review!" : et,
                                    nt = t.bookProgress,
                                    it = void 0 === nt ? "Book progress" : nt,
                                    ot = t.interactionsProgress,
                                    at = void 0 === ot ? "Interactions progress" : ot,
                                    st = t.totalScoreLabel,
                                    ct = void 0 === st ? "Total score" : st,
                                    ut = Y(t, J);
                                return (
                                    (ut.chapters = ut.chapters
                                        .map(function (t) {
                                            return (
                                                (t.params.content = t.params.content.filter(function (t) {
                                                    return t.content;
                                                })),
                                                t
                                            );
                                        })
                                        .filter(function (t) {
                                            return t.params.content && t.params.content.length > 0;
                                        })),
                                    (ut.behaviour.displaySummary = void 0 === ut.behaviour.displaySummary || ut.behaviour.displaySummary),
                                    (ut.l10n = {
                                        read: r,
                                        displayTOC: i,
                                        hideTOC: a,
                                        nextPage: c,
                                        previousPage: l,
                                        chapterCompleted: f,
                                        partCompleted: d,
                                        incompleteChapter: m,
                                        navigateToTop: y,
                                        markAsFinished: S,
                                        fullscreen: k,
                                        exitFullscreen: C,
                                        bookProgressSubtext: P,
                                        interactionsProgressSubtext: O,
                                        submitReport: T,
                                        restartLabel: I,
                                        summaryHeader: M,
                                        allInteractions: N,
                                        unansweredInteractions: B,
                                        scoreText: H,
                                        leftOutOfTotalCompleted: U,
                                        noInteractions: V,
                                        score: q,
                                        summaryAndSubmit: $,
                                        noChapterInteractionBoldText: Q,
                                        noChapterInteractionText: tt,
                                        yourAnswersAreSubmittedForReview: rt,
                                        bookProgress: it,
                                        interactionsProgress: at,
                                        totalScoreLabel: ct,
                                    }),
                                    ut
                                );
                            },
                        },
                    ]),
                    (n = null) && et(r.prototype, n),
                    i && et(r, i),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    a
                );
            })();
            (H5P = H5P || {}), (H5P.InteractiveBook = st);
        })();
})();

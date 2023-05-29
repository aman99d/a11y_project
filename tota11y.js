﻿/*!
 * tota11y v0.2.0
 * http://khan.github.io/tota11y
 * 
 * Includes Accessibility Developer Tools
 * http://github.com/GoogleChrome/accessibility-developer-tools
 * 
 * Copyright (c) 2019 Khan Academy
 * Released under the MIT license
 * http://github.com/Khan/tota11y/blob/master/LICENSE.txt
 * 
 * Date: 2019-04-22
 * 
 */!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(zt,Xt,e){var Kt;
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
! function(e, t) {
    "use strict";
    "object" == typeof zt.exports ? zt.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
        "use strict";

        function h(e) {
            return null != e && e === e.window
        }
        var t = [],
            A = E.document,
            r = Object.getPrototypeOf,
            s = t.slice,
            m = t.concat,
            l = t.push,
            o = t.indexOf,
            n = {},
            a = n.toString,
            b = n.hasOwnProperty,
            i = b.toString,
            u = i.call(Object),
            v = {},
            y = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            c = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var r, o = (t = t || A).createElement("script");
            if (o.text = e, n)
                for (r in c) n[r] && (o[r] = n[r]);
            t.head.appendChild(o).parentNode.removeChild(o)
        }

        function _(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e
        }
        var d = "3.3.1",
            C = function(e, t) {
                return new C.fn.init(e, t)
            },
            p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function f(e) {
            var t = !!e && "length" in e && e.length,
                n = _(e);
            return !y(e) && !h(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: d,
            constructor: C,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(n) {
                return this.pushStack(C.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, o, a, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" == typeof i || y(i) || (i = {}), s === l && (i = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = i[t], i !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (a = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, i[t] = C.extend(u, a, r)) : void 0 !== r && (i[t] = r));
            return i
        }, C.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== a.call(e)) && (!(t = r(e)) || "function" == typeof(n = b.call(t, "constructor") && t.constructor) && i.call(n) === u)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                x(e)
            },
            each: function(e, t) {
                var n, r = 0;
                if (f(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(p, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : o.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, a = e.length, i = !n; o < a; o++) !t(e[o], o) != i && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, a = 0,
                    i = [];
                if (f(e))
                    for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && i.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && i.push(o);
                return m.apply([], i)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var g =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n) {
    function d(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    }

    function o() {
        w()
    }
    var e, f, x, a, i, g, p, h, _, l, u, w, E, s, A, m, c, b, v, C = "sizzle" + 1 * new Date,
        y = n.document,
        T = 0,
        r = 0,
        R = ie(),
        S = ie(),
        k = ie(),
        N = function(e, t) {
            return e === t && (u = !0), 0
        },
        O = {}.hasOwnProperty,
        t = [],
        L = t.pop,
        I = t.push,
        P = t.push,
        D = t.slice,
        M = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
            return -1
        },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        U = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
        F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
        B = new RegExp(H + "+", "g"),
        W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        V = new RegExp("^" + H + "*," + H + "*"),
        G = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        Y = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        $ = new RegExp(F),
        z = new RegExp("^" + q + "$"),
        X = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + U),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + j + ")$", "i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        oe = ve(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        P.apply(t = D.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
    } catch (e) {
        P = {
            apply: t.length ? function(e, t) {
                I.apply(e, D.call(t))
            } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }

    function ae(e, t, n, r) {
        var o, a, i, s, l, u, c, d = t && t.ownerDocument,
            p = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
        if (!r && ((t ? t.ownerDocument || t : y) !== E && w(t), t = t || E, A)) {
            if (11 !== p && (l = Z.exec(e)))
                if (o = l[1]) {
                    if (9 === p) {
                        if (!(i = t.getElementById(o))) return n;
                        if (i.id === o) return n.push(i), n
                    } else if (d && (i = d.getElementById(o)) && v(t, i) && i.id === o) return n.push(i), n
                } else {
                    if (l[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(o)), n
                } if (f.qsa && !k[e + " "] && (!m || !m.test(e))) {
                if (1 !== p) d = t, c = e;
                else if ("object" !== t.nodeName.toLowerCase()) {
                    for ((s = t.getAttribute("id")) ? s = s.replace(ne, re) : t.setAttribute("id", s = C), a = (u = g(e)).length; a--;) u[a] = "#" + s + " " + be(u[a]);
                    c = u.join(","), d = ee.test(e) && he(t.parentNode) || t
                }
                if (c) try {
                    return P.apply(n, d.querySelectorAll(c)), n
                } catch (e) {} finally {
                    s === C && t.removeAttribute("id")
                }
            }
        }
        return h(e.replace(W, "$1"), t, n, r)
    }

    function ie() {
        var r = [];
        return function e(t, n) {
            return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
    }

    function se(e) {
        return e[C] = !0, e
    }

    function le(e) {
        var t = E.createElement("fieldset");
        try {
            return !!e(t)
        } catch (e) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
        }
    }

    function ue(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
    }

    function ce(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function de(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function pe(n) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function fe(t) {
        return function(e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
    }

    function ge(i) {
        return se(function(a) {
            return a = +a, se(function(e, t) {
                for (var n, r = i([], e.length, a), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function he(e) {
        return e && void 0 !== e.getElementsByTagName && e
    }
    for (e in f = ae.support = {}, i = ae.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, w = ae.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : y;
            return r !== E && 9 === r.nodeType && r.documentElement && (s = (E = r).documentElement, A = !i(E), y !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.attributes = le(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = le(function(e) {
                return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = Q.test(E.getElementsByClassName), f.getById = le(function(e) {
                return s.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length
            }), f.getById ? (x.filter.ID = function(e) {
                var t = e.replace(te, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function(e) {
                var n = e.replace(te, d);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var n, r, o, a = t.getElementById(e);
                    if (a) {
                        if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                        for (o = t.getElementsByName(e), r = 0; a = o[r++];)
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                    }
                    return []
                }
            }), x.find.TAG = f.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    a = t.getElementsByTagName(e);
                if ("*" !== e) return a;
                for (; n = a[o++];) 1 === n.nodeType && r.push(n);
                return r
            }, x.find.CLASS = f.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e)
            }, c = [], m = [], (f.qsa = Q.test(E.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]")
            }), le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (f.matchesSelector = Q.test(b = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                f.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), c.push("!=", F)
            }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = Q.test(s.compareDocumentPosition), v = t || Q.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === y && v(y, e) ? -1 : t === E || t.ownerDocument === y && v(y, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return u = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    i = [e],
                    s = [t];
                if (!o || !a) return e === E ? -1 : t === E ? 1 : o ? -1 : a ? 1 : l ? M(l, e) - M(l, t) : 0;
                if (o === a) return ce(e, t);
                for (n = e; n = n.parentNode;) i.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; i[r] === s[r];) r++;
                return r ? ce(i[r], s[r]) : i[r] === y ? -1 : s[r] === y ? 1 : 0
            }), E
        }, ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }, ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== E && w(e), t = t.replace(Y, "='$1']"), f.matchesSelector && A && !k[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
                var n = b.call(e, t);
                if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return 0 < ae(t, E, null, [e]).length
        }, ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && w(e), v(e, t)
        }, ae.attr = function(e, t) {
            (e.ownerDocument || e) !== E && w(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && O.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== r ? r : f.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, ae.escape = function(e) {
            return (e + "").replace(ne, re)
        }, ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (u = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(N), u) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return l = null, e
        }, a = ae.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += a(t);
            return n
        }, (x = ae.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, o) {
                    return function(e) {
                        var t = ae.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(g, e, t, h, m) {
                    var b = "nth" !== g.slice(0, 3),
                        v = "last" !== g.slice(-4),
                        y = "of-type" === e;
                    return 1 === h && 0 === m ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var r, o, a, i, s, l, u = b != v ? "nextSibling" : "previousSibling",
                            c = e.parentNode,
                            d = y && e.nodeName.toLowerCase(),
                            p = !n && !y,
                            f = !1;
                        if (c) {
                            if (b) {
                                for (; u;) {
                                    for (i = e; i = i[u];)
                                        if (y ? i.nodeName.toLowerCase() === d : 1 === i.nodeType) return !1;
                                    l = u = "only" === g && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? c.firstChild : c.lastChild], v && p) {
                                for (f = (s = (r = (o = (a = (i = c)[C] || (i[C] = {}))[i.uniqueID] || (a[i.uniqueID] = {}))[g] || [])[0] === T && r[1]) && r[2], i = s && c.childNodes[s]; i = ++s && i && i[u] || (f = s = 0) || l.pop();)
                                    if (1 === i.nodeType && ++f && i === e) {
                                        o[g] = [T, s, f];
                                        break
                                    }
                            } else if (p && (f = s = (r = (o = (a = (i = e)[C] || (i[C] = {}))[i.uniqueID] || (a[i.uniqueID] = {}))[g] || [])[0] === T && r[1]), !1 === f)
                                for (;
                                    (i = ++s && i && i[u] || (f = s = 0) || l.pop()) && ((y ? i.nodeName.toLowerCase() !== d : 1 !== i.nodeType) || !++f || (p && ((o = (a = i[C] || (i[C] = {}))[i.uniqueID] || (a[i.uniqueID] = {}))[g] = [T, f]), i !== e)););
                            return (f -= m) === h || f % h == 0 && 0 <= f / h
                        }
                    }
                },
                PSEUDO: function(e, a) {
                    var t, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return i[C] ? i(a) : 1 < i.length ? (t = [e, e, "", a], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                        for (var n, r = i(e, a), o = r.length; o--;) e[n = M(e, r[o])] = !(t[n] = r[o])
                    }) : function(e) {
                        return i(e, 0, t)
                    }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var r = [],
                        o = [],
                        s = p(e.replace(W, "$1"));
                    return s[C] ? se(function(e, t, n, r) {
                        for (var o, a = s(e, null, r, []), i = e.length; i--;)(o = a[i]) && (e[i] = !(t[i] = o))
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                    }
                }),
                has: se(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length
                    }
                }),
                contains: se(function(t) {
                    return t = t.replace(te, d),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                        }
                }),
                lang: se(function(n) {
                    return z.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return K.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ge(function() {
                    return [0]
                }),
                last: ge(function(e, t) {
                    return [t - 1]
                }),
                eq: ge(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ge(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ge(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ge(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: ge(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[e] = de(e);
    for (e in {
            submit: !0,
            reset: !0
        }) x.pseudos[e] = pe(e);

    function me() {}

    function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function ve(s, e, t) {
        var l = e.dir,
            u = e.next,
            c = u || l,
            d = t && "parentNode" === c,
            p = r++;
        return e.first ? function(e, t, n) {
            for (; e = e[l];)
                if (1 === e.nodeType || d) return s(e, t, n);
            return !1
        } : function(e, t, n) {
            var r, o, a, i = [T, p];
            if (n) {
                for (; e = e[l];)
                    if ((1 === e.nodeType || d) && s(e, t, n)) return !0
            } else
                for (; e = e[l];)
                    if (1 === e.nodeType || d)
                        if (o = (a = e[C] || (e[C] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                        else {
                            if ((r = o[c]) && r[0] === T && r[1] === p) return i[2] = r[2];
                            if ((o[c] = i)[2] = s(e, t, n)) return !0
                        } return !1
        }
    }

    function ye(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function xe(e, t, n, r, o) {
        for (var a, i = [], s = 0, l = e.length, u = null != t; s < l; s++)(a = e[s]) && (n && !n(a, r, o) || (i.push(a), u && t.push(s)));
        return i
    }

    function _e(f, g, h, m, b, e) {
        return m && !m[C] && (m = _e(m)), b && !b[C] && (b = _e(b, e)), se(function(e, t, n, r) {
            var o, a, i, s = [],
                l = [],
                u = t.length,
                c = e || function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []),
                d = !f || !e && g ? c : xe(c, s, f, n, r),
                p = h ? b || (e ? f : u || m) ? [] : t : d;
            if (h && h(d, p, n, r), m)
                for (o = xe(p, l), m(o, [], n, r), a = o.length; a--;)(i = o[a]) && (p[l[a]] = !(d[l[a]] = i));
            if (e) {
                if (b || f) {
                    if (b) {
                        for (o = [], a = p.length; a--;)(i = p[a]) && o.push(d[a] = i);
                        b(null, p = [], o, r)
                    }
                    for (a = p.length; a--;)(i = p[a]) && -1 < (o = b ? M(e, i) : s[a]) && (e[o] = !(t[o] = i))
                }
            } else p = xe(p === t ? p.splice(u, p.length) : p), b ? b(null, t, p, r) : P.apply(t, p)
        })
    }

    function we(e) {
        for (var o, t, n, r = e.length, a = x.relative[e[0].type], i = a || x.relative[" "], s = a ? 1 : 0, l = ve(function(e) {
                return e === o
            }, i, !0), u = ve(function(e) {
                return -1 < M(o, e)
            }, i, !0), c = [function(e, t, n) {
                var r = !a && (n || t !== _) || ((o = t).nodeType ? l(e, t, n) : u(e, t, n));
                return o = null, r
            }]; s < r; s++)
            if (t = x.relative[e[s].type]) c = [ve(ye(c), t)];
            else {
                if ((t = x.filter[e[s].type].apply(null, e[s].matches))[C]) {
                    for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                    return _e(1 < s && ye(c), 1 < s && be(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(W, "$1"), t, s < n && we(e.slice(s, n)), n < r && we(e = e.slice(n)), n < r && be(e))
                }
                c.push(t)
            } return ye(c)
    }
    return me.prototype = x.filters = x.pseudos, x.setFilters = new me, g = ae.tokenize = function(e, t) {
        var n, r, o, a, i, s, l, u = S[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (i = e, s = [], l = x.preFilter; i;) {
            for (a in n && !(r = V.exec(i)) || (r && (i = i.slice(r[0].length) || i), s.push(o = [])), n = !1, (r = G.exec(i)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), i = i.slice(n.length)), x.filter) !(r = X[a].exec(i)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                value: n,
                type: a,
                matches: r
            }), i = i.slice(n.length));
            if (!n) break
        }
        return t ? i.length : i ? ae.error(e) : S(e, s).slice(0)
    }, p = ae.compile = function(e, t) {
        var n, r = [],
            o = [],
            a = k[e + " "];
        if (!a) {
            for (t || (t = g(e)), n = t.length; n--;)(a = we(t[n]))[C] ? r.push(a) : o.push(a);
            (a = k(e, function(m, b) {
                function e(e, t, n, r, o) {
                    var a, i, s, l = 0,
                        u = "0",
                        c = e && [],
                        d = [],
                        p = _,
                        f = e || y && x.find.TAG("*", o),
                        g = T += null == p ? 1 : Math.random() || .1,
                        h = f.length;
                    for (o && (_ = t === E || t || o); u !== h && null != (a = f[u]); u++) {
                        if (y && a) {
                            for (i = 0, t || a.ownerDocument === E || (w(a), n = !A); s = m[i++];)
                                if (s(a, t || E, n)) {
                                    r.push(a);
                                    break
                                } o && (T = g)
                        }
                        v && ((a = !s && a) && l--, e && c.push(a))
                    }
                    if (l += u, v && u !== l) {
                        for (i = 0; s = b[i++];) s(c, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || d[u] || (d[u] = L.call(r));
                            d = xe(d)
                        }
                        P.apply(r, d), o && !e && 0 < d.length && 1 < l + b.length && ae.uniqueSort(r)
                    }
                    return o && (T = g, _ = p), c
                }
                var v = 0 < b.length,
                    y = 0 < m.length;
                return v ? se(e) : e
            }(o, r))).selector = e
        }
        return a
    }, h = ae.select = function(e, t, n, r) {
        var o, a, i, s, l, u = "function" == typeof e && e,
            c = !r && g(e = u.selector || e);
        if (n = n || [], 1 === c.length) {
            if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (i = a[0]).type && 9 === t.nodeType && A && x.relative[a[1].type]) {
                if (!(t = (x.find.ID(i.matches[0].replace(te, d), t) || [])[0])) return n;
                u && (t = t.parentNode), e = e.slice(a.shift().value.length)
            }
            for (o = X.needsContext.test(e) ? 0 : a.length; o-- && (i = a[o], !x.relative[s = i.type]);)
                if ((l = x.find[s]) && (r = l(i.matches[0].replace(te, d), ee.test(a[0].type) && he(t.parentNode) || t))) {
                    if (a.splice(o, 1), !(e = r.length && be(a))) return P.apply(n, r), n;
                    break
                }
        }
        return (u || p(e, c))(r, t, !A, n, !t || ee.test(e) && he(t.parentNode) || t), n
    }, f.sortStable = C.split("").sort(N).join("") === C, f.detectDuplicates = !!u, w(), f.sortDetached = le(function(e) {
        return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
    }), le(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ue("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), f.attributes && le(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ue("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), le(function(e) {
        return null == e.getAttribute("disabled")
    }) || ue(j, function(e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), ae
}(E);
C.find = g, C.expr = g.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = g.uniqueSort, C.text = g.getText, C.isXMLDoc = g.isXML, C.contains = g.contains, C.escapeSelector = g.escape;

function w(e, t, n) {
    for (var r = [], o = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
            if (o && C(e).is(n)) break;
            r.push(e)
        } return r
}

function T(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
}
var R = C.expr.match.needsContext;

function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
}
var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

function N(e, n, r) {
    return y(n) ? C.grep(e, function(e, t) {
        return !!n.call(e, t, e) !== r
    }) : n.nodeType ? C.grep(e, function(e) {
        return e === n !== r
    }) : "string" != typeof n ? C.grep(e, function(e) {
        return -1 < o.call(n, e) !== r
    }) : C.filter(n, e, r)
}
C.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
        return 1 === e.nodeType
    }))
}, C.fn.extend({
    find: function(e) {
        var t, n, r = this.length,
            o = this;
        if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
            for (t = 0; t < r; t++)
                if (C.contains(o[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
        return 1 < r ? C.uniqueSort(n) : n
    },
    filter: function(e) {
        return this.pushStack(N(this, e || [], !1))
    },
    not: function(e) {
        return this.pushStack(N(this, e || [], !0))
    },
    is: function(e) {
        return !!N(this, "string" == typeof e && R.test(e) ? C(e) : e || [], !1).length
    }
});
var O, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(C.fn.init = function(e, t, n) {
    var r, o;
    if (!e) return this;
    if (n = n || O, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
        if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : A, !0)), k.test(r[1]) && C.isPlainObject(t))
            for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
    }
    return (o = A.getElementById(r[2])) && (this[0] = o, this.length = 1), this
}).prototype = C.fn, O = C(A);
var I = /^(?:parents|prev(?:Until|All))/,
    P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };

function D(e, t) {
    for (;
        (e = e[t]) && 1 !== e.nodeType;);
    return e
}
C.fn.extend({
    has: function(e) {
        var t = C(e, this),
            n = t.length;
        return this.filter(function() {
            for (var e = 0; e < n; e++)
                if (C.contains(this, t[e])) return !0
        })
    },
    closest: function(e, t) {
        var n, r = 0,
            o = this.length,
            a = [],
            i = "string" != typeof e && C(e);
        if (!R.test(e))
            for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (i ? -1 < i.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    } return this.pushStack(1 < a.length ? C.uniqueSort(a) : a)
    },
    index: function(e) {
        return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
    },
    addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
}), C.each({
    parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
        return w(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
        return w(e, "parentNode", n)
    },
    next: function(e) {
        return D(e, "nextSibling")
    },
    prev: function(e) {
        return D(e, "previousSibling")
    },
    nextAll: function(e) {
        return w(e, "nextSibling")
    },
    prevAll: function(e) {
        return w(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
        return w(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
        return w(e, "previousSibling", n)
    },
    siblings: function(e) {
        return T((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
        return T(e.firstChild)
    },
    contents: function(e) {
        return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
    }
}, function(r, o) {
    C.fn[r] = function(e, t) {
        var n = C.map(this, o, e);
        return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (P[r] || C.uniqueSort(n), I.test(r) && n.reverse()), this.pushStack(n)
    }
});
var M = /[^\x20\t\r\n\f]+/g;

function j(e) {
    return e
}

function H(e) {
    throw e
}

function q(e, t, n, r) {
    var o;
    try {
        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
        n.apply(void 0, [e])
    }
}
C.Callbacks = function(r) {
    r = "string" == typeof r ? function(e) {
        var n = {};
        return C.each(e.match(M) || [], function(e, t) {
            n[t] = !0
        }), n
    }(r) : C.extend({}, r);

    function n() {
        for (a = a || r.once, t = o = !0; s.length; l = -1)
            for (e = s.shift(); ++l < i.length;) !1 === i[l].apply(e[0], e[1]) && r.stopOnFalse && (l = i.length, e = !1);
        r.memory || (e = !1), o = !1, a && (i = e ? [] : "")
    }
    var o, e, t, a, i = [],
        s = [],
        l = -1,
        u = {
            add: function() {
                return i && (e && !o && (l = i.length - 1, s.push(e)), function n(e) {
                    C.each(e, function(e, t) {
                        y(t) ? r.unique && u.has(t) || i.push(t) : t && t.length && "string" !== _(t) && n(t)
                    })
                }(arguments), e && !o && n()), this
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var n; - 1 < (n = C.inArray(t, i, n));) i.splice(n, 1), n <= l && l--
                }), this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, i) : 0 < i.length
            },
            empty: function() {
                return i && (i = []), this
            },
            disable: function() {
                return a = s = [], i = e = "", this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return a = s = [], e || o || (i = e = ""), this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || n()), this
            },
            fire: function() {
                return u.fireWith(this, arguments), this
            },
            fired: function() {
                return !!t
            }
        };
    return u
}, C.extend({
    Deferred: function(e) {
        var a = [
                ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
            ],
            o = "pending",
            i = {
                state: function() {
                    return o
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return C.Deferred(function(r) {
                        C.each(a, function(e, t) {
                            var n = y(o[t[4]]) && o[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }), o = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var l = 0;

                    function u(o, a, i, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = i.apply(n, r)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, u(l, a, j, s), u(l, a, H, s)) : (l++, t.call(e, u(l, a, j, s), u(l, a, H, s), u(l, a, j, a.notifyWith))) : (i !== j && (n = void 0, r = [e]), (s || a.resolveWith)(n, r))
                                }
                            }
                            var n = this,
                                r = arguments,
                                t = s ? e : function() {
                                    try {
                                        e()
                                    } catch (e) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (i !== H && (n = void 0, r = [e]), a.rejectWith(n, r))
                                    }
                                };
                            o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
                        }
                    }
                    return C.Deferred(function(e) {
                        a[0][3].add(u(0, e, y(r) ? r : j, e.notifyWith)), a[1][3].add(u(0, e, y(t) ? t : j)), a[2][3].add(u(0, e, y(n) ? n : H))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, i) : i
                }
            },
            s = {};
        return C.each(a, function(e, t) {
            var n = t[2],
                r = t[5];
            i[t[1]] = n.add, r && n.add(function() {
                o = r
            }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
            }, s[t[0] + "With"] = n.fireWith
        }), i.promise(s), e && e.call(s, s), s
    },
    when: function(e) {
        function t(t) {
            return function(e) {
                o[t] = this, a[t] = 1 < arguments.length ? s.call(arguments) : e, --n || i.resolveWith(o, a)
            }
        }
        var n = arguments.length,
            r = n,
            o = Array(r),
            a = s.call(arguments),
            i = C.Deferred();
        if (n <= 1 && (q(e, i.done(t(r)).resolve, i.reject, !n), "pending" === i.state() || y(a[r] && a[r].then))) return i.then();
        for (; r--;) q(a[r], t(r), i.reject);
        return i.promise()
    }
});
var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
C.Deferred.exceptionHook = function(e, t) {
    E.console && E.console.warn && e && U.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
}, C.readyException = function(e) {
    E.setTimeout(function() {
        throw e
    })
};
var F = C.Deferred();

function B() {
    A.removeEventListener("DOMContentLoaded", B), E.removeEventListener("load", B), C.ready()
}
C.fn.ready = function(e) {
    return F.then(e).catch(function(e) {
        C.readyException(e)
    }), this
}, C.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || F.resolveWith(A, [C])
    }
}), C.ready.then = F.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? E.setTimeout(C.ready) : (A.addEventListener("DOMContentLoaded", B), E.addEventListener("load", B));
var W = function(e, t, n, r, o, a, i) {
        var s = 0,
            l = e.length,
            u = null == n;
        if ("object" === _(n))
            for (s in o = !0, n) W(e, t, s, n[s], !0, a, i);
        else if (void 0 !== r && (o = !0, y(r) || (i = !0), u && (t = i ? (t.call(e, r), null) : (u = t, function(e, t, n) {
                return u.call(C(e), n)
            })), t))
            for (; s < l; s++) t(e[s], n, i ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : a
    },
    V = /^-ms-/,
    G = /-([a-z])/g;

function Y(e, t) {
    return t.toUpperCase()
}

function $(e) {
    return e.replace(V, "ms-").replace(G, Y)
}

function z(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
}

function X() {
    this.expando = C.expando + X.uid++
}
X.uid = 1, X.prototype = {
    cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
        }))), t
    },
    set: function(e, t, n) {
        var r, o = this.cache(e);
        if ("string" == typeof t) o[$(t)] = n;
        else
            for (r in t) o[$(r)] = t[r];
        return o
    },
    get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
    },
    access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
        var n, r = e[this.expando];
        if (void 0 !== r) {
            if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in r ? [t] : t.match(M) || []).length;
                for (; n--;) delete r[t[n]]
            }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
    },
    hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !C.isEmptyObject(t)
    }
};
var K = new X,
    J = new X,
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

function ee(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = function(e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {}
            J.set(e, t, n)
        } else n = void 0;
    return n
}
C.extend({
    hasData: function(e) {
        return J.hasData(e) || K.hasData(e)
    },
    data: function(e, t, n) {
        return J.access(e, t, n)
    },
    removeData: function(e, t) {
        J.remove(e, t)
    },
    _data: function(e, t, n) {
        return K.access(e, t, n)
    },
    _removeData: function(e, t) {
        K.remove(e, t)
    }
}), C.fn.extend({
    data: function(n, e) {
        var t, r, o, a = this[0],
            i = a && a.attributes;
        if (void 0 !== n) return "object" == typeof n ? this.each(function() {
            J.set(this, n)
        }) : W(this, function(e) {
            var t;
            if (a && void 0 === e) return void 0 !== (t = J.get(a, n)) ? t : void 0 !== (t = ee(a, n)) ? t : void 0;
            this.each(function() {
                J.set(this, n, e)
            })
        }, null, e, 1 < arguments.length, null, !0);
        if (this.length && (o = J.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
            for (t = i.length; t--;) i[t] && 0 === (r = i[t].name).indexOf("data-") && (r = $(r.slice(5)), ee(a, r, o[r]));
            K.set(a, "hasDataAttrs", !0)
        }
        return o
    },
    removeData: function(e) {
        return this.each(function() {
            J.remove(this, e)
        })
    }
}), C.extend({
    queue: function(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
        t = t || "fx";
        var n = C.queue(e, t),
            r = n.length,
            o = n.shift(),
            a = C._queueHooks(e, t);
        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, function() {
            C.dequeue(e, t)
        }, a)), !r && a && a.empty.fire()
    },
    _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return K.get(e, n) || K.access(e, n, {
            empty: C.Callbacks("once memory").add(function() {
                K.remove(e, [t + "queue", n])
            })
        })
    }
}), C.fn.extend({
    queue: function(t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
            var e = C.queue(this, t, n);
            C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
        })
    },
    dequeue: function(e) {
        return this.each(function() {
            C.dequeue(this, e)
        })
    },
    clearQueue: function(e) {
        return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
        function n() {
            --o || a.resolveWith(i, [i])
        }
        var r, o = 1,
            a = C.Deferred(),
            i = this,
            s = this.length;
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = K.get(i[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
        return n(), a.promise(t)
    }
});

function te(e, t, n, r) {
    var o, a, i = {};
    for (a in t) i[a] = e.style[a], e.style[a] = t[a];
    for (a in o = n.apply(e, r || []), t) e.style[a] = i[a];
    return o
}
var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
    };

function ie(e, t, n, r) {
    var o, a, i = 20,
        s = r ? function() {
            return r.cur()
        } : function() {
            return C.css(e, t, "")
        },
        l = s(),
        u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
        c = (C.cssNumber[t] || "px" !== u && +l) && re.exec(C.css(e, t));
    if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; i--;) C.style(e, t, c + u), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (i = 0), c /= a;
        c *= 2, C.style(e, t, c + u), n = n || []
    }
    return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
}
var se = {};

function le(e, t) {
    for (var n, r, o, a, i, s, l, u = [], c = 0, d = e.length; c < d; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = K.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (u[c] = (l = i = a = void 0, i = (o = r).ownerDocument, s = o.nodeName, (l = se[s]) || (a = i.body.appendChild(i.createElement(s)), l = C.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), se[s] = l)))) : "none" !== n && (u[c] = "none", K.set(r, "display", n)));
    for (c = 0; c < d; c++) null != u[c] && (e[c].style.display = u[c]);
    return e
}
C.fn.extend({
    show: function() {
        return le(this, !0)
    },
    hide: function() {
        return le(this)
    },
    toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            ae(this) ? C(this).show() : C(this).hide()
        })
    }
});
var ue = /^(?:checkbox|radio)$/i,
    ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    de = /^$|^module$|\/(?:java|ecma)script/i,
    pe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

function fe(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? C.merge([e], n) : n
}

function ge(e, t) {
    for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
}
pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
var he, me, be = /<|&#?\w+;/;

function ve(e, t, n, r, o) {
    for (var a, i, s, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, g = e.length; f < g; f++)
        if ((a = e[f]) || 0 === a)
            if ("object" === _(a)) C.merge(p, a.nodeType ? [a] : a);
            else if (be.test(a)) {
        for (i = i || d.appendChild(t.createElement("div")), s = (ce.exec(a) || ["", ""])[1].toLowerCase(), l = pe[s] || pe._default, i.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], c = l[0]; c--;) i = i.lastChild;
        C.merge(p, i.childNodes), (i = d.firstChild).textContent = ""
    } else p.push(t.createTextNode(a));
    for (d.textContent = "", f = 0; a = p[f++];)
        if (r && -1 < C.inArray(a, r)) o && o.push(a);
        else if (u = C.contains(a.ownerDocument, a), i = fe(d.appendChild(a), "script"), u && ge(i), n)
        for (c = 0; a = i[c++];) de.test(a.type || "") && n.push(a);
    return d
}
he = A.createDocumentFragment().appendChild(A.createElement("div")), (me = A.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), he.appendChild(me), v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
var ye = A.documentElement,
    xe = /^key/,
    _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;

function Ee() {
    return !0
}

function Ae() {
    return !1
}

function Ce() {
    try {
        return A.activeElement
    } catch (e) {}
}

function Te(e, t, n, r, o, a) {
    var i, s;
    if ("object" == typeof t) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], a);
        return e
    }
    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae;
    else if (!o) return e;
    return 1 === a && (i = o, (o = function(e) {
        return C().off(e), i.apply(this, arguments)
    }).guid = i.guid || (i.guid = C.guid++)), e.each(function() {
        C.event.add(this, t, o, r, n)
    })
}
C.event = {
    global: {},
    add: function(t, e, n, r, o) {
        var a, i, s, l, u, c, d, p, f, g, h, m = K.get(t);
        if (m)
            for (n.handler && (n = (a = n).handler, o = a.selector), o && C.find.matchesSelector(ye, o), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (i = m.handle) || (i = m.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }), u = (e = (e || "").match(M) || [""]).length; u--;) f = h = (s = we.exec(e[u]) || [])[1], g = (s[2] || "").split(".").sort(), f && (d = C.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = C.event.special[f] || {}, c = C.extend({
                type: f,
                origType: h,
                data: r,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && C.expr.match.needsContext.test(o),
                namespace: g.join(".")
            }, a), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, g, i) || t.addEventListener && t.addEventListener(f, i)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[f] = !0)
    },
    remove: function(e, t, n, r, o) {
        var a, i, s, l, u, c, d, p, f, g, h, m = K.hasData(e) && K.get(e);
        if (m && (l = m.events)) {
            for (u = (t = (t || "").match(M) || [""]).length; u--;)
                if (f = h = (s = we.exec(t[u]) || [])[1], g = (s[2] || "").split(".").sort(), f) {
                    for (d = C.event.special[f] || {}, p = l[f = (r ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = a = p.length; a--;) c = p[a], !o && h !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(a, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                    i && !p.length && (d.teardown && !1 !== d.teardown.call(e, g, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
                } else
                    for (f in l) C.event.remove(e, f + t[u], n, r, !0);
            C.isEmptyObject(l) && K.remove(e, "handle events")
        }
    },
    dispatch: function(e) {
        var t, n, r, o, a, i, s = C.event.fix(e),
            l = new Array(arguments.length),
            u = (K.get(this, "events") || {})[s.type] || [],
            c = C.event.special[s.type] || {};
        for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (i = C.event.handlers.call(this, s, u), t = 0;
                (o = i[t++]) && !s.isPropagationStopped();)
                for (s.currentTarget = o.elem, n = 0;
                    (a = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (r = ((C.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, s), s.result
        }
    },
    handlers: function(e, t) {
        var n, r, o, a, i, s = [],
            l = t.delegateCount,
            u = e.target;
        if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
            for (; u !== this; u = u.parentNode || this)
                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                    for (a = [], i = {}, n = 0; n < l; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? -1 < C(o, this).index(u) : C.find(o, this, null, [u]).length), i[o] && a.push(r);
                    a.length && s.push({
                        elem: u,
                        handlers: a
                    })
                } return u = this, l < t.length && s.push({
            elem: u,
            handlers: t.slice(l)
        }), s
    },
    addProp: function(t, e) {
        Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e) ? function() {
                if (this.originalEvent) return e(this.originalEvent)
            } : function() {
                if (this.originalEvent) return this.originalEvent[t]
            },
            set: function(e) {
                Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        })
    },
    fix: function(e) {
        return e[C.expando] ? e : new C.Event(e)
    },
    special: {
        load: {
            noBubble: !0
        },
        focus: {
            trigger: function() {
                if (this !== Ce() && this.focus) return this.focus(), !1
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                if (this === Ce() && this.blur) return this.blur(), !1
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
            },
            _default: function(e) {
                return S(e.target, "a")
            }
        },
        beforeunload: {
            postDispatch: function(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
        }
    }
}, C.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
}, C.Event = function(e, t) {
    if (!(this instanceof C.Event)) return new C.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
}, C.Event.prototype = {
    constructor: C.Event,
    isDefaultPrevented: Ae,
    isPropagationStopped: Ae,
    isImmediatePropagationStopped: Ae,
    isSimulated: !1,
    preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
}, C.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(e) {
        var t = e.button;
        return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
}, C.event.addProp), C.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function(e, o) {
    C.event.special[e] = {
        delegateType: o,
        bindType: o,
        handle: function(e) {
            var t, n = e.relatedTarget,
                r = e.handleObj;
            return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
        }
    }
}), C.fn.extend({
    on: function(e, t, n, r) {
        return Te(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
        return Te(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function() {
            C.event.remove(this, e, n, t)
        });
        for (o in e) this.off(o, t, e[o]);
        return this
    }
});
var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Se = /<script|<style|<link/i,
    ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function Oe(e, t) {
    return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
}

function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
}

function Ie(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
}

function Pe(e, t) {
    var n, r, o, a, i, s, l, u;
    if (1 === t.nodeType) {
        if (K.hasData(e) && (a = K.access(e), i = K.set(t, a), u = a.events))
            for (o in delete i.handle, i.events = {}, u)
                for (n = 0, r = u[o].length; n < r; n++) C.event.add(t, o, u[o][n]);
        J.hasData(e) && (s = J.access(e), l = C.extend({}, s), J.set(t, l))
    }
}

function De(n, r, o, a) {
    r = m.apply([], r);
    var e, t, i, s, l, u, c = 0,
        d = n.length,
        p = d - 1,
        f = r[0],
        g = y(f);
    if (g || 1 < d && "string" == typeof f && !v.checkClone && ke.test(f)) return n.each(function(e) {
        var t = n.eq(e);
        g && (r[0] = f.call(this, e, t.html())), De(t, r, o, a)
    });
    if (d && (t = (e = ve(r, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
        for (s = (i = C.map(fe(e, "script"), Le)).length; c < d; c++) l = e, c !== p && (l = C.clone(l, !0, !0), s && C.merge(i, fe(l, "script"))), o.call(n[c], l, c);
        if (s)
            for (u = i[i.length - 1].ownerDocument, C.map(i, Ie), c = 0; c < s; c++) l = i[c], de.test(l.type || "") && !K.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : x(l.textContent.replace(Ne, ""), u, l))
    }
    return n
}

function Me(e, t, n) {
    for (var r, o = t ? C.filter(t, e) : e, a = 0; null != (r = o[a]); a++) n || 1 !== r.nodeType || C.cleanData(fe(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && ge(fe(r, "script")), r.parentNode.removeChild(r));
    return e
}
C.extend({
    htmlPrefilter: function(e) {
        return e.replace(Re, "<$1></$2>")
    },
    clone: function(e, t, n) {
        var r, o, a, i, s, l, u, c = e.cloneNode(!0),
            d = C.contains(e.ownerDocument, e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
            for (i = fe(c), r = 0, o = (a = fe(e)).length; r < o; r++) s = a[r], l = i[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
        if (t)
            if (n)
                for (a = a || fe(e), i = i || fe(c), r = 0, o = a.length; r < o; r++) Pe(a[r], i[r]);
            else Pe(e, c);
        return 0 < (i = fe(c, "script")).length && ge(i, !d && fe(e, "script")), c
    },
    cleanData: function(e) {
        for (var t, n, r, o = C.event.special, a = 0; void 0 !== (n = e[a]); a++)
            if (z(n)) {
                if (t = n[K.expando]) {
                    if (t.events)
                        for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0
                }
                n[J.expando] && (n[J.expando] = void 0)
            }
    }
}), C.fn.extend({
    detach: function(e) {
        return Me(this, e, !0)
    },
    remove: function(e) {
        return Me(this, e)
    },
    text: function(e) {
        return W(this, function(e) {
            return void 0 === e ? C.text(this) : this.empty().each(function() {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
        }, null, e, arguments.length)
    },
    append: function() {
        return De(this, arguments, function(e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
        })
    },
    prepend: function() {
        return De(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    },
    before: function() {
        return De(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    },
    after: function() {
        return De(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    },
    empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(fe(e, !1)), e.textContent = "");
        return this
    },
    clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
            return C.clone(this, e, t)
        })
    },
    html: function(e) {
        return W(this, function(e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Se.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = C.htmlPrefilter(e);
                try {
                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(fe(t, !1)), t.innerHTML = e);
                    t = 0
                } catch (e) {}
            }
            t && this.empty().append(e)
        }, null, e, arguments.length)
    },
    replaceWith: function() {
        var n = [];
        return De(this, arguments, function(e) {
            var t = this.parentNode;
            C.inArray(this, n) < 0 && (C.cleanData(fe(this)), t && t.replaceChild(e, this))
        }, n)
    }
}), C.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(e, i) {
    C.fn[e] = function(e) {
        for (var t, n = [], r = C(e), o = r.length - 1, a = 0; a <= o; a++) t = a === o ? this : this.clone(!0), C(r[a])[i](t), l.apply(n, t.get());
        return this.pushStack(n)
    }
});
var je = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
    He = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = E), t.getComputedStyle(e)
    },
    qe = new RegExp(oe.join("|"), "i");

function Ue(e, t, n) {
    var r, o, a, i, s = e.style;
    return (n = n || He(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (i = C.style(e, t)), !v.pixelBoxStyles() && je.test(i) && qe.test(t) && (r = s.width, o = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = r, s.minWidth = o, s.maxWidth = a)), void 0 !== i ? i + "" : i
}

function Fe(e, t) {
    return {
        get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
        }
    }
}! function() {
    function e() {
        if (l) {
            s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(s).appendChild(l);
            var e = E.getComputedStyle(l);
            n = "1%" !== e.top, i = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", ye.removeChild(s), l = null
        }
    }

    function t(e) {
        return Math.round(parseFloat(e))
    }
    var n, r, o, a, i, s = A.createElement("div"),
        l = A.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(v, {
        boxSizingReliable: function() {
            return e(), r
        },
        pixelBoxStyles: function() {
            return e(), a
        },
        pixelPosition: function() {
            return e(), n
        },
        reliableMarginLeft: function() {
            return e(), i
        },
        scrollboxSize: function() {
            return e(), o
        }
    }))
}();
var Be = /^(none|table(?!-c[ea]).+)/,
    We = /^--/,
    Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Ye = ["Webkit", "Moz", "ms"],
    $e = A.createElement("div").style;

function ze(e) {
    var t = C.cssProps[e];
    return t || (t = C.cssProps[e] = function(e) {
        if (e in $e) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
            if ((e = Ye[n] + t) in $e) return e
    }(e) || e), t
}

function Xe(e, t, n) {
    var r = re.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
}

function Ke(e, t, n, r, o, a) {
    var i = "width" === t ? 1 : 0,
        s = 0,
        l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; i < 4; i += 2) "margin" === n && (l += C.css(e, n + oe[i], !0, o)), r ? ("content" === n && (l -= C.css(e, "padding" + oe[i], !0, o)), "margin" !== n && (l -= C.css(e, "border" + oe[i] + "Width", !0, o))) : (l += C.css(e, "padding" + oe[i], !0, o), "padding" !== n ? l += C.css(e, "border" + oe[i] + "Width", !0, o) : s += C.css(e, "border" + oe[i] + "Width", !0, o));
    return !r && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5))), l
}

function Je(e, t, n) {
    var r = He(e),
        o = Ue(e, t, r),
        a = "border-box" === C.css(e, "boxSizing", !1, r),
        i = a;
    if (je.test(o)) {
        if (!n) return o;
        o = "auto"
    }
    return i = i && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], i = !0), (o = parseFloat(o) || 0) + Ke(e, t, n || (a ? "border" : "content"), i, r, o) + "px"
}

function Qe(e, t, n, r, o) {
    return new Qe.prototype.init(e, t, n, r, o)
}
C.extend({
    cssHooks: {
        opacity: {
            get: function(e, t) {
                if (t) {
                    var n = Ue(e, "opacity");
                    return "" === n ? "1" : n
                }
            }
        }
    },
    cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, i, s = $(t),
                l = We.test(t),
                u = e.style;
            if (l || (t = ze(s)), i = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return i && "get" in i && void 0 !== (o = i.get(e, !1, r)) ? o : u[t];
            "string" === (a = typeof n) && (o = re.exec(n)) && o[1] && (n = ie(e, t, o), a = "number"), null != n && n == n && ("number" === a && (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
        }
    },
    css: function(e, t, n, r) {
        var o, a, i, s = $(t);
        return We.test(t) || (t = ze(s)), (i = C.cssHooks[t] || C.cssHooks[s]) && "get" in i && (o = i.get(e, !0, n)), void 0 === o && (o = Ue(e, t, r)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (a = parseFloat(o), !0 === n || isFinite(a) ? a || 0 : o) : o
    }
}), C.each(["height", "width"], function(e, s) {
    C.cssHooks[s] = {
        get: function(e, t, n) {
            if (t) return !Be.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, s, n) : te(e, Ve, function() {
                return Je(e, s, n)
            })
        },
        set: function(e, t, n) {
            var r, o = He(e),
                a = "border-box" === C.css(e, "boxSizing", !1, o),
                i = n && Ke(e, s, n, a, o);
            return a && v.scrollboxSize() === o.position && (i -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - Ke(e, s, "border", !1, o) - .5)), i && (r = re.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = C.css(e, s)), Xe(0, t, i)
        }
    }
}), C.cssHooks.marginLeft = Fe(v.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
        marginLeft: 0
    }, function() {
        return e.getBoundingClientRect().left
    })) + "px"
}), C.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(o, a) {
    C.cssHooks[o + a] = {
        expand: function(e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + oe[t] + a] = r[t] || r[t - 2] || r[0];
            return n
        }
    }, "margin" !== o && (C.cssHooks[o + a].set = Xe)
}), C.fn.extend({
    css: function(e, t) {
        return W(this, function(e, t, n) {
            var r, o, a = {},
                i = 0;
            if (Array.isArray(t)) {
                for (r = He(e), o = t.length; i < o; i++) a[t[i]] = C.css(e, t[i], !1, r);
                return a
            }
            return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
        }, e, t, 1 < arguments.length)
    }
}), ((C.Tween = Qe).prototype = {
    constructor: Qe,
    init: function(e, t, n, r, o, a) {
        this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (C.cssNumber[n] ? "" : "px")
    },
    cur: function() {
        var e = Qe.propHooks[this.prop];
        return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
    },
    run: function(e) {
        var t, n = Qe.propHooks[this.prop];
        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
    }
}).init.prototype = Qe.prototype, (Qe.propHooks = {
    _default: {
        get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
        }
    }
}).scrollTop = Qe.propHooks.scrollLeft = {
    set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
}, C.easing = {
    linear: function(e) {
        return e
    },
    swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
}, C.fx = Qe.prototype.init, C.fx.step = {};
var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;

function at() {
    et && (!1 === A.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(at) : E.setTimeout(at, C.fx.interval), C.fx.tick())
}

function it() {
    return E.setTimeout(function() {
        Ze = void 0
    }), Ze = Date.now()
}

function st(e, t) {
    var n, r = 0,
        o = {
            height: e
        };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
}

function lt(e, t, n) {
    for (var r, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, i = o.length; a < i; a++)
        if (r = o[a].call(n, t, e)) return r
}

function ut(a, e, t) {
    var n, i, r = 0,
        o = ut.prefilters.length,
        s = C.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (i) return !1;
            for (var e = Ze || it(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, o = u.tweens.length; r < o; r++) u.tweens[r].run(n);
            return s.notifyWith(a, [u, n, t]), n < 1 && o ? t : (o || s.notifyWith(a, [u, 1, 0]), s.resolveWith(a, [u]), !1)
        },
        u = s.promise({
            elem: a,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || it(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = C.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function(e) {
                var t = 0,
                    n = e ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; t < n; t++) u.tweens[t].run(1);
                return e ? (s.notifyWith(a, [u, 1, 0]), s.resolveWith(a, [u, e])) : s.rejectWith(a, [u, e]), this
            }
        }),
        c = u.props;
    for (! function(e, t) {
            var n, r, o, a, i;
            for (n in e)
                if (o = t[r = $(n)], a = e[n], Array.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (i = C.cssHooks[r]) && "expand" in i)
                    for (n in a = i.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = o);
                else t[r] = o
        }(c, u.opts.specialEasing); r < o; r++)
        if (n = ut.prefilters[r].call(u, a, c, u.opts)) return y(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
    return C.map(c, lt, u), y(u.opts.start) && u.opts.start.call(a, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
        elem: a,
        anim: u,
        queue: u.opts.queue
    })), u
}
C.Animation = C.extend(ut, {
    tweeners: {
        "*": [function(e, t) {
            var n = this.createTween(e, t);
            return ie(n.elem, e, re.exec(t), n), n
        }]
    },
    tweener: function(e, t) {
        for (var n, r = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match(M)).length; r < o; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
    },
    prefilters: [function(e, t, n) {
        var r, o, a, i, s, l, u, c, d = "width" in t || "height" in t,
            p = this,
            f = {},
            g = e.style,
            h = e.nodeType && ae(e),
            m = K.get(e, "fxshow");
        for (r in n.queue || (null == (i = C._queueHooks(e, "fx")).unqueued && (i.unqueued = 0, s = i.empty.fire, i.empty.fire = function() {
                i.unqueued || s()
            }), i.unqueued++, p.always(function() {
                p.always(function() {
                    i.unqueued--, C.queue(e, "fx").length || i.empty.fire()
                })
            })), t)
            if (o = t[r], rt.test(o)) {
                if (delete t[r], a = a || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || C.style(e, r)
            } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
            for (r in d && 1 === e.nodeType && (n.overflow = [g.overflow, g.overflowX, g.overflowY], null == (u = m && m.display) && (u = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = C.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (p.done(function() {
                    g.display = u
                }), null == u && (c = g.display, u = "none" === c ? "" : c)), g.display = "inline-block")), n.overflow && (g.overflow = "hidden", p.always(function() {
                    g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2]
                })), l = !1, f) l || (m ? "hidden" in m && (h = m.hidden) : m = K.access(e, "fxshow", {
                display: u
            }), a && (m.hidden = !h), h && le([e], !0), p.done(function() {
                for (r in h || le([e]), K.remove(e, "fxshow"), f) C.style(e, r, f[r])
            })), l = lt(h ? m[r] : 0, r, p), r in m || (m[r] = l.start, h && (l.end = l.start, l.start = 0))
    }],
    prefilter: function(e, t) {
        t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
    }
}), C.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? C.extend({}, e) : {
        complete: n || !n && t || y(e) && e,
        duration: e,
        easing: n && t || t && !y(t) && t
    };
    return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
    }, r
}, C.fn.extend({
    fadeTo: function(e, t, n, r) {
        return this.filter(ae).css("opacity", 0).show().end().animate({
            opacity: t
        }, e, n, r)
    },
    animate: function(t, e, n, r) {
        function o() {
            var e = ut(this, C.extend({}, t), i);
            (a || K.get(this, "finish")) && e.stop(!0)
        }
        var a = C.isEmptyObject(t),
            i = C.speed(e, n, r);
        return o.finish = o, a || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
    },
    stop: function(o, e, a) {
        function i(e) {
            var t = e.stop;
            delete e.stop, t(a)
        }
        return "string" != typeof o && (a = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
            var e = !0,
                t = null != o && o + "queueHooks",
                n = C.timers,
                r = K.get(this);
            if (t) r[t] && r[t].stop && i(r[t]);
            else
                for (t in r) r[t] && r[t].stop && ot.test(t) && i(r[t]);
            for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
            !e && a || C.dequeue(this, o)
        })
    },
    finish: function(i) {
        return !1 !== i && (i = i || "fx"), this.each(function() {
            var e, t = K.get(this),
                n = t[i + "queue"],
                r = t[i + "queueHooks"],
                o = C.timers,
                a = n ? n.length : 0;
            for (t.finish = !0, C.queue(this, i, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === i && (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish
        })
    }
}), C.each(["toggle", "show", "hide"], function(e, r) {
    var o = C.fn[r];
    C.fn[r] = function(e, t, n) {
        return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
    }
}), C.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
        opacity: "show"
    },
    fadeOut: {
        opacity: "hide"
    },
    fadeToggle: {
        opacity: "toggle"
    }
}, function(e, r) {
    C.fn[e] = function(e, t, n) {
        return this.animate(r, e, t, n)
    }
}), C.timers = [], C.fx.tick = function() {
    var e, t = 0,
        n = C.timers;
    for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || C.fx.stop(), Ze = void 0
}, C.fx.timer = function(e) {
    C.timers.push(e), C.fx.start()
}, C.fx.interval = 13, C.fx.start = function() {
    et || (et = !0, at())
}, C.fx.stop = function() {
    et = null
}, C.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
}, C.fn.delay = function(r, e) {
    return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
        var n = E.setTimeout(e, r);
        t.stop = function() {
            E.clearTimeout(n)
        }
    })
}, tt = A.createElement("input"), nt = A.createElement("select").appendChild(A.createElement("option")), tt.type = "checkbox", v.checkOn = "" !== tt.value, v.optSelected = nt.selected, (tt = A.createElement("input")).value = "t", tt.type = "radio", v.radioValue = "t" === tt.value;
var ct, dt = C.expr.attrHandle;
C.fn.extend({
    attr: function(e, t) {
        return W(this, C.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function(e) {
        return this.each(function() {
            C.removeAttr(this, e)
        })
    }
}), C.extend({
    attr: function(e, t, n) {
        var r, o, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === a && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
        type: {
            set: function(e, t) {
                if (!v.radioValue && "radio" === t && S(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t
                }
            }
        }
    },
    removeAttr: function(e, t) {
        var n, r = 0,
            o = t && t.match(M);
        if (o && 1 === e.nodeType)
            for (; n = o[r++];) e.removeAttribute(n)
    }
}), ct = {
    set: function(e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
    }
}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var i = dt[t] || C.find.attr;
    dt[t] = function(e, t, n) {
        var r, o, a = t.toLowerCase();
        return n || (o = dt[a], dt[a] = r, r = null != i(e, t, n) ? a : null, dt[a] = o), r
    }
});
var pt = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;

function gt(e) {
    return (e.match(M) || []).join(" ")
}

function ht(e) {
    return e.getAttribute && e.getAttribute("class") || ""
}

function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
}
C.fn.extend({
    prop: function(e, t) {
        return W(this, C.prop, e, t, 1 < arguments.length)
    },
    removeProp: function(e) {
        return this.each(function() {
            delete this[C.propFix[e] || e]
        })
    }
}), C.extend({
    prop: function(e, t, n) {
        var r, o, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
    },
    propHooks: {
        tabIndex: {
            get: function(e) {
                var t = C.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : pt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
            }
        }
    },
    propFix: {
        for: "htmlFor",
        class: "className"
    }
}), v.optSelected || (C.propHooks.selected = {
    get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    C.propFix[this.toLowerCase()] = this
}), C.fn.extend({
    addClass: function(t) {
        var e, n, r, o, a, i, s, l = 0;
        if (y(t)) return this.each(function(e) {
            C(this).addClass(t.call(this, e, ht(this)))
        });
        if ((e = mt(t)).length)
            for (; n = this[l++];)
                if (o = ht(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                    for (i = 0; a = e[i++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                    o !== (s = gt(r)) && n.setAttribute("class", s)
                } return this
    },
    removeClass: function(t) {
        var e, n, r, o, a, i, s, l = 0;
        if (y(t)) return this.each(function(e) {
            C(this).removeClass(t.call(this, e, ht(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
            for (; n = this[l++];)
                if (o = ht(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                    for (i = 0; a = e[i++];)
                        for (; - 1 < r.indexOf(" " + a + " ");) r = r.replace(" " + a + " ", " ");
                    o !== (s = gt(r)) && n.setAttribute("class", s)
                } return this
    },
    toggleClass: function(o, t) {
        var a = typeof o,
            i = "string" == a || Array.isArray(o);
        return "boolean" == typeof t && i ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function(e) {
            C(this).toggleClass(o.call(this, e, ht(this), t), t)
        }) : this.each(function() {
            var e, t, n, r;
            if (i)
                for (t = 0, n = C(this), r = mt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else void 0 !== o && "boolean" != a || ((e = ht(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : K.get(this, "__className__") || ""))
        })
    },
    hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
            if (1 === n.nodeType && -1 < (" " + gt(ht(n)) + " ").indexOf(t)) return !0;
        return !1
    }
});
var bt = /\r/g;
C.fn.extend({
    val: function(n) {
        var r, e, o, t = this[0];
        return arguments.length ? (o = y(n), this.each(function(e) {
            var t;
            1 === this.nodeType && (null == (t = o ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                return null == e ? "" : e + ""
            })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
        })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(bt, "") : null == e ? "" : e : void 0
    }
}), C.extend({
    valHooks: {
        option: {
            get: function(e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : gt(C.text(e))
            }
        },
        select: {
            get: function(e) {
                var t, n, r, o = e.options,
                    a = e.selectedIndex,
                    i = "select-one" === e.type,
                    s = i ? null : [],
                    l = i ? a + 1 : o.length;
                for (r = a < 0 ? l : i ? a : 0; r < l; r++)
                    if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                        if (t = C(n).val(), i) return t;
                        s.push(t)
                    } return s
            },
            set: function(e, t) {
                for (var n, r, o = e.options, a = C.makeArray(t), i = o.length; i--;)((r = o[i]).selected = -1 < C.inArray(C.valHooks.option.get(r), a)) && (n = !0);
                return n || (e.selectedIndex = -1), a
            }
        }
    }
}), C.each(["radio", "checkbox"], function() {
    C.valHooks[this] = {
        set: function(e, t) {
            if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
        }
    }, v.checkOn || (C.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
    })
}), v.focusin = "onfocusin" in E;

function vt(e) {
    e.stopPropagation()
}
var yt = /^(?:focusinfocus|focusoutblur)$/;
C.extend(C.event, {
    trigger: function(e, t, n, r) {
        var o, a, i, s, l, u, c, d, p = [n || A],
            f = b.call(e, "type") ? e.type : e,
            g = b.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = d = i = n = n || A, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (g = f.split(".")).shift(), g.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[f] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
            if (!r && !c.noBubble && !h(n)) {
                for (s = c.delegateType || f, yt.test(s + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), i = a;
                i === (n.ownerDocument || A) && p.push(i.defaultView || i.parentWindow || E)
            }
            for (o = 0;
                (a = p[o++]) && !e.isPropagationStopped();) d = a, e.type = 1 < o ? s : c.bindType || f, (u = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && u.apply(a, t), (u = l && a[l]) && u.apply && z(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
            return e.type = f, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !z(n) || l && y(n[f]) && !h(n) && ((i = n[l]) && (n[l] = null), C.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, vt), n[f](), e.isPropagationStopped() && d.removeEventListener(f, vt), C.event.triggered = void 0, i && (n[l] = i)), e.result
        }
    },
    simulate: function(e, t, n) {
        var r = C.extend(new C.Event, n, {
            type: e,
            isSimulated: !0
        });
        C.event.trigger(r, null, t)
    }
}), C.fn.extend({
    trigger: function(e, t) {
        return this.each(function() {
            C.event.trigger(e, t, this)
        })
    },
    triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return C.event.trigger(e, t, n, !0)
    }
}), v.focusin || C.each({
    focus: "focusin",
    blur: "focusout"
}, function(n, r) {
    function o(e) {
        C.event.simulate(r, e.target, C.event.fix(e))
    }
    C.event.special[r] = {
        setup: function() {
            var e = this.ownerDocument || this,
                t = K.access(e, r);
            t || e.addEventListener(n, o, !0), K.access(e, r, (t || 0) + 1)
        },
        teardown: function() {
            var e = this.ownerDocument || this,
                t = K.access(e, r) - 1;
            t ? K.access(e, r, t) : (e.removeEventListener(n, o, !0), K.remove(e, r))
        }
    }
});
var xt = E.location,
    _t = Date.now(),
    wt = /\?/;
C.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
        t = (new E.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
        t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
};
var Et = /\[\]$/,
    At = /\r?\n/g,
    Ct = /^(?:submit|button|image|reset|file)$/i,
    Tt = /^(?:input|select|textarea|keygen)/i;

function Rt(n, e, r, o) {
    var t;
    if (Array.isArray(e)) C.each(e, function(e, t) {
        r || Et.test(n) ? o(n, t) : Rt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
    });
    else if (r || "object" !== _(e)) o(n, e);
    else
        for (t in e) Rt(n + "[" + t + "]", e[t], r, o)
}
C.param = function(e, t) {
    function n(e, t) {
        var n = y(t) ? t() : t;
        o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    }
    var r, o = [];
    if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
        n(this.name, this.value)
    });
    else
        for (r in e) Rt(r, e[r], t, n);
    return o.join("&")
}, C.fn.extend({
    serialize: function() {
        return C.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var e = C.prop(this, "elements");
            return e ? C.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !C(this).is(":disabled") && Tt.test(this.nodeName) && !Ct.test(e) && (this.checked || !ue.test(e))
        }).map(function(e, t) {
            var n = C(this).val();
            return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                return {
                    name: t.name,
                    value: e.replace(At, "\r\n")
                }
            }) : {
                name: t.name,
                value: n.replace(At, "\r\n")
            }
        }).get()
    }
});
var St = /%20/g,
    kt = /#.*$/,
    Nt = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    Pt = {},
    Dt = {},
    Mt = "*/".concat("*"),
    jt = A.createElement("a");

function Ht(a) {
    return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, r = 0,
            o = e.toLowerCase().match(M) || [];
        if (y(t))
            for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
    }
}

function qt(t, o, a, i) {
    var s = {},
        l = t === Dt;

    function u(e) {
        var r;
        return s[e] = !0, C.each(t[e] || [], function(e, t) {
            var n = t(o, a, i);
            return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1)
        }), r
    }
    return u(o.dataTypes[0]) || !s["*"] && u("*")
}

function Ut(e, t) {
    var n, r, o = C.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
    return r && C.extend(!0, e, r), e
}
jt.href = xt.href, C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: xt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": Mt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": C.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(e, t) {
        return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e)
    },
    ajaxPrefilter: Ht(Pt),
    ajaxTransport: Ht(Dt),
    ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var c, d, p, n, f, r, g, h, o, a, m = C.ajaxSetup({}, t),
            b = m.context || m,
            v = m.context && (b.nodeType || b.jquery) ? C(b) : C.event,
            y = C.Deferred(),
            x = C.Callbacks("once memory"),
            _ = m.statusCode || {},
            i = {},
            s = {},
            l = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (g) {
                        if (!n)
                            for (n = {}; t = Ot.exec(p);) n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return g ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == g && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, i[e] = t), this
                },
                overrideMimeType: function(e) {
                    return null == g && (m.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (g) w.always(e[w.status]);
                        else
                            for (t in e) _[t] = [_[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return c && c.abort(t), u(0, t), this
                }
            };
        if (y.promise(w), m.url = ((e || m.url || xt.href) + "").replace(It, xt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(M) || [""], null == m.crossDomain) {
            r = A.createElement("a");
            try {
                r.href = m.url, r.href = r.href, m.crossDomain = jt.protocol + "//" + jt.host != r.protocol + "//" + r.host
            } catch (e) {
                m.crossDomain = !0
            }
        }
        if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), qt(Pt, m, t, w), g) return w;
        for (o in (h = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Lt.test(m.type), d = m.url.replace(kt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(St, "+")) : (a = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (wt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Nt, "$1"), a = (wt.test(d) ? "&" : "?") + "_=" + _t++ + a), m.url = d + a), m.ifModified && (C.lastModified[d] && w.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && w.setRequestHeader("If-None-Match", C.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(o, m.headers[o]);
        if (m.beforeSend && (!1 === m.beforeSend.call(b, w, m) || g)) return w.abort();
        if (l = "abort", x.add(m.complete), w.done(m.success), w.fail(m.error), c = qt(Dt, m, t, w)) {
            if (w.readyState = 1, h && v.trigger("ajaxSend", [w, m]), g) return w;
            m.async && 0 < m.timeout && (f = E.setTimeout(function() {
                w.abort("timeout")
            }, m.timeout));
            try {
                g = !1, c.send(i, u)
            } catch (e) {
                if (g) throw e;
                u(-1, e)
            }
        } else u(-1, "No Transport");

        function u(e, t, n, r) {
            var o, a, i, s, l, u = t;
            g || (g = !0, f && E.clearTimeout(f), c = void 0, p = r || "", w.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                for (var r, o, a, i, s = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in s)
                        if (s[o] && s[o].test(r)) {
                            l.unshift(o);
                            break
                        } if (l[0] in n) a = l[0];
                else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            a = o;
                            break
                        }
                        i || (i = o)
                    }
                    a = a || i
                }
                if (a) return a !== l[0] && l.unshift(a), n[a]
            }(m, w, n)), s = function(e, t, n, r) {
                var o, a, i, s, l, u = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (i in e.converters) u[i.toLowerCase()] = e.converters[i];
                for (a = c.shift(); a;)
                    if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                        if ("*" === a) a = l;
                        else if ("*" !== l && l !== a) {
                    if (!(i = u[l + " " + a] || u["* " + a]))
                        for (o in u)
                            if ((s = o.split(" "))[1] === a && (i = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === i ? i = u[o] : !0 !== u[o] && (a = s[0], c.unshift(s[1]));
                                break
                            } if (!0 !== i)
                        if (i && e.throws) t = i(t);
                        else try {
                            t = i(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: i ? e : "No conversion from " + l + " to " + a
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }(m, s, w, o), o ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = w.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, a = s.data, o = !(i = s.error))) : (i = u, !e && u || (u = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || u) + "", o ? y.resolveWith(b, [a, u, w]) : y.rejectWith(b, [w, u, i]), w.statusCode(_), _ = void 0, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [w, m, o ? a : i]), x.fireWith(b, [w, u]), h && (v.trigger("ajaxComplete", [w, m]), --C.active || C.event.trigger("ajaxStop")))
        }
        return w
    },
    getJSON: function(e, t, n) {
        return C.get(e, t, n, "json")
    },
    getScript: function(e, t) {
        return C.get(e, void 0, t, "script")
    }
}), C.each(["get", "post"], function(e, o) {
    C[o] = function(e, t, n, r) {
        return y(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({
            url: e,
            type: o,
            dataType: r,
            data: t,
            success: n
        }, C.isPlainObject(e) && e))
    }
}), C._evalUrl = function(e) {
    return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
    })
}, C.fn.extend({
    wrapAll: function(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
        }).append(this)), this
    },
    wrapInner: function(n) {
        return y(n) ? this.each(function(e) {
            C(this).wrapInner(n.call(this, e))
        }) : this.each(function() {
            var e = C(this),
                t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n)
        })
    },
    wrap: function(t) {
        var n = y(t);
        return this.each(function(e) {
            C(this).wrapAll(n ? t.call(this, e) : t)
        })
    },
    unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
            C(this).replaceWith(this.childNodes)
        }), this
    }
}), C.expr.pseudos.hidden = function(e) {
    return !C.expr.pseudos.visible(e)
}, C.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
}, C.ajaxSettings.xhr = function() {
    try {
        return new E.XMLHttpRequest
    } catch (e) {}
};
var Ft = {
        0: 200,
        1223: 204
    },
    Bt = C.ajaxSettings.xhr();
v.cors = !!Bt && "withCredentials" in Bt, v.ajax = Bt = !!Bt, C.ajaxTransport(function(o) {
    var a, i;
    if (v.cors || Bt && !o.crossDomain) return {
        send: function(e, t) {
            var n, r = o.xhr();
            if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                for (n in o.xhrFields) r[n] = o.xhrFields[n];
            for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
            a = function(e) {
                return function() {
                    a && (a = i = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                        binary: r.response
                    } : {
                        text: r.responseText
                    }, r.getAllResponseHeaders()))
                }
            }, r.onload = a(), i = r.onerror = r.ontimeout = a("error"), void 0 !== r.onabort ? r.onabort = i : r.onreadystatechange = function() {
                4 === r.readyState && E.setTimeout(function() {
                    a && i()
                })
            }, a = a("abort");
            try {
                r.send(o.hasContent && o.data || null)
            } catch (e) {
                if (a) throw e
            }
        },
        abort: function() {
            a && a()
        }
    }
}), C.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
}), C.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function(e) {
            return C.globalEval(e), e
        }
    }
}), C.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
}), C.ajaxTransport("script", function(n) {
    var r, o;
    if (n.crossDomain) return {
        send: function(e, t) {
            r = C("<script>").prop({
                charset: n.scriptCharset,
                src: n.url
            }).on("load error", o = function(e) {
                r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
            }), A.head.appendChild(r[0])
        },
        abort: function() {
            o && o()
        }
    }
});
var Wt, Vt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var e = Vt.pop() || C.expando + "_" + _t++;
        return this[e] = !0, e
    }
}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
    var r, o, a, i = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
    if (i || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, i ? e[i] = e[i].replace(Gt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return a || C.error(r + " was not called"), a[0]
    }, e.dataTypes[0] = "json", o = E[r], E[r] = function() {
        a = arguments
    }, n.always(function() {
        void 0 === o ? C(E).removeProp(r) : E[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Vt.push(r)), a && y(o) && o(a[0]), a = o = void 0
    }), "script"
}), v.createHTMLDocument = ((Wt = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), C.parseHTML = function(e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, t.head.appendChild(r)) : t = A), a = !n && [], (o = k.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, a), a && a.length && C(a).remove(), C.merge([], o.childNodes)));
    var r, o, a
}, C.fn.load = function(e, t, n) {
    var r, o, a, i = this,
        s = e.indexOf(" ");
    return -1 < s && (r = gt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < i.length && C.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
    }).done(function(e) {
        a = arguments, i.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
        i.each(function() {
            n.apply(this, a || [e.responseText, t, e])
        })
    }), this
}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    C.fn[t] = function(e) {
        return this.on(t, e)
    }
}), C.expr.pseudos.animated = function(t) {
    return C.grep(C.timers, function(e) {
        return t === e.elem
    }).length
}, C.offset = {
    setOffset: function(e, t, n) {
        var r, o, a, i, s, l, u = C.css(e, "position"),
            c = C(e),
            d = {};
        "static" === u && (e.style.position = "relative"), s = c.offset(), a = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (a + l).indexOf("auto") ? (i = (r = c.position()).top, r.left) : (i = parseFloat(a) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
    }
}, C.fn.extend({
    offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
            C.offset.setOffset(this, t, e)
        });
        var e, n, r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: e.top + n.pageYOffset,
            left: e.left + n.pageXOffset
        }) : {
            top: 0,
            left: 0
        } : void 0
    },
    position: function() {
        if (this[0]) {
            var e, t, n, r = this[0],
                o = {
                    top: 0,
                    left: 0
                };
            if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
            else {
                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
            }
            return {
                top: t.top - o.top - C.css(r, "marginTop", !0),
                left: t.left - o.left - C.css(r, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
            return e || ye
        })
    }
}), C.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(t, o) {
    var a = "pageYOffset" === o;
    C.fn[t] = function(e) {
        return W(this, function(e, t, n) {
            var r;
            if (h(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
            r ? r.scrollTo(a ? r.pageXOffset : n, a ? n : r.pageYOffset) : e[t] = n
        }, t, e, arguments.length)
    }
}), C.each(["top", "left"], function(e, n) {
    C.cssHooks[n] = Fe(v.pixelPosition, function(e, t) {
        if (t) return t = Ue(e, n), je.test(t) ? C(e).position()[n] + "px" : t
    })
}), C.each({
    Height: "height",
    Width: "width"
}, function(i, s) {
    C.each({
        padding: "inner" + i,
        content: s,
        "": "outer" + i
    }, function(r, a) {
        C.fn[a] = function(e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
                o = r || (!0 === e || !0 === t ? "margin" : "border");
            return W(this, function(e, t, n) {
                var r;
                return h(e) ? 0 === a.indexOf("outer") ? e["inner" + i] : e.document.documentElement["client" + i] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + i], r["scroll" + i], e.body["offset" + i], r["offset" + i], r["client" + i])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
            }, s, n ? e : void 0, n)
        }
    })
}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
    C.fn[n] = function(e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
}), C.fn.extend({
    hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }
}), C.fn.extend({
    bind: function(e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
        return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
}), C.proxy = function(e, t) {
    var n, r, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (o = function() {
        return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || C.guid++, o
}, C.holdReady = function(e) {
    e ? C.readyWait++ : C.ready(!0)
}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = S, C.isFunction = y, C.isWindow = h, C.camelCase = $, C.type = _, C.now = Date.now, C.isNumeric = function(e) {
    var t = C.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, void 0 === (Kt = function() {
    return C
}.apply(Xt, [])) || (zt.exports = Kt);
var Yt = E.jQuery,
    $t = E.$;
return C.noConflict = function(e) {
return E.$ === C && (E.$ = $t), e && E.jQuery === C && (E.jQuery = Yt), C
}, e || (E.jQuery = E.$ = C), C
})
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.extend = s, t.indexOf = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }, t.escapeExpression = function(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return a.test(e) ? e.replace(o, i) : e
    }, t.isEmpty = function(e) {
        return !e && 0 !== e || !(!c(e) || 0 !== e.length)
    }, t.createFrame = function(e) {
        var t = s({}, e);
        return t._parent = e, t
    }, t.blockParams = function(e, t) {
        return e.path = t, e
    }, t.appendContextPath = function(e, t) {
        return (e ? e + "." : "") + t
    };
    var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        o = /[&<>"'`=]/g,
        a = /[&<>"'`=]/;

    function i(e) {
        return r[e]
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }
    var l = Object.prototype.toString;
    t.toString = l;
    var u = function(e) {
        return "function" == typeof e
    };
    u(/x/) && (t.isFunction = u = function(e) {
        return "function" == typeof e && "[object Function]" === l.call(e)
    }), t.isFunction = u;
    var c = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === l.call(e)
    };
    t.isArray = c
},
function(e, t, p) {
    "use strict";
    e.exports = function t(e, n) {
        var r = p(0);
        if (void 0 === n) return e;
        if (e.render) return e.render(n && n.onClick);
        var o = r("<" + e + ">");
        if (null !== n)
            for (var a in n)
                if ("onClick" === a) {
                    var i = n[a];
                    o.click(i)
                } else if (/^aria-/.test(a) || "role" === a) {
            var s = n[a];
            o.attr(a, s)
        } else {
            var l = n[a];
            o.prop(a, l)
        }
        for (var u = arguments.length, c = Array(2 < u ? u - 2 : 0), d = 2; d < u; d++) c[d - 2] = arguments[d];
        return c.forEach(function(e) {
            o.append(t(e))
        }), o
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(n) {
        var i = [];
        return i.toString = function() {
            return this.map(function(e) {
                var t = function(e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = function(e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(r),
                            a = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(a).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }(e, n);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }, i.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var n = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                null != o && (n[o] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                null != a[0] && n[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), i.push(a))
            }
        }, i
    }
},
function(e, t, r) {
    var n, o, a, l = {},
        u = (n = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === o && (o = n.apply(this, arguments)), o
        }),
        i = (a = {}, function(e, t) {
            if ("function" == typeof e) return e();
            if (void 0 === a[e]) {
                var n = function(e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }.call(this, e, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                a[e] = n
            }
            return a[e]
        }),
        s = null,
        c = 0,
        d = [],
        p = r(14);

    function f(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = l[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(y(r.parts[a], t))
            } else {
                var i = [];
                for (a = 0; a < r.parts.length; a++) i.push(y(r.parts[a], t));
                l[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: i
                }
            }
        }
    }

    function g(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var a = e[o],
                i = t.base ? a[0] + t.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            r[i] ? r[i].parts.push(s) : n.push(r[i] = {
                id: i,
                parts: [s]
            })
        }
        return n
    }

    function h(e, t) {
        var n = i(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = d[d.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), d.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = i(e.insertAt.before, n);
            n.insertBefore(t, o)
        }
    }

    function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = d.indexOf(e);
        0 <= t && d.splice(t, 1)
    }

    function b(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var n = function() {
                0;
                return r.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return v(t, e.attrs), h(e, t), t
    }

    function v(t, n) {
        Object.keys(n).forEach(function(e) {
            t.setAttribute(e, n[e])
        })
    }

    function y(t, e) {
        var n, r, o, a;
        if (e.transform && t.css) {
            if (!(a = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
            t.css = a
        }
        if (e.singleton) {
            var i = c++;
            n = s || (s = b(e)), r = w.bind(null, n, i, !1), o = w.bind(null, n, i, !0)
        } else o = t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(t, e.attrs), h(e, t), t
        }(e), r = function(e, t, n) {
            var r = n.css,
                o = n.sourceMap,
                a = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || a) && (r = p(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var i = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s)
        }.bind(null, n, e), function() {
            m(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = b(e), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), function() {
            m(n)
        });
        return r(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
    }
    e.exports = function(e, i) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (i = i || {}).attrs = "object" == typeof i.attrs ? i.attrs : {}, i.singleton || "boolean" == typeof i.singleton || (i.singleton = u()), i.insertInto || (i.insertInto = "head"), i.insertAt || (i.insertAt = "bottom");
        var s = g(e, i);
        return f(s, i),
            function(e) {
                for (var t = [], n = 0; n < s.length; n++) {
                    var r = s[n];
                    (o = l[r.id]).refs--, t.push(o)
                }
                e && f(g(e, i), i);
                for (n = 0; n < t.length; n++) {
                    var o;
                    if (0 === (o = t[n]).refs) {
                        for (var a = 0; a < o.parts.length; a++) o.parts[a]();
                        delete l[o.id]
                    }
                }
            }
    };
    var x, _ = (x = [], function(e, t) {
        return x[e] = t, x.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, o);
        else {
            var a = document.createTextNode(o),
                i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
        }
    }
},
function(o, e, a) {
    "use strict";
    (function(r) {
        var t = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var n = a(17);
        a(40);
        var e = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.panel = new n(this), this.$checkbox = null
            }
            return t(e, [{
                key: "getTitle",
                value: function() {
                    return "New plugin"
                }
            }, {
                key: "getDescription",
                value: function() {
                    return ""
                }
            }, {
                key: "summary",
                value: function(e) {
                    return this.panel.setSummary(e)
                }
            }, {
                key: "about",
                value: function(e) {
                    return this.panel.setAbout(e)
                }
            }, {
                key: "error",
                value: function(e, t, n) {
                    return this.panel.addError(e, t, n)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    this.$checkbox = r("input", {
                        className: "tota11y-plugin-checkbox tota11y-sr-only",
                        type: "checkbox",
                        onClick: function() {
                            return e(t)
                        }
                    });
                    var n = r("label", {
                        className: "tota11y-plugin-switch"
                    }, this.$checkbox, r("div", {
                        "aria-hidden": "true",
                        className: "tota11y-plugin-indicator"
                    }, "✓"), r("div", {
                        className: "tota11y-plugin-info"
                    }, r("div", {
                        className: "tota11y-plugin-title"
                    }, this.getTitle()), r("div", {
                        className: "tota11y-plugin-description"
                    }, this.getDescription())));
                    return r("li", {
                        role: "menuitem",
                        className: "tota11y-plugin"
                    }, n)
                }
            }, {
                key: "activate",
                value: function() {
                    this.run(), this.panel.render()
                }
            }, {
                key: "deactivate",
                value: function() {
                    this.cleanup(), this.panel.destroy(), this.$checkbox.prop("checked", !1)
                }
            }]), e
        }();
        o.exports = e
    }).call(this, a(2))
},
function(e, t, n) {
    "use strict";
    var a = n(0),
        i = n(18);
    n(35);
    window.requestAnimationFrame = window.requestAnimationFrame || function(e) {
        window.setTimeout(e, 16)
    }, e.exports = function(e) {
        function n(e, t) {
            var n = a("<div>").addClass("tota11y").addClass(r).addClass(t).css(e.position()).data({
                $el: e
            });
            return o.push({
                $annotation: n,
                $parent: e.offsetParent()
            }), n
        }
        var r = "tota11y-annotation-" + e,
            o = [];
        return function e() {
            for (var t = 0; 0 < o.length && t < 20; t++) {
                var n = o.shift();
                n.$parent.append(n.$annotation)
            }
            window.requestAnimationFrame(e)
        }(), a(window).resize(function() {
            var e = a("." + r),
                n = e.map(function(e, t) {
                    return a(t).data("$el").position()
                });
            e.each(function(e, t) {
                a(t).css({
                    top: n[e].top,
                    left: n[e].left
                })
            })
        }), {
            label: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e.prop("tagName").toLowerCase();
                return n(e, "tota11y-label").html(t)
            },
            errorLabel: function(e, t, n, r) {
                var o = a(i({
                    text: t,
                    detail: n,
                    hasErrorEntry: !!r
                }));
                return r && (o.find(".tota11y-label-link").click(function(e) {
                    e.preventDefault(), e.stopPropagation(), r.show()
                }), o.hover(function() {
                    r.$trigger.addClass("trigger-highlight")
                }, function() {
                    r.$trigger.removeClass("trigger-highlight")
                })), this.label(e).addClass("tota11y-label-error").html(o)
            },
            highlight: function(e) {
                return n(e, "tota11y-highlight").css({
                    width: Math.max(25, e.outerWidth(!0)),
                    height: Math.max(25, e.outerHeight(!0))
                })
            },
            toggleHighlight: function(e, t) {
                var n = this,
                    r = void 0;
                t.on("mouseenter focus", function() {
                    r && r.remove(), r = n.highlight(e)
                }), t.on("mouseleave blur", function() {
                    r && (r.remove(), r = null)
                })
            },
            hide: function() {
                a(".tota11y.tota11y-label").hide()
            },
            show: function() {
                a(".tota11y.tota11y-label").show()
            },
            removeAll: function() {
                a("." + r).remove()
            }
        }
    }
},
function(e, t, n) {
    e.exports = n(19).default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

    function l(e, t) {
        var n = t && t.loc,
            r = void 0,
            o = void 0;
        n && (e += " - " + (r = n.start.line) + ":" + (o = n.start.column));
        for (var a = Error.prototype.constructor.call(this, e), i = 0; i < s.length; i++) this[s[i]] = a[s[i]];
        Error.captureStackTrace && Error.captureStackTrace(this, l);
        try {
            n && (this.lineNumber = r, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: o,
                enumerable: !0
            }) : this.column = o)
        } catch (e) {}
    }
    l.prototype = new Error, t.default = l, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0, t.HandlebarsEnvironment = c;
    var o = n(1),
        a = r(n(8)),
        i = n(20),
        s = n(28),
        l = r(n(30));
    t.VERSION = "4.1.2";
    t.COMPILER_REVISION = 7;
    t.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    var u = "[object Object]";

    function c(e, t, n) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, i.registerDefaultHelpers(this), s.registerDefaultDecorators(this)
    }
    c.prototype = {
        constructor: c,
        logger: l.default,
        log: l.default.log,
        registerHelper: function(e, t) {
            if (o.toString.call(e) === u) {
                if (t) throw new a.default("Arg not supported with multiple helpers");
                o.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if (o.toString.call(e) === u) o.extend(this.partials, e);
            else {
                if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if (o.toString.call(e) === u) {
                if (t) throw new a.default("Arg not supported with multiple decorators");
                o.extend(this.decorators, e)
            } else this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var d = l.default.log;
    t.log = d, t.createFrame = o.createFrame, t.logger = l.default
},
function(e, t, n) {
    "use strict";

    function r(t) {
        var n = new axs.AuditConfiguration;
        return n.showUnsupportedRulesWarning = !1, n.ignoreSelectors(t, ".tota11y *"), axs.AuditRules.getRules().map(function(e) {
            return e.name
        }).forEach(function(e) {
            e !== t && n.ignoreSelectors(e, "*")
        }), n
    }
    e.exports = function(t) {
        var e = r(t);
        return axs.AuditRule.collectMatchingElements = function(e, t, n, r) {
            if (e.nodeType === Node.ELEMENT_NODE) var o = e;
            if (o && t.call(null, o) && n.push(o), o) {
                var a = o.shadowRoot || o.webkitShadowRoot;
                if (a) return void axs.AuditRule.collectMatchingElements(a, t, n, a)
            }
            if (o && "content" == o.localName)
                for (var i = o.getDistributedNodes(), s = 0; s < i.length; s++) axs.AuditRule.collectMatchingElements(i[s], t, n, r);
            else {
                if (o && "shadow" == o.localName)
                    if (r)
                        for (i = o.getDistributedNodes(), s = 0; s < i.length; s++) axs.AuditRule.collectMatchingElements(i[s], t, n, r);
                    else console.warn("ShadowRoot not provided for", o);
                for (var l = e.firstChild; null != l;) axs.AuditRule.collectMatchingElements(l, t, n, r), l = l.nextSibling
            }
        }, axs.Audit.run(e).filter(function(e) {
            return e.rule.name === t
        })[0]
    }
},
function(e, t, n) {
    "use strict";
    (function(l) {
        var t = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        n(12);
        var u = n(0),
            c = n(15),
            d = n(58);
        n(59);
        var e = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.activePlugin = null
            }
            return t(e, [{
                key: "handlePluginClick",
                value: function(e) {
                    e === this.activePlugin ? (e.deactivate(), this.activePlugin = null) : (this.activePlugin && this.activePlugin.deactivate(), e.activate(), this.activePlugin = e)
                }
            }, {
                key: "appendTo",
                value: function(e) {
                    var t = this,
                        n = u(d()),
                        r = void 0,
                        o = c.default.map(function(e) {
                            return l(e, {
                                onClick: t.handlePluginClick.bind(t)
                            })
                        }),
                        a = null;
                    c.experimental.length && (a = l("li", null, l("div", {
                        className: "tota11y-plugins-separator"
                    }, "Experimental"), l("ul", null, c.experimental.map(function(e) {
                        return l(e, {
                            onClick: t.handlePluginClick.bind(t)
                        })
                    }))));
                    var i = l("ul", {
                            className: "tota11y-plugins"
                        }, o, a),
                        s = l("button", {
                            "aria-controls": "tota11y-toolbar",
                            className: "tota11y-toolbar-toggle",
                            onClick: function(e) {
                                e.preventDefault(), e.stopPropagation(), r.toggleClass("tota11y-expanded"), r.attr("aria-expanded", r.is(".tota11y-expanded"))
                            },
                            "aria-label": "[tota11y] Toggle menu"
                        }, l("div", {
                            "aria-hidden": "true",
                            className: "tota11y-toolbar-logo"
                        }, n));
                    r = l("div", {
                        id: "tota11y-toolbar",
                        className: "tota11y tota11y-toolbar",
                        role: "region",
                        "aria-expanded": "false"
                    }, l("div", {
                        className: "tota11y-toolbar-body"
                    }, i), s), e.append(r)
                }
            }]), e
        }();
        u(function() {
            (new e).appendTo(u("body"))
        })
    }).call(this, n(2))
},
function(e, t, n) {
    var r = n(13);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n/**\n * Base styles for tota11y to make sure things look consistent under\n * reasonable circumstances.\n */\n.tota11y,\n.tota11y * {\n  border: none !important;\n  background-color: inherit !important;\n  box-sizing: border-box !important;\n  color: #f2f2f2 !important;\n  font-family: Arial !important;\n  font-size: 14px !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  line-height: 1.35 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: left !important;\n  text-shadow: none !important;\n}\n.tota11y * {\n  height: auto !important;\n  width: auto !important;\n}\n.tota11y strong {\n  font-weight: bold !important;\n}\n.tota11y pre,\n.tota11y code {\n  background-color: #ddd !important;\n  border: none !important;\n  border-radius: 0 !important;\n  color: inherit !important;\n  font-family: monospace !important;\n  font-size: inherit !important;\n  line-height: inherit !important;\n}\n.tota11y pre {\n  padding: 5px 10px !important;\n  margin: 0 0 10px !important;\n  overflow-x: scroll !important;\n}\n.tota11y code {\n  border-radius: 2px !important;\n  display: inline !important;\n  padding: 1px !important;\n}\n.tota11y i,\n.tota11y em {\n  font-style: italic !important;\n}\n.tota11y p {\n  margin: 0 0 10px !important;\n}\n.tota11y a,\n.tota11y a:hover,\n.tota11y a:focus {\n  background-color: inherit !important;\n  color: inherit !important;\n  text-decoration: none !important;\n}\n.tota11y-toolbar {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n  position: fixed !important;\n  top: auto !important;\n  right: auto !important;\n  bottom: 0 !important;\n  left: 10px !important;\n  border-top-left-radius: 5px !important;\n  border-top-right-radius: 5px !important;\n  overflow: hidden !important;\n  z-index: 9998 !important;\n}\n.tota11y-toolbar-toggle {\n  background-color: #333 !important;\n  display: block !important;\n  padding: 7px !important;\n  width: 100% !important;\n}\n.tota11y-toolbar-logo {\n  height: 25px !important;\n  margin: 0 auto !important;\n  text-align: center !important;\n  width: 35px !important;\n}\n.tota11y-toolbar-logo svg {\n  height: 25px !important;\n}\n.tota11y-toolbar-body {\n  display: none !important;\n}\n.tota11y-toolbar.tota11y-expanded .tota11y-toolbar-body {\n  display: block !important;\n}\n.tota11y-sr-only {\n  border: 0 !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n}\n", ""])
},
function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
            a = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var n, r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? e : (n = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? o + r : a + r.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
},
function(e, t, n) {
    "use strict";
    var r = n(16),
        o = n(42),
        a = n(47),
        i = n(51),
        s = n(53),
        l = n(54),
        u = n(55);
    e.exports = {
        default: [new a, new o, new l, new i, new r, new s],
        experimental: [new u]
    }
},
function(t, e, a) {
    "use strict";
    (function(i) {
        var n = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var s = a(0),
            r = a(5),
            l = a(6)("alt-text"),
            o = a(10),
            e = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r), n(t, [{
                    key: "getTitle",
                    value: function() {
                        return "Image alt-text"
                    }
                }, {
                    key: "getDescription",
                    value: function() {
                        return "Annotates images without alt text"
                    }
                }, {
                    key: "reportError",
                    value: function(e) {
                        var t = s(e),
                            n = t.attr("src") || "..",
                            r = "Image is missing alt text",
                            o = i("div", null, i("p", null, 'This image does not have an associated "alt" attribute. Please specify the alt text for this image like so:'), i("pre", null, i("code", null, '&lt;img src="' + n + '" alt="Image description"&gt')), i("p", null, 'If the image is decorative and does not convey any information to the surrounding content, however, you may leave this "alt" attribute empty, or specify a "role" attribute with a value of "presentation."'), i("pre", null, i("code", null, '&lt;img src="' + n + '" alt=""&gt;', i("br", null), '&lt;img src="' + n + '" role="presentation"&gt;'))),
                            a = this.error(r, o, t);
                        l.errorLabel(t, "", r, a)
                    }
                }, {
                    key: "run",
                    value: function() {
                        var e = o("imagesWithoutAltText"),
                            t = e.result,
                            n = e.elements;
                        "FAIL" === t && n.forEach(this.reportError.bind(this)), s('img[role="presentation"], img[alt=""]').each(function(e, t) {
                            l.errorLabel(s(t), "", "This image is decorative").addClass("tota11y-label-warning")
                        })
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        l.removeAll()
                    }
                }]), t
            }();
        t.exports = e
    }).call(this, a(2))
},
function(n, e, r) {
    "use strict";
    (function(a) {
        var e = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var d = r(0),
            c = r(6)("info-panel"),
            p = r(37);
        r(38);
        var f = "tota11y-collapsed",
            g = "tota11y-info-hidden",
            t = function() {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.plugin = e, this.about = null, this.summary = null, this.errors = [], this.$el = null
                }
                return e(t, [{
                    key: "setAbout",
                    value: function(e) {
                        this.about = e
                    }
                }, {
                    key: "setSummary",
                    value: function(e) {
                        this.summary = e
                    }
                }, {
                    key: "addError",
                    value: function(e, t, n) {
                        var r = {
                            title: e,
                            $description: t,
                            $el: n
                        };
                        return this.errors.push(r), r
                    }
                }, {
                    key: "_addTab",
                    value: function(e, t) {
                        var n = this,
                            r = a("li", {
                                className: "tota11y-info-tab"
                            }, a("a", {
                                className: "tota11y-info-tab-anchor",
                                href: "#"
                            }, a("span", {
                                className: "tota11y-info-tab-anchor-text"
                            }, e)));
                        this.$el.find(".tota11y-info-tabs").append(r);
                        var o = d("<div>").addClass("tota11y-info-section").html(t);
                        return this.$el.find(".tota11y-info-sections").append(o), r.on("activate", function() {
                            n.$el.find(".tota11y-info-tab.active").removeClass("active"), n.$el.find(".tota11y-info-section.active").removeClass("active"), r.addClass("active"), o.addClass("active")
                        }), r.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), r.trigger("activate")
                        }), r
                    }
                }, {
                    key: "initAndPosition",
                    value: function() {
                        var r = this,
                            o = void 0,
                            a = void 0;
                        this.$el.find(".tota11y-info-dismiss-trigger").click(function(e) {
                            e.preventDefault(), e.stopPropagation(), r.$el.addClass(g), r.plugin.$checkbox.focus()
                        }), d("body").append(this.$el), o = window.innerWidth - this.$el.width() - 10, a = window.innerHeight - this.$el.height() - 10;
                        var e = this.$el.find(".tota11y-info-title"),
                            i = !1,
                            s = void 0,
                            l = void 0,
                            u = void 0,
                            c = void 0;
                        e.on("mousedown", function(e) {
                            e.preventDefault(), i = !0, s = e.pageX, l = e.pageY, u = o, c = a
                        }).on("mouseup", function(e) {
                            e.preventDefault(), i = !1
                        }), d(window).on("mousemove", function(e) {
                            if (i) {
                                e.preventDefault();
                                var t = e.pageX - s,
                                    n = e.pageY - l;
                                o = u + t, a = c + n, r.$el.css({
                                    left: o,
                                    top: a
                                })
                            }
                        }), this.$el.css({
                            left: o,
                            top: a
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var s = this;
                        this.$el && this.$el.remove();
                        var e = !1;
                        this.$el = a("div", {
                            className: "tota11y tota11y-info",
                            tabindex: "-1"
                        }, a("header", {
                            className: "tota11y-info-title"
                        }, this.plugin.getTitle(), a("span", {
                            className: "tota11y-info-controls"
                        }, a("label", {
                            className: "tota11y-info-annotation-toggle"
                        }, "Annotate:", " ", a("input", {
                            className: "toggle-annotation",
                            type: "checkbox",
                            checked: "checked"
                        })), a("a", {
                            "aria-label": "Close info panel",
                            href: "#",
                            className: "tota11y-info-dismiss-trigger"
                        }, "×"))), a("div", {
                            className: "tota11y-info-body"
                        }, a("div", {
                            className: "tota11y-info-sections"
                        }), a("ul", {
                            role: "tablist",
                            className: "tota11y-info-tabs"
                        })));
                        var t = void 0;
                        if (this.about && (t = this._addTab("About", this.about)), this.summary && (t = this._addTab("Summary", this.summary)), this.$el.find(".toggle-annotation").click(function(e) {
                                d(e.target).prop("checked") ? c.show() : c.hide()
                            }), 0 < this.errors.length) {
                            var l = d("<ul>").addClass("tota11y-info-errors"),
                                u = void 0;
                            this.errors.forEach(function(t, e) {
                                var n = d(p(t));
                                n.find(".tota11y-info-error-description").prepend(t.$description), l.append(n);
                                var r = n.find(".tota11y-info-error-trigger"),
                                    o = n.find(".tota11y-info-error-description");
                                r.click(function(e) {
                                    e.preventDefault(), e.stopPropagation(), r.toggleClass(f), o.toggleClass(f)
                                }), t.show = function() {
                                    s.$el.removeClass(g), r.removeClass(f), o.removeClass(f), u.trigger("activate"), r.parents(".tota11y-info-section")[0].scrollTop = r[0].offsetTop - 10
                                }, t.$trigger = r;
                                var a = n.find(".tota11y-info-error-scroll");
                                a.click(function(e) {
                                    e.preventDefault(), e.stopPropagation(), d(document).scrollTop(t.$el.offset().top - 80)
                                }), 0 === e && (o.toggleClass(f), r.toggleClass(f)), c.toggleHighlight(t.$el, r), c.toggleHighlight(t.$el, a);
                                var i = t.$el[0].outerHTML;
                                300 < i.length && (i = i.substring(0, 300) + "..."), n.find(".tota11y-info-error-description-code-container code").text(i)
                            }), u = t = this._addTab("Errors", l);
                            var n = d("<div>").addClass("tota11y-info-error-count").text(this.errors.length);
                            t.find(".tota11y-info-tab-anchor").append(n)
                        }
                        return t && (t.trigger("activate"), e = !0), e && this.initAndPosition(), this.$el.focus(), this.$el
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.about = null, this.summary = null, this.errors = [], this.$el && (this.$el.remove(), this.$el = null), c.removeAll()
                    }
                }]), t
            }();
        n.exports = t
    }).call(this, r(2))
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        1: function(e, t, n, r, o) {
            return '        <div class="tota11y-label-help">\n            (<a class="tota11y-label-link" href="#">?</a>)\n        </div>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i, s = null != t ? t : e.nullContext || {},
                l = n.helperMissing,
                u = "function";
            return '<span class="tota11y-label-error-icon">\n    \x3c!--\n        "Warning" icon by Lorena Salagre\n        https://thenounproject.com/lorens/\n\n        Licensed under Creative Commons by 3.0 US\n        http://creativecommons.org/licenses/by/3.0/us/legalcode\n    --\x3e\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n        <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851  c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356  C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904  c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521  c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18  c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z   M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019  c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"/>\n    </svg>\n</span>\n\n<span class="tota11y-label-content">\n    <div class="tota11y-label-text">' + (null != (a = typeof(i = null != (i = n.text || (null != t ? t.text : t)) ? i : l) == u ? i.call(s, {
                name: "text",
                hash: {},
                data: o
            }) : i) ? a : "") + "</div>\n" + (null != (a = n.if.call(s, null != t ? t.hasErrorEntry : t, {
                name: "if",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? a : "") + '    <div class="tota11y-label-detail">' + (null != (a = typeof(i = null != (i = n.detail || (null != t ? t.detail : t)) ? i : l) == u ? i.call(s, {
                name: "detail",
                hash: {},
                data: o
            }) : i) ? a : "") + "</div>\n</span>\n"
        },
        useData: !0
    })
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }
    t.__esModule = !0;
    var a = o(n(9)),
        i = r(n(31)),
        s = r(n(8)),
        l = o(n(1)),
        u = o(n(32)),
        c = r(n(33));

    function d() {
        var t = new a.HandlebarsEnvironment;
        return l.extend(t, a), t.SafeString = i.default, t.Exception = s.default, t.Utils = l, t.escapeExpression = l.escapeExpression, t.VM = u, t.template = function(e) {
            return u.template(e, t)
        }, t
    }
    var p = d();
    p.create = d, c.default(p), p.default = p, t.default = p, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0, t.registerDefaultHelpers = function(e) {
        o.default(e), a.default(e), i.default(e), s.default(e), l.default(e), u.default(e), c.default(e)
    };
    var o = r(n(21)),
        a = r(n(22)),
        i = r(n(23)),
        s = r(n(24)),
        l = r(n(25)),
        u = r(n(26)),
        c = r(n(27))
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(1);
    t.default = function(a) {
        a.registerHelper("blockHelperMissing", function(e, t) {
            var n = t.inverse,
                r = t.fn;
            if (!0 === e) return r(this);
            if (!1 === e || null == e) return n(this);
            if (i.isArray(e)) return 0 < e.length ? (t.ids && (t.ids = [t.name]), a.helpers.each(e, t)) : n(this);
            if (t.data && t.ids) {
                var o = i.createFrame(t.data);
                o.contextPath = i.appendContextPath(t.data.contextPath, t.name), t = {
                    data: o
                }
            }
            return r(e, t)
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, p = n(1),
        o = n(8),
        f = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e) {
        e.registerHelper("each", function(r, e) {
            if (!e) throw new f.default("Must pass iterator to #each");
            var o = e.fn,
                t = e.inverse,
                n = 0,
                a = "",
                i = void 0,
                s = void 0;

            function l(e, t, n) {
                i && (i.key = e, i.index = t, i.first = 0 === t, i.last = !!n, s && (i.contextPath = s + e)), a += o(r[e], {
                    data: i,
                    blockParams: p.blockParams([r[e], e], [s + e, null])
                })
            }
            if (e.data && e.ids && (s = p.appendContextPath(e.data.contextPath, e.ids[0]) + "."), p.isFunction(r) && (r = r.call(this)), e.data && (i = p.createFrame(e.data)), r && "object" == typeof r)
                if (p.isArray(r))
                    for (var u = r.length; n < u; n++) n in r && l(n, n, n === r.length - 1);
                else {
                    var c = void 0;
                    for (var d in r) r.hasOwnProperty(d) && (void 0 !== c && l(c, n - 1), c = d, n++);
                    void 0 !== c && l(c, n - 1, !0)
                } return 0 === n && (a = t(this)), a
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(8),
        a = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new a.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1);
    t.default = function(n) {
        n.registerHelper("if", function(e, t) {
            return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), n.registerHelper("unless", function(e, t) {
            return n.helpers.if.call(this, e, {
                fn: t.inverse,
                inverse: t.fn,
                hash: t.hash
            })
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(o) {
        o.registerHelper("log", function() {
            for (var e = [void 0], t = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) e.push(arguments[n]);
            var r = 1;
            null != t.hash.level ? r = t.hash.level : t.data && null != t.data.level && (r = t.data.level), e[0] = r, o.log.apply(o, e)
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e ? "constructor" !== t || e.propertyIsEnumerable(t) ? e[t] : void 0 : e
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = n(1);
    t.default = function(e) {
        e.registerHelper("with", function(e, t) {
            o.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (o.isEmpty(e)) return t.inverse(this);
            var r = t.data;
            return t.data && t.ids && ((r = o.createFrame(t.data)).contextPath = o.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                data: r,
                blockParams: o.blockParams([e], [r && r.contextPath])
            })
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.registerDefaultDecorators = function(e) {
        a.default(e)
    };
    var r, o = n(29),
        a = (r = o) && r.__esModule ? r : {
            default: r
        }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var s = n(1);
    t.default = function(e) {
        e.registerDecorator("inline", function(o, a, i, e) {
            var t = o;
            return a.partials || (a.partials = {}, t = function(e, t) {
                var n = i.partials;
                i.partials = s.extend({}, n, a.partials);
                var r = o(e, t);
                return i.partials = n, r
            }), a.partials[e.args[0]] = e.fn, t
        })
    }, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1),
        a = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(e) {
                if ("string" == typeof e) {
                    var t = r.indexOf(a.methodMap, e.toLowerCase());
                    e = 0 <= t ? t : parseInt(e, 10)
                }
                return e
            },
            log: function(e) {
                if (e = a.lookupLevel(e), "undefined" != typeof console && a.lookupLevel(a.level) <= e) {
                    var t = a.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    console[t].apply(console, r)
                }
            }
        };
    t.default = a, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function r(e) {
        this.string = e
    }
    t.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function() {
        return "" + this.string
    }, t.default = r, e.exports = t.default
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.checkRevision = function(e) {
        var t = e && e[0] || 1,
            n = p.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var r = p.REVISION_CHANGES[n],
                    o = p.REVISION_CHANGES[t];
                throw new d.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new d.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }, t.template = function(s, l) {
        if (!l) throw new d.default("No environment passed to template");
        if (!s || !s.main) throw new d.default("Unknown template object: " + typeof s);
        s.main.decorator = s.main_d, l.VM.checkRevision(s.compiler);
        var i = {
            strict: function(e, t) {
                if (!(t in e)) throw new d.default('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var n = e.length, r = 0; r < n; r++)
                    if (e[r] && null != e[r][t]) return e[r][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: c.escapeExpression,
            invokePartial: function(e, t, n) {
                n.hash && (t = c.extend({}, t, n.hash), n.ids && (n.ids[0] = !0));
                e = l.VM.resolvePartial.call(this, e, t, n);
                var r = l.VM.invokePartial.call(this, e, t, n);
                null == r && l.compile && (n.partials[n.name] = l.compile(e, s.compilerOptions, l), r = n.partials[n.name](t, n)); {
                    if (null == r) throw new d.default("The partial " + n.name + " could not be compiled when running in runtime-only mode");
                    if (n.indent) {
                        for (var o = r.split("\n"), a = 0, i = o.length; a < i && (o[a] || a + 1 !== i); a++) o[a] = n.indent + o[a];
                        r = o.join("\n")
                    }
                    return r
                }
            },
            fn: function(e) {
                var t = s[e];
                return t.decorator = s[e + "_d"], t
            },
            programs: [],
            program: function(e, t, n, r, o) {
                var a = this.programs[e],
                    i = this.fn(e);
                return t || o || r || n ? a = f(this, e, i, t, n, r, o) : a || (a = this.programs[e] = f(this, e, i)), a
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var n = e || t;
                return e && t && e !== t && (n = c.extend({}, t, e)), n
            },
            nullContext: Object.seal({}),
            noop: l.VM.noop,
            compilerInfo: s.compiler
        };

        function u(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                n = t.data;
            u._setup(t), !t.partial && s.useData && (n = function(e, t) {
                t && "root" in t || ((t = t ? p.createFrame(t) : {}).root = e);
                return t
            }(e, n));
            var r = void 0,
                o = s.useBlockParams ? [] : void 0;

            function a(e) {
                return "" + s.main(i, e, i.helpers, i.partials, n, o, r)
            }
            return s.useDepths && (r = t.depths ? e != t.depths[0] ? [e].concat(t.depths) : t.depths : [e]), (a = g(s.main, a, i, t.depths || [], n, o))(e, t)
        }
        return u.isTop = !0, u._setup = function(e) {
            e.partial ? (i.helpers = e.helpers, i.partials = e.partials, i.decorators = e.decorators) : (i.helpers = i.merge(e.helpers, l.helpers), s.usePartial && (i.partials = i.merge(e.partials, l.partials)), (s.usePartial || s.useDecorators) && (i.decorators = i.merge(e.decorators, l.decorators)))
        }, u._child = function(e, t, n, r) {
            if (s.useBlockParams && !n) throw new d.default("must pass block params");
            if (s.useDepths && !r) throw new d.default("must pass parent depths");
            return f(i, e, s[e], t, 0, n, r)
        }, u
    }, t.wrapProgram = f, t.resolvePartial = function(e, t, n) {
        e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name];
        return e
    }, t.invokePartial = function(e, t, r) {
        var o = r.data && r.data["partial-block"];
        r.partial = !0, r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
        var a = void 0;
        r.fn && r.fn !== i && function() {
            r.data = p.createFrame(r.data);
            var n = r.fn;
            a = r.data["partial-block"] = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return t.data = p.createFrame(t.data), t.data["partial-block"] = o, n(e, t)
            }, n.partials && (r.partials = c.extend({}, r.partials, n.partials))
        }();
        void 0 === e && a && (e = a); {
            if (void 0 === e) throw new d.default("The partial " + r.name + " could not be found");
            if (e instanceof Function) return e(t, r)
        }
    }, t.noop = i;
    var r, c = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }(n(1)),
        o = n(8),
        d = (r = o) && r.__esModule ? r : {
            default: r
        },
        p = n(9);

    function f(r, e, o, a, t, i, s) {
        function n(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                n = s;
            return !s || e == s[0] || e === r.nullContext && null === s[0] || (n = [e].concat(s)), o(r, e, r.helpers, r.partials, t.data || a, i && [t.blockParams].concat(i), n)
        }
        return (n = g(o, n, r, s, a, i)).program = e, n.depth = s ? s.length : 0, n.blockParams = t || 0, n
    }

    function i() {
        return ""
    }

    function g(e, t, n, r, o, a) {
        if (e.decorator) {
            var i = {};
            t = e.decorator(t, i, n, r && r[0], o, a, r), c.extend(t, i)
        }
        return t
    }
},
function(e, t, n) {
    "use strict";
    (function(r) {
        t.__esModule = !0, t.default = function(e) {
            var t = void 0 !== r ? r : window,
                n = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = n), e
            }
        }, e.exports = t.default
    }).call(this, n(34))
},
function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
},
function(e, t, n) {
    var r = n(36);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.tota11y-label {\n  background-color: #ffe800 !important;\n  border: 1px solid rgba(0, 0, 0, 0.1) !important;\n  cursor: default !important;\n  padding: 3px !important;\n  position: absolute !important;\n  z-index: 9997 !important;\n}\n.tota11y-label-error {\n  background-color: #ffaeae !important;\n}\n.tota11y-label-error-icon {\n  display: block !important;\n  float: left !important;\n  margin-right: 3px !important;\n  width: 12px !important;\n}\n.tota11y-label-success {\n  background-color: #b9eda9 !important;\n}\n.tota11y-label-warning {\n  background-color: #ffe800 !important;\n}\n.tota11y-label,\n.tota11y-label-text,\n.tota11y-label-detail,\n.tota11y-label-link,\n.tota11y-label-help {\n  color: #333 !important;\n  font-size: 12px !important;\n}\n.tota11y-label-text {\n  float: left !important;\n}\n.tota11y-label-detail {\n  clear: both !important;\n  display: none !important;\n  max-width: 300px !important;\n}\n.tota11y-label:hover .tota11y-label-detail {\n  display: block !important;\n}\n.tota11y-label-help {\n  float: left !important;\n  margin-left: 5px !important;\n}\n.tota11y-label-link:hover,\n.tota11y-label-link:focus {\n  opacity: 0.6 !important;\n  text-decoration: underline !important;\n}\n.tota11y-highlight {\n  background-color: rgba(120, 130, 200, 0.4) !important;\n  pointer-events: none !important;\n  position: absolute !important;\n  z-index: 9999 !important;\n}\n", ""])
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i;
            return '<li class="tota11y-info-error">\n    <a aria-label="Scroll to error" href="#" class="tota11y-info-error-scroll">\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-lens"></div>\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-handle"></div>\n    </a>\n    <a href="#" class="tota11y-info-error-trigger tota11y-collapsed">\n        <div class="tota11y-info-error-title">\n            <span class="tota11y-info-error-chevron">\n                &#8250;\n            </span>\n            ' + (null != (a = "function" == typeof(i = null != (i = n.title || (null != t ? t.title : t)) ? i : n.helperMissing) ? i.call(null != t ? t : e.nullContext || {}, {
                name: "title",
                hash: {},
                data: o
            }) : i) ? a : "") + '\n        </div>\n    </a>\n    <div class="tota11y-info-error-description tota11y-collapsed">\n        <div class="tota11y-info-error-description-code-container">\n            <em>Relevant code:</em>\n            <code></code>\n        </div>\n    </div>\n</li>\n'
        },
        useData: !0
    })
},
function(e, t, n) {
    var r = n(39);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.tota11y-info {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n  border-radius: 5px !important;\n  position: fixed !important;\n  z-index: 9998 !important;\n}\n.tota11y-info-controls {\n  float: right !important;\n}\n.tota11y-info-annotation-toggle {\n  float: left !important;\n  margin-right: 10px !important;\n}\n.tota11y-info-hidden {\n  display: none !important;\n}\n.tota11y-info-dismiss-trigger {\n  font-size: 25px !important;\n  line-height: 25px !important;\n  position: relative !important;\n  top: -2px !important;\n}\n.tota11y-info-title,\n.tota11y-info-body {\n  padding: 10px 10px 0 !important;\n}\n.tota11y-info-title:hover {\n  cursor: move !important;\n}\n.tota11y-info-tabs {\n  display: flex !important;\n  margin: 0 !important;\n  padding: 0 0 10px !important;\n}\n.tota11y-info-tab {\n  height: 30px !important;\n  list-style: none !important;\n  position: relative !important;\n  text-align: center !important;\n  width: 100% !important;\n  flex-grow: 1 !important;\n}\n.tota11y-info-tab-anchor {\n  position: absolute !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  text-align: center !important;\n}\n.tota11y-info-tab-anchor-text {\n  line-height: 30px !important;\n}\n.tota11y-info-tab:hover {\n  background-color: #555 !important;\n}\n.tota11y-info-tab.active,\n.tota11y-info-tab.active:hover {\n  background-color: #f2f2f2 !important;\n}\n.tota11y-info-tab.active .tota11y-info-tab-anchor-text {\n  color: #333 !important;\n}\n.tota11y-info-sections {\n  position: relative !important;\n  height: 270px !important;\n  width: 400px !important;\n}\n.tota11y-info-section {\n  position: absolute !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  background-color: #f2f2f2 !important;\n  display: none !important;\n  overflow-y: scroll !important;\n  padding: 10px !important;\n}\n.tota11y-info-section,\n.tota11y-info-section * {\n  color: #333 !important;\n}\n.tota11y-info-section.active {\n  display: block !important;\n}\n.tota11y-info-errors {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.tota11y-info-error {\n  list-style: none !important;\n  margin-bottom: 10px !important;\n}\n.tota11y-info-error-trigger {\n  display: block !important;\n}\n.tota11y-info-error-trigger.trigger-highlight {\n  background-color: rgba(120, 130, 200, 0.4) !important;\n}\n.tota11y-info-error-chevron {\n  display: inline-block !important;\n  font-size: 20px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  margin-right: 3px !important;\n  transform: rotateZ(90deg) !important;\n  transform-origin: 3px 8px !important;\n  transition: transform ease-in-out 50ms !important;\n}\n.tota11y-info-error-trigger.tota11y-collapsed .tota11y-info-error-chevron {\n  transform: rotateZ(0deg) !important;\n}\n.tota11y-info-error-title {\n  font-weight: bold !important;\n}\n.tota11y-info-error-scroll {\n  float: right !important;\n  margin-top: 3px !important;\n  padding-left: 5px !important;\n}\n.tota11y-info-error-scroll-glyph {\n  border-color: #333 !important;\n}\n.tota11y-info-error-scroll:hover .tota11y-info-error-scroll-glyph {\n  border-color: #999 !important;\n}\n.tota11y-info-error-scroll-lens {\n  border: 1px solid !important;\n  border-radius: 50% !important;\n  height: 8px !important;\n  width: 8px !important;\n}\n.tota11y-info-error-scroll-handle {\n  border-left: 1px solid !important;\n  height: 7px !important;\n  transform: translateX(-2px) translateY(-2px) rotate(45deg) !important;\n  width: 1px !important;\n}\n.tota11y-info-error-description {\n  font-size: 13px !important;\n  padding: 10px 0 0 !important;\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n.tota11y-info-error-description-code-container {\n  margin-top: 10px !important;\n}\n.tota11y-info-error-description-code-container code {\n  display: block !important;\n  margin-top: 10px !important;\n  padding: 5px 10px !important;\n  word-wrap: break-word !important;\n}\n.tota11y-info-error-description.tota11y-collapsed {\n  display: none !important;\n}\n.tota11y-info-error-count {\n  background-color: red !important;\n  border-radius: 20px !important;\n  color: white !important;\n  display: inline !important;\n  margin-left: 5px !important;\n  padding: 1px 8px !important;\n}\n", ""])
},
function(e, t, n) {
    var r = n(41);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.tota11y-plugin {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n  border-bottom: 1px solid #555 !important;\n  list-style: none !important;\n}\n.tota11y-plugin-switch {\n  align-items: center !important;\n  cursor: pointer !important;\n  display: flex !important;\n  padding: 12px 12px 12px 0 !important;\n  margin: 0 !important;\n}\n.tota11y-plugin-indicator {\n  margin: 0 15px !important;\n}\n.tota11y-plugin-indicator {\n  border-radius: 16px !important;\n  border: 1px solid #999 !important;\n  color: transparent !important;\n  font-size: 13px !important;\n  height: 16px !important;\n  line-height: 16px !important;\n  padding: 0 0 0 1px !important;\n  width: 16px !important;\n}\n.tota11y-plugin-checkbox:focus + .tota11y-plugin-indicator {\n  border-color: #639b24 !important;\n  background-color: #49721a !important;\n  color: #49721a !important;\n}\n.tota11y-plugin-checkbox:checked + .tota11y-plugin-indicator {\n  background-color: #639b24 !important;\n  border-color: #639b24 !important;\n  color: white !important;\n}\n.tota11y-plugin-title {\n  font-weight: bold !important;\n}\n.tota11y-plugin-description {\n  font-size: 11px !important;\n  font-style: italic !important;\n  width: 200px !important;\n  margin-right: 3px !important;\n}\n.tota11y-plugins-separator {\n  font-size: 12px !important;\n  margin: 7px 15px 0 !important;\n  text-transform: uppercase !important;\n}\n", ""])
},
function(e, t, n) {
    "use strict";
    var r = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }();
    var p = n(0),
        o = n(5),
        d = n(6)("contrast"),
        f = n(43),
        g = n(44);
    n(45);
    var a = function(e) {
        function t() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.preservedColors = [], e
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o), r(t, [{
            key: "getTitle",
            value: function() {
                return "Contrast"
            }
        }, {
            key: "getDescription",
            value: function() {
                return "Labels elements with insufficient contrast"
            }
        }, {
            key: "addError",
            value: function(e, t) {
                var n = e.style,
                    r = e.fgColor,
                    o = e.bgColor,
                    a = e.contrastRatio,
                    i = e.requiredRatio,
                    s = axs.color.suggestColors(o, r, {
                        AA: i
                    }).AA,
                    l = {
                        fgColorHex: axs.color.colorToString(r),
                        bgColorHex: axs.color.colorToString(o),
                        contrastRatio: a,
                        requiredRatio: i,
                        suggestedFgColorHex: s.fg,
                        suggestedBgColorHex: s.bg,
                        suggestedColorsRatio: s.contrast
                    },
                    u = p(g(l)),
                    c = n.color,
                    d = n.backgroundColor;
                return u.find(".preview-contrast-fix").click(function(e) {
                    p(e.target).prop("checked") ? (p(t).css("color", s.fg), p(t).css("background-color", s.bg)) : (p(t).css("color", c), p(t).css("background-color", d))
                }), this.error(f(l), u, p(t))
            }
        }, {
            key: "run",
            value: function() {
                var u = this,
                    c = {};
                p("*").each(function(e, t) {
                    if (axs.properties.hasDirectTextDescendant(t) && !(0 < p(t).parents(".tota11y").length || axs.utils.elementIsTransparent(t) || axs.utils.elementHasZeroArea(t))) {
                        var n = getComputedStyle(t),
                            r = axs.utils.getBgColor(n, t),
                            o = axs.utils.getFgColor(n, t, r),
                            a = axs.color.calculateContrastRatio(o, r).toFixed(2),
                            i = axs.utils.isLargeFont(n) ? 3 : 4.5,
                            s = axs.color.colorToString(o) + "/" + axs.color.colorToString(r) + "/" + i;
                        if (axs.utils.isLowContrast(a, n)) {
                            if (!c[s]) {
                                var l = u.addError({
                                    style: n,
                                    fgColor: o,
                                    bgColor: r,
                                    contrastRatio: a,
                                    requiredRatio: i
                                }, t);
                                u.preservedColors.push({
                                    $el: p(t),
                                    fg: n.color,
                                    bg: n.backgroundColor
                                }), c[s] = l
                            }
                            d.errorLabel(p(t), a, "This contrast is insufficient at this size.", c[s])
                        } else c[s] || (d.label(p(t), a).addClass("tota11y-label-success"), c[s] = !0)
                    }
                })
            }
        }, {
            key: "cleanup",
            value: function() {
                this.preservedColors.forEach(function(e) {
                    e.$el.css("color", e.fg), e.$el.css("background-color", e.bg)
                }), d.removeAll()
            }
        }]), t
    }();
    e.exports = a
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i = null != t ? t : e.nullContext || {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return "Insufficient contrast ratio (" + u(typeof(a = null != (a = n.contrastRatio || (null != t ? t.contrastRatio : t)) ? a : s) == l ? a.call(i, {
                name: "contrastRatio",
                hash: {},
                data: o
            }) : a) + " &lt; " + u(typeof(a = null != (a = n.requiredRatio || (null != t ? t.requiredRatio : t)) ? a : s) == l ? a.call(i, {
                name: "requiredRatio",
                hash: {},
                data: o
            }) : a) + ')\n\n<span class="tota11y-swatches">\n    <span class="tota11y-swatch" style="background-color: ' + u(typeof(a = null != (a = n.fgColorHex || (null != t ? t.fgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "fgColorHex",
                hash: {},
                data: o
            }) : a) + ' !important"></span>\n    /\n    <span class="tota11y-swatch" style="background-color: ' + u(typeof(a = null != (a = n.bgColorHex || (null != t ? t.bgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "bgColorHex",
                hash: {},
                data: o
            }) : a) + ' !important"></span>\n</span>\n'
        },
        useData: !0
    })
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i = null != t ? t : e.nullContext || {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div>\n    <p>\n        The color combination\n        <span class="tota11y-color-hexes">' + u(typeof(a = null != (a = n.fgColorHex || (null != t ? t.fgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "fgColorHex",
                hash: {},
                data: o
            }) : a) + "/" + u(typeof(a = null != (a = n.bgColorHex || (null != t ? t.bgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "bgColorHex",
                hash: {},
                data: o
            }) : a) + "</span>\n        has a contrast ratio of <strong>" + u(typeof(a = null != (a = n.contrastRatio || (null != t ? t.contrastRatio : t)) ? a : s) == l ? a.call(i, {
                name: "contrastRatio",
                hash: {},
                data: o
            }) : a) + "</strong>, which is not\n        sufficient. At this size, you will need a ratio of at least\n        <strong>" + u(typeof(a = null != (a = n.requiredRatio || (null != t ? t.requiredRatio : t)) ? a : s) == l ? a.call(i, {
                name: "requiredRatio",
                hash: {},
                data: o
            }) : a) + '</strong>.\n    </p>\n\n    <p>\n        Consider using the following foreground/background combination:\n    </p>\n\n    <div class="tota11y-contrast-suggestion">\n        <span class="tota11y-color-hexes">\n            ' + u(typeof(a = null != (a = n.suggestedFgColorHex || (null != t ? t.suggestedFgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "suggestedFgColorHex",
                hash: {},
                data: o
            }) : a) + "/" + u(typeof(a = null != (a = n.suggestedBgColorHex || (null != t ? t.suggestedBgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "suggestedBgColorHex",
                hash: {},
                data: o
            }) : a) + '\n        </span>\n\n        <span class="tota11y-swatches">\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + u(typeof(a = null != (a = n.suggestedFgColorHex || (null != t ? t.suggestedFgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "suggestedFgColorHex",
                hash: {},
                data: o
            }) : a) + ' !important">\n            </span>\n            /\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + u(typeof(a = null != (a = n.suggestedBgColorHex || (null != t ? t.suggestedBgColorHex : t)) ? a : s) == l ? a.call(i, {
                name: "suggestedBgColorHex",
                hash: {},
                data: o
            }) : a) + ' !important">\n            </span>\n        </span>\n\n        has a ratio of <strong>' + u(typeof(a = null != (a = n.suggestedColorsRatio || (null != t ? t.suggestedColorsRatio : t)) ? a : s) == l ? a.call(i, {
                name: "suggestedColorsRatio",
                hash: {},
                data: o
            }) : a) + '</strong>\n        <br />\n\n        <label>\n            Preview:\n            <input class="preview-contrast-fix" type="checkbox">\n        </label>\n    </div>\n</div>\n'
        },
        useData: !0
    })
},
function(e, t, n) {
    var r = n(46);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-swatches {\n  margin-left: 5px !important;\n  margin-right: 5px !important;\n  position: relative !important;\n  top: 1px !important;\n}\n.tota11y-swatch {\n  border: 1px solid #000 !important;\n  display: inline-block !important;\n  height: 12px !important;\n  width: 12px !important;\n}\n.tota11y-contrast-suggestion {\n  margin: 0 0 15px 15px !important;\n}\n.tota11y-color-hexes {\n  font-family: monospace !important;\n}\n", ""])
},
function(t, e, a) {
    "use strict";
    (function(r) {
        var n = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var c = a(0),
            o = a(5),
            d = a(6)("headings"),
            p = a(48);
        a(49);
        var f = function(e) {
                return {
                    title: "First heading is not an &lt;h1&gt;",
                    description: "\n                <div>\n                    To give your document a proper structure for assistive\n                    technologies, it is important to lay out your headings\n                    beginning with an <code>&lt;h1&gt;</code>. We found an\n                    <code>&lt;h" + e + "&gt;</code> instead.\n                </div>\n            "
                }
            },
            g = function(e, t) {
                function n(e) {
                    return "<code>&lt;h" + e + "&gt;</code>"
                }
                var r = "\n            <div>\n                This document contains an " + n(t) + " tag directly\n                following an " + n(e) + ". In order to maintain a consistent\n                outline of the page for assistive technologies, reduce the gap in\n                the heading level by upgrading this tag to an\n                " + n(e + 1);
                return 1 !== e && (r += " or " + n(e)), {
                    title: "\n                Nonconsecutive heading level used (h" + e + " &rarr;\n                h" + t + ")\n            ",
                    description: r += ".</div>"
                }
            },
            e = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o), n(t, [{
                    key: "getTitle",
                    value: function() {
                        return "Headings"
                    }
                }, {
                    key: "getDescription",
                    value: function() {
                        return "\n            Highlights headings (&lt;h1&gt;, &lt;h2&gt;, etc) and\n            order violations\n        "
                    }
                }, {
                    key: "outline",
                    value: function(e) {
                        var s = this,
                            l = [],
                            u = void 0;
                        return e.each(function(e, t) {
                            var n = c(t),
                                r = +n.prop("tagName").slice(1),
                                o = void 0;
                            0 === e && 1 != r ? o = f(r) : u && 1 < r - u && (o = g(u, r));
                            var a = c(p({
                                level: u = r,
                                text: n.text()
                            }));
                            if (l.push(a), d.toggleHighlight(n, a), o) {
                                var i = s.error(o.title, c(o.description), n);
                                d.errorLabel(n, n.prop("tagName").toLowerCase(), o.title, i), a.find(".tota11y-heading-outline-level").addClass("tota11y-label-error")
                            } else d.label(n).addClass("tota11y-label-success"), a.find(".tota11y-heading-outline-level").addClass("tota11y-label-success")
                        }), l
                    }
                }, {
                    key: "run",
                    value: function() {
                        var e = c("h1, h2, h3, h4, h5, h6"),
                            t = this.outline(e);
                        if (t.length) {
                            var n = r("div", {
                                className: "tota11y-heading-outline"
                            }, t);
                            this.summary(n)
                        }
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        d.removeAll()
                    }
                }]), t
            }();
        t.exports = e
    }).call(this, a(2))
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i = null != t ? t : e.nullContext || {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div class="tota11y-heading-outline-entry heading-level-' + u(typeof(a = null != (a = n.level || (null != t ? t.level : t)) ? a : s) == l ? a.call(i, {
                name: "level",
                hash: {},
                data: o
            }) : a) + '">\n    <span class="tota11y-heading-outline-level tota11y-label">' + u(typeof(a = null != (a = n.level || (null != t ? t.level : t)) ? a : s) == l ? a.call(i, {
                name: "level",
                hash: {},
                data: o
            }) : a) + '</span>\n    <span class="tota11y-heading-outline-heading-text">' + u(typeof(a = null != (a = n.text || (null != t ? t.text : t)) ? a : s) == l ? a.call(i, {
                name: "text",
                hash: {},
                data: o
            }) : a) + "</span>\n</div>\n"
        },
        useData: !0
    })
},
function(e, t, n) {
    var r = n(50);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.tota11y-heading-outline {\n  color: #333 !important;\n}\n.tota11y-heading-outline-entry {\n  margin-bottom: 8px !important;\n}\n.tota11y-heading-outline-entry.heading-level-1 {\n  margin-left: 0 !important;\n}\n.tota11y-heading-outline-entry.heading-level-2 {\n  margin-left: 20px !important;\n}\n.tota11y-heading-outline-entry.heading-level-3 {\n  margin-left: 40px !important;\n}\n.tota11y-heading-outline-entry.heading-level-4 {\n  margin-left: 60px !important;\n}\n.tota11y-heading-outline-entry.heading-level-5 {\n  margin-left: 80px !important;\n}\n.tota11y-heading-outline-entry.heading-level-6 {\n  margin-left: 100px !important;\n}\n.tota11y-heading-outline-level {\n  position: relative !important;\n  top: -2px !important;\n  right: auto !important;\n  bottom: auto !important;\n  left: auto !important;\n  margin-right: 5px !important;\n  padding: 2px 3px !important;\n  pointer-events: none !important;\n}\n", ""])
},
function(e, t, n) {
    "use strict";
    var r = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }();
    var a = n(0),
        o = n(5),
        i = n(6)("labels"),
        s = n(10),
        l = n(52),
        u = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "getTitle",
                value: function() {
                    return "Labels"
                }
            }, {
                key: "getDescription",
                value: function() {
                    return "Identifies inputs with missing labels"
                }
            }, {
                key: "errorMessage",
                value: function(e) {
                    return l({
                        placeholder: e.attr("placeholder"),
                        id: e.attr("id"),
                        tagName: e.prop("tagName").toLowerCase()
                    })
                }
            }, {
                key: "run",
                value: function() {
                    var o = this,
                        e = s("controlsWithoutLabel"),
                        t = e.result,
                        n = e.elements;
                    "FAIL" === t && n.forEach(function(e) {
                        var t = a(e),
                            n = "Input is missing a label",
                            r = o.error(n, a(o.errorMessage(t)), t);
                        i.errorLabel(t, "", n, r)
                    })
                }
            }, {
                key: "cleanup",
                value: function() {
                    i.removeAll()
                }
            }]), t
        }();
    e.exports = u
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        1: function(e, t, n, r, o) {
            return "    <p>\n        The <code>placeholder</code> attribute is not guaranteed to be read by\n        assistive technologies. It is better to include a proper label.\n    </p>\n"
        },
        3: function(e, t, n, r, o) {
            var a;
            return '    <p>\n        The simplest way to do so is by creating a <code>&lt;label&gt;</code>\n        tag with a <code>for</code> attribute like so:\n    </p>\n\n    <pre><code>&lt;label for="' + e.escapeExpression("function" == typeof(a = null != (a = n.id || (null != t ? t.id : t)) ? a : n.helperMissing) ? a.call(null != t ? t : e.nullContext || {}, {
                name: "id",
                hash: {},
                data: o
            }) : a) + '"&gt;\n    Label text here...\n&lt;/label&gt;</code></pre>\n'
        },
        5: function(e, t, n, r, o) {
            var a;
            return '    <p>\n        You can give this element an <code>id</code> attribute and build a\n        <code>&lt;label&gt;</code> with a corresponding <code>for</code>\n        attribute like so:\n\n        <pre><code>&lt;label for="my-input"&gt;\n    Label text here...\n&lt;/label&gt;\n&lt;' + e.escapeExpression("function" == typeof(a = null != (a = n.tagName || (null != t ? t.tagName : t)) ? a : n.helperMissing) ? a.call(null != t ? t : e.nullContext || {}, {
                name: "tagName",
                hash: {},
                data: o
            }) : a) + ' id="my-input"&gt;</code></pre>\n    </p>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            var a, i = null != t ? t : e.nullContext || {};
            return (null != (a = n.if.call(i, null != t ? t.placeholder : t, {
                name: "if",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? a : "") + "\n" + (null != (a = n.if.call(i, null != t ? t.id : t, {
                name: "if",
                hash: {},
                fn: e.program(3, o, 0),
                inverse: e.program(5, o, 0),
                data: o
            })) ? a : "")
        },
        useData: !0
    })
},
function(e, t, n) {
    "use strict";
    var r = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }();
    var o = n(0),
        a = n(5),
        i = n(6)("landmarks"),
        s = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), r(t, [{
                key: "getTitle",
                value: function() {
                    return "Landmarks"
                }
            }, {
                key: "getDescription",
                value: function() {
                    return "Labels all ARIA landmarks"
                }
            }, {
                key: "run",
                value: function() {
                    o("[role]:not(.tota11y-toolbar,.tota11y-plugin)").each(function() {
                        i.label(o(this), o(this).attr("role"))
                    })
                }
            }, {
                key: "cleanup",
                value: function() {
                    i.removeAll()
                }
            }]), t
        }();
    e.exports = s
},
function(t, e, a) {
    "use strict";
    (function(i) {
        var n = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var s = a(0),
            r = a(5),
            o = a(6)("link-text"),
            e = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r), n(t, [{
                    key: "getTitle",
                    value: function() {
                        return "Link text"
                    }
                }, {
                    key: "getDescription",
                    value: function() {
                        return "\n            Identifies links that may be confusing when read by a screen\n            reader\n        "
                    }
                }, {
                    key: "isDescriptiveText",
                    value: function(e) {
                        if (null == e) return !1;
                        var t = new RegExp("\\b(" + ["click", "tap", "go", "here", "learn", "more", "this", "page", "link", "about"].join("|") + ")\\b", "ig");
                        return "" !== (e = e.replace(/[^a-zA-Z ]/g, "").replace(t, "")).trim()
                    }
                }, {
                    key: "reportError",
                    value: function(e, t, n) {
                        var r = this.error("Link text is unclear", t, e);
                        o.errorLabel(e, "", 'Link text "' + n + '" is unclear', r)
                    }
                }, {
                    key: "run",
                    value: function() {
                        var a = this;
                        s("a").each(function(e, t) {
                            var n = s(t);
                            if (!n.parents(".tota11y").length && !axs.utils.isElementOrAncestorHidden(t)) {
                                var r = axs.properties.findTextAlternatives(t, {});
                                if (!a.isDescriptiveText(r)) {
                                    var o = i("div", null, "The text", " ", i("i", null, '"', r, '"'), " ", "is unclear without context and may be confusing to screen readers. Consider rearranging the", " ", i("code", null, "&lt;a&gt;&lt;/a&gt;"), " ", "tags or including special screen reader text.");
                                    a.reportError(n, o, r)
                                }
                            }
                        })
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        o.removeAll()
                    }
                }]), t
            }();
        t.exports = e
    }).call(this, a(2))
},
function(t, e, i) {
    "use strict";
    (function(r) {
        var n = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }();
        var o = i(0),
            a = i(5);
        i(56);
        var e = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a), n(t, [{
                key: "getTitle",
                value: function() {
                    return "Screen Reader Wand"
                }
            }, {
                key: "getDescription",
                value: function() {
                    return "Hover over elements to view them as a screen reader would"
                }
            }, {
                key: "run",
                value: function() {
                    this.summary(" "), this.panel.render(), o(document).on("mousemove.wand", function(e) {
                        var t = document.elementFromPoint(e.clientX, e.clientY),
                            n = axs.properties.findTextAlternatives(t, {});
                        o(".tota11y-outlined").removeClass("tota11y-outlined"), o(t).addClass("tota11y-outlined"), n ? o(".tota11y-info-section.active").text(n) : o(".tota11y-info-section.active").html(r("i", {
                            className: "tota11y-nothingness"
                        }, "No text visible to a screen reader"))
                    })
                }
            }, {
                key: "cleanup",
                value: function() {
                    o(".tota11y-outlined").removeClass("tota11y-outlined"), o(document).off("mousemove.wand")
                }
            }]), t
        }();
        t.exports = e
    }).call(this, i(2))
},
function(e, t, n) {
    var r = n(57);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    (e.exports = n(3)(!1)).push([e.i, ".tota11y-dark-color-scheme {\n  background-color: #333 !important;\n  color: #f2f2f2 !important;\n}\n.tota11y-no-select {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.tota11y-outlined {\n  outline: 2px solid #7882c8 !important;\n}\n.tota11y-nothingness {\n  color: #888 !important;\n}\n", ""])
},
function(e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, o) {
            return '\x3c!--\n    "Glasses" icon by Kyle Scott\n    https://thenounproject.com/Kyle/\n\n    Licensed under Creative Commons by 3.0 US\n    http://creativecommons.org/licenses/by/3.0/us/legalcode\n--\x3e\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n    <path fill="#ffffff" d="M74.466,35.24c-1.069-0.19-2.208-0.267-3.228-0.562c-0.639-0.184-1.348-0.622-1.965-1.075  c-1.246-0.919-2.479-1.557-3.928-2.152c-0.671-0.276-1.617-0.698-2.432-0.608c-0.582,0.064-1.196,0.664-1.73,1.029  c-1.196,0.818-2.186,1.442-3.32,2.198c-0.524,0.35-1.308,0.798-1.543,1.263c-0.142,0.279-0.13,0.736-0.281,1.029  c-0.35,0.679-1.069,1.434-1.777,1.403c-0.835-0.038-1.773-1.518-1.449-2.619c0.177-0.602,1.126-0.902,1.776-1.262  c2.041-1.134,3.803-2.3,5.52-3.602c1.106-0.841,2.579-1.471,4.536-1.542c1.889-0.071,4.45-0.083,6.22,0  c1.465,0.066,2.698,0.164,3.976,0.42c7.308,1.469,14.698,2.788,21.607,4.77c0.739,0.213,2.896,0.613,3.086,1.311  c0.121,0.439-0.236,1.435-0.375,2.151c-0.165,0.865-0.292,1.626-0.42,2.246c-0.12,0.574-0.65,1.174-0.936,1.776  c-0.842,1.778-1.379,3.821-2.104,5.753c-0.954,2.545-2.02,4.859-3.554,6.968c-1.46,2.005-3.442,3.33-5.987,4.536  c-1.128,0.534-2.43,1.083-3.835,1.403c-1.355,0.311-3.263,0.63-4.817,0.28c-2.233-0.501-3.081-2.543-3.882-4.536  c-0.848-2.115-1.351-4.049-1.636-6.827c-2.692,0.176-3.259,2.014-4.163,3.928c-0.384,0.812-0.792,1.623-1.168,2.385  c-1.542,3.115-3.197,6.47-5.473,8.746c-1.215,1.213-2.581,2.03-4.35,2.758c-3.331,1.373-6.847,2.569-10.757,3.462  c-3.598,0.821-8.923,1.642-12.252-0.093c-2.136-1.113-3.105-3.939-4.023-6.268c-0.458-1.159-0.835-2.459-1.262-3.882  c-0.378-1.259-0.708-2.778-1.543-3.602c-1.053-1.037-2.78-1.414-3.227-2.993c-0.815-0.307-1.563-0.821-2.292-1.308  c-4.349-2.915-8.693-5.774-13.141-8.606c-0.727-0.462-1.667-0.958-2.151-1.497c-0.712-0.792-1.108-2.117-1.684-3.133  c-0.265-0.469-0.588-0.92-0.888-1.357c-0.275-0.4-0.536-0.997-1.076-1.076C2.223,36.823,2.365,37.469,2.349,38  c-0.017,0.549-0.077,1.172-0.047,1.823c0.028,0.606,0.297,1.049,0.28,1.544c-0.018,0.515-0.291,1.036-0.841,1.029  c-0.727-0.009-0.8-0.98-0.983-1.686c-0.209-0.807-0.483-1.551-0.421-2.245c0.049-0.531,0.341-1.223,0.468-2.057  c0.246-1.599,0.126-3.078,1.451-3.415C3.004,32.804,4,33.38,4.781,33.649c0.789,0.272,1.597,0.428,2.339,0.702  c0.854,0.316,1.706,0.875,2.524,1.355c2.526,1.484,4.626,3.112,7.062,4.63c3.273,2.041,6.545,3.955,9.307,6.267  c7.434-2.179,16.722-3.566,25.863-4.302c4.176-0.337,8.326-0.174,12.253,0.374c5.624,0.787,10.073-1.58,13.844-3.18  c2.035-0.864,4.078-1.653,6.173-2.573C80.804,36.331,77.705,35.814,74.466,35.24z M93.968,39.729  c-1.838-0.388-3.732-0.737-5.471-1.075c-0.059-0.012-0.127-0.067-0.188-0.046c-1.143,0.392-2.279,0.613-3.367,1.029  c-2.033,0.773-4.015,1.775-5.752,3.039C78.33,43.3,77.372,44,76.897,44.733c-1.609,2.489-1.206,7.214-0.467,10.149  c0.27,1.071,0.411,1.79,0.889,2.666c3.022,1.287,6.88-0.183,8.885-1.684c1.526-1.142,2.676-2.75,3.602-4.35  C91.815,48.042,93.102,43.946,93.968,39.729z M64.878,46.089c-6.121-1.937-14.865-0.822-21.232,0.467  c-4.477,0.907-9.474,1.92-10.944,5.753c-0.801,2.086-1.009,5.098-0.701,7.903c0.284,2.599,1.076,4.892,2.011,6.594  c2.943,2.698,10.038,1.581,14.124,0.375c2.523-0.745,4.112-1.389,5.845-2.197c1.973-0.921,4.636-1.939,5.285-4.116  c0.179-0.597,0.115-1.244,0.188-1.824c0.492-3.909,1.942-7.447,4.303-9.634c0.477-0.441,1.146-0.679,1.357-1.262  C65.37,47.428,65.13,46.709,64.878,46.089z"/>\n</svg>\n'
        },
        useData: !0
    })
},
function(e, t, n) {
    n(60)(n(61))
},
function(e, t) {
    e.exports = function(e) {
        function t(e) {
            "undefined" != typeof console && (console.error || console.log)("[Script Loader]", e)
        }
        try {
            "undefined" != typeof execScript && "undefined" != typeof attachEvent && "undefined" == typeof addEventListener ? execScript(e) : "undefined" != typeof eval ? eval.call(null, e) : t("EvalError: No eval function available")
        } catch (e) {
            t(e)
        }
    }
},
function(e, t) {
    e.exports = '/*\n * Copyright 2016 Google Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * Generated from http://github.com/GoogleChrome/accessibility-developer-tools/tree/7d778f7da58af341a47b3a6f6457c2842b24d4d8\n *\n * See project README for build steps.\n */\n\n// AUTO-GENERATED CONTENT BELOW: DO NOT EDIT! See above for details.\n\nvar fn = (function() {\n  var COMPILED = !0, goog = goog || {};\ngoog.global = this;\ngoog.isDef = function(a) {\n  return void 0 !== a;\n};\ngoog.exportPath_ = function(a, b, c) {\n  a = a.split(".");\n  c = c || goog.global;\n  a[0] in c || !c.execScript || c.execScript("var " + a[0]);\n  for (var d;a.length && (d = a.shift());) {\n    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};\n  }\n};\ngoog.define = function(a, b) {\n  var c = b;\n  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));\n  goog.exportPath_(a, c);\n};\ngoog.DEBUG = !0;\ngoog.LOCALE = "en";\ngoog.TRUSTED_SITE = !0;\ngoog.STRICT_MODE_COMPATIBLE = !1;\ngoog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;\ngoog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;\ngoog.provide = function(a) {\n  if (goog.isInModuleLoader_()) {\n    throw Error("goog.provide can not be used within a goog.module.");\n  }\n  if (!COMPILED && goog.isProvided_(a)) {\n    throw Error(\'Namespace "\' + a + \'" already declared.\');\n  }\n  goog.constructNamespace_(a);\n};\ngoog.constructNamespace_ = function(a, b) {\n  if (!COMPILED) {\n    delete goog.implicitNamespaces_[a];\n    for (var c = a;(c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {\n      goog.implicitNamespaces_[c] = !0;\n    }\n  }\n  goog.exportPath_(a, b);\n};\ngoog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;\ngoog.module = function(a) {\n  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {\n    throw Error("Invalid module identifier");\n  }\n  if (!goog.isInModuleLoader_()) {\n    throw Error("Module " + a + " has been loaded incorrectly.");\n  }\n  if (goog.moduleLoaderState_.moduleName) {\n    throw Error("goog.module may only be called once per module.");\n  }\n  goog.moduleLoaderState_.moduleName = a;\n  if (!COMPILED) {\n    if (goog.isProvided_(a)) {\n      throw Error(\'Namespace "\' + a + \'" already declared.\');\n    }\n    delete goog.implicitNamespaces_[a];\n  }\n};\ngoog.module.get = function(a) {\n  return goog.module.getInternal_(a);\n};\ngoog.module.getInternal_ = function(a) {\n  if (!COMPILED) {\n    return goog.isProvided_(a) ? a in goog.loadedModules_ ? goog.loadedModules_[a] : goog.getObjectByName(a) : null;\n  }\n};\ngoog.moduleLoaderState_ = null;\ngoog.isInModuleLoader_ = function() {\n  return null != goog.moduleLoaderState_;\n};\ngoog.module.declareLegacyNamespace = function() {\n  if (!COMPILED && !goog.isInModuleLoader_()) {\n    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");\n  }\n  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {\n    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");\n  }\n  goog.moduleLoaderState_.declareLegacyNamespace = !0;\n};\ngoog.setTestOnly = function(a) {\n  if (goog.DISALLOW_TEST_ONLY_CODE) {\n    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));\n  }\n};\ngoog.forwardDeclare = function(a) {\n};\nCOMPILED || (goog.isProvided_ = function(a) {\n  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));\n}, goog.implicitNamespaces_ = {"goog.module":!0});\ngoog.getObjectByName = function(a, b) {\n  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {\n    if (goog.isDefAndNotNull(d[e])) {\n      d = d[e];\n    } else {\n      return null;\n    }\n  }\n  return d;\n};\ngoog.globalize = function(a, b) {\n  var c = b || goog.global, d;\n  for (d in a) {\n    c[d] = a[d];\n  }\n};\ngoog.addDependency = function(a, b, c, d) {\n  if (goog.DEPENDENCIES_ENABLED) {\n    var e;\n    a = a.replace(/\\\\/g, "/");\n    var f = goog.dependencies_;\n    d && "boolean" !== typeof d || (d = d ? {module:"goog"} : {});\n    for (var g = 0;e = b[g];g++) {\n      f.nameToPath[e] = a, f.loadFlags[a] = d;\n    }\n    for (d = 0;b = c[d];d++) {\n      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;\n    }\n  }\n};\ngoog.ENABLE_DEBUG_LOADER = !0;\ngoog.logToConsole_ = function(a) {\n  goog.global.console && goog.global.console.error(a);\n};\ngoog.require = function(a) {\n  if (!COMPILED) {\n    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);\n    if (goog.isProvided_(a)) {\n      return goog.isInModuleLoader_() ? goog.module.getInternal_(a) : null;\n    }\n    if (goog.ENABLE_DEBUG_LOADER) {\n      var b = goog.getPathFromDeps_(a);\n      if (b) {\n        return goog.writeScripts_(b), null;\n      }\n    }\n    a = "goog.require could not find: " + a;\n    goog.logToConsole_(a);\n    throw Error(a);\n  }\n};\ngoog.basePath = "";\ngoog.nullFunction = function() {\n};\ngoog.abstractMethod = function() {\n  throw Error("unimplemented abstract method");\n};\ngoog.addSingletonGetter = function(a) {\n  a.getInstance = function() {\n    if (a.instance_) {\n      return a.instance_;\n    }\n    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);\n    return a.instance_ = new a;\n  };\n};\ngoog.instantiatedSingletons_ = [];\ngoog.LOAD_MODULE_USING_EVAL = !0;\ngoog.SEAL_MODULE_EXPORTS = goog.DEBUG;\ngoog.loadedModules_ = {};\ngoog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;\ngoog.ALWAYS_TRANSPILE = !1;\ngoog.NEVER_TRANSPILE = !1;\ngoog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {loadFlags:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {\n  var a = goog.global.document;\n  return null != a && "write" in a;\n}, goog.findBasePath_ = function() {\n  if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {\n    goog.basePath = goog.global.CLOSURE_BASE_PATH;\n  } else {\n    if (goog.inHtmlDocument_()) {\n      for (var a = goog.global.document.getElementsByTagName("SCRIPT"), b = a.length - 1;0 <= b;--b) {\n        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;\n        if ("base.js" == c.substr(d - 7, 7)) {\n          goog.basePath = c.substr(0, d - 7);\n          break;\n        }\n      }\n    }\n  }\n}, goog.importScript_ = function(a, b) {\n  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);\n}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importProcessedScript_ = function(a, b, c) {\n  goog.importScript_("", \'goog.retrieveAndExec_("\' + a + \'", \' + b + ", " + c + ");");\n}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {\n  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\\n//# sourceURL=" + a + "\\n") + ");" : \'goog.loadModule(function(exports) {"use strict";\' + b + "\\n;return exports});\\n//# sourceURL=" + a + "\\n";\n}, goog.loadQueuedModules_ = function() {\n  var a = goog.queuedModules_.length;\n  if (0 < a) {\n    var b = goog.queuedModules_;\n    goog.queuedModules_ = [];\n    for (var c = 0;c < a;c++) {\n      goog.maybeProcessDeferredPath_(b[c]);\n    }\n  }\n}, goog.maybeProcessDeferredDep_ = function(a) {\n  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));\n}, goog.isDeferredModule_ = function(a) {\n  var b = (a = goog.getPathFromDeps_(a)) && goog.dependencies_.loadFlags[a] || {};\n  return a && ("goog" == b.module || goog.needsTranspile_(b.lang)) ? goog.basePath + a in goog.dependencies_.deferred : !1;\n}, goog.allDepsAreAvailable_ = function(a) {\n  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {\n    for (var b in goog.dependencies_.requires[a]) {\n      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {\n        return !1;\n      }\n    }\n  }\n  return !0;\n}, goog.maybeProcessDeferredPath_ = function(a) {\n  if (a in goog.dependencies_.deferred) {\n    var b = goog.dependencies_.deferred[a];\n    delete goog.dependencies_.deferred[a];\n    goog.globalEval(b);\n  }\n}, goog.loadModuleFromUrl = function(a) {\n  goog.retrieveAndExec_(a, !0, !1);\n}, goog.loadModule = function(a) {\n  var b = goog.moduleLoaderState_;\n  try {\n    goog.moduleLoaderState_ = {moduleName:void 0, declareLegacyNamespace:!1};\n    var c;\n    if (goog.isFunction(a)) {\n      c = a.call(goog.global, {});\n    } else {\n      if (goog.isString(a)) {\n        c = goog.loadModuleFromSource_.call(goog.global, a);\n      } else {\n        throw Error("Invalid module definition");\n      }\n    }\n    var d = goog.moduleLoaderState_.moduleName;\n    if (!goog.isString(d) || !d) {\n      throw Error(\'Invalid module name "\' + d + \'"\');\n    }\n    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(c);\n    goog.loadedModules_[d] = c;\n  } finally {\n    goog.moduleLoaderState_ = b;\n  }\n}, goog.loadModuleFromSource_ = function(a) {\n  eval(a);\n  return {};\n}, goog.writeScriptSrcNode_ = function(a) {\n  goog.global.document.write(\'<script type="text/javascript" src="\' + a + \'">\\x3c/script>\');\n}, goog.appendScriptSrcNode_ = function(a) {\n  var b = goog.global.document, c = b.createElement("script");\n  c.type = "text/javascript";\n  c.src = a;\n  c.defer = !1;\n  c.async = !1;\n  b.head.appendChild(c);\n}, goog.writeScriptTag_ = function(a, b) {\n  if (goog.inHtmlDocument_()) {\n    var c = goog.global.document;\n    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {\n      if (/\\bdeps.js$/.test(a)) {\n        return !1;\n      }\n      throw Error(\'Cannot write "\' + a + \'" after document load\');\n    }\n    if (void 0 === b) {\n      if (goog.IS_OLD_IE_) {\n        var d = " onreadystatechange=\'goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")\' ";\n        c.write(\'<script type="text/javascript" src="\' + a + \'"\' + d + ">\\x3c/script>");\n      } else {\n        goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(a) : goog.writeScriptSrcNode_(a);\n      }\n    } else {\n      c.write(\'<script type="text/javascript">\' + b + "\\x3c/script>");\n    }\n    return !0;\n  }\n  return !1;\n}, goog.needsTranspile_ = function(a) {\n  if (goog.ALWAYS_TRANSPILE) {\n    return !0;\n  }\n  if (goog.NEVER_TRANSPILE) {\n    return !1;\n  }\n  if (!goog.transpiledLanguages_) {\n    goog.transpiledLanguages_ = {es5:!0, es6:!0, "es6-impl":!0};\n    try {\n      goog.transpiledLanguages_.es5 = eval("[1,].length!=1"), eval(\'(()=>{"use strict";let a={};const X=class{constructor(){}x(z){return new Map([...arguments]).get(z[0])==3}};return new X().x([a,3])})()\') && (goog.transpiledLanguages_["es6-impl"] = !1), eval(\'(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()\') && \n      (goog.transpiledLanguages_.es6 = !1);\n    } catch (b) {\n    }\n  }\n  return !!goog.transpiledLanguages_[a];\n}, goog.transpiledLanguages_ = null, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {\n  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();\n  return !0;\n}, goog.writeScripts_ = function(a) {\n  function b(a) {\n    if (!(a in e.written || a in e.visited)) {\n      e.visited[a] = !0;\n      if (a in e.requires) {\n        for (var f in e.requires[a]) {\n          if (!goog.isProvided_(f)) {\n            if (f in e.nameToPath) {\n              b(e.nameToPath[f]);\n            } else {\n              throw Error("Undefined nameToPath for " + f);\n            }\n          }\n        }\n      }\n      a in d || (d[a] = !0, c.push(a));\n    }\n  }\n  var c = [], d = {}, e = goog.dependencies_;\n  b(a);\n  for (a = 0;a < c.length;a++) {\n    var f = c[a];\n    goog.dependencies_.written[f] = !0;\n  }\n  var g = goog.moduleLoaderState_;\n  goog.moduleLoaderState_ = null;\n  for (a = 0;a < c.length;a++) {\n    if (f = c[a]) {\n      var h = e.loadFlags[f] || {}, k = goog.needsTranspile_(h.lang);\n      "goog" == h.module || k ? goog.importProcessedScript_(goog.basePath + f, "goog" == h.module, k) : goog.importScript_(goog.basePath + f);\n    } else {\n      throw goog.moduleLoaderState_ = g, Error("Undefined script input");\n    }\n  }\n  goog.moduleLoaderState_ = g;\n}, goog.getPathFromDeps_ = function(a) {\n  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;\n}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));\ngoog.normalizePath_ = function(a) {\n  a = a.split("/");\n  for (var b = 0;b < a.length;) {\n    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;\n  }\n  return a.join("/");\n};\ngoog.loadFileSync_ = function(a) {\n  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {\n    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);\n  }\n  try {\n    var b = new goog.global.XMLHttpRequest;\n    b.open("get", a, !1);\n    b.send();\n    return 0 == b.status || 200 == b.status ? b.responseText : null;\n  } catch (c) {\n    return null;\n  }\n};\ngoog.retrieveAndExec_ = function(a, b, c) {\n  if (!COMPILED) {\n    var d = a;\n    a = goog.normalizePath_(a);\n    var e = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, f = goog.loadFileSync_(a);\n    if (null == f) {\n      throw Error(\'Load of "\' + a + \'" failed\');\n    }\n    c && (f = goog.transpile_.call(goog.global, f, a));\n    f = b ? goog.wrapModule_(a, f) : f + ("\\n//# sourceURL=" + a);\n    goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[d] = f, goog.queuedModules_.push(d)) : e(a, f);\n  }\n};\ngoog.transpile_ = function(a, b) {\n  var c = goog.global.$jscomp;\n  c || (goog.global.$jscomp = c = {});\n  var d = c.transpile;\n  if (!d) {\n    var e = goog.basePath + "transpile.js", f = goog.loadFileSync_(e);\n    f && (eval(f + "\\n//# sourceURL=" + e), c = goog.global.$jscomp, d = c.transpile);\n  }\n  d || (d = c.transpile = function(a, b) {\n    goog.logToConsole_(b + " requires transpilation but no transpiler was found.");\n    return a;\n  });\n  return d(a, b);\n};\ngoog.typeOf = function(a) {\n  var b = typeof a;\n  if ("object" == b) {\n    if (a) {\n      if (a instanceof Array) {\n        return "array";\n      }\n      if (a instanceof Object) {\n        return b;\n      }\n      var c = Object.prototype.toString.call(a);\n      if ("[object Window]" == c) {\n        return "object";\n      }\n      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {\n        return "array";\n      }\n      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {\n        return "function";\n      }\n    } else {\n      return "null";\n    }\n  } else {\n    if ("function" == b && "undefined" == typeof a.call) {\n      return "object";\n    }\n  }\n  return b;\n};\ngoog.isNull = function(a) {\n  return null === a;\n};\ngoog.isDefAndNotNull = function(a) {\n  return null != a;\n};\ngoog.isArray = function(a) {\n  return "array" == goog.typeOf(a);\n};\ngoog.isArrayLike = function(a) {\n  var b = goog.typeOf(a);\n  return "array" == b || "object" == b && "number" == typeof a.length;\n};\ngoog.isDateLike = function(a) {\n  return goog.isObject(a) && "function" == typeof a.getFullYear;\n};\ngoog.isString = function(a) {\n  return "string" == typeof a;\n};\ngoog.isBoolean = function(a) {\n  return "boolean" == typeof a;\n};\ngoog.isNumber = function(a) {\n  return "number" == typeof a;\n};\ngoog.isFunction = function(a) {\n  return "function" == goog.typeOf(a);\n};\ngoog.isObject = function(a) {\n  var b = typeof a;\n  return "object" == b && null != a || "function" == b;\n};\ngoog.getUid = function(a) {\n  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);\n};\ngoog.hasUid = function(a) {\n  return !!a[goog.UID_PROPERTY_];\n};\ngoog.removeUid = function(a) {\n  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);\n  try {\n    delete a[goog.UID_PROPERTY_];\n  } catch (b) {\n  }\n};\ngoog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);\ngoog.uidCounter_ = 0;\ngoog.getHashCode = goog.getUid;\ngoog.removeHashCode = goog.removeUid;\ngoog.cloneObject = function(a) {\n  var b = goog.typeOf(a);\n  if ("object" == b || "array" == b) {\n    if (a.clone) {\n      return a.clone();\n    }\n    var b = "array" == b ? [] : {}, c;\n    for (c in a) {\n      b[c] = goog.cloneObject(a[c]);\n    }\n    return b;\n  }\n  return a;\n};\ngoog.bindNative_ = function(a, b, c) {\n  return a.call.apply(a.bind, arguments);\n};\ngoog.bindJs_ = function(a, b, c) {\n  if (!a) {\n    throw Error();\n  }\n  if (2 < arguments.length) {\n    var d = Array.prototype.slice.call(arguments, 2);\n    return function() {\n      var c = Array.prototype.slice.call(arguments);\n      Array.prototype.unshift.apply(c, d);\n      return a.apply(b, c);\n    };\n  }\n  return function() {\n    return a.apply(b, arguments);\n  };\n};\ngoog.bind = function(a, b, c) {\n  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;\n  return goog.bind.apply(null, arguments);\n};\ngoog.partial = function(a, b) {\n  var c = Array.prototype.slice.call(arguments, 1);\n  return function() {\n    var b = c.slice();\n    b.push.apply(b, arguments);\n    return a.apply(this, b);\n  };\n};\ngoog.mixin = function(a, b) {\n  for (var c in b) {\n    a[c] = b[c];\n  }\n};\ngoog.now = goog.TRUSTED_SITE && Date.now || function() {\n  return +new Date;\n};\ngoog.globalEval = function(a) {\n  if (goog.global.execScript) {\n    goog.global.execScript(a, "JavaScript");\n  } else {\n    if (goog.global.eval) {\n      if (null == goog.evalWorksForGlobals_) {\n        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {\n          try {\n            delete goog.global._evalTest_;\n          } catch (d) {\n          }\n          goog.evalWorksForGlobals_ = !0;\n        } else {\n          goog.evalWorksForGlobals_ = !1;\n        }\n      }\n      if (goog.evalWorksForGlobals_) {\n        goog.global.eval(a);\n      } else {\n        var b = goog.global.document, c = b.createElement("SCRIPT");\n        c.type = "text/javascript";\n        c.defer = !1;\n        c.appendChild(b.createTextNode(a));\n        b.body.appendChild(c);\n        b.body.removeChild(c);\n      }\n    } else {\n      throw Error("goog.globalEval not available");\n    }\n  }\n};\ngoog.evalWorksForGlobals_ = null;\ngoog.getCssName = function(a, b) {\n  var c = function(a) {\n    return goog.cssNameMapping_[a] || a;\n  }, d = function(a) {\n    a = a.split("-");\n    for (var b = [], d = 0;d < a.length;d++) {\n      b.push(c(a[d]));\n    }\n    return b.join("-");\n  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {\n    return a;\n  };\n  return b ? a + "-" + d(b) : d(a);\n};\ngoog.setCssNameMapping = function(a, b) {\n  goog.cssNameMapping_ = a;\n  goog.cssNameMappingStyle_ = b;\n};\n!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);\ngoog.getMsg = function(a, b) {\n  b && (a = a.replace(/\\{\\$([^}]+)}/g, function(a, d) {\n    return null != b && d in b ? b[d] : a;\n  }));\n  return a;\n};\ngoog.getMsgWithFallback = function(a, b) {\n  return a;\n};\ngoog.exportSymbol = function(a, b, c) {\n  goog.exportPath_(a, b, c);\n};\ngoog.exportProperty = function(a, b, c) {\n  a[b] = c;\n};\ngoog.inherits = function(a, b) {\n  function c() {\n  }\n  c.prototype = b.prototype;\n  a.superClass_ = b.prototype;\n  a.prototype = new c;\n  a.prototype.constructor = a;\n  a.base = function(a, c, f) {\n    for (var g = Array(arguments.length - 2), h = 2;h < arguments.length;h++) {\n      g[h - 2] = arguments[h];\n    }\n    return b.prototype[c].apply(a, g);\n  };\n};\ngoog.base = function(a, b, c) {\n  var d = arguments.callee.caller;\n  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {\n    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");\n  }\n  if (d.superClass_) {\n    for (var e = Array(arguments.length - 1), f = 1;f < arguments.length;f++) {\n      e[f - 1] = arguments[f];\n    }\n    return d.superClass_.constructor.apply(a, e);\n  }\n  e = Array(arguments.length - 2);\n  for (f = 2;f < arguments.length;f++) {\n    e[f - 2] = arguments[f];\n  }\n  for (var f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {\n    if (g.prototype[b] === d) {\n      f = !0;\n    } else {\n      if (f) {\n        return g.prototype[b].apply(a, e);\n      }\n    }\n  }\n  if (a[b] === d) {\n    return a.constructor.prototype[b].apply(a, e);\n  }\n  throw Error("goog.base called from a method of one name to a method of a different name");\n};\ngoog.scope = function(a) {\n  if (goog.isInModuleLoader_()) {\n    throw Error("goog.scope is not supported within a goog.module.");\n  }\n  a.call(goog.global);\n};\nCOMPILED || (goog.global.COMPILED = COMPILED);\ngoog.defineClass = function(a, b) {\n  var c = b.constructor, d = b.statics;\n  c && c != Object.prototype.constructor || (c = function() {\n    throw Error("cannot instantiate an interface (no constructor defined).");\n  });\n  c = goog.defineClass.createSealingConstructor_(c, a);\n  a && goog.inherits(c, a);\n  delete b.constructor;\n  delete b.statics;\n  goog.defineClass.applyProperties_(c.prototype, b);\n  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));\n  return c;\n};\ngoog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;\ngoog.defineClass.createSealingConstructor_ = function(a, b) {\n  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {\n    return a;\n  }\n  var c = !goog.defineClass.isUnsealable_(b), d = function() {\n    var b = a.apply(this, arguments) || this;\n    b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];\n    this.constructor === d && c && Object.seal instanceof Function && Object.seal(b);\n    return b;\n  };\n  return d;\n};\ngoog.defineClass.isUnsealable_ = function(a) {\n  return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];\n};\ngoog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");\ngoog.defineClass.applyProperties_ = function(a, b) {\n  for (var c in b) {\n    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);\n  }\n  for (var d = 0;d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++) {\n    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);\n  }\n};\ngoog.tagUnsealableClass = function(a) {\n  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);\n};\ngoog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";\nvar axs = {};\naxs.browserUtils = {};\naxs.browserUtils.matchSelector = function(a, b) {\n  return a.matches ? a.matches(b) : a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : a.mozMatchesSelector ? a.mozMatchesSelector(b) : a.msMatchesSelector ? a.msMatchesSelector(b) : !1;\n};\naxs.constants = {};\naxs.constants.ARIA_ROLES = {alert:{namefrom:["author"], parent:["region"]}, alertdialog:{namefrom:["author"], namerequired:!0, parent:["alert", "dialog"]}, application:{namefrom:["author"], namerequired:!0, parent:["landmark"]}, article:{namefrom:["author"], parent:["document", "region"]}, banner:{namefrom:["author"], parent:["landmark"]}, button:{childpresentational:!0, namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded", "aria-pressed"]}, checkbox:{namefrom:["contents", \n"author"], namerequired:!0, parent:["input"], requiredProperties:["aria-checked"], properties:["aria-checked"]}, columnheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, combobox:{mustcontain:["listbox", "textbox"], namefrom:["author"], namerequired:!0, parent:["select"], requiredProperties:["aria-expanded"], properties:["aria-expanded", "aria-autocomplete", "aria-required"]}, command:{"abstract":!0, namefrom:["author"], \nparent:["widget"]}, complementary:{namefrom:["author"], parent:["landmark"]}, composite:{"abstract":!0, childpresentational:!1, namefrom:["author"], parent:["widget"], properties:["aria-activedescendant"]}, contentinfo:{namefrom:["author"], parent:["landmark"]}, definition:{namefrom:["author"], parent:["section"]}, dialog:{namefrom:["author"], namerequired:!0, parent:["window"]}, directory:{namefrom:["contents", "author"], parent:["list"]}, document:{namefrom:[" author"], namerequired:!0, parent:["structure"], \nproperties:["aria-expanded"]}, form:{namefrom:["author"], parent:["landmark"]}, grid:{mustcontain:["row", "rowgroup"], namefrom:["author"], namerequired:!0, parent:["composite", "region"], properties:["aria-level", "aria-multiselectable", "aria-readonly"]}, gridcell:{namefrom:["contents", "author"], namerequired:!0, parent:["section", "widget"], properties:["aria-readonly", "aria-required", "aria-selected"], scope:["row"]}, group:{namefrom:[" author"], parent:["section"], properties:["aria-activedescendant"]}, \nheading:{namerequired:!0, parent:["sectionhead"], properties:["aria-level"]}, img:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["section"]}, input:{"abstract":!0, namefrom:["author"], parent:["widget"]}, landmark:{"abstract":!0, namefrom:["contents", "author"], namerequired:!1, parent:["region"]}, link:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded"]}, list:{mustcontain:["group", "listitem"], namefrom:["author"], parent:["region"]}, \nlistbox:{mustcontain:["option"], namefrom:["author"], namerequired:!0, parent:["list", "select"], properties:["aria-multiselectable", "aria-required"]}, listitem:{namefrom:["contents", "author"], namerequired:!0, parent:["section"], properties:["aria-level", "aria-posinset", "aria-setsize"], scope:["list"]}, log:{namefrom:[" author"], namerequired:!0, parent:["region"]}, main:{namefrom:["author"], parent:["landmark"]}, marquee:{namerequired:!0, parent:["section"]}, math:{childpresentational:!0, namefrom:["author"], \nparent:["section"]}, menu:{mustcontain:["group", "menuitemradio", "menuitem", "menuitemcheckbox"], namefrom:["author"], namerequired:!0, parent:["list", "select"]}, menubar:{namefrom:["author"], parent:["menu"]}, menuitem:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], scope:["menu", "menubar"]}, menuitemcheckbox:{namefrom:["contents", "author"], namerequired:!0, parent:["checkbox", "menuitem"], scope:["menu", "menubar"]}, menuitemradio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["menuitemcheckbox", "radio"], scope:["menu", "menubar"]}, navigation:{namefrom:["author"], parent:["landmark"]}, note:{namefrom:["author"], parent:["section"]}, option:{namefrom:["contents", "author"], namerequired:!0, parent:["input"], properties:["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]}, presentation:{parent:["structure"]}, progressbar:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["range"]}, radio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["checkbox", "option"]}, radiogroup:{mustcontain:["radio"], namefrom:["author"], namerequired:!0, parent:["select"], properties:["aria-required"]}, range:{"abstract":!0, namefrom:["author"], parent:["widget"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]}, region:{namefrom:[" author"], parent:["section"]}, roletype:{"abstract":!0, properties:"aria-atomic aria-busy aria-controls aria-describedby aria-disabled aria-dropeffect aria-flowto aria-grabbed aria-haspopup aria-hidden aria-invalid aria-label aria-labelledby aria-live aria-owns aria-relevant".split(" ")}, \nrow:{mustcontain:["columnheader", "gridcell", "rowheader"], namefrom:["contents", "author"], parent:["group", "widget"], properties:["aria-level", "aria-selected"], scope:["grid", "rowgroup", "treegrid"]}, rowgroup:{mustcontain:["row"], namefrom:["contents", "author"], parent:["group"], scope:["grid"]}, rowheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, search:{namefrom:["author"], parent:["landmark"]}, \nsection:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, sectionhead:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, select:{"abstract":!0, namefrom:["author"], parent:["composite", "group", "input"]}, separator:{childpresentational:!0, namefrom:["author"], parent:["structure"], properties:["aria-expanded", "aria-orientation"]}, scrollbar:{childpresentational:!0, namefrom:["author"], namerequired:!1, \nparent:["input", "range"], requiredProperties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]}, slider:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation"]}, spinbutton:{namefrom:["author"], \nnamerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-required"]}, status:{parent:["region"]}, structure:{"abstract":!0, parent:["roletype"]}, tab:{namefrom:["contents", "author"], parent:["sectionhead", "widget"], properties:["aria-selected"], scope:["tablist"]}, tablist:{mustcontain:["tab"], namefrom:["author"], parent:["composite", "directory"], properties:["aria-level"]}, \ntabpanel:{namefrom:["author"], namerequired:!0, parent:["region"]}, textbox:{namefrom:["author"], namerequired:!0, parent:["input"], properties:["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]}, timer:{namefrom:["author"], namerequired:!0, parent:["status"]}, toolbar:{namefrom:["author"], parent:["group"]}, tooltip:{namerequired:!0, parent:["section"]}, tree:{mustcontain:["group", "treeitem"], namefrom:["author"], namerequired:!0, parent:["select"], \nproperties:["aria-multiselectable", "aria-required"]}, treegrid:{mustcontain:["row"], namefrom:["author"], namerequired:!0, parent:["grid", "tree"]}, treeitem:{namefrom:["contents", "author"], namerequired:!0, parent:["listitem", "option"], scope:["group", "tree"]}, widget:{"abstract":!0, parent:["roletype"]}, window:{"abstract":!0, namefrom:[" author"], parent:["roletype"], properties:["aria-expanded"]}};\naxs.constants.WIDGET_ROLES = {};\naxs.constants.addAllParentRolesToSet_ = function(a, b) {\n  if (a.parent) {\n    for (var c = a.parent, d = 0;d < c.length;d++) {\n      var e = c[d];\n      b[e] = !0;\n      axs.constants.addAllParentRolesToSet_(axs.constants.ARIA_ROLES[e], b);\n    }\n  }\n};\naxs.constants.addAllPropertiesToSet_ = function(a, b, c) {\n  var d = a[b];\n  if (d) {\n    for (var e = 0;e < d.length;e++) {\n      c[d[e]] = !0;\n    }\n  }\n  if (a.parent) {\n    for (a = a.parent, d = 0;d < a.length;d++) {\n      axs.constants.addAllPropertiesToSet_(axs.constants.ARIA_ROLES[a[d]], b, c);\n    }\n  }\n};\nfor (var roleName in axs.constants.ARIA_ROLES) {\n  var role = axs.constants.ARIA_ROLES[roleName], propertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "properties", propertiesSet);\n  role.propertiesSet = propertiesSet;\n  var requiredPropertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "requiredProperties", requiredPropertiesSet);\n  role.requiredPropertiesSet = requiredPropertiesSet;\n  var parentRolesSet = {};\n  axs.constants.addAllParentRolesToSet_(role, parentRolesSet);\n  role.allParentRolesSet = parentRolesSet;\n  "widget" in parentRolesSet && (axs.constants.WIDGET_ROLES[roleName] = role);\n}\naxs.constants.ARIA_PROPERTIES = {activedescendant:{type:"property", valueType:"idref"}, atomic:{defaultValue:"false", type:"property", valueType:"boolean"}, autocomplete:{defaultValue:"none", type:"property", valueType:"token", values:["inline", "list", "both", "none"]}, busy:{defaultValue:"false", type:"state", valueType:"boolean"}, checked:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, controls:{type:"property", valueType:"idref_list"}, \ndescribedby:{type:"property", valueType:"idref_list"}, disabled:{defaultValue:"false", type:"state", valueType:"boolean"}, dropeffect:{defaultValue:"none", type:"property", valueType:"token_list", values:"copy move link execute popup none".split(" ")}, expanded:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, flowto:{type:"property", valueType:"idref_list"}, grabbed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", \n"undefined"]}, haspopup:{defaultValue:"false", type:"property", valueType:"boolean"}, hidden:{defaultValue:"false", type:"state", valueType:"boolean"}, invalid:{defaultValue:"false", type:"state", valueType:"token", values:["grammar", "false", "spelling", "true"]}, label:{type:"property", valueType:"string"}, labelledby:{type:"property", valueType:"idref_list"}, level:{type:"property", valueType:"integer"}, live:{defaultValue:"off", type:"property", valueType:"token", values:["off", "polite", "assertive"]}, \nmultiline:{defaultValue:"false", type:"property", valueType:"boolean"}, multiselectable:{defaultValue:"false", type:"property", valueType:"boolean"}, orientation:{defaultValue:"vertical", type:"property", valueType:"token", values:["horizontal", "vertical"]}, owns:{type:"property", valueType:"idref_list"}, posinset:{type:"property", valueType:"integer"}, pressed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, readonly:{defaultValue:"false", \ntype:"property", valueType:"boolean"}, relevant:{defaultValue:"additions text", type:"property", valueType:"token_list", values:["additions", "removals", "text", "all"]}, required:{defaultValue:"false", type:"property", valueType:"boolean"}, selected:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, setsize:{type:"property", valueType:"integer"}, sort:{defaultValue:"none", type:"property", valueType:"token", values:["ascending", "descending", "none", \n"other"]}, valuemax:{type:"property", valueType:"decimal"}, valuemin:{type:"property", valueType:"decimal"}, valuenow:{type:"property", valueType:"decimal"}, valuetext:{type:"property", valueType:"string"}};\n(function() {\n  for (var a in axs.constants.ARIA_PROPERTIES) {\n    var b = axs.constants.ARIA_PROPERTIES[a];\n    if (b.values) {\n      for (var c = {}, d = 0;d < b.values.length;d++) {\n        c[b.values[d]] = !0;\n      }\n      b.valuesSet = c;\n    }\n  }\n})();\naxs.constants.GLOBAL_PROPERTIES = axs.constants.ARIA_ROLES.roletype.propertiesSet;\naxs.constants.NO_ROLE_NAME = " ";\naxs.constants.WIDGET_ROLE_TO_NAME = {alert:"aria_role_alert", alertdialog:"aria_role_alertdialog", button:"aria_role_button", checkbox:"aria_role_checkbox", columnheader:"aria_role_columnheader", combobox:"aria_role_combobox", dialog:"aria_role_dialog", grid:"aria_role_grid", gridcell:"aria_role_gridcell", link:"aria_role_link", listbox:"aria_role_listbox", log:"aria_role_log", marquee:"aria_role_marquee", menu:"aria_role_menu", menubar:"aria_role_menubar", menuitem:"aria_role_menuitem", menuitemcheckbox:"aria_role_menuitemcheckbox", \nmenuitemradio:"aria_role_menuitemradio", option:axs.constants.NO_ROLE_NAME, progressbar:"aria_role_progressbar", radio:"aria_role_radio", radiogroup:"aria_role_radiogroup", rowheader:"aria_role_rowheader", scrollbar:"aria_role_scrollbar", slider:"aria_role_slider", spinbutton:"aria_role_spinbutton", status:"aria_role_status", tab:"aria_role_tab", tabpanel:"aria_role_tabpanel", textbox:"aria_role_textbox", timer:"aria_role_timer", toolbar:"aria_role_toolbar", tooltip:"aria_role_tooltip", treeitem:"aria_role_treeitem"};\naxs.constants.STRUCTURE_ROLE_TO_NAME = {article:"aria_role_article", application:"aria_role_application", banner:"aria_role_banner", columnheader:"aria_role_columnheader", complementary:"aria_role_complementary", contentinfo:"aria_role_contentinfo", definition:"aria_role_definition", directory:"aria_role_directory", document:"aria_role_document", form:"aria_role_form", group:"aria_role_group", heading:"aria_role_heading", img:"aria_role_img", list:"aria_role_list", listitem:"aria_role_listitem", \nmain:"aria_role_main", math:"aria_role_math", navigation:"aria_role_navigation", note:"aria_role_note", region:"aria_role_region", rowheader:"aria_role_rowheader", search:"aria_role_search", separator:"aria_role_separator"};\naxs.constants.ATTRIBUTE_VALUE_TO_STATUS = [{name:"aria-autocomplete", values:{inline:"aria_autocomplete_inline", list:"aria_autocomplete_list", both:"aria_autocomplete_both"}}, {name:"aria-checked", values:{"true":"aria_checked_true", "false":"aria_checked_false", mixed:"aria_checked_mixed"}}, {name:"aria-disabled", values:{"true":"aria_disabled_true"}}, {name:"aria-expanded", values:{"true":"aria_expanded_true", "false":"aria_expanded_false"}}, {name:"aria-invalid", values:{"true":"aria_invalid_true", \ngrammar:"aria_invalid_grammar", spelling:"aria_invalid_spelling"}}, {name:"aria-multiline", values:{"true":"aria_multiline_true"}}, {name:"aria-multiselectable", values:{"true":"aria_multiselectable_true"}}, {name:"aria-pressed", values:{"true":"aria_pressed_true", "false":"aria_pressed_false", mixed:"aria_pressed_mixed"}}, {name:"aria-readonly", values:{"true":"aria_readonly_true"}}, {name:"aria-required", values:{"true":"aria_required_true"}}, {name:"aria-selected", values:{"true":"aria_selected_true", \n"false":"aria_selected_false"}}];\naxs.constants.INPUT_TYPE_TO_INFORMATION_TABLE_MSG = {button:"input_type_button", checkbox:"input_type_checkbox", color:"input_type_color", datetime:"input_type_datetime", "datetime-local":"input_type_datetime_local", date:"input_type_date", email:"input_type_email", file:"input_type_file", image:"input_type_image", month:"input_type_month", number:"input_type_number", password:"input_type_password", radio:"input_type_radio", range:"input_type_range", reset:"input_type_reset", search:"input_type_search", \nsubmit:"input_type_submit", tel:"input_type_tel", text:"input_type_text", url:"input_type_url", week:"input_type_week"};\naxs.constants.TAG_TO_INFORMATION_TABLE_VERBOSE_MSG = {A:"tag_link", BUTTON:"tag_button", H1:"tag_h1", H2:"tag_h2", H3:"tag_h3", H4:"tag_h4", H5:"tag_h5", H6:"tag_h6", LI:"tag_li", OL:"tag_ol", SELECT:"tag_select", TEXTAREA:"tag_textarea", UL:"tag_ul", SECTION:"tag_section", NAV:"tag_nav", ARTICLE:"tag_article", ASIDE:"tag_aside", HGROUP:"tag_hgroup", HEADER:"tag_header", FOOTER:"tag_footer", TIME:"tag_time", MARK:"tag_mark"};\naxs.constants.TAG_TO_INFORMATION_TABLE_BRIEF_MSG = {BUTTON:"tag_button", SELECT:"tag_select", TEXTAREA:"tag_textarea"};\naxs.constants.MIXED_VALUES = {"true":!0, "false":!0, mixed:!0};\naxs.constants.Severity = {INFO:"Info", WARNING:"Warning", SEVERE:"Severe"};\naxs.constants.AuditResult = {PASS:"PASS", FAIL:"FAIL", NA:"NA"};\naxs.constants.InlineElements = {TT:!0, I:!0, B:!0, BIG:!0, SMALL:!0, EM:!0, STRONG:!0, DFN:!0, CODE:!0, SAMP:!0, KBD:!0, VAR:!0, CITE:!0, ABBR:!0, ACRONYM:!0, A:!0, IMG:!0, OBJECT:!0, BR:!0, SCRIPT:!0, MAP:!0, Q:!0, SUB:!0, SUP:!0, SPAN:!0, BDO:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, LABEL:!0, BUTTON:!0};\naxs.constants.NATIVELY_DISABLEABLE = {BUTTON:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, FIELDSET:!0, OPTGROUP:!0, OPTION:!0};\naxs.constants.ARIA_TO_HTML_ATTRIBUTE = {"aria-checked":"checked", "aria-disabled":"disabled", "aria-hidden":"hidden", "aria-expanded":"open", "aria-valuemax":"max", "aria-valuemin":"min", "aria-readonly":"readonly", "aria-required":"required", "aria-selected":"selected", "aria-valuenow":"value"};\naxs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO = {A:[{role:"link", allowed:"button checkbox menuitem menuitemcheckbox menuitemradio tab treeitem".split(" "), selector:"a[href]"}], ADDRESS:[{role:"", allowed:["contentinfo", "presentation"]}], AREA:[{role:"link", selector:"area[href]"}], ARTICLE:[{role:"article", allowed:["presentation", "article", "document", "application", "main"]}], ASIDE:[{role:"complementary", allowed:["note", "complementary", "search", "presentation"]}], AUDIO:[{role:"", allowed:["application", \n"presentation"]}], BASE:[{role:"", reserved:!0}], BODY:[{role:"document", allowed:["presentation"]}], BUTTON:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button:not([aria-pressed]):not([type="menu"])\'}, {role:"button", allowed:["button"], selector:"button[aria-pressed]"}, {role:"button", attributes:{"aria-haspopup":!0}, allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button[type="menu"]\'}], CAPTION:[{role:"", \nallowed:["presentation"]}], COL:[{role:"", reserved:!0}], COLGROUP:[{role:"", reserved:!0}], DATALIST:[{role:"listbox", attributes:{"aria-multiselectable":!1}, allowed:["presentation"]}], DEL:[{role:"", allowed:["*"]}], DD:[{role:"", allowed:["presentation"]}], DT:[{role:"", allowed:["presentation"]}], DETAILS:[{role:"group", allowed:["group", "presentation"]}], DIALOG:[{role:"dialog", allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog[open]"}, {role:"dialog", \nattributes:{"aria-hidden":!0}, allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog:not([open])"}], DIV:[{role:"", allowed:["*"]}], DL:[{role:"list", allowed:["presentation"]}], EMBED:[{role:"", allowed:["application", "document", "img", "presentation"]}], FIGURE:[{role:"", allowed:["*"]}], FOOTER:[{role:"", allowed:["contentinfo", "presentation"]}], FORM:[{role:"form", allowed:["presentation"]}], P:[{role:"", allowed:["*"]}], PRE:[{role:"", allowed:["*"]}], \nBLOCKQUOTE:[{role:"", allowed:["*"]}], H1:[{role:"heading"}], H2:[{role:"heading"}], H3:[{role:"heading"}], H4:[{role:"heading"}], H5:[{role:"heading"}], H6:[{role:"heading"}], HEAD:[{role:"", reserved:!0}], HEADER:[{role:"", allowed:["banner", "presentation"]}], HR:[{role:"separator", allowed:["presentation"]}], HTML:[{role:"", reserved:!0}], IFRAME:[{role:"", allowed:["application", "document", "img", "presentation"], selector:"iframe:not([seamless])"}, {role:"", allowed:["application", "document", \n"img", "presentation", "group"], selector:"iframe[seamless]"}], IMG:[{role:"presentation", reserved:!0, selector:\'img[alt=""]\'}, {role:"img", allowed:["*"], selector:\'img[alt]:not([alt=""])\'}], INPUT:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="button"]:not([aria-pressed])\'}, {role:"button", allowed:["button"], selector:\'input[type="button"][aria-pressed]\'}, {role:"checkbox", allowed:["checkbox"], selector:\'input[type="checkbox"]\'}, \n{role:"", selector:\'input[type="color"]\'}, {role:"", selector:\'input[type="date"]\'}, {role:"", selector:\'input[type="datetime"]\'}, {role:"textbox", selector:\'input[type="email"]:not([list])\'}, {role:"", selector:\'input[type="file"]\'}, {role:"", reserved:!0, selector:\'input[type="hidden"]\'}, {role:"button", allowed:["button"], selector:\'input[type="image"][aria-pressed]\'}, {role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="image"]:not([aria-pressed])\'}, \n{role:"", selector:\'input[type="month"]\'}, {role:"", selector:\'input[type="number"]\'}, {role:"textbox", selector:\'input[type="password"]\'}, {role:"radio", allowed:["menuitemradio"], selector:\'input[type="radio"]\'}, {role:"slider", selector:\'input[type="range"]\'}, {role:"button", selector:\'input[type="reset"]\'}, {role:"combobox", selector:\'input[type="search"][list]\'}, {role:"textbox", selector:\'input[type="search"]:not([list])\'}, {role:"button", selector:\'input[type="submit"]\'}, {role:"combobox", \nselector:\'input[type="tel"][list]\'}, {role:"textbox", selector:\'input[type="tel"]:not([list])\'}, {role:"combobox", selector:\'input[type="text"][list]\'}, {role:"textbox", selector:\'input[type="text"]:not([list])\'}, {role:"textbox", selector:"input:not([type])"}, {role:"", selector:\'input[type="time"]\'}, {role:"combobox", selector:\'input[type="url"][list]\'}, {role:"textbox", selector:\'input[type="url"]:not([list])\'}, {role:"", selector:\'input[type="week"]\'}], INS:[{role:"", allowed:["*"]}], KEYGEN:[{role:""}], \nLABEL:[{role:"", allowed:["presentation"]}], LI:[{role:"listitem", allowed:"menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol:not([role="presentation"])>li, ul:not([role="presentation"])>li\'}, {role:"listitem", allowed:"listitem menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol[role="presentation"]>li, ul[role="presentation"]>li\'}], LINK:[{role:"link", reserved:!0, selector:"link[href]"}], MAIN:[{role:"", \nallowed:["main", "presentation"]}], MAP:[{role:"", reserved:!0}], MATH:[{role:"", allowed:["presentation"]}], MENU:[{role:"toolbar", selector:\'menu[type="toolbar"]\'}], MENUITEM:[{role:"menuitem", selector:\'menuitem[type="command"]\'}, {role:"menuitemcheckbox", selector:\'menuitem[type="checkbox"]\'}, {role:"menuitemradio", selector:\'menuitem[type="radio"]\'}], META:[{role:"", reserved:!0}], METER:[{role:"progressbar", allowed:["presentation"]}], NAV:[{role:"navigation", allowed:["navigation", "presentation"]}], \nNOSCRIPT:[{role:"", reserved:!0}], OBJECT:[{role:"", allowed:["application", "document", "img", "presentation"]}], OL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], OPTGROUP:[{role:"", allowed:["presentation"]}], OPTION:[{role:"option"}], OUTPUT:[{role:"status", allowed:["*"]}], PARAM:[{role:"", reserved:!0}], PICTURE:[{role:"", reserved:!0}], PROGRESS:[{role:"progressbar", allowed:["presentation"]}], SCRIPT:[{role:"", reserved:!0}], \nSECTION:[{role:"region", allowed:"alert alertdialog application contentinfo dialog document log marquee search status presentation".split(" ")}], SELECT:[{role:"listbox"}], SOURCE:[{role:"", reserved:!0}], SPAN:[{role:"", allowed:["*"]}], STYLE:[{role:"", reserved:!0}], SVG:[{role:"", allowed:["application", "document", "img", "presentation"]}], SUMMARY:[{role:"", allowed:["presentation"]}], TABLE:[{role:"", allowed:["*"]}], TEMPLATE:[{role:"", reserved:!0}], TEXTAREA:[{role:"textbox"}], TBODY:[{role:"rowgroup", \nallowed:["*"]}], THEAD:[{role:"rowgroup", allowed:["*"]}], TFOOT:[{role:"rowgroup", allowed:["*"]}], TITLE:[{role:"", reserved:!0}], TD:[{role:"", allowed:["*"]}], TH:[{role:"", allowed:["*"]}], TR:[{role:"", allowed:["*"]}], TRACK:[{role:"", reserved:!0}], UL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], VIDEO:[{role:"", allowed:["application", "presentation"]}]};\naxs.color = {};\naxs.color.Color = function(a, b, c, d) {\n  this.red = a;\n  this.green = b;\n  this.blue = c;\n  this.alpha = d;\n};\naxs.color.YCbCr = function(a) {\n  this.luma = this.z = a[0];\n  this.Cb = this.x = a[1];\n  this.Cr = this.y = a[2];\n};\naxs.color.YCbCr.prototype = {multiply:function(a) {\n  return new axs.color.YCbCr([this.luma * a, this.Cb * a, this.Cr * a]);\n}, add:function(a) {\n  return new axs.color.YCbCr([this.luma + a.luma, this.Cb + a.Cb, this.Cr + a.Cr]);\n}, subtract:function(a) {\n  return new axs.color.YCbCr([this.luma - a.luma, this.Cb - a.Cb, this.Cr - a.Cr]);\n}};\naxs.color.calculateContrastRatio = function(a, b) {\n  1 > a.alpha && (a = axs.color.flattenColors(a, b));\n  var c = axs.color.calculateLuminance(a), d = axs.color.calculateLuminance(b);\n  return (Math.max(c, d) + .05) / (Math.min(c, d) + .05);\n};\naxs.color.calculateLuminance = function(a) {\n  return axs.color.toYCbCr(a).luma;\n};\naxs.color.luminanceRatio = function(a, b) {\n  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);\n};\naxs.color.parseColor = function(a) {\n  if ("transparent" === a) {\n    return new axs.color.Color(0, 0, 0, 0);\n  }\n  var b = a.match(/^rgb\\((\\d+), (\\d+), (\\d+)\\)$/);\n  if (b) {\n    a = parseInt(b[1], 10);\n    var c = parseInt(b[2], 10), d = parseInt(b[3], 10);\n    return new axs.color.Color(a, c, d, 1);\n  }\n  return (b = a.match(/^rgba\\((\\d+), (\\d+), (\\d+), (\\d*(\\.\\d+)?)\\)/)) ? (a = parseInt(b[1], 10), c = parseInt(b[2], 10), d = parseInt(b[3], 10), b = parseFloat(b[4]), new axs.color.Color(a, c, d, b)) : null;\n};\naxs.color.colorChannelToString = function(a) {\n  a = Math.round(a);\n  return 15 >= a ? "0" + a.toString(16) : a.toString(16);\n};\naxs.color.colorToString = function(a) {\n  return 1 == a.alpha ? "#" + axs.color.colorChannelToString(a.red) + axs.color.colorChannelToString(a.green) + axs.color.colorChannelToString(a.blue) : "rgba(" + [a.red, a.green, a.blue, a.alpha].join() + ")";\n};\naxs.color.luminanceFromContrastRatio = function(a, b, c) {\n  return c ? (a + .05) * b - .05 : (a + .05) / b - .05;\n};\naxs.color.translateColor = function(a, b) {\n  for (var c = b > a.luma ? axs.color.WHITE_YCC : axs.color.BLACK_YCC, d = c == axs.color.WHITE_YCC ? axs.color.YCC_CUBE_FACES_WHITE : axs.color.YCC_CUBE_FACES_BLACK, e = new axs.color.YCbCr([0, a.Cb, a.Cr]), f = new axs.color.YCbCr([1, a.Cb, a.Cr]), f = {a:e, b:f}, e = null, g = 0;g < d.length && !(e = axs.color.findIntersection(f, d[g]), 0 <= e.z && 1 >= e.z);g++) {\n  }\n  if (!e) {\n    throw "Couldn\'t find intersection with YCbCr color cube for Cb=" + a.Cb + ", Cr=" + a.Cr + ".";\n  }\n  if (e.x != a.x || e.y != a.y) {\n    throw "Intersection has wrong Cb/Cr values.";\n  }\n  if (Math.abs(c.luma - e.luma) < Math.abs(c.luma - b)) {\n    return c = [b, a.Cb, a.Cr], axs.color.fromYCbCrArray(c);\n  }\n  c = (b - e.luma) / (c.luma - e.luma);\n  c = [b, e.Cb - e.Cb * c, e.Cr - e.Cr * c];\n  return axs.color.fromYCbCrArray(c);\n};\naxs.color.suggestColors = function(a, b, c) {\n  var d = {}, e = axs.color.calculateLuminance(a), f = axs.color.calculateLuminance(b), g = f > e, h = axs.color.toYCbCr(b), k = axs.color.toYCbCr(a), m;\n  for (m in c) {\n    var l = c[m], n = axs.color.luminanceFromContrastRatio(e, l + .02, g);\n    if (1 >= n && 0 <= n) {\n      var p = axs.color.translateColor(h, n), l = axs.color.calculateContrastRatio(p, a), n = {};\n      n.fg = axs.color.colorToString(p);\n      n.bg = axs.color.colorToString(a);\n      n.contrast = l.toFixed(2);\n      d[m] = n;\n    } else {\n      l = axs.color.luminanceFromContrastRatio(f, l + .02, !g), 1 >= l && 0 <= l && (p = axs.color.translateColor(k, l), l = axs.color.calculateContrastRatio(b, p), n = {}, n.bg = axs.color.colorToString(p), n.fg = axs.color.colorToString(b), n.contrast = l.toFixed(2), d[m] = n);\n    }\n  }\n  return d;\n};\naxs.color.flattenColors = function(a, b) {\n  var c = a.alpha;\n  return new axs.color.Color((1 - c) * b.red + c * a.red, (1 - c) * b.green + c * a.green, (1 - c) * b.blue + c * a.blue, a.alpha + b.alpha * (1 - a.alpha));\n};\naxs.color.multiplyMatrixVector = function(a, b) {\n  var c = b[0], d = b[1], e = b[2];\n  return [a[0][0] * c + a[0][1] * d + a[0][2] * e, a[1][0] * c + a[1][1] * d + a[1][2] * e, a[2][0] * c + a[2][1] * d + a[2][2] * e];\n};\naxs.color.toYCbCr = function(a) {\n  var b = a.red / 255, c = a.green / 255;\n  a = a.blue / 255;\n  return new axs.color.YCbCr(axs.color.multiplyMatrixVector(axs.color.YCC_MATRIX, [.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4), .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4), .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)]));\n};\naxs.color.fromYCbCr = function(a) {\n  return axs.color.fromYCbCrArray([a.luma, a.Cb, a.Cr]);\n};\naxs.color.fromYCbCrArray = function(a) {\n  var b = axs.color.multiplyMatrixVector(axs.color.INVERTED_YCC_MATRIX, a);\n  a = b[0];\n  var c = b[1], b = b[2];\n  return new axs.color.Color(Math.min(Math.max(Math.round(255 * (.00303949 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055)), 0), 255), Math.min(Math.max(Math.round(255 * (.00303949 >= c ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055)), 0), 255), Math.min(Math.max(Math.round(255 * (.00303949 >= b ? 12.92 * b : 1.055 * Math.pow(b, 1 / 2.4) - .055)), 0), 255), 1);\n};\naxs.color.RGBToYCbCrMatrix = function(a, b) {\n  return [[a, 1 - a - b, b], [-a / (2 - 2 * b), (a + b - 1) / (2 - 2 * b), (1 - b) / (2 - 2 * b)], [(1 - a) / (2 - 2 * a), (a + b - 1) / (2 - 2 * a), -b / (2 - 2 * a)]];\n};\naxs.color.invert3x3Matrix = function(a) {\n  var b = a[0][0], c = a[0][1], d = a[0][2], e = a[1][0], f = a[1][1], g = a[1][2], h = a[2][0], k = a[2][1];\n  a = a[2][2];\n  return axs.color.scalarMultiplyMatrix([[f * a - g * k, d * k - c * a, c * g - d * f], [g * h - e * a, b * a - d * h, d * e - b * g], [e * k - f * h, h * c - b * k, b * f - c * e]], 1 / (b * (f * a - g * k) - c * (a * e - g * h) + d * (e * k - f * h)));\n};\naxs.color.findIntersection = function(a, b) {\n  var c = [a.a.x - b.p0.x, a.a.y - b.p0.y, a.a.z - b.p0.z], d = axs.color.invert3x3Matrix([[a.a.x - a.b.x, b.p1.x - b.p0.x, b.p2.x - b.p0.x], [a.a.y - a.b.y, b.p1.y - b.p0.y, b.p2.y - b.p0.y], [a.a.z - a.b.z, b.p1.z - b.p0.z, b.p2.z - b.p0.z]]), c = axs.color.multiplyMatrixVector(d, c)[0];\n  return a.a.add(a.b.subtract(a.a).multiply(c));\n};\naxs.color.scalarMultiplyMatrix = function(a, b) {\n  for (var c = [], d = 0;3 > d;d++) {\n    c[d] = axs.color.scalarMultiplyVector(a[d], b);\n  }\n  return c;\n};\naxs.color.scalarMultiplyVector = function(a, b) {\n  for (var c = [], d = 0;d < a.length;d++) {\n    c[d] = a[d] * b;\n  }\n  return c;\n};\naxs.color.kR = .2126;\naxs.color.kB = .0722;\naxs.color.YCC_MATRIX = axs.color.RGBToYCbCrMatrix(axs.color.kR, axs.color.kB);\naxs.color.INVERTED_YCC_MATRIX = axs.color.invert3x3Matrix(axs.color.YCC_MATRIX);\naxs.color.BLACK = new axs.color.Color(0, 0, 0, 1);\naxs.color.BLACK_YCC = axs.color.toYCbCr(axs.color.BLACK);\naxs.color.WHITE = new axs.color.Color(255, 255, 255, 1);\naxs.color.WHITE_YCC = axs.color.toYCbCr(axs.color.WHITE);\naxs.color.RED = new axs.color.Color(255, 0, 0, 1);\naxs.color.RED_YCC = axs.color.toYCbCr(axs.color.RED);\naxs.color.GREEN = new axs.color.Color(0, 255, 0, 1);\naxs.color.GREEN_YCC = axs.color.toYCbCr(axs.color.GREEN);\naxs.color.BLUE = new axs.color.Color(0, 0, 255, 1);\naxs.color.BLUE_YCC = axs.color.toYCbCr(axs.color.BLUE);\naxs.color.CYAN = new axs.color.Color(0, 255, 255, 1);\naxs.color.CYAN_YCC = axs.color.toYCbCr(axs.color.CYAN);\naxs.color.MAGENTA = new axs.color.Color(255, 0, 255, 1);\naxs.color.MAGENTA_YCC = axs.color.toYCbCr(axs.color.MAGENTA);\naxs.color.YELLOW = new axs.color.Color(255, 255, 0, 1);\naxs.color.YELLOW_YCC = axs.color.toYCbCr(axs.color.YELLOW);\naxs.color.YCC_CUBE_FACES_BLACK = [{p0:axs.color.BLACK_YCC, p1:axs.color.RED_YCC, p2:axs.color.GREEN_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.GREEN_YCC, p2:axs.color.BLUE_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.BLUE_YCC, p2:axs.color.RED_YCC}];\naxs.color.YCC_CUBE_FACES_WHITE = [{p0:axs.color.WHITE_YCC, p1:axs.color.CYAN_YCC, p2:axs.color.MAGENTA_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.MAGENTA_YCC, p2:axs.color.YELLOW_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.YELLOW_YCC, p2:axs.color.CYAN_YCC}];\naxs.dom = {};\naxs.dom.parentElement = function(a) {\n  if (!a) {\n    return null;\n  }\n  a = axs.dom.composedParentNode(a);\n  if (!a) {\n    return null;\n  }\n  switch(a.nodeType) {\n    case Node.ELEMENT_NODE:\n      return a;\n    default:\n      return axs.dom.parentElement(a);\n  }\n};\naxs.dom.shadowHost = function(a) {\n  return "host" in a ? a.host : null;\n};\naxs.dom.composedParentNode = function(a) {\n  if (!a) {\n    return null;\n  }\n  if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {\n    return axs.dom.shadowHost(a);\n  }\n  var b = a.parentNode;\n  if (!b) {\n    return null;\n  }\n  if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {\n    return axs.dom.shadowHost(b);\n  }\n  if (!b.shadowRoot) {\n    return b;\n  }\n  a = a.getDestinationInsertionPoints();\n  return 0 < a.length ? axs.dom.composedParentNode(a[a.length - 1]) : null;\n};\naxs.dom.asElement = function(a) {\n  switch(a.nodeType) {\n    case Node.COMMENT_NODE:\n      break;\n    case Node.ELEMENT_NODE:\n      if ("script" == a.localName || "template" == a.localName) {\n        break;\n      }\n      return a;\n    case Node.DOCUMENT_FRAGMENT_NODE:\n      return a.host;\n    case Node.TEXT_NODE:\n      return axs.dom.parentElement(a);\n    default:\n      console.warn("Unhandled node type: ", a.nodeType);\n  }\n  return null;\n};\naxs.dom.composedTreeSearch = function(a, b, c, d, e) {\n  if (a === b) {\n    return !0;\n  }\n  if (a.nodeType == Node.ELEMENT_NODE) {\n    var f = a\n  }\n  var g = !1;\n  d = Object.create(d);\n  if (f) {\n    var h = f.localName;\n    d.collectIdRefs && (d.idrefs = axs.utils.getReferencedIds(f));\n    if (!d.disabled || "legend" === h && axs.browserUtils.matchSelector(f, "fieldset>legend:first-of-type")) {\n      d.disabled = axs.utils.isElementDisabled(f, !0);\n    }\n    d.hidden || (d.hidden = axs.utils.isElementHidden(f));\n    if (c.preorder && !c.preorder(f, d)) {\n      return g;\n    }\n    var k = f.shadowRoot || f.webkitShadowRoot;\n    if (k) {\n      return d.level++, g = axs.dom.composedTreeSearch(k, b, c, d, k), f && c.postorder && !g && c.postorder(f, d), g;\n    }\n    if ("content" == h) {\n      a = f.getDistributedNodes();\n      for (h = 0;h < a.length && !g;h++) {\n        g = axs.dom.composedTreeSearch(a[h], b, c, d, e);\n      }\n      c.postorder && !g && c.postorder.call(null, f, d);\n      return g;\n    }\n  }\n  for (a = a.firstChild;null != a && !g;) {\n    g = axs.dom.composedTreeSearch(a, b, c, d, e), a = a.nextSibling;\n  }\n  f && c.postorder && !g && c.postorder.call(null, f, d);\n  return g;\n};\naxs.utils = {};\naxs.utils.FOCUSABLE_ELEMENTS_SELECTOR = "input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],iframe,[tabindex]";\naxs.utils.LABELABLE_ELEMENTS_SELECTOR = "button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea";\naxs.utils.elementIsTransparent = function(a) {\n  return "0" == a.style.opacity;\n};\naxs.utils.elementHasZeroArea = function(a) {\n  a = a.getBoundingClientRect();\n  var b = a.top - a.bottom;\n  return a.right - a.left && b ? !1 : !0;\n};\naxs.utils.elementIsOutsideScrollArea = function(a) {\n  for (var b = axs.dom.parentElement(a), c = a.ownerDocument.defaultView;b != c.document.body;) {\n    if (axs.utils.isClippedBy(a, b)) {\n      return !0;\n    }\n    if (axs.utils.canScrollTo(a, b) && !axs.utils.elementIsOutsideScrollArea(b)) {\n      return !1;\n    }\n    b = axs.dom.parentElement(b);\n  }\n  return !axs.utils.canScrollTo(a, c.document.body);\n};\naxs.utils.canScrollTo = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect();\n  if (b == b.ownerDocument.body) {\n    var e = d.top, f = d.left\n  } else {\n    e = d.top - b.scrollTop, f = d.left - b.scrollLeft;\n  }\n  var g = e + b.scrollHeight, h = f + b.scrollWidth;\n  if (c.right < f || c.bottom < e || c.left > h || c.top > g) {\n    return !1;\n  }\n  e = a.ownerDocument.defaultView;\n  f = e.getComputedStyle(b);\n  return c.left > d.right || c.top > d.bottom ? "scroll" == f.overflow || "auto" == f.overflow || b instanceof e.HTMLBodyElement : !0;\n};\naxs.utils.isClippedBy = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top - b.scrollTop, f = d.left - b.scrollLeft, g = a.ownerDocument.defaultView.getComputedStyle(b);\n  return (c.right < d.left || c.bottom < d.top || c.left > d.right || c.top > d.bottom) && "hidden" == g.overflow ? !0 : c.right < f || c.bottom < e ? "visible" != g.overflow : !1;\n};\naxs.utils.isAncestor = function(a, b) {\n  if (null == b) {\n    return !1;\n  }\n  if (b === a) {\n    return !0;\n  }\n  var c = axs.dom.composedParentNode(b);\n  return axs.utils.isAncestor(a, c);\n};\naxs.utils.overlappingElements = function(a) {\n  if (axs.utils.elementHasZeroArea(a)) {\n    return null;\n  }\n  for (var b = [], c = a.getClientRects(), d = 0;d < c.length;d++) {\n    var e = c[d], e = document.elementFromPoint((e.left + e.right) / 2, (e.top + e.bottom) / 2);\n    if (null != e && e != a && !axs.utils.isAncestor(e, a) && !axs.utils.isAncestor(a, e)) {\n      var f = window.getComputedStyle(e, null);\n      f && (f = axs.utils.getBgColor(f, e)) && 0 < f.alpha && 0 > b.indexOf(e) && b.push(e);\n    }\n  }\n  return b;\n};\naxs.utils.elementIsHtmlControl = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLButtonElement || a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement ? !0 : !1;\n};\naxs.utils.elementIsAriaWidget = function(a) {\n  return a.hasAttribute("role") && (a = a.getAttribute("role")) && (a = axs.constants.ARIA_ROLES[a]) && "widget" in a.allParentRolesSet ? !0 : !1;\n};\naxs.utils.elementIsVisible = function(a) {\n  return axs.utils.elementIsTransparent(a) || axs.utils.elementHasZeroArea(a) || axs.utils.elementIsOutsideScrollArea(a) || axs.utils.overlappingElements(a).length ? !1 : !0;\n};\naxs.utils.isLargeFont = function(a) {\n  var b = a.fontSize;\n  a = "bold" == a.fontWeight;\n  var c = b.match(/(\\d+)px/);\n  if (c) {\n    b = parseInt(c[1], 10);\n    if (c = window.getComputedStyle(document.body, null).fontSize.match(/(\\d+)px/)) {\n      var d = parseInt(c[1], 10), c = 1.2 * d, d = 1.5 * d\n    } else {\n      c = 19.2, d = 24;\n    }\n    return a && b >= c || b >= d;\n  }\n  if (c = b.match(/(\\d+)em/)) {\n    return b = parseInt(c[1], 10), a && 1.2 <= b || 1.5 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)%/)) {\n    return b = parseInt(c[1], 10), a && 120 <= b || 150 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)pt/)) {\n    if (b = parseInt(c[1], 10), a && 14 <= b || 18 <= b) {\n      return !0;\n    }\n  }\n  return !1;\n};\naxs.utils.getBgColor = function(a, b) {\n  var c = axs.color.parseColor(a.backgroundColor);\n  if (!c) {\n    return null;\n  }\n  1 > a.opacity && (c.alpha *= a.opacity);\n  if (1 > c.alpha) {\n    var d = axs.utils.getParentBgColor(b);\n    if (null == d) {\n      return null;\n    }\n    c = axs.color.flattenColors(c, d);\n  }\n  return c;\n};\naxs.utils.getParentBgColor = function(a) {\n  var b = a;\n  a = [];\n  for (var c = null;b = axs.dom.parentElement(b);) {\n    var d = window.getComputedStyle(b, null);\n    if (d) {\n      var e = axs.color.parseColor(d.backgroundColor);\n      if (e && (1 > d.opacity && (e.alpha *= d.opacity), 0 != e.alpha && (a.push(e), 1 == e.alpha))) {\n        c = !0;\n        break;\n      }\n    }\n  }\n  c || a.push(new axs.color.Color(255, 255, 255, 1));\n  for (b = a.pop();a.length;) {\n    c = a.pop(), b = axs.color.flattenColors(c, b);\n  }\n  return b;\n};\naxs.utils.getFgColor = function(a, b, c) {\n  var d = axs.color.parseColor(a.color);\n  if (!d) {\n    return null;\n  }\n  1 > d.alpha && (d = axs.color.flattenColors(d, c));\n  1 > a.opacity && (b = axs.utils.getParentBgColor(b), d.alpha *= a.opacity, d = axs.color.flattenColors(d, b));\n  return d;\n};\naxs.utils.getContrastRatioForElement = function(a) {\n  var b = window.getComputedStyle(a, null);\n  return axs.utils.getContrastRatioForElementWithComputedStyle(b, a);\n};\naxs.utils.getContrastRatioForElementWithComputedStyle = function(a, b) {\n  if (axs.utils.isElementHidden(b)) {\n    return null;\n  }\n  var c = axs.utils.getBgColor(a, b);\n  if (!c) {\n    return null;\n  }\n  var d = axs.utils.getFgColor(a, b, c);\n  return d ? axs.color.calculateContrastRatio(d, c) : null;\n};\naxs.utils.isNativeTextElement = function(a) {\n  var b = a.tagName.toLowerCase();\n  a = a.type ? a.type.toLowerCase() : "";\n  if ("textarea" == b) {\n    return !0;\n  }\n  if ("input" != b) {\n    return !1;\n  }\n  switch(a) {\n    case "email":\n    ;\n    case "number":\n    ;\n    case "password":\n    ;\n    case "search":\n    ;\n    case "text":\n    ;\n    case "tel":\n    ;\n    case "url":\n    ;\n    case "":\n      return !0;\n    default:\n      return !1;\n  }\n};\naxs.utils.isLowContrast = function(a, b, c) {\n  a = Math.round(10 * a) / 10;\n  return c ? 4.5 > a || !axs.utils.isLargeFont(b) && 7 > a : 3 > a || !axs.utils.isLargeFont(b) && 4.5 > a;\n};\naxs.utils.hasLabel = function(a) {\n  var b = a.tagName.toLowerCase(), c = a.type ? a.type.toLowerCase() : "";\n  if (a.hasAttribute("aria-label") || a.hasAttribute("title") || "img" == b && a.hasAttribute("alt") || "input" == b && "image" == c && a.hasAttribute("alt") || "input" == b && ("submit" == c || "reset" == c) || a.hasAttribute("aria-labelledby") || a.hasAttribute("id") && 0 < document.querySelectorAll(\'label[for="\' + a.id + \'"]\').length) {\n    return !0;\n  }\n  for (b = axs.dom.parentElement(a);b;) {\n    if ("label" == b.tagName.toLowerCase() && b.control == a) {\n      return !0;\n    }\n    b = axs.dom.parentElement(b);\n  }\n  return !1;\n};\naxs.utils.isNativelyDisableable = function(a) {\n  return a.tagName.toUpperCase() in axs.constants.NATIVELY_DISABLEABLE;\n};\naxs.utils.isElementDisabled = function(a, b) {\n  if (axs.browserUtils.matchSelector(a, b ? "[aria-disabled=true]" : "[aria-disabled=true], [aria-disabled=true] *")) {\n    return !0;\n  }\n  if (!axs.utils.isNativelyDisableable(a) || axs.browserUtils.matchSelector(a, "fieldset>legend:first-of-type *")) {\n    return !1;\n  }\n  for (var c = a;null !== c;c = axs.dom.parentElement(c)) {\n    if (c.hasAttribute("disabled")) {\n      return !0;\n    }\n    if (b) {\n      break;\n    }\n  }\n  return !1;\n};\naxs.utils.isElementHidden = function(a) {\n  if (!(a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return !1;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display || "hidden" == c.visibility ? !0 : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() ? !b : !1;\n};\naxs.utils.isElementOrAncestorHidden = function(a) {\n  return axs.utils.isElementHidden(a) ? !0 : axs.dom.parentElement(a) ? axs.utils.isElementOrAncestorHidden(axs.dom.parentElement(a)) : !1;\n};\naxs.utils.isInlineElement = function(a) {\n  a = a.tagName.toUpperCase();\n  return axs.constants.InlineElements[a];\n};\naxs.utils.getRoles = function(a, b) {\n  if (!a || a.nodeType !== Node.ELEMENT_NODE || !a.hasAttribute("role") && !b) {\n    return null;\n  }\n  var c = a.getAttribute("role");\n  !c && b && (c = axs.properties.getImplicitRole(a));\n  if (!c) {\n    return null;\n  }\n  for (var c = c.split(" "), d = {roles:[], valid:!1}, e = 0;e < c.length;e++) {\n    var f = c[e], g = axs.constants.ARIA_ROLES[f], f = {name:f};\n    g && !g["abstract"] ? (f.details = g, d.applied || (d.applied = f), f.valid = d.valid = !0) : f.valid = !1;\n    d.roles.push(f);\n  }\n  return d;\n};\naxs.utils.getAriaPropertyValue = function(a, b, c) {\n  var d = a.replace(/^aria-/, ""), e = axs.constants.ARIA_PROPERTIES[d], d = {name:a, rawValue:b};\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  e = e.valueType;\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  switch(e) {\n    case "idref":\n      a = axs.utils.isValidIDRefValue(b, c), d.valid = a.valid, d.reason = a.reason, d.idref = a.idref;\n    case "idref_list":\n      a = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < a.length;b++) {\n        e = axs.utils.isValidIDRefValue(a[b], c), e.valid || (d.valid = !1), d.values ? d.values.push(e) : d.values = [e];\n      }\n      return d;\n    case "integer":\n      c = axs.utils.isValidNumber(b);\n      if (!c.valid) {\n        return d.valid = !1, d.reason = c.reason, d;\n      }\n      Math.floor(c.value) !== c.value ? (d.valid = !1, d.reason = "" + b + " is not a whole integer") : (d.valid = !0, d.value = c.value);\n      return d;\n    case "decimal":\n    ;\n    case "number":\n      c = axs.utils.isValidNumber(b);\n      d.valid = c.valid;\n      if (!c.valid) {\n        return d.reason = c.reason, d;\n      }\n      d.value = c.value;\n      return d;\n    case "string":\n      return d.valid = !0, d.value = b, d;\n    case "token":\n      return c = axs.utils.isValidTokenValue(a, b.toLowerCase()), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "token_list":\n      e = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < e.length;b++) {\n        c = axs.utils.isValidTokenValue(a, e[b].toLowerCase()), c.valid || (d.valid = !1, d.reason ? (d.reason = [d.reason], d.reason.push(c.reason)) : (d.reason = c.reason, d.possibleValues = c.possibleValues)), d.values ? d.values.push(c.value) : d.values = [c.value];\n      }\n      return d;\n    case "tristate":\n      return c = axs.utils.isPossibleValue(b.toLowerCase(), axs.constants.MIXED_VALUES, a), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "boolean":\n      return c = axs.utils.isValidBoolean(b), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n  }\n  d.valid = !1;\n  d.reason = "Not a valid ARIA property";\n  return d;\n};\naxs.utils.isValidTokenValue = function(a, b) {\n  var c = a.replace(/^aria-/, "");\n  return axs.utils.isPossibleValue(b, axs.constants.ARIA_PROPERTIES[c].valuesSet, a);\n};\naxs.utils.isPossibleValue = function(a, b, c) {\n  return b[a] ? {valid:!0, value:a} : {valid:!1, value:a, reason:\'"\' + a + \'" is not a valid value for \' + c, possibleValues:Object.keys(b)};\n};\naxs.utils.isValidBoolean = function(a) {\n  try {\n    var b = JSON.parse(a);\n  } catch (c) {\n    b = "";\n  }\n  return "boolean" != typeof b ? {valid:!1, value:a, reason:\'"\' + a + \'" is not a true/false value\'} : {valid:!0, value:b};\n};\naxs.utils.isValidIDRefValue = function(a, b) {\n  return 0 == a.length ? {valid:!0, idref:a} : b.ownerDocument.getElementById(a) ? {valid:!0, idref:a} : {valid:!1, idref:a, reason:\'No element with ID "\' + a + \'"\'};\n};\naxs.utils.isValidNumber = function(a) {\n  var b = {valid:!1, value:a, reason:\'"\' + a + \'" is not a number\'};\n  if (!a) {\n    return b;\n  }\n  if (/^0x/i.test(a)) {\n    return b.reason = \'"\' + a + \'" is not a decimal number\', b;\n  }\n  a *= 1;\n  return isFinite(a) ? {valid:!0, value:a} : b;\n};\naxs.utils.isElementImplicitlyFocusable = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLAnchorElement || a instanceof b.HTMLAreaElement ? a.hasAttribute("href") : a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement || a instanceof b.HTMLButtonElement || a instanceof b.HTMLIFrameElement ? !a.disabled : !1;\n};\naxs.utils.values = function(a) {\n  var b = [], c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && b.push(a[c]);\n  }\n  return b;\n};\naxs.utils.namedValues = function(a) {\n  var b = {}, c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && (b[c] = a[c]);\n  }\n  return b;\n};\nfunction escapeId(a) {\n  return a.replace(/[^a-zA-Z0-9_-]/g, function(a) {\n    return "\\\\" + a;\n  });\n}\naxs.utils.getQuerySelectorText = function(a) {\n  if (null == a || "HTML" == a.tagName) {\n    return "html";\n  }\n  if ("BODY" == a.tagName) {\n    return "body";\n  }\n  if (a.hasAttribute) {\n    if (a.id) {\n      return "#" + escapeId(a.id);\n    }\n    if (a.className) {\n      for (var b = "", c = 0;c < a.classList.length;c++) {\n        b += "." + a.classList[c];\n      }\n      var d = 0;\n      if (a.parentNode) {\n        for (c = 0;c < a.parentNode.children.length;c++) {\n          var e = a.parentNode.children[c];\n          axs.browserUtils.matchSelector(e, b) && d++;\n          if (e === a) {\n            break;\n          }\n        }\n      } else {\n        d = 1;\n      }\n      if (1 == d) {\n        return axs.utils.getQuerySelectorText(a.parentNode) + " > " + b;\n      }\n    }\n    if (a.parentNode) {\n      b = a.parentNode.children;\n      d = 1;\n      for (c = 0;b[c] !== a;) {\n        b[c].tagName == a.tagName && d++, c++;\n      }\n      c = "";\n      "BODY" != a.parentNode.tagName && (c = axs.utils.getQuerySelectorText(a.parentNode) + " > ");\n      return 1 == d ? c + a.tagName : c + a.tagName + ":nth-of-type(" + d + ")";\n    }\n  } else {\n    if (a.selectorText) {\n      return a.selectorText;\n    }\n  }\n  return "";\n};\naxs.utils.getAriaIdReferrers = function(a, b) {\n  var c = function(a) {\n    var b = axs.constants.ARIA_PROPERTIES[a];\n    if (b) {\n      if ("idref" === b.valueType) {\n        return "[aria-" + a + "=\'" + d + "\']";\n      }\n      if ("idref_list" === b.valueType) {\n        return "[aria-" + a + "~=\'" + d + "\']";\n      }\n    }\n    return "";\n  };\n  if (!a) {\n    return null;\n  }\n  var d = a.id;\n  if (!d) {\n    return null;\n  }\n  d = d.replace(/\'/g, "\\\\\'");\n  if (b) {\n    var e = b.replace(/^aria-/, ""), f = c(e);\n    if (f) {\n      return a.ownerDocument.querySelectorAll(f);\n    }\n  } else {\n    var g = [];\n    for (e in axs.constants.ARIA_PROPERTIES) {\n      (f = c(e)) && g.push(f);\n    }\n    return a.ownerDocument.querySelectorAll(g.join(","));\n  }\n  return null;\n};\naxs.utils.getHtmlIdReferrers = function(a) {\n  if (!a) {\n    return null;\n  }\n  var b = a.id;\n  if (!b) {\n    return null;\n  }\n  var b = b.replace(/\'/g, "\\\\\'"), c = "[contextmenu=\'{id}\'] [itemref~=\'{id}\'] button[form=\'{id}\'] button[menu=\'{id}\'] fieldset[form=\'{id}\'] input[form=\'{id}\'] input[list=\'{id}\'] keygen[form=\'{id}\'] label[for=\'{id}\'] label[form=\'{id}\'] menuitem[command=\'{id}\'] object[form=\'{id}\'] output[for~=\'{id}\'] output[form=\'{id}\'] select[form=\'{id}\'] td[headers~=\'{id}\'] textarea[form=\'{id}\'] tr[headers~=\'{id}\']".split(" ").map(function(a) {\n    return a.replace("{id}", b);\n  });\n  return a.ownerDocument.querySelectorAll(c.join(","));\n};\naxs.utils.getReferencedIds = function(a) {\n  for (var b = [], c = function(a) {\n    a && (0 < a.indexOf(" ") ? b = b.concat(f.value.split(" ")) : b.push(a));\n  }, d = 0;d < a.attributes.length;d++) {\n    var e = a.tagName.toLowerCase(), f = a.attributes[d];\n    if (f.specified) {\n      var g = f.name, h = g.match(/aria-(.+)/);\n      if (h) {\n        e = axs.constants.ARIA_PROPERTIES[h[1]], !e || "idref" !== e.valueType && "idref_list" !== e.valueType || c(f.value);\n      } else {\n        switch(g) {\n          case "contextmenu":\n          ;\n          case "itemref":\n            c(f.value);\n            break;\n          case "form":\n            "button" != e && "fieldset" != e && "input" != e && "keygen" != e && "label" != e && "object" != e && "output" != e && "select" != e && "textarea" != e || c(f.value);\n            break;\n          case "for":\n            "label" != e && "output" != e || c(f.value);\n            break;\n          case "menu":\n            "button" == e && c(f.value);\n            break;\n          case "list":\n            "input" == e && c(f.value);\n            break;\n          case "command":\n            "menuitem" == e && c(f.value);\n            break;\n          case "headers":\n            "td" != e && "tr" != e || c(f.value);\n        }\n      }\n    }\n  }\n  return b;\n};\naxs.utils.getIdReferrers = function(a) {\n  var b = [], c = axs.utils.getHtmlIdReferrers(a);\n  c && (b = b.concat(Array.prototype.slice.call(c)));\n  (c = axs.utils.getAriaIdReferrers(a)) && (b = b.concat(Array.prototype.slice.call(c)));\n  return b;\n};\naxs.utils.getIdReferents = function(a, b) {\n  var c = [], d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];\n  if (!d || !b.hasAttribute(a)) {\n    return c;\n  }\n  d = d.valueType;\n  if ("idref_list" === d || "idref" === d) {\n    for (var d = b.ownerDocument, e = b.getAttribute(a), e = e.split(/\\s+/), f = 0, g = e.length;f < g;f++) {\n      var h = d.getElementById(e[f]);\n      h && (c[c.length] = h);\n    }\n  }\n  return c;\n};\naxs.utils.getAriaPropertiesByValueType = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.ARIA_PROPERTIES) {\n    var d = axs.constants.ARIA_PROPERTIES[c];\n    d && 0 <= a.indexOf(d.valueType) && (b[c] = d);\n  }\n  return b;\n};\naxs.utils.getSelectorForAriaProperties = function(a) {\n  a = Object.keys(a).map(function(a) {\n    return "[aria-" + a + "]";\n  });\n  a.sort();\n  return a.join(",");\n};\naxs.utils.findDescendantsWithRole = function(a, b) {\n  if (!a || !b) {\n    return [];\n  }\n  var c = axs.properties.getSelectorForRole(b);\n  if (c && (c = a.querySelectorAll(c))) {\n    c = Array.prototype.map.call(c, function(a) {\n      return a;\n    });\n  } else {\n    return [];\n  }\n  return c;\n};\naxs.properties = {};\naxs.properties.TEXT_CONTENT_XPATH = \'.//text()[normalize-space(.)!=""]/parent::*[name()!="script"]\';\naxs.properties.getFocusProperties = function(a) {\n  var b = {}, c = a.getAttribute("tabindex");\n  void 0 != c ? b.tabindex = {value:c, valid:!0} : axs.utils.isElementImplicitlyFocusable(a) && (b.implicitlyFocusable = {value:!0, valid:!0});\n  if (0 == Object.keys(b).length) {\n    return null;\n  }\n  var d = axs.utils.elementIsTransparent(a), e = axs.utils.elementHasZeroArea(a), f = axs.utils.elementIsOutsideScrollArea(a), g = axs.utils.overlappingElements(a);\n  if (d || e || f || 0 < g.length) {\n    var c = axs.utils.isElementOrAncestorHidden(a), h = {value:!1, valid:c};\n    d && (h.transparent = !0);\n    e && (h.zeroArea = !0);\n    f && (h.outsideScrollArea = !0);\n    g && 0 < g.length && (h.overlappingElements = g);\n    d = {value:c, valid:c};\n    c && (d.reason = axs.properties.getHiddenReason(a));\n    h.hidden = d;\n    b.visible = h;\n  } else {\n    b.visible = {value:!0, valid:!0};\n  }\n  return b;\n};\naxs.properties.getHiddenReason = function(a) {\n  if (!(a && a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return null;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display ? {property:"display: none", on:a} : "hidden" == c.visibility ? {property:"visibility: hidden", on:a} : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() && !b ? {property:"aria-hidden", on:a} : axs.properties.getHiddenReason(axs.dom.parentElement(a));\n};\naxs.properties.getColorProperties = function(a) {\n  var b = {};\n  (a = axs.properties.getContrastRatioProperties(a)) && (b.contrastRatio = a);\n  return 0 == Object.keys(b).length ? null : b;\n};\naxs.properties.hasDirectTextDescendant = function(a) {\n  function b() {\n    for (var b = c.evaluate(axs.properties.TEXT_CONTENT_XPATH, a, null, XPathResult.ANY_TYPE, null), e = b.iterateNext();null != e;e = b.iterateNext()) {\n      if (e === a) {\n        return !0;\n      }\n    }\n    return !1;\n  }\n  var c;\n  c = a.nodeType == Node.DOCUMENT_NODE ? a : a.ownerDocument;\n  return c.evaluate ? b() : function() {\n    for (var b = c.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);b.nextNode();) {\n      var e = b.currentNode, f = e.parentNode.tagName.toLowerCase();\n      if (e.nodeValue.trim() && "script" !== f && a !== e) {\n        return !0;\n      }\n    }\n    return !1;\n  }();\n};\naxs.properties.getContrastRatioProperties = function(a) {\n  if (!axs.properties.hasDirectTextDescendant(a)) {\n    return null;\n  }\n  var b = {}, c = window.getComputedStyle(a, null), d = axs.utils.getBgColor(c, a);\n  if (!d) {\n    return null;\n  }\n  b.backgroundColor = axs.color.colorToString(d);\n  var e = axs.utils.getFgColor(c, a, d);\n  b.foregroundColor = axs.color.colorToString(e);\n  a = axs.utils.getContrastRatioForElementWithComputedStyle(c, a);\n  if (!a) {\n    return null;\n  }\n  b.value = a.toFixed(2);\n  axs.utils.isLowContrast(a, c) && (b.alert = !0);\n  var f = axs.utils.isLargeFont(c) ? 3 : 4.5, c = axs.utils.isLargeFont(c) ? 4.5 : 7, g = {};\n  f > a && (g.AA = f);\n  c > a && (g.AAA = c);\n  if (!Object.keys(g).length) {\n    return b;\n  }\n  (d = axs.color.suggestColors(d, e, g)) && Object.keys(d).length && (b.suggestedColors = d);\n  return b;\n};\naxs.properties.findTextAlternatives = function(a, b, c, d) {\n  var e = c || !1;\n  c = axs.dom.asElement(a);\n  if (!c || !d && axs.utils.isElementOrAncestorHidden(c)) {\n    return null;\n  }\n  if (a.nodeType == Node.TEXT_NODE) {\n    return c = {type:"text"}, c.text = a.textContent, c.lastWord = axs.properties.getLastWord(c.text), b.content = c, a.textContent;\n  }\n  a = null;\n  e || (a = axs.properties.getTextFromAriaLabelledby(c, b));\n  if (c.hasAttribute("aria-label")) {\n    var f = {type:"text"};\n    f.text = c.getAttribute("aria-label");\n    f.lastWord = axs.properties.getLastWord(f.text);\n    a ? f.unused = !0 : e && axs.utils.elementIsHtmlControl(c) || (a = f.text);\n    b.ariaLabel = f;\n  }\n  c.hasAttribute("role") && "presentation" == c.getAttribute("role") || (a = axs.properties.getTextFromHostLanguageAttributes(c, b, a, e));\n  e && axs.utils.elementIsHtmlControl(c) && (f = c.ownerDocument.defaultView, c instanceof f.HTMLInputElement && ("text" == c.type && c.value && 0 < c.value.length && (b.controlValue = {text:c.value}), "range" == c.type && (b.controlValue = {text:c.value})), c instanceof f.HTMLSelectElement && (b.controlValue = {text:c.value}), b.controlValue && (f = b.controlValue, a ? f.unused = !0 : a = f.text));\n  if (e && axs.utils.elementIsAriaWidget(c)) {\n    e = c.getAttribute("role");\n    "textbox" == e && c.textContent && 0 < c.textContent.length && (b.controlValue = {text:c.textContent});\n    if ("slider" == e || "spinbutton" == e) {\n      c.hasAttribute("aria-valuetext") ? b.controlValue = {text:c.getAttribute("aria-valuetext")} : c.hasAttribute("aria-valuenow") && (b.controlValue = {value:c.getAttribute("aria-valuenow"), text:"" + c.getAttribute("aria-valuenow")});\n    }\n    if ("menu" == e) {\n      for (var g = c.querySelectorAll("[role=menuitemcheckbox], [role=menuitemradio]"), f = [], h = 0;h < g.length;h++) {\n        "true" == g[h].getAttribute("aria-checked") && f.push(g[h]);\n      }\n      if (0 < f.length) {\n        g = "";\n        for (h = 0;h < f.length;h++) {\n          g += axs.properties.findTextAlternatives(f[h], {}, !0), h < f.length - 1 && (g += ", ");\n        }\n        b.controlValue = {text:g};\n      }\n    }\n    if ("combobox" == e || "select" == e) {\n      b.controlValue = {text:"TODO"};\n    }\n    b.controlValue && (f = b.controlValue, a ? f.unused = !0 : a = f.text);\n  }\n  f = !0;\n  c.hasAttribute("role") && (e = c.getAttribute("role"), (e = axs.constants.ARIA_ROLES[e]) && (!e.namefrom || 0 > e.namefrom.indexOf("contents")) && (f = !1));\n  (d = axs.properties.getTextFromDescendantContent(c, d)) && f && (e = {type:"text"}, e.text = d, e.lastWord = axs.properties.getLastWord(e.text), a ? e.unused = !0 : a = d, b.content = e);\n  c.hasAttribute("title") && (d = {type:"string", valid:!0}, d.text = c.getAttribute("title"), d.lastWord = axs.properties.getLastWord(d.lastWord), a ? d.unused = !0 : a = d.text, b.title = d);\n  return 0 == Object.keys(b).length && null == a ? null : a;\n};\naxs.properties.getTextFromDescendantContent = function(a, b) {\n  for (var c = a.childNodes, d = [], e = 0;e < c.length;e++) {\n    var f = axs.properties.findTextAlternatives(c[e], {}, !0, b);\n    f && d.push(f.trim());\n  }\n  if (d.length) {\n    c = "";\n    for (e = 0;e < d.length;e++) {\n      c = [c, d[e]].join(" ").trim();\n    }\n    return c;\n  }\n  return null;\n};\naxs.properties.getTextFromAriaLabelledby = function(a, b) {\n  var c = null;\n  if (!a.hasAttribute("aria-labelledby")) {\n    return c;\n  }\n  for (var d = a.getAttribute("aria-labelledby").split(/\\s+/), e = {valid:!0}, f = [], g = [], h = 0;h < d.length;h++) {\n    var k = {type:"element"}, m = d[h];\n    k.value = m;\n    var l = document.getElementById(m);\n    l ? (k.valid = !0, k.text = axs.properties.findTextAlternatives(l, {}, !0, !0), k.lastWord = axs.properties.getLastWord(k.text), f.push(k.text), k.element = l) : (k.valid = !1, e.valid = !1, k.errorMessage = {messageKey:"noElementWithId", args:[m]});\n    g.push(k);\n  }\n  0 < g.length && (g[g.length - 1].last = !0, e.values = g, e.text = f.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c = e.text, b.ariaLabelledby = e);\n  return c;\n};\naxs.properties.getTextFromHostLanguageAttributes = function(a, b, c, d) {\n  if (axs.browserUtils.matchSelector(a, "img") && a.hasAttribute("alt")) {\n    var e = {type:"string", valid:!0};\n    e.text = a.getAttribute("alt");\n    c ? e.unused = !0 : c = e.text;\n    b.alt = e;\n  }\n  if (axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') && !d) {\n    if (a.hasAttribute("id")) {\n      d = document.querySelectorAll(\'label[for="\' + a.id + \'"]\');\n      for (var e = {}, f = [], g = [], h = 0;h < d.length;h++) {\n        var k = {type:"element"}, m = d[h], l = axs.properties.findTextAlternatives(m, {}, !0);\n        l && 0 < l.trim().length && (k.text = l.trim(), g.push(l.trim()));\n        k.element = m;\n        f.push(k);\n      }\n      0 < f.length && (f[f.length - 1].last = !0, e.values = f, e.text = g.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c ? e.unused = !0 : c = e.text, b.labelFor = e);\n    }\n    d = axs.dom.parentElement(a);\n    for (e = {};d;) {\n      if ("label" == d.tagName.toLowerCase() && (f = d, f.control == a)) {\n        e.type = "element";\n        e.text = axs.properties.findTextAlternatives(f, {}, !0);\n        e.lastWord = axs.properties.getLastWord(e.text);\n        e.element = f;\n        break;\n      }\n      d = axs.dom.parentElement(d);\n    }\n    e.text && (c ? e.unused = !0 : c = e.text, b.labelWrapped = e);\n    axs.browserUtils.matchSelector(a, \'input[type="image"]\') && a.hasAttribute("alt") && (e = {type:"string", valid:!0}, e.text = a.getAttribute("alt"), c ? e.unused = !0 : c = e.text, b.alt = e);\n    Object.keys(b).length || (b.noLabel = !0);\n  }\n  return c;\n};\naxs.properties.getLastWord = function(a) {\n  if (!a) {\n    return null;\n  }\n  var b = a.lastIndexOf(" ") + 1, c = a.length - 10;\n  return a.substring(b > c ? b : c);\n};\naxs.properties.getTextProperties = function(a) {\n  var b = {}, c = axs.properties.findTextAlternatives(a, b, !1, !0);\n  if (0 == Object.keys(b).length && ((a = axs.dom.asElement(a)) && axs.browserUtils.matchSelector(a, "img") && (b.alt = {valid:!1, errorMessage:"No alt value provided"}, a = a.src, "string" == typeof a && (c = a.split("/").pop(), b.filename = {text:c})), !c)) {\n    return null;\n  }\n  b.hasProperties = !!Object.keys(b).length;\n  b.computedText = c;\n  b.lastWord = axs.properties.getLastWord(c);\n  return b;\n};\naxs.properties.getAriaProperties = function(a) {\n  var b = {}, c = axs.properties.getGlobalAriaProperties(a), d;\n  for (d in axs.constants.ARIA_PROPERTIES) {\n    var e = "aria-" + d;\n    if (a.hasAttribute(e)) {\n      var f = a.getAttribute(e);\n      c[e] = axs.utils.getAriaPropertyValue(e, f, a);\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  f = axs.utils.getRoles(a);\n  if (!f) {\n    return Object.keys(b).length ? b : null;\n  }\n  b.roles = f;\n  if (!f.valid || !f.roles) {\n    return b;\n  }\n  for (var e = f.roles, g = 0;g < e.length;g++) {\n    var h = e[g];\n    if (h.details && h.details.propertiesSet) {\n      for (d in h.details.propertiesSet) {\n        d in c || (a.hasAttribute(d) ? (f = a.getAttribute(d), c[d] = axs.utils.getAriaPropertyValue(d, f, a), "values" in c[d] && (f = c[d].values, f[f.length - 1].isLast = !0)) : h.details.requiredPropertiesSet[d] && (c[d] = {name:d, valid:!1, reason:"Required property not set"}));\n      }\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  return 0 < Object.keys(b).length ? b : null;\n};\naxs.properties.getGlobalAriaProperties = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.GLOBAL_PROPERTIES) {\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      b[c] = axs.utils.getAriaPropertyValue(c, d, a);\n    }\n  }\n  return b;\n};\naxs.properties.getVideoProperties = function(a) {\n  if (!axs.browserUtils.matchSelector(a, "video")) {\n    return null;\n  }\n  var b = {};\n  b.captionTracks = axs.properties.getTrackElements(a, "captions");\n  b.descriptionTracks = axs.properties.getTrackElements(a, "descriptions");\n  b.chapterTracks = axs.properties.getTrackElements(a, "chapters");\n  return b;\n};\naxs.properties.getTrackElements = function(a, b) {\n  var c = a.querySelectorAll("track[kind=" + b + "]"), d = {};\n  if (!c.length) {\n    return d.valid = !1, d.reason = {messageKey:"noTracksProvided", args:[[b]]}, d;\n  }\n  d.valid = !0;\n  for (var e = [], f = 0;f < c.length;f++) {\n    var g = {}, h = c[f].getAttribute("src"), k = c[f].getAttribute("srcLang"), m = c[f].getAttribute("label");\n    h ? (g.valid = !0, g.src = h) : (g.valid = !1, g.reason = {messageKey:"noSrcProvided"});\n    h = "";\n    m && (h += m, k && (h += " "));\n    k && (h += "(" + k + ")");\n    "" == h && (h = "[[object Object]]");\n    g.name = h;\n    e.push(g);\n  }\n  d.values = e;\n  return d;\n};\naxs.properties.getAllProperties = function(a) {\n  var b = axs.dom.asElement(a);\n  if (!b) {\n    return {};\n  }\n  var c = {};\n  c.ariaProperties = axs.properties.getAriaProperties(b);\n  c.colorProperties = axs.properties.getColorProperties(b);\n  c.focusProperties = axs.properties.getFocusProperties(b);\n  c.textProperties = axs.properties.getTextProperties(a);\n  c.videoProperties = axs.properties.getVideoProperties(b);\n  return c;\n};\n(function() {\n  function a(a) {\n    if (!a) {\n      return null;\n    }\n    var c = a.tagName;\n    if (!c) {\n      return null;\n    }\n    c = c.toUpperCase();\n    c = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[c];\n    if (!c || !c.length) {\n      return null;\n    }\n    for (var d = null, e = 0, f = c.length;e < f;e++) {\n      var g = c[e];\n      if (g.selector) {\n        if (axs.browserUtils.matchSelector(a, g.selector)) {\n          return g;\n        }\n      } else {\n        d = g;\n      }\n    }\n    return d;\n  }\n  axs.properties.getImplicitRole = function(b) {\n    return (b = a(b)) ? b.role : "";\n  };\n  axs.properties.canTakeAriaAttributes = function(b) {\n    return (b = a(b)) ? !b.reserved : !0;\n  };\n})();\naxs.properties.getNativelySupportedAttributes = function(a) {\n  var b = [];\n  if (!a) {\n    return b;\n  }\n  a = a.cloneNode(!1);\n  for (var c = Object.keys(axs.constants.ARIA_TO_HTML_ATTRIBUTE), d = 0;d < c.length;d++) {\n    var e = c[d];\n    axs.constants.ARIA_TO_HTML_ATTRIBUTE[e] in a && (b[b.length] = e);\n  }\n  return b;\n};\n(function() {\n  var a = {};\n  axs.properties.getSelectorForRole = function(b) {\n    if (!b) {\n      return "";\n    }\n    if (a[b] && a.hasOwnProperty(b)) {\n      return a[b];\n    }\n    var c = [\'[role="\' + b + \'"]\'];\n    Object.keys(axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO).forEach(function(a) {\n      var e = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[a];\n      if (e && e.length) {\n        for (var f = 0;f < e.length;f++) {\n          var g = e[f];\n          if (g.role === b) {\n            if (g.selector) {\n              c[c.length] = g.selector;\n            } else {\n              c[c.length] = a;\n              break;\n            }\n          }\n        }\n      }\n    });\n    return a[b] = c.join(",");\n  };\n})();\naxs.AuditRule = function(a) {\n  for (var b = a.opt_requires || {}, c = !0, d = [], e = 0;e < axs.AuditRule.requiredFields.length;e++) {\n    var f = axs.AuditRule.requiredFields[e];\n    f in a || (c = !1, d.push(f));\n  }\n  if (!c) {\n    throw "Invalid spec; the following fields were not specified: " + d.join(", ") + "\\n" + JSON.stringify(a);\n  }\n  this.name = a.name;\n  this.severity = a.severity;\n  this.relevantElementMatcher_ = a.relevantElementMatcher;\n  this.isRelevant_ = a.isRelevant || function(a, b) {\n    return !0;\n  };\n  this.test_ = a.test;\n  this.code = a.code;\n  this.heading = a.heading || "";\n  this.url = a.url || "";\n  this.requiresConsoleAPI = !!b.consoleAPI;\n  this.relevantElements = [];\n  this.relatedElements = [];\n  this.collectIdRefs = b.idRefs || !1;\n};\naxs.AuditRule.requiredFields = "name severity relevantElementMatcher test code heading".split(" ");\naxs.AuditRule.NOT_APPLICABLE = {result:axs.constants.AuditResult.NA};\naxs.AuditRule.prototype.addElement = function(a, b) {\n  a.push(b);\n};\naxs.AuditRule.prototype.collectMatchingElement = function(a, b) {\n  return this.relevantElementMatcher_(a, b) && b.inScope ? (this.relevantElements.push({element:a, flags:b}), !0) : !1;\n};\naxs.AuditRule.prototype.canRun = function(a) {\n  return this.disabled || !a.withConsoleApi && this.requiresConsoleAPI ? !1 : !0;\n};\naxs.AuditRule.Result = function(a, b) {\n  var c = axs.utils.namedValues(b);\n  c.severity = a.getSeverity(b.name) || c.severity;\n  this.rule = c;\n  this.maxResults = a.maxResults;\n  this.update(axs.constants.AuditResult.NA);\n};\naxs.AuditRule.Result.prototype.update = function(a, b) {\n  if (a === axs.constants.AuditResult.FAIL) {\n    var c = this.elements || (this.elements = []);\n    this.result = a;\n    this.maxResults && this.elements.length >= this.maxResults ? this.resultsTruncated = !0 : b && c.push(b);\n  } else {\n    a === axs.constants.AuditResult.PASS ? (this.elements || (this.elements = []), this.result !== axs.constants.AuditResult.FAIL && (this.result = a)) : this.result || (this.result = a);\n  }\n};\naxs.AuditRule.prototype.run = function(a) {\n  try {\n    for (var b = this._options || {}, c = new axs.AuditRule.Result(a, this), d;d = this.relevantElements.shift();) {\n      var e = d.element, f = d.flags;\n      this.isRelevant_(e, f) && (this.test_(e, f, b.config) ? c.update(axs.constants.AuditResult.FAIL, e) : c.update(axs.constants.AuditResult.PASS, e));\n    }\n    return c;\n  } finally {\n    this.relatedElements.length = 0;\n  }\n};\naxs.AuditRules = {};\n(function() {\n  var a = {}, b = {};\n  axs.AuditRules.specs = {};\n  axs.AuditRules.addRule = function(c) {\n    var d = new axs.AuditRule(c);\n    if (d.code in b) {\n      throw Error(\'Can not add audit rule with same code: "\' + d.code + \'"\');\n    }\n    if (d.name in a) {\n      throw Error(\'Can not add audit rule with same name: "\' + d.name + \'"\');\n    }\n    a[d.name] = b[d.code] = d;\n    axs.AuditRules.specs[c.name] = c;\n  };\n  axs.AuditRules.getRule = function(c) {\n    return a[c] || b[c] || null;\n  };\n  axs.AuditRules.getRules = function(b) {\n    var d = Object.keys(a);\n    return b ? d : d.map(function(a) {\n      return this.getRule(a);\n    }, axs.AuditRules);\n  };\n  axs.AuditRules.getActiveRules = function(a) {\n    var b;\n    b = a.auditRulesToRun && 0 < a.auditRulesToRun.length ? a.auditRulesToRun : axs.AuditRules.getRules(!0);\n    if (a.auditRulesToIgnore) {\n      for (var e = 0;e < a.auditRulesToIgnore.length;e++) {\n        var f = a.auditRulesToIgnore[e];\n        0 > b.indexOf(f) || b.splice(b.indexOf(f), 1);\n      }\n    }\n    return b.map(axs.AuditRules.getRule);\n  };\n})();\naxs.AuditResults = function() {\n  this.errors_ = [];\n  this.warnings_ = [];\n};\ngoog.exportSymbol("axs.AuditResults", axs.AuditResults);\naxs.AuditResults.prototype.addError = function(a) {\n  "" != a && this.errors_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addError", axs.AuditResults.prototype.addError);\naxs.AuditResults.prototype.addWarning = function(a) {\n  "" != a && this.warnings_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addWarning", axs.AuditResults.prototype.addWarning);\naxs.AuditResults.prototype.numErrors = function() {\n  return this.errors_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numErrors", axs.AuditResults.prototype.numErrors);\naxs.AuditResults.prototype.numWarnings = function() {\n  return this.warnings_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numWarnings", axs.AuditResults.prototype.numWarnings);\naxs.AuditResults.prototype.getErrors = function() {\n  return this.errors_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getErrors", axs.AuditResults.prototype.getErrors);\naxs.AuditResults.prototype.getWarnings = function() {\n  return this.warnings_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getWarnings", axs.AuditResults.prototype.getWarnings);\naxs.AuditResults.prototype.toString = function() {\n  for (var a = "", b = 0;b < this.errors_.length;b++) {\n    0 == b && (a += "\\nErrors:\\n");\n    var c = this.errors_[b], a = a + (c + "\\n\\n");\n  }\n  for (b = 0;b < this.warnings_.length;b++) {\n    0 == b && (a += "\\nWarnings:\\n"), c = this.warnings_[b], a += c + "\\n\\n";\n  }\n  return a;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "toString", axs.AuditResults.prototype.toString);\naxs.Audit = {};\naxs.AuditConfiguration = function(a) {\n  null == a && (a = {});\n  this.rules_ = {};\n  this.maxResults = this.auditRulesToIgnore = this.auditRulesToRun = this.scope = null;\n  this.withConsoleApi = !1;\n  this.showUnsupportedRulesWarning = this.walkDom = !0;\n  for (var b in this) {\n    this.hasOwnProperty(b) && b in a && (this[b] = a[b]);\n  }\n  goog.exportProperty(this, "scope", this.scope);\n  goog.exportProperty(this, "auditRulesToRun", this.auditRulesToRun);\n  goog.exportProperty(this, "auditRulesToIgnore", this.auditRulesToIgnore);\n  goog.exportProperty(this, "withConsoleApi", this.withConsoleApi);\n  goog.exportProperty(this, "walkDom", this.walkDom);\n  goog.exportProperty(this, "showUnsupportedRulesWarning", this.showUnsupportedRulesWarning);\n};\ngoog.exportSymbol("axs.AuditConfiguration", axs.AuditConfiguration);\naxs.AuditConfiguration.prototype = {ignoreSelectors:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  "ignore" in this.rules_[a] || (this.rules_[a].ignore = []);\n  Array.prototype.push.call(this.rules_[a].ignore, b);\n}, getIgnoreSelectors:function(a) {\n  return a in this.rules_ && "ignore" in this.rules_[a] ? this.rules_[a].ignore : [];\n}, setSeverity:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].severity = b;\n}, getSeverity:function(a) {\n  return a in this.rules_ && "severity" in this.rules_[a] ? this.rules_[a].severity : null;\n}, setRuleConfig:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].config = b;\n}, getRuleConfig:function(a) {\n  return a in this.rules_ && "config" in this.rules_[a] ? this.rules_[a].config : null;\n}};\ngoog.exportProperty(axs.AuditConfiguration.prototype, "ignoreSelectors", axs.AuditConfiguration.prototype.ignoreSelectors);\ngoog.exportProperty(axs.AuditConfiguration.prototype, "getIgnoreSelectors", axs.AuditConfiguration.prototype.getIgnoreSelectors);\naxs.Audit.unsupportedRulesWarningShown = !1;\naxs.Audit.getRulesCannotRun = function(a) {\n  return a.withConsoleApi ? [] : axs.AuditRules.getRules().filter(function(a) {\n    return a.requiresConsoleAPI;\n  }).map(function(a) {\n    return a.code;\n  });\n};\naxs.Audit.run = function(a) {\n  a = a || new axs.AuditConfiguration;\n  if (!axs.Audit.unsupportedRulesWarningShown && a.showUnsupportedRulesWarning) {\n    var b = axs.Audit.getRulesCannotRun(a);\n    0 < b.length && (console.warn("Some rules cannot be checked using the axs.Audit.run() method call. Use the Chrome plugin to check these rules: " + b.join(", ")), console.warn("To remove this message, pass an AuditConfiguration object to axs.Audit.run() and set configuration.showUnsupportedRulesWarning = false."));\n    axs.Audit.unsupportedRulesWarningShown = !0;\n  }\n  b = axs.AuditRules.getActiveRules(a);\n  a.collectIdRefs = b.some(function(a) {\n    return a.collectIdRefs;\n  });\n  a.scope || (a.scope = document.documentElement);\n  axs.Audit.collectMatchingElements(a, b);\n  for (var c = [], d = 0;d < b.length;d++) {\n    var e = b[d];\n    e.canRun(a) && c.push(e.run(a));\n  }\n  return c;\n};\ngoog.exportSymbol("axs.Audit.run", axs.Audit.run);\n(function() {\n  function a(a, c) {\n    var d = a.getIgnoreSelectors(c.name);\n    if (0 < d.length || a.scope) {\n      this.ignoreSelectors = d;\n    }\n    if (d = a.getRuleConfig(c.name)) {\n      this.config = d;\n    }\n  }\n  axs.Audit.collectMatchingElements = function(b, c) {\n    axs.dom.composedTreeSearch(b.walkDom ? document.documentElement : b.scope, null, {preorder:function(d, e) {\n      e.inScope || (e.inScope = d === b.scope);\n      for (var f = 0;f < c.length;f++) {\n        var g = c[f];\n        g.canRun(b) && (g._options = new a(b, g), e.ignoring[g.name] || (e.ignoring[g.name] = g._options.shouldIgnore(d)) || g.collectMatchingElement(d, e));\n      }\n      return !0;\n    }}, {walkDom:b.walkDom, collectIdRefs:b.collectIdRefs, level:0, ignoring:{}, disabled:!1, hidden:!1});\n  };\n  a.prototype.shouldIgnore = function(a) {\n    var c = this.ignoreSelectors;\n    if (c) {\n      for (var d = 0;d < c.length;d++) {\n        if (axs.browserUtils.matchSelector(a, c[d])) {\n          return !0;\n        }\n      }\n    }\n    return !1;\n  };\n})();\naxs.Audit.auditResults = function(a) {\n  for (var b = new axs.AuditResults, c = 0;c < a.length;c++) {\n    var d = a[c];\n    d.result == axs.constants.AuditResult.FAIL && (d.rule.severity == axs.constants.Severity.SEVERE ? b.addError(axs.Audit.accessibilityErrorMessage(d)) : b.addWarning(axs.Audit.accessibilityErrorMessage(d)));\n  }\n  return b;\n};\ngoog.exportSymbol("axs.Audit.auditResults", axs.Audit.auditResults);\naxs.Audit.createReport = function(a, b) {\n  var c;\n  c = "*** Begin accessibility audit results ***\\nAn accessibility audit found " + axs.Audit.auditResults(a).toString();\n  b && (c = c + "\\nFor more information, please see " + b);\n  return c + "\\n*** End accessibility audit results ***";\n};\ngoog.exportSymbol("axs.Audit.createReport", axs.Audit.createReport);\naxs.Audit.accessibilityErrorMessage = function(a) {\n  for (var b = a.rule.severity == axs.constants.Severity.SEVERE ? "Error: " : "Warning: ", b = b + (a.rule.code + " (" + a.rule.heading + ") failed on the following " + (1 == a.elements.length ? "element" : "elements")), b = 1 == a.elements.length ? b + ":" : b + (" (1 - " + Math.min(5, a.elements.length) + " of " + a.elements.length + "):"), c = Math.min(a.elements.length, 5), d = 0;d < c;d++) {\n    var e = a.elements[d], b = b + "\\n";\n    try {\n      b += axs.utils.getQuerySelectorText(e);\n    } catch (f) {\n      b += " tagName:" + e.tagName, b += " id:" + e.id;\n    }\n  }\n  "" != a.rule.url && (b += "\\nSee " + a.rule.url + " for more information.");\n  return b;\n};\ngoog.exportSymbol("axs.Audit.accessibilityErrorMessage", axs.Audit.accessibilityErrorMessage);\naxs.AuditRules.addRule({name:"ariaOnReservedElement", heading:"This element does not support ARIA roles, states and properties", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return !axs.properties.canTakeAriaAttributes(a);\n}, test:function(a) {\n  return null !== axs.properties.getAriaProperties(a);\n}, code:"AX_ARIA_12"});\naxs.AuditRules.addRule({name:"ariaOwnsDescendant", heading:"aria-owns should not be used if ownership is implicit in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_06", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(b) {\n    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY;\n  });\n}, code:"AX_ARIA_06"});\naxs.AuditRules.addRule({name:"ariaRoleNotScoped", heading:"Elements with ARIA roles must be in the correct scope", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_09", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b || !b.applied) {\n    return !1;\n  }\n  b = b.applied.details.scope;\n  if (!b || 0 === b.length) {\n    return !1;\n  }\n  for (var c = a;c = axs.dom.parentElement(c);) {\n    var d = axs.utils.getRoles(c, !0);\n    if (d && d.applied && 0 <= b.indexOf(d.applied.name)) {\n      return !1;\n    }\n  }\n  if (a = axs.utils.getAriaIdReferrers(a, "aria-owns")) {\n    for (c = 0;c < a.length;c++) {\n      if ((d = axs.utils.getRoles(a[c], !0)) && d.applied && 0 <= b.indexOf(d.applied.name)) {\n        return !1;\n      }\n    }\n  }\n  return !0;\n}, code:"AX_ARIA_09"});\naxs.AuditRules.addRule({name:"audioWithoutControls", heading:"Audio elements should have controls", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_audio_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "audio[autoplay]");\n}, test:function(a) {\n  return !a.querySelectorAll("[controls]").length && 3 < a.duration;\n}, code:"AX_AUDIO_01"});\n(function() {\n  var a = /^aria\\-/;\n  axs.AuditRules.addRule({name:"badAriaAttribute", heading:"This element has an invalid ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_11", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      if (a.test(b[c].name)) {\n        return !0;\n      }\n    }\n    return !1;\n  }, test:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      var e = b[c].name;\n      if (a.test(e) && (e = e.replace(a, ""), !axs.constants.ARIA_PROPERTIES.hasOwnProperty(e))) {\n        return !0;\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_11"});\n})();\naxs.AuditRules.addRule({name:"badAriaAttributeValue", heading:"ARIA state and property values must be valid", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  var b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  return axs.browserUtils.matchSelector(a, b);\n}, test:function(a) {\n  for (var b in axs.constants.ARIA_PROPERTIES) {\n    var c = "aria-" + b;\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      if (!axs.utils.getAriaPropertyValue(c, d, a).valid) {\n        return !0;\n      }\n    }\n  }\n  return !1;\n}, code:"AX_ARIA_04"});\naxs.AuditRules.addRule({name:"badAriaRole", heading:"Elements with ARIA roles must use a valid, non-abstract ARIA role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  return !axs.utils.getRoles(a).valid;\n}, code:"AX_ARIA_01"});\naxs.AuditRules.addRule({name:"controlsWithoutLabel", heading:"Controls and media elements should have labels", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (a = axs.dom.parentElement(a);null != a;a = axs.dom.parentElement(a)) {\n    if (axs.utils.elementIsAriaWidget(a)) {\n      return !1;\n    }\n  }\n  return !0;\n}, test:function(a, b) {\n  if (b.hidden || "input" == a.tagName.toLowerCase() && "button" == a.type && a.value.length || "button" == a.tagName.toLowerCase() && a.textContent.replace(/^\\s+|\\s+$/g, "").length || axs.utils.hasLabel(a)) {\n    return !1;\n  }\n  var c = axs.properties.findTextAlternatives(a, {});\n  return null === c || "" === c.trim() ? !0 : !1;\n}, code:"AX_TEXT_01", ruleName:"Controls and media elements should have labels"});\naxs.AuditRules.addRule({name:"duplicateId", heading:"Any ID referred to via an IDREF must be unique in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_02", severity:axs.constants.Severity.SEVERE, opt_requires:{idRefs:!0}, relevantElementMatcher:function(a, b) {\n  b.idrefs.length && !b.hidden && this.relatedElements.push({element:a, flags:b});\n  return a.hasAttribute("id") ? !0 : !1;\n}, isRelevant:function(a, b) {\n  var c = a.id, d = b.level;\n  return this.relatedElements.some(function(a) {\n    var b = a.flags.idrefs;\n    return a.flags.level === d && 0 <= b.indexOf(c);\n  });\n}, test:function(a) {\n  var b = "[id=\'" + a.id.replace(/\'/g, "\\\\\'") + "\']";\n  return 1 < a.ownerDocument.querySelectorAll(b).length;\n}, code:"AX_HTML_02"});\naxs.AuditRules.addRule({name:"focusableElementNotVisibleAndNotAriaHidden", heading:"These elements are focusable but either invisible or obscured by another element", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, axs.utils.FOCUSABLE_ELEMENTS_SELECTOR)) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (var b = axs.dom.parentElement(a);null != b;b = axs.dom.parentElement(b)) {\n    if (axs.utils.elementIsAriaWidget(b)) {\n      return !1;\n    }\n  }\n  a = axs.properties.findTextAlternatives(a, {});\n  return null === a || "" === a.trim() ? !1 : !0;\n}, test:function(a, b) {\n  if (b.hidden) {\n    return !1;\n  }\n  a.focus();\n  return !axs.utils.elementIsVisible(a);\n}, code:"AX_FOCUS_01"});\naxs.AuditRules.addRule({name:"humanLangMissing", heading:"The web page should have the content\'s human language indicated in the markup", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return a instanceof a.ownerDocument.defaultView.HTMLHtmlElement;\n}, test:function(a) {\n  return a.lang ? !1 : !0;\n}, code:"AX_HTML_01"});\naxs.AuditRules.addRule({name:"imagesWithoutAltText", heading:"Images should have a text alternative or presentational role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_02", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a, b) {\n  return axs.browserUtils.matchSelector(a, "img") && !b.hidden;\n}, test:function(a) {\n  if (a.hasAttribute("alt") && "" == a.alt || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  var b = {};\n  axs.properties.findTextAlternatives(a, b);\n  return 0 == Object.keys(b).length ? !0 : !1;\n}, code:"AX_TEXT_02"});\naxs.AuditRules.addRule({name:"linkWithUnclearPurpose", heading:"The purpose of each link should be clear from the link text", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_04", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a, b) {\n  return axs.browserUtils.matchSelector(a, "a[href]") && !b.hidden;\n}, test:function(a, b, c) {\n  c = c || {};\n  var d = c.blacklistPhrases || [], e = /\\s+/;\n  for (b = 0;b < d.length;b++) {\n    var f = "^\\\\s*" + d[b].trim().replace(e, "\\\\s*") + "s*[^a-z]$";\n    if ((new RegExp(f, "i")).test(a.textContent)) {\n      return !0;\n    }\n  }\n  c = c.stopwords || "click tap go here learn more this page link about".split(" ");\n  a = axs.properties.findTextAlternatives(a, {});\n  if (null === a || "" === a.trim()) {\n    return !0;\n  }\n  a = a.replace(/[^a-zA-Z ]/g, "");\n  for (b = 0;b < c.length;b++) {\n    if (a = a.replace(new RegExp("\\\\b" + c[b] + "\\\\b", "ig"), ""), "" == a.trim()) {\n      return !0;\n    }\n  }\n  return !1;\n}, code:"AX_TEXT_04"});\naxs.AuditRules.addRule({name:"lowContrastElements", heading:"Text elements should have a reasonable contrast ratio", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_color_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a, b) {\n  return !b.disabled && axs.properties.hasDirectTextDescendant(a);\n}, test:function(a) {\n  var b = window.getComputedStyle(a, null);\n  return (a = axs.utils.getContrastRatioForElementWithComputedStyle(b, a)) && axs.utils.isLowContrast(a, b);\n}, code:"AX_COLOR_01"});\naxs.AuditRules.addRule({name:"mainRoleOnInappropriateElement", heading:"role=main should only appear on significant elements", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_05", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role~=main]");\n}, test:function(a) {\n  if (axs.utils.isInlineElement(a)) {\n    return !0;\n  }\n  a = axs.properties.getTextFromDescendantContent(a);\n  return !a || 50 > a.length ? !0 : !1;\n}, code:"AX_ARIA_05"});\naxs.AuditRules.addRule({name:"elementsWithMeaningfulBackgroundImage", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a, b) {\n  return !b.hidden;\n}, heading:"Meaningful images should not be used in element backgrounds", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_image_01", test:function(a) {\n  if (a.textContent && 0 < a.textContent.length) {\n    return !1;\n  }\n  a = window.getComputedStyle(a, null);\n  var b = a.backgroundImage;\n  if (!b || "undefined" === b || "none" === b || 0 != b.indexOf("url")) {\n    return !1;\n  }\n  b = parseInt(a.width, 10);\n  a = parseInt(a.height, 10);\n  return 150 > b && 150 > a;\n}, code:"AX_IMAGE_01"});\naxs.AuditRules.addRule({name:"multipleAriaOwners", heading:"An element\'s ID must not be present in more that one aria-owns attribute at any time", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_07", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(a) {\n    return 1 < axs.utils.getAriaIdReferrers(a, "aria-owns").length;\n  });\n}, code:"AX_ARIA_07"});\naxs.AuditRules.addRule({name:"multipleLabelableElementsPerLabel", heading:"A label element may not have labelable descendants other than its labeled control.", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_text_03--labels-should-only-contain-one-labelable-element", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "label");\n}, test:function(a) {\n  if (1 < a.querySelectorAll(axs.utils.LABELABLE_ELEMENTS_SELECTOR).length) {\n    return !0;\n  }\n}, code:"AX_TEXT_03"});\naxs.AuditRules.addRule({name:"nonExistentRelatedElement", heading:"Attributes which refer to other elements by ID should refer to elements which exist in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_03", severity:axs.constants.Severity.SEVERE, opt_requires:{idRefs:!0}, relevantElementMatcher:function(a, b) {\n  return 0 < b.idrefs.length;\n}, test:function(a, b) {\n  return b.idrefs.some(function(a) {\n    return !document.getElementById(a);\n  });\n}, code:"AX_HTML_03"});\naxs.AuditRules.addRule({name:"pageWithoutTitle", heading:"The web page should have a title that describes topic or purpose", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_title_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return "html" == a.tagName.toLowerCase();\n}, test:function(a) {\n  a = a.querySelector("head");\n  return a ? (a = a.querySelector("title")) ? !a.textContent : !0 : !0;\n}, code:"AX_TITLE_01"});\naxs.AuditRules.addRule({name:"requiredAriaAttributeMissing", heading:"Elements with ARIA roles must have all required attributes for that role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_03", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b.valid) {\n    return !1;\n  }\n  for (var c = 0;c < b.roles.length;c++) {\n    var d = b.roles[c].details.requiredPropertiesSet, e;\n    for (e in d) {\n      if (d = e.replace(/^aria-/, ""), !("defaultValue" in axs.constants.ARIA_PROPERTIES[d] || a.hasAttribute(e)) && 0 > axs.properties.getNativelySupportedAttributes(a).indexOf(e)) {\n        return !0;\n      }\n    }\n  }\n}, code:"AX_ARIA_03"});\n(function() {\n  function a(a) {\n    a = axs.utils.getRoles(a);\n    if (!a || !a.applied) {\n      return [];\n    }\n    a = a.applied;\n    return a.valid ? a.details.mustcontain || [] : [];\n  }\n  axs.AuditRules.addRule({name:"requiredOwnedAriaRoleMissing", heading:"Elements with ARIA roles must ensure required owned elements are present", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_08", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(b) {\n    return axs.browserUtils.matchSelector(b, "[role]") ? 0 < a(b).length : !1;\n  }, test:function(b) {\n    if ("true" === b.getAttribute("aria-busy")) {\n      return !1;\n    }\n    for (var c = a(b), d = c.length - 1;0 <= d;d--) {\n      var e = axs.utils.findDescendantsWithRole(b, c[d]);\n      if (e && e.length) {\n        return !1;\n      }\n    }\n    b = axs.utils.getIdReferents("aria-owns", b);\n    for (d = b.length - 1;0 <= d;d--) {\n      if ((e = axs.utils.getRoles(b[d], !0)) && e.applied) {\n        for (var e = e.applied, f = c.length - 1;0 <= f;f--) {\n          if (e.name === c[f]) {\n            return !1;\n          }\n        }\n      }\n    }\n    return !0;\n  }, code:"AX_ARIA_08"});\n})();\naxs.AuditRules.addRule({name:"roleTooltipRequiresDescribedby", heading:"Elements with role=tooltip should have a corresponding element with aria-describedby", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a, b) {\n  return axs.browserUtils.matchSelector(a, "[role=tooltip]") && !b.hidden;\n}, test:function(a) {\n  a = axs.utils.getAriaIdReferrers(a, "aria-describedby");\n  return !a || 0 === a.length;\n}, code:"AX_TOOLTIP_01"});\naxs.AuditRules.addRule({name:"tabIndexGreaterThanZero", heading:"Avoid positive integer values for tabIndex", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[tabindex]");\n}, test:function(a) {\n  if (0 < a.tabIndex) {\n    return !0;\n  }\n}, code:"AX_FOCUS_03"});\n(function() {\n  function a(a) {\n    if (0 == a.childElementCount) {\n      return !0;\n    }\n    if (a.hasAttribute("role") && "presentation" != a.getAttribute("role")) {\n      return !1;\n    }\n    if ("presentation" == a.getAttribute("role")) {\n      a = a.querySelectorAll("*");\n      for (var c = 0;c < a.length;c++) {\n        if ("TR" != a[c].tagName && "TD" != a[c].tagName) {\n          return !1;\n        }\n      }\n      return !0;\n    }\n    return !1;\n  }\n  axs.AuditRules.addRule({name:"tableHasAppropriateHeaders", heading:"Tables should have appropriate headers", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_table_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(b) {\n    return axs.browserUtils.matchSelector(b, "table") && !a(b) && 0 < b.querySelectorAll("tr").length;\n  }, test:function(a) {\n    a = a.querySelectorAll("tr");\n    var c;\n    a: {\n      c = a[0].children;\n      for (var d = 0;d < c.length;d++) {\n        if ("TH" != c[d].tagName) {\n          c = !0;\n          break a;\n        }\n      }\n      c = !1;\n    }\n    if (c) {\n      a: {\n        for (c = 0;c < a.length;c++) {\n          if ("TH" != a[c].children[0].tagName) {\n            c = !0;\n            break a;\n          }\n        }\n        c = !1;\n      }\n    }\n    if (c) {\n      a: {\n        c = a[0].children;\n        for (d = 1;d < c.length;d++) {\n          if ("TH" != c[d].tagName) {\n            c = !0;\n            break a;\n          }\n        }\n        for (d = 1;d < a.length;d++) {\n          if ("TH" != a[d].children[0].tagName) {\n            c = !0;\n            break a;\n          }\n        }\n        c = !1;\n      }\n    }\n    return c;\n  }, code:"AX_TABLE_01"});\n})();\n(function() {\n  axs.AuditRules.addRule({name:"uncontrolledTabpanel", heading:"A tabpanel should be related to a tab via aria-controls or aria-labelledby", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_13", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n    return axs.browserUtils.matchSelector(a, \'[role="tabpanel"]\');\n  }, test:function(a) {\n    var b;\n    b = document.querySelectorAll(\'[role="tab"][aria-controls="\' + a.id + \'"]\');\n    (b = a.id && 1 === b.length) || (a.hasAttribute("aria-labelledby") ? (a = document.querySelectorAll("#" + a.getAttribute("aria-labelledby")), b = 1 === a.length && "tab" === a[0].getAttribute("role")) : b = !1);\n    return !b;\n  }, code:"AX_ARIA_13"});\n})();\naxs.AuditRules.addRule({name:"unfocusableElementsWithOnClick", heading:"Elements with onclick handlers must be focusable", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_02", severity:axs.constants.Severity.WARNING, opt_requires:{consoleAPI:!0}, relevantElementMatcher:function(a, b) {\n  return a instanceof a.ownerDocument.defaultView.HTMLBodyElement || b.hidden ? !1 : "click" in getEventListeners(a) ? !0 : !1;\n}, test:function(a) {\n  return !a.hasAttribute("tabindex") && !axs.utils.isElementImplicitlyFocusable(a) && !a.disabled;\n}, code:"AX_FOCUS_02"});\n(function() {\n  var a = /^aria\\-/, b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  axs.AuditRules.addRule({name:"unsupportedAriaAttribute", heading:"This element has an unsupported ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_10", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n    return axs.browserUtils.matchSelector(a, b);\n  }, test:function(b) {\n    var d = axs.utils.getRoles(b, !0), d = d && d.applied ? d.applied.details.propertiesSet : axs.constants.GLOBAL_PROPERTIES;\n    b = b.attributes;\n    for (var e = 0, f = b.length;e < f;e++) {\n      var g = b[e].name;\n      if (a.test(g)) {\n        var h = g.replace(a, "");\n        if (axs.constants.ARIA_PROPERTIES.hasOwnProperty(h) && !(g in d)) {\n          return !0;\n        }\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_10"});\n})();\naxs.AuditRules.addRule({name:"videoWithoutCaptions", heading:"Video elements should use <track> elements to provide captions", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_video_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "video");\n}, test:function(a) {\n  return !a.querySelectorAll("track[kind=captions]").length;\n}, code:"AX_VIDEO_01"});\n\n  return axs;\n});\n\n// Define AMD module if possible, export globals otherwise.\nif (typeof define !== \'undefined\' && define.amd) {\n  define([], fn);\n} else {\n  var axs = fn.call(this);\n}\n\n'
}]);
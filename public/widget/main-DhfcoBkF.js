import * as ne from "react";
import Ie, { forwardRef as wn, createElement as Ir, useState as ae, useRef as Dr, useEffect as pe } from "react";
import bn from "react-dom";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function En(s) {
  if (s.__esModule) return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(s, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    });
  }), t;
}
var tr = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function kn() {
  if (Lr) return Ze;
  Lr = 1;
  var s = Ie, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, c, u) {
    var l, h = {}, f = null, p = null;
    u !== void 0 && (f = "" + u), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (l in c) r.call(c, l) && !i.hasOwnProperty(l) && (h[l] = c[l]);
    if (o && o.defaultProps) for (l in c = o.defaultProps, c) h[l] === void 0 && (h[l] = c[l]);
    return { $$typeof: e, type: o, key: f, ref: p, props: h, _owner: n.current };
  }
  return Ze.Fragment = t, Ze.jsx = a, Ze.jsxs = a, Ze;
}
var et = {}, Nr;
function On() {
  if (Nr) return et;
  Nr = 1;
  var s = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    var e = Ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, S = "@@iterator";
    function C(d) {
      if (d === null || typeof d != "object")
        return null;
      var g = m && d[m] || d[S];
      return typeof g == "function" ? g : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(d) {
      {
        for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), k = 1; k < g; k++)
          v[k - 1] = arguments[k];
        O("error", d, v);
      }
    }
    function O(d, g, v) {
      {
        var k = T.ReactDebugCurrentFrame, L = k.getStackAddendum();
        L !== "" && (g += "%s", v = v.concat([L]));
        var M = v.map(function(A) {
          return String(A);
        });
        M.unshift("Warning: " + g), Function.prototype.apply.call(console[d], console, M);
      }
    }
    var E = !1, D = !1, $ = !1, V = !1, Z = !1, z;
    z = Symbol.for("react.module.reference");
    function fe(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === a || Z || d === i || d === l || d === h || V || d === y || E || D || $ || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === o || d.$$typeof === c || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === z || d.getModuleId !== void 0));
    }
    function Te(d, g, v) {
      var k = d.displayName;
      if (k)
        return k;
      var L = g.displayName || g.name || "";
      return L !== "" ? v + "(" + L + ")" : v;
    }
    function he(d) {
      return d.displayName || "Context";
    }
    function Y(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            var g = d;
            return he(g) + ".Consumer";
          case o:
            var v = d;
            return he(v._context) + ".Provider";
          case u:
            return Te(d, d.render, "ForwardRef");
          case f:
            var k = d.displayName || null;
            return k !== null ? k : Y(d.type) || "Memo";
          case p: {
            var L = d, M = L._payload, A = L._init;
            try {
              return Y(A(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ge = 0, ye, _e, te, Ne, Me, gt, _;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function I() {
      {
        if (ge === 0) {
          ye = console.log, _e = console.info, te = console.warn, Ne = console.error, Me = console.group, gt = console.groupCollapsed, _ = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        ge++;
      }
    }
    function F() {
      {
        if (ge--, ge === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, d, {
              value: ye
            }),
            info: ee({}, d, {
              value: _e
            }),
            warn: ee({}, d, {
              value: te
            }),
            error: ee({}, d, {
              value: Ne
            }),
            group: ee({}, d, {
              value: Me
            }),
            groupCollapsed: ee({}, d, {
              value: gt
            }),
            groupEnd: ee({}, d, {
              value: _
            })
          });
        }
        ge < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = T.ReactCurrentDispatcher, re;
    function Ue(d, g, v) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (L) {
            var k = L.stack.trim().match(/\n( *(at )?)/);
            re = k && k[1] || "";
          }
        return `
` + re + d;
      }
    }
    var Fe = !1, pt;
    {
      var Js = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new Js();
    }
    function wr(d, g) {
      if (!d || Fe)
        return "";
      {
        var v = pt.get(d);
        if (v !== void 0)
          return v;
      }
      var k;
      Fe = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = J.current, J.current = null, I();
      try {
        if (g) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (K) {
              k = K;
            }
            Reflect.construct(d, [], A);
          } else {
            try {
              A.call();
            } catch (K) {
              k = K;
            }
            d.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            k = K;
          }
          d();
        }
      } catch (K) {
        if (K && k && typeof K.stack == "string") {
          for (var P = K.stack.split(`
`), G = k.stack.split(`
`), B = P.length - 1, q = G.length - 1; B >= 1 && q >= 0 && P[B] !== G[q]; )
            q--;
          for (; B >= 1 && q >= 0; B--, q--)
            if (P[B] !== G[q]) {
              if (B !== 1 || q !== 1)
                do
                  if (B--, q--, q < 0 || P[B] !== G[q]) {
                    var ie = `
` + P[B].replace(" at new ", " at ");
                    return d.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", d.displayName)), typeof d == "function" && pt.set(d, ie), ie;
                  }
                while (B >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, J.current = M, F(), Error.prepareStackTrace = L;
      }
      var Be = d ? d.displayName || d.name : "", je = Be ? Ue(Be) : "";
      return typeof d == "function" && pt.set(d, je), je;
    }
    function Gs(d, g, v) {
      return wr(d, !1);
    }
    function Ks(d) {
      var g = d.prototype;
      return !!(g && g.isReactComponent);
    }
    function mt(d, g, v) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return wr(d, Ks(d));
      if (typeof d == "string")
        return Ue(d);
      switch (d) {
        case l:
          return Ue("Suspense");
        case h:
          return Ue("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return Gs(d.render);
          case f:
            return mt(d.type, g, v);
          case p: {
            var k = d, L = k._payload, M = k._init;
            try {
              return mt(M(L), g, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, br = {}, Sr = T.ReactDebugCurrentFrame;
    function vt(d) {
      if (d) {
        var g = d._owner, v = mt(d.type, d._source, g ? g.type : null);
        Sr.setExtraStackFrame(v);
      } else
        Sr.setExtraStackFrame(null);
    }
    function Qs(d, g, v, k, L) {
      {
        var M = Function.call.bind(Qe);
        for (var A in d)
          if (M(d, A)) {
            var P = void 0;
            try {
              if (typeof d[A] != "function") {
                var G = Error((k || "React class") + ": " + v + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              P = d[A](g, A, k, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              P = B;
            }
            P && !(P instanceof Error) && (vt(L), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", v, A, typeof P), vt(null)), P instanceof Error && !(P.message in br) && (br[P.message] = !0, vt(L), j("Failed %s type: %s", v, P.message), vt(null));
          }
      }
    }
    var Xs = Array.isArray;
    function Mt(d) {
      return Xs(d);
    }
    function Zs(d) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, v = g && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return v;
      }
    }
    function en(d) {
      try {
        return Er(d), !1;
      } catch {
        return !0;
      }
    }
    function Er(d) {
      return "" + d;
    }
    function kr(d) {
      if (en(d))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zs(d)), Er(d);
    }
    var Xe = T.ReactCurrentOwner, tn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Or, xr, Ut;
    Ut = {};
    function rn(d) {
      if (Qe.call(d, "ref")) {
        var g = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function sn(d) {
      if (Qe.call(d, "key")) {
        var g = Object.getOwnPropertyDescriptor(d, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function nn(d, g) {
      if (typeof d.ref == "string" && Xe.current && g && Xe.current.stateNode !== g) {
        var v = Y(Xe.current.type);
        Ut[v] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Xe.current.type), d.ref), Ut[v] = !0);
      }
    }
    function an(d, g) {
      {
        var v = function() {
          Or || (Or = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        v.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function on(d, g) {
      {
        var v = function() {
          xr || (xr = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        v.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var cn = function(d, g, v, k, L, M, A) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: g,
        ref: v,
        props: A,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function ln(d, g, v, k, L) {
      {
        var M, A = {}, P = null, G = null;
        v !== void 0 && (kr(v), P = "" + v), sn(g) && (kr(g.key), P = "" + g.key), rn(g) && (G = g.ref, nn(g, L));
        for (M in g)
          Qe.call(g, M) && !tn.hasOwnProperty(M) && (A[M] = g[M]);
        if (d && d.defaultProps) {
          var B = d.defaultProps;
          for (M in B)
            A[M] === void 0 && (A[M] = B[M]);
        }
        if (P || G) {
          var q = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          P && an(A, q), G && on(A, q);
        }
        return cn(d, P, G, L, k, Xe.current, A);
      }
    }
    var Ft = T.ReactCurrentOwner, Tr = T.ReactDebugCurrentFrame;
    function We(d) {
      if (d) {
        var g = d._owner, v = mt(d.type, d._source, g ? g.type : null);
        Tr.setExtraStackFrame(v);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function Bt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function jr() {
      {
        if (Ft.current) {
          var d = Y(Ft.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function un(d) {
      return "";
    }
    var Pr = {};
    function dn(d) {
      {
        var g = jr();
        if (!g) {
          var v = typeof d == "string" ? d : d.displayName || d.name;
          v && (g = `

Check the top-level render call using <` + v + ">.");
        }
        return g;
      }
    }
    function Rr(d, g) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var v = dn(g);
        if (Pr[v])
          return;
        Pr[v] = !0;
        var k = "";
        d && d._owner && d._owner !== Ft.current && (k = " It was passed a child from " + Y(d._owner.type) + "."), We(d), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, k), We(null);
      }
    }
    function Cr(d, g) {
      {
        if (typeof d != "object")
          return;
        if (Mt(d))
          for (var v = 0; v < d.length; v++) {
            var k = d[v];
            Bt(k) && Rr(k, g);
          }
        else if (Bt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var L = C(d);
          if (typeof L == "function" && L !== d.entries)
            for (var M = L.call(d), A; !(A = M.next()).done; )
              Bt(A.value) && Rr(A.value, g);
        }
      }
    }
    function hn(d) {
      {
        var g = d.type;
        if (g == null || typeof g == "string")
          return;
        var v;
        if (typeof g == "function")
          v = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === f))
          v = g.propTypes;
        else
          return;
        if (v) {
          var k = Y(g);
          Qs(v, d.props, "prop", k, d);
        } else if (g.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var L = Y(g);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fn(d) {
      {
        for (var g = Object.keys(d.props), v = 0; v < g.length; v++) {
          var k = g[v];
          if (k !== "children" && k !== "key") {
            We(d), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), We(null);
            break;
          }
        }
        d.ref !== null && (We(d), j("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Ar = {};
    function $r(d, g, v, k, L, M) {
      {
        var A = fe(d);
        if (!A) {
          var P = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = un();
          G ? P += G : P += jr();
          var B;
          d === null ? B = "null" : Mt(d) ? B = "array" : d !== void 0 && d.$$typeof === t ? (B = "<" + (Y(d.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : B = typeof d, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, P);
        }
        var q = ln(d, g, v, L, M);
        if (q == null)
          return q;
        if (A) {
          var ie = g.children;
          if (ie !== void 0)
            if (k)
              if (Mt(ie)) {
                for (var Be = 0; Be < ie.length; Be++)
                  Cr(ie[Be], d);
                Object.freeze && Object.freeze(ie);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cr(ie, d);
        }
        if (Qe.call(g, "key")) {
          var je = Y(d), K = Object.keys(g).filter(function(_n) {
            return _n !== "key";
          }), qt = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ar[je + qt]) {
            var yn = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qt, je, yn, je), Ar[je + qt] = !0;
          }
        }
        return d === n ? fn(q) : hn(q), q;
      }
    }
    function gn(d, g, v) {
      return $r(d, g, v, !0);
    }
    function pn(d, g, v) {
      return $r(d, g, v, !1);
    }
    var mn = pn, vn = gn;
    et.Fragment = n, et.jsx = mn, et.jsxs = vn;
  }(), et;
}
var xn = {};
xn.NODE_ENV === "production" ? tr.exports = kn() : tr.exports = On();
var b = tr.exports, rr, Tn = {}, yt = bn;
if (Tn.NODE_ENV === "production")
  rr = yt.createRoot, yt.hydrateRoot;
else {
  var Mr = yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  rr = function(s, e) {
    Mr.usingClientEntryPoint = !0;
    try {
      return yt.createRoot(s, e);
    } finally {
      Mr.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ut = (s, e) => {
  const t = wn(
    ({
      color: r = "currentColor",
      size: n = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: c,
      ...u
    }, l) => Ir(
      "svg",
      {
        ref: l,
        ...jn,
        width: n,
        height: n,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(n) : i,
        className: ["lucide", `lucide-${Pn(s)}`, o].join(" "),
        ...u
      },
      [
        ...e.map(([h, f]) => Ir(h, f)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return t.displayName = `${s}`, t;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = ut("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = ut("MessageSquarePlus", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = ut("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = ut("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = ut("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Dn = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ge).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
};
class pr extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
}
class Ln extends pr {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class Nn extends pr {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Mn extends pr {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var sr;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(sr || (sr = {}));
var Un = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
class Fn {
  constructor(e, { headers: t = {}, customFetch: r, region: n = sr.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = Dn(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, t = {}) {
    var r;
    return Un(this, void 0, void 0, function* () {
      try {
        const { headers: n, method: i, body: a } = t;
        let o = {}, { region: c } = t;
        c || (c = this.region), c && c !== "any" && (o["x-region"] = c);
        let u;
        a && (n && !Object.prototype.hasOwnProperty.call(n, "Content-Type") || !n) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", u = a) : typeof a == "string" ? (o["Content-Type"] = "text/plain", u = a) : typeof FormData < "u" && a instanceof FormData ? u = a : (o["Content-Type"] = "application/json", u = JSON.stringify(a)));
        const l = yield this.fetch(`${this.url}/${e}`, {
          method: i || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), n),
          body: u
        }).catch((y) => {
          throw new Ln(y);
        }), h = l.headers.get("x-relay-error");
        if (h && h === "true")
          throw new Nn(l);
        if (!l.ok)
          throw new Mn(l);
        let f = ((r = l.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), p;
        return f === "application/json" ? p = yield l.json() : f === "application/octet-stream" ? p = yield l.blob() : f === "text/event-stream" ? p = l : f === "multipart/form-data" ? p = yield l.formData() : p = yield l.text(), { data: p, error: null };
      } catch (n) {
        return { data: null, error: n };
      }
    });
  }
}
var X = {}, mr = {}, jt = {}, dt = {}, Pt = {}, Rt = {}, Wn = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Je = Wn();
const Bn = Je.fetch, vs = Je.fetch.bind(Je), ys = Je.Headers, qn = Je.Request, zn = Je.Response, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: ys,
  Request: qn,
  Response: zn,
  default: vs,
  fetch: Bn
}, Symbol.toStringTag, { value: "Module" })), Hn = /* @__PURE__ */ En(Ge);
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
class Vn extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
}
Ct.default = Vn;
var _s = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Rt, "__esModule", { value: !0 });
const Yn = _s(Hn), Jn = _s(Ct);
let Gn = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Yn.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(e, t) {
    return this.headers = Object.assign({}, this.headers), this.headers[e] = t, this;
  }
  then(e, t) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let n = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (i) => {
      var a, o, c;
      let u = null, l = null, h = null, f = i.status, p = i.statusText;
      if (i.ok) {
        if (this.method !== "HEAD") {
          const C = await i.text();
          C === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? l = C : l = JSON.parse(C));
        }
        const m = (a = this.headers.Prefer) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), S = (o = i.headers.get("content-range")) === null || o === void 0 ? void 0 : o.split("/");
        m && S && S.length > 1 && (h = parseInt(S[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(l) && (l.length > 1 ? (u = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, l = null, h = null, f = 406, p = "Not Acceptable") : l.length === 1 ? l = l[0] : l = null);
      } else {
        const m = await i.text();
        try {
          u = JSON.parse(m), Array.isArray(u) && i.status === 404 && (l = [], u = null, f = 200, p = "OK");
        } catch {
          i.status === 404 && m === "" ? (f = 204, p = "No Content") : u = {
            message: m
          };
        }
        if (u && this.isMaybeSingle && (!((c = u == null ? void 0 : u.details) === null || c === void 0) && c.includes("0 rows")) && (u = null, f = 200, p = "OK"), u && this.shouldThrowOnError)
          throw new Jn.default(u);
      }
      return {
        error: u,
        data: l,
        count: h,
        status: f,
        statusText: p
      };
    });
    return this.shouldThrowOnError || (n = n.catch((i) => {
      var a, o, c;
      return {
        error: {
          message: `${(a = i == null ? void 0 : i.name) !== null && a !== void 0 ? a : "FetchError"}: ${i == null ? void 0 : i.message}`,
          details: `${(o = i == null ? void 0 : i.stack) !== null && o !== void 0 ? o : ""}`,
          hint: "",
          code: `${(c = i == null ? void 0 : i.code) !== null && c !== void 0 ? c : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), n.then(e, t);
  }
};
Rt.default = Gn;
var Kn = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Pt, "__esModule", { value: !0 });
const Qn = Kn(Rt);
let Xn = class extends Qn.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let t = !1;
    const r = (e ?? "*").split("").map((n) => /\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)).join("");
    return this.url.searchParams.set("select", r), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n, referencedTable: i = n } = {}) {
    const a = i ? `${i}.order` : "order", o = this.url.searchParams.get(a);
    return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
    const i = typeof n > "u" ? "offset" : `${n}.offset`, a = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(a, `${t - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: t = !1, settings: r = !1, buffers: n = !1, wal: i = !1, format: a = "text" } = {}) {
    var o;
    const c = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      r ? "settings" : null,
      n ? "buffers" : null,
      i ? "wal" : null
    ].filter(Boolean).join("|"), u = (o = this.headers.Accept) !== null && o !== void 0 ? o : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${u}"; options=${c};`, a === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var e;
    return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   */
  returns() {
    return this;
  }
};
Pt.default = Xn;
var Zn = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(dt, "__esModule", { value: !0 });
const ei = Zn(Pt);
let ti = class extends ei.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, t) {
    const r = Array.from(new Set(t)).map((n) => typeof n == "string" && new RegExp("[,()]").test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, t, { config: r, type: n } = {}) {
    let i = "";
    n === "plain" ? i = "pl" : n === "phrase" ? i = "ph" : n === "websearch" && (i = "w");
    const a = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${i}fts${a}.${t}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([t, r]) => {
      this.url.searchParams.append(t, `eq.${r}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const n = r ? `${r}.or` : "or";
    return this.url.searchParams.append(n, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
};
dt.default = ti;
var ri = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(jt, "__esModule", { value: !0 });
const tt = ri(dt);
let si = class {
  constructor(e, { headers: t = {}, schema: r, fetch: n }) {
    this.url = e, this.headers = t, this.schema = r, this.fetch = n;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: t = !1, count: r } = {}) {
    const n = t ? "HEAD" : "GET";
    let i = !1;
    const a = (e ?? "*").split("").map((o) => /\s/.test(o) && !i ? "" : (o === '"' && (i = !i), o)).join("");
    return this.url.searchParams.set("select", a), r && (this.headers.Prefer = `count=${r}`), new tt.default({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: t, defaultToNull: r = !0 } = {}) {
    const n = "POST", i = [];
    if (this.headers.Prefer && i.push(this.headers.Prefer), t && i.push(`count=${t}`), r || i.push("missing=default"), this.headers.Prefer = i.join(","), Array.isArray(e)) {
      const a = e.reduce((o, c) => o.concat(Object.keys(c)), []);
      if (a.length > 0) {
        const o = [...new Set(a)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", o.join(","));
      }
    }
    return new tt.default({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: n, defaultToNull: i = !0 } = {}) {
    const a = "POST", o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (t !== void 0 && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && o.push(this.headers.Prefer), n && o.push(`count=${n}`), i || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
      const c = e.reduce((u, l) => u.concat(Object.keys(l)), []);
      if (c.length > 0) {
        const u = [...new Set(c)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", u.join(","));
      }
    }
    return new tt.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: t } = {}) {
    const r = "PATCH", n = [];
    return this.headers.Prefer && n.push(this.headers.Prefer), t && n.push(`count=${t}`), this.headers.Prefer = n.join(","), new tt.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    const t = "DELETE", r = [];
    return e && r.push(`count=${e}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new tt.default({
      method: t,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
jt.default = si;
var At = {}, $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.version = void 0;
$t.version = "0.0.0-automated";
Object.defineProperty(At, "__esModule", { value: !0 });
At.DEFAULT_HEADERS = void 0;
const ni = $t;
At.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${ni.version}` };
var ws = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(mr, "__esModule", { value: !0 });
const ii = ws(jt), ai = ws(dt), oi = At;
let ci = class bs {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
    this.url = e, this.headers = Object.assign(Object.assign({}, oi.DEFAULT_HEADERS), t), this.schemaName = r, this.fetch = n;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new ii.default(t, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new bs(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, { head: r = !1, get: n = !1, count: i } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${e}`);
    let c;
    r || n ? (a = r ? "HEAD" : "GET", Object.entries(t).filter(([l, h]) => h !== void 0).map(([l, h]) => [l, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach(([l, h]) => {
      o.searchParams.append(l, h);
    })) : (a = "POST", c = t);
    const u = Object.assign({}, this.headers);
    return i && (u.Prefer = `count=${i}`), new ai.default({
      method: a,
      url: o,
      headers: u,
      schema: this.schemaName,
      body: c,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
mr.default = ci;
var Ke = ce && ce.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(X, "__esModule", { value: !0 });
X.PostgrestError = X.PostgrestBuilder = X.PostgrestTransformBuilder = X.PostgrestFilterBuilder = X.PostgrestQueryBuilder = X.PostgrestClient = void 0;
const Ss = Ke(mr);
X.PostgrestClient = Ss.default;
const Es = Ke(jt);
X.PostgrestQueryBuilder = Es.default;
const ks = Ke(dt);
X.PostgrestFilterBuilder = ks.default;
const Os = Ke(Pt);
X.PostgrestTransformBuilder = Os.default;
const xs = Ke(Rt);
X.PostgrestBuilder = xs.default;
const Ts = Ke(Ct);
X.PostgrestError = Ts.default;
var li = X.default = {
  PostgrestClient: Ss.default,
  PostgrestQueryBuilder: Es.default,
  PostgrestFilterBuilder: ks.default,
  PostgrestTransformBuilder: Os.default,
  PostgrestBuilder: xs.default,
  PostgrestError: Ts.default
};
const {
  PostgrestClient: ui,
  PostgrestQueryBuilder: Zc,
  PostgrestFilterBuilder: el,
  PostgrestTransformBuilder: tl,
  PostgrestBuilder: rl
} = li, di = "2.10.7", hi = { "X-Client-Info": `realtime-js/${di}` }, fi = "1.0.0", js = 1e4, gi = 1e3;
var Ye;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(Ye || (Ye = {}));
var se;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(se || (se = {}));
var ue;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(ue || (ue = {}));
var nr;
(function(s) {
  s.websocket = "websocket";
})(nr || (nr = {}));
var Ae;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(Ae || (Ae = {}));
class pi {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e), r = new TextDecoder();
    return this._decodeBroadcast(e, t, r);
  }
  _decodeBroadcast(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = r.decode(e.slice(a, a + n));
    a = a + n;
    const c = r.decode(e.slice(a, a + i));
    a = a + i;
    const u = JSON.parse(r.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: o, event: c, payload: u };
  }
}
class Ps {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var U;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})(U || (U = {}));
const Ur = (s, e, t = {}) => {
  var r;
  const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return Object.keys(e).reduce((i, a) => (i[a] = mi(a, s, e, n), i), {});
}, mi = (s, e, t, r) => {
  const n = e.find((o) => o.name === s), i = n == null ? void 0 : n.type, a = t[s];
  return i && !r.includes(i) ? Rs(i, a) : ir(a);
}, Rs = (s, e) => {
  if (s.charAt(0) === "_") {
    const t = s.slice(1, s.length);
    return wi(e, t);
  }
  switch (s) {
    case U.bool:
      return vi(e);
    case U.float4:
    case U.float8:
    case U.int2:
    case U.int4:
    case U.int8:
    case U.numeric:
    case U.oid:
      return yi(e);
    case U.json:
    case U.jsonb:
      return _i(e);
    case U.timestamp:
      return bi(e);
    case U.abstime:
    case U.date:
    case U.daterange:
    case U.int4range:
    case U.int8range:
    case U.money:
    case U.reltime:
    case U.text:
    case U.time:
    case U.timestamptz:
    case U.timetz:
    case U.tsrange:
    case U.tstzrange:
      return ir(e);
    default:
      return ir(e);
  }
}, ir = (s) => s, vi = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, yi = (s) => {
  if (typeof s == "string") {
    const e = parseFloat(s);
    if (!Number.isNaN(e))
      return e;
  }
  return s;
}, _i = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), s;
    }
  return s;
}, wi = (s, e) => {
  if (typeof s != "string")
    return s;
  const t = s.length - 1, r = s[t];
  if (s[0] === "{" && r === "}") {
    let i;
    const a = s.slice(1, t);
    try {
      i = JSON.parse("[" + a + "]");
    } catch {
      i = a ? a.split(",") : [];
    }
    return i.map((o) => Rs(e, o));
  }
  return s;
}, bi = (s) => typeof s == "string" ? s.replace(" ", "T") : s, Cs = (s) => {
  let e = s;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class zt {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, r = {}, n = js) {
    this.channel = e, this.event = t, this.payload = r, this.timeout = n, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return this._hasReceived(e) && t((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Fr;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(Fr || (Fr = {}));
class at {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (n) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = at.syncState(this.state, n, i, a), this.pendingDiffs.forEach((c) => {
        this.state = at.syncDiff(this.state, c, i, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(r.diff, {}, (n) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = at.syncDiff(this.state, n, i, a), o());
    }), this.onJoin((n, i, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: n,
        currentPresences: i,
        newPresences: a
      });
    }), this.onLeave((n, i, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: n,
        currentPresences: i,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, r, n) {
    const i = this.cloneDeep(e), a = this.transformState(t), o = {}, c = {};
    return this.map(i, (u, l) => {
      a[u] || (c[u] = l);
    }), this.map(a, (u, l) => {
      const h = i[u];
      if (h) {
        const f = l.map((S) => S.presence_ref), p = h.map((S) => S.presence_ref), y = l.filter((S) => p.indexOf(S.presence_ref) < 0), m = h.filter((S) => f.indexOf(S.presence_ref) < 0);
        y.length > 0 && (o[u] = y), m.length > 0 && (c[u] = m);
      } else
        o[u] = l;
    }), this.syncDiff(i, { joins: o, leaves: c }, r, n);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, r, n) {
    const { joins: i, leaves: a } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return r || (r = () => {
    }), n || (n = () => {
    }), this.map(i, (o, c) => {
      var u;
      const l = (u = e[o]) !== null && u !== void 0 ? u : [];
      if (e[o] = this.cloneDeep(c), l.length > 0) {
        const h = e[o].map((p) => p.presence_ref), f = l.filter((p) => h.indexOf(p.presence_ref) < 0);
        e[o].unshift(...f);
      }
      r(o, l, c);
    }), this.map(a, (o, c) => {
      let u = e[o];
      if (!u)
        return;
      const l = c.map((h) => h.presence_ref);
      u = u.filter((h) => l.indexOf(h.presence_ref) < 0), e[o] = u, n(o, u, c), u.length === 0 && delete e[o];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, r) => {
      const n = e[r];
      return "metas" in n ? t[r] = n.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : t[r] = n, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Wr;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(Wr || (Wr = {}));
var Br;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(Br || (Br = {}));
var qr;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(qr || (qr = {}));
class vr {
  constructor(e, t = { config: {} }, r) {
    this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.state = se.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new zt(this, ue.join, this.params, this.timeout), this.rejoinTimer = new Ps(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = se.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((n) => n.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = se.closed, this.socket._remove(this);
    }), this._onError((n) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, n), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(ue.reply, {}, (n, i) => {
      this._trigger(this._replyEventName(i), n);
    }), this.presence = new at(this), this.broadcastEndpointURL = Cs(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var r, n;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: i, presence: a, private: o } } = this.params;
      this._onError((l) => e && e("CHANNEL_ERROR", l)), this._onClose(() => e && e("CLOSED"));
      const c = {}, u = {
        broadcast: i,
        presence: a,
        postgres_changes: (n = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((l) => l.filter)) !== null && n !== void 0 ? n : [],
        private: o
      };
      this.socket.accessToken && (c.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({ config: u }, c)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", ({ postgres_changes: l }) => {
        var h;
        if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), l === void 0) {
          e && e("SUBSCRIBED");
          return;
        } else {
          const f = this.bindings.postgres_changes, p = (h = f == null ? void 0 : f.length) !== null && h !== void 0 ? h : 0, y = [];
          for (let m = 0; m < p; m++) {
            const S = f[m], { filter: { event: C, schema: T, table: j, filter: O } } = S, E = l && l[m];
            if (E && E.event === C && E.schema === T && E.table === j && E.filter === O)
              y.push(Object.assign(Object.assign({}, S), { id: E.id }));
            else {
              this.unsubscribe(), e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = y, e && e("SUBSCRIBED");
          return;
        }
      }).receive("error", (l) => {
        e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(l).join(", ") || "error")));
      }).receive("timeout", () => {
        e && e("TIMED_OUT");
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, r) {
    return this._on(e, t, r);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var r, n;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: i, payload: a } = e, o = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessToken ? `Bearer ${this.socket.accessToken}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (r = t.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((n = c.body) === null || n === void 0 ? void 0 : n.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var a, o, c;
        const u = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((c = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || c === void 0) && c.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = se.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(ue.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((r) => {
      const n = new zt(this, ue.leave, {}, e);
      n.receive("ok", () => {
        t(), r("ok");
      }).receive("timeout", () => {
        t(), r("timed out");
      }).receive("error", () => {
        r("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(e, t, r) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), r), a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: n.signal }));
    return clearTimeout(i), a;
  }
  /** @internal */
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let n = new zt(this, e, t, r);
    return this._canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, r) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, r) {
    var n, i;
    const a = e.toLocaleLowerCase(), { close: o, error: c, leave: u, join: l } = ue;
    if (r && [o, c, u, l].indexOf(a) >= 0 && r !== this._joinRef())
      return;
    let f = this._onMessage(a, t, r);
    if (t && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (n = this.bindings.postgres_changes) === null || n === void 0 || n.filter((p) => {
      var y, m, S;
      return ((y = p.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((S = (m = p.filter) === null || m === void 0 ? void 0 : m.event) === null || S === void 0 ? void 0 : S.toLocaleLowerCase()) === a;
    }).map((p) => p.callback(f, r)) : (i = this.bindings[a]) === null || i === void 0 || i.filter((p) => {
      var y, m, S, C, T, j;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in p) {
          const O = p.id, E = (y = p.filter) === null || y === void 0 ? void 0 : y.event;
          return O && ((m = t.ids) === null || m === void 0 ? void 0 : m.includes(O)) && (E === "*" || (E == null ? void 0 : E.toLocaleLowerCase()) === ((S = t.data) === null || S === void 0 ? void 0 : S.type.toLocaleLowerCase()));
        } else {
          const O = (T = (C = p == null ? void 0 : p.filter) === null || C === void 0 ? void 0 : C.event) === null || T === void 0 ? void 0 : T.toLocaleLowerCase();
          return O === "*" || O === ((j = t == null ? void 0 : t.event) === null || j === void 0 ? void 0 : j.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === a;
    }).map((p) => {
      if (typeof f == "object" && "ids" in f) {
        const y = f.data, { schema: m, table: S, commit_timestamp: C, type: T, errors: j } = y;
        f = Object.assign(Object.assign({}, {
          schema: m,
          table: S,
          commit_timestamp: C,
          eventType: T,
          new: {},
          old: {},
          errors: j
        }), this._getPayloadRecords(y));
      }
      p.callback(f, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === se.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === se.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === se.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === se.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, r) {
    const n = e.toLocaleLowerCase(), i = {
      type: n,
      filter: t,
      callback: r
    };
    return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i], this;
  }
  /** @internal */
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] = this.bindings[r].filter((n) => {
      var i;
      return !(((i = n.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && vr.isEqual(n.filter, t));
    }), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(ue.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(ue.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = se.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Ur(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Ur(e.columns, e.old_record)), t;
  }
}
const Si = () => {
}, Ei = typeof WebSocket < "u", ki = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Oi {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var r;
    this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = hi, this.params = {}, this.timeout = js, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Si, this.conn = null, this.sendBuffer = [], this.serializer = new pi(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this._resolveFetch = (i) => {
      let a;
      return i ? a = i : typeof fetch > "u" ? a = (...o) => Promise.resolve().then(() => Ge).then(({ default: c }) => c(...o)) : a = fetch, (...o) => a(...o);
    }, this.endPoint = `${e}/${nr.websocket}`, this.httpEndpoint = Cs(e), t != null && t.transport ? this.transport = t.transport : this.transport = null, t != null && t.params && (this.params = t.params), t != null && t.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t != null && t.timeout && (this.timeout = t.timeout), t != null && t.logger && (this.logger = t.logger), t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const n = (r = t == null ? void 0 : t.params) === null || r === void 0 ? void 0 : r.apikey;
    if (n && (this.accessToken = n, this.apiKey = n), this.reconnectAfterMs = t != null && t.reconnectAfterMs ? t.reconnectAfterMs : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = t != null && t.encode ? t.encode : (i, a) => a(JSON.stringify(i)), this.decode = t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new Ps(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch), t != null && t.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = (t == null ? void 0 : t.worker) || !1, this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (Ei) {
        this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
        return;
      }
      this.conn = new xi(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-yP_pMJKF.js").then((e) => e.b).then(({ default: e }) => {
        this.conn = new e(this._endPointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, t ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, r) {
    this.logger(e, t, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ye.connecting:
        return Ae.Connecting;
      case Ye.open:
        return Ae.Open;
      case Ye.closing:
        return Ae.Closing;
      default:
        return Ae.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Ae.Open;
  }
  channel(e, t = { config: {} }) {
    const r = new vr(`realtime:${e}`, t, this);
    return this.channels.push(r), r;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: r, payload: n, ref: i } = e, a = () => {
      this.encode(e, (o) => {
        var c;
        (c = this.conn) === null || c === void 0 || c.send(o);
      });
    };
    this.log("push", `${t} ${r} (${i})`, n), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * @param token A JWT string.
   */
  setAuth(e) {
    this.accessToken = e, this.channels.forEach((t) => {
      e && t.updateJoinPayload({ access_token: e }), t.joinedOnce && t._isJoined() && t._push(ue.access_token, { access_token: e });
    });
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /**
   * Returns the URL of the websocket.
   *
   * @internal
   */
  _endPointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: fi }));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: r, event: n, payload: i, ref: a } = t;
      (a && a === this.pendingHeartbeatRef || n === (i == null ? void 0 : i.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status || ""} ${r} ${n} ${a && "(" + a + ")" || ""}`, i), this.channels.filter((o) => o._isMember(r)).forEach((o) => o._trigger(n, i, a)), this.stateChangeCallbacks.message.forEach((o) => o(t));
    });
  }
  /** @internal */
  async _onConnOpen() {
    if (this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), !this.worker)
      this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
    else {
      this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
      const e = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
        this.log("worker", "worker error", t.message), this.workerRef.terminate();
      }, this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this._sendHeartbeat();
      }, this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(ue.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", n = new URLSearchParams(t);
    return `${e}${r}${n}`;
  }
  /** @internal */
  _flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /** @internal */
  _sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(gi, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth(this.accessToken);
    }
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const r = new Blob([ki], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
}
class xi {
  constructor(e, t, r) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = Ye.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = r.close;
  }
}
class yr extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function H(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
class Ti extends yr {
  constructor(e, t) {
    super(e), this.name = "StorageApiError", this.status = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class ar extends yr {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var ji = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
const As = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ge).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, Pi = () => ji(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Ge)).Response : Response;
}), or = (s) => {
  if (Array.isArray(s))
    return s.map((t) => or(t));
  if (typeof s == "function" || s !== Object(s))
    return s;
  const e = {};
  return Object.entries(s).forEach(([t, r]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = or(r);
  }), e;
};
var De = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
const Ht = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Ri = (s, e, t) => De(void 0, void 0, void 0, function* () {
  const r = yield Pi();
  s instanceof r && !(t != null && t.noResolveJson) ? s.json().then((n) => {
    e(new Ti(Ht(n), s.status || 500));
  }).catch((n) => {
    e(new ar(Ht(n), n));
  }) : e(new ar(Ht(s), s));
}), Ci = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r && (n.body = JSON.stringify(r)), Object.assign(Object.assign({}, n), t));
};
function ht(s, e, t, r, n, i) {
  return De(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      s(t, Ci(e, r, n, i)).then((c) => {
        if (!c.ok)
          throw c;
        return r != null && r.noResolveJson ? c : c.json();
      }).then((c) => a(c)).catch((c) => Ri(c, o, r));
    });
  });
}
function xt(s, e, t, r) {
  return De(this, void 0, void 0, function* () {
    return ht(s, "GET", e, t, r);
  });
}
function Ee(s, e, t, r, n) {
  return De(this, void 0, void 0, function* () {
    return ht(s, "POST", e, r, n, t);
  });
}
function Ai(s, e, t, r, n) {
  return De(this, void 0, void 0, function* () {
    return ht(s, "PUT", e, r, n, t);
  });
}
function $i(s, e, t, r) {
  return De(this, void 0, void 0, function* () {
    return ht(s, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), r);
  });
}
function $s(s, e, t, r, n) {
  return De(this, void 0, void 0, function* () {
    return ht(s, "DELETE", e, r, n, t);
  });
}
var Q = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
const Ii = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, zr = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Di {
  constructor(e, t = {}, r, n) {
    this.url = e, this.headers = t, this.bucketId = r, this.fetch = As(n);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, r, n) {
    return Q(this, void 0, void 0, function* () {
      try {
        let i;
        const a = Object.assign(Object.assign({}, zr), n);
        let o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        const c = a.metadata;
        typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", a.cacheControl), c && i.append("metadata", this.encodeMetadata(c)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.append("cacheControl", a.cacheControl), c && i.append("metadata", this.encodeMetadata(c))) : (i = r, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, c && (o["x-metadata"] = this.toBase64(this.encodeMetadata(c)))), n != null && n.headers && (o = Object.assign(Object.assign({}, o), n.headers));
        const u = this._removeEmptyFolders(t), l = this._getFinalPath(u), h = yield this.fetch(`${this.url}/object/${l}`, Object.assign({ method: e, body: i, headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {})), f = yield h.json();
        return h.ok ? {
          data: { path: u, id: f.Id, fullPath: f.Key },
          error: null
        } : { data: null, error: f };
      } catch (i) {
        if (H(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, r, n) {
    return Q(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), a = this._getFinalPath(i), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", t);
      try {
        let c;
        const u = Object.assign({ upsert: zr.upsert }, n), l = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(u.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (c = new FormData(), c.append("cacheControl", u.cacheControl), c.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (c = r, c.append("cacheControl", u.cacheControl)) : (c = r, l["cache-control"] = `max-age=${u.cacheControl}`, l["content-type"] = u.contentType);
        const h = yield this.fetch(o.toString(), {
          method: "PUT",
          body: c,
          headers: l
        }), f = yield h.json();
        return h.ok ? {
          data: { path: i, fullPath: f.Key },
          error: null
        } : { data: null, error: f };
      } catch (c) {
        if (H(c))
          return { data: null, error: c };
        throw c;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return Q(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const n = Object.assign({}, this.headers);
        t != null && t.upsert && (n["x-upsert"] = "true");
        const i = yield Ee(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: n }), a = new URL(this.url + i.url), o = a.searchParams.get("token");
        if (!o)
          throw new yr("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: o }, error: null };
      } catch (r) {
        if (H(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      try {
        return { data: yield Ee(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (H(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield Ee(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (n) {
        if (H(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e), i = yield Ee(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({ expiresIn: t }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const a = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${a}`) }, { data: i, error: null };
      } catch (n) {
        if (H(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      try {
        const n = yield Ee(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: n.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${i}`) : null })),
          error: null
        };
      } catch (n) {
        if (H(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    return Q(this, void 0, void 0, function* () {
      const n = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), a = i ? `?${i}` : "";
      try {
        const o = this._getFinalPath(e);
        return { data: yield (yield xt(this.fetch, `${this.url}/${n}/${o}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (o) {
        if (H(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return Q(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const r = yield xt(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: or(r), error: null };
      } catch (r) {
        if (H(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return Q(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield $i(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (H(r) && r instanceof ar) {
          const n = r.originalError;
          if ([400, 404].includes(n == null ? void 0 : n.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), n = [], i = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const o = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object", c = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
    c !== "" && n.push(c);
    let u = n.join("&");
    return u !== "" && (u = `?${u}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${u}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return Q(this, void 0, void 0, function* () {
      try {
        return { data: yield $s(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (H(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, t, r) {
    return Q(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, Ii), t), { prefix: e || "" });
        return { data: yield Ee(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, { headers: this.headers }, r), error: null };
      } catch (n) {
        if (H(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const Li = "2.7.1", Ni = { "X-Client-Info": `storage-js/${Li}` };
var qe = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
class Mi {
  constructor(e, t = {}, r) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Ni), t), this.fetch = As(r);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield xt(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (H(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield xt(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (H(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, t = {
    public: !1
  }) {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield Ee(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (H(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield Ai(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (H(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield Ee(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (H(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return qe(this, void 0, void 0, function* () {
      try {
        return { data: yield $s(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (H(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class Ui extends Mi {
  constructor(e, t = {}, r) {
    super(e, t, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Di(this.url, this.headers, e, this.fetch);
  }
}
const Fi = "2.46.1";
let it = "";
typeof Deno < "u" ? it = "deno" : typeof document < "u" ? it = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? it = "react-native" : it = "node";
const Wi = { "X-Client-Info": `supabase-js-${it}/${Fi}` }, Bi = {
  headers: Wi
}, qi = {
  schema: "public"
}, zi = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Hi = {};
var Vi = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
const Yi = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = vs : e = fetch, (...t) => e(...t);
}, Ji = () => typeof Headers > "u" ? ys : Headers, Gi = (s, e, t) => {
  const r = Yi(t), n = Ji();
  return (i, a) => Vi(void 0, void 0, void 0, function* () {
    var o;
    const c = (o = yield e()) !== null && o !== void 0 ? o : s;
    let u = new n(a == null ? void 0 : a.headers);
    return u.has("apikey") || u.set("apikey", s), u.has("Authorization") || u.set("Authorization", `Bearer ${c}`), r(i, Object.assign(Object.assign({}, a), { headers: u }));
  });
};
var Ki = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
function Qi(s) {
  return s.replace(/\/$/, "");
}
function Xi(s, e) {
  const { db: t, auth: r, realtime: n, global: i } = s, { db: a, auth: o, realtime: c, global: u } = e, l = {
    db: Object.assign(Object.assign({}, a), t),
    auth: Object.assign(Object.assign({}, o), r),
    realtime: Object.assign(Object.assign({}, c), n),
    global: Object.assign(Object.assign({}, u), i),
    accessToken: () => Ki(this, void 0, void 0, function* () {
      return "";
    })
  };
  return s.accessToken ? l.accessToken = s.accessToken : delete l.accessToken, l;
}
const Is = "2.65.1", Zi = "http://localhost:9999", ea = "supabase.auth.token", ta = { "X-Client-Info": `gotrue-js/${Is}` }, Hr = 10, cr = "X-Supabase-Api-Version", Ds = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
function ra(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function sa() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
    const e = Math.random() * 16 | 0;
    return (s == "x" ? e : e & 3 | 8).toString(16);
  });
}
const le = () => typeof document < "u", Pe = {
  tested: !1,
  writable: !1
}, ot = () => {
  if (!le())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Pe.tested)
    return Pe.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), Pe.tested = !0, Pe.writable = !0;
  } catch {
    Pe.tested = !0, Pe.writable = !1;
  }
  return Pe.writable;
};
function Vt(s) {
  const e = {}, t = new URL(s);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return t.searchParams.forEach((r, n) => {
    e[n] = r;
  }), e;
}
const Ls = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ge).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, na = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", Ns = async (s, e, t) => {
  await s.setItem(e, JSON.stringify(t));
}, _t = async (s, e) => {
  const t = await s.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, wt = async (s, e) => {
  await s.removeItem(e);
};
function ia(s) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let t = "", r, n, i, a, o, c, u, l = 0;
  for (s = s.replace("-", "+").replace("_", "/"); l < s.length; )
    a = e.indexOf(s.charAt(l++)), o = e.indexOf(s.charAt(l++)), c = e.indexOf(s.charAt(l++)), u = e.indexOf(s.charAt(l++)), r = a << 2 | o >> 4, n = (o & 15) << 4 | c >> 2, i = (c & 3) << 6 | u, t = t + String.fromCharCode(r), c != 64 && n != 0 && (t = t + String.fromCharCode(n)), u != 64 && i != 0 && (t = t + String.fromCharCode(i));
  return t;
}
class It {
  constructor() {
    this.promise = new It.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
It.promiseConstructor = Promise;
function Vr(s) {
  const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, t = s.split(".");
  if (t.length !== 3)
    throw new Error("JWT is not valid: not a JWT structure");
  if (!e.test(t[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = t[1];
  return JSON.parse(ia(r));
}
async function aa(s) {
  return await new Promise((e) => {
    setTimeout(() => e(null), s);
  });
}
function oa(s, e) {
  return new Promise((r, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const a = await s(i);
          if (!e(i, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!e(i, a)) {
            n(a);
            return;
          }
        }
    })();
  });
}
function ca(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function la() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, ca).join("");
}
async function ua(s) {
  const t = new TextEncoder().encode(s), r = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(r);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
function da(s) {
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ha(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const t = await ua(s);
  return da(t);
}
async function ze(s, e, t = !1) {
  const r = la();
  let n = r;
  t && (n += "/PASSWORD_RECOVERY"), await Ns(s, `${e}-code-verifier`, n);
  const i = await ha(r);
  return [i, r === i ? "plain" : "s256"];
}
const fa = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ga(s) {
  const e = s.headers.get(cr);
  if (!e || !e.match(fa))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class _r extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
}
function x(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class pa extends _r {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
}
function ma(s) {
  return x(s) && s.name === "AuthApiError";
}
class Ms extends _r {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class Le extends _r {
  constructor(e, t, r, n) {
    super(e, r, n), this.name = t, this.status = r;
  }
}
class be extends Le {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function va(s) {
  return x(s) && s.name === "AuthSessionMissingError";
}
class Yt extends Le {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class bt extends Le {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class St extends Le {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Yr extends Le {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class lr extends Le {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function Jt(s) {
  return x(s) && s.name === "AuthRetryableFetchError";
}
class Jr extends Le {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
}
var ya = function(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
};
const Re = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), _a = [502, 503, 504];
async function Gr(s) {
  var e;
  if (!na(s))
    throw new lr(Re(s), 0);
  if (_a.includes(s.status))
    throw new lr(Re(s), s.status);
  let t;
  try {
    t = await s.json();
  } catch (i) {
    throw new Ms(Re(i), i);
  }
  let r;
  const n = ga(s);
  if (n && n.getTime() >= Ds["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new Jr(Re(t), s.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new be();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0))
    throw new Jr(Re(t), s.status, t.weak_password.reasons);
  throw new pa(Re(t), s.status || 500, r);
}
const wa = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(r), Object.assign(Object.assign({}, n), t));
};
async function R(s, e, t, r) {
  var n;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  i[cr] || (i[cr] = Ds["2024-01-01"].name), r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const a = (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", c = await ba(s, e, t + o, {
    headers: i,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(c) : { data: Object.assign({}, c), error: null };
}
async function ba(s, e, t, r, n, i) {
  const a = wa(e, r, n, i);
  let o;
  try {
    o = await s(t, Object.assign({}, a));
  } catch (c) {
    throw console.error(c), new lr(Re(c), 0);
  }
  if (o.ok || await Gr(o), r != null && r.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (c) {
    await Gr(c);
  }
}
function Se(s) {
  var e;
  let t = null;
  Oa(s) && (t = Object.assign({}, s), s.expires_at || (t.expires_at = ra(s.expires_in)));
  const r = (e = s.user) !== null && e !== void 0 ? e : s;
  return { data: { session: t, user: r }, error: null };
}
function Kr(s) {
  const e = Se(s);
  return !e.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = s.weak_password), e;
}
function ke(s) {
  var e;
  return { data: { user: (e = s.user) !== null && e !== void 0 ? e : s }, error: null };
}
function Sa(s) {
  return { data: s, error: null };
}
function Ea(s) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: n, verification_type: i } = s, a = ya(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: t,
    hashed_token: r,
    redirect_to: n,
    verification_type: i
  }, c = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: c
    },
    error: null
  };
}
function ka(s) {
  return s;
}
function Oa(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
var xa = function(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
};
class Ta {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    this.url = e, this.headers = t, this.fetch = Ls(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = "global") {
    try {
      return await R(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (x(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await R(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: ke
      });
    } catch (r) {
      if (x(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, r = xa(e, ["options"]), n = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (n.new_email = r == null ? void 0 : r.newEmail, delete n.newEmail), await R(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: Ea,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (x(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await R(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: ke
      });
    } catch (t) {
      if (x(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, r, n, i, a, o, c;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, l = await R(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e == null ? void 0 : e.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: ka
      });
      if (l.error)
        throw l.error;
      const h = await l.json(), f = (a = l.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, p = (c = (o = l.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && c !== void 0 ? c : [];
      return p.length > 0 && (p.forEach((y) => {
        const m = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), S = JSON.parse(y.split(";")[1].split("=")[1]);
        u[`${S}Page`] = m;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, h), u), error: null };
    } catch (u) {
      if (x(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    try {
      return await R(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: ke
      });
    } catch (t) {
      if (x(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    try {
      return await R(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: ke
      });
    } catch (r) {
      if (x(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    try {
      return await R(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: ke
      });
    } catch (r) {
      if (x(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    try {
      const { data: t, error: r } = await R(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await R(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const ja = {
  getItem: (s) => ot() ? globalThis.localStorage.getItem(s) : null,
  setItem: (s, e) => {
    ot() && globalThis.localStorage.setItem(s, e);
  },
  removeItem: (s) => {
    ot() && globalThis.localStorage.removeItem(s);
  }
};
function Qr(s = {}) {
  return {
    getItem: (e) => s[e] || null,
    setItem: (e, t) => {
      s[e] = t;
    },
    removeItem: (e) => {
      delete s[e];
    }
  };
}
function Pa() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const He = {
  /**
   * @experimental
   */
  debug: !!(globalThis && ot() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Us extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Ra extends Us {
}
async function Ca(s, e, t) {
  He.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), He.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
  }, e), await globalThis.navigator.locks.request(s, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (n) => {
    if (n) {
      He.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, n.name);
      try {
        return await t();
      } finally {
        He.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, n.name);
      }
    } else {
      if (e === 0)
        throw He.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new Ra(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
      if (He.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  });
}
Pa();
const Aa = {
  url: Zi,
  storageKey: ea,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: ta,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
}, rt = 30 * 1e3, Xr = 3;
async function Zr(s, e, t) {
  return await t();
}
class ct {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, r;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = ct.nextInstanceID, ct.nextInstanceID += 1, this.instanceID > 0 && le() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const n = Object.assign(Object.assign({}, Aa), e);
    if (this.logDebugMessages = !!n.debug, typeof n.debug == "function" && (this.logger = n.debug), this.persistSession = n.persistSession, this.storageKey = n.storageKey, this.autoRefreshToken = n.autoRefreshToken, this.admin = new Ta({
      url: n.url,
      headers: n.headers,
      fetch: n.fetch
    }), this.url = n.url, this.headers = n.headers, this.fetch = Ls(n.fetch), this.lock = n.lock || Zr, this.detectSessionInUrl = n.detectSessionInUrl, this.flowType = n.flowType, this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader, n.lock ? this.lock = n.lock : le() && (!((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) && t.locks) ? this.lock = Ca : this.lock = Zr, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? n.storage ? this.storage = n.storage : ot() ? this.storage = ja : (this.memoryStorage = {}, this.storage = Qr(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Qr(this.memoryStorage)), le() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (i) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i);
      }
      (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async (i) => {
        this._debug("received broadcast notification from other tab or client", i), await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Is}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    try {
      const e = le() ? await this._isPKCEFlow() : !1;
      if (this._debug("#_initialize()", "begin", "is PKCE flow", e), e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
        const { data: t, error: r } = await this._getSessionFromURL(e);
        if (r)
          return this._debug("#_initialize()", "error detecting session from URL", r), (r == null ? void 0 : r.code) === "identity_already_exists" ? { error: r } : (await this._removeSession(), { error: r });
        const { session: n, redirectType: i } = t;
        return this._debug("#_initialize()", "detected session in URL", n, "redirect type", i), await this._saveSession(n), setTimeout(async () => {
          i === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n) : await this._notifyAllSubscribers("SIGNED_IN", n);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (e) {
      return x(e) ? { error: e } : {
        error: new Ms("Unexpected error during initialization", e)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, r, n;
    try {
      const i = await R(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: Se
      }), { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const c = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: u, session: c }, error: null };
    } catch (i) {
      if (x(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, r, n;
    try {
      let i;
      if ("email" in e) {
        const { email: l, password: h, options: f } = e;
        let p = null, y = null;
        this.flowType === "pkce" && ([p, y] = await ze(this.storage, this.storageKey)), i = await R(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
          body: {
            email: l,
            password: h,
            data: (t = f == null ? void 0 : f.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
            code_challenge: p,
            code_challenge_method: y
          },
          xform: Se
        });
      } else if ("phone" in e) {
        const { phone: l, password: h, options: f } = e;
        i = await R(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: l,
            password: h,
            data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
            channel: (n = f == null ? void 0 : f.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: Se
        });
      } else
        throw new bt("You must provide either an email or phone number and a password");
      const { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const c = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: u, session: c }, error: null };
    } catch (i) {
      if (x(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: a, options: o } = e;
        t = await R(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Kr
        });
      } else if ("phone" in e) {
        const { phone: i, password: a, options: o } = e;
        t = await R(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Kr
        });
      } else
        throw new bt("You must provide either an email or phone number and a password");
      const { data: r, error: n } = t;
      return n ? { data: { user: null, session: null }, error: n } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new Yt() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (x(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, r, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  async _exchangeCodeForSession(e) {
    const t = await _t(this.storage, `${this.storageKey}-code-verifier`), [r, n] = (t ?? "").split("/");
    try {
      const { data: i, error: a } = await R(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: Se
      });
      if (await wt(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !i || !i.session || !i.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new Yt()
      } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), { data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: a });
    } catch (i) {
      if (x(i))
        return { data: { user: null, session: null, redirectType: null }, error: i };
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: r, token: n, access_token: i, nonce: a } = e, o = await R(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: n,
          access_token: i,
          nonce: a,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: Se
      }), { data: c, error: u } = o;
      return u ? { data: { user: null, session: null }, error: u } : !c || !c.session || !c.user ? {
        data: { user: null, session: null },
        error: new Yt()
      } : (c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), { data: c, error: u });
    } catch (t) {
      if (x(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, r, n, i, a;
    try {
      if ("email" in e) {
        const { email: o, options: c } = e;
        let u = null, l = null;
        this.flowType === "pkce" && ([u, l] = await ze(this.storage, this.storageKey));
        const { error: h } = await R(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (t = c == null ? void 0 : c.data) !== null && t !== void 0 ? t : {},
            create_user: (r = c == null ? void 0 : c.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
            code_challenge: u,
            code_challenge_method: l
          },
          redirectTo: c == null ? void 0 : c.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: h };
      }
      if ("phone" in e) {
        const { phone: o, options: c } = e, { data: u, error: l } = await R(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (n = c == null ? void 0 : c.data) !== null && n !== void 0 ? n : {},
            create_user: (i = c == null ? void 0 : c.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
            channel: (a = c == null ? void 0 : c.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: u == null ? void 0 : u.message_id }, error: l };
      }
      throw new bt("You must provide either an email or phone number.");
    } catch (o) {
      if (x(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, r;
    try {
      let n, i;
      "options" in e && (n = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: a, error: o } = await R(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: Se
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const c = a.session, u = a.user;
      return c != null && c.access_token && (await this._saveSession(c), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c)), { data: { user: u, session: c }, error: null };
    } catch (n) {
      if (x(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, r, n;
    try {
      let i = null, a = null;
      return this.flowType === "pkce" && ([i, a] = await ze(this.storage, this.storageKey)), await R(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((n = e == null ? void 0 : e.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: i, code_challenge_method: a }),
        headers: this.headers,
        xform: Sa
      });
    } catch (i) {
      if (x(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          throw r;
        if (!t)
          throw new be();
        const { error: n } = await R(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: n };
      });
    } catch (e) {
      if (x(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: n, options: i } = e, { error: a } = await R(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          },
          redirectTo: i == null ? void 0 : i.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in e) {
        const { phone: r, type: n, options: i } = e, { data: a, error: o } = await R(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new bt("You must provide either an email or phone number and a type");
    } catch (t) {
      if (x(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await r, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = t();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await _t(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (c, u, l) => (!a && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(c, u, l))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? { data: { session: null }, error: i } : { data: { session: n }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await R(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: ke
      }) : await this._useSession(async (t) => {
        var r, n, i;
        const { data: a, error: o } = t;
        if (o)
          throw o;
        return !(!((r = a.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new be() } : await R(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = a.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: ke
        });
      });
    } catch (t) {
      if (x(t))
        return va(t) && (await this._removeSession(), await wt(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: n, error: i } = r;
        if (i)
          throw i;
        if (!n.session)
          throw new be();
        const a = n.session;
        let o = null, c = null;
        this.flowType === "pkce" && e.email != null && ([o, c] = await ze(this.storage, this.storageKey));
        const { data: u, error: l } = await R(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: c }),
          jwt: a.access_token,
          xform: ke
        });
        if (l)
          throw l;
        return a.user = u.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (r) {
      if (x(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(e) {
    return Vr(e);
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new be();
      const t = Date.now() / 1e3;
      let r = t, n = !0, i = null;
      const a = Vr(e.access_token);
      if (a.exp && (r = a.exp, n = r <= t), n) {
        const { session: o, error: c } = await this._callRefreshToken(e.refresh_token);
        if (c)
          return { data: { user: null, session: null }, error: c };
        if (!o)
          return { data: { user: null, session: null }, error: null };
        i = o;
      } else {
        const { data: o, error: c } = await this._getUser(e.access_token);
        if (c)
          throw c;
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return { data: { user: i.user, session: i }, error: null };
    } catch (t) {
      if (x(t))
        return { data: { session: null, user: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: a, error: o } = t;
          if (o)
            throw o;
          e = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new be();
        const { session: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? { data: { user: null, session: null }, error: i } : n ? { data: { user: n.user, session: n }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (x(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e) {
    try {
      if (!le())
        throw new St("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new St("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !e)
        throw new Yr("Not a valid PKCE flow url.");
      const t = Vt(window.location.href);
      if (e) {
        if (!t.code)
          throw new Yr("No code detected.");
        const { data: T, error: j } = await this._exchangeCodeForSession(t.code);
        if (j)
          throw j;
        const O = new URL(window.location.href);
        return O.searchParams.delete("code"), window.history.replaceState(window.history.state, "", O.toString()), { data: { session: T.session, redirectType: null }, error: null };
      }
      if (t.error || t.error_description || t.error_code)
        throw new St(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      const { provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: a, expires_in: o, expires_at: c, token_type: u } = t;
      if (!i || !o || !a || !u)
        throw new St("No session defined in URL");
      const l = Math.round(Date.now() / 1e3), h = parseInt(o);
      let f = l + h;
      c && (f = parseInt(c));
      const p = f - l;
      p * 1e3 <= rt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`);
      const y = f - h;
      l - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, l) : l - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, l);
      const { data: m, error: S } = await this._getUser(i);
      if (S)
        throw S;
      const C = {
        provider_token: r,
        provider_refresh_token: n,
        access_token: i,
        expires_in: h,
        expires_at: f,
        refresh_token: a,
        token_type: u,
        user: m.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: C, redirectType: t.type }, error: null };
    } catch (t) {
      if (x(t))
        return { data: { session: null, redirectType: null }, error: t };
      throw t;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const e = Vt(window.location.href);
    return !!(le() && (e.access_token || e.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const e = Vt(window.location.href), t = await _t(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var r;
      const { data: n, error: i } = t;
      if (i)
        return { error: i };
      const a = (r = n.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, e);
        if (o && !(ma(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return e !== "others" && (await this._removeSession(), await wt(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = sa(), r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, n;
      try {
        const { data: { session: i }, error: a } = t;
        if (a)
          throw a;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let r = null, n = null;
    this.flowType === "pkce" && ([r, n] = await ze(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await R(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (x(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r)
        throw r;
      return { data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var t;
    try {
      const { data: r, error: n } = await this._useSession(async (i) => {
        var a, o, c, u, l;
        const { data: h, error: f } = i;
        if (f)
          throw f;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
          skipBrowserRedirect: !0
        });
        return await R(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (l = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && l !== void 0 ? l : void 0
        });
      });
      if (n)
        throw n;
      return le() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (x(r))
        return { data: { provider: e.provider, url: null }, error: r };
      throw r;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: a } = t;
        if (a)
          throw a;
        return await R(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await oa(async (n) => (n > 0 && await aa(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await R(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Se
      })), (n, i) => {
        const a = 200 * Math.pow(2, n);
        return i && Jt(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - r < rt;
      });
    } catch (r) {
      if (this._debug(t, "error", r), x(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), le() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const t = "#_recoverAndRefresh()";
    this._debug(t, "begin");
    try {
      const r = await _t(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", r), !this._isValidSession(r)) {
        this._debug(t, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const n = Math.round(Date.now() / 1e3), i = ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) < n + Hr;
      if (this._debug(t, `session has${i ? "" : " not"} expired with margin of ${Hr}s`), i) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: a } = await this._callRefreshToken(r.refresh_token);
          a && (console.error(a), Jt(a) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(t, "error", r), console.error(r);
      return;
    } finally {
      this._debug(t, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e)
      throw new be();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new It();
      const { data: i, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!i.session)
        throw new be();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const o = { session: i.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (i) {
      if (this._debug(n, "error", i), x(i)) {
        const a = { session: null, error: i };
        return Jt(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(a), a;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, t);
        } catch (c) {
          i.push(c);
        }
      });
      if (await Promise.all(a), i.length > 0) {
        for (let o = 0; o < i.length; o += 1)
          console.error(i[o]);
        throw i[0];
      }
    } finally {
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Ns(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await wt(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && le() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), rt);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: r } } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((r.expires_at * 1e3 - e) / rt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${rt}ms, refresh threshold is ${Xr} ticks`), n <= Xr && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Us)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !le() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, r) {
    const n = [`provider=${encodeURIComponent(t)}`];
    if (r != null && r.redirectTo && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && n.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [i, a] = await ze(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      n.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      n.push(i.toString());
    }
    return r != null && r.skipBrowserRedirect && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: n, error: i } = t;
        return i ? { data: null, error: i } : await R(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: a } = t;
        if (a)
          return { data: null, error: a };
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: c, error: u } = await R(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? { data: null, error: u } : (e.factorType === "totp" && (!((n = c == null ? void 0 : c.totp) === null || n === void 0) && n.qr_code) && (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`), { data: c, error: null });
      });
    } catch (t) {
      if (x(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return { data: null, error: i };
          const { data: a, error: o } = await R(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return o ? { data: null, error: o } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: o });
        });
      } catch (t) {
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          return i ? { data: null, error: i } : await R(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
        });
      } catch (t) {
        if (x(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? { data: null, error: r } : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: t } = await this.getUser();
    if (t)
      return { data: null, error: t };
    const r = (e == null ? void 0 : e.factors) || [], n = r.filter((a) => a.factor_type === "totp" && a.status === "verified"), i = r.filter((a) => a.factor_type === "phone" && a.status === "verified");
    return {
      data: {
        all: r,
        totp: n,
        phone: i
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var t, r;
      const { data: { session: n }, error: i } = e;
      if (i)
        return { data: null, error: i };
      if (!n)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const a = this._decodeJWT(n.access_token);
      let o = null;
      a.aal && (o = a.aal);
      let c = o;
      ((r = (t = n.user.factors) === null || t === void 0 ? void 0 : t.filter((h) => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (c = "aal2");
      const l = a.amr || [];
      return { data: { currentLevel: o, nextLevel: c, currentAuthenticationMethods: l }, error: null };
    }));
  }
}
ct.nextInstanceID = 0;
const $a = ct;
class Ia extends $a {
  constructor(e) {
    super(e);
  }
}
var Da = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (h) {
        a(h);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (h) {
        a(h);
      }
    }
    function u(l) {
      l.done ? i(l.value) : n(l.value).then(o, c);
    }
    u((r = r.apply(s, e || [])).next());
  });
};
class La {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, r) {
    var n, i, a;
    if (this.supabaseUrl = e, this.supabaseKey = t, !e)
      throw new Error("supabaseUrl is required.");
    if (!t)
      throw new Error("supabaseKey is required.");
    const o = Qi(e);
    this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${o}/auth/v1`, this.storageUrl = `${o}/storage/v1`, this.functionsUrl = `${o}/functions/v1`;
    const c = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, u = {
      db: qi,
      realtime: Hi,
      auth: Object.assign(Object.assign({}, zi), { storageKey: c }),
      global: Bi
    }, l = Xi(r ?? {}, u);
    this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken ? (this.accessToken = l.accessToken, this.auth = new Proxy({}, {
      get: (h, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = l.auth) !== null && a !== void 0 ? a : {}, this.headers, l.global.fetch), this.fetch = Gi(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, l.realtime)), this.rest = new ui(`${o}/rest/v1`, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch
    }), l.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Fn(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new Ui(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, r = {}) {
    return this.rest.rpc(e, t, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return Da(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (t = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, storageKey: i, flowType: a, lock: o, debug: c }, u, l) {
    var h;
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Ia({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, f), u),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      flowType: a,
      lock: o,
      debug: c,
      fetch: l,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (h = "Authorization" in this.headers) !== null && h !== void 0 ? h : !1
    });
  }
  _initRealtimeClient(e) {
    return new Oi(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, r) => {
      this._handleTokenChanged(t, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? (this.realtime.setAuth(r ?? null), this.changedAccessToken = r) : e === "SIGNED_OUT" && (this.realtime.setAuth(this.supabaseKey), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Na = (s, e, t) => new La(s, e, t), Ma = "https://zozodfjzxzlwzkhmfhwh.supabase.co", Ua = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", W = Na(Ma, Ua);
function de(s) {
  const e = Object.prototype.toString.call(s);
  return s instanceof Date || typeof s == "object" && e === "[object Date]" ? new s.constructor(+s) : typeof s == "number" || e === "[object Number]" || typeof s == "string" || e === "[object String]" ? new Date(s) : /* @__PURE__ */ new Date(NaN);
}
function $e(s, e) {
  return s instanceof Date ? new s.constructor(e) : new Date(e);
}
const Fs = 6048e5, Fa = 864e5;
let Wa = {};
function Dt() {
  return Wa;
}
function lt(s, e) {
  var o, c, u, l;
  const t = Dt(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((l = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? 0, n = de(s), i = n.getDay(), a = (i < r ? 7 : 0) + i - r;
  return n.setDate(n.getDate() - a), n.setHours(0, 0, 0, 0), n;
}
function Tt(s) {
  return lt(s, { weekStartsOn: 1 });
}
function Ws(s) {
  const e = de(s), t = e.getFullYear(), r = $e(s, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const n = Tt(r), i = $e(s, 0);
  i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Tt(i);
  return e.getTime() >= n.getTime() ? t + 1 : e.getTime() >= a.getTime() ? t : t - 1;
}
function es(s) {
  const e = de(s);
  return e.setHours(0, 0, 0, 0), e;
}
function ts(s) {
  const e = de(s), t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), +s - +t;
}
function Ba(s, e) {
  const t = es(s), r = es(e), n = +t - ts(t), i = +r - ts(r);
  return Math.round((n - i) / Fa);
}
function qa(s) {
  const e = Ws(s), t = $e(s, 0);
  return t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), Tt(t);
}
function za(s) {
  return s instanceof Date || typeof s == "object" && Object.prototype.toString.call(s) === "[object Date]";
}
function Ha(s) {
  if (!za(s) && typeof s != "number")
    return !1;
  const e = de(s);
  return !isNaN(Number(e));
}
function Va(s) {
  const e = de(s), t = $e(s, 0);
  return t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Ya = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ja = (s, e, t) => {
  let r;
  const n = Ya[s];
  return typeof n == "string" ? r = n : e === 1 ? r = n.one : r = n.other.replace("{{count}}", e.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Gt(s) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : s.defaultWidth;
    return s.formats[t] || s.formats[s.defaultWidth];
  };
}
const Ga = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ka = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qa = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xa = {
  date: Gt({
    formats: Ga,
    defaultWidth: "full"
  }),
  time: Gt({
    formats: Ka,
    defaultWidth: "full"
  }),
  dateTime: Gt({
    formats: Qa,
    defaultWidth: "full"
  })
}, Za = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, eo = (s, e, t, r) => Za[s];
function st(s) {
  return (e, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let n;
    if (r === "formatting" && s.formattingValues) {
      const a = s.defaultFormattingWidth || s.defaultWidth, o = t != null && t.width ? String(t.width) : a;
      n = s.formattingValues[o] || s.formattingValues[a];
    } else {
      const a = s.defaultWidth, o = t != null && t.width ? String(t.width) : s.defaultWidth;
      n = s.values[o] || s.values[a];
    }
    const i = s.argumentCallback ? s.argumentCallback(e) : e;
    return n[i];
  };
}
const to = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ro = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, so = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, no = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, io = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ao = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, oo = (s, e) => {
  const t = Number(s), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, co = {
  ordinalNumber: oo,
  era: st({
    values: to,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: ro,
    defaultWidth: "wide",
    argumentCallback: (s) => s - 1
  }),
  month: st({
    values: so,
    defaultWidth: "wide"
  }),
  day: st({
    values: no,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: io,
    defaultWidth: "wide",
    formattingValues: ao,
    defaultFormattingWidth: "wide"
  })
};
function nt(s) {
  return (e, t = {}) => {
    const r = t.width, n = r && s.matchPatterns[r] || s.matchPatterns[s.defaultMatchWidth], i = e.match(n);
    if (!i)
      return null;
    const a = i[0], o = r && s.parsePatterns[r] || s.parsePatterns[s.defaultParseWidth], c = Array.isArray(o) ? uo(o, (h) => h.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      lo(o, (h) => h.test(a))
    );
    let u;
    u = s.valueCallback ? s.valueCallback(c) : c, u = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(u)
    ) : u;
    const l = e.slice(a.length);
    return { value: u, rest: l };
  };
}
function lo(s, e) {
  for (const t in s)
    if (Object.prototype.hasOwnProperty.call(s, t) && e(s[t]))
      return t;
}
function uo(s, e) {
  for (let t = 0; t < s.length; t++)
    if (e(s[t]))
      return t;
}
function ho(s) {
  return (e, t = {}) => {
    const r = e.match(s.matchPattern);
    if (!r) return null;
    const n = r[0], i = e.match(s.parsePattern);
    if (!i) return null;
    let a = s.valueCallback ? s.valueCallback(i[0]) : i[0];
    a = t.valueCallback ? t.valueCallback(a) : a;
    const o = e.slice(n.length);
    return { value: a, rest: o };
  };
}
const fo = /^(\d+)(th|st|nd|rd)?/i, go = /\d+/i, po = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, mo = {
  any: [/^b/i, /^(a|c)/i]
}, vo = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _o = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wo = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, bo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, So = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Eo = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ko = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Oo = {
  ordinalNumber: ho({
    matchPattern: fo,
    parsePattern: go,
    valueCallback: (s) => parseInt(s, 10)
  }),
  era: nt({
    matchPatterns: po,
    defaultMatchWidth: "wide",
    parsePatterns: mo,
    defaultParseWidth: "any"
  }),
  quarter: nt({
    matchPatterns: vo,
    defaultMatchWidth: "wide",
    parsePatterns: yo,
    defaultParseWidth: "any",
    valueCallback: (s) => s + 1
  }),
  month: nt({
    matchPatterns: _o,
    defaultMatchWidth: "wide",
    parsePatterns: wo,
    defaultParseWidth: "any"
  }),
  day: nt({
    matchPatterns: bo,
    defaultMatchWidth: "wide",
    parsePatterns: So,
    defaultParseWidth: "any"
  }),
  dayPeriod: nt({
    matchPatterns: Eo,
    defaultMatchWidth: "any",
    parsePatterns: ko,
    defaultParseWidth: "any"
  })
}, xo = {
  code: "en-US",
  formatDistance: Ja,
  formatLong: Xa,
  formatRelative: eo,
  localize: co,
  match: Oo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function To(s) {
  const e = de(s);
  return Ba(e, Va(e)) + 1;
}
function jo(s) {
  const e = de(s), t = +Tt(e) - +qa(e);
  return Math.round(t / Fs) + 1;
}
function Bs(s, e) {
  var l, h, f, p;
  const t = de(s), r = t.getFullYear(), n = Dt(), i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((h = (l = e == null ? void 0 : e.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = $e(s, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const o = lt(a, e), c = $e(s, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = lt(c, e);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= u.getTime() ? r : r - 1;
}
function Po(s, e) {
  var o, c, u, l;
  const t = Dt(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((l = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, n = Bs(s, e), i = $e(s, 0);
  return i.setFullYear(n, 0, r), i.setHours(0, 0, 0, 0), lt(i, e);
}
function Ro(s, e) {
  const t = de(s), r = +lt(t, e) - +Po(t, e);
  return Math.round(r / Fs) + 1;
}
function N(s, e) {
  const t = s < 0 ? "-" : "", r = Math.abs(s).toString().padStart(e, "0");
  return t + r;
}
const we = {
  // Year
  y(s, e) {
    const t = s.getFullYear(), r = t > 0 ? t : 1 - t;
    return N(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(s, e) {
    const t = s.getMonth();
    return e === "M" ? String(t + 1) : N(t + 1, 2);
  },
  // Day of the month
  d(s, e) {
    return N(s.getDate(), e.length);
  },
  // AM or PM
  a(s, e) {
    const t = s.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(s, e) {
    return N(s.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(s, e) {
    return N(s.getHours(), e.length);
  },
  // Minute
  m(s, e) {
    return N(s.getMinutes(), e.length);
  },
  // Second
  s(s, e) {
    return N(s.getSeconds(), e.length);
  },
  // Fraction of second
  S(s, e) {
    const t = e.length, r = s.getMilliseconds(), n = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return N(n, e.length);
  }
}, Ve = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rs = {
  // Era
  G: function(s, e, t) {
    const r = s.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(s, e, t) {
    if (e === "yo") {
      const r = s.getFullYear(), n = r > 0 ? r : 1 - r;
      return t.ordinalNumber(n, { unit: "year" });
    }
    return we.y(s, e);
  },
  // Local week-numbering year
  Y: function(s, e, t, r) {
    const n = Bs(s, r), i = n > 0 ? n : 1 - n;
    if (e === "YY") {
      const a = i % 100;
      return N(a, 2);
    }
    return e === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : N(i, e.length);
  },
  // ISO week-numbering year
  R: function(s, e) {
    const t = Ws(s);
    return N(t, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(s, e) {
    const t = s.getFullYear();
    return N(t, e.length);
  },
  // Quarter
  Q: function(s, e, t) {
    const r = Math.ceil((s.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(r);
      case "QQ":
        return N(r, 2);
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(s, e, t) {
    const r = Math.ceil((s.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(r);
      case "qq":
        return N(r, 2);
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(s, e, t) {
    const r = s.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return we.M(s, e);
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(s, e, t) {
    const r = s.getMonth();
    switch (e) {
      case "L":
        return String(r + 1);
      case "LL":
        return N(r + 1, 2);
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(s, e, t, r) {
    const n = Ro(s, r);
    return e === "wo" ? t.ordinalNumber(n, { unit: "week" }) : N(n, e.length);
  },
  // ISO week of year
  I: function(s, e, t) {
    const r = jo(s);
    return e === "Io" ? t.ordinalNumber(r, { unit: "week" }) : N(r, e.length);
  },
  // Day of the month
  d: function(s, e, t) {
    return e === "do" ? t.ordinalNumber(s.getDate(), { unit: "date" }) : we.d(s, e);
  },
  // Day of year
  D: function(s, e, t) {
    const r = To(s);
    return e === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : N(r, e.length);
  },
  // Day of week
  E: function(s, e, t) {
    const r = s.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(s, e, t, r) {
    const n = s.getDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(i);
      case "ee":
        return N(i, 2);
      case "eo":
        return t.ordinalNumber(i, { unit: "day" });
      case "eee":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(s, e, t, r) {
    const n = s.getDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(i);
      case "cc":
        return N(i, e.length);
      case "co":
        return t.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return t.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(n, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(s, e, t) {
    const r = s.getDay(), n = r === 0 ? 7 : r;
    switch (e) {
      case "i":
        return String(n);
      case "ii":
        return N(n, e.length);
      case "io":
        return t.ordinalNumber(n, { unit: "day" });
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(s, e, t) {
    const n = s.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(s, e, t) {
    const r = s.getHours();
    let n;
    switch (r === 12 ? n = Ve.noon : r === 0 ? n = Ve.midnight : n = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(s, e, t) {
    const r = s.getHours();
    let n;
    switch (r >= 17 ? n = Ve.evening : r >= 12 ? n = Ve.afternoon : r >= 4 ? n = Ve.morning : n = Ve.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(s, e, t) {
    if (e === "ho") {
      let r = s.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return we.h(s, e);
  },
  // Hour [0-23]
  H: function(s, e, t) {
    return e === "Ho" ? t.ordinalNumber(s.getHours(), { unit: "hour" }) : we.H(s, e);
  },
  // Hour [0-11]
  K: function(s, e, t) {
    const r = s.getHours() % 12;
    return e === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : N(r, e.length);
  },
  // Hour [1-24]
  k: function(s, e, t) {
    let r = s.getHours();
    return r === 0 && (r = 24), e === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : N(r, e.length);
  },
  // Minute
  m: function(s, e, t) {
    return e === "mo" ? t.ordinalNumber(s.getMinutes(), { unit: "minute" }) : we.m(s, e);
  },
  // Second
  s: function(s, e, t) {
    return e === "so" ? t.ordinalNumber(s.getSeconds(), { unit: "second" }) : we.s(s, e);
  },
  // Fraction of second
  S: function(s, e) {
    return we.S(s, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(s, e, t) {
    const r = s.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return ns(r);
      case "XXXX":
      case "XX":
        return Ce(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ce(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "x":
        return ns(r);
      case "xxxx":
      case "xx":
        return Ce(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ce(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ss(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ce(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ss(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ce(r, ":");
    }
  },
  // Seconds timestamp
  t: function(s, e, t) {
    const r = Math.trunc(s.getTime() / 1e3);
    return N(r, e.length);
  },
  // Milliseconds timestamp
  T: function(s, e, t) {
    const r = s.getTime();
    return N(r, e.length);
  }
};
function ss(s, e = "") {
  const t = s > 0 ? "-" : "+", r = Math.abs(s), n = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(n) : t + String(n) + e + N(i, 2);
}
function ns(s, e) {
  return s % 60 === 0 ? (s > 0 ? "-" : "+") + N(Math.abs(s) / 60, 2) : Ce(s, e);
}
function Ce(s, e = "") {
  const t = s > 0 ? "-" : "+", r = Math.abs(s), n = N(Math.trunc(r / 60), 2), i = N(r % 60, 2);
  return t + n + e + i;
}
const is = (s, e) => {
  switch (s) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, qs = (s, e) => {
  switch (s) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, Co = (s, e) => {
  const t = s.match(/(P+)(p+)?/) || [], r = t[1], n = t[2];
  if (!n)
    return is(s, e);
  let i;
  switch (r) {
    case "P":
      i = e.dateTime({ width: "short" });
      break;
    case "PP":
      i = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = e.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", is(r, e)).replace("{{time}}", qs(n, e));
}, Ao = {
  p: qs,
  P: Co
}, $o = /^D+$/, Io = /^Y+$/, Do = ["D", "DD", "YY", "YYYY"];
function Lo(s) {
  return $o.test(s);
}
function No(s) {
  return Io.test(s);
}
function Mo(s, e, t) {
  const r = Uo(s, e, t);
  if (console.warn(r), Do.includes(s)) throw new RangeError(r);
}
function Uo(s, e, t) {
  const r = s[0] === "Y" ? "years" : "days of the month";
  return `Use \`${s.toLowerCase()}\` instead of \`${s}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Fo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Bo = /^'([^]*?)'?$/, qo = /''/g, zo = /[a-zA-Z]/;
function Et(s, e, t) {
  var l, h, f, p;
  const r = Dt(), n = r.locale ?? xo, i = r.firstWeekContainsDate ?? ((h = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = r.weekStartsOn ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, o = de(s);
  if (!Ha(o))
    throw new RangeError("Invalid time value");
  let c = e.match(Wo).map((y) => {
    const m = y[0];
    if (m === "p" || m === "P") {
      const S = Ao[m];
      return S(y, n.formatLong);
    }
    return y;
  }).join("").match(Fo).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const m = y[0];
    if (m === "'")
      return { isToken: !1, value: Ho(y) };
    if (rs[m])
      return { isToken: !0, value: y };
    if (m.match(zo))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: y };
  });
  n.localize.preprocessor && (c = n.localize.preprocessor(o, c));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: n
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const m = y.value;
    (No(m) || Lo(m)) && Mo(m, e, String(s));
    const S = rs[m[0]];
    return S(o, m, n.localize, u);
  }).join("");
}
function Ho(s) {
  const e = s.match(Bo);
  return e ? e[1].replace(qo, "'") : s;
}
const Vo = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, as = (s) => {
  let e;
  const t = /* @__PURE__ */ new Set(), r = (l, h) => {
    const f = typeof l == "function" ? l(e) : l;
    if (!Object.is(f, e)) {
      const p = e;
      e = h ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), t.forEach((y) => y(e, p));
    }
  }, n = () => e, c = { setState: r, getState: n, getInitialState: () => u, subscribe: (l) => (t.add(l), () => t.delete(l)), destroy: () => {
    (Vo ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), t.clear();
  } }, u = e = s(r, n, c);
  return c;
}, Yo = (s) => s ? as(s) : as;
var ur = { exports: {} }, Kt = {}, kt = { exports: {} }, Qt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function Jo() {
  if (os) return Qt;
  os = 1;
  var s = Ie;
  function e(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = s.useState, n = s.useEffect, i = s.useLayoutEffect, a = s.useDebugValue;
  function o(h, f) {
    var p = f(), y = r({ inst: { value: p, getSnapshot: f } }), m = y[0].inst, S = y[1];
    return i(function() {
      m.value = p, m.getSnapshot = f, c(m) && S({ inst: m });
    }, [h, p, f]), n(function() {
      return c(m) && S({ inst: m }), h(function() {
        c(m) && S({ inst: m });
      });
    }, [h]), a(p), p;
  }
  function c(h) {
    var f = h.getSnapshot;
    h = h.value;
    try {
      var p = f();
      return !t(h, p);
    } catch {
      return !0;
    }
  }
  function u(h, f) {
    return f();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : o;
  return Qt.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : l, Qt;
}
var Xt = {}, cs;
function Go() {
  if (cs) return Xt;
  cs = 1;
  var s = {};
  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ie, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var E = arguments.length, D = new Array(E > 1 ? E - 1 : 0), $ = 1; $ < E; $++)
          D[$ - 1] = arguments[$];
        n("error", O, D);
      }
    }
    function n(O, E, D) {
      {
        var $ = t.ReactDebugCurrentFrame, V = $.getStackAddendum();
        V !== "" && (E += "%s", D = D.concat([V]));
        var Z = D.map(function(z) {
          return String(z);
        });
        Z.unshift("Warning: " + E), Function.prototype.apply.call(console[O], console, Z);
      }
    }
    function i(O, E) {
      return O === E && (O !== 0 || 1 / O === 1 / E) || O !== O && E !== E;
    }
    var a = typeof Object.is == "function" ? Object.is : i, o = e.useState, c = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, h = !1, f = !1;
    function p(O, E, D) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var $ = E();
      if (!f) {
        var V = E();
        a($, V) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var Z = o({
        inst: {
          value: $,
          getSnapshot: E
        }
      }), z = Z[0].inst, fe = Z[1];
      return u(function() {
        z.value = $, z.getSnapshot = E, y(z) && fe({
          inst: z
        });
      }, [O, $, E]), c(function() {
        y(z) && fe({
          inst: z
        });
        var Te = function() {
          y(z) && fe({
            inst: z
          });
        };
        return O(Te);
      }, [O]), l($), $;
    }
    function y(O) {
      var E = O.getSnapshot, D = O.value;
      try {
        var $ = E();
        return !a(D, $);
      } catch {
        return !0;
      }
    }
    function m(O, E, D) {
      return E();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C = !S, T = C ? m : p, j = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : T;
    Xt.useSyncExternalStore = j, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xt;
}
var ls;
function zs() {
  if (ls) return kt.exports;
  ls = 1;
  var s = {};
  return s.NODE_ENV === "production" ? kt.exports = Jo() : kt.exports = Go(), kt.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function Ko() {
  if (us) return Kt;
  us = 1;
  var s = Ie, e = zs();
  function t(u, l) {
    return u === l && (u !== 0 || 1 / u === 1 / l) || u !== u && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = s.useRef, a = s.useEffect, o = s.useMemo, c = s.useDebugValue;
  return Kt.useSyncExternalStoreWithSelector = function(u, l, h, f, p) {
    var y = i(null);
    if (y.current === null) {
      var m = { hasValue: !1, value: null };
      y.current = m;
    } else m = y.current;
    y = o(function() {
      function C(D) {
        if (!T) {
          if (T = !0, j = D, D = f(D), p !== void 0 && m.hasValue) {
            var $ = m.value;
            if (p($, D)) return O = $;
          }
          return O = D;
        }
        if ($ = O, r(j, D)) return $;
        var V = f(D);
        return p !== void 0 && p($, V) ? $ : (j = D, O = V);
      }
      var T = !1, j, O, E = h === void 0 ? null : h;
      return [function() {
        return C(l());
      }, E === null ? void 0 : function() {
        return C(E());
      }];
    }, [l, h, f, p]);
    var S = n(u, y[0], y[1]);
    return a(function() {
      m.hasValue = !0, m.value = S;
    }, [S]), c(S), S;
  }, Kt;
}
var Zt = {}, ds;
function Qo() {
  if (ds) return Zt;
  ds = 1;
  var s = {};
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ie, t = zs();
    function r(h, f) {
      return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, c = e.useMemo, u = e.useDebugValue;
    function l(h, f, p, y, m) {
      var S = a(null), C;
      S.current === null ? (C = {
        hasValue: !1,
        value: null
      }, S.current = C) : C = S.current;
      var T = c(function() {
        var D = !1, $, V, Z = function(he) {
          if (!D) {
            D = !0, $ = he;
            var Y = y(he);
            if (m !== void 0 && C.hasValue) {
              var ee = C.value;
              if (m(ee, Y))
                return V = ee, ee;
            }
            return V = Y, Y;
          }
          var ge = $, ye = V;
          if (n(ge, he))
            return ye;
          var _e = y(he);
          return m !== void 0 && m(ye, _e) ? ye : ($ = he, V = _e, _e);
        }, z = p === void 0 ? null : p, fe = function() {
          return Z(f());
        }, Te = z === null ? void 0 : function() {
          return Z(z());
        };
        return [fe, Te];
      }, [f, p, y, m]), j = T[0], O = T[1], E = i(h, j, O);
      return o(function() {
        C.hasValue = !0, C.value = E;
      }, [E]), u(E), E;
    }
    Zt.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Zt;
}
var Xo = {};
Xo.NODE_ENV === "production" ? ur.exports = Ko() : ur.exports = Qo();
var Zo = ur.exports;
const ec = /* @__PURE__ */ Sn(Zo), Hs = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_OPENAI_API_KEY: "", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", VITE_SUPABASE_URL: "https://zozodfjzxzlwzkhmfhwh.supabase.co" }, { useDebugValue: tc } = Ie, { useSyncExternalStoreWithSelector: rc } = ec;
let hs = !1;
const sc = (s) => s;
function nc(s, e = sc, t) {
  (Hs ? "production" : void 0) !== "production" && t && !hs && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), hs = !0);
  const r = rc(
    s.subscribe,
    s.getState,
    s.getServerState || s.getInitialState,
    e,
    t
  );
  return tc(r), r;
}
const fs = (s) => {
  (Hs ? "production" : void 0) !== "production" && typeof s != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof s == "function" ? Yo(s) : s, t = (r, n) => nc(e, r, n);
  return Object.assign(t, e), t;
}, ic = (s) => s ? fs(s) : fs;
let ac = { data: "" }, oc = (s) => typeof window == "object" ? ((s ? s.querySelector("#_goober") : window._goober) || Object.assign((s || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : s || ac, cc = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, lc = /\/\*[^]*?\*\/|  +/g, gs = /\n+/g, Oe = (s, e) => {
  let t = "", r = "", n = "";
  for (let i in s) {
    let a = s[i];
    i[0] == "@" ? i[1] == "i" ? t = i + " " + a + ";" : r += i[1] == "f" ? Oe(a, i) : i + "{" + Oe(a, i[1] == "k" ? "" : e) + "}" : typeof a == "object" ? r += Oe(a, e ? e.replace(/([^,])+/g, (o) => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (c) => /&/.test(c) ? c.replace(/&/g, o) : o ? o + " " + c : c)) : i) : a != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), n += Oe.p ? Oe.p(i, a) : i + ":" + a + ";");
  }
  return t + (e && n ? e + "{" + n + "}" : n) + r;
}, me = {}, Vs = (s) => {
  if (typeof s == "object") {
    let e = "";
    for (let t in s) e += t + Vs(s[t]);
    return e;
  }
  return s;
}, uc = (s, e, t, r, n) => {
  let i = Vs(s), a = me[i] || (me[i] = ((c) => {
    let u = 0, l = 11;
    for (; u < c.length; ) l = 101 * l + c.charCodeAt(u++) >>> 0;
    return "go" + l;
  })(i));
  if (!me[a]) {
    let c = i !== s ? s : ((u) => {
      let l, h, f = [{}];
      for (; l = cc.exec(u.replace(lc, "")); ) l[4] ? f.shift() : l[3] ? (h = l[3].replace(gs, " ").trim(), f.unshift(f[0][h] = f[0][h] || {})) : f[0][l[1]] = l[2].replace(gs, " ").trim();
      return f[0];
    })(s);
    me[a] = Oe(n ? { ["@keyframes " + a]: c } : c, t ? "" : "." + a);
  }
  let o = t && me.g ? me.g : null;
  return t && (me.g = me[a]), ((c, u, l, h) => {
    h ? u.data = u.data.replace(h, c) : u.data.indexOf(c) === -1 && (u.data = l ? c + u.data : u.data + c);
  })(me[a], e, r, o), a;
}, dc = (s, e, t) => s.reduce((r, n, i) => {
  let a = e[i];
  if (a && a.call) {
    let o = a(t), c = o && o.props && o.props.className || /^go/.test(o) && o;
    a = c ? "." + c : o && typeof o == "object" ? o.props ? "" : Oe(o, "") : o === !1 ? "" : o;
  }
  return r + n + (a ?? "");
}, "");
function Lt(s) {
  let e = this || {}, t = s.call ? s(e.p) : s;
  return uc(t.unshift ? t.raw ? dc(t, [].slice.call(arguments, 1), e.p) : t.reduce((r, n) => Object.assign(r, n && n.call ? n(e.p) : n), {}) : t, oc(e.target), e.g, e.o, e.k);
}
let Ys, dr, hr;
Lt.bind({ g: 1 });
let ve = Lt.bind({ k: 1 });
function hc(s, e, t, r) {
  Oe.p = e, Ys = s, dr = t, hr = r;
}
function xe(s, e) {
  let t = this || {};
  return function() {
    let r = arguments;
    function n(i, a) {
      let o = Object.assign({}, i), c = o.className || n.className;
      t.p = Object.assign({ theme: dr && dr() }, o), t.o = / *go\d+/.test(c), o.className = Lt.apply(t, r) + (c ? " " + c : "");
      let u = s;
      return s[0] && (u = o.as || s, delete o.as), hr && u[0] && hr(o), Ys(u, o);
    }
    return n;
  };
}
var fc = (s) => typeof s == "function", fr = (s, e) => fc(s) ? s(e) : s, gc = /* @__PURE__ */ (() => {
  let s = 0;
  return () => (++s).toString();
})(), pc = /* @__PURE__ */ (() => {
  let s;
  return () => {
    if (s === void 0 && typeof window < "u") {
      let e = matchMedia("(prefers-reduced-motion: reduce)");
      s = !e || e.matches;
    }
    return s;
  };
})(), mc = 20, Ot = /* @__PURE__ */ new Map(), vc = 1e3, ps = (s) => {
  if (Ot.has(s)) return;
  let e = setTimeout(() => {
    Ot.delete(s), Nt({ type: 4, toastId: s });
  }, vc);
  Ot.set(s, e);
}, yc = (s) => {
  let e = Ot.get(s);
  e && clearTimeout(e);
}, gr = (s, e) => {
  switch (e.type) {
    case 0:
      return { ...s, toasts: [e.toast, ...s.toasts].slice(0, mc) };
    case 1:
      return e.toast.id && yc(e.toast.id), { ...s, toasts: s.toasts.map((i) => i.id === e.toast.id ? { ...i, ...e.toast } : i) };
    case 2:
      let { toast: t } = e;
      return s.toasts.find((i) => i.id === t.id) ? gr(s, { type: 1, toast: t }) : gr(s, { type: 0, toast: t });
    case 3:
      let { toastId: r } = e;
      return r ? ps(r) : s.toasts.forEach((i) => {
        ps(i.id);
      }), { ...s, toasts: s.toasts.map((i) => i.id === r || r === void 0 ? { ...i, visible: !1 } : i) };
    case 4:
      return e.toastId === void 0 ? { ...s, toasts: [] } : { ...s, toasts: s.toasts.filter((i) => i.id !== e.toastId) };
    case 5:
      return { ...s, pausedAt: e.time };
    case 6:
      let n = e.time - (s.pausedAt || 0);
      return { ...s, pausedAt: void 0, toasts: s.toasts.map((i) => ({ ...i, pauseDuration: i.pauseDuration + n })) };
  }
}, _c = [], er = { toasts: [], pausedAt: void 0 }, Nt = (s) => {
  er = gr(er, s), _c.forEach((e) => {
    e(er);
  });
}, wc = (s, e = "blank", t) => ({ createdAt: Date.now(), visible: !0, type: e, ariaProps: { role: "status", "aria-live": "polite" }, message: s, pauseDuration: 0, ...t, id: (t == null ? void 0 : t.id) || gc() }), ft = (s) => (e, t) => {
  let r = wc(e, s, t);
  return Nt({ type: 2, toast: r }), r.id;
}, oe = (s, e) => ft("blank")(s, e);
oe.error = ft("error");
oe.success = ft("success");
oe.loading = ft("loading");
oe.custom = ft("custom");
oe.dismiss = (s) => {
  Nt({ type: 3, toastId: s });
};
oe.remove = (s) => Nt({ type: 4, toastId: s });
oe.promise = (s, e, t) => {
  let r = oe.loading(e.loading, { ...t, ...t == null ? void 0 : t.loading });
  return s.then((n) => (oe.success(fr(e.success, n), { id: r, ...t, ...t == null ? void 0 : t.success }), n)).catch((n) => {
    oe.error(fr(e.error, n), { id: r, ...t, ...t == null ? void 0 : t.error });
  }), s;
};
var bc = ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Sc = ve`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ec = ve`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, kc = xe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(s) => s.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Sc} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(s) => s.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ec} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Oc = ve`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, xc = xe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(s) => s.secondary || "#e0e0e0"};
  border-right-color: ${(s) => s.primary || "#616161"};
  animation: ${Oc} 1s linear infinite;
`, Tc = ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, jc = ve`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Pc = xe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(s) => s.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Tc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${jc} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(s) => s.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Rc = xe("div")`
  position: absolute;
`, Cc = xe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Ac = ve`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, $c = xe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ac} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Ic = ({ toast: s }) => {
  let { icon: e, type: t, iconTheme: r } = s;
  return e !== void 0 ? typeof e == "string" ? ne.createElement($c, null, e) : e : t === "blank" ? null : ne.createElement(Cc, null, ne.createElement(xc, { ...r }), t !== "loading" && ne.createElement(Rc, null, t === "error" ? ne.createElement(kc, { ...r }) : ne.createElement(Pc, { ...r })));
}, Dc = (s) => `
0% {transform: translate3d(0,${s * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Lc = (s) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s * -150}%,-1px) scale(.6); opacity:0;}
`, Nc = "0%{opacity:0;} 100%{opacity:1;}", Mc = "0%{opacity:1;} 100%{opacity:0;}", Uc = xe("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Fc = xe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Wc = (s, e) => {
  let t = s.includes("top") ? 1 : -1, [r, n] = pc() ? [Nc, Mc] : [Dc(t), Lc(t)];
  return { animation: e ? `${ve(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ve(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
ne.memo(({ toast: s, position: e, style: t, children: r }) => {
  let n = s.height ? Wc(s.position || e || "top-center", s.visible) : { opacity: 0 }, i = ne.createElement(Ic, { toast: s }), a = ne.createElement(Fc, { ...s.ariaProps }, fr(s.message, s));
  return ne.createElement(Uc, { className: s.className, style: { ...n, ...t, ...s.style } }, typeof r == "function" ? r({ icon: i, message: a }) : ne.createElement(ne.Fragment, null, i, a));
});
hc(ne.createElement);
Lt`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Bc = async (s, e) => {
  try {
    const r = await fetch("https://deplo-dash.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        message: s,
        conversationId: e
      })
    });
    if (!r.ok) {
      console.error("API Response:", {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(r.headers.entries())
      });
      const i = await r.text();
      throw console.error("Error response body:", i), new Error(`HTTP error! status: ${r.status}`);
    }
    return (await r.json()).response || "Sorry, I could not generate a response.";
  } catch (t) {
    throw console.error("Error generating response:", t), t;
  }
}, qc = ic((s, e) => ({
  isLoading: !1,
  error: null,
  sendMessage: async (t, r) => {
    s({ isLoading: !0, error: null });
    try {
      console.log("Sending user message from widget:", t);
      const n = {
        conversation_id: r,
        content: t,
        sender_type: "user",
        user_id: null
      }, { error: i } = await W.from("messages").insert(n);
      if (i) throw i;
      const { data: a, error: o } = await W.from("conversations").select("live_mode").eq("id", r).single();
      if (o) throw o;
      if (a.live_mode)
        console.log("Live mode enabled, skipping OpenAI response");
      else {
        console.log("Live mode disabled, generating OpenAI response");
        try {
          const u = await Bc(t, r);
          console.log("Got OpenAI response:", u);
          const l = {
            conversation_id: r,
            content: u,
            sender_type: "bot",
            user_id: null
          }, { error: h } = await W.from("messages").insert(l);
          if (h) throw h;
        } catch (u) {
          console.error("Error generating bot response:", u), oe.error("Failed to generate bot response");
        }
      }
      const { error: c } = await W.from("conversations").update({ last_message_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", r);
      if (c) throw c;
    } catch (n) {
      console.error("Error sending message:", n), s({ error: n.message }), oe.error("Failed to send message");
    } finally {
      s({ isLoading: !1 });
    }
  }
})), ms = "chatbot_session_id", zc = 180;
function Hc({ domainId: s }) {
  const [e, t] = ae(!1), [r, n] = ae(""), [i, a] = ae([]), [o, c] = ae([]), [u, l] = ae("history"), [h, f] = ae(null), [p, y] = ae(!1), [m] = ae(/* @__PURE__ */ new Set()), [S, C] = ae(null), [T, j] = ae(null), O = Dr(null), [E, D] = ae(!1), $ = Dr(null), { sendMessage: V } = qc(), Z = (_, w) => w.some(
    (I) => (
      // Check for exact ID match
      I.id === _.id || // Check for temp ID being replaced by real ID
      I.id.startsWith("temp-") && I.content === _.content && I.sender_type === _.sender_type || // Check for exact content match within a small time window (2 seconds)
      I.content === _.content && I.sender_type === _.sender_type && Math.abs(new Date(I.created_at).getTime() - new Date(_.created_at).getTime()) < 2e3
    )
  );
  pe(() => {
    if (!T) return;
    const _ = W.channel("new-conversations").on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${T}`
      },
      (w) => {
        if (w.eventType === "INSERT") {
          const I = w.new;
          c((F) => [I, ...F]);
        }
      }
    ).subscribe();
    return () => {
      _.unsubscribe();
    };
  }, [T]), pe(() => {
    if (!T) return;
    const _ = W.channel("conversations-updates").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${T}`
      },
      (w) => {
        w.eventType === "UPDATE" && (c(
          (I) => I.map(
            (F) => F.id === w.new.id ? { ...F, ...w.new } : F
          )
        ), w.new.id === h && D(w.new.status === "archived"));
      }
    ).subscribe();
    return () => {
      _.unsubscribe();
    };
  }, [T, h]), pe(() => {
    var _;
    e && ((_ = O.current) == null || _.scrollIntoView({ behavior: "smooth" }));
  }, [i, e]);
  const z = async () => {
    if (T)
      try {
        const { data: _, error: w } = await W.from("conversations").select("*").eq("session_id", T).order("last_message_at", { ascending: !1 });
        if (w) throw w;
        c(_ || []);
      } catch (_) {
        console.error("Error loading conversation history:", _);
      }
  };
  pe(() => {
    T && z();
  }, [T]);
  const fe = async () => {
    a([]), f(null), D(!1), l("chat");
  }, Te = () => {
    l("history"), a([]), f(null), D(!1);
  }, he = async (_) => {
    try {
      f(_.id), D(_.status === "archived");
      const { data: w } = await W.from("messages").select("*").eq("conversation_id", _.id).order("created_at", { ascending: !0 });
      w && (a(w), m.clear(), w.forEach((I) => m.add(I.id))), l("chat");
    } catch (w) {
      console.error("Error loading conversation:", w);
    }
  };
  pe(() => {
    if (!h) return;
    const _ = W.channel(`conversation-status:${h}`).on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "conversations",
        filter: `id=eq.${h}`
      },
      (w) => {
        w.new.status === "archived" ? (D(!0), Y()) : D(!1);
      }
    ).subscribe();
    return () => {
      _.unsubscribe();
    };
  }, [h]), pe(() => {
    $.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
  }, []);
  const Y = () => {
    $.current && ($.current.currentTime = 0, $.current.play().catch((_) => {
      console.log("Error playing notification:", _);
    }));
  };
  pe(() => {
    if (!h) {
      console.log("No conversation ID yet, skipping subscription");
      return;
    }
    console.log("Setting up subscription for conversation:", h);
    const _ = W.channel(`messages-${h}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${h}`
      },
      (w) => {
        if (console.log("Received real-time event:", w), w.eventType === "INSERT") {
          const I = w.new;
          console.log("New message:", I), a((F) => {
            if (Z(I, F))
              return console.log("Message already exists, skipping"), F;
            const J = F.filter(
              (re) => !(re.id.startsWith("temp-") && re.content === I.content && re.sender_type === I.sender_type)
            );
            return m.add(I.id), I.sender_type === "bot" && Y(), console.log("Adding new message to state"), [...J, I];
          });
        }
      }
    );
    return _.subscribe((w) => {
      console.log("Subscription status:", w);
    }), () => {
      console.log("Cleaning up subscription for conversation:", h), _.unsubscribe();
    };
  }, [h, e]), pe(() => {
    (async () => {
      let w = localStorage.getItem(ms);
      w || (w = window.crypto.randomUUID(), localStorage.setItem(ms, w)), j(w), await ee(w);
    })();
  }, []);
  const ee = async (_) => {
    try {
      const { data: w, error: I } = await W.from("conversations").select("*").eq("session_id", _).eq("status", "active").order("last_message_at", { ascending: !1 }).limit(1);
      if (I) throw I;
      if (!w || w.length === 0) {
        console.log("No active conversations found for this session");
        return;
      }
      const F = w[0], J = /* @__PURE__ */ new Date();
      if (J.setDate(J.getDate() - zc), new Date(F.last_message_at) < J) {
        await W.from("conversations").update({ status: "archived" }).eq("id", F.id);
        return;
      }
      f(F.id);
      const { data: re } = await W.from("messages").select("*").eq("conversation_id", F.id).order("created_at", { ascending: !0 });
      if (re) {
        const Ue = re.filter((Fe) => m.has(Fe.id) ? !1 : (m.add(Fe.id), !0));
        a(Ue);
      }
    } catch (w) {
      w instanceof Error && !w.message.includes("no rows returned") && (console.error("Error loading existing conversation:", w), C("Failed to load conversation history"));
    }
  }, ge = async () => {
    try {
      const { data: { user: _ } } = await W.auth.getUser();
      if (!_) {
        await W.auth.signInAnonymously();
        const { data: { user: F } } = await W.auth.getUser();
        if (!F) throw new Error("Failed to create anonymous session");
        const { data: J, error: re } = await W.from("conversations").insert({
          domain_id: s,
          user_id: F.id,
          session_id: T,
          last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
          status: "active"
        }).select().single();
        if (re) throw re;
        return J.id;
      }
      const { data: w, error: I } = await W.from("conversations").insert({
        domain_id: s,
        user_id: _.id,
        session_id: T,
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).select().single();
      if (I) throw I;
      return w.id;
    } catch (_) {
      throw console.error("Error creating conversation:", _), _;
    }
  }, ye = async (_) => {
    try {
      y(!0), C(null);
      const { data: { user: w } } = await W.auth.getUser();
      w || await W.auth.signInAnonymously();
      const I = h || await ge();
      h || f(I);
      const F = {
        id: `temp-${Date.now()}`,
        content: _,
        sender_type: "user",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      a((J) => Z(F, J) ? J : [...J, F]), await V(_, I), n("");
    } catch (w) {
      console.error("Error sending message:", w), C("Failed to send message. Please try again.");
    } finally {
      y(!1);
    }
  }, _e = async (_) => {
    _.preventDefault(), !(!r.trim() || p) && await ye(r.trim());
  };
  pe(() => {
    s && (async () => {
      try {
        const { data: w } = await W.from("domain_settings").select("*").eq("domain_id", s).single();
        Ne(w ? {
          chatbotName: w.chatbot_name,
          greetingMessage: w.greeting_message || "Hello! How can I help you today?",
          color: w.primary_color || "#FF6B00",
          headerTextColor: w.header_text_color || "#000000"
        } : {
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      } catch (w) {
        console.error("Error fetching chatbot config:", w), Ne({
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      }
    })();
  }, [s]);
  const [te, Ne] = ae({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), Me = {
    backgroundColor: te.color
  }, gt = async () => {
    if (h)
      try {
        a([]), m.clear();
        const { data: _ } = await W.from("messages").select("*").eq("conversation_id", h).order("created_at", { ascending: !0 });
        _ && (a(_), _.forEach((w) => m.add(w.id)));
      } catch (_) {
        console.error("Error refreshing chat:", _), C("Failed to refresh chat");
      }
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    e && /* @__PURE__ */ b.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: te.color }, children: [
        /* @__PURE__ */ b.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ b.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ b.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ b.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: Me })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ b.jsx("h3", { className: "font-medium", style: { color: te.headerTextColor }, children: te.chatbotName }),
          /* @__PURE__ */ b.jsxs("p", { className: "text-sm", style: { color: te.headerTextColor }, children: [
            "from ",
            te.chatbotName
          ] })
        ] }),
        u === "chat" && /* @__PURE__ */ b.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ b.jsx(
            "button",
            {
              onClick: gt,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: te.headerTextColor },
              title: "Refresh chat",
              children: /* @__PURE__ */ b.jsx($n, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ b.jsx(
            "button",
            {
              onClick: Te,
              className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
              style: { color: te.headerTextColor },
              children: /* @__PURE__ */ b.jsx(An, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ b.jsx("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50 relative", children: u === "history" ? /* @__PURE__ */ b.jsxs("div", { className: "space-y-4 h-full", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ b.jsx("h3", { className: "font-medium text-gray-900", children: "Conversation History" }),
          /* @__PURE__ */ b.jsxs(
            "button",
            {
              onClick: fe,
              className: "flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600",
              children: [
                /* @__PURE__ */ b.jsx(Cn, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        o.map((_) => /* @__PURE__ */ b.jsxs(
          "button",
          {
            onClick: () => he(_),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ b.jsx("span", { className: "text-sm font-medium text-gray-900", children: Et(new Date(_.created_at), "PPP") }),
                /* @__PURE__ */ b.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${_.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: _.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ b.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                Et(new Date(_.last_message_at), "p")
              ] })
            ]
          },
          _.id
        )),
        o.length === 0 && /* @__PURE__ */ b.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ b.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ b.jsxs("div", { className: "space-y-4", children: [
        u === "chat" && /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ b.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ b.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ b.jsx("p", { className: "text-sm", children: te.greetingMessage }),
            /* @__PURE__ */ b.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: Et(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        i.map((_) => /* @__PURE__ */ b.jsxs(
          "div",
          {
            className: `flex gap-2 ${_.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              _.sender_type === "bot" && /* @__PURE__ */ b.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ b.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${_.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ b.jsx("p", { className: "text-sm", children: _.content }),
                    /* @__PURE__ */ b.jsx("span", { className: `text-xs mt-1 block ${_.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: Et(new Date(_.created_at), "h:mm a") })
                  ]
                }
              ),
              _.sender_type === "user" && /* @__PURE__ */ b.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          _.id
        )),
        E && /* @__PURE__ */ b.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ b.jsx(Rn, { className: "h-4 w-4" }),
          /* @__PURE__ */ b.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
        ] }) }),
        /* @__PURE__ */ b.jsx("div", { ref: O })
      ] }) }),
      u === "chat" && /* @__PURE__ */ b.jsxs("form", { onSubmit: _e, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ b.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              value: r,
              onChange: (_) => n(_.target.value),
              placeholder: "Type your message...",
              className: "w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed",
              style: { "--tw-ring-color": te.color },
              disabled: p || E
            }
          ) }),
          /* @__PURE__ */ b.jsx(
            "button",
            {
              type: "submit",
              disabled: !r.trim() || p || E,
              className: "p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
              style: Me,
              children: p ? /* @__PURE__ */ b.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ b.jsx(In, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ b.jsx(
          "a",
          {
            href: "https://dashboard.ai",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-gray-600 hover:text-gray-700",
            children: "Powered by Dashboard.ai"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ b.jsx(
      "button",
      {
        className: "w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg",
        style: Me,
        onClick: () => t(!e),
        children: e ? "×" : "💬"
      }
    )
  ] });
}
function Vc() {
  const s = document.createElement("div");
  s.id = "chatbot-widget-root", document.body.appendChild(s);
  const e = window.CHATBOT_CONFIG || {};
  rr(s).render(/* @__PURE__ */ b.jsx(Hc, { domainId: e.domainId }));
}
Vc();
export {
  Sn as g
};
//# sourceMappingURL=main-DhfcoBkF.js.map

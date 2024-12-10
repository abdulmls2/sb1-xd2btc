import Mr, { forwardRef as Ls, createElement as hr, useState as Q, useRef as dr, useEffect as se } from "react";
import Ms from "react-dom";
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function Us(s) {
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
var Lt = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Fs() {
  if (fr) return Me;
  fr = 1;
  var s = Mr, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, c, h) {
    var u, d = {}, g = null, p = null;
    h !== void 0 && (g = "" + h), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (o && o.defaultProps) for (u in c = o.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: e, type: o, key: g, ref: p, props: d, _owner: n.current };
  }
  return Me.Fragment = t, Me.jsx = a, Me.jsxs = a, Me;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function qs() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Mr, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), b = Symbol.iterator, _ = "@@iterator";
    function T(l) {
      if (l === null || typeof l != "object")
        return null;
      var f = b && l[b] || l[_];
      return typeof f == "function" ? f : null;
    }
    var A = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(l) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), k = 1; k < f; k++)
          m[k - 1] = arguments[k];
        B("error", l, m);
      }
    }
    function B(l, f, m) {
      {
        var k = A.ReactDebugCurrentFrame, j = k.getStackAddendum();
        j !== "" && (f += "%s", m = m.concat([j]));
        var R = m.map(function(P) {
          return String(P);
        });
        R.unshift("Warning: " + f), Function.prototype.apply.call(console[l], console, R);
      }
    }
    var q = !1, F = !1, ne = !1, be = !1, wt = !1, Qe;
    Qe = Symbol.for("react.module.reference");
    function bt(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === i || wt || l === n || l === h || l === u || be || l === p || q || F || ne || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === d || l.$$typeof === a || l.$$typeof === o || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Qe || l.getModuleId !== void 0));
    }
    function kt(l, f, m) {
      var k = l.displayName;
      if (k)
        return k;
      var j = f.displayName || f.name || "";
      return j !== "" ? m + "(" + j + ")" : m;
    }
    function Ie(l) {
      return l.displayName || "Context";
    }
    function G(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case o:
            var f = l;
            return Ie(f) + ".Consumer";
          case a:
            var m = l;
            return Ie(m._context) + ".Provider";
          case c:
            return kt(l, l.render, "ForwardRef");
          case d:
            var k = l.displayName || null;
            return k !== null ? k : G(l.type) || "Memo";
          case g: {
            var j = l, R = j._payload, P = j._init;
            try {
              return G(P(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ue = 0, Xe, V, ke, Se, y, v, D;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function he() {
      {
        if (ue === 0) {
          Xe = console.log, V = console.info, ke = console.warn, Se = console.error, y = console.group, v = console.groupCollapsed, D = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ue++;
      }
    }
    function de() {
      {
        if (ue--, ue === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, l, {
              value: Xe
            }),
            info: re({}, l, {
              value: V
            }),
            warn: re({}, l, {
              value: ke
            }),
            error: re({}, l, {
              value: Se
            }),
            group: re({}, l, {
              value: y
            }),
            groupCollapsed: re({}, l, {
              value: v
            }),
            groupEnd: re({}, l, {
              value: D
            })
          });
        }
        ue < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = A.ReactCurrentDispatcher, St;
    function Ze(l, f, m) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (j) {
            var k = j.stack.trim().match(/\n( *(at )?)/);
            St = k && k[1] || "";
          }
        return `
` + St + l;
      }
    }
    var Et = !1, et;
    {
      var ds = typeof WeakMap == "function" ? WeakMap : Map;
      et = new ds();
    }
    function Qt(l, f) {
      if (!l || Et)
        return "";
      {
        var m = et.get(l);
        if (m !== void 0)
          return m;
      }
      var k;
      Et = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = Ee.current, Ee.current = null, he();
      try {
        if (f) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (H) {
              k = H;
            }
            Reflect.construct(l, [], P);
          } else {
            try {
              P.call();
            } catch (H) {
              k = H;
            }
            l.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            k = H;
          }
          l();
        }
      } catch (H) {
        if (H && k && typeof H.stack == "string") {
          for (var O = H.stack.split(`
`), W = k.stack.split(`
`), I = O.length - 1, N = W.length - 1; I >= 1 && N >= 0 && O[I] !== W[N]; )
            N--;
          for (; I >= 1 && N >= 0; I--, N--)
            if (O[I] !== W[N]) {
              if (I !== 1 || N !== 1)
                do
                  if (I--, N--, N < 0 || O[I] !== W[N]) {
                    var K = `
` + O[I].replace(" at new ", " at ");
                    return l.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", l.displayName)), typeof l == "function" && et.set(l, K), K;
                  }
                while (I >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        Et = !1, Ee.current = R, de(), Error.prepareStackTrace = j;
      }
      var Oe = l ? l.displayName || l.name : "", fe = Oe ? Ze(Oe) : "";
      return typeof l == "function" && et.set(l, fe), fe;
    }
    function fs(l, f, m) {
      return Qt(l, !1);
    }
    function gs(l) {
      var f = l.prototype;
      return !!(f && f.isReactComponent);
    }
    function tt(l, f, m) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Qt(l, gs(l));
      if (typeof l == "string")
        return Ze(l);
      switch (l) {
        case h:
          return Ze("Suspense");
        case u:
          return Ze("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return fs(l.render);
          case d:
            return tt(l.type, f, m);
          case g: {
            var k = l, j = k._payload, R = k._init;
            try {
              return tt(R(j), f, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Xt = {}, Zt = A.ReactDebugCurrentFrame;
    function rt(l) {
      if (l) {
        var f = l._owner, m = tt(l.type, l._source, f ? f.type : null);
        Zt.setExtraStackFrame(m);
      } else
        Zt.setExtraStackFrame(null);
    }
    function ms(l, f, m, k, j) {
      {
        var R = Function.call.bind(Ne);
        for (var P in l)
          if (R(l, P)) {
            var O = void 0;
            try {
              if (typeof l[P] != "function") {
                var W = Error((k || "React class") + ": " + m + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              O = l[P](f, P, k, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              O = I;
            }
            O && !(O instanceof Error) && (rt(j), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", m, P, typeof O), rt(null)), O instanceof Error && !(O.message in Xt) && (Xt[O.message] = !0, rt(j), E("Failed %s type: %s", m, O.message), rt(null));
          }
      }
    }
    var ps = Array.isArray;
    function Tt(l) {
      return ps(l);
    }
    function vs(l) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return m;
      }
    }
    function ys(l) {
      try {
        return er(l), !1;
      } catch {
        return !0;
      }
    }
    function er(l) {
      return "" + l;
    }
    function tr(l) {
      if (ys(l))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vs(l)), er(l);
    }
    var Le = A.ReactCurrentOwner, _s = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, sr, Ot;
    Ot = {};
    function ws(l) {
      if (Ne.call(l, "ref")) {
        var f = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function bs(l) {
      if (Ne.call(l, "key")) {
        var f = Object.getOwnPropertyDescriptor(l, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ks(l, f) {
      if (typeof l.ref == "string" && Le.current && f && Le.current.stateNode !== f) {
        var m = G(Le.current.type);
        Ot[m] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Le.current.type), l.ref), Ot[m] = !0);
      }
    }
    function Ss(l, f) {
      {
        var m = function() {
          rr || (rr = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Es(l, f) {
      {
        var m = function() {
          sr || (sr = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Ts = function(l, f, m, k, j, R, P) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: f,
        ref: m,
        props: P,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function Os(l, f, m, k, j) {
      {
        var R, P = {}, O = null, W = null;
        m !== void 0 && (tr(m), O = "" + m), bs(f) && (tr(f.key), O = "" + f.key), ws(f) && (W = f.ref, ks(f, j));
        for (R in f)
          Ne.call(f, R) && !_s.hasOwnProperty(R) && (P[R] = f[R]);
        if (l && l.defaultProps) {
          var I = l.defaultProps;
          for (R in I)
            P[R] === void 0 && (P[R] = I[R]);
        }
        if (O || W) {
          var N = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          O && Ss(P, N), W && Es(P, N);
        }
        return Ts(l, O, W, j, k, Le.current, P);
      }
    }
    var xt = A.ReactCurrentOwner, nr = A.ReactDebugCurrentFrame;
    function Te(l) {
      if (l) {
        var f = l._owner, m = tt(l.type, l._source, f ? f.type : null);
        nr.setExtraStackFrame(m);
      } else
        nr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function jt(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function ir() {
      {
        if (xt.current) {
          var l = G(xt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function xs(l) {
      return "";
    }
    var ar = {};
    function Ps(l) {
      {
        var f = ir();
        if (!f) {
          var m = typeof l == "string" ? l : l.displayName || l.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function or(l, f) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var m = Ps(f);
        if (ar[m])
          return;
        ar[m] = !0;
        var k = "";
        l && l._owner && l._owner !== xt.current && (k = " It was passed a child from " + G(l._owner.type) + "."), Te(l), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, k), Te(null);
      }
    }
    function cr(l, f) {
      {
        if (typeof l != "object")
          return;
        if (Tt(l))
          for (var m = 0; m < l.length; m++) {
            var k = l[m];
            jt(k) && or(k, f);
          }
        else if (jt(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var j = T(l);
          if (typeof j == "function" && j !== l.entries)
            for (var R = j.call(l), P; !(P = R.next()).done; )
              jt(P.value) && or(P.value, f);
        }
      }
    }
    function js(l) {
      {
        var f = l.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === d))
          m = f.propTypes;
        else
          return;
        if (m) {
          var k = G(f);
          ms(m, l.props, "prop", k, l);
        } else if (f.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var j = G(f);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cs(l) {
      {
        for (var f = Object.keys(l.props), m = 0; m < f.length; m++) {
          var k = f[m];
          if (k !== "children" && k !== "key") {
            Te(l), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Te(null);
            break;
          }
        }
        l.ref !== null && (Te(l), E("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var lr = {};
    function ur(l, f, m, k, j, R) {
      {
        var P = bt(l);
        if (!P) {
          var O = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = xs();
          W ? O += W : O += ir();
          var I;
          l === null ? I = "null" : Tt(l) ? I = "array" : l !== void 0 && l.$$typeof === e ? (I = "<" + (G(l.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : I = typeof l, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, O);
        }
        var N = Os(l, f, m, j, R);
        if (N == null)
          return N;
        if (P) {
          var K = f.children;
          if (K !== void 0)
            if (k)
              if (Tt(K)) {
                for (var Oe = 0; Oe < K.length; Oe++)
                  cr(K[Oe], l);
                Object.freeze && Object.freeze(K);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(K, l);
        }
        if (Ne.call(f, "key")) {
          var fe = G(l), H = Object.keys(f).filter(function(Ns) {
            return Ns !== "key";
          }), Ct = H.length > 0 ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[fe + Ct]) {
            var Is = H.length > 0 ? "{" + H.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ct, fe, Is, fe), lr[fe + Ct] = !0;
          }
        }
        return l === r ? Cs(N) : js(N), N;
      }
    }
    function Rs(l, f, m) {
      return ur(l, f, m, !0);
    }
    function $s(l, f, m) {
      return ur(l, f, m, !1);
    }
    var As = $s, Ds = Rs;
    Ue.Fragment = r, Ue.jsx = As, Ue.jsxs = Ds;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Lt.exports = Fs() : Lt.exports = qs();
var w = Lt.exports, Mt, st = Ms;
if (process.env.NODE_ENV === "production")
  Mt = st.createRoot, st.hydrateRoot;
else {
  var mr = st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Mt = function(s, e) {
    mr.usingClientEntryPoint = !0;
    try {
      return st.createRoot(s, e);
    } finally {
      mr.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ws = {
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
const Bs = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ht = (s, e) => {
  const t = Ls(
    ({
      color: r = "currentColor",
      size: n = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: c,
      ...h
    }, u) => hr(
      "svg",
      {
        ref: u,
        ...Ws,
        width: n,
        height: n,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(n) : i,
        className: ["lucide", `lucide-${Bs(s)}`, o].join(" "),
        ...h
      },
      [
        ...e.map(([d, g]) => hr(d, g)),
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
const Hs = ht("Archive", [
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
const Ys = ht("MessageSquarePlus", [
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
const zs = ht("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = ht("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Gs = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ae).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
};
class zt extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
}
class Vs extends zt {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class Ks extends zt {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Qs extends zt {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var Ut;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(Ut || (Ut = {}));
var Xs = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
class Zs {
  constructor(e, { headers: t = {}, customFetch: r, region: n = Ut.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = Gs(r);
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
    return Xs(this, void 0, void 0, function* () {
      try {
        const { headers: n, method: i, body: a } = t;
        let o = {}, { region: c } = t;
        c || (c = this.region), c && c !== "any" && (o["x-region"] = c);
        let h;
        a && (n && !Object.prototype.hasOwnProperty.call(n, "Content-Type") || !n) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", h = a) : typeof a == "string" ? (o["Content-Type"] = "text/plain", h = a) : typeof FormData < "u" && a instanceof FormData ? h = a : (o["Content-Type"] = "application/json", h = JSON.stringify(a)));
        const u = yield this.fetch(`${this.url}/${e}`, {
          method: i || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), n),
          body: h
        }).catch((b) => {
          throw new Vs(b);
        }), d = u.headers.get("x-relay-error");
        if (d && d === "true")
          throw new Ks(u);
        if (!u.ok)
          throw new Qs(u);
        let g = ((r = u.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), p;
        return g === "application/json" ? p = yield u.json() : g === "application/octet-stream" ? p = yield u.blob() : g === "text/event-stream" ? p = u : g === "multipart/form-data" ? p = yield u.formData() : p = yield u.text(), { data: p, error: null };
      } catch (n) {
        return { data: null, error: n };
      }
    });
  }
}
var z = {}, Jt = {}, dt = {}, Ve = {}, ft = {}, gt = {}, en = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, $e = en();
const tn = $e.fetch, Ur = $e.fetch.bind($e), Fr = $e.Headers, rn = $e.Request, sn = $e.Response, Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Fr,
  Request: rn,
  Response: sn,
  default: Ur,
  fetch: tn
}, Symbol.toStringTag, { value: "Module" })), nn = /* @__PURE__ */ Us(Ae);
var mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
class an extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
}
mt.default = an;
var qr = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(gt, "__esModule", { value: !0 });
const on = qr(nn), cn = qr(mt);
let ln = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = on.default : this.fetch = fetch;
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
      let h = null, u = null, d = null, g = i.status, p = i.statusText;
      if (i.ok) {
        if (this.method !== "HEAD") {
          const A = await i.text();
          A === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? u = A : u = JSON.parse(A));
        }
        const _ = (a = this.headers.Prefer) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), T = (o = i.headers.get("content-range")) === null || o === void 0 ? void 0 : o.split("/");
        _ && T && T.length > 1 && (d = parseInt(T[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(u) && (u.length > 1 ? (h = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, u = null, d = null, g = 406, p = "Not Acceptable") : u.length === 1 ? u = u[0] : u = null);
      } else {
        const _ = await i.text();
        try {
          h = JSON.parse(_), Array.isArray(h) && i.status === 404 && (u = [], h = null, g = 200, p = "OK");
        } catch {
          i.status === 404 && _ === "" ? (g = 204, p = "No Content") : h = {
            message: _
          };
        }
        if (h && this.isMaybeSingle && (!((c = h == null ? void 0 : h.details) === null || c === void 0) && c.includes("0 rows")) && (h = null, g = 200, p = "OK"), h && this.shouldThrowOnError)
          throw new cn.default(h);
      }
      return {
        error: h,
        data: u,
        count: d,
        status: g,
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
gt.default = ln;
var un = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(ft, "__esModule", { value: !0 });
const hn = un(gt);
let dn = class extends hn.default {
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
    ].filter(Boolean).join("|"), h = (o = this.headers.Accept) !== null && o !== void 0 ? o : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${h}"; options=${c};`, a === "json" ? this : this;
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
ft.default = dn;
var fn = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Ve, "__esModule", { value: !0 });
const gn = fn(ft);
let mn = class extends gn.default {
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
Ve.default = mn;
var pn = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(dt, "__esModule", { value: !0 });
const Fe = pn(Ve);
let vn = class {
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
    return this.url.searchParams.set("select", a), r && (this.headers.Prefer = `count=${r}`), new Fe.default({
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
    return new Fe.default({
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
      const c = e.reduce((h, u) => h.concat(Object.keys(u)), []);
      if (c.length > 0) {
        const h = [...new Set(c)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", h.join(","));
      }
    }
    return new Fe.default({
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
    return this.headers.Prefer && n.push(this.headers.Prefer), t && n.push(`count=${t}`), this.headers.Prefer = n.join(","), new Fe.default({
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
    return e && r.push(`count=${e}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new Fe.default({
      method: t,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
dt.default = vn;
var pt = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.version = void 0;
vt.version = "0.0.0-automated";
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.DEFAULT_HEADERS = void 0;
const yn = vt;
pt.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${yn.version}` };
var Wr = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(Jt, "__esModule", { value: !0 });
const _n = Wr(dt), wn = Wr(Ve), bn = pt;
let kn = class Br {
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
    this.url = e, this.headers = Object.assign(Object.assign({}, bn.DEFAULT_HEADERS), t), this.schemaName = r, this.fetch = n;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new _n.default(t, {
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
    return new Br(this.url, {
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
    r || n ? (a = r ? "HEAD" : "GET", Object.entries(t).filter(([u, d]) => d !== void 0).map(([u, d]) => [u, Array.isArray(d) ? `{${d.join(",")}}` : `${d}`]).forEach(([u, d]) => {
      o.searchParams.append(u, d);
    })) : (a = "POST", c = t);
    const h = Object.assign({}, this.headers);
    return i && (h.Prefer = `count=${i}`), new wn.default({
      method: a,
      url: o,
      headers: h,
      schema: this.schemaName,
      body: c,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Jt.default = kn;
var De = X && X.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(z, "__esModule", { value: !0 });
z.PostgrestError = z.PostgrestBuilder = z.PostgrestTransformBuilder = z.PostgrestFilterBuilder = z.PostgrestQueryBuilder = z.PostgrestClient = void 0;
const Hr = De(Jt);
z.PostgrestClient = Hr.default;
const Yr = De(dt);
z.PostgrestQueryBuilder = Yr.default;
const zr = De(Ve);
z.PostgrestFilterBuilder = zr.default;
const Jr = De(ft);
z.PostgrestTransformBuilder = Jr.default;
const Gr = De(gt);
z.PostgrestBuilder = Gr.default;
const Vr = De(mt);
z.PostgrestError = Vr.default;
var Sn = z.default = {
  PostgrestClient: Hr.default,
  PostgrestQueryBuilder: Yr.default,
  PostgrestFilterBuilder: zr.default,
  PostgrestTransformBuilder: Jr.default,
  PostgrestBuilder: Gr.default,
  PostgrestError: Vr.default
};
const {
  PostgrestClient: En,
  PostgrestQueryBuilder: po,
  PostgrestFilterBuilder: vo,
  PostgrestTransformBuilder: yo,
  PostgrestBuilder: _o
} = Sn, Tn = "2.10.7", On = { "X-Client-Info": `realtime-js/${Tn}` }, xn = "1.0.0", Kr = 1e4, Pn = 1e3;
var Re;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(Re || (Re = {}));
var J;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(J || (J = {}));
var ee;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(ee || (ee = {}));
var Ft;
(function(s) {
  s.websocket = "websocket";
})(Ft || (Ft = {}));
var ve;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(ve || (ve = {}));
class jn {
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
    const h = JSON.parse(r.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: o, event: c, payload: h };
  }
}
class Qr {
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
var $;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})($ || ($ = {}));
const pr = (s, e, t = {}) => {
  var r;
  const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return Object.keys(e).reduce((i, a) => (i[a] = Cn(a, s, e, n), i), {});
}, Cn = (s, e, t, r) => {
  const n = e.find((o) => o.name === s), i = n == null ? void 0 : n.type, a = t[s];
  return i && !r.includes(i) ? Xr(i, a) : qt(a);
}, Xr = (s, e) => {
  if (s.charAt(0) === "_") {
    const t = s.slice(1, s.length);
    return Dn(e, t);
  }
  switch (s) {
    case $.bool:
      return Rn(e);
    case $.float4:
    case $.float8:
    case $.int2:
    case $.int4:
    case $.int8:
    case $.numeric:
    case $.oid:
      return $n(e);
    case $.json:
    case $.jsonb:
      return An(e);
    case $.timestamp:
      return In(e);
    case $.abstime:
    case $.date:
    case $.daterange:
    case $.int4range:
    case $.int8range:
    case $.money:
    case $.reltime:
    case $.text:
    case $.time:
    case $.timestamptz:
    case $.timetz:
    case $.tsrange:
    case $.tstzrange:
      return qt(e);
    default:
      return qt(e);
  }
}, qt = (s) => s, Rn = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, $n = (s) => {
  if (typeof s == "string") {
    const e = parseFloat(s);
    if (!Number.isNaN(e))
      return e;
  }
  return s;
}, An = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), s;
    }
  return s;
}, Dn = (s, e) => {
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
    return i.map((o) => Xr(e, o));
  }
  return s;
}, In = (s) => typeof s == "string" ? s.replace(" ", "T") : s, Zr = (s) => {
  let e = s;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Rt {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, r = {}, n = Kr) {
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
var vr;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(vr || (vr = {}));
class Ye {
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
      this.joinRef = this.channel._joinRef(), this.state = Ye.syncState(this.state, n, i, a), this.pendingDiffs.forEach((c) => {
        this.state = Ye.syncDiff(this.state, c, i, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(r.diff, {}, (n) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = Ye.syncDiff(this.state, n, i, a), o());
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
    return this.map(i, (h, u) => {
      a[h] || (c[h] = u);
    }), this.map(a, (h, u) => {
      const d = i[h];
      if (d) {
        const g = u.map((T) => T.presence_ref), p = d.map((T) => T.presence_ref), b = u.filter((T) => p.indexOf(T.presence_ref) < 0), _ = d.filter((T) => g.indexOf(T.presence_ref) < 0);
        b.length > 0 && (o[h] = b), _.length > 0 && (c[h] = _);
      } else
        o[h] = u;
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
      var h;
      const u = (h = e[o]) !== null && h !== void 0 ? h : [];
      if (e[o] = this.cloneDeep(c), u.length > 0) {
        const d = e[o].map((p) => p.presence_ref), g = u.filter((p) => d.indexOf(p.presence_ref) < 0);
        e[o].unshift(...g);
      }
      r(o, u, c);
    }), this.map(a, (o, c) => {
      let h = e[o];
      if (!h)
        return;
      const u = c.map((d) => d.presence_ref);
      h = h.filter((d) => u.indexOf(d.presence_ref) < 0), e[o] = h, n(o, h, c), h.length === 0 && delete e[o];
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
var yr;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(yr || (yr = {}));
var _r;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(_r || (_r = {}));
var wr;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(wr || (wr = {}));
class Gt {
  constructor(e, t = { config: {} }, r) {
    this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.state = J.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Rt(this, ee.join, this.params, this.timeout), this.rejoinTimer = new Qr(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = J.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((n) => n.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = J.closed, this.socket._remove(this);
    }), this._onError((n) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, n), this.state = J.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = J.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(ee.reply, {}, (n, i) => {
      this._trigger(this._replyEventName(i), n);
    }), this.presence = new Ye(this), this.broadcastEndpointURL = Zr(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var r, n;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: i, presence: a, private: o } } = this.params;
      this._onError((u) => e && e("CHANNEL_ERROR", u)), this._onClose(() => e && e("CLOSED"));
      const c = {}, h = {
        broadcast: i,
        presence: a,
        postgres_changes: (n = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((u) => u.filter)) !== null && n !== void 0 ? n : [],
        private: o
      };
      this.socket.accessToken && (c.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({ config: h }, c)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", ({ postgres_changes: u }) => {
        var d;
        if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), u === void 0) {
          e && e("SUBSCRIBED");
          return;
        } else {
          const g = this.bindings.postgres_changes, p = (d = g == null ? void 0 : g.length) !== null && d !== void 0 ? d : 0, b = [];
          for (let _ = 0; _ < p; _++) {
            const T = g[_], { filter: { event: A, schema: E, table: B, filter: q } } = T, F = u && u[_];
            if (F && F.event === A && F.schema === E && F.table === B && F.filter === q)
              b.push(Object.assign(Object.assign({}, T), { id: F.id }));
            else {
              this.unsubscribe(), e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = b, e && e("SUBSCRIBED");
          return;
        }
      }).receive("error", (u) => {
        e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(u).join(", ") || "error")));
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
        const h = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((c = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || c === void 0) && c.ack) && i("ok"), h.receive("ok", () => i("ok")), h.receive("error", () => i("error")), h.receive("timeout", () => i("timed out"));
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
    this.state = J.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(ee.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((r) => {
      const n = new Rt(this, ee.leave, {}, e);
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
    let n = new Rt(this, e, t, r);
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
    const a = e.toLocaleLowerCase(), { close: o, error: c, leave: h, join: u } = ee;
    if (r && [o, c, h, u].indexOf(a) >= 0 && r !== this._joinRef())
      return;
    let g = this._onMessage(a, t, r);
    if (t && !g)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (n = this.bindings.postgres_changes) === null || n === void 0 || n.filter((p) => {
      var b, _, T;
      return ((b = p.filter) === null || b === void 0 ? void 0 : b.event) === "*" || ((T = (_ = p.filter) === null || _ === void 0 ? void 0 : _.event) === null || T === void 0 ? void 0 : T.toLocaleLowerCase()) === a;
    }).map((p) => p.callback(g, r)) : (i = this.bindings[a]) === null || i === void 0 || i.filter((p) => {
      var b, _, T, A, E, B;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in p) {
          const q = p.id, F = (b = p.filter) === null || b === void 0 ? void 0 : b.event;
          return q && ((_ = t.ids) === null || _ === void 0 ? void 0 : _.includes(q)) && (F === "*" || (F == null ? void 0 : F.toLocaleLowerCase()) === ((T = t.data) === null || T === void 0 ? void 0 : T.type.toLocaleLowerCase()));
        } else {
          const q = (E = (A = p == null ? void 0 : p.filter) === null || A === void 0 ? void 0 : A.event) === null || E === void 0 ? void 0 : E.toLocaleLowerCase();
          return q === "*" || q === ((B = t == null ? void 0 : t.event) === null || B === void 0 ? void 0 : B.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === a;
    }).map((p) => {
      if (typeof g == "object" && "ids" in g) {
        const b = g.data, { schema: _, table: T, commit_timestamp: A, type: E, errors: B } = b;
        g = Object.assign(Object.assign({}, {
          schema: _,
          table: T,
          commit_timestamp: A,
          eventType: E,
          new: {},
          old: {},
          errors: B
        }), this._getPayloadRecords(b));
      }
      p.callback(g, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === J.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === J.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === J.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === J.leaving;
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
      return !(((i = n.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && Gt.isEqual(n.filter, t));
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
    this._on(ee.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(ee.error, {}, (t) => e(t));
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
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = J.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = pr(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = pr(e.columns, e.old_record)), t;
  }
}
const Nn = () => {
}, Ln = typeof WebSocket < "u", Mn = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Un {
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
    this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = On, this.params = {}, this.timeout = Kr, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Nn, this.conn = null, this.sendBuffer = [], this.serializer = new jn(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this._resolveFetch = (i) => {
      let a;
      return i ? a = i : typeof fetch > "u" ? a = (...o) => Promise.resolve().then(() => Ae).then(({ default: c }) => c(...o)) : a = fetch, (...o) => a(...o);
    }, this.endPoint = `${e}/${Ft.websocket}`, this.httpEndpoint = Zr(e), t != null && t.transport ? this.transport = t.transport : this.transport = null, t != null && t.params && (this.params = t.params), t != null && t.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t != null && t.timeout && (this.timeout = t.timeout), t != null && t.logger && (this.logger = t.logger), t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const n = (r = t == null ? void 0 : t.params) === null || r === void 0 ? void 0 : r.apikey;
    if (n && (this.accessToken = n, this.apiKey = n), this.reconnectAfterMs = t != null && t.reconnectAfterMs ? t.reconnectAfterMs : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = t != null && t.encode ? t.encode : (i, a) => a(JSON.stringify(i)), this.decode = t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new Qr(async () => {
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
      if (Ln) {
        this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
        return;
      }
      this.conn = new Fn(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-CnrrmNga.js").then((e) => e.b).then(({ default: e }) => {
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
      case Re.connecting:
        return ve.Connecting;
      case Re.open:
        return ve.Open;
      case Re.closing:
        return ve.Closing;
      default:
        return ve.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === ve.Open;
  }
  channel(e, t = { config: {} }) {
    const r = new Gt(`realtime:${e}`, t, this);
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
      e && t.updateJoinPayload({ access_token: e }), t.joinedOnce && t._isJoined() && t._push(ee.access_token, { access_token: e });
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
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: xn }));
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
    this.channels.forEach((e) => e._trigger(ee.error));
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
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(Pn, "hearbeat timeout");
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
      const r = new Blob([Mn], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
}
class Fn {
  constructor(e, t, r) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = Re.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = r.close;
  }
}
class Vt extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function U(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
class qn extends Vt {
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
class Wt extends Vt {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var Wn = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
const es = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ae).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, Bn = () => Wn(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Ae)).Response : Response;
}), Bt = (s) => {
  if (Array.isArray(s))
    return s.map((t) => Bt(t));
  if (typeof s == "function" || s !== Object(s))
    return s;
  const e = {};
  return Object.entries(s).forEach(([t, r]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = Bt(r);
  }), e;
};
var _e = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
const $t = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Hn = (s, e, t) => _e(void 0, void 0, void 0, function* () {
  const r = yield Bn();
  s instanceof r && !(t != null && t.noResolveJson) ? s.json().then((n) => {
    e(new qn($t(n), s.status || 500));
  }).catch((n) => {
    e(new Wt($t(n), n));
  }) : e(new Wt($t(s), s));
}), Yn = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r && (n.body = JSON.stringify(r)), Object.assign(Object.assign({}, n), t));
};
function Ke(s, e, t, r, n, i) {
  return _e(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      s(t, Yn(e, r, n, i)).then((c) => {
        if (!c.ok)
          throw c;
        return r != null && r.noResolveJson ? c : c.json();
      }).then((c) => a(c)).catch((c) => Hn(c, o, r));
    });
  });
}
function lt(s, e, t, r) {
  return _e(this, void 0, void 0, function* () {
    return Ke(s, "GET", e, t, r);
  });
}
function ce(s, e, t, r, n) {
  return _e(this, void 0, void 0, function* () {
    return Ke(s, "POST", e, r, n, t);
  });
}
function zn(s, e, t, r, n) {
  return _e(this, void 0, void 0, function* () {
    return Ke(s, "PUT", e, r, n, t);
  });
}
function Jn(s, e, t, r) {
  return _e(this, void 0, void 0, function* () {
    return Ke(s, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), r);
  });
}
function ts(s, e, t, r, n) {
  return _e(this, void 0, void 0, function* () {
    return Ke(s, "DELETE", e, r, n, t);
  });
}
var Y = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
const Gn = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, br = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Vn {
  constructor(e, t = {}, r, n) {
    this.url = e, this.headers = t, this.bucketId = r, this.fetch = es(n);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, r, n) {
    return Y(this, void 0, void 0, function* () {
      try {
        let i;
        const a = Object.assign(Object.assign({}, br), n);
        let o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        const c = a.metadata;
        typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", a.cacheControl), c && i.append("metadata", this.encodeMetadata(c)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.append("cacheControl", a.cacheControl), c && i.append("metadata", this.encodeMetadata(c))) : (i = r, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, c && (o["x-metadata"] = this.toBase64(this.encodeMetadata(c)))), n != null && n.headers && (o = Object.assign(Object.assign({}, o), n.headers));
        const h = this._removeEmptyFolders(t), u = this._getFinalPath(h), d = yield this.fetch(`${this.url}/object/${u}`, Object.assign({ method: e, body: i, headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {})), g = yield d.json();
        return d.ok ? {
          data: { path: h, id: g.Id, fullPath: g.Key },
          error: null
        } : { data: null, error: g };
      } catch (i) {
        if (U(i))
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
    return Y(this, void 0, void 0, function* () {
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
    return Y(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), a = this._getFinalPath(i), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", t);
      try {
        let c;
        const h = Object.assign({ upsert: br.upsert }, n), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(h.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (c = new FormData(), c.append("cacheControl", h.cacheControl), c.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (c = r, c.append("cacheControl", h.cacheControl)) : (c = r, u["cache-control"] = `max-age=${h.cacheControl}`, u["content-type"] = h.contentType);
        const d = yield this.fetch(o.toString(), {
          method: "PUT",
          body: c,
          headers: u
        }), g = yield d.json();
        return d.ok ? {
          data: { path: i, fullPath: g.Key },
          error: null
        } : { data: null, error: g };
      } catch (c) {
        if (U(c))
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
    return Y(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const n = Object.assign({}, this.headers);
        t != null && t.upsert && (n["x-upsert"] = "true");
        const i = yield ce(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: n }), a = new URL(this.url + i.url), o = a.searchParams.get("token");
        if (!o)
          throw new Vt("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: o }, error: null };
      } catch (r) {
        if (U(r))
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
    return Y(this, void 0, void 0, function* () {
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
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield ce(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (U(n))
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
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield ce(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (n) {
        if (U(n))
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
    return Y(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e), i = yield ce(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({ expiresIn: t }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const a = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${a}`) }, { data: i, error: null };
      } catch (n) {
        if (U(n))
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
    return Y(this, void 0, void 0, function* () {
      try {
        const n = yield ce(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: n.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${i}`) : null })),
          error: null
        };
      } catch (n) {
        if (U(n))
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
    return Y(this, void 0, void 0, function* () {
      const n = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), a = i ? `?${i}` : "";
      try {
        const o = this._getFinalPath(e);
        return { data: yield (yield lt(this.fetch, `${this.url}/${n}/${o}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (o) {
        if (U(o))
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
    return Y(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const r = yield lt(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: Bt(r), error: null };
      } catch (r) {
        if (U(r))
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
    return Y(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield Jn(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (U(r) && r instanceof Wt) {
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
    let h = n.join("&");
    return h !== "" && (h = `?${h}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${h}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield ts(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (U(t))
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
    return Y(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, Gn), t), { prefix: e || "" });
        return { data: yield ce(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, { headers: this.headers }, r), error: null };
      } catch (n) {
        if (U(n))
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
const Kn = "2.7.1", Qn = { "X-Client-Info": `storage-js/${Kn}` };
var xe = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
class Xn {
  constructor(e, t = {}, r) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Qn), t), this.fetch = es(r);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield lt(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (U(e))
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
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield lt(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (U(t))
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
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield ce(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (U(r))
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
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield zn(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (U(r))
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
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield ce(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (U(t))
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
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield ts(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class Zn extends Xn {
  constructor(e, t = {}, r) {
    super(e, t, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Vn(this.url, this.headers, e, this.fetch);
  }
}
const ei = "2.46.1";
let He = "";
typeof Deno < "u" ? He = "deno" : typeof document < "u" ? He = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? He = "react-native" : He = "node";
const ti = { "X-Client-Info": `supabase-js-${He}/${ei}` }, ri = {
  headers: ti
}, si = {
  schema: "public"
}, ni = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, ii = {};
var ai = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
const oi = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = Ur : e = fetch, (...t) => e(...t);
}, ci = () => typeof Headers > "u" ? Fr : Headers, li = (s, e, t) => {
  const r = oi(t), n = ci();
  return (i, a) => ai(void 0, void 0, void 0, function* () {
    var o;
    const c = (o = yield e()) !== null && o !== void 0 ? o : s;
    let h = new n(a == null ? void 0 : a.headers);
    return h.has("apikey") || h.set("apikey", s), h.has("Authorization") || h.set("Authorization", `Bearer ${c}`), r(i, Object.assign(Object.assign({}, a), { headers: h }));
  });
};
var ui = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
function hi(s) {
  return s.replace(/\/$/, "");
}
function di(s, e) {
  const { db: t, auth: r, realtime: n, global: i } = s, { db: a, auth: o, realtime: c, global: h } = e, u = {
    db: Object.assign(Object.assign({}, a), t),
    auth: Object.assign(Object.assign({}, o), r),
    realtime: Object.assign(Object.assign({}, c), n),
    global: Object.assign(Object.assign({}, h), i),
    accessToken: () => ui(this, void 0, void 0, function* () {
      return "";
    })
  };
  return s.accessToken ? u.accessToken = s.accessToken : delete u.accessToken, u;
}
const rs = "2.65.1", fi = "http://localhost:9999", gi = "supabase.auth.token", mi = { "X-Client-Info": `gotrue-js/${rs}` }, kr = 10, Ht = "X-Supabase-Api-Version", ss = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
function pi(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function vi() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
    const e = Math.random() * 16 | 0;
    return (s == "x" ? e : e & 3 | 8).toString(16);
  });
}
const Z = () => typeof document < "u", ge = {
  tested: !1,
  writable: !1
}, ze = () => {
  if (!Z())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (ge.tested)
    return ge.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), ge.tested = !0, ge.writable = !0;
  } catch {
    ge.tested = !0, ge.writable = !1;
  }
  return ge.writable;
};
function At(s) {
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
const ns = (s) => {
  let e;
  return s ? e = s : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Ae).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, yi = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", is = async (s, e, t) => {
  await s.setItem(e, JSON.stringify(t));
}, nt = async (s, e) => {
  const t = await s.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, it = async (s, e) => {
  await s.removeItem(e);
};
function _i(s) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let t = "", r, n, i, a, o, c, h, u = 0;
  for (s = s.replace("-", "+").replace("_", "/"); u < s.length; )
    a = e.indexOf(s.charAt(u++)), o = e.indexOf(s.charAt(u++)), c = e.indexOf(s.charAt(u++)), h = e.indexOf(s.charAt(u++)), r = a << 2 | o >> 4, n = (o & 15) << 4 | c >> 2, i = (c & 3) << 6 | h, t = t + String.fromCharCode(r), c != 64 && n != 0 && (t = t + String.fromCharCode(n)), h != 64 && i != 0 && (t = t + String.fromCharCode(i));
  return t;
}
class yt {
  constructor() {
    this.promise = new yt.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
yt.promiseConstructor = Promise;
function Sr(s) {
  const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, t = s.split(".");
  if (t.length !== 3)
    throw new Error("JWT is not valid: not a JWT structure");
  if (!e.test(t[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = t[1];
  return JSON.parse(_i(r));
}
async function wi(s) {
  return await new Promise((e) => {
    setTimeout(() => e(null), s);
  });
}
function bi(s, e) {
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
function ki(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function Si() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, ki).join("");
}
async function Ei(s) {
  const t = new TextEncoder().encode(s), r = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(r);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
function Ti(s) {
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Oi(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const t = await Ei(s);
  return Ti(t);
}
async function Pe(s, e, t = !1) {
  const r = Si();
  let n = r;
  t && (n += "/PASSWORD_RECOVERY"), await is(s, `${e}-code-verifier`, n);
  const i = await Oi(r);
  return [i, r === i ? "plain" : "s256"];
}
const xi = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Pi(s) {
  const e = s.headers.get(Ht);
  if (!e || !e.match(xi))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class Kt extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
}
function S(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class ji extends Kt {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
}
function Ci(s) {
  return S(s) && s.name === "AuthApiError";
}
class as extends Kt {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class we extends Kt {
  constructor(e, t, r, n) {
    super(e, r, n), this.name = t, this.status = r;
  }
}
class ae extends we {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Ri(s) {
  return S(s) && s.name === "AuthSessionMissingError";
}
class Dt extends we {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class at extends we {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ot extends we {
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
class Er extends we {
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
class Yt extends we {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function It(s) {
  return S(s) && s.name === "AuthRetryableFetchError";
}
class Tr extends we {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
}
var $i = function(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
};
const me = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), Ai = [502, 503, 504];
async function Or(s) {
  var e;
  if (!yi(s))
    throw new Yt(me(s), 0);
  if (Ai.includes(s.status))
    throw new Yt(me(s), s.status);
  let t;
  try {
    t = await s.json();
  } catch (i) {
    throw new as(me(i), i);
  }
  let r;
  const n = Pi(s);
  if (n && n.getTime() >= ss["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new Tr(me(t), s.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new ae();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0))
    throw new Tr(me(t), s.status, t.weak_password.reasons);
  throw new ji(me(t), s.status || 500, r);
}
const Di = (s, e, t, r) => {
  const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(r), Object.assign(Object.assign({}, n), t));
};
async function x(s, e, t, r) {
  var n;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  i[Ht] || (i[Ht] = ss["2024-01-01"].name), r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const a = (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", c = await Ii(s, e, t + o, {
    headers: i,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(c) : { data: Object.assign({}, c), error: null };
}
async function Ii(s, e, t, r, n, i) {
  const a = Di(e, r, n, i);
  let o;
  try {
    o = await s(t, Object.assign({}, a));
  } catch (c) {
    throw console.error(c), new Yt(me(c), 0);
  }
  if (o.ok || await Or(o), r != null && r.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (c) {
    await Or(c);
  }
}
function oe(s) {
  var e;
  let t = null;
  Ui(s) && (t = Object.assign({}, s), s.expires_at || (t.expires_at = pi(s.expires_in)));
  const r = (e = s.user) !== null && e !== void 0 ? e : s;
  return { data: { session: t, user: r }, error: null };
}
function xr(s) {
  const e = oe(s);
  return !e.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = s.weak_password), e;
}
function le(s) {
  var e;
  return { data: { user: (e = s.user) !== null && e !== void 0 ? e : s }, error: null };
}
function Ni(s) {
  return { data: s, error: null };
}
function Li(s) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: n, verification_type: i } = s, a = $i(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
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
function Mi(s) {
  return s;
}
function Ui(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
var Fi = function(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
};
class qi {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    this.url = e, this.headers = t, this.fetch = ns(r), this.mfa = {
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
      return await x(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (S(r))
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
      return await x(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: le
      });
    } catch (r) {
      if (S(r))
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
      const { options: t } = e, r = Fi(e, ["options"]), n = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (n.new_email = r == null ? void 0 : r.newEmail, delete n.newEmail), await x(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: Li,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (S(t))
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
      return await x(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: le
      });
    } catch (t) {
      if (S(t))
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
      const h = { nextPage: null, lastPage: 0, total: 0 }, u = await x(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e == null ? void 0 : e.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Mi
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), g = (a = u.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, p = (c = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && c !== void 0 ? c : [];
      return p.length > 0 && (p.forEach((b) => {
        const _ = parseInt(b.split(";")[0].split("=")[1].substring(0, 1)), T = JSON.parse(b.split(";")[1].split("=")[1]);
        h[`${T}Page`] = _;
      }), h.total = parseInt(g)), { data: Object.assign(Object.assign({}, d), h), error: null };
    } catch (h) {
      if (S(h))
        return { data: { users: [] }, error: h };
      throw h;
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
      return await x(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: le
      });
    } catch (t) {
      if (S(t))
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
      return await x(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: le
      });
    } catch (r) {
      if (S(r))
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
      return await x(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: le
      });
    } catch (r) {
      if (S(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    try {
      const { data: t, error: r } = await x(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (S(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await x(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (S(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const Wi = {
  getItem: (s) => ze() ? globalThis.localStorage.getItem(s) : null,
  setItem: (s, e) => {
    ze() && globalThis.localStorage.setItem(s, e);
  },
  removeItem: (s) => {
    ze() && globalThis.localStorage.removeItem(s);
  }
};
function Pr(s = {}) {
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
function Bi() {
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
const je = {
  /**
   * @experimental
   */
  debug: !!(globalThis && ze() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class os extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Hi extends os {
}
async function Yi(s, e, t) {
  je.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), je.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
  }, e), await globalThis.navigator.locks.request(s, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (n) => {
    if (n) {
      je.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, n.name);
      try {
        return await t();
      } finally {
        je.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, n.name);
      }
    } else {
      if (e === 0)
        throw je.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new Hi(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
      if (je.debug)
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
Bi();
const zi = {
  url: fi,
  storageKey: gi,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: mi,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
}, qe = 30 * 1e3, jr = 3;
async function Cr(s, e, t) {
  return await t();
}
class Je {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, r;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = Je.nextInstanceID, Je.nextInstanceID += 1, this.instanceID > 0 && Z() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const n = Object.assign(Object.assign({}, zi), e);
    if (this.logDebugMessages = !!n.debug, typeof n.debug == "function" && (this.logger = n.debug), this.persistSession = n.persistSession, this.storageKey = n.storageKey, this.autoRefreshToken = n.autoRefreshToken, this.admin = new qi({
      url: n.url,
      headers: n.headers,
      fetch: n.fetch
    }), this.url = n.url, this.headers = n.headers, this.fetch = ns(n.fetch), this.lock = n.lock || Cr, this.detectSessionInUrl = n.detectSessionInUrl, this.flowType = n.flowType, this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader, n.lock ? this.lock = n.lock : Z() && (!((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) && t.locks) ? this.lock = Yi : this.lock = Cr, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? n.storage ? this.storage = n.storage : ze() ? this.storage = Wi : (this.memoryStorage = {}, this.storage = Pr(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Pr(this.memoryStorage)), Z() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${rs}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
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
      const e = Z() ? await this._isPKCEFlow() : !1;
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
      return S(e) ? { error: e } : {
        error: new as("Unexpected error during initialization", e)
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
      const i = await x(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: oe
      }), { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const c = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (i) {
      if (S(i))
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
        const { email: u, password: d, options: g } = e;
        let p = null, b = null;
        this.flowType === "pkce" && ([p, b] = await Pe(this.storage, this.storageKey)), i = await x(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: g == null ? void 0 : g.emailRedirectTo,
          body: {
            email: u,
            password: d,
            data: (t = g == null ? void 0 : g.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: g == null ? void 0 : g.captchaToken },
            code_challenge: p,
            code_challenge_method: b
          },
          xform: oe
        });
      } else if ("phone" in e) {
        const { phone: u, password: d, options: g } = e;
        i = await x(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data: (r = g == null ? void 0 : g.data) !== null && r !== void 0 ? r : {},
            channel: (n = g == null ? void 0 : g.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: g == null ? void 0 : g.captchaToken }
          },
          xform: oe
        });
      } else
        throw new at("You must provide either an email or phone number and a password");
      const { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const c = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (i) {
      if (S(i))
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
        t = await x(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: xr
        });
      } else if ("phone" in e) {
        const { phone: i, password: a, options: o } = e;
        t = await x(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: xr
        });
      } else
        throw new at("You must provide either an email or phone number and a password");
      const { data: r, error: n } = t;
      return n ? { data: { user: null, session: null }, error: n } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new Dt() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (S(t))
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
    const t = await nt(this.storage, `${this.storageKey}-code-verifier`), [r, n] = (t ?? "").split("/");
    try {
      const { data: i, error: a } = await x(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: oe
      });
      if (await it(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !i || !i.session || !i.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new Dt()
      } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), { data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: a });
    } catch (i) {
      if (S(i))
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
      const { options: t, provider: r, token: n, access_token: i, nonce: a } = e, o = await x(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: n,
          access_token: i,
          nonce: a,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: oe
      }), { data: c, error: h } = o;
      return h ? { data: { user: null, session: null }, error: h } : !c || !c.session || !c.user ? {
        data: { user: null, session: null },
        error: new Dt()
      } : (c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), { data: c, error: h });
    } catch (t) {
      if (S(t))
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
        let h = null, u = null;
        this.flowType === "pkce" && ([h, u] = await Pe(this.storage, this.storageKey));
        const { error: d } = await x(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (t = c == null ? void 0 : c.data) !== null && t !== void 0 ? t : {},
            create_user: (r = c == null ? void 0 : c.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
            code_challenge: h,
            code_challenge_method: u
          },
          redirectTo: c == null ? void 0 : c.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: d };
      }
      if ("phone" in e) {
        const { phone: o, options: c } = e, { data: h, error: u } = await x(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (n = c == null ? void 0 : c.data) !== null && n !== void 0 ? n : {},
            create_user: (i = c == null ? void 0 : c.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: c == null ? void 0 : c.captchaToken },
            channel: (a = c == null ? void 0 : c.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: h == null ? void 0 : h.message_id }, error: u };
      }
      throw new at("You must provide either an email or phone number.");
    } catch (o) {
      if (S(o))
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
      const { data: a, error: o } = await x(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: oe
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const c = a.session, h = a.user;
      return c != null && c.access_token && (await this._saveSession(c), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (n) {
      if (S(n))
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
      return this.flowType === "pkce" && ([i, a] = await Pe(this.storage, this.storageKey)), await x(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((n = e == null ? void 0 : e.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: i, code_challenge_method: a }),
        headers: this.headers,
        xform: Ni
      });
    } catch (i) {
      if (S(i))
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
          throw new ae();
        const { error: n } = await x(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: n };
      });
    } catch (e) {
      if (S(e))
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
        const { email: r, type: n, options: i } = e, { error: a } = await x(this.fetch, "POST", t, {
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
        const { phone: r, type: n, options: i } = e, { data: a, error: o } = await x(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new at("You must provide either an email or phone number and a type");
    } catch (t) {
      if (S(t))
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
      const t = await nt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (c, h, u) => (!a && h === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(c, h, u))
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
      return e ? await x(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: le
      }) : await this._useSession(async (t) => {
        var r, n, i;
        const { data: a, error: o } = t;
        if (o)
          throw o;
        return !(!((r = a.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new ae() } : await x(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = a.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: le
        });
      });
    } catch (t) {
      if (S(t))
        return Ri(t) && (await this._removeSession(), await it(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
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
          throw new ae();
        const a = n.session;
        let o = null, c = null;
        this.flowType === "pkce" && e.email != null && ([o, c] = await Pe(this.storage, this.storageKey));
        const { data: h, error: u } = await x(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: c }),
          jwt: a.access_token,
          xform: le
        });
        if (u)
          throw u;
        return a.user = h.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (r) {
      if (S(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(e) {
    return Sr(e);
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
        throw new ae();
      const t = Date.now() / 1e3;
      let r = t, n = !0, i = null;
      const a = Sr(e.access_token);
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
      if (S(t))
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
          throw new ae();
        const { session: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? { data: { user: null, session: null }, error: i } : n ? { data: { user: n.user, session: n }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (S(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e) {
    try {
      if (!Z())
        throw new ot("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new ot("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !e)
        throw new Er("Not a valid PKCE flow url.");
      const t = At(window.location.href);
      if (e) {
        if (!t.code)
          throw new Er("No code detected.");
        const { data: E, error: B } = await this._exchangeCodeForSession(t.code);
        if (B)
          throw B;
        const q = new URL(window.location.href);
        return q.searchParams.delete("code"), window.history.replaceState(window.history.state, "", q.toString()), { data: { session: E.session, redirectType: null }, error: null };
      }
      if (t.error || t.error_description || t.error_code)
        throw new ot(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      const { provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: a, expires_in: o, expires_at: c, token_type: h } = t;
      if (!i || !o || !a || !h)
        throw new ot("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), d = parseInt(o);
      let g = u + d;
      c && (g = parseInt(c));
      const p = g - u;
      p * 1e3 <= qe && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${d}s`);
      const b = g - d;
      u - b >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", b, g, u) : u - b < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", b, g, u);
      const { data: _, error: T } = await this._getUser(i);
      if (T)
        throw T;
      const A = {
        provider_token: r,
        provider_refresh_token: n,
        access_token: i,
        expires_in: d,
        expires_at: g,
        refresh_token: a,
        token_type: h,
        user: _.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: A, redirectType: t.type }, error: null };
    } catch (t) {
      if (S(t))
        return { data: { session: null, redirectType: null }, error: t };
      throw t;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const e = At(window.location.href);
    return !!(Z() && (e.access_token || e.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const e = At(window.location.href), t = await nt(this.storage, `${this.storageKey}-code-verifier`);
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
        if (o && !(Ci(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return e !== "others" && (await this._removeSession(), await it(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = vi(), r = {
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
    this.flowType === "pkce" && ([r, n] = await Pe(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await x(this.fetch, "POST", `${this.url}/recover`, {
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
      if (S(i))
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
      if (S(t))
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
        var a, o, c, h, u;
        const { data: d, error: g } = i;
        if (g)
          throw g;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
          skipBrowserRedirect: !0
        });
        return await x(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (u = (h = d.session) === null || h === void 0 ? void 0 : h.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (n)
        throw n;
      return Z() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (S(r))
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
        return await x(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (S(t))
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
      return await bi(async (n) => (n > 0 && await wi(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await x(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: oe
      })), (n, i) => {
        const a = 200 * Math.pow(2, n);
        return i && It(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - r < qe;
      });
    } catch (r) {
      if (this._debug(t, "error", r), S(r))
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
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), Z() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
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
      const r = await nt(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", r), !this._isValidSession(r)) {
        this._debug(t, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const n = Math.round(Date.now() / 1e3), i = ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) < n + kr;
      if (this._debug(t, `session has${i ? "" : " not"} expired with margin of ${kr}s`), i) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: a } = await this._callRefreshToken(r.refresh_token);
          a && (console.error(a), It(a) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
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
      throw new ae();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new yt();
      const { data: i, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!i.session)
        throw new ae();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const o = { session: i.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (i) {
      if (this._debug(n, "error", i), S(i)) {
        const a = { session: null, error: i };
        return It(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(a), a;
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
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await is(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await it(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      e && Z() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
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
    const e = setInterval(() => this._autoRefreshTokenTick(), qe);
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
              const n = Math.floor((r.expires_at * 1e3 - e) / qe);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${qe}ms, refresh threshold is ${jr} ticks`), n <= jr && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof os)
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
    if (this._debug("#_handleVisibilityChange()"), !Z() || !(window != null && window.addEventListener))
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
      const [i, a] = await Pe(this.storage, this.storageKey), o = new URLSearchParams({
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
        return i ? { data: null, error: i } : await x(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (S(t))
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
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: c, error: h } = await x(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return h ? { data: null, error: h } : (e.factorType === "totp" && (!((n = c == null ? void 0 : c.totp) === null || n === void 0) && n.qr_code) && (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`), { data: c, error: null });
      });
    } catch (t) {
      if (S(t))
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
          const { data: a, error: o } = await x(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return o ? { data: null, error: o } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: o });
        });
      } catch (t) {
        if (S(t))
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
          return i ? { data: null, error: i } : await x(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (r = n == null ? void 0 : n.session) === null || r === void 0 ? void 0 : r.access_token
          });
        });
      } catch (t) {
        if (S(t))
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
      ((r = (t = n.user.factors) === null || t === void 0 ? void 0 : t.filter((d) => d.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (c = "aal2");
      const u = a.amr || [];
      return { data: { currentLevel: o, nextLevel: c, currentAuthenticationMethods: u }, error: null };
    }));
  }
}
Je.nextInstanceID = 0;
const Ji = Je;
class Gi extends Ji {
  constructor(e) {
    super(e);
  }
}
var Vi = function(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(u) {
      try {
        h(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        h(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function h(u) {
      u.done ? i(u.value) : n(u.value).then(o, c);
    }
    h((r = r.apply(s, e || [])).next());
  });
};
class Ki {
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
    const o = hi(e);
    this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${o}/auth/v1`, this.storageUrl = `${o}/storage/v1`, this.functionsUrl = `${o}/functions/v1`;
    const c = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, h = {
      db: si,
      realtime: ii,
      auth: Object.assign(Object.assign({}, ni), { storageKey: c }),
      global: ri
    }, u = di(r ?? {}, h);
    this.storageKey = (n = u.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = u.global.headers) !== null && i !== void 0 ? i : {}, u.accessToken ? (this.accessToken = u.accessToken, this.auth = new Proxy({}, {
      get: (d, g) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(g)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = u.auth) !== null && a !== void 0 ? a : {}, this.headers, u.global.fetch), this.fetch = li(t, this._getAccessToken.bind(this), u.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, u.realtime)), this.rest = new En(`${o}/rest/v1`, {
      headers: this.headers,
      schema: u.db.schema,
      fetch: this.fetch
    }), u.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Zs(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new Zn(this.storageUrl, this.headers, this.fetch);
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
    return Vi(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (t = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, storageKey: i, flowType: a, lock: o, debug: c }, h, u) {
    var d;
    const g = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Gi({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, g), h),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      flowType: a,
      lock: o,
      debug: c,
      fetch: u,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (d = "Authorization" in this.headers) !== null && d !== void 0 ? d : !1
    });
  }
  _initRealtimeClient(e) {
    return new Un(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
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
const Qi = (s, e, t) => new Ki(s, e, t), Xi = "https://zozodfjzxzlwzkhmfhwh.supabase.co", Zi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvem9kZmp6eHpsd3praG1maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDM3MjMsImV4cCI6MjA0NzYxOTcyM30.ywmi4WD1fZN3hRu-krtGmY1-IYSJSODh1tKK4Ytt18Q", M = Qi(Xi, Zi);
function te(s) {
  const e = Object.prototype.toString.call(s);
  return s instanceof Date || typeof s == "object" && e === "[object Date]" ? new s.constructor(+s) : typeof s == "number" || e === "[object Number]" || typeof s == "string" || e === "[object String]" ? new Date(s) : /* @__PURE__ */ new Date(NaN);
}
function ye(s, e) {
  return s instanceof Date ? new s.constructor(e) : new Date(e);
}
const cs = 6048e5, ea = 864e5;
let ta = {};
function _t() {
  return ta;
}
function Ge(s, e) {
  var o, c, h, u;
  const t = _t(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : u.weekStartsOn) ?? 0, n = te(s), i = n.getDay(), a = (i < r ? 7 : 0) + i - r;
  return n.setDate(n.getDate() - a), n.setHours(0, 0, 0, 0), n;
}
function ut(s) {
  return Ge(s, { weekStartsOn: 1 });
}
function ls(s) {
  const e = te(s), t = e.getFullYear(), r = ye(s, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const n = ut(r), i = ye(s, 0);
  i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
  const a = ut(i);
  return e.getTime() >= n.getTime() ? t + 1 : e.getTime() >= a.getTime() ? t : t - 1;
}
function Rr(s) {
  const e = te(s);
  return e.setHours(0, 0, 0, 0), e;
}
function $r(s) {
  const e = te(s), t = new Date(
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
function ra(s, e) {
  const t = Rr(s), r = Rr(e), n = +t - $r(t), i = +r - $r(r);
  return Math.round((n - i) / ea);
}
function sa(s) {
  const e = ls(s), t = ye(s, 0);
  return t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0), ut(t);
}
function na(s) {
  return s instanceof Date || typeof s == "object" && Object.prototype.toString.call(s) === "[object Date]";
}
function ia(s) {
  if (!na(s) && typeof s != "number")
    return !1;
  const e = te(s);
  return !isNaN(Number(e));
}
function aa(s) {
  const e = te(s), t = ye(s, 0);
  return t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const oa = {
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
}, ca = (s, e, t) => {
  let r;
  const n = oa[s];
  return typeof n == "string" ? r = n : e === 1 ? r = n.one : r = n.other.replace("{{count}}", e.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Nt(s) {
  return (e = {}) => {
    const t = e.width ? String(e.width) : s.defaultWidth;
    return s.formats[t] || s.formats[s.defaultWidth];
  };
}
const la = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ua = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ha = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, da = {
  date: Nt({
    formats: la,
    defaultWidth: "full"
  }),
  time: Nt({
    formats: ua,
    defaultWidth: "full"
  }),
  dateTime: Nt({
    formats: ha,
    defaultWidth: "full"
  })
}, fa = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ga = (s, e, t, r) => fa[s];
function We(s) {
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
const ma = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, pa = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, va = {
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
}, ya = {
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
}, _a = {
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
}, wa = {
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
}, ba = (s, e) => {
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
}, ka = {
  ordinalNumber: ba,
  era: We({
    values: ma,
    defaultWidth: "wide"
  }),
  quarter: We({
    values: pa,
    defaultWidth: "wide",
    argumentCallback: (s) => s - 1
  }),
  month: We({
    values: va,
    defaultWidth: "wide"
  }),
  day: We({
    values: ya,
    defaultWidth: "wide"
  }),
  dayPeriod: We({
    values: _a,
    defaultWidth: "wide",
    formattingValues: wa,
    defaultFormattingWidth: "wide"
  })
};
function Be(s) {
  return (e, t = {}) => {
    const r = t.width, n = r && s.matchPatterns[r] || s.matchPatterns[s.defaultMatchWidth], i = e.match(n);
    if (!i)
      return null;
    const a = i[0], o = r && s.parsePatterns[r] || s.parsePatterns[s.defaultParseWidth], c = Array.isArray(o) ? Ea(o, (d) => d.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Sa(o, (d) => d.test(a))
    );
    let h;
    h = s.valueCallback ? s.valueCallback(c) : c, h = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(h)
    ) : h;
    const u = e.slice(a.length);
    return { value: h, rest: u };
  };
}
function Sa(s, e) {
  for (const t in s)
    if (Object.prototype.hasOwnProperty.call(s, t) && e(s[t]))
      return t;
}
function Ea(s, e) {
  for (let t = 0; t < s.length; t++)
    if (e(s[t]))
      return t;
}
function Ta(s) {
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
const Oa = /^(\d+)(th|st|nd|rd)?/i, xa = /\d+/i, Pa = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ja = {
  any: [/^b/i, /^(a|c)/i]
}, Ca = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ra = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $a = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Aa = {
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
}, Da = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ia = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Na = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, La = {
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
}, Ma = {
  ordinalNumber: Ta({
    matchPattern: Oa,
    parsePattern: xa,
    valueCallback: (s) => parseInt(s, 10)
  }),
  era: Be({
    matchPatterns: Pa,
    defaultMatchWidth: "wide",
    parsePatterns: ja,
    defaultParseWidth: "any"
  }),
  quarter: Be({
    matchPatterns: Ca,
    defaultMatchWidth: "wide",
    parsePatterns: Ra,
    defaultParseWidth: "any",
    valueCallback: (s) => s + 1
  }),
  month: Be({
    matchPatterns: $a,
    defaultMatchWidth: "wide",
    parsePatterns: Aa,
    defaultParseWidth: "any"
  }),
  day: Be({
    matchPatterns: Da,
    defaultMatchWidth: "wide",
    parsePatterns: Ia,
    defaultParseWidth: "any"
  }),
  dayPeriod: Be({
    matchPatterns: Na,
    defaultMatchWidth: "any",
    parsePatterns: La,
    defaultParseWidth: "any"
  })
}, Ua = {
  code: "en-US",
  formatDistance: ca,
  formatLong: da,
  formatRelative: ga,
  localize: ka,
  match: Ma,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fa(s) {
  const e = te(s);
  return ra(e, aa(e)) + 1;
}
function qa(s) {
  const e = te(s), t = +ut(e) - +sa(e);
  return Math.round(t / cs) + 1;
}
function us(s, e) {
  var u, d, g, p;
  const t = te(s), r = t.getFullYear(), n = _t(), i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((p = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = ye(s, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const o = Ge(a, e), c = ye(s, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const h = Ge(c, e);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= h.getTime() ? r : r - 1;
}
function Wa(s, e) {
  var o, c, h, u;
  const t = _t(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, n = us(s, e), i = ye(s, 0);
  return i.setFullYear(n, 0, r), i.setHours(0, 0, 0, 0), Ge(i, e);
}
function Ba(s, e) {
  const t = te(s), r = +Ge(t, e) - +Wa(t, e);
  return Math.round(r / cs) + 1;
}
function C(s, e) {
  const t = s < 0 ? "-" : "", r = Math.abs(s).toString().padStart(e, "0");
  return t + r;
}
const ie = {
  // Year
  y(s, e) {
    const t = s.getFullYear(), r = t > 0 ? t : 1 - t;
    return C(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(s, e) {
    const t = s.getMonth();
    return e === "M" ? String(t + 1) : C(t + 1, 2);
  },
  // Day of the month
  d(s, e) {
    return C(s.getDate(), e.length);
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
    return C(s.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(s, e) {
    return C(s.getHours(), e.length);
  },
  // Minute
  m(s, e) {
    return C(s.getMinutes(), e.length);
  },
  // Second
  s(s, e) {
    return C(s.getSeconds(), e.length);
  },
  // Fraction of second
  S(s, e) {
    const t = e.length, r = s.getMilliseconds(), n = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return C(n, e.length);
  }
}, Ce = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ar = {
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
    return ie.y(s, e);
  },
  // Local week-numbering year
  Y: function(s, e, t, r) {
    const n = us(s, r), i = n > 0 ? n : 1 - n;
    if (e === "YY") {
      const a = i % 100;
      return C(a, 2);
    }
    return e === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : C(i, e.length);
  },
  // ISO week-numbering year
  R: function(s, e) {
    const t = ls(s);
    return C(t, e.length);
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
    return C(t, e.length);
  },
  // Quarter
  Q: function(s, e, t) {
    const r = Math.ceil((s.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(r);
      case "QQ":
        return C(r, 2);
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
        return C(r, 2);
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
        return ie.M(s, e);
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
        return C(r + 1, 2);
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
    const n = Ba(s, r);
    return e === "wo" ? t.ordinalNumber(n, { unit: "week" }) : C(n, e.length);
  },
  // ISO week of year
  I: function(s, e, t) {
    const r = qa(s);
    return e === "Io" ? t.ordinalNumber(r, { unit: "week" }) : C(r, e.length);
  },
  // Day of the month
  d: function(s, e, t) {
    return e === "do" ? t.ordinalNumber(s.getDate(), { unit: "date" }) : ie.d(s, e);
  },
  // Day of year
  D: function(s, e, t) {
    const r = Fa(s);
    return e === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : C(r, e.length);
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
        return C(i, 2);
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
        return C(i, e.length);
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
        return C(n, e.length);
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
    switch (r === 12 ? n = Ce.noon : r === 0 ? n = Ce.midnight : n = r / 12 >= 1 ? "pm" : "am", e) {
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
    switch (r >= 17 ? n = Ce.evening : r >= 12 ? n = Ce.afternoon : r >= 4 ? n = Ce.morning : n = Ce.night, e) {
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
    return ie.h(s, e);
  },
  // Hour [0-23]
  H: function(s, e, t) {
    return e === "Ho" ? t.ordinalNumber(s.getHours(), { unit: "hour" }) : ie.H(s, e);
  },
  // Hour [0-11]
  K: function(s, e, t) {
    const r = s.getHours() % 12;
    return e === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : C(r, e.length);
  },
  // Hour [1-24]
  k: function(s, e, t) {
    let r = s.getHours();
    return r === 0 && (r = 24), e === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : C(r, e.length);
  },
  // Minute
  m: function(s, e, t) {
    return e === "mo" ? t.ordinalNumber(s.getMinutes(), { unit: "minute" }) : ie.m(s, e);
  },
  // Second
  s: function(s, e, t) {
    return e === "so" ? t.ordinalNumber(s.getSeconds(), { unit: "second" }) : ie.s(s, e);
  },
  // Fraction of second
  S: function(s, e) {
    return ie.S(s, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(s, e, t) {
    const r = s.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return Ir(r);
      case "XXXX":
      case "XX":
        return pe(r);
      case "XXXXX":
      case "XXX":
      default:
        return pe(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "x":
        return Ir(r);
      case "xxxx":
      case "xx":
        return pe(r);
      case "xxxxx":
      case "xxx":
      default:
        return pe(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Dr(r, ":");
      case "OOOO":
      default:
        return "GMT" + pe(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(s, e, t) {
    const r = s.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Dr(r, ":");
      case "zzzz":
      default:
        return "GMT" + pe(r, ":");
    }
  },
  // Seconds timestamp
  t: function(s, e, t) {
    const r = Math.trunc(s.getTime() / 1e3);
    return C(r, e.length);
  },
  // Milliseconds timestamp
  T: function(s, e, t) {
    const r = s.getTime();
    return C(r, e.length);
  }
};
function Dr(s, e = "") {
  const t = s > 0 ? "-" : "+", r = Math.abs(s), n = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(n) : t + String(n) + e + C(i, 2);
}
function Ir(s, e) {
  return s % 60 === 0 ? (s > 0 ? "-" : "+") + C(Math.abs(s) / 60, 2) : pe(s, e);
}
function pe(s, e = "") {
  const t = s > 0 ? "-" : "+", r = Math.abs(s), n = C(Math.trunc(r / 60), 2), i = C(r % 60, 2);
  return t + n + e + i;
}
const Nr = (s, e) => {
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
}, hs = (s, e) => {
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
}, Ha = (s, e) => {
  const t = s.match(/(P+)(p+)?/) || [], r = t[1], n = t[2];
  if (!n)
    return Nr(s, e);
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
  return i.replace("{{date}}", Nr(r, e)).replace("{{time}}", hs(n, e));
}, Ya = {
  p: hs,
  P: Ha
}, za = /^D+$/, Ja = /^Y+$/, Ga = ["D", "DD", "YY", "YYYY"];
function Va(s) {
  return za.test(s);
}
function Ka(s) {
  return Ja.test(s);
}
function Qa(s, e, t) {
  const r = Xa(s, e, t);
  if (console.warn(r), Ga.includes(s)) throw new RangeError(r);
}
function Xa(s, e, t) {
  const r = s[0] === "Y" ? "years" : "days of the month";
  return `Use \`${s.toLowerCase()}\` instead of \`${s}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Za = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, eo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, to = /^'([^]*?)'?$/, ro = /''/g, so = /[a-zA-Z]/;
function ct(s, e, t) {
  var u, d, g, p;
  const r = _t(), n = r.locale ?? Ua, i = r.firstWeekContainsDate ?? ((d = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = r.weekStartsOn ?? ((p = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : p.weekStartsOn) ?? 0, o = te(s);
  if (!ia(o))
    throw new RangeError("Invalid time value");
  let c = e.match(eo).map((b) => {
    const _ = b[0];
    if (_ === "p" || _ === "P") {
      const T = Ya[_];
      return T(b, n.formatLong);
    }
    return b;
  }).join("").match(Za).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const _ = b[0];
    if (_ === "'")
      return { isToken: !1, value: no(b) };
    if (Ar[_])
      return { isToken: !0, value: b };
    if (_.match(so))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + _ + "`"
      );
    return { isToken: !1, value: b };
  });
  n.localize.preprocessor && (c = n.localize.preprocessor(o, c));
  const h = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: n
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const _ = b.value;
    (Ka(_) || Va(_)) && Qa(_, e, String(s));
    const T = Ar[_[0]];
    return T(o, _, n.localize, h);
  }).join("");
}
function no(s) {
  const e = s.match(to);
  return e ? e[1].replace(ro, "'") : s;
}
const Lr = "chatbot_session_id", io = 180;
function ao({ domainId: s }) {
  const [e, t] = Q(!1), [r, n] = Q(""), [i, a] = Q([]), [o, c] = Q([]), [h, u] = Q("history"), [d, g] = Q(null), [p, b] = Q(!1), [_] = Q(/* @__PURE__ */ new Set()), [T, A] = Q(null), [E, B] = Q(null), q = dr(null), [F, ne] = Q(!1), be = dr(null);
  se(() => {
    if (!E) return;
    const y = M.channel("new-conversations").on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${E}`
      },
      (v) => {
        v.eventType === "INSERT" && c((D) => [v.new, ...D]);
      }
    ).subscribe();
    return () => {
      y.unsubscribe();
    };
  }, [E]), se(() => {
    if (!E) return;
    const y = M.channel("conversations-updates").on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "conversations",
        filter: `session_id=eq.${E}`
      },
      (v) => {
        v.eventType === "UPDATE" && (c(
          (D) => D.map(
            (L) => L.id === v.new.id ? { ...L, ...v.new } : L
          )
        ), v.new.id === d && ne(v.new.status === "archived"));
      }
    ).subscribe();
    return () => {
      y.unsubscribe();
    };
  }, [E, d]), se(() => {
    var y;
    (y = q.current) == null || y.scrollIntoView({ behavior: "smooth" });
  }, [i]);
  const wt = async () => {
    if (E)
      try {
        const { data: y, error: v } = await M.from("conversations").select("*").eq("session_id", E).order("last_message_at", { ascending: !1 });
        if (v) throw v;
        c(y || []);
      } catch (y) {
        console.error("Error loading conversation history:", y);
      }
  };
  se(() => {
    E && wt();
  }, [E]);
  const Qe = async () => {
    a([]), g(null), ne(!1), u("chat");
  }, bt = () => {
    u("history"), a([]), g(null), ne(!1);
  }, kt = async (y) => {
    try {
      g(y.id), ne(y.status === "archived");
      const { data: v } = await M.from("messages").select("*").eq("conversation_id", y.id).order("created_at", { ascending: !0 });
      v && (a(v), _.clear(), v.forEach((D) => _.add(D.id))), u("chat");
    } catch (v) {
      console.error("Error loading conversation:", v);
    }
  };
  se(() => {
    if (!d) return;
    const y = M.channel(`conversation-status:${d}`).on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "conversations",
        filter: `id=eq.${d}`
      },
      (v) => {
        v.new.status === "archived" ? (ne(!0), Ie()) : ne(!1);
      }
    ).subscribe();
    return () => {
      y.unsubscribe();
    };
  }, [d]), se(() => {
    be.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
  }, []);
  const Ie = () => {
    be.current && (be.current.currentTime = 0, be.current.play().catch((y) => {
      console.log("Error playing notification:", y);
    }));
  };
  se(() => {
    if (!d) {
      console.log("No conversation ID yet, skipping subscription");
      return;
    }
    console.log("Setting up subscription for conversation:", d);
    const y = M.channel("messages").on(
      "postgres_changes",
      {
        event: "*",
        // Listen to all events (INSERT, UPDATE, DELETE)
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${d}`
      },
      (v) => {
        if (console.log("Received real-time event:", v), v.eventType === "INSERT") {
          const D = v.new;
          console.log("New message:", D), a((L) => _.has(D.id) ? (console.log("Message already exists, skipping"), L) : (_.add(D.id), D.sender_type === "bot" && e && Ie(), console.log("Adding new message to state"), [...L, D]));
        }
      }
    );
    return y.subscribe((v) => {
      console.log("Subscription status:", v), v === "SUBSCRIBED" ? console.log("Successfully subscribed to messages") : v === "CLOSED" ? console.log("Subscription closed") : v === "CHANNEL_ERROR" && console.error("Subscription error");
    }), () => {
      console.log("Cleaning up subscription for conversation:", d), y.unsubscribe();
    };
  }, [d, e]), se(() => {
    (async () => {
      let v = localStorage.getItem(Lr);
      v || (v = window.crypto.randomUUID(), localStorage.setItem(Lr, v)), B(v), await G(v);
    })();
  }, []);
  const G = async (y) => {
    try {
      const { data: v, error: D } = await M.from("conversations").select("*").eq("session_id", y).eq("status", "active").order("last_message_at", { ascending: !1 }).limit(1).single();
      if (D) {
        if (D.code === "PGRST116")
          return;
        throw D;
      }
      const L = /* @__PURE__ */ new Date();
      if (L.setDate(L.getDate() - io), new Date(v.last_message_at) < L) {
        await M.from("conversations").update({ status: "archived" }).eq("id", v.id);
        return;
      }
      g(v.id);
      const { data: he } = await M.from("messages").select("*").eq("conversation_id", v.id).order("created_at", { ascending: !0 });
      if (he) {
        const de = he.filter((Ee) => _.has(Ee.id) ? !1 : (_.add(Ee.id), !0));
        a(de);
      }
    } catch (v) {
      console.error("Error loading existing conversation:", v), A("Failed to load conversation history");
    }
  }, re = async () => {
    try {
      const { data: { user: y } } = await M.auth.getUser();
      if (!y) {
        await M.auth.signInAnonymously();
        const { data: { user: L } } = await M.auth.getUser();
        if (!L) throw new Error("Failed to create anonymous session");
      }
      const { data: v, error: D } = await M.from("conversations").insert({
        domain_id: s,
        user_id: y.id,
        session_id: E,
        // Add the session_id
        last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
        status: "active"
      }).select().single();
      if (D) throw D;
      return v.id;
    } catch (y) {
      throw console.error("Error creating conversation:", y), y;
    }
  }, ue = async (y) => {
    try {
      b(!0), A(null);
      const { data: { user: v } } = await M.auth.getUser();
      if (!v) {
        await M.auth.signInAnonymously();
        const { data: { user: de } } = await M.auth.getUser();
        if (!de) throw new Error("Failed to create anonymous session");
      }
      const D = d || await re();
      d || g(D);
      const { data: L, error: he } = await M.from("messages").insert({
        conversation_id: D,
        user_id: v.id,
        content: y,
        sender_type: "user",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }).select().single();
      if (he) throw he;
      await M.from("conversations").update({ last_message_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", D), _.has(L.id) || (_.add(L.id), a((de) => [...de, L])), n("");
    } catch (v) {
      console.error("Error sending message:", v), A("Failed to send message. Please try again.");
    } finally {
      b(!1);
    }
  }, Xe = async (y) => {
    y.preventDefault(), !(!r.trim() || p) && await ue(r.trim());
  };
  se(() => {
    s && (async () => {
      try {
        const { data: v } = await M.from("domain_settings").select("*").eq("domain_id", s).single();
        ke(v ? {
          chatbotName: v.chatbot_name,
          greetingMessage: v.greeting_message || "Hello! How can I help you today?",
          color: v.primary_color || "#FF6B00",
          headerTextColor: v.header_text_color || "#000000"
        } : {
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      } catch (v) {
        console.error("Error fetching chatbot config:", v), ke({
          chatbotName: "Friendly Assistant",
          greetingMessage: "Hello! How can I help you today?",
          color: "#FF6B00",
          headerTextColor: "#000000"
        });
      }
    })();
  }, [s]);
  const [V, ke] = Q({
    chatbotName: "Chatbot",
    greetingMessage: "Hello! How can I help you today?",
    color: "#FF6B00",
    headerTextColor: "#000000"
  }), Se = {
    backgroundColor: V.color
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "fixed bottom-6 right-6 flex flex-col items-end z-[9999]", children: [
    e && /* @__PURE__ */ w.jsxs("div", { className: "mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "p-4 border-b flex items-center gap-3", style: { backgroundColor: V.color }, children: [
        /* @__PURE__ */ w.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ w.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ w.jsx("span", { className: "text-lg", children: "🤖" }) }),
          /* @__PURE__ */ w.jsx("div", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white", style: Se })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ w.jsx("h3", { className: "font-medium", style: { color: V.headerTextColor }, children: V.chatbotName }),
          /* @__PURE__ */ w.jsxs("p", { className: "text-sm", style: { color: V.headerTextColor }, children: [
            "from ",
            V.chatbotName
          ] })
        ] }),
        h === "chat" && /* @__PURE__ */ w.jsxs(
          "button",
          {
            onClick: bt,
            className: "flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm",
            style: { color: V.headerTextColor },
            children: [
              /* @__PURE__ */ w.jsx(zs, { className: "h-4 w-4" }),
              "History"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: "h-[400px] overflow-y-auto p-4 bg-gray-50 relative", children: h === "history" ? /* @__PURE__ */ w.jsxs("div", { className: "space-y-4 h-full", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ w.jsx("h3", { className: "font-medium text-gray-900", children: "Conversation History" }),
          /* @__PURE__ */ w.jsxs(
            "button",
            {
              onClick: Qe,
              className: "flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600",
              children: [
                /* @__PURE__ */ w.jsx(Ys, { className: "h-4 w-4" }),
                "Start New Chat"
              ]
            }
          )
        ] }),
        o.map((y) => /* @__PURE__ */ w.jsxs(
          "button",
          {
            onClick: () => kt(y),
            className: "w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200",
            children: [
              /* @__PURE__ */ w.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                /* @__PURE__ */ w.jsx("span", { className: "text-sm font-medium text-gray-900", children: ct(new Date(y.created_at), "PPP") }),
                /* @__PURE__ */ w.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${y.status === "archived" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600"}`, children: y.status === "archived" ? "Archived" : "Active" })
              ] }),
              /* @__PURE__ */ w.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Last message: ",
                ct(new Date(y.last_message_at), "p")
              ] })
            ]
          },
          y.id
        )),
        o.length === 0 && /* @__PURE__ */ w.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center", children: /* @__PURE__ */ w.jsx("p", { className: "mb-4", children: "No previous conversations found" }) })
      ] }) : /* @__PURE__ */ w.jsxs("div", { className: "space-y-4", children: [
        h === "chat" && /* @__PURE__ */ w.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ w.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
          /* @__PURE__ */ w.jsxs("div", { className: "bg-white p-3 rounded-lg shadow-sm max-w-[80%]", children: [
            /* @__PURE__ */ w.jsx("p", { className: "text-sm", children: V.greetingMessage }),
            /* @__PURE__ */ w.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: ct(/* @__PURE__ */ new Date(), "h:mm a") })
          ] })
        ] }),
        i.map((y) => /* @__PURE__ */ w.jsxs(
          "div",
          {
            className: `flex gap-2 ${y.sender_type === "user" ? "justify-end" : ""}`,
            children: [
              y.sender_type === "bot" && /* @__PURE__ */ w.jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center", children: "🤖" }),
              /* @__PURE__ */ w.jsxs(
                "div",
                {
                  className: `p-3 rounded-lg max-w-[80%] ${y.sender_type === "user" ? "bg-orange-500 text-white ml-auto" : "bg-white shadow-sm"}`,
                  children: [
                    /* @__PURE__ */ w.jsx("p", { className: "text-sm", children: y.content }),
                    /* @__PURE__ */ w.jsx("span", { className: `text-xs mt-1 block ${y.sender_type === "user" ? "text-orange-100" : "text-gray-500"}`, children: ct(new Date(y.created_at), "h:mm a") })
                  ]
                }
              ),
              y.sender_type === "user" && /* @__PURE__ */ w.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center", children: "👤" })
            ]
          },
          y.id
        )),
        F && /* @__PURE__ */ w.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ w.jsxs("div", { className: "bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ w.jsx(Hs, { className: "h-4 w-4" }),
          /* @__PURE__ */ w.jsx("span", { className: "text-sm", children: "This conversation has been archived" })
        ] }) }),
        /* @__PURE__ */ w.jsx("div", { ref: q })
      ] }) }),
      h === "chat" && /* @__PURE__ */ w.jsxs("form", { onSubmit: Xe, className: "p-4 border-t bg-white", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ w.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ w.jsx(
            "input",
            {
              type: "text",
              value: r,
              onChange: (y) => n(y.target.value),
              placeholder: "Type your message...",
              className: "w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed",
              style: { "--tw-ring-color": V.color },
              disabled: p || F
            }
          ) }),
          /* @__PURE__ */ w.jsx(
            "button",
            {
              type: "submit",
              disabled: !r.trim() || p || F,
              className: "p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
              style: Se,
              children: p ? /* @__PURE__ */ w.jsx("div", { className: "h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ w.jsx(Js, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ w.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ w.jsx(
          "a",
          {
            href: "https://corinna.ai",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-gray-600 hover:text-gray-700",
            children: "Powered by Corinna.ai"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ w.jsx(
      "button",
      {
        className: "w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg",
        style: Se,
        onClick: () => t(!e),
        children: e ? "×" : "💬"
      }
    )
  ] });
}
function oo() {
  const s = document.createElement("div");
  s.id = "chatbot-widget-root", document.body.appendChild(s);
  const e = window.CHATBOT_CONFIG || {};
  Mt(s).render(/* @__PURE__ */ w.jsx(ao, { domainId: e.domainId }));
}
oo();
export {
  uo as g
};
//# sourceMappingURL=main-A53ihzUW.js.map

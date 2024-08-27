"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/react-dom-18.3.1/cjs/react-dom.profiling.min.js
var require_react_dom_profiling_min = __commonJS({
  "node_modules/react-dom-18.3.1/cjs/react-dom.profiling.min.js"(exports2) {
    "use strict";
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
    var aa = require("react");
    var ba = require("scheduler");
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set();
    var ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var ja = Object.prototype.hasOwnProperty;
    var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var la = {};
    var ma = {};
    function na(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function oa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function pa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || oa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function qa(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var t = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      t[a] = new qa(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      t[b] = new qa(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      t[a] = new qa(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      t[a] = new qa(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      t[a] = new qa(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      t[a] = new qa(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      t[a] = new qa(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      t[a] = new qa(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      t[a] = new qa(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function ta(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        ta
      );
      t[b] = new qa(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, ta);
      t[b] = new qa(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, ta);
      t[b] = new qa(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      t[a] = new qa(a, 1, false, a.toLowerCase(), null, false, false);
    });
    t.xlinkHref = new qa("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      t[a] = new qa(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ua(a, b, c, d) {
      var e = t.hasOwnProperty(b) ? t[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) pa(b, c, e, d) && (c = null), d || null === e ? na(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var va = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var wa = Symbol.for("react.element");
    var xa = Symbol.for("react.portal");
    var ya = Symbol.for("react.fragment");
    var za = Symbol.for("react.strict_mode");
    var Aa = Symbol.for("react.profiler");
    var Ba = Symbol.for("react.provider");
    var Ca = Symbol.for("react.context");
    var Da = Symbol.for("react.forward_ref");
    var Ea = Symbol.for("react.suspense");
    var Fa = Symbol.for("react.suspense_list");
    var Ga = Symbol.for("react.memo");
    var Ha = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var Ia = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var u = Object.assign;
    var La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case xa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return u({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function $a(a, b) {
      b = b.checked;
      null != b && ua(a, "checked", b, false);
    }
    function ab(a, b) {
      $a(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function cb(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function bb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var db = Array.isArray;
    function eb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function fb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return u({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function gb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (db(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function hb(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function ib(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function jb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function kb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? jb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb;
    var nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = u({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    var Mb;
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (n) {
        this.onError(n);
      }
    }
    var Ob = false;
    var Pb = null;
    var Qb = false;
    var Rb = null;
    var Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ba.unstable_scheduleCallback;
    var bc = ba.unstable_cancelCallback;
    var cc = ba.unstable_shouldYield;
    var dc = ba.unstable_requestPaint;
    var A = ba.unstable_now;
    var ec = ba.unstable_getCurrentPriorityLevel;
    var fc = ba.unstable_ImmediatePriority;
    var gc = ba.unstable_UserBlockingPriority;
    var hc = ba.unstable_NormalPriority;
    var ic = ba.unstable_LowPriority;
    var jc = ba.unstable_IdlePriority;
    var kc = null;
    var lc = null;
    var B = null;
    var mc = "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;
    function nc(a, b) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        var c = 128 === (a.current.flags & 128);
        switch (b) {
          case 1:
            var d = fc;
            break;
          case 4:
            d = gc;
            break;
          case 16:
            d = hc;
            break;
          case 536870912:
            d = jc;
            break;
          default:
            d = hc;
        }
        lc.onCommitFiberRoot(kc, a, d, c);
      } catch (e) {
      }
    }
    function oc(a) {
      B = a;
    }
    function pc() {
      for (var a = /* @__PURE__ */ new Map(), b = 1, c = 0; 31 > c; c++) {
        var d = qc(b);
        a.set(b, d);
        b *= 2;
      }
      return a;
    }
    function rc() {
      null !== B && "function" === typeof B.markCommitStopped && B.markCommitStopped();
    }
    function sc(a) {
      null !== B && "function" === typeof B.markComponentRenderStarted && B.markComponentRenderStarted(a);
    }
    function tc() {
      null !== B && "function" === typeof B.markComponentRenderStopped && B.markComponentRenderStopped();
    }
    function uc(a) {
      null !== B && "function" === typeof B.markComponentLayoutEffectUnmountStarted && B.markComponentLayoutEffectUnmountStarted(a);
    }
    function vc() {
      null !== B && "function" === typeof B.markComponentLayoutEffectUnmountStopped && B.markComponentLayoutEffectUnmountStopped();
    }
    function wc(a) {
      null !== B && "function" === typeof B.markRenderStarted && B.markRenderStarted(a);
    }
    function xc() {
      null !== B && "function" === typeof B.markRenderStopped && B.markRenderStopped();
    }
    function yc(a, b) {
      null !== B && "function" === typeof B.markStateUpdateScheduled && B.markStateUpdateScheduled(a, b);
    }
    var Ac = Math.clz32 ? Math.clz32 : zc;
    var Bc = Math.log;
    var Cc = Math.LN2;
    function zc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (Bc(a) / Cc | 0) | 0;
    }
    function qc(a) {
      if (a & 1) return "Sync";
      if (a & 2) return "InputContinuousHydration";
      if (a & 4) return "InputContinuous";
      if (a & 8) return "DefaultHydration";
      if (a & 16) return "Default";
      if (a & 32) return "TransitionHydration";
      if (a & 4194240) return "Transition";
      if (a & 130023424) return "Retry";
      if (a & 134217728) return "SelectiveHydration";
      if (a & 268435456) return "IdleHydration";
      if (a & 536870912) return "Idle";
      if (a & 1073741824) return "Offscreen";
    }
    var Dc = 64;
    var Ec = 4194304;
    function Fc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function Gc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = Fc(h) : (f &= g, 0 !== f && (d = Fc(f)));
      } else g = c & ~e, 0 !== g ? d = Fc(g) : 0 !== f && (d = Fc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - Ac(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function Hc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ic(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - Ac(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = Hc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function Jc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function Kc() {
      var a = Dc;
      Dc <<= 1;
      0 === (Dc & 4194240) && (Dc = 64);
      return a;
    }
    function Lc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Mc(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - Ac(b);
      a[b] = c;
    }
    function Nc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - Ac(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Oc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - Ac(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    function Pc(a, b, c) {
      if (mc) for (a = a.pendingUpdatersLaneMap; 0 < c; ) {
        var d = 31 - Ac(c), e = 1 << d;
        a[d].add(b);
        c &= ~e;
      }
    }
    function Qc(a, b) {
      if (mc) for (var c = a.pendingUpdatersLaneMap, d = a.memoizedUpdaters; 0 < b; ) {
        var e = 31 - Ac(b);
        a = 1 << e;
        e = c[e];
        0 < e.size && (e.forEach(function(a2) {
          var b2 = a2.alternate;
          null !== b2 && d.has(b2) || d.add(a2);
        }), e.clear());
        b &= ~a;
      }
    }
    var E = 0;
    function Rc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Sc;
    var Tc;
    var Uc;
    var Vc;
    var Wc;
    var Xc = false;
    var Yc = [];
    var Zc = null;
    var $c = null;
    var ad = null;
    var bd = /* @__PURE__ */ new Map();
    var cd = /* @__PURE__ */ new Map();
    var dd = [];
    var ed = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function fd(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Zc = null;
          break;
        case "dragenter":
        case "dragleave":
          $c = null;
          break;
        case "mouseover":
        case "mouseout":
          ad = null;
          break;
        case "pointerover":
        case "pointerout":
          bd.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          cd.delete(b.pointerId);
      }
    }
    function gd(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Tc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function hd(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Zc = gd(Zc, a, b, c, d, e), true;
        case "dragenter":
          return $c = gd($c, a, b, c, d, e), true;
        case "mouseover":
          return ad = gd(ad, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          bd.set(f, gd(bd.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, cd.set(f, gd(cd.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function id(a) {
      var b = jd(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Wc(a.priority, function() {
                Uc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function kd(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = ld(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Tc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function md(a, b, c) {
      kd(a) && c.delete(b);
    }
    function nd() {
      Xc = false;
      null !== Zc && kd(Zc) && (Zc = null);
      null !== $c && kd($c) && ($c = null);
      null !== ad && kd(ad) && (ad = null);
      bd.forEach(md);
      cd.forEach(md);
    }
    function od(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Xc || (Xc = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, nd)));
    }
    function pd(a) {
      function b(b2) {
        return od(b2, a);
      }
      if (0 < Yc.length) {
        od(Yc[0], a);
        for (var c = 1; c < Yc.length; c++) {
          var d = Yc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Zc && od(Zc, a);
      null !== $c && od($c, a);
      null !== ad && od(ad, a);
      bd.forEach(b);
      cd.forEach(b);
      for (c = 0; c < dd.length; c++) d = dd[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < dd.length && (c = dd[0], null === c.blockedOn); ) id(c), null === c.blockedOn && dd.shift();
    }
    var qd = va.ReactCurrentBatchConfig;
    var rd = true;
    function sd(a, b, c, d) {
      var e = E, f = qd.transition;
      qd.transition = null;
      try {
        E = 1, td(a, b, c, d);
      } finally {
        E = e, qd.transition = f;
      }
    }
    function ud(a, b, c, d) {
      var e = E, f = qd.transition;
      qd.transition = null;
      try {
        E = 4, td(a, b, c, d);
      } finally {
        E = e, qd.transition = f;
      }
    }
    function td(a, b, c, d) {
      if (rd) {
        var e = ld(a, b, c, d);
        if (null === e) vd(a, b, d, wd, c), fd(a, d);
        else if (hd(e, a, b, c, d)) d.stopPropagation();
        else if (fd(a, d), b & 4 && -1 < ed.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Sc(f);
            f = ld(a, b, c, d);
            null === f && vd(a, b, d, wd, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else vd(a, b, d, null, c);
      }
    }
    var wd = null;
    function ld(a, b, c, d) {
      wd = null;
      a = xb(d);
      a = jd(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      wd = a;
      return null;
    }
    function xd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var yd = null;
    var zd = null;
    var Ad = null;
    function Bd() {
      if (Ad) return Ad;
      var a, b = zd, c = b.length, d, e = "value" in yd ? yd.value : yd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return Ad = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function Cd(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function Dd() {
      return true;
    }
    function Ed() {
      return false;
    }
    function Fd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? Dd : Ed;
        this.isPropagationStopped = Ed;
        return this;
      }
      u(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = Dd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = Dd);
      }, persist: function() {
      }, isPersistent: Dd });
      return b;
    }
    var Gd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var Hd = Fd(Gd);
    var Id = u({}, Gd, { view: 0, detail: 0 });
    var Jd = Fd(Id);
    var Kd;
    var Ld;
    var Md;
    var Od = u({}, Id, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== Md && (Md && "mousemove" === a.type ? (Kd = a.screenX - Md.screenX, Ld = a.screenY - Md.screenY) : Ld = Kd = 0, Md = a);
      return Kd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : Ld;
    } });
    var Pd = Fd(Od);
    var Qd = u({}, Od, { dataTransfer: 0 });
    var Rd = Fd(Qd);
    var Sd = u({}, Id, { relatedTarget: 0 });
    var Td = Fd(Sd);
    var Ud = u({}, Gd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Vd = Fd(Ud);
    var Wd = u({}, Gd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Xd = Fd(Wd);
    var Yd = u({}, Gd, { data: 0 });
    var Zd = Fd(Yd);
    var $d = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var ae = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var be = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function ce(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = be[a]) ? !!b[a] : false;
    }
    function Nd() {
      return ce;
    }
    var de = u({}, Id, { key: function(a) {
      if (a.key) {
        var b = $d[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = Cd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? ae[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nd, charCode: function(a) {
      return "keypress" === a.type ? Cd(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? Cd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } });
    var ee = Fd(de);
    var fe = u({}, Od, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var ge = Fd(fe);
    var he = u({}, Id, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nd });
    var ie = Fd(he);
    var je = u({}, Gd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var ke = Fd(je);
    var le = u({}, Od, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var me = Fd(le);
    var ne = [9, 13, 27, 32];
    var oe = ia && "CompositionEvent" in window;
    var pe = null;
    ia && "documentMode" in document && (pe = document.documentMode);
    var qe = ia && "TextEvent" in window && !pe;
    var re = ia && (!oe || pe && 8 < pe && 11 >= pe);
    var se = String.fromCharCode(32);
    var te = false;
    function ue(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== ne.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function ve(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var we = false;
    function xe(a, b) {
      switch (a) {
        case "compositionend":
          return ve(b);
        case "keypress":
          if (32 !== b.which) return null;
          te = true;
          return se;
        case "textInput":
          return a = b.data, a === se && te ? null : a;
        default:
          return null;
      }
    }
    function ye(a, b) {
      if (we) return "compositionend" === a || !oe && ue(a, b) ? (a = Bd(), Ad = zd = yd = null, we = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return re && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var ze = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function Ae(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!ze[a.type] : "textarea" === b ? true : false;
    }
    function Be(a, b, c, d) {
      Eb(d);
      b = Ce(b, "onChange");
      0 < b.length && (c = new Hd("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var De = null;
    var Ee = null;
    function Fe(a) {
      Ge(a, 0);
    }
    function He(a) {
      var b = Ie(a);
      if (Wa(b)) return a;
    }
    function Je(a, b) {
      if ("change" === a) return b;
    }
    var Ke = false;
    if (ia) {
      if (ia) {
        Me = "oninput" in document;
        if (!Me) {
          Ne = document.createElement("div");
          Ne.setAttribute("oninput", "return;");
          Me = "function" === typeof Ne.oninput;
        }
        Le = Me;
      } else Le = false;
      Ke = Le && (!document.documentMode || 9 < document.documentMode);
    }
    var Le;
    var Me;
    var Ne;
    function Oe() {
      De && (De.detachEvent("onpropertychange", Pe), Ee = De = null);
    }
    function Pe(a) {
      if ("value" === a.propertyName && He(Ee)) {
        var b = [];
        Be(b, Ee, a, xb(a));
        Jb(Fe, b);
      }
    }
    function Qe(a, b, c) {
      "focusin" === a ? (Oe(), De = b, Ee = c, De.attachEvent("onpropertychange", Pe)) : "focusout" === a && Oe();
    }
    function Re(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return He(Ee);
    }
    function Se(a, b) {
      if ("click" === a) return He(b);
    }
    function Te(a, b) {
      if ("input" === a || "change" === a) return He(b);
    }
    function Ue(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var Ve = "function" === typeof Object.is ? Object.is : Ue;
    function We(a, b) {
      if (Ve(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !Ve(a[e], b[e])) return false;
      }
      return true;
    }
    function Xe(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ye(a, b) {
      var c = Xe(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Xe(c);
      }
    }
    function Ze(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Ze(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function $e() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function af(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function bf(a) {
      var b = $e(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Ze(c.ownerDocument.documentElement, c)) {
        if (null !== d && af(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ye(c, f);
            var g = Ye(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var cf = ia && "documentMode" in document && 11 >= document.documentMode;
    var df = null;
    var ef = null;
    var ff = null;
    var gf = false;
    function hf(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      gf || null == df || df !== Xa(d) || (d = df, "selectionStart" in d && af(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), ff && We(ff, d) || (ff = d, d = Ce(ef, "onSelect"), 0 < d.length && (b = new Hd("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = df)));
    }
    function jf(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var kf = { animationend: jf("Animation", "AnimationEnd"), animationiteration: jf("Animation", "AnimationIteration"), animationstart: jf("Animation", "AnimationStart"), transitionend: jf("Transition", "TransitionEnd") };
    var lf = {};
    var mf = {};
    ia && (mf = document.createElement("div").style, "AnimationEvent" in window || (delete kf.animationend.animation, delete kf.animationiteration.animation, delete kf.animationstart.animation), "TransitionEvent" in window || delete kf.transitionend.transition);
    function nf(a) {
      if (lf[a]) return lf[a];
      if (!kf[a]) return a;
      var b = kf[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in mf) return lf[a] = b[c];
      return a;
    }
    var of = nf("animationend");
    var pf = nf("animationiteration");
    var qf = nf("animationstart");
    var rf = nf("transitionend");
    var sf = /* @__PURE__ */ new Map();
    var tf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function uf(a, b) {
      sf.set(a, b);
      fa(b, [a]);
    }
    for (vf = 0; vf < tf.length; vf++) {
      wf = tf[vf], xf = wf.toLowerCase(), yf = wf[0].toUpperCase() + wf.slice(1);
      uf(xf, "on" + yf);
    }
    var wf;
    var xf;
    var yf;
    var vf;
    uf(of, "onAnimationEnd");
    uf(pf, "onAnimationIteration");
    uf(qf, "onAnimationStart");
    uf("dblclick", "onDoubleClick");
    uf("focusin", "onFocus");
    uf("focusout", "onBlur");
    uf(rf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var Af = new Set("cancel close invalid load scroll toggle".split(" ").concat(zf));
    function Bf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function Ge(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            Bf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            Bf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function F(a, b) {
      var c = b[Cf];
      void 0 === c && (c = b[Cf] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (Df(b, a, 2, false), c.add(d));
    }
    function Ef(a, b, c) {
      var d = 0;
      b && (d |= 4);
      Df(c, a, d, b);
    }
    var Ff = "_reactListening" + Math.random().toString(36).slice(2);
    function Gf(a) {
      if (!a[Ff]) {
        a[Ff] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (Af.has(b2) || Ef(b2, false, a), Ef(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[Ff] || (b[Ff] = true, Ef("selectionchange", false, b));
      }
    }
    function Df(a, b, c, d) {
      switch (xd(b)) {
        case 1:
          var e = sd;
          break;
        case 4:
          e = ud;
          break;
        default:
          e = td;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function vd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = jd(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = sf.get(a);
          if (void 0 !== h2) {
            var k2 = Hd, m = a;
            switch (a) {
              case "keypress":
                if (0 === Cd(c)) break a;
              case "keydown":
              case "keyup":
                k2 = ee;
                break;
              case "focusin":
                m = "focus";
                k2 = Td;
                break;
              case "focusout":
                m = "blur";
                k2 = Td;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Td;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Pd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Rd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = ie;
                break;
              case of:
              case pf:
              case qf:
                k2 = Vd;
                break;
              case rf:
                k2 = ke;
                break;
              case "scroll":
                k2 = Jd;
                break;
              case "wheel":
                k2 = me;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Xd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = ge;
            }
            var w = 0 !== (b & 4), C = !w && "scroll" === a, x = w ? null !== h2 ? h2 + "Capture" : null : h2;
            w = [];
            for (var y = d2, v; null !== y; ) {
              v = y;
              var D = v.stateNode;
              5 === v.tag && null !== D && (v = D, null !== x && (D = Kb(y, x), null != D && w.push(Hf(y, D, v))));
              if (C) break;
              y = y.return;
            }
            0 < w.length && (h2 = new k2(h2, m, null, c, e2), g2.push({ event: h2, listeners: w }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (m = c.relatedTarget || c.fromElement) && (jd(m) || m[If])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (m = c.relatedTarget || c.toElement, k2 = d2, m = m ? jd(m) : null, null !== m && (C = Vb(m), m !== C || 5 !== m.tag && 6 !== m.tag)) m = null;
              } else k2 = null, m = d2;
              if (k2 !== m) {
                w = Pd;
                D = "onMouseLeave";
                x = "onMouseEnter";
                y = "mouse";
                if ("pointerout" === a || "pointerover" === a) w = ge, D = "onPointerLeave", x = "onPointerEnter", y = "pointer";
                C = null == k2 ? h2 : Ie(k2);
                v = null == m ? h2 : Ie(m);
                h2 = new w(D, y + "leave", k2, c, e2);
                h2.target = C;
                h2.relatedTarget = v;
                D = null;
                jd(e2) === d2 && (w = new w(x, y + "enter", m, c, e2), w.target = v, w.relatedTarget = C, D = w);
                C = D;
                if (k2 && m) b: {
                  w = k2;
                  x = m;
                  y = 0;
                  for (v = w; v; v = Jf(v)) y++;
                  v = 0;
                  for (D = x; D; D = Jf(D)) v++;
                  for (; 0 < y - v; ) w = Jf(w), y--;
                  for (; 0 < v - y; ) x = Jf(x), v--;
                  for (; y--; ) {
                    if (w === x || null !== x && w === x.alternate) break b;
                    w = Jf(w);
                    x = Jf(x);
                  }
                  w = null;
                }
                else w = null;
                null !== k2 && Kf(g2, h2, k2, w, false);
                null !== m && null !== C && Kf(g2, C, m, w, true);
              }
            }
          }
          a: {
            h2 = d2 ? Ie(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var ca = Je;
            else if (Ae(h2)) if (Ke) ca = Te;
            else {
              ca = Re;
              var R = Qe;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (ca = Se);
            if (ca && (ca = ca(a, d2))) {
              Be(g2, ca, c, e2);
              break a;
            }
            R && R(a, h2, d2);
            "focusout" === a && (R = h2._wrapperState) && R.controlled && "number" === h2.type && bb(h2, "number", h2.value);
          }
          R = d2 ? Ie(d2) : window;
          switch (a) {
            case "focusin":
              if (Ae(R) || "true" === R.contentEditable) df = R, ef = d2, ff = null;
              break;
            case "focusout":
              ff = ef = df = null;
              break;
            case "mousedown":
              gf = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              gf = false;
              hf(g2, c, e2);
              break;
            case "selectionchange":
              if (cf) break;
            case "keydown":
            case "keyup":
              hf(g2, c, e2);
          }
          var sa;
          if (oe) b: {
            switch (a) {
              case "compositionstart":
                var V = "onCompositionStart";
                break b;
              case "compositionend":
                V = "onCompositionEnd";
                break b;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break b;
            }
            V = void 0;
          }
          else we ? ue(a, c) && (V = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (V = "onCompositionStart");
          V && (re && "ko" !== c.locale && (we || "onCompositionStart" !== V ? "onCompositionEnd" === V && we && (sa = Bd()) : (yd = e2, zd = "value" in yd ? yd.value : yd.textContent, we = true)), R = Ce(d2, V), 0 < R.length && (V = new Zd(V, a, null, c, e2), g2.push({ event: V, listeners: R }), sa ? V.data = sa : (sa = ve(c), null !== sa && (V.data = sa))));
          if (sa = qe ? xe(a, c) : ye(a, c)) d2 = Ce(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Zd(
            "onBeforeInput",
            "beforeinput",
            null,
            c,
            e2
          ), g2.push({ event: e2, listeners: d2 }), e2.data = sa);
        }
        Ge(g2, b);
      });
    }
    function Hf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function Ce(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(Hf(a, f, e)), f = Kb(a, b), null != f && d.push(Hf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function Jf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function Kf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(Hf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(Hf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var Lf = /\r\n?/g;
    var Mf = /\u0000|\uFFFD/g;
    function Nf(a) {
      return ("string" === typeof a ? a : "" + a).replace(Lf, "\n").replace(Mf, "");
    }
    function Of(a, b, c) {
      b = Nf(b);
      if (Nf(a) !== b && c) throw Error(p(425));
    }
    function Pf() {
    }
    var Qf = null;
    var Rf = null;
    function Sf(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Tf = "function" === typeof setTimeout ? setTimeout : void 0;
    var Uf = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var Vf = "function" === typeof Promise ? Promise : void 0;
    var Xf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Vf ? function(a) {
      return Vf.resolve(null).then(a).catch(Wf);
    } : Tf;
    function Wf(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Yf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            pd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      pd(b);
    }
    function Zf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function $f(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var ag = Math.random().toString(36).slice(2);
    var bg = "__reactFiber$" + ag;
    var cg = "__reactProps$" + ag;
    var If = "__reactContainer$" + ag;
    var Cf = "__reactEvents$" + ag;
    var dg = "__reactListeners$" + ag;
    var eg = "__reactHandles$" + ag;
    function jd(a) {
      var b = a[bg];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[If] || c[bg]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = $f(a); null !== a; ) {
            if (c = a[bg]) return c;
            a = $f(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[bg] || a[If];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function Ie(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[cg] || null;
    }
    var fg = [];
    var gg = -1;
    function hg(a) {
      return { current: a };
    }
    function G(a) {
      0 > gg || (a.current = fg[gg], fg[gg] = null, gg--);
    }
    function H(a, b) {
      gg++;
      fg[gg] = a.current;
      a.current = b;
    }
    var ig = {};
    var I = hg(ig);
    var jg = hg(false);
    var kg = ig;
    function lg(a, b) {
      var c = a.type.contextTypes;
      if (!c) return ig;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function mg(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function ng() {
      G(jg);
      G(I);
    }
    function og(a, b, c) {
      if (I.current !== ig) throw Error(p(168));
      H(I, b);
      H(jg, c);
    }
    function pg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return u({}, c, d);
    }
    function qg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || ig;
      kg = I.current;
      H(I, a);
      H(jg, jg.current);
      return true;
    }
    function rg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = pg(a, b, kg), d.__reactInternalMemoizedMergedChildContext = a, G(jg), G(I), H(I, a)) : G(jg);
      H(jg, c);
    }
    var sg = null;
    var tg = false;
    var ug = false;
    function vg(a) {
      null === sg ? sg = [a] : sg.push(a);
    }
    function wg(a) {
      tg = true;
      vg(a);
    }
    function xg() {
      if (!ug && null !== sg) {
        ug = true;
        var a = 0, b = E;
        try {
          var c = sg;
          for (E = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          sg = null;
          tg = false;
        } catch (e) {
          throw null !== sg && (sg = sg.slice(a + 1)), ac(fc, xg), e;
        } finally {
          E = b, ug = false;
        }
      }
      return null;
    }
    var yg = [];
    var zg = 0;
    var Ag = null;
    var Bg = 0;
    var Cg = [];
    var Dg = 0;
    var Eg = null;
    var Fg = 1;
    var Gg = "";
    function Hg(a, b) {
      yg[zg++] = Bg;
      yg[zg++] = Ag;
      Ag = a;
      Bg = b;
    }
    function Ig(a, b, c) {
      Cg[Dg++] = Fg;
      Cg[Dg++] = Gg;
      Cg[Dg++] = Eg;
      Eg = a;
      var d = Fg;
      a = Gg;
      var e = 32 - Ac(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - Ac(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        Fg = 1 << 32 - Ac(b) + e | c << e | d;
        Gg = f + a;
      } else Fg = 1 << f | c << e | d, Gg = a;
    }
    function Jg(a) {
      null !== a.return && (Hg(a, 1), Ig(a, 1, 0));
    }
    function Kg(a) {
      for (; a === Ag; ) Ag = yg[--zg], yg[zg] = null, Bg = yg[--zg], yg[zg] = null;
      for (; a === Eg; ) Eg = Cg[--Dg], Cg[Dg] = null, Gg = Cg[--Dg], Cg[Dg] = null, Fg = Cg[--Dg], Cg[Dg] = null;
    }
    var Lg = null;
    var Mg = null;
    var J = false;
    var Ng = null;
    function Og(a, b) {
      var c = Pg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Qg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, Lg = a, Mg = Zf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, Lg = a, Mg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== Eg ? { id: Fg, overflow: Gg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Pg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, Lg = a, Mg = null, true) : false;
        default:
          return false;
      }
    }
    function Rg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Sg(a) {
      if (J) {
        var b = Mg;
        if (b) {
          var c = b;
          if (!Qg(a, b)) {
            if (Rg(a)) throw Error(p(418));
            b = Zf(c.nextSibling);
            var d = Lg;
            b && Qg(a, b) ? Og(d, c) : (a.flags = a.flags & -4097 | 2, J = false, Lg = a);
          }
        } else {
          if (Rg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          J = false;
          Lg = a;
        }
      }
    }
    function Tg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      Lg = a;
    }
    function Ug(a) {
      if (a !== Lg) return false;
      if (!J) return Tg(a), J = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Sf(a.type, a.memoizedProps));
      if (b && (b = Mg)) {
        if (Rg(a)) throw Vg(), Error(p(418));
        for (; b; ) Og(a, b), b = Zf(b.nextSibling);
      }
      Tg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  Mg = Zf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          Mg = null;
        }
      } else Mg = Lg ? Zf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Vg() {
      for (var a = Mg; a; ) a = Zf(a.nextSibling);
    }
    function Wg() {
      Mg = Lg = null;
      J = false;
    }
    function Xg(a) {
      null === Ng ? Ng = [a] : Ng.push(a);
    }
    var Yg = va.ReactCurrentBatchConfig;
    function Zg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function $g(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function ah(a) {
      var b = a._init;
      return b(a._payload);
    }
    function bh(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = ch(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = dh(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return n(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && ah(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Zg(a2, b2, c2), d2.return = a2, d2;
        d2 = eh(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Zg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = fh(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function n(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = gh(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = dh("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case wa:
              return c2 = eh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Zg(a2, null, b2), c2.return = a2, c2;
            case xa:
              return b2 = fh(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (db(b2) || Ka(b2)) return b2 = gh(b2, a2.mode, c2, null), b2.return = a2, b2;
          $g(a2, b2);
        }
        return null;
      }
      function r(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case wa:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case xa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (db(c2) || Ka(c2)) return null !== e2 ? null : n(a2, b2, c2, d2, null);
          $g(a2, c2);
        }
        return null;
      }
      function z(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case xa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return z(a2, b2, c2, f2(d2._payload), e2);
          }
          if (db(d2) || Ka(d2)) return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
          $g(b2, d2);
        }
        return null;
      }
      function m(e2, g2, h2, k2) {
        for (var l2 = null, v = null, n2 = g2, m2 = g2 = 0, y = null; null !== n2 && m2 < h2.length; m2++) {
          n2.index > m2 ? (y = n2, n2 = null) : y = n2.sibling;
          var x = r(e2, n2, h2[m2], k2);
          if (null === x) {
            null === n2 && (n2 = y);
            break;
          }
          a && n2 && null === x.alternate && b(e2, n2);
          g2 = f(x, g2, m2);
          null === v ? l2 = x : v.sibling = x;
          v = x;
          n2 = y;
        }
        if (m2 === h2.length) return c(e2, n2), J && Hg(e2, m2), l2;
        if (null === n2) {
          for (; m2 < h2.length; m2++) n2 = q(e2, h2[m2], k2), null !== n2 && (g2 = f(n2, g2, m2), null === v ? l2 = n2 : v.sibling = n2, v = n2);
          J && Hg(e2, m2);
          return l2;
        }
        for (n2 = d(e2, n2); m2 < h2.length; m2++) y = z(n2, e2, m2, h2[m2], k2), null !== y && (a && null !== y.alternate && n2.delete(null === y.key ? m2 : y.key), g2 = f(y, g2, m2), null === v ? l2 = y : v.sibling = y, v = y);
        a && n2.forEach(function(a2) {
          return b(e2, a2);
        });
        J && Hg(e2, m2);
        return l2;
      }
      function w(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var n2 = l2 = null, m2 = g2, v = g2 = 0, y = null, x = h2.next(); null !== m2 && !x.done; v++, x = h2.next()) {
          m2.index > v ? (y = m2, m2 = null) : y = m2.sibling;
          var w2 = r(e2, m2, x.value, k2);
          if (null === w2) {
            null === m2 && (m2 = y);
            break;
          }
          a && m2 && null === w2.alternate && b(e2, m2);
          g2 = f(w2, g2, v);
          null === n2 ? l2 = w2 : n2.sibling = w2;
          n2 = w2;
          m2 = y;
        }
        if (x.done) return c(
          e2,
          m2
        ), J && Hg(e2, v), l2;
        if (null === m2) {
          for (; !x.done; v++, x = h2.next()) x = q(e2, x.value, k2), null !== x && (g2 = f(x, g2, v), null === n2 ? l2 = x : n2.sibling = x, n2 = x);
          J && Hg(e2, v);
          return l2;
        }
        for (m2 = d(e2, m2); !x.done; v++, x = h2.next()) x = z(m2, e2, v, x.value, k2), null !== x && (a && null !== x.alternate && m2.delete(null === x.key ? v : x.key), g2 = f(x, g2, v), null === n2 ? l2 = x : n2.sibling = x, n2 = x);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        J && Hg(e2, v);
        return l2;
      }
      function C(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case wa:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && ah(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Zg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = gh(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = eh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Zg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case xa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = fh(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, C(a2, d2, l2(f2._payload), h2);
          }
          if (db(f2)) return m(a2, d2, f2, h2);
          if (Ka(f2)) return w(a2, d2, f2, h2);
          $g(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = dh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return C;
    }
    var hh = bh(true);
    var ih = bh(false);
    var jh = hg(null);
    var kh = null;
    var lh = null;
    var mh = null;
    function nh() {
      mh = lh = kh = null;
    }
    function oh(a) {
      var b = jh.current;
      G(jh);
      a._currentValue = b;
    }
    function ph(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function qh(a, b) {
      kh = a;
      mh = lh = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (rh = true), a.firstContext = null);
    }
    function sh(a) {
      var b = a._currentValue;
      if (mh !== a) if (a = { context: a, memoizedValue: b, next: null }, null === lh) {
        if (null === kh) throw Error(p(308));
        lh = a;
        kh.dependencies = { lanes: 0, firstContext: a };
      } else lh = lh.next = a;
      return b;
    }
    var th = null;
    function uh(a) {
      null === th ? th = [a] : th.push(a);
    }
    function vh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, uh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return wh(a, d);
    }
    function wh(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var xh = false;
    function yh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function zh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function Ah(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function Bh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return wh(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, uh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return wh(a, c);
    }
    function Ch(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Oc(a, c);
      }
    }
    function Dh(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function Eh(a, b, c, d) {
      var e = a.updateQueue;
      xh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var n = a.alternate;
        null !== n && (n = n.updateQueue, h = n.lastBaseUpdate, h !== g && (null === h ? n.firstBaseUpdate = l : h.next = l, n.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        n = l = k = null;
        h = f;
        do {
          var r = h.lane, z = h.eventTime;
          if ((d & r) === r) {
            null !== n && (n = n.next = {
              eventTime: z,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var m = a, w = h;
              r = b;
              z = c;
              switch (w.tag) {
                case 1:
                  m = w.payload;
                  if ("function" === typeof m) {
                    q = m.call(z, q, r);
                    break a;
                  }
                  q = m;
                  break a;
                case 3:
                  m.flags = m.flags & -65537 | 128;
                case 0:
                  m = w.payload;
                  r = "function" === typeof m ? m.call(z, q, r) : m;
                  if (null === r || void 0 === r) break a;
                  q = u({}, q, r);
                  break a;
                case 2:
                  xh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
          } else z = { eventTime: z, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === n ? (l = n = z, k = q) : n = n.next = z, g |= r;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        } while (1);
        null === n && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = n;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        Fh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function Gh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var Hh = {};
    var Ih = hg(Hh);
    var Jh = hg(Hh);
    var Kh = hg(Hh);
    function Lh(a) {
      if (a === Hh) throw Error(p(174));
      return a;
    }
    function Mh(a, b) {
      H(Kh, b);
      H(Jh, a);
      H(Ih, Hh);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : kb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = kb(b, a);
      }
      G(Ih);
      H(Ih, b);
    }
    function Nh() {
      G(Ih);
      G(Jh);
      G(Kh);
    }
    function Oh(a) {
      Lh(Kh.current);
      var b = Lh(Ih.current);
      var c = kb(b, a.type);
      b !== c && (H(Jh, a), H(Ih, c));
    }
    function Ph(a) {
      Jh.current === a && (G(Ih), G(Jh));
    }
    var L = hg(0);
    function Qh(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Rh = [];
    function Sh() {
      for (var a = 0; a < Rh.length; a++) Rh[a]._workInProgressVersionPrimary = null;
      Rh.length = 0;
    }
    var Th = va.ReactCurrentDispatcher;
    var Uh = va.ReactCurrentBatchConfig;
    var Vh = 0;
    var M = null;
    var N = null;
    var O = null;
    var Wh = false;
    var Xh = false;
    var Yh = 0;
    var Zh = 0;
    function P() {
      throw Error(p(321));
    }
    function $h(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!Ve(a[c], b[c])) return false;
      return true;
    }
    function ai(a, b, c, d, e, f) {
      Vh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Th.current = null === a || null === a.memoizedState ? bi : ci;
      a = c(d, e);
      if (Xh) {
        f = 0;
        do {
          Xh = false;
          Yh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Th.current = di;
          a = c(d, e);
        } while (Xh);
      }
      Th.current = ei;
      b = null !== N && null !== N.next;
      Vh = 0;
      O = N = M = null;
      Wh = false;
      if (b) throw Error(p(300));
      return a;
    }
    function fi() {
      var a = 0 !== Yh;
      Yh = 0;
      return a;
    }
    function gi() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function hi() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function ii(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function ji(a) {
      var b = hi(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var n = l.lane;
          if ((Vh & n) === n) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: n,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= n;
            Fh |= n;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        Ve(d, b.memoizedState) || (rh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, Fh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function ki(a) {
      var b = hi(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        Ve(f, b.memoizedState) || (rh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function li() {
    }
    function mi(a, b) {
      var c = M, d = hi(), e = b(), f = !Ve(d.memoizedState, e);
      f && (d.memoizedState = e, rh = true);
      d = d.queue;
      ni(oi.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        pi(9, qi.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Vh & 30) || ri(c, b, e);
      }
      return e;
    }
    function ri(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function qi(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      si(b) && ti(a);
    }
    function oi(a, b, c) {
      return c(function() {
        si(b) && ti(a);
      });
    }
    function si(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !Ve(a, c);
      } catch (d) {
        return true;
      }
    }
    function ti(a) {
      var b = wh(a, 1);
      null !== b && ui(b, a, 1, -1);
    }
    function vi(a) {
      var b = gi();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ii, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = wi.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function pi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function xi() {
      return hi().memoizedState;
    }
    function Ai(a, b, c, d) {
      var e = gi();
      M.flags |= a;
      e.memoizedState = pi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function Bi(a, b, c, d) {
      var e = hi();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && $h(d, g.deps)) {
          e.memoizedState = pi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = pi(1 | b, c, f, d);
    }
    function Ci(a, b) {
      return Ai(8390656, 8, a, b);
    }
    function ni(a, b) {
      return Bi(2048, 8, a, b);
    }
    function Di(a, b) {
      return Bi(4, 2, a, b);
    }
    function Ei(a, b) {
      return Bi(4, 4, a, b);
    }
    function Fi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function Gi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Bi(4, 4, Fi.bind(null, b, a), c);
    }
    function Hi() {
    }
    function Ii(a, b) {
      var c = hi();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && $h(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function Ji(a, b) {
      var c = hi();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && $h(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function Ki(a, b, c) {
      if (0 === (Vh & 21)) return a.baseState && (a.baseState = false, rh = true), a.memoizedState = c;
      Ve(c, b) || (c = Kc(), M.lanes |= c, Fh |= c, a.baseState = true);
      return b;
    }
    function Li(a, b) {
      var c = E;
      E = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Uh.transition;
      Uh.transition = {};
      try {
        a(false), b();
      } finally {
        E = c, Uh.transition = d;
      }
    }
    function Mi() {
      return hi().memoizedState;
    }
    function Ni(a, b, c) {
      var d = Oi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (Pi(a)) Qi(b, c);
      else if (c = vh(a, b, c, d), null !== c) {
        var e = Ri();
        ui(c, a, d, e);
        Si(c, b, d);
      }
      yc(a, d);
    }
    function wi(a, b, c) {
      var d = Oi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (Pi(a)) Qi(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (Ve(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, uh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = vh(a, b, e, d);
        null !== c && (e = Ri(), ui(c, a, d, e), Si(c, b, d));
      }
      yc(a, d);
    }
    function Pi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Qi(a, b) {
      Xh = Wh = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Si(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Oc(a, c);
      }
    }
    var ei = { readContext: sh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
    var bi = { readContext: sh, useCallback: function(a, b) {
      gi().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: sh, useEffect: Ci, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Ai(
        4194308,
        4,
        Fi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return Ai(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return Ai(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = gi();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = gi();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = Ni.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = gi();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: vi, useDebugValue: Hi, useDeferredValue: function(a) {
      return gi().memoizedState = a;
    }, useTransition: function() {
      var a = vi(false), b = a[0];
      a = Li.bind(null, a[1]);
      gi().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = gi();
      if (J) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Vh & 30) || ri(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      Ci(oi.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      pi(9, qi.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = gi(), b = Q.identifierPrefix;
      if (J) {
        var c = Gg;
        var d = Fg;
        c = (d & ~(1 << 32 - Ac(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Yh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Zh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false };
    var ci = {
      readContext: sh,
      useCallback: Ii,
      useContext: sh,
      useEffect: ni,
      useImperativeHandle: Gi,
      useInsertionEffect: Di,
      useLayoutEffect: Ei,
      useMemo: Ji,
      useReducer: ji,
      useRef: xi,
      useState: function() {
        return ji(ii);
      },
      useDebugValue: Hi,
      useDeferredValue: function(a) {
        var b = hi();
        return Ki(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = ji(ii)[0], b = hi().memoizedState;
        return [a, b];
      },
      useMutableSource: li,
      useSyncExternalStore: mi,
      useId: Mi,
      unstable_isNewReconciler: false
    };
    var di = { readContext: sh, useCallback: Ii, useContext: sh, useEffect: ni, useImperativeHandle: Gi, useInsertionEffect: Di, useLayoutEffect: Ei, useMemo: Ji, useReducer: ki, useRef: xi, useState: function() {
      return ki(ii);
    }, useDebugValue: Hi, useDeferredValue: function(a) {
      var b = hi();
      return null === N ? b.memoizedState = a : Ki(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = ki(ii)[0], b = hi().memoizedState;
      return [a, b];
    }, useMutableSource: li, useSyncExternalStore: mi, useId: Mi, unstable_isNewReconciler: false };
    var Ti = ba.unstable_now;
    var Ui = 0;
    var Vi = -1;
    var Wi = -1;
    var Xi = -1;
    var Yi = false;
    var Zi = false;
    function $i(a, b) {
      if (0 <= Wi) {
        var c = Ti() - Wi;
        a.actualDuration += c;
        b && (a.selfBaseDuration = c);
        Wi = -1;
      }
    }
    function aj(a) {
      if (0 <= Vi) {
        var b = Ti() - Vi;
        Vi = -1;
        for (a = a.return; null !== a; ) {
          switch (a.tag) {
            case 3:
              a.stateNode.effectDuration += b;
              return;
            case 12:
              a.stateNode.effectDuration += b;
              return;
          }
          a = a.return;
        }
      }
    }
    function bj(a) {
      if (0 <= Xi) {
        var b = Ti() - Xi;
        Xi = -1;
        for (a = a.return; null !== a; ) {
          switch (a.tag) {
            case 3:
              a = a.stateNode;
              null !== a && (a.passiveEffectDuration += b);
              return;
            case 12:
              a = a.stateNode;
              null !== a && (a.passiveEffectDuration += b);
              return;
          }
          a = a.return;
        }
      }
    }
    function cj() {
      Vi = Ti();
    }
    function dj(a) {
      for (var b = a.child; b; ) a.actualDuration += b.actualDuration, b = b.sibling;
    }
    function ej(a, b) {
      if (a && a.defaultProps) {
        b = u({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function fj(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : u({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var gj = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = Ri(), e = Oi(a), f = Ah(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Bh(a, f, e);
      null !== b && (ui(b, a, e, d), Ch(b, a, e));
      yc(a, e);
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = Ri(), e = Oi(a), f = Ah(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Bh(a, f, e);
      null !== b && (ui(b, a, e, d), Ch(b, a, e));
      yc(a, e);
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = Ri(), d = Oi(a), e = Ah(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = Bh(a, e, d);
      null !== b && (ui(b, a, d, c), Ch(b, a, d));
      null !== B && "function" === typeof B.markForceUpdateScheduled && B.markForceUpdateScheduled(a, d);
    } };
    function hj(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !We(c, d) || !We(e, f) : true;
    }
    function ij(a, b, c) {
      var d = false, e = ig;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = sh(f) : (e = mg(b) ? kg : I.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? lg(a, e) : ig);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = gj;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function jj(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && gj.enqueueReplaceState(b, b.state, null);
    }
    function kj(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      yh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = sh(f) : (f = mg(b) ? kg : I.current, e.context = lg(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (fj(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && gj.enqueueReplaceState(e, e.state, null), Eh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function lj(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function mj(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function nj(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var oj = "function" === typeof WeakMap ? WeakMap : Map;
    function pj(a, b, c) {
      c = Ah(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        qj || (qj = true, rj = d);
        nj(a, b);
      };
      return c;
    }
    function sj(a, b, c) {
      c = Ah(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          nj(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        nj(a, b);
        "function" !== typeof d && (null === tj ? tj = /* @__PURE__ */ new Set([this]) : tj.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function uj(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new oj();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), d = vj.bind(null, a, b, c), mc && wj(a, c), b.then(d, d));
    }
    function xj(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function yj(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = Ah(-1, 1), b.tag = 2, Bh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var zj = va.ReactCurrentOwner;
    var rh = false;
    function Aj(a, b, c, d) {
      b.child = null === a ? ih(b, null, c, d) : hh(b, a.child, c, d);
    }
    function Bj(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      qh(b, e);
      sc(b);
      d = ai(a, b, c, d, f, e);
      c = fi();
      tc();
      if (null !== a && !rh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Cj(a, b, e);
      J && c && Jg(b);
      b.flags |= 1;
      Aj(a, b, d, e);
      return b.child;
    }
    function Dj(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !Ej(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, Fj(a, b, f, d, e);
        a = eh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : We;
        if (c(g, d) && a.ref === b.ref) return Cj(a, b, e);
      }
      b.flags |= 1;
      a = ch(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function Fj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (We(f, d) && a.ref === b.ref) if (rh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (rh = true);
        else return b.lanes = a.lanes, Cj(a, b, e);
      }
      return Gj(a, b, c, d, e);
    }
    function Hj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(Ij, Jj), Jj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, H(Ij, Jj), Jj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        H(Ij, Jj);
        Jj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, H(Ij, Jj), Jj |= d;
      Aj(a, b, e, c);
      return b.child;
    }
    function Kj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function Gj(a, b, c, d, e) {
      var f = mg(c) ? kg : I.current;
      f = lg(b, f);
      qh(b, e);
      sc(b);
      c = ai(a, b, c, d, f, e);
      d = fi();
      tc();
      if (null !== a && !rh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Cj(a, b, e);
      J && d && Jg(b);
      b.flags |= 1;
      Aj(a, b, c, e);
      return b.child;
    }
    function Lj(a, b, c, d, e) {
      if (mg(c)) {
        var f = true;
        qg(b);
      } else f = false;
      qh(b, e);
      if (null === b.stateNode) Mj(a, b), ij(b, c, d), kj(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = sh(l) : (l = mg(c) ? kg : I.current, l = lg(b, l));
        var n = c.getDerivedStateFromProps, q = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && jj(b, g, d, l);
        xh = false;
        var r = b.memoizedState;
        g.state = r;
        Eh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || jg.current || xh ? ("function" === typeof n && (fj(b, c, n, d), k = b.memoizedState), (h = xh || hj(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        zh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : ej(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = sh(k) : (k = mg(c) ? kg : I.current, k = lg(b, k));
        var z = c.getDerivedStateFromProps;
        (n = "function" === typeof z || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && jj(b, g, d, k);
        xh = false;
        r = b.memoizedState;
        g.state = r;
        Eh(b, d, g, e);
        var m = b.memoizedState;
        h !== q || r !== m || jg.current || xh ? ("function" === typeof z && (fj(b, c, z, d), m = b.memoizedState), (l = xh || hj(b, c, l, d, r, m, k) || false) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, m, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, m, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = m), g.props = d, g.state = m, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return Nj(a, b, c, d, f, e);
    }
    function Nj(a, b, c, d, e, f) {
      Kj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && rg(b, c, false), Cj(a, b, f);
      d = b.stateNode;
      zj.current = b;
      if (g && "function" !== typeof c.getDerivedStateFromError) {
        var h = null;
        Wi = -1;
      } else sc(b), h = d.render(), tc();
      b.flags |= 1;
      null !== a && g ? (g = h, b.child = hh(b, a.child, null, f), b.child = hh(b, null, g, f)) : Aj(a, b, h, f);
      b.memoizedState = d.state;
      e && rg(b, c, true);
      return b.child;
    }
    function Oj(a) {
      var b = a.stateNode;
      b.pendingContext ? og(a, b.pendingContext, b.pendingContext !== b.context) : b.context && og(a, b.context, false);
      Mh(a, b.containerInfo);
    }
    function Rj(a, b, c, d, e) {
      Wg();
      Xg(e);
      b.flags |= 256;
      Aj(a, b, c, d);
      return b.child;
    }
    var Sj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Tj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function Uj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      H(L, e & 1);
      if (null === a) {
        Sg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g, b.mode & 2 && (f.actualDuration = 0, f.actualStartTime = -1, f.selfBaseDuration = 0, f.treeBaseDuration = 0)) : f = Vj(g, d, 0, null), a = gh(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = Tj(c), b.memoizedState = Sj, a) : Wj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return Xj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.mode & 2 && (d.actualDuration = 0, d.actualStartTime = -1, d.selfBaseDuration = e.selfBaseDuration, d.treeBaseDuration = e.treeBaseDuration), b.deletions = null) : (d = ch(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = ch(h, f) : (f = gh(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? Tj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = Sj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = ch(f, {
        mode: "visible",
        children: d.children
      });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function Wj(a, b) {
      b = Vj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function Yj(a, b, c, d) {
      null !== d && Xg(d);
      hh(b, a.child, null, c);
      a = Wj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function Xj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = mj(Error(p(422))), Yj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = Vj({ mode: "visible", children: d.children }, e, 0, null);
        f = gh(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && hh(b, a.child, null, g);
        b.child.memoizedState = Tj(g);
        b.memoizedState = Sj;
        return f;
      }
      if (0 === (b.mode & 1)) return Yj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = mj(f, d, void 0);
        return Yj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (rh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, wh(a, e), ui(d, a, e, -1));
        }
        Zj();
        d = mj(Error(p(421)));
        return Yj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = ak.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      Mg = Zf(e.nextSibling);
      Lg = b;
      J = true;
      Ng = null;
      null !== a && (Cg[Dg++] = Fg, Cg[Dg++] = Gg, Cg[Dg++] = Eg, Fg = a.id, Gg = a.overflow, Eg = b);
      b = Wj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function bk(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      ph(a.return, b, c);
    }
    function ck(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function dk(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Aj(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && bk(a, c, b);
          else if (19 === a.tag) bk(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      H(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Qh(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          ck(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Qh(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          ck(b, true, c, null, f);
          break;
        case "together":
          ck(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function Mj(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Cj(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      Wi = -1;
      Fh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = ch(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = ch(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function ek(a, b, c) {
      switch (b.tag) {
        case 3:
          Oj(b);
          Wg();
          break;
        case 5:
          Oh(b);
          break;
        case 1:
          mg(b.type) && qg(b);
          break;
        case 4:
          Mh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          H(jh, d._currentValue);
          d._currentValue = e;
          break;
        case 12:
          0 !== (c & b.childLanes) && (b.flags |= 4);
          d = b.stateNode;
          d.effectDuration = 0;
          d.passiveEffectDuration = 0;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return H(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return Uj(
              a,
              b,
              c
            );
            H(L, L.current & 1);
            a = Cj(a, b, c);
            return null !== a ? a.sibling : null;
          }
          H(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return dk(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          H(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, Hj(a, b, c);
      }
      return Cj(a, b, c);
    }
    var fk;
    var gk;
    var hk;
    var ik;
    fk = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    gk = function() {
    };
    hk = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        Lh(Ih.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = u({}, e, { value: void 0 });
            d = u({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = fb(a, e);
            d = fb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Pf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && F("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    ik = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function jk(a, b) {
      if (!J) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) if (0 !== (a.mode & 2)) {
        for (var e = a.selfBaseDuration, f = a.child; null !== f; ) c |= f.lanes | f.childLanes, d |= f.subtreeFlags & 14680064, d |= f.flags & 14680064, e += f.treeBaseDuration, f = f.sibling;
        a.treeBaseDuration = e;
      } else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else if (0 !== (a.mode & 2)) {
        e = a.actualDuration;
        f = a.selfBaseDuration;
        for (var g = a.child; null !== g; ) c |= g.lanes | g.childLanes, d |= g.subtreeFlags, d |= g.flags, e += g.actualDuration, f += g.treeBaseDuration, g = g.sibling;
        a.actualDuration = e;
        a.treeBaseDuration = f;
      } else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function kk(a, b, c) {
      var d = b.pendingProps;
      Kg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return mg(b.type) && ng(), S(b), null;
        case 3:
          d = b.stateNode;
          Nh();
          G(jg);
          G(I);
          Sh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Ug(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== Ng && (lk(Ng), Ng = null));
          gk(a, b);
          S(b);
          return null;
        case 5:
          Ph(b);
          var e = Lh(Kh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) hk(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = Lh(Ih.current);
            if (Ug(b)) {
              d = b.stateNode;
              a = b.type;
              c = b.memoizedProps;
              d[bg] = b;
              d[cg] = c;
              var f = 0 !== (b.mode & 1);
              switch (a) {
                case "dialog":
                  F("cancel", d);
                  F("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  F("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < zf.length; e++) F(zf[e], d);
                  break;
                case "source":
                  F("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  F(
                    "error",
                    d
                  );
                  F("load", d);
                  break;
                case "details":
                  F("toggle", d);
                  break;
                case "input":
                  Za(d, c);
                  F("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!c.multiple };
                  F("invalid", d);
                  break;
                case "textarea":
                  gb(d, c), F("invalid", d);
              }
              ub(a, c);
              e = null;
              for (var g in c) if (c.hasOwnProperty(g)) {
                var h = c[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== c.suppressHydrationWarning && Of(d.textContent, h, f), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== c.suppressHydrationWarning && Of(
                  d.textContent,
                  h,
                  f
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && F("scroll", d);
              }
              switch (a) {
                case "input":
                  Va(d);
                  cb(d, c, true);
                  break;
                case "textarea":
                  Va(d);
                  ib(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof c.onClick && (d.onclick = Pf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = jb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[bg] = b;
              a[cg] = d;
              fk(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    F("cancel", a);
                    F("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    F("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < zf.length; e++) F(zf[e], a);
                    e = d;
                    break;
                  case "source":
                    F("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    F(
                      "error",
                      a
                    );
                    F("load", a);
                    e = d;
                    break;
                  case "details":
                    F("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    F("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = u({}, d, { value: void 0 });
                    F("invalid", a);
                    break;
                  case "textarea":
                    gb(a, d);
                    e = fb(a, d);
                    F("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && F("scroll", a) : null != k && ua(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    cb(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    ib(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? eb(a, !!d.multiple, f, false) : null != d.defaultValue && eb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Pf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) ik(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            a = Lh(Kh.current);
            Lh(Ih.current);
            if (Ug(b)) {
              d = b.stateNode;
              a = b.memoizedProps;
              d[bg] = b;
              if (c = d.nodeValue !== a) {
                if (f = Lg, null !== f) switch (f.tag) {
                  case 3:
                    Of(d.nodeValue, a, 0 !== (f.mode & 1));
                    break;
                  case 5:
                    true !== f.memoizedProps.suppressHydrationWarning && Of(d.nodeValue, a, 0 !== (f.mode & 1));
                }
              }
              c && (b.flags |= 4);
            } else d = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(d), d[bg] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          G(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (J && null !== Mg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Vg(), Wg(), b.flags |= 98560, f = false;
            else if (f = Ug(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[bg] = b;
                S(b);
                0 !== (b.mode & 2) && null !== d && (f = b.child, null !== f && (b.treeBaseDuration -= f.treeBaseDuration));
              } else Wg(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4, S(b), 0 !== (b.mode & 2) && null !== d && (f = b.child, null !== f && (b.treeBaseDuration -= f.treeBaseDuration));
              f = false;
            } else null !== Ng && (lk(Ng), Ng = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, 0 !== (b.mode & 2) && dj(b), b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : Zj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          0 !== (b.mode & 2) && d && (d = b.child, null !== d && (b.treeBaseDuration -= d.treeBaseDuration));
          return null;
        case 4:
          return Nh(), gk(a, b), null === a && Gf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return oh(b.type._context), S(b), null;
        case 17:
          return mg(b.type) && ng(), S(b), null;
        case 19:
          G(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) jk(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Qh(a);
              if (null !== g) {
                b.flags |= 128;
                jk(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (a = b.child; null !== a; ) c = a, g = d, c.flags &= 14680066, f = c.alternate, null === f ? (c.childLanes = 0, c.lanes = g, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null, c.selfBaseDuration = 0, c.treeBaseDuration = 0) : (c.childLanes = f.childLanes, c.lanes = f.lanes, c.child = f.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = f.memoizedProps, c.memoizedState = f.memoizedState, c.updateQueue = f.updateQueue, c.type = f.type, g = f.dependencies, c.dependencies = null === g ? null : { lanes: g.lanes, firstContext: g.firstContext }, c.selfBaseDuration = f.selfBaseDuration, c.treeBaseDuration = f.treeBaseDuration), a = a.sibling;
                H(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && A() > mk && (b.flags |= 128, d = true, jk(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Qh(g), null !== a) {
              if (b.flags |= 128, d = true, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), jk(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !J) return S(b), null;
            } else 2 * A() - f.renderingStartTime > mk && 1073741824 !== c && (b.flags |= 128, d = true, jk(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (a = f.last, null !== a ? a.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = A(), b.sibling = null, a = L.current, H(L, d ? a & 1 | 2 : a & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return nk(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (Jj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function ok(a, b) {
      Kg(b);
      switch (b.tag) {
        case 1:
          return mg(b.type) && ng(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 0 !== (b.mode & 2) && dj(b), b) : null;
        case 3:
          return Nh(), G(jg), G(I), Sh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Ph(b), null;
        case 13:
          G(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Wg();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, 0 !== (b.mode & 2) && dj(b), b) : null;
        case 19:
          return G(L), null;
        case 4:
          return Nh(), null;
        case 10:
          return oh(b.type._context), null;
        case 22:
        case 23:
          return nk(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var pk = false;
    var qk = false;
    var rk = "function" === typeof WeakSet ? WeakSet : Set;
    var U = null;
    var sk = null;
    var tk = null;
    function uk(a, b) {
      b.props = a.memoizedProps;
      b.state = a.memoizedState;
      if (a.mode & 2) try {
        cj(), b.componentWillUnmount();
      } finally {
        aj(a);
      }
      else b.componentWillUnmount();
    }
    function vk(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        if (a.mode & 2) try {
          cj(), c(null);
        } finally {
          aj(a);
        }
        else c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function wk(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var xk = false;
    function yk(a, b) {
      Qf = rd;
      a = $e();
      if (af(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (D) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, n = 0, q = a, r = null;
            b: for (; ; ) {
              for (var z; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (z = q.firstChild)) break;
                r = q;
                q = z;
              }
              for (; ; ) {
                if (q === a) break b;
                r === c && ++l === e && (h = g);
                r === f && ++n === d && (k = g);
                if (null !== (z = q.nextSibling)) break;
                q = r;
                r = q.parentNode;
              }
              q = z;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Rf = { focusedElem: a, selectionRange: c };
      rd = false;
      for (U = b; null !== U; ) if (b = U, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, U = a;
      else for (; null !== U; ) {
        b = U;
        try {
          var m = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== m) {
                var w = m.memoizedProps, C = m.memoizedState, x = b.stateNode, y = x.getSnapshotBeforeUpdate(b.elementType === b.type ? w : ej(b.type, w), C);
                x.__reactInternalSnapshotBeforeUpdate = y;
              }
              break;
            case 3:
              var v = b.stateNode.containerInfo;
              1 === v.nodeType ? v.textContent = "" : 9 === v.nodeType && v.documentElement && v.removeChild(v.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (D) {
          W(b, b.return, D);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          U = a;
          break;
        }
        U = b.return;
      }
      m = xk;
      xk = false;
      return m;
    }
    function zk(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && (0 !== (a & 8) ? null !== B && "function" === typeof B.markComponentPassiveEffectUnmountStarted && B.markComponentPassiveEffectUnmountStarted(b) : 0 !== (a & 4) && uc(b), wk(b, c, f), 0 !== (a & 8) ? null !== B && "function" === typeof B.markComponentPassiveEffectUnmountStopped && B.markComponentPassiveEffectUnmountStopped() : 0 !== (a & 4) && vc());
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Ak(a, b) {
      var c = b.updateQueue;
      c = null !== c ? c.lastEffect : null;
      if (null !== c) {
        var d = c = c.next;
        do {
          if ((d.tag & a) === a) {
            0 !== (a & 8) ? null !== B && "function" === typeof B.markComponentPassiveEffectMountStarted && B.markComponentPassiveEffectMountStarted(b) : 0 !== (a & 4) && null !== B && "function" === typeof B.markComponentLayoutEffectMountStarted && B.markComponentLayoutEffectMountStarted(b);
            var e = d.create;
            d.destroy = e();
            0 !== (a & 8) ? null !== B && "function" === typeof B.markComponentPassiveEffectMountStopped && B.markComponentPassiveEffectMountStopped() : 0 !== (a & 4) && null !== B && "function" === typeof B.markComponentLayoutEffectMountStopped && B.markComponentLayoutEffectMountStopped();
          }
          d = d.next;
        } while (d !== c);
      }
    }
    function Bk(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        if ("function" === typeof b) if (a.mode & 2) try {
          cj(), b(c);
        } finally {
          aj(a);
        }
        else b(c);
        else b.current = c;
      }
    }
    function Ck(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Ck(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[bg], delete b[cg], delete b[Cf], delete b[dg], delete b[eg]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Dk(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Ek(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Dk(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Fk(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Pf));
      else if (4 !== d && (a = a.child, null !== a)) for (Fk(a, b, c), a = a.sibling; null !== a; ) Fk(a, b, c), a = a.sibling;
    }
    function Gk(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Gk(a, b, c), a = a.sibling; null !== a; ) Gk(a, b, c), a = a.sibling;
    }
    var X = null;
    var Hk = false;
    function Ik(a, b, c) {
      for (c = c.child; null !== c; ) Jk(a, b, c), c = c.sibling;
    }
    function Jk(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          qk || vk(c, b);
        case 6:
          var d = X, e = Hk;
          X = null;
          Ik(a, b, c);
          X = d;
          Hk = e;
          null !== X && (Hk ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
          break;
        case 18:
          null !== X && (Hk ? (a = X, c = c.stateNode, 8 === a.nodeType ? Yf(a.parentNode, c) : 1 === a.nodeType && Yf(a, c), pd(a)) : Yf(X, c.stateNode));
          break;
        case 4:
          d = X;
          e = Hk;
          X = c.stateNode.containerInfo;
          Hk = true;
          Ik(a, b, c);
          X = d;
          Hk = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!qk && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? wk(c, b, g) : 0 !== (f & 4) && (uc(c), c.mode & 2 ? (cj(), wk(c, b, g), aj(c)) : wk(c, b, g), vc()));
              e = e.next;
            } while (e !== d);
          }
          Ik(a, b, c);
          break;
        case 1:
          if (!qk && (vk(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            uk(c, d);
          } catch (h) {
            W(c, b, h);
          }
          Ik(a, b, c);
          break;
        case 21:
          Ik(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (qk = (d = qk) || null !== c.memoizedState, Ik(a, b, c), qk = d) : Ik(a, b, c);
          break;
        default:
          Ik(a, b, c);
      }
    }
    function Kk(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new rk());
        b.forEach(function(b2) {
          var d = Lk.bind(null, a, b2);
          if (!c.has(b2)) {
            c.add(b2);
            if (mc) if (null !== sk && null !== tk) wj(tk, sk);
            else throw Error(p(413));
            b2.then(d, d);
          }
        });
      }
    }
    function Mk(a, b, c) {
      sk = c;
      tk = a;
      Nk(b, a);
      tk = sk = null;
    }
    function Ok(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Hk = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Hk = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Hk = true;
                break a;
            }
            h = h.return;
          }
          if (null === X) throw Error(p(160));
          Jk(f, g, e);
          X = null;
          Hk = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) Nk(b, a), b = b.sibling;
    }
    function Nk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ok(b, a);
          Pk(a);
          if (d & 4) {
            try {
              zk(3, a, a.return), Ak(3, a);
            } catch (m) {
              W(a, a.return, m);
            }
            if (a.mode & 2) {
              try {
                cj(), zk(5, a, a.return);
              } catch (m) {
                W(a, a.return, m);
              }
              aj(a);
            } else try {
              zk(5, a, a.return);
            } catch (m) {
              W(a, a.return, m);
            }
          }
          break;
        case 1:
          Ok(b, a);
          Pk(a);
          d & 512 && null !== c && vk(c, c.return);
          break;
        case 5:
          Ok(b, a);
          Pk(a);
          d & 512 && null !== c && vk(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (m) {
              W(a, a.return, m);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && $a(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var n = k[g], q = k[g + 1];
                "style" === n ? sb(e, q) : "dangerouslySetInnerHTML" === n ? nb(e, q) : "children" === n ? ob(e, q) : ua(e, n, q, l);
              }
              switch (h) {
                case "input":
                  ab(e, f);
                  break;
                case "textarea":
                  hb(e, f);
                  break;
                case "select":
                  var r = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var z = f.value;
                  null != z ? eb(e, !!f.multiple, z, false) : r !== !!f.multiple && (null != f.defaultValue ? eb(e, !!f.multiple, f.defaultValue, true) : eb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[cg] = f;
            } catch (m) {
              W(a, a.return, m);
            }
          }
          break;
        case 6:
          Ok(b, a);
          Pk(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (m) {
              W(a, a.return, m);
            }
          }
          break;
        case 3:
          Ok(b, a);
          Pk(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            pd(b.containerInfo);
          } catch (m) {
            W(a, a.return, m);
          }
          break;
        case 4:
          Ok(b, a);
          Pk(a);
          break;
        case 13:
          Ok(
            b,
            a
          );
          Pk(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (Qk = A()));
          d & 4 && Kk(a);
          break;
        case 22:
          n = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (qk = (l = qk) || n, Ok(b, a), qk = l) : Ok(b, a);
          Pk(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !n && 0 !== (a.mode & 1)) for (U = a, n = a.child; null !== n; ) {
              for (q = U = n; null !== U; ) {
                r = U;
                z = r.child;
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (r.mode & 2) try {
                      cj(), zk(4, r, r.return);
                    } finally {
                      aj(r);
                    }
                    else zk(
                      4,
                      r,
                      r.return
                    );
                    break;
                  case 1:
                    vk(r, r.return);
                    d = r.stateNode;
                    if ("function" === typeof d.componentWillUnmount) {
                      c = r;
                      b = r.return;
                      try {
                        uk(c, d);
                      } catch (m) {
                        W(c, b, m);
                      }
                    }
                    break;
                  case 5:
                    vk(r, r.return);
                    break;
                  case 22:
                    if (null !== r.memoizedState) {
                      Rk(q);
                      continue;
                    }
                }
                null !== z ? (z.return = r, U = z) : Rk(q);
              }
              n = n.sibling;
            }
            a: for (n = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === n) {
                  n = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (m) {
                    W(a, a.return, m);
                  }
                }
              } else if (6 === q.tag) {
                if (null === n) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (m) {
                  W(a, a.return, m);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                n === q && (n = null);
                q = q.return;
              }
              n === q && (n = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          Ok(b, a);
          Pk(a);
          d & 4 && Kk(a);
          break;
        case 21:
          break;
        default:
          Ok(b, a), Pk(a);
      }
    }
    function Pk(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Dk(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Ek(a);
              Gk(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Ek(a);
              Fk(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function Sk(a, b, c) {
      sk = c;
      tk = b;
      U = a;
      Tk(a, b, c);
      tk = sk = null;
    }
    function Tk(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== U; ) {
        var e = U, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || pk;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || qk;
            h = pk;
            var l = qk;
            pk = g;
            if ((qk = k) && !l) for (U = e; null !== U; ) g = U, k = g.child, 22 === g.tag && null !== g.memoizedState ? Uk(e) : null !== k ? (k.return = g, U = k) : Uk(e);
            for (; null !== f; ) U = f, Tk(f, b, c), f = f.sibling;
            U = e;
            pk = h;
            qk = l;
          }
          Vk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, U = f) : Vk(a, b, c);
      }
    }
    function Vk(a) {
      for (; null !== U; ) {
        var b = U;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                if (!qk) if (b.mode & 2) try {
                  cj(), Ak(5, b);
                } finally {
                  aj(b);
                }
                else Ak(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !qk) if (null === c) if (b.mode & 2) try {
                  cj(), d.componentDidMount();
                } finally {
                  aj(b);
                }
                else d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : ej(b.type, c.memoizedProps), f = c.memoizedState;
                  if (b.mode & 2) try {
                    cj(), d.componentDidUpdate(e, f, d.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    aj(b);
                  }
                  else d.componentDidUpdate(
                    e,
                    f,
                    d.__reactInternalSnapshotBeforeUpdate
                  );
                }
                var g = b.updateQueue;
                null !== g && Gh(b, g, d);
                break;
              case 3:
                var h = b.updateQueue;
                if (null !== h) {
                  var k = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      k = b.child.stateNode;
                      break;
                    case 1:
                      k = b.child.stateNode;
                  }
                  Gh(b, h, k);
                }
                break;
              case 5:
                var l = b.stateNode;
                if (null === c && b.flags & 4) {
                  k = l;
                  var n = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      n.autoFocus && k.focus();
                      break;
                    case "img":
                      n.src && (k.src = n.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                var q = b.memoizedProps, r = q.onCommit, z = q.onRender, m = b.stateNode.effectDuration;
                k = Ui;
                c = null === c ? "mount" : "update";
                Yi && (c = "nested-update");
                "function" === typeof z && z(b.memoizedProps.id, c, b.actualDuration, b.treeBaseDuration, b.actualStartTime, k);
                "function" === typeof r && r(b.memoizedProps.id, c, m, k);
                Wk(b);
                var w = b.return;
                a: for (; null !== w; ) {
                  switch (w.tag) {
                    case 3:
                      w.stateNode.effectDuration += m;
                      break a;
                    case 12:
                      w.stateNode.effectDuration += m;
                      break a;
                  }
                  w = w.return;
                }
                break;
              case 13:
                if (null === b.memoizedState) {
                  var C = b.alternate;
                  if (null !== C) {
                    var x = C.memoizedState;
                    if (null !== x) {
                      var y = x.dehydrated;
                      null !== y && pd(y);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            qk || b.flags & 512 && Bk(b);
          } catch (v) {
            W(b, b.return, v);
          }
        }
        if (b === a) {
          U = null;
          break;
        }
        k = b.sibling;
        if (null !== k) {
          k.return = b.return;
          U = k;
          break;
        }
        U = b.return;
      }
    }
    function Rk(a) {
      for (; null !== U; ) {
        var b = U;
        if (b === a) {
          U = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          U = c;
          break;
        }
        U = b.return;
      }
    }
    function Uk(a) {
      for (; null !== U; ) {
        var b = U;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              if (b.mode & 2) try {
                cj();
                var c = b.return;
                try {
                  Ak(4, b);
                } catch (l) {
                  W(b, c, l);
                }
              } finally {
                aj(b);
              }
              else {
                var d = b.return;
                try {
                  Ak(4, b);
                } catch (l) {
                  W(b, d, l);
                }
              }
              break;
            case 1:
              var e = b.stateNode;
              if ("function" === typeof e.componentDidMount) {
                var f = b.return;
                try {
                  e.componentDidMount();
                } catch (l) {
                  W(b, f, l);
                }
              }
              var g = b.return;
              try {
                Bk(b);
              } catch (l) {
                W(b, g, l);
              }
              break;
            case 5:
              var h = b.return;
              try {
                Bk(b);
              } catch (l) {
                W(b, h, l);
              }
          }
        } catch (l) {
          W(b, b.return, l);
        }
        if (b === a) {
          U = null;
          break;
        }
        var k = b.sibling;
        if (null !== k) {
          k.return = b.return;
          U = k;
          break;
        }
        U = b.return;
      }
    }
    var Xk = Math.ceil;
    var Yk = va.ReactCurrentDispatcher;
    var Zk = va.ReactCurrentOwner;
    var $k = va.ReactCurrentBatchConfig;
    var K = 0;
    var Q = null;
    var Y = null;
    var Z = 0;
    var Jj = 0;
    var Ij = hg(0);
    var T = 0;
    var al = null;
    var Fh = 0;
    var bl = 0;
    var cl = 0;
    var dl = null;
    var el = null;
    var Qk = 0;
    var mk = Infinity;
    var fl = null;
    var qj = false;
    var rj = null;
    var tj = null;
    var gl = false;
    var hl = null;
    var il = 0;
    var jl = [];
    var kl = 0;
    var ll = null;
    var ml = -1;
    var nl = 0;
    function Ri() {
      return 0 !== (K & 6) ? A() : -1 !== ml ? ml : ml = A();
    }
    function Oi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Yg.transition) return 0 === nl && (nl = Kc()), nl;
      a = E;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : xd(a.type);
      return a;
    }
    function ui(a, b, c, d) {
      if (50 < kl) throw kl = 0, ll = null, Error(p(185));
      Mc(a, c, d);
      if (0 === (K & 2) || a !== Q) mc && Pc(a, b, c), a === Q && (0 === (K & 2) && (bl |= c), 4 === T && ol(a, Z)), pl(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (mk = A() + 500, tg && xg());
    }
    function pl(a, b) {
      var c = a.callbackNode;
      Ic(a, b);
      var d = Gc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? wg(ql.bind(null, a)) : vg(ql.bind(null, a)), Xf(function() {
          0 === (K & 6) && xg();
        }), c = null;
        else {
          switch (Rc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = rl(c, sl.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function sl(a, b) {
      Zi = Yi = false;
      ml = -1;
      nl = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (tl() && a.callbackNode !== c) return null;
      var d = Gc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = ul(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = vl();
        if (Q !== a || Z !== b) {
          if (mc) {
            var g = a.memoizedUpdaters;
            0 < g.size && (wj(a, Z), g.clear());
            Qc(a, b);
          }
          fl = null;
          mk = A() + 500;
          wl(a, b);
        }
        wc(b);
        do
          try {
            xl();
            break;
          } catch (h) {
            yl(a, h);
          }
        while (1);
        nh();
        Yk.current = f;
        K = e;
        null !== Y ? (null !== B && "function" === typeof B.markRenderYielded && B.markRenderYielded(), b = 0) : (xc(), Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = Jc(a), 0 !== e && (d = e, b = zl(a, e)));
        if (1 === b) throw c = al, wl(a, 0), ol(a, d), pl(a, A()), c;
        if (6 === b) ol(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Al(e) && (b = ul(a, d), 2 === b && (f = Jc(a), 0 !== f && (d = f, b = zl(a, f))), 1 === b)) throw c = al, wl(a, 0), ol(a, d), pl(a, A()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Cl(a, el, fl);
              break;
            case 3:
              ol(a, d);
              if ((d & 130023424) === d && (b = Qk + 500 - A(), 10 < b)) {
                if (0 !== Gc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  Ri();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Tf(Cl.bind(null, a, el, fl), b);
                break;
              }
              Cl(a, el, fl);
              break;
            case 4:
              ol(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) g = 31 - Ac(d), f = 1 << g, g = b[g], g > e && (e = g), d &= ~f;
              d = e;
              d = A() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * Xk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Tf(Cl.bind(null, a, el, fl), d);
                break;
              }
              Cl(a, el, fl);
              break;
            case 5:
              Cl(a, el, fl);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      pl(a, A());
      return a.callbackNode === c ? sl.bind(null, a) : null;
    }
    function zl(a, b) {
      var c = dl;
      a.current.memoizedState.isDehydrated && (wl(a, b).flags |= 256);
      a = ul(a, b);
      2 !== a && (b = el, el = c, null !== b && lk(b));
      return a;
    }
    function lk(a) {
      null === el ? el = a : el.push.apply(el, a);
    }
    function Al(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!Ve(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function ol(a, b) {
      b &= ~cl;
      b &= ~bl;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - Ac(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function ql(a) {
      Yi = Zi;
      Zi = false;
      if (0 !== (K & 6)) throw Error(p(327));
      tl();
      var b = Gc(a, 0);
      if (0 === (b & 1)) return pl(a, A()), null;
      var c = ul(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = Jc(a);
        0 !== d && (b = d, c = zl(a, d));
      }
      if (1 === c) throw c = al, wl(a, 0), ol(a, b), pl(a, A()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Cl(a, el, fl);
      pl(a, A());
      return null;
    }
    function Dl(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (mk = A() + 500, tg && xg());
      }
    }
    function El(a) {
      null !== hl && 0 === hl.tag && 0 === (K & 6) && tl();
      var b = K;
      K |= 1;
      var c = $k.transition, d = E;
      try {
        if ($k.transition = null, E = 1, a) return a();
      } finally {
        E = d, $k.transition = c, K = b, 0 === (K & 6) && xg();
      }
    }
    function nk() {
      Jj = Ij.current;
      G(Ij);
    }
    function wl(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Uf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        Kg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && ng();
            break;
          case 3:
            Nh();
            G(jg);
            G(I);
            Sh();
            break;
          case 5:
            Ph(d);
            break;
          case 4:
            Nh();
            break;
          case 13:
            G(L);
            break;
          case 19:
            G(L);
            break;
          case 10:
            oh(d.type._context);
            break;
          case 22:
          case 23:
            nk();
        }
        c = c.return;
      }
      Q = a;
      Y = a = ch(a.current, null);
      Z = Jj = b;
      T = 0;
      al = null;
      cl = bl = Fh = 0;
      el = dl = null;
      if (null !== th) {
        for (b = 0; b < th.length; b++) if (c = th[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        th = null;
      }
      return a;
    }
    function yl(a, b) {
      do {
        var c = Y;
        try {
          nh();
          Th.current = ei;
          if (Wh) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Wh = false;
          }
          Vh = 0;
          O = N = M = null;
          Xh = false;
          Yh = 0;
          Zk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            al = b;
            Y = null;
            break;
          }
          c.mode & 2 && $i(c, true);
          tc();
          if (null !== b && "object" === typeof b && "function" === typeof b.then) {
            var f = b;
            null !== B && "function" === typeof B.markComponentSuspended && B.markComponentSuspended(c, f, Z);
          } else null !== B && "function" === typeof B.markComponentErrored && B.markComponentErrored(
            c,
            b,
            Z
          );
          a: {
            var g = a, h = c.return, k = c;
            f = b;
            b = Z;
            k.flags |= 32768;
            mc && wj(g, b);
            if (null !== f && "object" === typeof f && "function" === typeof f.then) {
              var l = f, n = k, q = n.tag;
              if (0 === (n.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r = n.alternate;
                r ? (n.updateQueue = r.updateQueue, n.memoizedState = r.memoizedState, n.lanes = r.lanes) : (n.updateQueue = null, n.memoizedState = null);
              }
              var z = xj(h);
              if (null !== z) {
                z.flags &= -257;
                yj(z, h, k, g, b);
                z.mode & 1 && uj(g, l, b);
                b = z;
                f = l;
                var m = b.updateQueue;
                if (null === m) {
                  var w = /* @__PURE__ */ new Set();
                  w.add(f);
                  b.updateQueue = w;
                } else m.add(f);
                break a;
              } else {
                if (0 === (b & 1)) {
                  uj(g, l, b);
                  Zj();
                  break a;
                }
                f = Error(p(426));
              }
            } else if (J && k.mode & 1) {
              var C = xj(h);
              if (null !== C) {
                0 === (C.flags & 65536) && (C.flags |= 256);
                yj(C, h, k, g, b);
                Xg(lj(f, k));
                break a;
              }
            }
            g = f = lj(f, k);
            4 !== T && (T = 2);
            null === dl ? dl = [g] : dl.push(g);
            g = h;
            do {
              switch (g.tag) {
                case 3:
                  g.flags |= 65536;
                  b &= -b;
                  g.lanes |= b;
                  var x = pj(g, f, b);
                  Dh(g, x);
                  break a;
                case 1:
                  k = f;
                  var y = g.type, v = g.stateNode;
                  if (0 === (g.flags & 128) && ("function" === typeof y.getDerivedStateFromError || null !== v && "function" === typeof v.componentDidCatch && (null === tj || !tj.has(v)))) {
                    g.flags |= 65536;
                    b &= -b;
                    g.lanes |= b;
                    var D = sj(g, k, b);
                    Dh(g, D);
                    break a;
                  }
              }
              g = g.return;
            } while (null !== g);
          }
          Fl(c);
        } catch (ca) {
          b = ca;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function vl() {
      var a = Yk.current;
      Yk.current = ei;
      return null === a ? ei : a;
    }
    function Zj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (Fh & 268435455) && 0 === (bl & 268435455) || ol(Q, Z);
    }
    function ul(a, b) {
      var c = K;
      K |= 2;
      var d = vl();
      if (Q !== a || Z !== b) {
        if (mc) {
          var e = a.memoizedUpdaters;
          0 < e.size && (wj(a, Z), e.clear());
          Qc(a, b);
        }
        fl = null;
        wl(a, b);
      }
      wc(b);
      do
        try {
          Gl();
          break;
        } catch (f) {
          yl(a, f);
        }
      while (1);
      nh();
      K = c;
      Yk.current = d;
      if (null !== Y) throw Error(p(261));
      xc();
      Q = null;
      Z = 0;
      return T;
    }
    function Gl() {
      for (; null !== Y; ) Hl(Y);
    }
    function xl() {
      for (; null !== Y && !cc(); ) Hl(Y);
    }
    function Hl(a) {
      var b = a.alternate;
      0 !== (a.mode & 2) ? (Wi = Ti(), 0 > a.actualStartTime && (a.actualStartTime = Ti()), b = Il(b, a, Jj), $i(a, true)) : b = Il(b, a, Jj);
      a.memoizedProps = a.pendingProps;
      null === b ? Fl(a) : Y = b;
      Zk.current = null;
    }
    function Fl(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (0 === (b.mode & 2)) c = kk(c, b, Jj);
          else {
            var d = b;
            Wi = Ti();
            0 > d.actualStartTime && (d.actualStartTime = Ti());
            c = kk(c, b, Jj);
            $i(b, false);
          }
          if (null !== c) {
            Y = c;
            return;
          }
        } else {
          c = ok(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (0 !== (b.mode & 2)) {
            $i(b, false);
            c = b.actualDuration;
            for (d = b.child; null !== d; ) c += d.actualDuration, d = d.sibling;
            b.actualDuration = c;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Cl(a, b, c) {
      var d = E, e = $k.transition;
      try {
        $k.transition = null, E = 1, Jl(a, b, c, d);
      } finally {
        $k.transition = e, E = d;
      }
      return null;
    }
    function Jl(a, b, c, d) {
      do
        tl();
      while (null !== hl);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      null !== B && "function" === typeof B.markCommitStarted && B.markCommitStarted(e);
      if (null === c) return rc(), null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Nc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || gl || (gl = true, rl(hc, function() {
        tl();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = $k.transition;
        $k.transition = null;
        var g = E;
        E = 1;
        var h = K;
        K |= 4;
        Zk.current = null;
        yk(a, c);
        Ui = Ti();
        Mk(a, c, e);
        bf(Rf);
        rd = !!Qf;
        Rf = Qf = null;
        a.current = c;
        null !== B && "function" === typeof B.markLayoutEffectsStarted && B.markLayoutEffectsStarted(e);
        Sk(c, a, e);
        null !== B && "function" === typeof B.markLayoutEffectsStopped && B.markLayoutEffectsStopped();
        dc();
        K = h;
        E = g;
        $k.transition = f;
      } else a.current = c, Ui = Ti();
      gl && (gl = false, hl = a, il = e);
      f = a.pendingLanes;
      0 === f && (tj = null);
      nc(c.stateNode, d);
      mc && a.memoizedUpdaters.clear();
      pl(a, A());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (qj) throw qj = false, a = rj, rj = null, a;
      0 !== (il & 1) && 0 !== a.tag && tl();
      f = a.pendingLanes;
      0 !== (f & 1) ? (Zi = true, a === ll ? kl++ : (kl = 0, ll = a)) : kl = 0;
      xg();
      rc();
      return null;
    }
    function tl() {
      if (null !== hl) {
        var a = Rc(il), b = $k.transition, c = E;
        try {
          $k.transition = null;
          E = 16 > a ? 16 : a;
          if (null === hl) var d = false;
          else {
            a = hl;
            var e = il;
            hl = null;
            il = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            null !== B && "function" === typeof B.markPassiveEffectsStarted && B.markPassiveEffectsStarted(e);
            e = K;
            K |= 4;
            for (U = a.current; null !== U; ) {
              var f = U, g = f.child;
              if (0 !== (U.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (U = l; null !== U; ) {
                      var n = U, q = n;
                      switch (q.tag) {
                        case 0:
                        case 11:
                        case 15:
                          q.mode & 2 ? (Xi = Ti(), zk(8, q, f), bj(q)) : zk(8, q, f);
                      }
                      var r = n.child;
                      if (null !== r) r.return = n, U = r;
                      else for (; null !== U; ) {
                        n = U;
                        var z = n.sibling, m = n.return;
                        Ck(n);
                        if (n === l) {
                          U = null;
                          break;
                        }
                        if (null !== z) {
                          z.return = m;
                          U = z;
                          break;
                        }
                        U = m;
                      }
                    }
                  }
                  var w = f.alternate;
                  if (null !== w) {
                    var C = w.child;
                    if (null !== C) {
                      w.child = null;
                      do {
                        var x = C.sibling;
                        C.sibling = null;
                        C = x;
                      } while (null !== C);
                    }
                  }
                  U = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, U = g;
              else b: for (; null !== U; ) {
                f = U;
                if (0 !== (f.flags & 2048)) switch (k = f, k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    k.mode & 2 ? (Xi = Ti(), zk(9, k, k.return), bj(k)) : zk(9, k, k.return);
                }
                var y = f.sibling;
                if (null !== y) {
                  y.return = f.return;
                  U = y;
                  break b;
                }
                U = f.return;
              }
            }
            var v = a.current;
            for (U = v; null !== U; ) {
              g = U;
              var D = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== D) D.return = g, U = D;
              else b: for (g = v; null !== U; ) {
                h = U;
                if (0 !== (h.flags & 2048)) try {
                  switch (l = h, l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      if (l.mode & 2) {
                        Xi = Ti();
                        try {
                          Ak(9, l);
                        } finally {
                          bj(l);
                        }
                      } else Ak(9, l);
                  }
                } catch (Pj) {
                  W(h, h.return, Pj);
                }
                if (h === g) {
                  U = null;
                  break b;
                }
                var ca = h.sibling;
                if (null !== ca) {
                  ca.return = h.return;
                  U = ca;
                  break b;
                }
                U = h.return;
              }
            }
            v = jl;
            jl = [];
            for (D = 0; D < v.length; D++) {
              var R = v[D];
              if (0 !== (R.flags & 4)) switch (R.tag) {
                case 12:
                  var sa = R.stateNode.passiveEffectDuration, V = R.memoizedProps, Bl = V.id, yi = V.onPostCommit;
                  ca = Ui;
                  var zi = null === R.alternate ? "mount" : "update";
                  Yi && (zi = "nested-update");
                  "function" === typeof yi && yi(Bl, zi, sa, ca);
                  var lb = R.return;
                  b: for (; null !== lb; ) {
                    switch (lb.tag) {
                      case 3:
                        lb.stateNode.passiveEffectDuration += sa;
                        break b;
                      case 12:
                        lb.stateNode.passiveEffectDuration += sa;
                        break b;
                    }
                    lb = lb.return;
                  }
              }
            }
            null !== B && "function" === typeof B.markPassiveEffectsStopped && B.markPassiveEffectsStopped();
            K = e;
            xg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (Pj) {
            }
            var Qj = a.current.stateNode;
            Qj.effectDuration = 0;
            Qj.passiveEffectDuration = 0;
            d = true;
          }
          return d;
        } finally {
          E = c, $k.transition = b;
        }
      }
      return false;
    }
    function Wk(a) {
      jl.push(a);
      gl || (gl = true, rl(hc, function() {
        tl();
        return null;
      }));
    }
    function Kl(a, b, c) {
      b = lj(c, b);
      b = pj(a, b, 1);
      a = Bh(a, b, 1);
      b = Ri();
      null !== a && (Mc(a, 1, b), pl(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Kl(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Kl(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === tj || !tj.has(d))) {
            a = lj(c, a);
            a = sj(b, a, 1);
            b = Bh(b, a, 1);
            a = Ri();
            null !== b && (Mc(b, 1, a), pl(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function vj(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = Ri();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > A() - Qk ? wl(a, 0) : cl |= c);
      pl(a, b);
    }
    function Ll(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = Ec, Ec <<= 1, 0 === (Ec & 130023424) && (Ec = 4194304)));
      var c = Ri();
      a = wh(a, b);
      null !== a && (Mc(a, b, c), pl(a, c));
    }
    function ak(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Ll(a, c);
    }
    function Lk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Ll(a, c);
    }
    var Il;
    Il = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || jg.current) rh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return rh = false, ek(a, b, c);
        rh = 0 !== (a.flags & 131072) ? true : false;
      }
      else rh = false, J && 0 !== (b.flags & 1048576) && Ig(b, Bg, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          Mj(a, b);
          a = b.pendingProps;
          var e = lg(b, I.current);
          qh(b, c);
          sc(b);
          e = ai(null, b, d, a, e, c);
          var f = fi();
          tc();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, mg(d) ? (f = true, qg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, yh(b), e.updater = gj, b.stateNode = e, e._reactInternals = b, kj(b, d, a, c), b = Nj(null, b, d, true, f, c)) : (b.tag = 0, J && f && Jg(b), Aj(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            Mj(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Ml(d);
            a = ej(d, a);
            switch (e) {
              case 0:
                b = Gj(null, b, d, a, c);
                break a;
              case 1:
                b = Lj(null, b, d, a, c);
                break a;
              case 11:
                b = Bj(null, b, d, a, c);
                break a;
              case 14:
                b = Dj(null, b, d, ej(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ej(d, e), Gj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ej(d, e), Lj(a, b, d, e, c);
        case 3:
          a: {
            Oj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            zh(a, b);
            Eh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = lj(Error(p(423)), b);
              b = Rj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = lj(Error(p(424)), b);
              b = Rj(a, b, d, c, e);
              break a;
            } else for (Mg = Zf(b.stateNode.containerInfo.firstChild), Lg = b, J = true, Ng = null, c = ih(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Wg();
              if (d === e) {
                b = Cj(a, b, c);
                break a;
              }
              Aj(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Oh(b), null === a && Sg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Sf(d, e) ? g = null : null !== f && Sf(d, f) && (b.flags |= 32), Kj(a, b), Aj(a, b, g, c), b.child;
        case 6:
          return null === a && Sg(b), null;
        case 13:
          return Uj(a, b, c);
        case 4:
          return Mh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = hh(b, null, d, c) : Aj(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ej(d, e), Bj(a, b, d, e, c);
        case 7:
          return Aj(a, b, b.pendingProps, c), b.child;
        case 8:
          return Aj(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return b.flags |= 4, d = b.stateNode, d.effectDuration = 0, d.passiveEffectDuration = 0, Aj(
            a,
            b,
            b.pendingProps.children,
            c
          ), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            H(jh, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (Ve(f.value, g)) {
              if (f.children === e.children && !jg.current) {
                b = Cj(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = Ah(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var n = l.pending;
                        null === n ? k.next = k : (k.next = n.next, n.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    ph(f.return, c, b);
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                ph(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Aj(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, qh(b, c), e = sh(e), sc(b), d = d(e), tc(), b.flags |= 1, Aj(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = ej(d, b.pendingProps), e = ej(d.type, e), Dj(a, b, d, e, c);
        case 15:
          return Fj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ej(d, e), Mj(a, b), b.tag = 1, mg(d) ? (a = true, qg(b)) : a = false, qh(b, c), ij(b, d, e), kj(b, d, e, c), Nj(null, b, d, true, a, c);
        case 19:
          return dk(a, b, c);
        case 22:
          return Hj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function wj(a, b) {
      mc && a.memoizedUpdaters.forEach(function(c) {
        Pc(a, c, b);
      });
    }
    function rl(a, b) {
      return ac(a, b);
    }
    function Nl(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
      this.actualDuration = 0;
      this.actualStartTime = -1;
      this.treeBaseDuration = this.selfBaseDuration = 0;
    }
    function Pg(a, b, c, d) {
      return new Nl(a, b, c, d);
    }
    function Ej(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Ml(a) {
      if ("function" === typeof a) return Ej(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function ch(a, b) {
      var c = a.alternate;
      null === c ? (c = Pg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null, c.actualDuration = 0, c.actualStartTime = -1);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      c.selfBaseDuration = a.selfBaseDuration;
      c.treeBaseDuration = a.treeBaseDuration;
      return c;
    }
    function eh(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) Ej(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return gh(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Pg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, a;
        case Ea:
          return a = Pg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Pg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return Vj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Pg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function gh(a, b, c, d) {
      a = Pg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function Vj(a, b, c, d) {
      a = Pg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function dh(a, b, c) {
      a = Pg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function fh(a, b, c) {
      b = Pg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function Ol(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = Lc(0);
      this.expirationTimes = Lc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Lc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
      this.passiveEffectDuration = this.effectDuration = 0;
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      a = this.pendingUpdatersLaneMap = [];
      for (b = 0; 31 > b; b++) a.push(/* @__PURE__ */ new Set());
    }
    function Pl(a, b, c, d, e, f, g, h, k) {
      a = new Ol(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      mc && (b |= 2);
      f = Pg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      yh(f);
      return a;
    }
    function Ql(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: xa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function Rl(a) {
      if (!a) return ig;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (mg(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (mg(c)) return pg(a, c, b);
      }
      return b;
    }
    function Sl(a, b, c, d, e, f, g, h, k) {
      a = Pl(c, d, true, a, e, f, g, h, k);
      a.context = Rl(null);
      c = a.current;
      d = Ri();
      e = Oi(c);
      f = Ah(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      Bh(c, f, e);
      a.current.lanes = e;
      Mc(a, e, d);
      pl(a, d);
      return a;
    }
    function Tl(a, b, c, d) {
      var e = b.current, f = Ri(), g = Oi(e);
      null !== B && "function" === typeof B.markRenderScheduled && B.markRenderScheduled(g);
      c = Rl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = Ah(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = Bh(e, b, g);
      null !== a && (ui(a, e, g, f), Ch(a, e, g));
      return g;
    }
    function Ul(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function Vl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function Wl(a, b) {
      Vl(a, b);
      (a = a.alternate) && Vl(a, b);
    }
    function Xl() {
      return null;
    }
    var Yl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function Zl(a) {
      this._internalRoot = a;
    }
    $l.prototype.render = Zl.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      Tl(a, b, null, null);
    };
    $l.prototype.unmount = Zl.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        El(function() {
          Tl(null, a, null, null);
        });
        b[If] = null;
      }
    };
    function $l(a) {
      this._internalRoot = a;
    }
    $l.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Vc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < dd.length && 0 !== b && b < dd[c].priority; c++) ;
        dd.splice(c, 0, a);
        0 === c && id(a);
      }
    };
    function am(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function bm(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function cm() {
    }
    function dm(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = Ul(g);
            f.call(a2);
          };
        }
        var g = Sl(b, d, a, 0, null, false, false, "", cm);
        a._reactRootContainer = g;
        a[If] = g.current;
        Gf(8 === a.nodeType ? a.parentNode : a);
        El();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = Ul(k);
          h.call(a2);
        };
      }
      var k = Pl(a, 0, false, null, null, false, false, "", cm);
      a._reactRootContainer = k;
      a[If] = k.current;
      Gf(8 === a.nodeType ? a.parentNode : a);
      El(function() {
        Tl(b, k, c, d);
      });
      return k;
    }
    function em(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = Ul(g);
            h.call(a2);
          };
        }
        Tl(b, g, a, e);
      } else g = dm(c, b, a, e, d);
      return Ul(g);
    }
    Sc = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = Fc(b.pendingLanes);
            0 !== c && (Oc(b, c | 1), pl(b, A()), 0 === (K & 6) && (mk = A() + 500, xg()));
          }
          break;
        case 13:
          El(function() {
            var b2 = wh(a, 1);
            if (null !== b2) {
              var c2 = Ri();
              ui(b2, a, 1, c2);
            }
          }), Wl(a, 1);
      }
    };
    Tc = function(a) {
      if (13 === a.tag) {
        var b = wh(a, 134217728);
        if (null !== b) {
          var c = Ri();
          ui(b, a, 134217728, c);
        }
        Wl(a, 134217728);
      }
    };
    Uc = function(a) {
      if (13 === a.tag) {
        var b = Oi(a), c = wh(a, b);
        if (null !== c) {
          var d = Ri();
          ui(c, a, b, d);
        }
        Wl(a, b);
      }
    };
    Vc = function() {
      return E;
    };
    Wc = function(a, b) {
      var c = E;
      try {
        return E = a, b();
      } finally {
        E = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          ab(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                ab(d, e);
              }
            }
          }
          break;
        case "textarea":
          hb(a, c);
          break;
        case "select":
          b = c.value, null != b && eb(a, !!c.multiple, b, false);
      }
    };
    Gb = Dl;
    Hb = El;
    var fm = { usingClientEntryPoint: false, Events: [Cb, Ie, Db, Eb, Fb, Dl] };
    var gm = { findFiberByHostInstance: jd, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    (function(a) {
      if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return false;
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) return true;
      try {
        a = u({}, a, { getLaneLabelMap: pc, injectProfilingHooks: oc }), kc = b.inject(a), lc = b;
      } catch (c) {
      }
      return b.checkDCE ? true : false;
    })({
      bundleType: gm.bundleType,
      version: gm.version,
      rendererPackageName: gm.rendererPackageName,
      rendererConfig: gm.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: va.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      },
      findFiberByHostInstance: gm.findFiberByHostInstance || Xl,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    });
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fm;
    exports2.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!am(b)) throw Error(p(200));
      return Ql(a, b, null, c);
    };
    exports2.createRoot = function(a, b) {
      if (!am(a)) throw Error(p(299));
      var c = false, d = "", e = Yl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = Pl(a, 1, false, null, null, c, false, d, e);
      a[If] = b.current;
      Gf(8 === a.nodeType ? a.parentNode : a);
      return new Zl(b);
    };
    exports2.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    exports2.flushSync = function(a) {
      return El(a);
    };
    exports2.hydrate = function(a, b, c) {
      if (!bm(b)) throw Error(p(200));
      return em(null, a, b, true, c);
    };
    exports2.hydrateRoot = function(a, b, c) {
      if (!am(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = Yl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = Sl(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[If] = b.current;
      Gf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new $l(b);
    };
    exports2.render = function(a, b, c) {
      if (!bm(b)) throw Error(p(200));
      return em(null, a, b, false, c);
    };
    exports2.unmountComponentAtNode = function(a) {
      if (!bm(a)) throw Error(p(40));
      return a._reactRootContainer ? (El(function() {
        em(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[If] = null;
        });
      }), true) : false;
    };
    exports2.unstable_batchedUpdates = Dl;
    exports2.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!bm(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return em(a, b, c, false, d);
    };
    exports2.version = "18.3.1-next-f1338f8080-20240426";
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
  }
});

// node_modules/react-dom-18.3.1/profiling.js
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  if (false) {
    throw new Error("^_^");
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
if (true) {
  checkDCE();
  module.exports = require_react_dom_profiling_min();
} else {
  module.exports = null;
}
/*! Bundled license information:

react-dom-18.3.1/cjs/react-dom.profiling.min.js:
  (**
   * @license React
   * react-dom.profiling.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

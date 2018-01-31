/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

 $( document ).ready(function() {
  //  $(".image-3").hide();
   $(".image-3").fadeOut('fast');
   $('.div-block-10').hover(function(){
     $(".image-3").fadeIn('200');
 });
});

// $( "#target" ).scroll(function() {
//   $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
// });

var $ = jQuery;
var Webflow = { w: Webflow };
window.Webflow = Webflow;
var define = Webflow.define;

! function(t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
  }
  var n = {};
  e.m = t, e.c = n, e.d = function(t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, e.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e(e.s = 84)
}([function(t, e) {
  var n = Array.isArray;
  t.exports = n
}, function(t, e, n) {
  function r(t) {
    c.env() && (h(t.design) && p.on("__wf_design", t.design), h(t.preview) && p.on("__wf_preview", t.preview)), h(t.destroy) && p.on("__wf_destroy", t.destroy), t.ready && h(t.ready) && function(t) {
      if (m) return void t.ready();
      if (g.contains(f, t.ready)) return;
      f.push(t.ready)
    }(t)
  }

  function i(t) {
    h(t.design) && p.off("__wf_design", t.design), h(t.preview) && p.off("__wf_preview", t.preview), h(t.destroy) && p.off("__wf_destroy", t.destroy), t.ready && h(t.ready) && function(t) {
      f = g.filter(f, function(e) {
        return e !== t.ready
      })
    }(t)
  }

  function o(t, e) {
    var n = [],
      r = {};
    return r.up = g.throttle(function(t) {
      g.each(n, function(e) {
        e(t)
      })
    }), t && e && t.on(e, r.up), r.on = function(t) {
      "function" == typeof t && (g.contains(n, t) || n.push(t))
    }, r.off = function(t) {
      n = arguments.length ? g.filter(n, function(e) {
        return e !== t
      }) : []
    }, r
  }

  function a(t) {
    h(t) && t()
  }

  function u() {
    E && (E.reject(), p.off("load", E.resolve)), E = new d.Deferred, p.on("load", E.resolve)
  }
  var c = {},
    s = {},
    f = [],
    l = window.Webflow || [],
    d = window.jQuery,
    p = d(window),
    v = d(document),
    h = d.isFunction,
    g = c._ = n(86),
    y = n(46) && d.tram,
    m = !1,
    b = !1;
  y.config.hideBackface = !1, y.config.keepInherited = !0, c.define = function(t, e, n) {
    s[t] && i(s[t]);
    var o = s[t] = e(d, g, n) || {};
    return r(o), o
  }, c.require = function(t) {
    return s[t]
  }, c.push = function(t) {
    m ? h(t) && t() : l.push(t)
  }, c.env = function(t) {
    var e = window.__wf_design,
      n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
  };
  var w = navigator.userAgent.toLowerCase(),
    x = c.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    _ = c.env.chrome = /chrome/.test(w) && /Google/.test(navigator.vendor) && parseInt(w.match(/chrome\/(\d+)\./)[1], 10),
    O = c.env.ios = /(ipod|iphone|ipad)/.test(w);
  c.env.safari = /safari/.test(w) && !_ && !O;
  var j;
  x && v.on("touchstart mousedown", function(t) {
    j = t.target
  }), c.validClick = x ? function(t) {
    return t === j || d.contains(t, j)
  } : function() {
    return !0
  };
  var I = "resize.webflow orientationchange.webflow load.webflow";
  c.resize = o(p, I), c.scroll = o(p, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), c.redraw = o(), c.location = function(t) {
    window.location = t
  }, c.env() && (c.location = function() {}), c.ready = function() {
    m = !0, b ? (b = !1, g.each(s, r)) : g.each(f, a), g.each(l, a), c.resize.up()
  };
  var E;
  c.load = function(t) {
    E.then(t)
  }, c.destroy = function(t) {
    t = t || {}, b = !0, p.triggerHandler("__wf_destroy"), null != t.domready && (m = t.domready), g.each(s, i), c.resize.off(), c.scroll.off(), c.redraw.off(), f = [], l = [], "pending" === E.state() && u()
  }, d(c.ready), u(), t.exports = window.Webflow = c
}, function(t, e, n) {
  var r = n(58),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
  t.exports = o
}, function(t, e) {
  t.exports = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function(t, e, n) {
  var r = n(127),
    i = n(132);
  t.exports = function(t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0
  }
}, function(t, e) {
  t.exports = function(t) {
    return null != t && "object" == typeof t
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "l", function() {
    return r
  }), n.d(e, "m", function() {
    return i
  }), n.d(e, "n", function() {
    return o
  }), n.d(e, "k", function() {
    return a
  }), n.d(e, "j", function() {
    return u
  }), n.d(e, "o", function() {
    return c
  }), n.d(e, "c", function() {
    return s
  }), n.d(e, "d", function() {
    return f
  }), n.d(e, "e", function() {
    return l
  }), n.d(e, "b", function() {
    return d
  }), n.d(e, "i", function() {
    return p
  }), n.d(e, "f", function() {
    return v
  }), n.d(e, "h", function() {
    return h
  }), n.d(e, "g", function() {
    return g
  }), n.d(e, "a", function() {
    return y
  }), n.d(e, "p", function() {
    return m
  });
  var r = "IX2_RAW_DATA_IMPORTED",
    i = "IX2_SESSION_STARTED",
    o = "IX2_SESSION_STOPPED",
    a = "IX2_PREVIEW_REQUESTED",
    u = "IX2_PLAYBACK_REQUESTED",
    c = "IX2_STOP_REQUESTED",
    s = "IX2_CLEAR_REQUESTED",
    f = "IX2_EVENT_LISTENER_ADDED",
    l = "IX2_EVENT_STATE_CHANGED",
    d = "IX2_ANIMATION_FRAME_CHANGED",
    p = "IX2_PARAMETER_CHANGED",
    v = "IX2_INSTANCE_ADDED",
    h = "IX2_INSTANCE_STARTED",
    g = "IX2_INSTANCE_REMOVED",
    y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
    m = "IX2_VIEWPORT_WIDTH_CHANGED"
}, function(t, e, n) {
  var r = n(115),
    i = n(167),
    o = n(37),
    a = n(0),
    u = n(174);
  t.exports = function(t) {
    return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
  }
}, function(t, e, n) {
  var r = n(10),
    i = n(128),
    o = n(129),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r ? r.toStringTag : void 0;
  t.exports = function(t) {
    return null == t ? void 0 === t ? u : a : (t = Object(t), c && c in t ? i(t) : o(t))
  }
}, function(t, e, n) {
  var r = n(57),
    i = n(30);
  t.exports = function(t) {
    return null != t && i(t.length) && !r(t)
  }
}, function(t, e, n) {
  var r = n(2).Symbol;
  t.exports = r
}, function(t, e, n) {
  var r = n(21),
    i = 1 / 0;
  t.exports = function(t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e
  }
}, function(t, e, n) {
  function r(t) {
    return t instanceof Array ? t.slice() : t && "object" == typeof t ? f(new t.constructor, t) : t
  }

  function i() {
    function t(n, i) {
      Array.isArray(n) && Array.isArray(i) || u(!Array.isArray(i), "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."), u("object" == typeof i && null !== i, "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.", Object.keys(e).join(", "));
      var o = n;
      l(i);
      return l(i).forEach(function(a) {
        if (c.call(e, a)) o = e[a](i[a], o, i, n);
        else {
          var u = t(n[a], i[a]);
          u !== o[a] && (o === n && (o = r(n)), o[a] = u)
        }
      }), o
    }
    var e = f({}, d);
    return t.extend = function(t, n) {
      e[t] = n
    }, t
  }

  function o(t, e, n) {
    u(Array.isArray(t), "update(): expected target of %s to be an array; got %s.", n, t);
    var r = e[n];
    u(Array.isArray(r), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", n, r)
  }

  function a(t) {
    u(Array.isArray(t), "update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", t)
  }
  var u = n(108),
    c = Object.prototype.hasOwnProperty,
    s = Array.prototype.splice,
    f = Object.assign || function(t, e) {
      return l(e).forEach(function(n) {
        c.call(e, n) && (t[n] = e[n])
      }), t
    },
    l = "function" == typeof Object.getOwnPropertySymbols ? function(t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t))
    } : function(t) {
      return Object.keys(t)
    },
    d = {
      $push: function(t, e, n) {
        return o(e, n, "$push"), e.concat(t)
      },
      $unshift: function(t, e, n) {
        return o(e, n, "$unshift"), t.concat(e)
      },
      $splice: function(t, e, n, i) {
        var o = e === i ? r(i) : e;
        return function(t, e) {
          u(Array.isArray(t), "Expected $splice target to be an array; got %s", t), a(e.$splice)
        }(o, n), t.forEach(function(t) {
          a(t), s.apply(o, t)
        }), o
      },
      $set: function(t, e, n) {
        return function(t) {
          u(1 === Object.keys(t).length, "Cannot have more than one key in an object with $set")
        }(n), t
      },
      $unset: function(t, e, n, i) {
        u(Array.isArray(t), "update(): expected spec of $unset to be an array; got %s. Did you forget to wrap the key(s) in an array?", t);
        var o = e;
        return t.forEach(function(t) {
          Object.hasOwnProperty.call(o, t) && (e === i && (e = r(i)), delete e[t])
        }), e
      },
      $merge: function(t, e, n, i) {
        return function(t, e) {
          u(e && "object" == typeof e, "update(): $merge expects a spec of type 'object'; got %s", e), u(t && "object" == typeof t, "update(): $merge expects a target of type 'object'; got %s", t)
        }(e = e, t), l(t).forEach(function(n) {
          t[n] !== e[n] && (e === i && (e = r(i)), e[n] = t[n])
        }), e
      },
      $apply: function(t, e) {
        return function(t) {
          u("function" == typeof t, "update(): expected spec of $apply to be a function; got %s.", t)
        }(t), t(e)
      }
    };
  t.exports = i(), t.exports.newContext = i
}, function(t, e, n) {
  function r(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var i = n(117),
    o = n(118),
    a = n(119),
    u = n(120),
    c = n(121);
  r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
}, function(t, e, n) {
  var r = n(24);
  t.exports = function(t, e) {
    for (var n = t.length; n--;)
      if (r(t[n][0], e)) return n;
    return -1
  }
}, function(t, e, n) {
  var r = n(4)(Object, "create");
  t.exports = r
}, function(t, e, n) {
  var r = n(141);
  t.exports = function(t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  }
}, function(t, e, n) {
  var r = n(62),
    i = n(31),
    o = n(9);
  t.exports = function(t) {
    return o(t) ? r(t) : i(t)
  }
}, function(t, e, n) {
  var r = n(157),
    i = n(5),
    o = Object.prototype,
    a = o.hasOwnProperty,
    u = o.propertyIsEnumerable,
    c = r(function() {
      return arguments
    }()) ? r : function(t) {
      return i(t) && a.call(t, "callee") && !u.call(t, "callee")
    };
  t.exports = c
}, function(t, e, n) {
  var r = n(35);
  t.exports = function(t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i
  }
}, function(t, e, n) {
  var r = n(0),
    i = n(36),
    o = n(168),
    a = n(66);
  t.exports = function(t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t))
  }
}, function(t, e, n) {
  var r = n(8),
    i = n(5),
    o = "[object Symbol]";
  t.exports = function(t) {
    return "symbol" == typeof t || i(t) && r(t) == o
  }
}, function(t, e) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (t) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function(t, e) {
  t.exports = function(t) {
    return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function() {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function() {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return t === e || t != t && e != e
  }
}, function(t, e, n) {
  var r = n(4)(n(2), "Map");
  t.exports = r
}, function(t, e, n) {
  function r(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var i = n(133),
    o = n(140),
    a = n(142),
    u = n(143),
    c = n(144);
  r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
}, function(t, e, n) {
  (function(t) {
    var r = n(2),
      i = n(158),
      o = "object" == typeof e && e && !e.nodeType && e,
      a = o && "object" == typeof t && t && !t.nodeType && t,
      u = a && a.exports === o ? r.Buffer : void 0,
      c = (u ? u.isBuffer : void 0) || i;
    t.exports = c
  }).call(e, n(23)(t))
}, function(t, e) {
  var n = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
  t.exports = function(t, e) {
    return !!(e = null == e ? n : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function(t, e, n) {
  var r = n(159),
    i = n(160),
    o = n(161),
    a = o && o.isTypedArray,
    u = a ? i(a) : r;
  t.exports = u
}, function(t, e) {
  var n = 9007199254740991;
  t.exports = function(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
  }
}, function(t, e, n) {
  var r = n(32),
    i = n(162),
    o = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    if (!r(t)) return i(t);
    var e = [];
    for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
    return e
  }
}, function(t, e) {
  var n = Object.prototype;
  t.exports = function(t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return function(n) {
      return t(e(n))
    }
  }
}, function(t, e, n) {
  var r = n(163),
    i = n(25),
    o = n(164),
    a = n(165),
    u = n(63),
    c = n(8),
    s = n(59),
    f = s(r),
    l = s(i),
    d = s(o),
    p = s(a),
    v = s(u),
    h = c;
  (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
    var e = c(t),
      n = "[object Object]" == e ? t.constructor : void 0,
      r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";
      case l:
        return "[object Map]";
      case d:
        return "[object Promise]";
      case p:
        return "[object Set]";
      case v:
        return "[object WeakMap]"
    }
    return e
  }), t.exports = h
}, function(t, e, n) {
  var r = n(20),
    i = n(11);
  t.exports = function(t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
    return n && n == o ? t : void 0
  }
}, function(t, e, n) {
  var r = n(0),
    i = n(21),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
  t.exports = function(t, e) {
    if (r(t)) return !1;
    var n = typeof t;
    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
  }
}, function(t, e) {
  t.exports = function(t) {
    return t
  }
}, function(t, e) {
  t.exports = function(t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
    return t
  }
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  function i(t) {
    var e = void 0 === t ? "undefined" : k(t);
    if ("string" === e) return {
      id: t
    };
    if (null != t && "object" === e) {
      return {
        id: t.id,
        selector: t.selector,
        selectorGuids: t.selectorGuids,
        appliesTo: t.appliesTo,
        useEventTarget: t.useEventTarget
      }
    }
    return {}
  }

  function o(t) {
    var e = t.config,
      n = t.event,
      r = t.eventTarget,
      o = t.elementApi;
    if (!o) throw new Error("IX2 missing elementApi");
    var a = o.getValidDocument,
      u = o.getQuerySelector,
      c = o.queryDocument,
      s = o.getChildElements,
      f = o.getSiblingElements,
      l = o.matchSelector,
      d = e.target;
    if (!d) return [];
    var p = i(d),
      v = p.id,
      h = p.selector,
      g = p.appliesTo,
      y = p.useEventTarget;
    if (g === S.o) {
      var m = a(v);
      return m ? [m] : []
    }
    var w = b()(n, "action.config.affectedElements", {})[v || h] || {},
      x = void 0,
      _ = void 0,
      O = void 0;
    return Boolean(w.id || w.selector) ? (x = w.limitAffectedElements, _ = u(i(n.target)), O = u(w)) : _ = O = u({
      id: v,
      selector: h
    }), null == _ || null == O ? [] : T.c && r && y ? y === A.f ? c(O).filter(function(t) {
      return r.contains(t)
    }) : y === A.v ? c(O).filter(function(t) {
      return t !== r && t.parentNode === r.parentNode
    }) : c(O).filter(function(t) {
      return r === t
    }) : x === A.f ? c(_, O) : x === A.m ? s(c(_)).filter(l(O)) : x === A.v ? f(c(_)).filter(l(O)) : c(O)
  }

  function a(t) {
    return t.map(function(t) {
      return t[0] + "(" + t[1] + ")"
    }).join(" ")
  }

  function u(t, e) {
    var n = t.exec(e);
    return n ? n[1] : ""
  }

  function c(t, e, n, r) {
    return t.replace(e, n + "(" + r + ")")
  }

  function s(t, e, n) {
    if (T.c) {
      var r = P[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, A.E);
        if (a) {
          var u = a.split(A.i).map(M); - 1 === u.indexOf(r) && o(t, A.E, u.concat(r).join(A.i))
        } else o(t, A.E, r)
      }
    }
  }

  function f(t, e, n) {
    if (T.c) {
      var r = P[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, A.E);
        a && -1 !== a.indexOf(r) && o(t, A.E, a.split(A.i).map(M).filter(function(t) {
          return t !== r
        }).join(A.i))
      }
    }
  }

  function l(t) {
    var e = t.actionList,
      n = void 0 === e ? {} : e,
      r = t.event,
      i = t.elementApi,
      o = n.actionItemGroups,
      a = n.continuousParameterGroups;
    o && o.forEach(function(t) {
      d({
        actionGroup: t,
        event: r,
        elementApi: i
      })
    }), a && a.forEach(function(t) {
      t.continuousActionGroups.forEach(function(t) {
        d({
          actionGroup: t,
          event: r,
          elementApi: i
        })
      })
    })
  }

  function d(t) {
    var e = t.actionGroup,
      n = t.event,
      r = t.elementApi;
    e.actionItems.forEach(function(t) {
      var e = t.actionTypeId,
        i = t.config,
        a = J({
          effect: p,
          actionTypeId: e,
          elementApi: r
        });
      o({
        config: i,
        event: n,
        elementApi: r
      }).forEach(a)
    })
  }

  function p(t, e, n) {
    var r = n.setStyle;
    f(t, e, n), r(t, e, "")
  }

  function v(t) {
    var e = 0,
      n = 0;
    return t.forEach(function(t, r) {
      var i = t.config,
        o = i.delay + i.duration;
      o >= e && (e = o, n = r)
    }), n
  }
  e.f = function() {
    return "i" + C++
  }, e.l = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.events,
      n = t.actionLists,
      r = t.site,
      i = O()(e, function(t, e) {
        var n = e.eventTypeId;
        return t[n] || (t[n] = {}), t[n][e.id] = e, t
      }, {}),
      o = r && r.mediaQueries,
      a = [];
    return o ? a = o.map(function(t) {
      return t.key
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
      ixData: {
        events: e,
        actionLists: n,
        eventTypeMap: i,
        mediaQueries: o,
        mediaQueryKeys: a
      }
    }
  }, e.j = function(t) {
    var e = t.store,
      n = t.select,
      r = t.onChange,
      i = t.comparator,
      o = void 0 === i ? D : i,
      a = e.getState,
      u = (0, e.subscribe)(function() {
        var t = n(a());
        null != t ? o(t, c) || r(c = t, e) : u()
      }),
      c = n(a());
    return u
  }, e.c = o, e.d = function(t) {
    var e = t.element,
      n = t.actionItem;
    if (!T.c) return {};
    switch (n.actionTypeId) {
      case E.g:
      case E.d:
      case E.e:
      case E.h:
      case E.b:
        return window.getComputedStyle(e);
      default:
        return {}
    }
  }, e.g = function(t) {
    var e = t.element,
      n = t.actionItem,
      r = t.computedStyle,
      i = void 0 === r ? {} : r,
      o = t.elementApi.getStyle,
      a = n.actionTypeId,
      c = n.config;
    switch (a) {
      case E.i:
      case E.k:
      case E.j:
      case E.l:
        return function(t, e) {
          var n = V[e];
          if (!t) return n;
          var r = function(t) {
            return {
              xValue: x()(parseFloat(t[0]), n.xValue),
              yValue: x()(parseFloat(t[1]), n.yValue),
              zValue: x()(parseFloat(t[2]), n.zValue)
            }
          };
          switch (e) {
            case E.i:
              var i = [u(N, t), u($, t), u(F, t)];
              return r(i);
            case E.k:
              var o = [u(X, t), u(G, t), u(q, t)];
              return r(o);
            case E.j:
              var a = [u(W, t), u(H, t), u(U, t)];
              return r(a);
            case E.l:
              var c = [u(B, t), u(Q, t)];
              return {
                xValue: x()(parseFloat(c[0]), n.xValue),
                yValue: x()(parseFloat(c[1]), n.yValue)
              };
            default:
              return
          }
        }(o(e, T.d), a);
      case E.f:
        return {
          value: x()(parseFloat(o(e, A.o)), 1)
        };
      case E.g:
        var s = o(e, A.D),
          f = o(e, A.l),
          l = void 0,
          d = void 0;
        return l = c.widthUnit === A.a ? R.test(s) ? parseFloat(s) : parseFloat(i.width) : x()(parseFloat(s), parseFloat(i.width)), d = c.heightUnit === A.a ? R.test(f) ? parseFloat(f) : parseFloat(i.height) : x()(parseFloat(f), parseFloat(i.height)), {
          widthValue: l,
          heightValue: d
        };
      case E.d:
      case E.e:
      case E.h:
        return function(t) {
          var e = t.element,
            n = t.actionTypeId,
            r = t.computedStyle,
            i = t.getStyle,
            o = L[n],
            a = i(e, o),
            c = K.test(a) ? a : r[o],
            s = u(Z, c).split(A.i);
          return {
            rValue: x()(parseInt(s[0], 10), 255),
            gValue: x()(parseInt(s[1], 10), 255),
            bValue: x()(parseInt(s[2], 10), 255),
            aValue: x()(parseFloat(s[3]), 1)
          }
        }({
          element: e,
          actionTypeId: a,
          computedStyle: i,
          getStyle: o
        });
      case E.b:
        return {
          value: x()(o(e, A.j), i.display)
        };
      default:
        return
    }
  }, e.e = function(t) {
    var e = t.element,
      n = t.actionItem,
      r = t.elementApi;
    switch (n.actionTypeId) {
      case E.i:
      case E.k:
      case E.j:
      case E.l:
        var i = n.config;
        return {
          xValue: i.xValue,
          yValue: i.yValue,
          zValue: i.zValue
        };
      case E.g:
        var o = r.getStyle,
          a = r.setStyle,
          u = r.getProperty,
          c = n.config,
          s = c.widthUnit,
          f = c.heightUnit,
          l = n.config,
          d = l.widthValue,
          p = l.heightValue;
        if (!T.c) return {
          widthValue: d,
          heightValue: p
        };
        if (s === A.a) {
          var v = o(e, A.D);
          a(e, A.D, ""), d = u(e, "offsetWidth"), a(e, A.D, v)
        }
        if (f === A.a) {
          var h = o(e, A.l);
          a(e, A.l, ""), p = u(e, "offsetHeight"), a(e, A.l, h)
        }
        return {
          widthValue: d,
          heightValue: p
        };
      case E.d:
      case E.e:
      case E.h:
        var g = n.config;
        return {
          rValue: g.rValue,
          gValue: g.gValue,
          bValue: g.bValue,
          aValue: g.aValue
        };
      default:
        return {
          value: n.config.value
        }
    }
  }, e.m = function(t, e) {
    var n = t.isTransform,
      r = t.isStyle,
      i = t.isGeneral;
    return n ? function(t, e) {
      var n = t.element,
        r = t.current,
        i = t.actionItem,
        o = e.getStyle,
        a = e.setStyle,
        u = o(n, T.d),
        f = function(t, e, n) {
          var r = e.actionTypeId,
            i = e.config,
            o = i.xUnit,
            a = void 0 === o ? "" : o,
            u = i.yUnit,
            s = void 0 === u ? "" : u,
            f = i.zUnit,
            l = void 0 === f ? "" : f,
            d = n.xValue,
            p = n.yValue,
            v = n.zValue,
            h = t || Y;
          switch (r) {
            case E.i:
              return void 0 !== d && (h = c(h, N, A.z, d + a)), void 0 !== p && (h = c(h, $, A.A, p + s)), void 0 !== v && (h = c(h, F, A.B, v + l)), h;
            case E.k:
              return void 0 !== d && (h = c(h, X, A.s, d + a)), void 0 !== p && (h = c(h, G, A.t, p + s)), void 0 !== v && (h = c(h, q, A.u, v + l)), h;
            case E.j:
              return void 0 !== d && (h = c(h, W, A.p, d + a)), void 0 !== p && (h = c(h, H, A.q, p + s)), void 0 !== v && (h = c(h, U, A.r, v + l)), h;
            case E.l:
              return void 0 !== d && (h = c(h, B, A.w, d + a)), void 0 !== p && (h = c(h, Q, A.x, p + s)), h;
            default:
              return h
          }
        }(u, i, r);
      u !== f && (s(n, T.d, e), a(n, T.d, f))
    }(t, e) : r ? function(t, e) {
      var n = t.element,
        r = t.actionItem,
        i = t.current,
        o = t.styleProp,
        a = e.setStyle,
        u = r.actionTypeId,
        c = r.config;
      switch (u) {
        case E.g:
          var f = r.config,
            l = f.widthUnit,
            d = void 0 === l ? "" : l,
            p = f.heightUnit,
            v = void 0 === p ? "" : p,
            h = i.widthValue,
            g = i.heightValue;
          void 0 !== h && (d === A.a && (d = "px"), s(n, A.D, e), a(n, A.D, h + d)), void 0 !== g && (v === A.a && (v = "px"), s(n, A.l, e), a(n, A.l, g + v));
          break;
        case E.d:
        case E.e:
        case E.h:
          var y = L[u],
            m = i.rValue,
            b = i.gValue,
            w = i.bValue,
            x = i.aValue;
          s(n, y, e), a(n, y, x >= 1 ? "rgb(" + Math.round(m) + "," + Math.round(b) + "," + Math.round(w) + ")" : "rgba(" + Math.round(m) + "," + Math.round(b) + "," + Math.round(w) + "," + x + ")");
          break;
        default:
          var _ = c.unit,
            O = void 0 === _ ? "" : _;
          s(n, o, e), a(n, o, i.value + O)
      }
    }(t, e) : i ? function(t, e) {
      var n = t.element,
        r = t.actionItem,
        i = e.setStyle;
      switch (r.actionTypeId) {
        case E.b:
          var o = r.config.value;
          return void(o === A.k && T.c ? i(n, A.j, T.b) : i(n, A.j, o))
      }
    }(t, e) : void 0
  }, e.b = function(t) {
    var e = t.store,
      n = t.elementApi,
      r = e.getState().ixData,
      i = r.events,
      o = void 0 === i ? {} : i,
      a = r.actionLists,
      u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function(t) {
      var e = o[t],
        r = e.action.config.actionListId,
        i = u[r];
      i && l({
        actionList: i,
        event: e,
        elementApi: n
      })
    }), Object.keys(u).forEach(function(t) {
      l({
        actionList: u[t],
        elementApi: n
      })
    })
  }, e.a = function(t, e) {
    var n = t.actionItem,
      r = t.element,
      i = e.setStyle,
      o = e.getStyle,
      a = n.actionTypeId;
    if (a === E.g) {
      var u = n.config;
      u.widthUnit === A.a && i(r, A.D, ""), u.heightUnit === A.a && i(r, A.l, "")
    }
    o(r, A.E) && J({
      effect: f,
      actionTypeId: a,
      elementApi: e
    })(r)
  }, e.h = v, e.k = function(t) {
    var e = t.actionListId,
      n = t.actionItemId,
      i = t.rawData,
      o = i.actionLists[e],
      a = o.actionItemGroups,
      u = o.continuousParameterGroups,
      c = [],
      s = function(t) {
        return c.push(I()(t, {
          config: {
            $merge: {
              delay: 0,
              duration: 0
            }
          }
        })), t.id === n
      };
    return a && a.some(function(t) {
      return t.actionItems.some(s)
    }), u && u.some(function(t) {
      return t.continuousActionGroups.some(function(t) {
        return t.actionItems.some(s)
      })
    }), I()(i, {
      actionLists: {
        $set: r({}, e, {
          id: e,
          actionItemGroups: [{
            actionItems: c
          }]
        })
      }
    })
  }, e.o = function(t, e) {
    var n = e.basedOn;
    return t === S.u && (n === S.e || null == n) || t === S.h && n === S.e
  }, e.i = function(t, e) {
    return t + A.g + e
  }, e.n = function(t, e) {
    return null == e || -1 !== t.indexOf(e)
  }, e.p = function(t) {
    if ("string" == typeof t) return t;
    var e = t.id,
      n = void 0 === e ? "" : e,
      r = t.selector,
      i = void 0 === r ? "" : r,
      o = t.useEventTarget,
      a = void 0 === o ? "" : o;
    return n + A.d + i + A.d + a
  };
  var h, g, y, m = n(19),
    b = n.n(m),
    w = n(208),
    x = n.n(w),
    _ = n(209),
    O = n.n(_),
    j = n(12),
    I = n.n(j),
    E = (n(53), n(40)),
    S = n(78),
    A = n(41),
    T = n(79),
    k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    M = function(t) {
      return t.trim()
    },
    L = Object.freeze((h = {}, r(h, E.d, A.c), r(h, E.e, A.e), r(h, E.h, A.h), h)),
    P = Object.freeze((g = {}, r(g, T.d, A.y), r(g, A.c, A.b), r(g, A.o, A.o), r(g, A.D, A.D), r(g, A.l, A.l), g)),
    C = 1,
    D = function(t, e) {
      return t === e
    },
    R = /px/,
    V = (y = {}, r(y, E.i, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), r(y, E.k, Object.freeze({
      xValue: 1,
      yValue: 1,
      zValue: 1
    })), r(y, E.j, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), r(y, E.l, Object.freeze({
      xValue: 0,
      yValue: 0
    })), y),
    z = "\\(([^)]+)\\)",
    N = RegExp("" + A.z + z),
    $ = RegExp("" + A.A + z),
    F = RegExp("" + A.B + z),
    X = RegExp("" + A.s + z),
    G = RegExp("" + A.t + z),
    q = RegExp("" + A.u + z),
    W = RegExp("" + A.p + z),
    H = RegExp("" + A.q + z),
    U = RegExp("" + A.r + z),
    B = RegExp("" + A.w + z),
    Q = RegExp("" + A.x + z),
    Y = Object.keys(V).map(function(t) {
      var e = V[t],
        n = e.xValue,
        r = e.yValue,
        i = e.zValue;
      switch (t) {
        case E.i:
          return a([
            [A.z, n],
            [A.A, r],
            [A.B, i]
          ]);
        case E.k:
          return a([
            [A.s, n],
            [A.t, r],
            [A.u, i]
          ]);
        case E.j:
          return a([
            [A.p, n],
            [A.q, r],
            [A.r, i]
          ]);
        case E.l:
          return a([
            [A.w, n],
            [A.x, r]
          ]);
        default:
          return ""
      }
    }).join(" "),
    K = /^rgb/,
    Z = RegExp("rgba?" + z),
    J = function(t) {
      var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
      return function(t) {
        switch (n) {
          case E.i:
          case E.k:
          case E.j:
          case E.l:
            e(t, T.d, r);
            break;
          case E.f:
            e(t, A.o, r);
            break;
          case E.g:
            e(t, A.D, r), e(t, A.l, r);
            break;
          case E.d:
          case E.e:
          case E.h:
            e(t, L[n], r);
            break;
          case E.b:
            e(t, A.j, r)
        }
      }
    }
}, function(t, e, n) {
  "use strict";
  n.d(e, "i", function() {
    return r
  }), n.d(e, "k", function() {
    return i
  }), n.d(e, "j", function() {
    return o
  }), n.d(e, "l", function() {
    return a
  }), n.d(e, "f", function() {
    return u
  }), n.d(e, "g", function() {
    return c
  }), n.d(e, "d", function() {
    return s
  }), n.d(e, "e", function() {
    return f
  }), n.d(e, "h", function() {
    return l
  }), n.d(e, "b", function() {
    return d
  }), n.d(e, "a", function() {
    return p
  }), n.d(e, "c", function() {
    return v
  });
  var r = "TRANSFORM_MOVE",
    i = "TRANSFORM_SCALE",
    o = "TRANSFORM_ROTATE",
    a = "TRANSFORM_SKEW",
    u = "STYLE_OPACITY",
    c = "STYLE_SIZE",
    s = "STYLE_BACKGROUND_COLOR",
    f = "STYLE_BORDER",
    l = "STYLE_TEXT_COLOR",
    d = "GENERAL_DISPLAY",
    p = "GENERAL_CONTINUOUS_ACTION",
    v = "GENERAL_START_ACTION"
}, function(t, e, n) {
  "use strict";
  n.d(e, "n", function() {
    return r
  }), n.d(e, "C", function() {
    return i
  }), n.d(e, "y", function() {
    return o
  }), n.d(e, "z", function() {
    return a
  }), n.d(e, "A", function() {
    return u
  }), n.d(e, "B", function() {
    return c
  }), n.d(e, "s", function() {
    return s
  }), n.d(e, "t", function() {
    return f
  }), n.d(e, "u", function() {
    return l
  }), n.d(e, "p", function() {
    return d
  }), n.d(e, "q", function() {
    return p
  }), n.d(e, "r", function() {
    return v
  }), n.d(e, "w", function() {
    return h
  }), n.d(e, "x", function() {
    return g
  }), n.d(e, "o", function() {
    return y
  }), n.d(e, "D", function() {
    return m
  }), n.d(e, "l", function() {
    return b
  }), n.d(e, "c", function() {
    return w
  }), n.d(e, "b", function() {
    return x
  }), n.d(e, "e", function() {
    return _
  }), n.d(e, "h", function() {
    return O
  }), n.d(e, "j", function() {
    return j
  }), n.d(e, "k", function() {
    return I
  }), n.d(e, "E", function() {
    return E
  }), n.d(e, "a", function() {
    return S
  }), n.d(e, "i", function() {
    return A
  }), n.d(e, "g", function() {
    return T
  }), n.d(e, "d", function() {
    return k
  }), n.d(e, "f", function() {
    return M
  }), n.d(e, "m", function() {
    return L
  }), n.d(e, "v", function() {
    return P
  });
  var r = "|",
    i = "data-wf-page",
    o = "transform",
    a = "translateX",
    u = "translateY",
    c = "translateZ",
    s = "scaleX",
    f = "scaleY",
    l = "scaleZ",
    d = "rotateX",
    p = "rotateY",
    v = "rotateZ",
    h = "skewX",
    g = "skewY",
    y = "opacity",
    m = "width",
    b = "height",
    w = "backgroundColor",
    x = "background",
    _ = "borderColor",
    O = "color",
    j = "display",
    I = "flex",
    E = "willChange",
    S = "AUTO",
    A = ",",
    T = ":",
    k = "|",
    M = "CHILDREN",
    L = "IMMEDIATE_CHILDREN",
    P = "SIBLINGS"
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "rawDataImported", function() {
    return u
  }), n.d(e, "sessionStarted", function() {
    return c
  }), n.d(e, "sessionStopped", function() {
    return s
  }), n.d(e, "previewRequested", function() {
    return f
  }), n.d(e, "playbackRequested", function() {
    return l
  }), n.d(e, "stopRequested", function() {
    return d
  }), n.d(e, "clearRequested", function() {
    return p
  }), n.d(e, "eventListenerAdded", function() {
    return v
  }), n.d(e, "eventStateChanged", function() {
    return h
  }), n.d(e, "animationFrameChanged", function() {
    return g
  }), n.d(e, "parameterChanged", function() {
    return y
  }), n.d(e, "instanceAdded", function() {
    return m
  }), n.d(e, "instanceStarted", function() {
    return b
  }), n.d(e, "instanceRemoved", function() {
    return w
  }), n.d(e, "actionListPlaybackChanged", function() {
    return x
  }), n.d(e, "viewportWidthChanged", function() {
    return _
  });
  var r = n(6),
    i = n(40),
    o = n(39),
    a = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    u = function(t) {
      return {
        type: r.l,
        payload: a({}, Object(o.l)(t))
      }
    },
    c = function() {
      return {
        type: r.m,
        payload: {}
      }
    },
    s = function() {
      return {
        type: r.n,
        payload: {}
      }
    },
    f = function(t) {
      var e = t.rawData;
      return {
        type: r.k,
        payload: {
          rawData: e
        }
      }
    },
    l = function(t) {
      var e = t.actionTypeId,
        n = void 0 === e ? i.c : e,
        o = t.actionListId,
        a = t.actionItemId,
        u = t.eventId,
        c = t.allowEvents,
        s = t.immediate,
        f = t.verbose,
        l = t.rawData;
      return {
        type: r.j,
        payload: {
          actionTypeId: n,
          actionListId: o,
          actionItemId: a,
          eventId: u,
          allowEvents: c,
          immediate: s,
          verbose: f,
          rawData: l
        }
      }
    },
    d = function(t) {
      return {
        type: r.o,
        payload: {
          actionListId: t
        }
      }
    },
    p = function() {
      return {
        type: r.c,
        payload: {}
      }
    },
    v = function(t, e) {
      return {
        type: r.d,
        payload: {
          target: t,
          listenerParams: e
        }
      }
    },
    h = function(t, e) {
      return {
        type: r.e,
        payload: {
          stateKey: t,
          newState: e
        }
      }
    },
    g = function(t, e) {
      return {
        type: r.b,
        payload: {
          now: t,
          parameters: e
        }
      }
    },
    y = function(t, e) {
      return {
        type: r.i,
        payload: {
          key: t,
          value: e
        }
      }
    },
    m = function(t) {
      return {
        type: r.f,
        payload: a({}, t)
      }
    },
    b = function(t) {
      return {
        type: r.h,
        payload: {
          instanceId: t
        }
      }
    },
    w = function(t) {
      return {
        type: r.g,
        payload: {
          instanceId: t
        }
      }
    },
    x = function(t) {
      var e = t.actionListId,
        n = t.isPlaying;
      return {
        type: r.a,
        payload: {
          actionListId: e,
          isPlaying: n
        }
      }
    },
    _ = function(t) {
      var e = t.width,
        n = t.mediaQueries;
      return {
        type: r.p,
        payload: {
          width: e,
          mediaQueries: n
        }
      }
    }
}, function(t, e, n) {
  function r(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
  }
  var i = n(80),
    o = n(44);
  (r.prototype = i(o.prototype)).constructor = r, t.exports = r
}, function(t, e) {
  t.exports = function() {}
}, function(t, e, n) {
  function r(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = a, this.__views__ = []
  }
  var i = n(80),
    o = n(44),
    a = 4294967295;
  (r.prototype = i(o.prototype)).constructor = r, t.exports = r
}, function(t, e) {
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  window.tram = function(t) {
    function e(t, e) {
      return (new C.Bare).init(t, e)
    }

    function r(t) {
      return t.replace(/[A-Z]/g, function(t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function a() {}

    function u(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return B.test(t) || !Q.test(t) ? r = parseInt(t, 10) : Q.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
    }

    function c(t) {
      X.debug && window && window.console.warn(t)
    }
    var s = function(t, e, r) {
        function i(t) {
          return "object" == (void 0 === t ? "undefined" : n(t))
        }

        function o(t) {
          return "function" == typeof t
        }

        function a() {}

        function u(n, c) {
          function s() {
            var t = new f;
            return o(t.init) && t.init.apply(t, arguments), t
          }

          function f() {}
          c === r && (c = n, n = Object), s.Bare = f;
          var l, d = a[t] = n[t],
            p = f[t] = s[t] = new a;
          return p.constructor = s, s.mixin = function(e) {
            return f[t] = s[t] = u(s, e)[t], s
          }, s.open = function(t) {
            if (l = {}, o(t) ? l = t.call(s, p, d, s, n) : i(t) && (l = t), i(l))
              for (var r in l) e.call(l, r) && (p[r] = l[r]);
            return o(p.init) || (p.init = n), s
          }, s.open(c)
        }
        return u
      }("prototype", {}.hasOwnProperty),
      f = {
        ease: ["ease", function(t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
        }],
        "ease-in": ["ease-in", function(t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
        }],
        "ease-out": ["ease-out", function(t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
        }],
        "ease-in-out": ["ease-in-out", function(t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
        }],
        linear: ["linear", function(t, e, n, r) {
          return n * t / r + e
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
          return n * (t /= r) * t + e
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
          return -n * (t /= r) * (t - 2) + e
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
          return n * (t /= r) * t * t + e
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
          return n * ((t = t / r - 1) * t * t + 1) + e
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
          return n * (t /= r) * t * t * t + e
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
          return -n * ((t = t / r - 1) * t * t * t - 1) + e
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
          return n * (t /= r) * t * t * t * t + e
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
          return n * ((t = t / r - 1) * t * t * t * t + 1) + e
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
          return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
          return n * Math.sin(t / r * (Math.PI / 2)) + e
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
          return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
          return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
          return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
          return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
          return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
          return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
        }]
      },
      l = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      },
      d = document,
      p = window,
      v = "bkwld-tram",
      h = /[\-\.0-9]/g,
      g = /[A-Z]/,
      y = /^(rgb|#)/,
      m = /(em|cm|mm|in|pt|pc|px)$/,
      b = /(em|cm|mm|in|pt|pc|px|%)$/,
      w = /(deg|rad|turn)$/,
      x = /(all|none) 0s ease 0s/,
      _ = /^(width|height)$/,
      O = " ",
      j = d.createElement("a"),
      I = ["Webkit", "Moz", "O", "ms"],
      E = ["-webkit-", "-moz-", "-o-", "-ms-"],
      S = function(t) {
        if (t in j.style) return {
          dom: t,
          css: t
        };
        var e, n, r = "",
          i = t.split("-");
        for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
        for (e = 0; e < I.length; e++)
          if ((n = I[e] + r) in j.style) return {
            dom: n,
            css: E[e] + t
          }
      },
      A = e.support = {
        bind: Function.prototype.bind,
        transform: S("transform"),
        transition: S("transition"),
        backface: S("backface-visibility"),
        timing: S("transition-timing-function")
      };
    if (A.transition) {
      var T = A.timing.dom;
      if (j.style[T] = f["ease-in-back"][0], !j.style[T])
        for (var k in l) f[k][0] = l[k]
    }
    var M = e.frame = function() {
        var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        return t && A.bind ? t.bind(p) : function(t) {
          p.setTimeout(t, 16)
        }
      }(),
      L = e.now = function() {
        var t = p.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && A.bind ? e.bind(t) : Date.now || function() {
          return +new Date
        }
      }(),
      P = s(function(e) {
        function i(t, e) {
          var n = function(t) {
              for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                var i = t[e];
                i && r.push(i)
              }
              return r
            }(("" + t).split(O)),
            r = n[0];
          e = e || {};
          var i = H[r];
          if (!i) return c("Unsupported property: " + r);
          if (!e.weak || !this.props[r]) {
            var o = i[0],
              a = this.props[r];
            return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
          }
        }

        function o(t, e, r) {
          if (t) {
            var o = void 0 === t ? "undefined" : n(t);
            if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new $({
              duration: t,
              context: this,
              complete: a
            }), void(this.active = !0);
            if ("string" == o && e) {
              switch (t) {
                case "hide":
                  f.call(this);
                  break;
                case "stop":
                  s.call(this);
                  break;
                case "redraw":
                  l.call(this);
                  break;
                default:
                  i.call(this, t, r && r[1])
              }
              return a.call(this)
            }
            if ("function" == o) return void t.call(this, this);
            if ("object" == o) {
              var c = 0;
              p.call(this, t, function(t, e) {
                t.span > c && (c = t.span), t.stop(), t.animate(e)
              }, function(t) {
                "wait" in t && (c = u(t.wait, 0))
              }), d.call(this), c > 0 && (this.timer = new $({
                duration: c,
                context: this
              }), this.active = !0, e && (this.timer.complete = a));
              var v = this,
                h = !1,
                g = {};
              M(function() {
                p.call(v, t, function(t) {
                  t.active && (h = !0, g[t.name] = t.nextStyle)
                }), h && v.$el.css(g)
              })
            }
          }
        }

        function a() {
          if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
            var t = this.queue.shift();
            o.call(this, t.options, !0, t.args)
          }
        }

        function s(t) {
          this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
          var e;
          "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, p.call(this, e, h), d.call(this)
        }

        function f() {
          s.call(this), this.el.style.display = "none"
        }

        function l() {
          this.el.offsetHeight
        }

        function d() {
          var t, e, n = [];
          this.upstream && n.push(this.upstream);
          for (t in this.props)(e = this.props[t]).active && n.push(e.string);
          n = n.join(","), this.style !== n && (this.style = n, this.el.style[A.transition.dom] = n)
        }

        function p(t, e, n) {
          var o, a, u, c, s = e !== h,
            f = {};
          for (o in t) u = t[o], o in U ? (f.transform || (f.transform = {}), f.transform[o] = u) : (g.test(o) && (o = r(o)), o in H ? f[o] = u : (c || (c = {}), c[o] = u));
          for (o in f) {
            if (u = f[o], !(a = this.props[o])) {
              if (!s) continue;
              a = i.call(this, o)
            }
            e.call(this, a, u)
          }
          n && c && n.call(this, c)
        }

        function h(t) {
          t.stop()
        }

        function y(t, e) {
          t.set(e)
        }

        function m(t) {
          this.$el.css(t)
        }

        function b(t, n) {
          e[t] = function() {
            return this.children ? function(t, e) {
              var n, r = this.children.length;
              for (n = 0; r > n; n++) t.apply(this.children[n], e);
              return this
            }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
          }
        }
        e.init = function(e) {
          if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
            var n = q(this.el, "transition");
            n && !x.test(n) && (this.upstream = n)
          }
          A.backface && X.hideBackface && G(this.el, A.backface.css, "hidden")
        }, b("add", i), b("start", o), b("wait", function(t) {
          t = u(t, 0), this.active ? this.queue.push({
            options: t
          }) : (this.timer = new $({
            duration: t,
            context: this,
            complete: a
          }), this.active = !0)
        }), b("then", function(t) {
          return this.active ? (this.queue.push({
            options: t,
            args: arguments
          }), void(this.timer.complete = a)) : c("No active transition timer. Use start() or wait() before then().")
        }), b("next", a), b("stop", s), b("set", function(t) {
          s.call(this, t), p.call(this, t, y, m)
        }), b("show", function(t) {
          "string" != typeof t && (t = "block"), this.el.style.display = t
        }), b("hide", f), b("redraw", l), b("destroy", function() {
          s.call(this), t.removeData(this.el, v), this.$el = this.el = null
        })
      }),
      C = s(P, function(e) {
        function n(e, n) {
          var r = t.data(e, v) || t.data(e, v, new P.Bare);
          return r.el || r.init(e), n ? r.start(n) : r
        }
        e.init = function(e, r) {
          var i = t(e);
          if (!i.length) return this;
          if (1 === i.length) return n(i[0], r);
          var o = [];
          return i.each(function(t, e) {
            o.push(n(e, r))
          }), this.children = o, this
        }
      }),
      D = s(function(t) {
        function e() {
          var t = this.get();
          this.update("auto");
          var e = this.get();
          return this.update(t), e
        }
        var r = 500,
          i = "ease",
          a = 0;
        t.init = function(t, e, n, o) {
          this.$el = t, this.el = t[0];
          var c = e[0];
          n[2] && (c = n[2]), W[c] && (c = W[c]), this.name = c, this.type = n[1], this.duration = u(e[1], this.duration, r), this.ease = function(t, e, n) {
            return void 0 !== e && (n = e), t in f ? t : n
          }(e[2], this.ease, i), this.delay = u(e[3], this.delay, a), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = o.unit || this.unit || X.defaultUnit, this.angle = o.angle || this.angle || X.defaultAngle, X.fallback || o.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + O + this.duration + "ms" + ("ease" != this.ease ? O + f[this.ease][0] : "") + (this.delay ? O + this.delay + "ms" : ""))
        }, t.set = function(t) {
          t = this.convert(t, this.type), this.update(t), this.redraw()
        }, t.transition = function(t) {
          this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
        }, t.fallback = function(t) {
          var n = this.el.style[this.name] || this.convert(this.get(), this.type);
          t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new N({
            from: n,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.get = function() {
          return q(this.el, this.name)
        }, t.update = function(t) {
          G(this.el, this.name, t)
        }, t.stop = function() {
          (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, G(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy()
        }, t.convert = function(t, e) {
          if ("auto" == t && this.auto) return t;
          var r, i = "number" == typeof t,
            a = "string" == typeof t;
          switch (e) {
            case "number":
              if (i) return t;
              if (a && "" === t.replace(h, "")) return +t;
              r = "number(unitless)";
              break;
            case y:
              if (a) {
                if ("" === t && this.original) return this.original;
                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : function(t) {
                  var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                  return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }(t)
              }
              r = "hex or rgb string";
              break;
            case m:
              if (i) return t + this.unit;
              if (a && e.test(t)) return t;
              r = "number(px) or string(unit)";
              break;
            case b:
              if (i) return t + this.unit;
              if (a && e.test(t)) return t;
              r = "number(px) or string(unit or %)";
              break;
            case w:
              if (i) return t + this.angle;
              if (a && e.test(t)) return t;
              r = "number(deg) or string(angle)";
              break;
            case "unitless":
              if (i) return t;
              if (a && b.test(t)) return t;
              r = "number(unitless) or string(unit or %)"
          }
          return function(t, e) {
            c("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
          }(r, t), t
        }, t.redraw = function() {
          this.el.offsetHeight
        }
      }),
      R = s(D, function(t, e) {
        t.init = function() {
          e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
        }
      }),
      V = s(D, function(t, e) {
        t.init = function() {
          e.init.apply(this, arguments), this.animate = this.fallback
        }, t.get = function() {
          return this.$el[this.name]()
        }, t.update = function(t) {
          this.$el[this.name](t)
        }
      }),
      z = s(D, function(t, e) {
        function n(t, e) {
          var n, r, i, o, a;
          for (n in t) i = (o = U[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
        }
        t.init = function() {
          e.init.apply(this, arguments), this.current || (this.current = {}, U.perspective && X.perspective && (this.current.perspective = X.perspective, G(this.el, this.name, this.style(this.current)), this.redraw()))
        }, t.set = function(t) {
          n.call(this, t, function(t, e) {
            this.current[t] = e
          }), G(this.el, this.name, this.style(this.current)), this.redraw()
        }, t.transition = function(t) {
          var e = this.values(t);
          this.tween = new F({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var n, r = {};
          for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
          this.active = !0, this.nextStyle = this.style(r)
        }, t.fallback = function(t) {
          var e = this.values(t);
          this.tween = new F({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.update = function() {
          G(this.el, this.name, this.style(this.current))
        }, t.style = function(t) {
          var e, n = "";
          for (e in t) n += e + "(" + t[e] + ") ";
          return n
        }, t.values = function(t) {
          var e, r = {};
          return n.call(this, t, function(t, n, i) {
            r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
          }), r
        }
      }),
      N = s(function(e) {
        function n() {
          var t, e, r, i = u.length;
          if (i)
            for (M(n), e = L(), t = i; t--;)(r = u[t]) && r.render(e)
        }
        var r = {
          ease: f.ease[1],
          from: 0,
          to: 1
        };
        e.init = function(t) {
          this.duration = t.duration || 0, this.delay = t.delay || 0;
          var e = t.ease || r.ease;
          f[e] && (e = f[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
          var n = t.from,
            i = t.to;
          void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = L(), !1 !== t.autoplay && this.play()
        }, e.play = function() {
          this.active || (this.start || (this.start = L()), this.active = !0, function(t) {
            1 === u.push(t) && M(n)
          }(this))
        }, e.stop = function() {
          this.active && (this.active = !1, function(e) {
            var n, r = t.inArray(e, u);
            r >= 0 && (n = u.slice(r + 1), u.length = r, n.length && (u = u.concat(n)))
          }(this))
        }, e.render = function(t) {
          var e, n = t - this.start;
          if (this.delay) {
            if (n <= this.delay) return;
            n -= this.delay
          }
          if (n < this.duration) {
            var r = this.ease(n, 0, 1, this.duration);
            return e = this.startRGB ? function(t, e, n) {
              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
            }(this.startRGB, this.endRGB, r) : function(t) {
              return Math.round(t * s) / s
            }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
          }
          e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
        }, e.format = function(t, e) {
          if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
          if (!this.unit) {
            var n = e.replace(h, "");
            n !== t.replace(h, "") && function(t, e, n) {
              c("Units do not match [" + t + "]: " + e + ", " + n)
            }("tween", e, t), this.unit = n
          }
          e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
        }, e.destroy = function() {
          this.stop(), this.context = null, this.ease = this.update = this.complete = a
        };
        var u = [],
          s = 1e3
      }),
      $ = s(N, function(t) {
        t.init = function(t) {
          this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
        }, t.render = function(t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
        }
      }),
      F = s(N, function(t, e) {
        t.init = function(t) {
          this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
          var e, n;
          for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new N({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
          this.play()
        }, t.render = function(t) {
          var e, n, r = !1;
          for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
          return r ? void(this.update && this.update.call(this.context)) : this.destroy()
        }, t.destroy = function() {
          if (e.destroy.call(this), this.tweens) {
            var t;
            for (t = this.tweens.length; t--;) this.tweens[t].destroy();
            this.tweens = null, this.current = null
          }
        }
      }),
      X = e.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !A.transition,
        agentTests: []
      };
    e.fallback = function(t) {
      if (!A.transition) return X.fallback = !0;
      X.agentTests.push("(" + t + ")");
      var e = new RegExp(X.agentTests.join("|"), "i");
      X.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
      return new N(t)
    }, e.delay = function(t, e, n) {
      return new $({
        complete: e,
        duration: t,
        context: n
      })
    }, t.fn.tram = function(t) {
      return e.call(null, this, t)
    };
    var G = t.style,
      q = t.css,
      W = {
        transform: A.transform && A.transform.css
      },
      H = {
        color: [R, y],
        background: [R, y, "background-color"],
        "outline-color": [R, y],
        "border-color": [R, y],
        "border-top-color": [R, y],
        "border-right-color": [R, y],
        "border-bottom-color": [R, y],
        "border-left-color": [R, y],
        "border-width": [D, m],
        "border-top-width": [D, m],
        "border-right-width": [D, m],
        "border-bottom-width": [D, m],
        "border-left-width": [D, m],
        "border-spacing": [D, m],
        "letter-spacing": [D, m],
        margin: [D, m],
        "margin-top": [D, m],
        "margin-right": [D, m],
        "margin-bottom": [D, m],
        "margin-left": [D, m],
        padding: [D, m],
        "padding-top": [D, m],
        "padding-right": [D, m],
        "padding-bottom": [D, m],
        "padding-left": [D, m],
        "outline-width": [D, m],
        opacity: [D, "number"],
        top: [D, b],
        right: [D, b],
        bottom: [D, b],
        left: [D, b],
        "font-size": [D, b],
        "text-indent": [D, b],
        "word-spacing": [D, b],
        width: [D, b],
        "min-width": [D, b],
        "max-width": [D, b],
        height: [D, b],
        "min-height": [D, b],
        "max-height": [D, b],
        "line-height": [D, "unitless"],
        "scroll-top": [V, "number", "scrollTop"],
        "scroll-left": [V, "number", "scrollLeft"]
      },
      U = {};
    A.transform && (H.transform = [z], U = {
      x: [b, "translateX"],
      y: [b, "translateY"],
      rotate: [w],
      rotateX: [w],
      rotateY: [w],
      scale: ["number"],
      scaleX: ["number"],
      scaleY: ["number"],
      skew: [w],
      skewX: [w],
      skewY: [w]
    }), A.transform && A.backface && (U.z = [b, "translateZ"], U.rotateZ = [w], U.scaleZ = ["number"], U.perspective = [m]);
    var B = /ms/,
      Q = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function(t, e, n) {
  "use strict";
  var r = n(48),
    i = n(102);
  n(103), n(104), n(52), n(51);
  n.d(e, "b", function() {
    return r.b
  }), n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    function o() {
      h === v && (h = v.slice())
    }

    function c() {
      return p
    }

    function s(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return o(), h.push(t),
        function() {
          if (e) {
            e = !1, o();
            var n = h.indexOf(t);
            h.splice(n, 1)
          }
        }
    }

    function f(t) {
      if (!Object(i.a)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (g) throw new Error("Reducers may not dispatch actions.");
      try {
        g = !0, p = d(p, t)
      } finally {
        g = !1
      }
      for (var e = v = h, n = 0; n < e.length; n++) e[n]();
      return t
    }
    var l;
    if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(r)(t, e)
    }
    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var d = t,
      p = e,
      v = [],
      h = v,
      g = !1;
    return f({
      type: u.INIT
    }), l = {
      dispatch: f,
      subscribe: s,
      getState: c,
      replaceReducer: function(t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        d = t, f({
          type: u.INIT
        })
      }
    }, l[a.a] = function() {
      var t, e = s;
      return t = {
        subscribe: function(t) {
          function n() {
            t.next && t.next(c())
          }
          if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
          return n(), {
            unsubscribe: e(n)
          }
        }
      }, t[a.a] = function() {
        return this
      }, t
    }, l
  }
  n.d(e, "a", function() {
    return u
  }), e.b = r;
  var i = n(49),
    o = n(99),
    a = n.n(o),
    u = {
      INIT: "@@redux/INIT"
    }
}, function(t, e, n) {
  "use strict";
  var r = n(91),
    i = n(96),
    o = n(98),
    a = "[object Object]",
    u = Function.prototype,
    c = Object.prototype,
    s = u.toString,
    f = c.hasOwnProperty,
    l = s.call(Object);
  e.a = function(t) {
    if (!Object(o.a)(t) || Object(r.a)(t) != a) return !1;
    var e = Object(i.a)(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l
  }
}, function(t, e, n) {
  "use strict";
  var r = n(92).a.Symbol;
  e.a = r
}, function(t, e, n) {
  "use strict"
}, function(t, e, n) {
  "use strict";
  e.a = function() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    if (0 === e.length) return function(t) {
      return t
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1],
      i = e.slice(0, -1);
    return function() {
      return i.reduceRight(function(t, e) {
        return e(t)
      }, r.apply(void 0, arguments))
    }
  }
}, function(t, e, n) {
  "use strict";

  function r(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      r = Math.pow(n, e),
      i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0
  }
  e.b = r, e.a = function(t, e) {
    return 0 === e ? 0 : 1 === e ? 1 : r(e > 0 && t && i[t] ? i[t](e) : e)
  };
  var i = n(111)
}, function(t, e, n) {
  "use strict";

  function r(t, e) {
    c({
      store: e,
      rawData: t.rawData,
      allowEvents: !0
    }), document.dispatchEvent(new CustomEvent("IX2_PREVIEW_LOAD"))
  }

  function i(t) {
    return t && L()(t, "_EFFECT")
  }

  function o(t, e) {
    var n = t.actionTypeId,
      r = t.actionListId,
      o = t.actionItemId,
      a = t.eventId,
      u = t.allowEvents,
      s = t.immediate,
      f = t.verbose,
      v = void 0 === f || f,
      h = t.rawData;
    if (r && o && h && s && (h = Object(P.k)({
        actionListId: r,
        actionItemId: o,
        rawData: h
      })), c({
        store: e,
        rawData: h,
        allowEvents: u
      }), r && n === V.c || i(n)) {
      d({
        store: e,
        actionListId: r
      }), l({
        store: e,
        actionListId: r,
        eventId: a
      });
      var g = p({
        store: e,
        eventId: a,
        actionListId: r,
        immediate: s,
        verbose: v
      });
      v && g && e.dispatch(Object(C.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !s
      }))
    }
  }

  function a(t, e) {
    var n = t.actionListId;
    n ? d({
      store: e,
      actionListId: n
    }) : function(t) {
      var e = t.store,
        n = e.getState().ixInstances;
      k()(n, function(t) {
        if (!t.continuous) {
          var n = t.actionListId,
            r = t.verbose;
          h(t, e), r && e.dispatch(Object(C.actionListPlaybackChanged)({
            actionListId: n,
            isPlaying: !1
          }))
        }
      })
    }({
      store: e
    }), s(e)
  }

  function u(t, e) {
    s(e), Object(P.b)({
      store: e,
      elementApi: D
    })
  }

  function c(t) {
    var e = t.store,
      n = t.rawData,
      r = t.allowEvents,
      o = e.getState().ixSession;
    n && e.dispatch(Object(C.rawDataImported)(n)), o.active || (r && function(t) {
      var e = t.getState().ixData.eventTypeMap;
      k()(e, function(e, n) {
        var r = z.a[n];
        r ? function(t) {
          var e = t.logic,
            n = t.store,
            r = t.events,
            o = e.types,
            a = e.handler,
            u = n.getState().ixData,
            c = u.actionLists,
            s = F(r, G);
          if (!_()(s)) return;
          k()(s, function(t, e) {
            var o = r[e],
              a = o.action,
              u = o.id,
              s = a.config.actionListId;
            if (a.actionTypeId === V.a) {
              var f = Array.isArray(o.config) ? o.config : [o.config];
              f.forEach(function(e) {
                var r = e.continuousParameterGroupId,
                  i = w()(c, s + ".continuousParameterGroups", []),
                  o = m()(i, function(t) {
                    var e = t.id;
                    return e === r
                  }),
                  a = (e.smoothing || 0) / 100,
                  f = (e.restingState || 0) / 100;
                o && t.forEach(function(t, r) {
                  var i = u + R.g + r;
                  ! function(t) {
                    var e = t.store,
                      n = t.eventStateKey,
                      r = t.eventTarget,
                      i = t.eventId,
                      o = t.eventConfig,
                      a = t.actionListId,
                      u = t.parameterGroup,
                      c = t.smoothing,
                      s = t.restingValue,
                      f = e.getState().ixData.events[i],
                      l = f.eventTypeId,
                      d = {},
                      p = {},
                      h = [],
                      g = u.continuousActionGroups,
                      y = u.id;
                    Object(P.o)(l, o) && (y = Object(P.i)(n, y));
                    g.forEach(function(t) {
                      var e = t.keyframe,
                        n = t.actionItems;
                      n.forEach(function(t) {
                        var n = t.actionTypeId,
                          i = t.config.target;
                        if (i) {
                          var o = Object(P.p)(i) + R.g + n;
                          if (p[o] = function() {
                              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = arguments[1],
                                n = arguments[2],
                                r = [].concat(function(t) {
                                  if (Array.isArray(t)) {
                                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                    return n
                                  }
                                  return Array.from(t)
                                }(t)),
                                i = void 0;
                              r.some(function(t, n) {
                                return t.keyframe === e && (i = n, !0)
                              }), null == i && (i = r.length, r.push({
                                keyframe: e,
                                actionItems: []
                              }));
                              return r[i].actionItems.push(n), r
                            }(p[o], e, t), !d[o]) {
                            d[o] = !0;
                            var a = t.config;
                            Object(P.c)({
                              config: a,
                              event: f,
                              eventTarget: r,
                              elementApi: D
                            }).forEach(function(t) {
                              h.push({
                                element: t,
                                key: o
                              })
                            })
                          }
                        }
                      })
                    }), h.forEach(function(t) {
                      var n = t.element,
                        r = t.key,
                        o = p[r],
                        u = w()(o, "[0].actionItems[0]", {}),
                        f = Object(P.e)({
                          element: n,
                          actionItem: u,
                          elementApi: D
                        });
                      v({
                        store: e,
                        element: n,
                        eventId: i,
                        actionListId: a,
                        actionItem: u,
                        destination: f,
                        continuous: !0,
                        parameterId: y,
                        actionGroups: o,
                        smoothing: c,
                        restingValue: s
                      })
                    })
                  }({
                    store: n,
                    eventStateKey: i,
                    eventTarget: t,
                    eventId: u,
                    eventConfig: e,
                    actionListId: s,
                    parameterGroup: o,
                    smoothing: a,
                    restingValue: f
                  })
                })
              })
            }(a.actionTypeId === V.c || i(a.actionTypeId)) && l({
              store: n,
              actionListId: s,
              eventId: u
            })
          });
          var f = function(t) {
              var e = n.getState(),
                i = e.ixSession;
              X(s, function(e, o, c) {
                var s = r[o],
                  f = i.eventState[c],
                  l = s.action,
                  d = s.mediaQueries,
                  p = void 0 === d ? u.mediaQueryKeys : d;
                if (Object(P.n)(p, i.mediaQueryKey)) {
                  var v = function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      i = a({
                        store: n,
                        element: e,
                        event: s,
                        eventConfig: r,
                        nativeEvent: t,
                        eventStateKey: c
                      }, f);
                    i !== f && n.dispatch(Object(C.eventStateChanged)(c, i))
                  };
                  if (l.actionTypeId === V.a) {
                    var h = Array.isArray(s.config) ? s.config : [s.config];
                    h.forEach(v)
                  } else v()
                }
              })
            },
            d = function(t) {
              var e = t.target,
                r = void 0 === e ? document : e,
                i = t.types;
              i.split(" ").filter(Boolean).forEach(function(t) {
                r.addEventListener(t, f), n.dispatch(Object(C.eventListenerAdded)(r, [t, f]))
              })
            };
          Array.isArray(o) ? o.forEach(d) : "string" == typeof o && d(e)
        }({
          logic: r,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: " + n)
      });
      t.getState().ixSession.eventListeners.length && function(t) {
        function e() {
          var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
          if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch(Object(C.viewportWidthChanged)({
              width: i,
              mediaQueries: o
            }))
          }
        }
        $.forEach(function(n) {
          window.addEventListener(n, e), t.dispatch(Object(C.eventListenerAdded)(window, [n, e]))
        });
        e()
      }(t)
    }(e), e.dispatch(Object(C.sessionStarted)()), function(t) {
      ! function e(n) {
        var r = t.getState(),
          i = r.ixSession,
          o = r.ixParameters;
        i.active && (t.dispatch(Object(C.animationFrameChanged)(n, o)), requestAnimationFrame(e))
      }(window.performance.now())
    }(e))
  }

  function s(t) {
    var e = t.getState().ixSession;
    if (e.active) {
      e.eventListeners.forEach(f), t.dispatch(Object(C.sessionStopped)())
    }
  }

  function f(t) {
    var e = t.target,
      n = t.listenerParams;
    e.removeEventListener.apply(e, n)
  }

  function l(t) {
    var e = t.store,
      n = t.actionListId,
      r = t.eventId,
      i = e.getState().ixData,
      o = i.actionLists,
      a = i.events[r],
      u = o[n];
    if (u && u.useFirstGroupAsInitialState) {
      w()(u, "actionItemGroups[0].actionItems", []).forEach(function(t) {
        var i = t.config;
        Object(P.c)({
          config: i,
          event: a,
          elementApi: D
        }).forEach(function(i) {
          v({
            destination: Object(P.e)({
              element: i,
              actionItem: t,
              elementApi: D
            }),
            origin: Object(P.g)({
              element: i,
              actionItem: t,
              elementApi: D
            }),
            immediate: !0,
            store: e,
            element: i,
            eventId: r,
            actionItem: t,
            actionListId: n
          })
        })
      })
    }
  }

  function d(t) {
    var e = t.store,
      n = t.eventId,
      r = t.actionListId,
      i = e.getState().ixInstances;
    k()(i, function(t) {
      t.actionListId === r && t.eventId === n && (h(t, e), t.verbose && e.dispatch(Object(C.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !1
      })))
    })
  }

  function p(t) {
    var e = t.store,
      n = t.eventId,
      r = t.eventTarget,
      i = t.actionListId,
      o = t.groupIndex,
      a = void 0 === o ? 0 : o,
      u = t.immediate,
      c = t.verbose,
      s = e.getState(),
      f = s.ixData,
      l = s.ixSession,
      d = f.events[n] || {},
      p = d.mediaQueries,
      h = void 0 === p ? f.mediaQueryKeys : p,
      g = w()(f, "actionLists." + i, {}),
      y = g.actionItemGroups;
    a >= y.length && w()(d, "config.loop") && (a = 0), 0 === a && g.useFirstGroupAsInitialState && a++;
    var m = w()(y, [a, "actionItems"], []);
    if (!m.length) return !1;
    if (!Object(P.n)(h, l.mediaQueryKey)) return !1;
    var b = Object(P.h)(m),
      x = !1;
    return m.forEach(function(t, o) {
      var s = t.config;
      Object(P.c)({
        config: s,
        event: d,
        eventTarget: r,
        elementApi: D
      }).forEach(function(s, f) {
        x = !0;
        var l = b === o && 0 === f,
          d = Object(P.d)({
            element: s,
            actionItem: t
          }),
          p = Object(P.g)({
            element: s,
            actionItem: t,
            computedStyle: d,
            elementApi: D
          }),
          h = Object(P.e)({
            element: s,
            actionItem: t,
            elementApi: D
          });
        v({
          store: e,
          element: s,
          actionItem: t,
          eventId: n,
          eventTarget: r,
          actionListId: i,
          groupIndex: a,
          isCarrier: l,
          origin: p,
          destination: h,
          immediate: u,
          verbose: c
        })
      })
    }), x
  }

  function v(t) {
    var e = t.store,
      n = function(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
      }(t, ["store"]),
      r = !n.continuous,
      i = n.immediate,
      o = Object(P.f)();
    e.dispatch(Object(C.instanceAdded)(N({
      instanceId: o
    }, n))), i ? function(t, e) {
      t.dispatch(Object(C.instanceStarted)(e));
      var n = t.getState().ixParameters;
      t.dispatch(Object(C.animationFrameChanged)(Number.POSITIVE_INFINITY, n));
      g(t.getState().ixInstances[e], t)
    }(e, o) : (Object(P.j)({
      store: e,
      select: function(t) {
        return t.ixInstances[o]
      },
      onChange: g
    }), r && e.dispatch(Object(C.instanceStarted)(o)))
  }

  function h(t, e) {
    Object(P.a)(t, D), e.dispatch(Object(C.instanceRemoved)(t.id))
  }

  function g(t, e) {
    var n = t.active,
      r = t.continuous,
      i = t.complete,
      o = t.current,
      a = t.groupIndex,
      u = t.eventId,
      c = t.eventTarget,
      s = t.actionListId,
      f = t.isGeneral,
      l = t.isCarrier,
      d = t.verbose,
      v = e.getState(),
      g = v.ixData,
      y = v.ixSession,
      m = (g.events[u] || {}).mediaQueries,
      b = void 0 === m ? g.mediaQueryKeys : m;
    if (Object(P.n)(b, y.mediaQueryKey) && (r || n || i) && ((o || f && i) && Object(P.m)(t, D), i)) {
      if (l) {
        var w = p({
          store: e,
          eventId: u,
          eventTarget: c,
          actionListId: s,
          groupIndex: a + 1,
          verbose: d
        });
        d && !w && e.dispatch(Object(C.actionListPlaybackChanged)({
          actionListId: s,
          isPlaying: !1
        }))
      }
      h(t, e)
    }
  }
  e.a = function(t) {
    Object(P.j)({
      store: t,
      select: function(t) {
        return t.ixRequest.preview
      },
      onChange: r
    }), Object(P.j)({
      store: t,
      select: function(t) {
        return t.ixRequest.playback
      },
      onChange: o
    }), Object(P.j)({
      store: t,
      select: function(t) {
        return t.ixRequest.stop
      },
      onChange: a
    }), Object(P.j)({
      store: t,
      select: function(t) {
        return t.ixRequest.clear
      },
      onChange: u
    })
  }, e.c = c, e.e = s, e.d = d, e.b = p;
  var y = n(55),
    m = n.n(y),
    b = n(19),
    w = n.n(b),
    x = n(179),
    _ = n.n(x),
    O = n(185),
    j = n.n(O),
    I = n(199),
    E = n.n(I),
    S = n(200),
    A = n.n(S),
    T = n(203),
    k = n.n(T),
    M = n(207),
    L = n.n(M),
    P = n(39),
    C = n(42),
    D = n(212),
    R = n(41),
    V = n(40),
    z = n(213),
    N = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    $ = ["resize", "orientationchange"],
    F = function(t, e) {
      return j()(A()(t, e), E.a)
    },
    X = function(t, e) {
      k()(t, function(t, n) {
        t.forEach(function(t, r) {
          var i = n + R.g + r;
          e(t, n, i)
        })
      })
    },
    G = function(t) {
      var e = {
        target: t.target
      };
      return Object(P.c)({
        config: e,
        elementApi: D
      })
    }
}, function(t, e, n) {
  var r = n(114)(n(176));
  t.exports = r
}, function(t, e, n) {
  function r(t) {
    var e = this.__data__ = new i(t);
    this.size = e.size
  }
  var i = n(13),
    o = n(122),
    a = n(123),
    u = n(124),
    c = n(125),
    s = n(126);
  r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r
}, function(t, e, n) {
  var r = n(8),
    i = n(3),
    o = "[object AsyncFunction]",
    a = "[object Function]",
    u = "[object GeneratorFunction]",
    c = "[object Proxy]";
  t.exports = function(t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c
  }
}, function(t, e, n) {
  (function(e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.exports = n
  }).call(e, n(22))
}, function(t, e) {
  var n = Function.prototype.toString;
  t.exports = function(t) {
    if (null != t) {
      try {
        return n.call(t)
      } catch (t) {}
      try {
        return t + ""
      } catch (t) {}
    }
    return ""
  }
}, function(t, e, n) {
  function r(t, e, n, u, c) {
    return t === e || (null == t || null == e || !o(t) && !a(e) ? t != t && e != e : i(t, e, n, u, r, c))
  }
  var i = n(145),
    o = n(3),
    a = n(5);
  t.exports = r
}, function(t, e, n) {
  var r = n(146),
    i = n(149),
    o = n(150),
    a = 1,
    u = 2;
  t.exports = function(t, e, n, c, s, f) {
    var l = n & a,
      d = t.length,
      p = e.length;
    if (d != p && !(l && p > d)) return !1;
    var v = f.get(t);
    if (v && f.get(e)) return v == e;
    var h = -1,
      g = !0,
      y = n & u ? new r : void 0;
    for (f.set(t, e), f.set(e, t); ++h < d;) {
      var m = t[h],
        b = e[h];
      if (c) var w = l ? c(b, m, h, e, t, f) : c(m, b, h, t, e, f);
      if (void 0 !== w) {
        if (w) continue;
        g = !1;
        break
      }
      if (y) {
        if (!i(e, function(t, e) {
            if (!o(y, e) && (m === t || s(m, t, n, c, f))) return y.push(e)
          })) {
          g = !1;
          break
        }
      } else if (m !== b && !s(m, b, n, c, f)) {
        g = !1;
        break
      }
    }
    return f.delete(t), f.delete(e), g
  }
}, function(t, e, n) {
  var r = n(156),
    i = n(18),
    o = n(0),
    a = n(27),
    u = n(28),
    c = n(29),
    s = Object.prototype.hasOwnProperty;
  t.exports = function(t, e) {
    var n = o(t),
      f = !n && i(t),
      l = !n && !f && a(t),
      d = !n && !f && !l && c(t),
      p = n || f || l || d,
      v = p ? r(t.length, String) : [],
      h = v.length;
    for (var g in t) !e && !s.call(t, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h)) || v.push(g);
    return v
  }
}, function(t, e, n) {
  var r = n(4)(n(2), "WeakMap");
  t.exports = r
}, function(t, e, n) {
  var r = n(3);
  t.exports = function(t) {
    return t == t && !r(t)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return function(n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  }
}, function(t, e, n) {
  var r = n(67);
  t.exports = function(t) {
    return null == t ? "" : r(t)
  }
}, function(t, e, n) {
  function r(t) {
    if ("string" == typeof t) return t;
    if (a(t)) return o(t, r) + "";
    if (u(t)) return f ? f.call(t) : "";
    var e = t + "";
    return "0" == e && 1 / t == -c ? "-0" : e
  }
  var i = n(10),
    o = n(68),
    a = n(0),
    u = n(21),
    c = 1 / 0,
    s = i ? i.prototype : void 0,
    f = s ? s.toString : void 0;
  t.exports = r
}, function(t, e) {
  t.exports = function(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
    return i
  }
}, function(t, e) {
  t.exports = function(t) {
    return function(e) {
      return null == e ? void 0 : e[t]
    }
  }
}, function(t, e, n) {
  var r = n(178);
  t.exports = function(t) {
    var e = r(t),
      n = e % 1;
    return e == e ? n ? e - n : e : 0
  }
}, function(t, e, n) {
  var r = n(3),
    i = n(21),
    o = NaN,
    a = /^\s+|\s+$/g,
    u = /^[-+]0x[0-9a-f]+$/i,
    c = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    f = parseInt;
  t.exports = function(t) {
    if ("number" == typeof t) return t;
    if (i(t)) return o;
    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(a, "");
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
  }
}, function(t, e, n) {
  var r = n(73);
  t.exports = function(t, e, n) {
    "__proto__" == e && r ? r(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n
  }
}, function(t, e, n) {
  var r = n(4),
    i = function() {
      try {
        var t = r(Object, "defineProperty");
        return t({}, "", {}), t
      } catch (t) {}
    }();
  t.exports = i
}, function(t, e) {
  t.exports = function() {
    return []
  }
}, function(t, e, n) {
  var r = n(201),
    i = n(17);
  t.exports = function(t, e) {
    return t && r(t, e, i)
  }
}, function(t, e, n) {
  var r = n(75),
    i = n(205)(r);
  t.exports = i
}, function(t, e) {
  t.exports = function(t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "f", function() {
    return r
  }), n.d(e, "k", function() {
    return i
  }), n.d(e, "g", function() {
    return o
  }), n.d(e, "l", function() {
    return a
  }), n.d(e, "j", function() {
    return u
  }), n.d(e, "i", function() {
    return c
  }), n.d(e, "h", function() {
    return s
  }), n.d(e, "v", function() {
    return f
  }), n.d(e, "w", function() {
    return l
  }), n.d(e, "u", function() {
    return d
  }), n.d(e, "z", function() {
    return p
  }), n.d(e, "A", function() {
    return v
  }), n.d(e, "n", function() {
    return h
  }), n.d(e, "m", function() {
    return g
  }), n.d(e, "x", function() {
    return y
  }), n.d(e, "y", function() {
    return m
  }), n.d(e, "d", function() {
    return b
  }), n.d(e, "c", function() {
    return w
  }), n.d(e, "a", function() {
    return x
  }), n.d(e, "b", function() {
    return _
  }), n.d(e, "t", function() {
    return O
  }), n.d(e, "p", function() {
    return j
  }), n.d(e, "s", function() {
    return I
  }), n.d(e, "r", function() {
    return E
  }), n.d(e, "q", function() {
    return S
  }), n.d(e, "e", function() {
    return A
  }), n.d(e, "B", function() {
    return T
  }), n.d(e, "o", function() {
    return k
  });
  var r = "MOUSE_CLICK",
    i = "MOUSE_SECOND_CLICK",
    o = "MOUSE_DOWN",
    a = "MOUSE_UP",
    u = "MOUSE_OVER",
    c = "MOUSE_OUT",
    s = "MOUSE_MOVE",
    f = "SCROLL_INTO_VIEW",
    l = "SCROLL_OUT_OF_VIEW",
    d = "SCROLLING_IN_VIEW",
    p = "TAB_ACTIVE",
    v = "TAB_INACTIVE",
    h = "NAVBAR_OPEN",
    g = "NAVBAR_CLOSE",
    y = "SLIDER_ACTIVE",
    m = "SLIDER_INACTIVE",
    b = "DROPDOWN_OPEN",
    w = "DROPDOWN_CLOSE",
    x = "COMPONENT_ACTIVE",
    _ = "COMPONENT_INACTIVE",
    O = "PAGE_START",
    j = "PAGE_FINISH",
    I = "PAGE_SCROLL_UP",
    E = "PAGE_SCROLL_DOWN",
    S = "PAGE_SCROLL",
    A = "ELEMENT",
    T = "VIEWPORT",
    k = "PAGE"
}, function(t, e, n) {
  "use strict";
  n.d(e, "c", function() {
    return o
  }), n.d(e, "a", function() {
    return u
  }), n.d(e, "b", function() {
    return c
  }), n.d(e, "d", function() {
    return s
  });
  var r = n(55),
    i = n.n(r),
    o = "undefined" != typeof window,
    a = function(t, e) {
      return o ? t() : e
    },
    u = a(function() {
      return i()(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
        return t in Element.prototype
      })
    }),
    c = a(function() {
      var t = document.createElement("i"),
        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        for (var n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          if (t.style.display = i, t.style.display === i) return i
        }
        return ""
      } catch (t) {
        return ""
      }
    }, "flex"),
    s = a(function() {
      var t = document.createElement("i");
      if (null == t.style.transform)
        for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
          var i = e[r] + "Transform";
          if (void 0 !== t.style[i]) return i
        }
      return "transform"
    }, "transform")
}, function(t, e, n) {
  var r = n(3),
    i = Object.create,
    o = function() {
      function t() {}
      return function(e) {
        if (!r(e)) return {};
        if (i) return i(e);
        t.prototype = e;
        var n = new t;
        return t.prototype = void 0, n
      }
    }();
  t.exports = o
}, function(t, e, n) {
  var r = n(226),
    i = n(227),
    o = r ? function(t) {
      return r.get(t)
    } : i;
  t.exports = o
}, function(t, e, n) {
  var r = n(228),
    i = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o],
        u = a.func;
      if (null == u || u == t) return a.name
    }
    return e
  }
}, function(t, e, n) {
  "use strict";

  function r(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
  }
  var i = n(236),
    o = window.jQuery,
    a = {},
    u = {
      reset: function(t, e) {
        i.triggers.reset(t, e)
      },
      intro: function(t, e) {
        i.triggers.intro(t, e), r(e, "COMPONENT_ACTIVE")
      },
      outro: function(t, e) {
        i.triggers.outro(t, e), r(e, "COMPONENT_INACTIVE")
      }
    };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a
}, function(t, e, n) {
  n(85), n(87), n(89), n(234), n(235), n(237), n(238), t.exports = n(239)
}, function(t, e, n) {
  var r = n(1);
  r.define("brand", t.exports = function(t) {
    function e() {
      var t = a.children(u),
        e = t.length && t.get(0) === n,
        i = r.env("editor");
      e ? i && t.remove() : (t.length && t.remove(), i || a.append(n))
    }
    var n, i = {},
      o = t("html"),
      a = t("body"),
      u = ".w-webflow-badge",
      c = window.location,
      s = /PhantomJS/i.test(navigator.userAgent);
    return i.ready = function() {
      var r = o.attr("data-wf-status"),
        i = o.attr("data-wf-domain") || "";
      /\.webflow\.io$/i.test(i) && c.hostname !== i && (r = !0), r && !s && (n = n || function() {
        var e = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
            marginRight: "8px",
            width: "16px"
          }),
          r = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");
        return e.append(n, r), e[0]
      }(), e(), setTimeout(e, 500))
    }, i
  })
}, function(t, e, n) {
  var r = window.$,
    i = n(46) && r.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  t.exports = function() {
    var t = {};
    t.VERSION = "1.6.0-Webflow";
    var e = {},
      n = Array.prototype,
      r = Object.prototype,
      o = Function.prototype,
      a = (n.push, n.slice),
      u = (n.concat, r.toString, r.hasOwnProperty),
      c = n.forEach,
      s = n.map,
      f = (n.reduce, n.reduceRight, n.filter),
      l = (n.every, n.some),
      d = n.indexOf,
      p = (n.lastIndexOf, Array.isArray, Object.keys),
      v = (o.bind, t.each = t.forEach = function(n, r, i) {
        if (null == n) return n;
        if (c && n.forEach === c) n.forEach(r, i);
        else if (n.length === +n.length) {
          for (var o = 0, a = n.length; o < a; o++)
            if (r.call(i, n[o], o, n) === e) return
        } else {
          var u = t.keys(n);
          for (o = 0, a = u.length; o < a; o++)
            if (r.call(i, n[u[o]], u[o], n) === e) return
        }
        return n
      });
    t.map = t.collect = function(t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
        r.push(e.call(n, t, i, o))
      }), r)
    }, t.find = t.detect = function(t, e, n) {
      var r;
      return h(t, function(t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0
      }), r
    }, t.filter = t.select = function(t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      }), r)
    };
    var h = t.some = t.any = function(n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e
      }), !!o)
    };
    t.contains = t.include = function(t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
        return t === e
      }))
    }, t.delay = function(t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function() {
        return t.apply(null, n)
      }, e)
    }, t.defer = function(e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function(t) {
      var e, n, r;
      return function() {
        e || (e = !0, n = arguments, r = this, i.frame(function() {
          e = !1, t.apply(r, n)
        }))
      }
    }, t.debounce = function(e, n, r) {
      var i, o, a, u, c, s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
      };
      return function() {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
      }
    }, t.defaults = function(e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];
        for (var o in i) void 0 === e[o] && (e[o] = i[o])
      }
      return e
    }, t.keys = function(e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var n = [];
      for (var r in e) t.has(e, r) && n.push(r);
      return n
    }, t.has = function(t, e) {
      return u.call(t, e)
    }, t.isObject = function(t) {
      return t === Object(t)
    }, t.now = Date.now || function() {
      return (new Date).getTime()
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var g = /(.)^/,
      y = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      m = /\\|'|\r|\n|\u2028|\u2029/g,
      b = function(t) {
        return "\\" + y[t]
      };
    return t.template = function(e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";
      e.replace(i, function(t, n, r, i, u) {
        return a += e.slice(o, u).replace(m, b), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var u = new Function(n.variable || "obj", "_", a)
      } catch (t) {
        throw t.source = a, t
      }
      var c = function(e) {
          return u.call(this, e, t)
        },
        s = n.variable || "obj";
      return c.source = "function(" + s + "){\n" + a + "}", c
    }, t
  }()
}, function(t, e, n) {
  var r = n(1);
  r.define("forms", t.exports = function(t, e) {
    function i(e, n) {
      var r = t(n),
        i = t.data(n, b);
      i || (i = t.data(n, b, {
        form: r
      })), o(i);
      var a = r.closest("div.w-form");
      i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail");
      var u = i.action = r.attr("action");
      i.handler = null, i.redirect = r.attr("data-redirect"), j.test(u) ? i.handler = s : u || (v ? i.handler = c : I())
    }

    function o(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function a(t) {
      var e = t.btn,
        n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
    }

    function u(e, n) {
      var r = null;
      return n = n || {}, e.find(':input:not([type="submit"])').each(function(i, o) {
        var a = t(o),
          u = a.attr("type"),
          c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
          s = a.val();
        if ("checkbox" === u && (s = a.is(":checked")), "radio" === u) {
          if (null === n[c] || "string" == typeof n[c]) return;
          s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) {
          var i = null;
          "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") && (r ? (w.test(n) || w.test(t.attr("type"))) && (x.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n);
          return i
        }(a, u, c, s)
      }), r
    }

    function c(e) {
      o(e);
      var n = e.form,
        i = {
          name: n.attr("data-name") || n.attr("name") || "Untitled Form",
          source: y.href,
          test: r.env(),
          fields: {},
          dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
        };
      l(e);
      var c = u(n, i.fields);
      if (c) return _(c);
      if (a(e), v) {
        var s = "https://webflow.com/api/v1/form/" + v;
        m && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "http://formdata.webflow.com")), t.ajax({
          url: s,
          type: "POST",
          data: i,
          dataType: "json",
          crossDomain: !0
        }).done(function() {
          e.success = !0, f(e)
        }).fail(function() {
          f(e)
        })
      } else f(e)
    }

    function s(n) {
      o(n);
      var r = n.form,
        i = {};
      if (!/^https/.test(y.href) || /^https/.test(n.action)) {
        l(n);
        var c = u(r, i);
        if (c) return _(c);
        a(n);
        var s;
        e.each(i, function(t, e) {
          w.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (s = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
        }), s && !i.FNAME && (s = s.split(" "), i.FNAME = s[0], i.LNAME = i.LNAME || s[1]);
        var d = n.action.replace("/post?", "/post-json?") + "&c=?",
          p = d.indexOf("u=") + 2;
        p = d.substring(p, d.indexOf("&", p));
        var v = d.indexOf("id=") + 3;
        v = d.substring(v, d.indexOf("&", v)), i["b_" + p + "_" + v] = "", t.ajax({
          url: d,
          data: i,
          dataType: "jsonp"
        }).done(function(t) {
          n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), f(n)
        }).fail(function() {
          f(n)
        })
      } else r.attr("method", "post")
    }

    function f(t) {
      var e = t.form,
        n = t.redirect,
        i = t.success;
      i && n ? r.location(n) : (t.done.toggle(i), t.fail.toggle(!i), e.toggle(!i), o(t))
    }

    function l(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }
    var d = {};
    n(88);
    var p, v, h, g = t(document),
      y = window.location,
      m = window.XDomainRequest && !window.atob,
      b = ".w-form",
      w = /e(-)?mail/i,
      x = /^\S+@\S+$/,
      _ = window.alert,
      O = r.env(),
      j = /list-manage[1-9]?.com/i,
      I = e.debounce(function() {
        _("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);
    return d.ready = d.design = d.preview = function() {
      v = t("html").attr("data-wf-site"), (p = t(b + " form")).length && p.each(i), O || h || (h = !0, g.on("submit", b + " form", function(e) {
        var n = t.data(this, b);
        n.handler && (n.evt = e, n.handler(n))
      }))
    }, d
  })
}, function(t, e) {
  /*!
   * jQuery-ajaxTransport-XDomainRequest - v1.0.3
   * 2014-12-16 WEBFLOW - Removed UMD wrapper
   * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
   * Copyright (c) 2014 Jason Moon (@JSONMOON)
   * @license MIT (/blob/master/LICENSE.txt)
   */
  t.exports = function(t) {
    if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
      var e = /^https?:\/\//i,
        n = /^get|post$/i,
        r = new RegExp("^" + location.protocol, "i");
      t.ajaxTransport("* text html xml json", function(i, o, a) {
        if (i.crossDomain && i.async && n.test(i.type) && e.test(i.url) && r.test(i.url)) {
          var u = null;
          return {
            send: function(e, n) {
              var r = "",
                a = (o.dataType || "").toLowerCase();
              u = new XDomainRequest, /^\d+$/.test(o.timeout) && (u.timeout = o.timeout), u.ontimeout = function() {
                n(500, "timeout")
              }, u.onload = function() {
                var e = "Content-Length: " + u.responseText.length + "\r\nContent-Type: " + u.contentType,
                  r = {
                    code: 200,
                    message: "success"
                  },
                  i = {
                    text: u.responseText
                  };
                try {
                  if ("html" === a || /text\/html/i.test(u.contentType)) i.html = u.responseText;
                  else if ("json" === a || "text" !== a && /\/json/i.test(u.contentType)) try {
                    i.json = t.parseJSON(u.responseText)
                  } catch (t) {
                    r.code = 500, r.message = "parseerror"
                  } else if ("xml" === a || "text" !== a && /\/xml/i.test(u.contentType)) {
                    var o = new ActiveXObject("Microsoft.XMLDOM");
                    o.async = !1;
                    try {
                      o.loadXML(u.responseText)
                    } catch (t) {
                      o = void 0
                    }
                    if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw r.code = 500, r.message = "parseerror", "Invalid XML: " + u.responseText;
                    i.xml = o
                  }
                } catch (t) {
                  throw t
                } finally {
                  n(r.code, r.message, i, e)
                }
              }, u.onprogress = function() {}, u.onerror = function() {
                n(500, "error", {
                  text: u.responseText
                })
              }, o.data && (r = "string" === t.type(o.data) ? o.data : t.param(o.data)), u.open(i.type, i.url), u.send(r)
            },
            abort: function() {
              u && u.abort()
            }
          }
        }
      })
    }
  }(window.jQuery)
}, function(t, e, n) {
  var r = n(1),
    i = n(90);
  r.define("ix2", t.exports = function() {
    return i
  })
}, function(t, e, n) {
  "use strict";

  function r(t) {
    i(), Object(u.c)({
      store: l,
      rawData: t,
      allowEvents: !0
    })
  }

  function i() {
    Object(u.e)(l)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "init", function() {
    return r
  }), n.d(e, "destroy", function() {
    return i
  }), n.d(e, "store", function() {
    return l
  });
  var o = n(47),
    a = n(105),
    u = n(54),
    c = n(1),
    s = n.n(c),
    f = n(42);
  n.d(e, "actions", function() {
    return f
  });
  var l = Object(o.b)(a.a);
  s.a.env() && Object(u.a)(l)
}, function(t, e, n) {
  "use strict";
  var r = n(50),
    i = n(94),
    o = n(95),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r.a ? r.a.toStringTag : void 0;
  e.a = function(t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.a)(t) : Object(o.a)(t)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(93),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r.a || i || Function("return this")();
  e.a = o
}, function(t, e, n) {
  "use strict";
  (function(t) {
    var n = "object" == typeof t && t && t.Object === Object && t;
    e.a = n
  }).call(e, n(22))
}, function(t, e, n) {
  "use strict";
  var r = n(50),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r.a ? r.a.toStringTag : void 0;
  e.a = function(t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function(t, e, n) {
  "use strict";
  var r = Object.prototype.toString;
  e.a = function(t) {
    return r.call(t)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(97),
    i = Object(r.a)(Object.getPrototypeOf, Object);
  e.a = i
}, function(t, e, n) {
  "use strict";
  e.a = function(t, e) {
    return function(n) {
      return t(e(n))
    }
  }
}, function(t, e, n) {
  "use strict";
  e.a = function(t) {
    return null != t && "object" == typeof t
  }
}, function(t, e, n) {
  t.exports = n(100)
}, function(t, e, n) {
  "use strict";
  (function(t, r) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i, o = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(n(101));
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
    var a = (0, o.default)(i);
    e.default = a
  }).call(e, n(22), n(23)(t))
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function(t) {
    var e, n = t.Symbol;
    return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
  }
}, function(t, e, n) {
  "use strict";

  function r(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
  }
  e.a = function(t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      "function" == typeof t[a] && (n[a] = t[a])
    }
    var u, c = Object.keys(n);
    try {
      ! function(t) {
        Object.keys(t).forEach(function(e) {
          var n = t[e];
          if (void 0 === n(void 0, {
              type: i.a.INIT
            })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === n(void 0, {
              type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + i.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
      }(n)
    } catch (t) {
      u = t
    }
    return function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = arguments[1];
      if (u) throw u;
      for (var i = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a],
          f = n[s],
          l = t[s],
          d = f(l, e);
        if (void 0 === d) {
          var p = r(s, e);
          throw new Error(p)
        }
        o[s] = d, i = i || d !== l
      }
      return i ? o : t
    }
  };
  var i = n(48);
  n(49), n(51)
}, function(t, e, n) {
  "use strict"
}, function(t, e, n) {
  "use strict";
  n(52), Object.assign
}, function(t, e, n) {
  "use strict";
  var r = n(47),
    i = n(106),
    o = n(107),
    a = n(109),
    u = n(110),
    c = n(113);
  e.a = Object(r.a)({
    ixData: i.a,
    ixRequest: o.a,
    ixSession: a.a,
    ixInstances: u.a,
    ixParameters: c.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var r = n(6),
    i = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments[1];
      switch (e.type) {
        case r.l:
          return e.payload.ixData || Object.freeze({});
        default:
          return t
      }
    }
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  n.d(e, "a", function() {
    return l
  });
  var i, o = n(6),
    a = n(12),
    u = n.n(a),
    c = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    s = {
      preview: {},
      playback: {},
      stop: {},
      clear: {}
    },
    f = Object.create(null, (i = {}, r(i, o.k, {
      value: "preview"
    }), r(i, o.j, {
      value: "playback"
    }), r(i, o.o, {
      value: "stop"
    }), r(i, o.c, {
      value: "clear"
    }), i)),
    l = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
        e = arguments[1];
      return e.type in f ? u()(t, r({}, f[e.type], {
        $set: c({}, e.payload)
      })) : t
    }
}, function(t, e, n) {
  "use strict";
  t.exports = function(t, e, n, r, i, o, a, u) {
    if (!t) {
      var c;
      if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var s = [n, r, i, o, a, u],
          f = 0;
        (c = new Error(e.replace(/%s/g, function() {
          return s[f++]
        }))).name = "Invariant Violation"
      }
      throw c.framesToPop = 1, c
    }
  }
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  n.d(e, "a", function() {
    return c
  });
  var i = n(6),
    o = n(12),
    a = n.n(o),
    u = {
      active: !1,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null
    },
    c = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        e = arguments[1];
      switch (e.type) {
        case i.m:
          return a()(t, {
            active: {
              $set: !0
            }
          });
        case i.n:
          return u;
        case i.d:
          return a()(t, {
            eventListeners: {
              $push: [e.payload]
            }
          });
        case i.e:
          return a()(t, {
            eventState: r({}, e.payload.stateKey, {
              $set: e.payload.newState
            })
          });
        case i.a:
          var n = e.payload,
            o = n.actionListId,
            c = n.isPlaying;
          return a()(t, {
            playbackState: r({}, o, {
              $set: c
            })
          });
        case i.p:
          for (var s = e.payload, f = s.width, l = s.mediaQueries, d = l.length, p = null, v = 0; v < d; v++) {
            var h = l[v],
              g = h.key,
              y = h.min,
              m = h.max;
            if (f >= y && f <= m) {
              p = g;
              break
            }
          }
          return a()(t, {
            viewportWidth: {
              $set: f
            },
            mediaQueryKey: {
              $set: p
            }
          });
        default:
          return t
      }
    }
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  n.d(e, "a", function() {
    return f
  });
  var i = n(6),
    o = n(12),
    a = n.n(o),
    u = n(53),
    c = function(t, e) {
      var n = t.position,
        r = t.parameterId,
        i = t.actionGroups,
        o = t.destinationKeys,
        c = t.smoothing,
        s = t.restingValue,
        f = e.payload.parameters,
        l = Math.max(1 - c, .01),
        d = f[r];
      null == d && (l = 1, d = s);
      var p = Math.max(d, 0) || 0,
        v = Object(u.b)(p - n),
        h = Object(u.b)(n + v * l),
        g = 100 * h;
      if (h === n && t.current) return t;
      for (var y = void 0, m = void 0, b = void 0, w = void 0, x = 0, _ = i.length; x < _; x++) {
        var O = i[x],
          j = O.keyframe,
          I = O.actionItems;
        if (g >= j) {
          y = I[0];
          var E = i[x + 1],
            S = E && g !== j;
          m = S ? E.actionItems[0] : null, S && (b = j / 100, w = (E.keyframe - j) / 100)
        }
      }
      var A = {};
      if (y && !m)
        for (var T = 0, k = o.length; T < k; T++) {
          var M = o[T];
          A[M] = y.config[M]
        } else if (y && m)
          for (var L = (h - b) / w, P = y.config.easing, C = Object(u.a)(P, L), D = 0, R = o.length; D < R; D++) {
            var V = o[D],
              z = y.config[V],
              N = (m.config[V] - z) * C + z;
            A[V] = N
          }
      return a()(t, {
        position: {
          $set: h
        },
        current: {
          $set: A
        }
      })
    },
    s = function(t, e) {
      var n = t,
        r = n.active,
        i = n.origin,
        o = n.start,
        c = n.immediate,
        s = n.isGeneral,
        f = n.verbose,
        l = n.actionItem,
        d = n.destination,
        p = n.destinationKeys,
        v = l.config.easing,
        h = l.config,
        g = h.duration,
        y = h.delay;
      s ? g = 0 : c && (g = y = 0);
      var m = e.payload.now;
      if (r && i) {
        var b = m - (o + y);
        if (f) {
          var w = m - o,
            x = g + y,
            _ = Object(u.b)(Math.min(Math.max(0, w / x), 1));
          t = a()(t, {
            verboseTimeElapsed: {
              $set: x * _
            }
          })
        }
        if (b < 0) return t;
        var O = Object(u.b)(Math.min(Math.max(0, b / g), 1)),
          j = Object(u.a)(v, O),
          I = {},
          E = p.length ? p.reduce(function(t, e) {
            var n = d[e],
              r = parseFloat(i[e]) || 0,
              o = (parseFloat(n) - r) * j + r;
            return t[e] = o, t
          }, {}) : null;
        return I.current = {
          $set: E
        }, I.position = {
          $set: O
        }, 1 === O && (I.active = {
          $set: !1
        }, I.complete = {
          $set: !0
        }), a()(t, I)
      }
      return t
    },
    f = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments[1];
      switch (e.type) {
        case i.l:
          return e.payload.ixInstances || Object.freeze({});
        case i.n:
          return Object.freeze({});
        case i.f:
          var n = e.payload,
            o = n.instanceId,
            u = n.actionItem,
            f = n.element,
            l = n.eventId,
            d = n.eventTarget,
            p = n.actionListId,
            v = n.groupIndex,
            h = n.isCarrier,
            g = n.origin,
            y = n.destination,
            m = n.immediate,
            b = n.verbose,
            w = n.continuous,
            x = n.parameterId,
            _ = n.actionGroups,
            O = n.smoothing,
            j = n.restingValue,
            I = u.actionTypeId,
            E = void 0,
            S = E = /^TRANSFORM_/.test(I),
            A = !E && (E = /^STYLE_/.test(I)),
            T = !E && (E = /^GENERAL_/.test(I)),
            k = A && I.replace("STYLE_", "").toLowerCase(),
            M = Object.keys(y).filter(function(t) {
              return null != y[t]
            });
          return a()(t, r({}, o, {
            $set: {
              id: o,
              active: !1,
              position: 0,
              start: 0,
              origin: g,
              destination: y,
              destinationKeys: M,
              immediate: m,
              verbose: b,
              current: null,
              actionItem: u,
              element: f,
              eventId: l,
              eventTarget: d,
              actionListId: p,
              groupIndex: v,
              isTransform: S,
              isStyle: A,
              isGeneral: T,
              isCarrier: h,
              styleProp: k,
              continuous: w,
              parameterId: x,
              actionGroups: _,
              smoothing: O,
              restingValue: j
            }
          }));
        case i.h:
          var L = e.payload.instanceId;
          return a()(t, r({}, L, {
            $merge: {
              active: !0,
              complete: !1,
              start: window.performance.now()
            }
          }));
        case i.g:
          var P = e.payload.instanceId;
          return a()(t, {
            $unset: [P]
          });
        case i.b:
          for (var C = t, D = Object.keys(t), R = D.length, V = 0; V < R; V++) {
            var z = D[V],
              N = t[z],
              $ = N.continuous ? c : s;
            C = a()(C, r({}, z, {
              $set: $(N, e)
            }))
          }
          return C;
        default:
          return t
      }
    }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "ease", function() {
    return a
  }), n.d(e, "easeIn", function() {
    return u
  }), n.d(e, "easeOut", function() {
    return c
  }), n.d(e, "easeInOut", function() {
    return s
  }), e.inQuad = function(t) {
    return Math.pow(t, 2)
  }, e.outQuad = function(t) {
    return -(Math.pow(t - 1, 2) - 1)
  }, e.inOutQuad = function(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
  }, e.inCubic = function(t) {
    return Math.pow(t, 3)
  }, e.outCubic = function(t) {
    return Math.pow(t - 1, 3) + 1
  }, e.inOutCubic = function(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
  }, e.inQuart = function(t) {
    return Math.pow(t, 4)
  }, e.outQuart = function(t) {
    return -(Math.pow(t - 1, 4) - 1)
  }, e.inOutQuart = function(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
  }, e.inQuint = function(t) {
    return Math.pow(t, 5)
  }, e.outQuint = function(t) {
    return Math.pow(t - 1, 5) + 1
  }, e.inOutQuint = function(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
  }, e.inSine = function(t) {
    return 1 - Math.cos(t * (Math.PI / 2))
  }, e.outSine = function(t) {
    return Math.sin(t * (Math.PI / 2))
  }, e.inOutSine = function(t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  }, e.inExpo = function(t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
  }, e.outExpo = function(t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
  }, e.inOutExpo = function(t) {
    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
  }, e.inCirc = function(t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, e.outCirc = function(t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2))
  }, e.inOutCirc = function(t) {
    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  }, e.outBounce = function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.inBack = function(t) {
    return t * t * ((o + 1) * t - o)
  }, e.outBack = function(t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.inOutBack = function(t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.inElastic = function(t) {
    var e = o,
      n = 0,
      r = 1;
    return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
  }, e.outElastic = function(t) {
    var e = o,
      n = 0,
      r = 1;
    return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
  }, e.inOutElastic = function(t) {
    var e = o,
      n = 0,
      r = 1;
    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
  }, e.swingFromTo = function(t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.swingFrom = function(t) {
    return t * t * ((o + 1) * t - o)
  }, e.swingTo = function(t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.bounce = function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.bouncePast = function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
  };
  var r = n(112),
    i = n.n(r),
    o = 1.70158,
    a = i()(.25, .1, .25, 1),
    u = i()(.42, 0, 1, 1),
    c = i()(0, 0, .58, 1),
    s = i()(.42, 0, .58, 1)
}, function(t, e) {
  function n(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function r(t, e) {
    return 3 * e - 6 * t
  }

  function i(t) {
    return 3 * t
  }

  function o(t, e, o) {
    return ((n(e, o) * t + r(e, o)) * t + i(e)) * t
  }

  function a(t, e, o) {
    return 3 * n(e, o) * t * t + 2 * r(e, o) * t + i(e)
  }
  var u = 4,
    c = .001,
    s = 1e-7,
    f = 10,
    l = 11,
    d = 1 / (l - 1),
    p = "function" == typeof Float32Array;
  t.exports = function(t, e, n, r) {
    function i(e) {
      for (var r = 0, i = 1, p = l - 1; i !== p && v[i] <= e; ++i) r += d;
      var h = r + (e - v[--i]) / (v[i + 1] - v[i]) * d,
        g = a(h, t, n);
      return g >= c ? function(t, e, n, r) {
        for (var i = 0; i < u; ++i) {
          var c = a(e, n, r);
          if (0 === c) return e;
          e -= (o(e, n, r) - t) / c
        }
        return e
      }(e, h, t, n) : 0 === g ? h : function(t, e, n, r, i) {
        var a, u, c = 0;
        do {
          (a = o(u = e + (n - e) / 2, r, i) - t) > 0 ? n = u : e = u
        } while (Math.abs(a) > s && ++c < f);
        return u
      }(e, r, r + d, t, n)
    }
    if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var v = p ? new Float32Array(l) : new Array(l);
    if (t !== e || n !== r)
      for (var h = 0; h < l; ++h) v[h] = o(h * d, t, n);
    return function(a) {
      return t === e && n === r ? a : 0 === a ? 0 : 1 === a ? 1 : o(i(a), e, r)
    }
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var r = n(6),
    i = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments[1];
      switch (e.type) {
        case r.l:
          return e.payload.ixParameters || {};
        case r.n:
          return {};
        case r.i:
          var n = e.payload,
            i = n.key,
            o = n.value;
          return t[i] = o, t;
        default:
          return t
      }
    }
}, function(t, e, n) {
  var r = n(7),
    i = n(9),
    o = n(17);
  t.exports = function(t) {
    return function(e, n, a) {
      var u = Object(e);
      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function(t) {
          return c(u[t], t, u)
        }
      }
      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0
    }
  }
}, function(t, e, n) {
  var r = n(116),
    i = n(166),
    o = n(65);
  t.exports = function(t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
      return n === t || r(n, t, e)
    }
  }
}, function(t, e, n) {
  var r = n(56),
    i = n(60),
    o = 1,
    a = 2;
  t.exports = function(t, e, n, u) {
    var c = n.length,
      s = c,
      f = !u;
    if (null == t) return !s;
    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
    }
    for (; ++c < s;) {
      var d = (l = n[c])[0],
        p = t[d],
        v = l[1];
      if (f && l[2]) {
        if (void 0 === p && !(d in t)) return !1
      } else {
        var h = new r;
        if (u) var g = u(p, v, d, t, e, h);
        if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1
      }
    }
    return !0
  }
}, function(t, e) {
  t.exports = function() {
    this.__data__ = [], this.size = 0
  }
}, function(t, e, n) {
  var r = n(14),
    i = Array.prototype.splice;
  t.exports = function(t) {
    var e = this.__data__,
      n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
  }
}, function(t, e, n) {
  var r = n(14);
  t.exports = function(t) {
    var e = this.__data__,
      n = r(e, t);
    return n < 0 ? void 0 : e[n][1]
  }
}, function(t, e, n) {
  var r = n(14);
  t.exports = function(t) {
    return r(this.__data__, t) > -1
  }
}, function(t, e, n) {
  var r = n(14);
  t.exports = function(t, e) {
    var n = this.__data__,
      i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
  }
}, function(t, e, n) {
  var r = n(13);
  t.exports = function() {
    this.__data__ = new r, this.size = 0
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = this.__data__,
      n = e.delete(t);
    return this.size = e.size, n
  }
}, function(t, e) {
  t.exports = function(t) {
    return this.__data__.get(t)
  }
}, function(t, e) {
  t.exports = function(t) {
    return this.__data__.has(t)
  }
}, function(t, e, n) {
  var r = n(13),
    i = n(25),
    o = n(26),
    a = 200;
  t.exports = function(t, e) {
    var n = this.__data__;
    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u)
    }
    return n.set(t, e), this.size = n.size, this
  }
}, function(t, e, n) {
  var r = n(57),
    i = n(130),
    o = n(3),
    a = n(59),
    u = /^\[object .+?Constructor\]$/,
    c = Function.prototype,
    s = Object.prototype,
    f = c.toString,
    l = s.hasOwnProperty,
    d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function(t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
  }
}, function(t, e, n) {
  var r = n(10),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r ? r.toStringTag : void 0;
  t.exports = function(t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function(t, e) {
  var n = Object.prototype.toString;
  t.exports = function(t) {
    return n.call(t)
  }
}, function(t, e, n) {
  var r = n(131),
    i = function() {
      var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : ""
    }();
  t.exports = function(t) {
    return !!i && i in t
  }
}, function(t, e, n) {
  var r = n(2)["__core-js_shared__"];
  t.exports = r
}, function(t, e) {
  t.exports = function(t, e) {
    return null == t ? void 0 : t[e]
  }
}, function(t, e, n) {
  var r = n(134),
    i = n(13),
    o = n(25);
  t.exports = function() {
    this.size = 0, this.__data__ = {
      hash: new r,
      map: new(o || i),
      string: new r
    }
  }
}, function(t, e, n) {
  function r(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var i = n(135),
    o = n(136),
    a = n(137),
    u = n(138),
    c = n(139);
  r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
}, function(t, e, n) {
  var r = n(15);
  t.exports = function() {
    this.__data__ = r ? r(null) : {}, this.size = 0
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }
}, function(t, e, n) {
  var r = n(15),
    i = "__lodash_hash_undefined__",
    o = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      return n === i ? void 0 : n
    }
    return o.call(e, t) ? e[t] : void 0
  }
}, function(t, e, n) {
  var r = n(15),
    i = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t)
  }
}, function(t, e, n) {
  var r = n(15),
    i = "__lodash_hash_undefined__";
  t.exports = function(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
  }
}, function(t, e, n) {
  var r = n(16);
  t.exports = function(t) {
    var e = r(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  }
}, function(t, e, n) {
  var r = n(16);
  t.exports = function(t) {
    return r(this, t).get(t)
  }
}, function(t, e, n) {
  var r = n(16);
  t.exports = function(t) {
    return r(this, t).has(t)
  }
}, function(t, e, n) {
  var r = n(16);
  t.exports = function(t, e) {
    var n = r(this, t),
      i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
  }
}, function(t, e, n) {
  var r = n(56),
    i = n(61),
    o = n(151),
    a = n(155),
    u = n(34),
    c = n(0),
    s = n(27),
    f = n(29),
    l = 1,
    d = "[object Arguments]",
    p = "[object Array]",
    v = "[object Object]",
    h = Object.prototype.hasOwnProperty;
  t.exports = function(t, e, n, g, y, m) {
    var b = c(t),
      w = c(e),
      x = p,
      _ = p;
    b || (x = (x = u(t)) == d ? v : x), w || (_ = (_ = u(e)) == d ? v : _);
    var O = x == v,
      j = _ == v,
      I = x == _;
    if (I && s(t)) {
      if (!s(e)) return !1;
      b = !0, O = !1
    }
    if (I && !O) return m || (m = new r), b || f(t) ? i(t, e, n, g, y, m) : o(t, e, x, n, g, y, m);
    if (!(n & l)) {
      var E = O && h.call(t, "__wrapped__"),
        S = j && h.call(e, "__wrapped__");
      if (E || S) {
        var A = E ? t.value() : t,
          T = S ? e.value() : e;
        return m || (m = new r), y(A, T, n, g, m)
      }
    }
    return !!I && (m || (m = new r), a(t, e, n, g, y, m))
  }
}, function(t, e, n) {
  function r(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new i; ++e < n;) this.add(t[e])
  }
  var i = n(26),
    o = n(147),
    a = n(148);
  r.prototype.add = r.prototype.push = o, r.prototype.has = a, t.exports = r
}, function(t, e) {
  var n = "__lodash_hash_undefined__";
  t.exports = function(t) {
    return this.__data__.set(t, n), this
  }
}, function(t, e) {
  t.exports = function(t) {
    return this.__data__.has(t)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
      if (e(t[n], n, t)) return !0;
    return !1
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return t.has(e)
  }
}, function(t, e, n) {
  var r = n(10),
    i = n(152),
    o = n(24),
    a = n(61),
    u = n(153),
    c = n(154),
    s = 1,
    f = 2,
    l = "[object Boolean]",
    d = "[object Date]",
    p = "[object Error]",
    v = "[object Map]",
    h = "[object Number]",
    g = "[object RegExp]",
    y = "[object Set]",
    m = "[object String]",
    b = "[object Symbol]",
    w = "[object ArrayBuffer]",
    x = "[object DataView]",
    _ = r ? r.prototype : void 0,
    O = _ ? _.valueOf : void 0;
  t.exports = function(t, e, n, r, _, j, I) {
    switch (n) {
      case x:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case w:
        return !(t.byteLength != e.byteLength || !j(new i(t), new i(e)));
      case l:
      case d:
      case h:
        return o(+t, +e);
      case p:
        return t.name == e.name && t.message == e.message;
      case g:
      case m:
        return t == e + "";
      case v:
        var E = u;
      case y:
        var S = r & s;
        if (E || (E = c), t.size != e.size && !S) return !1;
        var A = I.get(t);
        if (A) return A == e;
        r |= f, I.set(t, e);
        var T = a(E(t), E(e), r, _, j, I);
        return I.delete(t), T;
      case b:
        if (O) return O.call(t) == O.call(e)
    }
    return !1
  }
}, function(t, e, n) {
  var r = n(2).Uint8Array;
  t.exports = r
}, function(t, e) {
  t.exports = function(t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function(t, r) {
      n[++e] = [r, t]
    }), n
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function(t) {
      n[++e] = t
    }), n
  }
}, function(t, e, n) {
  var r = n(17),
    i = 1,
    o = Object.prototype.hasOwnProperty;
  t.exports = function(t, e, n, a, u, c) {
    var s = n & i,
      f = r(t),
      l = f.length;
    if (l != r(e).length && !s) return !1;
    for (var d = l; d--;) {
      var p = f[d];
      if (!(s ? p in e : o.call(e, p))) return !1
    }
    var v = c.get(t);
    if (v && c.get(e)) return v == e;
    var h = !0;
    c.set(t, e), c.set(e, t);
    for (var g = s; ++d < l;) {
      var y = t[p = f[d]],
        m = e[p];
      if (a) var b = s ? a(m, y, p, e, t, c) : a(y, m, p, t, e, c);
      if (!(void 0 === b ? y === m || u(y, m, n, a, c) : b)) {
        h = !1;
        break
      }
      g || (g = "constructor" == p)
    }
    if (h && !g) {
      var w = t.constructor,
        x = e.constructor;
      w != x && "constructor" in t && "constructor" in e && !("function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x) && (h = !1)
    }
    return c.delete(t), c.delete(e), h
  }
}, function(t, e) {
  t.exports = function(t, e) {
    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
    return r
  }
}, function(t, e, n) {
  var r = n(8),
    i = n(5),
    o = "[object Arguments]";
  t.exports = function(t) {
    return i(t) && r(t) == o
  }
}, function(t, e) {
  t.exports = function() {
    return !1
  }
}, function(t, e, n) {
  var r = n(8),
    i = n(30),
    o = n(5),
    a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
    return o(t) && i(t.length) && !!a[r(t)]
  }
}, function(t, e) {
  t.exports = function(t) {
    return function(e) {
      return t(e)
    }
  }
}, function(t, e, n) {
  (function(t) {
    var r = n(58),
      i = "object" == typeof e && e && !e.nodeType && e,
      o = i && "object" == typeof t && t && !t.nodeType && t,
      a = o && o.exports === i && r.process,
      u = function() {
        try {
          return a && a.binding && a.binding("util")
        } catch (t) {}
      }();
    t.exports = u
  }).call(e, n(23)(t))
}, function(t, e, n) {
  var r = n(33)(Object.keys, Object);
  t.exports = r
}, function(t, e, n) {
  var r = n(4)(n(2), "DataView");
  t.exports = r
}, function(t, e, n) {
  var r = n(4)(n(2), "Promise");
  t.exports = r
}, function(t, e, n) {
  var r = n(4)(n(2), "Set");
  t.exports = r
}, function(t, e, n) {
  var r = n(64),
    i = n(17);
  t.exports = function(t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n],
        a = t[o];
      e[n] = [o, a, r(a)]
    }
    return e
  }
}, function(t, e, n) {
  var r = n(60),
    i = n(19),
    o = n(171),
    a = n(36),
    u = n(64),
    c = n(65),
    s = n(11),
    f = 1,
    l = 2;
  t.exports = function(t, e) {
    return a(t) && u(e) ? c(s(t), e) : function(n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
    }
  }
}, function(t, e, n) {
  var r = /^\./,
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g,
    a = n(169)(function(t) {
      var e = [];
      return r.test(t) && e.push(""), t.replace(i, function(t, n, r, i) {
        e.push(r ? i.replace(o, "$1") : n || t)
      }), e
    });
  t.exports = a
}, function(t, e, n) {
  var r = n(170),
    i = 500;
  t.exports = function(t) {
    var e = r(t, function(t) {
        return n.size === i && n.clear(), t
      }),
      n = e.cache;
    return e
  }
}, function(t, e, n) {
  function r(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
    var n = function() {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a
    };
    return n.cache = new(r.Cache || i), n
  }
  var i = n(26),
    o = "Expected a function";
  r.Cache = i, t.exports = r
}, function(t, e, n) {
  var r = n(172),
    i = n(173);
  t.exports = function(t, e) {
    return null != t && i(t, e, r)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return null != t && e in Object(t)
  }
}, function(t, e, n) {
  var r = n(20),
    i = n(18),
    o = n(0),
    a = n(28),
    u = n(30),
    c = n(11);
  t.exports = function(t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d]
    }
    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
  }
}, function(t, e, n) {
  var r = n(69),
    i = n(175),
    o = n(36),
    a = n(11);
  t.exports = function(t) {
    return o(t) ? r(a(t)) : i(t)
  }
}, function(t, e, n) {
  var r = n(35);
  t.exports = function(t) {
    return function(e) {
      return r(e, t)
    }
  }
}, function(t, e, n) {
  var r = n(177),
    i = n(7),
    o = n(70),
    a = Math.max;
  t.exports = function(t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
  }
}, function(t, e) {
  t.exports = function(t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
      if (e(t[o], o, t)) return o;
    return -1
  }
}, function(t, e, n) {
  var r = n(71),
    i = 1 / 0,
    o = 1.7976931348623157e308;
  t.exports = function(t) {
    if (!t) return 0 === t ? t : 0;
    if ((t = r(t)) === i || t === -i) return (t < 0 ? -1 : 1) * o;
    return t == t ? t : 0
  }
}, function(t, e, n) {
  var r = n(31),
    i = n(34),
    o = n(9),
    a = n(180),
    u = n(181),
    c = "[object Map]",
    s = "[object Set]";
  t.exports = function(t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length
  }
}, function(t, e, n) {
  var r = n(8),
    i = n(0),
    o = n(5),
    a = "[object String]";
  t.exports = function(t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a
  }
}, function(t, e, n) {
  var r = n(182),
    i = n(183),
    o = n(184);
  t.exports = function(t) {
    return i(t) ? o(t) : r(t)
  }
}, function(t, e, n) {
  var r = n(69)("length");
  t.exports = r
}, function(t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  t.exports = function(t) {
    return n.test(t)
  }
}, function(t, e) {
  var n = "[\\ud800-\\udfff]",
    r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    o = "[^\\ud800-\\udfff]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    c = "(?:" + r + "|" + i + ")" + "?",
    s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
    f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
    l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
  t.exports = function(t) {
    for (var e = l.lastIndex = 0; l.test(t);) ++e;
    return e
  }
}, function(t, e, n) {
  var r = n(7),
    i = n(186),
    o = n(187);
  t.exports = function(t, e) {
    return o(t, i(r(e)))
  }
}, function(t, e) {
  var n = "Expected a function";
  t.exports = function(t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function() {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
}, function(t, e, n) {
  var r = n(68),
    i = n(7),
    o = n(188),
    a = n(191);
  t.exports = function(t, e) {
    if (null == t) return {};
    var n = r(a(t), function(t) {
      return [t]
    });
    return e = i(e), o(t, n, function(t, n) {
      return e(t, n[0])
    })
  }
}, function(t, e, n) {
  var r = n(35),
    i = n(189),
    o = n(20);
  t.exports = function(t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a],
        f = r(t, s);
      n(f, s) && i(c, o(s, t), f)
    }
    return c
  }
}, function(t, e, n) {
  var r = n(190),
    i = n(20),
    o = n(28),
    a = n(3),
    u = n(11);
  t.exports = function(t, e, n, c) {
    if (!a(t)) return t;
    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var p = u(e[s]),
        v = n;
      if (s != l) {
        var h = d[p];
        void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
      }
      r(d, p, v), d = d[p]
    }
    return t
  }
}, function(t, e, n) {
  var r = n(72),
    i = n(24),
    o = Object.prototype.hasOwnProperty;
  t.exports = function(t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
  }
}, function(t, e, n) {
  var r = n(192),
    i = n(193),
    o = n(196);
  t.exports = function(t) {
    return r(t, o, i)
  }
}, function(t, e, n) {
  var r = n(38),
    i = n(0);
  t.exports = function(t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t))
  }
}, function(t, e, n) {
  var r = n(38),
    i = n(194),
    o = n(195),
    a = n(74),
    u = Object.getOwnPropertySymbols ? function(t) {
      for (var e = []; t;) r(e, o(t)), t = i(t);
      return e
    } : a;
  t.exports = u
}, function(t, e, n) {
  var r = n(33)(Object.getPrototypeOf, Object);
  t.exports = r
}, function(t, e, n) {
  var r = n(33),
    i = n(74),
    o = Object.getOwnPropertySymbols,
    a = o ? r(o, Object) : i;
  t.exports = a
}, function(t, e, n) {
  var r = n(62),
    i = n(197),
    o = n(9);
  t.exports = function(t) {
    return o(t) ? r(t, !0) : i(t)
  }
}, function(t, e, n) {
  var r = n(3),
    i = n(32),
    o = n(198),
    a = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    if (!r(t)) return o(t);
    var e = i(t),
      n = [];
    for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
    return n
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = [];
    if (null != t)
      for (var n in Object(t)) e.push(n);
    return e
  }
}, function(t, e, n) {
  var r = n(31),
    i = n(34),
    o = n(18),
    a = n(0),
    u = n(9),
    c = n(27),
    s = n(32),
    f = n(29),
    l = "[object Map]",
    d = "[object Set]",
    p = Object.prototype.hasOwnProperty;
  t.exports = function(t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;
    for (var n in t)
      if (p.call(t, n)) return !1;
    return !0
  }
}, function(t, e, n) {
  var r = n(72),
    i = n(75),
    o = n(7);
  t.exports = function(t, e) {
    var n = {};
    return e = o(e, 3), i(t, function(t, i, o) {
      r(n, i, e(t, i, o))
    }), n
  }
}, function(t, e, n) {
  var r = n(202)();
  t.exports = r
}, function(t, e) {
  t.exports = function(t) {
    return function(e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break
      }
      return e
    }
  }
}, function(t, e, n) {
  var r = n(204),
    i = n(76),
    o = n(206),
    a = n(0);
  t.exports = function(t, e) {
    return (a(t) ? r : i)(t, o(e))
  }
}, function(t, e) {
  t.exports = function(t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
    return t
  }
}, function(t, e, n) {
  var r = n(9);
  t.exports = function(t, e) {
    return function(n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);
      for (var o = n.length, a = e ? o : -1, u = Object(n);
        (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
      return n
    }
  }
}, function(t, e, n) {
  var r = n(37);
  t.exports = function(t) {
    return "function" == typeof t ? t : r
  }
}, function(t, e, n) {
  var r = n(77),
    i = n(67),
    o = n(70),
    a = n(66);
  t.exports = function(t, e, n) {
    t = a(t), e = i(e);
    var u = t.length,
      c = n = void 0 === n ? u : r(o(n), 0, u);
    return (n -= e.length) >= 0 && t.slice(n, c) == e
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return null == t || t != t ? e : t
  }
}, function(t, e, n) {
  var r = n(210),
    i = n(76),
    o = n(7),
    a = n(211),
    u = n(0);
  t.exports = function(t, e, n) {
    var c = u(t) ? r : a,
      s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i)
  }
}, function(t, e) {
  t.exports = function(t, e, n, r) {
    var i = -1,
      o = null == t ? 0 : t.length;
    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
    return n
  }
}, function(t, e) {
  t.exports = function(t, e, n, r, i) {
    return i(t, function(t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o)
    }), n
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function(t, e, n) {
    t.style[e] = n
  }, e.getStyle = function(t, e) {
    return t.style[e]
  }, e.getProperty = function(t, e) {
    return t[e]
  }, e.matchSelector = function(t) {
    return function(e) {
      return e[i.a](t)
    }
  }, e.getQuerySelector = function(t) {
    var e = t.id,
      n = t.selector;
    if (e) {
      var i = e;
      if (-1 !== e.indexOf(r.n)) {
        var o = e.split(r.n),
          a = o[0];
        if (i = o[1], a !== document.documentElement.getAttribute(r.C)) return null
      }
      return '[data-w-id="' + i + '"]'
    }
    return n
  }, e.getValidDocument = function(t) {
    return null == t || t === document.documentElement.getAttribute(r.C) ? document : null
  }, e.queryDocument = function(t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
  }, e.getChildElements = function() {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
      var i = t[n].children,
        o = i.length;
      if (o)
        for (var a = 0; a < o; a++) e.push(i[a])
    }
    return e
  }, e.getSiblingElements = function() {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;
      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);
        for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
      }
    }
    return e
  };
  var r = n(41),
    i = n(79)
}, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var i, o = n(214),
    a = n.n(o),
    u = n(19),
    c = n.n(u),
    s = n(233),
    f = n.n(s),
    l = n(54),
    d = n(39),
    p = n(42),
    v = n(78),
    h = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    y = function(t) {
      return function(e) {
        return !("object" !== (void 0 === e ? "undefined" : g(e)) || !t(e)) || e
      }
    },
    m = y(function(t) {
      return t.element === t.nativeEvent.target
    }),
    b = y(function(t) {
      var e = t.element,
        n = t.nativeEvent;
      return e.contains(n.target)
    }),
    w = a()([m, b]),
    x = function(t, e) {
      var n = t.store,
        r = t.event,
        i = t.element,
        o = r.action,
        a = r.id,
        u = o.config,
        s = u.actionListId,
        f = u.autoStopEventId;
      if (f) {
        var d = n.getState().ixData.events;
        Object(l.d)({
          store: n,
          eventId: f,
          actionListId: c()(d[f], "action.config.actionListId")
        })
      }
      return Object(l.d)({
        store: n,
        eventId: a,
        actionListId: s
      }), Object(l.b)({
        store: n,
        eventId: a,
        eventTarget: i,
        actionListId: s
      }), e
    },
    _ = function(t, e) {
      return function(n, r) {
        return !0 === t(n, r) ? e(n, r) : r
      }
    },
    O = {
      handler: _(w, x)
    },
    j = h({}, O, {
      types: [v.a, v.b].join(" ")
    }),
    I = [{
      target: window,
      types: "resize orientationchange"
    }, {
      target: document,
      types: "scroll readystatechange IX2_PREVIEW_LOAD"
    }],
    E = {
      types: [{
        target: document,
        types: "scroll"
      }]
    },
    S = function() {
      var t = void 0 !== window.pageXOffset,
        e = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
      return function() {
        return {
          scrollLeft: t ? window.pageXOffset : e.scrollLeft,
          scrollTop: t ? window.pageYOffset : e.scrollTop,
          stiffScrollTop: f()(t ? window.pageYOffset : e.scrollTop, 0, e.scrollHeight - window.innerHeight),
          scrollWidth: e.scrollWidth,
          scrollHeight: e.scrollHeight,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        }
      }
    }(),
    A = function(t) {
      return function(e, n) {
        var r = -1 !== [v.a, v.b].indexOf(e.nativeEvent.type) ? e.nativeEvent.type === v.a : n.isActive,
          i = h({}, n, {
            isActive: r
          });
        return n && i.isActive === n.isActive ? i : t(e, i) || i
      }
    },
    T = function(t) {
      return function(e, n) {
        var r = {
          elementHovered: function(t) {
            var e = t.element,
              n = t.nativeEvent,
              r = n.type,
              i = n.target,
              o = n.relatedTarget,
              a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
          }(e)
        };
        return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) ? t(e, r) || r : r
      }
    },
    k = function(t) {
      return function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = S(),
          i = r.stiffScrollTop,
          o = r.scrollHeight,
          a = r.innerHeight,
          u = e.event,
          c = u.config,
          s = u.eventTypeId,
          f = c.scrollOffsetValue,
          l = "PX" === c.scrollOffsetUnit,
          d = o - a,
          p = Number((i / d).toFixed(2));
        if (n && n.percentTop === p) return n;
        var g = (l ? f : a * (f || 0) / 100) / d,
          y = n ? p > n.percentTop : void 0,
          m = n ? n.scrollingDown !== y : void 0,
          b = n ? m ? p : n.anchorTop : 0,
          w = s === v.r ? p >= b + g : p <= b - g,
          x = h({}, n, {
            percentTop: p,
            inBounds: w,
            anchorTop: b,
            scrollingDown: y
          });
        return n && w && (m || x.inBounds !== n.inBounds) ? t(e, x) || x : x
      }
    },
    M = h({}, j, {
      handler: _(w, A(function(t, e) {
        return e.isActive ? O.handler(t, e) : e
      }))
    }),
    L = h({}, j, {
      handler: _(w, A(function(t, e) {
        return e.isActive ? e : O.handler(t, e)
      }))
    }),
    P = h({}, E, {
      handler: function(t) {
        return function(e, n) {
          var r = h({}, n, {
            elementVisible: function(t) {
              var e = t.element,
                n = t.event.config,
                r = S(),
                i = r.clientWidth,
                o = r.clientHeight,
                a = n.scrollOffsetValue,
                u = "PX" === n.scrollOffsetUnit ? a : o * (a || 0) / 100;
              return function(t, e) {
                return !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top)
              }(e.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: i,
                bottom: o - u
              })
            }(e)
          });
          return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) ? t(e, r) || r : r
        }
      }(function(t, e) {
        var n = e.elementVisible,
          r = t.event;
        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === v.v === n ? (x(t), h({}, e, {
          triggered: !0
        })) : e
      })
    });
  e.a = (i = {}, r(i, v.x, M), r(i, v.y, L), r(i, v.d, M), r(i, v.c, L), r(i, v.n, M), r(i, v.m, L), r(i, v.z, M), r(i, v.A, L), r(i, v.f, h({}, O, {
    types: "click"
  })), r(i, v.k, h({
    types: "click"
  }, O, {
    handler: _(w, function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          clickCount: 1
        },
        n = e.clickCount,
        r = function(t, e) {
          var n = {};
          for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          return n
        }(e, ["clickCount"]);
      return n % 2 == 0 && (n = 0, r = x(t, r)), h({
        clickCount: n + 1
      }, r)
    })
  })), r(i, v.g, h({}, O, {
    types: "mousedown"
  })), r(i, v.l, h({}, O, {
    types: "mouseup"
  })), r(i, v.j, {
    types: "mouseover mouseout",
    handler: _(w, T(function(t, e) {
      e.elementHovered && x(t)
    }))
  }), r(i, v.i, {
    types: "mouseover mouseout",
    handler: _(w, T(function(t, e) {
      e.elementHovered || x(t)
    }))
  }), r(i, v.h, {
    types: "mousemove mouseout scroll",
    handler: function(t) {
      var e = t.store,
        n = t.element,
        r = t.eventConfig,
        i = t.nativeEvent,
        o = t.eventStateKey,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0
        },
        u = r.basedOn,
        c = r.selectedAxis,
        s = r.continuousParameterGroupId,
        f = r.reverse,
        l = r.restingState,
        h = void 0 === l ? 0 : l,
        g = i.clientX,
        y = void 0 === g ? a.clientX : g,
        m = i.clientY,
        b = void 0 === m ? a.clientY : m,
        x = i.pageX,
        _ = void 0 === x ? a.pageX : x,
        O = i.pageY,
        j = void 0 === O ? a.pageY : O,
        I = "X_AXIS" === c,
        E = "mouseout" === i.type,
        A = h / 100,
        T = s,
        k = !1;
      switch (u) {
        case v.B:
          if (E) break;
          var M = S(),
            L = M.scrollLeft,
            P = M.scrollTop;
          A = I ? Math.min(L + y, window.innerWidth) / window.innerWidth : Math.min(P + b, window.innerHeight) / window.innerHeight;
          break;
        case v.o:
          if (E) break;
          var C = S(),
            D = C.scrollLeft,
            R = C.scrollTop,
            V = C.scrollWidth,
            z = C.scrollHeight;
          A = I ? Math.min(D + _, V) / V : Math.min(R + j, z) / z;
          break;
        case v.e:
        default:
          T = Object(d.i)(o, s);
          var N = 0 === i.type.indexOf("mouse");
          if (N && !0 !== w({
              element: n,
              nativeEvent: i
            })) break;
          var $ = n.getBoundingClientRect(),
            F = $.left,
            X = $.top,
            G = $.width,
            q = $.height;
          if (!N && ! function(t, e) {
              return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
            }({
              left: y,
              top: b
            }, $)) break;
          k = !0, A = I ? (y - F) / G : (b - X) / q
      }
      return (u !== v.e || k || k !== a.elementHovered) && (A = f ? 1 - A : A, e.dispatch(Object(p.parameterChanged)(T, A))), {
        elementHovered: k,
        clientX: y,
        clientY: b,
        pageX: _,
        pageY: j
      }
    }
  }), r(i, v.q, {
    types: I,
    handler: function(t) {
      var e = t.store,
        n = t.eventConfig,
        r = n.continuousParameterGroupId,
        i = n.reverse,
        o = S(),
        a = o.scrollTop / (o.scrollHeight - o.clientHeight);
      a = i ? 1 - a : a, e.dispatch(Object(p.parameterChanged)(r, a))
    }
  }), r(i, v.u, {
    types: I,
    handler: function(t) {
      var e = t.element,
        n = t.store,
        r = t.eventConfig,
        i = t.eventStateKey,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          scrollPercent: 0
        },
        a = S(),
        u = a.scrollLeft,
        c = a.scrollTop,
        s = a.scrollWidth,
        f = a.scrollHeight,
        l = a.clientWidth,
        h = a.clientHeight,
        g = s - l,
        y = f - h,
        m = r.basedOn,
        b = r.selectedAxis,
        w = r.continuousParameterGroupId,
        x = r.startsEntering,
        _ = r.startsExiting,
        O = r.addEndOffset,
        j = r.addStartOffset,
        I = r.addOffsetValue,
        E = void 0 === I ? 0 : I,
        A = r.endOffsetValue,
        T = void 0 === A ? 0 : A,
        k = "X_AXIS" === b;
      if (m === v.B) {
        var M = k ? u / g : c / y;
        return M !== o.scrollPercent && n.dispatch(Object(p.parameterChanged)(w, M)), {
          scrollPercent: M
        }
      }
      var L = Object(d.i)(i, w),
        P = e.getBoundingClientRect(),
        C = (j ? E : 0) / 100,
        D = (O ? T : 0) / 100;
      C = x ? C : 1 - C, D = _ ? D : 1 - D;
      var R = P.top + Math.min(P.height * C, h),
        V = P.top + P.height * D - R,
        z = Math.min(h + V, y),
        N = Math.min(Math.max(0, h - R), z) / z;
      return N !== o.scrollPercent && n.dispatch(Object(p.parameterChanged)(L, N)), {
        scrollPercent: N
      }
    }
  }), r(i, v.v, P), r(i, v.w, P), r(i, v.r, h({}, E, {
    handler: k(function(t, e) {
      e.scrollingDown && x(t)
    })
  })), r(i, v.s, h({}, E, {
    handler: k(function(t, e) {
      e.scrollingDown || x(t)
    })
  })), r(i, v.p, {
    types: "readystatechange IX2_PREVIEW_LOAD",
    handler: _(m, function(t) {
      return function(e, n) {
        var r = {
          finished: "complete" === document.readyState
        };
        return !r.finished || n && n.finshed || t(e), r
      }
    }(x))
  }), r(i, v.t, {
    types: "readystatechange IX2_PREVIEW_LOAD",
    handler: _(m, function(t) {
      return function(e, n) {
        return n || t(e), {
          started: !0
        }
      }
    }(x))
  }), i)
}, function(t, e, n) {
  var r = n(215)();
  t.exports = r
}, function(t, e, n) {
  var r = n(43),
    i = n(216),
    o = n(81),
    a = n(82),
    u = n(0),
    c = n(229),
    s = 200,
    f = "Expected a function",
    l = 8,
    d = 32,
    p = 128,
    v = 256;
  t.exports = function(t) {
    return i(function(e) {
      var n = e.length,
        i = n,
        h = r.prototype.thru;
      for (t && e.reverse(); i--;) {
        var g = e[i];
        if ("function" != typeof g) throw new TypeError(f);
        if (h && !y && "wrapper" == a(g)) var y = new r([], !0)
      }
      for (i = y ? i : n; ++i < n;) {
        g = e[i];
        var m = a(g),
          b = "wrapper" == m ? o(g) : void 0;
        y = b && c(b[0]) && b[1] == (p | l | d | v) && !b[4].length && 1 == b[9] ? y[a(b[0])].apply(y, b[3]) : 1 == g.length && c(g) ? y[m]() : y.thru(g)
      }
      return function() {
        var t = arguments,
          r = t[0];
        if (y && 1 == t.length && u(r) && r.length >= s) return y.plant(r).value();
        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
        return o
      }
    })
  }
}, function(t, e, n) {
  var r = n(217),
    i = n(220),
    o = n(222);
  t.exports = function(t) {
    return o(i(t, void 0, r), t + "")
  }
}, function(t, e, n) {
  var r = n(218);
  t.exports = function(t) {
    return null != t && t.length ? r(t, 1) : []
  }
}, function(t, e, n) {
  function r(t, e, n, a, u) {
    var c = -1,
      s = t.length;
    for (n || (n = o), u || (u = []); ++c < s;) {
      var f = t[c];
      e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, a, u) : i(u, f) : a || (u[u.length] = f)
    }
    return u
  }
  var i = n(38),
    o = n(219);
  t.exports = r
}, function(t, e, n) {
  var r = n(10),
    i = n(18),
    o = n(0),
    a = r ? r.isConcatSpreadable : void 0;
  t.exports = function(t) {
    return o(t) || i(t) || !!(a && t && t[a])
  }
}, function(t, e, n) {
  var r = n(221),
    i = Math.max;
  t.exports = function(t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0),
      function() {
        for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
        a = -1;
        for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
        return s[e] = n(c), r(t, this, s)
      }
  }
}, function(t, e) {
  t.exports = function(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
}, function(t, e, n) {
  var r = n(223),
    i = n(225)(r);
  t.exports = i
}, function(t, e, n) {
  var r = n(224),
    i = n(73),
    o = n(37),
    a = i ? function(t, e) {
      return i(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: r(e),
        writable: !0
      })
    } : o;
  t.exports = a
}, function(t, e) {
  t.exports = function(t) {
    return function() {
      return t
    }
  }
}, function(t, e) {
  var n = 800,
    r = 16,
    i = Date.now;
  t.exports = function(t) {
    var e = 0,
      o = 0;
    return function() {
      var a = i(),
        u = r - (a - o);
      if (o = a, u > 0) {
        if (++e >= n) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
}, function(t, e, n) {
  var r = n(63),
    i = r && new r;
  t.exports = i
}, function(t, e) {
  t.exports = function() {}
}, function(t, e) {
  t.exports = {}
}, function(t, e, n) {
  var r = n(45),
    i = n(81),
    o = n(82),
    a = n(230);
  t.exports = function(t) {
    var e = o(t),
      n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0]
  }
}, function(t, e, n) {
  function r(t) {
    if (c(t) && !u(t) && !(t instanceof i)) {
      if (t instanceof o) return t;
      if (f.call(t, "__wrapped__")) return s(t)
    }
    return new o(t)
  }
  var i = n(45),
    o = n(43),
    a = n(44),
    u = n(0),
    c = n(5),
    s = n(231),
    f = Object.prototype.hasOwnProperty;
  (r.prototype = a.prototype).constructor = r, t.exports = r
}, function(t, e, n) {
  var r = n(45),
    i = n(43),
    o = n(232);
  t.exports = function(t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
  }
}, function(t, e) {
  t.exports = function(t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
    return e
  }
}, function(t, e, n) {
  var r = n(77),
    i = n(71);
  t.exports = function(t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
  }
}, function(t, e, n) {
  var r = n(1);
  r.define("links", t.exports = function(t, e) {
    function n() {
      var t = s.scrollTop(),
        n = s.height();
      e.each(a, function(e) {
        var r = e.link,
          o = e.sec,
          a = o.offset().top,
          u = o.outerHeight(),
          c = .5 * n,
          s = o.is(":visible") && a + u - c >= t && a + c <= t + n;
        e.active !== s && (e.active = s, i(r, p, s))
      })
    }

    function i(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
    }
    var o, a, u, c = {},
      s = t(window),
      f = r.env(),
      l = window.location,
      d = document.createElement("a"),
      p = "w--current",
      v = /^#[\w:.-]+$/,
      h = /index\.(html|php)$/,
      g = /\/$/;
    return c.ready = c.design = c.preview = function() {
      o = f && r.env("design"), u = r.env("slug") || l.pathname || "", r.scroll.off(n), a = [];
      for (var e = document.links, c = 0; c < e.length; ++c) ! function(e) {
        var n = o && e.getAttribute("href-disabled") || e.getAttribute("href");
        if (d.href = n, !(n.indexOf(":") >= 0)) {
          var r = t(e);
          if (0 === n.indexOf("#") && v.test(n)) {
            var c = t(n);
            c.length && a.push({
              link: r,
              sec: c,
              active: !1
            })
          } else if ("#" !== n) {
            var s = d.href === l.href || n === u || h.test(n) && g.test(u);
            i(r, p, s)
          }
        }
      }(e[c]);
      a.length && (r.scroll.on(n), n())
    }, c
  })
}, function(t, e, n) {
  var r = n(1),
    i = n(83);
  r.define("navbar", t.exports = function(t, e) {
    function n() {
      r.resize.off(o)
    }

    function o() {
      g.each(l)
    }

    function a(n, i) {
      var o = t(i),
        a = t.data(i, j);
      a || (a = t.data(i, j, {
        open: !1,
        el: o,
        config: {}
      })), a.menu = o.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.button = o.find(".w-nav-button"), a.container = o.find(".w-container"), a.outside = function(n) {
        n.outside && x.off("tap" + j, n.outside);
        return e.debounce(function(e) {
          if (n.open) {
            var r = t(e.target).closest(".w-nav-menu");
            n.menu.is(r) || v(n)
          }
        })
      }(a), a.el.off(j), a.button.off(j), a.menu.off(j), s(a), y ? (c(a), a.el.on("setting" + j, function(t) {
        return function(n, r) {
          r = r || {};
          var i = w.width();
          s(t), !0 === r.open && d(t, !0), !1 === r.open && v(t, !0), t.open && e.defer(function() {
            i !== w.width() && f(t)
          })
        }
      }(a))) : (! function(e) {
        if (e.overlay) return;
        e.overlay = t(O).appendTo(e.el), e.parent = e.menu.parent(), v(e, !0)
      }(a), a.button.on("tap" + j, function(t) {
        return e.debounce(function() {
          t.open ? v(t) : d(t)
        })
      }(a)), a.menu.on("click" + j, "a", function(e) {
        return function(n) {
          var i = t(this),
            o = i.attr("href");
          r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && v(e) : n.preventDefault()
        }
      }(a))), l(n, i)
    }

    function u(e, n) {
      var r = t.data(n, j);
      r && (c(r), t.removeData(n, j))
    }

    function c(t) {
      t.overlay && (v(t, !0), t.overlay.remove(), t.overlay = null)
    }

    function s(t) {
      var n = {},
        r = t.config || {},
        i = n.animation = t.el.attr("data-animation") || "default";
      n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(f, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
      var o = t.el.attr("data-duration");
      n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
    }

    function f(t) {
      t.open && (v(t, !0), d(t, !0))
    }

    function l(e, n) {
      var r = t.data(n, j),
        i = r.collapsed = "none" !== r.button.css("display");
      if (!r.open || i || y || v(r, !0), r.container.length) {
        var o = function(e) {
          var n = e.container.css(k);
          "none" === n && (n = "");
          return function(e, r) {
            (r = t(r)).css(k, ""), "none" === r.css(k) && r.css(k, n)
          }
        }(r);
        r.links.each(o), r.dropdowns.each(o)
      }
      r.open && p(r)
    }

    function d(t, e) {
      if (!t.open) {
        t.open = !0, t.menu.addClass(E), t.links.addClass(S), t.button.addClass(I);
        var n = t.config;
        "none" !== n.animation && b.support.transform || (e = !0);
        var i = p(t),
          o = t.menu.outerHeight(!0),
          a = t.menu.outerWidth(!0),
          u = t.el.height(),
          c = t.el[0];
        if (l(0, c), A.intro(0, c), r.redraw.up(), y || x.on("tap" + j, t.outside), !e) {
          var s = "transform " + n.duration + "ms " + n.easing;
          if (t.overlay && (T = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return b(t.menu).add(s).set({
            x: n.animDirect * a,
            height: i
          }).start({
            x: 0
          }), void(t.overlay && t.overlay.width(a));
          var f = u + o;
          b(t.menu).add(s).set({
            y: -f
          }).start({
            y: 0
          })
        }
      }
    }

    function p(t) {
      var e = t.config,
        n = e.docHeight ? x.height() : h.height();
      return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
    }

    function v(t, e) {
      function n() {
        t.menu.height(""), b(t.menu).set({
          x: 0,
          y: 0
        }), t.menu.removeClass(E), t.links.removeClass(S), t.overlay && t.overlay.children().length && (T.length ? t.menu.insertAfter(T) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
      }
      if (t.open) {
        t.open = !1, t.button.removeClass(I);
        var r = t.config;
        if (("none" === r.animation || !b.support.transform || r.duration <= 0) && (e = !0), A.outro(0, t.el[0]), x.off("tap" + j, t.outside), e) return b(t.menu).stop(), void n();
        var i = "transform " + r.duration + "ms " + r.easing2,
          o = t.menu.outerHeight(!0),
          a = t.menu.outerWidth(!0),
          u = t.el.height();
        if (r.animOver) b(t.menu).add(i).start({
          x: a * r.animDirect
        }).then(n);
        else {
          var c = u + o;
          b(t.menu).add(i).start({
            y: -c
          }).then(n)
        }
      }
    }
    var h, g, y, m = {},
      b = t.tram,
      w = t(window),
      x = t(document),
      _ = r.env(),
      O = '<div class="w-nav-overlay" data-wf-ignore />',
      j = ".w-nav",
      I = "w--open",
      E = "w--nav-menu-open",
      S = "w--nav-link-open",
      A = i.triggers,
      T = t();
    m.ready = m.design = m.preview = function() {
      y = _ && r.env("design"), h = t(document.body), (g = x.find(j)).length && (g.each(a), n(), r.resize.on(o))
    }, m.destroy = function() {
      T = t(), n(), g && g.length && g.each(u)
    };
    var k = "max-width";
    return m
  })
}, function(t, e, n) {
  "use strict";
  var r = window.jQuery,
    i = {},
    o = [],
    a = {
      reset: function(t, e) {
        e.__wf_intro = null
      },
      intro: function(t, e) {
        e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
      },
      outro: function(t, e) {
        e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
      }
    };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function() {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1])
    }
    o = [], r.extend(i.triggers, a)
  }, i.async = function() {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
        o.push([e, n])
      })
    }
  }, i.async(), t.exports = i
}, function(t, e, n) {
  var r = n(1);
  r.define("scroll", t.exports = function(t) {
    function e(e, n) {
      if (u.test(e)) {
        var c = t("#" + e);
        if (c.length) {
          if (n && (n.preventDefault(), n.stopPropagation()), o.hash !== e && a && a.pushState && (!r.env.chrome || "file:" !== o.protocol)) {
            (a.state && a.state.hash) !== e && a.pushState({
              hash: e
            }, "", "#" + e)
          }
          var s = r.env("editor") ? ".w-editor-body" : "body",
            f = t("header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"),
            l = "fixed" === f.css("position") ? f.outerHeight() : 0;
          i.setTimeout(function() {
            ! function(e, n) {
              var r = t(i).scrollTop(),
                o = e.offset().top - n;
              if ("mid" === e.data("scroll")) {
                var a = t(i).height() - n,
                  u = e.outerHeight();
                u < a && (o -= Math.round((a - u) / 2))
              }
              var c = 1;
              t("body").add(e).each(function() {
                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                !isNaN(e) && (0 === e || e > 0) && (c = e)
              }), Date.now || (Date.now = function() {
                return (new Date).getTime()
              });
              var s = Date.now(),
                f = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function(t) {
                  i.setTimeout(t, 15)
                },
                l = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
              ! function t() {
                var e = Date.now() - s;
                i.scroll(0, function(t, e, n, r) {
                  if (n > r) return e;
                  return t + (e - t) * function(t) {
                    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                  }(n / r)
                }(r, o, e, l)), e <= l && f(t)
              }()
            }(c, l)
          }, n ? 0 : 300)
        }
      }
    }
    var n = t(document),
      i = window,
      o = i.location,
      a = function() {
        try {
          return Boolean(i.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : i.history,
      u = /^[a-zA-Z0-9][\w:.-]*$/;
    return {
      ready: function() {
        o.hash && e(o.hash.substring(1));
        var i = o.href.split("#")[0];
        n.on("click", "a", function(n) {
          if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link")))
            if ("#" !== this.getAttribute("href")) {
              var o = this.href.split("#"),
                a = o[0] === i ? o[1] : null;
              a && e(a, n)
            } else n.preventDefault()
        })
      }
    }
  })
}, function(t, e, n) {
  var r = n(1),
    i = n(83);
  r.define("slider", t.exports = function(t, e) {
    function n() {
      (m = j.find(E)).length && (m.filter(":visible").each(u), x = null, w || (o(), r.resize.on(a), r.redraw.on(_.redraw)))
    }

    function o() {
      r.resize.off(a), r.redraw.off(_.redraw)
    }

    function a() {
      m.filter(":visible").each(g)
    }

    function u(e, n) {
      var r = t(n),
        i = t.data(n, E);
      if (i || (i = t.data(n, E, {
          index: 0,
          depth: 1,
          el: r,
          config: {}
        })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(A.reset), x && (i.maskWidth = 0), !O.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(w = !0);
      i.el.off(E), i.left.off(E), i.right.off(E), i.nav.off(E), c(i), b ? (i.el.on("setting" + E, v(i)), p(i), i.hasTimer = !1) : (i.el.on("swipe" + E, v(i)), i.left.on("tap" + E, f(i)), i.right.on("tap" + E, l(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, d(i))), i.nav.on("tap" + E, "> div", v(i)), I || i.mask.contents().filter(function() {
        return 3 === this.nodeType
      }).remove(), g(e, n)
    }

    function c(t) {
      var e = {};
      e.crossOver = 0, e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");
      if (e.duration = null != n ? parseInt(n, 10) : 500, s(t.el.attr("data-infinite")) && (e.infinite = !0), s(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), s(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), s(t.el.attr("data-autoplay"))) {
        e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
        var r = "mousedown" + E + " touchstart" + E;
        b || t.el.off(r).one(r, function() {
          p(t)
        })
      }
      var i = t.right.width();
      e.edge = i ? i + 40 : 100, t.config = e
    }

    function s(t) {
      return "1" === t || "true" === t
    }

    function f(t) {
      return function() {
        h(t, {
          index: t.index - 1,
          vector: -1
        })
      }
    }

    function l(t) {
      return function() {
        h(t, {
          index: t.index + 1,
          vector: 1
        })
      }
    }

    function d(t) {
      p(t);
      var e = t.config,
        n = e.timerMax;
      n && t.timerCount++ > n || (t.timerId = window.setTimeout(function() {
        null == t.timerId || b || (l(t)(), d(t))
      }, e.delay))
    }

    function p(t) {
      window.clearTimeout(t.timerId), t.timerId = null
    }

    function v(i) {
      return function(o, a) {
        a = a || {};
        var u = i.config;
        if (b && "setting" === o.type) {
          if ("prev" === a.select) return f(i)();
          if ("next" === a.select) return l(i)();
          if (c(i), y(i), null == a.select) return;
          ! function(r, i) {
            var o = null;
            i === r.slides.length && (n(), y(r)), e.each(r.anchors, function(e, n) {
              t(e.els).each(function(e, r) {
                t(r).index() === i && (o = n)
              })
            }), null != o && h(r, {
              index: o,
              immediate: !0
            })
          }(i, a.select)
        } else if ("swipe" !== o.type) i.nav.has(o.target).length && h(i, {
          index: t(o.target).index()
        });
        else {
          if (u.disableSwipe) return;
          if (r.env("editor")) return;
          if ("left" === a.direction) return l(i)();
          if ("right" === a.direction) return f(i)()
        }
      }
    }

    function h(e, n) {
      function r() {
        d = t(o[e.index].els), v = e.slides.not(d), "slide" !== h && (l.visibility = "hidden"), O(v).set(l)
      }
      n = n || {};
      var i = e.config,
        o = e.anchors;
      e.previous = e.index;
      var a = n.index,
        u = {};
      a < 0 ? (a = o.length - 1, i.infinite && (u.x = -e.endX, u.from = 0, u.to = o[0].width)) : a >= o.length && (a = 0, i.infinite && (u.x = o[o.length - 1].width, u.from = -o[o.length - 1].x, u.to = u.from - u.x)), e.index = a;
      var c = e.nav.children().eq(e.index).addClass("w-active");
      e.nav.children().not(c).removeClass("w-active"), i.hideArrows && (e.index === o.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
      var s = e.offsetX || 0,
        f = e.offsetX = -o[e.index].x,
        l = {
          x: f,
          opacity: 1,
          visibility: ""
        },
        d = t(o[e.index].els),
        p = t(o[e.previous] && o[e.previous].els),
        v = e.slides.not(d),
        h = i.animation,
        g = i.easing,
        y = Math.round(i.duration),
        m = n.vector || (e.index > e.previous ? 1 : -1),
        w = "opacity " + y + "ms " + g,
        _ = "transform " + y + "ms " + g;
      if (b || (d.each(A.intro), v.each(A.outro)), n.immediate && !x) return O(d).set(l), void r();
      if (e.index !== e.previous) {
        if ("cross" === h) {
          var j = Math.round(y - y * i.crossOver),
            I = Math.round(y - j);
          return w = "opacity " + j + "ms " + g, O(p).set({
            visibility: ""
          }).add(w).start({
            opacity: 0
          }), void O(d).set({
            visibility: "",
            x: f,
            opacity: 0,
            zIndex: e.depth++
          }).add(w).wait(I).then({
            opacity: 1
          }).then(r)
        }
        return "fade" === h ? (O(p).set({
          visibility: ""
        }).stop(), void O(d).set({
          visibility: "",
          x: f,
          opacity: 0,
          zIndex: e.depth++
        }).add(w).start({
          opacity: 1
        }).then(r)) : "over" === h ? (l = {
          x: e.endX
        }, O(p).set({
          visibility: ""
        }).stop(), void O(d).set({
          visibility: "",
          zIndex: e.depth++,
          x: f + o[e.index].width * m
        }).add(_).start({
          x: f
        }).then(r)) : void(i.infinite && u.x ? (O(e.slides.not(p)).set({
          visibility: "",
          x: u.x
        }).add(_).start({
          x: f
        }), O(p).set({
          visibility: "",
          x: u.from
        }).add(_).start({
          x: u.to
        }), e.shifted = p) : (i.infinite && e.shifted && (O(e.shifted).set({
          visibility: "",
          x: s
        }), e.shifted = null), O(e.slides).set({
          visibility: ""
        }).add(_).start({
          x: f
        })))
      }
    }

    function g(e, n) {
      var r = t.data(n, E);
      if (r) return function(t) {
        var e = t.mask.width();
        if (t.maskWidth !== e) return t.maskWidth = e, !0;
        return !1
      }(r) ? y(r) : void(b && function(e) {
        var n = 0;
        if (e.slides.each(function(e, r) {
            n += t(r).outerWidth(!0)
          }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
        return !1
      }(r) && y(r))
    }

    function y(e) {
      var n = 1,
        r = 0,
        i = 0,
        o = 0,
        a = e.maskWidth,
        u = a - e.config.edge;
      u < 0 && (u = 0), e.anchors = [{
        els: [],
        x: 0,
        width: 0
      }], e.slides.each(function(c, s) {
        i - r > u && (n++, r += a, e.anchors[n - 1] = {
          els: [],
          x: i,
          width: 0
        }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s)
      }), e.endX = i, b && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function(e) {
        var n, r = [],
          i = e.el.attr("data-nav-spacing");
        i && (i = parseFloat(i) + "px");
        for (var o = 0; o < e.pages; o++) n = t(S), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
          "margin-left": i,
          "margin-right": i
        }), r.push(n);
        e.nav.empty().append(r)
      }(e));
      var c = e.index;
      c >= n && (c = n - 1), h(e, {
        immediate: !0,
        index: c
      })
    }
    var m, b, w, x, _ = {},
      O = t.tram,
      j = t(document),
      I = r.env(),
      E = ".w-slider",
      S = '<div class="w-slider-dot" data-wf-ignore />',
      A = i.triggers;
    return _.ready = function() {
      b = r.env("design"), n()
    }, _.design = function() {
      b = !0, n()
    }, _.preview = function() {
      b = !1, n()
    }, _.redraw = function() {
      x = !0, n()
    }, _.destroy = o, _
  })
}, function(t, e, n) {
  n(1).define("touch", t.exports = function(t) {
    function e(e, n, r) {
      var i = t.Event(e, {
        originalEvent: n
      });
      t(n.target).trigger(i, r)
    }
    var n = {},
      r = !document.addEventListener,
      i = window.getSelection;
    return r && (t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }), n.init = function(n) {
      return r ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new function(t) {
        function n(t) {
          var e = t.touches;
          e && e.length > 1 || (f = !0, l = !1, e ? (d = !0, u = e[0].clientX, c = e[0].clientY) : (u = t.clientX, c = t.clientY), s = u)
        }

        function r(t) {
          if (f) {
            if (d && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
            var n = t.touches,
              r = n ? n[0].clientX : t.clientX,
              o = n ? n[0].clientY : t.clientY,
              v = r - s;
            s = r, Math.abs(v) > p && i && "" === String(i()) && (e("swipe", t, {
              direction: v > 0 ? "right" : "left"
            }), a()), (Math.abs(r - u) > 10 || Math.abs(o - c) > 10) && (l = !0)
          }
        }

        function o(t) {
          if (f) {
            if (f = !1, d && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(d = !1);
            l || e("tap", t)
          }
        }

        function a() {
          f = !1
        }
        var u, c, s, f = !1,
          l = !1,
          d = !1,
          p = Math.min(Math.round(.04 * window.innerWidth), 40);
        t.addEventListener("touchstart", n, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("mouseup", o, !1), t.addEventListener("mouseout", a, !1), this.destroy = function() {
          t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", r, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousemove", r, !1), t.removeEventListener("mouseup", o, !1), t.removeEventListener("mouseout", a, !1), t = null
        }
      }(n) : null
    }, n.instance = n.init(document), n
  })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e": {
      "id": "e",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-2"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513717976412
    },
    "e-3": {
      "id": "e-3",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|6c2180c1-d4fe-9540-e918-0425885df16f"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-4"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|6c2180c1-d4fe-9540-e918-0425885df16f"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718057491
    },
    "e-5": {
      "id": "e-5",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|f56f7b61-5a1c-8912-469a-280339605312"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-6"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|f56f7b61-5a1c-8912-469a-280339605312"
      },
      "config": {
        "loop": true,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718069383
    },
    "e-7": {
      "id": "e-7",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|167eb020-cc10-2fa4-07be-3f9945f2da08"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-8"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|167eb020-cc10-2fa4-07be-3f9945f2da08"
      },
      "config": {
        "loop": true,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718188920
    },
    "e-9": {
      "id": "e-9",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|81c8a637-f29b-606d-53c0-19be2684cf86"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-10"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|81c8a637-f29b-606d-53c0-19be2684cf86"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718200683
    },
    "e-11": {
      "id": "e-11",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|5edf8143-1aba-9357-3277-b9d0e49f8725"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-12"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|5edf8143-1aba-9357-3277-b9d0e49f8725"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718246675
    },
    "e-14": {
      "id": "e-14",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|8cf9d881-5f3b-6a4a-dadb-886f08056272"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-15"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|8cf9d881-5f3b-6a4a-dadb-886f08056272"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718305242
    },
    "e-16": {
      "id": "e-16",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|0148b804-e89f-cc36-2afa-b477b5aff841"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-17"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|0148b804-e89f-cc36-2afa-b477b5aff841"
      },
      "config": {
        "loop": true,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718313770
    },
    "e-18": {
      "id": "e-18",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {
            "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d": {
              "id": "5a371c979e1d100001aca1d3|fee24b52-d3c2-b0ec-19ca-61c9dee564b6"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-19"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "5a371c979e1d100001aca1d3|fee24b52-d3c2-b0ec-19ca-61c9dee564b6"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1513718324345
    },
    "e-20": {
      "id": "e-20",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-2",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-21"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "id": "5a371c979e1d100001aca1d3"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514142014281
    },
    "e-22": {
      "id": "e-22",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-3",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-23"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "e9718b55-4c56-d90e-5f9f-d5881ad2e524"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514142075119
    },
    "e-24": {
      "id": "e-24",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-4",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-25"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "41f347b6-4c43-679b-688c-9581e704c9f6"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514142128638
    },
    "e-34": {
      "id": "e-34",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-35"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "0009414c-90f2-daf4-3f50-b7b99bd159e4"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514142711426
    },
    "e-36": {
      "id": "e-36",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-37"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "447913fd-49d5-938c-f1c7-16b5bc980535"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514323948796
    },
    "e-38": {
      "id": "e-38",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-7",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-39"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "1e88e741-8e04-a4f0-8cfd-af6dd85518f7"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514323948796
    },
    "e-40": {
      "id": "e-40",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-8",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-41"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "id": "5a371c979e1d100001aca1d3"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514430351778
    },
    "e-42": {
      "id": "e-42",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-4",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-43"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "447913fd-49d5-938c-f1c7-16b5bc980535"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514430494029
    },
    "e-44": {
      "id": "e-44",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-45"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "id": "447913fd-49d5-938c-f1c7-16b5bc980535"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1514430550504
    }
  },
  "actionLists": {
    "a": {
      "id": "a",
      "title": "move up",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d",
            "yValue": 152,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": "5a371c979e1d100001aca1d3|c970815c-c99b-0b5b-602f-1df1d50b885d",
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }],
      "createdOn": 1513717990218,
      "useFirstGroupAsInitialState": true
    },
    "a-2": {
      "id": "a-2",
      "title": "hide on road",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-2-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": "435dd657-23e7-ed74-a2b4-79dccf5ef9ea"
          }
        }]
      }],
      "createdOn": 1514142018432,
      "useFirstGroupAsInitialState": false
    },
    "a-3": {
      "id": "a-3",
      "title": "click to close",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-3-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": "435dd657-23e7-ed74-a2b4-79dccf5ef9ea"
          }
        }]
      }],
      "createdOn": 1514142085785,
      "useFirstGroupAsInitialState": false
    },
    "a-4": {
      "id": "a-4",
      "title": "open modal wrapper",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-4-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "block",
            "target": "435dd657-23e7-ed74-a2b4-79dccf5ef9ea"
          }
        }]
      }],
      "createdOn": 1514142133722,
      "useFirstGroupAsInitialState": false
    },
    "a-5": {
      "id": "a-5",
      "title": "click to close 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-5-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": "f714e6ae-92ad-835c-8c21-33487c3940d1"
          }
        }]
      }],
      "createdOn": 1514142085785,
      "useFirstGroupAsInitialState": false
    },
    "a-6": {
      "id": "a-6",
      "title": "open modal wrapper 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "block",
            "target": "5a371c979e1d100001aca1d3|435dd657-23e7-ed74-a2b4-79dccf5ef9ea"
          }
        }]
      }],
      "createdOn": 1514142133722,
      "useFirstGroupAsInitialState": false
    },
    "a-7": {
      "id": "a-7",
      "title": "click to close 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-7-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": "13d89fc0-978c-a5d7-5dd8-14091d73373b"
          }
        }]
      }],
      "createdOn": 1514142085785,
      "useFirstGroupAsInitialState": false
    },
    "a-8": {
      "id": "a-8",
      "title": "hide container on load",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-8-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": "13d89fc0-978c-a5d7-5dd8-14091d73373b"
          }
        }]
      }],
      "createdOn": 1514430368775,
      "useFirstGroupAsInitialState": false
    },
    "a-9": {
      "id": "a-9",
      "title": "new popup",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-9-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "block",
            "target": "13d89fc0-978c-a5d7-5dd8-14091d73373b"
          }
        }]
      }],
      "createdOn": 1514430555259,
      "useFirstGroupAsInitialState": false
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});

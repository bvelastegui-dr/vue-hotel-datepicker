import { createElementBlock as d, openBlock as c, createCommentVNode as m, normalizeStyle as J, normalizeClass as _, createElementVNode as y, toDisplayString as C, resolveComponent as j, createBlock as Q, withModifiers as $, createVNode as ee, Fragment as R, renderList as te, normalizeProps as He, guardReactiveProps as Ae, mergeProps as Ye, withKeys as le, withDirectives as Ee, vShow as Fe, renderSlot as We, createTextVNode as je } from "vue";
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ce, fe;
function Le() {
  if (fe) return ce;
  fe = 1;
  var e = "Expected a function", t = NaN, i = "[object Symbol]", s = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, l = parseInt, h = typeof X == "object" && X && X.Object === Object && X, u = typeof self == "object" && self && self.Object === Object && self, v = h || u || Function("return this")(), q = Object.prototype, g = q.toString, Y = Math.max, se = Math.min, E = function() {
    return v.Date.now();
  };
  function U(r, D, k) {
    var w, O, Z, W, b, N, L = 0, de = !1, z = !1, oe = !0;
    if (typeof r != "function")
      throw new TypeError(e);
    D = I(D) || 0, M(k) && (de = !!k.leading, z = "maxWait" in k, Z = z ? Y(I(k.maxWait) || 0, D) : Z, oe = "trailing" in k ? !!k.trailing : oe);
    function re(f) {
      var T = w, V = O;
      return w = O = void 0, L = f, W = r.apply(V, T), W;
    }
    function Pe(f) {
      return L = f, b = setTimeout(G, D), de ? re(f) : W;
    }
    function Se(f) {
      var T = f - N, V = f - L, ye = D - T;
      return z ? se(ye, Z - V) : ye;
    }
    function ue(f) {
      var T = f - N, V = f - L;
      return N === void 0 || T >= D || T < 0 || z && V >= Z;
    }
    function G() {
      var f = E();
      if (ue(f))
        return De(f);
      b = setTimeout(G, Se(f));
    }
    function De(f) {
      return b = void 0, oe && w ? re(f) : (w = O = void 0, W);
    }
    function Be() {
      b !== void 0 && clearTimeout(b), L = 0, w = N = O = b = void 0;
    }
    function Ne() {
      return b === void 0 ? W : De(E());
    }
    function he() {
      var f = E(), T = ue(f);
      if (w = arguments, O = this, N = f, T) {
        if (b === void 0)
          return Pe(N);
        if (z)
          return b = setTimeout(G, D), re(N);
      }
      return b === void 0 && (b = setTimeout(G, D)), W;
    }
    return he.cancel = Be, he.flush = Ne, he;
  }
  function F(r, D, k) {
    var w = !0, O = !0;
    if (typeof r != "function")
      throw new TypeError(e);
    return M(k) && (w = "leading" in k ? !!k.leading : w, O = "trailing" in k ? !!k.trailing : O), U(r, D, {
      leading: w,
      maxWait: D,
      trailing: O
    });
  }
  function M(r) {
    var D = typeof r;
    return !!r && (D == "object" || D == "function");
  }
  function ae(r) {
    return !!r && typeof r == "object";
  }
  function B(r) {
    return typeof r == "symbol" || ae(r) && g.call(r) == i;
  }
  function I(r) {
    if (typeof r == "number")
      return r;
    if (B(r))
      return t;
    if (M(r)) {
      var D = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = M(D) ? D + "" : D;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = r.replace(s, "");
    var k = a.test(r);
    return k || o.test(r) ? l(r.slice(2), k ? 2 : 8) : n.test(r) ? t : +r;
  }
  return ce = F, ce;
}
var ze = Le();
const Ve = /* @__PURE__ */ qe(ze);
var we = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, P = "\\d\\d?", x = "\\d\\d", Re = "\\d{3}", Ke = "\\d{4}", K = "[^\\s]+", Me = /\[([^]*?)\]/gm;
function Ie(e, t) {
  for (var i = [], s = 0, n = e.length; s < n; s++)
    i.push(e[s].substr(0, t));
  return i;
}
var ke = function(e) {
  return function(t, i) {
    var s = i[e].map(function(a) {
      return a.toLowerCase();
    }), n = s.indexOf(t.toLowerCase());
    return n > -1 ? n : null;
  };
};
function H(e) {
  for (var t = [], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  for (var s = 0, n = t; s < n.length; s++) {
    var a = n[s];
    for (var o in a)
      e[o] = a[o];
  }
  return e;
}
var Oe = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Ce = [
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
], Ue = Ie(Ce, 3), Ze = Ie(Oe, 3), Te = {
  dayNamesShort: Ze,
  dayNames: Oe,
  monthNamesShort: Ue,
  monthNames: Ce,
  amPm: ["am", "pm"],
  DoFn: function(e) {
    return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 !== 10 ? 1 : 0) * e % 10];
  }
}, ie = H({}, Te), Ge = function(e) {
  return ie = H(ie, e);
}, me = function(e) {
  return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
}, p = function(e, t) {
  for (t === void 0 && (t = 2), e = String(e); e.length < t; )
    e = "0" + e;
  return e;
}, Je = {
  D: function(e) {
    return String(e.getDate());
  },
  DD: function(e) {
    return p(e.getDate());
  },
  Do: function(e, t) {
    return t.DoFn(e.getDate());
  },
  d: function(e) {
    return String(e.getDay());
  },
  dd: function(e) {
    return p(e.getDay());
  },
  ddd: function(e, t) {
    return t.dayNamesShort[e.getDay()];
  },
  dddd: function(e, t) {
    return t.dayNames[e.getDay()];
  },
  M: function(e) {
    return String(e.getMonth() + 1);
  },
  MM: function(e) {
    return p(e.getMonth() + 1);
  },
  MMM: function(e, t) {
    return t.monthNamesShort[e.getMonth()];
  },
  MMMM: function(e, t) {
    return t.monthNames[e.getMonth()];
  },
  YY: function(e) {
    return p(String(e.getFullYear()), 4).substr(2);
  },
  YYYY: function(e) {
    return p(e.getFullYear(), 4);
  },
  h: function(e) {
    return String(e.getHours() % 12 || 12);
  },
  hh: function(e) {
    return p(e.getHours() % 12 || 12);
  },
  H: function(e) {
    return String(e.getHours());
  },
  HH: function(e) {
    return p(e.getHours());
  },
  m: function(e) {
    return String(e.getMinutes());
  },
  mm: function(e) {
    return p(e.getMinutes());
  },
  s: function(e) {
    return String(e.getSeconds());
  },
  ss: function(e) {
    return p(e.getSeconds());
  },
  S: function(e) {
    return String(Math.round(e.getMilliseconds() / 100));
  },
  SS: function(e) {
    return p(Math.round(e.getMilliseconds() / 10), 2);
  },
  SSS: function(e) {
    return p(e.getMilliseconds(), 3);
  },
  a: function(e, t) {
    return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
  },
  A: function(e, t) {
    return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  },
  ZZ: function(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : "+") + p(Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60, 4);
  },
  Z: function(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : "+") + p(Math.floor(Math.abs(t) / 60), 2) + ":" + p(Math.abs(t) % 60, 2);
  }
}, ge = function(e) {
  return +e - 1;
}, pe = [null, P], _e = [null, K], ve = [
  "isPm",
  K,
  function(e, t) {
    var i = e.toLowerCase();
    return i === t.amPm[0] ? 0 : i === t.amPm[1] ? 1 : null;
  }
], be = [
  "timezoneOffset",
  "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
  function(e) {
    var t = (e + "").match(/([+-]|\d\d)/gi);
    if (t) {
      var i = +t[1] * 60 + parseInt(t[2], 10);
      return t[0] === "+" ? i : -i;
    }
    return 0;
  }
], Xe = {
  D: ["day", P],
  DD: ["day", x],
  Do: ["day", P + K, function(e) {
    return parseInt(e, 10);
  }],
  M: ["month", P, ge],
  MM: ["month", x, ge],
  YY: [
    "year",
    x,
    function(e) {
      var t = /* @__PURE__ */ new Date(), i = +("" + t.getFullYear()).substr(0, 2);
      return +("" + (+e > 68 ? i - 1 : i) + e);
    }
  ],
  h: ["hour", P, void 0, "isPm"],
  hh: ["hour", x, void 0, "isPm"],
  H: ["hour", P],
  HH: ["hour", x],
  m: ["minute", P],
  mm: ["minute", x],
  s: ["second", P],
  ss: ["second", x],
  YYYY: ["year", Ke],
  S: ["millisecond", "\\d", function(e) {
    return +e * 100;
  }],
  SS: ["millisecond", x, function(e) {
    return +e * 10;
  }],
  SSS: ["millisecond", Re],
  d: pe,
  dd: pe,
  ddd: _e,
  dddd: _e,
  MMM: ["month", K, ke("monthNamesShort")],
  MMMM: ["month", K, ke("monthNames")],
  a: ve,
  A: ve,
  ZZ: be,
  Z: be
}, ne = {
  default: "ddd MMM DD YYYY HH:mm:ss",
  shortDate: "M/D/YY",
  mediumDate: "MMM D, YYYY",
  longDate: "MMMM D, YYYY",
  fullDate: "dddd, MMMM D, YYYY",
  isoDate: "YYYY-MM-DD",
  isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
}, Qe = function(e) {
  return H(ne, e);
}, $e = function(e, t, i) {
  if (t === void 0 && (t = ne.default), i === void 0 && (i = {}), typeof e == "number" && (e = new Date(e)), Object.prototype.toString.call(e) !== "[object Date]" || isNaN(e.getTime()))
    throw new Error("Invalid Date pass to format");
  t = ne[t] || t;
  var s = [];
  t = t.replace(Me, function(a, o) {
    return s.push(o), "@@@";
  });
  var n = H(H({}, ie), i);
  return t = t.replace(we, function(a) {
    return Je[a](e, n);
  }), t.replace(/@@@/g, function() {
    return s.shift();
  });
};
function et(e, t, i) {
  if (i === void 0 && (i = {}), typeof t != "string")
    throw new Error("Invalid format in fecha parse");
  if (t = ne[t] || t, e.length > 1e3)
    return null;
  var s = /* @__PURE__ */ new Date(), n = {
    year: s.getFullYear(),
    month: 0,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isPm: null,
    timezoneOffset: null
  }, a = [], o = [], l = t.replace(Me, function(B, I) {
    return o.push(me(I)), "@@@";
  }), h = {}, u = {};
  l = me(l).replace(we, function(B) {
    var I = Xe[B], r = I[0], D = I[1], k = I[3];
    if (h[r])
      throw new Error("Invalid format. " + r + " specified twice in format");
    return h[r] = !0, k && (u[k] = !0), a.push(I), "(" + D + ")";
  }), Object.keys(u).forEach(function(B) {
    if (!h[B])
      throw new Error("Invalid format. " + B + " is required in specified format");
  }), l = l.replace(/@@@/g, function() {
    return o.shift();
  });
  var v = e.match(new RegExp(l, "i"));
  if (!v)
    return null;
  for (var q = H(H({}, ie), i), g = 1; g < v.length; g++) {
    var Y = a[g - 1], se = Y[0], E = Y[2], U = E ? E(v[g], q) : +v[g];
    if (U == null)
      return null;
    n[se] = U;
  }
  n.isPm === 1 && n.hour != null && +n.hour != 12 ? n.hour = +n.hour + 12 : n.isPm === 0 && +n.hour == 12 && (n.hour = 0);
  var F;
  if (n.timezoneOffset == null) {
    F = new Date(n.year, n.month, n.day, n.hour, n.minute, n.second, n.millisecond);
    for (var M = [
      ["month", "getMonth"],
      ["day", "getDate"],
      ["hour", "getHours"],
      ["minute", "getMinutes"],
      ["second", "getSeconds"]
    ], g = 0, ae = M.length; g < ae; g++)
      if (h[M[g][0]] && n[M[g][0]] !== F[M[g][1]]())
        return null;
  } else if (F = new Date(Date.UTC(n.year, n.month, n.day, n.hour, n.minute - n.timezoneOffset, n.second, n.millisecond)), n.month > 11 || n.month < 0 || n.day > 31 || n.day < 1 || n.hour > 23 || n.hour < 0 || n.minute > 59 || n.minute < 0 || n.second > 59 || n.second < 0)
    return null;
  return F;
}
var S = {
  format: $e,
  parse: et,
  defaultI18n: Te,
  setGlobalDateI18n: Ge,
  setGlobalDateMasks: Qe
};
const xe = {
  getNextDate(e, t) {
    const i = new Date(t);
    let s = 1 / 0;
    return e.forEach((n) => {
      const a = new Date(n);
      a >= i && a < s && (s = n);
    }), s === 1 / 0 ? null : s;
  },
  nextDateByDayOfWeek(e, t, i) {
    const s = new Date(t);
    let n = e.toLowerCase();
    const o = i ? i["day-names"] : ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], l = s.getDay();
    for (let u = 7; ; u--)
      if (n === o[u]) {
        n = u <= l ? u + 7 : u;
        break;
      }
    const h = n - l;
    return s.setDate(s.getDate() + h);
  },
  nextDateByDayOfWeekArray(e, t, i) {
    const s = [];
    for (let n = 0; n < e.length; n++)
      s.push(new Date(this.nextDateByDayOfWeek(e[n], t, i)));
    return this.getNextDate(s, t);
  },
  nextDateByDayOfWeekObject(e, t, i) {
    const s = Object.entries(e).map((n) => n[1] ? n[0] : !1).filter((n) => n);
    return this.nextDateByDayOfWeekArray(s, t, i);
  },
  countDays(e, t) {
    const s = new Date(e), n = new Date(t);
    return Math.round(Math.abs((s.getTime() - n.getTime()) / 864e5));
  },
  addDays(e, t) {
    const i = new Date(e);
    return i.setDate(i.getDate() + t), i;
  },
  getDayDiff(e, t) {
    const i = new Date(t).getTime(), s = new Date(e).getTime();
    return parseInt((i - s) / (24 * 3600 * 1e3), 10);
  },
  getFirstDay(e, t) {
    const i = this.getFirstDayOfMonth(e), s = i.getDay();
    let n = 0;
    return t > 0 && (n = s ? t : -6), new Date(i.setDate(i.getDate() - (s - n)));
  },
  getFirstDayOfMonth(e) {
    return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
  },
  getNextMonth(e) {
    let t;
    return e.getMonth() === 11 ? t = new Date(e.getFullYear() + 1, 0, 1) : t = new Date(e.getFullYear(), e.getMonth() + 1, 1), t;
  },
  getPreviousMonth(e) {
    let t;
    return e.getMonth() === 0 ? t = new Date(e.getFullYear() - 1, 11, 1) : t = new Date(e.getFullYear(), e.getMonth() - 1, 1), t;
  },
  handleTouchStart(e) {
    this.isTouchMove = !1, this.isOpen && (this.xDown = e.touches[0].clientX, this.yDown = e.touches[0].clientY);
  },
  handleTouchMove(e) {
    if (!this.xDown || !this.yDown) {
      this.isTouchMove = !1;
      return;
    }
    this.isTouchMove = !0, this.xUp = e.touches[0].clientX, this.yUp = e.touches[0].clientY;
  },
  handleTouchEnd() {
    if (!this.isTouchMove || !this.xDown || !this.yDown)
      return;
    const e = this.xDown - this.xUp, t = this.yDown - this.yUp;
    Math.abs(e) < Math.abs(t) && t > 0 && !this.isPreventedMaxMonth ? this.renderNextMonth() : this.renderPreviousMonth(), this.xDown = null, this.yDown = null;
  },
  validateDateBetweenTwoDates(e, t, i) {
    const s = (n) => {
      const a = new Date(n).setHours(0, 0, 0, 0);
      return new Date(a);
    };
    return s(i) <= s(t) && s(i) >= s(e);
  },
  validateDateBetweenDate(e, t) {
    const i = (s) => new Date(s);
    return i(t) <= i(e);
  },
  getMonthDiff(e, t) {
    const i = new Date(e), s = new Date(t), n = i.getFullYear(), a = s.getFullYear(), o = i.getMonth();
    return s.getMonth() + 12 * a - (o + 12 * n);
  },
  shortenString(e, t) {
    const i = [];
    for (let s = 0, n = e.length; s < n; s++)
      i.push(e[s].substr(0, t));
    return i;
  },
  getDaysArray(e, t) {
    for (var i = [], s = new Date(e); s <= t; s.setDate(s.getDate() + 1))
      i.push(new Date(s));
    return i;
  },
  dateFormater(e, t) {
    const i = t || "YYYY-MM-DD";
    return e ? S.format(e, i) : "";
  },
  pluralize(e, t = "night") {
    return t === "week" ? e > 7 ? this.i18n.weeks : this.i18n.week : e !== 1 ? this.i18n.nights : this.i18n.night;
  },
  isDateLessOrEquals(e, t) {
    return new Date(e) < new Date(t);
  },
  compareDay(e, t) {
    const i = S.format(new Date(e), "YYYYMMDD"), s = S.format(new Date(t), "YYYYMMDD");
    return i > s ? 1 : i === s ? 0 : i < s ? -1 : null;
  }
}, A = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, n] of t)
    i[s] = n;
  return i;
}, tt = {
  name: "BookingBullet",
  props: {
    currentBooking: {
      type: Object,
      default: () => ({})
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    formatDate: {
      type: String,
      default: ""
    },
    previousBooking: {
      type: Object,
      default: () => ({})
    }
  }
}, it = { class: "vhd__parent-bullet" };
function nt(e, t, i, s, n, a) {
  return c(), d("i", it, [
    i.previousBooking && i.duplicateBookingDates.includes(i.formatDate) ? (c(), d("i", {
      key: 0,
      class: _(["vhd__bullet", [
        {
          vhd__checkInCheckOut: i.duplicateBookingDates.includes(i.formatDate)
        }
      ]]),
      style: J(i.previousBooking.style)
    }, null, 6)) : m("", !0),
    i.previousBooking && i.duplicateBookingDates.includes(i.formatDate) ? (c(), d("i", {
      key: 1,
      class: "vhd__pipe vhd__checkInCheckOut",
      style: J(i.previousBooking.style)
    }, null, 4)) : m("", !0),
    i.currentBooking && (i.currentBooking.checkInDate === i.formatDate || i.currentBooking.checkOutDate === i.formatDate) ? (c(), d("i", {
      key: 2,
      class: _(["vhd__bullet", [
        {
          vhd__checkIn: i.currentBooking.checkInDate === i.formatDate,
          vhd__checkOut: i.currentBooking.checkOutDate === i.formatDate
        }
      ]]),
      style: J(i.currentBooking.style)
    }, null, 6)) : m("", !0),
    i.currentBooking ? (c(), d("i", {
      key: 3,
      class: _(["vhd__pipe", [
        {
          vhd__checkIn: i.currentBooking.checkInDate === i.formatDate,
          vhd__checkOut: i.currentBooking.checkOutDate === i.formatDate
        }
      ]]),
      style: J(i.currentBooking.style)
    }, null, 6)) : m("", !0)
  ]);
}
const st = /* @__PURE__ */ A(tt, [["render", nt]]), at = {
  name: "Price",
  props: {
    show: {
      type: Boolean,
      required: !0
    },
    price: {
      type: String,
      required: !0
    },
    symbol: {
      type: [String, null, void 0],
      default: ""
    }
  }
}, ot = {
  key: 0,
  class: "price"
}, rt = { class: "price-symbol" }, ht = { class: "price-number" };
function ct(e, t, i, s, n, a) {
  return i.show && i.price ? (c(), d("div", ot, [
    y("span", rt, C(i.symbol), 1),
    y("span", ht, C(i.price), 1)
  ])) : m("", !0);
}
const lt = /* @__PURE__ */ A(at, [["render", ct]]), dt = {
  name: "Day",
  components: {
    BookingBullet: st,
    Price: lt
  },
  props: {
    bookings: {
      type: Array,
      default: () => []
    },
    activeMonthIndex: {
      type: Number
    },
    belongsToThisMonth: {
      type: Boolean,
      default: !1
    },
    checkIn: {
      type: Date
    },
    checkIncheckOutHalfDay: {
      type: Object,
      default: () => ({})
    },
    checkInPeriod: {
      type: Object,
      default: () => ({})
    },
    checkOut: {
      type: Date
    },
    date: {
      type: Date
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: !1
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    hoveringDate: {
      type: Date
    },
    hoveringPeriod: {
      type: Object,
      default: () => ({})
    },
    hoveringTooltip: {
      default: !0,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: !0
    },
    minNightCount: {
      type: Number,
      default: 0
    },
    nextDisabledDate: {
      type: [Date, Number, String]
    },
    nextPeriodDisableDates: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object
    },
    priceSymbol: {
      type: String,
      required: !0
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ""
    },
    showCustomTooltip: {
      default: !1,
      type: Boolean
    },
    showPrice: {
      type: Boolean,
      default: !1
    },
    sortedDisabledDates: {
      type: Array,
      default: () => []
    },
    sortedPeriodDates: {
      type: Array,
      default: () => []
    },
    tooltipMessage: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      currentDate: /* @__PURE__ */ new Date(),
      isDisabled: !1,
      isHighlighted: !1
    };
  },
  computed: {
    previousBooking() {
      let e = null;
      return this.currentBooking && this.duplicateBookingDates.includes(this.currentBooking.checkInDate) && (e = this.bookings.find(
        (t) => t.checkOutDate === this.formatDate && this.duplicateBookingDates.includes(t.checkOutDate)
      )), e;
    },
    currentBooking() {
      return this.bookings.find(
        (e) => this.duplicateBookingDates.includes(this.formatDate) && e.checkInDate === this.formatDate || !this.duplicateBookingDates.includes(this.formatDate) && this.validateDateBetweenTwoDates(e.checkInDate, e.checkOutDate, this.formatDate)
      );
    },
    dayNumber() {
      return S.format(this.date, "D");
    },
    dayPrice() {
      let e = "";
      const t = [...this.sortedPeriodDates].reverse().find((i) => this.validateDateBetweenTwoDates(i.startAt, i.endAt, this.formatDate));
      if (t && t.price) {
        const i = typeof t.price == "number" || !Number.isNaN(parseFloat(t.price)), s = t.periodType !== "nightly";
        if (i && s) {
          const n = parseFloat(t.price), a = 7, o = Number.isNaN(parseFloat(this.priceDecimals)) ? 0 : parseFloat(this.priceDecimals);
          e = (n / a).toFixed(o);
        } else
          e = t.price;
      }
      return String(e);
    },
    halfDayClass() {
      if (Object.keys(this.checkIncheckOutHalfDay).length > 0) {
        const e = this.dateFormater(this.date);
        if (this.checkIncheckOutHalfDay[e] && this.checkIncheckOutHalfDay[e].checkIn)
          return this.checkIn && !this.checkOut ? "vhd__datepicker__month-day--halfCheckIn vhd__datepicker__month-day--valid" : "vhd__datepicker__month-day--halfCheckIn vhd__datepicker__month-day--invalid";
        if (this.checkIncheckOutHalfDay[e] && this.checkIncheckOutHalfDay[e].checkOut)
          return "vhd__datepicker__month-day--halfCheckOut vhd__datepicker__month-day--valid";
      }
      return !1;
    },
    bookingClass() {
      return this.bookings.length > 0 && this.currentBooking ? !this.isDisabled && this.validateDateBetweenTwoDates(
        this.currentBooking.checkInDate,
        this.currentBooking.checkOutDate,
        this.hoveringDate
      ) ? this.checkIncheckOutHalfDay[this.formatDate] ? this.checkIn && !this.checkOut || this.checkIncheckOutHalfDay[this.formatDate].checkOut ? "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering" : "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid" : this.checkIn && !this.checkOut ? "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid" : "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering" : this.checkIncheckOutHalfDay[this.formatDate] && this.checkIncheckOutHalfDay[this.formatDate].checkOut && !this.duplicateBookingDates.includes(this.formatDate) && (!this.checkIn || this.checkIn && this.checkIn === this.date || this.checkIn && this.checkOut) || this.checkIn && !this.checkOut && this.hoveringDate === this.date ? "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering" : "vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid" : "";
    },
    disabledClass() {
      return this.isDisabled || this.isADisabledDay ? " vhd__datepicker__month-day--disabled " : "";
    },
    dayClass() {
      if (!this.belongsToThisMonth)
        return "vhd__datepicker__month-day--hidden";
      const e = this.addDays(this.checkIn, this.minNightCount);
      if (!(this.getDayDiff(this.hoveringDate, e) <= 0) && !this.checkOut && !this.isDisabled && this.compareDay(this.date, this.checkIn) >= 0 && this.minNightCount > 0 && this.compareDay(this.date, this.addDays(this.checkIn, this.minNightCount)) === -1)
        return "vhd__datepicker__month-day--valid vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed minimumDurationUnvalidDay";
      if (!this.isDisabled && this.date === this.hoveringDate && this.checkIn !== null && this.checkOut == null)
        return "vhd__datepicker__month-day--selected vhd__datepicker__month-day--hovering vhd__currentDay";
      if (this.checkIn !== null && this.dateFormater(this.checkIn) === this.dateFormater(this.date))
        return this.minNightCount === 0 ? "vhd__datepicker__month-day--first-day-selected checkIn" : "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--first-day-selected checkIn";
      if (this.checkOut !== null && this.dateFormater(this.checkOut) === this.dateFormater(this.date))
        return this.halfDayClass ? `vhd__datepicker__month-day--disabled vhd__datepicker__month-day--last-day-selected ${this.halfDayClass} checkOut` : "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--last-day-selected checkOut";
      if (this.isHighlighted && !this.isDisabled) {
        const i = "vhd__datepicker__month-day--selected";
        if (this.isADisabledDay)
          return `${i} vhd__datepicker__month-day--disabled afterMinimumDurationValidDay`;
        if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes("weekly") && this.hoveringDate && (this.checkInPeriod.periodType === "weekly_by_saturday" && this.hoveringDate.getDay() === 6 || this.checkInPeriod.periodType === "weekly_by_sunday" && this.hoveringDate.getDay() === 0) && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          if (this.checkInPeriod.minimumDuration === 1)
            return `${i} afterMinimumDurationValidDay`;
          if (this.getDayDiff(this.hoveringDate, this.checkInPeriod.nextValidDate) <= 0)
            return `${i} afterMinimumDurationValidDay`;
        } else if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType === "nightly" && this.hoveringDate && this.hoveringPeriod.periodType.includes("weekly") && (this.hoveringPeriod.periodType === "weekly_by_saturday" && this.hoveringDate.getDay() === 6 || this.hoveringPeriod.periodType === "weekly_by_sunday" && this.hoveringDate.getDay() === 0 && this.isDateLessOrEquals(this.date, this.hoveringDate)))
          return `${i} afterMinimumDurationValidDay`;
        return this.hoveringPeriod.periodType === "nightly" && this.isDateLessOrEquals(this.date, this.hoveringDate) ? `${i}  afterMinimumDurationValidDay` : this.checkIn && this.checkOut ? `${i}` : `${i} vhd__datepicker__month-day--valid`;
      }
      return this.isDisabled || this.isADisabledDay ? "vhd__datepicker__month-day--disabled" : this.halfDayClass ? `${this.halfDayClass}` : "vhd__datepicker__month-day--valid";
    },
    checkinCheckoutClass() {
      let e = null;
      return this.sortedPeriodDates.forEach((t) => {
        t.endAt !== this.formatDate && (t.startAt === this.formatDate || this.validateDateBetweenTwoDates(t.startAt, t.endAt, this.formatDate)) && (e = t);
      }), this.nextPeriodDisableDates && this.nextPeriodDisableDates.some((t) => this.compareDay(t, this.date) === 0) ? "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed nightly" : e ? e.periodType === "nightly" && this.belongsToThisMonth && !this.isDisabled ? (!this.checkIn && !this.checkOut || this.checkIn && this.checkOut) && this.notAllowedDayDueToNextPeriod(e) ? "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed nightly" : "nightly" : e.periodType === "weekly_by_saturday" && e.startAt !== this.formatDate && e.endAt !== this.formatDate && this.date.getDay() !== 6 || this.notAllowDaysBetweenCheckInAndNextValidDate(6) ? "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_saturday" : e.periodType === "weekly_by_sunday" && e.startAt !== this.formatDate && e.endAt !== this.formatDate && this.date.getDay() !== 0 || this.notAllowDaysBetweenCheckInAndNextValidDate(0) ? "vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_sunday" : "" : "";
    },
    formatDate() {
      return this.dateFormater(this.date);
    },
    tabIndex() {
      return !this.isOpen || !this.belongsToThisMonth || this.isDisabled || !this.isClickable() ? -1 : 0;
    },
    nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate);
    },
    tooltipMessageDisplay() {
      const e = this.validateDateBetweenTwoDates(
        this.hoveringPeriod.startAt,
        this.hoveringPeriod.endAt,
        this.date
      ), t = this.validateDateBetweenTwoDates(
        this.hoveringPeriod.startAt,
        this.hoveringPeriod.endAt,
        this.checkIn
      );
      return this.tooltipMessage ? this.tooltipMessage : this.hoveringPeriod && this.hoveringPeriod.type !== "nightly" && e && t && this.nightsCount >= 7 ? `${this.nightsCount / 7} ${this.pluralize(this.nightsCount, "week")}` : this.nightsCount >= 1 ? `${this.nightsCount} ${this.nightsCount !== 1 ? this.i18n.nights : this.i18n.night}` : "";
    },
    showTooltip() {
      if (this.screenSize === "desktop" || this.screenSize === "tablet") {
        const e = this.showCustomTooltip && this.date === this.hoveringDate, t = !this.isDisabled && this.belongsToThisMonth && this.date === this.hoveringDate && this.tooltipMessageDisplay.length > 0 && this.checkIn !== null && this.checkOut === null;
        return e || t;
      }
      return !1;
    },
    isToday() {
      return this.compareDay(this.currentDate, this.date) === 0;
    },
    isADisabledDay() {
      const t = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][this.date.getUTCDay()];
      return this.options.disabledWeekDaysObject[t];
    }
  },
  watch: {
    hoveringDate() {
      this.fetchHighlight();
    },
    checkIn() {
      this.fetchHighlight();
    },
    activeMonthIndex() {
      this.checkIfDisabled(), this.checkIfHighlighted(), this.checkIn !== null && this.checkOut !== null ? this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut) ? this.isHighlighted = !0 : this.isHighlighted = !1 : this.checkIn !== null && this.checkOut === null && this.disableNextDays();
    },
    nextDisabledDate() {
      this.disableNextDays();
    }
  },
  beforeMount() {
    this.checkIfDisabled(), this.checkIfHighlighted();
  },
  methods: {
    ...xe,
    notAllowDaysBetweenCheckInAndNextValidDate(e) {
      return this.checkIn && !this.checkOut && this.date.getDay() === e && Object.keys(this.hoveringPeriod).length > 0 && this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.date) && this.dateFormater(this.checkIn) !== this.formatDate && this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.formatDate;
    },
    notAllowedDayDueToNextPeriod(e) {
      const t = new Date(e.endAt);
      let i = null;
      if (this.sortedPeriodDates.forEach((s) => {
        const n = new Date(s.startAt).setHours(0, 0, 0, 0), a = new Date(t).setHours(0, 0, 0, 0);
        n === a && (i = s);
      }), i) {
        const s = new Date(i.startAt).setHours(0, 0, 0, 0), n = new Date(s), a = new Date(n.setDate(n.getDate() - e.minimumDuration));
        if (!this.validateDateBetweenTwoDates(e.startAt, a, this.date))
          return !0;
      }
      return !1;
    },
    isClickable() {
      return this.$refs && this.$refs.day ? getComputedStyle(this.$refs.day).pointerEvents !== "none" : !0;
    },
    dayClicked(e, t) {
      let i = !1, s = !this.disableCheckoutOnCheckin;
      if (!this.checkIncheckOutHalfDay[this.formatDate] && this.currentBooking) {
        this.$emit("booking-clicked", e, t, this.currentBooking);
        return;
      }
      if (this.disableCheckoutOnCheckin && (this.checkIn && this.checkIn === t ? this.checkOut ? (s = !0, i = !0) : (s = !1, this.$emit("clear-selection")) : s = !0), s)
        if (!this.isDisabled || this.isClickable()) {
          const n = this.dateFormater(t);
          this.$emit("day-clicked", e, t, n, i);
        } else
          this.$emit("clear-selection"), this.dayClicked(e, t);
    },
    compareEndDay() {
      return this.options.endDate !== 1 / 0 ? this.compareDay(this.date, this.options.endDate) === 1 : !1;
    },
    checkIfDisabled() {
      this.isDisabled = // If this day is equal any of the disabled dates
      (this.sortedDisabledDates ? this.sortedDisabledDates.some((e) => this.compareDay(e, this.date) === 0) : null) || // Or is before the start date
      this.compareDay(this.date, this.options.startDate) === -1 || // Or is after the end date
      this.compareEndDay() || // Or is in one of the disabled days of the week
      this.isADisabledDay || // Or is after max Nights
      this.date >= this.nextDisabledDate && this.nextDisabledDate !== null, this.options.enableCheckout && this.compareDay(this.date, this.checkIn) === 1 && this.compareDay(this.date, this.checkOut) === -1 && (this.isDisabled = !1);
    },
    checkIfHighlighted() {
      this.checkIn !== null && this.checkOut !== null && this.isDisabled === !1 && (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut) ? this.isHighlighted = !0 : this.isHighlighted = !1);
    },
    disableNextDays() {
      this.nextDisabledDate !== null && !this.isDateLessOrEquals(this.date, this.nextDisabledDate) && this.nextDisabledDate !== 1 / 0 ? this.isDisabled = !0 : this.isDateLessOrEquals(this.date, (/* @__PURE__ */ new Date()).setDate(this.options.startDate.getDate() - 1)) && (this.isDisabled = !0), this.compareDay(this.date, this.checkIn) === 0 && this.minNightCount === 0 && (this.isDisabled = !1), this.isDateLessOrEquals(this.checkIn, this.date) && this.options.enableCheckout && (this.isDisabled = !1);
    },
    fetchHighlight() {
      this.checkIn !== null && this.checkOut === null && this.isDisabled === !1 && (this.isDateLessOrEquals(this.checkIn, this.date) ? this.isDateLessOrEquals(this.date, this.hoveringDate) ? this.isHighlighted = !0 : this.isDateLessOrEquals(this.date, this.hoveringDate) || (this.isHighlighted = !1) : this.isHighlighted = !1);
    }
  }
}, ut = ["innerHTML"], Dt = ["tabindex"], yt = { class: "vhd__datepicker__month-day-wrapper" }, ft = { class: "day" };
function kt(e, t, i, s, n, a) {
  const o = j("Price"), l = j("BookingBullet");
  return c(), d("div", null, [
    a.showTooltip && i.options.hoveringTooltip ? (c(), d("div", {
      key: 0,
      class: "vhd__datepicker__tooltip",
      innerHTML: a.tooltipMessageDisplay
    }, null, 8, ut)) : m("", !0),
    y("div", {
      class: _(["vhd__datepicker__month-day", [
        a.dayClass,
        a.disabledClass,
        a.checkinCheckoutClass,
        a.bookingClass,
        { "vhd__datepicker__month-day--today": a.isToday }
      ]]),
      onClick: t[0] || (t[0] = $((h) => a.dayClicked(h, i.date), ["prevent", "stop"])),
      tabindex: a.tabIndex,
      ref: "day"
    }, [
      y("div", yt, [
        y("span", ft, C(a.dayNumber), 1),
        ee(o, {
          show: i.showPrice,
          price: a.dayPrice,
          symbol: i.priceSymbol
        }, null, 8, ["show", "price", "symbol"])
      ])
    ], 10, Dt),
    a.currentBooking && i.belongsToThisMonth && !n.isDisabled ? (c(), Q(l, {
      key: 1,
      currentBooking: a.currentBooking,
      duplicateBookingDates: i.duplicateBookingDates,
      formatDate: a.formatDate,
      previousBooking: a.previousBooking
    }, null, 8, ["currentBooking", "duplicateBookingDates", "formatDate", "previousBooking"])) : m("", !0)
  ]);
}
const mt = /* @__PURE__ */ A(dt, [["render", kt]]), gt = {
  name: "WeekRow",
  props: {
    i18n: {
      type: Object,
      required: !0
    },
    weekKey: {
      type: Number,
      required: !0
    },
    firstDayOfWeek: {
      type: Number,
      required: !0
    }
  },
  computed: {
    dayNames() {
      return [
        ...this.i18n["day-names"].slice(this.firstDayOfWeek),
        ...this.i18n["day-names"].slice(0, this.firstDayOfWeek)
      ].slice(0, 7);
    }
  }
}, pt = { class: "vhd__datepicker__week-row vhd__hide-up-to-tablet" };
function _t(e, t, i, s, n, a) {
  return c(), d("div", pt, [
    (c(!0), d(R, null, te(a.dayNames, (o, l) => (c(), d("div", {
      key: `${i.weekKey}-${l}`,
      class: "vhd__datepicker__week-name"
    }, C(o), 1))), 128))
  ]);
}
const vt = /* @__PURE__ */ A(gt, [["render", _t]]), bt = {
  name: "Month",
  components: {
    Day: mt,
    WeekRow: vt
  },
  props: {
    month: {
      type: Object,
      required: !0
    },
    dayKey: {
      type: Number,
      required: !0
    },
    weekKey: {
      type: Number,
      required: !0
    },
    isDesktop: {
      type: Boolean,
      required: !0
    },
    showYear: {
      type: Boolean,
      required: !0
    },
    yearBeforeMonth: {
      type: Boolean,
      required: !0
    },
    firstDayOfWeek: {
      type: Number,
      required: !0
    },
    bookings: {
      type: Array,
      default: () => []
    },
    activeMonthIndex: {
      type: Number
    },
    checkIn: {
      type: Date
    },
    checkIncheckOutHalfDay: {
      type: Object,
      default: () => ({})
    },
    checkInPeriod: {
      type: Object,
      default: () => ({})
    },
    checkOut: {
      type: Date
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: !1
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    hoveringDate: {
      type: Date
    },
    hoveringPeriod: {
      type: Object,
      default: () => ({})
    },
    hoveringTooltip: {
      default: !0,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: !0
    },
    minNightCount: {
      type: Number,
      default: 0
    },
    nextDisabledDate: {
      type: [Date, Number, String]
    },
    nextPeriodDisableDates: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object
    },
    priceSymbol: {
      type: String,
      default: ""
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ""
    },
    showCustomTooltip: {
      default: !1,
      type: Boolean
    },
    showPrice: {
      type: Boolean,
      default: !1
    },
    disabledDates: {
      type: Array,
      default: () => []
    },
    sortedDisabledDates: {
      type: Array,
      default: () => []
    },
    sortedPeriodDates: {
      type: Array,
      default: () => []
    },
    tooltipMessage: {
      default: null,
      type: String
    }
  },
  computed: {
    monthName() {
      return this.getMonth(this.month.days[15].date);
    }
  },
  methods: {
    getMonth(e) {
      const t = "MMMM", i = "YYYY";
      let s = t;
      return this.showYear && (s = this.yearBeforeMonth ? `${i} ${t}` : `${t} ${i}`), S.format(e, s).trim();
    },
    enterDay(e, t) {
      this.$emit("enter-day", e, t);
    },
    enterMonth(e) {
      this.$emit("enter-month", e, this.month);
    },
    clearSelection() {
      this.$emit("clear-selection");
    },
    handleBookingClicked(e, t, i) {
      this.$emit("booking-clicked", e, t, i);
    },
    handleDayClick(e, t, i, s) {
      this.$emit("day-clicked", e, t, i, s);
    }
  }
}, wt = { class: "vhd__datepicker__month-name" }, Mt = ["onMouseenter"];
function It(e, t, i, s, n, a) {
  const o = j("week-row"), l = j("Day");
  return c(), d("div", {
    ref: "datepickerMonth",
    class: "vhd__datepicker__month",
    onMouseenter: t[0] || (t[0] = (h) => a.enterMonth(h))
  }, [
    y("p", wt, C(a.monthName), 1),
    ee(o, He(Ae(e.$props)), null, 16),
    (c(!0), d(R, null, te(i.month.days, (h, u) => (c(), d("div", {
      class: "vhd__square",
      key: `${i.dayKey}-${u}`,
      onMouseenter: (v) => a.enterDay(v, h)
    }, [
      ee(l, Ye({ ref_for: !0 }, e.$props, {
        belongsToThisMonth: h.belongsToThisMonth,
        date: h.date,
        onClearSelection: a.clearSelection,
        onBookingClicked: a.handleBookingClicked,
        onDayClicked: a.handleDayClick
      }), null, 16, ["belongsToThisMonth", "date", "onClearSelection", "onBookingClicked", "onDayClicked"])
    ], 40, Mt))), 128))
  ], 544);
}
const Ot = /* @__PURE__ */ A(bt, [["render", It]]), Ct = {
  props: {
    isOpen: {
      type: Boolean,
      required: !0
    },
    inputDate: {
      type: String,
      default: null
    },
    inputDateType: {
      type: String,
      default: "check-in"
    },
    singleDaySelection: {
      type: Boolean,
      default: !1
    },
    toggleDatepicker: {
      type: Function,
      required: !0
    },
    i18n: {
      type: Object,
      required: !0
    }
  },
  computed: {
    inputClass() {
      return {
        "vhd__datepicker__input--is-active": this.isOpen && this.inputDate == null,
        "vhd__datepicker__input--single-date": this.singleDaySelection
      };
    },
    tabIndex() {
      return this.inputDateType === "check-in" ? 0 : -1;
    }
  }
}, Tt = ["tabindex"];
function xt(e, t, i, s, n, a) {
  return c(), d("div", {
    class: _(["vhd__datepicker__input", a.inputClass]),
    onClick: t[0] || (t[0] = (...o) => i.toggleDatepicker && i.toggleDatepicker(...o)),
    onKeyup: t[1] || (t[1] = le($((...o) => i.toggleDatepicker && i.toggleDatepicker(...o), ["stop", "prevent"]), ["enter"])),
    "data-qa": "vhd__datepickerInput",
    tabindex: a.tabIndex
  }, C(i.inputDate ? i.inputDate : i.i18n[i.inputDateType]), 43, Tt);
}
const Pt = /* @__PURE__ */ A(Ct, [["render", xt]]), St = {
  night: "Night",
  nights: "Nights",
  week: "Week",
  weeks: "Weeks",
  "day-names": ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  "check-in": "Check-in",
  "check-out": "Check-out",
  "month-names": [
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
  ],
  tooltip: {
    halfDayCheckIn: "Available CheckIn",
    halfDayCheckOut: "Available CheckOut",
    saturdayToSaturday: "Only Saturday to Saturday",
    sundayToSunday: "Only Sunday to Sunday",
    minimumRequiredPeriod: "%{minNightInPeriod} %{night} minimum."
  }
}, Bt = {
  name: "HotelDatePicker",
  components: {
    Month: Ot,
    DateInput: Pt
  },
  props: {
    alwaysVisible: {
      type: Boolean,
      default: !1
    },
    bookings: {
      type: Array,
      default() {
        return [];
      }
    },
    closeDatepickerOnClickOutside: {
      type: Boolean,
      default: !0
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: !1
    },
    disabledDates: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledWeekDays: {
      type: Object,
      default() {
        return {};
      }
    },
    displayClearButton: {
      type: Boolean,
      default: !0
    },
    enableCheckout: {
      type: Boolean,
      default: !1
    },
    endDate: {
      type: [Date, String, Number],
      default: 1 / 0
    },
    endingDateValue: {
      type: [Date, null],
      default: null
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    },
    gridStyle: {
      type: Boolean,
      default: !0
    },
    halfDay: {
      type: Boolean,
      default: !0
    },
    hoveringTooltip: {
      default: !0,
      type: [Boolean, Function]
    },
    i18n: {
      type: Object,
      default: () => St
    },
    lastDateAvailable: {
      type: [Number, Date],
      default: 1 / 0
    },
    maxNights: {
      type: [Number, null],
      default: null
    },
    minNights: {
      type: Number,
      default: 1
    },
    periodDates: {
      type: Array,
      default() {
        return [];
      }
    },
    positionRight: {
      type: Boolean,
      default: !1
    },
    priceSymbol: {
      type: String,
      default: ""
    },
    showPrice: {
      type: Boolean,
      default: !1
    },
    showSingleMonth: {
      type: Boolean,
      default: !1
    },
    showYear: {
      type: Boolean,
      default: !0
    },
    singleDaySelection: {
      type: Boolean,
      default: !1
    },
    startDate: {
      type: [Date, String],
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    startingDateValue: {
      type: [Date, null],
      default: null
    },
    tooltipMessage: {
      type: [String, null],
      default: null
    },
    value: {
      type: Boolean,
      default: !0
    },
    yearBeforeMonth: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      activeMonthIndex: 0,
      checkIn: this.startingDateValue,
      checkIncheckOutHalfDay: {},
      checkInPeriod: {},
      checkOut: this.endingDateValue,
      hoveringPeriod: {},
      customTooltip: "",
      customTooltipHalfday: "",
      datepickerDayKey: 0,
      datepickerMonthKey: 0,
      datepickerWeekKey: 0,
      dynamicNightCounts: null,
      hash: Date.now(),
      hoveringDate: null,
      isTouchMove: !1,
      months: [],
      nextDisabledDate: null,
      nextPeriodDisableDates: [],
      open: !1,
      screenSize: null,
      showCustomTooltip: !1,
      sortedDisabledDates: null,
      xDown: null,
      xUp: null,
      yDown: null,
      yUp: null
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open;
      },
      set(e) {
        if (this.open = e, !this.isDesktop && !this.alwaysVisible) {
          const t = document.querySelector("body");
          e ? (t.style.overflow = "hidden", this.$nextTick(() => {
            if (this.$refs) {
              const { swiperWrapper: i } = this.$refs, s = this.$refs.datepickerMonth[0].offsetHeight, n = this.checkOut ? this.getMonthDiff(/* @__PURE__ */ new Date(), this.checkOut) : 0;
              i.scrollTop = n * s;
            }
          })) : t.style.overflow = "";
        }
        this.$emit("input", this.open);
      }
    },
    sortBookings() {
      return this.bookings.length > 0 ? [...this.bookings].sort((t, i) => {
        const s = t.checkInDate.split("/").reverse().join(), n = i.checkOutDate.split("/").reverse().join();
        return s < n ? -1 : s > n ? 1 : 0;
      }) : [];
    },
    duplicateBookingDates() {
      return this.baseHalfDayDates.filter(
        /* @__PURE__ */ ((e) => (t) => e.has(t) || !e.add(t))(/* @__PURE__ */ new Set())
      );
    },
    baseHalfDayDates() {
      return this.sortBookings.length > 0 ? this.sortBookings.map((t) => [t.checkInDate, t.checkOutDate]).reduce((t, i) => t.concat(i)) : this.disabledDates;
    },
    paginateMonths() {
      const e = [this.months[this.activeMonthIndex]];
      return this.showSingleMonth || this.alwaysVisible && !this.isDesktop || e.push(this.months[this.activeMonthIndex + 1]), e;
    },
    customTooltipMessage() {
      let e = "";
      return this.hoveringDate && (this.customTooltip || this.customTooltipHalfday) ? (this.customTooltip && this.customTooltipHalfday ? e = `${this.customTooltipHalfday}. <br/> ${this.customTooltip}` : this.customTooltipHalfday && !this.customTooltip ? e = this.customTooltipHalfday : e = this.customTooltip, e) : this.tooltipMessage;
    },
    sortedPeriodDates() {
      let e = [];
      if (this.periodDates) {
        const t = (i, s) => {
          const n = i.startAt.split("/").reverse().join() + i.endAt.split("/").reverse().join(), a = s.startAt.split("/").reverse().join() + s.endAt.split("/").reverse().join();
          return n < a ? -1 : n > a ? 1 : 0;
        };
        e = [...this.periodDates].sort(t);
      }
      return e;
    },
    sliceMonthMobile() {
      return this.activeMonthIndex >= 4 ? this.months.slice(this.activeMonthIndex - 3, this.activeMonthIndex + 1) : this.months.slice(0, 4);
    },
    isPreventedMaxMonth() {
      const e = this.getMonthDiff(this.startDate, this.lastDateAvailable);
      return this.activeMonthIndex >= e - 1;
    },
    minNightCount() {
      return this.dynamicNightCounts || this.minNights;
    },
    showClearSelectionButton() {
      return !!((this.checkIn || this.checkOut) && this.displayClearButton);
    },
    disabledWeekDaysObject() {
      const e = this.disabledDaysOfWeek.map((v) => v.toLowerCase()), t = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], i = t[0], s = t[1], n = t[2], a = t[3], o = t[4], l = t[5], h = t[6], u = {
        sunday: e.includes(i),
        monday: e.includes(s),
        tuesday: e.includes(n),
        wednesday: e.includes(a),
        thursday: e.includes(o),
        friday: e.includes(l),
        saturday: e.includes(h)
      };
      return Object.assign(u, this.disabledWeekDays);
    },
    disabledWeekDaysArray() {
      const e = this.disabledWeekDaysObject, t = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], i = function(n, a) {
        return n[1] ? t[a] : !1;
      };
      return Object.entries(e).map(i).filter((s) => s);
    },
    dayOptions() {
      return { ...this.$props, disabledWeekDaysObject: this.disabledWeekDaysObject };
    },
    numberOfMonths() {
      return this.showSingleMonth ? 1 : 2;
    },
    isDesktop() {
      return this.screenSize === "desktop";
    }
  },
  watch: {
    bookings() {
      this.createHalfDayDates(this.baseHalfDayDates), this.reRender();
    },
    checkIn(e) {
      this.$emit("check-in-changed", e), this.$emit("starting-date-changed", e), this.reRender();
    },
    checkOut(e) {
      this.$emit("ending-date-changed", e), this.checkOut !== null && (this.hoveringDate = null, this.nextDisabledDate = null, this.createHalfDayDates(this.baseHalfDayDates), this.reRender(), this.showCustomTooltip = !1, this.isOpen = !1), this.$emit("check-out-changed", e), this.reRender();
    },
    firstDayOfWeek(e) {
      this.$emit("first-day-of-week-changed", e);
      const t = new Date(this.startDate), i = this.numberOfMonths + this.activeMonthIndex;
      this.generateInitialMonths();
      for (let s = this.numberOfMonths; s < i; s++)
        this.createMonth(new Date(t.getFullYear(), t.getMonth() + s, 1));
      this.reRender();
    },
    startingDateValue(e) {
      this.setCheckIn(e);
    },
    endingDateValue(e) {
      this.setCheckOut(e);
    },
    singleDaySelection(e) {
      e ? this.setCheckOut(this.checkIn) : (this.setCheckIn(this.checkIn), this.setCheckOut(null)), this.reRender();
    },
    yearBeforeMonth() {
      this.reRender();
    },
    i18n() {
      this.configureI18n();
    },
    disabledDates() {
      this.nextDisabledDate = null, this.createHalfDayDates(this.baseHalfDayDates), this.reRender();
    }
  },
  created() {
    this.configureI18n(), this.generateInitialMonths();
  },
  mounted() {
    this.handleWindowResize(), window.addEventListener("resize", this.handleWindowResize), this.isDesktop ? (document.addEventListener("click", this.handleClickOutside, !1), document.addEventListener("keyup", this.escFunction, !1)) : (document.addEventListener("touchstart", this.handleTouchStart, !1), document.addEventListener("touchmove", this.handleTouchMove, !1), document.addEventListener("touchend", this.handleTouchEnd, !1)), this.onElementHeightChange(document.body, () => {
      this.emitHeighChangeEvent();
    }), this.createHalfDayDates(this.baseHalfDayDates);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize), this.isDesktop ? (document.removeEventListener("keyup", this.escFunction, !1), document.removeEventListener("click", this.handleClickOutside)) : (document.removeEventListener("touchstart", this.handleTouchStart), document.removeEventListener("touchmove", this.handleTouchMove), document.removeEventListener("touchend", this.handleTouchEnd));
  },
  methods: {
    ...xe,
    transformDisabledWeekDays() {
    },
    configureI18n() {
      S.setGlobalDateI18n({
        dayNames: this.i18n["day-names"],
        dayNamesShort: this.shortenString(this.i18n["day-names"], 3),
        monthNames: this.i18n["month-names"],
        monthNamesShort: this.shortenString(this.i18n["month-names"], 3),
        amPm: ["am", "pm"],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(e) {
          return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 !== 10) * e % 10];
        }
      });
    },
    generateInitialMonths() {
      if (this.months = [], this.checkIn && (this.getMonthDiff(this.getNextMonth(new Date(this.startDate)), this.checkIn) > 0 || this.getMonthDiff(this.startDate, this.checkIn) > 0)) {
        this.createMonth(new Date(this.startDate));
        const e = this.getMonthDiff(this.startDate, this.checkIn), t = this.showSingleMonth ? e - 1 : e;
        let i = new Date(this.startDate);
        for (let s = 0; s <= t; s++) {
          const n = this.getNextMonth(i);
          this.createMonth(n), i = n;
        }
        this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0 && (this.createMonth(this.getNextMonth(i)), this.activeMonthIndex = 1), this.activeMonthIndex += e;
      } else
        this.createMonth(new Date(this.startDate)), this.showSingleMonth || this.createMonth(this.getNextMonth(new Date(this.startDate)));
    },
    handleBookingClicked(e, t, i) {
      this.$emit("booking-clicked", e, t, i), this.$emit("bookingClicked", e, t, i);
    },
    escFunction(e) {
      e.keyCode === 27 && this.isOpen && this.checkIn && this.clearSelection();
    },
    formatDate(e) {
      return this.dateFormater(e, this.format);
    },
    cleanString(e) {
      return e.replace(/\<br\/>/g, "");
    },
    dateIsInCheckInCheckOut(e) {
      const t = this.dateFormater(e);
      let i = null;
      return this.sortedPeriodDates.forEach((s) => {
        s.endAt !== t && (s.startAt === t || this.validateDateBetweenTwoDates(s.startAt, s.endAt, t)) && (i = s);
      }), i;
    },
    dayIsDisabled(e) {
      return !!(this.checkIn && !this.checkOut && !this.isDateLessOrEquals(e, this.nextDisabledDate) && this.nextDisabledDate !== 1 / 0 || this.checkIn && !this.checkOut && this.isDateLessOrEquals(e, this.checkIn));
    },
    enterMonth(e, t) {
      this.$emit("enter-month", e, t);
    },
    enterDay(e, t) {
      const i = this.dateFormater(t.date), s = Object.keys(this.checkIncheckOutHalfDay), n = this.disabledDates.filter((a) => !s.includes(a)).includes(i);
      !this.dayIsDisabled(t.date) && t.belongsToThisMonth && !n && this.setCustomTooltipOnHover(t), this.hoveringDate = this.singleDaySelection ? null : t.date, this.$emit("enter-day", e, t);
    },
    setCurrentPeriod(e, t) {
      let i = {};
      this.sortedPeriodDates.length > 0 ? (this.sortedPeriodDates.forEach((s) => {
        (t === "click" && (s.startAt === this.dateFormater(e) || s.endAt !== this.dateFormater(e) && this.validateDateBetweenTwoDates(s.startAt, s.endAt, e)) || t === "hover" && (s.startAt === this.dateFormater(e) || this.validateDateBetweenTwoDates(s.startAt, s.endAt, e))) && (i = s);
      }), Object.keys(i).length > 0 ? this.hoveringPeriod = i : this.minNightCount > 0 && this.checkIn ? this.hoveringPeriod = {
        periodType: "nightly",
        minimumDuration: this.minNightCount,
        startAt: this.checkIn,
        endAt: this.addDays(this.checkIn, this.minNightCount)
      } : this.hoveringPeriod = {
        periodType: "nightly",
        minimumDuration: this.minNightCount,
        startAt: this.checkIn,
        endAt: this.addDays(this.checkIn, this.minNightCount)
      }) : this.minNightCount > 0 && (this.hoveringPeriod = {
        periodType: "nightly",
        minimumDuration: this.minNightCount,
        startAt: this.checkIn,
        endAt: this.addDays(this.checkIn, this.minNightCount)
      });
    },
    setCustomTooltipOnHover(e) {
      const { date: t } = e;
      if (this.hoveringDate = t, this.showCustomTooltip && (this.showCustomTooltip = !1), this.setCurrentPeriod(t, "hover"), Object.keys(this.hoveringPeriod).length > 0)
        if (this.hoveringPeriod.periodType === "weekly_by_saturday") {
          const s = this.i18n.tooltip.saturdayToSaturday;
          this.showTooltipWeeklyOnHover(t, 6, s);
        } else if (this.hoveringPeriod.periodType === "weekly_by_sunday") {
          const s = this.i18n.tooltip.sundayToSunday;
          this.showTooltipWeeklyOnHover(t, 0, s);
        } else this.hoveringPeriod.periodType === "nightly" ? this.showTooltipNightlyOnHover(t) : (this.showCustomTooltip = !1, this.customTooltip = "");
      else
        this.hoveringPeriod = {};
      this.halfDay && this.createHalfDayTooltip(e.date);
    },
    handleDayClick(e, t, i, s) {
      if (this.nextPeriodDisableDates = [], s) {
        this.clearSelection(), this.$nextTick(() => {
          this.handleDayClick(e, t, i, !1);
        });
        return;
      }
      let n = (this.maxNights ? this.addDays(t, this.maxNights + 1) : null) || this.getNextDate(this.sortedDisabledDates, t) || this.nextDateByDayOfWeekArray(this.disabledWeekDaysArray, t, this.i18n) || this.nextBookingDate(t) || 1 / 0;
      this.dynamicNightCounts = null, this.enableCheckout && (n = 1 / 0), this.checkIn == null && !this.singleDaySelection ? (this.checkIn = t, this.$emit("check-in-selected", t), this.setMinimumDuration(t)) : this.singleDaySelection ? (this.checkIn = t, this.$emit("check-in-selected", t), this.checkOut = t) : this.checkIn !== null && this.checkOut == null && this.isDateLessOrEquals(t, this.checkIn) ? (this.checkIn = t, this.$emit("check-in-selected", t)) : this.checkIn !== null && this.checkOut == null ? (this.checkOut = t, this.$emit("period-selected", e, this.checkIn, this.checkOut), this.$emit("periodSelected", e, this.checkIn, this.checkOut)) : (this.checkOut = null, this.checkIn = t, this.$emit("check-in-selected", t), this.setMinimumDuration(t)), this.checkIn && !this.checkOut && (this.setCurrentPeriod(t, "click"), this.checkInPeriod = this.hoveringPeriod, this.setCustomTooltipOnClick()), this.nextDisabledDate = n, this.hoveringDate = null, this.hoveringDate = t, this.$emit("day-clicked", t, i, n), this.$emit("dayClicked", t, i, n);
    },
    nextBookingDate(e) {
      let t = 1 / 0;
      if (this.sortBookings.length > 0) {
        const i = this.dateFormater(this.addDays(e, 1)), s = this.sortBookings.find(
          (n) => this.validateDateBetweenDate(n.checkInDate, i) || this.validateDateBetweenTwoDates(n.checkInDate, n.checkOutDate, i)
        );
        t = s ? s.checkInDate : 1 / 0;
      }
      return t;
    },
    setCustomTooltipOnClick() {
      if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes("weekly")) {
        const e = this.addDays(this.checkIn, this.minNightCount);
        this.checkInPeriod.nextValidDate = e, this.showTooltipWeeklyOnClick();
      } else this.checkInPeriod.periodType === "nightly" && this.showTooltipNightlyOnClick();
    },
    showTooltipWeeklyOnHover(e, t, i) {
      const s = this.countDays(this.checkIn, e), n = e.getDay() !== t, a = this.checkIn && this.checkOut, o = !this.checkIn && n, l = this.checkIn && !this.checkOut, h = !this.validateDateBetweenTwoDates(this.checkIn, this.checkOut, e), u = this.hoveringPeriod.nextValidDate && this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.hoveringDate) && this.dateFormater(this.checkIn) !== this.dateFormater(this.hoveringDate) && this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.dateFormater(this.hoveringDate), v = Object.keys(this.checkIncheckOutHalfDay).length > 0 && this.checkIncheckOutHalfDay[this.dateFormater(e)] && this.checkIncheckOutHalfDay[this.dateFormater(e)].checkIn;
      if (o ? (this.showCustomTooltip = !0, this.customTooltip = i) : (this.showCustomTooltip = !1, this.customTooltip = ""), l) {
        const q = this.addDays(this.checkIn, this.minNightCount);
        if (this.getDayDiff(e, q) <= 0 && n)
          this.showCustomTooltip = !0, this.customTooltip = i;
        else if (n || u)
          if (this.checkInPeriod && this.checkInPeriod.periodType === "nightly")
            this.showCustomTooltip = !1, this.customTooltip = "";
          else {
            const Y = this.pluralize(this.minNightCount, "week");
            this.showCustomTooltip = !0, this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
              minNightInPeriod: this.minNightCount / 7,
              night: Y
            });
          }
        else v ? this.checkInPeriod.periodType !== "nightly" ? this.customTooltip = `${s / 7} ${this.pluralize(
          this.minNightCount,
          "week"
        )}` : this.checkInPeriod.periodType === "nightly" && (this.customTooltip = `${s} ${s !== 1 ? this.i18n.nights : this.i18n.night}`) : (this.showCustomTooltip = !1, this.customTooltip = "");
      } else a && n && h && (this.showCustomTooltip = !0, this.customTooltip = i);
    },
    showTooltipWeeklyOnClick() {
      const e = this.pluralize(this.minNightCount, "week");
      this.showCustomTooltip = !0, this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
        minNightInPeriod: this.minNightCount / 7,
        night: e
      });
    },
    showTooltipNightlyOnHover(e) {
      if (this.checkIn && !this.checkOut) {
        const t = this.addDays(this.checkIn, this.minNightCount), i = this.getDayDiff(e, t) <= 0, s = this.countDays(this.checkIn, e), n = this.pluralize(Math.max(this.minNightCount, s));
        if (i)
          this.customTooltip = `${s} ${n}`;
        else {
          const a = this.hoveringPeriod.minimumDuration;
          this.showCustomTooltip = !0, this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
            minNightInPeriod: a,
            night: n
          });
        }
      } else
        this.customTooltip = "";
    },
    showTooltipNightlyOnClick() {
      const e = this.hoveringPeriod.minimumDuration, t = this.pluralize(this.minNightCount);
      this.showCustomTooltip = !0, this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, { minNightInPeriod: e, night: t });
    },
    createHalfDayTooltip(e) {
      this.customTooltipHalfday = "";
      const t = this.dateFormater(e);
      this.checkIncheckOutHalfDay[t] && (this.showCustomTooltip = !0, this.checkIncheckOutHalfDay[t].checkIn ? this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckOut : this.checkIncheckOutHalfDay[t].checkOut && (this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckIn));
    },
    completeTrad(e, t) {
      let i = e;
      return Object.keys(t).forEach((n) => {
        i = i.replace(`%{${n}}`, t[n]);
      }), i;
    },
    handleClickOutside(e) {
      if (!this.closeDatepickerOnClickOutside)
        return;
      const t = this.$refs[`DatePicker-${this.hash}`];
      t && (t.contains(e.target) || this.hideDatepicker());
    },
    handleWindowResize() {
      return window.innerWidth < 480 ? this.screenSize = "smartphone" : window.innerWidth >= 480 && window.innerWidth < 768 ? this.screenSize = "tablet" : window.innerWidth >= 768 && (this.screenSize = "desktop"), this.screenSize;
    },
    onElementHeightChange(e, t) {
      let i = e.clientHeight, s = i;
      const n = e;
      (function a() {
        s = e.clientHeight, i !== s && t(), i = s, n.onElementHeightChangeTimer && clearTimeout(e.onElementHeightChangeTimer), n.onElementHeightChangeTimer = setTimeout(a, 1e3);
      })();
    },
    emitHeighChangeEvent() {
      this.$emit("height-changed");
    },
    reRender() {
      this.datepickerDayKey += 1, this.datepickerMonthKey += 1, this.datepickerWeekKey += 1;
    },
    clearSelection() {
      this.hoveringDate = null, this.checkIn = null, this.checkOut = null, this.nextDisabledDate = null, this.nextPeriodDisableDates = [], this.showCustomTooltip = !1, this.hoveringPeriod = {}, this.checkInPeriod = {}, this.createHalfDayDates(this.baseHalfDayDates), this.reRender(), this.$emit("clear-selection");
    },
    closeMobileDatepicker() {
      this.hideDatepicker();
    },
    hideDatepicker() {
      this.isOpen = !1;
    },
    showDatepicker() {
      this.isOpen = !0;
    },
    toggleDatepicker() {
      this[this.isOpen ? "hideDatepicker" : "showDatepicker"]();
    },
    clearCheckIn() {
      this.checkIn && !this.checkOut && this.clearSelection();
    },
    clickOutside() {
      this.closeDatepickerOnClickOutside && this.hideDatepicker();
    },
    setMinimumDuration(e) {
      if (this.sortedPeriodDates) {
        let t = null, i = null;
        const s = this.dateFormater(e);
        if (this.sortedPeriodDates.forEach((n) => {
          n.endAt !== s && (n.startAt === s || this.validateDateBetweenTwoDates(n.startAt, n.endAt, e)) && (i = n);
        }), i) {
          if (this.sortedPeriodDates.forEach((n) => {
            n.startAt === i.endAt && (t = n);
          }), this.checkIn && !this.checkOut && t) {
            const n = this.addDays(t.startAt, t.minimumDuration - 1), a = this.addDays(t.startAt, 1), o = this.getDaysArray(a, n);
            this.nextPeriodDisableDates = o;
          }
          if (i.periodType === "nightly" && i.endAt !== e && (this.dynamicNightCounts = i.minimumDuration), i.periodType === "weekly_by_saturday" || i.periodType === "weekly_by_sunday") {
            const n = i.minimumDuration * 7;
            this.dynamicNightCounts = n;
          }
        } else
          this.dynamicNightCounts = 0;
      }
    },
    renderPreviousMonth() {
      if (this.activeMonthIndex >= 1) {
        const e = this.months[this.activeMonthIndex].days.filter(
          (i) => i.belongsToThisMonth === !0
        ), t = this.getPreviousMonth(e[0].date);
        this.activeMonthIndex--, this.$emit("previous-month-rendered", t);
      }
    },
    renderNextMonth: Ve(function() {
      if (!this.showSingleMonth && this.activeMonthIndex < this.months.length - 2 || this.showSingleMonth && this.activeMonthIndex < this.months.length - 1) {
        this.activeMonthIndex++;
        return;
      }
      let t;
      if (!this.isDesktop || this.showSingleMonth ? t = this.months[this.months.length - 1].days.filter((s) => s.belongsToThisMonth === !0) : t = this.months[this.activeMonthIndex + 1].days.filter(
        (s) => s.belongsToThisMonth === !0
      ), this.endDate !== 1 / 0 && S.format(t[0].date, "YYYYMM") === S.format(new Date(this.endDate), "YYYYMM"))
        return;
      const i = this.getNextMonth(t[0].date);
      this.createMonth(i), this.activeMonthIndex++, this.$emit("next-month-rendered", i);
    }, 350),
    setCheckIn(e) {
      this.checkIn = e;
    },
    setCheckOut(e) {
      this.checkOut = e;
    },
    createMonth(e) {
      const t = this.getFirstDay(e, this.firstDayOfWeek), i = {
        days: []
      };
      for (let s = 0; s < 42; s++)
        i.days.push({
          date: this.addDays(t, s),
          belongsToThisMonth: this.addDays(t, s).getMonth() === e.getMonth()
        });
      this.months.push(i);
    },
    createHalfDayDates(e) {
      let t = [];
      const i = {}, s = [...e];
      if (s.sort((n, a) => {
        const o = n.split("/").reverse().join(), l = a.split("/").reverse().join();
        return o < l ? -1 : o > l ? 1 : 0;
      }), this.sortBookings.length === 0)
        for (let n = 0; n < s.length; n++) {
          const a = s[n];
          if (this.halfDay) {
            const o = s[n + 1];
            n === 0 && (i[a] = {
              checkIn: !0
            }), !i[a] && s[n + 1] && this.getDayDiff(a, o) > 1 && (i[a] = {
              checkOut: !0
            }, i[o] = {
              checkIn: !0
            }), n === s.length - 1 && (i[s[s.length - 1]] = {
              checkOut: !0
            });
          }
          t[n] = s[n];
        }
      else
        this.sortBookings.forEach((n) => {
          i[n.checkInDate] = {
            checkIn: !0
          }, i[n.checkOutDate] = {
            checkOut: !0
          };
        });
      if (this.halfDay) {
        const n = Object.keys(i);
        t = t.filter((a) => !n.includes(a));
      }
      t = t.map((n) => new Date(n)), this.sortedDisabledDates = t.sort((n, a) => n - a), this.checkIncheckOutHalfDay = i, this.$emit("handle-checkin-checkout-half-day", this.checkIncheckOutHalfDay), this.$emit("handleCheckinCheckoutHalfDay", this.checkIncheckOutHalfDay);
    }
  }
}, Nt = { class: "vhd__hide-on-desktop" }, Ht = {
  key: 0,
  class: "vhd__datepicker__inner"
}, At = ["tabindex", "disabled"], Yt = ["disabled", "tabindex"], Et = {
  key: 0,
  class: "vhd__datepicker__tooltip--mobile"
}, Ft = {
  class: "vhd__datepicker__months",
  ref: "swiperWrapper"
};
function Wt(e, t, i, s, n, a) {
  const o = j("date-input"), l = j("Month");
  return i.value ? (c(), d("div", {
    key: 0,
    class: _(["vhd__datepicker__wrapper", {
      "vhd__datepicker__wrapper--grid": i.gridStyle,
      "vhd__datepicker__wrapper--booking": i.bookings.length > 0,
      vhd__datepicker__fullview: i.alwaysVisible
    }]),
    ref: `DatePicker-${n.hash}`
  }, [
    a.isOpen ? (c(), d("div", {
      key: 0,
      class: "vhd__datepicker__close-button vhd__hide-on-desktop",
      onClick: t[0] || (t[0] = (...h) => a.closeMobileDatepicker && a.closeMobileDatepicker(...h))
    }, t[7] || (t[7] = [
      y("i", null, "+", -1)
    ]))) : m("", !0),
    y("div", {
      class: _(["vhd__datepicker__dummy-wrapper", { "vhd__datepicker__dummy-wrapper--is-active": a.isOpen }])
    }, [
      ee(o, {
        i18n: i.i18n,
        "input-date": a.formatDate(n.checkIn),
        "input-date-type": "check-in",
        "is-open": a.isOpen,
        "toggle-datepicker": a.toggleDatepicker,
        "single-day-selection": i.singleDaySelection
      }, null, 8, ["i18n", "input-date", "is-open", "toggle-datepicker", "single-day-selection"]),
      i.singleDaySelection ? m("", !0) : (c(), Q(o, {
        key: 0,
        i18n: i.i18n,
        "input-date": a.formatDate(n.checkOut),
        "input-date-type": "check-out",
        "is-open": a.isOpen,
        "toggle-datepicker": a.toggleDatepicker,
        "single-day-selection": i.singleDaySelection
      }, null, 8, ["i18n", "input-date", "is-open", "toggle-datepicker", "single-day-selection"]))
    ], 2),
    Ee(y("div", {
      class: "vhd__datepicker__clear-button",
      tabindex: "0",
      onClick: t[1] || (t[1] = (...h) => a.clearSelection && a.clearSelection(...h))
    }, t[8] || (t[8] = [
      y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 68 68",
        role: "img",
        "aria-label": "x"
      }, [
        y("title", null, "x"),
        y("path", {
          d: "M6.5 6.5l55 55m0-55l-55 55",
          stroke: "#000",
          fill: "none",
          "stroke-linecap": "square"
        })
      ], -1)
    ]), 512), [
      [Fe, a.showClearSelectionButton]
    ]),
    y("div", {
      class: _(["vhd__datepicker", {
        "vhd__datepicker--open": a.isOpen && !i.alwaysVisible,
        "vhd__datepicker--closed": !a.isOpen && !i.alwaysVisible,
        "vhd__datepicker--right": i.positionRight
      }])
    }, [
      y("div", Nt, [
        a.isOpen ? (c(), d("div", {
          key: 0,
          class: _(["vhd__datepicker__dummy-wrapper vhd__datepicker__dummy-wrapper--no-border", { "vhd__datepicker__dummy-wrapper--is-active": a.isOpen }]),
          onClick: t[2] || (t[2] = (...h) => a.toggleDatepicker && a.toggleDatepicker(...h))
        }, [
          y("div", {
            class: _(["vhd__datepicker__input", {
              "vhd__datepicker__dummy-input--is-active": a.isOpen && n.checkIn == null
            }]),
            tabindex: "0",
            type: "button"
          }, C(`${n.checkIn ? a.formatDate(n.checkIn) : i.i18n["check-in"]}`), 3),
          y("div", {
            class: _(["vhd__datepicker__input", {
              "vhd__datepicker__dummy-input--is-active": a.isOpen && n.checkOut == null && n.checkIn !== null
            }]),
            tabindex: "0",
            type: "button"
          }, C(`${n.checkOut ? a.formatDate(n.checkOut) : i.i18n["check-out"]}`), 3)
        ], 2)) : m("", !0)
      ]),
      a.isOpen || i.alwaysVisible ? (c(), d("div", Ht, [
        y("div", {
          class: _({
            vhd__datepicker__header: a.isDesktop,
            "vhd__datepicker__header-mobile": !a.isDesktop
          })
        }, [
          y("button", {
            type: "button",
            class: "vhd__datepicker__month-button vhd__datepicker__month-button--prev",
            onClick: t[3] || (t[3] = (...h) => a.renderPreviousMonth && a.renderPreviousMonth(...h)),
            onKeyup: t[4] || (t[4] = le($((...h) => a.renderPreviousMonth && a.renderPreviousMonth(...h), ["stop", "prevent"]), ["enter"])),
            tabindex: a.isOpen ? 0 : -1,
            disabled: n.activeMonthIndex === 0
          }, null, 40, At),
          y("button", {
            type: "button",
            class: "vhd__datepicker__month-button vhd__datepicker__month-button--next",
            onClick: t[5] || (t[5] = (...h) => a.renderNextMonth && a.renderNextMonth(...h)),
            onKeyup: t[6] || (t[6] = le($((...h) => a.renderNextMonth && a.renderNextMonth(...h), ["stop", "prevent"]), ["enter"])),
            disabled: a.isPreventedMaxMonth,
            tabindex: a.isOpen ? 0 : -1
          }, null, 40, Yt)
        ], 2),
        a.isDesktop || i.alwaysVisible ? (c(), d("div", {
          key: 0,
          class: _(["vhd__datepicker__months", { "vhd__datepicker__months--full": i.showSingleMonth }])
        }, [
          (c(!0), d(R, null, te(a.paginateMonths, (h, u) => (c(), Q(l, {
            key: `${n.datepickerMonthKey}-${u}-desktop`,
            ref_for: !0,
            ref: "datepickerMonth",
            month: h,
            dayKey: n.datepickerDayKey,
            weekKey: n.datepickerWeekKey,
            isDesktop: a.isDesktop,
            firstDayOfWeek: i.firstDayOfWeek,
            showYear: i.showYear,
            yearBeforeMonth: i.yearBeforeMonth,
            activeMonthIndex: n.activeMonthIndex,
            bookings: a.sortBookings,
            checkIn: n.checkIn,
            checkIncheckOutHalfDay: n.checkIncheckOutHalfDay,
            checkInPeriod: n.checkInPeriod,
            checkOut: n.checkOut,
            disableCheckoutOnCheckin: i.disableCheckoutOnCheckin,
            duplicateBookingDates: a.duplicateBookingDates,
            hoveringDate: n.hoveringDate,
            hoveringPeriod: n.hoveringPeriod,
            i18n: i.i18n,
            isOpen: a.isOpen,
            minNightCount: a.minNightCount,
            nextDisabledDate: n.nextDisabledDate,
            nextPeriodDisableDates: n.nextPeriodDisableDates,
            options: a.dayOptions,
            priceSymbol: i.priceSymbol,
            screenSize: n.screenSize,
            showCustomTooltip: n.showCustomTooltip,
            showPrice: i.showPrice,
            disabledDates: i.disabledDates,
            periodDates: i.periodDates,
            sortedDisabledDates: n.sortedDisabledDates,
            sortedPeriodDates: a.sortedPeriodDates,
            tooltipMessage: a.customTooltipMessage,
            onClearSelection: a.clearSelection,
            onBookingClicked: a.handleBookingClicked,
            onDayClicked: a.handleDayClick,
            onEnterDay: a.enterDay,
            onEnterMonth: a.enterMonth
          }, null, 8, ["month", "dayKey", "weekKey", "isDesktop", "firstDayOfWeek", "showYear", "yearBeforeMonth", "activeMonthIndex", "bookings", "checkIn", "checkIncheckOutHalfDay", "checkInPeriod", "checkOut", "disableCheckoutOnCheckin", "duplicateBookingDates", "hoveringDate", "hoveringPeriod", "i18n", "isOpen", "minNightCount", "nextDisabledDate", "nextPeriodDisableDates", "options", "priceSymbol", "screenSize", "showCustomTooltip", "showPrice", "disabledDates", "periodDates", "sortedDisabledDates", "sortedPeriodDates", "tooltipMessage", "onClearSelection", "onBookingClicked", "onDayClicked", "onEnterDay", "onEnterMonth"]))), 128))
        ], 2)) : m("", !0),
        !a.isDesktop && a.isOpen && !i.alwaysVisible ? (c(), d("div", {
          key: 1,
          class: _(["vhd__datepicker__months-wrapper", { "vhd__show-tooltip": n.showCustomTooltip && i.hoveringTooltip }])
        }, [
          i.hoveringTooltip ? (c(), d("div", Et, [
            a.customTooltipMessage ? (c(), d(R, { key: 0 }, [
              je(C(a.cleanString(a.customTooltipMessage)), 1)
            ], 64)) : m("", !0)
          ])) : m("", !0),
          y("div", Ft, [
            (c(!0), d(R, null, te(a.paginateMonths, (h, u) => (c(), Q(l, {
              key: `${n.datepickerMonthKey}-${u}-desktop`,
              ref_for: !0,
              ref: "datepickerMonth",
              month: h,
              dayKey: n.datepickerDayKey,
              weekKey: n.datepickerWeekKey,
              isDesktop: a.isDesktop,
              firstDayOfWeek: i.firstDayOfWeek,
              showYear: i.showYear,
              yearBeforeMonth: i.yearBeforeMonth,
              activeMonthIndex: n.activeMonthIndex,
              bookings: a.sortBookings,
              checkIn: n.checkIn,
              checkIncheckOutHalfDay: n.checkIncheckOutHalfDay,
              checkInPeriod: n.checkInPeriod,
              checkOut: n.checkOut,
              disableCheckoutOnCheckin: i.disableCheckoutOnCheckin,
              duplicateBookingDates: a.duplicateBookingDates,
              hoveringDate: n.hoveringDate,
              hoveringPeriod: n.hoveringPeriod,
              i18n: i.i18n,
              isOpen: a.isOpen,
              minNightCount: a.minNightCount,
              nextDisabledDate: n.nextDisabledDate,
              nextPeriodDisableDates: n.nextPeriodDisableDates,
              options: a.dayOptions,
              priceSymbol: i.priceSymbol,
              screenSize: n.screenSize,
              showCustomTooltip: !1,
              showPrice: i.showPrice,
              sortedDisabledDates: n.sortedDisabledDates,
              sortedPeriodDates: a.sortedPeriodDates,
              tooltipMessage: a.customTooltipMessage,
              onClearSelection: a.clearSelection,
              onBookingClicked: a.handleBookingClicked,
              onDayClicked: a.handleDayClick,
              onEnterDay: a.enterDay,
              onEnterMonth: a.enterMonth
            }, null, 8, ["month", "dayKey", "weekKey", "isDesktop", "firstDayOfWeek", "showYear", "yearBeforeMonth", "activeMonthIndex", "bookings", "checkIn", "checkIncheckOutHalfDay", "checkInPeriod", "checkOut", "disableCheckoutOnCheckin", "duplicateBookingDates", "hoveringDate", "hoveringPeriod", "i18n", "isOpen", "minNightCount", "nextDisabledDate", "nextPeriodDisableDates", "options", "priceSymbol", "screenSize", "showPrice", "sortedDisabledDates", "sortedPeriodDates", "tooltipMessage", "onClearSelection", "onBookingClicked", "onDayClicked", "onEnterDay", "onEnterMonth"]))), 128))
          ], 512)
        ], 2)) : m("", !0)
      ])) : m("", !0),
      We(e.$slots, "content")
    ], 2)
  ], 2)) : m("", !0);
}
const qt = /* @__PURE__ */ A(Bt, [["render", Wt]]), Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lt as css,
  qt as default
};

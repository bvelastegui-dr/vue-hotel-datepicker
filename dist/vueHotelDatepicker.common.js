/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 47:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var isCallable = __webpack_require__(9565);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 154:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var SetHelpers = __webpack_require__(6298);
var clone = __webpack_require__(6382);
var getSetRecord = __webpack_require__(2165);
var iterateSimple = __webpack_require__(6243);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ 170:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__(1978);
var SetHelpers = __webpack_require__(6298);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ 214:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(3059);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 232:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(9084);
var enumBugKeys = __webpack_require__(8031);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 234:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var union = __webpack_require__(676);
var setMethodAcceptSetLike = __webpack_require__(9340);

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),

/***/ 312:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(5756);
var aCallable = __webpack_require__(2786);
var NATIVE_BIND = __webpack_require__(6480);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 435:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var isSupersetOf = __webpack_require__(9207);
var setMethodAcceptSetLike = __webpack_require__(9340);

var INCORRECT = !setMethodAcceptSetLike('isSupersetOf', function (result) {
  return !result;
});

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ 460:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var isSubsetOf = __webpack_require__(3766);
var setMethodAcceptSetLike = __webpack_require__(9340);

var INCORRECT = !setMethodAcceptSetLike('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ 499:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var iterate = __webpack_require__(4340);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true }, {
  some: function some(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 553:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var IE8_DOM_DEFINE = __webpack_require__(1141);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8758);
var anObject = __webpack_require__(6415);
var toPropertyKey = __webpack_require__(6641);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 676:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var add = (__webpack_require__(6298).add);
var clone = __webpack_require__(6382);
var getSetRecord = __webpack_require__(2165);
var iterateSimple = __webpack_require__(6243);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 872:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(9084);
var enumBugKeys = __webpack_require__(8031);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 876:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var fails = __webpack_require__(5735);
var intersection = __webpack_require__(9814);
var setMethodAcceptSetLike = __webpack_require__(9340);

var INCORRECT = !setMethodAcceptSetLike('intersection', function (result) {
  return result.size === 2 && result.has(1) && result.has(2);
}) || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ 877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var iterateSimple = __webpack_require__(6243);
var SetHelpers = __webpack_require__(6298);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ 953:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(1853);
var toAbsoluteIndex = __webpack_require__(4738);
var lengthOfArrayLike = __webpack_require__(2526);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 1141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var fails = __webpack_require__(5735);
var createElement = __webpack_require__(7247);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 1201:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 1468:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var iterate = __webpack_require__(4340);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$({ target: 'Iterator', proto: true, real: true }, {
  find: function find(predicate) {
    anObject(this);
    aCallable(predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ 1853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8103);
var requireObjectCoercible = __webpack_require__(5262);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1954:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var difference = __webpack_require__(7240);
var setMethodAcceptSetLike = __webpack_require__(9340);

var INCORRECT = !setMethodAcceptSetLike('difference', function (result) {
  return result.size === 0;
});

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  difference: difference
});


/***/ }),

/***/ 1978:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var aCallable = __webpack_require__(2786);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 1986:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var isCallable = __webpack_require__(9565);
var store = __webpack_require__(4373);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 2031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(7137);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 2165:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var call = __webpack_require__(6597);
var toIntegerOrInfinity = __webpack_require__(3059);
var getIteratorDirect = __webpack_require__(4479);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ 2189:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(47);
var isCallable = __webpack_require__(9565);
var isPrototypeOf = __webpack_require__(7137);
var USE_SYMBOL_AS_UID = __webpack_require__(7000);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 2227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(5364);
var isCallable = __webpack_require__(9565);
var classofRaw = __webpack_require__(8392);
var wellKnownSymbol = __webpack_require__(7835);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 2240:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(8392);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 2245:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 2331:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var call = __webpack_require__(6597);
var propertyIsEnumerableModule = __webpack_require__(5517);
var createPropertyDescriptor = __webpack_require__(5644);
var toIndexedObject = __webpack_require__(1853);
var toPropertyKey = __webpack_require__(6641);
var hasOwn = __webpack_require__(4265);
var IE8_DOM_DEFINE = __webpack_require__(1141);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 2369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5735);
var isCallable = __webpack_require__(9565);
var isObject = __webpack_require__(8666);
var create = __webpack_require__(6448);
var getPrototypeOf = __webpack_require__(7403);
var defineBuiltIn = __webpack_require__(5088);
var wellKnownSymbol = __webpack_require__(7835);
var IS_PURE = __webpack_require__(8867);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 2465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);
var createIteratorProxy = __webpack_require__(8462);
var callWithSafeIterationClosing = __webpack_require__(2679);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


/***/ }),

/***/ 2526:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(214);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 2597:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var isDisjointFrom = __webpack_require__(6041);
var setMethodAcceptSetLike = __webpack_require__(9340);

var INCORRECT = !setMethodAcceptSetLike('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ 2669:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 2679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(6415);
var iteratorClose = __webpack_require__(9515);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 2786:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(9565);
var tryToString = __webpack_require__(4095);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 2798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var getOwnPropertyDescriptor = (__webpack_require__(2331).f);
var createNonEnumerableProperty = __webpack_require__(9123);
var defineBuiltIn = __webpack_require__(5088);
var defineGlobalProperty = __webpack_require__(1201);
var copyConstructorProperties = __webpack_require__(3876);
var isForced = __webpack_require__(8292);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 3059:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(7821);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 3080:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var symmetricDifference = __webpack_require__(154);
var setMethodAcceptSetLike = __webpack_require__(9340);

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ 3455:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(4633);
var uid = __webpack_require__(9544);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 3766:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var size = __webpack_require__(170);
var iterate = __webpack_require__(877);
var getSetRecord = __webpack_require__(2165);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ 3876:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(4265);
var ownKeys = __webpack_require__(8927);
var getOwnPropertyDescriptorModule = __webpack_require__(2331);
var definePropertyModule = __webpack_require__(553);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 4095:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 4265:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var toObject = __webpack_require__(7085);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 4340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(312);
var call = __webpack_require__(6597);
var anObject = __webpack_require__(6415);
var tryToString = __webpack_require__(4095);
var isArrayIteratorMethod = __webpack_require__(5289);
var lengthOfArrayLike = __webpack_require__(2526);
var isPrototypeOf = __webpack_require__(7137);
var getIterator = __webpack_require__(6601);
var getIteratorMethod = __webpack_require__(4715);
var iteratorClose = __webpack_require__(9515);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 4373:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(8867);
var globalThis = __webpack_require__(6024);
var defineGlobalProperty = __webpack_require__(1201);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.40.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 4479:
/***/ (function(module) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 4520:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(6480);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 4633:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(4373);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 4678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var isCallable = __webpack_require__(9565);
var isObject = __webpack_require__(8666);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 4715:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(2227);
var getMethod = __webpack_require__(9654);
var isNullOrUndefined = __webpack_require__(7597);
var Iterators = __webpack_require__(2245);
var wellKnownSymbol = __webpack_require__(7835);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 4738:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(3059);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 4883:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var fails = __webpack_require__(5735);
var isCallable = __webpack_require__(9565);
var hasOwn = __webpack_require__(4265);
var DESCRIPTORS = __webpack_require__(6724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6470).CONFIGURABLE);
var inspectSource = __webpack_require__(1986);
var InternalStateModule = __webpack_require__(7173);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 5088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(9565);
var definePropertyModule = __webpack_require__(553);
var makeBuiltIn = __webpack_require__(4883);
var defineGlobalProperty = __webpack_require__(1201);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 5145:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8758);
var definePropertyModule = __webpack_require__(553);
var anObject = __webpack_require__(6415);
var toIndexedObject = __webpack_require__(1853);
var objectKeys = __webpack_require__(232);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 5197:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 5226:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var toObject = __webpack_require__(7085);
var lengthOfArrayLike = __webpack_require__(2526);
var setArrayLength = __webpack_require__(8071);
var doesNotExceedSafeInteger = __webpack_require__(2669);
var fails = __webpack_require__(5735);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 5262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(7597);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 5289:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7835);
var Iterators = __webpack_require__(2245);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 5364:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7835);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 5517:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 5644:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 5735:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5756:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(8392);
var uncurryThis = __webpack_require__(4520);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 5783:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 5797:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var iterate = __webpack_require__(4340);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ 6024:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6041:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var has = (__webpack_require__(6298).has);
var size = __webpack_require__(170);
var getSetRecord = __webpack_require__(2165);
var iterateSet = __webpack_require__(877);
var iterateSimple = __webpack_require__(6243);
var iteratorClose = __webpack_require__(9515);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 6191:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 6243:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 6284:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var iterate = __webpack_require__(4340);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ 6298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ 6382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var SetHelpers = __webpack_require__(6298);
var iterate = __webpack_require__(877);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ 6392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var definePropertyModule = __webpack_require__(553);
var createPropertyDescriptor = __webpack_require__(5644);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 6415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(8666);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 6448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(6415);
var definePropertiesModule = __webpack_require__(5145);
var enumBugKeys = __webpack_require__(8031);
var hiddenKeys = __webpack_require__(7565);
var html = __webpack_require__(8357);
var documentCreateElement = __webpack_require__(7247);
var sharedKey = __webpack_require__(3455);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6470:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var hasOwn = __webpack_require__(4265);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6480:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5735);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(6480);

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var tryToString = __webpack_require__(4095);
var getIteratorMethod = __webpack_require__(4715);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 6635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5735);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 6641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(7329);
var isSymbol = __webpack_require__(2189);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 6724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5735);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 7000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(7255);

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 7085:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(5262);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7137:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 7173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(9702);
var globalThis = __webpack_require__(6024);
var isObject = __webpack_require__(8666);
var createNonEnumerableProperty = __webpack_require__(9123);
var hasOwn = __webpack_require__(4265);
var shared = __webpack_require__(4373);
var sharedKey = __webpack_require__(3455);
var hiddenKeys = __webpack_require__(7565);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7240:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var SetHelpers = __webpack_require__(6298);
var clone = __webpack_require__(6382);
var size = __webpack_require__(170);
var getSetRecord = __webpack_require__(2165);
var iterateSet = __webpack_require__(877);
var iterateSimple = __webpack_require__(6243);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ 7247:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var isObject = __webpack_require__(8666);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7255:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(9159);
var fails = __webpack_require__(5735);
var globalThis = __webpack_require__(6024);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 7329:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var isObject = __webpack_require__(8666);
var isSymbol = __webpack_require__(2189);
var getMethod = __webpack_require__(9654);
var ordinaryToPrimitive = __webpack_require__(4678);
var wellKnownSymbol = __webpack_require__(7835);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 7335:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var globalThis = __webpack_require__(6024);
var anInstance = __webpack_require__(2031);
var anObject = __webpack_require__(6415);
var isCallable = __webpack_require__(9565);
var getPrototypeOf = __webpack_require__(7403);
var defineBuiltInAccessor = __webpack_require__(7426);
var createProperty = __webpack_require__(6392);
var fails = __webpack_require__(5735);
var hasOwn = __webpack_require__(4265);
var wellKnownSymbol = __webpack_require__(7835);
var IteratorPrototype = (__webpack_require__(2369).IteratorPrototype);
var DESCRIPTORS = __webpack_require__(6724);
var IS_PURE = __webpack_require__(8867);

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ 7353:
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 7403:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(4265);
var isCallable = __webpack_require__(9565);
var toObject = __webpack_require__(7085);
var sharedKey = __webpack_require__(3455);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(6635);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 7426:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(4883);
var defineProperty = __webpack_require__(553);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 7565:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 7597:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 7821:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 7835:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var shared = __webpack_require__(4633);
var hasOwn = __webpack_require__(4265);
var uid = __webpack_require__(9544);
var NATIVE_SYMBOL = __webpack_require__(7255);
var USE_SYMBOL_AS_UID = __webpack_require__(7000);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7898:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var map = __webpack_require__(2465);
var IS_PURE = __webpack_require__(8867);

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


/***/ }),

/***/ 8031:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 8071:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var isArray = __webpack_require__(2240);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 8103:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var fails = __webpack_require__(5735);
var classof = __webpack_require__(8392);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 8292:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5735);
var isCallable = __webpack_require__(9565);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8357:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(47);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 8392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 8448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var has = (__webpack_require__(6298).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ 8462:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var create = __webpack_require__(6448);
var createNonEnumerableProperty = __webpack_require__(9123);
var defineBuiltIns = __webpack_require__(9135);
var wellKnownSymbol = __webpack_require__(7835);
var InternalStateModule = __webpack_require__(7173);
var getMethod = __webpack_require__(9654);
var IteratorPrototype = (__webpack_require__(2369).IteratorPrototype);
var createIterResultObject = __webpack_require__(7353);
var iteratorClose = __webpack_require__(9515);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      if (iterator) iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ 8666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(9565);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 8758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var fails = __webpack_require__(5735);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 8867:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 8927:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(47);
var uncurryThis = __webpack_require__(4520);
var getOwnPropertyNamesModule = __webpack_require__(872);
var getOwnPropertySymbolsModule = __webpack_require__(5197);
var anObject = __webpack_require__(6415);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 9084:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);
var hasOwn = __webpack_require__(4265);
var toIndexedObject = __webpack_require__(1853);
var indexOf = (__webpack_require__(953).indexOf);
var hiddenKeys = __webpack_require__(7565);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 9123:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6724);
var definePropertyModule = __webpack_require__(553);
var createPropertyDescriptor = __webpack_require__(5644);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(5088);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 9159:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var userAgent = __webpack_require__(6191);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 9207:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var has = (__webpack_require__(6298).has);
var size = __webpack_require__(170);
var getSetRecord = __webpack_require__(2165);
var iterateSimple = __webpack_require__(6243);
var iteratorClose = __webpack_require__(9515);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ 9340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(47);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var createSetLikeWithInfinitySize = function (size) {
  return {
    size: size,
    has: function () {
      return true;
    },
    keys: function () {
      throw new Error('e');
    }
  };
};

module.exports = function (name, callback) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      if (!callback) return true;
      // early V8 implementation bug
      // https://issues.chromium.org/issues/351332634
      try {
        new Set()[name](createSetLikeWithInfinitySize(-Infinity));
        return false;
      } catch (error) {
        var set = new Set();
        set.add(1);
        set.add(2);
        return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
      }
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ 9515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6597);
var anObject = __webpack_require__(6415);
var getMethod = __webpack_require__(9654);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 9544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4520);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 9551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ 9565:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 9654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(2786);
var isNullOrUndefined = __webpack_require__(7597);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 9702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(6024);
var isCallable = __webpack_require__(9565);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 9710:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2798);
var call = __webpack_require__(6597);
var aCallable = __webpack_require__(2786);
var anObject = __webpack_require__(6415);
var getIteratorDirect = __webpack_require__(4479);
var createIteratorProxy = __webpack_require__(8462);
var callWithSafeIterationClosing = __webpack_require__(2679);
var IS_PURE = __webpack_require__(8867);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ 9814:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__(8448);
var SetHelpers = __webpack_require__(6298);
var size = __webpack_require__(170);
var getSetRecord = __webpack_require__(2165);
var iterateSet = __webpack_require__(877);
var iterateSimple = __webpack_require__(6243);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  css: function() { return /* reexport */ scss_namespaceObject; },
  "default": function() { return /* binding */ entry_lib; }
});

// NAMESPACE OBJECT: ./src/assets/scss/index.scss
var scss_namespaceObject = {};
__webpack_require__.r(scss_namespaceObject);

;// ./node_modules/.pnpm/@vue+cli-service@5.0.8_@vue+compiler-sfc@3.5.13_lodash@4.17.21_sass-loader@8.0.2_sass@1_02c2288fac8a76245e41f5bddaa8cccb/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/HotelDatePicker.vue?vue&type=template&id=356d2dc1

const _hoisted_1 = {
  class: "vhd__hide-on-desktop"
};
const _hoisted_2 = {
  key: 0,
  class: "vhd__datepicker__inner"
};
const _hoisted_3 = ["tabindex", "disabled"];
const _hoisted_4 = ["disabled", "tabindex"];
const _hoisted_5 = {
  key: 0,
  class: "vhd__datepicker__tooltip--mobile"
};
const _hoisted_6 = {
  class: "vhd__datepicker__months",
  ref: "swiperWrapper"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_date_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("date-input");
  const _component_Month = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("Month");
  return $props.value ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__wrapper", {
      'vhd__datepicker__wrapper--grid': $props.gridStyle,
      'vhd__datepicker__wrapper--booking': $props.bookings.length > 0,
      vhd__datepicker__fullview: $props.alwaysVisible
    }]),
    ref: `DatePicker-${$data.hash}`
  }, [$options.isOpen ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: "vhd__datepicker__close-button vhd__hide-on-desktop",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.closeMobileDatepicker && $options.closeMobileDatepicker(...args))
  }, _cache[7] || (_cache[7] = [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", null, "+", -1)]))) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__dummy-wrapper", {
      'vhd__datepicker__dummy-wrapper--is-active': $options.isOpen
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_date_input, {
    i18n: $props.i18n,
    "input-date": $options.formatDate($data.checkIn),
    "input-date-type": "check-in",
    "is-open": $options.isOpen,
    "toggle-datepicker": $options.toggleDatepicker,
    "single-day-selection": $props.singleDaySelection
  }, null, 8, ["i18n", "input-date", "is-open", "toggle-datepicker", "single-day-selection"]), !$props.singleDaySelection ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_date_input, {
    key: 0,
    i18n: $props.i18n,
    "input-date": $options.formatDate($data.checkOut),
    "input-date-type": "check-out",
    "is-open": $options.isOpen,
    "toggle-datepicker": $options.toggleDatepicker,
    "single-day-selection": $props.singleDaySelection
  }, null, 8, ["i18n", "input-date", "is-open", "toggle-datepicker", "single-day-selection"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: "vhd__datepicker__clear-button",
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.clearSelection && $options.clearSelection(...args))
  }, _cache[8] || (_cache[8] = [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 68 68",
    role: "img",
    "aria-label": "x"
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("title", null, "x"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M6.5 6.5l55 55m0-55l-55 55",
    stroke: "#000",
    fill: "none",
    "stroke-linecap": "square"
  })], -1)]), 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $options.showClearSelectionButton]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker", {
      'vhd__datepicker--open': $options.isOpen && !$props.alwaysVisible,
      'vhd__datepicker--closed': !$options.isOpen && !$props.alwaysVisible,
      'vhd__datepicker--right': $props.positionRight
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_1, [$options.isOpen ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__dummy-wrapper vhd__datepicker__dummy-wrapper--no-border", {
      'vhd__datepicker__dummy-wrapper--is-active': $options.isOpen
    }]),
    onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleDatepicker && $options.toggleDatepicker(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__input", {
      'vhd__datepicker__dummy-input--is-active': $options.isOpen && $data.checkIn == null
    }]),
    tabindex: "0",
    type: "button"
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(`${$data.checkIn ? $options.formatDate($data.checkIn) : $props.i18n['check-in']}`), 3), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__input", {
      'vhd__datepicker__dummy-input--is-active': $options.isOpen && $data.checkOut == null && $data.checkIn !== null
    }]),
    tabindex: "0",
    type: "button"
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(`${$data.checkOut ? $options.formatDate($data.checkOut) : $props.i18n['check-out']}`), 3)], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]), $options.isOpen || $props.alwaysVisible ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)({
      vhd__datepicker__header: $options.isDesktop,
      'vhd__datepicker__header-mobile': !$options.isDesktop
    })
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
    type: "button",
    class: "vhd__datepicker__month-button vhd__datepicker__month-button--prev",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.renderPreviousMonth && $options.renderPreviousMonth(...args)),
    onKeyup: _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withKeys)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => $options.renderPreviousMonth && $options.renderPreviousMonth(...args), ["stop", "prevent"]), ["enter"])),
    tabindex: $options.isOpen ? 0 : -1,
    disabled: $data.activeMonthIndex === 0
  }, null, 40, _hoisted_3), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
    type: "button",
    class: "vhd__datepicker__month-button vhd__datepicker__month-button--next",
    onClick: _cache[5] || (_cache[5] = (...args) => $options.renderNextMonth && $options.renderNextMonth(...args)),
    onKeyup: _cache[6] || (_cache[6] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withKeys)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => $options.renderNextMonth && $options.renderNextMonth(...args), ["stop", "prevent"]), ["enter"])),
    disabled: $options.isPreventedMaxMonth,
    tabindex: $options.isOpen ? 0 : -1
  }, null, 40, _hoisted_4)], 2), $options.isDesktop || $props.alwaysVisible ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__months", {
      'vhd__datepicker__months--full': $props.showSingleMonth
    }])
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.paginateMonths, (month, monthIndex) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_Month, {
      key: `${$data.datepickerMonthKey}-${monthIndex}-desktop`,
      ref_for: true,
      ref: "datepickerMonth",
      month: month,
      dayKey: $data.datepickerDayKey,
      weekKey: $data.datepickerWeekKey,
      isDesktop: $options.isDesktop,
      firstDayOfWeek: $props.firstDayOfWeek,
      showYear: $props.showYear,
      yearBeforeMonth: $props.yearBeforeMonth,
      activeMonthIndex: $data.activeMonthIndex,
      bookings: $options.sortBookings,
      checkIn: $data.checkIn,
      checkIncheckOutHalfDay: $data.checkIncheckOutHalfDay,
      checkInPeriod: $data.checkInPeriod,
      checkOut: $data.checkOut,
      disableCheckoutOnCheckin: $props.disableCheckoutOnCheckin,
      duplicateBookingDates: $options.duplicateBookingDates,
      hoveringDate: $data.hoveringDate,
      hoveringPeriod: $data.hoveringPeriod,
      i18n: $props.i18n,
      isOpen: $options.isOpen,
      minNightCount: $options.minNightCount,
      nextDisabledDate: $data.nextDisabledDate,
      nextPeriodDisableDates: $data.nextPeriodDisableDates,
      options: $options.dayOptions,
      priceSymbol: $props.priceSymbol,
      screenSize: $data.screenSize,
      showCustomTooltip: $data.showCustomTooltip,
      showPrice: $props.showPrice,
      disabledDates: $props.disabledDates,
      periodDates: $props.periodDates,
      sortedDisabledDates: $data.sortedDisabledDates,
      sortedPeriodDates: $options.sortedPeriodDates,
      tooltipMessage: $options.customTooltipMessage,
      onClearSelection: $options.clearSelection,
      onBookingClicked: $options.handleBookingClicked,
      onDayClicked: $options.handleDayClick,
      onEnterDay: $options.enterDay,
      onEnterMonth: $options.enterMonth
    }, null, 8, ["month", "dayKey", "weekKey", "isDesktop", "firstDayOfWeek", "showYear", "yearBeforeMonth", "activeMonthIndex", "bookings", "checkIn", "checkIncheckOutHalfDay", "checkInPeriod", "checkOut", "disableCheckoutOnCheckin", "duplicateBookingDates", "hoveringDate", "hoveringPeriod", "i18n", "isOpen", "minNightCount", "nextDisabledDate", "nextPeriodDisableDates", "options", "priceSymbol", "screenSize", "showCustomTooltip", "showPrice", "disabledDates", "periodDates", "sortedDisabledDates", "sortedPeriodDates", "tooltipMessage", "onClearSelection", "onBookingClicked", "onDayClicked", "onEnterDay", "onEnterMonth"]);
  }), 128))], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), !$options.isDesktop && $options.isOpen && !$props.alwaysVisible ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 1,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(['vhd__datepicker__months-wrapper', {
      'vhd__show-tooltip': $data.showCustomTooltip && $props.hoveringTooltip
    }])
  }, [$props.hoveringTooltip ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_5, [$options.customTooltipMessage ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, {
    key: 0
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($options.cleanString($options.customTooltipMessage)), 1)], 64)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_6, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.paginateMonths, (month, monthIndex) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_Month, {
      key: `${$data.datepickerMonthKey}-${monthIndex}-desktop`,
      ref_for: true,
      ref: "datepickerMonth",
      month: month,
      dayKey: $data.datepickerDayKey,
      weekKey: $data.datepickerWeekKey,
      isDesktop: $options.isDesktop,
      firstDayOfWeek: $props.firstDayOfWeek,
      showYear: $props.showYear,
      yearBeforeMonth: $props.yearBeforeMonth,
      activeMonthIndex: $data.activeMonthIndex,
      bookings: $options.sortBookings,
      checkIn: $data.checkIn,
      checkIncheckOutHalfDay: $data.checkIncheckOutHalfDay,
      checkInPeriod: $data.checkInPeriod,
      checkOut: $data.checkOut,
      disableCheckoutOnCheckin: $props.disableCheckoutOnCheckin,
      duplicateBookingDates: $options.duplicateBookingDates,
      hoveringDate: $data.hoveringDate,
      hoveringPeriod: $data.hoveringPeriod,
      i18n: $props.i18n,
      isOpen: $options.isOpen,
      minNightCount: $options.minNightCount,
      nextDisabledDate: $data.nextDisabledDate,
      nextPeriodDisableDates: $data.nextPeriodDisableDates,
      options: $options.dayOptions,
      priceSymbol: $props.priceSymbol,
      screenSize: $data.screenSize,
      showCustomTooltip: false,
      showPrice: $props.showPrice,
      sortedDisabledDates: $data.sortedDisabledDates,
      sortedPeriodDates: $options.sortedPeriodDates,
      tooltipMessage: $options.customTooltipMessage,
      onClearSelection: $options.clearSelection,
      onBookingClicked: $options.handleBookingClicked,
      onDayClicked: $options.handleDayClick,
      onEnterDay: $options.enterDay,
      onEnterMonth: $options.enterMonth
    }, null, 8, ["month", "dayKey", "weekKey", "isDesktop", "firstDayOfWeek", "showYear", "yearBeforeMonth", "activeMonthIndex", "bookings", "checkIn", "checkIncheckOutHalfDay", "checkInPeriod", "checkOut", "disableCheckoutOnCheckin", "duplicateBookingDates", "hoveringDate", "hoveringPeriod", "i18n", "isOpen", "minNightCount", "nextDisabledDate", "nextPeriodDisableDates", "options", "priceSymbol", "screenSize", "showPrice", "sortedDisabledDates", "sortedPeriodDates", "tooltipMessage", "onClearSelection", "onBookingClicked", "onDayClicked", "onEnterDay", "onEnterMonth"]);
  }), 128))], 512)], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "content")], 2)], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true);
}
;// ./src/DatePicker/HotelDatePicker.vue?vue&type=template&id=356d2dc1

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(5226);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(7335);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(9710);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.find.js
var es_iterator_find = __webpack_require__(1468);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(6284);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(7898);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce = __webpack_require__(5797);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(1954);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(876);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(2597);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(460);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(435);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(3080);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(234);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(9551);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);
;// ./node_modules/.pnpm/fecha@4.2.3/node_modules/fecha/lib/fecha.js
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{3}";
var fourDigits = "\\d{4}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
}
var monthUpdate = function (arrName) { return function (v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
    var index = lowerCaseArr.indexOf(v.toLowerCase());
    if (index > -1) {
        return index;
    }
    return null;
}; };
function fecha_assign(origObj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        for (var key in obj) {
            // @ts-ignore ex
            origObj[key] = obj[key];
        }
    }
    return origObj;
}
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var monthNames = [
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
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ["am", "pm"],
    DoFn: function (dayOfMonth) {
        return (dayOfMonth +
            ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3
                ? 0
                : ((dayOfMonth - (dayOfMonth % 10) !== 10 ? 1 : 0) * dayOfMonth) % 10]);
    }
};
var globalI18n = fecha_assign({}, defaultI18n);
var setGlobalDateI18n = function (i18n) {
    return (globalI18n = fecha_assign(globalI18n, i18n));
};
var regexEscape = function (str) {
    return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function (val, len) {
    if (len === void 0) { len = 2; }
    val = String(val);
    while (val.length < len) {
        val = "0" + val;
    }
    return val;
};
var formatFlags = {
    D: function (dateObj) { return String(dateObj.getDate()); },
    DD: function (dateObj) { return pad(dateObj.getDate()); },
    Do: function (dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) { return String(dateObj.getDay()); },
    dd: function (dateObj) { return pad(dateObj.getDay()); },
    ddd: function (dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) { return String(dateObj.getMonth() + 1); },
    MM: function (dateObj) { return pad(dateObj.getMonth() + 1); },
    MMM: function (dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
    },
    YYYY: function (dateObj) { return pad(dateObj.getFullYear(), 4); },
    h: function (dateObj) { return String(dateObj.getHours() % 12 || 12); },
    hh: function (dateObj) { return pad(dateObj.getHours() % 12 || 12); },
    H: function (dateObj) { return String(dateObj.getHours()); },
    HH: function (dateObj) { return pad(dateObj.getHours()); },
    m: function (dateObj) { return String(dateObj.getMinutes()); },
    mm: function (dateObj) { return pad(dateObj.getMinutes()); },
    s: function (dateObj) { return String(dateObj.getSeconds()); },
    ss: function (dateObj) { return pad(dateObj.getSeconds()); },
    S: function (dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / 100));
    },
    SS: function (dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), 3); },
    a: function (dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
        return dateObj.getHours() < 12
            ? i18n.amPm[0].toUpperCase()
            : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4));
    },
    Z: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60), 2) +
            ":" +
            pad(Math.abs(offset) % 60, 2));
    }
};
var monthParse = function (v) { return +v - 1; };
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
    "isPm",
    word,
    function (v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
            return 0;
        }
        else if (val === i18n.amPm[1]) {
            return 1;
        }
        return null;
    }
];
var timezoneOffset = [
    "timezoneOffset",
    "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
    function (v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
            var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
            return parts[0] === "+" ? minutes : -minutes;
        }
        return 0;
    }
];
var parseFlags = {
    D: ["day", twoDigitsOptional],
    DD: ["day", twoDigits],
    Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, 10); }],
    M: ["month", twoDigitsOptional, monthParse],
    MM: ["month", twoDigits, monthParse],
    YY: [
        "year",
        twoDigits,
        function (v) {
            var now = new Date();
            var cent = +("" + now.getFullYear()).substr(0, 2);
            return +("" + (+v > 68 ? cent - 1 : cent) + v);
        }
    ],
    h: ["hour", twoDigitsOptional, undefined, "isPm"],
    hh: ["hour", twoDigits, undefined, "isPm"],
    H: ["hour", twoDigitsOptional],
    HH: ["hour", twoDigits],
    m: ["minute", twoDigitsOptional],
    mm: ["minute", twoDigits],
    s: ["second", twoDigitsOptional],
    ss: ["second", twoDigits],
    YYYY: ["year", fourDigits],
    S: ["millisecond", "\\d", function (v) { return +v * 100; }],
    SS: ["millisecond", twoDigits, function (v) { return +v * 10; }],
    SSS: ["millisecond", threeDigits],
    d: emptyDigits,
    dd: emptyDigits,
    ddd: emptyWord,
    dddd: emptyWord,
    MMM: ["month", word, monthUpdate("monthNamesShort")],
    MMMM: ["month", word, monthUpdate("monthNames")],
    a: amPm,
    A: amPm,
    ZZ: timezoneOffset,
    Z: timezoneOffset
};
// Some common format strings
var globalMasks = {
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
};
var setGlobalDateMasks = function (masks) { return fecha_assign(globalMasks, masks); };
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 * @returns {string} Formatted date string
 */
var format = function (dateObj, mask, i18n) {
    if (mask === void 0) { mask = globalMasks["default"]; }
    if (i18n === void 0) { i18n = {}; }
    if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
    }
    if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
        isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
    }
    mask = globalMasks[mask] || mask;
    var literals = [];
    // Make literals inactive by replacing them with @@@
    mask = mask.replace(literal, function ($0, $1) {
        literals.push($1);
        return "@@@";
    });
    var combinedI18nSettings = fecha_assign(fecha_assign({}, globalI18n), i18n);
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
        return formatFlags[$0](dateObj, combinedI18nSettings);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function () { return literals.shift(); });
};
/**
 * Parse a date string into a Javascript Date object /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
 * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
 */
function parse(dateStr, format, i18n) {
    if (i18n === void 0) { i18n = {}; }
    if (typeof format !== "string") {
        throw new Error("Invalid format in fecha parse");
    }
    // Check to see if the format is actually a mask
    format = globalMasks[format] || format;
    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
        return null;
    }
    // Default to the beginning of the year.
    var today = new Date();
    var dateInfo = {
        year: today.getFullYear(),
        month: 0,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        isPm: null,
        timezoneOffset: null
    };
    var parseInfo = [];
    var literals = [];
    // Replace all the literals with @@@. Hopefully a string that won't exist in the format
    var newFormat = format.replace(literal, function ($0, $1) {
        literals.push(regexEscape($1));
        return "@@@";
    });
    var specifiedFields = {};
    var requiredFields = {};
    // Change every token that we find into the correct regex
    newFormat = regexEscape(newFormat).replace(token, function ($0) {
        var info = parseFlags[$0];
        var field = info[0], regex = info[1], requiredField = info[3];
        // Check if the person has specified the same field twice. This will lead to confusing results.
        if (specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " specified twice in format");
        }
        specifiedFields[field] = true;
        // Check if there are any required fields. For instance, 12 hour time requires AM/PM specified
        if (requiredField) {
            requiredFields[requiredField] = true;
        }
        parseInfo.push(info);
        return "(" + regex + ")";
    });
    // Check all the required fields are present
    Object.keys(requiredFields).forEach(function (field) {
        if (!specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " is required in specified format");
        }
    });
    // Add back all the literals after
    newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
    // Check if the date string matches the format. If it doesn't return null
    var matches = dateStr.match(new RegExp(newFormat, "i"));
    if (!matches) {
        return null;
    }
    var combinedI18nSettings = fecha_assign(fecha_assign({}, globalI18n), i18n);
    // For each match, call the parser function for that date part
    for (var i = 1; i < matches.length; i++) {
        var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
        var value = parser
            ? parser(matches[i], combinedI18nSettings)
            : +matches[i];
        // If the parser can't make sense of the value, return null
        if (value == null) {
            return null;
        }
        dateInfo[field] = value;
    }
    if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
    }
    else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
    }
    var dateTZ;
    if (dateInfo.timezoneOffset == null) {
        dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
            ["month", "getMonth"],
            ["day", "getDate"],
            ["hour", "getHours"],
            ["minute", "getMinutes"],
            ["second", "getSeconds"]
        ];
        for (var i = 0, len = validateFields.length; i < len; i++) {
            // Check to make sure the date field is within the allowed range. Javascript dates allows values
            // outside the allowed range. If the values don't match the value was invalid
            if (specifiedFields[validateFields[i][0]] &&
                dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
                return null;
            }
        }
    }
    else {
        dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
        // We can't validate dates in another timezone unfortunately. Do a basic check instead
        if (dateInfo.month > 11 ||
            dateInfo.month < 0 ||
            dateInfo.day > 31 ||
            dateInfo.day < 1 ||
            dateInfo.hour > 23 ||
            dateInfo.hour < 0 ||
            dateInfo.minute > 59 ||
            dateInfo.minute < 0 ||
            dateInfo.second > 59 ||
            dateInfo.second < 0) {
            return null;
        }
    }
    // Don't allow invalid dates
    return dateTZ;
}
var fecha = {
    format: format,
    parse: parse,
    defaultI18n: defaultI18n,
    setGlobalDateI18n: setGlobalDateI18n,
    setGlobalDateMasks: setGlobalDateMasks
};

/* harmony default export */ var lib_fecha = (fecha);

//# sourceMappingURL=fecha.js.map

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Month.vue?vue&type=template&id=b0c2d724

const Monthvue_type_template_id_b0c2d724_hoisted_1 = {
  class: "vhd__datepicker__month-name"
};
const Monthvue_type_template_id_b0c2d724_hoisted_2 = ["onMouseenter"];
function Monthvue_type_template_id_b0c2d724_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_week_row = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("week-row");
  const _component_Day = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("Day");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    ref: "datepickerMonth",
    class: "vhd__datepicker__month",
    onMouseenter: _cache[0] || (_cache[0] = $event => $options.enterMonth($event))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("p", Monthvue_type_template_id_b0c2d724_hoisted_1, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($options.monthName), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_week_row, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.guardReactiveProps)(_ctx.$props)), null, 16), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.month.days, (day, dayIndex) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
      class: "vhd__square",
      key: `${$props.dayKey}-${dayIndex}`,
      onMouseenter: $event => $options.enterDay($event, day)
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_Day, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
      ref_for: true
    }, _ctx.$props, {
      belongsToThisMonth: day.belongsToThisMonth,
      date: day.date,
      onClearSelection: $options.clearSelection,
      onBookingClicked: $options.handleBookingClicked,
      onDayClicked: $options.handleDayClick
    }), null, 16, ["belongsToThisMonth", "date", "onClearSelection", "onBookingClicked", "onDayClicked"])], 40, Monthvue_type_template_id_b0c2d724_hoisted_2);
  }), 128))], 544);
}
;// ./src/DatePicker/components/Month.vue?vue&type=template&id=b0c2d724

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Day.vue?vue&type=template&id=0b134872

const Dayvue_type_template_id_0b134872_hoisted_1 = ["innerHTML"];
const Dayvue_type_template_id_0b134872_hoisted_2 = ["tabindex"];
const Dayvue_type_template_id_0b134872_hoisted_3 = {
  class: "vhd__datepicker__month-day-wrapper"
};
const Dayvue_type_template_id_0b134872_hoisted_4 = {
  class: "day"
};
function Dayvue_type_template_id_0b134872_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Price = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("Price");
  const _component_BookingBullet = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("BookingBullet");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", null, [$options.showTooltip && $props.options.hoveringTooltip ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: "vhd__datepicker__tooltip",
    innerHTML: $options.tooltipMessageDisplay
  }, null, 8, Dayvue_type_template_id_0b134872_hoisted_1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__month-day", [$options.dayClass, $options.disabledClass, $options.checkinCheckoutClass, $options.bookingClass, {
      'vhd__datepicker__month-day--today': $options.isToday
    }]]),
    onClick: _cache[0] || (_cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => $options.dayClicked($event, $props.date), ["prevent", "stop"])),
    tabindex: $options.tabIndex,
    ref: "day"
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", Dayvue_type_template_id_0b134872_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", Dayvue_type_template_id_0b134872_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($options.dayNumber), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_Price, {
    show: $props.showPrice,
    price: $options.dayPrice,
    symbol: $props.priceSymbol
  }, null, 8, ["show", "price", "symbol"])])], 10, Dayvue_type_template_id_0b134872_hoisted_2), $options.currentBooking && $props.belongsToThisMonth && !$data.isDisabled ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_BookingBullet, {
    key: 1,
    currentBooking: $options.currentBooking,
    duplicateBookingDates: $props.duplicateBookingDates,
    formatDate: $options.formatDate,
    previousBooking: $options.previousBooking
  }, null, 8, ["currentBooking", "duplicateBookingDates", "formatDate", "previousBooking"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]);
}
;// ./src/DatePicker/components/Day.vue?vue&type=template&id=0b134872

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.some.js
var es_iterator_some = __webpack_require__(499);
;// ./src/helpers.js





/* eslint-disable vars-on-top */

const helpers = {
  getNextDate(datesArray, referenceDate) {
    const now = new Date(referenceDate);
    let closest = Infinity;
    datesArray.forEach(d => {
      const date = new Date(d);
      if (date >= now && date < closest) {
        closest = d;
      }
    });
    if (closest === Infinity) {
      return null;
    }
    return closest;
  },
  nextDateByDayOfWeek(weekDay, referenceDate, i18n) {
    const newReferenceDate = new Date(referenceDate);
    let newWeekDay = weekDay.toLowerCase();
    const daysDefault = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const days = i18n ? i18n['day-names'] : daysDefault;
    const referenceDateDay = newReferenceDate.getDay();
    for (let i = 7;; i--) {
      if (newWeekDay === days[i]) {
        newWeekDay = i <= referenceDateDay ? i + 7 : i;
        break;
      }
    }
    const daysUntilNext = newWeekDay - referenceDateDay;
    return newReferenceDate.setDate(newReferenceDate.getDate() + daysUntilNext);
  },
  nextDateByDayOfWeekArray(daysArray, referenceDate, i18n) {
    const tempArray = [];
    for (let i = 0; i < daysArray.length; i++) {
      tempArray.push(new Date(this.nextDateByDayOfWeek(daysArray[i], referenceDate, i18n)));
    }
    return this.getNextDate(tempArray, referenceDate);
  },
  nextDateByDayOfWeekObject(days, referenceDate, i18n) {
    const daysArray = Object.entries(days).map(e => e[1] ? e[0] : false).filter(v => v);
    return this.nextDateByDayOfWeekArray(daysArray, referenceDate, i18n);
  },
  countDays(start, end) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(start);
    const secondDate = new Date(end);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  },
  addDays(date, quantity) {
    const result = new Date(date);
    result.setDate(result.getDate() + quantity);
    return result;
  },
  getDayDiff(d1, d2) {
    const t2 = new Date(d2).getTime();
    const t1 = new Date(d1).getTime();
    return parseInt((t2 - t1) / (24 * 3600 * 1000), 10);
  },
  getFirstDay(date, firstDayOfWeek) {
    const firstDay = this.getFirstDayOfMonth(date);
    const day = firstDay.getDay();
    let offset = 0;
    if (firstDayOfWeek > 0) {
      offset = !day ? -6 : firstDayOfWeek;
    }
    return new Date(firstDay.setDate(firstDay.getDate() - (day - offset)));
  },
  getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  },
  getNextMonth(date) {
    let nextMonth;
    if (date.getMonth() === 11) {
      nextMonth = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    return nextMonth;
  },
  getPreviousMonth(date) {
    let prevMonth;
    if (date.getMonth() === 0) {
      prevMonth = new Date(date.getFullYear() - 1, 11, 1);
    } else {
      prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    return prevMonth;
  },
  handleTouchStart(evt) {
    this.isTouchMove = false;
    if (this.isOpen) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }
  },
  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      this.isTouchMove = false;
      return;
    }
    this.isTouchMove = true;
    this.xUp = evt.touches[0].clientX;
    this.yUp = evt.touches[0].clientY;
  },
  handleTouchEnd() {
    if (!this.isTouchMove) {
      return;
    }
    if (!this.xDown || !this.yDown) {
      return;
    }
    const xDiff = this.xDown - this.xUp;
    const yDiff = this.yDown - this.yUp;
    if (Math.abs(xDiff) < Math.abs(yDiff) && yDiff > 0 && !this.isPreventedMaxMonth) {
      this.renderNextMonth();
    } else {
      this.renderPreviousMonth();
    }
    this.xDown = null;
    this.yDown = null;
  },
  validateDateBetweenTwoDates(fromDate, toDate, givenDate) {
    const getvalidDate = d => {
      const formatDateAt00 = new Date(d).setHours(0, 0, 0, 0);
      return new Date(formatDateAt00);
    };
    return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate);
  },
  validateDateBetweenDate(fromDate, givenDate) {
    const getvalidDate = d => {
      return new Date(d);
    };
    return getvalidDate(givenDate) <= getvalidDate(fromDate);
  },
  getMonthDiff(d1, d2) {
    const newD1 = new Date(d1);
    const newD2 = new Date(d2);
    const d1Y = newD1.getFullYear();
    const d2Y = newD2.getFullYear();
    const d1M = newD1.getMonth();
    const d2M = newD2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },
  shortenString(arr, sLen) {
    const newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  },
  getDaysArray(start, end) {
    for (
    // eslint-disable-next-line no-var
    var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }

    // eslint-disable-next-line block-scoped-var
    return arr;
  },
  dateFormater(date, format) {
    const f = format || 'YYYY-MM-DD';
    if (date) {
      return lib_fecha.format(date, f);
    }
    return '';
  },
  pluralize(countOfDays, periodType = 'night') {
    if (periodType === 'week') {
      return countOfDays > 7 ? this.i18n.weeks : this.i18n.week;
    }
    return countOfDays !== 1 ? this.i18n.nights : this.i18n.night;
  },
  isDateLessOrEquals(time1, time2) {
    return new Date(time1) < new Date(time2);
  },
  compareDay(day1, day2) {
    const date1 = lib_fecha.format(new Date(day1), 'YYYYMMDD');
    const date2 = lib_fecha.format(new Date(day2), 'YYYYMMDD');
    if (date1 > date2) {
      return 1;
    }
    if (date1 === date2) {
      return 0;
    }
    if (date1 < date2) {
      return -1;
    }
    return null;
  }
};
/* harmony default export */ var src_helpers = (helpers);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/BookingBullet.vue?vue&type=template&id=73e153d9

const BookingBulletvue_type_template_id_73e153d9_hoisted_1 = {
  class: "vhd__parent-bullet"
};
function BookingBulletvue_type_template_id_73e153d9_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", BookingBulletvue_type_template_id_73e153d9_hoisted_1, [$props.previousBooking && $props.duplicateBookingDates.includes($props.formatDate) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__bullet", [{
      vhd__checkInCheckOut: $props.duplicateBookingDates.includes($props.formatDate)
    }]]),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($props.previousBooking.style)
  }, null, 6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.previousBooking && $props.duplicateBookingDates.includes($props.formatDate) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
    key: 1,
    class: "vhd__pipe vhd__checkInCheckOut",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($props.previousBooking.style)
  }, null, 4)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.currentBooking && ($props.currentBooking.checkInDate === $props.formatDate || $props.currentBooking.checkOutDate === $props.formatDate) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
    key: 2,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__bullet", [{
      vhd__checkIn: $props.currentBooking.checkInDate === $props.formatDate,
      vhd__checkOut: $props.currentBooking.checkOutDate === $props.formatDate
    }]]),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($props.currentBooking.style)
  }, null, 6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.currentBooking ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
    key: 3,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__pipe", [{
      vhd__checkIn: $props.currentBooking.checkInDate === $props.formatDate,
      vhd__checkOut: $props.currentBooking.checkOutDate === $props.formatDate
    }]]),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($props.currentBooking.style)
  }, null, 6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]);
}
;// ./src/DatePicker/components/BookingBullet.vue?vue&type=template&id=73e153d9

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/BookingBullet.vue?vue&type=script&lang=js
/* harmony default export */ var BookingBulletvue_type_script_lang_js = ({
  name: 'BookingBullet',
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
      default: ''
    },
    previousBooking: {
      type: Object,
      default: () => ({})
    }
  }
});
;// ./src/DatePicker/components/BookingBullet.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(5783);
;// ./src/DatePicker/components/BookingBullet.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BookingBulletvue_type_script_lang_js, [['render',BookingBulletvue_type_template_id_73e153d9_render]])

/* harmony default export */ var BookingBullet = (__exports__);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Price.vue?vue&type=template&id=2998315e

const Pricevue_type_template_id_2998315e_hoisted_1 = {
  key: 0,
  class: "price"
};
const Pricevue_type_template_id_2998315e_hoisted_2 = {
  class: "price-symbol"
};
const Pricevue_type_template_id_2998315e_hoisted_3 = {
  class: "price-number"
};
function Pricevue_type_template_id_2998315e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show && $props.price ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Pricevue_type_template_id_2998315e_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", Pricevue_type_template_id_2998315e_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.symbol), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", Pricevue_type_template_id_2998315e_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.price), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true);
}
;// ./src/DatePicker/components/Price.vue?vue&type=template&id=2998315e

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Price.vue?vue&type=script&lang=js
/* harmony default export */ var Pricevue_type_script_lang_js = ({
  name: 'Price',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    symbol: {
      type: [String, null, undefined],
      default: ''
    }
  }
});
;// ./src/DatePicker/components/Price.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/components/Price.vue




;
const Price_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Pricevue_type_script_lang_js, [['render',Pricevue_type_template_id_2998315e_render]])

/* harmony default export */ var Price = (Price_exports_);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Day.vue?vue&type=script&lang=js








/* harmony default export */ var Dayvue_type_script_lang_js = ({
  name: 'Day',
  components: {
    BookingBullet: BookingBullet,
    Price: Price
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
      default: false
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
      default: false
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
      default: true,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: true
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
      required: true
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ''
    },
    showCustomTooltip: {
      default: false,
      type: Boolean
    },
    showPrice: {
      type: Boolean,
      default: false
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
      currentDate: new Date(),
      isDisabled: false,
      isHighlighted: false
    };
  },
  computed: {
    previousBooking() {
      let previousBooking = null;
      if (this.currentBooking && this.duplicateBookingDates.includes(this.currentBooking.checkInDate)) {
        previousBooking = this.bookings.find(booking => booking.checkOutDate === this.formatDate && this.duplicateBookingDates.includes(booking.checkOutDate));
      }
      return previousBooking;
    },
    currentBooking() {
      return this.bookings.find(booking => this.duplicateBookingDates.includes(this.formatDate) && booking.checkInDate === this.formatDate || !this.duplicateBookingDates.includes(this.formatDate) && this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, this.formatDate));
    },
    dayNumber() {
      return lib_fecha.format(this.date, 'D');
    },
    dayPrice() {
      let result = '';
      const currentDate = [...this.sortedPeriodDates].reverse().find(d => this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate));
      if (currentDate && currentDate.price) {
        const priceIsNumeric = typeof currentDate.price === 'number' || !Number.isNaN(parseFloat(currentDate.price));
        const weeklyPeriod = currentDate.periodType !== 'nightly';
        if (priceIsNumeric && weeklyPeriod) {
          // Convert the price when weekly and is not a float/int type
          const price = parseFloat(currentDate.price);
          const divisor = 7;
          const decimals = Number.isNaN(parseFloat(this.priceDecimals)) ? 0 : parseFloat(this.priceDecimals);
          result = (price / divisor).toFixed(decimals);
        } else {
          result = currentDate.price;
        }
      }
      return String(result);
    },
    halfDayClass() {
      if (Object.keys(this.checkIncheckOutHalfDay).length > 0) {
        const keyDate = this.dateFormater(this.date);
        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkIn) {
          if (this.checkIn && !this.checkOut) {
            return 'vhd__datepicker__month-day--halfCheckIn vhd__datepicker__month-day--valid';
          }
          return 'vhd__datepicker__month-day--halfCheckIn vhd__datepicker__month-day--invalid';
        }
        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkOut) {
          return 'vhd__datepicker__month-day--halfCheckOut vhd__datepicker__month-day--valid';
        }
      }
      return false;
    },
    bookingClass() {
      if (this.bookings.length > 0 && this.currentBooking) {
        if (!this.isDisabled && this.validateDateBetweenTwoDates(this.currentBooking.checkInDate, this.currentBooking.checkOutDate, this.hoveringDate)) {
          if (this.checkIncheckOutHalfDay[this.formatDate]) {
            if (this.checkIn && !this.checkOut) {
              return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
            }
            if (this.checkIncheckOutHalfDay[this.formatDate].checkOut) {
              return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
            }
            return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid';
          }
          if (this.checkIn && !this.checkOut) {
            return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid';
          }
          return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
        }
        if (this.checkIncheckOutHalfDay[this.formatDate] && this.checkIncheckOutHalfDay[this.formatDate].checkOut && !this.duplicateBookingDates.includes(this.formatDate)) {
          if (!this.checkIn) {
            return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
          }
          if (this.checkIn && this.checkIn === this.date || this.checkIn && this.checkOut) {
            return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
          }
        }
        if (this.checkIn && !this.checkOut && this.hoveringDate === this.date) {
          return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--hovering';
        }
        return 'vhd__datepicker__month-day--not-allowed vhd__datepicker__month-day--invalid';
      }
      return '';
    },
    disabledClass() {
      return this.isDisabled || this.isADisabledDay ? ' vhd__datepicker__month-day--disabled ' : '';
    },
    dayClass() {
      if (!this.belongsToThisMonth) {
        // Good
        return 'vhd__datepicker__month-day--hidden';
      }

      // If the calendar has a minimum number of nights && !checkOut
      const nextValidDate = this.addDays(this.checkIn, this.minNightCount);
      const isDateAfterMinimumDuration = this.getDayDiff(this.hoveringDate, nextValidDate) <= 0;
      if (!isDateAfterMinimumDuration && !this.checkOut && !this.isDisabled && this.compareDay(this.date, this.checkIn) >= 0 && this.minNightCount > 0 && this.compareDay(this.date, this.addDays(this.checkIn, this.minNightCount)) === -1) {
        return 'vhd__datepicker__month-day--valid vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed minimumDurationUnvalidDay';
      }

      // Current Day
      if (!this.isDisabled && this.date === this.hoveringDate && this.checkIn !== null && this.checkOut == null) {
        return 'vhd__datepicker__month-day--selected vhd__datepicker__month-day--hovering vhd__currentDay';
      }

      // Highlight the selected dates and prevent the user from selecting
      // the same date for checkout and checkin
      if (this.checkIn !== null && this.dateFormater(this.checkIn) === this.dateFormater(this.date)) {
        if (this.minNightCount === 0) {
          return 'vhd__datepicker__month-day--first-day-selected checkIn';
        }

        // Good
        return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--first-day-selected checkIn';
      }

      // Checkout day
      if (this.checkOut !== null) {
        if (this.dateFormater(this.checkOut) === this.dateFormater(this.date)) {
          if (this.halfDayClass) {
            return `vhd__datepicker__month-day--disabled vhd__datepicker__month-day--last-day-selected ${this.halfDayClass} checkOut`;
          }
          return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--last-day-selected checkOut';
        }
      }

      // Only highlight dates that are not disabled
      if (this.isHighlighted && !this.isDisabled) {
        const classSelected = 'vhd__datepicker__month-day--selected';
        if (this.isADisabledDay) {
          return `${classSelected} vhd__datepicker__month-day--disabled afterMinimumDurationValidDay`;
        }
        if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes('weekly') && this.hoveringDate && (this.checkInPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6 || this.checkInPeriod.periodType === 'weekly_by_sunday' && this.hoveringDate.getDay() === 0) && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          // If currentPeriod has a minimumDuration 1
          if (this.checkInPeriod.minimumDuration === 1) {
            return `${classSelected} afterMinimumDurationValidDay`;
          }

          // If currentPeriod has a minimumDuration superior to 1
          if (this.getDayDiff(this.hoveringDate, this.checkInPeriod.nextValidDate) <= 0) {
            return `${classSelected} afterMinimumDurationValidDay`;
          }
        } else if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType === 'nightly' && this.hoveringDate && this.hoveringPeriod.periodType.includes('weekly') && (this.hoveringPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6 || this.hoveringPeriod.periodType === 'weekly_by_sunday' && this.hoveringDate.getDay() === 0 && this.isDateLessOrEquals(this.date, this.hoveringDate))) {
          return `${classSelected} afterMinimumDurationValidDay`;
        }
        if (this.hoveringPeriod.periodType === 'nightly' && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          return `${classSelected}  afterMinimumDurationValidDay`;
        }
        if (this.checkIn && this.checkOut) {
          return `${classSelected}`;
        }
        return `${classSelected} vhd__datepicker__month-day--valid`;
      }

      // Good
      if (this.isDisabled || this.isADisabledDay) {
        return 'vhd__datepicker__month-day--disabled';
      }
      if (this.halfDayClass) {
        return `${this.halfDayClass}`;
      }

      // Good
      return 'vhd__datepicker__month-day--valid';
    },
    checkinCheckoutClass() {
      let currentPeriod = null;
      this.sortedPeriodDates.forEach(d => {
        if (d.endAt !== this.formatDate && (d.startAt === this.formatDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate))) {
          currentPeriod = d;
        }
      });
      if (this.nextPeriodDisableDates ? this.nextPeriodDisableDates.some(i => this.compareDay(i, this.date) === 0) : null) {
        return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed nightly';
      }
      if (currentPeriod) {
        if (currentPeriod.periodType === 'nightly' && this.belongsToThisMonth && !this.isDisabled) {
          if ((!this.checkIn && !this.checkOut || this.checkIn && this.checkOut) && this.notAllowedDayDueToNextPeriod(currentPeriod)) {
            return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed nightly';
          }
          return 'nightly';
        }

        // date.getDay() === 6 => saturday
        if (currentPeriod.periodType === 'weekly_by_saturday' && currentPeriod.startAt !== this.formatDate && currentPeriod.endAt !== this.formatDate && this.date.getDay() !== 6) {
          return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_saturday';
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(6)) {
          return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_saturday';
        }

        // date.getDay() === 0 => sunday
        if (currentPeriod.periodType === 'weekly_by_sunday' && currentPeriod.startAt !== this.formatDate && currentPeriod.endAt !== this.formatDate && this.date.getDay() !== 0) {
          return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_sunday';
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(0)) {
          return 'vhd__datepicker__month-day--disabled vhd__datepicker__month-day--not-allowed weekly_by_sunday';
        }
        return '';
      }
      return '';
    },
    formatDate() {
      return this.dateFormater(this.date);
    },
    tabIndex() {
      if (!this.isOpen || !this.belongsToThisMonth || this.isDisabled || !this.isClickable()) {
        return -1;
      }
      return 0;
    },
    nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate);
    },
    tooltipMessageDisplay() {
      const dateIsInPeriod = this.validateDateBetweenTwoDates(this.hoveringPeriod.startAt, this.hoveringPeriod.endAt, this.date);
      const checkInIsInPeriod = this.validateDateBetweenTwoDates(this.hoveringPeriod.startAt, this.hoveringPeriod.endAt, this.checkIn);
      if (this.tooltipMessage) {
        return this.tooltipMessage;
      }
      if (this.hoveringPeriod && this.hoveringPeriod.type !== 'nightly' && dateIsInPeriod && checkInIsInPeriod && this.nightsCount >= 7) {
        return `${this.nightsCount / 7} ${this.pluralize(this.nightsCount, 'week')}`;
      }
      if (this.nightsCount >= 1) {
        return `${this.nightsCount} ${this.nightsCount !== 1 ? this.i18n.nights : this.i18n.night}`;
      }
      return '';
    },
    showTooltip() {
      if (this.screenSize === 'desktop' || this.screenSize === 'tablet') {
        const showCustomTooltip = this.showCustomTooltip && this.date === this.hoveringDate;
        const showDefaultTooltip = !this.isDisabled && this.belongsToThisMonth && this.date === this.hoveringDate && this.tooltipMessageDisplay.length > 0 && this.checkIn !== null && this.checkOut === null;
        return showCustomTooltip || showDefaultTooltip;
      }
      return false;
    },
    isToday() {
      return this.compareDay(this.currentDate, this.date) === 0;
    },
    isADisabledDay() {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const day = days[this.date.getUTCDay()];
      return this.options.disabledWeekDaysObject[day];
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
      this.checkIfDisabled();
      this.checkIfHighlighted();
      if (this.checkIn !== null && this.checkOut !== null) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true;
        } else {
          this.isHighlighted = false;
        }
      } else if (this.checkIn !== null && this.checkOut === null) {
        this.disableNextDays();
      }
    },
    nextDisabledDate() {
      this.disableNextDays();
    }
  },
  beforeMount() {
    this.checkIfDisabled();
    this.checkIfHighlighted();
  },
  methods: {
    ...src_helpers,
    notAllowDaysBetweenCheckInAndNextValidDate(dayCode) {
      return this.checkIn && !this.checkOut && this.date.getDay() === dayCode && Object.keys(this.hoveringPeriod).length > 0 && this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.date) && this.dateFormater(this.checkIn) !== this.formatDate && this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.formatDate;
    },
    notAllowedDayDueToNextPeriod(currentPeriod) {
      // Check if the next period is directly after the current period
      const date = new Date(currentPeriod.endAt);
      let nextPeriod = null;
      this.sortedPeriodDates.forEach(period => {
        const dateA = new Date(period.startAt).setHours(0, 0, 0, 0);
        const dateB = new Date(date).setHours(0, 0, 0, 0);
        if (dateA === dateB) {
          nextPeriod = period;
        }
      });
      if (nextPeriod) {
        // Subtract the startAt nextPeriod to the currentPeriod minimumDuration
        const subtractTimestamp = new Date(nextPeriod.startAt).setHours(0, 0, 0, 0);
        const subtractDate = new Date(subtractTimestamp);
        const resultDate = new Date(subtractDate.setDate(subtractDate.getDate() - currentPeriod.minimumDuration));
        if (!this.validateDateBetweenTwoDates(currentPeriod.startAt, resultDate, this.date)) {
          return true;
        }
      }
      return false;
    },
    isClickable() {
      if (this.$refs && this.$refs.day) {
        return getComputedStyle(this.$refs.day).pointerEvents !== 'none';
      }
      return true;
    },
    dayClicked(event, date) {
      let resetCheckin = false;
      let disableCheckoutOnCheckin = !this.disableCheckoutOnCheckin;
      if (!this.checkIncheckOutHalfDay[this.formatDate] && this.currentBooking) {
        this.$emit('booking-clicked', event, date, this.currentBooking);
        return;
      }
      if (this.disableCheckoutOnCheckin) {
        if (this.checkIn && this.checkIn === date) {
          if (this.checkOut) {
            disableCheckoutOnCheckin = true;
            resetCheckin = true;
          } else {
            disableCheckoutOnCheckin = false;
            this.$emit('clear-selection');
          }
        } else {
          disableCheckoutOnCheckin = true;
        }
      }
      if (disableCheckoutOnCheckin) {
        if (!this.isDisabled || this.isClickable()) {
          const formatDate = this.dateFormater(date);
          this.$emit('day-clicked', event, date, formatDate, resetCheckin);
        } else {
          this.$emit('clear-selection');
          this.dayClicked(event, date);
        }
      }
    },
    compareEndDay() {
      if (this.options.endDate !== Infinity) {
        return this.compareDay(this.date, this.options.endDate) === 1;
      }
      return false;
    },
    checkIfDisabled() {
      this.isDisabled =
      // If this day is equal any of the disabled dates
      (this.sortedDisabledDates ? this.sortedDisabledDates.some(i => this.compareDay(i, this.date) === 0) : null) ||
      // Or is before the start date
      this.compareDay(this.date, this.options.startDate) === -1 ||
      // Or is after the end date
      this.compareEndDay() ||
      // Or is in one of the disabled days of the week
      this.isADisabledDay ||
      // Or is after max Nights
      this.date >= this.nextDisabledDate && this.nextDisabledDate !== null;

      // Handle checkout enabled
      if (this.options.enableCheckout) {
        if (this.compareDay(this.date, this.checkIn) === 1 && this.compareDay(this.date, this.checkOut) === -1) {
          this.isDisabled = false;
        }
      }
    },
    checkIfHighlighted() {
      if (this.checkIn !== null && this.checkOut !== null && this.isDisabled === false) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true;
        } else {
          this.isHighlighted = false;
        }
      }
    },
    disableNextDays() {
      if (this.nextDisabledDate !== null && !this.isDateLessOrEquals(this.date, this.nextDisabledDate) && this.nextDisabledDate !== Infinity) {
        this.isDisabled = true;
      } else if (this.isDateLessOrEquals(this.date, new Date().setDate(this.options.startDate.getDate() - 1))) {
        this.isDisabled = true;
      }
      if (this.compareDay(this.date, this.checkIn) === 0 && this.minNightCount === 0) {
        this.isDisabled = false;
      }
      if (this.isDateLessOrEquals(this.checkIn, this.date) && this.options.enableCheckout) {
        this.isDisabled = false;
      }
    },
    fetchHighlight() {
      if (this.checkIn !== null && this.checkOut === null && this.isDisabled === false) {
        if (!this.isDateLessOrEquals(this.checkIn, this.date)) {
          this.isHighlighted = false;
        } else if (this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = true;
        } else if (!this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = false;
        }
      }
    }
  }
});
;// ./src/DatePicker/components/Day.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/components/Day.vue




;
const Day_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Dayvue_type_script_lang_js, [['render',Dayvue_type_template_id_0b134872_render]])

/* harmony default export */ var Day = (Day_exports_);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/WeekRow.vue?vue&type=template&id=3204cdf4

const WeekRowvue_type_template_id_3204cdf4_hoisted_1 = {
  class: "vhd__datepicker__week-row vhd__hide-up-to-tablet"
};
function WeekRowvue_type_template_id_3204cdf4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", WeekRowvue_type_template_id_3204cdf4_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.dayNames, (name, ix) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
      key: `${$props.weekKey}-${ix}`,
      class: "vhd__datepicker__week-name"
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(name), 1);
  }), 128))]);
}
;// ./src/DatePicker/components/WeekRow.vue?vue&type=template&id=3204cdf4

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/WeekRow.vue?vue&type=script&lang=js
/* harmony default export */ var WeekRowvue_type_script_lang_js = ({
  name: 'WeekRow',
  props: {
    i18n: {
      type: Object,
      required: true
    },
    weekKey: {
      type: Number,
      required: true
    },
    firstDayOfWeek: {
      type: Number,
      required: true
    }
  },
  computed: {
    dayNames() {
      return [...this.i18n['day-names'].slice(this.firstDayOfWeek), ...this.i18n['day-names'].slice(0, this.firstDayOfWeek)].slice(0, 7);
    }
  }
});
;// ./src/DatePicker/components/WeekRow.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/components/WeekRow.vue




;
const WeekRow_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WeekRowvue_type_script_lang_js, [['render',WeekRowvue_type_template_id_3204cdf4_render]])

/* harmony default export */ var WeekRow = (WeekRow_exports_);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/Month.vue?vue&type=script&lang=js



/* harmony default export */ var Monthvue_type_script_lang_js = ({
  name: 'Month',
  components: {
    Day: Day,
    WeekRow: WeekRow
  },
  props: {
    month: {
      type: Object,
      required: true
    },
    dayKey: {
      type: Number,
      required: true
    },
    weekKey: {
      type: Number,
      required: true
    },
    isDesktop: {
      type: Boolean,
      required: true
    },
    showYear: {
      type: Boolean,
      required: true
    },
    yearBeforeMonth: {
      type: Boolean,
      required: true
    },
    firstDayOfWeek: {
      type: Number,
      required: true
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
      default: false
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
      default: true,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: true
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
      default: ''
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ''
    },
    showCustomTooltip: {
      default: false,
      type: Boolean
    },
    showPrice: {
      type: Boolean,
      default: false
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
    getMonth(date) {
      const month = 'MMMM';
      const year = 'YYYY';
      let format = month;
      // const i18n = { monthNames: this.i18n['month-names'] }

      if (this.showYear) {
        format = this.yearBeforeMonth ? `${year} ${month}` : `${month} ${year}`;
      }
      return lib_fecha.format(date, format).trim();
    },
    enterDay(event, day) {
      this.$emit('enter-day', event, day);
    },
    enterMonth(event) {
      this.$emit('enter-month', event, this.month);
    },
    clearSelection() {
      this.$emit('clear-selection');
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking);
    },
    handleDayClick(event, date, formatDate, resetCheckin) {
      this.$emit('day-clicked', event, date, formatDate, resetCheckin);
    }
  }
});
;// ./src/DatePicker/components/Month.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/components/Month.vue




;
const Month_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Monthvue_type_script_lang_js, [['render',Monthvue_type_template_id_b0c2d724_render]])

/* harmony default export */ var Month = (Month_exports_);
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/DateInput.vue?vue&type=template&id=34f958e6

const DateInputvue_type_template_id_34f958e6_hoisted_1 = ["tabindex"];
function DateInputvue_type_template_id_34f958e6_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vhd__datepicker__input", $options.inputClass]),
    onClick: _cache[0] || (_cache[0] = (...args) => $props.toggleDatepicker && $props.toggleDatepicker(...args)),
    onKeyup: _cache[1] || (_cache[1] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withKeys)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => $props.toggleDatepicker && $props.toggleDatepicker(...args), ["stop", "prevent"]), ["enter"])),
    "data-qa": "vhd__datepickerInput",
    tabindex: $options.tabIndex
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.inputDate ? $props.inputDate : $props.i18n[$props.inputDateType]), 43, DateInputvue_type_template_id_34f958e6_hoisted_1);
}
;// ./src/DatePicker/components/DateInput.vue?vue&type=template&id=34f958e6

;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/components/DateInput.vue?vue&type=script&lang=js
/* harmony default export */ var DateInputvue_type_script_lang_js = ({
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    inputDate: {
      type: String,
      default: null
    },
    inputDateType: {
      type: String,
      default: 'check-in'
    },
    singleDaySelection: {
      type: Boolean,
      default: false
    },
    toggleDatepicker: {
      type: Function,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    }
  },
  computed: {
    inputClass() {
      return {
        'vhd__datepicker__input--is-active': this.isOpen && this.inputDate == null,
        'vhd__datepicker__input--single-date': this.singleDaySelection
      };
    },
    tabIndex() {
      return this.inputDateType === 'check-in' ? 0 : -1;
    }
  }
});
;// ./src/DatePicker/components/DateInput.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/components/DateInput.vue




;
const DateInput_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DateInputvue_type_script_lang_js, [['render',DateInputvue_type_template_id_34f958e6_render]])

/* harmony default export */ var DateInput = (DateInput_exports_);
;// ./public/i18n/en.js
/* harmony default export */ var en = ({
  night: 'Night',
  nights: 'Nights',
  week: 'Week',
  weeks: 'Weeks',
  'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  'check-in': 'Check-in',
  'check-out': 'Check-out',
  'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  tooltip: {
    halfDayCheckIn: 'Available CheckIn',
    halfDayCheckOut: 'Available CheckOut',
    saturdayToSaturday: 'Only Saturday to Saturday',
    sundayToSunday: 'Only Sunday to Sunday',
    minimumRequiredPeriod: '%{minNightInPeriod} %{night} minimum.'
  }
});
;// ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.98.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.26.9_webpack@5.98.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.13_vue@3.5.13_webpack@5.98.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/DatePicker/HotelDatePicker.vue?vue&type=script&lang=js




















/* harmony default export */ var HotelDatePickervue_type_script_lang_js = ({
  name: 'HotelDatePicker',
  components: {
    Month: Month,
    DateInput: DateInput
  },
  props: {
    alwaysVisible: {
      type: Boolean,
      default: false
    },
    bookings: {
      type: Array,
      default() {
        return [];
      }
    },
    closeDatepickerOnClickOutside: {
      type: Boolean,
      default: true
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false
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
      default: true
    },
    enableCheckout: {
      type: Boolean,
      default: false
    },
    endDate: {
      type: [Date, String, Number],
      default: Infinity
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
      default: 'YYYY-MM-DD'
    },
    gridStyle: {
      type: Boolean,
      default: true
    },
    halfDay: {
      type: Boolean,
      default: true
    },
    hoveringTooltip: {
      default: true,
      type: [Boolean, Function]
    },
    i18n: {
      type: Object,
      default: () => en
    },
    lastDateAvailable: {
      type: [Number, Date],
      default: Infinity
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
      default: false
    },
    priceSymbol: {
      type: String,
      default: ''
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    showSingleMonth: {
      type: Boolean,
      default: false
    },
    showYear: {
      type: Boolean,
      default: true
    },
    singleDaySelection: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: [Date, String],
      default() {
        return new Date();
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
      default: true
    },
    yearBeforeMonth: {
      type: Boolean,
      default: false
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
      customTooltip: '',
      customTooltipHalfday: '',
      datepickerDayKey: 0,
      datepickerMonthKey: 0,
      datepickerWeekKey: 0,
      dynamicNightCounts: null,
      hash: Date.now(),
      hoveringDate: null,
      isTouchMove: false,
      months: [],
      nextDisabledDate: null,
      nextPeriodDisableDates: [],
      open: false,
      screenSize: null,
      showCustomTooltip: false,
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
      set(open) {
        this.open = open;
        if (!this.isDesktop && !this.alwaysVisible) {
          const body = document.querySelector('body');
          if (open) {
            body.style.overflow = 'hidden';
            this.$nextTick(() => {
              if (this.$refs) {
                const {
                  swiperWrapper
                } = this.$refs;
                const monthHeihgt = this.$refs.datepickerMonth[0].offsetHeight;
                const currentSelectionIndex = this.checkOut ? this.getMonthDiff(new Date(), this.checkOut) : 0;
                swiperWrapper.scrollTop = currentSelectionIndex * monthHeihgt;
              }
            });
          } else {
            body.style.overflow = '';
          }
        }
        this.$emit('input', this.open);
      }
    },
    sortBookings() {
      if (this.bookings.length > 0) {
        const bookings = [...this.bookings];
        return bookings.sort((a, b) => {
          const aa = a.checkInDate.split('/').reverse().join();
          const bb = b.checkOutDate.split('/').reverse().join();

          // eslint-disable-next-line no-nested-ternary
          return aa < bb ? -1 : aa > bb ? 1 : 0;
        });
      }
      return [];
    },
    duplicateBookingDates() {
      return this.baseHalfDayDates.filter((newArr => date => newArr.has(date) || !newArr.add(date))(new Set()));
    },
    baseHalfDayDates() {
      if (this.sortBookings.length > 0) {
        const bookings = this.sortBookings.map(x => [x.checkInDate, x.checkOutDate]);
        return bookings.reduce((a, b) => {
          return a.concat(b);
        });
      }
      return this.disabledDates;
    },
    paginateMonths() {
      const months = [this.months[this.activeMonthIndex]];
      if (!(this.showSingleMonth || this.alwaysVisible && !this.isDesktop)) {
        months.push(this.months[this.activeMonthIndex + 1]);
      }
      return months;
    },
    customTooltipMessage() {
      let tooltip = '';
      if (this.hoveringDate && (this.customTooltip || this.customTooltipHalfday)) {
        if (this.customTooltip && this.customTooltipHalfday) {
          tooltip = `${this.customTooltipHalfday}. <br/> ${this.customTooltip}`;
        } else if (this.customTooltipHalfday && !this.customTooltip) {
          tooltip = this.customTooltipHalfday;
        } else {
          tooltip = this.customTooltip;
        }
        return tooltip;
      }
      return this.tooltipMessage;
    },
    sortedPeriodDates() {
      let periodDates = [];
      if (this.periodDates) {
        const sortFunction = (fecha1, fecha2) => {
          const v1 = fecha1.startAt.split('/').reverse().join() + fecha1.endAt.split('/').reverse().join();
          const v2 = fecha2.startAt.split('/').reverse().join() + fecha2.endAt.split('/').reverse().join();

          // eslint-disable-next-line no-nested-ternary
          return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
        };
        periodDates = [...this.periodDates].sort(sortFunction);
      }
      return periodDates;
    },
    sliceMonthMobile() {
      const nbMonthRenderDom = 4;
      if (this.activeMonthIndex >= nbMonthRenderDom) {
        return this.months.slice(this.activeMonthIndex - 3, this.activeMonthIndex + 1);
      }
      return this.months.slice(0, nbMonthRenderDom);
    },
    isPreventedMaxMonth() {
      const lastIndexMonthAvailable = this.getMonthDiff(this.startDate, this.lastDateAvailable);
      return this.activeMonthIndex >= lastIndexMonthAvailable - 1;
    },
    minNightCount() {
      return this.dynamicNightCounts || this.minNights;
    },
    showClearSelectionButton() {
      return Boolean((this.checkIn || this.checkOut) && this.displayClearButton);
    },
    disabledWeekDaysObject() {
      const disabledDays = this.disabledDaysOfWeek.map(d => d.toLowerCase());
      // const names = this.i18n['day-names']
      const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const SUNDAY = names[0];
      const MONDAY = names[1];
      const TUESDAY = names[2];
      const WEDNESDAY = names[3];
      const THURSDAY = names[4];
      const FRIDAY = names[5];
      const SATURDAY = names[6];
      // The order of _default is important!
      const disabledWeekDaysObject = {
        sunday: disabledDays.includes(SUNDAY),
        monday: disabledDays.includes(MONDAY),
        tuesday: disabledDays.includes(TUESDAY),
        wednesday: disabledDays.includes(WEDNESDAY),
        thursday: disabledDays.includes(THURSDAY),
        friday: disabledDays.includes(FRIDAY),
        saturday: disabledDays.includes(SATURDAY)
      };
      return Object.assign(disabledWeekDaysObject, this.disabledWeekDays);
    },
    disabledWeekDaysArray() {
      const days = this.disabledWeekDaysObject;
      // const names = this.i18n['day-names']
      const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const fn = function fnDisabledWeekDaysArray(day, ix) {
        return day[1] ? names[ix] : false;
      };
      return Object.entries(days).map(fn).filter(v => v);
    },
    dayOptions() {
      return {
        ...this.$props,
        disabledWeekDaysObject: this.disabledWeekDaysObject
      };
    },
    numberOfMonths() {
      return this.showSingleMonth ? 1 : 2;
    },
    isDesktop() {
      return this.screenSize === 'desktop';
    }
  },
  watch: {
    bookings() {
      this.createHalfDayDates(this.baseHalfDayDates);
      this.reRender();
    },
    checkIn(newDate) {
      this.$emit('check-in-changed', newDate);
      this.$emit('starting-date-changed', newDate);
      this.reRender();
    },
    checkOut(newDate) {
      this.$emit('ending-date-changed', newDate);
      if (this.checkOut !== null) {
        this.hoveringDate = null;
        this.nextDisabledDate = null;
        this.createHalfDayDates(this.baseHalfDayDates);
        this.reRender();
        this.showCustomTooltip = false;
        this.isOpen = false;
      }
      this.$emit('check-out-changed', newDate);
      this.reRender();
    },
    firstDayOfWeek(newDay) {
      this.$emit('first-day-of-week-changed', newDay);
      const startDate = new Date(this.startDate);
      const offset = this.numberOfMonths + this.activeMonthIndex;
      this.generateInitialMonths();
      for (let i = this.numberOfMonths; i < offset; i++) {
        this.createMonth(new Date(startDate.getFullYear(), startDate.getMonth() + i, 1));
      }
      this.reRender();
    },
    startingDateValue(date) {
      this.setCheckIn(date);
    },
    endingDateValue(date) {
      this.setCheckOut(date);
    },
    singleDaySelection(single) {
      if (single) {
        this.setCheckOut(this.checkIn);
      } else {
        this.setCheckIn(this.checkIn);
        this.setCheckOut(null);
      }
      this.reRender();
    },
    yearBeforeMonth() {
      this.reRender();
    },
    i18n() {
      this.configureI18n();
    },
    disabledDates() {
      this.nextDisabledDate = null;
      this.createHalfDayDates(this.baseHalfDayDates);
      this.reRender();
    }
  },
  created() {
    this.configureI18n();
    this.generateInitialMonths();
  },
  mounted() {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
    if (!this.isDesktop) {
      document.addEventListener('touchstart', this.handleTouchStart, false);
      document.addEventListener('touchmove', this.handleTouchMove, false);
      document.addEventListener('touchend', this.handleTouchEnd, false);
    } else {
      document.addEventListener('click', this.handleClickOutside, false);
      document.addEventListener('keyup', this.escFunction, false);
    }
    this.onElementHeightChange(document.body, () => {
      this.emitHeighChangeEvent();
    });
    this.createHalfDayDates(this.baseHalfDayDates);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize);
    if (!this.isDesktop) {
      document.removeEventListener('touchstart', this.handleTouchStart);
      document.removeEventListener('touchmove', this.handleTouchMove);
      document.removeEventListener('touchend', this.handleTouchEnd);
    } else {
      document.removeEventListener('keyup', this.escFunction, false);
      document.removeEventListener('click', this.handleClickOutside);
    }
  },
  methods: {
    ...src_helpers,
    transformDisabledWeekDays() {},
    configureI18n() {
      lib_fecha.setGlobalDateI18n({
        dayNames: this.i18n['day-names'],
        dayNamesShort: this.shortenString(this.i18n['day-names'], 3),
        monthNames: this.i18n['month-names'],
        monthNamesShort: this.shortenString(this.i18n['month-names'], 3),
        amPm: ['am', 'pm'],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
        }
      });
    },
    generateInitialMonths() {
      this.months = [];
      if (this.checkIn && (this.getMonthDiff(this.getNextMonth(new Date(this.startDate)), this.checkIn) > 0 || this.getMonthDiff(this.startDate, this.checkIn) > 0)) {
        this.createMonth(new Date(this.startDate));
        const count = this.getMonthDiff(this.startDate, this.checkIn);
        const monthCount = this.showSingleMonth ? count - 1 : count;
        let nextMonth = new Date(this.startDate);
        for (let i = 0; i <= monthCount; i++) {
          const tempNextMonth = this.getNextMonth(nextMonth);
          this.createMonth(tempNextMonth);
          nextMonth = tempNextMonth;
        }
        if (this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0) {
          this.createMonth(this.getNextMonth(nextMonth));
          this.activeMonthIndex = 1;
        }
        this.activeMonthIndex += count;
      } else {
        this.createMonth(new Date(this.startDate));
        if (!this.showSingleMonth) {
          this.createMonth(this.getNextMonth(new Date(this.startDate)));
        }
      }
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking);
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('bookingClicked', event, date, currentBooking);
    },
    escFunction(e) {
      const escTouch = 27;
      if (e.keyCode === escTouch && this.isOpen && this.checkIn) {
        this.clearSelection();
      }
    },
    formatDate(date) {
      return this.dateFormater(date, this.format);
    },
    cleanString(string) {
      // eslint-disable-next-line no-useless-escape
      return string.replace(/\<br\/>/g, '');
    },
    dateIsInCheckInCheckOut(date) {
      const compareDate = this.dateFormater(date);
      let currentPeriod = null;
      this.sortedPeriodDates.forEach(d => {
        if (d.endAt !== compareDate && (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, compareDate))) {
          currentPeriod = d;
        }
      });
      return currentPeriod;
    },
    dayIsDisabled(date) {
      if (this.checkIn && !this.checkOut && !this.isDateLessOrEquals(date, this.nextDisabledDate) && this.nextDisabledDate !== Infinity) {
        return true;
      }
      if (this.checkIn && !this.checkOut && this.isDateLessOrEquals(date, this.checkIn)) {
        return true;
      }
      return false;
    },
    enterMonth(event, month) {
      this.$emit('enter-month', event, month);
    },
    enterDay(event, day) {
      const formatDate = this.dateFormater(day.date);
      const halfDays = Object.keys(this.checkIncheckOutHalfDay);
      const disableDays = this.disabledDates.filter(disableDate => !halfDays.includes(disableDate)).includes(formatDate);
      if (!this.dayIsDisabled(day.date) && day.belongsToThisMonth && !disableDays) {
        this.setCustomTooltipOnHover(day);
      }
      this.hoveringDate = this.singleDaySelection ? null : day.date;
      this.$emit('enter-day', event, day);
    },
    setCurrentPeriod(date, eventType) {
      let currentPeriod = {};
      if (this.sortedPeriodDates.length > 0) {
        this.sortedPeriodDates.forEach(d => {
          if (eventType === 'click' && (d.startAt === this.dateFormater(date) || d.endAt !== this.dateFormater(date) && this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          } else if (eventType === 'hover' && (d.startAt === this.dateFormater(date) || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          }
        });
        if (Object.keys(currentPeriod).length > 0) {
          this.hoveringPeriod = currentPeriod;
        } else if (this.minNightCount > 0 && this.checkIn) {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount)
          };
        } else {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount)
          };
        }
      } else if (this.minNightCount > 0) {
        this.hoveringPeriod = {
          periodType: 'nightly',
          minimumDuration: this.minNightCount,
          startAt: this.checkIn,
          endAt: this.addDays(this.checkIn, this.minNightCount)
        };
      }
    },
    setCustomTooltipOnHover(day) {
      const {
        date
      } = day;
      this.hoveringDate = date;
      if (this.showCustomTooltip) this.showCustomTooltip = false;
      this.setCurrentPeriod(date, 'hover');
      if (Object.keys(this.hoveringPeriod).length > 0) {
        // Create tooltip
        if (this.hoveringPeriod.periodType === 'weekly_by_saturday') {
          const dayCode = 6;
          const text = this.i18n.tooltip.saturdayToSaturday;
          this.showTooltipWeeklyOnHover(date, dayCode, text);
        } else if (this.hoveringPeriod.periodType === 'weekly_by_sunday') {
          const dayCode = 0;
          const text = this.i18n.tooltip.sundayToSunday;
          this.showTooltipWeeklyOnHover(date, dayCode, text);
        } else if (this.hoveringPeriod.periodType === 'nightly') {
          this.showTooltipNightlyOnHover(date);
        } else {
          // Clean tooltip
          this.showCustomTooltip = false;
          this.customTooltip = '';
        }
      } else {
        this.hoveringPeriod = {};
      }
      if (this.halfDay) {
        this.createHalfDayTooltip(day.date);
      }
    },
    handleDayClick(event, date, formatDate, resetCheckin) {
      this.nextPeriodDisableDates = [];
      if (resetCheckin) {
        this.clearSelection();
        this.$nextTick(() => {
          this.handleDayClick(event, date, formatDate, false);
        });
        return;
      }
      let nextDisabledDate = (this.maxNights ? this.addDays(date, this.maxNights + 1) : null) || this.getNextDate(this.sortedDisabledDates, date) || this.nextDateByDayOfWeekArray(this.disabledWeekDaysArray, date, this.i18n) || this.nextBookingDate(date) || Infinity;
      this.dynamicNightCounts = null;
      if (this.enableCheckout) {
        nextDisabledDate = Infinity;
      }
      if (this.checkIn == null && !this.singleDaySelection) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.setMinimumDuration(date);
      } else if (this.singleDaySelection) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.checkOut = date;
      } else if (this.checkIn !== null && this.checkOut == null && this.isDateLessOrEquals(date, this.checkIn)) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
      } else if (this.checkIn !== null && this.checkOut == null) {
        this.checkOut = date;
        this.$emit('period-selected', event, this.checkIn, this.checkOut);
        /**
         * @deprecated since v4.0.0 beta 11
         */
        this.$emit('periodSelected', event, this.checkIn, this.checkOut);
      } else {
        this.checkOut = null;
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.setMinimumDuration(date);
      }
      if (this.checkIn && !this.checkOut) {
        this.setCurrentPeriod(date, 'click');
        this.checkInPeriod = this.hoveringPeriod;
        this.setCustomTooltipOnClick();
      }
      this.nextDisabledDate = nextDisabledDate;
      this.hoveringDate = null;
      this.hoveringDate = date;
      this.$emit('day-clicked', date, formatDate, nextDisabledDate);
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('dayClicked', date, formatDate, nextDisabledDate);
    },
    nextBookingDate(date) {
      let closest = Infinity;
      if (this.sortBookings.length > 0) {
        const nextDateFormated = this.dateFormater(this.addDays(date, 1));
        const nextBooking = this.sortBookings.find(booking => this.validateDateBetweenDate(booking.checkInDate, nextDateFormated) || this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, nextDateFormated));
        closest = nextBooking ? nextBooking.checkInDate : Infinity;
      }
      return closest;
    },
    setCustomTooltipOnClick() {
      if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes('weekly')) {
        const nextValidDate = this.addDays(this.checkIn, this.minNightCount);
        this.checkInPeriod.nextValidDate = nextValidDate;
        this.showTooltipWeeklyOnClick();
      } else if (this.checkInPeriod.periodType === 'nightly') {
        this.showTooltipNightlyOnClick();
      }
    },
    showTooltipWeeklyOnHover(date, periodDayType, text) {
      const countDaysBetweenCheckInCurrentDay = this.countDays(this.checkIn, date);
      const notOnPeriodDayType = date.getDay() !== periodDayType;
      const isCheckInCheckOut = this.checkIn && this.checkOut;
      const notCheckInNotPeriodDayType = !this.checkIn && notOnPeriodDayType;
      const isCheckInNotCheckOut = this.checkIn && !this.checkOut;
      const isNotBetweenCheckInAndCheckOut = !this.validateDateBetweenTwoDates(this.checkIn, this.checkOut, date);
      const notAllowDaysBetweenCheckInAndNextValidDate = this.hoveringPeriod.nextValidDate && this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.hoveringDate) && this.dateFormater(this.checkIn) !== this.dateFormater(this.hoveringDate) && this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.dateFormater(this.hoveringDate);
      const hasHalfDayOnWeeklyPeriod = Object.keys(this.checkIncheckOutHalfDay).length > 0 && this.checkIncheckOutHalfDay[this.dateFormater(date)] && this.checkIncheckOutHalfDay[this.dateFormater(date)].checkIn;

      // Show tooltip on not-allowed day
      if (notCheckInNotPeriodDayType) {
        this.showCustomTooltip = true;
        this.customTooltip = text;
      } else {
        this.showCustomTooltip = false;
        this.customTooltip = '';
      }

      // Show tooltip when CheckIn
      if (isCheckInNotCheckOut) {
        const nextDayValid = this.addDays(this.checkIn, this.minNightCount);
        const isDateAfterMinimumDuration = this.getDayDiff(date, nextDayValid) <= 0;
        if (isDateAfterMinimumDuration && notOnPeriodDayType) {
          this.showCustomTooltip = true;
          this.customTooltip = text;
        } else if (notOnPeriodDayType || notAllowDaysBetweenCheckInAndNextValidDate) {
          if (this.checkInPeriod && this.checkInPeriod.periodType === 'nightly') {
            this.showCustomTooltip = false;
            this.customTooltip = '';
          } else {
            // Show default message on currentDay
            const night = this.pluralize(this.minNightCount, 'week');
            this.showCustomTooltip = true;
            this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
              minNightInPeriod: this.minNightCount / 7,
              night
            });
          }
        } else if (hasHalfDayOnWeeklyPeriod) {
          // Show the correct wording in comparison to periodType of this.checkInPeriod equal to "nightly" / "weekly"
          if (this.checkInPeriod.periodType !== 'nightly') {
            this.customTooltip = `${countDaysBetweenCheckInCurrentDay / 7} ${this.pluralize(this.minNightCount, 'week')}`;
          } else if (this.checkInPeriod.periodType === 'nightly') {
            this.customTooltip = `${countDaysBetweenCheckInCurrentDay} ${countDaysBetweenCheckInCurrentDay !== 1 ? this.i18n.nights : this.i18n.night}`;
          }
        } else {
          // Clean tooltip
          this.showCustomTooltip = false;
          this.customTooltip = '';
        }
        // Show tooltip when CheckIn & CheckOut on all the days that are not between checkIn and CheckOut
      } else if (isCheckInCheckOut && notOnPeriodDayType && isNotBetweenCheckInAndCheckOut) {
        this.showCustomTooltip = true;
        this.customTooltip = text;
      }
    },
    showTooltipWeeklyOnClick() {
      const night = this.pluralize(this.minNightCount, 'week');
      this.showCustomTooltip = true;
      this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
        minNightInPeriod: this.minNightCount / 7,
        night
      });
    },
    showTooltipNightlyOnHover(date) {
      if (this.checkIn && !this.checkOut) {
        const nextDayValid = this.addDays(this.checkIn, this.minNightCount);
        const isDateAfterMinimumDuration = this.getDayDiff(date, nextDayValid) <= 0;
        const countOfDays = this.countDays(this.checkIn, date);
        const night = this.pluralize(Math.max(this.minNightCount, countOfDays));
        if (!isDateAfterMinimumDuration) {
          const minNightInPeriod = this.hoveringPeriod.minimumDuration;
          this.showCustomTooltip = true;
          this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
            minNightInPeriod,
            night
          });
        } else {
          this.customTooltip = `${countOfDays} ${night}`;
        }
      } else {
        this.customTooltip = '';
      }
    },
    showTooltipNightlyOnClick() {
      const minNightInPeriod = this.hoveringPeriod.minimumDuration;
      const night = this.pluralize(this.minNightCount);
      this.showCustomTooltip = true;
      this.customTooltip = this.completeTrad(this.i18n.tooltip.minimumRequiredPeriod, {
        minNightInPeriod,
        night
      });
    },
    createHalfDayTooltip(date) {
      this.customTooltipHalfday = '';
      const formatedHoveringDate = this.dateFormater(date);
      if (this.checkIncheckOutHalfDay[formatedHoveringDate]) {
        this.showCustomTooltip = true;
        if (this.checkIncheckOutHalfDay[formatedHoveringDate].checkIn) {
          this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckOut;
        } else if (this.checkIncheckOutHalfDay[formatedHoveringDate].checkOut) {
          this.customTooltipHalfday = this.i18n.tooltip.halfDayCheckIn;
        }
      }
    },
    completeTrad(translation, keys) {
      let newT = translation;
      const keysTranslations = Object.keys(keys);
      keysTranslations.forEach(key => {
        newT = newT.replace(`%{${key}}`, keys[key]);
      });
      return newT;
    },
    handleClickOutside(event) {
      if (!this.closeDatepickerOnClickOutside) {
        return;
      }
      const ignoreClickOnMeElement = this.$refs[`DatePicker-${this.hash}`];
      if (ignoreClickOnMeElement) {
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
          this.hideDatepicker();
        }
      }
    },
    handleWindowResize() {
      if (window.innerWidth < 480) {
        this.screenSize = 'smartphone';
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        this.screenSize = 'tablet';
      } else if (window.innerWidth >= 768) {
        this.screenSize = 'desktop';
      }
      return this.screenSize;
    },
    onElementHeightChange(el, callback) {
      let lastHeight = el.clientHeight;
      let newHeight = lastHeight;
      const newEl = el;
      (function run() {
        newHeight = el.clientHeight;
        if (lastHeight !== newHeight) {
          callback();
        }
        lastHeight = newHeight;
        if (newEl.onElementHeightChangeTimer) {
          clearTimeout(el.onElementHeightChangeTimer);
        }
        newEl.onElementHeightChangeTimer = setTimeout(run, 1000);
      })();
    },
    emitHeighChangeEvent() {
      this.$emit('height-changed');
    },
    reRender() {
      this.datepickerDayKey += 1;
      this.datepickerMonthKey += 1;
      this.datepickerWeekKey += 1;
    },
    clearSelection() {
      this.hoveringDate = null;
      this.checkIn = null;
      this.checkOut = null;
      this.nextDisabledDate = null;
      this.nextPeriodDisableDates = [];
      this.showCustomTooltip = false;
      this.hoveringPeriod = {};
      this.checkInPeriod = {};
      this.createHalfDayDates(this.baseHalfDayDates);
      this.reRender();
      this.$emit('clear-selection');
    },
    closeMobileDatepicker() {
      this.hideDatepicker();
    },
    hideDatepicker() {
      this.isOpen = false;
    },
    showDatepicker() {
      this.isOpen = true;
    },
    toggleDatepicker() {
      this[this.isOpen ? 'hideDatepicker' : 'showDatepicker']();
    },
    clearCheckIn() {
      if (this.checkIn && !this.checkOut) {
        this.clearSelection();
      }
    },
    clickOutside() {
      if (this.closeDatepickerOnClickOutside) {
        this.hideDatepicker();
      }
    },
    setMinimumDuration(date) {
      if (this.sortedPeriodDates) {
        let nextPeriod = null;
        let currentPeriod = null;
        const compareDate = this.dateFormater(date);
        this.sortedPeriodDates.forEach(d => {
          if (d.endAt !== compareDate && (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          }
        });
        if (currentPeriod) {
          this.sortedPeriodDates.forEach(period => {
            if (period.startAt === currentPeriod.endAt) {
              nextPeriod = period;
            }
          });
          if (this.checkIn && !this.checkOut && nextPeriod) {
            const endNextPeriod = this.addDays(nextPeriod.startAt, nextPeriod.minimumDuration - 1);
            const startNextPeriodPlusOne = this.addDays(nextPeriod.startAt, 1);
            const newDisablesDates = this.getDaysArray(startNextPeriodPlusOne, endNextPeriod);
            this.nextPeriodDisableDates = newDisablesDates;
          }
          if (currentPeriod.periodType === 'nightly' && currentPeriod.endAt !== date) {
            this.dynamicNightCounts = currentPeriod.minimumDuration;
          }
          if (currentPeriod.periodType === 'weekly_by_saturday' || currentPeriod.periodType === 'weekly_by_sunday') {
            const minimumDuration = currentPeriod.minimumDuration * 7;
            this.dynamicNightCounts = minimumDuration;
          }
        } else {
          this.dynamicNightCounts = 0;
        }
      }
    },
    renderPreviousMonth() {
      if (this.activeMonthIndex >= 1) {
        const firstDayOfLastMonth = this.months[this.activeMonthIndex].days.filter(day => day.belongsToThisMonth === true);
        const previousMonth = this.getPreviousMonth(firstDayOfLastMonth[0].date);
        this.activeMonthIndex--;
        this.$emit('previous-month-rendered', previousMonth);
      }
    },
    renderNextMonth: lodash_throttle_default()(function throttleRenderNextMonth() {
      if (!this.showSingleMonth && this.activeMonthIndex < this.months.length - 2 || this.showSingleMonth && this.activeMonthIndex < this.months.length - 1) {
        this.activeMonthIndex++;
        return;
      }
      let firstDayOfLastMonth;
      if (!this.isDesktop || this.showSingleMonth) {
        firstDayOfLastMonth = this.months[this.months.length - 1].days.filter(day => day.belongsToThisMonth === true);
      } else {
        firstDayOfLastMonth = this.months[this.activeMonthIndex + 1].days.filter(day => day.belongsToThisMonth === true);
      }
      if (this.endDate !== Infinity) {
        if (lib_fecha.format(firstDayOfLastMonth[0].date, 'YYYYMM') === lib_fecha.format(new Date(this.endDate), 'YYYYMM')) {
          return;
        }
      }
      const nextMonth = this.getNextMonth(firstDayOfLastMonth[0].date);
      this.createMonth(nextMonth);
      this.activeMonthIndex++;
      this.$emit('next-month-rendered', nextMonth);
    }, 350),
    setCheckIn(date) {
      this.checkIn = date;
    },
    setCheckOut(date) {
      this.checkOut = date;
    },
    createMonth(date) {
      const firstDay = this.getFirstDay(date, this.firstDayOfWeek);
      const month = {
        days: []
      };
      for (let i = 0; i < 42; i++) {
        month.days.push({
          date: this.addDays(firstDay, i),
          belongsToThisMonth: this.addDays(firstDay, i).getMonth() === date.getMonth()
        });
      }
      this.months.push(month);
    },
    createHalfDayDates(_baseHalfDayDates) {
      let sortedDates = [];
      const checkIncheckOutHalfDay = {};
      const baseHalfDayDates = [..._baseHalfDayDates];

      // Sorted disabledDates
      baseHalfDayDates.sort((a, b) => {
        const aa = a.split('/').reverse().join();
        const bb = b.split('/').reverse().join();

        // eslint-disable-next-line no-nested-ternary
        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });
      if (this.sortBookings.length === 0) {
        for (let i = 0; i < baseHalfDayDates.length; i++) {
          const newDate = baseHalfDayDates[i];
          if (this.halfDay) {
            const newDateIncrementOne = baseHalfDayDates[i + 1];
            if (i === 0) {
              checkIncheckOutHalfDay[newDate] = {
                checkIn: true
              };
            }
            if (!checkIncheckOutHalfDay[newDate] && baseHalfDayDates[i + 1] && this.getDayDiff(newDate, newDateIncrementOne) > 1) {
              checkIncheckOutHalfDay[newDate] = {
                checkOut: true
              };
              checkIncheckOutHalfDay[newDateIncrementOne] = {
                checkIn: true
              };
            }
            if (i === baseHalfDayDates.length - 1) {
              checkIncheckOutHalfDay[baseHalfDayDates[baseHalfDayDates.length - 1]] = {
                checkOut: true
              };
            }
          }
          sortedDates[i] = baseHalfDayDates[i];
        }
      } else {
        this.sortBookings.forEach(booking => {
          checkIncheckOutHalfDay[booking.checkInDate] = {
            checkIn: true
          };
          checkIncheckOutHalfDay[booking.checkOutDate] = {
            checkOut: true
          };
        });
      }
      if (this.halfDay) {
        const halfDays = Object.keys(checkIncheckOutHalfDay);
        sortedDates = sortedDates.filter(date => !halfDays.includes(date));
      }
      sortedDates = sortedDates.map(date => new Date(date));
      this.sortedDisabledDates = sortedDates.sort((a, b) => a - b);
      this.checkIncheckOutHalfDay = checkIncheckOutHalfDay;
      this.$emit('handle-checkin-checkout-half-day', this.checkIncheckOutHalfDay);
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('handleCheckinCheckoutHalfDay', this.checkIncheckOutHalfDay);
    }
  }
});
;// ./src/DatePicker/HotelDatePicker.vue?vue&type=script&lang=js
 
;// ./src/DatePicker/HotelDatePicker.vue




;
const HotelDatePicker_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(HotelDatePickervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var HotelDatePicker = (HotelDatePicker_exports_);
;// ./src/assets/scss/index.scss
// extracted by mini-css-extract-plugin

;// ./src/index.js


/* harmony default export */ var src_0 = (HotelDatePicker);

;// ./node_modules/.pnpm/@vue+cli-service@5.0.8_@vue+compiler-sfc@3.5.13_lodash@4.17.21_sass-loader@8.0.2_sass@1_02c2288fac8a76245e41f5bddaa8cccb/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vueHotelDatepicker.common.js.map
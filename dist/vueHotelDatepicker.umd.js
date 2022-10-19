(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueHotelDatepicker"] = factory();
	else
		root["vueHotelDatepicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

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

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
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
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_TO_LENGTH || SILENT_ON_NON_WRITABLE_LENGTH }, {
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

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

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

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

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
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
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

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
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

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

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
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
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

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

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

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
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

/***/ "7234":
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

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

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7d7e":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = function (fn) {
  return NATIVE_BIND ? uncurryThisWithBind(fn) : function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "84a2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8ea1":
/***/ (function(module, exports) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
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

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

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
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a41b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

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

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

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
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThisRaw = __webpack_require__("7d7e");

var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

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

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

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

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__("c6b6");
var uncurryThisRaw = __webpack_require__("7d7e");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThisRaw(fn);
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

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

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "css", function() { return /* reexport */ scss_default.a; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/HotelDatePicker.vue?vue&type=template&id=356d2dc1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.value ? _c('div', {
    ref: `DatePicker-${_vm.hash}`,
    staticClass: "vhd__datepicker__wrapper",
    class: {
      'vhd__datepicker__wrapper--grid': _vm.gridStyle,
      'vhd__datepicker__wrapper--booking': _vm.bookings.length > 0,
      vhd__datepicker__fullview: _vm.alwaysVisible
    }
  }, [_vm.isOpen ? _c('div', {
    staticClass: "vhd__datepicker__close-button vhd__hide-on-desktop",
    on: {
      "click": _vm.closeMobileDatepicker
    }
  }, [_c('i', [_vm._v("+")])]) : _vm._e(), _c('div', {
    staticClass: "vhd__datepicker__dummy-wrapper",
    class: {
      'vhd__datepicker__dummy-wrapper--is-active': _vm.isOpen
    }
  }, [_c('date-input', {
    attrs: {
      "i18n": _vm.i18n,
      "input-date": _vm.formatDate(_vm.checkIn),
      "input-date-type": "check-in",
      "is-open": _vm.isOpen,
      "toggle-datepicker": _vm.toggleDatepicker,
      "single-day-selection": _vm.singleDaySelection
    }
  }), !_vm.singleDaySelection ? _c('date-input', {
    attrs: {
      "i18n": _vm.i18n,
      "input-date": _vm.formatDate(_vm.checkOut),
      "input-date-type": "check-out",
      "is-open": _vm.isOpen,
      "toggle-datepicker": _vm.toggleDatepicker,
      "single-day-selection": _vm.singleDaySelection
    }
  }) : _vm._e()], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showClearSelectionButton,
      expression: "showClearSelectionButton"
    }],
    staticClass: "vhd__datepicker__clear-button",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 68 68",
      "role": "img",
      "aria-label": "x"
    }
  }, [_c('title', [_vm._v("x")]), _c('path', {
    attrs: {
      "d": "M6.5 6.5l55 55m0-55l-55 55",
      "stroke": "#000",
      "fill": "none",
      "stroke-linecap": "square"
    }
  })])]), _c('div', {
    staticClass: "vhd__datepicker",
    class: {
      'vhd__datepicker--open': _vm.isOpen && !_vm.alwaysVisible,
      'vhd__datepicker--closed': !_vm.isOpen && !_vm.alwaysVisible,
      'vhd__datepicker--right': _vm.positionRight
    }
  }, [_c('div', {
    staticClass: "vhd__hide-on-desktop"
  }, [_vm.isOpen ? _c('div', {
    staticClass: "vhd__datepicker__dummy-wrapper vhd__datepicker__dummy-wrapper--no-border",
    class: {
      'vhd__datepicker__dummy-wrapper--is-active': _vm.isOpen
    },
    on: {
      "click": _vm.toggleDatepicker
    }
  }, [_c('div', {
    staticClass: "vhd__datepicker__input",
    class: {
      'vhd__datepicker__dummy-input--is-active': _vm.isOpen && _vm.checkIn == null
    },
    attrs: {
      "tabindex": "0",
      "type": "button"
    }
  }, [_vm._v(" " + _vm._s(`${_vm.checkIn ? _vm.formatDate(_vm.checkIn) : _vm.i18n['check-in']}`) + " ")]), _c('div', {
    staticClass: "vhd__datepicker__input",
    class: {
      'vhd__datepicker__dummy-input--is-active': _vm.isOpen && _vm.checkOut == null && _vm.checkIn !== null
    },
    attrs: {
      "tabindex": "0",
      "type": "button"
    }
  }, [_vm._v(" " + _vm._s(`${_vm.checkOut ? _vm.formatDate(_vm.checkOut) : _vm.i18n['check-out']}`) + " ")])]) : _vm._e()]), _vm.isOpen || _vm.alwaysVisible ? _c('div', {
    staticClass: "vhd__datepicker__inner"
  }, [_c('div', {
    class: {
      vhd__datepicker__header: _vm.isDesktop,
      'vhd__datepicker__header-mobile': !_vm.isDesktop
    }
  }, [_c('button', {
    staticClass: "vhd__datepicker__month-button vhd__datepicker__month-button--prev",
    attrs: {
      "type": "button",
      "tabindex": _vm.isOpen ? 0 : -1,
      "disabled": _vm.activeMonthIndex === 0
    },
    on: {
      "click": _vm.renderPreviousMonth,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.renderPreviousMonth.apply(null, arguments);
      }
    }
  }), _c('button', {
    staticClass: "vhd__datepicker__month-button vhd__datepicker__month-button--next",
    attrs: {
      "type": "button",
      "disabled": _vm.isPreventedMaxMonth,
      "tabindex": _vm.isOpen ? 0 : -1
    },
    on: {
      "click": _vm.renderNextMonth,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.renderNextMonth.apply(null, arguments);
      }
    }
  })]), _vm.isDesktop || _vm.alwaysVisible ? _c('div', {
    staticClass: "vhd__datepicker__months",
    class: {
      'vhd__datepicker__months--full': _vm.showSingleMonth
    }
  }, _vm._l(_vm.paginateMonths, function (month, monthIndex) {
    return _c('Month', {
      key: `${_vm.datepickerMonthKey}-${monthIndex}-desktop`,
      ref: "datepickerMonth",
      refInFor: true,
      attrs: {
        "month": month,
        "dayKey": _vm.datepickerDayKey,
        "weekKey": _vm.datepickerWeekKey,
        "isDesktop": _vm.isDesktop,
        "firstDayOfWeek": _vm.firstDayOfWeek,
        "showYear": _vm.showYear,
        "yearBeforeMonth": _vm.yearBeforeMonth,
        "activeMonthIndex": _vm.activeMonthIndex,
        "bookings": _vm.sortBookings,
        "checkIn": _vm.checkIn,
        "checkIncheckOutHalfDay": _vm.checkIncheckOutHalfDay,
        "checkInPeriod": _vm.checkInPeriod,
        "checkOut": _vm.checkOut,
        "disableCheckoutOnCheckin": _vm.disableCheckoutOnCheckin,
        "duplicateBookingDates": _vm.duplicateBookingDates,
        "hoveringDate": _vm.hoveringDate,
        "hoveringPeriod": _vm.hoveringPeriod,
        "i18n": _vm.i18n,
        "isOpen": _vm.isOpen,
        "minNightCount": _vm.minNightCount,
        "nextDisabledDate": _vm.nextDisabledDate,
        "nextPeriodDisableDates": _vm.nextPeriodDisableDates,
        "options": _vm.dayOptions,
        "priceSymbol": _vm.priceSymbol,
        "screenSize": _vm.screenSize,
        "showCustomTooltip": _vm.showCustomTooltip,
        "showPrice": _vm.showPrice,
        "disabledDates": _vm.disabledDates,
        "periodDates": _vm.periodDates,
        "sortedDisabledDates": _vm.sortedDisabledDates,
        "sortedPeriodDates": _vm.sortedPeriodDates,
        "tooltipMessage": _vm.customTooltipMessage
      },
      on: {
        "clear-selection": _vm.clearSelection,
        "booking-clicked": _vm.handleBookingClicked,
        "day-clicked": _vm.handleDayClick,
        "enter-day": _vm.enterDay,
        "enter-month": _vm.enterMonth
      }
    });
  }), 1) : _vm._e(), !_vm.isDesktop && _vm.isOpen && !_vm.alwaysVisible ? _c('div', {
    class: ['vhd__datepicker__months-wrapper', {
      'vhd__show-tooltip': _vm.showCustomTooltip && _vm.hoveringTooltip
    }]
  }, [_vm.hoveringTooltip ? _c('div', {
    staticClass: "vhd__datepicker__tooltip--mobile"
  }, [_vm.customTooltipMessage ? [_vm._v(" " + _vm._s(_vm.cleanString(_vm.customTooltipMessage)) + " ")] : _vm._e()], 2) : _vm._e(), _c('div', {
    ref: "swiperWrapper",
    staticClass: "vhd__datepicker__months"
  }, _vm._l(_vm.paginateMonths, function (month, monthIndex) {
    return _c('Month', {
      key: `${_vm.datepickerMonthKey}-${monthIndex}-desktop`,
      ref: "datepickerMonth",
      refInFor: true,
      attrs: {
        "month": month,
        "dayKey": _vm.datepickerDayKey,
        "weekKey": _vm.datepickerWeekKey,
        "isDesktop": _vm.isDesktop,
        "firstDayOfWeek": _vm.firstDayOfWeek,
        "showYear": _vm.showYear,
        "yearBeforeMonth": _vm.yearBeforeMonth,
        "activeMonthIndex": _vm.activeMonthIndex,
        "bookings": _vm.sortBookings,
        "checkIn": _vm.checkIn,
        "checkIncheckOutHalfDay": _vm.checkIncheckOutHalfDay,
        "checkInPeriod": _vm.checkInPeriod,
        "checkOut": _vm.checkOut,
        "disableCheckoutOnCheckin": _vm.disableCheckoutOnCheckin,
        "duplicateBookingDates": _vm.duplicateBookingDates,
        "hoveringDate": _vm.hoveringDate,
        "hoveringPeriod": _vm.hoveringPeriod,
        "i18n": _vm.i18n,
        "isOpen": _vm.isOpen,
        "minNightCount": _vm.minNightCount,
        "nextDisabledDate": _vm.nextDisabledDate,
        "nextPeriodDisableDates": _vm.nextPeriodDisableDates,
        "options": _vm.dayOptions,
        "priceSymbol": _vm.priceSymbol,
        "screenSize": _vm.screenSize,
        "showCustomTooltip": false,
        "showPrice": _vm.showPrice,
        "sortedDisabledDates": _vm.sortedDisabledDates,
        "sortedPeriodDates": _vm.sortedPeriodDates,
        "tooltipMessage": _vm.customTooltipMessage
      },
      on: {
        "clear-selection": _vm.clearSelection,
        "booking-clicked": _vm.handleBookingClicked,
        "day-clicked": _vm.handleDayClick,
        "enter-day": _vm.enterDay,
        "enter-month": _vm.enterMonth
      }
    });
  }), 1)]) : _vm._e()]) : _vm._e(), _vm._t("content")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/HotelDatePicker.vue?vue&type=template&id=356d2dc1&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__("84a2");
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// CONCATENATED MODULE: ./node_modules/fecha/lib/fecha.js
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
var fecha_format = function (dateObj, mask, i18n) {
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
    format: fecha_format,
    parse: parse,
    defaultI18n: defaultI18n,
    setGlobalDateI18n: setGlobalDateI18n,
    setGlobalDateMasks: setGlobalDateMasks
};

/* harmony default export */ var lib_fecha = (fecha);

//# sourceMappingURL=fecha.js.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Month.vue?vue&type=template&id=b0c2d724&
var Monthvue_type_template_id_b0c2d724_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "datepickerMonth",
    staticClass: "vhd__datepicker__month",
    on: {
      "mouseenter": function ($event) {
        return _vm.enterMonth($event);
      }
    }
  }, [_c('p', {
    staticClass: "vhd__datepicker__month-name"
  }, [_vm._v(" " + _vm._s(_vm.monthName) + " ")]), _c('week-row', _vm._b({}, 'week-row', _vm.$props, false)), _vm._l(_vm.month.days, function (day, dayIndex) {
    return _c('div', {
      key: `${_vm.dayKey}-${dayIndex}`,
      staticClass: "vhd__square",
      on: {
        "mouseenter": function ($event) {
          return _vm.enterDay($event, day);
        }
      }
    }, [_c('Day', _vm._b({
      attrs: {
        "belongsToThisMonth": day.belongsToThisMonth,
        "date": day.date
      },
      on: {
        "clear-selection": _vm.clearSelection,
        "booking-clicked": _vm.handleBookingClicked,
        "day-clicked": _vm.handleDayClick
      }
    }, 'Day', _vm.$props, false))], 1);
  })], 2);
};
var Monthvue_type_template_id_b0c2d724_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/Month.vue?vue&type=template&id=b0c2d724&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Day.vue?vue&type=template&id=0b134872&
var Dayvue_type_template_id_0b134872_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showTooltip && _vm.options.hoveringTooltip ? _c('div', {
    staticClass: "vhd__datepicker__tooltip",
    domProps: {
      "innerHTML": _vm._s(_vm.tooltipMessageDisplay)
    }
  }) : _vm._e(), _c('div', {
    ref: "day",
    staticClass: "vhd__datepicker__month-day",
    class: [_vm.dayClass, _vm.disabledClass, _vm.checkinCheckoutClass, _vm.bookingClass, {
      'vhd__datepicker__month-day--today': _vm.isToday
    }],
    attrs: {
      "tabindex": _vm.tabIndex
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.dayClicked($event, _vm.date);
      }
    }
  }, [_c('div', {
    staticClass: "vhd__datepicker__month-day-wrapper"
  }, [_c('span', {
    staticClass: "day"
  }, [_vm._v(_vm._s(_vm.dayNumber))]), _c('Price', {
    attrs: {
      "show": _vm.showPrice,
      "price": _vm.dayPrice,
      "symbol": _vm.priceSymbol
    }
  })], 1)]), _vm.currentBooking && _vm.belongsToThisMonth && !_vm.isDisabled ? _c('BookingBullet', {
    attrs: {
      "currentBooking": _vm.currentBooking,
      "duplicateBookingDates": _vm.duplicateBookingDates,
      "formatDate": _vm.formatDate,
      "previousBooking": _vm.previousBooking
    }
  }) : _vm._e()], 1);
};
var Dayvue_type_template_id_0b134872_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/Day.vue?vue&type=template&id=0b134872&

// CONCATENATED MODULE: ./src/helpers.js

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/BookingBullet.vue?vue&type=template&id=73e153d9&
var BookingBulletvue_type_template_id_73e153d9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('i', {
    staticClass: "vhd__parent-bullet"
  }, [_vm.previousBooking && _vm.duplicateBookingDates.includes(_vm.formatDate) ? _c('i', {
    staticClass: "vhd__bullet",
    class: [{
      vhd__checkInCheckOut: _vm.duplicateBookingDates.includes(_vm.formatDate)
    }],
    style: _vm.previousBooking.style
  }) : _vm._e(), _vm.previousBooking && _vm.duplicateBookingDates.includes(_vm.formatDate) ? _c('i', {
    staticClass: "vhd__pipe vhd__checkInCheckOut",
    style: _vm.previousBooking.style
  }) : _vm._e(), _vm.currentBooking && (_vm.currentBooking.checkInDate === _vm.formatDate || _vm.currentBooking.checkOutDate === _vm.formatDate) ? _c('i', {
    staticClass: "vhd__bullet",
    class: [{
      vhd__checkIn: _vm.currentBooking.checkInDate === _vm.formatDate,
      vhd__checkOut: _vm.currentBooking.checkOutDate === _vm.formatDate
    }],
    style: _vm.currentBooking.style
  }) : _vm._e(), _vm.currentBooking ? _c('i', {
    staticClass: "vhd__pipe",
    class: [{
      vhd__checkIn: _vm.currentBooking.checkInDate === _vm.formatDate,
      vhd__checkOut: _vm.currentBooking.checkOutDate === _vm.formatDate
    }],
    style: _vm.currentBooking.style
  }) : _vm._e()]);
};
var BookingBulletvue_type_template_id_73e153d9_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/BookingBullet.vue?vue&type=template&id=73e153d9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/BookingBullet.vue?vue&type=script&lang=js&
/* harmony default export */ var BookingBulletvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/BookingBullet.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BookingBulletvue_type_script_lang_js_ = (BookingBulletvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/DatePicker/components/BookingBullet.vue





/* normalize component */

var component = normalizeComponent(
  components_BookingBulletvue_type_script_lang_js_,
  BookingBulletvue_type_template_id_73e153d9_render,
  BookingBulletvue_type_template_id_73e153d9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BookingBullet = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Price.vue?vue&type=template&id=2998315e&
var Pricevue_type_template_id_2998315e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show && _vm.price ? _c('div', {
    staticClass: "price"
  }, [_c('span', {
    staticClass: "price-symbol"
  }, [_vm._v(_vm._s(_vm.symbol))]), _c('span', {
    staticClass: "price-number"
  }, [_vm._v(_vm._s(_vm.price))])]) : _vm._e();
};
var Pricevue_type_template_id_2998315e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/Price.vue?vue&type=template&id=2998315e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Price.vue?vue&type=script&lang=js&
/* harmony default export */ var Pricevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/Price.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pricevue_type_script_lang_js_ = (Pricevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/components/Price.vue





/* normalize component */

var Price_component = normalizeComponent(
  components_Pricevue_type_script_lang_js_,
  Pricevue_type_template_id_2998315e_render,
  Pricevue_type_template_id_2998315e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Price = (Price_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Day.vue?vue&type=script&lang=js&




/* harmony default export */ var Dayvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/Day.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dayvue_type_script_lang_js_ = (Dayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/components/Day.vue





/* normalize component */

var Day_component = normalizeComponent(
  components_Dayvue_type_script_lang_js_,
  Dayvue_type_template_id_0b134872_render,
  Dayvue_type_template_id_0b134872_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Day = (Day_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/WeekRow.vue?vue&type=template&id=3204cdf4&
var WeekRowvue_type_template_id_3204cdf4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vhd__datepicker__week-row vhd__hide-up-to-tablet"
  }, _vm._l(_vm.dayNames, function (name, ix) {
    return _c('div', {
      key: `${_vm.weekKey}-${ix}`,
      staticClass: "vhd__datepicker__week-name"
    }, [_vm._v(" " + _vm._s(name) + " ")]);
  }), 0);
};
var WeekRowvue_type_template_id_3204cdf4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/WeekRow.vue?vue&type=template&id=3204cdf4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/WeekRow.vue?vue&type=script&lang=js&
/* harmony default export */ var WeekRowvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/WeekRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WeekRowvue_type_script_lang_js_ = (WeekRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/components/WeekRow.vue





/* normalize component */

var WeekRow_component = normalizeComponent(
  components_WeekRowvue_type_script_lang_js_,
  WeekRowvue_type_template_id_3204cdf4_render,
  WeekRowvue_type_template_id_3204cdf4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WeekRow = (WeekRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/Month.vue?vue&type=script&lang=js&



/* harmony default export */ var Monthvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/Month.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Monthvue_type_script_lang_js_ = (Monthvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/components/Month.vue





/* normalize component */

var Month_component = normalizeComponent(
  components_Monthvue_type_script_lang_js_,
  Monthvue_type_template_id_b0c2d724_render,
  Monthvue_type_template_id_b0c2d724_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Month = (Month_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60737d2b-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/DateInput.vue?vue&type=template&id=34f958e6&
var DateInputvue_type_template_id_34f958e6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vhd__datepicker__input",
    class: _vm.inputClass,
    attrs: {
      "data-qa": "vhd__datepickerInput",
      "tabindex": _vm.tabIndex
    },
    on: {
      "click": _vm.toggleDatepicker,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.toggleDatepicker.apply(null, arguments);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.inputDate ? _vm.inputDate : _vm.i18n[_vm.inputDateType]) + " ")]);
};
var DateInputvue_type_template_id_34f958e6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/DatePicker/components/DateInput.vue?vue&type=template&id=34f958e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/components/DateInput.vue?vue&type=script&lang=js&
/* harmony default export */ var DateInputvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/components/DateInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateInputvue_type_script_lang_js_ = (DateInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/components/DateInput.vue





/* normalize component */

var DateInput_component = normalizeComponent(
  components_DateInputvue_type_script_lang_js_,
  DateInputvue_type_template_id_34f958e6_render,
  DateInputvue_type_template_id_34f958e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DateInput = (DateInput_component.exports);
// CONCATENATED MODULE: ./public/i18n/en.js
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DatePicker/HotelDatePicker.vue?vue&type=script&lang=js&








/* harmony default export */ var HotelDatePickervue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/DatePicker/HotelDatePicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var DatePicker_HotelDatePickervue_type_script_lang_js_ = (HotelDatePickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/DatePicker/HotelDatePicker.vue





/* normalize component */

var HotelDatePicker_component = normalizeComponent(
  DatePicker_HotelDatePickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HotelDatePicker = (HotelDatePicker_component.exports);
// EXTERNAL MODULE: ./src/assets/scss/index.scss
var scss = __webpack_require__("a41b");
var scss_default = /*#__PURE__*/__webpack_require__.n(scss);

// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src_0 = (HotelDatePicker);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=vueHotelDatepicker.umd.js.map
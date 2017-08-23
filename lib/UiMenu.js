
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiMenu"] = factory();
	else
		root["NucleusUIKit"] = root["NucleusUIKit"] || {}, root["NucleusUIKit"]["UiMenu"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 233);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(11);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(182),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-330e5628", Component.options)
  } else {
    hotAPI.reload("data-v-330e5628", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiRippleInk.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9267f7c6", Component.options)
  } else {
    hotAPI.reload("data-v-9267f7c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classlist = __webpack_require__(4);

var _classlist2 = _interopRequireDefault(_classlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startRipple = function startRipple(eventType, event) {
    var holder = event.currentTarget || event.target;

    if (holder && !_classlist2.default.has(holder, 'ui-ripple-ink')) {
        holder = holder.querySelector('.ui-ripple-ink');
    }

    if (!holder) {
        return;
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double
    // ripples from mousedown/touchstart.
    var prev = holder.getAttribute('data-ui-event');

    if (prev && prev !== eventType) {
        return;
    }

    holder.setAttribute('data-ui-event', eventType);

    // Create and position the ripple
    var rect = holder.getBoundingClientRect();
    var x = event.offsetX;
    var y = void 0;

    if (x === undefined) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        y = event.offsetY;
    }

    var ripple = document.createElement('div');
    var max = void 0;

    if (rect.width === rect.height) {
        max = rect.width * 1.412;
    } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
    }

    var dim = max * 2 + 'px';

    ripple.style.width = dim;
    ripple.style.height = dim;
    ripple.style.marginLeft = -max + x + 'px';
    ripple.style.marginTop = -max + y + 'px';

    // Activate/add the element
    ripple.className = 'ui-ripple-ink__ink';
    holder.appendChild(ripple);

    setTimeout(function () {
        _classlist2.default.add(ripple, 'is-held');
    }, 0);

    var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';

    var handleRelease = function handleRelease() {
        document.removeEventListener(releaseEvent, handleRelease);

        _classlist2.default.add(ripple, 'is-done');

        // Larger than the animation duration in CSS
        setTimeout(function () {
            holder.removeChild(ripple);

            if (holder.children.length === 0) {
                holder.removeAttribute('data-ui-event');
            }
        }, 650);
    };

    document.addEventListener(releaseEvent, handleRelease);
}; //
//
//
//

/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS, version 1.0.3)
 * removed jQuery, convert to ES6
 */


var handleMouseDown = function handleMouseDown(e) {
    // Trigger on left click only
    if (e.button === 0) {
        startRipple(e.type, e);
    }
};

var handleTouchStart = function handleTouchStart(e) {
    if (e.changedTouches) {
        for (var i = 0; i < e.changedTouches.length; ++i) {
            startRipple(e.type, e.changedTouches[i]);
        }
    }
};

exports.default = {
    name: 'ui-ripple-ink',

    props: {
        trigger: {
            type: String,
            required: true
        }
    },

    watch: {
        trigger: function trigger() {
            this.initialize();
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.initialize();
        });
    },
    beforeDestroy: function beforeDestroy() {
        var triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

        if (!triggerEl) {
            return;
        }

        triggerEl.removeEventListener('mousedown', handleMouseDown);
        triggerEl.removeEventListener('touchstart', handleTouchStart);
    },


    methods: {
        initialize: function initialize() {
            var triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

            if (!triggerEl) {
                return;
            }

            triggerEl.addEventListener('touchstart', handleTouchStart);
            triggerEl.addEventListener('mousedown', handleMouseDown);
        }
    }
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiMenuOption = __webpack_require__(171);

var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'ui-menu',

    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        hasIcons: {
            type: Boolean,
            default: false
        },
        iconProps: Object,
        hasSecondaryText: {
            type: Boolean,
            default: false
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return _config2.default.data.UiMenu.keys;
            }
        },
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        },
        raised: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return {
                'is-raised': this.raised,
                'has-icons': this.hasIcons,
                'has-secondary-text': this.hasSecondaryText
            };
        }
    },

    methods: {
        selectOption: function selectOption(option) {
            if (option.disabled || option.type === 'divider') {
                return;
            }

            this.$emit('select', option);
            this.closeMenu();
        },
        closeMenu: function closeMenu() {
            this.$emit('close');
        },
        redirectFocus: function redirectFocus(e) {
            e.stopPropagation();
            this.$el.querySelector('.ui-menu-option').focus();
        }
    },

    components: {
        UiMenuOption: _UiMenuOption2.default
    }
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(3);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(12);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-menu-option',

    props: {
        type: String,
        label: String,
        icon: String,
        iconProps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        secondaryText: String,
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return {
                'is-divider': this.isDivider,
                'is-disabled': this.disabled
            };
        },
        isDivider: function isDivider() {
            return this.type === 'divider';
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-ripple-ink {\n  border-radius: inherit;\n  bottom: 0;\n  display: block;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n}\n.ui-ripple-ink__ink {\n  background-clip: padding-box;\n  background-color: currentColor;\n  border-radius: 50%;\n  height: 0;\n  opacity: 0.2;\n  pointer-events: none;\n  position: absolute;\n  transform: scale(0);\n  transition: transform 0.6s ease-out, opacity 0.6s ease-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 0;\n}\n.ui-ripple-ink__ink.is-held {\n    opacity: 0.4;\n    transform: scale(1);\n}\n.ui-ripple-ink__ink.is-done {\n    opacity: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-menu-option {\n  display: block;\n  font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.ui-menu-option.is-divider {\n    background-color: rgba(0, 0, 0, 0.08);\n    display: block;\n    height: 0.0625rem;\n    margin: 0.375rem 0;\n    padding: 0;\n}\n.ui-menu-option:not(.is-divider) {\n    color: rgba(0, 0, 0, 0.87);\n    cursor: pointer;\n    font-size: 0.9375rem;\n    font-weight: normal;\n    min-height: 2.5rem;\n    outline: none;\n}\n.ui-menu-option:not(.is-divider):hover:not(.is-disabled),\n    body[modality=\"keyboard\"] .ui-menu-option:not(.is-divider):focus {\n      background-color: #EEEEEE;\n}\n.ui-menu-option:not(.is-divider).is-disabled {\n      color: rgba(0, 0, 0, 0.54);\n      cursor: default;\n      opacity: 0.5;\n}\n.ui-menu-option:not(.is-divider).is-disabled .ui-menu-option__secondary-text {\n        color: rgba(0, 0, 0, 0.54);\n}\n.ui-menu-option__content {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2.5rem;\n  padding: 0 1rem;\n}\n.ui-menu-option__icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.125rem;\n  margin-right: 1rem;\n}\n.ui-menu-option__text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n.ui-menu-option__secondary-text {\n  color: rgba(0, 0, 0, 0.38);\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 0.8125rem;\n  margin-left: 0.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-ripple-ink"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9267f7c6", module.exports)
  }
}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-menu {\n  background-color: white;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.08);\n  font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n  list-style: none;\n  margin: 0;\n  max-height: 100vh;\n  max-width: 17rem;\n  min-width: 10.5rem;\n  outline: none;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0.25rem 0;\n}\n.ui-menu.is-raised {\n    border: none;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);\n}\n.ui-menu.has-secondary-text {\n    min-width: 15rem;\n    max-width: 19rem;\n}\n.ui-menu__focus-redirector {\n  position: absolute;\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9267f7c6!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiRippleInk.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9267f7c6!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiRippleInk.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(197)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(174),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiMenuOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenuOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00dae786", Component.options)
  } else {
    hotAPI.reload("data-v-00dae786", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    ref: "menuOption",
    staticClass: "ui-menu-option",
    class: _vm.classes,
    attrs: {
      "role": "menu-item",
      "tabindex": (_vm.isDivider || _vm.disabled) ? null : '0'
    }
  }, [(!_vm.isDivider) ? _vm._t("default", [_c('div', {
    staticClass: "ui-menu-option__content"
  }, [(_vm.icon) ? _c('ui-icon', {
    staticClass: "ui-menu-option__icon",
    attrs: {
      "icon-set": _vm.iconProps.iconSet,
      "icon": _vm.icon,
      "remove-text": _vm.iconProps.removeText,
      "use-svg": _vm.iconProps.useSvg
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-menu-option__text"
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), (_vm.secondaryText) ? _c('div', {
    staticClass: "ui-menu-option__secondary-text"
  }, [_vm._v("\n                " + _vm._s(_vm.secondaryText) + "\n            ")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (!_vm.disabled && !_vm.isDivider && !_vm.disableRipple) ? _c('ui-ripple-ink', {
    attrs: {
      "trigger": "menuOption"
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00dae786", module.exports)
  }
}

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "ui-menu",
    class: _vm.classes,
    attrs: {
      "role": "menu"
    }
  }, [_vm._l((_vm.options), function(option) {
    return _c('ui-menu-option', {
      attrs: {
        "disable-ripple": _vm.disableRipple,
        "disabled": option[_vm.keys.disabled],
        "icon-props": _vm.iconProps || option[_vm.keys.iconProps],
        "icon": _vm.hasIcons ? option[_vm.keys.icon] : null,
        "label": option[_vm.keys.type] === 'divider' ? null : option[_vm.keys.label] || option,
        "secondary-text": _vm.hasSecondaryText ? option[_vm.keys.secondaryText] : null,
        "type": option[_vm.keys.type]
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectOption(option)
        },
        "keydown": [function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          $event.preventDefault();
          _vm.selectOption(option)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
          _vm.closeMenu($event)
        }]
      }
    }, [_vm._t("option", null, {
      option: option
    })], 2)
  }), _vm._v(" "), (_vm.containFocus) ? _c('div', {
    staticClass: "ui-menu__focus-redirector",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": _vm.redirectFocus
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-330e5628", module.exports)
  }
}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00dae786!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiMenuOption.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-00dae786!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiMenuOption.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-330e5628!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiMenu.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-330e5628!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiMenu.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b0f6042", Component.options)
  } else {
    hotAPI.reload("data-v-2b0f6042", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Adapted from dominus v6.0.1
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function interpret(input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes(el) {
    if (isElement(el)) {
        return el.className.replace(trim, '').split(whitespace);
    }

    return [];
}

function set(el, input) {
    if (isElement(el)) {
        el.className = interpret(input).join(' ');
    }
}

function add(el, input) {
    var current = remove(el, input);
    var values = interpret(input);

    current.push.apply(current, values);
    set(el, current);

    return current;
}

function remove(el, input) {
    var current = classes(el);
    var values = interpret(input);

    values.forEach(function (value) {
        var i = current.indexOf(value);
        if (i !== -1) {
            current.splice(i, 1);
        }
    });

    set(el, current);

    return current;
}

function contains(el, input) {
    var current = classes(el);
    var values = interpret(input);

    return values.every(function (value) {
        return current.indexOf(value) !== -1;
    });
}

function isElement(o) {
    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object';
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
    return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

exports.default = {
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NucleusConfig = undefined;

var _deepAssign = __webpack_require__(10);

var _deepAssign2 = _interopRequireDefault(_deepAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    disableRipple: false,

    UiAutocomplete: {
        keys: {
            label: 'label',
            value: 'value',
            image: 'image'
        }
    },

    UiCheckboxGroup: {
        keys: {
            id: 'id',
            name: 'name',
            class: 'class',
            label: 'label',
            value: 'value',
            disabled: 'disabled'
        }
    },

    UiMenu: {
        keys: {
            icon: 'icon',
            type: 'type',
            label: 'label',
            secondaryText: 'secondaryText',
            iconProps: 'iconProps',
            disabled: 'disabled'
        }
    },

    UiRadioGroup: {
        keys: {
            id: 'id',
            class: 'class',
            label: 'label',
            value: 'value',
            checked: 'checked',
            disabled: 'disabled'
        }
    },

    UiSelect: {
        keys: {
            label: 'label',
            value: 'value',
            image: 'image'
        }
    }
};

var NucleusConfig = exports.NucleusConfig = function () {
    function NucleusConfig() {
        _classCallCheck(this, NucleusConfig);

        this.data = (0, _deepAssign2.default)(config, window.NucleusConfig ? window.NucleusConfig : {});
    }

    NucleusConfig.prototype.set = function set() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.data = (0, _deepAssign2.default)(this.data, config);
    };

    return NucleusConfig;
}();

exports.default = new NucleusConfig();

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'ui-icon',

    props: {
        icon: String,
        iconSet: {
            type: String,
            default: 'material-icons'
        },
        ariaLabel: String,
        removeText: {
            type: Boolean,
            default: false
        },
        useSvg: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-icon {\n  cursor: inherit;\n  display: inline-block;\n  font-size: 1.5rem;\n  height: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  width: 1em;\n}\n.ui-icon svg {\n    fill: currentColor;\n    height: 1em;\n    margin: 0;\n    padding: 0;\n    width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "ui-icon",
    class: [_vm.iconSet, _vm.icon],
    attrs: {
      "aria-label": _vm.ariaLabel
    }
  }, [(_vm.useSvg) ? _c('svg', {
    staticClass: "ui-icon__svg"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": '#' + _vm.icon
    }
  })]) : _vm._t("default", [_vm._v(_vm._s(_vm.removeText ? null : _vm.icon))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b0f6042", module.exports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b0f6042!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b0f6042!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });
});
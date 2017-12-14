
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiTabs"] = factory();
	else
		root["NucleusUIKit"] = root["NucleusUIKit"] || {}, root["NucleusUIKit"]["UiTabs"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 248);
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
Component.options.__file = "/Users/milroyfraser/Code/Sites/nucleus/src/UiRippleInk.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e23c786", Component.options)
  } else {
    hotAPI.reload("data-v-3e23c786", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/milroyfraser/Code/Sites/nucleus/src/UiTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a82beb2", Component.options)
  } else {
    hotAPI.reload("data-v-1a82beb2", Component.options)
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-ripple-ink {\n  border-radius: inherit;\n  bottom: 0;\n  display: block;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n}\n.ui-ripple-ink__ink {\n  background-clip: padding-box;\n  background-color: currentColor;\n  border-radius: 50%;\n  height: 0;\n  opacity: 0.2;\n  pointer-events: none;\n  position: absolute;\n  transform: scale(0);\n  transition: transform 0.6s ease-out, opacity 0.6s ease-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 0;\n}\n.ui-ripple-ink__ink.is-held {\n    opacity: 0.4;\n    transform: scale(1);\n}\n.ui-ripple-ink__ink.is-done {\n    opacity: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 143:
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
    name: 'ui-tab-header-item',

    props: {
        id: String,
        type: {
            type: String,
            default: 'text' // 'text', 'icon', or 'icon-and-text'
        },
        title: String,
        icon: String,
        iconProps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        active: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        },
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
            return ['ui-tab-header-item--type-' + this.type, { 'is-active': this.active }, { 'is-disabled': this.disabled }];
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

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RespondsToWindowResize = __webpack_require__(55);

var _RespondsToWindowResize2 = _interopRequireDefault(_RespondsToWindowResize);

var _UiTabHeaderItem = __webpack_require__(173);

var _UiTabHeaderItem2 = _interopRequireDefault(_UiTabHeaderItem);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-tabs',

    props: {
        type: {
            type: String,
            default: 'text' // 'icon', text', or 'icon-and-text'
        },
        backgroundColor: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent', or 'clear'
        },
        textColor: {
            type: String,
            default: 'black' // 'black', or 'white'
        },
        textColorActive: {
            type: String,
            default: 'primary' // 'primary', 'accent', or 'white'
        },
        indicatorColor: {
            type: String,
            default: 'primary' // 'primary', 'accent', or 'white'
        },
        fullwidth: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        }
    },

    data: function data() {
        return {
            tabs: [],
            activeTabId: null,
            activeTabIndex: -1,
            activeTabElement: null,
            activeTabPosition: {
                left: 0,
                width: 0
            },
            tabContainerWidth: 0
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-tabs--type-' + this.type, 'ui-tabs--text-color-' + this.textColor, 'ui-tabs--text-color-active-' + this.textColorActive, 'ui-tabs--background-color-' + this.backgroundColor, 'ui-tabs--indicator-color-' + this.textColorActive, { 'is-raised': this.raised }, { 'is-fullwidth': this.fullwidth }];
        },
        indicatorLeft: function indicatorLeft() {
            return this.activeTabPosition.left + 'px';
        },
        indicatorRight: function indicatorRight() {
            return this.tabContainerWidth - (this.activeTabPosition.left + this.activeTabPosition.width) + 'px';
        }
    },

    watch: {
        activeTabId: function activeTabId() {
            var _this = this;

            this.tabs.forEach(function (tab, index) {
                if (_this.activeTabId === tab.id) {
                    tab.activate();
                    _this.activeTabIndex = index;
                } else if (tab.isActive) {
                    tab.deactivate();
                }
            });
        },
        activeTabElement: function activeTabElement() {
            this.refreshIndicator();
        }
    },

    mounted: function mounted() {
        var _this2 = this;

        // Set the tab container width and the active tab element
        // (to show the active tab indicator)
        this.$nextTick(function () {
            _this2.tabContainerWidth = _this2.$refs.tabsContainer.offsetWidth;
            _this2.activeTabElement = _this2.$refs.tabsContainer.querySelector('.is-active');
        });

        // Refresh the active tab indication when the window size changes
        this.$on('window-resize', function () {
            _this2.tabContainerWidth = _this2.$refs.tabsContainer.offsetWidth;
            _this2.refreshIndicator();
        });
    },


    methods: {
        // Called externally from UiTab
        registerTab: function registerTab(tab) {
            this.tabs.push(tab);

            // Select the tab if there's no tab selected (i.e. the tab is the only tab)
            // or the tab's selected prop is true
            if (this.activeTabId === null || tab.selected) {
                this.activeTabId = tab.id;
            }
        },


        // Called externally from UiTab
        handleTabShowChange: function handleTabShowChange(tab) {
            // Switch to the nearest available tab if the tab being hidden is currently active
            if (this.activeTabId === tab.id && !tab.show) {
                var newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }

            // Refresh the active tab indicator
            this.refreshIndicator();
        },


        // Called externally from UiTab
        handleTabDisableChange: function handleTabDisableChange(tab) {
            // Switch to the nearest available tab if the tab being disabled is currently active
            if (this.activeTabId === tab.id && tab.disabled) {
                var newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }
        },
        selectTab: function selectTab(e, tab) {
            // e can be Element (if called by selectPrevious or selectNext) or Event
            // (if called by click listener)
            var newTabElement = e.currentTarget ? e.currentTarget : e;

            // Abort if the tab is disabled or already selected
            if (tab.disabled || this.activeTabElement === newTabElement) {
                return;
            }

            this.activeTabElement = newTabElement;
            this.activeTabId = tab.id;

            this.$emit('tab-change', tab.id);
        },
        selectPreviousTab: function selectPreviousTab() {
            // Abort if the current tab is the first tab
            if (this.activeTabIndex === 0) {
                return;
            }

            var previousTab = this.findTabByIndex(this.activeTabIndex, { findPrevious: true });

            if (!previousTab) {
                return;
            }

            this.selectTab(previousTab.$el, previousTab);
            this.activeTabElement.focus();
        },
        selectNextTab: function selectNextTab() {
            // Abort if the current tab is the last tab
            if (this.activeTabIndex === this.$refs.tabElements.length - 1) {
                return;
            }

            var nextTab = this.findTabByIndex(this.activeTabIndex);

            if (!nextTab) {
                return;
            }

            this.selectTab(nextTab.$el, nextTab);
            this.activeTabElement.focus();
        },
        findTabByIndex: function findTabByIndex(currentTabIndex) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { findPrevious: false };

            var tab = null;

            if (options.findPrevious) {
                for (var i = currentTabIndex - 1; i >= 0; i--) {
                    if (!this.$refs.tabElements[i].disabled && this.$refs.tabElements[i].show) {
                        tab = this.$refs.tabElements[i];
                        break;
                    }
                }
            } else {
                for (var _i = currentTabIndex + 1; _i < this.$refs.tabElements.length; _i++) {
                    if (!this.$refs.tabElements[_i].disabled && this.$refs.tabElements[_i].show) {
                        tab = this.$refs.tabElements[_i];
                        break;
                    }
                }
            }

            return tab;
        },
        findTabById: function findTabById(id) {
            var tab = null;
            var numberOfTabs = this.$refs.tabElements.length;

            for (var i = 0; i <= numberOfTabs; i++) {
                if (id === this.$refs.tabElements[i].id) {
                    tab = this.$refs.tabElements[i];
                    break;
                }
            }

            return tab;
        },
        findNearestAvailableTab: function findNearestAvailableTab() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { preferPrevious: false };

            var tab = this.findTabByIndex(this.activeTabIndex, {
                findPrevious: options.preferPrevious
            });

            if (tab) {
                return tab;
            }

            return this.findTabByIndex(this.activeTabIndex, {
                findPrevious: !options.preferPrevious
            });
        },


        // Used externally to programmatically change the active tab
        setActiveTab: function setActiveTab(tabId) {
            var tab = this.findTabById(tabId);

            if (tab && !tab.disabled) {
                this.selectTab(tab.$el, tab);
            }
        },


        // Used locally and externally to refresh the active tab indicator position
        refreshIndicator: function refreshIndicator() {
            this.activeTabPosition = {
                left: this.activeTabElement ? this.activeTabElement.offsetLeft : 0,
                width: this.activeTabElement ? this.activeTabElement.offsetWidth : 0
            };
        }
    },

    components: {
        UiTabHeaderItem: _UiTabHeaderItem2.default,
        RenderVnodes: {
            name: 'render-vnodes',
            functional: true,
            props: ['nodes'],
            render: function render(createElement, context) {
                return createElement('div', context.props.nodes);
            }
        }
    },

    mixins: [_RespondsToWindowResize2.default]
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
//
//
//
//
//
//
//
//

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
     require("vue-hot-reload-api").rerender("data-v-3e23c786", module.exports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-tabs {\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n.ui-tabs.is-fullwidth .ui-tab-header-item {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n}\n.ui-tabs.is-raised {\n    border: none;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);\n}\n.ui-tabs.is-raised .ui-tabs__body {\n      border: none;\n}\n.ui-tabs__header {\n  position: relative;\n  width: 100%;\n}\n.ui-tabs__header-items {\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.ui-tabs__active-tab-indicator {\n  bottom: 0;\n  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.05);\n  height: 0.125rem;\n  position: absolute;\n  transition: all 0.2s ease;\n}\n.ui-tabs__body {\n  background-color: white;\n  border-radius: 0;\n  border: 0.0625rem solid #eeeeee;\n  border-top: 0;\n  margin: 0;\n  padding: 1rem;\n}\n.ui-tabs--background-color-default .ui-tabs__header {\n  background-color: #eeeeee;\n}\nbody[modality=\"keyboard\"] .ui-tabs--background-color-default .ui-tab-header-item:focus {\n  outline: 1px solid #6457b5;\n}\nbody[modality=\"keyboard\"] .ui-tabs--background-color-primary .ui-tab-header-item:focus, body[modality=\"keyboard\"]\n.ui-tabs--background-color-accent .ui-tab-header-item:focus, body[modality=\"keyboard\"]\n.ui-tabs--background-color-clear .ui-tab-header-item:focus {\n  outline: 1px solid white;\n}\n.ui-tabs--background-color-primary .ui-ripple-ink__ink.is-held,\n.ui-tabs--background-color-accent .ui-ripple-ink__ink.is-held,\n.ui-tabs--background-color-clear .ui-ripple-ink__ink.is-held {\n  opacity: 0.7;\n}\n.ui-tabs--background-color-primary .ui-tabs__header {\n  background-color: #6457b5;\n}\n.ui-tabs--background-color-accent .ui-tabs__header {\n  background-color: #000000;\n}\n.ui-tabs--background-color-clear .ui-tabs__header {\n  background-color: transparent;\n}\n.ui-tabs--background-color-clear .ui-tabs__header + .ui-tabs__body {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.ui-tabs--text-color-black .ui-tab-header-item {\n  color: rgba(0, 0, 0, 0.54);\n}\n.ui-tabs--text-color-black .ui-tab-header-item__icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n.ui-tabs--text-color-white .ui-tab-header-item {\n  color: rgba(255, 255, 255, 0.65);\n}\n.ui-tabs--text-color-white .ui-tab-header-item__icon {\n  color: rgba(255, 255, 255, 0.65);\n}\n.ui-tabs--text-color-active-white .ui-tab-header-item.is-active {\n  color: white;\n}\n.ui-tabs--text-color-active-white .ui-tab-header-item.is-active .ui-tab-header-item__icon {\n    color: white;\n}\n.ui-tabs--text-color-active-primary .ui-tab-header-item.is-active {\n  color: #6457b5;\n}\n.ui-tabs--text-color-active-primary .ui-tab-header-item.is-active .ui-tab-header-item__icon {\n    color: #6457b5;\n}\n.ui-tabs--text-color-active-accent .ui-tab-header-item.is-active {\n  color: #000000;\n}\n.ui-tabs--text-color-active-accent .ui-tab-header-item.is-active .ui-tab-header-item__icon {\n    color: #000000;\n}\n.ui-tabs--indicator-color-primary .ui-tabs__active-tab-indicator {\n  background-color: #6457b5;\n}\n.ui-tabs--indicator-color-accent .ui-tabs__active-tab-indicator {\n  background-color: #000000;\n}\n.ui-tabs--indicator-color-white .ui-tabs__active-tab-indicator {\n  background-color: white;\n}\n", ""]);

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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3e23c786!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiRippleInk.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3e23c786!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiRippleInk.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-tab-header-item {\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n  height: 3rem;\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-width: 5rem;\n  padding: 0 0.75rem;\n  position: relative;\n  text-transform: uppercase;\n}\n.ui-tab-header-item:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n.ui-tab-header-item.is-disabled {\n    background-color: transparent;\n    cursor: default;\n    opacity: 0.4;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.ui-tab-header-item--type-icon-and-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 4.5rem;\n}\n.ui-tab-header-item--type-icon-and-text .ui-tab-header-item__icon {\n    margin-bottom: 0.25rem;\n}\n.ui-tab-header-item__text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.9375rem;\n  font-weight: 500;\n}\n.ui-tab-header-item__icon {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.ui-tab-header-item__icon .ui-icon {\n    cursor: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(219)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(196),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/milroyfraser/Code/Sites/nucleus/src/UiTabHeaderItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabHeaderItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c198fb48", Component.options)
  } else {
    hotAPI.reload("data-v-c198fb48", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-tabs",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-tabs__header"
  }, [_c('ul', {
    ref: "tabsContainer",
    staticClass: "ui-tabs__header-items",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabs), function(tab) {
    return _c('ui-tab-header-item', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tab.show),
        expression: "tab.show"
      }],
      ref: "tabElements",
      refInFor: true,
      attrs: {
        "active": _vm.activeTabId === tab.id,
        "disable-ripple": _vm.disableRipple,
        "disabled": tab.disabled,
        "icon-props": tab.iconProps,
        "icon": tab.icon,
        "id": tab.id,
        "show": tab.show,
        "title": tab.title,
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectTab($event, tab)
        },
        "keydown": [function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "left", 37)) { return null; }
          if ('button' in $event && $event.button !== 0) { return null; }
          _vm.selectPreviousTab($event)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "right", 39)) { return null; }
          if ('button' in $event && $event.button !== 2) { return null; }
          _vm.selectNextTab($event)
        }]
      }
    }, [(tab.$slots.icon) ? _c('render-vnodes', {
      attrs: {
        "nodes": tab.$slots.icon
      },
      slot: "icon"
    }) : _vm._e()], 1)
  })), _vm._v(" "), (_vm.tabContainerWidth != 0) ? _c('div', {
    staticClass: "ui-tabs__active-tab-indicator",
    style: ({
      'left': _vm.indicatorLeft,
      'right': _vm.indicatorRight
    })
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "ui-tabs__body"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a82beb2", module.exports)
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    ref: "headerItem",
    staticClass: "ui-tab-header-item",
    class: _vm.classes,
    attrs: {
      "role": "tab",
      "aria-controls": _vm.id,
      "aria-selected": _vm.active ? 'true' : null,
      "disabled": _vm.disabled,
      "tabindex": _vm.active ? 0 : -1
    }
  }, [(_vm.type === 'icon' || _vm.type === 'icon-and-text') ? _c('div', {
    staticClass: "ui-tab-header-item__icon"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon-set": _vm.iconProps.iconSet,
      "icon": _vm.icon,
      "remove-text": _vm.iconProps.removeText,
      "use-svg": _vm.iconProps.useSvg
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.type === 'text' || _vm.type === 'icon-and-text') ? _c('div', {
    staticClass: "ui-tab-header-item__text"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink', {
    attrs: {
      "trigger": "headerItem"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c198fb48", module.exports)
  }
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a82beb2!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiTabs.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a82beb2!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiTabs.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c198fb48!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiTabHeaderItem.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c198fb48!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiTabHeaderItem.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


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
Component.options.__file = "/Users/milroyfraser/Code/Sites/nucleus/src/UiIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-087297bc", Component.options)
  } else {
    hotAPI.reload("data-v-087297bc", Component.options)
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(57);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            windowResizeListener: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.windowResizeListener = (0, _lodash2.default)(function () {
            _this.$emit('window-resize');
        }, 200);

        window.addEventListener('resize', this.windowResizeListener);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('resize', this.windowResizeListener);
    }
};

/***/ }),

/***/ 57:
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

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

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

/***/ 60:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
     require("vue-hot-reload-api").rerender("data-v-087297bc", module.exports)
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-087297bc!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-087297bc!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue");
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
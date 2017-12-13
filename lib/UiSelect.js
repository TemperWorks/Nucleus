
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiSelect"] = factory();
	else
		root["NucleusUIKit"] = root["NucleusUIKit"] || {}, root["NucleusUIKit"]["UiSelect"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(193),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2ce91f6", Component.options)
  } else {
    hotAPI.reload("data-v-c2ce91f6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(3);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiProgressCircular = __webpack_require__(19);

var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);

var _UiSelectOption = __webpack_require__(172);

var _UiSelectOption2 = _interopRequireDefault(_UiSelectOption);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _fuzzysearch = __webpack_require__(84);

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _util = __webpack_require__(41);

var _elementScroll = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-select',

    props: {
        name: String,
        value: {
            type: [String, Number, Object, Array],
            required: true
        },
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'basic' // 'basic' or 'image'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        multipleDelimiter: {
            type: String,
            default: ', '
        },
        hasSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: 'Search'
        },
        filter: Function,
        disableFilter: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        noResults: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return _config2.default.data.UiSelect.keys;
            }
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: Boolean
    },

    data: function data() {
        return {
            query: '',
            isActive: false,
            isTouched: false,
            selectedIndex: -1,
            highlightedIndex: -1,
            showDropdown: false,
            initialValue: JSON.stringify(this.value)
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-select--type-' + this.type, 'ui-select--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-disabled': this.disabled }, { 'is-multiple': this.multiple }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.value.length === 0 && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || Boolean(this.error);
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
        },
        showClearIcon: function showClearIcon() {
            if (!this.clearable) {
                return false;
            }

            return !this.disabled && this.value.length;
        },
        showDropdownIcon: function showDropdownIcon() {
            if (!this.clearable) {
                return true;
            }

            return !this.showClearIcon;
        },
        filteredOptions: function filteredOptions() {
            var _this = this;

            if (this.disableFilter) {
                return this.options;
            }

            return this.options.filter(function (option, index) {
                if (_this.filter) {
                    return _this.filter(option, _this.query);
                }

                return _this.defaultFilter(option, index);
            });
        },
        displayText: function displayText() {
            var _this2 = this;

            if (this.multiple) {
                if (this.value.length > 0) {
                    return this.value.map(function (value) {
                        return value[_this2.keys.label] || value;
                    }).join(this.multipleDelimiter);
                }

                return '';
            }

            return this.value ? this.value[this.keys.label] || this.value : '';
        },
        hasDisplayText: function hasDisplayText() {
            return Boolean(this.displayText.length);
        },
        hasNoResults: function hasNoResults() {
            if (this.loading || this.query.length === 0) {
                return false;
            }

            return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
        },
        submittedValue: function submittedValue() {
            var _this3 = this;

            // Assuming that if there is no name, then there's no
            // need to computed the submittedValue
            if (!this.name || !this.value) {
                return;
            }

            if (Array.isArray(this.value)) {
                return this.value.map(function (option) {
                    return option[_this3.keys.value] || option;
                }).join(',');
            }

            return this.value[this.keys.value] || this.value;
        }
    },

    watch: {
        filteredOptions: function filteredOptions() {
            this.highlightedIndex = 0;
            (0, _elementScroll.resetScroll)(this.$refs.optionsList);
        },
        showDropdown: function showDropdown() {
            if (this.showDropdown) {
                this.onOpen();
                this.$emit('dropdown-open');
            } else {
                this.onClose();
                this.$emit('dropdown-close');
            }
        },
        query: function query() {
            this.$emit('query-change', this.query);
        }
    },

    created: function created() {
        if (!this.value || this.value === '') {
            this.setValue(null);
        }
    },
    mounted: function mounted() {
        document.addEventListener('click', this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
    },


    methods: {
        setValue: function setValue(value) {
            value = value ? value : this.multiple ? [] : '';

            this.$emit('input', value);
            this.$emit('change', value);
        },
        highlightOption: function highlightOption(index) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { autoScroll: true };

            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
                return;
            }

            var firstIndex = 0;
            var lastIndex = this.$refs.options.length - 1;

            if (index < firstIndex) {
                index = lastIndex;
            } else if (index > lastIndex) {
                index = firstIndex;
            }

            this.highlightedIndex = index;

            if (options.autoScroll) {
                this.scrollOptionIntoView(this.$refs.options[index].$el);
            }
        },
        selectHighlighted: function selectHighlighted(index, e) {
            if (this.$refs.options.length > 0) {
                e.preventDefault();
                this.selectOption(this.$refs.options[index].option, index);
            }
        },
        selectOption: function selectOption(option, index) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { autoClose: true };

            var shouldSelect = this.multiple && !this.isOptionSelected(option);

            if (this.multiple) {
                this.updateOption(option, { select: shouldSelect });
            } else {
                this.setValue(option);
                this.selectedIndex = index;
            }

            this.$emit('select', option, {
                selected: this.multiple ? shouldSelect : true
            });

            this.highlightedIndex = index;
            this.clearQuery();

            if (!this.multiple && options.autoClose) {
                this.closeDropdown();
            }
        },
        isOptionSelected: function isOptionSelected(option) {
            if (this.multiple) {
                return (0, _util.looseIndexOf)(this.value, option) > -1;
            }

            return (0, _util.looseEqual)(this.value, option);
        },
        updateOption: function updateOption(option) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { select: true };

            var value = [];
            var updated = false;
            var i = (0, _util.looseIndexOf)(this.value, option);

            if (options.select && i < 0) {
                value = this.value.concat(option);
                updated = true;
            }

            if (!options.select && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
                updated = true;
            }

            if (updated) {
                this.setValue(value);
            }
        },
        defaultFilter: function defaultFilter(option) {
            var query = this.query.toLowerCase();
            var text = option[this.keys.label] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return (0, _fuzzysearch2.default)(query, text);
        },
        clearQuery: function clearQuery() {
            this.query = '';
        },
        toggleDropdown: function toggleDropdown() {
            this[this.showDropdown ? 'closeDropdown' : 'openDropdown']();
        },
        openDropdown: function openDropdown() {
            if (this.disabled) {
                return;
            }

            this.showDropdown = true;

            // IE: clicking label doesn't focus the select element
            // to set isActive to true
            if (!this.isActive) {
                this.isActive = true;
            }
        },
        closeDropdown: function closeDropdown() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { autoBlur: false };

            this.showDropdown = false;

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }

            if (options.autoBlur) {
                this.isActive = false;
            } else {
                this.$refs.label.focus();
            }
        },
        onFocus: function onFocus(e) {
            if (this.isActive) {
                return;
            }

            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.showDropdown) {
                this.closeDropdown({ autoBlur: true });
            }
        },
        onOpen: function onOpen() {
            var _this4 = this;

            this.$nextTick(function () {
                _this4.$refs[_this4.hasSearch ? 'searchInput' : 'dropdown'].focus();
                _this4.scrollOptionIntoView(_this4.$refs.optionsList.querySelector('.is-selected'));
            });
        },
        onClose: function onClose() {
            this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
        },
        onExternalClick: function onExternalClick(e) {
            if (!this.$el.contains(e.target)) {
                if (this.showDropdown) {
                    this.closeDropdown({ autoBlur: true });
                } else if (this.isActive) {
                    this.isActive = false;
                }
            }
        },
        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
            (0, _elementScroll.scrollIntoView)(optionEl, {
                container: this.$refs.optionsList,
                marginTop: 180
            });
        },
        reset: function reset() {
            this.resetTo(JSON.parse(this.initialValue));
        },
        clear: function clear() {
            this.resetTo("");
        },
        resetTo: function resetTo(value) {
            this.setValue(value);
            this.clearQuery();
            this.resetTouched();

            this.selectedIndex = -1;
            this.highlightedIndex = -1;
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiProgressCircular: _UiProgressCircular2.default,
        UiSelectOption: _UiSelectOption2.default
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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(3);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Object],
            required: true
        },
        type: {
            type: String,
            default: 'basic' // 'basic' or 'image'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    label: 'label',
                    image: 'image'
                };
            }
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-select-option--type-' + this.type, { 'is-highlighted': this.highlighted }, { 'is-selected': this.selected }];
        },
        imageStyle: function imageStyle() {
            return { 'background-image': 'url(' + this.option[this.keys.image] + ')' };
        }
    },

    components: {
        UiIcon: _UiIcon2.default
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

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-select-option {\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ui-select-option.is-selected {\n    background-color: rgba(0, 0, 0, 0.05);\n    color: black;\n}\n.ui-select-option.is-selected .ui-select-option__checkbox {\n      color: #6457b5;\n}\n.ui-select-option.is-highlighted {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n.ui-select-option__basic,\n.ui-select-option__image-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-select-option__image {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.ui-select-option__image-object {\n  background-position: 50%;\n  background-size: cover;\n  border-radius: 50%;\n  height: 2rem;\n  margin-right: 0.75rem;\n  width: 2rem;\n}\n.ui-select-option__checkbox {\n  color: rgba(0, 0, 0, 0.38);\n  margin-left: auto;\n}\n.ui-select-option--type-basic {\n  padding: 0.375rem 0.75rem;\n}\n.ui-select-option--type-image {\n  padding: 0.25rem 0.75rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-select {\n  -ms-flex-align: start;\n      align-items: flex-start;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n  margin-bottom: 1.5rem;\n  outline: none;\n  position: relative;\n}\n.ui-select:hover:not(.is-disabled) .ui-select__label-text {\n    color: rgba(0, 0, 0, 0.4);\n}\n.ui-select:hover:not(.is-disabled) .ui-select__display {\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n}\n.ui-select:hover:not(.is-disabled) .ui-select__dropdown-button, .ui-select:hover:not(.is-disabled) .ui-select__clear-button {\n    color: rgba(0, 0, 0, 0.25);\n}\n.ui-select.is-active:not(.is-disabled) .ui-select__label-text,\n  .ui-select.is-active:not(.is-disabled) .ui-select__icon-wrapper .ui-icon {\n    color: black;\n}\n.ui-select.is-active:not(.is-disabled) .ui-select__display {\n    border-bottom-color: #6457b5;\n    border-bottom-width: 2px;\n}\n.ui-select.has-floating-label .ui-select__label-text {\n    display: table;\n}\n.ui-select.has-floating-label .ui-select__label-text.is-inline {\n      color: rgba(0, 0, 0, 0.4);\n      cursor: pointer;\n      transform: translateY(1.625rem) scale(1.2);\n}\n.ui-select.has-floating-label .ui-select__label-text.is-floating {\n      transform: translateY(0) scale(1);\n}\n.ui-select.has-label .ui-select__icon-wrapper {\n    padding-top: 1.5rem;\n}\n.ui-select.has-label .ui-select__dropdown-button, .ui-select.has-label .ui-select__clear-button {\n    top: 1.6875rem;\n}\n.ui-select:not(.is-multiple) .ui-select__display {\n    height: 2rem;\n    line-height: 1;\n}\n.ui-select.is-multiple .ui-select__display {\n    line-height: 1.4;\n    padding-bottom: 0.25rem;\n    padding-top: 0.25rem;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__label-text,\n  .ui-select.is-invalid:not(.is-disabled) .ui-select__icon-wrapper .ui-icon {\n    color: #f44336;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__display {\n    border-bottom-color: #f44336;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__feedback {\n    color: #f44336;\n}\n.ui-select.is-disabled {\n    opacity: 1;\n}\n.ui-select.is-disabled .ui-select__display {\n      border-bottom-style: solid;\n      border-bottom-width: 2px;\n      color: rgba(0, 0, 0, 0.2);\n      cursor: default;\n}\n.ui-select.is-disabled .ui-select__display-value.is-placeholder {\n      color: rgba(0, 0, 0, 0.2);\n}\n.ui-select.is-disabled .ui-select__dropdown-button, .ui-select.is-disabled .ui-select__clear-button {\n      color: rgba(0, 0, 0, 0.1);\n      opacity: 1;\n}\n.ui-select.is-disabled .ui-select__icon-wrapper .ui-icon {\n      opacity: 1;\n}\n.ui-select.is-disabled .ui-select__feedback {\n      opacity: 1;\n}\n.ui-select__label {\n    display: block;\n    margin: 0;\n    outline: none;\n    padding: 0;\n    position: relative;\n    width: 100%;\n}\n.ui-select__icon-wrapper {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-right: 0.75rem;\n    padding-top: 0.25rem;\n}\n.ui-select__icon-wrapper .ui-icon {\n      color: rgba(0, 0, 0, 0.4);\n}\n.ui-select__content {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n}\n.ui-select__label-text {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1rem;\n    line-height: normal;\n    margin-bottom: 5px;\n    transform-origin: left;\n    transition: color 0.1s ease, transform 0.2s ease;\n}\n.ui-select__display {\n    -ms-flex-align: center;\n        align-items: center;\n    border: none;\n    border-bottom-color: rgba(0, 0, 0, 0.1);\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    color: black;\n    cursor: pointer;\n    display: -ms-flexbox;\n    display: flex;\n    font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 1.15rem;\n    font-weight: normal;\n    padding: 0;\n    transition: border 0.1s ease;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    width: 100%;\n}\n.ui-select__display-value {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    padding-bottom: 5px;\n}\n.ui-select__display-value.is-placeholder {\n      color: rgba(0, 0, 0, 0.4);\n}\n.ui-select__dropdown-button, .ui-select__clear-button {\n    color: rgba(0, 0, 0, 0.1);\n    font-size: 1.125rem;\n    margin-left: auto;\n    margin-right: -0.1875rem;\n    margin-top: 0.25rem;\n}\n.ui-select__clear-button {\n    margin-top: 0;\n    margin-right: -0.25rem;\n}\n.ui-select__dropdown {\n    background-color: white;\n    box-shadow: none;\n    color: black;\n    display: block;\n    list-style-type: none;\n    margin: 0;\n    margin-bottom: 0.5rem;\n    min-width: 6.25rem;\n    outline: none;\n    padding: 0;\n    position: absolute;\n    width: 100%;\n    z-index: 60;\n    border-color: rgba(0, 0, 0, 0.1);\n    border-width: 1px;\n    border-style: solid;\n}\n.ui-select__search-input {\n    background: none;\n    border: none;\n    border-bottom-color: rgba(0, 0, 0, 0.1);\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-radius: 0;\n    color: black;\n    cursor: auto;\n    font-family: Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 1.0875rem;\n    font-weight: normal;\n    height: 2.25rem;\n    outline: none;\n    padding: 0 0.75rem;\n    padding-left: 2.5rem;\n    transition: border 0.1s ease;\n    width: 100%;\n}\n.ui-select__search-input::-ms-clear {\n      display: none;\n}\n.ui-select__search-input:focus + .ui-select__search-icon {\n      color: black;\n}\n.ui-select__search-icon, .ui-select__search-progress {\n    position: absolute;\n    top: 0.5rem;\n}\n.ui-select__search-icon {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1.25rem;\n    left: 0.75rem;\n}\n.ui-select__search-progress {\n    right: 0.75rem;\n}\n.ui-select__options {\n    background-color: white;\n    color: black;\n    display: block;\n    list-style-type: none;\n    margin: 0;\n    max-height: 16rem;\n    min-width: 100%;\n    overflow-y: auto;\n    padding: 0;\n    position: absolute;\n    font-size: 1rem;\n    z-index: 10000;\n}\n.ui-select__no-results {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 0.875rem;\n    padding: 0.5rem 0.75rem;\n    width: 100%;\n}\n.ui-select__feedback {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 0.875rem;\n    line-height: 1.2;\n    margin: 0;\n    padding-top: 0.25rem;\n    position: relative;\n}\n.ui-select--icon-position-right .ui-select__icon-wrapper {\n  margin-left: 0.5rem;\n  margin-right: 0;\n  -ms-flex-order: 1;\n      order: 1;\n}\n.ui-select--transition-fade-enter-active,\n.ui-select--transition-fade-leave-active {\n  transition: opacity 0.2s ease;\n}\n.ui-select--transition-fade-enter,\n.ui-select--transition-fade-leave-active {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiSelectOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelectOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c96135a", Component.options)
  } else {
    hotAPI.reload("data-v-1c96135a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "ui-select-option",
    class: _vm.classes
  }, [_vm._t("default", [(_vm.type === 'basic') ? _c('div', {
    staticClass: "ui-select-option__basic"
  }, [_vm._v("\n            " + _vm._s(_vm.option[_vm.keys.label] || _vm.option) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'image') ? _c('div', {
    staticClass: "ui-select-option__image"
  }, [_c('div', {
    staticClass: "ui-select-option__image-object",
    style: (_vm.imageStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-select-option__image-text"
  }, [_vm._v(_vm._s(_vm.option[_vm.keys.label]))])]) : _vm._e(), _vm._v(" "), (_vm.multiple) ? _c('div', {
    staticClass: "ui-select-option__checkbox"
  }, [(_vm.selected) ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm9-14.016C20.11 3 21 3.938 21 5.016v13.97C21 20.062 20.11 21 18.984 21H5.014C3.89 21 3 20.064 3 18.986V5.015C3 3.94 3.89 3 5.014 3h13.97z"
    }
  })])]) : _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18.984 3C20.062 3 21 3.938 21 5.016v13.97C21 20.062 20.062 21 18.984 21H5.014C3.938 21 3 20.064 3 18.986V5.015C3 3.94 3.936 3 5.014 3h13.97zm0 2.016H5.014v13.97h13.97V5.015z"
    }
  })])])], 1) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c96135a", module.exports)
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yordidekleijn/Documents/Temper/packages/Nucleus/src/UiProgressCircular.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiProgressCircular.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eea3e96", Component.options)
  } else {
    hotAPI.reload("data-v-7eea3e96", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-select",
    class: _vm.classes
  }, [(_vm.name) ? _c('input', {
    staticClass: "ui-select__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.submittedValue
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-select__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-select__content"
  }, [_c('div', {
    ref: "label",
    staticClass: "ui-select__label",
    attrs: {
      "tabindex": _vm.disabled ? null : '0'
    }
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-select__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-select__display"
  }, [_c('div', {
    staticClass: "ui-select__display-value",
    class: {
      'is-placeholder': !_vm.hasDisplayText
    },
    on: {
      "click": _vm.toggleDropdown,
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.openDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
        _vm.openDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        _vm.onBlur($event)
      }]
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.hasDisplayText ? _vm.displayText : (_vm.hasFloatingLabel && _vm.isLabelInline) ? null : _vm.placeholder) + "\n                    ")]), _vm._v(" "), _c('ui-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdownIcon),
      expression: "showDropdownIcon"
    }],
    staticClass: "ui-select__dropdown-button",
    nativeOn: {
      "click": function($event) {
        _vm.toggleDropdown($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16",
      "height": "10"
    }
  }, [_c('path', {
    attrs: {
      "d": "M.9 2.85L7.94 9.9l7.07-7.05c.5-.5.5-1.3 0-1.8-.5-.48-1.3-.48-1.8 0l-5.27 5.3-5.27-5.3c-.5-.48-1.3-.48-1.8 0-.48.5-.48 1.3 0 1.8"
    }
  })])]), _vm._v(" "), _c('ui-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showClearIcon),
      expression: "showClearIcon"
    }],
    staticClass: "ui-select__clear-button"
  }, [_c('svg', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showClearIcon),
      expression: "showClearIcon"
    }],
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "width": "16",
      "height": "16"
    },
    on: {
      "click": function($event) {
        _vm.clear()
      }
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.7,8L15,2.8c0.5-0.5,0.5-1.2,0-1.7c-0.5-0.5-1.2-0.5-1.7,0L8,6.3L2.8,1C2.3,0.6,1.5,0.6,1,1C0.6,1.5,0.6,2.3,1,2.8L6.3,8\n\tL1,13.2c-0.5,0.5-0.5,1.2,0,1.7c0.5,0.5,1.2,0.5,1.7,0L8,9.7l5.2,5.2c0.5,0.5,1.2,0.5,1.7,0c0.5-0.5,0.5-1.2,0-1.7L9.7,8z"
    }
  })])])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "ui-select--transition-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    ref: "dropdown",
    staticClass: "ui-select__dropdown",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex + 1)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        $event.stopPropagation();
        _vm.selectHighlighted(_vm.highlightedIndex, $event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        $event.preventDefault();
        _vm.closeDropdown()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        _vm.onBlur($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex - 1)
      }]
    }
  }, [(_vm.hasSearch) ? _c('div', {
    staticClass: "ui-select__search",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.stopPropagation();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    ref: "searchInput",
    staticClass: "ui-select__search-input",
    attrs: {
      "autocomplete": "off",
      "type": "text",
      "placeholder": _vm.searchPlaceholder
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('ui-icon', {
    staticClass: "ui-select__search-icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
    }
  })])]), _vm._v(" "), _c('ui-progress-circular', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "ui-select__search-progress",
    attrs: {
      "size": 20,
      "stroke": 4
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('ul', {
    ref: "optionsList",
    staticClass: "ui-select__options"
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return _c('ui-select-option', {
      ref: "options",
      refInFor: true,
      attrs: {
        "highlighted": _vm.highlightedIndex === index,
        "keys": _vm.keys,
        "multiple": _vm.multiple,
        "option": option,
        "selected": _vm.isOptionSelected(option),
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectOption(option, index)
        },
        "mouseover": function($event) {
          $event.stopPropagation();
          _vm.highlightOption(index, {
            autoScroll: false
          })
        }
      }
    }, [_vm._t("option", null, {
      highlighted: _vm.highlightedIndex === index,
      index: index,
      option: option,
      selected: _vm.isOptionSelected(option)
    })], 2)
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasNoResults),
      expression: "hasNoResults"
    }],
    staticClass: "ui-select__no-results"
  }, [_vm._t("no-results", [_vm._v("No results found")])], 2)], 2)])])], 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-select__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c2ce91f6", module.exports)
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c96135a!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelectOption.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c96135a!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelectOption.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 21:
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
//
//
//
//
//

exports.default = {
    name: 'ui-progress-circular',

    props: {
        type: {
            type: String,
            default: 'indeterminate' // 'indeterminate' or 'determinate'
        },
        color: {
            type: String,
            default: 'primary' // 'primary', 'accent', multi-color', 'black', or 'white'
        },
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 32
        },
        stroke: Number,
        autoStroke: {
            type: Boolean,
            default: true
        },
        disableTransition: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-progress-circular--color-' + this.color, 'ui-progress-circular--type-' + this.type];
        },
        strokeDashArray: function strokeDashArray() {
            var circumference = 2 * Math.PI * this.radius;

            // Use first 3 decimal places, rounded as appropriate
            return Math.round(circumference * 1000) / 1000;
        },
        strokeDashOffset: function strokeDashOffset() {
            var progress = this.moderateProgress(this.progress);
            var circumference = 2 * Math.PI * this.radius;

            return (100 - progress) / 100 * circumference;
        },
        radius: function radius() {
            var stroke = this.stroke ? this.stroke : 4;
            return (this.size - stroke) / 2;
        },
        calculatedStroke: function calculatedStroke() {
            if (this.stroke) {
                return this.stroke;
            }

            if (this.autoStroke) {
                return parseInt(this.size / 8, 10);
            }

            return 4;
        }
    },

    methods: {
        moderateProgress: function moderateProgress(progress) {
            if (isNaN(progress) || progress < 0) {
                return 0;
            }

            if (progress > 100) {
                return 100;
            }

            return progress;
        }
    }
};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c2ce91f6!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelect.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c2ce91f6!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelect.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n@keyframes pulse {\n0% {\n    transform: scale(1);\n}\n30% {\n    transform: scale(1);\n}\n40% {\n    transform: scale(1.32);\n}\n55% {\n    transform: scale(1);\n}\n65% {\n    transform: scale(1.2);\n}\n75% {\n    transform: scale(1);\n}\n85% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translateY(36px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n}\n}\n.ui-progress-circular {\n  position: relative;\n}\n.ui-progress-circular__determinate {\n  transform: rotate(270deg);\n}\n.ui-progress-circular__determinate-path {\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 0.3s;\n}\n.ui-progress-circular__indeterminate {\n  animation: ui-progress-circular-rotate 0.7s linear infinite;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform-origin: center center;\n  width: 100%;\n}\n.ui-progress-circular__indeterminate-path {\n  stroke-dasharray: 89,200;\n  stroke-dashoffset: -35px;\n  stroke-linecap: round;\n}\n.ui-progress-circular--color-multi-color .ui-progress-circular__determinate-path {\n  stroke: #6457b5;\n}\n.ui-progress-circular--color-multi-color .ui-progress-circular__indeterminate-path {\n  animation: ui-progress-circular-color 6s ease-in-out infinite;\n}\n.ui-progress-circular--color-primary .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-primary .ui-progress-circular__indeterminate-path {\n  stroke: #6457b5;\n}\n.ui-progress-circular--color-accent .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-accent .ui-progress-circular__indeterminate-path {\n  stroke: #000000;\n}\n.ui-progress-circular--color-black .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-black .ui-progress-circular__indeterminate-path {\n  stroke: #212121;\n}\n.ui-progress-circular--color-white .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-white .ui-progress-circular__indeterminate-path {\n  stroke: white;\n}\n.ui-progress-circular--transition-fade-enter-active,\n.ui-progress-circular--transition-fade-leave-active {\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.ui-progress-circular--transition-fade-enter,\n.ui-progress-circular--transition-fade-leave-active {\n  opacity: 0;\n  transform: scale(0);\n}\n@keyframes ui-progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes ui-progress-circular-color {\n0%,\n  100% {\n    stroke: #f44336;\n}\n40% {\n    stroke: #2196f3;\n}\n66% {\n    stroke: #4caf50;\n}\n80%,\n  90% {\n    stroke: #ff9800;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.disableTransition ? null : 'ui-progress-circular--transition-fade'
    }
  }, [_c('div', {
    staticClass: "ui-progress-circular",
    class: _vm.classes,
    style: ({
      'width': _vm.size + 'px',
      'height': _vm.size + 'px'
    })
  }, [(_vm.type === 'determinate') ? _c('svg', {
    staticClass: "ui-progress-circular__determinate",
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": _vm.progress,
      "height": _vm.size,
      "width": _vm.size
    }
  }, [_c('circle', {
    staticClass: "ui-progress-circular__determinate-path",
    style: ({
      'stroke-dashoffset': _vm.strokeDashOffset,
      'stroke-width': _vm.calculatedStroke
    }),
    attrs: {
      "fill": "transparent",
      "stroke-dashoffset": "0",
      "cx": _vm.size / 2,
      "cy": _vm.size / 2,
      "r": _vm.radius,
      "stroke-dasharray": _vm.strokeDashArray
    }
  })]) : _c('svg', {
    staticClass: "ui-progress-circular__indeterminate",
    attrs: {
      "role": "progressbar",
      "viewBox": "25 25 50 50",
      "aria-valuemax": 100,
      "aria-valuemin": 0
    }
  }, [_c('circle', {
    staticClass: "ui-progress-circular__indeterminate-path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "fill": "none",
      "r": "20",
      "stroke-miterlimit": "10",
      "stroke-width": _vm.calculatedStroke
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7eea3e96", module.exports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7eea3e96!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiProgressCircular.vue", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7eea3e96!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiProgressCircular.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.looseEqual = looseEqual;
exports.looseIndexOf = looseIndexOf;
exports.startsWith = startsWith;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    // eslint-disable-next-line eqeqeq
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
}

/**
 * Check if a val exists in arr using looseEqual comparison
 */
function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
            return i;
        }
    }

    return -1;
}

/**
 * Check if the given string starts with the query, beginning
 * at the given position
 */
function startsWith(string, query) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return string.substr(position, query.length) === query;
}

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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inView = inView;
exports.scrollIntoView = scrollIntoView;
exports.resetScroll = resetScroll;
function inView(element, container) {
    if (!element) {
        return;
    }

    container = container || element.parentElement;

    var top = element.offsetTop;
    var parentTop = container.scrollTop;
    var bottom = top + element.offsetHeight;
    var parentBottom = container.offsetHeight;

    return top >= parentTop && bottom <= parentBottom;
}

function scrollIntoView(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { container: null, marginTop: 0 };

    if (!element) {
        return;
    }

    options.container = options.container || element.parentElement;

    if (inView(element, options.container)) {
        return;
    }

    options.container.scrollTop = element.offsetTop - options.marginTop;
}

function resetScroll(element) {
    if (!element) {
        return;
    }

    element.scrollTop = 0;
}

exports.default = {
    inView: inView,
    scrollIntoView: scrollIntoView,
    resetScroll: resetScroll
};

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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


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
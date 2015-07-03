(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ElegantReact"] = factory(require("react"));
	else
		root["ElegantReact"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = setup;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createElegantDecorator = __webpack_require__(1);

	var _createElegantDecorator2 = _interopRequireDefault(_createElegantDecorator);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function subedit(edit) {
	  for (var _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    path[_key - 1] = arguments[_key];
	  }

	  return function (transform) {
	    return edit(function (state) {
	      return state.updateIn(path, transform);
	    });
	  };
	}

	function setup(debug) {
	  return {
	    subedit: subedit,
	    sub: subedit,
	    elegant: (0, _createElegantDecorator2['default'])(_react2['default'], debug)
	  };
	}

	setup.elegant = (0, _createElegantDecorator2['default'])(_react2['default']);
	setup.subedit = subedit;
	setup.sub = subedit;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports['default'] = createElegantDecorator;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _statics = __webpack_require__(2);

	var _shallowEqualProps = __webpack_require__(3);

	var getDisplayName = function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	};

	function createElegantDecorator(React, debug) {
	  var Component = React.Component;

	  var decorator = function decorator(_ref) {
	    var statics = _ref.statics;

	    var staticsMap = (0, _shallowEqualProps.createStaticsMap)(statics);

	    return function (DecoratedComponent) {
	      return (function (_Component) {
	        function ElegantDecorator() {
	          _classCallCheck(this, ElegantDecorator);

	          _get(Object.getPrototypeOf(ElegantDecorator.prototype), 'constructor', this).apply(this, arguments);
	        }

	        _inherits(ElegantDecorator, _Component);

	        _createClass(ElegantDecorator, [{
	          key: 'shouldComponentUpdate',
	          value: function shouldComponentUpdate(nextProps, nextState) {
	            return !(0, _shallowEqualProps.shallowEqualProps)(this.props, nextProps, staticsMap);
	          }
	        }, {
	          key: 'componentWillReceiveProps',
	          value: function componentWillReceiveProps(newProps) {
	            (0, _statics.updateStatics)(statics, this.wrappedProps, newProps);
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            if (debug) console.log('render <' + ElegantDecorator.displayName + '>');

	            this.wrappedProps = (0, _statics.wrapStatics)(statics, this.props);

	            return React.createElement(DecoratedComponent, this.wrappedProps);

	            // could be optimized with createElement
	            // return React.createElement(DecoratedComponent, this.wrappedProps, this.wrappedProps.children);
	          }
	        }], [{
	          key: 'displayName',
	          value: 'Elegant(' + getDisplayName(DecoratedComponent) + ')',
	          enumerable: true
	        }, {
	          key: 'DecoratedComponent',
	          value: DecoratedComponent,
	          enumerable: true
	        }]);

	        return ElegantDecorator;
	      })(Component);
	    };
	  };

	  return function (optionsOrComponent) {
	    return optionsOrComponent.prototype instanceof Component ? decorator({})(optionsOrComponent) : decorator(optionsOrComponent);
	  }; // Component : options
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isDelegate = isDelegate;
	exports.wrapStatics = wrapStatics;
	exports.updateStatics = updateStatics;
	function delegate(delegee) {
	  var delegate = function delegate() {
	    return delegate.delegee.apply(this, arguments);
	  };
	  delegate.delegee = delegee;
	  delegate.isDelegate = true;
	  return delegate;
	}

	function isDelegate(value) {
	  return value && value.isDelegate;
	}

	// perform on render

	function wrapStatics(statics, props) {
	  var transformedProps = _extends({}, props);
	  if (statics) {
	    statics.forEach(function (key) {
	      var delegee = props[key];
	      if (typeof delegee === 'function') {
	        transformedProps[key] = isDelegate(delegee) ? delegee : delegate(delegee);
	      }
	    });
	  }
	  return transformedProps;
	}

	// perform when recieving props

	function updateStatics(statics, wrappedProps, newProps) {
	  if (statics && newProps && wrappedProps) {
	    statics.forEach(function (key) {
	      var newMember = newProps[key];

	      if (typeof newMember === 'function') {
	        var currentMember = wrappedProps[key];
	        if (isDelegate(currentMember)) {
	          var delegee = isDelegate(newMember) ? newMember.delegee : newMember;
	          currentMember.delegee = delegee;
	        }
	      }
	    });
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	// convert statics array to map object
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createStaticsMap = createStaticsMap;
	exports.shallowEqualProps = shallowEqualProps;

	function createStaticsMap(statics) {
	  if (!statics) return {};
	  var map = {};
	  statics.forEach(function (key) {
	    return map[key] = true;
	  });
	  return map;
	}

	;

	// modified version of shallowEqualProps fn from PureRenderMixin

	function shallowEqualProps(objA, objB, staticsMap) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (staticsMap[keysA[i]]) continue;
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
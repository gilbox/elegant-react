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
	    elegant: (0, _createElegantDecorator2['default'])(_react2['default'], debug)
	  };
	}

	setup.elegant = (0, _createElegantDecorator2['default'])(_react2['default']);
	setup.subedit = subedit;
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

	var _componentRenderMixin = __webpack_require__(2);

	var _staticsMixin = __webpack_require__(3);

	var getDisplayName = function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	};

	function createElegantDecorator(React, debug) {
	  var Component = React.Component;

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
	          return _componentRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
	        }
	      }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          return _staticsMixin.componentWillMount.call(this);
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	          return _staticsMixin.componentWillReceiveProps.call(this, newProps);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          if (debug) console.log('render <' + ElegantDecorator.displayName + '>');
	          return React.createElement(DecoratedComponent, this.props);
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
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// ComponentRenderMixin is a slightly modified version of PureRenderMixin

	'use strict';

	function shallowEqualProps(objA, objB) {
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
	    if (keysA[i] === 'statics') continue;
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	function shallowEqual(objA, objB) {
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
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	var ComponentRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqualProps(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ComponentRenderMixin;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function delegate(delegee) {
	  var delegate = function delegate() {
	    return delegate.delegee.apply(this, arguments);
	  };
	  delegate.delegee = delegee;
	  delegate.isDelegate = true;
	  return delegate;
	}

	function wrapWithDelegate(key) {
	  var statics = this;
	  var delegee = statics[key];
	  if (typeof delegee === 'function') {
	    statics[key] = isDelegate(delegee) ? delegee : delegate(delegee);
	  }
	}

	function isDelegate(value) {
	  return value && value.isDelegate;
	}

	function componentWillMount() {
	  var statics = this.props.statics;
	  if (statics && typeof statics === 'object') {
	    Object.keys(statics).forEach(wrapWithDelegate, statics);
	  }
	}

	function componentWillReceiveProps(newProps) {
	  var currentProps = this.props;
	  var currentStatics = currentProps.statics;
	  var newStatics = newProps.statics;
	  var haveChangedStatics = newStatics !== currentStatics && newStatics && typeof newStatics === 'object';

	  if (haveChangedStatics) {
	    Object.keys(newStatics).forEach(function (key) {
	      var newMember = newStatics[key];
	      if (typeof newMember == 'function') {
	        var currentMember = currentStatics && currentStatics[key];
	        if (isDelegate(currentMember)) {
	          var delegee = isDelegate(newMember) ? newMember.delegee : newMember;
	          currentMember.delegee = delegee;
	          newStatics[key] = currentMember;
	        } else {
	          newStatics[key] = delegate(newMember);
	        }
	      }
	    });
	  }
	}

	var StaticsMixin = {
	  componentWillMount: componentWillMount,
	  componentWillReceiveProps: componentWillReceiveProps
	};

	module.exports = StaticsMixin;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
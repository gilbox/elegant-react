(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ElegantReact"] = factory(require("react"));
	else
		root["ElegantReact"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	var React = __webpack_require__(1);
	var elegant = __webpack_require__(2);

	module.exports = elegant(React);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var componentLib = __webpack_require__(3);
	var StaticsMixin = __webpack_require__(5);
	var ComponentRenderMixin = __webpack_require__(4);

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

	var elegant = function elegant(React) {
	  var component = componentLib(React);

	  var lib = {
	    subedit: subedit,
	    StaticsMixin: StaticsMixin,
	    ComponentRenderMixin: ComponentRenderMixin,
	    component: component.component
	  };

	  var elegantReact = function elegantReact(options) {
	    if (options && options.hasOwnProperty('debug')) {
	      component.enableDebugging(options.debug);
	    }

	    return lib;
	  };

	  elegantReact.component = lib.component;
	  elegantReact.subedit = subedit;
	  elegantReact.StaticsMixin = lib.StaticsMixin;
	  elegantReact.ComponentRenderMixin = lib.ComponentRenderMixin;

	  return elegantReact;
	};

	module.exports = elegant;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ComponentRenderMixin = __webpack_require__(4);
	var StaticsMixin = __webpack_require__(5);

	var debug = false;

	module.exports = function (React) {
	  return {
	    enableDebugging: function enableDebugging(enable) {
	      return debug = !!enable;
	    },

	    // @param additionalMixins? {Array|Object}
	    // @param renderFn {Function}
	    // @returns Component
	    component: function component(additionalMixins, renderFn) {
	      renderFn = renderFn || additionalMixins;
	      additionalMixins = additionalMixins instanceof Function ? [] : [].concat(additionalMixins);

	      var mixins = [ComponentRenderMixin, StaticsMixin].concat(additionalMixins);

	      var render = function render() {
	        if (debug) console.log('render <' + renderFn.name + ' />');
	        return renderFn.call(this, this.props, this.props.statics, this.props.children);
	      };

	      var displayName = renderFn.name;

	      return React.createClass({ displayName: displayName, mixins: mixins, render: render });
	    }
	  };
	};

/***/ },
/* 4 */
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
/* 5 */
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

/***/ }
/******/ ])
});
;
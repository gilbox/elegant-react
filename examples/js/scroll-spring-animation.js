webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _springs = __webpack_require__(174);
	
	var _scroll = __webpack_require__(178);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _rangeControl = __webpack_require__(179);
	
	var _rangeControl2 = _interopRequireDefault(_rangeControl);
	
	var translate3d = function translate3d(x, y, z) {
	  return 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
	};
	
	var styles = {
	  title: { marginBottom: '100px' },
	  parallaxContainer: { width: '100vw', height: '400px', overflow: 'hidden', position: 'relative' },
	  parallaxTitle: { zIndex: 10, position: 'absolute', top: '50px', left: '50px', color: 'white', textShadow: '0 10px 40px black', fontSize: '100px', fontWeight: 1000 },
	  parallaxImage: { zIndex: 1, position: 'absolute' },
	  control: { display: 'inline-block', padding: '0 20px' }
	};
	
	var App = (function (_Component) {
	  function App(props) {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
	    this.state = { friction: 15, tension: 180 };
	  }
	
	  _inherits(App, _Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          { style: styles.title },
	          'Scroll and Spring Animation Demo'
	        ),
	        _react2['default'].createElement(_rangeControl2['default'], { name: 'tension', type: 'range', min: '1', max: '200', style: styles.control,
	          value: this.state.tension,
	          onChange: function (event) {
	            return _this.setState({ tension: ~ ~event.target.value });
	          } }),
	        _react2['default'].createElement(_rangeControl2['default'], { name: 'friction', min: '1', max: '30', style: styles.control,
	          value: this.state.friction,
	          onChange: function (event) {
	            return _this.setState({ friction: ~ ~event.target.value });
	          } }),
	        _react2['default'].createElement(
	          _scroll2['default'],
	          null,
	          function (scrollTop) {
	            return _react2['default'].createElement(
	              _springs.Spring,
	              { to: scrollTop, friction: _this.state.friction, tension: _this.state.tension },
	              function (offsetY) {
	                return _react2['default'].createElement(
	                  'div',
	                  { style: styles.parallaxContainer },
	                  _react2['default'].createElement(
	                    'h2',
	                    { style: styles.parallaxTitle },
	                    'Music is ❤'
	                  ),
	                  _react2['default'].createElement('img', { src: 'bg.jpg', width: '1920px',
	                    style: _extends({}, styles.parallaxImage, {
	                      width: '100%',
	                      minWidth: '800px',
	                      transform: translate3d(0, -offsetY / 2 - 50, 0) }) })
	                );
	              }
	            );
	          }
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: 'https://www.flickr.com/photos/ubeyd/19152848669/in/pool-83823859@N00/' },
	            'image by Ubeyd'
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	;
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// copied and modified from https://raw.githubusercontent.com/threepointone/react-springs/master/src.js
	// because react-native support breaks the build process
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	// try{ React = require('react-native'); }
	// catch(e){ React = require('react'); }
	// the above bit should get better after https://github.com/facebook/react/issues/3220
	
	// springs, all that
	
	var _rebound = __webpack_require__(175);
	
	var _rebound2 = _interopRequireDefault(_rebound);
	
	var noop = function noop() {}; // default onSpringUpdate
	
	var Spring = _react2['default'].createClass({
	  displayName: 'Spring',
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      // we use a common 'global' springSystem for perf, but you can pass in your own
	      springSystem: new _rebound2['default'].SpringSystem(),
	
	      // from and to are analogous to setCurrentValue() and setEndValue()
	      from: 0,
	      to: 0,
	
	      // more rebound options
	      tension: 50,
	      friction: 3,
	      overShootClamping: false,
	      atRest: false,
	      onSpringUpdate: noop,
	      onSpring: noop,
	      children: function children() {
	        return null
	
	        // todo - velocity?
	        ;
	      } };
	  },
	
	  propTypes: {
	    from: _react2['default'].PropTypes.number,
	    friction: _react2['default'].PropTypes.number,
	    tension: _react2['default'].PropTypes.number,
	    to: _react2['default'].PropTypes.number,
	    atRest: _react2['default'].PropTypes.bool,
	    overShootClamping: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.func,
	    onSpringUpdate: _react2['default'].PropTypes.func,
	    onSpring: _react2['default'].PropTypes.func
	  },
	
	  statics: {
	    // high perf "setters",
	    friction: function friction(spring, props) {
	      spring.getSpringConfig().friction = _rebound2['default'].OrigamiValueConverter.frictionFromOrigamiValue(props.friction);
	    },
	    tension: function tension(spring, props) {
	      spring.getSpringConfig().tension = _rebound2['default'].OrigamiValueConverter.frictionFromOrigamiValue(props.tension);
	    },
	    from: function from(spring, props) {
	      spring.setCurrentValue(props.from, true).setEndValue(spring.getEndValue());
	    },
	    overShootClamping: function overShootClamping(spring, props) {
	      spring.setOvershootClampingEnabled(props.overShootClamping);
	    },
	    to: function to(spring, props) {
	      if (props.atRest) {
	        spring.setCurrentValue(props.to).setAtRest();
	      } else {
	        spring.setEndValue(props.to);
	      }
	    }
	  },
	
	  accept: function accept(props, initial) {
	    var _this = this;
	
	    Object.keys(props).forEach(function (k) {
	      if (Spring[k] && (initial || props[k] !== _this.props[k])) {
	        Spring[k](_this.spring, props);
	      }
	    });
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    return true;
	    // components with 'render callbacks' can/should render 'through'.
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.from
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    var _this2 = this;
	
	    // create the spring on mounting.
	    this.spring = this.props.springSystem.createSpring(this.props.tension, this.props.friction).addListener({
	      onSpringUpdate: function onSpringUpdate() {
	        _this2.setState({ value: _this2.spring.getCurrentValue() });
	        _this2.props.onSpringUpdate(_this2.spring);
	      }
	    });
	    this.props.onSpring(this.spring);
	    this.accept(this.props, true);
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.accept(nextProps, false);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    // ...and destroy on onmounting
	    this.spring.destroy();
	    delete this.spring;
	    this.props.onSpring(undefined);
	  },
	
	  render: function render() {
	    return this.props.children(this.state.value);
	  }
	});
	
	exports.Spring = Spring;
	var Springs = _react2['default'].createClass({
	  displayName: 'Springs',
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSpringUpdate: noop,
	      onSpring: noop,
	      children: function children() {
	        return null;
	      }
	    };
	  },
	
	  propTypes: {
	    onSpringUpdate: _react2['default'].PropTypes.func,
	    onSpring: _react2['default'].PropTypes.func,
	    children: _react2['default'].PropTypes.func
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    return true;
	    // like above
	  },
	  onSpringUpdate: function onSpringUpdate(key, spring) {
	    this.setState(_defineProperty({}, key, spring.getCurrentValue()));
	    this.props.onSpringUpdate(key, spring);
	  },
	
	  to: function to(pos, keys, index, value) {
	    var _this3 = this;
	
	    if (index === -1) {
	      return this.props.children(value);
	    }
	    var key = keys[index];
	    return _react2['default'].createElement(
	      Spring,
	      _extends({}, this.props, { key: key, to: pos[key], onSpring: function (spring) {
	          return _this3.props.onSpring(key, spring);
	        }, onSpringUpdate: function (spring) {
	          return _this3.onSpringUpdate(key, spring);
	        } }),
	      function (val) {
	        return _this3.to(pos, keys, index - 1, (value[key] = val, value));
	      }
	    );
	  },
	
	  // todo - sort keys alphabetically?
	  render: function render() {
	    // what we do here, is break `to` into key value pairs, and then return a nest of <Spring>s
	    // React takes care of the boring bits (caching, state, etc)
	    var to = this.props.to;var keys = Object.keys(to);
	    return this.to(to, keys, keys.length - 1, {});
	  }
	});
	exports.Springs = Springs;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// Rebound
	// =======
	// **Rebound** is a simple library that models Spring dynamics for the
	// purpose of driving physical animations.
	//
	// Origin
	// ------
	// [Rebound](http://facebook.github.io/rebound) was originally written
	// in Java to provide a lightweight physics system for
	// [Home](https://play.google.com/store/apps/details?id=com.facebook.home) and
	// [Chat Heads](https://play.google.com/store/apps/details?id=com.facebook.orca)
	// on Android. It's now been adopted by several other Android
	// applications. This JavaScript port was written to provide a quick
	// way to demonstrate Rebound animations on the web for a
	// [conference talk](https://www.youtube.com/watch?v=s5kNm-DgyjY). Since then
	// the JavaScript version has been used to build some really nice interfaces.
	// Check out [brandonwalkin.com](http://brandonwalkin.com) for an
	// example.
	//
	// Overview
	// --------
	// The Library provides a SpringSystem for maintaining a set of Spring
	// objects and iterating those Springs through a physics solver loop
	// until equilibrium is achieved. The Spring class is the basic
	// animation driver provided by Rebound. By attaching a listener to
	// a Spring, you can observe its motion. The observer function is
	// notified of position changes on the spring as it solves for
	// equilibrium. These position updates can be mapped to an animation
	// range to drive animated property updates on your user interface
	// elements (translation, rotation, scale, etc).
	//
	// Example
	// -------
	// Here's a simple example. Pressing and releasing on the logo below
	// will cause it to scale up and down with a springy animation.
	//
	// <div style="text-align:center; margin-bottom:50px; margin-top:50px">
	//   <img
	//     src="http://facebook.github.io/rebound/images/rebound.png"
	//     id="logo"
	//   />
	// </div>
	// <script src="../rebound.min.js"></script>
	// <script>
	//
	// function scale(el, val) {
	//   el.style.mozTransform =
	//   el.style.msTransform =
	//   el.style.webkitTransform =
	//   el.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
	// }
	// var el = document.getElementById('logo');
	//
	// var springSystem = new rebound.SpringSystem();
	// var spring = springSystem.createSpring(50, 3);
	// spring.addListener({
	//   onSpringUpdate: function(spring) {
	//     var val = spring.getCurrentValue();
	//     val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.5);
	//     scale(el, val);
	//   }
	// });
	//
	// el.addEventListener('mousedown', function() {
	//   spring.setEndValue(1);
	// });
	//
	// el.addEventListener('mouseout', function() {
	//   spring.setEndValue(0);
	// });
	//
	// el.addEventListener('mouseup', function() {
	//   spring.setEndValue(0);
	// });
	//
	// </script>
	//
	// Here's how it works.
	//
	// ```
	// // Get a reference to the logo element.
	// var el = document.getElementById('logo');
	//
	// // create a SpringSystem and a Spring with a bouncy config.
	// var springSystem = new rebound.SpringSystem();
	// var spring = springSystem.createSpring(50, 3);
	//
	// // Add a listener to the spring. Every time the physics
	// // solver updates the Spring's value onSpringUpdate will
	// // be called.
	// spring.addListener({
	//   onSpringUpdate: function(spring) {
	//     var val = spring.getCurrentValue();
	//     val = rebound.MathUtil
	//                  .mapValueInRange(val, 0, 1, 1, 0.5);
	//     scale(el, val);
	//   }
	// });
	//
	// // Listen for mouse down/up/out and toggle the
	// //springs endValue from 0 to 1.
	// el.addEventListener('mousedown', function() {
	//   spring.setEndValue(1);
	// });
	//
	// el.addEventListener('mouseout', function() {
	//   spring.setEndValue(0);
	// });
	//
	// el.addEventListener('mouseup', function() {
	//   spring.setEndValue(0);
	// });
	//
	// // Helper for scaling an element with css transforms.
	// function scale(el, val) {
	//   el.style.mozTransform =
	//   el.style.msTransform =
	//   el.style.webkitTransform =
	//   el.style.transform = 'scale3d(' +
	//     val + ', ' + val + ', 1)';
	// }
	// ```
	
	(function() {
	  var rebound = {};
	  var util = rebound.util = {};
	  var concat = Array.prototype.concat;
	  var slice = Array.prototype.slice;
	
	  // Bind a function to a context object.
	  util.bind = function bind(func, context) {
	    var args = slice.call(arguments, 2);
	    return function() {
	      func.apply(context, concat.call(args, slice.call(arguments)));
	    };
	  };
	
	  // Add all the properties in the source to the target.
	  util.extend = function extend(target, source) {
	    for (var key in source) {
	      if (source.hasOwnProperty(key)) {
	        target[key] = source[key];
	      }
	    }
	  };
	
	  // SpringSystem
	  // ------------
	  // **SpringSystem** is a set of Springs that all run on the same physics
	  // timing loop. To get started with a Rebound animation you first
	  // create a new SpringSystem and then add springs to it.
	  var SpringSystem = rebound.SpringSystem = function SpringSystem(looper) {
	    this._springRegistry = {};
	    this._activeSprings = [];
	    this.listeners = [];
	    this._idleSpringIndices = [];
	    this.looper = looper || new AnimationLooper();
	    this.looper.springSystem = this;
	  };
	
	  util.extend(SpringSystem.prototype, {
	
	    _springRegistry: null,
	
	    _isIdle: true,
	
	    _lastTimeMillis: -1,
	
	    _activeSprings: null,
	
	    listeners: null,
	
	    _idleSpringIndices: null,
	
	    // A SpringSystem is iterated by a looper. The looper is responsible
	    // for executing each frame as the SpringSystem is resolved to idle.
	    // There are three types of Loopers described below AnimationLooper,
	    // SimulationLooper, and SteppingSimulationLooper. AnimationLooper is
	    // the default as it is the most useful for common UI animations.
	    setLooper: function(looper) {
	      this.looper = looper;
	      looper.springSystem = this;
	    },
	
	    // Add a new spring to this SpringSystem. This Spring will now be solved for
	    // during the physics iteration loop. By default the spring will use the
	    // default Origami spring config with 40 tension and 7 friction, but you can
	    // also provide your own values here.
	    createSpring: function(tension, friction) {
	      var springConfig;
	      if (tension === undefined || friction === undefined) {
	        springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
	      } else {
	        springConfig =
	          SpringConfig.fromOrigamiTensionAndFriction(tension, friction);
	      }
	      return this.createSpringWithConfig(springConfig);
	    },
	
	    // Add a spring with a specified bounciness and speed. To replicate Origami
	    // compositions based on PopAnimation patches, use this factory method to
	    // create matching springs.
	    createSpringWithBouncinessAndSpeed: function(bounciness, speed) {
	      var springConfig;
	      if (bounciness === undefined || speed === undefined) {
	        springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
	      } else {
	        springConfig =
	          SpringConfig.fromBouncinessAndSpeed(bounciness, speed);
	      }
	      return this.createSpringWithConfig(springConfig);
	    },
	
	    // Add a spring with the provided SpringConfig.
	    createSpringWithConfig: function(springConfig) {
	      var spring = new Spring(this);
	      this.registerSpring(spring);
	      spring.setSpringConfig(springConfig);
	      return spring;
	    },
	
	    // You can check if a SpringSystem is idle or active by calling
	    // getIsIdle. If all of the Springs in the SpringSystem are at rest,
	    // i.e. the physics forces have reached equilibrium, then this
	    // method will return true.
	    getIsIdle: function() {
	      return this._isIdle;
	    },
	
	    // Retrieve a specific Spring from the SpringSystem by id. This
	    // can be useful for inspecting the state of a spring before
	    // or after an integration loop in the SpringSystem executes.
	    getSpringById: function (id) {
	      return this._springRegistry[id];
	    },
	
	    // Get a listing of all the springs registered with this
	    // SpringSystem.
	    getAllSprings: function() {
	      var vals = [];
	      for (var id in this._springRegistry) {
	        if (this._springRegistry.hasOwnProperty(id)) {
	          vals.push(this._springRegistry[id]);
	        }
	      }
	      return vals;
	    },
	
	    // registerSpring is called automatically as soon as you create
	    // a Spring with SpringSystem#createSpring. This method sets the
	    // spring up in the registry so that it can be solved in the
	    // solver loop.
	    registerSpring: function(spring) {
	      this._springRegistry[spring.getId()] = spring;
	    },
	
	    // Deregister a spring with this SpringSystem. The SpringSystem will
	    // no longer consider this Spring during its integration loop once
	    // this is called. This is normally done automatically for you when
	    // you call Spring#destroy.
	    deregisterSpring: function(spring) {
	      removeFirst(this._activeSprings, spring);
	      delete this._springRegistry[spring.getId()];
	    },
	
	    advance: function(time, deltaTime) {
	      while(this._idleSpringIndices.length > 0) this._idleSpringIndices.pop();
	      for (var i = 0, len = this._activeSprings.length; i < len; i++) {
	        var spring = this._activeSprings[i];
	        if (spring.systemShouldAdvance()) {
	          spring.advance(time / 1000.0, deltaTime / 1000.0);
	        } else {
	          this._idleSpringIndices.push(this._activeSprings.indexOf(spring));
	        }
	      }
	      while(this._idleSpringIndices.length > 0) {
	        var idx = this._idleSpringIndices.pop();
	        idx >= 0 && this._activeSprings.splice(idx, 1);
	      }
	    },
	
	    // This is our main solver loop called to move the simulation
	    // forward through time. Before each pass in the solver loop
	    // onBeforeIntegrate is called on an any listeners that have
	    // registered themeselves with the SpringSystem. This gives you
	    // an opportunity to apply any constraints or adjustments to
	    // the springs that should be enforced before each iteration
	    // loop. Next the advance method is called to move each Spring in
	    // the systemShouldAdvance forward to the current time. After the
	    // integration step runs in advance, onAfterIntegrate is called
	    // on any listeners that have registered themselves with the
	    // SpringSystem. This gives you an opportunity to run any post
	    // integration constraints or adjustments on the Springs in the
	    // SpringSystem.
	    loop: function(currentTimeMillis) {
	      var listener;
	      if (this._lastTimeMillis === -1) {
	        this._lastTimeMillis = currentTimeMillis -1;
	      }
	      var ellapsedMillis = currentTimeMillis - this._lastTimeMillis;
	      this._lastTimeMillis = currentTimeMillis;
	
	      var i = 0, len = this.listeners.length;
	      for (i = 0; i < len; i++) {
	        listener = this.listeners[i];
	        listener.onBeforeIntegrate && listener.onBeforeIntegrate(this);
	      }
	
	      this.advance(currentTimeMillis, ellapsedMillis);
	      if (this._activeSprings.length === 0) {
	        this._isIdle = true;
	        this._lastTimeMillis = -1;
	      }
	
	      for (i = 0; i < len; i++) {
	        listener = this.listeners[i];
	        listener.onAfterIntegrate && listener.onAfterIntegrate(this);
	      }
	
	      if (!this._isIdle) {
	        this.looper.run();
	      }
	    },
	
	    // activateSpring is used to notify the SpringSystem that a Spring
	    // has become displaced. The system responds by starting its solver
	    // loop up if it is currently idle.
	    activateSpring: function(springId) {
	      var spring = this._springRegistry[springId];
	      if (this._activeSprings.indexOf(spring) == -1) {
	        this._activeSprings.push(spring);
	      }
	      if (this.getIsIdle()) {
	        this._isIdle = false;
	        this.looper.run();
	      }
	    },
	
	    // Add a listener to the SpringSystem so that you can receive
	    // before/after integration notifications allowing Springs to be
	    // constrained or adjusted.
	    addListener: function(listener) {
	      this.listeners.push(listener);
	    },
	
	    // Remove a previously added listener on the SpringSystem.
	    removeListener: function(listener) {
	      removeFirst(this.listeners, listener);
	    },
	
	    // Remove all previously added listeners on the SpringSystem.
	    removeAllListeners: function() {
	      this.listeners = [];
	    }
	
	  });
	
	  // Spring
	  // ------
	  // **Spring** provides a model of a classical spring acting to
	  // resolve a body to equilibrium. Springs have configurable
	  // tension which is a force multipler on the displacement of the
	  // spring from its rest point or `endValue` as defined by [Hooke's
	  // law](http://en.wikipedia.org/wiki/Hooke's_law). Springs also have
	  // configurable friction, which ensures that they do not oscillate
	  // infinitely. When a Spring is displaced by updating it's resting
	  // or `currentValue`, the SpringSystems that contain that Spring
	  // will automatically start looping to solve for equilibrium. As each
	  // timestep passes, `SpringListener` objects attached to the Spring
	  // will be notified of the updates providing a way to drive an
	  // animation off of the spring's resolution curve.
	  var Spring = rebound.Spring = function Spring(springSystem) {
	    this._id = 's' + Spring._ID++;
	    this._springSystem = springSystem;
	    this.listeners = [];
	    this._currentState = new PhysicsState();
	    this._previousState = new PhysicsState();
	    this._tempState = new PhysicsState();
	  };
	
	  util.extend(Spring, {
	    _ID: 0,
	
	    MAX_DELTA_TIME_SEC: 0.064,
	
	    SOLVER_TIMESTEP_SEC: 0.001
	
	  });
	
	  util.extend(Spring.prototype, {
	
	    _id: 0,
	
	    _springConfig: null,
	
	    _overshootClampingEnabled: false,
	
	    _currentState: null,
	
	    _previousState: null,
	
	    _tempState: null,
	
	    _startValue: 0,
	
	    _endValue: 0,
	
	    _wasAtRest: true,
	
	    _restSpeedThreshold: 0.001,
	
	    _displacementFromRestThreshold: 0.001,
	
	    listeners: null,
	
	    _timeAccumulator: 0,
	
	    _springSystem: null,
	
	    // Remove a Spring from simulation and clear its listeners.
	    destroy: function() {
	      this.listeners = [];
	      this.frames = [];
	      this._springSystem.deregisterSpring(this);
	    },
	
	    // Get the id of the spring, which can be used to retrieve it from
	    // the SpringSystems it participates in later.
	    getId: function() {
	      return this._id;
	    },
	
	    // Set the configuration values for this Spring. A SpringConfig
	    // contains the tension and friction values used to solve for the
	    // equilibrium of the Spring in the physics loop.
	    setSpringConfig: function(springConfig) {
	      this._springConfig = springConfig;
	      return this;
	    },
	
	    // Retrieve the SpringConfig used by this Spring.
	    getSpringConfig: function() {
	      return this._springConfig;
	    },
	
	    // Set the current position of this Spring. Listeners will be updated
	    // with this value immediately. If the rest or `endValue` is not
	    // updated to match this value, then the spring will be dispalced and
	    // the SpringSystem will start to loop to restore the spring to the
	    // `endValue`.
	    //
	    // A common pattern is to move a Spring around without animation by
	    // calling.
	    //
	    // ```
	    // spring.setCurrentValue(n).setAtRest();
	    // ```
	    //
	    // This moves the Spring to a new position `n`, sets the endValue
	    // to `n`, and removes any velocity from the `Spring`. By doing
	    // this you can allow the `SpringListener` to manage the position
	    // of UI elements attached to the spring even when moving without
	    // animation. For example, when dragging an element you can
	    // update the position of an attached view through a spring
	    // by calling `spring.setCurrentValue(x)`. When
	    // the gesture ends you can update the Springs
	    // velocity and endValue
	    // `spring.setVelocity(gestureEndVelocity).setEndValue(flingTarget)`
	    // to cause it to naturally animate the UI element to the resting
	    // position taking into account existing velocity. The codepaths for
	    // synchronous movement and spring driven animation can
	    // be unified using this technique.
	    setCurrentValue: function(currentValue, skipSetAtRest) {
	      this._startValue = currentValue;
	      this._currentState.position = currentValue;
	      if (!skipSetAtRest) {
	        this.setAtRest();
	      }
	      this.notifyPositionUpdated(false, false);
	      return this;
	    },
	
	    // Get the position that the most recent animation started at. This
	    // can be useful for determining the number off oscillations that
	    // have occurred.
	    getStartValue: function() {
	      return this._startValue;
	    },
	
	    // Retrieve the current value of the Spring.
	    getCurrentValue: function() {
	      return this._currentState.position;
	    },
	
	    // Get the absolute distance of the Spring from it's resting endValue
	    // position.
	    getCurrentDisplacementDistance: function() {
	      return this.getDisplacementDistanceForState(this._currentState);
	    },
	
	    getDisplacementDistanceForState: function(state) {
	      return Math.abs(this._endValue - state.position);
	    },
	
	    // Set the endValue or resting position of the spring. If this
	    // value is different than the current value, the SpringSystem will
	    // be notified and will begin running its solver loop to resolve
	    // the Spring to equilibrium. Any listeners that are registered
	    // for onSpringEndStateChange will also be notified of this update
	    // immediately.
	    setEndValue: function(endValue) {
	      if (this._endValue == endValue && this.isAtRest())  {
	        return this;
	      }
	      this._startValue = this.getCurrentValue();
	      this._endValue = endValue;
	      this._springSystem.activateSpring(this.getId());
	      for (var i = 0, len = this.listeners.length; i < len; i++) {
	        var listener = this.listeners[i];
	        var onChange = listener.onSpringEndStateChange;
	        onChange && onChange(this);
	      }
	      return this;
	    },
	
	    // Retrieve the endValue or resting position of this spring.
	    getEndValue: function() {
	      return this._endValue;
	    },
	
	    // Set the current velocity of the Spring. As previously mentioned,
	    // this can be useful when you are performing a direct manipulation
	    // gesture. When a UI element is released you may call setVelocity
	    // on its animation Spring so that the Spring continues with the
	    // same velocity as the gesture ended with. The friction, tension,
	    // and displacement of the Spring will then govern its motion to
	    // return to rest on a natural feeling curve.
	    setVelocity: function(velocity) {
	      if (velocity === this._currentState.velocity) {
	        return this;
	      }
	      this._currentState.velocity = velocity;
	      this._springSystem.activateSpring(this.getId());
	      return this;
	    },
	
	    // Get the current velocity of the Spring.
	    getVelocity: function() {
	      return this._currentState.velocity;
	    },
	
	    // Set a threshold value for the movement speed of the Spring below
	    // which it will be considered to be not moving or resting.
	    setRestSpeedThreshold: function(restSpeedThreshold) {
	      this._restSpeedThreshold = restSpeedThreshold;
	      return this;
	    },
	
	    // Retrieve the rest speed threshold for this Spring.
	    getRestSpeedThreshold: function() {
	      return this._restSpeedThreshold;
	    },
	
	    // Set a threshold value for displacement below which the Spring
	    // will be considered to be not displaced i.e. at its resting
	    // `endValue`.
	    setRestDisplacementThreshold: function(displacementFromRestThreshold) {
	      this._displacementFromRestThreshold = displacementFromRestThreshold;
	    },
	
	    // Retrieve the rest displacement threshold for this spring.
	    getRestDisplacementThreshold: function() {
	      return this._displacementFromRestThreshold;
	    },
	
	    // Enable overshoot clamping. This means that the Spring will stop
	    // immediately when it reaches its resting position regardless of
	    // any existing momentum it may have. This can be useful for certain
	    // types of animations that should not oscillate such as a scale
	    // down to 0 or alpha fade.
	    setOvershootClampingEnabled: function(enabled) {
	      this._overshootClampingEnabled = enabled;
	      return this;
	    },
	
	    // Check if overshoot clamping is enabled for this spring.
	    isOvershootClampingEnabled: function() {
	      return this._overshootClampingEnabled;
	    },
	
	    // Check if the Spring has gone past its end point by comparing
	    // the direction it was moving in when it started to the current
	    // position and end value.
	    isOvershooting: function() {
	      var start = this._startValue;
	      var end = this._endValue;
	      return this._springConfig.tension > 0 &&
	       ((start < end && this.getCurrentValue() > end) ||
	       (start > end && this.getCurrentValue() < end));
	    },
	
	    // Spring.advance is the main solver method for the Spring. It takes
	    // the current time and delta since the last time step and performs
	    // an RK4 integration to get the new position and velocity state
	    // for the Spring based on the tension, friction, velocity, and
	    // displacement of the Spring.
	    advance: function(time, realDeltaTime) {
	      var isAtRest = this.isAtRest();
	
	      if (isAtRest && this._wasAtRest) {
	        return;
	      }
	
	      var adjustedDeltaTime = realDeltaTime;
	      if (realDeltaTime > Spring.MAX_DELTA_TIME_SEC) {
	        adjustedDeltaTime = Spring.MAX_DELTA_TIME_SEC;
	      }
	
	      this._timeAccumulator += adjustedDeltaTime;
	
	      var tension = this._springConfig.tension,
	          friction = this._springConfig.friction,
	
	          position = this._currentState.position,
	          velocity = this._currentState.velocity,
	          tempPosition = this._tempState.position,
	          tempVelocity = this._tempState.velocity,
	
	          aVelocity, aAcceleration,
	          bVelocity, bAcceleration,
	          cVelocity, cAcceleration,
	          dVelocity, dAcceleration,
	
	          dxdt, dvdt;
	
	      while(this._timeAccumulator >= Spring.SOLVER_TIMESTEP_SEC) {
	
	        this._timeAccumulator -= Spring.SOLVER_TIMESTEP_SEC;
	
	        if (this._timeAccumulator < Spring.SOLVER_TIMESTEP_SEC) {
	          this._previousState.position = position;
	          this._previousState.velocity = velocity;
	        }
	
	        aVelocity = velocity;
	        aAcceleration =
	          (tension * (this._endValue - tempPosition)) - friction * velocity;
	
	        tempPosition = position + aVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        tempVelocity =
	          velocity + aAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        bVelocity = tempVelocity;
	        bAcceleration =
	          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;
	
	        tempPosition = position + bVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        tempVelocity =
	          velocity + bAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        cVelocity = tempVelocity;
	        cAcceleration =
	          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;
	
	        tempPosition = position + cVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        tempVelocity =
	          velocity + cAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
	        dVelocity = tempVelocity;
	        dAcceleration =
	          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;
	
	        dxdt =
	          1.0/6.0 * (aVelocity + 2.0 * (bVelocity + cVelocity) + dVelocity);
	        dvdt = 1.0/6.0 * (
	          aAcceleration + 2.0 * (bAcceleration + cAcceleration) + dAcceleration
	        );
	
	        position += dxdt * Spring.SOLVER_TIMESTEP_SEC;
	        velocity += dvdt * Spring.SOLVER_TIMESTEP_SEC;
	      }
	
	      this._tempState.position = tempPosition;
	      this._tempState.velocity = tempVelocity;
	
	      this._currentState.position = position;
	      this._currentState.velocity = velocity;
	
	      if (this._timeAccumulator > 0) {
	        this._interpolate(this._timeAccumulator / Spring.SOLVER_TIMESTEP_SEC);
	      }
	
	      if (this.isAtRest() ||
	          this._overshootClampingEnabled && this.isOvershooting()) {
	
	        if (this._springConfig.tension > 0) {
	          this._startValue = this._endValue;
	          this._currentState.position = this._endValue;
	        } else {
	          this._endValue = this._currentState.position;
	          this._startValue = this._endValue;
	        }
	        this.setVelocity(0);
	        isAtRest = true;
	      }
	
	      var notifyActivate = false;
	      if (this._wasAtRest) {
	        this._wasAtRest = false;
	        notifyActivate = true;
	      }
	
	      var notifyAtRest = false;
	      if (isAtRest) {
	        this._wasAtRest = true;
	        notifyAtRest = true;
	      }
	
	      this.notifyPositionUpdated(notifyActivate, notifyAtRest);
	    },
	
	    notifyPositionUpdated: function(notifyActivate, notifyAtRest) {
	      for (var i = 0, len = this.listeners.length; i < len; i++) {
	        var listener = this.listeners[i];
	        if (notifyActivate && listener.onSpringActivate) {
	          listener.onSpringActivate(this);
	        }
	
	        if (listener.onSpringUpdate) {
	          listener.onSpringUpdate(this);
	        }
	
	        if (notifyAtRest && listener.onSpringAtRest) {
	          listener.onSpringAtRest(this);
	        }
	      }
	    },
	
	
	    // Check if the SpringSystem should advance. Springs are advanced
	    // a final frame after they reach equilibrium to ensure that the
	    // currentValue is exactly the requested endValue regardless of the
	    // displacement threshold.
	    systemShouldAdvance: function() {
	      return !this.isAtRest() || !this.wasAtRest();
	    },
	
	    wasAtRest: function() {
	      return this._wasAtRest;
	    },
	
	    // Check if the Spring is atRest meaning that it's currentValue and
	    // endValue are the same and that it has no velocity. The previously
	    // described thresholds for speed and displacement define the bounds
	    // of this equivalence check. If the Spring has 0 tension, then it will
	    // be considered at rest whenever its absolute velocity drops below the
	    // restSpeedThreshold.
	    isAtRest: function() {
	      return Math.abs(this._currentState.velocity) < this._restSpeedThreshold &&
	        (this.getDisplacementDistanceForState(this._currentState) <=
	          this._displacementFromRestThreshold ||
	        this._springConfig.tension === 0);
	    },
	
	    // Force the spring to be at rest at its current position. As
	    // described in the documentation for setCurrentValue, this method
	    // makes it easy to do synchronous non-animated updates to ui
	    // elements that are attached to springs via SpringListeners.
	    setAtRest: function() {
	      this._endValue = this._currentState.position;
	      this._tempState.position = this._currentState.position;
	      this._currentState.velocity = 0;
	      return this;
	    },
	
	    _interpolate: function(alpha) {
	      this._currentState.position = this._currentState.position *
	        alpha + this._previousState.position * (1 - alpha);
	      this._currentState.velocity = this._currentState.velocity *
	        alpha + this._previousState.velocity * (1 - alpha);
	    },
	
	    getListeners: function() {
	      return this.listeners;
	    },
	
	    addListener: function(newListener) {
	      this.listeners.push(newListener);
	      return this;
	    },
	
	    removeListener: function(listenerToRemove) {
	      removeFirst(this.listeners, listenerToRemove);
	      return this;
	    },
	
	    removeAllListeners: function() {
	      this.listeners = [];
	      return this;
	    },
	
	    currentValueIsApproximately: function(value) {
	      return Math.abs(this.getCurrentValue() - value) <=
	        this.getRestDisplacementThreshold();
	    }
	
	  });
	
	  // PhysicsState
	  // ------------
	  // **PhysicsState** consists of a position and velocity. A Spring uses
	  // this internally to keep track of its current and prior position and
	  // velocity values.
	  var PhysicsState = function PhysicsState() {};
	
	  util.extend(PhysicsState.prototype, {
	    position: 0,
	    velocity: 0
	  });
	
	  // SpringConfig
	  // ------------
	  // **SpringConfig** maintains a set of tension and friction constants
	  // for a Spring. You can use fromOrigamiTensionAndFriction to convert
	  // values from the [Origami](http://facebook.github.io/origami/)
	  // design tool directly to Rebound spring constants.
	  var SpringConfig = rebound.SpringConfig =
	    function SpringConfig(tension, friction) {
	      this.tension = tension;
	      this.friction = friction;
	    };
	
	  // Loopers
	  // -------
	  // **AnimationLooper** plays each frame of the SpringSystem on animation
	  // timing loop. This is the default type of looper for a new spring system
	  // as it is the most common when developing UI.
	  var AnimationLooper = rebound.AnimationLooper = function AnimationLooper() {
	    this.springSystem = null;
	    var _this = this;
	    var _run = function() {
	      _this.springSystem.loop(Date.now());
	    };
	
	    this.run = function() {
	      util.onFrame(_run);
	    };
	  };
	
	  // **SimulationLooper** resolves the SpringSystem to a resting state in a
	  // tight and blocking loop. This is useful for synchronously generating
	  // pre-recorded animations that can then be played on a timing loop later.
	  // Sometimes this lead to better performance to pre-record a single spring
	  // curve and use it to drive many animations; however, it can make dynamic
	  // response to user input a bit trickier to implement.
	  rebound.SimulationLooper = function SimulationLooper(timestep) {
	    this.springSystem = null;
	    var time = 0;
	    var running = false;
	    timestep=timestep || 16.667;
	
	    this.run = function() {
	      if (running) {
	        return;
	      }
	      running = true;
	      while(!this.springSystem.getIsIdle()) {
	        this.springSystem.loop(time+=timestep);
	      }
	      running = false;
	    };
	  };
	
	  // **SteppingSimulationLooper** resolves the SpringSystem one step at a
	  // time controlled by an outside loop. This is useful for testing and
	  // verifying the behavior of a SpringSystem or if you want to control your own
	  // timing loop for some reason e.g. slowing down or speeding up the
	  // simulation.
	  rebound.SteppingSimulationLooper = function(timestep) {
	    this.springSystem = null;
	    var time = 0;
	
	    // this.run is NOOP'd here to allow control from the outside using
	    // this.step.
	    this.run = function(){};
	
	    // Perform one step toward resolving the SpringSystem.
	    this.step = function(timestep) {
	      this.springSystem.loop(time+=timestep);
	    };
	  };
	
	  // Math for converting from
	  // [Origami](http://facebook.github.io/origami/) to
	  // [Rebound](http://facebook.github.io/rebound).
	  // You mostly don't need to worry about this, just use
	  // SpringConfig.fromOrigamiTensionAndFriction(v, v);
	  var OrigamiValueConverter = rebound.OrigamiValueConverter = {
	    tensionFromOrigamiValue: function(oValue) {
	      return (oValue - 30.0) * 3.62 + 194.0;
	    },
	
	    origamiValueFromTension: function(tension) {
	      return (tension - 194.0) / 3.62 + 30.0;
	    },
	
	    frictionFromOrigamiValue: function(oValue) {
	      return (oValue - 8.0) * 3.0 + 25.0;
	    },
	
	    origamiFromFriction: function(friction) {
	      return (friction - 25.0) / 3.0 + 8.0;
	    }
	  };
	
	  // BouncyConversion provides math for converting from Origami PopAnimation
	  // config values to regular Origami tension and friction values. If you are
	  // trying to replicate prototypes made with PopAnimation patches in Origami,
	  // then you should create your springs with
	  // SpringSystem.createSpringWithBouncinessAndSpeed, which uses this Math
	  // internally to create a spring to match the provided PopAnimation
	  // configuration from Origami.
	  var BouncyConversion = rebound.BouncyConversion = function(bounciness, speed){
	    this.bounciness = bounciness;
	    this.speed = speed;
	    var b = this.normalize(bounciness / 1.7, 0, 20.0);
	    b = this.projectNormal(b, 0.0, 0.8);
	    var s = this.normalize(speed / 1.7, 0, 20.0);
	    this.bouncyTension = this.projectNormal(s, 0.5, 200)
	    this.bouncyFriction = this.quadraticOutInterpolation(
	      b,
	      this.b3Nobounce(this.bouncyTension),
	      0.01);
	  }
	
	  util.extend(BouncyConversion.prototype, {
	
	    normalize: function(value, startValue, endValue) {
	      return (value - startValue) / (endValue - startValue);
	    },
	
	    projectNormal: function(n, start, end) {
	      return start + (n * (end - start));
	    },
	
	    linearInterpolation: function(t, start, end) {
	      return t * end + (1.0 - t) * start;
	    },
	
	    quadraticOutInterpolation: function(t, start, end) {
	      return this.linearInterpolation(2*t - t*t, start, end);
	    },
	
	    b3Friction1: function(x) {
	      return (0.0007 * Math.pow(x, 3)) -
	        (0.031 * Math.pow(x, 2)) + 0.64 * x + 1.28;
	    },
	
	    b3Friction2: function(x) {
	      return (0.000044 * Math.pow(x, 3)) -
	        (0.006 * Math.pow(x, 2)) + 0.36 * x + 2.;
	    },
	
	    b3Friction3: function(x) {
	      return (0.00000045 * Math.pow(x, 3)) -
	        (0.000332 * Math.pow(x, 2)) + 0.1078 * x + 5.84;
	    },
	
	    b3Nobounce: function(tension) {
	      var friction = 0;
	      if (tension <= 18) {
	        friction = this.b3Friction1(tension);
	      } else if (tension > 18 && tension <= 44) {
	        friction = this.b3Friction2(tension);
	      } else {
	        friction = this.b3Friction3(tension);
	      }
	      return friction;
	    }
	  });
	
	  util.extend(SpringConfig, {
	    // Convert an origami Spring tension and friction to Rebound spring
	    // constants. If you are prototyping a design with Origami, this
	    // makes it easy to make your springs behave exactly the same in
	    // Rebound.
	    fromOrigamiTensionAndFriction: function(tension, friction) {
	      return new SpringConfig(
	        OrigamiValueConverter.tensionFromOrigamiValue(tension),
	        OrigamiValueConverter.frictionFromOrigamiValue(friction));
	    },
	
	    // Convert an origami PopAnimation Spring bounciness and speed to Rebound
	    // spring constants. If you are using PopAnimation patches in Origami, this
	    // utility will provide springs that match your prototype.
	    fromBouncinessAndSpeed: function(bounciness, speed) {
	      var bouncyConversion = new rebound.BouncyConversion(bounciness, speed);
	      return this.fromOrigamiTensionAndFriction(
	        bouncyConversion.bouncyTension,
	        bouncyConversion.bouncyFriction);
	    },
	
	    // Create a SpringConfig with no tension or a coasting spring with some
	    // amount of Friction so that it does not coast infininitely.
	    coastingConfigWithOrigamiFriction: function(friction) {
	      return new SpringConfig(
	        0,
	        OrigamiValueConverter.frictionFromOrigamiValue(friction)
	      );
	    }
	  });
	
	  SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG =
	    SpringConfig.fromOrigamiTensionAndFriction(40, 7);
	
	  util.extend(SpringConfig.prototype, {friction: 0, tension: 0});
	
	  // Here are a couple of function to convert colors between hex codes and RGB
	  // component values. These are handy when performing color
	  // tweening animations.
	  var colorCache = {};
	  util.hexToRGB = function(color) {
	    if (colorCache[color]) {
	      return colorCache[color];
	    }
	    color = color.replace('#', '');
	    if (color.length === 3) {
	      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
	    }
	    var parts = color.match(/.{2}/g);
	
	    var ret = {
	      r: parseInt(parts[0], 16),
	      g: parseInt(parts[1], 16),
	      b: parseInt(parts[2], 16)
	    };
	
	    colorCache[color] = ret;
	    return ret;
	  };
	
	  util.rgbToHex = function(r, g, b) {
	    r = r.toString(16);
	    g = g.toString(16);
	    b = b.toString(16);
	    r = r.length < 2 ? '0' + r : r;
	    g = g.length < 2 ? '0' + g : g;
	    b = b.length < 2 ? '0' + b : b;
	    return '#' + r + g + b;
	  };
	
	  var MathUtil = rebound.MathUtil = {
	    // This helper function does a linear interpolation of a value from
	    // one range to another. This can be very useful for converting the
	    // motion of a Spring to a range of UI property values. For example a
	    // spring moving from position 0 to 1 could be interpolated to move a
	    // view from pixel 300 to 350 and scale it from 0.5 to 1. The current
	    // position of the `Spring` just needs to be run through this method
	    // taking its input range in the _from_ parameters with the property
	    // animation range in the _to_ parameters.
	    mapValueInRange: function(value, fromLow, fromHigh, toLow, toHigh) {
	      var fromRangeSize = fromHigh - fromLow;
	      var toRangeSize = toHigh - toLow;
	      var valueScale = (value - fromLow) / fromRangeSize;
	      return toLow + (valueScale * toRangeSize);
	    },
	
	    // Interpolate two hex colors in a 0 - 1 range or optionally provide a
	    // custom range with fromLow,fromHight. The output will be in hex by default
	    // unless asRGB is true in which case it will be returned as an rgb string.
	    interpolateColor:
	      function(val, startColor, endColor, fromLow, fromHigh, asRGB) {
	      fromLow = fromLow === undefined ? 0 : fromLow;
	      fromHigh = fromHigh === undefined ? 1 : fromHigh;
	      startColor = util.hexToRGB(startColor);
	      endColor = util.hexToRGB(endColor);
	      var r = Math.floor(
	        util.mapValueInRange(val, fromLow, fromHigh, startColor.r, endColor.r)
	      );
	      var g = Math.floor(
	        util.mapValueInRange(val, fromLow, fromHigh, startColor.g, endColor.g)
	      );
	      var b = Math.floor(
	        util.mapValueInRange(val, fromLow, fromHigh, startColor.b, endColor.b)
	      );
	      if (asRGB) {
	        return 'rgb(' + r + ',' + g + ',' + b + ')';
	      } else {
	        return util.rgbToHex(r, g, b);
	      }
	    },
	
	    degreesToRadians: function(deg) {
	      return (deg * Math.PI) / 180;
	    },
	
	    radiansToDegrees: function(rad) {
	      return (rad * 180) / Math.PI;
	    }
	
	  }
	
	  util.extend(util, MathUtil);
	
	
	  // Utilities
	  // ---------
	  // Here are a few useful JavaScript utilities.
	
	  // Lop off the first occurence of the reference in the Array.
	  function removeFirst(array, item) {
	    var idx = array.indexOf(item);
	    idx != -1 && array.splice(idx, 1);
	  }
	
	  var _onFrame;
	  if (typeof window !== 'undefined') {
	    _onFrame = window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.msRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	      };
	  }
	  if (!_onFrame && typeof process !== 'undefined' && process.title === 'node') {
	    _onFrame = setImmediate;
	  }
	
	  // Cross browser/node timer functions.
	  util.onFrame = function onFrame(func) {
	    return _onFrame(func);
	  };
	
	  // Export the public api using exports for common js or the window for
	  // normal browser inclusion.
	  if (true) {
	    util.extend(exports, rebound);
	  } else if (typeof window != 'undefined') {
	    window.rebound = rebound;
	  }
	})();
	
	
	// Legal Stuff
	// -----------
	/**
	 *  Copyright (c) 2013, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176), __webpack_require__(177).setImmediate))

/***/ },

/***/ 176:
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(176).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(177).setImmediate, __webpack_require__(177).clearImmediate))

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Scroll = (function (_Component) {
	  function Scroll(props) {
	    var _this = this;
	
	    _classCallCheck(this, Scroll);
	
	    _get(Object.getPrototypeOf(Scroll.prototype), 'constructor', this).call(this, props);
	
	    this.state = { scrollTop: 0,
	      scrollLeft: 0 };
	
	    window.addEventListener('scroll', function (event) {
	      _this.setState({ scrollTop: document.body.scrollTop,
	        scrollLeft: document.body.scrollLeft });
	    });
	  }
	
	  _inherits(Scroll, _Component);
	
	  _createClass(Scroll, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children(this.state.scrollTop, this.state.scrollLeft);
	    }
	  }]);
	
	  return Scroll;
	})(_react.Component);
	
	exports['default'] = Scroll;
	module.exports = exports['default'];

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var translate3d = function translate3d(x, y, z) {
	  return 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
	};
	
	var styles = {
	  controlTitle: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle' },
	  controlRange: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle' },
	  controlValue: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle', color: 'grey', fontSize: '10px', width: '20px' }
	};
	
	var RangeControl = (function (_Component) {
	  function RangeControl() {
	    _classCallCheck(this, RangeControl);
	
	    _get(Object.getPrototypeOf(RangeControl.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(RangeControl, _Component);
	
	  _createClass(RangeControl, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var min = _props.min;
	      var max = _props.max;
	      var value = _props.value;
	      var onChange = _props.onChange;
	      var name = _props.name;
	
	      return _react2['default'].createElement(
	        'div',
	        this.props,
	        name && _react2['default'].createElement(
	          'div',
	          { style: styles.controlTitle },
	          name
	        ),
	        _react2['default'].createElement('input', { type: 'range', min: min, max: max, style: styles.controlRange,
	          value: value,
	          onChange: function (event) {
	            return onChange(event);
	          } }),
	        _react2['default'].createElement(
	          'div',
	          { style: styles.controlValue },
	          value
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: { value: 0, min: 0, max: 100, name: null },
	    enumerable: true
	  }]);
	
	  return RangeControl;
	})(_react.Component);
	
	exports['default'] = RangeControl;
	;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2Nyb2xsLXNwcmluZy1hbmltYXRpb24vc3ByaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYm91bmQvcmVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9yYW5nZS1jb250cm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQStCLENBQU87Ozs7b0NBQ2pCLEdBQVc7O21DQUNiLEdBQVU7Ozs7eUNBQ0osR0FBaUI7Ozs7QUFFMUMsS0FBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOzJCQUFvQixDQUFDLFlBQU8sQ0FBQyxZQUFPLENBQUM7RUFBSyxDQUFDOztBQUVyRSxLQUFNLE1BQU0sR0FBRztBQUNiLFFBQUssRUFBRSxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUM7QUFDOUIsb0JBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ2hHLGdCQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0Esd0RBQXVELFNBQVM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLG1EQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUEsd0NBQXVDLHdCQUF3Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLEVBQUU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQy9uQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QyxJQUFJLFVBQUosSUFBSTs7QUFFbEMsY0FBTzs7U0FBUyxJQUFJLENBQUMsS0FBSztTQUN2QixJQUFJLElBQUk7O2FBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFhO1dBQUUsSUFBSTtVQUFPO1NBQ3RELDRDQUFPLElBQUksRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEdBQUksRUFBQyxHQUFHLEVBQUUsR0FBSSxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBYTtBQUNqRSxnQkFBSyxFQUFFLEtBQU07QUFDYixtQkFBUSxFQUFFLGVBQUs7b0JBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLEdBQUU7U0FDeEM7O2FBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFhO1dBQUUsS0FBSztVQUFPO1FBQzFDO01BQ1A7OztZQVpxQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Ozs7VUFEN0MsWUFBWTtXQVZsQixTQUFTOztzQkFVSCxZQUFZO0FBY2hDLEVBQUMiLCJmaWxlIjoic2Nyb2xsLXNwcmluZy1hbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3ByaW5nfSBmcm9tICcuL3NwcmluZ3MnO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgUmFuZ2VDb250cm9sIGZyb20gJy4vcmFuZ2UtY29udHJvbCc7XG5cbmNvbnN0IHRyYW5zbGF0ZTNkID0gKHgseSx6KSA9PiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiB7bWFyZ2luQm90dG9tOiAnMTAwcHgnfSxcbiAgcGFyYWxsYXhDb250YWluZXI6IHsgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICBwYXJhbGxheFRpdGxlOiB7IHpJbmRleDogMTAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MHB4JywgbGVmdDogJzUwcHgnLCBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJzAgMTBweCA0MHB4IGJsYWNrJyxmb250U2l6ZTogJzEwMHB4JywgZm9udFdlaWdodDogMTAwMCB9LFxuICBwYXJhbGxheEltYWdlOiB7IHpJbmRleDogMSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfSxcbiAgY29udHJvbDoge2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwYWRkaW5nOiAnMCAyMHB4J31cbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZyaWN0aW9uOiAxNSwgdGVuc2lvbjogMTgwIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PlNjcm9sbCBhbmQgU3ByaW5nIEFuaW1hdGlvbiBEZW1vPC9oMT5cblxuICAgICAgPFJhbmdlQ29udHJvbCBuYW1lPVwidGVuc2lvblwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjFcIiBtYXg9XCIyMDBcIiBzdHlsZT17c3R5bGVzLmNvbnRyb2x9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbnNpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdGVuc2lvbjogfn5ldmVudC50YXJnZXQudmFsdWUgfSl9Lz5cblxuICAgICAgPFJhbmdlQ29udHJvbCBuYW1lPVwiZnJpY3Rpb25cIiBtaW49XCIxXCIgbWF4PVwiMzBcIiBzdHlsZT17c3R5bGVzLmNvbnRyb2x9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZyaWN0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyaWN0aW9uOiB+fmV2ZW50LnRhcmdldC52YWx1ZSB9KX0vPlxuXG4gICAgICA8U2Nyb2xsPnsgc2Nyb2xsVG9wID0+XG4gICAgICAgIDxTcHJpbmcgdG89e3Njcm9sbFRvcH0gZnJpY3Rpb249e3RoaXMuc3RhdGUuZnJpY3Rpb259IHRlbnNpb249e3RoaXMuc3RhdGUudGVuc2lvbn0+eyBvZmZzZXRZID0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhcmFsbGF4Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLnBhcmFsbGF4VGl0bGV9PlxuICAgICAgICAgICAgICBNdXNpYyBpcyDinaRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImJnLmpwZ1wiIHdpZHRoPVwiMTkyMHB4XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5zdHlsZXMucGFyYWxsYXhJbWFnZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnODAwcHgnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtb2Zmc2V0WS8yLTUwLDApIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH08L1NwcmluZz5cbiAgICAgIH08L1Njcm9sbD5cblxuICAgICAgPGRpdj48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvdWJleWQvMTkxNTI4NDg2NjkvaW4vcG9vbC04MzgyMzg1OUBOMDAvXCI+XG4gICAgICAgIGltYWdlIGJ5IFViZXlkPC9hPjwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxufTtcblxuUmVhY3QucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9hcHAuanNcbiAqKi8iLCIvLyBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RocmVlcG9pbnRvbmUvcmVhY3Qtc3ByaW5ncy9tYXN0ZXIvc3JjLmpzXG4vLyBiZWNhdXNlIHJlYWN0LW5hdGl2ZSBzdXBwb3J0IGJyZWFrcyB0aGUgYnVpbGQgcHJvY2Vzc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gdHJ5eyBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0LW5hdGl2ZScpOyB9XG4vLyBjYXRjaChlKXsgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpOyB9XG4vLyB0aGUgYWJvdmUgYml0IHNob3VsZCBnZXQgYmV0dGVyIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIyMFxuXG4vLyBzcHJpbmdzLCBhbGwgdGhhdFxuaW1wb3J0IHJlYm91bmQgZnJvbSAncmVib3VuZCc7XG5cbmxldCBub29wID0gKCkgPT4ge307IC8vIGRlZmF1bHQgb25TcHJpbmdVcGRhdGVcblxuZXhwb3J0IGNvbnN0IFNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0RGVmYXVsdFByb3BzKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHdlIHVzZSBhIGNvbW1vbiAnZ2xvYmFsJyBzcHJpbmdTeXN0ZW0gZm9yIHBlcmYsIGJ1dCB5b3UgY2FuIHBhc3MgaW4geW91ciBvd25cbiAgICAgIHNwcmluZ1N5c3RlbTogbmV3IHJlYm91bmQuU3ByaW5nU3lzdGVtKCksXG5cbiAgICAgIC8vIGZyb20gYW5kIHRvIGFyZSBhbmFsb2dvdXMgdG8gc2V0Q3VycmVudFZhbHVlKCkgYW5kIHNldEVuZFZhbHVlKClcbiAgICAgIGZyb206IDAsXG4gICAgICB0bzogMCxcblxuICAgICAgLy8gbW9yZSByZWJvdW5kIG9wdGlvbnNcbiAgICAgIHRlbnNpb246IDUwLFxuICAgICAgZnJpY3Rpb246IDMsXG4gICAgICBvdmVyU2hvb3RDbGFtcGluZzogZmFsc2UsXG4gICAgICBhdFJlc3Q6IGZhbHNlLFxuICAgICAgb25TcHJpbmdVcGRhdGU6IG5vb3AsXG4gICAgICBvblNwcmluZzogbm9vcCxcbiAgICAgIGNoaWxkcmVuOiAoKSA9PiBudWxsXG5cbiAgICAgIC8vIHRvZG8gLSB2ZWxvY2l0eT9cbiAgICB9O1xuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZyb206IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZnJpY3Rpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgdGVuc2lvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICB0bzogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBhdFJlc3Q6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJTaG9vdENsYW1waW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TcHJpbmdVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3ByaW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHN0YXRpY3M6IHtcbiAgICAvLyBoaWdoIHBlcmYgXCJzZXR0ZXJzXCIsXG4gICAgZnJpY3Rpb24oc3ByaW5nLCBwcm9wcyl7XG4gICAgICBzcHJpbmcuZ2V0U3ByaW5nQ29uZmlnKCkuZnJpY3Rpb24gPVxuICAgICAgICByZWJvdW5kLk9yaWdhbWlWYWx1ZUNvbnZlcnRlci5mcmljdGlvbkZyb21PcmlnYW1pVmFsdWUocHJvcHMuZnJpY3Rpb24pO1xuICAgIH0sXG4gICAgdGVuc2lvbihzcHJpbmcsIHByb3BzKXtcbiAgICAgIHNwcmluZy5nZXRTcHJpbmdDb25maWcoKS50ZW5zaW9uID1cbiAgICAgICAgcmVib3VuZC5PcmlnYW1pVmFsdWVDb252ZXJ0ZXIuZnJpY3Rpb25Gcm9tT3JpZ2FtaVZhbHVlKHByb3BzLnRlbnNpb24pO1xuICAgIH0sXG4gICAgZnJvbShzcHJpbmcsIHByb3BzKXtcbiAgICAgIHNwcmluZy5zZXRDdXJyZW50VmFsdWUocHJvcHMuZnJvbSwgdHJ1ZSkuc2V0RW5kVmFsdWUoc3ByaW5nLmdldEVuZFZhbHVlKCkpO1xuICAgIH0sXG4gICAgb3ZlclNob290Q2xhbXBpbmcoc3ByaW5nLCBwcm9wcyl7XG4gICAgICBzcHJpbmcuc2V0T3ZlcnNob290Q2xhbXBpbmdFbmFibGVkKHByb3BzLm92ZXJTaG9vdENsYW1waW5nKTtcbiAgICB9LFxuICAgIHRvKHNwcmluZywgcHJvcHMpe1xuICAgICAgaWYocHJvcHMuYXRSZXN0KXtcbiAgICAgICAgc3ByaW5nLnNldEN1cnJlbnRWYWx1ZShwcm9wcy50bykuc2V0QXRSZXN0KCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBzcHJpbmcuc2V0RW5kVmFsdWUocHJvcHMudG8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhY2NlcHQocHJvcHMsIGluaXRpYWwpe1xuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWYoU3ByaW5nW2tdICYmIChpbml0aWFsIHx8IChwcm9wc1trXSAhPT0gdGhpcy5wcm9wc1trXSkpKXtcbiAgICAgICAgU3ByaW5nW2tdKHRoaXMuc3ByaW5nLCBwcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgLy8gY29tcG9uZW50cyB3aXRoICdyZW5kZXIgY2FsbGJhY2tzJyBjYW4vc2hvdWxkIHJlbmRlciAndGhyb3VnaCcuXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy5mcm9tXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBzcHJpbmcgb24gbW91bnRpbmcuXG4gICAgdGhpcy5zcHJpbmcgPSB0aGlzLnByb3BzLnNwcmluZ1N5c3RlbS5jcmVhdGVTcHJpbmcodGhpcy5wcm9wcy50ZW5zaW9uLCB0aGlzLnByb3BzLmZyaWN0aW9uKS5hZGRMaXN0ZW5lcih7XG4gICAgICBvblNwcmluZ1VwZGF0ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMuc3ByaW5nLmdldEN1cnJlbnRWYWx1ZSgpIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uU3ByaW5nVXBkYXRlKHRoaXMuc3ByaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uU3ByaW5nKHRoaXMuc3ByaW5nKTtcbiAgICB0aGlzLmFjY2VwdCh0aGlzLnByb3BzLCB0cnVlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuYWNjZXB0KG5leHRQcm9wcywgZmFsc2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIC4uLmFuZCBkZXN0cm95IG9uIG9ubW91bnRpbmdcbiAgICB0aGlzLnNwcmluZy5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMuc3ByaW5nO1xuICAgIHRoaXMucHJvcHMub25TcHJpbmcodW5kZWZpbmVkKTtcbiAgfSxcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBTcHJpbmdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXREZWZhdWx0UHJvcHMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgb25TcHJpbmdVcGRhdGU6IG5vb3AsXG4gICAgICBvblNwcmluZzogbm9vcCxcbiAgICAgIGNoaWxkcmVuOiAoKSA9PiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNwcmluZ1VwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TcHJpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIGxpa2UgYWJvdmVcbiAgfSxcbiAgb25TcHJpbmdVcGRhdGUoa2V5LCBzcHJpbmcpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2tleV06IHNwcmluZy5nZXRDdXJyZW50VmFsdWUoKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25TcHJpbmdVcGRhdGUoa2V5LCBzcHJpbmcpO1xuICB9LFxuXG4gIHRvKHBvcywga2V5cywgaW5kZXgsIHZhbHVlKXtcbiAgICBpZihpbmRleCA9PT0gLTEpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odmFsdWUpO1xuICAgIH1cbiAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgcmV0dXJuIDxTcHJpbmcgey4uLnRoaXMucHJvcHN9IGtleT17a2V5fSB0bz17cG9zW2tleV19IG9uU3ByaW5nPXtzcHJpbmcgPT4gdGhpcy5wcm9wcy5vblNwcmluZyhrZXksIHNwcmluZyl9IG9uU3ByaW5nVXBkYXRlPXtzcHJpbmcgPT4gdGhpcy5vblNwcmluZ1VwZGF0ZShrZXksIHNwcmluZyl9PlxuICAgICAge3ZhbCA9PiB0aGlzLnRvKHBvcywga2V5cywgaW5kZXggLSAxLCAodmFsdWVba2V5XSA9IHZhbCwgdmFsdWUpKX1cbiAgICA8L1NwcmluZz47XG4gIH0sXG5cbiAgLy8gdG9kbyAtIHNvcnQga2V5cyBhbHBoYWJldGljYWxseT9cbiAgcmVuZGVyKCkge1xuICAgIC8vIHdoYXQgd2UgZG8gaGVyZSwgaXMgYnJlYWsgYHRvYCBpbnRvIGtleSB2YWx1ZSBwYWlycywgYW5kIHRoZW4gcmV0dXJuIGEgbmVzdCBvZiA8U3ByaW5nPnNcbiAgICAvLyBSZWFjdCB0YWtlcyBjYXJlIG9mIHRoZSBib3JpbmcgYml0cyAoY2FjaGluZywgc3RhdGUsIGV0YylcbiAgICBsZXQge3RvfSA9IHRoaXMucHJvcHMsIGtleXMgPSBPYmplY3Qua2V5cyh0byk7XG4gICAgcmV0dXJuIHRoaXMudG8odG8sIGtleXMsIGtleXMubGVuZ3RoIC0gMSwge30pO1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc2Nyb2xsLXNwcmluZy1hbmltYXRpb24vc3ByaW5ncy5qc1xuICoqLyIsIi8vIFJlYm91bmRcbi8vID09PT09PT1cbi8vICoqUmVib3VuZCoqIGlzIGEgc2ltcGxlIGxpYnJhcnkgdGhhdCBtb2RlbHMgU3ByaW5nIGR5bmFtaWNzIGZvciB0aGVcbi8vIHB1cnBvc2Ugb2YgZHJpdmluZyBwaHlzaWNhbCBhbmltYXRpb25zLlxuLy9cbi8vIE9yaWdpblxuLy8gLS0tLS0tXG4vLyBbUmVib3VuZF0oaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWJvdW5kKSB3YXMgb3JpZ2luYWxseSB3cml0dGVuXG4vLyBpbiBKYXZhIHRvIHByb3ZpZGUgYSBsaWdodHdlaWdodCBwaHlzaWNzIHN5c3RlbSBmb3Jcbi8vIFtIb21lXShodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZhY2Vib29rLmhvbWUpIGFuZFxuLy8gW0NoYXQgSGVhZHNdKGh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZmFjZWJvb2sub3JjYSlcbi8vIG9uIEFuZHJvaWQuIEl0J3Mgbm93IGJlZW4gYWRvcHRlZCBieSBzZXZlcmFsIG90aGVyIEFuZHJvaWRcbi8vIGFwcGxpY2F0aW9ucy4gVGhpcyBKYXZhU2NyaXB0IHBvcnQgd2FzIHdyaXR0ZW4gdG8gcHJvdmlkZSBhIHF1aWNrXG4vLyB3YXkgdG8gZGVtb25zdHJhdGUgUmVib3VuZCBhbmltYXRpb25zIG9uIHRoZSB3ZWIgZm9yIGFcbi8vIFtjb25mZXJlbmNlIHRhbGtdKGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9czVrTm0tRGd5alkpLiBTaW5jZSB0aGVuXG4vLyB0aGUgSmF2YVNjcmlwdCB2ZXJzaW9uIGhhcyBiZWVuIHVzZWQgdG8gYnVpbGQgc29tZSByZWFsbHkgbmljZSBpbnRlcmZhY2VzLlxuLy8gQ2hlY2sgb3V0IFticmFuZG9ud2Fsa2luLmNvbV0oaHR0cDovL2JyYW5kb253YWxraW4uY29tKSBmb3IgYW5cbi8vIGV4YW1wbGUuXG4vL1xuLy8gT3ZlcnZpZXdcbi8vIC0tLS0tLS0tXG4vLyBUaGUgTGlicmFyeSBwcm92aWRlcyBhIFNwcmluZ1N5c3RlbSBmb3IgbWFpbnRhaW5pbmcgYSBzZXQgb2YgU3ByaW5nXG4vLyBvYmplY3RzIGFuZCBpdGVyYXRpbmcgdGhvc2UgU3ByaW5ncyB0aHJvdWdoIGEgcGh5c2ljcyBzb2x2ZXIgbG9vcFxuLy8gdW50aWwgZXF1aWxpYnJpdW0gaXMgYWNoaWV2ZWQuIFRoZSBTcHJpbmcgY2xhc3MgaXMgdGhlIGJhc2ljXG4vLyBhbmltYXRpb24gZHJpdmVyIHByb3ZpZGVkIGJ5IFJlYm91bmQuIEJ5IGF0dGFjaGluZyBhIGxpc3RlbmVyIHRvXG4vLyBhIFNwcmluZywgeW91IGNhbiBvYnNlcnZlIGl0cyBtb3Rpb24uIFRoZSBvYnNlcnZlciBmdW5jdGlvbiBpc1xuLy8gbm90aWZpZWQgb2YgcG9zaXRpb24gY2hhbmdlcyBvbiB0aGUgc3ByaW5nIGFzIGl0IHNvbHZlcyBmb3Jcbi8vIGVxdWlsaWJyaXVtLiBUaGVzZSBwb3NpdGlvbiB1cGRhdGVzIGNhbiBiZSBtYXBwZWQgdG8gYW4gYW5pbWF0aW9uXG4vLyByYW5nZSB0byBkcml2ZSBhbmltYXRlZCBwcm9wZXJ0eSB1cGRhdGVzIG9uIHlvdXIgdXNlciBpbnRlcmZhY2Vcbi8vIGVsZW1lbnRzICh0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlLCBldGMpLlxuLy9cbi8vIEV4YW1wbGVcbi8vIC0tLS0tLS1cbi8vIEhlcmUncyBhIHNpbXBsZSBleGFtcGxlLiBQcmVzc2luZyBhbmQgcmVsZWFzaW5nIG9uIHRoZSBsb2dvIGJlbG93XG4vLyB3aWxsIGNhdXNlIGl0IHRvIHNjYWxlIHVwIGFuZCBkb3duIHdpdGggYSBzcHJpbmd5IGFuaW1hdGlvbi5cbi8vXG4vLyA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi1ib3R0b206NTBweDsgbWFyZ2luLXRvcDo1MHB4XCI+XG4vLyAgIDxpbWdcbi8vICAgICBzcmM9XCJodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYm91bmQvaW1hZ2VzL3JlYm91bmQucG5nXCJcbi8vICAgICBpZD1cImxvZ29cIlxuLy8gICAvPlxuLy8gPC9kaXY+XG4vLyA8c2NyaXB0IHNyYz1cIi4uL3JlYm91bmQubWluLmpzXCI+PC9zY3JpcHQ+XG4vLyA8c2NyaXB0PlxuLy9cbi8vIGZ1bmN0aW9uIHNjYWxlKGVsLCB2YWwpIHtcbi8vICAgZWwuc3R5bGUubW96VHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUubXNUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUzZCgnICsgdmFsICsgJywgJyArIHZhbCArICcsIDEpJztcbi8vIH1cbi8vIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4vL1xuLy8gdmFyIHNwcmluZ1N5c3RlbSA9IG5ldyByZWJvdW5kLlNwcmluZ1N5c3RlbSgpO1xuLy8gdmFyIHNwcmluZyA9IHNwcmluZ1N5c3RlbS5jcmVhdGVTcHJpbmcoNTAsIDMpO1xuLy8gc3ByaW5nLmFkZExpc3RlbmVyKHtcbi8vICAgb25TcHJpbmdVcGRhdGU6IGZ1bmN0aW9uKHNwcmluZykge1xuLy8gICAgIHZhciB2YWwgPSBzcHJpbmcuZ2V0Q3VycmVudFZhbHVlKCk7XG4vLyAgICAgdmFsID0gcmVib3VuZC5NYXRoVXRpbC5tYXBWYWx1ZUluUmFuZ2UodmFsLCAwLCAxLCAxLCAwLjUpO1xuLy8gICAgIHNjYWxlKGVsLCB2YWwpO1xuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDEpO1xuLy8gfSk7XG4vL1xuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDApO1xuLy8gfSk7XG4vL1xuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMCk7XG4vLyB9KTtcbi8vXG4vLyA8L3NjcmlwdD5cbi8vXG4vLyBIZXJlJ3MgaG93IGl0IHdvcmtzLlxuLy9cbi8vIGBgYFxuLy8gLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBsb2dvIGVsZW1lbnQuXG4vLyB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xuLy9cbi8vIC8vIGNyZWF0ZSBhIFNwcmluZ1N5c3RlbSBhbmQgYSBTcHJpbmcgd2l0aCBhIGJvdW5jeSBjb25maWcuXG4vLyB2YXIgc3ByaW5nU3lzdGVtID0gbmV3IHJlYm91bmQuU3ByaW5nU3lzdGVtKCk7XG4vLyB2YXIgc3ByaW5nID0gc3ByaW5nU3lzdGVtLmNyZWF0ZVNwcmluZyg1MCwgMyk7XG4vL1xuLy8gLy8gQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHNwcmluZy4gRXZlcnkgdGltZSB0aGUgcGh5c2ljc1xuLy8gLy8gc29sdmVyIHVwZGF0ZXMgdGhlIFNwcmluZydzIHZhbHVlIG9uU3ByaW5nVXBkYXRlIHdpbGxcbi8vIC8vIGJlIGNhbGxlZC5cbi8vIHNwcmluZy5hZGRMaXN0ZW5lcih7XG4vLyAgIG9uU3ByaW5nVXBkYXRlOiBmdW5jdGlvbihzcHJpbmcpIHtcbi8vICAgICB2YXIgdmFsID0gc3ByaW5nLmdldEN1cnJlbnRWYWx1ZSgpO1xuLy8gICAgIHZhbCA9IHJlYm91bmQuTWF0aFV0aWxcbi8vICAgICAgICAgICAgICAgICAgLm1hcFZhbHVlSW5SYW5nZSh2YWwsIDAsIDEsIDEsIDAuNSk7XG4vLyAgICAgc2NhbGUoZWwsIHZhbCk7XG4vLyAgIH1cbi8vIH0pO1xuLy9cbi8vIC8vIExpc3RlbiBmb3IgbW91c2UgZG93bi91cC9vdXQgYW5kIHRvZ2dsZSB0aGVcbi8vIC8vc3ByaW5ncyBlbmRWYWx1ZSBmcm9tIDAgdG8gMS5cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMSk7XG4vLyB9KTtcbi8vXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMCk7XG4vLyB9KTtcbi8vXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgwKTtcbi8vIH0pO1xuLy9cbi8vIC8vIEhlbHBlciBmb3Igc2NhbGluZyBhbiBlbGVtZW50IHdpdGggY3NzIHRyYW5zZm9ybXMuXG4vLyBmdW5jdGlvbiBzY2FsZShlbCwgdmFsKSB7XG4vLyAgIGVsLnN0eWxlLm1velRyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLm1zVHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoJyArXG4vLyAgICAgdmFsICsgJywgJyArIHZhbCArICcsIDEpJztcbi8vIH1cbi8vIGBgYFxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByZWJvdW5kID0ge307XG4gIHZhciB1dGlsID0gcmVib3VuZC51dGlsID0ge307XG4gIHZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLy8gQmluZCBhIGZ1bmN0aW9uIHRvIGEgY29udGV4dCBvYmplY3QuXG4gIHV0aWwuYmluZCA9IGZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgY29uY2F0LmNhbGwoYXJncywgc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBBZGQgYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBzb3VyY2UgdG8gdGhlIHRhcmdldC5cbiAgdXRpbC5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gU3ByaW5nU3lzdGVtXG4gIC8vIC0tLS0tLS0tLS0tLVxuICAvLyAqKlNwcmluZ1N5c3RlbSoqIGlzIGEgc2V0IG9mIFNwcmluZ3MgdGhhdCBhbGwgcnVuIG9uIHRoZSBzYW1lIHBoeXNpY3NcbiAgLy8gdGltaW5nIGxvb3AuIFRvIGdldCBzdGFydGVkIHdpdGggYSBSZWJvdW5kIGFuaW1hdGlvbiB5b3UgZmlyc3RcbiAgLy8gY3JlYXRlIGEgbmV3IFNwcmluZ1N5c3RlbSBhbmQgdGhlbiBhZGQgc3ByaW5ncyB0byBpdC5cbiAgdmFyIFNwcmluZ1N5c3RlbSA9IHJlYm91bmQuU3ByaW5nU3lzdGVtID0gZnVuY3Rpb24gU3ByaW5nU3lzdGVtKGxvb3Blcikge1xuICAgIHRoaXMuX3NwcmluZ1JlZ2lzdHJ5ID0ge307XG4gICAgdGhpcy5fYWN0aXZlU3ByaW5ncyA9IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5faWRsZVNwcmluZ0luZGljZXMgPSBbXTtcbiAgICB0aGlzLmxvb3BlciA9IGxvb3BlciB8fCBuZXcgQW5pbWF0aW9uTG9vcGVyKCk7XG4gICAgdGhpcy5sb29wZXIuc3ByaW5nU3lzdGVtID0gdGhpcztcbiAgfTtcblxuICB1dGlsLmV4dGVuZChTcHJpbmdTeXN0ZW0ucHJvdG90eXBlLCB7XG5cbiAgICBfc3ByaW5nUmVnaXN0cnk6IG51bGwsXG5cbiAgICBfaXNJZGxlOiB0cnVlLFxuXG4gICAgX2xhc3RUaW1lTWlsbGlzOiAtMSxcblxuICAgIF9hY3RpdmVTcHJpbmdzOiBudWxsLFxuXG4gICAgbGlzdGVuZXJzOiBudWxsLFxuXG4gICAgX2lkbGVTcHJpbmdJbmRpY2VzOiBudWxsLFxuXG4gICAgLy8gQSBTcHJpbmdTeXN0ZW0gaXMgaXRlcmF0ZWQgYnkgYSBsb29wZXIuIFRoZSBsb29wZXIgaXMgcmVzcG9uc2libGVcbiAgICAvLyBmb3IgZXhlY3V0aW5nIGVhY2ggZnJhbWUgYXMgdGhlIFNwcmluZ1N5c3RlbSBpcyByZXNvbHZlZCB0byBpZGxlLlxuICAgIC8vIFRoZXJlIGFyZSB0aHJlZSB0eXBlcyBvZiBMb29wZXJzIGRlc2NyaWJlZCBiZWxvdyBBbmltYXRpb25Mb29wZXIsXG4gICAgLy8gU2ltdWxhdGlvbkxvb3BlciwgYW5kIFN0ZXBwaW5nU2ltdWxhdGlvbkxvb3Blci4gQW5pbWF0aW9uTG9vcGVyIGlzXG4gICAgLy8gdGhlIGRlZmF1bHQgYXMgaXQgaXMgdGhlIG1vc3QgdXNlZnVsIGZvciBjb21tb24gVUkgYW5pbWF0aW9ucy5cbiAgICBzZXRMb29wZXI6IGZ1bmN0aW9uKGxvb3Blcikge1xuICAgICAgdGhpcy5sb29wZXIgPSBsb29wZXI7XG4gICAgICBsb29wZXIuc3ByaW5nU3lzdGVtID0gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgbmV3IHNwcmluZyB0byB0aGlzIFNwcmluZ1N5c3RlbS4gVGhpcyBTcHJpbmcgd2lsbCBub3cgYmUgc29sdmVkIGZvclxuICAgIC8vIGR1cmluZyB0aGUgcGh5c2ljcyBpdGVyYXRpb24gbG9vcC4gQnkgZGVmYXVsdCB0aGUgc3ByaW5nIHdpbGwgdXNlIHRoZVxuICAgIC8vIGRlZmF1bHQgT3JpZ2FtaSBzcHJpbmcgY29uZmlnIHdpdGggNDAgdGVuc2lvbiBhbmQgNyBmcmljdGlvbiwgYnV0IHlvdSBjYW5cbiAgICAvLyBhbHNvIHByb3ZpZGUgeW91ciBvd24gdmFsdWVzIGhlcmUuXG4gICAgY3JlYXRlU3ByaW5nOiBmdW5jdGlvbih0ZW5zaW9uLCBmcmljdGlvbikge1xuICAgICAgdmFyIHNwcmluZ0NvbmZpZztcbiAgICAgIGlmICh0ZW5zaW9uID09PSB1bmRlZmluZWQgfHwgZnJpY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzcHJpbmdDb25maWcgPSBTcHJpbmdDb25maWcuREVGQVVMVF9PUklHQU1JX1NQUklOR19DT05GSUc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcHJpbmdDb25maWcgPVxuICAgICAgICAgIFNwcmluZ0NvbmZpZy5mcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbih0ZW5zaW9uLCBmcmljdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVTcHJpbmdXaXRoQ29uZmlnKHNwcmluZ0NvbmZpZyk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHNwcmluZyB3aXRoIGEgc3BlY2lmaWVkIGJvdW5jaW5lc3MgYW5kIHNwZWVkLiBUbyByZXBsaWNhdGUgT3JpZ2FtaVxuICAgIC8vIGNvbXBvc2l0aW9ucyBiYXNlZCBvbiBQb3BBbmltYXRpb24gcGF0Y2hlcywgdXNlIHRoaXMgZmFjdG9yeSBtZXRob2QgdG9cbiAgICAvLyBjcmVhdGUgbWF0Y2hpbmcgc3ByaW5ncy5cbiAgICBjcmVhdGVTcHJpbmdXaXRoQm91bmNpbmVzc0FuZFNwZWVkOiBmdW5jdGlvbihib3VuY2luZXNzLCBzcGVlZCkge1xuICAgICAgdmFyIHNwcmluZ0NvbmZpZztcbiAgICAgIGlmIChib3VuY2luZXNzID09PSB1bmRlZmluZWQgfHwgc3BlZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzcHJpbmdDb25maWcgPSBTcHJpbmdDb25maWcuREVGQVVMVF9PUklHQU1JX1NQUklOR19DT05GSUc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcHJpbmdDb25maWcgPVxuICAgICAgICAgIFNwcmluZ0NvbmZpZy5mcm9tQm91bmNpbmVzc0FuZFNwZWVkKGJvdW5jaW5lc3MsIHNwZWVkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNwcmluZ1dpdGhDb25maWcoc3ByaW5nQ29uZmlnKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgc3ByaW5nIHdpdGggdGhlIHByb3ZpZGVkIFNwcmluZ0NvbmZpZy5cbiAgICBjcmVhdGVTcHJpbmdXaXRoQ29uZmlnOiBmdW5jdGlvbihzcHJpbmdDb25maWcpIHtcbiAgICAgIHZhciBzcHJpbmcgPSBuZXcgU3ByaW5nKHRoaXMpO1xuICAgICAgdGhpcy5yZWdpc3RlclNwcmluZyhzcHJpbmcpO1xuICAgICAgc3ByaW5nLnNldFNwcmluZ0NvbmZpZyhzcHJpbmdDb25maWcpO1xuICAgICAgcmV0dXJuIHNwcmluZztcbiAgICB9LFxuXG4gICAgLy8gWW91IGNhbiBjaGVjayBpZiBhIFNwcmluZ1N5c3RlbSBpcyBpZGxlIG9yIGFjdGl2ZSBieSBjYWxsaW5nXG4gICAgLy8gZ2V0SXNJZGxlLiBJZiBhbGwgb2YgdGhlIFNwcmluZ3MgaW4gdGhlIFNwcmluZ1N5c3RlbSBhcmUgYXQgcmVzdCxcbiAgICAvLyBpLmUuIHRoZSBwaHlzaWNzIGZvcmNlcyBoYXZlIHJlYWNoZWQgZXF1aWxpYnJpdW0sIHRoZW4gdGhpc1xuICAgIC8vIG1ldGhvZCB3aWxsIHJldHVybiB0cnVlLlxuICAgIGdldElzSWRsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJZGxlO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSBhIHNwZWNpZmljIFNwcmluZyBmcm9tIHRoZSBTcHJpbmdTeXN0ZW0gYnkgaWQuIFRoaXNcbiAgICAvLyBjYW4gYmUgdXNlZnVsIGZvciBpbnNwZWN0aW5nIHRoZSBzdGF0ZSBvZiBhIHNwcmluZyBiZWZvcmVcbiAgICAvLyBvciBhZnRlciBhbiBpbnRlZ3JhdGlvbiBsb29wIGluIHRoZSBTcHJpbmdTeXN0ZW0gZXhlY3V0ZXMuXG4gICAgZ2V0U3ByaW5nQnlJZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3ByaW5nUmVnaXN0cnlbaWRdO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgYSBsaXN0aW5nIG9mIGFsbCB0aGUgc3ByaW5ncyByZWdpc3RlcmVkIHdpdGggdGhpc1xuICAgIC8vIFNwcmluZ1N5c3RlbS5cbiAgICBnZXRBbGxTcHJpbmdzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWxzID0gW107XG4gICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLl9zcHJpbmdSZWdpc3RyeSkge1xuICAgICAgICBpZiAodGhpcy5fc3ByaW5nUmVnaXN0cnkuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgdmFscy5wdXNoKHRoaXMuX3NwcmluZ1JlZ2lzdHJ5W2lkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxzO1xuICAgIH0sXG5cbiAgICAvLyByZWdpc3RlclNwcmluZyBpcyBjYWxsZWQgYXV0b21hdGljYWxseSBhcyBzb29uIGFzIHlvdSBjcmVhdGVcbiAgICAvLyBhIFNwcmluZyB3aXRoIFNwcmluZ1N5c3RlbSNjcmVhdGVTcHJpbmcuIFRoaXMgbWV0aG9kIHNldHMgdGhlXG4gICAgLy8gc3ByaW5nIHVwIGluIHRoZSByZWdpc3RyeSBzbyB0aGF0IGl0IGNhbiBiZSBzb2x2ZWQgaW4gdGhlXG4gICAgLy8gc29sdmVyIGxvb3AuXG4gICAgcmVnaXN0ZXJTcHJpbmc6IGZ1bmN0aW9uKHNwcmluZykge1xuICAgICAgdGhpcy5fc3ByaW5nUmVnaXN0cnlbc3ByaW5nLmdldElkKCldID0gc3ByaW5nO1xuICAgIH0sXG5cbiAgICAvLyBEZXJlZ2lzdGVyIGEgc3ByaW5nIHdpdGggdGhpcyBTcHJpbmdTeXN0ZW0uIFRoZSBTcHJpbmdTeXN0ZW0gd2lsbFxuICAgIC8vIG5vIGxvbmdlciBjb25zaWRlciB0aGlzIFNwcmluZyBkdXJpbmcgaXRzIGludGVncmF0aW9uIGxvb3Agb25jZVxuICAgIC8vIHRoaXMgaXMgY2FsbGVkLiBUaGlzIGlzIG5vcm1hbGx5IGRvbmUgYXV0b21hdGljYWxseSBmb3IgeW91IHdoZW5cbiAgICAvLyB5b3UgY2FsbCBTcHJpbmcjZGVzdHJveS5cbiAgICBkZXJlZ2lzdGVyU3ByaW5nOiBmdW5jdGlvbihzcHJpbmcpIHtcbiAgICAgIHJlbW92ZUZpcnN0KHRoaXMuX2FjdGl2ZVNwcmluZ3MsIHNwcmluZyk7XG4gICAgICBkZWxldGUgdGhpcy5fc3ByaW5nUmVnaXN0cnlbc3ByaW5nLmdldElkKCldO1xuICAgIH0sXG5cbiAgICBhZHZhbmNlOiBmdW5jdGlvbih0aW1lLCBkZWx0YVRpbWUpIHtcbiAgICAgIHdoaWxlKHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzLmxlbmd0aCA+IDApIHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzLnBvcCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuX2FjdGl2ZVNwcmluZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHNwcmluZyA9IHRoaXMuX2FjdGl2ZVNwcmluZ3NbaV07XG4gICAgICAgIGlmIChzcHJpbmcuc3lzdGVtU2hvdWxkQWR2YW5jZSgpKSB7XG4gICAgICAgICAgc3ByaW5nLmFkdmFuY2UodGltZSAvIDEwMDAuMCwgZGVsdGFUaW1lIC8gMTAwMC4wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcy5wdXNoKHRoaXMuX2FjdGl2ZVNwcmluZ3MuaW5kZXhPZihzcHJpbmcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUodGhpcy5faWRsZVNwcmluZ0luZGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaWR4ID0gdGhpcy5faWRsZVNwcmluZ0luZGljZXMucG9wKCk7XG4gICAgICAgIGlkeCA+PSAwICYmIHRoaXMuX2FjdGl2ZVNwcmluZ3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgaXMgb3VyIG1haW4gc29sdmVyIGxvb3AgY2FsbGVkIHRvIG1vdmUgdGhlIHNpbXVsYXRpb25cbiAgICAvLyBmb3J3YXJkIHRocm91Z2ggdGltZS4gQmVmb3JlIGVhY2ggcGFzcyBpbiB0aGUgc29sdmVyIGxvb3BcbiAgICAvLyBvbkJlZm9yZUludGVncmF0ZSBpcyBjYWxsZWQgb24gYW4gYW55IGxpc3RlbmVycyB0aGF0IGhhdmVcbiAgICAvLyByZWdpc3RlcmVkIHRoZW1lc2VsdmVzIHdpdGggdGhlIFNwcmluZ1N5c3RlbS4gVGhpcyBnaXZlcyB5b3VcbiAgICAvLyBhbiBvcHBvcnR1bml0eSB0byBhcHBseSBhbnkgY29uc3RyYWludHMgb3IgYWRqdXN0bWVudHMgdG9cbiAgICAvLyB0aGUgc3ByaW5ncyB0aGF0IHNob3VsZCBiZSBlbmZvcmNlZCBiZWZvcmUgZWFjaCBpdGVyYXRpb25cbiAgICAvLyBsb29wLiBOZXh0IHRoZSBhZHZhbmNlIG1ldGhvZCBpcyBjYWxsZWQgdG8gbW92ZSBlYWNoIFNwcmluZyBpblxuICAgIC8vIHRoZSBzeXN0ZW1TaG91bGRBZHZhbmNlIGZvcndhcmQgdG8gdGhlIGN1cnJlbnQgdGltZS4gQWZ0ZXIgdGhlXG4gICAgLy8gaW50ZWdyYXRpb24gc3RlcCBydW5zIGluIGFkdmFuY2UsIG9uQWZ0ZXJJbnRlZ3JhdGUgaXMgY2FsbGVkXG4gICAgLy8gb24gYW55IGxpc3RlbmVycyB0aGF0IGhhdmUgcmVnaXN0ZXJlZCB0aGVtc2VsdmVzIHdpdGggdGhlXG4gICAgLy8gU3ByaW5nU3lzdGVtLiBUaGlzIGdpdmVzIHlvdSBhbiBvcHBvcnR1bml0eSB0byBydW4gYW55IHBvc3RcbiAgICAvLyBpbnRlZ3JhdGlvbiBjb25zdHJhaW50cyBvciBhZGp1c3RtZW50cyBvbiB0aGUgU3ByaW5ncyBpbiB0aGVcbiAgICAvLyBTcHJpbmdTeXN0ZW0uXG4gICAgbG9vcDogZnVuY3Rpb24oY3VycmVudFRpbWVNaWxsaXMpIHtcbiAgICAgIHZhciBsaXN0ZW5lcjtcbiAgICAgIGlmICh0aGlzLl9sYXN0VGltZU1pbGxpcyA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBlbGxhcHNlZE1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5fbGFzdFRpbWVNaWxsaXM7XG4gICAgICB0aGlzLl9sYXN0VGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xuXG4gICAgICB2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICBsaXN0ZW5lci5vbkJlZm9yZUludGVncmF0ZSAmJiBsaXN0ZW5lci5vbkJlZm9yZUludGVncmF0ZSh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZHZhbmNlKGN1cnJlbnRUaW1lTWlsbGlzLCBlbGxhcHNlZE1pbGxpcyk7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlU3ByaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5faXNJZGxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGFzdFRpbWVNaWxsaXMgPSAtMTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgIGxpc3RlbmVyLm9uQWZ0ZXJJbnRlZ3JhdGUgJiYgbGlzdGVuZXIub25BZnRlckludGVncmF0ZSh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0lkbGUpIHtcbiAgICAgICAgdGhpcy5sb29wZXIucnVuKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGFjdGl2YXRlU3ByaW5nIGlzIHVzZWQgdG8gbm90aWZ5IHRoZSBTcHJpbmdTeXN0ZW0gdGhhdCBhIFNwcmluZ1xuICAgIC8vIGhhcyBiZWNvbWUgZGlzcGxhY2VkLiBUaGUgc3lzdGVtIHJlc3BvbmRzIGJ5IHN0YXJ0aW5nIGl0cyBzb2x2ZXJcbiAgICAvLyBsb29wIHVwIGlmIGl0IGlzIGN1cnJlbnRseSBpZGxlLlxuICAgIGFjdGl2YXRlU3ByaW5nOiBmdW5jdGlvbihzcHJpbmdJZCkge1xuICAgICAgdmFyIHNwcmluZyA9IHRoaXMuX3NwcmluZ1JlZ2lzdHJ5W3NwcmluZ0lkXTtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVTcHJpbmdzLmluZGV4T2Yoc3ByaW5nKSA9PSAtMSkge1xuICAgICAgICB0aGlzLl9hY3RpdmVTcHJpbmdzLnB1c2goc3ByaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdldElzSWRsZSgpKSB7XG4gICAgICAgIHRoaXMuX2lzSWRsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvb3Blci5ydW4oKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gdGhlIFNwcmluZ1N5c3RlbSBzbyB0aGF0IHlvdSBjYW4gcmVjZWl2ZVxuICAgIC8vIGJlZm9yZS9hZnRlciBpbnRlZ3JhdGlvbiBub3RpZmljYXRpb25zIGFsbG93aW5nIFNwcmluZ3MgdG8gYmVcbiAgICAvLyBjb25zdHJhaW5lZCBvciBhZGp1c3RlZC5cbiAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGxpc3RlbmVyIG9uIHRoZSBTcHJpbmdTeXN0ZW0uXG4gICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICByZW1vdmVGaXJzdCh0aGlzLmxpc3RlbmVycywgbGlzdGVuZXIpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgYWxsIHByZXZpb3VzbHkgYWRkZWQgbGlzdGVuZXJzIG9uIHRoZSBTcHJpbmdTeXN0ZW0uXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gIH0pO1xuXG4gIC8vIFNwcmluZ1xuICAvLyAtLS0tLS1cbiAgLy8gKipTcHJpbmcqKiBwcm92aWRlcyBhIG1vZGVsIG9mIGEgY2xhc3NpY2FsIHNwcmluZyBhY3RpbmcgdG9cbiAgLy8gcmVzb2x2ZSBhIGJvZHkgdG8gZXF1aWxpYnJpdW0uIFNwcmluZ3MgaGF2ZSBjb25maWd1cmFibGVcbiAgLy8gdGVuc2lvbiB3aGljaCBpcyBhIGZvcmNlIG11bHRpcGxlciBvbiB0aGUgZGlzcGxhY2VtZW50IG9mIHRoZVxuICAvLyBzcHJpbmcgZnJvbSBpdHMgcmVzdCBwb2ludCBvciBgZW5kVmFsdWVgIGFzIGRlZmluZWQgYnkgW0hvb2tlJ3NcbiAgLy8gbGF3XShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hvb2tlJ3NfbGF3KS4gU3ByaW5ncyBhbHNvIGhhdmVcbiAgLy8gY29uZmlndXJhYmxlIGZyaWN0aW9uLCB3aGljaCBlbnN1cmVzIHRoYXQgdGhleSBkbyBub3Qgb3NjaWxsYXRlXG4gIC8vIGluZmluaXRlbHkuIFdoZW4gYSBTcHJpbmcgaXMgZGlzcGxhY2VkIGJ5IHVwZGF0aW5nIGl0J3MgcmVzdGluZ1xuICAvLyBvciBgY3VycmVudFZhbHVlYCwgdGhlIFNwcmluZ1N5c3RlbXMgdGhhdCBjb250YWluIHRoYXQgU3ByaW5nXG4gIC8vIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBsb29waW5nIHRvIHNvbHZlIGZvciBlcXVpbGlicml1bS4gQXMgZWFjaFxuICAvLyB0aW1lc3RlcCBwYXNzZXMsIGBTcHJpbmdMaXN0ZW5lcmAgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGUgU3ByaW5nXG4gIC8vIHdpbGwgYmUgbm90aWZpZWQgb2YgdGhlIHVwZGF0ZXMgcHJvdmlkaW5nIGEgd2F5IHRvIGRyaXZlIGFuXG4gIC8vIGFuaW1hdGlvbiBvZmYgb2YgdGhlIHNwcmluZydzIHJlc29sdXRpb24gY3VydmUuXG4gIHZhciBTcHJpbmcgPSByZWJvdW5kLlNwcmluZyA9IGZ1bmN0aW9uIFNwcmluZyhzcHJpbmdTeXN0ZW0pIHtcbiAgICB0aGlzLl9pZCA9ICdzJyArIFNwcmluZy5fSUQrKztcbiAgICB0aGlzLl9zcHJpbmdTeXN0ZW0gPSBzcHJpbmdTeXN0ZW07XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBuZXcgUGh5c2ljc1N0YXRlKCk7XG4gICAgdGhpcy5fcHJldmlvdXNTdGF0ZSA9IG5ldyBQaHlzaWNzU3RhdGUoKTtcbiAgICB0aGlzLl90ZW1wU3RhdGUgPSBuZXcgUGh5c2ljc1N0YXRlKCk7XG4gIH07XG5cbiAgdXRpbC5leHRlbmQoU3ByaW5nLCB7XG4gICAgX0lEOiAwLFxuXG4gICAgTUFYX0RFTFRBX1RJTUVfU0VDOiAwLjA2NCxcblxuICAgIFNPTFZFUl9USU1FU1RFUF9TRUM6IDAuMDAxXG5cbiAgfSk7XG5cbiAgdXRpbC5leHRlbmQoU3ByaW5nLnByb3RvdHlwZSwge1xuXG4gICAgX2lkOiAwLFxuXG4gICAgX3NwcmluZ0NvbmZpZzogbnVsbCxcblxuICAgIF9vdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQ6IGZhbHNlLFxuXG4gICAgX2N1cnJlbnRTdGF0ZTogbnVsbCxcblxuICAgIF9wcmV2aW91c1N0YXRlOiBudWxsLFxuXG4gICAgX3RlbXBTdGF0ZTogbnVsbCxcblxuICAgIF9zdGFydFZhbHVlOiAwLFxuXG4gICAgX2VuZFZhbHVlOiAwLFxuXG4gICAgX3dhc0F0UmVzdDogdHJ1ZSxcblxuICAgIF9yZXN0U3BlZWRUaHJlc2hvbGQ6IDAuMDAxLFxuXG4gICAgX2Rpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkOiAwLjAwMSxcblxuICAgIGxpc3RlbmVyczogbnVsbCxcblxuICAgIF90aW1lQWNjdW11bGF0b3I6IDAsXG5cbiAgICBfc3ByaW5nU3lzdGVtOiBudWxsLFxuXG4gICAgLy8gUmVtb3ZlIGEgU3ByaW5nIGZyb20gc2ltdWxhdGlvbiBhbmQgY2xlYXIgaXRzIGxpc3RlbmVycy5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgICAgdGhpcy5fc3ByaW5nU3lzdGVtLmRlcmVnaXN0ZXJTcHJpbmcodGhpcyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIHNwcmluZywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgaXQgZnJvbVxuICAgIC8vIHRoZSBTcHJpbmdTeXN0ZW1zIGl0IHBhcnRpY2lwYXRlcyBpbiBsYXRlci5cbiAgICBnZXRJZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfSxcblxuICAgIC8vIFNldCB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZXMgZm9yIHRoaXMgU3ByaW5nLiBBIFNwcmluZ0NvbmZpZ1xuICAgIC8vIGNvbnRhaW5zIHRoZSB0ZW5zaW9uIGFuZCBmcmljdGlvbiB2YWx1ZXMgdXNlZCB0byBzb2x2ZSBmb3IgdGhlXG4gICAgLy8gZXF1aWxpYnJpdW0gb2YgdGhlIFNwcmluZyBpbiB0aGUgcGh5c2ljcyBsb29wLlxuICAgIHNldFNwcmluZ0NvbmZpZzogZnVuY3Rpb24oc3ByaW5nQ29uZmlnKSB7XG4gICAgICB0aGlzLl9zcHJpbmdDb25maWcgPSBzcHJpbmdDb25maWc7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgdGhlIFNwcmluZ0NvbmZpZyB1c2VkIGJ5IHRoaXMgU3ByaW5nLlxuICAgIGdldFNwcmluZ0NvbmZpZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3ByaW5nQ29uZmlnO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhpcyBTcHJpbmcuIExpc3RlbmVycyB3aWxsIGJlIHVwZGF0ZWRcbiAgICAvLyB3aXRoIHRoaXMgdmFsdWUgaW1tZWRpYXRlbHkuIElmIHRoZSByZXN0IG9yIGBlbmRWYWx1ZWAgaXMgbm90XG4gICAgLy8gdXBkYXRlZCB0byBtYXRjaCB0aGlzIHZhbHVlLCB0aGVuIHRoZSBzcHJpbmcgd2lsbCBiZSBkaXNwYWxjZWQgYW5kXG4gICAgLy8gdGhlIFNwcmluZ1N5c3RlbSB3aWxsIHN0YXJ0IHRvIGxvb3AgdG8gcmVzdG9yZSB0aGUgc3ByaW5nIHRvIHRoZVxuICAgIC8vIGBlbmRWYWx1ZWAuXG4gICAgLy9cbiAgICAvLyBBIGNvbW1vbiBwYXR0ZXJuIGlzIHRvIG1vdmUgYSBTcHJpbmcgYXJvdW5kIHdpdGhvdXQgYW5pbWF0aW9uIGJ5XG4gICAgLy8gY2FsbGluZy5cbiAgICAvL1xuICAgIC8vIGBgYFxuICAgIC8vIHNwcmluZy5zZXRDdXJyZW50VmFsdWUobikuc2V0QXRSZXN0KCk7XG4gICAgLy8gYGBgXG4gICAgLy9cbiAgICAvLyBUaGlzIG1vdmVzIHRoZSBTcHJpbmcgdG8gYSBuZXcgcG9zaXRpb24gYG5gLCBzZXRzIHRoZSBlbmRWYWx1ZVxuICAgIC8vIHRvIGBuYCwgYW5kIHJlbW92ZXMgYW55IHZlbG9jaXR5IGZyb20gdGhlIGBTcHJpbmdgLiBCeSBkb2luZ1xuICAgIC8vIHRoaXMgeW91IGNhbiBhbGxvdyB0aGUgYFNwcmluZ0xpc3RlbmVyYCB0byBtYW5hZ2UgdGhlIHBvc2l0aW9uXG4gICAgLy8gb2YgVUkgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhlIHNwcmluZyBldmVuIHdoZW4gbW92aW5nIHdpdGhvdXRcbiAgICAvLyBhbmltYXRpb24uIEZvciBleGFtcGxlLCB3aGVuIGRyYWdnaW5nIGFuIGVsZW1lbnQgeW91IGNhblxuICAgIC8vIHVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgYW4gYXR0YWNoZWQgdmlldyB0aHJvdWdoIGEgc3ByaW5nXG4gICAgLy8gYnkgY2FsbGluZyBgc3ByaW5nLnNldEN1cnJlbnRWYWx1ZSh4KWAuIFdoZW5cbiAgICAvLyB0aGUgZ2VzdHVyZSBlbmRzIHlvdSBjYW4gdXBkYXRlIHRoZSBTcHJpbmdzXG4gICAgLy8gdmVsb2NpdHkgYW5kIGVuZFZhbHVlXG4gICAgLy8gYHNwcmluZy5zZXRWZWxvY2l0eShnZXN0dXJlRW5kVmVsb2NpdHkpLnNldEVuZFZhbHVlKGZsaW5nVGFyZ2V0KWBcbiAgICAvLyB0byBjYXVzZSBpdCB0byBuYXR1cmFsbHkgYW5pbWF0ZSB0aGUgVUkgZWxlbWVudCB0byB0aGUgcmVzdGluZ1xuICAgIC8vIHBvc2l0aW9uIHRha2luZyBpbnRvIGFjY291bnQgZXhpc3RpbmcgdmVsb2NpdHkuIFRoZSBjb2RlcGF0aHMgZm9yXG4gICAgLy8gc3luY2hyb25vdXMgbW92ZW1lbnQgYW5kIHNwcmluZyBkcml2ZW4gYW5pbWF0aW9uIGNhblxuICAgIC8vIGJlIHVuaWZpZWQgdXNpbmcgdGhpcyB0ZWNobmlxdWUuXG4gICAgc2V0Q3VycmVudFZhbHVlOiBmdW5jdGlvbihjdXJyZW50VmFsdWUsIHNraXBTZXRBdFJlc3QpIHtcbiAgICAgIHRoaXMuX3N0YXJ0VmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24gPSBjdXJyZW50VmFsdWU7XG4gICAgICBpZiAoIXNraXBTZXRBdFJlc3QpIHtcbiAgICAgICAgdGhpcy5zZXRBdFJlc3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm90aWZ5UG9zaXRpb25VcGRhdGVkKGZhbHNlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBwb3NpdGlvbiB0aGF0IHRoZSBtb3N0IHJlY2VudCBhbmltYXRpb24gc3RhcnRlZCBhdC4gVGhpc1xuICAgIC8vIGNhbiBiZSB1c2VmdWwgZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgb2ZmIG9zY2lsbGF0aW9ucyB0aGF0XG4gICAgLy8gaGF2ZSBvY2N1cnJlZC5cbiAgICBnZXRTdGFydFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFZhbHVlO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgU3ByaW5nLlxuICAgIGdldEN1cnJlbnRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGFic29sdXRlIGRpc3RhbmNlIG9mIHRoZSBTcHJpbmcgZnJvbSBpdCdzIHJlc3RpbmcgZW5kVmFsdWVcbiAgICAvLyBwb3NpdGlvbi5cbiAgICBnZXRDdXJyZW50RGlzcGxhY2VtZW50RGlzdGFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxhY2VtZW50RGlzdGFuY2VGb3JTdGF0ZSh0aGlzLl9jdXJyZW50U3RhdGUpO1xuICAgIH0sXG5cbiAgICBnZXREaXNwbGFjZW1lbnREaXN0YW5jZUZvclN0YXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuX2VuZFZhbHVlIC0gc3RhdGUucG9zaXRpb24pO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgdGhlIGVuZFZhbHVlIG9yIHJlc3RpbmcgcG9zaXRpb24gb2YgdGhlIHNwcmluZy4gSWYgdGhpc1xuICAgIC8vIHZhbHVlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLCB0aGUgU3ByaW5nU3lzdGVtIHdpbGxcbiAgICAvLyBiZSBub3RpZmllZCBhbmQgd2lsbCBiZWdpbiBydW5uaW5nIGl0cyBzb2x2ZXIgbG9vcCB0byByZXNvbHZlXG4gICAgLy8gdGhlIFNwcmluZyB0byBlcXVpbGlicml1bS4gQW55IGxpc3RlbmVycyB0aGF0IGFyZSByZWdpc3RlcmVkXG4gICAgLy8gZm9yIG9uU3ByaW5nRW5kU3RhdGVDaGFuZ2Ugd2lsbCBhbHNvIGJlIG5vdGlmaWVkIG9mIHRoaXMgdXBkYXRlXG4gICAgLy8gaW1tZWRpYXRlbHkuXG4gICAgc2V0RW5kVmFsdWU6IGZ1bmN0aW9uKGVuZFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5fZW5kVmFsdWUgPT0gZW5kVmFsdWUgJiYgdGhpcy5pc0F0UmVzdCgpKSAge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0VmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgdGhpcy5fZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgIHRoaXMuX3NwcmluZ1N5c3RlbS5hY3RpdmF0ZVNwcmluZyh0aGlzLmdldElkKCkpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICB2YXIgb25DaGFuZ2UgPSBsaXN0ZW5lci5vblNwcmluZ0VuZFN0YXRlQ2hhbmdlO1xuICAgICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgZW5kVmFsdWUgb3IgcmVzdGluZyBwb3NpdGlvbiBvZiB0aGlzIHNwcmluZy5cbiAgICBnZXRFbmRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZW5kVmFsdWU7XG4gICAgfSxcblxuICAgIC8vIFNldCB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiB0aGUgU3ByaW5nLiBBcyBwcmV2aW91c2x5IG1lbnRpb25lZCxcbiAgICAvLyB0aGlzIGNhbiBiZSB1c2VmdWwgd2hlbiB5b3UgYXJlIHBlcmZvcm1pbmcgYSBkaXJlY3QgbWFuaXB1bGF0aW9uXG4gICAgLy8gZ2VzdHVyZS4gV2hlbiBhIFVJIGVsZW1lbnQgaXMgcmVsZWFzZWQgeW91IG1heSBjYWxsIHNldFZlbG9jaXR5XG4gICAgLy8gb24gaXRzIGFuaW1hdGlvbiBTcHJpbmcgc28gdGhhdCB0aGUgU3ByaW5nIGNvbnRpbnVlcyB3aXRoIHRoZVxuICAgIC8vIHNhbWUgdmVsb2NpdHkgYXMgdGhlIGdlc3R1cmUgZW5kZWQgd2l0aC4gVGhlIGZyaWN0aW9uLCB0ZW5zaW9uLFxuICAgIC8vIGFuZCBkaXNwbGFjZW1lbnQgb2YgdGhlIFNwcmluZyB3aWxsIHRoZW4gZ292ZXJuIGl0cyBtb3Rpb24gdG9cbiAgICAvLyByZXR1cm4gdG8gcmVzdCBvbiBhIG5hdHVyYWwgZmVlbGluZyBjdXJ2ZS5cbiAgICBzZXRWZWxvY2l0eTogZnVuY3Rpb24odmVsb2NpdHkpIHtcbiAgICAgIGlmICh2ZWxvY2l0eSA9PT0gdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICB0aGlzLl9zcHJpbmdTeXN0ZW0uYWN0aXZhdGVTcHJpbmcodGhpcy5nZXRJZCgpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgdmVsb2NpdHkgb2YgdGhlIFNwcmluZy5cbiAgICBnZXRWZWxvY2l0eTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5O1xuICAgIH0sXG5cbiAgICAvLyBTZXQgYSB0aHJlc2hvbGQgdmFsdWUgZm9yIHRoZSBtb3ZlbWVudCBzcGVlZCBvZiB0aGUgU3ByaW5nIGJlbG93XG4gICAgLy8gd2hpY2ggaXQgd2lsbCBiZSBjb25zaWRlcmVkIHRvIGJlIG5vdCBtb3Zpbmcgb3IgcmVzdGluZy5cbiAgICBzZXRSZXN0U3BlZWRUaHJlc2hvbGQ6IGZ1bmN0aW9uKHJlc3RTcGVlZFRocmVzaG9sZCkge1xuICAgICAgdGhpcy5fcmVzdFNwZWVkVGhyZXNob2xkID0gcmVzdFNwZWVkVGhyZXNob2xkO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIHRoZSByZXN0IHNwZWVkIHRocmVzaG9sZCBmb3IgdGhpcyBTcHJpbmcuXG4gICAgZ2V0UmVzdFNwZWVkVGhyZXNob2xkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXN0U3BlZWRUaHJlc2hvbGQ7XG4gICAgfSxcblxuICAgIC8vIFNldCBhIHRocmVzaG9sZCB2YWx1ZSBmb3IgZGlzcGxhY2VtZW50IGJlbG93IHdoaWNoIHRoZSBTcHJpbmdcbiAgICAvLyB3aWxsIGJlIGNvbnNpZGVyZWQgdG8gYmUgbm90IGRpc3BsYWNlZCBpLmUuIGF0IGl0cyByZXN0aW5nXG4gICAgLy8gYGVuZFZhbHVlYC5cbiAgICBzZXRSZXN0RGlzcGxhY2VtZW50VGhyZXNob2xkOiBmdW5jdGlvbihkaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZCkge1xuICAgICAgdGhpcy5fZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQgPSBkaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZDtcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgdGhlIHJlc3QgZGlzcGxhY2VtZW50IHRocmVzaG9sZCBmb3IgdGhpcyBzcHJpbmcuXG4gICAgZ2V0UmVzdERpc3BsYWNlbWVudFRocmVzaG9sZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQ7XG4gICAgfSxcblxuICAgIC8vIEVuYWJsZSBvdmVyc2hvb3QgY2xhbXBpbmcuIFRoaXMgbWVhbnMgdGhhdCB0aGUgU3ByaW5nIHdpbGwgc3RvcFxuICAgIC8vIGltbWVkaWF0ZWx5IHdoZW4gaXQgcmVhY2hlcyBpdHMgcmVzdGluZyBwb3NpdGlvbiByZWdhcmRsZXNzIG9mXG4gICAgLy8gYW55IGV4aXN0aW5nIG1vbWVudHVtIGl0IG1heSBoYXZlLiBUaGlzIGNhbiBiZSB1c2VmdWwgZm9yIGNlcnRhaW5cbiAgICAvLyB0eXBlcyBvZiBhbmltYXRpb25zIHRoYXQgc2hvdWxkIG5vdCBvc2NpbGxhdGUgc3VjaCBhcyBhIHNjYWxlXG4gICAgLy8gZG93biB0byAwIG9yIGFscGhhIGZhZGUuXG4gICAgc2V0T3ZlcnNob290Q2xhbXBpbmdFbmFibGVkOiBmdW5jdGlvbihlbmFibGVkKSB7XG4gICAgICB0aGlzLl9vdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQgPSBlbmFibGVkO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIG92ZXJzaG9vdCBjbGFtcGluZyBpcyBlbmFibGVkIGZvciB0aGlzIHNwcmluZy5cbiAgICBpc092ZXJzaG9vdENsYW1waW5nRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3ZlcnNob290Q2xhbXBpbmdFbmFibGVkO1xuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgU3ByaW5nIGhhcyBnb25lIHBhc3QgaXRzIGVuZCBwb2ludCBieSBjb21wYXJpbmdcbiAgICAvLyB0aGUgZGlyZWN0aW9uIGl0IHdhcyBtb3ZpbmcgaW4gd2hlbiBpdCBzdGFydGVkIHRvIHRoZSBjdXJyZW50XG4gICAgLy8gcG9zaXRpb24gYW5kIGVuZCB2YWx1ZS5cbiAgICBpc092ZXJzaG9vdGluZzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RhcnQgPSB0aGlzLl9zdGFydFZhbHVlO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuX2VuZFZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMuX3NwcmluZ0NvbmZpZy50ZW5zaW9uID4gMCAmJlxuICAgICAgICgoc3RhcnQgPCBlbmQgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKSA+IGVuZCkgfHxcbiAgICAgICAoc3RhcnQgPiBlbmQgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKSA8IGVuZCkpO1xuICAgIH0sXG5cbiAgICAvLyBTcHJpbmcuYWR2YW5jZSBpcyB0aGUgbWFpbiBzb2x2ZXIgbWV0aG9kIGZvciB0aGUgU3ByaW5nLiBJdCB0YWtlc1xuICAgIC8vIHRoZSBjdXJyZW50IHRpbWUgYW5kIGRlbHRhIHNpbmNlIHRoZSBsYXN0IHRpbWUgc3RlcCBhbmQgcGVyZm9ybXNcbiAgICAvLyBhbiBSSzQgaW50ZWdyYXRpb24gdG8gZ2V0IHRoZSBuZXcgcG9zaXRpb24gYW5kIHZlbG9jaXR5IHN0YXRlXG4gICAgLy8gZm9yIHRoZSBTcHJpbmcgYmFzZWQgb24gdGhlIHRlbnNpb24sIGZyaWN0aW9uLCB2ZWxvY2l0eSwgYW5kXG4gICAgLy8gZGlzcGxhY2VtZW50IG9mIHRoZSBTcHJpbmcuXG4gICAgYWR2YW5jZTogZnVuY3Rpb24odGltZSwgcmVhbERlbHRhVGltZSkge1xuICAgICAgdmFyIGlzQXRSZXN0ID0gdGhpcy5pc0F0UmVzdCgpO1xuXG4gICAgICBpZiAoaXNBdFJlc3QgJiYgdGhpcy5fd2FzQXRSZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkanVzdGVkRGVsdGFUaW1lID0gcmVhbERlbHRhVGltZTtcbiAgICAgIGlmIChyZWFsRGVsdGFUaW1lID4gU3ByaW5nLk1BWF9ERUxUQV9USU1FX1NFQykge1xuICAgICAgICBhZGp1c3RlZERlbHRhVGltZSA9IFNwcmluZy5NQVhfREVMVEFfVElNRV9TRUM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RpbWVBY2N1bXVsYXRvciArPSBhZGp1c3RlZERlbHRhVGltZTtcblxuICAgICAgdmFyIHRlbnNpb24gPSB0aGlzLl9zcHJpbmdDb25maWcudGVuc2lvbixcbiAgICAgICAgICBmcmljdGlvbiA9IHRoaXMuX3NwcmluZ0NvbmZpZy5mcmljdGlvbixcblxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5ID0gdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5LFxuICAgICAgICAgIHRlbXBQb3NpdGlvbiA9IHRoaXMuX3RlbXBTdGF0ZS5wb3NpdGlvbixcbiAgICAgICAgICB0ZW1wVmVsb2NpdHkgPSB0aGlzLl90ZW1wU3RhdGUudmVsb2NpdHksXG5cbiAgICAgICAgICBhVmVsb2NpdHksIGFBY2NlbGVyYXRpb24sXG4gICAgICAgICAgYlZlbG9jaXR5LCBiQWNjZWxlcmF0aW9uLFxuICAgICAgICAgIGNWZWxvY2l0eSwgY0FjY2VsZXJhdGlvbixcbiAgICAgICAgICBkVmVsb2NpdHksIGRBY2NlbGVyYXRpb24sXG5cbiAgICAgICAgICBkeGR0LCBkdmR0O1xuXG4gICAgICB3aGlsZSh0aGlzLl90aW1lQWNjdW11bGF0b3IgPj0gU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMpIHtcblxuICAgICAgICB0aGlzLl90aW1lQWNjdW11bGF0b3IgLT0gU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUM7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RpbWVBY2N1bXVsYXRvciA8IFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGF0ZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhdGUudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICBhQWNjZWxlcmF0aW9uID1cbiAgICAgICAgICAodGVuc2lvbiAqICh0aGlzLl9lbmRWYWx1ZSAtIHRlbXBQb3NpdGlvbikpIC0gZnJpY3Rpb24gKiB2ZWxvY2l0eTtcblxuICAgICAgICB0ZW1wUG9zaXRpb24gPSBwb3NpdGlvbiArIGFWZWxvY2l0eSAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICB0ZW1wVmVsb2NpdHkgPVxuICAgICAgICAgIHZlbG9jaXR5ICsgYUFjY2VsZXJhdGlvbiAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICBiVmVsb2NpdHkgPSB0ZW1wVmVsb2NpdHk7XG4gICAgICAgIGJBY2NlbGVyYXRpb24gPVxuICAgICAgICAgICh0ZW5zaW9uICogKHRoaXMuX2VuZFZhbHVlIC0gdGVtcFBvc2l0aW9uKSkgLSBmcmljdGlvbiAqIHRlbXBWZWxvY2l0eTtcblxuICAgICAgICB0ZW1wUG9zaXRpb24gPSBwb3NpdGlvbiArIGJWZWxvY2l0eSAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICB0ZW1wVmVsb2NpdHkgPVxuICAgICAgICAgIHZlbG9jaXR5ICsgYkFjY2VsZXJhdGlvbiAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICBjVmVsb2NpdHkgPSB0ZW1wVmVsb2NpdHk7XG4gICAgICAgIGNBY2NlbGVyYXRpb24gPVxuICAgICAgICAgICh0ZW5zaW9uICogKHRoaXMuX2VuZFZhbHVlIC0gdGVtcFBvc2l0aW9uKSkgLSBmcmljdGlvbiAqIHRlbXBWZWxvY2l0eTtcblxuICAgICAgICB0ZW1wUG9zaXRpb24gPSBwb3NpdGlvbiArIGNWZWxvY2l0eSAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICB0ZW1wVmVsb2NpdHkgPVxuICAgICAgICAgIHZlbG9jaXR5ICsgY0FjY2VsZXJhdGlvbiAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDICogMC41O1xuICAgICAgICBkVmVsb2NpdHkgPSB0ZW1wVmVsb2NpdHk7XG4gICAgICAgIGRBY2NlbGVyYXRpb24gPVxuICAgICAgICAgICh0ZW5zaW9uICogKHRoaXMuX2VuZFZhbHVlIC0gdGVtcFBvc2l0aW9uKSkgLSBmcmljdGlvbiAqIHRlbXBWZWxvY2l0eTtcblxuICAgICAgICBkeGR0ID1cbiAgICAgICAgICAxLjAvNi4wICogKGFWZWxvY2l0eSArIDIuMCAqIChiVmVsb2NpdHkgKyBjVmVsb2NpdHkpICsgZFZlbG9jaXR5KTtcbiAgICAgICAgZHZkdCA9IDEuMC82LjAgKiAoXG4gICAgICAgICAgYUFjY2VsZXJhdGlvbiArIDIuMCAqIChiQWNjZWxlcmF0aW9uICsgY0FjY2VsZXJhdGlvbikgKyBkQWNjZWxlcmF0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgcG9zaXRpb24gKz0gZHhkdCAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDO1xuICAgICAgICB2ZWxvY2l0eSArPSBkdmR0ICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RlbXBTdGF0ZS5wb3NpdGlvbiA9IHRlbXBQb3NpdGlvbjtcbiAgICAgIHRoaXMuX3RlbXBTdGF0ZS52ZWxvY2l0eSA9IHRlbXBWZWxvY2l0eTtcblxuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkgPSB2ZWxvY2l0eTtcblxuICAgICAgaWYgKHRoaXMuX3RpbWVBY2N1bXVsYXRvciA+IDApIHtcbiAgICAgICAgdGhpcy5faW50ZXJwb2xhdGUodGhpcy5fdGltZUFjY3VtdWxhdG9yIC8gU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0F0UmVzdCgpIHx8XG4gICAgICAgICAgdGhpcy5fb3ZlcnNob290Q2xhbXBpbmdFbmFibGVkICYmIHRoaXMuaXNPdmVyc2hvb3RpbmcoKSkge1xuXG4gICAgICAgIGlmICh0aGlzLl9zcHJpbmdDb25maWcudGVuc2lvbiA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zdGFydFZhbHVlID0gdGhpcy5fZW5kVmFsdWU7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uID0gdGhpcy5fZW5kVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZW5kVmFsdWUgPSB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb247XG4gICAgICAgICAgdGhpcy5fc3RhcnRWYWx1ZSA9IHRoaXMuX2VuZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoMCk7XG4gICAgICAgIGlzQXRSZXN0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vdGlmeUFjdGl2YXRlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5fd2FzQXRSZXN0KSB7XG4gICAgICAgIHRoaXMuX3dhc0F0UmVzdCA9IGZhbHNlO1xuICAgICAgICBub3RpZnlBY3RpdmF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBub3RpZnlBdFJlc3QgPSBmYWxzZTtcbiAgICAgIGlmIChpc0F0UmVzdCkge1xuICAgICAgICB0aGlzLl93YXNBdFJlc3QgPSB0cnVlO1xuICAgICAgICBub3RpZnlBdFJlc3QgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm5vdGlmeVBvc2l0aW9uVXBkYXRlZChub3RpZnlBY3RpdmF0ZSwgbm90aWZ5QXRSZXN0KTtcbiAgICB9LFxuXG4gICAgbm90aWZ5UG9zaXRpb25VcGRhdGVkOiBmdW5jdGlvbihub3RpZnlBY3RpdmF0ZSwgbm90aWZ5QXRSZXN0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgIGlmIChub3RpZnlBY3RpdmF0ZSAmJiBsaXN0ZW5lci5vblNwcmluZ0FjdGl2YXRlKSB7XG4gICAgICAgICAgbGlzdGVuZXIub25TcHJpbmdBY3RpdmF0ZSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0ZW5lci5vblNwcmluZ1VwZGF0ZSkge1xuICAgICAgICAgIGxpc3RlbmVyLm9uU3ByaW5nVXBkYXRlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdGlmeUF0UmVzdCAmJiBsaXN0ZW5lci5vblNwcmluZ0F0UmVzdCkge1xuICAgICAgICAgIGxpc3RlbmVyLm9uU3ByaW5nQXRSZXN0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIFNwcmluZ1N5c3RlbSBzaG91bGQgYWR2YW5jZS4gU3ByaW5ncyBhcmUgYWR2YW5jZWRcbiAgICAvLyBhIGZpbmFsIGZyYW1lIGFmdGVyIHRoZXkgcmVhY2ggZXF1aWxpYnJpdW0gdG8gZW5zdXJlIHRoYXQgdGhlXG4gICAgLy8gY3VycmVudFZhbHVlIGlzIGV4YWN0bHkgdGhlIHJlcXVlc3RlZCBlbmRWYWx1ZSByZWdhcmRsZXNzIG9mIHRoZVxuICAgIC8vIGRpc3BsYWNlbWVudCB0aHJlc2hvbGQuXG4gICAgc3lzdGVtU2hvdWxkQWR2YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNBdFJlc3QoKSB8fCAhdGhpcy53YXNBdFJlc3QoKTtcbiAgICB9LFxuXG4gICAgd2FzQXRSZXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93YXNBdFJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIHRoZSBTcHJpbmcgaXMgYXRSZXN0IG1lYW5pbmcgdGhhdCBpdCdzIGN1cnJlbnRWYWx1ZSBhbmRcbiAgICAvLyBlbmRWYWx1ZSBhcmUgdGhlIHNhbWUgYW5kIHRoYXQgaXQgaGFzIG5vIHZlbG9jaXR5LiBUaGUgcHJldmlvdXNseVxuICAgIC8vIGRlc2NyaWJlZCB0aHJlc2hvbGRzIGZvciBzcGVlZCBhbmQgZGlzcGxhY2VtZW50IGRlZmluZSB0aGUgYm91bmRzXG4gICAgLy8gb2YgdGhpcyBlcXVpdmFsZW5jZSBjaGVjay4gSWYgdGhlIFNwcmluZyBoYXMgMCB0ZW5zaW9uLCB0aGVuIGl0IHdpbGxcbiAgICAvLyBiZSBjb25zaWRlcmVkIGF0IHJlc3Qgd2hlbmV2ZXIgaXRzIGFic29sdXRlIHZlbG9jaXR5IGRyb3BzIGJlbG93IHRoZVxuICAgIC8vIHJlc3RTcGVlZFRocmVzaG9sZC5cbiAgICBpc0F0UmVzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5KSA8IHRoaXMuX3Jlc3RTcGVlZFRocmVzaG9sZCAmJlxuICAgICAgICAodGhpcy5nZXREaXNwbGFjZW1lbnREaXN0YW5jZUZvclN0YXRlKHRoaXMuX2N1cnJlbnRTdGF0ZSkgPD1cbiAgICAgICAgICB0aGlzLl9kaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZCB8fFxuICAgICAgICB0aGlzLl9zcHJpbmdDb25maWcudGVuc2lvbiA9PT0gMCk7XG4gICAgfSxcblxuICAgIC8vIEZvcmNlIHRoZSBzcHJpbmcgdG8gYmUgYXQgcmVzdCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi4gQXNcbiAgICAvLyBkZXNjcmliZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yIHNldEN1cnJlbnRWYWx1ZSwgdGhpcyBtZXRob2RcbiAgICAvLyBtYWtlcyBpdCBlYXN5IHRvIGRvIHN5bmNocm9ub3VzIG5vbi1hbmltYXRlZCB1cGRhdGVzIHRvIHVpXG4gICAgLy8gZWxlbWVudHMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gc3ByaW5ncyB2aWEgU3ByaW5nTGlzdGVuZXJzLlxuICAgIHNldEF0UmVzdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9lbmRWYWx1ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbjtcbiAgICAgIHRoaXMuX3RlbXBTdGF0ZS5wb3NpdGlvbiA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbjtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2ludGVycG9sYXRlOiBmdW5jdGlvbihhbHBoYSkge1xuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uID0gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uICpcbiAgICAgICAgYWxwaGEgKyB0aGlzLl9wcmV2aW91c1N0YXRlLnBvc2l0aW9uICogKDEgLSBhbHBoYSk7XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkgPSB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkgKlxuICAgICAgICBhbHBoYSArIHRoaXMuX3ByZXZpb3VzU3RhdGUudmVsb2NpdHkgKiAoMSAtIGFscGhhKTtcbiAgICB9LFxuXG4gICAgZ2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycztcbiAgICB9LFxuXG4gICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uKG5ld0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKG5ld0xpc3RlbmVyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24obGlzdGVuZXJUb1JlbW92ZSkge1xuICAgICAgcmVtb3ZlRmlyc3QodGhpcy5saXN0ZW5lcnMsIGxpc3RlbmVyVG9SZW1vdmUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGN1cnJlbnRWYWx1ZUlzQXBwcm94aW1hdGVseTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmdldEN1cnJlbnRWYWx1ZSgpIC0gdmFsdWUpIDw9XG4gICAgICAgIHRoaXMuZ2V0UmVzdERpc3BsYWNlbWVudFRocmVzaG9sZCgpO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBQaHlzaWNzU3RhdGVcbiAgLy8gLS0tLS0tLS0tLS0tXG4gIC8vICoqUGh5c2ljc1N0YXRlKiogY29uc2lzdHMgb2YgYSBwb3NpdGlvbiBhbmQgdmVsb2NpdHkuIEEgU3ByaW5nIHVzZXNcbiAgLy8gdGhpcyBpbnRlcm5hbGx5IHRvIGtlZXAgdHJhY2sgb2YgaXRzIGN1cnJlbnQgYW5kIHByaW9yIHBvc2l0aW9uIGFuZFxuICAvLyB2ZWxvY2l0eSB2YWx1ZXMuXG4gIHZhciBQaHlzaWNzU3RhdGUgPSBmdW5jdGlvbiBQaHlzaWNzU3RhdGUoKSB7fTtcblxuICB1dGlsLmV4dGVuZChQaHlzaWNzU3RhdGUucHJvdG90eXBlLCB7XG4gICAgcG9zaXRpb246IDAsXG4gICAgdmVsb2NpdHk6IDBcbiAgfSk7XG5cbiAgLy8gU3ByaW5nQ29uZmlnXG4gIC8vIC0tLS0tLS0tLS0tLVxuICAvLyAqKlNwcmluZ0NvbmZpZyoqIG1haW50YWlucyBhIHNldCBvZiB0ZW5zaW9uIGFuZCBmcmljdGlvbiBjb25zdGFudHNcbiAgLy8gZm9yIGEgU3ByaW5nLiBZb3UgY2FuIHVzZSBmcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbiB0byBjb252ZXJ0XG4gIC8vIHZhbHVlcyBmcm9tIHRoZSBbT3JpZ2FtaV0oaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9vcmlnYW1pLylcbiAgLy8gZGVzaWduIHRvb2wgZGlyZWN0bHkgdG8gUmVib3VuZCBzcHJpbmcgY29uc3RhbnRzLlxuICB2YXIgU3ByaW5nQ29uZmlnID0gcmVib3VuZC5TcHJpbmdDb25maWcgPVxuICAgIGZ1bmN0aW9uIFNwcmluZ0NvbmZpZyh0ZW5zaW9uLCBmcmljdGlvbikge1xuICAgICAgdGhpcy50ZW5zaW9uID0gdGVuc2lvbjtcbiAgICAgIHRoaXMuZnJpY3Rpb24gPSBmcmljdGlvbjtcbiAgICB9O1xuXG4gIC8vIExvb3BlcnNcbiAgLy8gLS0tLS0tLVxuICAvLyAqKkFuaW1hdGlvbkxvb3BlcioqIHBsYXlzIGVhY2ggZnJhbWUgb2YgdGhlIFNwcmluZ1N5c3RlbSBvbiBhbmltYXRpb25cbiAgLy8gdGltaW5nIGxvb3AuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdHlwZSBvZiBsb29wZXIgZm9yIGEgbmV3IHNwcmluZyBzeXN0ZW1cbiAgLy8gYXMgaXQgaXMgdGhlIG1vc3QgY29tbW9uIHdoZW4gZGV2ZWxvcGluZyBVSS5cbiAgdmFyIEFuaW1hdGlvbkxvb3BlciA9IHJlYm91bmQuQW5pbWF0aW9uTG9vcGVyID0gZnVuY3Rpb24gQW5pbWF0aW9uTG9vcGVyKCkge1xuICAgIHRoaXMuc3ByaW5nU3lzdGVtID0gbnVsbDtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBfcnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5zcHJpbmdTeXN0ZW0ubG9vcChEYXRlLm5vdygpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHV0aWwub25GcmFtZShfcnVuKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vICoqU2ltdWxhdGlvbkxvb3BlcioqIHJlc29sdmVzIHRoZSBTcHJpbmdTeXN0ZW0gdG8gYSByZXN0aW5nIHN0YXRlIGluIGFcbiAgLy8gdGlnaHQgYW5kIGJsb2NraW5nIGxvb3AuIFRoaXMgaXMgdXNlZnVsIGZvciBzeW5jaHJvbm91c2x5IGdlbmVyYXRpbmdcbiAgLy8gcHJlLXJlY29yZGVkIGFuaW1hdGlvbnMgdGhhdCBjYW4gdGhlbiBiZSBwbGF5ZWQgb24gYSB0aW1pbmcgbG9vcCBsYXRlci5cbiAgLy8gU29tZXRpbWVzIHRoaXMgbGVhZCB0byBiZXR0ZXIgcGVyZm9ybWFuY2UgdG8gcHJlLXJlY29yZCBhIHNpbmdsZSBzcHJpbmdcbiAgLy8gY3VydmUgYW5kIHVzZSBpdCB0byBkcml2ZSBtYW55IGFuaW1hdGlvbnM7IGhvd2V2ZXIsIGl0IGNhbiBtYWtlIGR5bmFtaWNcbiAgLy8gcmVzcG9uc2UgdG8gdXNlciBpbnB1dCBhIGJpdCB0cmlja2llciB0byBpbXBsZW1lbnQuXG4gIHJlYm91bmQuU2ltdWxhdGlvbkxvb3BlciA9IGZ1bmN0aW9uIFNpbXVsYXRpb25Mb29wZXIodGltZXN0ZXApIHtcbiAgICB0aGlzLnNwcmluZ1N5c3RlbSA9IG51bGw7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIHZhciBydW5uaW5nID0gZmFsc2U7XG4gICAgdGltZXN0ZXA9dGltZXN0ZXAgfHwgMTYuNjY3O1xuXG4gICAgdGhpcy5ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgd2hpbGUoIXRoaXMuc3ByaW5nU3lzdGVtLmdldElzSWRsZSgpKSB7XG4gICAgICAgIHRoaXMuc3ByaW5nU3lzdGVtLmxvb3AodGltZSs9dGltZXN0ZXApO1xuICAgICAgfVxuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH07XG4gIH07XG5cbiAgLy8gKipTdGVwcGluZ1NpbXVsYXRpb25Mb29wZXIqKiByZXNvbHZlcyB0aGUgU3ByaW5nU3lzdGVtIG9uZSBzdGVwIGF0IGFcbiAgLy8gdGltZSBjb250cm9sbGVkIGJ5IGFuIG91dHNpZGUgbG9vcC4gVGhpcyBpcyB1c2VmdWwgZm9yIHRlc3RpbmcgYW5kXG4gIC8vIHZlcmlmeWluZyB0aGUgYmVoYXZpb3Igb2YgYSBTcHJpbmdTeXN0ZW0gb3IgaWYgeW91IHdhbnQgdG8gY29udHJvbCB5b3VyIG93blxuICAvLyB0aW1pbmcgbG9vcCBmb3Igc29tZSByZWFzb24gZS5nLiBzbG93aW5nIGRvd24gb3Igc3BlZWRpbmcgdXAgdGhlXG4gIC8vIHNpbXVsYXRpb24uXG4gIHJlYm91bmQuU3RlcHBpbmdTaW11bGF0aW9uTG9vcGVyID0gZnVuY3Rpb24odGltZXN0ZXApIHtcbiAgICB0aGlzLnNwcmluZ1N5c3RlbSA9IG51bGw7XG4gICAgdmFyIHRpbWUgPSAwO1xuXG4gICAgLy8gdGhpcy5ydW4gaXMgTk9PUCdkIGhlcmUgdG8gYWxsb3cgY29udHJvbCBmcm9tIHRoZSBvdXRzaWRlIHVzaW5nXG4gICAgLy8gdGhpcy5zdGVwLlxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24oKXt9O1xuXG4gICAgLy8gUGVyZm9ybSBvbmUgc3RlcCB0b3dhcmQgcmVzb2x2aW5nIHRoZSBTcHJpbmdTeXN0ZW0uXG4gICAgdGhpcy5zdGVwID0gZnVuY3Rpb24odGltZXN0ZXApIHtcbiAgICAgIHRoaXMuc3ByaW5nU3lzdGVtLmxvb3AodGltZSs9dGltZXN0ZXApO1xuICAgIH07XG4gIH07XG5cbiAgLy8gTWF0aCBmb3IgY29udmVydGluZyBmcm9tXG4gIC8vIFtPcmlnYW1pXShodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL29yaWdhbWkvKSB0b1xuICAvLyBbUmVib3VuZF0oaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWJvdW5kKS5cbiAgLy8gWW91IG1vc3RseSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoaXMsIGp1c3QgdXNlXG4gIC8vIFNwcmluZ0NvbmZpZy5mcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbih2LCB2KTtcbiAgdmFyIE9yaWdhbWlWYWx1ZUNvbnZlcnRlciA9IHJlYm91bmQuT3JpZ2FtaVZhbHVlQ29udmVydGVyID0ge1xuICAgIHRlbnNpb25Gcm9tT3JpZ2FtaVZhbHVlOiBmdW5jdGlvbihvVmFsdWUpIHtcbiAgICAgIHJldHVybiAob1ZhbHVlIC0gMzAuMCkgKiAzLjYyICsgMTk0LjA7XG4gICAgfSxcblxuICAgIG9yaWdhbWlWYWx1ZUZyb21UZW5zaW9uOiBmdW5jdGlvbih0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gKHRlbnNpb24gLSAxOTQuMCkgLyAzLjYyICsgMzAuMDtcbiAgICB9LFxuXG4gICAgZnJpY3Rpb25Gcm9tT3JpZ2FtaVZhbHVlOiBmdW5jdGlvbihvVmFsdWUpIHtcbiAgICAgIHJldHVybiAob1ZhbHVlIC0gOC4wKSAqIDMuMCArIDI1LjA7XG4gICAgfSxcblxuICAgIG9yaWdhbWlGcm9tRnJpY3Rpb246IGZ1bmN0aW9uKGZyaWN0aW9uKSB7XG4gICAgICByZXR1cm4gKGZyaWN0aW9uIC0gMjUuMCkgLyAzLjAgKyA4LjA7XG4gICAgfVxuICB9O1xuXG4gIC8vIEJvdW5jeUNvbnZlcnNpb24gcHJvdmlkZXMgbWF0aCBmb3IgY29udmVydGluZyBmcm9tIE9yaWdhbWkgUG9wQW5pbWF0aW9uXG4gIC8vIGNvbmZpZyB2YWx1ZXMgdG8gcmVndWxhciBPcmlnYW1pIHRlbnNpb24gYW5kIGZyaWN0aW9uIHZhbHVlcy4gSWYgeW91IGFyZVxuICAvLyB0cnlpbmcgdG8gcmVwbGljYXRlIHByb3RvdHlwZXMgbWFkZSB3aXRoIFBvcEFuaW1hdGlvbiBwYXRjaGVzIGluIE9yaWdhbWksXG4gIC8vIHRoZW4geW91IHNob3VsZCBjcmVhdGUgeW91ciBzcHJpbmdzIHdpdGhcbiAgLy8gU3ByaW5nU3lzdGVtLmNyZWF0ZVNwcmluZ1dpdGhCb3VuY2luZXNzQW5kU3BlZWQsIHdoaWNoIHVzZXMgdGhpcyBNYXRoXG4gIC8vIGludGVybmFsbHkgdG8gY3JlYXRlIGEgc3ByaW5nIHRvIG1hdGNoIHRoZSBwcm92aWRlZCBQb3BBbmltYXRpb25cbiAgLy8gY29uZmlndXJhdGlvbiBmcm9tIE9yaWdhbWkuXG4gIHZhciBCb3VuY3lDb252ZXJzaW9uID0gcmVib3VuZC5Cb3VuY3lDb252ZXJzaW9uID0gZnVuY3Rpb24oYm91bmNpbmVzcywgc3BlZWQpe1xuICAgIHRoaXMuYm91bmNpbmVzcyA9IGJvdW5jaW5lc3M7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHZhciBiID0gdGhpcy5ub3JtYWxpemUoYm91bmNpbmVzcyAvIDEuNywgMCwgMjAuMCk7XG4gICAgYiA9IHRoaXMucHJvamVjdE5vcm1hbChiLCAwLjAsIDAuOCk7XG4gICAgdmFyIHMgPSB0aGlzLm5vcm1hbGl6ZShzcGVlZCAvIDEuNywgMCwgMjAuMCk7XG4gICAgdGhpcy5ib3VuY3lUZW5zaW9uID0gdGhpcy5wcm9qZWN0Tm9ybWFsKHMsIDAuNSwgMjAwKVxuICAgIHRoaXMuYm91bmN5RnJpY3Rpb24gPSB0aGlzLnF1YWRyYXRpY091dEludGVycG9sYXRpb24oXG4gICAgICBiLFxuICAgICAgdGhpcy5iM05vYm91bmNlKHRoaXMuYm91bmN5VGVuc2lvbiksXG4gICAgICAwLjAxKTtcbiAgfVxuXG4gIHV0aWwuZXh0ZW5kKEJvdW5jeUNvbnZlcnNpb24ucHJvdG90eXBlLCB7XG5cbiAgICBub3JtYWxpemU6IGZ1bmN0aW9uKHZhbHVlLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2YWx1ZSAtIHN0YXJ0VmFsdWUpIC8gKGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSk7XG4gICAgfSxcblxuICAgIHByb2plY3ROb3JtYWw6IGZ1bmN0aW9uKG4sIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiBzdGFydCArIChuICogKGVuZCAtIHN0YXJ0KSk7XG4gICAgfSxcblxuICAgIGxpbmVhckludGVycG9sYXRpb246IGZ1bmN0aW9uKHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiB0ICogZW5kICsgKDEuMCAtIHQpICogc3RhcnQ7XG4gICAgfSxcblxuICAgIHF1YWRyYXRpY091dEludGVycG9sYXRpb246IGZ1bmN0aW9uKHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpbmVhckludGVycG9sYXRpb24oMip0IC0gdCp0LCBzdGFydCwgZW5kKTtcbiAgICB9LFxuXG4gICAgYjNGcmljdGlvbjE6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiAoMC4wMDA3ICogTWF0aC5wb3coeCwgMykpIC1cbiAgICAgICAgKDAuMDMxICogTWF0aC5wb3coeCwgMikpICsgMC42NCAqIHggKyAxLjI4O1xuICAgIH0sXG5cbiAgICBiM0ZyaWN0aW9uMjogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuICgwLjAwMDA0NCAqIE1hdGgucG93KHgsIDMpKSAtXG4gICAgICAgICgwLjAwNiAqIE1hdGgucG93KHgsIDIpKSArIDAuMzYgKiB4ICsgMi47XG4gICAgfSxcblxuICAgIGIzRnJpY3Rpb24zOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gKDAuMDAwMDAwNDUgKiBNYXRoLnBvdyh4LCAzKSkgLVxuICAgICAgICAoMC4wMDAzMzIgKiBNYXRoLnBvdyh4LCAyKSkgKyAwLjEwNzggKiB4ICsgNS44NDtcbiAgICB9LFxuXG4gICAgYjNOb2JvdW5jZTogZnVuY3Rpb24odGVuc2lvbikge1xuICAgICAgdmFyIGZyaWN0aW9uID0gMDtcbiAgICAgIGlmICh0ZW5zaW9uIDw9IDE4KSB7XG4gICAgICAgIGZyaWN0aW9uID0gdGhpcy5iM0ZyaWN0aW9uMSh0ZW5zaW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGVuc2lvbiA+IDE4ICYmIHRlbnNpb24gPD0gNDQpIHtcbiAgICAgICAgZnJpY3Rpb24gPSB0aGlzLmIzRnJpY3Rpb24yKHRlbnNpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJpY3Rpb24gPSB0aGlzLmIzRnJpY3Rpb24zKHRlbnNpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZyaWN0aW9uO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbC5leHRlbmQoU3ByaW5nQ29uZmlnLCB7XG4gICAgLy8gQ29udmVydCBhbiBvcmlnYW1pIFNwcmluZyB0ZW5zaW9uIGFuZCBmcmljdGlvbiB0byBSZWJvdW5kIHNwcmluZ1xuICAgIC8vIGNvbnN0YW50cy4gSWYgeW91IGFyZSBwcm90b3R5cGluZyBhIGRlc2lnbiB3aXRoIE9yaWdhbWksIHRoaXNcbiAgICAvLyBtYWtlcyBpdCBlYXN5IHRvIG1ha2UgeW91ciBzcHJpbmdzIGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGluXG4gICAgLy8gUmVib3VuZC5cbiAgICBmcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbjogZnVuY3Rpb24odGVuc2lvbiwgZnJpY3Rpb24pIHtcbiAgICAgIHJldHVybiBuZXcgU3ByaW5nQ29uZmlnKFxuICAgICAgICBPcmlnYW1pVmFsdWVDb252ZXJ0ZXIudGVuc2lvbkZyb21PcmlnYW1pVmFsdWUodGVuc2lvbiksXG4gICAgICAgIE9yaWdhbWlWYWx1ZUNvbnZlcnRlci5mcmljdGlvbkZyb21PcmlnYW1pVmFsdWUoZnJpY3Rpb24pKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhbiBvcmlnYW1pIFBvcEFuaW1hdGlvbiBTcHJpbmcgYm91bmNpbmVzcyBhbmQgc3BlZWQgdG8gUmVib3VuZFxuICAgIC8vIHNwcmluZyBjb25zdGFudHMuIElmIHlvdSBhcmUgdXNpbmcgUG9wQW5pbWF0aW9uIHBhdGNoZXMgaW4gT3JpZ2FtaSwgdGhpc1xuICAgIC8vIHV0aWxpdHkgd2lsbCBwcm92aWRlIHNwcmluZ3MgdGhhdCBtYXRjaCB5b3VyIHByb3RvdHlwZS5cbiAgICBmcm9tQm91bmNpbmVzc0FuZFNwZWVkOiBmdW5jdGlvbihib3VuY2luZXNzLCBzcGVlZCkge1xuICAgICAgdmFyIGJvdW5jeUNvbnZlcnNpb24gPSBuZXcgcmVib3VuZC5Cb3VuY3lDb252ZXJzaW9uKGJvdW5jaW5lc3MsIHNwZWVkKTtcbiAgICAgIHJldHVybiB0aGlzLmZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uKFxuICAgICAgICBib3VuY3lDb252ZXJzaW9uLmJvdW5jeVRlbnNpb24sXG4gICAgICAgIGJvdW5jeUNvbnZlcnNpb24uYm91bmN5RnJpY3Rpb24pO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgYSBTcHJpbmdDb25maWcgd2l0aCBubyB0ZW5zaW9uIG9yIGEgY29hc3Rpbmcgc3ByaW5nIHdpdGggc29tZVxuICAgIC8vIGFtb3VudCBvZiBGcmljdGlvbiBzbyB0aGF0IGl0IGRvZXMgbm90IGNvYXN0IGluZmluaW5pdGVseS5cbiAgICBjb2FzdGluZ0NvbmZpZ1dpdGhPcmlnYW1pRnJpY3Rpb246IGZ1bmN0aW9uKGZyaWN0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3IFNwcmluZ0NvbmZpZyhcbiAgICAgICAgMCxcbiAgICAgICAgT3JpZ2FtaVZhbHVlQ29udmVydGVyLmZyaWN0aW9uRnJvbU9yaWdhbWlWYWx1ZShmcmljdGlvbilcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBTcHJpbmdDb25maWcuREVGQVVMVF9PUklHQU1JX1NQUklOR19DT05GSUcgPVxuICAgIFNwcmluZ0NvbmZpZy5mcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbig0MCwgNyk7XG5cbiAgdXRpbC5leHRlbmQoU3ByaW5nQ29uZmlnLnByb3RvdHlwZSwge2ZyaWN0aW9uOiAwLCB0ZW5zaW9uOiAwfSk7XG5cbiAgLy8gSGVyZSBhcmUgYSBjb3VwbGUgb2YgZnVuY3Rpb24gdG8gY29udmVydCBjb2xvcnMgYmV0d2VlbiBoZXggY29kZXMgYW5kIFJHQlxuICAvLyBjb21wb25lbnQgdmFsdWVzLiBUaGVzZSBhcmUgaGFuZHkgd2hlbiBwZXJmb3JtaW5nIGNvbG9yXG4gIC8vIHR3ZWVuaW5nIGFuaW1hdGlvbnMuXG4gIHZhciBjb2xvckNhY2hlID0ge307XG4gIHV0aWwuaGV4VG9SR0IgPSBmdW5jdGlvbihjb2xvcikge1xuICAgIGlmIChjb2xvckNhY2hlW2NvbG9yXSkge1xuICAgICAgcmV0dXJuIGNvbG9yQ2FjaGVbY29sb3JdO1xuICAgIH1cbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMykge1xuICAgICAgY29sb3IgPSBjb2xvclswXSArIGNvbG9yWzBdICsgY29sb3JbMV0gKyBjb2xvclsxXSArIGNvbG9yWzJdICsgY29sb3JbMl07XG4gICAgfVxuICAgIHZhciBwYXJ0cyA9IGNvbG9yLm1hdGNoKC8uezJ9L2cpO1xuXG4gICAgdmFyIHJldCA9IHtcbiAgICAgIHI6IHBhcnNlSW50KHBhcnRzWzBdLCAxNiksXG4gICAgICBnOiBwYXJzZUludChwYXJ0c1sxXSwgMTYpLFxuICAgICAgYjogcGFyc2VJbnQocGFydHNbMl0sIDE2KVxuICAgIH07XG5cbiAgICBjb2xvckNhY2hlW2NvbG9yXSA9IHJldDtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHV0aWwucmdiVG9IZXggPSBmdW5jdGlvbihyLCBnLCBiKSB7XG4gICAgciA9IHIudG9TdHJpbmcoMTYpO1xuICAgIGcgPSBnLnRvU3RyaW5nKDE2KTtcbiAgICBiID0gYi50b1N0cmluZygxNik7XG4gICAgciA9IHIubGVuZ3RoIDwgMiA/ICcwJyArIHIgOiByO1xuICAgIGcgPSBnLmxlbmd0aCA8IDIgPyAnMCcgKyBnIDogZztcbiAgICBiID0gYi5sZW5ndGggPCAyID8gJzAnICsgYiA6IGI7XG4gICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgfTtcblxuICB2YXIgTWF0aFV0aWwgPSByZWJvdW5kLk1hdGhVdGlsID0ge1xuICAgIC8vIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGRvZXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvZiBhIHZhbHVlIGZyb21cbiAgICAvLyBvbmUgcmFuZ2UgdG8gYW5vdGhlci4gVGhpcyBjYW4gYmUgdmVyeSB1c2VmdWwgZm9yIGNvbnZlcnRpbmcgdGhlXG4gICAgLy8gbW90aW9uIG9mIGEgU3ByaW5nIHRvIGEgcmFuZ2Ugb2YgVUkgcHJvcGVydHkgdmFsdWVzLiBGb3IgZXhhbXBsZSBhXG4gICAgLy8gc3ByaW5nIG1vdmluZyBmcm9tIHBvc2l0aW9uIDAgdG8gMSBjb3VsZCBiZSBpbnRlcnBvbGF0ZWQgdG8gbW92ZSBhXG4gICAgLy8gdmlldyBmcm9tIHBpeGVsIDMwMCB0byAzNTAgYW5kIHNjYWxlIGl0IGZyb20gMC41IHRvIDEuIFRoZSBjdXJyZW50XG4gICAgLy8gcG9zaXRpb24gb2YgdGhlIGBTcHJpbmdgIGp1c3QgbmVlZHMgdG8gYmUgcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAvLyB0YWtpbmcgaXRzIGlucHV0IHJhbmdlIGluIHRoZSBfZnJvbV8gcGFyYW1ldGVycyB3aXRoIHRoZSBwcm9wZXJ0eVxuICAgIC8vIGFuaW1hdGlvbiByYW5nZSBpbiB0aGUgX3RvXyBwYXJhbWV0ZXJzLlxuICAgIG1hcFZhbHVlSW5SYW5nZTogZnVuY3Rpb24odmFsdWUsIGZyb21Mb3csIGZyb21IaWdoLCB0b0xvdywgdG9IaWdoKSB7XG4gICAgICB2YXIgZnJvbVJhbmdlU2l6ZSA9IGZyb21IaWdoIC0gZnJvbUxvdztcbiAgICAgIHZhciB0b1JhbmdlU2l6ZSA9IHRvSGlnaCAtIHRvTG93O1xuICAgICAgdmFyIHZhbHVlU2NhbGUgPSAodmFsdWUgLSBmcm9tTG93KSAvIGZyb21SYW5nZVNpemU7XG4gICAgICByZXR1cm4gdG9Mb3cgKyAodmFsdWVTY2FsZSAqIHRvUmFuZ2VTaXplKTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJwb2xhdGUgdHdvIGhleCBjb2xvcnMgaW4gYSAwIC0gMSByYW5nZSBvciBvcHRpb25hbGx5IHByb3ZpZGUgYVxuICAgIC8vIGN1c3RvbSByYW5nZSB3aXRoIGZyb21Mb3csZnJvbUhpZ2h0LiBUaGUgb3V0cHV0IHdpbGwgYmUgaW4gaGV4IGJ5IGRlZmF1bHRcbiAgICAvLyB1bmxlc3MgYXNSR0IgaXMgdHJ1ZSBpbiB3aGljaCBjYXNlIGl0IHdpbGwgYmUgcmV0dXJuZWQgYXMgYW4gcmdiIHN0cmluZy5cbiAgICBpbnRlcnBvbGF0ZUNvbG9yOlxuICAgICAgZnVuY3Rpb24odmFsLCBzdGFydENvbG9yLCBlbmRDb2xvciwgZnJvbUxvdywgZnJvbUhpZ2gsIGFzUkdCKSB7XG4gICAgICBmcm9tTG93ID0gZnJvbUxvdyA9PT0gdW5kZWZpbmVkID8gMCA6IGZyb21Mb3c7XG4gICAgICBmcm9tSGlnaCA9IGZyb21IaWdoID09PSB1bmRlZmluZWQgPyAxIDogZnJvbUhpZ2g7XG4gICAgICBzdGFydENvbG9yID0gdXRpbC5oZXhUb1JHQihzdGFydENvbG9yKTtcbiAgICAgIGVuZENvbG9yID0gdXRpbC5oZXhUb1JHQihlbmRDb2xvcik7XG4gICAgICB2YXIgciA9IE1hdGguZmxvb3IoXG4gICAgICAgIHV0aWwubWFwVmFsdWVJblJhbmdlKHZhbCwgZnJvbUxvdywgZnJvbUhpZ2gsIHN0YXJ0Q29sb3IuciwgZW5kQ29sb3IucilcbiAgICAgICk7XG4gICAgICB2YXIgZyA9IE1hdGguZmxvb3IoXG4gICAgICAgIHV0aWwubWFwVmFsdWVJblJhbmdlKHZhbCwgZnJvbUxvdywgZnJvbUhpZ2gsIHN0YXJ0Q29sb3IuZywgZW5kQ29sb3IuZylcbiAgICAgICk7XG4gICAgICB2YXIgYiA9IE1hdGguZmxvb3IoXG4gICAgICAgIHV0aWwubWFwVmFsdWVJblJhbmdlKHZhbCwgZnJvbUxvdywgZnJvbUhpZ2gsIHN0YXJ0Q29sb3IuYiwgZW5kQ29sb3IuYilcbiAgICAgICk7XG4gICAgICBpZiAoYXNSR0IpIHtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1dGlsLnJnYlRvSGV4KHIsIGcsIGIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbihkZWcpIHtcbiAgICAgIHJldHVybiAoZGVnICogTWF0aC5QSSkgLyAxODA7XG4gICAgfSxcblxuICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uKHJhZCkge1xuICAgICAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbiAgICB9XG5cbiAgfVxuXG4gIHV0aWwuZXh0ZW5kKHV0aWwsIE1hdGhVdGlsKTtcblxuXG4gIC8vIFV0aWxpdGllc1xuICAvLyAtLS0tLS0tLS1cbiAgLy8gSGVyZSBhcmUgYSBmZXcgdXNlZnVsIEphdmFTY3JpcHQgdXRpbGl0aWVzLlxuXG4gIC8vIExvcCBvZmYgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiB0aGUgcmVmZXJlbmNlIGluIHRoZSBBcnJheS5cbiAgZnVuY3Rpb24gcmVtb3ZlRmlyc3QoYXJyYXksIGl0ZW0pIHtcbiAgICB2YXIgaWR4ID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgICBpZHggIT0gLTEgJiYgYXJyYXkuc3BsaWNlKGlkeCwgMSk7XG4gIH1cblxuICB2YXIgX29uRnJhbWU7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9vbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICB9O1xuICB9XG4gIGlmICghX29uRnJhbWUgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudGl0bGUgPT09ICdub2RlJykge1xuICAgIF9vbkZyYW1lID0gc2V0SW1tZWRpYXRlO1xuICB9XG5cbiAgLy8gQ3Jvc3MgYnJvd3Nlci9ub2RlIHRpbWVyIGZ1bmN0aW9ucy5cbiAgdXRpbC5vbkZyYW1lID0gZnVuY3Rpb24gb25GcmFtZShmdW5jKSB7XG4gICAgcmV0dXJuIF9vbkZyYW1lKGZ1bmMpO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgcHVibGljIGFwaSB1c2luZyBleHBvcnRzIGZvciBjb21tb24ganMgb3IgdGhlIHdpbmRvdyBmb3JcbiAgLy8gbm9ybWFsIGJyb3dzZXIgaW5jbHVzaW9uLlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1dGlsLmV4dGVuZChleHBvcnRzLCByZWJvdW5kKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnJlYm91bmQgPSByZWJvdW5kO1xuICB9XG59KSgpO1xuXG5cbi8vIExlZ2FsIFN0dWZmXG4vLyAtLS0tLS0tLS0tLVxuLyoqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDEzLCBGYWNlYm9vaywgSW5jLlxuICogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWJvdW5kL3JlYm91bmQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtbGlicy1icm93c2VyL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3N1xuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IDAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsVG9wOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLnNjcm9sbFRvcCwgdGhpcy5zdGF0ZS5zY3JvbGxMZWZ0KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3Njcm9sbC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB0cmFuc2xhdGUzZCA9ICh4LHkseikgPT4gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250cm9sVGl0bGU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGxpbmVIZWlnaHQ6ICczMHB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgY29udHJvbFJhbmdlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBsaW5lSGVpZ2h0OiAnMzBweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH0sXG4gIGNvbnRyb2xWYWx1ZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbGluZUhlaWdodDogJzMwcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJywgY29sb3I6ICdncmV5JywgZm9udFNpemU6ICcxMHB4Jywgd2lkdGg6ICcyMHB4JyB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyB2YWx1ZTogMCwgbWluOiAwLCBtYXg6IDEwMCwgbmFtZTogbnVsbCB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHttaW4sbWF4LHZhbHVlLG9uQ2hhbmdlLG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8ZGl2IHsuLi50aGlzLnByb3BzfT5cbiAgICAgIHtuYW1lICYmIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250cm9sVGl0bGV9PntuYW1lfTwvZGl2PiB9XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXttaW59IG1heD17bWF4fSBzdHlsZT17c3R5bGVzLmNvbnRyb2xSYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQpIH0vPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRyb2xWYWx1ZX0+e3ZhbHVlfTwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9yYW5nZS1jb250cm9sLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
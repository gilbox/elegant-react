webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Component = React.Component;
	
	var _require = __webpack_require__(171);
	
	var Spring = _require.Spring;
	
	var Scroll = __webpack_require__(175);
	var RangeControl = __webpack_require__(176);
	
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
	
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          { style: styles.title },
	          'Scroll and Spring Animation Demo'
	        ),
	        React.createElement(RangeControl, { name: 'tension', type: 'range', min: '1', max: '200', style: styles.control,
	          value: this.state.tension,
	          onChange: function (event) {
	            return _this.setState({ tension: ~ ~event.target.value });
	          } }),
	        React.createElement(RangeControl, { name: 'friction', min: '1', max: '30', style: styles.control,
	          value: this.state.friction,
	          onChange: function (event) {
	            return _this.setState({ friction: ~ ~event.target.value });
	          } }),
	        React.createElement(
	          Scroll,
	          null,
	          function (scrollTop) {
	            return React.createElement(
	              Spring,
	              { to: scrollTop, friction: _this.state.friction, tension: _this.state.tension },
	              function (offsetY) {
	                return React.createElement(
	                  'div',
	                  { style: styles.parallaxContainer },
	                  React.createElement(
	                    'h2',
	                    { style: styles.parallaxTitle },
	                    'Music is ❤'
	                  ),
	                  React.createElement('img', { src: 'bg.jpg', width: '100%',
	                    style: _extends({}, styles.parallaxImage, {
	                      transform: translate3d(0, -offsetY / 2 - 50, 0) }) })
	                );
	              }
	            );
	          }
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'a',
	            { href: 'https://www.flickr.com/photos/ubeyd/19152848669/in/pool-83823859@N00/' },
	            'image by Ubeyd'
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(Component);
	
	;
	
	React.render(React.createElement(App, null), document.getElementById('example'));

/***/ },

/***/ 171:
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
	
	// try{ React = require('react-native'); }
	// catch(e){ React = require('react'); }
	// the above bit should get better after https://github.com/facebook/react/issues/3220
	
	// springs, all that
	
	var _rebound = __webpack_require__(172);
	
	var _rebound2 = _interopRequireDefault(_rebound);
	
	var React = __webpack_require__(1);
	
	var noop = function noop() {}; // default onSpringUpdate
	
	var Spring = React.createClass({
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
	    from: React.PropTypes.number,
	    friction: React.PropTypes.number,
	    tension: React.PropTypes.number,
	    to: React.PropTypes.number,
	    atRest: React.PropTypes.bool,
	    overShootClamping: React.PropTypes.bool,
	    children: React.PropTypes.func,
	    onSpringUpdate: React.PropTypes.func,
	    onSpring: React.PropTypes.func
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
	var Springs = React.createClass({
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
	    onSpringUpdate: React.PropTypes.func,
	    onSpring: React.PropTypes.func,
	    children: React.PropTypes.func
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
	    return React.createElement(
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

/***/ 172:
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(173), __webpack_require__(174).setImmediate))

/***/ },

/***/ 173:
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

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(173).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(174).setImmediate, __webpack_require__(174).clearImmediate))

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Component = React.Component;
	
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
	})(Component);
	
	exports['default'] = Scroll;
	module.exports = exports['default'];

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Component = React.Component;
	
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
	
	      return React.createElement(
	        'div',
	        this.props,
	        name && React.createElement(
	          'div',
	          { style: styles.controlTitle },
	          name
	        ),
	        React.createElement('input', { type: 'range', min: min, max: max, style: styles.controlRange,
	          value: value,
	          onChange: function (event) {
	            return onChange(event);
	          } }),
	        React.createElement(
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
	})(Component);
	
	exports['default'] = RangeControl;
	;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2Nyb2xsLXNwcmluZy1hbmltYXRpb24vc3ByaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYm91bmQvcmVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9yYW5nZS1jb250cm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsS0FBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQztLQUN4QixTQUFTLEdBQUksS0FBSyxDQUFsQixTQUFTOztnQkFDQyxtQkFBTyxDQUFDLEdBQVcsQ0FBQzs7S0FBOUIsTUFBTSxZQUFOLE1BQU07O0FBQ2IsS0FBTSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFVLENBQUMsQ0FBQztBQUNuQyxLQUFNLFlBQVksR0FBRyxtQkFBTyxDQUFDLEdBQWlCLENBQUMsQ0FBQzs7QUFFaEQsS0FBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOzJCQUFvQixDQUFDLFlBQU8sQ0FBQyxZQUFPLENBQUM7RUFBSyxDQUFDOztBQUVyRSxLQUFNLE1BQU0sR0FBRztBQUNiLFFBQUssRUFBRSxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUM7QUFDOUIsb0JBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLHdEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSxtREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFD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c291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdDtcbmNvbnN0IHtTcHJpbmd9ID0gcmVxdWlyZSgnLi9zcHJpbmdzJyk7XG5jb25zdCBTY3JvbGwgPSByZXF1aXJlKCcuL3Njcm9sbCcpO1xuY29uc3QgUmFuZ2VDb250cm9sID0gcmVxdWlyZSgnLi9yYW5nZS1jb250cm9sJyk7XG5cbmNvbnN0IHRyYW5zbGF0ZTNkID0gKHgseSx6KSA9PiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiB7bWFyZ2luQm90dG9tOiAnMTAwcHgnfSxcbiAgcGFyYWxsYXhDb250YWluZXI6IHsgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICBwYXJhbGxheFRpdGxlOiB7IHpJbmRleDogMTAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MHB4JywgbGVmdDogJzUwcHgnLCBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJzAgMTBweCA0MHB4IGJsYWNrJyxmb250U2l6ZTogJzEwMHB4JywgZm9udFdlaWdodDogMTAwMCB9LFxuICBwYXJhbGxheEltYWdlOiB7IHpJbmRleDogMSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfSxcbiAgY29udHJvbDoge2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwYWRkaW5nOiAnMCAyMHB4J31cbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZyaWN0aW9uOiAxNSwgdGVuc2lvbjogMTgwIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PlNjcm9sbCBhbmQgU3ByaW5nIEFuaW1hdGlvbiBEZW1vPC9oMT5cblxuICAgICAgPFJhbmdlQ29udHJvbCBuYW1lPVwidGVuc2lvblwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjFcIiBtYXg9XCIyMDBcIiBzdHlsZT17c3R5bGVzLmNvbnRyb2x9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbnNpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdGVuc2lvbjogfn5ldmVudC50YXJnZXQudmFsdWUgfSl9Lz5cblxuICAgICAgPFJhbmdlQ29udHJvbCBuYW1lPVwiZnJpY3Rpb25cIiBtaW49XCIxXCIgbWF4PVwiMzBcIiBzdHlsZT17c3R5bGVzLmNvbnRyb2x9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZyaWN0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyaWN0aW9uOiB+fmV2ZW50LnRhcmdldC52YWx1ZSB9KX0vPlxuXG4gICAgICA8U2Nyb2xsPnsgc2Nyb2xsVG9wID0+XG4gICAgICAgIDxTcHJpbmcgdG89e3Njcm9sbFRvcH0gZnJpY3Rpb249e3RoaXMuc3RhdGUuZnJpY3Rpb259IHRlbnNpb249e3RoaXMuc3RhdGUudGVuc2lvbn0+eyBvZmZzZXRZID0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBhcmFsbGF4Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLnBhcmFsbGF4VGl0bGV9PlxuICAgICAgICAgICAgICBNdXNpYyBpcyDinaRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImJnLmpwZ1wiIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uc3R5bGVzLnBhcmFsbGF4SW1hZ2UsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC1vZmZzZXRZLzItNTAsMCkgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfTwvU3ByaW5nPlxuICAgICAgfTwvU2Nyb2xsPlxuXG4gICAgICA8ZGl2PjxhIGhyZWY9XCJodHRwczovL3d3dy5mbGlja3IuY29tL3Bob3Rvcy91YmV5ZC8xOTE1Mjg0ODY2OS9pbi9wb29sLTgzODIzODU5QE4wMC9cIj5cbiAgICAgICAgaW1hZ2UgYnkgVWJleWQ8L2E+PC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59O1xuXG5SZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL2FwcC5qc1xuICoqLyIsIi8vIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhyZWVwb2ludG9uZS9yZWFjdC1zcHJpbmdzL21hc3Rlci9zcmMuanNcbi8vIGJlY2F1c2UgcmVhY3QtbmF0aXZlIHN1cHBvcnQgYnJlYWtzIHRoZSBidWlsZCBwcm9jZXNzXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB0cnl7IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QtbmF0aXZlJyk7IH1cbi8vIGNhdGNoKGUpeyBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7IH1cbi8vIHRoZSBhYm92ZSBiaXQgc2hvdWxkIGdldCBiZXR0ZXIgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjIwXG5cbi8vIHNwcmluZ3MsIGFsbCB0aGF0XG5pbXBvcnQgcmVib3VuZCBmcm9tICdyZWJvdW5kJztcblxubGV0IG5vb3AgPSAoKSA9PiB7fTsgLy8gZGVmYXVsdCBvblNwcmluZ1VwZGF0ZVxuXG5leHBvcnQgY29uc3QgU3ByaW5nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXREZWZhdWx0UHJvcHMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gd2UgdXNlIGEgY29tbW9uICdnbG9iYWwnIHNwcmluZ1N5c3RlbSBmb3IgcGVyZiwgYnV0IHlvdSBjYW4gcGFzcyBpbiB5b3VyIG93blxuICAgICAgc3ByaW5nU3lzdGVtOiBuZXcgcmVib3VuZC5TcHJpbmdTeXN0ZW0oKSxcblxuICAgICAgLy8gZnJvbSBhbmQgdG8gYXJlIGFuYWxvZ291cyB0byBzZXRDdXJyZW50VmFsdWUoKSBhbmQgc2V0RW5kVmFsdWUoKVxuICAgICAgZnJvbTogMCxcbiAgICAgIHRvOiAwLFxuXG4gICAgICAvLyBtb3JlIHJlYm91bmQgb3B0aW9uc1xuICAgICAgdGVuc2lvbjogNTAsXG4gICAgICBmcmljdGlvbjogMyxcbiAgICAgIG92ZXJTaG9vdENsYW1waW5nOiBmYWxzZSxcbiAgICAgIGF0UmVzdDogZmFsc2UsXG4gICAgICBvblNwcmluZ1VwZGF0ZTogbm9vcCxcbiAgICAgIG9uU3ByaW5nOiBub29wLFxuICAgICAgY2hpbGRyZW46ICgpID0+IG51bGxcblxuICAgICAgLy8gdG9kbyAtIHZlbG9jaXR5P1xuICAgIH07XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZnJvbTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBmcmljdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICB0ZW5zaW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGF0UmVzdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb3ZlclNob290Q2xhbXBpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNwcmluZ1VwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TcHJpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgc3RhdGljczoge1xuICAgIC8vIGhpZ2ggcGVyZiBcInNldHRlcnNcIixcbiAgICBmcmljdGlvbihzcHJpbmcsIHByb3BzKXtcbiAgICAgIHNwcmluZy5nZXRTcHJpbmdDb25maWcoKS5mcmljdGlvbiA9XG4gICAgICAgIHJlYm91bmQuT3JpZ2FtaVZhbHVlQ29udmVydGVyLmZyaWN0aW9uRnJvbU9yaWdhbWlWYWx1ZShwcm9wcy5mcmljdGlvbik7XG4gICAgfSxcbiAgICB0ZW5zaW9uKHNwcmluZywgcHJvcHMpe1xuICAgICAgc3ByaW5nLmdldFNwcmluZ0NvbmZpZygpLnRlbnNpb24gPVxuICAgICAgICByZWJvdW5kLk9yaWdhbWlWYWx1ZUNvbnZlcnRlci5mcmljdGlvbkZyb21PcmlnYW1pVmFsdWUocHJvcHMudGVuc2lvbik7XG4gICAgfSxcbiAgICBmcm9tKHNwcmluZywgcHJvcHMpe1xuICAgICAgc3ByaW5nLnNldEN1cnJlbnRWYWx1ZShwcm9wcy5mcm9tLCB0cnVlKS5zZXRFbmRWYWx1ZShzcHJpbmcuZ2V0RW5kVmFsdWUoKSk7XG4gICAgfSxcbiAgICBvdmVyU2hvb3RDbGFtcGluZyhzcHJpbmcsIHByb3BzKXtcbiAgICAgIHNwcmluZy5zZXRPdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQocHJvcHMub3ZlclNob290Q2xhbXBpbmcpO1xuICAgIH0sXG4gICAgdG8oc3ByaW5nLCBwcm9wcyl7XG4gICAgICBpZihwcm9wcy5hdFJlc3Qpe1xuICAgICAgICBzcHJpbmcuc2V0Q3VycmVudFZhbHVlKHByb3BzLnRvKS5zZXRBdFJlc3QoKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNwcmluZy5zZXRFbmRWYWx1ZShwcm9wcy50byk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFjY2VwdChwcm9wcywgaW5pdGlhbCl7XG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goayA9PiB7XG4gICAgICBpZihTcHJpbmdba10gJiYgKGluaXRpYWwgfHwgKHByb3BzW2tdICE9PSB0aGlzLnByb3BzW2tdKSkpe1xuICAgICAgICBTcHJpbmdba10odGhpcy5zcHJpbmcsIHByb3BzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBjb21wb25lbnRzIHdpdGggJ3JlbmRlciBjYWxsYmFja3MnIGNhbi9zaG91bGQgcmVuZGVyICd0aHJvdWdoJy5cbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmZyb21cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyBjcmVhdGUgdGhlIHNwcmluZyBvbiBtb3VudGluZy5cbiAgICB0aGlzLnNwcmluZyA9IHRoaXMucHJvcHMuc3ByaW5nU3lzdGVtLmNyZWF0ZVNwcmluZyh0aGlzLnByb3BzLnRlbnNpb24sIHRoaXMucHJvcHMuZnJpY3Rpb24pLmFkZExpc3RlbmVyKHtcbiAgICAgIG9uU3ByaW5nVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5zcHJpbmcuZ2V0Q3VycmVudFZhbHVlKCkgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25TcHJpbmdVcGRhdGUodGhpcy5zcHJpbmcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25TcHJpbmcodGhpcy5zcHJpbmcpO1xuICAgIHRoaXMuYWNjZXB0KHRoaXMucHJvcHMsIHRydWUpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5hY2NlcHQobmV4dFByb3BzLCBmYWxzZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gLi4uYW5kIGRlc3Ryb3kgb24gb25tb3VudGluZ1xuICAgIHRoaXMuc3ByaW5nLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5zcHJpbmc7XG4gICAgdGhpcy5wcm9wcy5vblNwcmluZyh1bmRlZmluZWQpO1xuICB9LFxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFNwcmluZ3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldERlZmF1bHRQcm9wcygpe1xuICAgIHJldHVybiB7XG4gICAgICBvblNwcmluZ1VwZGF0ZTogbm9vcCxcbiAgICAgIG9uU3ByaW5nOiBub29wLFxuICAgICAgY2hpbGRyZW46ICgpID0+IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3ByaW5nVXBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNwcmluZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgLy8gbGlrZSBhYm92ZVxuICB9LFxuICBvblNwcmluZ1VwZGF0ZShrZXksIHNwcmluZyl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBba2V5XTogc3ByaW5nLmdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vblNwcmluZ1VwZGF0ZShrZXksIHNwcmluZyk7XG4gIH0sXG5cbiAgdG8ocG9zLCBrZXlzLCBpbmRleCwgdmFsdWUpe1xuICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih2YWx1ZSk7XG4gICAgfVxuICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICByZXR1cm4gPFNwcmluZyB7Li4udGhpcy5wcm9wc30ga2V5PXtrZXl9IHRvPXtwb3Nba2V5XX0gb25TcHJpbmc9e3NwcmluZyA9PiB0aGlzLnByb3BzLm9uU3ByaW5nKGtleSwgc3ByaW5nKX0gb25TcHJpbmdVcGRhdGU9e3NwcmluZyA9PiB0aGlzLm9uU3ByaW5nVXBkYXRlKGtleSwgc3ByaW5nKX0+XG4gICAgICB7dmFsID0+IHRoaXMudG8ocG9zLCBrZXlzLCBpbmRleCAtIDEsICh2YWx1ZVtrZXldID0gdmFsLCB2YWx1ZSkpfVxuICAgIDwvU3ByaW5nPjtcbiAgfSxcblxuICAvLyB0b2RvIC0gc29ydCBrZXlzIGFscGhhYmV0aWNhbGx5P1xuICByZW5kZXIoKSB7XG4gICAgLy8gd2hhdCB3ZSBkbyBoZXJlLCBpcyBicmVhayBgdG9gIGludG8ga2V5IHZhbHVlIHBhaXJzLCBhbmQgdGhlbiByZXR1cm4gYSBuZXN0IG9mIDxTcHJpbmc+c1xuICAgIC8vIFJlYWN0IHRha2VzIGNhcmUgb2YgdGhlIGJvcmluZyBiaXRzIChjYWNoaW5nLCBzdGF0ZSwgZXRjKVxuICAgIGxldCB7dG99ID0gdGhpcy5wcm9wcywga2V5cyA9IE9iamVjdC5rZXlzKHRvKTtcbiAgICByZXR1cm4gdGhpcy50byh0bywga2V5cywga2V5cy5sZW5ndGggLSAxLCB7fSk7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9zcHJpbmdzLmpzXG4gKiovIiwiLy8gUmVib3VuZFxuLy8gPT09PT09PVxuLy8gKipSZWJvdW5kKiogaXMgYSBzaW1wbGUgbGlicmFyeSB0aGF0IG1vZGVscyBTcHJpbmcgZHluYW1pY3MgZm9yIHRoZVxuLy8gcHVycG9zZSBvZiBkcml2aW5nIHBoeXNpY2FsIGFuaW1hdGlvbnMuXG4vL1xuLy8gT3JpZ2luXG4vLyAtLS0tLS1cbi8vIFtSZWJvdW5kXShodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYm91bmQpIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW5cbi8vIGluIEphdmEgdG8gcHJvdmlkZSBhIGxpZ2h0d2VpZ2h0IHBoeXNpY3Mgc3lzdGVtIGZvclxuLy8gW0hvbWVdKGh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZmFjZWJvb2suaG9tZSkgYW5kXG4vLyBbQ2hhdCBIZWFkc10oaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5mYWNlYm9vay5vcmNhKVxuLy8gb24gQW5kcm9pZC4gSXQncyBub3cgYmVlbiBhZG9wdGVkIGJ5IHNldmVyYWwgb3RoZXIgQW5kcm9pZFxuLy8gYXBwbGljYXRpb25zLiBUaGlzIEphdmFTY3JpcHQgcG9ydCB3YXMgd3JpdHRlbiB0byBwcm92aWRlIGEgcXVpY2tcbi8vIHdheSB0byBkZW1vbnN0cmF0ZSBSZWJvdW5kIGFuaW1hdGlvbnMgb24gdGhlIHdlYiBmb3IgYVxuLy8gW2NvbmZlcmVuY2UgdGFsa10oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1zNWtObS1EZ3lqWSkuIFNpbmNlIHRoZW5cbi8vIHRoZSBKYXZhU2NyaXB0IHZlcnNpb24gaGFzIGJlZW4gdXNlZCB0byBidWlsZCBzb21lIHJlYWxseSBuaWNlIGludGVyZmFjZXMuXG4vLyBDaGVjayBvdXQgW2JyYW5kb253YWxraW4uY29tXShodHRwOi8vYnJhbmRvbndhbGtpbi5jb20pIGZvciBhblxuLy8gZXhhbXBsZS5cbi8vXG4vLyBPdmVydmlld1xuLy8gLS0tLS0tLS1cbi8vIFRoZSBMaWJyYXJ5IHByb3ZpZGVzIGEgU3ByaW5nU3lzdGVtIGZvciBtYWludGFpbmluZyBhIHNldCBvZiBTcHJpbmdcbi8vIG9iamVjdHMgYW5kIGl0ZXJhdGluZyB0aG9zZSBTcHJpbmdzIHRocm91Z2ggYSBwaHlzaWNzIHNvbHZlciBsb29wXG4vLyB1bnRpbCBlcXVpbGlicml1bSBpcyBhY2hpZXZlZC4gVGhlIFNwcmluZyBjbGFzcyBpcyB0aGUgYmFzaWNcbi8vIGFuaW1hdGlvbiBkcml2ZXIgcHJvdmlkZWQgYnkgUmVib3VuZC4gQnkgYXR0YWNoaW5nIGEgbGlzdGVuZXIgdG9cbi8vIGEgU3ByaW5nLCB5b3UgY2FuIG9ic2VydmUgaXRzIG1vdGlvbi4gVGhlIG9ic2VydmVyIGZ1bmN0aW9uIGlzXG4vLyBub3RpZmllZCBvZiBwb3NpdGlvbiBjaGFuZ2VzIG9uIHRoZSBzcHJpbmcgYXMgaXQgc29sdmVzIGZvclxuLy8gZXF1aWxpYnJpdW0uIFRoZXNlIHBvc2l0aW9uIHVwZGF0ZXMgY2FuIGJlIG1hcHBlZCB0byBhbiBhbmltYXRpb25cbi8vIHJhbmdlIHRvIGRyaXZlIGFuaW1hdGVkIHByb3BlcnR5IHVwZGF0ZXMgb24geW91ciB1c2VyIGludGVyZmFjZVxuLy8gZWxlbWVudHMgKHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUsIGV0YykuXG4vL1xuLy8gRXhhbXBsZVxuLy8gLS0tLS0tLVxuLy8gSGVyZSdzIGEgc2ltcGxlIGV4YW1wbGUuIFByZXNzaW5nIGFuZCByZWxlYXNpbmcgb24gdGhlIGxvZ28gYmVsb3dcbi8vIHdpbGwgY2F1c2UgaXQgdG8gc2NhbGUgdXAgYW5kIGRvd24gd2l0aCBhIHNwcmluZ3kgYW5pbWF0aW9uLlxuLy9cbi8vIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo1MHB4OyBtYXJnaW4tdG9wOjUwcHhcIj5cbi8vICAgPGltZ1xuLy8gICAgIHNyYz1cImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVib3VuZC9pbWFnZXMvcmVib3VuZC5wbmdcIlxuLy8gICAgIGlkPVwibG9nb1wiXG4vLyAgIC8+XG4vLyA8L2Rpdj5cbi8vIDxzY3JpcHQgc3JjPVwiLi4vcmVib3VuZC5taW4uanNcIj48L3NjcmlwdD5cbi8vIDxzY3JpcHQ+XG4vL1xuLy8gZnVuY3Rpb24gc2NhbGUoZWwsIHZhbCkge1xuLy8gICBlbC5zdHlsZS5tb3pUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS5tc1RyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKCcgKyB2YWwgKyAnLCAnICsgdmFsICsgJywgMSknO1xuLy8gfVxuLy8gdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbi8vXG4vLyB2YXIgc3ByaW5nU3lzdGVtID0gbmV3IHJlYm91bmQuU3ByaW5nU3lzdGVtKCk7XG4vLyB2YXIgc3ByaW5nID0gc3ByaW5nU3lzdGVtLmNyZWF0ZVNwcmluZyg1MCwgMyk7XG4vLyBzcHJpbmcuYWRkTGlzdGVuZXIoe1xuLy8gICBvblNwcmluZ1VwZGF0ZTogZnVuY3Rpb24oc3ByaW5nKSB7XG4vLyAgICAgdmFyIHZhbCA9IHNwcmluZy5nZXRDdXJyZW50VmFsdWUoKTtcbi8vICAgICB2YWwgPSByZWJvdW5kLk1hdGhVdGlsLm1hcFZhbHVlSW5SYW5nZSh2YWwsIDAsIDEsIDEsIDAuNSk7XG4vLyAgICAgc2NhbGUoZWwsIHZhbCk7XG4vLyAgIH1cbi8vIH0pO1xuLy9cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMSk7XG4vLyB9KTtcbi8vXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMCk7XG4vLyB9KTtcbi8vXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgwKTtcbi8vIH0pO1xuLy9cbi8vIDwvc2NyaXB0PlxuLy9cbi8vIEhlcmUncyBob3cgaXQgd29ya3MuXG4vL1xuLy8gYGBgXG4vLyAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGxvZ28gZWxlbWVudC5cbi8vIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4vL1xuLy8gLy8gY3JlYXRlIGEgU3ByaW5nU3lzdGVtIGFuZCBhIFNwcmluZyB3aXRoIGEgYm91bmN5IGNvbmZpZy5cbi8vIHZhciBzcHJpbmdTeXN0ZW0gPSBuZXcgcmVib3VuZC5TcHJpbmdTeXN0ZW0oKTtcbi8vIHZhciBzcHJpbmcgPSBzcHJpbmdTeXN0ZW0uY3JlYXRlU3ByaW5nKDUwLCAzKTtcbi8vXG4vLyAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgc3ByaW5nLiBFdmVyeSB0aW1lIHRoZSBwaHlzaWNzXG4vLyAvLyBzb2x2ZXIgdXBkYXRlcyB0aGUgU3ByaW5nJ3MgdmFsdWUgb25TcHJpbmdVcGRhdGUgd2lsbFxuLy8gLy8gYmUgY2FsbGVkLlxuLy8gc3ByaW5nLmFkZExpc3RlbmVyKHtcbi8vICAgb25TcHJpbmdVcGRhdGU6IGZ1bmN0aW9uKHNwcmluZykge1xuLy8gICAgIHZhciB2YWwgPSBzcHJpbmcuZ2V0Q3VycmVudFZhbHVlKCk7XG4vLyAgICAgdmFsID0gcmVib3VuZC5NYXRoVXRpbFxuLy8gICAgICAgICAgICAgICAgICAubWFwVmFsdWVJblJhbmdlKHZhbCwgMCwgMSwgMSwgMC41KTtcbi8vICAgICBzY2FsZShlbCwgdmFsKTtcbi8vICAgfVxuLy8gfSk7XG4vL1xuLy8gLy8gTGlzdGVuIGZvciBtb3VzZSBkb3duL3VwL291dCBhbmQgdG9nZ2xlIHRoZVxuLy8gLy9zcHJpbmdzIGVuZFZhbHVlIGZyb20gMCB0byAxLlxuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgxKTtcbi8vIH0pO1xuLy9cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgwKTtcbi8vIH0pO1xuLy9cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDApO1xuLy8gfSk7XG4vL1xuLy8gLy8gSGVscGVyIGZvciBzY2FsaW5nIGFuIGVsZW1lbnQgd2l0aCBjc3MgdHJhbnNmb3Jtcy5cbi8vIGZ1bmN0aW9uIHNjYWxlKGVsLCB2YWwpIHtcbi8vICAgZWwuc3R5bGUubW96VHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUubXNUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUzZCgnICtcbi8vICAgICB2YWwgKyAnLCAnICsgdmFsICsgJywgMSknO1xuLy8gfVxuLy8gYGBgXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIHJlYm91bmQgPSB7fTtcbiAgdmFyIHV0aWwgPSByZWJvdW5kLnV0aWwgPSB7fTtcbiAgdmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAvLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0IG9iamVjdC5cbiAgdXRpbC5iaW5kID0gZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBjb25jYXQuY2FsbChhcmdzLCBzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNvdXJjZSB0byB0aGUgdGFyZ2V0LlxuICB1dGlsLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBTcHJpbmdTeXN0ZW1cbiAgLy8gLS0tLS0tLS0tLS0tXG4gIC8vICoqU3ByaW5nU3lzdGVtKiogaXMgYSBzZXQgb2YgU3ByaW5ncyB0aGF0IGFsbCBydW4gb24gdGhlIHNhbWUgcGh5c2ljc1xuICAvLyB0aW1pbmcgbG9vcC4gVG8gZ2V0IHN0YXJ0ZWQgd2l0aCBhIFJlYm91bmQgYW5pbWF0aW9uIHlvdSBmaXJzdFxuICAvLyBjcmVhdGUgYSBuZXcgU3ByaW5nU3lzdGVtIGFuZCB0aGVuIGFkZCBzcHJpbmdzIHRvIGl0LlxuICB2YXIgU3ByaW5nU3lzdGVtID0gcmVib3VuZC5TcHJpbmdTeXN0ZW0gPSBmdW5jdGlvbiBTcHJpbmdTeXN0ZW0obG9vcGVyKSB7XG4gICAgdGhpcy5fc3ByaW5nUmVnaXN0cnkgPSB7fTtcbiAgICB0aGlzLl9hY3RpdmVTcHJpbmdzID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcyA9IFtdO1xuICAgIHRoaXMubG9vcGVyID0gbG9vcGVyIHx8IG5ldyBBbmltYXRpb25Mb29wZXIoKTtcbiAgICB0aGlzLmxvb3Blci5zcHJpbmdTeXN0ZW0gPSB0aGlzO1xuICB9O1xuXG4gIHV0aWwuZXh0ZW5kKFNwcmluZ1N5c3RlbS5wcm90b3R5cGUsIHtcblxuICAgIF9zcHJpbmdSZWdpc3RyeTogbnVsbCxcblxuICAgIF9pc0lkbGU6IHRydWUsXG5cbiAgICBfbGFzdFRpbWVNaWxsaXM6IC0xLFxuXG4gICAgX2FjdGl2ZVNwcmluZ3M6IG51bGwsXG5cbiAgICBsaXN0ZW5lcnM6IG51bGwsXG5cbiAgICBfaWRsZVNwcmluZ0luZGljZXM6IG51bGwsXG5cbiAgICAvLyBBIFNwcmluZ1N5c3RlbSBpcyBpdGVyYXRlZCBieSBhIGxvb3Blci4gVGhlIGxvb3BlciBpcyByZXNwb25zaWJsZVxuICAgIC8vIGZvciBleGVjdXRpbmcgZWFjaCBmcmFtZSBhcyB0aGUgU3ByaW5nU3lzdGVtIGlzIHJlc29sdmVkIHRvIGlkbGUuXG4gICAgLy8gVGhlcmUgYXJlIHRocmVlIHR5cGVzIG9mIExvb3BlcnMgZGVzY3JpYmVkIGJlbG93IEFuaW1hdGlvbkxvb3BlcixcbiAgICAvLyBTaW11bGF0aW9uTG9vcGVyLCBhbmQgU3RlcHBpbmdTaW11bGF0aW9uTG9vcGVyLiBBbmltYXRpb25Mb29wZXIgaXNcbiAgICAvLyB0aGUgZGVmYXVsdCBhcyBpdCBpcyB0aGUgbW9zdCB1c2VmdWwgZm9yIGNvbW1vbiBVSSBhbmltYXRpb25zLlxuICAgIHNldExvb3BlcjogZnVuY3Rpb24obG9vcGVyKSB7XG4gICAgICB0aGlzLmxvb3BlciA9IGxvb3BlcjtcbiAgICAgIGxvb3Blci5zcHJpbmdTeXN0ZW0gPSB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBuZXcgc3ByaW5nIHRvIHRoaXMgU3ByaW5nU3lzdGVtLiBUaGlzIFNwcmluZyB3aWxsIG5vdyBiZSBzb2x2ZWQgZm9yXG4gICAgLy8gZHVyaW5nIHRoZSBwaHlzaWNzIGl0ZXJhdGlvbiBsb29wLiBCeSBkZWZhdWx0IHRoZSBzcHJpbmcgd2lsbCB1c2UgdGhlXG4gICAgLy8gZGVmYXVsdCBPcmlnYW1pIHNwcmluZyBjb25maWcgd2l0aCA0MCB0ZW5zaW9uIGFuZCA3IGZyaWN0aW9uLCBidXQgeW91IGNhblxuICAgIC8vIGFsc28gcHJvdmlkZSB5b3VyIG93biB2YWx1ZXMgaGVyZS5cbiAgICBjcmVhdGVTcHJpbmc6IGZ1bmN0aW9uKHRlbnNpb24sIGZyaWN0aW9uKSB7XG4gICAgICB2YXIgc3ByaW5nQ29uZmlnO1xuICAgICAgaWYgKHRlbnNpb24gPT09IHVuZGVmaW5lZCB8fCBmcmljdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNwcmluZ0NvbmZpZyA9IFNwcmluZ0NvbmZpZy5ERUZBVUxUX09SSUdBTUlfU1BSSU5HX0NPTkZJRztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwcmluZ0NvbmZpZyA9XG4gICAgICAgICAgU3ByaW5nQ29uZmlnLmZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uKHRlbnNpb24sIGZyaWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNwcmluZ1dpdGhDb25maWcoc3ByaW5nQ29uZmlnKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkIGEgc3ByaW5nIHdpdGggYSBzcGVjaWZpZWQgYm91bmNpbmVzcyBhbmQgc3BlZWQuIFRvIHJlcGxpY2F0ZSBPcmlnYW1pXG4gICAgLy8gY29tcG9zaXRpb25zIGJhc2VkIG9uIFBvcEFuaW1hdGlvbiBwYXRjaGVzLCB1c2UgdGhpcyBmYWN0b3J5IG1ldGhvZCB0b1xuICAgIC8vIGNyZWF0ZSBtYXRjaGluZyBzcHJpbmdzLlxuICAgIGNyZWF0ZVNwcmluZ1dpdGhCb3VuY2luZXNzQW5kU3BlZWQ6IGZ1bmN0aW9uKGJvdW5jaW5lc3MsIHNwZWVkKSB7XG4gICAgICB2YXIgc3ByaW5nQ29uZmlnO1xuICAgICAgaWYgKGJvdW5jaW5lc3MgPT09IHVuZGVmaW5lZCB8fCBzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNwcmluZ0NvbmZpZyA9IFNwcmluZ0NvbmZpZy5ERUZBVUxUX09SSUdBTUlfU1BSSU5HX0NPTkZJRztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwcmluZ0NvbmZpZyA9XG4gICAgICAgICAgU3ByaW5nQ29uZmlnLmZyb21Cb3VuY2luZXNzQW5kU3BlZWQoYm91bmNpbmVzcywgc3BlZWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ByaW5nV2l0aENvbmZpZyhzcHJpbmdDb25maWcpO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBzcHJpbmcgd2l0aCB0aGUgcHJvdmlkZWQgU3ByaW5nQ29uZmlnLlxuICAgIGNyZWF0ZVNwcmluZ1dpdGhDb25maWc6IGZ1bmN0aW9uKHNwcmluZ0NvbmZpZykge1xuICAgICAgdmFyIHNwcmluZyA9IG5ldyBTcHJpbmcodGhpcyk7XG4gICAgICB0aGlzLnJlZ2lzdGVyU3ByaW5nKHNwcmluZyk7XG4gICAgICBzcHJpbmcuc2V0U3ByaW5nQ29uZmlnKHNwcmluZ0NvbmZpZyk7XG4gICAgICByZXR1cm4gc3ByaW5nO1xuICAgIH0sXG5cbiAgICAvLyBZb3UgY2FuIGNoZWNrIGlmIGEgU3ByaW5nU3lzdGVtIGlzIGlkbGUgb3IgYWN0aXZlIGJ5IGNhbGxpbmdcbiAgICAvLyBnZXRJc0lkbGUuIElmIGFsbCBvZiB0aGUgU3ByaW5ncyBpbiB0aGUgU3ByaW5nU3lzdGVtIGFyZSBhdCByZXN0LFxuICAgIC8vIGkuZS4gdGhlIHBoeXNpY3MgZm9yY2VzIGhhdmUgcmVhY2hlZCBlcXVpbGlicml1bSwgdGhlbiB0aGlzXG4gICAgLy8gbWV0aG9kIHdpbGwgcmV0dXJuIHRydWUuXG4gICAgZ2V0SXNJZGxlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0lkbGU7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIGEgc3BlY2lmaWMgU3ByaW5nIGZyb20gdGhlIFNwcmluZ1N5c3RlbSBieSBpZC4gVGhpc1xuICAgIC8vIGNhbiBiZSB1c2VmdWwgZm9yIGluc3BlY3RpbmcgdGhlIHN0YXRlIG9mIGEgc3ByaW5nIGJlZm9yZVxuICAgIC8vIG9yIGFmdGVyIGFuIGludGVncmF0aW9uIGxvb3AgaW4gdGhlIFNwcmluZ1N5c3RlbSBleGVjdXRlcy5cbiAgICBnZXRTcHJpbmdCeUlkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcHJpbmdSZWdpc3RyeVtpZF07XG4gICAgfSxcblxuICAgIC8vIEdldCBhIGxpc3Rpbmcgb2YgYWxsIHRoZSBzcHJpbmdzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzXG4gICAgLy8gU3ByaW5nU3lzdGVtLlxuICAgIGdldEFsbFNwcmluZ3M6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHMgPSBbXTtcbiAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuX3NwcmluZ1JlZ2lzdHJ5KSB7XG4gICAgICAgIGlmICh0aGlzLl9zcHJpbmdSZWdpc3RyeS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICB2YWxzLnB1c2godGhpcy5fc3ByaW5nUmVnaXN0cnlbaWRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfSxcblxuICAgIC8vIHJlZ2lzdGVyU3ByaW5nIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IGFzIHNvb24gYXMgeW91IGNyZWF0ZVxuICAgIC8vIGEgU3ByaW5nIHdpdGggU3ByaW5nU3lzdGVtI2NyZWF0ZVNwcmluZy4gVGhpcyBtZXRob2Qgc2V0cyB0aGVcbiAgICAvLyBzcHJpbmcgdXAgaW4gdGhlIHJlZ2lzdHJ5IHNvIHRoYXQgaXQgY2FuIGJlIHNvbHZlZCBpbiB0aGVcbiAgICAvLyBzb2x2ZXIgbG9vcC5cbiAgICByZWdpc3RlclNwcmluZzogZnVuY3Rpb24oc3ByaW5nKSB7XG4gICAgICB0aGlzLl9zcHJpbmdSZWdpc3RyeVtzcHJpbmcuZ2V0SWQoKV0gPSBzcHJpbmc7XG4gICAgfSxcblxuICAgIC8vIERlcmVnaXN0ZXIgYSBzcHJpbmcgd2l0aCB0aGlzIFNwcmluZ1N5c3RlbS4gVGhlIFNwcmluZ1N5c3RlbSB3aWxsXG4gICAgLy8gbm8gbG9uZ2VyIGNvbnNpZGVyIHRoaXMgU3ByaW5nIGR1cmluZyBpdHMgaW50ZWdyYXRpb24gbG9vcCBvbmNlXG4gICAgLy8gdGhpcyBpcyBjYWxsZWQuIFRoaXMgaXMgbm9ybWFsbHkgZG9uZSBhdXRvbWF0aWNhbGx5IGZvciB5b3Ugd2hlblxuICAgIC8vIHlvdSBjYWxsIFNwcmluZyNkZXN0cm95LlxuICAgIGRlcmVnaXN0ZXJTcHJpbmc6IGZ1bmN0aW9uKHNwcmluZykge1xuICAgICAgcmVtb3ZlRmlyc3QodGhpcy5fYWN0aXZlU3ByaW5ncywgc3ByaW5nKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpbmdSZWdpc3RyeVtzcHJpbmcuZ2V0SWQoKV07XG4gICAgfSxcblxuICAgIGFkdmFuY2U6IGZ1bmN0aW9uKHRpbWUsIGRlbHRhVGltZSkge1xuICAgICAgd2hpbGUodGhpcy5faWRsZVNwcmluZ0luZGljZXMubGVuZ3RoID4gMCkgdGhpcy5faWRsZVNwcmluZ0luZGljZXMucG9wKCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fYWN0aXZlU3ByaW5ncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3ByaW5nID0gdGhpcy5fYWN0aXZlU3ByaW5nc1tpXTtcbiAgICAgICAgaWYgKHNwcmluZy5zeXN0ZW1TaG91bGRBZHZhbmNlKCkpIHtcbiAgICAgICAgICBzcHJpbmcuYWR2YW5jZSh0aW1lIC8gMTAwMC4wLCBkZWx0YVRpbWUgLyAxMDAwLjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzLnB1c2godGhpcy5fYWN0aXZlU3ByaW5ncy5pbmRleE9mKHNwcmluZykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZSh0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcy5wb3AoKTtcbiAgICAgICAgaWR4ID49IDAgJiYgdGhpcy5fYWN0aXZlU3ByaW5ncy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVGhpcyBpcyBvdXIgbWFpbiBzb2x2ZXIgbG9vcCBjYWxsZWQgdG8gbW92ZSB0aGUgc2ltdWxhdGlvblxuICAgIC8vIGZvcndhcmQgdGhyb3VnaCB0aW1lLiBCZWZvcmUgZWFjaCBwYXNzIGluIHRoZSBzb2x2ZXIgbG9vcFxuICAgIC8vIG9uQmVmb3JlSW50ZWdyYXRlIGlzIGNhbGxlZCBvbiBhbiBhbnkgbGlzdGVuZXJzIHRoYXQgaGF2ZVxuICAgIC8vIHJlZ2lzdGVyZWQgdGhlbWVzZWx2ZXMgd2l0aCB0aGUgU3ByaW5nU3lzdGVtLiBUaGlzIGdpdmVzIHlvdVxuICAgIC8vIGFuIG9wcG9ydHVuaXR5IHRvIGFwcGx5IGFueSBjb25zdHJhaW50cyBvciBhZGp1c3RtZW50cyB0b1xuICAgIC8vIHRoZSBzcHJpbmdzIHRoYXQgc2hvdWxkIGJlIGVuZm9yY2VkIGJlZm9yZSBlYWNoIGl0ZXJhdGlvblxuICAgIC8vIGxvb3AuIE5leHQgdGhlIGFkdmFuY2UgbWV0aG9kIGlzIGNhbGxlZCB0byBtb3ZlIGVhY2ggU3ByaW5nIGluXG4gICAgLy8gdGhlIHN5c3RlbVNob3VsZEFkdmFuY2UgZm9yd2FyZCB0byB0aGUgY3VycmVudCB0aW1lLiBBZnRlciB0aGVcbiAgICAvLyBpbnRlZ3JhdGlvbiBzdGVwIHJ1bnMgaW4gYWR2YW5jZSwgb25BZnRlckludGVncmF0ZSBpcyBjYWxsZWRcbiAgICAvLyBvbiBhbnkgbGlzdGVuZXJzIHRoYXQgaGF2ZSByZWdpc3RlcmVkIHRoZW1zZWx2ZXMgd2l0aCB0aGVcbiAgICAvLyBTcHJpbmdTeXN0ZW0uIFRoaXMgZ2l2ZXMgeW91IGFuIG9wcG9ydHVuaXR5IHRvIHJ1biBhbnkgcG9zdFxuICAgIC8vIGludGVncmF0aW9uIGNvbnN0cmFpbnRzIG9yIGFkanVzdG1lbnRzIG9uIHRoZSBTcHJpbmdzIGluIHRoZVxuICAgIC8vIFNwcmluZ1N5c3RlbS5cbiAgICBsb29wOiBmdW5jdGlvbihjdXJyZW50VGltZU1pbGxpcykge1xuICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgaWYgKHRoaXMuX2xhc3RUaW1lTWlsbGlzID09PSAtMSkge1xuICAgICAgICB0aGlzLl9sYXN0VGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0xO1xuICAgICAgfVxuICAgICAgdmFyIGVsbGFwc2VkTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSB0aGlzLl9sYXN0VGltZU1pbGxpcztcbiAgICAgIHRoaXMuX2xhc3RUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XG5cbiAgICAgIHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgIGxpc3RlbmVyLm9uQmVmb3JlSW50ZWdyYXRlICYmIGxpc3RlbmVyLm9uQmVmb3JlSW50ZWdyYXRlKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkdmFuY2UoY3VycmVudFRpbWVNaWxsaXMsIGVsbGFwc2VkTWlsbGlzKTtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVTcHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9pc0lkbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9sYXN0VGltZU1pbGxpcyA9IC0xO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgbGlzdGVuZXIub25BZnRlckludGVncmF0ZSAmJiBsaXN0ZW5lci5vbkFmdGVySW50ZWdyYXRlKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzSWRsZSkge1xuICAgICAgICB0aGlzLmxvb3Blci5ydW4oKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gYWN0aXZhdGVTcHJpbmcgaXMgdXNlZCB0byBub3RpZnkgdGhlIFNwcmluZ1N5c3RlbSB0aGF0IGEgU3ByaW5nXG4gICAgLy8gaGFzIGJlY29tZSBkaXNwbGFjZWQuIFRoZSBzeXN0ZW0gcmVzcG9uZHMgYnkgc3RhcnRpbmcgaXRzIHNvbHZlclxuICAgIC8vIGxvb3AgdXAgaWYgaXQgaXMgY3VycmVudGx5IGlkbGUuXG4gICAgYWN0aXZhdGVTcHJpbmc6IGZ1bmN0aW9uKHNwcmluZ0lkKSB7XG4gICAgICB2YXIgc3ByaW5nID0gdGhpcy5fc3ByaW5nUmVnaXN0cnlbc3ByaW5nSWRdO1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNwcmluZ3MuaW5kZXhPZihzcHJpbmcpID09IC0xKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVNwcmluZ3MucHVzaChzcHJpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ2V0SXNJZGxlKCkpIHtcbiAgICAgICAgdGhpcy5faXNJZGxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9vcGVyLnJ1bigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byB0aGUgU3ByaW5nU3lzdGVtIHNvIHRoYXQgeW91IGNhbiByZWNlaXZlXG4gICAgLy8gYmVmb3JlL2FmdGVyIGludGVncmF0aW9uIG5vdGlmaWNhdGlvbnMgYWxsb3dpbmcgU3ByaW5ncyB0byBiZVxuICAgIC8vIGNvbnN0cmFpbmVkIG9yIGFkanVzdGVkLlxuICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIHByZXZpb3VzbHkgYWRkZWQgbGlzdGVuZXIgb24gdGhlIFNwcmluZ1N5c3RlbS5cbiAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIHJlbW92ZUZpcnN0KHRoaXMubGlzdGVuZXJzLCBsaXN0ZW5lcik7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhbGwgcHJldmlvdXNseSBhZGRlZCBsaXN0ZW5lcnMgb24gdGhlIFNwcmluZ1N5c3RlbS5cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gU3ByaW5nXG4gIC8vIC0tLS0tLVxuICAvLyAqKlNwcmluZyoqIHByb3ZpZGVzIGEgbW9kZWwgb2YgYSBjbGFzc2ljYWwgc3ByaW5nIGFjdGluZyB0b1xuICAvLyByZXNvbHZlIGEgYm9keSB0byBlcXVpbGlicml1bS4gU3ByaW5ncyBoYXZlIGNvbmZpZ3VyYWJsZVxuICAvLyB0ZW5zaW9uIHdoaWNoIGlzIGEgZm9yY2UgbXVsdGlwbGVyIG9uIHRoZSBkaXNwbGFjZW1lbnQgb2YgdGhlXG4gIC8vIHNwcmluZyBmcm9tIGl0cyByZXN0IHBvaW50IG9yIGBlbmRWYWx1ZWAgYXMgZGVmaW5lZCBieSBbSG9va2Unc1xuICAvLyBsYXddKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSG9va2Unc19sYXcpLiBTcHJpbmdzIGFsc28gaGF2ZVxuICAvLyBjb25maWd1cmFibGUgZnJpY3Rpb24sIHdoaWNoIGVuc3VyZXMgdGhhdCB0aGV5IGRvIG5vdCBvc2NpbGxhdGVcbiAgLy8gaW5maW5pdGVseS4gV2hlbiBhIFNwcmluZyBpcyBkaXNwbGFjZWQgYnkgdXBkYXRpbmcgaXQncyByZXN0aW5nXG4gIC8vIG9yIGBjdXJyZW50VmFsdWVgLCB0aGUgU3ByaW5nU3lzdGVtcyB0aGF0IGNvbnRhaW4gdGhhdCBTcHJpbmdcbiAgLy8gd2lsbCBhdXRvbWF0aWNhbGx5IHN0YXJ0IGxvb3BpbmcgdG8gc29sdmUgZm9yIGVxdWlsaWJyaXVtLiBBcyBlYWNoXG4gIC8vIHRpbWVzdGVwIHBhc3NlcywgYFNwcmluZ0xpc3RlbmVyYCBvYmplY3RzIGF0dGFjaGVkIHRvIHRoZSBTcHJpbmdcbiAgLy8gd2lsbCBiZSBub3RpZmllZCBvZiB0aGUgdXBkYXRlcyBwcm92aWRpbmcgYSB3YXkgdG8gZHJpdmUgYW5cbiAgLy8gYW5pbWF0aW9uIG9mZiBvZiB0aGUgc3ByaW5nJ3MgcmVzb2x1dGlvbiBjdXJ2ZS5cbiAgdmFyIFNwcmluZyA9IHJlYm91bmQuU3ByaW5nID0gZnVuY3Rpb24gU3ByaW5nKHNwcmluZ1N5c3RlbSkge1xuICAgIHRoaXMuX2lkID0gJ3MnICsgU3ByaW5nLl9JRCsrO1xuICAgIHRoaXMuX3NwcmluZ1N5c3RlbSA9IHNwcmluZ1N5c3RlbTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG5ldyBQaHlzaWNzU3RhdGUoKTtcbiAgICB0aGlzLl9wcmV2aW91c1N0YXRlID0gbmV3IFBoeXNpY3NTdGF0ZSgpO1xuICAgIHRoaXMuX3RlbXBTdGF0ZSA9IG5ldyBQaHlzaWNzU3RhdGUoKTtcbiAgfTtcblxuICB1dGlsLmV4dGVuZChTcHJpbmcsIHtcbiAgICBfSUQ6IDAsXG5cbiAgICBNQVhfREVMVEFfVElNRV9TRUM6IDAuMDY0LFxuXG4gICAgU09MVkVSX1RJTUVTVEVQX1NFQzogMC4wMDFcblxuICB9KTtcblxuICB1dGlsLmV4dGVuZChTcHJpbmcucHJvdG90eXBlLCB7XG5cbiAgICBfaWQ6IDAsXG5cbiAgICBfc3ByaW5nQ29uZmlnOiBudWxsLFxuXG4gICAgX292ZXJzaG9vdENsYW1waW5nRW5hYmxlZDogZmFsc2UsXG5cbiAgICBfY3VycmVudFN0YXRlOiBudWxsLFxuXG4gICAgX3ByZXZpb3VzU3RhdGU6IG51bGwsXG5cbiAgICBfdGVtcFN0YXRlOiBudWxsLFxuXG4gICAgX3N0YXJ0VmFsdWU6IDAsXG5cbiAgICBfZW5kVmFsdWU6IDAsXG5cbiAgICBfd2FzQXRSZXN0OiB0cnVlLFxuXG4gICAgX3Jlc3RTcGVlZFRocmVzaG9sZDogMC4wMDEsXG5cbiAgICBfZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQ6IDAuMDAxLFxuXG4gICAgbGlzdGVuZXJzOiBudWxsLFxuXG4gICAgX3RpbWVBY2N1bXVsYXRvcjogMCxcblxuICAgIF9zcHJpbmdTeXN0ZW06IG51bGwsXG5cbiAgICAvLyBSZW1vdmUgYSBTcHJpbmcgZnJvbSBzaW11bGF0aW9uIGFuZCBjbGVhciBpdHMgbGlzdGVuZXJzLlxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgIHRoaXMuZnJhbWVzID0gW107XG4gICAgICB0aGlzLl9zcHJpbmdTeXN0ZW0uZGVyZWdpc3RlclNwcmluZyh0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgc3ByaW5nLCB3aGljaCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBpdCBmcm9tXG4gICAgLy8gdGhlIFNwcmluZ1N5c3RlbXMgaXQgcGFydGljaXBhdGVzIGluIGxhdGVyLlxuICAgIGdldElkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9LFxuXG4gICAgLy8gU2V0IHRoZSBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgdGhpcyBTcHJpbmcuIEEgU3ByaW5nQ29uZmlnXG4gICAgLy8gY29udGFpbnMgdGhlIHRlbnNpb24gYW5kIGZyaWN0aW9uIHZhbHVlcyB1c2VkIHRvIHNvbHZlIGZvciB0aGVcbiAgICAvLyBlcXVpbGlicml1bSBvZiB0aGUgU3ByaW5nIGluIHRoZSBwaHlzaWNzIGxvb3AuXG4gICAgc2V0U3ByaW5nQ29uZmlnOiBmdW5jdGlvbihzcHJpbmdDb25maWcpIHtcbiAgICAgIHRoaXMuX3NwcmluZ0NvbmZpZyA9IHNwcmluZ0NvbmZpZztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgU3ByaW5nQ29uZmlnIHVzZWQgYnkgdGhpcyBTcHJpbmcuXG4gICAgZ2V0U3ByaW5nQ29uZmlnOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcHJpbmdDb25maWc7XG4gICAgfSxcblxuICAgIC8vIFNldCB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGlzIFNwcmluZy4gTGlzdGVuZXJzIHdpbGwgYmUgdXBkYXRlZFxuICAgIC8vIHdpdGggdGhpcyB2YWx1ZSBpbW1lZGlhdGVseS4gSWYgdGhlIHJlc3Qgb3IgYGVuZFZhbHVlYCBpcyBub3RcbiAgICAvLyB1cGRhdGVkIHRvIG1hdGNoIHRoaXMgdmFsdWUsIHRoZW4gdGhlIHNwcmluZyB3aWxsIGJlIGRpc3BhbGNlZCBhbmRcbiAgICAvLyB0aGUgU3ByaW5nU3lzdGVtIHdpbGwgc3RhcnQgdG8gbG9vcCB0byByZXN0b3JlIHRoZSBzcHJpbmcgdG8gdGhlXG4gICAgLy8gYGVuZFZhbHVlYC5cbiAgICAvL1xuICAgIC8vIEEgY29tbW9uIHBhdHRlcm4gaXMgdG8gbW92ZSBhIFNwcmluZyBhcm91bmQgd2l0aG91dCBhbmltYXRpb24gYnlcbiAgICAvLyBjYWxsaW5nLlxuICAgIC8vXG4gICAgLy8gYGBgXG4gICAgLy8gc3ByaW5nLnNldEN1cnJlbnRWYWx1ZShuKS5zZXRBdFJlc3QoKTtcbiAgICAvLyBgYGBcbiAgICAvL1xuICAgIC8vIFRoaXMgbW92ZXMgdGhlIFNwcmluZyB0byBhIG5ldyBwb3NpdGlvbiBgbmAsIHNldHMgdGhlIGVuZFZhbHVlXG4gICAgLy8gdG8gYG5gLCBhbmQgcmVtb3ZlcyBhbnkgdmVsb2NpdHkgZnJvbSB0aGUgYFNwcmluZ2AuIEJ5IGRvaW5nXG4gICAgLy8gdGhpcyB5b3UgY2FuIGFsbG93IHRoZSBgU3ByaW5nTGlzdGVuZXJgIHRvIG1hbmFnZSB0aGUgcG9zaXRpb25cbiAgICAvLyBvZiBVSSBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGUgc3ByaW5nIGV2ZW4gd2hlbiBtb3Zpbmcgd2l0aG91dFxuICAgIC8vIGFuaW1hdGlvbi4gRm9yIGV4YW1wbGUsIHdoZW4gZHJhZ2dpbmcgYW4gZWxlbWVudCB5b3UgY2FuXG4gICAgLy8gdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiBhbiBhdHRhY2hlZCB2aWV3IHRocm91Z2ggYSBzcHJpbmdcbiAgICAvLyBieSBjYWxsaW5nIGBzcHJpbmcuc2V0Q3VycmVudFZhbHVlKHgpYC4gV2hlblxuICAgIC8vIHRoZSBnZXN0dXJlIGVuZHMgeW91IGNhbiB1cGRhdGUgdGhlIFNwcmluZ3NcbiAgICAvLyB2ZWxvY2l0eSBhbmQgZW5kVmFsdWVcbiAgICAvLyBgc3ByaW5nLnNldFZlbG9jaXR5KGdlc3R1cmVFbmRWZWxvY2l0eSkuc2V0RW5kVmFsdWUoZmxpbmdUYXJnZXQpYFxuICAgIC8vIHRvIGNhdXNlIGl0IHRvIG5hdHVyYWxseSBhbmltYXRlIHRoZSBVSSBlbGVtZW50IHRvIHRoZSByZXN0aW5nXG4gICAgLy8gcG9zaXRpb24gdGFraW5nIGludG8gYWNjb3VudCBleGlzdGluZyB2ZWxvY2l0eS4gVGhlIGNvZGVwYXRocyBmb3JcbiAgICAvLyBzeW5jaHJvbm91cyBtb3ZlbWVudCBhbmQgc3ByaW5nIGRyaXZlbiBhbmltYXRpb24gY2FuXG4gICAgLy8gYmUgdW5pZmllZCB1c2luZyB0aGlzIHRlY2huaXF1ZS5cbiAgICBzZXRDdXJyZW50VmFsdWU6IGZ1bmN0aW9uKGN1cnJlbnRWYWx1ZSwgc2tpcFNldEF0UmVzdCkge1xuICAgICAgdGhpcy5fc3RhcnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbiA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmICghc2tpcFNldEF0UmVzdCkge1xuICAgICAgICB0aGlzLnNldEF0UmVzdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5ub3RpZnlQb3NpdGlvblVwZGF0ZWQoZmFsc2UsIGZhbHNlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIHRoYXQgdGhlIG1vc3QgcmVjZW50IGFuaW1hdGlvbiBzdGFydGVkIGF0LiBUaGlzXG4gICAgLy8gY2FuIGJlIHVzZWZ1bCBmb3IgZGV0ZXJtaW5pbmcgdGhlIG51bWJlciBvZmYgb3NjaWxsYXRpb25zIHRoYXRcbiAgICAvLyBoYXZlIG9jY3VycmVkLlxuICAgIGdldFN0YXJ0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VmFsdWU7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBTcHJpbmcuXG4gICAgZ2V0Q3VycmVudFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb247XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgYWJzb2x1dGUgZGlzdGFuY2Ugb2YgdGhlIFNwcmluZyBmcm9tIGl0J3MgcmVzdGluZyBlbmRWYWx1ZVxuICAgIC8vIHBvc2l0aW9uLlxuICAgIGdldEN1cnJlbnREaXNwbGFjZW1lbnREaXN0YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGFjZW1lbnREaXN0YW5jZUZvclN0YXRlKHRoaXMuX2N1cnJlbnRTdGF0ZSk7XG4gICAgfSxcblxuICAgIGdldERpc3BsYWNlbWVudERpc3RhbmNlRm9yU3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5fZW5kVmFsdWUgLSBzdGF0ZS5wb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8vIFNldCB0aGUgZW5kVmFsdWUgb3IgcmVzdGluZyBwb3NpdGlvbiBvZiB0aGUgc3ByaW5nLiBJZiB0aGlzXG4gICAgLy8gdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUsIHRoZSBTcHJpbmdTeXN0ZW0gd2lsbFxuICAgIC8vIGJlIG5vdGlmaWVkIGFuZCB3aWxsIGJlZ2luIHJ1bm5pbmcgaXRzIHNvbHZlciBsb29wIHRvIHJlc29sdmVcbiAgICAvLyB0aGUgU3ByaW5nIHRvIGVxdWlsaWJyaXVtLiBBbnkgbGlzdGVuZXJzIHRoYXQgYXJlIHJlZ2lzdGVyZWRcbiAgICAvLyBmb3Igb25TcHJpbmdFbmRTdGF0ZUNoYW5nZSB3aWxsIGFsc28gYmUgbm90aWZpZWQgb2YgdGhpcyB1cGRhdGVcbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICBzZXRFbmRWYWx1ZTogZnVuY3Rpb24oZW5kVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9lbmRWYWx1ZSA9PSBlbmRWYWx1ZSAmJiB0aGlzLmlzQXRSZXN0KCkpICB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICB0aGlzLl9lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgdGhpcy5fc3ByaW5nU3lzdGVtLmFjdGl2YXRlU3ByaW5nKHRoaXMuZ2V0SWQoKSk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICAgIHZhciBvbkNoYW5nZSA9IGxpc3RlbmVyLm9uU3ByaW5nRW5kU3RhdGVDaGFuZ2U7XG4gICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIHRoZSBlbmRWYWx1ZSBvciByZXN0aW5nIHBvc2l0aW9uIG9mIHRoaXMgc3ByaW5nLlxuICAgIGdldEVuZFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbmRWYWx1ZTtcbiAgICB9LFxuXG4gICAgLy8gU2V0IHRoZSBjdXJyZW50IHZlbG9jaXR5IG9mIHRoZSBTcHJpbmcuIEFzIHByZXZpb3VzbHkgbWVudGlvbmVkLFxuICAgIC8vIHRoaXMgY2FuIGJlIHVzZWZ1bCB3aGVuIHlvdSBhcmUgcGVyZm9ybWluZyBhIGRpcmVjdCBtYW5pcHVsYXRpb25cbiAgICAvLyBnZXN0dXJlLiBXaGVuIGEgVUkgZWxlbWVudCBpcyByZWxlYXNlZCB5b3UgbWF5IGNhbGwgc2V0VmVsb2NpdHlcbiAgICAvLyBvbiBpdHMgYW5pbWF0aW9uIFNwcmluZyBzbyB0aGF0IHRoZSBTcHJpbmcgY29udGludWVzIHdpdGggdGhlXG4gICAgLy8gc2FtZSB2ZWxvY2l0eSBhcyB0aGUgZ2VzdHVyZSBlbmRlZCB3aXRoLiBUaGUgZnJpY3Rpb24sIHRlbnNpb24sXG4gICAgLy8gYW5kIGRpc3BsYWNlbWVudCBvZiB0aGUgU3ByaW5nIHdpbGwgdGhlbiBnb3Zlcm4gaXRzIG1vdGlvbiB0b1xuICAgIC8vIHJldHVybiB0byByZXN0IG9uIGEgbmF0dXJhbCBmZWVsaW5nIGN1cnZlLlxuICAgIHNldFZlbG9jaXR5OiBmdW5jdGlvbih2ZWxvY2l0eSkge1xuICAgICAgaWYgKHZlbG9jaXR5ID09PSB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgIHRoaXMuX3NwcmluZ1N5c3RlbS5hY3RpdmF0ZVNwcmluZyh0aGlzLmdldElkKCkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiB0aGUgU3ByaW5nLlxuICAgIGdldFZlbG9jaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHk7XG4gICAgfSxcblxuICAgIC8vIFNldCBhIHRocmVzaG9sZCB2YWx1ZSBmb3IgdGhlIG1vdmVtZW50IHNwZWVkIG9mIHRoZSBTcHJpbmcgYmVsb3dcbiAgICAvLyB3aGljaCBpdCB3aWxsIGJlIGNvbnNpZGVyZWQgdG8gYmUgbm90IG1vdmluZyBvciByZXN0aW5nLlxuICAgIHNldFJlc3RTcGVlZFRocmVzaG9sZDogZnVuY3Rpb24ocmVzdFNwZWVkVGhyZXNob2xkKSB7XG4gICAgICB0aGlzLl9yZXN0U3BlZWRUaHJlc2hvbGQgPSByZXN0U3BlZWRUaHJlc2hvbGQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgdGhlIHJlc3Qgc3BlZWQgdGhyZXNob2xkIGZvciB0aGlzIFNwcmluZy5cbiAgICBnZXRSZXN0U3BlZWRUaHJlc2hvbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3RTcGVlZFRocmVzaG9sZDtcbiAgICB9LFxuXG4gICAgLy8gU2V0IGEgdGhyZXNob2xkIHZhbHVlIGZvciBkaXNwbGFjZW1lbnQgYmVsb3cgd2hpY2ggdGhlIFNwcmluZ1xuICAgIC8vIHdpbGwgYmUgY29uc2lkZXJlZCB0byBiZSBub3QgZGlzcGxhY2VkIGkuZS4gYXQgaXRzIHJlc3RpbmdcbiAgICAvLyBgZW5kVmFsdWVgLlxuICAgIHNldFJlc3REaXNwbGFjZW1lbnRUaHJlc2hvbGQ6IGZ1bmN0aW9uKGRpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkKSB7XG4gICAgICB0aGlzLl9kaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZCA9IGRpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgcmVzdCBkaXNwbGFjZW1lbnQgdGhyZXNob2xkIGZvciB0aGlzIHNwcmluZy5cbiAgICBnZXRSZXN0RGlzcGxhY2VtZW50VGhyZXNob2xkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZDtcbiAgICB9LFxuXG4gICAgLy8gRW5hYmxlIG92ZXJzaG9vdCBjbGFtcGluZy4gVGhpcyBtZWFucyB0aGF0IHRoZSBTcHJpbmcgd2lsbCBzdG9wXG4gICAgLy8gaW1tZWRpYXRlbHkgd2hlbiBpdCByZWFjaGVzIGl0cyByZXN0aW5nIHBvc2l0aW9uIHJlZ2FyZGxlc3Mgb2ZcbiAgICAvLyBhbnkgZXhpc3RpbmcgbW9tZW50dW0gaXQgbWF5IGhhdmUuIFRoaXMgY2FuIGJlIHVzZWZ1bCBmb3IgY2VydGFpblxuICAgIC8vIHR5cGVzIG9mIGFuaW1hdGlvbnMgdGhhdCBzaG91bGQgbm90IG9zY2lsbGF0ZSBzdWNoIGFzIGEgc2NhbGVcbiAgICAvLyBkb3duIHRvIDAgb3IgYWxwaGEgZmFkZS5cbiAgICBzZXRPdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQ6IGZ1bmN0aW9uKGVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX292ZXJzaG9vdENsYW1waW5nRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2sgaWYgb3ZlcnNob290IGNsYW1waW5nIGlzIGVuYWJsZWQgZm9yIHRoaXMgc3ByaW5nLlxuICAgIGlzT3ZlcnNob290Q2xhbXBpbmdFbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQ7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIHRoZSBTcHJpbmcgaGFzIGdvbmUgcGFzdCBpdHMgZW5kIHBvaW50IGJ5IGNvbXBhcmluZ1xuICAgIC8vIHRoZSBkaXJlY3Rpb24gaXQgd2FzIG1vdmluZyBpbiB3aGVuIGl0IHN0YXJ0ZWQgdG8gdGhlIGN1cnJlbnRcbiAgICAvLyBwb3NpdGlvbiBhbmQgZW5kIHZhbHVlLlxuICAgIGlzT3ZlcnNob290aW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGFydCA9IHRoaXMuX3N0YXJ0VmFsdWU7XG4gICAgICB2YXIgZW5kID0gdGhpcy5fZW5kVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fc3ByaW5nQ29uZmlnLnRlbnNpb24gPiAwICYmXG4gICAgICAgKChzdGFydCA8IGVuZCAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpID4gZW5kKSB8fFxuICAgICAgIChzdGFydCA+IGVuZCAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpIDwgZW5kKSk7XG4gICAgfSxcblxuICAgIC8vIFNwcmluZy5hZHZhbmNlIGlzIHRoZSBtYWluIHNvbHZlciBtZXRob2QgZm9yIHRoZSBTcHJpbmcuIEl0IHRha2VzXG4gICAgLy8gdGhlIGN1cnJlbnQgdGltZSBhbmQgZGVsdGEgc2luY2UgdGhlIGxhc3QgdGltZSBzdGVwIGFuZCBwZXJmb3Jtc1xuICAgIC8vIGFuIFJLNCBpbnRlZ3JhdGlvbiB0byBnZXQgdGhlIG5ldyBwb3NpdGlvbiBhbmQgdmVsb2NpdHkgc3RhdGVcbiAgICAvLyBmb3IgdGhlIFNwcmluZyBiYXNlZCBvbiB0aGUgdGVuc2lvbiwgZnJpY3Rpb24sIHZlbG9jaXR5LCBhbmRcbiAgICAvLyBkaXNwbGFjZW1lbnQgb2YgdGhlIFNwcmluZy5cbiAgICBhZHZhbmNlOiBmdW5jdGlvbih0aW1lLCByZWFsRGVsdGFUaW1lKSB7XG4gICAgICB2YXIgaXNBdFJlc3QgPSB0aGlzLmlzQXRSZXN0KCk7XG5cbiAgICAgIGlmIChpc0F0UmVzdCAmJiB0aGlzLl93YXNBdFJlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRqdXN0ZWREZWx0YVRpbWUgPSByZWFsRGVsdGFUaW1lO1xuICAgICAgaWYgKHJlYWxEZWx0YVRpbWUgPiBTcHJpbmcuTUFYX0RFTFRBX1RJTUVfU0VDKSB7XG4gICAgICAgIGFkanVzdGVkRGVsdGFUaW1lID0gU3ByaW5nLk1BWF9ERUxUQV9USU1FX1NFQztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGltZUFjY3VtdWxhdG9yICs9IGFkanVzdGVkRGVsdGFUaW1lO1xuXG4gICAgICB2YXIgdGVuc2lvbiA9IHRoaXMuX3NwcmluZ0NvbmZpZy50ZW5zaW9uLFxuICAgICAgICAgIGZyaWN0aW9uID0gdGhpcy5fc3ByaW5nQ29uZmlnLmZyaWN0aW9uLFxuXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHksXG4gICAgICAgICAgdGVtcFBvc2l0aW9uID0gdGhpcy5fdGVtcFN0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgIHRlbXBWZWxvY2l0eSA9IHRoaXMuX3RlbXBTdGF0ZS52ZWxvY2l0eSxcblxuICAgICAgICAgIGFWZWxvY2l0eSwgYUFjY2VsZXJhdGlvbixcbiAgICAgICAgICBiVmVsb2NpdHksIGJBY2NlbGVyYXRpb24sXG4gICAgICAgICAgY1ZlbG9jaXR5LCBjQWNjZWxlcmF0aW9uLFxuICAgICAgICAgIGRWZWxvY2l0eSwgZEFjY2VsZXJhdGlvbixcblxuICAgICAgICAgIGR4ZHQsIGR2ZHQ7XG5cbiAgICAgIHdoaWxlKHRoaXMuX3RpbWVBY2N1bXVsYXRvciA+PSBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQykge1xuXG4gICAgICAgIHRoaXMuX3RpbWVBY2N1bXVsYXRvciAtPSBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQztcblxuICAgICAgICBpZiAodGhpcy5fdGltZUFjY3VtdWxhdG9yIDwgU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXRlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGF0ZS52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgYVZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIGFBY2NlbGVyYXRpb24gPVxuICAgICAgICAgICh0ZW5zaW9uICogKHRoaXMuX2VuZFZhbHVlIC0gdGVtcFBvc2l0aW9uKSkgLSBmcmljdGlvbiAqIHZlbG9jaXR5O1xuXG4gICAgICAgIHRlbXBQb3NpdGlvbiA9IHBvc2l0aW9uICsgYVZlbG9jaXR5ICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIHRlbXBWZWxvY2l0eSA9XG4gICAgICAgICAgdmVsb2NpdHkgKyBhQWNjZWxlcmF0aW9uICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIGJWZWxvY2l0eSA9IHRlbXBWZWxvY2l0eTtcbiAgICAgICAgYkFjY2VsZXJhdGlvbiA9XG4gICAgICAgICAgKHRlbnNpb24gKiAodGhpcy5fZW5kVmFsdWUgLSB0ZW1wUG9zaXRpb24pKSAtIGZyaWN0aW9uICogdGVtcFZlbG9jaXR5O1xuXG4gICAgICAgIHRlbXBQb3NpdGlvbiA9IHBvc2l0aW9uICsgYlZlbG9jaXR5ICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIHRlbXBWZWxvY2l0eSA9XG4gICAgICAgICAgdmVsb2NpdHkgKyBiQWNjZWxlcmF0aW9uICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIGNWZWxvY2l0eSA9IHRlbXBWZWxvY2l0eTtcbiAgICAgICAgY0FjY2VsZXJhdGlvbiA9XG4gICAgICAgICAgKHRlbnNpb24gKiAodGhpcy5fZW5kVmFsdWUgLSB0ZW1wUG9zaXRpb24pKSAtIGZyaWN0aW9uICogdGVtcFZlbG9jaXR5O1xuXG4gICAgICAgIHRlbXBQb3NpdGlvbiA9IHBvc2l0aW9uICsgY1ZlbG9jaXR5ICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIHRlbXBWZWxvY2l0eSA9XG4gICAgICAgICAgdmVsb2NpdHkgKyBjQWNjZWxlcmF0aW9uICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUMgKiAwLjU7XG4gICAgICAgIGRWZWxvY2l0eSA9IHRlbXBWZWxvY2l0eTtcbiAgICAgICAgZEFjY2VsZXJhdGlvbiA9XG4gICAgICAgICAgKHRlbnNpb24gKiAodGhpcy5fZW5kVmFsdWUgLSB0ZW1wUG9zaXRpb24pKSAtIGZyaWN0aW9uICogdGVtcFZlbG9jaXR5O1xuXG4gICAgICAgIGR4ZHQgPVxuICAgICAgICAgIDEuMC82LjAgKiAoYVZlbG9jaXR5ICsgMi4wICogKGJWZWxvY2l0eSArIGNWZWxvY2l0eSkgKyBkVmVsb2NpdHkpO1xuICAgICAgICBkdmR0ID0gMS4wLzYuMCAqIChcbiAgICAgICAgICBhQWNjZWxlcmF0aW9uICsgMi4wICogKGJBY2NlbGVyYXRpb24gKyBjQWNjZWxlcmF0aW9uKSArIGRBY2NlbGVyYXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBwb3NpdGlvbiArPSBkeGR0ICogU3ByaW5nLlNPTFZFUl9USU1FU1RFUF9TRUM7XG4gICAgICAgIHZlbG9jaXR5ICs9IGR2ZHQgKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGVtcFN0YXRlLnBvc2l0aW9uID0gdGVtcFBvc2l0aW9uO1xuICAgICAgdGhpcy5fdGVtcFN0YXRlLnZlbG9jaXR5ID0gdGVtcFZlbG9jaXR5O1xuXG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXG4gICAgICBpZiAodGhpcy5fdGltZUFjY3VtdWxhdG9yID4gMCkge1xuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0ZSh0aGlzLl90aW1lQWNjdW11bGF0b3IgLyBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQXRSZXN0KCkgfHxcbiAgICAgICAgICB0aGlzLl9vdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQgJiYgdGhpcy5pc092ZXJzaG9vdGluZygpKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NwcmluZ0NvbmZpZy50ZW5zaW9uID4gMCkge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VmFsdWUgPSB0aGlzLl9lbmRWYWx1ZTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24gPSB0aGlzLl9lbmRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lbmRWYWx1ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbjtcbiAgICAgICAgICB0aGlzLl9zdGFydFZhbHVlID0gdGhpcy5fZW5kVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgwKTtcbiAgICAgICAgaXNBdFJlc3QgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm90aWZ5QWN0aXZhdGUgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl93YXNBdFJlc3QpIHtcbiAgICAgICAgdGhpcy5fd2FzQXRSZXN0ID0gZmFsc2U7XG4gICAgICAgIG5vdGlmeUFjdGl2YXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vdGlmeUF0UmVzdCA9IGZhbHNlO1xuICAgICAgaWYgKGlzQXRSZXN0KSB7XG4gICAgICAgIHRoaXMuX3dhc0F0UmVzdCA9IHRydWU7XG4gICAgICAgIG5vdGlmeUF0UmVzdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm90aWZ5UG9zaXRpb25VcGRhdGVkKG5vdGlmeUFjdGl2YXRlLCBub3RpZnlBdFJlc3QpO1xuICAgIH0sXG5cbiAgICBub3RpZnlQb3NpdGlvblVwZGF0ZWQ6IGZ1bmN0aW9uKG5vdGlmeUFjdGl2YXRlLCBub3RpZnlBdFJlc3QpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgaWYgKG5vdGlmeUFjdGl2YXRlICYmIGxpc3RlbmVyLm9uU3ByaW5nQWN0aXZhdGUpIHtcbiAgICAgICAgICBsaXN0ZW5lci5vblNwcmluZ0FjdGl2YXRlKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm9uU3ByaW5nVXBkYXRlKSB7XG4gICAgICAgICAgbGlzdGVuZXIub25TcHJpbmdVcGRhdGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm90aWZ5QXRSZXN0ICYmIGxpc3RlbmVyLm9uU3ByaW5nQXRSZXN0KSB7XG4gICAgICAgICAgbGlzdGVuZXIub25TcHJpbmdBdFJlc3QodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgU3ByaW5nU3lzdGVtIHNob3VsZCBhZHZhbmNlLiBTcHJpbmdzIGFyZSBhZHZhbmNlZFxuICAgIC8vIGEgZmluYWwgZnJhbWUgYWZ0ZXIgdGhleSByZWFjaCBlcXVpbGlicml1bSB0byBlbnN1cmUgdGhhdCB0aGVcbiAgICAvLyBjdXJyZW50VmFsdWUgaXMgZXhhY3RseSB0aGUgcmVxdWVzdGVkIGVuZFZhbHVlIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gICAgLy8gZGlzcGxhY2VtZW50IHRocmVzaG9sZC5cbiAgICBzeXN0ZW1TaG91bGRBZHZhbmNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0F0UmVzdCgpIHx8ICF0aGlzLndhc0F0UmVzdCgpO1xuICAgIH0sXG5cbiAgICB3YXNBdFJlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dhc0F0UmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIFNwcmluZyBpcyBhdFJlc3QgbWVhbmluZyB0aGF0IGl0J3MgY3VycmVudFZhbHVlIGFuZFxuICAgIC8vIGVuZFZhbHVlIGFyZSB0aGUgc2FtZSBhbmQgdGhhdCBpdCBoYXMgbm8gdmVsb2NpdHkuIFRoZSBwcmV2aW91c2x5XG4gICAgLy8gZGVzY3JpYmVkIHRocmVzaG9sZHMgZm9yIHNwZWVkIGFuZCBkaXNwbGFjZW1lbnQgZGVmaW5lIHRoZSBib3VuZHNcbiAgICAvLyBvZiB0aGlzIGVxdWl2YWxlbmNlIGNoZWNrLiBJZiB0aGUgU3ByaW5nIGhhcyAwIHRlbnNpb24sIHRoZW4gaXQgd2lsbFxuICAgIC8vIGJlIGNvbnNpZGVyZWQgYXQgcmVzdCB3aGVuZXZlciBpdHMgYWJzb2x1dGUgdmVsb2NpdHkgZHJvcHMgYmVsb3cgdGhlXG4gICAgLy8gcmVzdFNwZWVkVGhyZXNob2xkLlxuICAgIGlzQXRSZXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkpIDwgdGhpcy5fcmVzdFNwZWVkVGhyZXNob2xkICYmXG4gICAgICAgICh0aGlzLmdldERpc3BsYWNlbWVudERpc3RhbmNlRm9yU3RhdGUodGhpcy5fY3VycmVudFN0YXRlKSA8PVxuICAgICAgICAgIHRoaXMuX2Rpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkIHx8XG4gICAgICAgIHRoaXMuX3NwcmluZ0NvbmZpZy50ZW5zaW9uID09PSAwKTtcbiAgICB9LFxuXG4gICAgLy8gRm9yY2UgdGhlIHNwcmluZyB0byBiZSBhdCByZXN0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLiBBc1xuICAgIC8vIGRlc2NyaWJlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3Igc2V0Q3VycmVudFZhbHVlLCB0aGlzIG1ldGhvZFxuICAgIC8vIG1ha2VzIGl0IGVhc3kgdG8gZG8gc3luY2hyb25vdXMgbm9uLWFuaW1hdGVkIHVwZGF0ZXMgdG8gdWlcbiAgICAvLyBlbGVtZW50cyB0aGF0IGFyZSBhdHRhY2hlZCB0byBzcHJpbmdzIHZpYSBTcHJpbmdMaXN0ZW5lcnMuXG4gICAgc2V0QXRSZXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2VuZFZhbHVlID0gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uO1xuICAgICAgdGhpcy5fdGVtcFN0YXRlLnBvc2l0aW9uID0gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uO1xuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5ID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfaW50ZXJwb2xhdGU6IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24gPSB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb24gKlxuICAgICAgICBhbHBoYSArIHRoaXMuX3ByZXZpb3VzU3RhdGUucG9zaXRpb24gKiAoMSAtIGFscGhhKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSA9IHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSAqXG4gICAgICAgIGFscGhhICsgdGhpcy5fcHJldmlvdXNTdGF0ZS52ZWxvY2l0eSAqICgxIC0gYWxwaGEpO1xuICAgIH0sXG5cbiAgICBnZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzO1xuICAgIH0sXG5cbiAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24obmV3TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobmV3TGlzdGVuZXIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbihsaXN0ZW5lclRvUmVtb3ZlKSB7XG4gICAgICByZW1vdmVGaXJzdCh0aGlzLmxpc3RlbmVycywgbGlzdGVuZXJUb1JlbW92ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY3VycmVudFZhbHVlSXNBcHByb3hpbWF0ZWx5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgLSB2YWx1ZSkgPD1cbiAgICAgICAgdGhpcy5nZXRSZXN0RGlzcGxhY2VtZW50VGhyZXNob2xkKCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIC8vIFBoeXNpY3NTdGF0ZVxuICAvLyAtLS0tLS0tLS0tLS1cbiAgLy8gKipQaHlzaWNzU3RhdGUqKiBjb25zaXN0cyBvZiBhIHBvc2l0aW9uIGFuZCB2ZWxvY2l0eS4gQSBTcHJpbmcgdXNlc1xuICAvLyB0aGlzIGludGVybmFsbHkgdG8ga2VlcCB0cmFjayBvZiBpdHMgY3VycmVudCBhbmQgcHJpb3IgcG9zaXRpb24gYW5kXG4gIC8vIHZlbG9jaXR5IHZhbHVlcy5cbiAgdmFyIFBoeXNpY3NTdGF0ZSA9IGZ1bmN0aW9uIFBoeXNpY3NTdGF0ZSgpIHt9O1xuXG4gIHV0aWwuZXh0ZW5kKFBoeXNpY3NTdGF0ZS5wcm90b3R5cGUsIHtcbiAgICBwb3NpdGlvbjogMCxcbiAgICB2ZWxvY2l0eTogMFxuICB9KTtcblxuICAvLyBTcHJpbmdDb25maWdcbiAgLy8gLS0tLS0tLS0tLS0tXG4gIC8vICoqU3ByaW5nQ29uZmlnKiogbWFpbnRhaW5zIGEgc2V0IG9mIHRlbnNpb24gYW5kIGZyaWN0aW9uIGNvbnN0YW50c1xuICAvLyBmb3IgYSBTcHJpbmcuIFlvdSBjYW4gdXNlIGZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uIHRvIGNvbnZlcnRcbiAgLy8gdmFsdWVzIGZyb20gdGhlIFtPcmlnYW1pXShodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL29yaWdhbWkvKVxuICAvLyBkZXNpZ24gdG9vbCBkaXJlY3RseSB0byBSZWJvdW5kIHNwcmluZyBjb25zdGFudHMuXG4gIHZhciBTcHJpbmdDb25maWcgPSByZWJvdW5kLlNwcmluZ0NvbmZpZyA9XG4gICAgZnVuY3Rpb24gU3ByaW5nQ29uZmlnKHRlbnNpb24sIGZyaWN0aW9uKSB7XG4gICAgICB0aGlzLnRlbnNpb24gPSB0ZW5zaW9uO1xuICAgICAgdGhpcy5mcmljdGlvbiA9IGZyaWN0aW9uO1xuICAgIH07XG5cbiAgLy8gTG9vcGVyc1xuICAvLyAtLS0tLS0tXG4gIC8vICoqQW5pbWF0aW9uTG9vcGVyKiogcGxheXMgZWFjaCBmcmFtZSBvZiB0aGUgU3ByaW5nU3lzdGVtIG9uIGFuaW1hdGlvblxuICAvLyB0aW1pbmcgbG9vcC4gVGhpcyBpcyB0aGUgZGVmYXVsdCB0eXBlIG9mIGxvb3BlciBmb3IgYSBuZXcgc3ByaW5nIHN5c3RlbVxuICAvLyBhcyBpdCBpcyB0aGUgbW9zdCBjb21tb24gd2hlbiBkZXZlbG9waW5nIFVJLlxuICB2YXIgQW5pbWF0aW9uTG9vcGVyID0gcmVib3VuZC5BbmltYXRpb25Mb29wZXIgPSBmdW5jdGlvbiBBbmltYXRpb25Mb29wZXIoKSB7XG4gICAgdGhpcy5zcHJpbmdTeXN0ZW0gPSBudWxsO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIF9ydW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLnNwcmluZ1N5c3RlbS5sb29wKERhdGUubm93KCkpO1xuICAgIH07XG5cbiAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgdXRpbC5vbkZyYW1lKF9ydW4pO1xuICAgIH07XG4gIH07XG5cbiAgLy8gKipTaW11bGF0aW9uTG9vcGVyKiogcmVzb2x2ZXMgdGhlIFNwcmluZ1N5c3RlbSB0byBhIHJlc3Rpbmcgc3RhdGUgaW4gYVxuICAvLyB0aWdodCBhbmQgYmxvY2tpbmcgbG9vcC4gVGhpcyBpcyB1c2VmdWwgZm9yIHN5bmNocm9ub3VzbHkgZ2VuZXJhdGluZ1xuICAvLyBwcmUtcmVjb3JkZWQgYW5pbWF0aW9ucyB0aGF0IGNhbiB0aGVuIGJlIHBsYXllZCBvbiBhIHRpbWluZyBsb29wIGxhdGVyLlxuICAvLyBTb21ldGltZXMgdGhpcyBsZWFkIHRvIGJldHRlciBwZXJmb3JtYW5jZSB0byBwcmUtcmVjb3JkIGEgc2luZ2xlIHNwcmluZ1xuICAvLyBjdXJ2ZSBhbmQgdXNlIGl0IHRvIGRyaXZlIG1hbnkgYW5pbWF0aW9uczsgaG93ZXZlciwgaXQgY2FuIG1ha2UgZHluYW1pY1xuICAvLyByZXNwb25zZSB0byB1c2VyIGlucHV0IGEgYml0IHRyaWNraWVyIHRvIGltcGxlbWVudC5cbiAgcmVib3VuZC5TaW11bGF0aW9uTG9vcGVyID0gZnVuY3Rpb24gU2ltdWxhdGlvbkxvb3Blcih0aW1lc3RlcCkge1xuICAgIHRoaXMuc3ByaW5nU3lzdGVtID0gbnVsbDtcbiAgICB2YXIgdGltZSA9IDA7XG4gICAgdmFyIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aW1lc3RlcD10aW1lc3RlcCB8fCAxNi42Njc7XG5cbiAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICB3aGlsZSghdGhpcy5zcHJpbmdTeXN0ZW0uZ2V0SXNJZGxlKCkpIHtcbiAgICAgICAgdGhpcy5zcHJpbmdTeXN0ZW0ubG9vcCh0aW1lKz10aW1lc3RlcCk7XG4gICAgICB9XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgfTtcblxuICAvLyAqKlN0ZXBwaW5nU2ltdWxhdGlvbkxvb3BlcioqIHJlc29sdmVzIHRoZSBTcHJpbmdTeXN0ZW0gb25lIHN0ZXAgYXQgYVxuICAvLyB0aW1lIGNvbnRyb2xsZWQgYnkgYW4gb3V0c2lkZSBsb29wLiBUaGlzIGlzIHVzZWZ1bCBmb3IgdGVzdGluZyBhbmRcbiAgLy8gdmVyaWZ5aW5nIHRoZSBiZWhhdmlvciBvZiBhIFNwcmluZ1N5c3RlbSBvciBpZiB5b3Ugd2FudCB0byBjb250cm9sIHlvdXIgb3duXG4gIC8vIHRpbWluZyBsb29wIGZvciBzb21lIHJlYXNvbiBlLmcuIHNsb3dpbmcgZG93biBvciBzcGVlZGluZyB1cCB0aGVcbiAgLy8gc2ltdWxhdGlvbi5cbiAgcmVib3VuZC5TdGVwcGluZ1NpbXVsYXRpb25Mb29wZXIgPSBmdW5jdGlvbih0aW1lc3RlcCkge1xuICAgIHRoaXMuc3ByaW5nU3lzdGVtID0gbnVsbDtcbiAgICB2YXIgdGltZSA9IDA7XG5cbiAgICAvLyB0aGlzLnJ1biBpcyBOT09QJ2QgaGVyZSB0byBhbGxvdyBjb250cm9sIGZyb20gdGhlIG91dHNpZGUgdXNpbmdcbiAgICAvLyB0aGlzLnN0ZXAuXG4gICAgdGhpcy5ydW4gPSBmdW5jdGlvbigpe307XG5cbiAgICAvLyBQZXJmb3JtIG9uZSBzdGVwIHRvd2FyZCByZXNvbHZpbmcgdGhlIFNwcmluZ1N5c3RlbS5cbiAgICB0aGlzLnN0ZXAgPSBmdW5jdGlvbih0aW1lc3RlcCkge1xuICAgICAgdGhpcy5zcHJpbmdTeXN0ZW0ubG9vcCh0aW1lKz10aW1lc3RlcCk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBNYXRoIGZvciBjb252ZXJ0aW5nIGZyb21cbiAgLy8gW09yaWdhbWldKGh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vb3JpZ2FtaS8pIHRvXG4gIC8vIFtSZWJvdW5kXShodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYm91bmQpLlxuICAvLyBZb3UgbW9zdGx5IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhpcywganVzdCB1c2VcbiAgLy8gU3ByaW5nQ29uZmlnLmZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uKHYsIHYpO1xuICB2YXIgT3JpZ2FtaVZhbHVlQ29udmVydGVyID0gcmVib3VuZC5PcmlnYW1pVmFsdWVDb252ZXJ0ZXIgPSB7XG4gICAgdGVuc2lvbkZyb21PcmlnYW1pVmFsdWU6IGZ1bmN0aW9uKG9WYWx1ZSkge1xuICAgICAgcmV0dXJuIChvVmFsdWUgLSAzMC4wKSAqIDMuNjIgKyAxOTQuMDtcbiAgICB9LFxuXG4gICAgb3JpZ2FtaVZhbHVlRnJvbVRlbnNpb246IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICAgIHJldHVybiAodGVuc2lvbiAtIDE5NC4wKSAvIDMuNjIgKyAzMC4wO1xuICAgIH0sXG5cbiAgICBmcmljdGlvbkZyb21PcmlnYW1pVmFsdWU6IGZ1bmN0aW9uKG9WYWx1ZSkge1xuICAgICAgcmV0dXJuIChvVmFsdWUgLSA4LjApICogMy4wICsgMjUuMDtcbiAgICB9LFxuXG4gICAgb3JpZ2FtaUZyb21GcmljdGlvbjogZnVuY3Rpb24oZnJpY3Rpb24pIHtcbiAgICAgIHJldHVybiAoZnJpY3Rpb24gLSAyNS4wKSAvIDMuMCArIDguMDtcbiAgICB9XG4gIH07XG5cbiAgLy8gQm91bmN5Q29udmVyc2lvbiBwcm92aWRlcyBtYXRoIGZvciBjb252ZXJ0aW5nIGZyb20gT3JpZ2FtaSBQb3BBbmltYXRpb25cbiAgLy8gY29uZmlnIHZhbHVlcyB0byByZWd1bGFyIE9yaWdhbWkgdGVuc2lvbiBhbmQgZnJpY3Rpb24gdmFsdWVzLiBJZiB5b3UgYXJlXG4gIC8vIHRyeWluZyB0byByZXBsaWNhdGUgcHJvdG90eXBlcyBtYWRlIHdpdGggUG9wQW5pbWF0aW9uIHBhdGNoZXMgaW4gT3JpZ2FtaSxcbiAgLy8gdGhlbiB5b3Ugc2hvdWxkIGNyZWF0ZSB5b3VyIHNwcmluZ3Mgd2l0aFxuICAvLyBTcHJpbmdTeXN0ZW0uY3JlYXRlU3ByaW5nV2l0aEJvdW5jaW5lc3NBbmRTcGVlZCwgd2hpY2ggdXNlcyB0aGlzIE1hdGhcbiAgLy8gaW50ZXJuYWxseSB0byBjcmVhdGUgYSBzcHJpbmcgdG8gbWF0Y2ggdGhlIHByb3ZpZGVkIFBvcEFuaW1hdGlvblxuICAvLyBjb25maWd1cmF0aW9uIGZyb20gT3JpZ2FtaS5cbiAgdmFyIEJvdW5jeUNvbnZlcnNpb24gPSByZWJvdW5kLkJvdW5jeUNvbnZlcnNpb24gPSBmdW5jdGlvbihib3VuY2luZXNzLCBzcGVlZCl7XG4gICAgdGhpcy5ib3VuY2luZXNzID0gYm91bmNpbmVzcztcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdmFyIGIgPSB0aGlzLm5vcm1hbGl6ZShib3VuY2luZXNzIC8gMS43LCAwLCAyMC4wKTtcbiAgICBiID0gdGhpcy5wcm9qZWN0Tm9ybWFsKGIsIDAuMCwgMC44KTtcbiAgICB2YXIgcyA9IHRoaXMubm9ybWFsaXplKHNwZWVkIC8gMS43LCAwLCAyMC4wKTtcbiAgICB0aGlzLmJvdW5jeVRlbnNpb24gPSB0aGlzLnByb2plY3ROb3JtYWwocywgMC41LCAyMDApXG4gICAgdGhpcy5ib3VuY3lGcmljdGlvbiA9IHRoaXMucXVhZHJhdGljT3V0SW50ZXJwb2xhdGlvbihcbiAgICAgIGIsXG4gICAgICB0aGlzLmIzTm9ib3VuY2UodGhpcy5ib3VuY3lUZW5zaW9uKSxcbiAgICAgIDAuMDEpO1xuICB9XG5cbiAgdXRpbC5leHRlbmQoQm91bmN5Q29udmVyc2lvbi5wcm90b3R5cGUsIHtcblxuICAgIG5vcm1hbGl6ZTogZnVuY3Rpb24odmFsdWUsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZhbHVlIC0gc3RhcnRWYWx1ZSkgLyAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKTtcbiAgICB9LFxuXG4gICAgcHJvamVjdE5vcm1hbDogZnVuY3Rpb24obiwgc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgKG4gKiAoZW5kIC0gc3RhcnQpKTtcbiAgICB9LFxuXG4gICAgbGluZWFySW50ZXJwb2xhdGlvbjogZnVuY3Rpb24odCwgc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIHQgKiBlbmQgKyAoMS4wIC0gdCkgKiBzdGFydDtcbiAgICB9LFxuXG4gICAgcXVhZHJhdGljT3V0SW50ZXJwb2xhdGlvbjogZnVuY3Rpb24odCwgc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMubGluZWFySW50ZXJwb2xhdGlvbigyKnQgLSB0KnQsIHN0YXJ0LCBlbmQpO1xuICAgIH0sXG5cbiAgICBiM0ZyaWN0aW9uMTogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuICgwLjAwMDcgKiBNYXRoLnBvdyh4LCAzKSkgLVxuICAgICAgICAoMC4wMzEgKiBNYXRoLnBvdyh4LCAyKSkgKyAwLjY0ICogeCArIDEuMjg7XG4gICAgfSxcblxuICAgIGIzRnJpY3Rpb24yOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gKDAuMDAwMDQ0ICogTWF0aC5wb3coeCwgMykpIC1cbiAgICAgICAgKDAuMDA2ICogTWF0aC5wb3coeCwgMikpICsgMC4zNiAqIHggKyAyLjtcbiAgICB9LFxuXG4gICAgYjNGcmljdGlvbjM6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiAoMC4wMDAwMDA0NSAqIE1hdGgucG93KHgsIDMpKSAtXG4gICAgICAgICgwLjAwMDMzMiAqIE1hdGgucG93KHgsIDIpKSArIDAuMTA3OCAqIHggKyA1Ljg0O1xuICAgIH0sXG5cbiAgICBiM05vYm91bmNlOiBmdW5jdGlvbih0ZW5zaW9uKSB7XG4gICAgICB2YXIgZnJpY3Rpb24gPSAwO1xuICAgICAgaWYgKHRlbnNpb24gPD0gMTgpIHtcbiAgICAgICAgZnJpY3Rpb24gPSB0aGlzLmIzRnJpY3Rpb24xKHRlbnNpb24pO1xuICAgICAgfSBlbHNlIGlmICh0ZW5zaW9uID4gMTggJiYgdGVuc2lvbiA8PSA0NCkge1xuICAgICAgICBmcmljdGlvbiA9IHRoaXMuYjNGcmljdGlvbjIodGVuc2lvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmljdGlvbiA9IHRoaXMuYjNGcmljdGlvbjModGVuc2lvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnJpY3Rpb247XG4gICAgfVxuICB9KTtcblxuICB1dGlsLmV4dGVuZChTcHJpbmdDb25maWcsIHtcbiAgICAvLyBDb252ZXJ0IGFuIG9yaWdhbWkgU3ByaW5nIHRlbnNpb24gYW5kIGZyaWN0aW9uIHRvIFJlYm91bmQgc3ByaW5nXG4gICAgLy8gY29uc3RhbnRzLiBJZiB5b3UgYXJlIHByb3RvdHlwaW5nIGEgZGVzaWduIHdpdGggT3JpZ2FtaSwgdGhpc1xuICAgIC8vIG1ha2VzIGl0IGVhc3kgdG8gbWFrZSB5b3VyIHNwcmluZ3MgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgaW5cbiAgICAvLyBSZWJvdW5kLlxuICAgIGZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uOiBmdW5jdGlvbih0ZW5zaW9uLCBmcmljdGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBTcHJpbmdDb25maWcoXG4gICAgICAgIE9yaWdhbWlWYWx1ZUNvbnZlcnRlci50ZW5zaW9uRnJvbU9yaWdhbWlWYWx1ZSh0ZW5zaW9uKSxcbiAgICAgICAgT3JpZ2FtaVZhbHVlQ29udmVydGVyLmZyaWN0aW9uRnJvbU9yaWdhbWlWYWx1ZShmcmljdGlvbikpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGFuIG9yaWdhbWkgUG9wQW5pbWF0aW9uIFNwcmluZyBib3VuY2luZXNzIGFuZCBzcGVlZCB0byBSZWJvdW5kXG4gICAgLy8gc3ByaW5nIGNvbnN0YW50cy4gSWYgeW91IGFyZSB1c2luZyBQb3BBbmltYXRpb24gcGF0Y2hlcyBpbiBPcmlnYW1pLCB0aGlzXG4gICAgLy8gdXRpbGl0eSB3aWxsIHByb3ZpZGUgc3ByaW5ncyB0aGF0IG1hdGNoIHlvdXIgcHJvdG90eXBlLlxuICAgIGZyb21Cb3VuY2luZXNzQW5kU3BlZWQ6IGZ1bmN0aW9uKGJvdW5jaW5lc3MsIHNwZWVkKSB7XG4gICAgICB2YXIgYm91bmN5Q29udmVyc2lvbiA9IG5ldyByZWJvdW5kLkJvdW5jeUNvbnZlcnNpb24oYm91bmNpbmVzcywgc3BlZWQpO1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb24oXG4gICAgICAgIGJvdW5jeUNvbnZlcnNpb24uYm91bmN5VGVuc2lvbixcbiAgICAgICAgYm91bmN5Q29udmVyc2lvbi5ib3VuY3lGcmljdGlvbik7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSBhIFNwcmluZ0NvbmZpZyB3aXRoIG5vIHRlbnNpb24gb3IgYSBjb2FzdGluZyBzcHJpbmcgd2l0aCBzb21lXG4gICAgLy8gYW1vdW50IG9mIEZyaWN0aW9uIHNvIHRoYXQgaXQgZG9lcyBub3QgY29hc3QgaW5maW5pbml0ZWx5LlxuICAgIGNvYXN0aW5nQ29uZmlnV2l0aE9yaWdhbWlGcmljdGlvbjogZnVuY3Rpb24oZnJpY3Rpb24pIHtcbiAgICAgIHJldHVybiBuZXcgU3ByaW5nQ29uZmlnKFxuICAgICAgICAwLFxuICAgICAgICBPcmlnYW1pVmFsdWVDb252ZXJ0ZXIuZnJpY3Rpb25Gcm9tT3JpZ2FtaVZhbHVlKGZyaWN0aW9uKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIFNwcmluZ0NvbmZpZy5ERUZBVUxUX09SSUdBTUlfU1BSSU5HX0NPTkZJRyA9XG4gICAgU3ByaW5nQ29uZmlnLmZyb21PcmlnYW1pVGVuc2lvbkFuZEZyaWN0aW9uKDQwLCA3KTtcblxuICB1dGlsLmV4dGVuZChTcHJpbmdDb25maWcucHJvdG90eXBlLCB7ZnJpY3Rpb246IDAsIHRlbnNpb246IDB9KTtcblxuICAvLyBIZXJlIGFyZSBhIGNvdXBsZSBvZiBmdW5jdGlvbiB0byBjb252ZXJ0IGNvbG9ycyBiZXR3ZWVuIGhleCBjb2RlcyBhbmQgUkdCXG4gIC8vIGNvbXBvbmVudCB2YWx1ZXMuIFRoZXNlIGFyZSBoYW5keSB3aGVuIHBlcmZvcm1pbmcgY29sb3JcbiAgLy8gdHdlZW5pbmcgYW5pbWF0aW9ucy5cbiAgdmFyIGNvbG9yQ2FjaGUgPSB7fTtcbiAgdXRpbC5oZXhUb1JHQiA9IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgaWYgKGNvbG9yQ2FjaGVbY29sb3JdKSB7XG4gICAgICByZXR1cm4gY29sb3JDYWNoZVtjb2xvcl07XG4gICAgfVxuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgnIycsICcnKTtcbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSAzKSB7XG4gICAgICBjb2xvciA9IGNvbG9yWzBdICsgY29sb3JbMF0gKyBjb2xvclsxXSArIGNvbG9yWzFdICsgY29sb3JbMl0gKyBjb2xvclsyXTtcbiAgICB9XG4gICAgdmFyIHBhcnRzID0gY29sb3IubWF0Y2goLy57Mn0vZyk7XG5cbiAgICB2YXIgcmV0ID0ge1xuICAgICAgcjogcGFyc2VJbnQocGFydHNbMF0sIDE2KSxcbiAgICAgIGc6IHBhcnNlSW50KHBhcnRzWzFdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChwYXJ0c1syXSwgMTYpXG4gICAgfTtcblxuICAgIGNvbG9yQ2FjaGVbY29sb3JdID0gcmV0O1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgdXRpbC5yZ2JUb0hleCA9IGZ1bmN0aW9uKHIsIGcsIGIpIHtcbiAgICByID0gci50b1N0cmluZygxNik7XG4gICAgZyA9IGcudG9TdHJpbmcoMTYpO1xuICAgIGIgPSBiLnRvU3RyaW5nKDE2KTtcbiAgICByID0gci5sZW5ndGggPCAyID8gJzAnICsgciA6IHI7XG4gICAgZyA9IGcubGVuZ3RoIDwgMiA/ICcwJyArIGcgOiBnO1xuICAgIGIgPSBiLmxlbmd0aCA8IDIgPyAnMCcgKyBiIDogYjtcbiAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xuICB9O1xuXG4gIHZhciBNYXRoVXRpbCA9IHJlYm91bmQuTWF0aFV0aWwgPSB7XG4gICAgLy8gVGhpcyBoZWxwZXIgZnVuY3Rpb24gZG9lcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9mIGEgdmFsdWUgZnJvbVxuICAgIC8vIG9uZSByYW5nZSB0byBhbm90aGVyLiBUaGlzIGNhbiBiZSB2ZXJ5IHVzZWZ1bCBmb3IgY29udmVydGluZyB0aGVcbiAgICAvLyBtb3Rpb24gb2YgYSBTcHJpbmcgdG8gYSByYW5nZSBvZiBVSSBwcm9wZXJ0eSB2YWx1ZXMuIEZvciBleGFtcGxlIGFcbiAgICAvLyBzcHJpbmcgbW92aW5nIGZyb20gcG9zaXRpb24gMCB0byAxIGNvdWxkIGJlIGludGVycG9sYXRlZCB0byBtb3ZlIGFcbiAgICAvLyB2aWV3IGZyb20gcGl4ZWwgMzAwIHRvIDM1MCBhbmQgc2NhbGUgaXQgZnJvbSAwLjUgdG8gMS4gVGhlIGN1cnJlbnRcbiAgICAvLyBwb3NpdGlvbiBvZiB0aGUgYFNwcmluZ2AganVzdCBuZWVkcyB0byBiZSBydW4gdGhyb3VnaCB0aGlzIG1ldGhvZFxuICAgIC8vIHRha2luZyBpdHMgaW5wdXQgcmFuZ2UgaW4gdGhlIF9mcm9tXyBwYXJhbWV0ZXJzIHdpdGggdGhlIHByb3BlcnR5XG4gICAgLy8gYW5pbWF0aW9uIHJhbmdlIGluIHRoZSBfdG9fIHBhcmFtZXRlcnMuXG4gICAgbWFwVmFsdWVJblJhbmdlOiBmdW5jdGlvbih2YWx1ZSwgZnJvbUxvdywgZnJvbUhpZ2gsIHRvTG93LCB0b0hpZ2gpIHtcbiAgICAgIHZhciBmcm9tUmFuZ2VTaXplID0gZnJvbUhpZ2ggLSBmcm9tTG93O1xuICAgICAgdmFyIHRvUmFuZ2VTaXplID0gdG9IaWdoIC0gdG9Mb3c7XG4gICAgICB2YXIgdmFsdWVTY2FsZSA9ICh2YWx1ZSAtIGZyb21Mb3cpIC8gZnJvbVJhbmdlU2l6ZTtcbiAgICAgIHJldHVybiB0b0xvdyArICh2YWx1ZVNjYWxlICogdG9SYW5nZVNpemUpO1xuICAgIH0sXG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0d28gaGV4IGNvbG9ycyBpbiBhIDAgLSAxIHJhbmdlIG9yIG9wdGlvbmFsbHkgcHJvdmlkZSBhXG4gICAgLy8gY3VzdG9tIHJhbmdlIHdpdGggZnJvbUxvdyxmcm9tSGlnaHQuIFRoZSBvdXRwdXQgd2lsbCBiZSBpbiBoZXggYnkgZGVmYXVsdFxuICAgIC8vIHVubGVzcyBhc1JHQiBpcyB0cnVlIGluIHdoaWNoIGNhc2UgaXQgd2lsbCBiZSByZXR1cm5lZCBhcyBhbiByZ2Igc3RyaW5nLlxuICAgIGludGVycG9sYXRlQ29sb3I6XG4gICAgICBmdW5jdGlvbih2YWwsIHN0YXJ0Q29sb3IsIGVuZENvbG9yLCBmcm9tTG93LCBmcm9tSGlnaCwgYXNSR0IpIHtcbiAgICAgIGZyb21Mb3cgPSBmcm9tTG93ID09PSB1bmRlZmluZWQgPyAwIDogZnJvbUxvdztcbiAgICAgIGZyb21IaWdoID0gZnJvbUhpZ2ggPT09IHVuZGVmaW5lZCA/IDEgOiBmcm9tSGlnaDtcbiAgICAgIHN0YXJ0Q29sb3IgPSB1dGlsLmhleFRvUkdCKHN0YXJ0Q29sb3IpO1xuICAgICAgZW5kQ29sb3IgPSB1dGlsLmhleFRvUkdCKGVuZENvbG9yKTtcbiAgICAgIHZhciByID0gTWF0aC5mbG9vcihcbiAgICAgICAgdXRpbC5tYXBWYWx1ZUluUmFuZ2UodmFsLCBmcm9tTG93LCBmcm9tSGlnaCwgc3RhcnRDb2xvci5yLCBlbmRDb2xvci5yKVxuICAgICAgKTtcbiAgICAgIHZhciBnID0gTWF0aC5mbG9vcihcbiAgICAgICAgdXRpbC5tYXBWYWx1ZUluUmFuZ2UodmFsLCBmcm9tTG93LCBmcm9tSGlnaCwgc3RhcnRDb2xvci5nLCBlbmRDb2xvci5nKVxuICAgICAgKTtcbiAgICAgIHZhciBiID0gTWF0aC5mbG9vcihcbiAgICAgICAgdXRpbC5tYXBWYWx1ZUluUmFuZ2UodmFsLCBmcm9tTG93LCBmcm9tSGlnaCwgc3RhcnRDb2xvci5iLCBlbmRDb2xvci5iKVxuICAgICAgKTtcbiAgICAgIGlmIChhc1JHQikge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHV0aWwucmdiVG9IZXgociwgZywgYik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uKGRlZykge1xuICAgICAgcmV0dXJuIChkZWcgKiBNYXRoLlBJKSAvIDE4MDtcbiAgICB9LFxuXG4gICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24ocmFkKSB7XG4gICAgICByZXR1cm4gKHJhZCAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIH1cblxuICB9XG5cbiAgdXRpbC5leHRlbmQodXRpbCwgTWF0aFV0aWwpO1xuXG5cbiAgLy8gVXRpbGl0aWVzXG4gIC8vIC0tLS0tLS0tLVxuICAvLyBIZXJlIGFyZSBhIGZldyB1c2VmdWwgSmF2YVNjcmlwdCB1dGlsaXRpZXMuXG5cbiAgLy8gTG9wIG9mZiB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIHRoZSByZWZlcmVuY2UgaW4gdGhlIEFycmF5LlxuICBmdW5jdGlvbiByZW1vdmVGaXJzdChhcnJheSwgaXRlbSkge1xuICAgIHZhciBpZHggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIGlkeCAhPSAtMSAmJiBhcnJheS5zcGxpY2UoaWR4LCAxKTtcbiAgfVxuXG4gIHZhciBfb25GcmFtZTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX29uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgIH07XG4gIH1cbiAgaWYgKCFfb25GcmFtZSAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy50aXRsZSA9PT0gJ25vZGUnKSB7XG4gICAgX29uRnJhbWUgPSBzZXRJbW1lZGlhdGU7XG4gIH1cblxuICAvLyBDcm9zcyBicm93c2VyL25vZGUgdGltZXIgZnVuY3Rpb25zLlxuICB1dGlsLm9uRnJhbWUgPSBmdW5jdGlvbiBvbkZyYW1lKGZ1bmMpIHtcbiAgICByZXR1cm4gX29uRnJhbWUoZnVuYyk7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBwdWJsaWMgYXBpIHVzaW5nIGV4cG9ydHMgZm9yIGNvbW1vbiBqcyBvciB0aGUgd2luZG93IGZvclxuICAvLyBub3JtYWwgYnJvd3NlciBpbmNsdXNpb24uXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJykge1xuICAgIHV0aWwuZXh0ZW5kKGV4cG9ydHMsIHJlYm91bmQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cucmVib3VuZCA9IHJlYm91bmQ7XG4gIH1cbn0pKCk7XG5cblxuLy8gTGVnYWwgU3R1ZmZcbi8vIC0tLS0tLS0tLS0tXG4vKipcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTMsIEZhY2Vib29rLCBJbmMuXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiAgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYm91bmQvcmVib3VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MlxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3M1xuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMTc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDZcbiAqKi8iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiAwIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbFRvcDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5zY3JvbGxUb3AsIHRoaXMuc3RhdGUuc2Nyb2xsTGVmdClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9zY3JvbGwuanNcbiAqKi8iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7Q29tcG9uZW50fSA9IFJlYWN0O1xuXG5jb25zdCB0cmFuc2xhdGUzZCA9ICh4LHkseikgPT4gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250cm9sVGl0bGU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGxpbmVIZWlnaHQ6ICczMHB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgY29udHJvbFJhbmdlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBsaW5lSGVpZ2h0OiAnMzBweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH0sXG4gIGNvbnRyb2xWYWx1ZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbGluZUhlaWdodDogJzMwcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJywgY29sb3I6ICdncmV5JywgZm9udFNpemU6ICcxMHB4Jywgd2lkdGg6ICcyMHB4JyB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyB2YWx1ZTogMCwgbWluOiAwLCBtYXg6IDEwMCwgbmFtZTogbnVsbCB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHttaW4sbWF4LHZhbHVlLG9uQ2hhbmdlLG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiA8ZGl2IHsuLi50aGlzLnByb3BzfT5cbiAgICAgIHtuYW1lICYmIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250cm9sVGl0bGV9PntuYW1lfTwvZGl2PiB9XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXttaW59IG1heD17bWF4fSBzdHlsZT17c3R5bGVzLmNvbnRyb2xSYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQpIH0vPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRyb2xWYWx1ZX0+e3ZhbHVlfTwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9yYW5nZS1jb250cm9sLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
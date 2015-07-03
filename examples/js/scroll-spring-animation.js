webpackJsonp([4],{

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
	
	var _require = __webpack_require__(168);
	
	var Spring = _require.Spring;
	
	var Scroll = __webpack_require__(172);
	var RangeControl = __webpack_require__(173);
	
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
	                  React.createElement('img', { src: 'bg.jpg', width: '1920px',
	                    style: _extends({}, styles.parallaxImage, {
	                      width: '100%',
	                      minWidth: '800px',
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

/***/ 168:
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
	
	var _rebound = __webpack_require__(169);
	
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

/***/ 169:
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170), __webpack_require__(171).setImmediate))

/***/ },

/***/ 170:
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

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(170).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(171).setImmediate, __webpack_require__(171).clearImmediate))

/***/ },

/***/ 172:
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

/***/ 173:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2Nyb2xsLXNwcmluZy1hbmltYXRpb24vc3ByaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYm91bmQvcmVib3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi9yYW5nZS1jb250cm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsS0FBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQztLQUN4QixTQUFTLEdBQUksS0FBSyxDQUFsQixTQUFTOztnQkFDQyxtQkFBTyxDQUFDLEdBQVcsQ0FBQzs7S0FBOUIsTUFBTSxZQUFOLE1BQU07O0FBQ2IsS0FBTSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFVLENBQUMsQ0FBQztBQUNuQyxLQUFNLFlBQVksR0FBRyxtQkFBTyxDQUFDLEdBQWlCLENBQUMsQ0FBQzs7QUFFaEQsS0FBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOzJCQUFvQixDQUFDLFlBQU8sQ0FBQyxZQUFPLENBQUM7RUFBSyxDQUFDOztBQUVyRSxLQUFNLE1BQU0sR0FBRztBQUNiLFFBQUssRUFBRSxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUM7QUFDOUIsb0JBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSx3REFBdUQsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0EsbURBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQSx3Q0FBdUMsd0JBQXdCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsRUFBRTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBQyIsImZpbGUiOiJzY3JvbGwtc3ByaW5nLWFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XG5jb25zdCB7U3ByaW5nfSA9IHJlcXVpcmUoJy4vc3ByaW5ncycpO1xuY29uc3QgU2Nyb2xsID0gcmVxdWlyZSgnLi9zY3JvbGwnKTtcbmNvbnN0IFJhbmdlQ29udHJvbCA9IHJlcXVpcmUoJy4vcmFuZ2UtY29udHJvbCcpO1xuXG5jb25zdCB0cmFuc2xhdGUzZCA9ICh4LHkseikgPT4gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0aXRsZToge21hcmdpbkJvdHRvbTogJzEwMHB4J30sXG4gIHBhcmFsbGF4Q29udGFpbmVyOiB7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgcGFyYWxsYXhUaXRsZTogeyB6SW5kZXg6IDEwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNTBweCcsIGxlZnQ6ICc1MHB4JywgY29sb3I6ICd3aGl0ZScsIHRleHRTaGFkb3c6ICcwIDEwcHggNDBweCBibGFjaycsZm9udFNpemU6ICcxMDBweCcsIGZvbnRXZWlnaHQ6IDEwMDAgfSxcbiAgcGFyYWxsYXhJbWFnZTogeyB6SW5kZXg6IDEsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH0sXG4gIGNvbnRyb2w6IHtkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgcGFkZGluZzogJzAgMjBweCd9XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmcmljdGlvbjogMTUsIHRlbnNpb246IDE4MCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAgPGRpdj5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnRpdGxlfT5TY3JvbGwgYW5kIFNwcmluZyBBbmltYXRpb24gRGVtbzwvaDE+XG5cbiAgICAgIDxSYW5nZUNvbnRyb2wgbmFtZT1cInRlbnNpb25cIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiMjAwXCIgc3R5bGU9e3N0eWxlcy5jb250cm9sfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZW5zaW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlbnNpb246IH5+ZXZlbnQudGFyZ2V0LnZhbHVlIH0pfS8+XG5cbiAgICAgIDxSYW5nZUNvbnRyb2wgbmFtZT1cImZyaWN0aW9uXCIgbWluPVwiMVwiIG1heD1cIjMwXCIgc3R5bGU9e3N0eWxlcy5jb250cm9sfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mcmljdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBmcmljdGlvbjogfn5ldmVudC50YXJnZXQudmFsdWUgfSl9Lz5cblxuICAgICAgPFNjcm9sbD57IHNjcm9sbFRvcCA9PlxuICAgICAgICA8U3ByaW5nIHRvPXtzY3JvbGxUb3B9IGZyaWN0aW9uPXt0aGlzLnN0YXRlLmZyaWN0aW9ufSB0ZW5zaW9uPXt0aGlzLnN0YXRlLnRlbnNpb259Pnsgb2Zmc2V0WSA9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYXJhbGxheENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5wYXJhbGxheFRpdGxlfT5cbiAgICAgICAgICAgICAgTXVzaWMgaXMg4p2kXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJiZy5qcGdcIiB3aWR0aD1cIjE5MjBweFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4uc3R5bGVzLnBhcmFsbGF4SW1hZ2UsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzgwMHB4JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLW9mZnNldFkvMi01MCwwKSB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9PC9TcHJpbmc+XG4gICAgICB9PC9TY3JvbGw+XG5cbiAgICAgIDxkaXY+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsaWNrci5jb20vcGhvdG9zL3ViZXlkLzE5MTUyODQ4NjY5L2luL3Bvb2wtODM4MjM4NTlATjAwL1wiPlxuICAgICAgICBpbWFnZSBieSBVYmV5ZDwvYT48L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cbn07XG5cblJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc2Nyb2xsLXNwcmluZy1hbmltYXRpb24vYXBwLmpzXG4gKiovIiwiLy8gY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aHJlZXBvaW50b25lL3JlYWN0LXNwcmluZ3MvbWFzdGVyL3NyYy5qc1xuLy8gYmVjYXVzZSByZWFjdC1uYXRpdmUgc3VwcG9ydCBicmVha3MgdGhlIGJ1aWxkIHByb2Nlc3NcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHRyeXsgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC1uYXRpdmUnKTsgfVxuLy8gY2F0Y2goZSl7IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTsgfVxuLy8gdGhlIGFib3ZlIGJpdCBzaG91bGQgZ2V0IGJldHRlciBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMjBcblxuLy8gc3ByaW5ncywgYWxsIHRoYXRcbmltcG9ydCByZWJvdW5kIGZyb20gJ3JlYm91bmQnO1xuXG5sZXQgbm9vcCA9ICgpID0+IHt9OyAvLyBkZWZhdWx0IG9uU3ByaW5nVXBkYXRlXG5cbmV4cG9ydCBjb25zdCBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldERlZmF1bHRQcm9wcygpe1xuICAgIHJldHVybiB7XG4gICAgICAvLyB3ZSB1c2UgYSBjb21tb24gJ2dsb2JhbCcgc3ByaW5nU3lzdGVtIGZvciBwZXJmLCBidXQgeW91IGNhbiBwYXNzIGluIHlvdXIgb3duXG4gICAgICBzcHJpbmdTeXN0ZW06IG5ldyByZWJvdW5kLlNwcmluZ1N5c3RlbSgpLFxuXG4gICAgICAvLyBmcm9tIGFuZCB0byBhcmUgYW5hbG9nb3VzIHRvIHNldEN1cnJlbnRWYWx1ZSgpIGFuZCBzZXRFbmRWYWx1ZSgpXG4gICAgICBmcm9tOiAwLFxuICAgICAgdG86IDAsXG5cbiAgICAgIC8vIG1vcmUgcmVib3VuZCBvcHRpb25zXG4gICAgICB0ZW5zaW9uOiA1MCxcbiAgICAgIGZyaWN0aW9uOiAzLFxuICAgICAgb3ZlclNob290Q2xhbXBpbmc6IGZhbHNlLFxuICAgICAgYXRSZXN0OiBmYWxzZSxcbiAgICAgIG9uU3ByaW5nVXBkYXRlOiBub29wLFxuICAgICAgb25TcHJpbmc6IG5vb3AsXG4gICAgICBjaGlsZHJlbjogKCkgPT4gbnVsbFxuXG4gICAgICAvLyB0b2RvIC0gdmVsb2NpdHk/XG4gICAgfTtcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBmcm9tOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGZyaWN0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHRlbnNpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgdG86IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgYXRSZXN0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVyU2hvb3RDbGFtcGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3ByaW5nVXBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNwcmluZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBzdGF0aWNzOiB7XG4gICAgLy8gaGlnaCBwZXJmIFwic2V0dGVyc1wiLFxuICAgIGZyaWN0aW9uKHNwcmluZywgcHJvcHMpe1xuICAgICAgc3ByaW5nLmdldFNwcmluZ0NvbmZpZygpLmZyaWN0aW9uID1cbiAgICAgICAgcmVib3VuZC5PcmlnYW1pVmFsdWVDb252ZXJ0ZXIuZnJpY3Rpb25Gcm9tT3JpZ2FtaVZhbHVlKHByb3BzLmZyaWN0aW9uKTtcbiAgICB9LFxuICAgIHRlbnNpb24oc3ByaW5nLCBwcm9wcyl7XG4gICAgICBzcHJpbmcuZ2V0U3ByaW5nQ29uZmlnKCkudGVuc2lvbiA9XG4gICAgICAgIHJlYm91bmQuT3JpZ2FtaVZhbHVlQ29udmVydGVyLmZyaWN0aW9uRnJvbU9yaWdhbWlWYWx1ZShwcm9wcy50ZW5zaW9uKTtcbiAgICB9LFxuICAgIGZyb20oc3ByaW5nLCBwcm9wcyl7XG4gICAgICBzcHJpbmcuc2V0Q3VycmVudFZhbHVlKHByb3BzLmZyb20sIHRydWUpLnNldEVuZFZhbHVlKHNwcmluZy5nZXRFbmRWYWx1ZSgpKTtcbiAgICB9LFxuICAgIG92ZXJTaG9vdENsYW1waW5nKHNwcmluZywgcHJvcHMpe1xuICAgICAgc3ByaW5nLnNldE92ZXJzaG9vdENsYW1waW5nRW5hYmxlZChwcm9wcy5vdmVyU2hvb3RDbGFtcGluZyk7XG4gICAgfSxcbiAgICB0byhzcHJpbmcsIHByb3BzKXtcbiAgICAgIGlmKHByb3BzLmF0UmVzdCl7XG4gICAgICAgIHNwcmluZy5zZXRDdXJyZW50VmFsdWUocHJvcHMudG8pLnNldEF0UmVzdCgpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgc3ByaW5nLnNldEVuZFZhbHVlKHByb3BzLnRvKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYWNjZXB0KHByb3BzLCBpbml0aWFsKXtcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrID0+IHtcbiAgICAgIGlmKFNwcmluZ1trXSAmJiAoaW5pdGlhbCB8fCAocHJvcHNba10gIT09IHRoaXMucHJvcHNba10pKSl7XG4gICAgICAgIFNwcmluZ1trXSh0aGlzLnNwcmluZywgcHJvcHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIGNvbXBvbmVudHMgd2l0aCAncmVuZGVyIGNhbGxiYWNrcycgY2FuL3Nob3VsZCByZW5kZXIgJ3Rocm91Z2gnLlxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZnJvbVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGNyZWF0ZSB0aGUgc3ByaW5nIG9uIG1vdW50aW5nLlxuICAgIHRoaXMuc3ByaW5nID0gdGhpcy5wcm9wcy5zcHJpbmdTeXN0ZW0uY3JlYXRlU3ByaW5nKHRoaXMucHJvcHMudGVuc2lvbiwgdGhpcy5wcm9wcy5mcmljdGlvbikuYWRkTGlzdGVuZXIoe1xuICAgICAgb25TcHJpbmdVcGRhdGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnNwcmluZy5nZXRDdXJyZW50VmFsdWUoKSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNwcmluZ1VwZGF0ZSh0aGlzLnNwcmluZyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vblNwcmluZyh0aGlzLnNwcmluZyk7XG4gICAgdGhpcy5hY2NlcHQodGhpcy5wcm9wcywgdHJ1ZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLmFjY2VwdChuZXh0UHJvcHMsIGZhbHNlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyAuLi5hbmQgZGVzdHJveSBvbiBvbm1vdW50aW5nXG4gICAgdGhpcy5zcHJpbmcuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLnNwcmluZztcbiAgICB0aGlzLnByb3BzLm9uU3ByaW5nKHVuZGVmaW5lZCk7XG4gIH0sXG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgU3ByaW5ncyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0RGVmYXVsdFByb3BzKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uU3ByaW5nVXBkYXRlOiBub29wLFxuICAgICAgb25TcHJpbmc6IG5vb3AsXG4gICAgICBjaGlsZHJlbjogKCkgPT4gbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TcHJpbmdVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3ByaW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBsaWtlIGFib3ZlXG4gIH0sXG4gIG9uU3ByaW5nVXBkYXRlKGtleSwgc3ByaW5nKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtrZXldOiBzcHJpbmcuZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uU3ByaW5nVXBkYXRlKGtleSwgc3ByaW5nKTtcbiAgfSxcblxuICB0byhwb3MsIGtleXMsIGluZGV4LCB2YWx1ZSl7XG4gICAgaWYoaW5kZXggPT09IC0xKXtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHZhbHVlKTtcbiAgICB9XG4gICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgIHJldHVybiA8U3ByaW5nIHsuLi50aGlzLnByb3BzfSBrZXk9e2tleX0gdG89e3Bvc1trZXldfSBvblNwcmluZz17c3ByaW5nID0+IHRoaXMucHJvcHMub25TcHJpbmcoa2V5LCBzcHJpbmcpfSBvblNwcmluZ1VwZGF0ZT17c3ByaW5nID0+IHRoaXMub25TcHJpbmdVcGRhdGUoa2V5LCBzcHJpbmcpfT5cbiAgICAgIHt2YWwgPT4gdGhpcy50byhwb3MsIGtleXMsIGluZGV4IC0gMSwgKHZhbHVlW2tleV0gPSB2YWwsIHZhbHVlKSl9XG4gICAgPC9TcHJpbmc+O1xuICB9LFxuXG4gIC8vIHRvZG8gLSBzb3J0IGtleXMgYWxwaGFiZXRpY2FsbHk/XG4gIHJlbmRlcigpIHtcbiAgICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGJyZWFrIGB0b2AgaW50byBrZXkgdmFsdWUgcGFpcnMsIGFuZCB0aGVuIHJldHVybiBhIG5lc3Qgb2YgPFNwcmluZz5zXG4gICAgLy8gUmVhY3QgdGFrZXMgY2FyZSBvZiB0aGUgYm9yaW5nIGJpdHMgKGNhY2hpbmcsIHN0YXRlLCBldGMpXG4gICAgbGV0IHt0b30gPSB0aGlzLnByb3BzLCBrZXlzID0gT2JqZWN0LmtleXModG8pO1xuICAgIHJldHVybiB0aGlzLnRvKHRvLCBrZXlzLCBrZXlzLmxlbmd0aCAtIDEsIHt9KTtcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3NwcmluZ3MuanNcbiAqKi8iLCIvLyBSZWJvdW5kXG4vLyA9PT09PT09XG4vLyAqKlJlYm91bmQqKiBpcyBhIHNpbXBsZSBsaWJyYXJ5IHRoYXQgbW9kZWxzIFNwcmluZyBkeW5hbWljcyBmb3IgdGhlXG4vLyBwdXJwb3NlIG9mIGRyaXZpbmcgcGh5c2ljYWwgYW5pbWF0aW9ucy5cbi8vXG4vLyBPcmlnaW5cbi8vIC0tLS0tLVxuLy8gW1JlYm91bmRdKGh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVib3VuZCkgd2FzIG9yaWdpbmFsbHkgd3JpdHRlblxuLy8gaW4gSmF2YSB0byBwcm92aWRlIGEgbGlnaHR3ZWlnaHQgcGh5c2ljcyBzeXN0ZW0gZm9yXG4vLyBbSG9tZV0oaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5mYWNlYm9vay5ob21lKSBhbmRcbi8vIFtDaGF0IEhlYWRzXShodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZhY2Vib29rLm9yY2EpXG4vLyBvbiBBbmRyb2lkLiBJdCdzIG5vdyBiZWVuIGFkb3B0ZWQgYnkgc2V2ZXJhbCBvdGhlciBBbmRyb2lkXG4vLyBhcHBsaWNhdGlvbnMuIFRoaXMgSmF2YVNjcmlwdCBwb3J0IHdhcyB3cml0dGVuIHRvIHByb3ZpZGUgYSBxdWlja1xuLy8gd2F5IHRvIGRlbW9uc3RyYXRlIFJlYm91bmQgYW5pbWF0aW9ucyBvbiB0aGUgd2ViIGZvciBhXG4vLyBbY29uZmVyZW5jZSB0YWxrXShodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXM1a05tLURneWpZKS4gU2luY2UgdGhlblxuLy8gdGhlIEphdmFTY3JpcHQgdmVyc2lvbiBoYXMgYmVlbiB1c2VkIHRvIGJ1aWxkIHNvbWUgcmVhbGx5IG5pY2UgaW50ZXJmYWNlcy5cbi8vIENoZWNrIG91dCBbYnJhbmRvbndhbGtpbi5jb21dKGh0dHA6Ly9icmFuZG9ud2Fsa2luLmNvbSkgZm9yIGFuXG4vLyBleGFtcGxlLlxuLy9cbi8vIE92ZXJ2aWV3XG4vLyAtLS0tLS0tLVxuLy8gVGhlIExpYnJhcnkgcHJvdmlkZXMgYSBTcHJpbmdTeXN0ZW0gZm9yIG1haW50YWluaW5nIGEgc2V0IG9mIFNwcmluZ1xuLy8gb2JqZWN0cyBhbmQgaXRlcmF0aW5nIHRob3NlIFNwcmluZ3MgdGhyb3VnaCBhIHBoeXNpY3Mgc29sdmVyIGxvb3Bcbi8vIHVudGlsIGVxdWlsaWJyaXVtIGlzIGFjaGlldmVkLiBUaGUgU3ByaW5nIGNsYXNzIGlzIHRoZSBiYXNpY1xuLy8gYW5pbWF0aW9uIGRyaXZlciBwcm92aWRlZCBieSBSZWJvdW5kLiBCeSBhdHRhY2hpbmcgYSBsaXN0ZW5lciB0b1xuLy8gYSBTcHJpbmcsIHlvdSBjYW4gb2JzZXJ2ZSBpdHMgbW90aW9uLiBUaGUgb2JzZXJ2ZXIgZnVuY3Rpb24gaXNcbi8vIG5vdGlmaWVkIG9mIHBvc2l0aW9uIGNoYW5nZXMgb24gdGhlIHNwcmluZyBhcyBpdCBzb2x2ZXMgZm9yXG4vLyBlcXVpbGlicml1bS4gVGhlc2UgcG9zaXRpb24gdXBkYXRlcyBjYW4gYmUgbWFwcGVkIHRvIGFuIGFuaW1hdGlvblxuLy8gcmFuZ2UgdG8gZHJpdmUgYW5pbWF0ZWQgcHJvcGVydHkgdXBkYXRlcyBvbiB5b3VyIHVzZXIgaW50ZXJmYWNlXG4vLyBlbGVtZW50cyAodHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsZSwgZXRjKS5cbi8vXG4vLyBFeGFtcGxlXG4vLyAtLS0tLS0tXG4vLyBIZXJlJ3MgYSBzaW1wbGUgZXhhbXBsZS4gUHJlc3NpbmcgYW5kIHJlbGVhc2luZyBvbiB0aGUgbG9nbyBiZWxvd1xuLy8gd2lsbCBjYXVzZSBpdCB0byBzY2FsZSB1cCBhbmQgZG93biB3aXRoIGEgc3ByaW5neSBhbmltYXRpb24uXG4vL1xuLy8gPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyOyBtYXJnaW4tYm90dG9tOjUwcHg7IG1hcmdpbi10b3A6NTBweFwiPlxuLy8gICA8aW1nXG4vLyAgICAgc3JjPVwiaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWJvdW5kL2ltYWdlcy9yZWJvdW5kLnBuZ1wiXG4vLyAgICAgaWQ9XCJsb2dvXCJcbi8vICAgLz5cbi8vIDwvZGl2PlxuLy8gPHNjcmlwdCBzcmM9XCIuLi9yZWJvdW5kLm1pbi5qc1wiPjwvc2NyaXB0PlxuLy8gPHNjcmlwdD5cbi8vXG4vLyBmdW5jdGlvbiBzY2FsZShlbCwgdmFsKSB7XG4vLyAgIGVsLnN0eWxlLm1velRyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLm1zVHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID1cbi8vICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoJyArIHZhbCArICcsICcgKyB2YWwgKyAnLCAxKSc7XG4vLyB9XG4vLyB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xuLy9cbi8vIHZhciBzcHJpbmdTeXN0ZW0gPSBuZXcgcmVib3VuZC5TcHJpbmdTeXN0ZW0oKTtcbi8vIHZhciBzcHJpbmcgPSBzcHJpbmdTeXN0ZW0uY3JlYXRlU3ByaW5nKDUwLCAzKTtcbi8vIHNwcmluZy5hZGRMaXN0ZW5lcih7XG4vLyAgIG9uU3ByaW5nVXBkYXRlOiBmdW5jdGlvbihzcHJpbmcpIHtcbi8vICAgICB2YXIgdmFsID0gc3ByaW5nLmdldEN1cnJlbnRWYWx1ZSgpO1xuLy8gICAgIHZhbCA9IHJlYm91bmQuTWF0aFV0aWwubWFwVmFsdWVJblJhbmdlKHZhbCwgMCwgMSwgMSwgMC41KTtcbi8vICAgICBzY2FsZShlbCwgdmFsKTtcbi8vICAgfVxuLy8gfSk7XG4vL1xuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgxKTtcbi8vIH0pO1xuLy9cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4vLyAgIHNwcmluZy5zZXRFbmRWYWx1ZSgwKTtcbi8vIH0pO1xuLy9cbi8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDApO1xuLy8gfSk7XG4vL1xuLy8gPC9zY3JpcHQ+XG4vL1xuLy8gSGVyZSdzIGhvdyBpdCB3b3Jrcy5cbi8vXG4vLyBgYGBcbi8vIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgbG9nbyBlbGVtZW50LlxuLy8gdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbi8vXG4vLyAvLyBjcmVhdGUgYSBTcHJpbmdTeXN0ZW0gYW5kIGEgU3ByaW5nIHdpdGggYSBib3VuY3kgY29uZmlnLlxuLy8gdmFyIHNwcmluZ1N5c3RlbSA9IG5ldyByZWJvdW5kLlNwcmluZ1N5c3RlbSgpO1xuLy8gdmFyIHNwcmluZyA9IHNwcmluZ1N5c3RlbS5jcmVhdGVTcHJpbmcoNTAsIDMpO1xuLy9cbi8vIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBzcHJpbmcuIEV2ZXJ5IHRpbWUgdGhlIHBoeXNpY3Ncbi8vIC8vIHNvbHZlciB1cGRhdGVzIHRoZSBTcHJpbmcncyB2YWx1ZSBvblNwcmluZ1VwZGF0ZSB3aWxsXG4vLyAvLyBiZSBjYWxsZWQuXG4vLyBzcHJpbmcuYWRkTGlzdGVuZXIoe1xuLy8gICBvblNwcmluZ1VwZGF0ZTogZnVuY3Rpb24oc3ByaW5nKSB7XG4vLyAgICAgdmFyIHZhbCA9IHNwcmluZy5nZXRDdXJyZW50VmFsdWUoKTtcbi8vICAgICB2YWwgPSByZWJvdW5kLk1hdGhVdGlsXG4vLyAgICAgICAgICAgICAgICAgIC5tYXBWYWx1ZUluUmFuZ2UodmFsLCAwLCAxLCAxLCAwLjUpO1xuLy8gICAgIHNjYWxlKGVsLCB2YWwpO1xuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyAvLyBMaXN0ZW4gZm9yIG1vdXNlIGRvd24vdXAvb3V0IGFuZCB0b2dnbGUgdGhlXG4vLyAvL3NwcmluZ3MgZW5kVmFsdWUgZnJvbSAwIHRvIDEuXG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDEpO1xuLy8gfSk7XG4vL1xuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbi8vICAgc3ByaW5nLnNldEVuZFZhbHVlKDApO1xuLy8gfSk7XG4vL1xuLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xuLy8gICBzcHJpbmcuc2V0RW5kVmFsdWUoMCk7XG4vLyB9KTtcbi8vXG4vLyAvLyBIZWxwZXIgZm9yIHNjYWxpbmcgYW4gZWxlbWVudCB3aXRoIGNzcyB0cmFuc2Zvcm1zLlxuLy8gZnVuY3Rpb24gc2NhbGUoZWwsIHZhbCkge1xuLy8gICBlbC5zdHlsZS5tb3pUcmFuc2Zvcm0gPVxuLy8gICBlbC5zdHlsZS5tc1RyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9XG4vLyAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKCcgK1xuLy8gICAgIHZhbCArICcsICcgKyB2YWwgKyAnLCAxKSc7XG4vLyB9XG4vLyBgYGBcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcmVib3VuZCA9IHt9O1xuICB2YXIgdXRpbCA9IHJlYm91bmQudXRpbCA9IHt9O1xuICB2YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQgb2JqZWN0LlxuICB1dGlsLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGNvbmNhdC5jYWxsKGFyZ3MsIHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQWRkIGFsbCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc291cmNlIHRvIHRoZSB0YXJnZXQuXG4gIHV0aWwuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFNwcmluZ1N5c3RlbVxuICAvLyAtLS0tLS0tLS0tLS1cbiAgLy8gKipTcHJpbmdTeXN0ZW0qKiBpcyBhIHNldCBvZiBTcHJpbmdzIHRoYXQgYWxsIHJ1biBvbiB0aGUgc2FtZSBwaHlzaWNzXG4gIC8vIHRpbWluZyBsb29wLiBUbyBnZXQgc3RhcnRlZCB3aXRoIGEgUmVib3VuZCBhbmltYXRpb24geW91IGZpcnN0XG4gIC8vIGNyZWF0ZSBhIG5ldyBTcHJpbmdTeXN0ZW0gYW5kIHRoZW4gYWRkIHNwcmluZ3MgdG8gaXQuXG4gIHZhciBTcHJpbmdTeXN0ZW0gPSByZWJvdW5kLlNwcmluZ1N5c3RlbSA9IGZ1bmN0aW9uIFNwcmluZ1N5c3RlbShsb29wZXIpIHtcbiAgICB0aGlzLl9zcHJpbmdSZWdpc3RyeSA9IHt9O1xuICAgIHRoaXMuX2FjdGl2ZVNwcmluZ3MgPSBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzID0gW107XG4gICAgdGhpcy5sb29wZXIgPSBsb29wZXIgfHwgbmV3IEFuaW1hdGlvbkxvb3BlcigpO1xuICAgIHRoaXMubG9vcGVyLnNwcmluZ1N5c3RlbSA9IHRoaXM7XG4gIH07XG5cbiAgdXRpbC5leHRlbmQoU3ByaW5nU3lzdGVtLnByb3RvdHlwZSwge1xuXG4gICAgX3NwcmluZ1JlZ2lzdHJ5OiBudWxsLFxuXG4gICAgX2lzSWRsZTogdHJ1ZSxcblxuICAgIF9sYXN0VGltZU1pbGxpczogLTEsXG5cbiAgICBfYWN0aXZlU3ByaW5nczogbnVsbCxcblxuICAgIGxpc3RlbmVyczogbnVsbCxcblxuICAgIF9pZGxlU3ByaW5nSW5kaWNlczogbnVsbCxcblxuICAgIC8vIEEgU3ByaW5nU3lzdGVtIGlzIGl0ZXJhdGVkIGJ5IGEgbG9vcGVyLiBUaGUgbG9vcGVyIGlzIHJlc3BvbnNpYmxlXG4gICAgLy8gZm9yIGV4ZWN1dGluZyBlYWNoIGZyYW1lIGFzIHRoZSBTcHJpbmdTeXN0ZW0gaXMgcmVzb2x2ZWQgdG8gaWRsZS5cbiAgICAvLyBUaGVyZSBhcmUgdGhyZWUgdHlwZXMgb2YgTG9vcGVycyBkZXNjcmliZWQgYmVsb3cgQW5pbWF0aW9uTG9vcGVyLFxuICAgIC8vIFNpbXVsYXRpb25Mb29wZXIsIGFuZCBTdGVwcGluZ1NpbXVsYXRpb25Mb29wZXIuIEFuaW1hdGlvbkxvb3BlciBpc1xuICAgIC8vIHRoZSBkZWZhdWx0IGFzIGl0IGlzIHRoZSBtb3N0IHVzZWZ1bCBmb3IgY29tbW9uIFVJIGFuaW1hdGlvbnMuXG4gICAgc2V0TG9vcGVyOiBmdW5jdGlvbihsb29wZXIpIHtcbiAgICAgIHRoaXMubG9vcGVyID0gbG9vcGVyO1xuICAgICAgbG9vcGVyLnNwcmluZ1N5c3RlbSA9IHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIG5ldyBzcHJpbmcgdG8gdGhpcyBTcHJpbmdTeXN0ZW0uIFRoaXMgU3ByaW5nIHdpbGwgbm93IGJlIHNvbHZlZCBmb3JcbiAgICAvLyBkdXJpbmcgdGhlIHBoeXNpY3MgaXRlcmF0aW9uIGxvb3AuIEJ5IGRlZmF1bHQgdGhlIHNwcmluZyB3aWxsIHVzZSB0aGVcbiAgICAvLyBkZWZhdWx0IE9yaWdhbWkgc3ByaW5nIGNvbmZpZyB3aXRoIDQwIHRlbnNpb24gYW5kIDcgZnJpY3Rpb24sIGJ1dCB5b3UgY2FuXG4gICAgLy8gYWxzbyBwcm92aWRlIHlvdXIgb3duIHZhbHVlcyBoZXJlLlxuICAgIGNyZWF0ZVNwcmluZzogZnVuY3Rpb24odGVuc2lvbiwgZnJpY3Rpb24pIHtcbiAgICAgIHZhciBzcHJpbmdDb25maWc7XG4gICAgICBpZiAodGVuc2lvbiA9PT0gdW5kZWZpbmVkIHx8IGZyaWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3ByaW5nQ29uZmlnID0gU3ByaW5nQ29uZmlnLkRFRkFVTFRfT1JJR0FNSV9TUFJJTkdfQ09ORklHO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ByaW5nQ29uZmlnID1cbiAgICAgICAgICBTcHJpbmdDb25maWcuZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb24odGVuc2lvbiwgZnJpY3Rpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU3ByaW5nV2l0aENvbmZpZyhzcHJpbmdDb25maWcpO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBzcHJpbmcgd2l0aCBhIHNwZWNpZmllZCBib3VuY2luZXNzIGFuZCBzcGVlZC4gVG8gcmVwbGljYXRlIE9yaWdhbWlcbiAgICAvLyBjb21wb3NpdGlvbnMgYmFzZWQgb24gUG9wQW5pbWF0aW9uIHBhdGNoZXMsIHVzZSB0aGlzIGZhY3RvcnkgbWV0aG9kIHRvXG4gICAgLy8gY3JlYXRlIG1hdGNoaW5nIHNwcmluZ3MuXG4gICAgY3JlYXRlU3ByaW5nV2l0aEJvdW5jaW5lc3NBbmRTcGVlZDogZnVuY3Rpb24oYm91bmNpbmVzcywgc3BlZWQpIHtcbiAgICAgIHZhciBzcHJpbmdDb25maWc7XG4gICAgICBpZiAoYm91bmNpbmVzcyA9PT0gdW5kZWZpbmVkIHx8IHNwZWVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3ByaW5nQ29uZmlnID0gU3ByaW5nQ29uZmlnLkRFRkFVTFRfT1JJR0FNSV9TUFJJTkdfQ09ORklHO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ByaW5nQ29uZmlnID1cbiAgICAgICAgICBTcHJpbmdDb25maWcuZnJvbUJvdW5jaW5lc3NBbmRTcGVlZChib3VuY2luZXNzLCBzcGVlZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVTcHJpbmdXaXRoQ29uZmlnKHNwcmluZ0NvbmZpZyk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHNwcmluZyB3aXRoIHRoZSBwcm92aWRlZCBTcHJpbmdDb25maWcuXG4gICAgY3JlYXRlU3ByaW5nV2l0aENvbmZpZzogZnVuY3Rpb24oc3ByaW5nQ29uZmlnKSB7XG4gICAgICB2YXIgc3ByaW5nID0gbmV3IFNwcmluZyh0aGlzKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJTcHJpbmcoc3ByaW5nKTtcbiAgICAgIHNwcmluZy5zZXRTcHJpbmdDb25maWcoc3ByaW5nQ29uZmlnKTtcbiAgICAgIHJldHVybiBzcHJpbmc7XG4gICAgfSxcblxuICAgIC8vIFlvdSBjYW4gY2hlY2sgaWYgYSBTcHJpbmdTeXN0ZW0gaXMgaWRsZSBvciBhY3RpdmUgYnkgY2FsbGluZ1xuICAgIC8vIGdldElzSWRsZS4gSWYgYWxsIG9mIHRoZSBTcHJpbmdzIGluIHRoZSBTcHJpbmdTeXN0ZW0gYXJlIGF0IHJlc3QsXG4gICAgLy8gaS5lLiB0aGUgcGh5c2ljcyBmb3JjZXMgaGF2ZSByZWFjaGVkIGVxdWlsaWJyaXVtLCB0aGVuIHRoaXNcbiAgICAvLyBtZXRob2Qgd2lsbCByZXR1cm4gdHJ1ZS5cbiAgICBnZXRJc0lkbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzSWRsZTtcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgYSBzcGVjaWZpYyBTcHJpbmcgZnJvbSB0aGUgU3ByaW5nU3lzdGVtIGJ5IGlkLiBUaGlzXG4gICAgLy8gY2FuIGJlIHVzZWZ1bCBmb3IgaW5zcGVjdGluZyB0aGUgc3RhdGUgb2YgYSBzcHJpbmcgYmVmb3JlXG4gICAgLy8gb3IgYWZ0ZXIgYW4gaW50ZWdyYXRpb24gbG9vcCBpbiB0aGUgU3ByaW5nU3lzdGVtIGV4ZWN1dGVzLlxuICAgIGdldFNwcmluZ0J5SWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NwcmluZ1JlZ2lzdHJ5W2lkXTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IGEgbGlzdGluZyBvZiBhbGwgdGhlIHNwcmluZ3MgcmVnaXN0ZXJlZCB3aXRoIHRoaXNcbiAgICAvLyBTcHJpbmdTeXN0ZW0uXG4gICAgZ2V0QWxsU3ByaW5nczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFscyA9IFtdO1xuICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5fc3ByaW5nUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwcmluZ1JlZ2lzdHJ5Lmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIHZhbHMucHVzaCh0aGlzLl9zcHJpbmdSZWdpc3RyeVtpZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFscztcbiAgICB9LFxuXG4gICAgLy8gcmVnaXN0ZXJTcHJpbmcgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgYXMgc29vbiBhcyB5b3UgY3JlYXRlXG4gICAgLy8gYSBTcHJpbmcgd2l0aCBTcHJpbmdTeXN0ZW0jY3JlYXRlU3ByaW5nLiBUaGlzIG1ldGhvZCBzZXRzIHRoZVxuICAgIC8vIHNwcmluZyB1cCBpbiB0aGUgcmVnaXN0cnkgc28gdGhhdCBpdCBjYW4gYmUgc29sdmVkIGluIHRoZVxuICAgIC8vIHNvbHZlciBsb29wLlxuICAgIHJlZ2lzdGVyU3ByaW5nOiBmdW5jdGlvbihzcHJpbmcpIHtcbiAgICAgIHRoaXMuX3NwcmluZ1JlZ2lzdHJ5W3NwcmluZy5nZXRJZCgpXSA9IHNwcmluZztcbiAgICB9LFxuXG4gICAgLy8gRGVyZWdpc3RlciBhIHNwcmluZyB3aXRoIHRoaXMgU3ByaW5nU3lzdGVtLiBUaGUgU3ByaW5nU3lzdGVtIHdpbGxcbiAgICAvLyBubyBsb25nZXIgY29uc2lkZXIgdGhpcyBTcHJpbmcgZHVyaW5nIGl0cyBpbnRlZ3JhdGlvbiBsb29wIG9uY2VcbiAgICAvLyB0aGlzIGlzIGNhbGxlZC4gVGhpcyBpcyBub3JtYWxseSBkb25lIGF1dG9tYXRpY2FsbHkgZm9yIHlvdSB3aGVuXG4gICAgLy8geW91IGNhbGwgU3ByaW5nI2Rlc3Ryb3kuXG4gICAgZGVyZWdpc3RlclNwcmluZzogZnVuY3Rpb24oc3ByaW5nKSB7XG4gICAgICByZW1vdmVGaXJzdCh0aGlzLl9hY3RpdmVTcHJpbmdzLCBzcHJpbmcpO1xuICAgICAgZGVsZXRlIHRoaXMuX3NwcmluZ1JlZ2lzdHJ5W3NwcmluZy5nZXRJZCgpXTtcbiAgICB9LFxuXG4gICAgYWR2YW5jZTogZnVuY3Rpb24odGltZSwgZGVsdGFUaW1lKSB7XG4gICAgICB3aGlsZSh0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcy5sZW5ndGggPiAwKSB0aGlzLl9pZGxlU3ByaW5nSW5kaWNlcy5wb3AoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9hY3RpdmVTcHJpbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzcHJpbmcgPSB0aGlzLl9hY3RpdmVTcHJpbmdzW2ldO1xuICAgICAgICBpZiAoc3ByaW5nLnN5c3RlbVNob3VsZEFkdmFuY2UoKSkge1xuICAgICAgICAgIHNwcmluZy5hZHZhbmNlKHRpbWUgLyAxMDAwLjAsIGRlbHRhVGltZSAvIDEwMDAuMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faWRsZVNwcmluZ0luZGljZXMucHVzaCh0aGlzLl9hY3RpdmVTcHJpbmdzLmluZGV4T2Yoc3ByaW5nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdoaWxlKHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2lkbGVTcHJpbmdJbmRpY2VzLnBvcCgpO1xuICAgICAgICBpZHggPj0gMCAmJiB0aGlzLl9hY3RpdmVTcHJpbmdzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUaGlzIGlzIG91ciBtYWluIHNvbHZlciBsb29wIGNhbGxlZCB0byBtb3ZlIHRoZSBzaW11bGF0aW9uXG4gICAgLy8gZm9yd2FyZCB0aHJvdWdoIHRpbWUuIEJlZm9yZSBlYWNoIHBhc3MgaW4gdGhlIHNvbHZlciBsb29wXG4gICAgLy8gb25CZWZvcmVJbnRlZ3JhdGUgaXMgY2FsbGVkIG9uIGFuIGFueSBsaXN0ZW5lcnMgdGhhdCBoYXZlXG4gICAgLy8gcmVnaXN0ZXJlZCB0aGVtZXNlbHZlcyB3aXRoIHRoZSBTcHJpbmdTeXN0ZW0uIFRoaXMgZ2l2ZXMgeW91XG4gICAgLy8gYW4gb3Bwb3J0dW5pdHkgdG8gYXBwbHkgYW55IGNvbnN0cmFpbnRzIG9yIGFkanVzdG1lbnRzIHRvXG4gICAgLy8gdGhlIHNwcmluZ3MgdGhhdCBzaG91bGQgYmUgZW5mb3JjZWQgYmVmb3JlIGVhY2ggaXRlcmF0aW9uXG4gICAgLy8gbG9vcC4gTmV4dCB0aGUgYWR2YW5jZSBtZXRob2QgaXMgY2FsbGVkIHRvIG1vdmUgZWFjaCBTcHJpbmcgaW5cbiAgICAvLyB0aGUgc3lzdGVtU2hvdWxkQWR2YW5jZSBmb3J3YXJkIHRvIHRoZSBjdXJyZW50IHRpbWUuIEFmdGVyIHRoZVxuICAgIC8vIGludGVncmF0aW9uIHN0ZXAgcnVucyBpbiBhZHZhbmNlLCBvbkFmdGVySW50ZWdyYXRlIGlzIGNhbGxlZFxuICAgIC8vIG9uIGFueSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbXNlbHZlcyB3aXRoIHRoZVxuICAgIC8vIFNwcmluZ1N5c3RlbS4gVGhpcyBnaXZlcyB5b3UgYW4gb3Bwb3J0dW5pdHkgdG8gcnVuIGFueSBwb3N0XG4gICAgLy8gaW50ZWdyYXRpb24gY29uc3RyYWludHMgb3IgYWRqdXN0bWVudHMgb24gdGhlIFNwcmluZ3MgaW4gdGhlXG4gICAgLy8gU3ByaW5nU3lzdGVtLlxuICAgIGxvb3A6IGZ1bmN0aW9uKGN1cnJlbnRUaW1lTWlsbGlzKSB7XG4gICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICBpZiAodGhpcy5fbGFzdFRpbWVNaWxsaXMgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLTE7XG4gICAgICB9XG4gICAgICB2YXIgZWxsYXBzZWRNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHRoaXMuX2xhc3RUaW1lTWlsbGlzO1xuICAgICAgdGhpcy5fbGFzdFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcblxuICAgICAgdmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgbGlzdGVuZXIub25CZWZvcmVJbnRlZ3JhdGUgJiYgbGlzdGVuZXIub25CZWZvcmVJbnRlZ3JhdGUodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWR2YW5jZShjdXJyZW50VGltZU1pbGxpcywgZWxsYXBzZWRNaWxsaXMpO1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNwcmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2lzSWRsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lTWlsbGlzID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICBsaXN0ZW5lci5vbkFmdGVySW50ZWdyYXRlICYmIGxpc3RlbmVyLm9uQWZ0ZXJJbnRlZ3JhdGUodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNJZGxlKSB7XG4gICAgICAgIHRoaXMubG9vcGVyLnJ1bigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBhY3RpdmF0ZVNwcmluZyBpcyB1c2VkIHRvIG5vdGlmeSB0aGUgU3ByaW5nU3lzdGVtIHRoYXQgYSBTcHJpbmdcbiAgICAvLyBoYXMgYmVjb21lIGRpc3BsYWNlZC4gVGhlIHN5c3RlbSByZXNwb25kcyBieSBzdGFydGluZyBpdHMgc29sdmVyXG4gICAgLy8gbG9vcCB1cCBpZiBpdCBpcyBjdXJyZW50bHkgaWRsZS5cbiAgICBhY3RpdmF0ZVNwcmluZzogZnVuY3Rpb24oc3ByaW5nSWQpIHtcbiAgICAgIHZhciBzcHJpbmcgPSB0aGlzLl9zcHJpbmdSZWdpc3RyeVtzcHJpbmdJZF07XG4gICAgICBpZiAodGhpcy5fYWN0aXZlU3ByaW5ncy5pbmRleE9mKHNwcmluZykgPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlU3ByaW5ncy5wdXNoKHNwcmluZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5nZXRJc0lkbGUoKSkge1xuICAgICAgICB0aGlzLl9pc0lkbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb29wZXIucnVuKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBTcHJpbmdTeXN0ZW0gc28gdGhhdCB5b3UgY2FuIHJlY2VpdmVcbiAgICAvLyBiZWZvcmUvYWZ0ZXIgaW50ZWdyYXRpb24gbm90aWZpY2F0aW9ucyBhbGxvd2luZyBTcHJpbmdzIHRvIGJlXG4gICAgLy8gY29uc3RyYWluZWQgb3IgYWRqdXN0ZWQuXG4gICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlIGEgcHJldmlvdXNseSBhZGRlZCBsaXN0ZW5lciBvbiB0aGUgU3ByaW5nU3lzdGVtLlxuICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgcmVtb3ZlRmlyc3QodGhpcy5saXN0ZW5lcnMsIGxpc3RlbmVyKTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlIGFsbCBwcmV2aW91c2x5IGFkZGVkIGxpc3RlbmVycyBvbiB0aGUgU3ByaW5nU3lzdGVtLlxuICAgIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBTcHJpbmdcbiAgLy8gLS0tLS0tXG4gIC8vICoqU3ByaW5nKiogcHJvdmlkZXMgYSBtb2RlbCBvZiBhIGNsYXNzaWNhbCBzcHJpbmcgYWN0aW5nIHRvXG4gIC8vIHJlc29sdmUgYSBib2R5IHRvIGVxdWlsaWJyaXVtLiBTcHJpbmdzIGhhdmUgY29uZmlndXJhYmxlXG4gIC8vIHRlbnNpb24gd2hpY2ggaXMgYSBmb3JjZSBtdWx0aXBsZXIgb24gdGhlIGRpc3BsYWNlbWVudCBvZiB0aGVcbiAgLy8gc3ByaW5nIGZyb20gaXRzIHJlc3QgcG9pbnQgb3IgYGVuZFZhbHVlYCBhcyBkZWZpbmVkIGJ5IFtIb29rZSdzXG4gIC8vIGxhd10oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib29rZSdzX2xhdykuIFNwcmluZ3MgYWxzbyBoYXZlXG4gIC8vIGNvbmZpZ3VyYWJsZSBmcmljdGlvbiwgd2hpY2ggZW5zdXJlcyB0aGF0IHRoZXkgZG8gbm90IG9zY2lsbGF0ZVxuICAvLyBpbmZpbml0ZWx5LiBXaGVuIGEgU3ByaW5nIGlzIGRpc3BsYWNlZCBieSB1cGRhdGluZyBpdCdzIHJlc3RpbmdcbiAgLy8gb3IgYGN1cnJlbnRWYWx1ZWAsIHRoZSBTcHJpbmdTeXN0ZW1zIHRoYXQgY29udGFpbiB0aGF0IFNwcmluZ1xuICAvLyB3aWxsIGF1dG9tYXRpY2FsbHkgc3RhcnQgbG9vcGluZyB0byBzb2x2ZSBmb3IgZXF1aWxpYnJpdW0uIEFzIGVhY2hcbiAgLy8gdGltZXN0ZXAgcGFzc2VzLCBgU3ByaW5nTGlzdGVuZXJgIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlIFNwcmluZ1xuICAvLyB3aWxsIGJlIG5vdGlmaWVkIG9mIHRoZSB1cGRhdGVzIHByb3ZpZGluZyBhIHdheSB0byBkcml2ZSBhblxuICAvLyBhbmltYXRpb24gb2ZmIG9mIHRoZSBzcHJpbmcncyByZXNvbHV0aW9uIGN1cnZlLlxuICB2YXIgU3ByaW5nID0gcmVib3VuZC5TcHJpbmcgPSBmdW5jdGlvbiBTcHJpbmcoc3ByaW5nU3lzdGVtKSB7XG4gICAgdGhpcy5faWQgPSAncycgKyBTcHJpbmcuX0lEKys7XG4gICAgdGhpcy5fc3ByaW5nU3lzdGVtID0gc3ByaW5nU3lzdGVtO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0gbmV3IFBoeXNpY3NTdGF0ZSgpO1xuICAgIHRoaXMuX3ByZXZpb3VzU3RhdGUgPSBuZXcgUGh5c2ljc1N0YXRlKCk7XG4gICAgdGhpcy5fdGVtcFN0YXRlID0gbmV3IFBoeXNpY3NTdGF0ZSgpO1xuICB9O1xuXG4gIHV0aWwuZXh0ZW5kKFNwcmluZywge1xuICAgIF9JRDogMCxcblxuICAgIE1BWF9ERUxUQV9USU1FX1NFQzogMC4wNjQsXG5cbiAgICBTT0xWRVJfVElNRVNURVBfU0VDOiAwLjAwMVxuXG4gIH0pO1xuXG4gIHV0aWwuZXh0ZW5kKFNwcmluZy5wcm90b3R5cGUsIHtcblxuICAgIF9pZDogMCxcblxuICAgIF9zcHJpbmdDb25maWc6IG51bGwsXG5cbiAgICBfb3ZlcnNob290Q2xhbXBpbmdFbmFibGVkOiBmYWxzZSxcblxuICAgIF9jdXJyZW50U3RhdGU6IG51bGwsXG5cbiAgICBfcHJldmlvdXNTdGF0ZTogbnVsbCxcblxuICAgIF90ZW1wU3RhdGU6IG51bGwsXG5cbiAgICBfc3RhcnRWYWx1ZTogMCxcblxuICAgIF9lbmRWYWx1ZTogMCxcblxuICAgIF93YXNBdFJlc3Q6IHRydWUsXG5cbiAgICBfcmVzdFNwZWVkVGhyZXNob2xkOiAwLjAwMSxcblxuICAgIF9kaXNwbGFjZW1lbnRGcm9tUmVzdFRocmVzaG9sZDogMC4wMDEsXG5cbiAgICBsaXN0ZW5lcnM6IG51bGwsXG5cbiAgICBfdGltZUFjY3VtdWxhdG9yOiAwLFxuXG4gICAgX3NwcmluZ1N5c3RlbTogbnVsbCxcblxuICAgIC8vIFJlbW92ZSBhIFNwcmluZyBmcm9tIHNpbXVsYXRpb24gYW5kIGNsZWFyIGl0cyBsaXN0ZW5lcnMuXG4gICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgdGhpcy5mcmFtZXMgPSBbXTtcbiAgICAgIHRoaXMuX3NwcmluZ1N5c3RlbS5kZXJlZ2lzdGVyU3ByaW5nKHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBzcHJpbmcsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIGl0IGZyb21cbiAgICAvLyB0aGUgU3ByaW5nU3lzdGVtcyBpdCBwYXJ0aWNpcGF0ZXMgaW4gbGF0ZXIuXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aGlzIFNwcmluZy4gQSBTcHJpbmdDb25maWdcbiAgICAvLyBjb250YWlucyB0aGUgdGVuc2lvbiBhbmQgZnJpY3Rpb24gdmFsdWVzIHVzZWQgdG8gc29sdmUgZm9yIHRoZVxuICAgIC8vIGVxdWlsaWJyaXVtIG9mIHRoZSBTcHJpbmcgaW4gdGhlIHBoeXNpY3MgbG9vcC5cbiAgICBzZXRTcHJpbmdDb25maWc6IGZ1bmN0aW9uKHNwcmluZ0NvbmZpZykge1xuICAgICAgdGhpcy5fc3ByaW5nQ29uZmlnID0gc3ByaW5nQ29uZmlnO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIHRoZSBTcHJpbmdDb25maWcgdXNlZCBieSB0aGlzIFNwcmluZy5cbiAgICBnZXRTcHJpbmdDb25maWc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NwcmluZ0NvbmZpZztcbiAgICB9LFxuXG4gICAgLy8gU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoaXMgU3ByaW5nLiBMaXN0ZW5lcnMgd2lsbCBiZSB1cGRhdGVkXG4gICAgLy8gd2l0aCB0aGlzIHZhbHVlIGltbWVkaWF0ZWx5LiBJZiB0aGUgcmVzdCBvciBgZW5kVmFsdWVgIGlzIG5vdFxuICAgIC8vIHVwZGF0ZWQgdG8gbWF0Y2ggdGhpcyB2YWx1ZSwgdGhlbiB0aGUgc3ByaW5nIHdpbGwgYmUgZGlzcGFsY2VkIGFuZFxuICAgIC8vIHRoZSBTcHJpbmdTeXN0ZW0gd2lsbCBzdGFydCB0byBsb29wIHRvIHJlc3RvcmUgdGhlIHNwcmluZyB0byB0aGVcbiAgICAvLyBgZW5kVmFsdWVgLlxuICAgIC8vXG4gICAgLy8gQSBjb21tb24gcGF0dGVybiBpcyB0byBtb3ZlIGEgU3ByaW5nIGFyb3VuZCB3aXRob3V0IGFuaW1hdGlvbiBieVxuICAgIC8vIGNhbGxpbmcuXG4gICAgLy9cbiAgICAvLyBgYGBcbiAgICAvLyBzcHJpbmcuc2V0Q3VycmVudFZhbHVlKG4pLnNldEF0UmVzdCgpO1xuICAgIC8vIGBgYFxuICAgIC8vXG4gICAgLy8gVGhpcyBtb3ZlcyB0aGUgU3ByaW5nIHRvIGEgbmV3IHBvc2l0aW9uIGBuYCwgc2V0cyB0aGUgZW5kVmFsdWVcbiAgICAvLyB0byBgbmAsIGFuZCByZW1vdmVzIGFueSB2ZWxvY2l0eSBmcm9tIHRoZSBgU3ByaW5nYC4gQnkgZG9pbmdcbiAgICAvLyB0aGlzIHlvdSBjYW4gYWxsb3cgdGhlIGBTcHJpbmdMaXN0ZW5lcmAgdG8gbWFuYWdlIHRoZSBwb3NpdGlvblxuICAgIC8vIG9mIFVJIGVsZW1lbnRzIGF0dGFjaGVkIHRvIHRoZSBzcHJpbmcgZXZlbiB3aGVuIG1vdmluZyB3aXRob3V0XG4gICAgLy8gYW5pbWF0aW9uLiBGb3IgZXhhbXBsZSwgd2hlbiBkcmFnZ2luZyBhbiBlbGVtZW50IHlvdSBjYW5cbiAgICAvLyB1cGRhdGUgdGhlIHBvc2l0aW9uIG9mIGFuIGF0dGFjaGVkIHZpZXcgdGhyb3VnaCBhIHNwcmluZ1xuICAgIC8vIGJ5IGNhbGxpbmcgYHNwcmluZy5zZXRDdXJyZW50VmFsdWUoeClgLiBXaGVuXG4gICAgLy8gdGhlIGdlc3R1cmUgZW5kcyB5b3UgY2FuIHVwZGF0ZSB0aGUgU3ByaW5nc1xuICAgIC8vIHZlbG9jaXR5IGFuZCBlbmRWYWx1ZVxuICAgIC8vIGBzcHJpbmcuc2V0VmVsb2NpdHkoZ2VzdHVyZUVuZFZlbG9jaXR5KS5zZXRFbmRWYWx1ZShmbGluZ1RhcmdldClgXG4gICAgLy8gdG8gY2F1c2UgaXQgdG8gbmF0dXJhbGx5IGFuaW1hdGUgdGhlIFVJIGVsZW1lbnQgdG8gdGhlIHJlc3RpbmdcbiAgICAvLyBwb3NpdGlvbiB0YWtpbmcgaW50byBhY2NvdW50IGV4aXN0aW5nIHZlbG9jaXR5LiBUaGUgY29kZXBhdGhzIGZvclxuICAgIC8vIHN5bmNocm9ub3VzIG1vdmVtZW50IGFuZCBzcHJpbmcgZHJpdmVuIGFuaW1hdGlvbiBjYW5cbiAgICAvLyBiZSB1bmlmaWVkIHVzaW5nIHRoaXMgdGVjaG5pcXVlLlxuICAgIHNldEN1cnJlbnRWYWx1ZTogZnVuY3Rpb24oY3VycmVudFZhbHVlLCBza2lwU2V0QXRSZXN0KSB7XG4gICAgICB0aGlzLl9zdGFydFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uID0gY3VycmVudFZhbHVlO1xuICAgICAgaWYgKCFza2lwU2V0QXRSZXN0KSB7XG4gICAgICAgIHRoaXMuc2V0QXRSZXN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmeVBvc2l0aW9uVXBkYXRlZChmYWxzZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgcG9zaXRpb24gdGhhdCB0aGUgbW9zdCByZWNlbnQgYW5pbWF0aW9uIHN0YXJ0ZWQgYXQuIFRoaXNcbiAgICAvLyBjYW4gYmUgdXNlZnVsIGZvciBkZXRlcm1pbmluZyB0aGUgbnVtYmVyIG9mZiBvc2NpbGxhdGlvbnMgdGhhdFxuICAgIC8vIGhhdmUgb2NjdXJyZWQuXG4gICAgZ2V0U3RhcnRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRWYWx1ZTtcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIFNwcmluZy5cbiAgICBnZXRDdXJyZW50VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbjtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBhYnNvbHV0ZSBkaXN0YW5jZSBvZiB0aGUgU3ByaW5nIGZyb20gaXQncyByZXN0aW5nIGVuZFZhbHVlXG4gICAgLy8gcG9zaXRpb24uXG4gICAgZ2V0Q3VycmVudERpc3BsYWNlbWVudERpc3RhbmNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYWNlbWVudERpc3RhbmNlRm9yU3RhdGUodGhpcy5fY3VycmVudFN0YXRlKTtcbiAgICB9LFxuXG4gICAgZ2V0RGlzcGxhY2VtZW50RGlzdGFuY2VGb3JTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLl9lbmRWYWx1ZSAtIHN0YXRlLnBvc2l0aW9uKTtcbiAgICB9LFxuXG4gICAgLy8gU2V0IHRoZSBlbmRWYWx1ZSBvciByZXN0aW5nIHBvc2l0aW9uIG9mIHRoZSBzcHJpbmcuIElmIHRoaXNcbiAgICAvLyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCB2YWx1ZSwgdGhlIFNwcmluZ1N5c3RlbSB3aWxsXG4gICAgLy8gYmUgbm90aWZpZWQgYW5kIHdpbGwgYmVnaW4gcnVubmluZyBpdHMgc29sdmVyIGxvb3AgdG8gcmVzb2x2ZVxuICAgIC8vIHRoZSBTcHJpbmcgdG8gZXF1aWxpYnJpdW0uIEFueSBsaXN0ZW5lcnMgdGhhdCBhcmUgcmVnaXN0ZXJlZFxuICAgIC8vIGZvciBvblNwcmluZ0VuZFN0YXRlQ2hhbmdlIHdpbGwgYWxzbyBiZSBub3RpZmllZCBvZiB0aGlzIHVwZGF0ZVxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIHNldEVuZFZhbHVlOiBmdW5jdGlvbihlbmRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2VuZFZhbHVlID09IGVuZFZhbHVlICYmIHRoaXMuaXNBdFJlc3QoKSkgIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFydFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHRoaXMuX2VuZFZhbHVlID0gZW5kVmFsdWU7XG4gICAgICB0aGlzLl9zcHJpbmdTeXN0ZW0uYWN0aXZhdGVTcHJpbmcodGhpcy5nZXRJZCgpKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gbGlzdGVuZXIub25TcHJpbmdFbmRTdGF0ZUNoYW5nZTtcbiAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGVuZFZhbHVlIG9yIHJlc3RpbmcgcG9zaXRpb24gb2YgdGhpcyBzcHJpbmcuXG4gICAgZ2V0RW5kVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VuZFZhbHVlO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgdGhlIGN1cnJlbnQgdmVsb2NpdHkgb2YgdGhlIFNwcmluZy4gQXMgcHJldmlvdXNseSBtZW50aW9uZWQsXG4gICAgLy8gdGhpcyBjYW4gYmUgdXNlZnVsIHdoZW4geW91IGFyZSBwZXJmb3JtaW5nIGEgZGlyZWN0IG1hbmlwdWxhdGlvblxuICAgIC8vIGdlc3R1cmUuIFdoZW4gYSBVSSBlbGVtZW50IGlzIHJlbGVhc2VkIHlvdSBtYXkgY2FsbCBzZXRWZWxvY2l0eVxuICAgIC8vIG9uIGl0cyBhbmltYXRpb24gU3ByaW5nIHNvIHRoYXQgdGhlIFNwcmluZyBjb250aW51ZXMgd2l0aCB0aGVcbiAgICAvLyBzYW1lIHZlbG9jaXR5IGFzIHRoZSBnZXN0dXJlIGVuZGVkIHdpdGguIFRoZSBmcmljdGlvbiwgdGVuc2lvbixcbiAgICAvLyBhbmQgZGlzcGxhY2VtZW50IG9mIHRoZSBTcHJpbmcgd2lsbCB0aGVuIGdvdmVybiBpdHMgbW90aW9uIHRvXG4gICAgLy8gcmV0dXJuIHRvIHJlc3Qgb24gYSBuYXR1cmFsIGZlZWxpbmcgY3VydmUuXG4gICAgc2V0VmVsb2NpdHk6IGZ1bmN0aW9uKHZlbG9jaXR5KSB7XG4gICAgICBpZiAodmVsb2NpdHkgPT09IHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgdGhpcy5fc3ByaW5nU3lzdGVtLmFjdGl2YXRlU3ByaW5nKHRoaXMuZ2V0SWQoKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHZlbG9jaXR5IG9mIHRoZSBTcHJpbmcuXG4gICAgZ2V0VmVsb2NpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eTtcbiAgICB9LFxuXG4gICAgLy8gU2V0IGEgdGhyZXNob2xkIHZhbHVlIGZvciB0aGUgbW92ZW1lbnQgc3BlZWQgb2YgdGhlIFNwcmluZyBiZWxvd1xuICAgIC8vIHdoaWNoIGl0IHdpbGwgYmUgY29uc2lkZXJlZCB0byBiZSBub3QgbW92aW5nIG9yIHJlc3RpbmcuXG4gICAgc2V0UmVzdFNwZWVkVGhyZXNob2xkOiBmdW5jdGlvbihyZXN0U3BlZWRUaHJlc2hvbGQpIHtcbiAgICAgIHRoaXMuX3Jlc3RTcGVlZFRocmVzaG9sZCA9IHJlc3RTcGVlZFRocmVzaG9sZDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgcmVzdCBzcGVlZCB0aHJlc2hvbGQgZm9yIHRoaXMgU3ByaW5nLlxuICAgIGdldFJlc3RTcGVlZFRocmVzaG9sZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzdFNwZWVkVGhyZXNob2xkO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgYSB0aHJlc2hvbGQgdmFsdWUgZm9yIGRpc3BsYWNlbWVudCBiZWxvdyB3aGljaCB0aGUgU3ByaW5nXG4gICAgLy8gd2lsbCBiZSBjb25zaWRlcmVkIHRvIGJlIG5vdCBkaXNwbGFjZWQgaS5lLiBhdCBpdHMgcmVzdGluZ1xuICAgIC8vIGBlbmRWYWx1ZWAuXG4gICAgc2V0UmVzdERpc3BsYWNlbWVudFRocmVzaG9sZDogZnVuY3Rpb24oZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQpIHtcbiAgICAgIHRoaXMuX2Rpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkID0gZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQ7XG4gICAgfSxcblxuICAgIC8vIFJldHJpZXZlIHRoZSByZXN0IGRpc3BsYWNlbWVudCB0aHJlc2hvbGQgZm9yIHRoaXMgc3ByaW5nLlxuICAgIGdldFJlc3REaXNwbGFjZW1lbnRUaHJlc2hvbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYWNlbWVudEZyb21SZXN0VGhyZXNob2xkO1xuICAgIH0sXG5cbiAgICAvLyBFbmFibGUgb3ZlcnNob290IGNsYW1waW5nLiBUaGlzIG1lYW5zIHRoYXQgdGhlIFNwcmluZyB3aWxsIHN0b3BcbiAgICAvLyBpbW1lZGlhdGVseSB3aGVuIGl0IHJlYWNoZXMgaXRzIHJlc3RpbmcgcG9zaXRpb24gcmVnYXJkbGVzcyBvZlxuICAgIC8vIGFueSBleGlzdGluZyBtb21lbnR1bSBpdCBtYXkgaGF2ZS4gVGhpcyBjYW4gYmUgdXNlZnVsIGZvciBjZXJ0YWluXG4gICAgLy8gdHlwZXMgb2YgYW5pbWF0aW9ucyB0aGF0IHNob3VsZCBub3Qgb3NjaWxsYXRlIHN1Y2ggYXMgYSBzY2FsZVxuICAgIC8vIGRvd24gdG8gMCBvciBhbHBoYSBmYWRlLlxuICAgIHNldE92ZXJzaG9vdENsYW1waW5nRW5hYmxlZDogZnVuY3Rpb24oZW5hYmxlZCkge1xuICAgICAgdGhpcy5fb3ZlcnNob290Q2xhbXBpbmdFbmFibGVkID0gZW5hYmxlZDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiBvdmVyc2hvb3QgY2xhbXBpbmcgaXMgZW5hYmxlZCBmb3IgdGhpcyBzcHJpbmcuXG4gICAgaXNPdmVyc2hvb3RDbGFtcGluZ0VuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX292ZXJzaG9vdENsYW1waW5nRW5hYmxlZDtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIFNwcmluZyBoYXMgZ29uZSBwYXN0IGl0cyBlbmQgcG9pbnQgYnkgY29tcGFyaW5nXG4gICAgLy8gdGhlIGRpcmVjdGlvbiBpdCB3YXMgbW92aW5nIGluIHdoZW4gaXQgc3RhcnRlZCB0byB0aGUgY3VycmVudFxuICAgIC8vIHBvc2l0aW9uIGFuZCBlbmQgdmFsdWUuXG4gICAgaXNPdmVyc2hvb3Rpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5fc3RhcnRWYWx1ZTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLl9lbmRWYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9zcHJpbmdDb25maWcudGVuc2lvbiA+IDAgJiZcbiAgICAgICAoKHN0YXJ0IDwgZW5kICYmIHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgPiBlbmQpIHx8XG4gICAgICAgKHN0YXJ0ID4gZW5kICYmIHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgPCBlbmQpKTtcbiAgICB9LFxuXG4gICAgLy8gU3ByaW5nLmFkdmFuY2UgaXMgdGhlIG1haW4gc29sdmVyIG1ldGhvZCBmb3IgdGhlIFNwcmluZy4gSXQgdGFrZXNcbiAgICAvLyB0aGUgY3VycmVudCB0aW1lIGFuZCBkZWx0YSBzaW5jZSB0aGUgbGFzdCB0aW1lIHN0ZXAgYW5kIHBlcmZvcm1zXG4gICAgLy8gYW4gUks0IGludGVncmF0aW9uIHRvIGdldCB0aGUgbmV3IHBvc2l0aW9uIGFuZCB2ZWxvY2l0eSBzdGF0ZVxuICAgIC8vIGZvciB0aGUgU3ByaW5nIGJhc2VkIG9uIHRoZSB0ZW5zaW9uLCBmcmljdGlvbiwgdmVsb2NpdHksIGFuZFxuICAgIC8vIGRpc3BsYWNlbWVudCBvZiB0aGUgU3ByaW5nLlxuICAgIGFkdmFuY2U6IGZ1bmN0aW9uKHRpbWUsIHJlYWxEZWx0YVRpbWUpIHtcbiAgICAgIHZhciBpc0F0UmVzdCA9IHRoaXMuaXNBdFJlc3QoKTtcblxuICAgICAgaWYgKGlzQXRSZXN0ICYmIHRoaXMuX3dhc0F0UmVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGp1c3RlZERlbHRhVGltZSA9IHJlYWxEZWx0YVRpbWU7XG4gICAgICBpZiAocmVhbERlbHRhVGltZSA+IFNwcmluZy5NQVhfREVMVEFfVElNRV9TRUMpIHtcbiAgICAgICAgYWRqdXN0ZWREZWx0YVRpbWUgPSBTcHJpbmcuTUFYX0RFTFRBX1RJTUVfU0VDO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90aW1lQWNjdW11bGF0b3IgKz0gYWRqdXN0ZWREZWx0YVRpbWU7XG5cbiAgICAgIHZhciB0ZW5zaW9uID0gdGhpcy5fc3ByaW5nQ29uZmlnLnRlbnNpb24sXG4gICAgICAgICAgZnJpY3Rpb24gPSB0aGlzLl9zcHJpbmdDb25maWcuZnJpY3Rpb24sXG5cbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eSA9IHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSxcbiAgICAgICAgICB0ZW1wUG9zaXRpb24gPSB0aGlzLl90ZW1wU3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgdGVtcFZlbG9jaXR5ID0gdGhpcy5fdGVtcFN0YXRlLnZlbG9jaXR5LFxuXG4gICAgICAgICAgYVZlbG9jaXR5LCBhQWNjZWxlcmF0aW9uLFxuICAgICAgICAgIGJWZWxvY2l0eSwgYkFjY2VsZXJhdGlvbixcbiAgICAgICAgICBjVmVsb2NpdHksIGNBY2NlbGVyYXRpb24sXG4gICAgICAgICAgZFZlbG9jaXR5LCBkQWNjZWxlcmF0aW9uLFxuXG4gICAgICAgICAgZHhkdCwgZHZkdDtcblxuICAgICAgd2hpbGUodGhpcy5fdGltZUFjY3VtdWxhdG9yID49IFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDKSB7XG5cbiAgICAgICAgdGhpcy5fdGltZUFjY3VtdWxhdG9yIC09IFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDO1xuXG4gICAgICAgIGlmICh0aGlzLl90aW1lQWNjdW11bGF0b3IgPCBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQykge1xuICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhdGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXRlLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBhVmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgYUFjY2VsZXJhdGlvbiA9XG4gICAgICAgICAgKHRlbnNpb24gKiAodGhpcy5fZW5kVmFsdWUgLSB0ZW1wUG9zaXRpb24pKSAtIGZyaWN0aW9uICogdmVsb2NpdHk7XG5cbiAgICAgICAgdGVtcFBvc2l0aW9uID0gcG9zaXRpb24gKyBhVmVsb2NpdHkgKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgdGVtcFZlbG9jaXR5ID1cbiAgICAgICAgICB2ZWxvY2l0eSArIGFBY2NlbGVyYXRpb24gKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgYlZlbG9jaXR5ID0gdGVtcFZlbG9jaXR5O1xuICAgICAgICBiQWNjZWxlcmF0aW9uID1cbiAgICAgICAgICAodGVuc2lvbiAqICh0aGlzLl9lbmRWYWx1ZSAtIHRlbXBQb3NpdGlvbikpIC0gZnJpY3Rpb24gKiB0ZW1wVmVsb2NpdHk7XG5cbiAgICAgICAgdGVtcFBvc2l0aW9uID0gcG9zaXRpb24gKyBiVmVsb2NpdHkgKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgdGVtcFZlbG9jaXR5ID1cbiAgICAgICAgICB2ZWxvY2l0eSArIGJBY2NlbGVyYXRpb24gKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgY1ZlbG9jaXR5ID0gdGVtcFZlbG9jaXR5O1xuICAgICAgICBjQWNjZWxlcmF0aW9uID1cbiAgICAgICAgICAodGVuc2lvbiAqICh0aGlzLl9lbmRWYWx1ZSAtIHRlbXBQb3NpdGlvbikpIC0gZnJpY3Rpb24gKiB0ZW1wVmVsb2NpdHk7XG5cbiAgICAgICAgdGVtcFBvc2l0aW9uID0gcG9zaXRpb24gKyBjVmVsb2NpdHkgKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgdGVtcFZlbG9jaXR5ID1cbiAgICAgICAgICB2ZWxvY2l0eSArIGNBY2NlbGVyYXRpb24gKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQyAqIDAuNTtcbiAgICAgICAgZFZlbG9jaXR5ID0gdGVtcFZlbG9jaXR5O1xuICAgICAgICBkQWNjZWxlcmF0aW9uID1cbiAgICAgICAgICAodGVuc2lvbiAqICh0aGlzLl9lbmRWYWx1ZSAtIHRlbXBQb3NpdGlvbikpIC0gZnJpY3Rpb24gKiB0ZW1wVmVsb2NpdHk7XG5cbiAgICAgICAgZHhkdCA9XG4gICAgICAgICAgMS4wLzYuMCAqIChhVmVsb2NpdHkgKyAyLjAgKiAoYlZlbG9jaXR5ICsgY1ZlbG9jaXR5KSArIGRWZWxvY2l0eSk7XG4gICAgICAgIGR2ZHQgPSAxLjAvNi4wICogKFxuICAgICAgICAgIGFBY2NlbGVyYXRpb24gKyAyLjAgKiAoYkFjY2VsZXJhdGlvbiArIGNBY2NlbGVyYXRpb24pICsgZEFjY2VsZXJhdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIHBvc2l0aW9uICs9IGR4ZHQgKiBTcHJpbmcuU09MVkVSX1RJTUVTVEVQX1NFQztcbiAgICAgICAgdmVsb2NpdHkgKz0gZHZkdCAqIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90ZW1wU3RhdGUucG9zaXRpb24gPSB0ZW1wUG9zaXRpb247XG4gICAgICB0aGlzLl90ZW1wU3RhdGUudmVsb2NpdHkgPSB0ZW1wVmVsb2NpdHk7XG5cbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cbiAgICAgIGlmICh0aGlzLl90aW1lQWNjdW11bGF0b3IgPiAwKSB7XG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRlKHRoaXMuX3RpbWVBY2N1bXVsYXRvciAvIFNwcmluZy5TT0xWRVJfVElNRVNURVBfU0VDKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNBdFJlc3QoKSB8fFxuICAgICAgICAgIHRoaXMuX292ZXJzaG9vdENsYW1waW5nRW5hYmxlZCAmJiB0aGlzLmlzT3ZlcnNob290aW5nKCkpIHtcblxuICAgICAgICBpZiAodGhpcy5fc3ByaW5nQ29uZmlnLnRlbnNpb24gPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc3RhcnRWYWx1ZSA9IHRoaXMuX2VuZFZhbHVlO1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbiA9IHRoaXMuX2VuZFZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2VuZFZhbHVlID0gdGhpcy5fY3VycmVudFN0YXRlLnBvc2l0aW9uO1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VmFsdWUgPSB0aGlzLl9lbmRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5KDApO1xuICAgICAgICBpc0F0UmVzdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBub3RpZnlBY3RpdmF0ZSA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX3dhc0F0UmVzdCkge1xuICAgICAgICB0aGlzLl93YXNBdFJlc3QgPSBmYWxzZTtcbiAgICAgICAgbm90aWZ5QWN0aXZhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm90aWZ5QXRSZXN0ID0gZmFsc2U7XG4gICAgICBpZiAoaXNBdFJlc3QpIHtcbiAgICAgICAgdGhpcy5fd2FzQXRSZXN0ID0gdHJ1ZTtcbiAgICAgICAgbm90aWZ5QXRSZXN0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZnlQb3NpdGlvblVwZGF0ZWQobm90aWZ5QWN0aXZhdGUsIG5vdGlmeUF0UmVzdCk7XG4gICAgfSxcblxuICAgIG5vdGlmeVBvc2l0aW9uVXBkYXRlZDogZnVuY3Rpb24obm90aWZ5QWN0aXZhdGUsIG5vdGlmeUF0UmVzdCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgICBpZiAobm90aWZ5QWN0aXZhdGUgJiYgbGlzdGVuZXIub25TcHJpbmdBY3RpdmF0ZSkge1xuICAgICAgICAgIGxpc3RlbmVyLm9uU3ByaW5nQWN0aXZhdGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXIub25TcHJpbmdVcGRhdGUpIHtcbiAgICAgICAgICBsaXN0ZW5lci5vblNwcmluZ1VwZGF0ZSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3RpZnlBdFJlc3QgJiYgbGlzdGVuZXIub25TcHJpbmdBdFJlc3QpIHtcbiAgICAgICAgICBsaXN0ZW5lci5vblNwcmluZ0F0UmVzdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIENoZWNrIGlmIHRoZSBTcHJpbmdTeXN0ZW0gc2hvdWxkIGFkdmFuY2UuIFNwcmluZ3MgYXJlIGFkdmFuY2VkXG4gICAgLy8gYSBmaW5hbCBmcmFtZSBhZnRlciB0aGV5IHJlYWNoIGVxdWlsaWJyaXVtIHRvIGVuc3VyZSB0aGF0IHRoZVxuICAgIC8vIGN1cnJlbnRWYWx1ZSBpcyBleGFjdGx5IHRoZSByZXF1ZXN0ZWQgZW5kVmFsdWUgcmVnYXJkbGVzcyBvZiB0aGVcbiAgICAvLyBkaXNwbGFjZW1lbnQgdGhyZXNob2xkLlxuICAgIHN5c3RlbVNob3VsZEFkdmFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmlzQXRSZXN0KCkgfHwgIXRoaXMud2FzQXRSZXN0KCk7XG4gICAgfSxcblxuICAgIHdhc0F0UmVzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2FzQXRSZXN0O1xuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgU3ByaW5nIGlzIGF0UmVzdCBtZWFuaW5nIHRoYXQgaXQncyBjdXJyZW50VmFsdWUgYW5kXG4gICAgLy8gZW5kVmFsdWUgYXJlIHRoZSBzYW1lIGFuZCB0aGF0IGl0IGhhcyBubyB2ZWxvY2l0eS4gVGhlIHByZXZpb3VzbHlcbiAgICAvLyBkZXNjcmliZWQgdGhyZXNob2xkcyBmb3Igc3BlZWQgYW5kIGRpc3BsYWNlbWVudCBkZWZpbmUgdGhlIGJvdW5kc1xuICAgIC8vIG9mIHRoaXMgZXF1aXZhbGVuY2UgY2hlY2suIElmIHRoZSBTcHJpbmcgaGFzIDAgdGVuc2lvbiwgdGhlbiBpdCB3aWxsXG4gICAgLy8gYmUgY29uc2lkZXJlZCBhdCByZXN0IHdoZW5ldmVyIGl0cyBhYnNvbHV0ZSB2ZWxvY2l0eSBkcm9wcyBiZWxvdyB0aGVcbiAgICAvLyByZXN0U3BlZWRUaHJlc2hvbGQuXG4gICAgaXNBdFJlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuX2N1cnJlbnRTdGF0ZS52ZWxvY2l0eSkgPCB0aGlzLl9yZXN0U3BlZWRUaHJlc2hvbGQgJiZcbiAgICAgICAgKHRoaXMuZ2V0RGlzcGxhY2VtZW50RGlzdGFuY2VGb3JTdGF0ZSh0aGlzLl9jdXJyZW50U3RhdGUpIDw9XG4gICAgICAgICAgdGhpcy5fZGlzcGxhY2VtZW50RnJvbVJlc3RUaHJlc2hvbGQgfHxcbiAgICAgICAgdGhpcy5fc3ByaW5nQ29uZmlnLnRlbnNpb24gPT09IDApO1xuICAgIH0sXG5cbiAgICAvLyBGb3JjZSB0aGUgc3ByaW5nIHRvIGJlIGF0IHJlc3QgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uIEFzXG4gICAgLy8gZGVzY3JpYmVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvciBzZXRDdXJyZW50VmFsdWUsIHRoaXMgbWV0aG9kXG4gICAgLy8gbWFrZXMgaXQgZWFzeSB0byBkbyBzeW5jaHJvbm91cyBub24tYW5pbWF0ZWQgdXBkYXRlcyB0byB1aVxuICAgIC8vIGVsZW1lbnRzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIHNwcmluZ3MgdmlhIFNwcmluZ0xpc3RlbmVycy5cbiAgICBzZXRBdFJlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZW5kVmFsdWUgPSB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb247XG4gICAgICB0aGlzLl90ZW1wU3RhdGUucG9zaXRpb24gPSB0aGlzLl9jdXJyZW50U3RhdGUucG9zaXRpb247XG4gICAgICB0aGlzLl9jdXJyZW50U3RhdGUudmVsb2NpdHkgPSAwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9pbnRlcnBvbGF0ZTogZnVuY3Rpb24oYWxwaGEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbiA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5wb3NpdGlvbiAqXG4gICAgICAgIGFscGhhICsgdGhpcy5fcHJldmlvdXNTdGF0ZS5wb3NpdGlvbiAqICgxIC0gYWxwaGEpO1xuICAgICAgdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5ID0gdGhpcy5fY3VycmVudFN0YXRlLnZlbG9jaXR5ICpcbiAgICAgICAgYWxwaGEgKyB0aGlzLl9wcmV2aW91c1N0YXRlLnZlbG9jaXR5ICogKDEgLSBhbHBoYSk7XG4gICAgfSxcblxuICAgIGdldExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnM7XG4gICAgfSxcblxuICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbihuZXdMaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChuZXdMaXN0ZW5lcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyVG9SZW1vdmUpIHtcbiAgICAgIHJlbW92ZUZpcnN0KHRoaXMubGlzdGVuZXJzLCBsaXN0ZW5lclRvUmVtb3ZlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjdXJyZW50VmFsdWVJc0FwcHJveGltYXRlbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5nZXRDdXJyZW50VmFsdWUoKSAtIHZhbHVlKSA8PVxuICAgICAgICB0aGlzLmdldFJlc3REaXNwbGFjZW1lbnRUaHJlc2hvbGQoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gUGh5c2ljc1N0YXRlXG4gIC8vIC0tLS0tLS0tLS0tLVxuICAvLyAqKlBoeXNpY3NTdGF0ZSoqIGNvbnNpc3RzIG9mIGEgcG9zaXRpb24gYW5kIHZlbG9jaXR5LiBBIFNwcmluZyB1c2VzXG4gIC8vIHRoaXMgaW50ZXJuYWxseSB0byBrZWVwIHRyYWNrIG9mIGl0cyBjdXJyZW50IGFuZCBwcmlvciBwb3NpdGlvbiBhbmRcbiAgLy8gdmVsb2NpdHkgdmFsdWVzLlxuICB2YXIgUGh5c2ljc1N0YXRlID0gZnVuY3Rpb24gUGh5c2ljc1N0YXRlKCkge307XG5cbiAgdXRpbC5leHRlbmQoUGh5c2ljc1N0YXRlLnByb3RvdHlwZSwge1xuICAgIHBvc2l0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwXG4gIH0pO1xuXG4gIC8vIFNwcmluZ0NvbmZpZ1xuICAvLyAtLS0tLS0tLS0tLS1cbiAgLy8gKipTcHJpbmdDb25maWcqKiBtYWludGFpbnMgYSBzZXQgb2YgdGVuc2lvbiBhbmQgZnJpY3Rpb24gY29uc3RhbnRzXG4gIC8vIGZvciBhIFNwcmluZy4gWW91IGNhbiB1c2UgZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb24gdG8gY29udmVydFxuICAvLyB2YWx1ZXMgZnJvbSB0aGUgW09yaWdhbWldKGh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vb3JpZ2FtaS8pXG4gIC8vIGRlc2lnbiB0b29sIGRpcmVjdGx5IHRvIFJlYm91bmQgc3ByaW5nIGNvbnN0YW50cy5cbiAgdmFyIFNwcmluZ0NvbmZpZyA9IHJlYm91bmQuU3ByaW5nQ29uZmlnID1cbiAgICBmdW5jdGlvbiBTcHJpbmdDb25maWcodGVuc2lvbiwgZnJpY3Rpb24pIHtcbiAgICAgIHRoaXMudGVuc2lvbiA9IHRlbnNpb247XG4gICAgICB0aGlzLmZyaWN0aW9uID0gZnJpY3Rpb247XG4gICAgfTtcblxuICAvLyBMb29wZXJzXG4gIC8vIC0tLS0tLS1cbiAgLy8gKipBbmltYXRpb25Mb29wZXIqKiBwbGF5cyBlYWNoIGZyYW1lIG9mIHRoZSBTcHJpbmdTeXN0ZW0gb24gYW5pbWF0aW9uXG4gIC8vIHRpbWluZyBsb29wLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHR5cGUgb2YgbG9vcGVyIGZvciBhIG5ldyBzcHJpbmcgc3lzdGVtXG4gIC8vIGFzIGl0IGlzIHRoZSBtb3N0IGNvbW1vbiB3aGVuIGRldmVsb3BpbmcgVUkuXG4gIHZhciBBbmltYXRpb25Mb29wZXIgPSByZWJvdW5kLkFuaW1hdGlvbkxvb3BlciA9IGZ1bmN0aW9uIEFuaW1hdGlvbkxvb3BlcigpIHtcbiAgICB0aGlzLnNwcmluZ1N5c3RlbSA9IG51bGw7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgX3J1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuc3ByaW5nU3lzdGVtLmxvb3AoRGF0ZS5ub3coKSk7XG4gICAgfTtcblxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICB1dGlsLm9uRnJhbWUoX3J1bik7XG4gICAgfTtcbiAgfTtcblxuICAvLyAqKlNpbXVsYXRpb25Mb29wZXIqKiByZXNvbHZlcyB0aGUgU3ByaW5nU3lzdGVtIHRvIGEgcmVzdGluZyBzdGF0ZSBpbiBhXG4gIC8vIHRpZ2h0IGFuZCBibG9ja2luZyBsb29wLiBUaGlzIGlzIHVzZWZ1bCBmb3Igc3luY2hyb25vdXNseSBnZW5lcmF0aW5nXG4gIC8vIHByZS1yZWNvcmRlZCBhbmltYXRpb25zIHRoYXQgY2FuIHRoZW4gYmUgcGxheWVkIG9uIGEgdGltaW5nIGxvb3AgbGF0ZXIuXG4gIC8vIFNvbWV0aW1lcyB0aGlzIGxlYWQgdG8gYmV0dGVyIHBlcmZvcm1hbmNlIHRvIHByZS1yZWNvcmQgYSBzaW5nbGUgc3ByaW5nXG4gIC8vIGN1cnZlIGFuZCB1c2UgaXQgdG8gZHJpdmUgbWFueSBhbmltYXRpb25zOyBob3dldmVyLCBpdCBjYW4gbWFrZSBkeW5hbWljXG4gIC8vIHJlc3BvbnNlIHRvIHVzZXIgaW5wdXQgYSBiaXQgdHJpY2tpZXIgdG8gaW1wbGVtZW50LlxuICByZWJvdW5kLlNpbXVsYXRpb25Mb29wZXIgPSBmdW5jdGlvbiBTaW11bGF0aW9uTG9vcGVyKHRpbWVzdGVwKSB7XG4gICAgdGhpcy5zcHJpbmdTeXN0ZW0gPSBudWxsO1xuICAgIHZhciB0aW1lID0gMDtcbiAgICB2YXIgcnVubmluZyA9IGZhbHNlO1xuICAgIHRpbWVzdGVwPXRpbWVzdGVwIHx8IDE2LjY2NztcblxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgIHdoaWxlKCF0aGlzLnNwcmluZ1N5c3RlbS5nZXRJc0lkbGUoKSkge1xuICAgICAgICB0aGlzLnNwcmluZ1N5c3RlbS5sb29wKHRpbWUrPXRpbWVzdGVwKTtcbiAgICAgIH1cbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9O1xuICB9O1xuXG4gIC8vICoqU3RlcHBpbmdTaW11bGF0aW9uTG9vcGVyKiogcmVzb2x2ZXMgdGhlIFNwcmluZ1N5c3RlbSBvbmUgc3RlcCBhdCBhXG4gIC8vIHRpbWUgY29udHJvbGxlZCBieSBhbiBvdXRzaWRlIGxvb3AuIFRoaXMgaXMgdXNlZnVsIGZvciB0ZXN0aW5nIGFuZFxuICAvLyB2ZXJpZnlpbmcgdGhlIGJlaGF2aW9yIG9mIGEgU3ByaW5nU3lzdGVtIG9yIGlmIHlvdSB3YW50IHRvIGNvbnRyb2wgeW91ciBvd25cbiAgLy8gdGltaW5nIGxvb3AgZm9yIHNvbWUgcmVhc29uIGUuZy4gc2xvd2luZyBkb3duIG9yIHNwZWVkaW5nIHVwIHRoZVxuICAvLyBzaW11bGF0aW9uLlxuICByZWJvdW5kLlN0ZXBwaW5nU2ltdWxhdGlvbkxvb3BlciA9IGZ1bmN0aW9uKHRpbWVzdGVwKSB7XG4gICAgdGhpcy5zcHJpbmdTeXN0ZW0gPSBudWxsO1xuICAgIHZhciB0aW1lID0gMDtcblxuICAgIC8vIHRoaXMucnVuIGlzIE5PT1AnZCBoZXJlIHRvIGFsbG93IGNvbnRyb2wgZnJvbSB0aGUgb3V0c2lkZSB1c2luZ1xuICAgIC8vIHRoaXMuc3RlcC5cbiAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCl7fTtcblxuICAgIC8vIFBlcmZvcm0gb25lIHN0ZXAgdG93YXJkIHJlc29sdmluZyB0aGUgU3ByaW5nU3lzdGVtLlxuICAgIHRoaXMuc3RlcCA9IGZ1bmN0aW9uKHRpbWVzdGVwKSB7XG4gICAgICB0aGlzLnNwcmluZ1N5c3RlbS5sb29wKHRpbWUrPXRpbWVzdGVwKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIE1hdGggZm9yIGNvbnZlcnRpbmcgZnJvbVxuICAvLyBbT3JpZ2FtaV0oaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9vcmlnYW1pLykgdG9cbiAgLy8gW1JlYm91bmRdKGh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVib3VuZCkuXG4gIC8vIFlvdSBtb3N0bHkgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCB0aGlzLCBqdXN0IHVzZVxuICAvLyBTcHJpbmdDb25maWcuZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb24odiwgdik7XG4gIHZhciBPcmlnYW1pVmFsdWVDb252ZXJ0ZXIgPSByZWJvdW5kLk9yaWdhbWlWYWx1ZUNvbnZlcnRlciA9IHtcbiAgICB0ZW5zaW9uRnJvbU9yaWdhbWlWYWx1ZTogZnVuY3Rpb24ob1ZhbHVlKSB7XG4gICAgICByZXR1cm4gKG9WYWx1ZSAtIDMwLjApICogMy42MiArIDE5NC4wO1xuICAgIH0sXG5cbiAgICBvcmlnYW1pVmFsdWVGcm9tVGVuc2lvbjogZnVuY3Rpb24odGVuc2lvbikge1xuICAgICAgcmV0dXJuICh0ZW5zaW9uIC0gMTk0LjApIC8gMy42MiArIDMwLjA7XG4gICAgfSxcblxuICAgIGZyaWN0aW9uRnJvbU9yaWdhbWlWYWx1ZTogZnVuY3Rpb24ob1ZhbHVlKSB7XG4gICAgICByZXR1cm4gKG9WYWx1ZSAtIDguMCkgKiAzLjAgKyAyNS4wO1xuICAgIH0sXG5cbiAgICBvcmlnYW1pRnJvbUZyaWN0aW9uOiBmdW5jdGlvbihmcmljdGlvbikge1xuICAgICAgcmV0dXJuIChmcmljdGlvbiAtIDI1LjApIC8gMy4wICsgOC4wO1xuICAgIH1cbiAgfTtcblxuICAvLyBCb3VuY3lDb252ZXJzaW9uIHByb3ZpZGVzIG1hdGggZm9yIGNvbnZlcnRpbmcgZnJvbSBPcmlnYW1pIFBvcEFuaW1hdGlvblxuICAvLyBjb25maWcgdmFsdWVzIHRvIHJlZ3VsYXIgT3JpZ2FtaSB0ZW5zaW9uIGFuZCBmcmljdGlvbiB2YWx1ZXMuIElmIHlvdSBhcmVcbiAgLy8gdHJ5aW5nIHRvIHJlcGxpY2F0ZSBwcm90b3R5cGVzIG1hZGUgd2l0aCBQb3BBbmltYXRpb24gcGF0Y2hlcyBpbiBPcmlnYW1pLFxuICAvLyB0aGVuIHlvdSBzaG91bGQgY3JlYXRlIHlvdXIgc3ByaW5ncyB3aXRoXG4gIC8vIFNwcmluZ1N5c3RlbS5jcmVhdGVTcHJpbmdXaXRoQm91bmNpbmVzc0FuZFNwZWVkLCB3aGljaCB1c2VzIHRoaXMgTWF0aFxuICAvLyBpbnRlcm5hbGx5IHRvIGNyZWF0ZSBhIHNwcmluZyB0byBtYXRjaCB0aGUgcHJvdmlkZWQgUG9wQW5pbWF0aW9uXG4gIC8vIGNvbmZpZ3VyYXRpb24gZnJvbSBPcmlnYW1pLlxuICB2YXIgQm91bmN5Q29udmVyc2lvbiA9IHJlYm91bmQuQm91bmN5Q29udmVyc2lvbiA9IGZ1bmN0aW9uKGJvdW5jaW5lc3MsIHNwZWVkKXtcbiAgICB0aGlzLmJvdW5jaW5lc3MgPSBib3VuY2luZXNzO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB2YXIgYiA9IHRoaXMubm9ybWFsaXplKGJvdW5jaW5lc3MgLyAxLjcsIDAsIDIwLjApO1xuICAgIGIgPSB0aGlzLnByb2plY3ROb3JtYWwoYiwgMC4wLCAwLjgpO1xuICAgIHZhciBzID0gdGhpcy5ub3JtYWxpemUoc3BlZWQgLyAxLjcsIDAsIDIwLjApO1xuICAgIHRoaXMuYm91bmN5VGVuc2lvbiA9IHRoaXMucHJvamVjdE5vcm1hbChzLCAwLjUsIDIwMClcbiAgICB0aGlzLmJvdW5jeUZyaWN0aW9uID0gdGhpcy5xdWFkcmF0aWNPdXRJbnRlcnBvbGF0aW9uKFxuICAgICAgYixcbiAgICAgIHRoaXMuYjNOb2JvdW5jZSh0aGlzLmJvdW5jeVRlbnNpb24pLFxuICAgICAgMC4wMSk7XG4gIH1cblxuICB1dGlsLmV4dGVuZChCb3VuY3lDb252ZXJzaW9uLnByb3RvdHlwZSwge1xuXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbih2YWx1ZSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpIHtcbiAgICAgIHJldHVybiAodmFsdWUgLSBzdGFydFZhbHVlKSAvIChlbmRWYWx1ZSAtIHN0YXJ0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBwcm9qZWN0Tm9ybWFsOiBmdW5jdGlvbihuLCBzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gc3RhcnQgKyAobiAqIChlbmQgLSBzdGFydCkpO1xuICAgIH0sXG5cbiAgICBsaW5lYXJJbnRlcnBvbGF0aW9uOiBmdW5jdGlvbih0LCBzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gdCAqIGVuZCArICgxLjAgLSB0KSAqIHN0YXJ0O1xuICAgIH0sXG5cbiAgICBxdWFkcmF0aWNPdXRJbnRlcnBvbGF0aW9uOiBmdW5jdGlvbih0LCBzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW5lYXJJbnRlcnBvbGF0aW9uKDIqdCAtIHQqdCwgc3RhcnQsIGVuZCk7XG4gICAgfSxcblxuICAgIGIzRnJpY3Rpb24xOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gKDAuMDAwNyAqIE1hdGgucG93KHgsIDMpKSAtXG4gICAgICAgICgwLjAzMSAqIE1hdGgucG93KHgsIDIpKSArIDAuNjQgKiB4ICsgMS4yODtcbiAgICB9LFxuXG4gICAgYjNGcmljdGlvbjI6IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiAoMC4wMDAwNDQgKiBNYXRoLnBvdyh4LCAzKSkgLVxuICAgICAgICAoMC4wMDYgKiBNYXRoLnBvdyh4LCAyKSkgKyAwLjM2ICogeCArIDIuO1xuICAgIH0sXG5cbiAgICBiM0ZyaWN0aW9uMzogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuICgwLjAwMDAwMDQ1ICogTWF0aC5wb3coeCwgMykpIC1cbiAgICAgICAgKDAuMDAwMzMyICogTWF0aC5wb3coeCwgMikpICsgMC4xMDc4ICogeCArIDUuODQ7XG4gICAgfSxcblxuICAgIGIzTm9ib3VuY2U6IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICAgIHZhciBmcmljdGlvbiA9IDA7XG4gICAgICBpZiAodGVuc2lvbiA8PSAxOCkge1xuICAgICAgICBmcmljdGlvbiA9IHRoaXMuYjNGcmljdGlvbjEodGVuc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHRlbnNpb24gPiAxOCAmJiB0ZW5zaW9uIDw9IDQ0KSB7XG4gICAgICAgIGZyaWN0aW9uID0gdGhpcy5iM0ZyaWN0aW9uMih0ZW5zaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyaWN0aW9uID0gdGhpcy5iM0ZyaWN0aW9uMyh0ZW5zaW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmljdGlvbjtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWwuZXh0ZW5kKFNwcmluZ0NvbmZpZywge1xuICAgIC8vIENvbnZlcnQgYW4gb3JpZ2FtaSBTcHJpbmcgdGVuc2lvbiBhbmQgZnJpY3Rpb24gdG8gUmVib3VuZCBzcHJpbmdcbiAgICAvLyBjb25zdGFudHMuIElmIHlvdSBhcmUgcHJvdG90eXBpbmcgYSBkZXNpZ24gd2l0aCBPcmlnYW1pLCB0aGlzXG4gICAgLy8gbWFrZXMgaXQgZWFzeSB0byBtYWtlIHlvdXIgc3ByaW5ncyBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBpblxuICAgIC8vIFJlYm91bmQuXG4gICAgZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb246IGZ1bmN0aW9uKHRlbnNpb24sIGZyaWN0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3IFNwcmluZ0NvbmZpZyhcbiAgICAgICAgT3JpZ2FtaVZhbHVlQ29udmVydGVyLnRlbnNpb25Gcm9tT3JpZ2FtaVZhbHVlKHRlbnNpb24pLFxuICAgICAgICBPcmlnYW1pVmFsdWVDb252ZXJ0ZXIuZnJpY3Rpb25Gcm9tT3JpZ2FtaVZhbHVlKGZyaWN0aW9uKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYW4gb3JpZ2FtaSBQb3BBbmltYXRpb24gU3ByaW5nIGJvdW5jaW5lc3MgYW5kIHNwZWVkIHRvIFJlYm91bmRcbiAgICAvLyBzcHJpbmcgY29uc3RhbnRzLiBJZiB5b3UgYXJlIHVzaW5nIFBvcEFuaW1hdGlvbiBwYXRjaGVzIGluIE9yaWdhbWksIHRoaXNcbiAgICAvLyB1dGlsaXR5IHdpbGwgcHJvdmlkZSBzcHJpbmdzIHRoYXQgbWF0Y2ggeW91ciBwcm90b3R5cGUuXG4gICAgZnJvbUJvdW5jaW5lc3NBbmRTcGVlZDogZnVuY3Rpb24oYm91bmNpbmVzcywgc3BlZWQpIHtcbiAgICAgIHZhciBib3VuY3lDb252ZXJzaW9uID0gbmV3IHJlYm91bmQuQm91bmN5Q29udmVyc2lvbihib3VuY2luZXNzLCBzcGVlZCk7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tT3JpZ2FtaVRlbnNpb25BbmRGcmljdGlvbihcbiAgICAgICAgYm91bmN5Q29udmVyc2lvbi5ib3VuY3lUZW5zaW9uLFxuICAgICAgICBib3VuY3lDb252ZXJzaW9uLmJvdW5jeUZyaWN0aW9uKTtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIGEgU3ByaW5nQ29uZmlnIHdpdGggbm8gdGVuc2lvbiBvciBhIGNvYXN0aW5nIHNwcmluZyB3aXRoIHNvbWVcbiAgICAvLyBhbW91bnQgb2YgRnJpY3Rpb24gc28gdGhhdCBpdCBkb2VzIG5vdCBjb2FzdCBpbmZpbmluaXRlbHkuXG4gICAgY29hc3RpbmdDb25maWdXaXRoT3JpZ2FtaUZyaWN0aW9uOiBmdW5jdGlvbihmcmljdGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBTcHJpbmdDb25maWcoXG4gICAgICAgIDAsXG4gICAgICAgIE9yaWdhbWlWYWx1ZUNvbnZlcnRlci5mcmljdGlvbkZyb21PcmlnYW1pVmFsdWUoZnJpY3Rpb24pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgU3ByaW5nQ29uZmlnLkRFRkFVTFRfT1JJR0FNSV9TUFJJTkdfQ09ORklHID1cbiAgICBTcHJpbmdDb25maWcuZnJvbU9yaWdhbWlUZW5zaW9uQW5kRnJpY3Rpb24oNDAsIDcpO1xuXG4gIHV0aWwuZXh0ZW5kKFNwcmluZ0NvbmZpZy5wcm90b3R5cGUsIHtmcmljdGlvbjogMCwgdGVuc2lvbjogMH0pO1xuXG4gIC8vIEhlcmUgYXJlIGEgY291cGxlIG9mIGZ1bmN0aW9uIHRvIGNvbnZlcnQgY29sb3JzIGJldHdlZW4gaGV4IGNvZGVzIGFuZCBSR0JcbiAgLy8gY29tcG9uZW50IHZhbHVlcy4gVGhlc2UgYXJlIGhhbmR5IHdoZW4gcGVyZm9ybWluZyBjb2xvclxuICAvLyB0d2VlbmluZyBhbmltYXRpb25zLlxuICB2YXIgY29sb3JDYWNoZSA9IHt9O1xuICB1dGlsLmhleFRvUkdCID0gZnVuY3Rpb24oY29sb3IpIHtcbiAgICBpZiAoY29sb3JDYWNoZVtjb2xvcl0pIHtcbiAgICAgIHJldHVybiBjb2xvckNhY2hlW2NvbG9yXTtcbiAgICB9XG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJycpO1xuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDMpIHtcbiAgICAgIGNvbG9yID0gY29sb3JbMF0gKyBjb2xvclswXSArIGNvbG9yWzFdICsgY29sb3JbMV0gKyBjb2xvclsyXSArIGNvbG9yWzJdO1xuICAgIH1cbiAgICB2YXIgcGFydHMgPSBjb2xvci5tYXRjaCgvLnsyfS9nKTtcblxuICAgIHZhciByZXQgPSB7XG4gICAgICByOiBwYXJzZUludChwYXJ0c1swXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocGFydHNbMV0sIDE2KSxcbiAgICAgIGI6IHBhcnNlSW50KHBhcnRzWzJdLCAxNilcbiAgICB9O1xuXG4gICAgY29sb3JDYWNoZVtjb2xvcl0gPSByZXQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICB1dGlsLnJnYlRvSGV4ID0gZnVuY3Rpb24ociwgZywgYikge1xuICAgIHIgPSByLnRvU3RyaW5nKDE2KTtcbiAgICBnID0gZy50b1N0cmluZygxNik7XG4gICAgYiA9IGIudG9TdHJpbmcoMTYpO1xuICAgIHIgPSByLmxlbmd0aCA8IDIgPyAnMCcgKyByIDogcjtcbiAgICBnID0gZy5sZW5ndGggPCAyID8gJzAnICsgZyA6IGc7XG4gICAgYiA9IGIubGVuZ3RoIDwgMiA/ICcwJyArIGIgOiBiO1xuICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gIH07XG5cbiAgdmFyIE1hdGhVdGlsID0gcmVib3VuZC5NYXRoVXRpbCA9IHtcbiAgICAvLyBUaGlzIGhlbHBlciBmdW5jdGlvbiBkb2VzIGEgbGluZWFyIGludGVycG9sYXRpb24gb2YgYSB2YWx1ZSBmcm9tXG4gICAgLy8gb25lIHJhbmdlIHRvIGFub3RoZXIuIFRoaXMgY2FuIGJlIHZlcnkgdXNlZnVsIGZvciBjb252ZXJ0aW5nIHRoZVxuICAgIC8vIG1vdGlvbiBvZiBhIFNwcmluZyB0byBhIHJhbmdlIG9mIFVJIHByb3BlcnR5IHZhbHVlcy4gRm9yIGV4YW1wbGUgYVxuICAgIC8vIHNwcmluZyBtb3ZpbmcgZnJvbSBwb3NpdGlvbiAwIHRvIDEgY291bGQgYmUgaW50ZXJwb2xhdGVkIHRvIG1vdmUgYVxuICAgIC8vIHZpZXcgZnJvbSBwaXhlbCAzMDAgdG8gMzUwIGFuZCBzY2FsZSBpdCBmcm9tIDAuNSB0byAxLiBUaGUgY3VycmVudFxuICAgIC8vIHBvc2l0aW9uIG9mIHRoZSBgU3ByaW5nYCBqdXN0IG5lZWRzIHRvIGJlIHJ1biB0aHJvdWdoIHRoaXMgbWV0aG9kXG4gICAgLy8gdGFraW5nIGl0cyBpbnB1dCByYW5nZSBpbiB0aGUgX2Zyb21fIHBhcmFtZXRlcnMgd2l0aCB0aGUgcHJvcGVydHlcbiAgICAvLyBhbmltYXRpb24gcmFuZ2UgaW4gdGhlIF90b18gcGFyYW1ldGVycy5cbiAgICBtYXBWYWx1ZUluUmFuZ2U6IGZ1bmN0aW9uKHZhbHVlLCBmcm9tTG93LCBmcm9tSGlnaCwgdG9Mb3csIHRvSGlnaCkge1xuICAgICAgdmFyIGZyb21SYW5nZVNpemUgPSBmcm9tSGlnaCAtIGZyb21Mb3c7XG4gICAgICB2YXIgdG9SYW5nZVNpemUgPSB0b0hpZ2ggLSB0b0xvdztcbiAgICAgIHZhciB2YWx1ZVNjYWxlID0gKHZhbHVlIC0gZnJvbUxvdykgLyBmcm9tUmFuZ2VTaXplO1xuICAgICAgcmV0dXJuIHRvTG93ICsgKHZhbHVlU2NhbGUgKiB0b1JhbmdlU2l6ZSk7XG4gICAgfSxcblxuICAgIC8vIEludGVycG9sYXRlIHR3byBoZXggY29sb3JzIGluIGEgMCAtIDEgcmFuZ2Ugb3Igb3B0aW9uYWxseSBwcm92aWRlIGFcbiAgICAvLyBjdXN0b20gcmFuZ2Ugd2l0aCBmcm9tTG93LGZyb21IaWdodC4gVGhlIG91dHB1dCB3aWxsIGJlIGluIGhleCBieSBkZWZhdWx0XG4gICAgLy8gdW5sZXNzIGFzUkdCIGlzIHRydWUgaW4gd2hpY2ggY2FzZSBpdCB3aWxsIGJlIHJldHVybmVkIGFzIGFuIHJnYiBzdHJpbmcuXG4gICAgaW50ZXJwb2xhdGVDb2xvcjpcbiAgICAgIGZ1bmN0aW9uKHZhbCwgc3RhcnRDb2xvciwgZW5kQ29sb3IsIGZyb21Mb3csIGZyb21IaWdoLCBhc1JHQikge1xuICAgICAgZnJvbUxvdyA9IGZyb21Mb3cgPT09IHVuZGVmaW5lZCA/IDAgOiBmcm9tTG93O1xuICAgICAgZnJvbUhpZ2ggPSBmcm9tSGlnaCA9PT0gdW5kZWZpbmVkID8gMSA6IGZyb21IaWdoO1xuICAgICAgc3RhcnRDb2xvciA9IHV0aWwuaGV4VG9SR0Ioc3RhcnRDb2xvcik7XG4gICAgICBlbmRDb2xvciA9IHV0aWwuaGV4VG9SR0IoZW5kQ29sb3IpO1xuICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKFxuICAgICAgICB1dGlsLm1hcFZhbHVlSW5SYW5nZSh2YWwsIGZyb21Mb3csIGZyb21IaWdoLCBzdGFydENvbG9yLnIsIGVuZENvbG9yLnIpXG4gICAgICApO1xuICAgICAgdmFyIGcgPSBNYXRoLmZsb29yKFxuICAgICAgICB1dGlsLm1hcFZhbHVlSW5SYW5nZSh2YWwsIGZyb21Mb3csIGZyb21IaWdoLCBzdGFydENvbG9yLmcsIGVuZENvbG9yLmcpXG4gICAgICApO1xuICAgICAgdmFyIGIgPSBNYXRoLmZsb29yKFxuICAgICAgICB1dGlsLm1hcFZhbHVlSW5SYW5nZSh2YWwsIGZyb21Mb3csIGZyb21IaWdoLCBzdGFydENvbG9yLmIsIGVuZENvbG9yLmIpXG4gICAgICApO1xuICAgICAgaWYgKGFzUkdCKSB7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXRpbC5yZ2JUb0hleChyLCBnLCBiKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24oZGVnKSB7XG4gICAgICByZXR1cm4gKGRlZyAqIE1hdGguUEkpIC8gMTgwO1xuICAgIH0sXG5cbiAgICByYWRpYW5zVG9EZWdyZWVzOiBmdW5jdGlvbihyYWQpIHtcbiAgICAgIHJldHVybiAocmFkICogMTgwKSAvIE1hdGguUEk7XG4gICAgfVxuXG4gIH1cblxuICB1dGlsLmV4dGVuZCh1dGlsLCBNYXRoVXRpbCk7XG5cblxuICAvLyBVdGlsaXRpZXNcbiAgLy8gLS0tLS0tLS0tXG4gIC8vIEhlcmUgYXJlIGEgZmV3IHVzZWZ1bCBKYXZhU2NyaXB0IHV0aWxpdGllcy5cblxuICAvLyBMb3Agb2ZmIHRoZSBmaXJzdCBvY2N1cmVuY2Ugb2YgdGhlIHJlZmVyZW5jZSBpbiB0aGUgQXJyYXkuXG4gIGZ1bmN0aW9uIHJlbW92ZUZpcnN0KGFycmF5LCBpdGVtKSB7XG4gICAgdmFyIGlkeCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgaWR4ICE9IC0xICYmIGFycmF5LnNwbGljZShpZHgsIDEpO1xuICB9XG5cbiAgdmFyIF9vbkZyYW1lO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgfTtcbiAgfVxuICBpZiAoIV9vbkZyYW1lICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnRpdGxlID09PSAnbm9kZScpIHtcbiAgICBfb25GcmFtZSA9IHNldEltbWVkaWF0ZTtcbiAgfVxuXG4gIC8vIENyb3NzIGJyb3dzZXIvbm9kZSB0aW1lciBmdW5jdGlvbnMuXG4gIHV0aWwub25GcmFtZSA9IGZ1bmN0aW9uIG9uRnJhbWUoZnVuYykge1xuICAgIHJldHVybiBfb25GcmFtZShmdW5jKTtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIHB1YmxpYyBhcGkgdXNpbmcgZXhwb3J0cyBmb3IgY29tbW9uIGpzIG9yIHRoZSB3aW5kb3cgZm9yXG4gIC8vIG5vcm1hbCBicm93c2VyIGluY2x1c2lvbi5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgdXRpbC5leHRlbmQoZXhwb3J0cywgcmVib3VuZCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5yZWJvdW5kID0gcmVib3VuZDtcbiAgfVxufSkoKTtcblxuXG4vLyBMZWdhbCBTdHVmZlxuLy8gLS0tLS0tLS0tLS1cbi8qKlxuICogIENvcHlyaWdodCAoYykgMjAxMywgRmFjZWJvb2ssIEluYy5cbiAqICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqICBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqICBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVib3VuZC9yZWJvdW5kLmpzXG4gKiogbW9kdWxlIGlkID0gMTY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCJ2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzL2Jyb3dzZXIuanMnKS5uZXh0VGljaztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpbW1lZGlhdGVJZHMgPSB7fTtcbnZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkgeyB0aW1lb3V0LmNsb3NlKCk7IH07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG4gIHZhciBpZCA9IG5leHRJbW1lZGlhdGVJZCsrO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaW1tZWRpYXRlSWRzW2lkXSA9IHRydWU7XG5cbiAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcbiAgICBpZiAoaW1tZWRpYXRlSWRzW2lkXSkge1xuICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3VcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuICAgICAgZXhwb3J0cy5jbGVhckltbWVkaWF0ZShpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWQ7XG59O1xuXG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG4gIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IDAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsVG9wOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLnNjcm9sbFRvcCwgdGhpcy5zdGF0ZS5zY3JvbGxMZWZ0KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3Njcm9sbC5qc1xuICoqLyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHtDb21wb25lbnR9ID0gUmVhY3Q7XG5cbmNvbnN0IHRyYW5zbGF0ZTNkID0gKHgseSx6KSA9PiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRyb2xUaXRsZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbGluZUhlaWdodDogJzMwcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9LFxuICBjb250cm9sUmFuZ2U6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGxpbmVIZWlnaHQ6ICczMHB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgY29udHJvbFZhbHVlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBsaW5lSGVpZ2h0OiAnMzBweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCBjb2xvcjogJ2dyZXknLCBmb250U2l6ZTogJzEwcHgnLCB3aWR0aDogJzIwcHgnIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IHZhbHVlOiAwLCBtaW46IDAsIG1heDogMTAwLCBuYW1lOiBudWxsIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21pbixtYXgsdmFsdWUsb25DaGFuZ2UsbmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIDxkaXYgey4uLnRoaXMucHJvcHN9PlxuICAgICAge25hbWUgJiYgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRyb2xUaXRsZX0+e25hbWV9PC9kaXY+IH1cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49e21pbn0gbWF4PXttYXh9IHN0eWxlPXtzdHlsZXMuY29udHJvbFJhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCkgfS8+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udHJvbFZhbHVlfT57dmFsdWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3Njcm9sbC1zcHJpbmctYW5pbWF0aW9uL3JhbmdlLWNvbnRyb2wuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
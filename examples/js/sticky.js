webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _scroll = __webpack_require__(197);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _boundingRect = __webpack_require__(198);
	
	var _boundingRect2 = _interopRequireDefault(_boundingRect);
	
	var containerHeight = '100px';
	
	var styles = {
	  sticky: { position: 'fixed', top: 0 },
	  title: { marginBottom: '100px' },
	  container: { width: '100vw', height: containerHeight, overflow: 'hidden', position: 'relative' },
	  image: { width: '100%', minWidth: '800px' },
	  boundingRect: { height: containerHeight }
	};
	
	var App = (function (_Component) {
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(App, _Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          { style: styles.title },
	          'The image is Sticky!'
	        ),
	        _react2['default'].createElement(
	          _scroll2['default'],
	          null,
	          function (scrollTop) {
	            return _react2['default'].createElement(
	              _boundingRect2['default'],
	              { style: styles.boundingRect },
	              function (rect) {
	                return _react2['default'].createElement(
	                  'div',
	                  { style: _extends({}, styles.container, rect && rect.top <= 0 && styles.sticky) },
	                  _react2['default'].createElement('img', { src: 'bg.jpg', style: styles.image })
	                );
	              }
	            );
	          }
	        ),
	        _react2['default'].createElement(
	          'div',
	          { style: styles.moreStuff },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            ' Wow wow '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

/***/ 197:
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
	
	var _react = __webpack_require__(8);
	
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

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var BoundingRect = (function (_Component) {
	  function BoundingRect(props) {
	    _classCallCheck(this, BoundingRect);
	
	    _get(Object.getPrototypeOf(BoundingRect.prototype), 'constructor', this).call(this, props);
	    this.state = { rect: null };
	  }
	
	  _inherits(BoundingRect, _Component);
	
	  _createClass(BoundingRect, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      var node = _react2['default'].findDOMNode(this.sticky);
	      var rect = node.getBoundingClientRect();
	      this.setState({ rect: rect });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        _extends({ ref: function (r) {
	            return _this.sticky = r;
	          } }, this.props),
	        this.props.children(this.state.rect)
	      );
	    }
	  }]);
	
	  return BoundingRect;
	})(_react.Component);
	
	exports['default'] = BoundingRect;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zdGlja3kvYXBwLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3N0aWNreS9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3RpY2t5L2JvdW5kaW5nLXJlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBK0IsQ0FBTzs7OzttQ0FDbkIsR0FBVTs7Ozt5Q0FDSixHQUFpQjs7OztBQUUxQyxLQUFNLGVBQWUsR0FBRyxPQUFPLENBQUM7O0FBRWhDLEtBQU0sTUFBTSxHQUFHO0FBQ2IsU0FBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDO0FBQ25DLFFBQUssRUFBRSxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUM7QUFDOUIsWUFBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNoRyxRQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDM0MsZUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRTtFQUMxQyxDQUFDOztLQUVJLEdBQUc7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OzthQUFILEdBQUc7O2dCQUFILEdBQUc7O1lBQ0Qsa0JBQUc7QUFDUCxjQUFROzs7U0FDTjs7YUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQU07O1VBQTBCO1NBQ2xEOzs7V0FBVSxtQkFBUztvQkFDakI7O2lCQUFjLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBYTtlQUFFLGNBQUk7d0JBQzdDOztxQkFBSyxLQUFLLGVBQU0sTUFBTSxDQUFDLFNBQVMsRUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBRzttQkFDN0UsMENBQUssR0FBRyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQU0sR0FBRztrQkFDckM7Z0JBQUE7Y0FDUTtZQUFBO1VBQ1I7U0FFVjs7YUFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVU7V0FDM0I7Ozs7WUFBa0I7V0FDbEI7Ozs7WUFFSTtVQUNBO1FBQ0YsQ0FBQztNQUNSOzs7VUFuQkcsR0FBRztXQWRNLFNBQVM7O0FBa0N2QixFQUFDOztBQUVGLG9CQUFNLE1BQU0sQ0FBQyxpQ0FBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3BDMUIsQ0FBTzs7OztLQUVqQixNQUFNO0FBQ2QsWUFEUSxNQUFNLENBQ2IsS0FBSyxFQUFFOzs7MkJBREEsTUFBTTs7QUFFdkIsZ0NBRmlCLE1BQU0sNkNBRWpCLEtBQUssRUFBRTs7QUFFYixTQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDWixpQkFBVSxFQUFFLENBQUMsRUFBRSxDQUFDOztBQUUvQixXQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGVBQUssRUFBSTtBQUN6QyxhQUFLLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7QUFDbEMsbUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7TUFDeEQsQ0FBQyxDQUFDO0lBQ0o7O2FBWGtCLE1BQU07O2dCQUFOLE1BQU07O1lBYW5CLGtCQUFHO0FBQ1AsY0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztNQUN4RTs7O1VBZmtCLE1BQU07V0FGWixTQUFTOztzQkFFSCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NGSSxDQUFPOzs7O0tBRWpCLFlBQVk7QUFDcEIsWUFEUSxZQUFZLENBQ25CLEtBQUssRUFBRTsyQkFEQSxZQUFZOztBQUU3QixnQ0FGaUIsWUFBWSw2Q0FFdkIsS0FBSyxFQUFFO0FBQ2IsU0FBSSxDQUFDLEtBQUssR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQztJQUMxQjs7YUFKa0IsWUFBWTs7Z0JBQVosWUFBWTs7WUFNTixxQ0FBRztBQUMxQixXQUFNLElBQUksR0FBRyxtQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLFdBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzFDLFdBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUosSUFBSSxFQUFDLENBQUMsQ0FBQztNQUN2Qjs7O1lBRUssa0JBQUc7OztBQUNQLGNBQU87O29CQUFLLEdBQUcsRUFBRSxXQUFDO29CQUFJLE1BQUssTUFBTSxHQUFHLENBQUM7WUFBQyxJQUFLLElBQUksQ0FBQyxLQUFLO1NBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pDLENBQUM7TUFDUjs7O1VBaEJrQixZQUFZO1dBRmxCLFNBQVM7O3NCQUVILFlBQVkiLCJmaWxlIjoic3RpY2t5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vc2Nyb2xsJztcbmltcG9ydCBCb3VuZGluZ1JlY3QgZnJvbSAnLi9ib3VuZGluZy1yZWN0JztcblxuY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJzEwMHB4JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzdGlja3k6IHtwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwfSxcbiAgdGl0bGU6IHttYXJnaW5Cb3R0b206ICcxMDBweCd9LFxuICBjb250YWluZXI6IHsgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogY29udGFpbmVySGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sXG4gIGltYWdlOiB7IHdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiAnODAwcHgnIH0sXG4gIGJvdW5kaW5nUmVjdDogeyBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodCB9XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRoZSBpbWFnZSBpcyBTdGlja3khPC9oMT5cbiAgICAgIDxTY3JvbGw+eyBzY3JvbGxUb3AgPT5cbiAgICAgICAgPEJvdW5kaW5nUmVjdCBzdHlsZT17c3R5bGVzLmJvdW5kaW5nUmVjdH0+e3JlY3QgPT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uc3R5bGVzLmNvbnRhaW5lciwgLi4uKHJlY3QgJiYgcmVjdC50b3AgPD0gMCAmJiBzdHlsZXMuc3RpY2t5KX19PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJiZy5qcGdcIiBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9PC9Cb3VuZGluZ1JlY3Q+XG4gICAgICB9PC9TY3JvbGw+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tb3JlU3R1ZmZ9PlxuICAgICAgICA8aDI+IFdvdyB3b3cgPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59O1xuXG5SZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3N0aWNreS9hcHAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogMCB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxUb3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuc2Nyb2xsVG9wLCB0aGlzLnN0YXRlLnNjcm9sbExlZnQpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc3RpY2t5L3Njcm9sbC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGluZ1JlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3JlY3Q6bnVsbH07XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuc3RpY2t5KTtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtyZWN0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyID0+IHRoaXMuc3RpY2t5ID0gcn0gey4uLnRoaXMucHJvcHN9PlxuICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5yZWN0KX1cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc3RpY2t5L2JvdW5kaW5nLXJlY3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
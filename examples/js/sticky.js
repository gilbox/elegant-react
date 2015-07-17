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
	
	var styles = {
	  sticky: { position: 'fixed', top: 0 },
	  title: { marginBottom: '100px' },
	  container: { width: '100vw', height: '400px', overflow: 'hidden', position: 'relative' },
	  image: { width: '100%', minWidth: '800px' }
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
	              null,
	              function (rect) {
	                return _react2['default'].createElement(
	                  'div',
	                  { style: _extends({}, rect && rect.top <= 0 && styles.sticky) },
	                  _react2['default'].createElement('img', { src: 'bg.jpg', style: styles.image })
	                );
	              }
	            );
	          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zdGlja3kvYXBwLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3N0aWNreS9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3RpY2t5L2JvdW5kaW5nLXJlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBK0IsQ0FBTzs7OzttQ0FDbkIsR0FBVTs7Ozt5Q0FDSixHQUFpQjs7OztBQUUxQyxLQUFNLE1BQU0sR0FBRztBQUNiLFNBQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQztBQUNuQyxRQUFLLEVBQUUsRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDO0FBQzlCLFlBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDeEYsUUFBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0VBQzVDLENBQUM7O0tBRUksR0FBRztZQUFILEdBQUc7MkJBQUgsR0FBRzs7Z0NBQUgsR0FBRzs7O2FBQUgsR0FBRzs7Z0JBQUgsR0FBRzs7WUFDRCxrQkFBRztBQUNQLGNBQVE7OztTQUNOOzthQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBTTs7VUFBMEI7U0FDbEQ7OztXQUFVLG1CQUFTO29CQUNqQjs7O2VBQWUsY0FBSTt3QkFDakI7O3FCQUFLLEtBQUssZUFBTyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBRzttQkFDeEQsMENBQUssR0FBRyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQU0sR0FBRztrQkFDckM7Z0JBQUE7Y0FDUTtZQUFBO1VBQ1I7UUFDTixDQUFDO01BQ1I7OztVQVpHLEdBQUc7V0FYTSxTQUFTOztBQXdCdkIsRUFBQzs7QUFFRixvQkFBTSxNQUFNLENBQUMsaUNBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0MxQjFCLENBQU87Ozs7S0FFakIsTUFBTTtBQUNkLFlBRFEsTUFBTSxDQUNiLEtBQUssRUFBRTs7OzJCQURBLE1BQU07O0FBRXZCLGdDQUZpQixNQUFNLDZDQUVqQixLQUFLLEVBQUU7O0FBRWIsU0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ1osaUJBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7QUFFL0IsV0FBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxlQUFLLEVBQUk7QUFDekMsYUFBSyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTO0FBQ2xDLG1CQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO01BQ3hELENBQUMsQ0FBQztJQUNKOzthQVhrQixNQUFNOztnQkFBTixNQUFNOztZQWFuQixrQkFBRztBQUNQLGNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7TUFDeEU7OztVQWZrQixNQUFNO1dBRlosU0FBUzs7c0JBRUgsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDRkksQ0FBTzs7OztLQUVqQixZQUFZO0FBQ3BCLFlBRFEsWUFBWSxDQUNuQixLQUFLLEVBQUU7MkJBREEsWUFBWTs7QUFFN0IsZ0NBRmlCLFlBQVksNkNBRXZCLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7SUFDMUI7O2FBSmtCLFlBQVk7O2dCQUFaLFlBQVk7O1lBTU4scUNBQUc7QUFDMUIsV0FBTSxJQUFJLEdBQUcsbUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxXQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUMxQyxXQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFKLElBQUksRUFBQyxDQUFDLENBQUM7TUFDdkI7OztZQUVLLGtCQUFHOzs7QUFDUCxjQUFPOztvQkFBSyxHQUFHLEVBQUUsV0FBQztvQkFBSSxNQUFLLE1BQU0sR0FBRyxDQUFDO1lBQUMsSUFBSyxJQUFJLENBQUMsS0FBSztTQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDO01BQ1I7OztVQWhCa0IsWUFBWTtXQUZsQixTQUFTOztzQkFFSCxZQUFZIiwiZmlsZSI6InN0aWNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgQm91bmRpbmdSZWN0IGZyb20gJy4vYm91bmRpbmctcmVjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3RpY2t5OiB7cG9zaXRpb246ICdmaXhlZCcsIHRvcDogMH0sXG4gIHRpdGxlOiB7bWFyZ2luQm90dG9tOiAnMTAwcHgnfSxcbiAgY29udGFpbmVyOiB7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgaW1hZ2U6IHsgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6ICc4MDBweCcgfVxufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAgPGRpdj5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnRpdGxlfT5UaGUgaW1hZ2UgaXMgU3RpY2t5ITwvaDE+XG4gICAgICA8U2Nyb2xsPnsgc2Nyb2xsVG9wID0+XG4gICAgICAgIDxCb3VuZGluZ1JlY3Q+e3JlY3QgPT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uKHJlY3QgJiYgcmVjdC50b3AgPD0gMCAmJiBzdHlsZXMuc3RpY2t5KX19PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJiZy5qcGdcIiBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9PC9Cb3VuZGluZ1JlY3Q+XG4gICAgICB9PC9TY3JvbGw+XG4gICAgPC9kaXY+O1xuICB9XG59O1xuXG5SZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3N0aWNreS9hcHAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogMCB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxUb3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuc2Nyb2xsVG9wLCB0aGlzLnN0YXRlLnNjcm9sbExlZnQpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc3RpY2t5L3Njcm9sbC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGluZ1JlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3JlY3Q6bnVsbH07XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuc3RpY2t5KTtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtyZWN0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyID0+IHRoaXMuc3RpY2t5ID0gcn0gey4uLnRoaXMucHJvcHN9PlxuICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5yZWN0KX1cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvc3RpY2t5L2JvdW5kaW5nLXJlY3QuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
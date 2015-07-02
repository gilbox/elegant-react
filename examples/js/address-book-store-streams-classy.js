webpackJsonp([2],{

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
	
	var _require = __webpack_require__(169)({ debug: true });
	
	var elegant = _require.elegant;
	var subedit = _require.subedit;
	
	var _require2 = __webpack_require__(161);
	
	var fromJS = _require2.fromJS;
	
	var flyd = __webpack_require__(162);
	var stream = flyd.stream;
	
	var newBlankEntry = function newBlankEntry(_) {
	  return fromJS({ name: '', phone: '' });
	};
	
	var initialState = fromJS({
	  newEntry: newBlankEntry(),
	  entriesHistoryCount: 0,
	  nameHistoryCount: 0,
	  phoneHistoryCount: 0,
	  entries: [{ name: 'aria', phone: '3332221111' }, { name: 'gilbox', phone: '6665552222' }, { name: 'jimbo', phone: '9993332222' }, { name: 'lebowski', phone: '7774442222' }, { name: 'murphy', phone: '8884442222' }, { name: 'vanderbilt', phone: '9993332222' }]
	});
	
	var parseName = function parseName(v) {
	  return v && v.replace(/\d/g, '');
	};
	
	var identity = function identity(v) {
	  return v;
	};
	
	var parsePhone = function parsePhone(v) {
	  return v && v.replace(/\D/g, '').substr(0, 10);
	};
	
	var formatPhone = function formatPhone(p) {
	  return p && [p[0], p[1], p[2], '-', p[3], p[4], p[5], '-', p[6], p[7], p[8], p[9]].join('').replace(/-+$/, '');
	};
	
	var FormattedInput = (function (_Component) {
	  function FormattedInput() {
	    _classCallCheck(this, _FormattedInput);
	
	    _get(Object.getPrototypeOf(_FormattedInput.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(FormattedInput, _Component);
	
	  var _FormattedInput = FormattedInput;
	
	  _createClass(_FormattedInput, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var value = _props.value;
	      var formatter = _props.formatter;
	      var parser = _props.parser;
	      var edit = this.props.statics.edit;
	
	      return React.createElement('input', _extends({}, this.props, {
	        value: formatter(value),
	        onChange: function (event) {
	          return edit(function (value) {
	            return parser(event.target.value);
	          });
	        } }));
	    }
	  }]);
	
	  FormattedInput = elegant(FormattedInput) || FormattedInput;
	  return FormattedInput;
	})(Component);
	
	var PhoneInput = (function (_Component2) {
	  function PhoneInput() {
	    _classCallCheck(this, _PhoneInput);
	
	    _get(Object.getPrototypeOf(_PhoneInput.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(PhoneInput, _Component2);
	
	  var _PhoneInput = PhoneInput;
	
	  _createClass(_PhoneInput, [{
	    key: 'render',
	    value: function render() {
	      var value = this.props.value;
	      var editPhone = this.props.statics.editPhone;
	
	      return React.createElement(FormattedInput, _extends({}, this.props, {
	        placeholder: 'Phone Number',
	        formatter: formatPhone,
	        parser: parsePhone,
	        value: value,
	        statics: { edit: editPhone } }));
	    }
	  }]);
	
	  PhoneInput = elegant(PhoneInput) || PhoneInput;
	  return PhoneInput;
	})(Component);
	
	var NameInput = (function (_Component3) {
	  function NameInput() {
	    _classCallCheck(this, _NameInput);
	
	    _get(Object.getPrototypeOf(_NameInput.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(NameInput, _Component3);
	
	  var _NameInput = NameInput;
	
	  _createClass(_NameInput, [{
	    key: 'render',
	    value: function render() {
	      var value = this.props.value;
	      var editName = this.props.statics.editName;
	
	      return React.createElement(FormattedInput, _extends({}, this.props, {
	        placeholder: 'Name',
	        formatter: identity,
	        parser: parseName,
	        value: value,
	        statics: { edit: editName } }));
	    }
	  }]);
	
	  NameInput = elegant(NameInput) || NameInput;
	  return NameInput;
	})(Component);
	
	var Entry = (function (_Component4) {
	  function Entry() {
	    _classCallCheck(this, _Entry);
	
	    _get(Object.getPrototypeOf(_Entry.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Entry, _Component4);
	
	  var _Entry = Entry;
	
	  _createClass(_Entry, [{
	    key: 'render',
	    value: function render() {
	      var entry = this.props.entry;
	      var deleteEntry = this.props.statics.deleteEntry;
	
	      return React.createElement(
	        'div',
	        { className: 'Entry' },
	        React.createElement(
	          'div',
	          { onClick: deleteEntry, className: 'Entry-delete' },
	          '×'
	        ),
	        React.createElement(
	          'div',
	          { className: 'Entry-name' },
	          entry.get('name')
	        ),
	        React.createElement(
	          'div',
	          { className: 'Entry-phone' },
	          formatPhone(entry.get('phone'))
	        )
	      );
	    }
	  }]);
	
	  Entry = elegant(Entry) || Entry;
	  return Entry;
	})(Component);
	
	var Entries = (function (_Component5) {
	  function Entries() {
	    _classCallCheck(this, _Entries);
	
	    _get(Object.getPrototypeOf(_Entries.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Entries, _Component5);
	
	  var _Entries = Entries;
	
	  _createClass(_Entries, [{
	    key: 'render',
	    value: function render() {
	      var entries = this.props.entries;
	      var editEntries = this.props.statics.editEntries;
	
	      return React.createElement(
	        'div',
	        { className: 'Entries' },
	        entries.map(function (entry, index) {
	          return React.createElement(Entry, {
	            key: '' + entry.get('phone') + entry.get('name'),
	            entry: entry,
	            statics: {
	              deleteEntry: function deleteEntry(_) {
	                return editEntries(function (entries) {
	                  return entries['delete'](index);
	                });
	              }
	            } });
	        }).toArray()
	      );
	    }
	  }]);
	
	  Entries = elegant(Entries) || Entries;
	  return Entries;
	})(Component);
	
	var handleEvent = function handleEvent(handler) {
	  return function (event) {
	    handler(event);
	    event.preventDefault();
	  };
	};
	
	// Form for creating a new phone book entry
	
	var NewEntry = (function (_Component6) {
	  function NewEntry() {
	    _classCallCheck(this, _NewEntry);
	
	    _get(Object.getPrototypeOf(_NewEntry.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(NewEntry, _Component6);
	
	  var _NewEntry = NewEntry;
	
	  _createClass(_NewEntry, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var data = _props2.data;
	      var nameHistoryCount = _props2.nameHistoryCount;
	      var phoneHistoryCount = _props2.phoneHistoryCount;
	      var _props$statics = this.props.statics;
	      var edit = _props$statics.edit;
	      var addNewEntry = _props$statics.addNewEntry;
	      var nameUndo = _props$statics.nameUndo;
	      var phoneUndo = _props$statics.phoneUndo;
	
	      return React.createElement(
	        'form',
	        { className: 'NewEntry', onSubmit: handleEvent(addNewEntry) },
	        React.createElement(
	          'div',
	          { className: 'NewEntry-title' },
	          'ADD NEW'
	        ),
	        React.createElement(
	          'div',
	          { className: 'InputWrap' },
	          nameHistoryCount ? React.createElement(
	            'a',
	            { href: '#',
	              onClick: handleEvent(nameUndo),
	              className: 'InputUndoBtn' },
	            '⎌'
	          ) : null,
	          React.createElement(NameInput, {
	            className: 'NewEntry-name',
	            value: data.get('name'),
	            statics: {
	              editName: subedit(edit, 'name') } })
	        ),
	        React.createElement(
	          'div',
	          { className: 'InputWrap' },
	          phoneHistoryCount ? React.createElement(
	            'a',
	            { href: '#',
	              onClick: handleEvent(phoneUndo),
	              className: 'InputUndoBtn' },
	            '⎌'
	          ) : null,
	          React.createElement(PhoneInput, {
	            className: 'NewEntry-phone',
	            value: data.get('phone'),
	            statics: {
	              editPhone: subedit(edit, 'phone') } })
	        ),
	        React.createElement('button', { style: { display: 'none' } })
	      );
	    }
	  }]);
	
	  NewEntry = elegant(NewEntry) || NewEntry;
	  return NewEntry;
	})(Component);
	
	var pushNewEntry = function pushNewEntry(edit) {
	  return edit(function (data) {
	    return data.getIn(['newEntry', 'name']) && data.update('entries', function (entries) {
	      return entries.push(data.get('newEntry')).sortBy(function (entry) {
	        return entry.get('name');
	      });
	    }).update('newEntry', newBlankEntry);
	  });
	};
	
	var App = (function (_Component7) {
	  function App() {
	    _classCallCheck(this, _App);
	
	    _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(App, _Component7);
	
	  var _App = App;
	
	  _createClass(_App, [{
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var data = _props3.data;
	      var nameHistoryCount = _props3.nameHistoryCount;
	      var phoneHistoryCount = _props3.phoneHistoryCount;
	      var entriesHistoryCount = _props3.entriesHistoryCount;
	      var _props$statics2 = this.props.statics;
	      var edit = _props$statics2.edit;
	      var nameUndo = _props$statics2.nameUndo;
	      var phoneUndo = _props$statics2.phoneUndo;
	      var entriesUndo = _props$statics2.entriesUndo;
	
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          'Address Book Demo',
	          data.get('entriesHistoryCount') ? React.createElement(
	            'a',
	            { href: '#',
	              onClick: handleEvent(entriesUndo),
	              className: 'UndoBtn' },
	            '⎌'
	          ) : null
	        ),
	        React.createElement(NewEntry, {
	          nameHistoryCount: data.get('nameHistoryCount'),
	          phoneHistoryCount: data.get('phoneHistoryCount'),
	          data: data.get('newEntry'),
	          statics: {
	            nameUndo: nameUndo,
	            phoneUndo: phoneUndo,
	            edit: subedit(edit, 'newEntry'),
	            addNewEntry: function addNewEntry(_) {
	              return pushNewEntry(edit);
	            } } }),
	        React.createElement(Entries, {
	          entries: data.get('entries'),
	          statics: { editEntries: subedit(edit, 'entries') } })
	      );
	    }
	  }]);
	
	  App = elegant(App) || App;
	  return App;
	})(Component);
	
	var filterStream = function filterStream(predicate, s) {
	  return flyd.stream([s], function (self) {
	    if (predicate(s())) self(s.val);
	  });
	};
	
	var last = function last(arr) {
	  return arr[arr.length - 1];
	};
	
	var subStream = function subStream(dataStream) {
	  for (var _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    path[_key - 1] = arguments[_key];
	  }
	
	  return flyd.map(function (data) {
	    return data.getIn(path);
	  }, dataStream);
	};
	
	var createHistoryStore = function createHistoryStore(previousStateStream, stateStream, undoStream, outputStream, outputCountStream) {
	  var history = [];
	  var filteredStateStream = filterStream(function (state) {
	    return state !== previousStateStream();
	  }, stateStream);
	
	  flyd.on(function (state) {
	    outputCountStream(history.push(previousStateStream()));
	  }, filteredStateStream);
	
	  flyd.on(function (undo) {
	    outputStream(history.pop());
	    outputCountStream(history.length);
	  }, undoStream);
	};
	
	var logstream = function logstream(s) {
	  s = s || stream();
	  flyd.on(function (v) {
	    return console.log('stream:', v.toJS ? v.toJS() : v);
	  }, s);
	  return s;
	};
	
	// the Renderer component manages the top-level app state.
	// it also handles the undo history which takes a snapshot of
	// the entire application state every time the 'entries' change
	
	var Renderer = (function (_Component8) {
	  function Renderer(props) {
	    _classCallCheck(this, _Renderer);
	
	    _get(Object.getPrototypeOf(_Renderer.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      data: this.data = props.initialState };
	    // create our streams...
	
	    this.stateStream = stream();
	    this.previousStateStream = stream();
	    this.nameUndoActionStream = stream();
	    this.phoneUndoActionStream = stream();
	    this.entriesUndoActionStream = stream();
	
	    // and connect the wires...
	
	    var wiredStream = this.wiredStream.bind(this);
	
	    createHistoryStore(subStream(this.previousStateStream, 'newEntry', 'name'), subStream(this.stateStream, 'newEntry', 'name'), this.nameUndoActionStream, wiredStream('newEntry', 'name'), wiredStream('nameHistoryCount'));
	
	    createHistoryStore(subStream(this.previousStateStream, 'newEntry', 'phone'), subStream(this.stateStream, 'newEntry', 'phone'), this.phoneUndoActionStream, wiredStream('newEntry', 'phone'), wiredStream('phoneHistoryCount'));
	
	    createHistoryStore(subStream(this.previousStateStream, 'entries'), subStream(this.stateStream, 'entries'), this.entriesUndoActionStream, wiredStream('entries'), wiredStream('entriesHistoryCount'));
	  }
	
	  _inherits(Renderer, _Component8);
	
	  var _Renderer = Renderer;
	
	  _createClass(_Renderer, [{
	    key: 'updateData',
	    value: function updateData(transform) {
	      // this is necessary because this.state.data is updated asynchronously
	      // while this.data is always up-to-date immediately
	      this.setState({
	        data: this.data = transform(this.data)
	      });
	    }
	  }, {
	    key: 'wiredStream',
	
	    // returns a stream whose writes
	    // directly update application state
	    value: function wiredStream() {
	      for (var _len2 = arguments.length, path = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        path[_key2] = arguments[_key2];
	      }
	
	      var s = stream();
	      var updateData = this.updateData.bind(this);
	
	      flyd.on(function (newData) {
	        updateData(function (data) {
	          return data.setIn(path, newData);
	        });
	      }, s);
	      return s;
	    }
	  }, {
	    key: 'edit',
	    value: function edit(transform) {
	      this.previousStateStream(this.data);
	      this.updateData(transform);
	      this.stateStream(this.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return React.createElement(App, {
	        data: this.state.data,
	        statics: {
	          edit: this.edit.bind(this),
	          nameUndo: function nameUndo(_) {
	            return _this.nameUndoActionStream(1);
	          },
	          phoneUndo: function phoneUndo(_) {
	            return _this.phoneUndoActionStream(1);
	          },
	          entriesUndo: function entriesUndo(_) {
	            return _this.entriesUndoActionStream(1);
	          } } });
	    }
	  }]);
	
	  Renderer = elegant(Renderer) || Renderer;
	  return Renderer;
	})(Component);
	
	React.render(React.createElement(Renderer, { initialState: initialState }), document.getElementById('example'));
	
	// input field that only allows 10 digits, and formats like XXX-XXX-XXXX

	// input field that disallows digits

	// a single phone book entry

	// grid of phone book entries

/***/ },

/***/ 159:
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

/***/ 160:
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

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	(function (global, factory) {
	  true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory()
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    return index >= 0 ? (+index) : ensureSize(iter) + (+index);
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function src_Iterator__Iterator(next) {
	      this.next = next;
	    }
	
	    src_Iterator__Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  src_Iterator__Iterator.KEYS = ITERATE_KEYS;
	  src_Iterator__Iterator.VALUES = ITERATE_VALUES;
	  src_Iterator__Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  src_Iterator__Iterator.prototype.inspect =
	  src_Iterator__Iterator.prototype.toSource = function () { return this.toString(); }
	  src_Iterator__Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  // #pragma Root Sequences
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new src_Iterator__Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  var src_Math__imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function src_Math__imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    return hashJSObj(o);
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new src_Iterator__Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = src_Map__Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : src_Map__Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    sliceSeq.size = sliceSize;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new src_Iterator__Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new src_Iterator__Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new src_Iterator__Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(src_Map__Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function src_Map__Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    src_Map__Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    src_Map__Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    src_Map__Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    src_Map__Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    src_Map__Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    src_Map__Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    src_Map__Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    src_Map__Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    src_Map__Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    src_Map__Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    src_Map__Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    src_Map__Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    src_Map__Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger(undefined), arguments);
	    };
	
	    src_Map__Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMerger(merger), iters);
	    };
	
	    src_Map__Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    src_Map__Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    src_Map__Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    src_Map__Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    src_Map__Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    src_Map__Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    src_Map__Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    src_Map__Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    src_Map__Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    src_Map__Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  src_Map__Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = src_Map__Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, src_Iterator__Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(merger) {
	    return function(existing, value, key) 
	      {return existing && existing.mergeDeepWith && isIterable(value) ?
	        existing.mergeDeepWith(merger, value) :
	        merger ? merger(existing, value, key) : value};
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index < 0 || index >= this.size) {
	        return notSetValue;
	      }
	      index += this._origin;
	      var node = listNodeFor(this, index);
	      return node && node.array[index & MASK];
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger(undefined), arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMerger(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	      var removingLast = sizeIndex === this.array.length - 1;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingLast) {
	          return this;
	        }
	      }
	      if (removingLast && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingLast) {
	        editable.array.pop();
	      }
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, src_Map__Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new src_Iterator__Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  createClass(src_Set__Set, SetCollection);
	
	    // @pragma Construction
	
	    function src_Set__Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    src_Set__Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    src_Set__Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    src_Set__Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    src_Set__Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    src_Set__Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    src_Set__Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    src_Set__Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    src_Set__Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    src_Set__Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    src_Set__Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    src_Set__Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    src_Set__Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    src_Set__Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    src_Set__Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    src_Set__Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    src_Set__Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    src_Set__Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    src_Set__Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  src_Set__Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = src_Set__Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, src_Set__Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = src_Map__Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new src_Iterator__Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = src_Iterator__Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return src_Map__Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return src_Set__Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    contains: function(searchValue) {
	      return this.includes(searchValue);
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    },
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	
	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();
	
	
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    },
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      return this.toSeq().reverse().indexOf(searchValue);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      index = resolveBegin(index, this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    },
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    },
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = src_Math__imul(h, 0xCC9E2D51);
	    h = src_Math__imul(h << 15 | h >>> -15, 0x1B873593);
	    h = src_Math__imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = src_Math__imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = src_Math__imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: src_Map__Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: src_Set__Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS,
	
	  };
	
	  return Immutable;
	
	}));

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	var curryN = __webpack_require__(163);
	
	'use strict';
	
	function isFunction(obj) {
	  return !!(obj && obj.constructor && obj.call && obj.apply);
	}
	
	// Globals
	var toUpdate = [];
	var inStream;
	
	function map(f, s) {
	  return stream([s], function(self) { self(f(s.val)); });
	}
	
	function on(f, s) {
	  stream([s], function() { f(s.val); });
	}
	
	function boundMap(f) { return map(f, this); }
	
	var scan = curryN(3, function(f, acc, s) {
	  var ns = stream([s], function() {
	    return (acc = f(acc, s()));
	  });
	  if (!ns.hasVal) ns(acc);
	  return ns;
	});
	
	var merge = curryN(2, function(s1, s2) {
	  var s = immediate(stream([s1, s2], function(n, changed) {
	    return changed[0] ? changed[0]()
	         : s1.hasVal  ? s1()
	                      : s2();
	  }));
	  endsOn(stream([s1.end, s2.end], function(self, changed) {
	    return true;
	  }), s);
	  return s;
	});
	
	function ap(s2) {
	  var s1 = this;
	  return stream([s1, s2], function() { return s1()(s2()); });
	}
	
	function initialDepsNotMet(stream) {
	  stream.depsMet = stream.deps.every(function(s) {
	    return s.hasVal;
	  });
	  return !stream.depsMet;
	}
	
	function updateStream(s) {
	  if ((s.depsMet !== true && initialDepsNotMet(s)) ||
	      (s.end !== undefined && s.end.val === true)) return;
	  if (inStream !== undefined) {
	    toUpdate.push(s);
	    return;
	  }
	  inStream = s;
	  var returnVal = s.fn(s, s.depsChanged);
	  if (returnVal !== undefined) {
	    s(returnVal);
	  }
	  inStream = undefined;
	  if (s.depsChanged !== undefined) s.depsChanged = [];
	  s.shouldUpdate = false;
	  if (flushing === false) flushUpdate();
	}
	
	var order = [];
	var orderNextIdx = -1;
	
	function findDeps(s) {
	  var i, listeners = s.listeners;
	  if (s.queued === false) {
	    s.queued = true;
	    for (i = 0; i < listeners.length; ++i) {
	      findDeps(listeners[i]);
	    }
	    order[++orderNextIdx] = s;
	  }
	}
	
	function updateDeps(s) {
	  var i, o, list, listeners = s.listeners;
	  for (i = 0; i < listeners.length; ++i) {
	    list = listeners[i];
	    if (list.end === s) {
	      endStream(list);
	    } else {
	      if (list.depsChanged !== undefined) list.depsChanged.push(s);
	      list.shouldUpdate = true;
	      findDeps(list);
	    }
	  }
	  for (; orderNextIdx >= 0; --orderNextIdx) {
	    o = order[orderNextIdx];
	    if (o.shouldUpdate === true) updateStream(o);
	    o.queued = false;
	  }
	}
	
	var flushing = false;
	
	function flushUpdate() {
	  flushing = true;
	  while (toUpdate.length > 0) {
	    var s = toUpdate.shift();
	    if (s.vals.length > 0) s.val = s.vals.shift();
	    updateDeps(s);
	  }
	  flushing = false;
	}
	
	function isStream(stream) {
	  return isFunction(stream) && 'hasVal' in stream;
	}
	
	function streamToString() {
	  return 'stream(' + this.val + ')';
	}
	
	function updateStreamValue(s, n) {
	  if (n !== undefined && n !== null && isFunction(n.then)) {
	    n.then(s);
	    return;
	  }
	  s.val = n;
	  s.hasVal = true;
	  if (inStream === undefined) {
	    flushing = true;
	    updateDeps(s);
	    if (toUpdate.length > 0) flushUpdate(); else flushing = false;
	  } else if (inStream === s) {
	    markListeners(s, s.listeners);
	  } else {
	    s.vals.push(n);
	    toUpdate.push(s);
	  }
	}
	
	function markListeners(s, lists) {
	  var i, list;
	  for (i = 0; i < lists.length; ++i) {
	    list = lists[i];
	    if (list.end !== s) {
	      if (list.depsChanged !== undefined) {
	        list.depsChanged.push(s);
	      }
	      list.shouldUpdate = true;
	    } else {
	      endStream(list);
	    }
	  }
	}
	
	function createStream() {
	  function s(n) {
	    var i, list;
	    if (arguments.length === 0) {
	      return s.val;
	    } else {
	      updateStreamValue(s, n);
	      return s;
	    }
	  }
	  s.hasVal = false;
	  s.val = undefined;
	  s.vals = [];
	  s.listeners = [];
	  s.queued = false;
	  s.end = undefined;
	
	  s.map = boundMap;
	  s.ap = ap;
	  s.of = stream;
	  s.toString = streamToString;
	
	  return s;
	}
	
	function addListeners(deps, s) {
	  for (var i = 0; i < deps.length; ++i) {
	    deps[i].listeners.push(s);
	  }
	}
	
	function createDependentStream(deps, fn) {
	  var i, s = createStream();
	  s.fn = fn;
	  s.deps = deps;
	  s.depsMet = false;
	  s.depsChanged = fn.length > 1 ? [] : undefined;
	  s.shouldUpdate = false;
	  addListeners(deps, s);
	  return s;
	}
	
	function immediate(s) {
	  if (s.depsMet === false) {
	    s.depsMet = true;
	    updateStream(s);
	  }
	  return s;
	}
	
	function removeListener(s, listeners) {
	  var idx = listeners.indexOf(s);
	  listeners[idx] = listeners[listeners.length - 1];
	  listeners.length--;
	}
	
	function detachDeps(s) {
	  for (var i = 0; i < s.deps.length; ++i) {
	    removeListener(s, s.deps[i].listeners);
	  }
	  s.deps.length = 0;
	}
	
	function endStream(s) {
	  if (s.deps !== undefined) detachDeps(s);
	  if (s.end !== undefined) detachDeps(s.end);
	}
	
	function endsOn(endS, s) {
	  detachDeps(s.end);
	  endS.listeners.push(s.end);
	  s.end.deps.push(endS);
	  return s;
	}
	
	function trueFn() { return true; }
	
	function stream(arg, fn) {
	  var i, s, deps, depEndStreams;
	  var endStream = createDependentStream([], trueFn);
	  if (arguments.length > 1) {
	    deps = []; depEndStreams = [];
	    for (i = 0; i < arg.length; ++i) {
	      if (arg[i] !== undefined) {
	        deps.push(arg[i]);
	        if (arg[i].end !== undefined) depEndStreams.push(arg[i].end);
	      }
	    }
	    s = createDependentStream(deps, fn);
	    s.end = endStream;
	    endStream.listeners.push(s);
	    addListeners(depEndStreams, endStream);
	    endStream.deps = depEndStreams;
	    updateStream(s);
	  } else {
	    s = createStream();
	    s.end = endStream;
	    endStream.listeners.push(s);
	    if (arguments.length === 1) s(arg);
	  }
	  return s;
	}
	
	var transduce = curryN(2, function(xform, source) {
	  xform = xform(new StreamTransformer());
	  return stream([source], function(self) {
	    var res = xform['@@transducer/step'](undefined, source());
	    if (res && res['@@transducer/reduced'] === true) {
	      self.end(true);
	      return res['@@transducer/value'];
	    } else {
	      return res;
	    }
	  });
	});
	
	function StreamTransformer() { }
	StreamTransformer.prototype['@@transducer/init'] = function() { };
	StreamTransformer.prototype['@@transducer/result'] = function() { };
	StreamTransformer.prototype['@@transducer/step'] = function(s, v) { return v; };
	
	module.exports = {
	  stream: stream,
	  isStream: isStream,
	  transduce: transduce,
	  merge: merge,
	  scan: scan,
	  endsOn: endsOn,
	  map: curryN(2, map),
	  on: curryN(2, on),
	  curryN: curryN,
	  immediate: immediate,
	};


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	var __ = __webpack_require__(164);
	var _curry2 = __webpack_require__(165);
	var _slice = __webpack_require__(167);
	var arity = __webpack_require__(168);
	
	
	/**
	 * Returns a curried equivalent of the provided function, with the
	 * specified arity. The curried function has two unusual capabilities.
	 * First, its arguments needn't be provided one at a time. If `g` is
	 * `R.curryN(3, f)`, the following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`,
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFourNumbers = function() {
	 *        return R.sum([].slice.call(arguments, 0, 4));
	 *      };
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  return arity(length, function() {
	    var n = arguments.length;
	    var shortfall = length - n;
	    var idx = n;
	    while (--idx >= 0) {
	      if (arguments[idx] === __) {
	        shortfall += 1;
	      }
	    }
	    if (shortfall <= 0) {
	      return fn.apply(this, arguments);
	    } else {
	      var initialArgs = _slice(arguments);
	      return curryN(shortfall, function() {
	        var currentArgs = _slice(arguments);
	        var combinedArgs = [];
	        var idx = -1;
	        while (++idx < n) {
	          var val = initialArgs[idx];
	          combinedArgs[idx] = (val === __ ? currentArgs.shift() : val);
	        }
	        return fn.apply(this, combinedArgs.concat(currentArgs));
	      });
	    }
	  });
	});


/***/ },

/***/ 164:
/***/ function(module, exports) {

	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments,
	 * regardless of their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	module.exports = {ramda: 'placeholder'};


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	var __ = __webpack_require__(164);
	var _curry1 = __webpack_require__(166);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    var n = arguments.length;
	    if (n === 0) {
	      return f2;
	    } else if (n === 1 && a === __) {
	      return f2;
	    } else if (n === 1) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else if (n === 2 && a === __ && b === __) {
	      return f2;
	    } else if (n === 2 && a === __) {
	      return _curry1(function(a) { return fn(a, b); });
	    } else if (n === 2 && b === __) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else {
	      return fn(a, b);
	    }
	  };
	};


/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	var __ = __webpack_require__(164);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0) {
	      return f1;
	    } else if (a === __) {
	      return f1;
	    } else {
	      return fn(a);
	    }
	  };
	};


/***/ },

/***/ 167:
/***/ function(module, exports) {

	/**
	 * An optimized, private array `slice` implementation.
	 *
	 * @private
	 * @param {Arguments|Array} args The array or arguments object to consider.
	 * @param {Number} [from=0] The array index to slice from, inclusive.
	 * @param {Number} [to=args.length] The array index to slice to, exclusive.
	 * @return {Array} A new, sliced array.
	 * @example
	 *
	 *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	 *
	 *      var firstThreeArgs = function(a, b, c, d) {
	 *        return _slice(arguments, 0, 3);
	 *      };
	 *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	 */
	module.exports = function _slice(args, from, to) {
	  switch (arguments.length) {
	    case 1: return _slice(args, 0, args.length);
	    case 2: return _slice(args, from, args.length);
	    default:
	      var list = [];
	      var idx = -1;
	      var len = Math.max(0, Math.min(args.length, to) - from);
	      while (++idx < len) {
	        list[idx] = args[from + idx];
	      }
	      return list;
	  }
	};


/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(165);
	
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts exactly `n`
	 * parameters. Unlike `nAry`, which passes only `n` arguments to the wrapped function,
	 * functions produced by `arity` will pass all provided arguments to the wrapped function.
	 *
	 * @func
	 * @memberOf R
	 * @sig (Number, (* -> *)) -> (* -> *)
	 * @category Function
	 * @param {Number} n The desired arity of the returned function.
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is
	 *         guaranteed to be of arity `n`.
	 * @example
	 *
	 *      var takesTwoArgs = function(a, b) {
	 *        return [a, b];
	 *      };
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.arity(1, takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // All arguments are passed through to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, 2]
	 */
	module.exports = _curry2(function(n, fn) {
	  switch (n) {
	    case 0: return function() {return fn.apply(this, arguments);};
	    case 1: return function(a0) {void a0; return fn.apply(this, arguments);};
	    case 2: return function(a0, a1) {void a1; return fn.apply(this, arguments);};
	    case 3: return function(a0, a1, a2) {void a2; return fn.apply(this, arguments);};
	    case 4: return function(a0, a1, a2, a3) {void a3; return fn.apply(this, arguments);};
	    case 5: return function(a0, a1, a2, a3, a4) {void a4; return fn.apply(this, arguments);};
	    case 6: return function(a0, a1, a2, a3, a4, a5) {void a5; return fn.apply(this, arguments);};
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {void a6; return fn.apply(this, arguments);};
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {void a7; return fn.apply(this, arguments);};
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {void a8; return fn.apply(this, arguments);};
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {void a9; return fn.apply(this, arguments);};
	    default: throw new Error('First argument to arity must be a non-negative integer no greater than ten');
	  }
	});


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = setup;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createElegantDecorator = __webpack_require__(170);
	
	var _createElegantDecorator2 = _interopRequireDefault(_createElegantDecorator);
	
	var _react = __webpack_require__(1);
	
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

/***/ 170:
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
	
	var _componentRenderMixin = __webpack_require__(159);
	
	var _staticsMixin = __webpack_require__(160);
	
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

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9hZGRyZXNzLWJvb2stc3RvcmUtc3RyZWFtcy1jbGFzc3kvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQtcmVuZGVyLW1peGluLmpzPzM2ZTAqIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWNzLW1peGluLmpzPzA3OWQqIiwid2VicGFjazovLy8uL34vaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzPzE3OTMqIiwid2VicGFjazovLy8uL34vZmx5ZC9saWIvaW5kZXguanM/MmEyOSIsIndlYnBhY2s6Ly8vLi9+L2ZseWQvfi9yYW1kYS9zcmMvY3VycnlOLmpzPzM1ZWUiLCJ3ZWJwYWNrOi8vLy4vfi9mbHlkL34vcmFtZGEvc3JjL19fLmpzPzY4NGMiLCJ3ZWJwYWNrOi8vLy4vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTIuanM/ZjcwZCIsIndlYnBhY2s6Ly8vLi9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5MS5qcz81NmQ1Iiwid2VicGFjazovLy8uL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fc2xpY2UuanM/YTA0MSIsIndlYnBhY2s6Ly8vLi9+L2ZseWQvfi9yYW1kYS9zcmMvYXJpdHkuanM/MmFmYiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3N5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc3kvY3JlYXRlLWVsZWdhbnQtZGVjb3JhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsS0FBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQztLQUN4QixTQUFTLEdBQUksS0FBSyxDQUFsQixTQUFTOztnQkFDVyxtQkFBTyxDQUFDLEdBQXNCLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQzs7S0FBbEUsT0FBTyxZQUFQLE9BQU87S0FBRSxPQUFPLFlBQVAs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O0FBQ3ZCLG9CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTJELHdCQUF3QjtBQUNuRjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQyxLQUFLO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDRDQUEyQzs7QUFFM0MsOENBQTZDOztBQUU3QywwQ0FBeUM7OztBQUd6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw2REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUssdUJB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBeUQ7QUFDekQ7QUFDQTs7QUFFQSx5REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4REFBNkQ7QUFDN0Q7QUFDQTs7QUFFQSw2REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLHFCQUFxQjtBQUM3RCxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTBDLEtBQUs7QUFDL0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZEQUE0RDtBQUM1RDtBQUNBLDJCQUEwQiwrQ0FBK0M7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCx3Q0FBd0M7QUFDN0YsNkRBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxrQkFBa0I7QUFDdkQsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBbUMsS0FBSztBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0RBQStDO0FBQy9DLDBDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IsbUJBQW1CO0FBQzNDLDREQUEyRCxzQkFBc0I7QUFDakY7QUFDQSxRQUFPO0FBQ1A7O0FBRUEsb0RBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDBDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLDRCQUE0QjtBQUN4RTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDs7QUFFQSxtREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsNEJBQTRCO0FBQ3RFO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBeUQ7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQThEO0FBQzlELG1EQUFrRCx3QkFBd0I7QUFDMUU7O0FBRUE7QUFDQSw2Q0FBNEMsU0FBUztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGtCQUFrQjtBQUN2RCxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEwQyxLQUFLO0FBQy9DOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9EQUFtRCxLQUFLO0FBQ3hEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBMkQ7QUFDM0Qsc0VBQXFFLHFCQUFxQjtBQUMxRjs7QUFFQSx5REFBd0Q7QUFDeEQsc0VBQXFFLHFCQUFxQjtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTJEO0FBQzNEO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQ0FBb0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsY0FBYyxFQUFFO0FBQ2pFO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyxlQUFlLEVBQUU7QUFDdkQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDs7QUFFQSx5QkFBd0I7QUFDeEI7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsMENBQXlDLDhCQUE4QjtBQUN2RSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLGtGQUFpRixZQUFZO0FBQzdGLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtEO0FBQ2xEO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLDJDQUEwQywwQkFBMEI7QUFDcEUsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsMkNBQTBDLDRCQUE0QjtBQUN0RSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDs7QUFFQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHdCQUF3QjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMLElBQUc7Ozs7QUFJSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsNkNBQTRDLDhCQUE4QjtBQUMxRSxNQUFLOztBQUVMO0FBQ0EsaURBQWdELDhCQUE4QjtBQUM5RSxNQUFLOztBQUVMLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBLE1BQUs7O0FBRUwseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBLE1BQUs7O0FBRUwsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RDs7OztBQUk3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFELE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTCxJQUFHOztBQUVIO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUwsSUFBRzs7QUFFSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsOENBQThDLEVBQUU7QUFDM0UsNEJBQTJCLHlDQUF5QyxFQUFFO0FBQ3RFO0FBQ0EseUJBQXdCLDBCQUEwQixFQUFFO0FBQ3BELHlCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUFBRSxPQUFPLENBQUMsR0FBRyxjQUFZLGdCQUFnQixDQUFDLFdBQVcsT0FBSSxDQUFDO0FBQ25FLGtCQUFRLG9CQUFDLGtCQUFrQixFQUFLLElBQUksQ0FBQyxLQUFLLENBQUksQ0FBRTtVQUNqRDs7OzZCQWxCK0IsY0FBYyxDQUFDLGtCQUFrQixDQUFDOzs7O2dCQUN0QyxrQkFBa0I7Ozs7Y0FGYixnQkFBZ0I7UUFBUyxTQUFTO0lBb0JwRSxDQUFDO0VBQ0giLCJmaWxlIjoiYWRkcmVzcy1ib29rLXN0b3JlLXN0cmVhbXMtY2xhc3N5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdDtcbmNvbnN0IHtlbGVnYW50LCBzdWJlZGl0fSA9IHJlcXVpcmUoJ2VsZWdhbnQtcmVhY3QvY2xhc3N5Jykoe2RlYnVnOiB0cnVlfSk7XG5jb25zdCB7ZnJvbUpTfSA9IHJlcXVpcmUoJ2ltbXV0YWJsZScpO1xuY29uc3QgZmx5ZCA9IHJlcXVpcmUoJ2ZseWQnKTtcbmNvbnN0IHtzdHJlYW19ID0gZmx5ZDtcblxuY29uc3QgbmV3QmxhbmtFbnRyeSA9IF8gPT4gZnJvbUpTKHtuYW1lOiAnJywgcGhvbmU6ICcnfSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZyb21KUyh7XG4gIG5ld0VudHJ5OiBuZXdCbGFua0VudHJ5KCksXG4gIGVudHJpZXNIaXN0b3J5Q291bnQ6IDAsXG4gIG5hbWVIaXN0b3J5Q291bnQ6IDAsXG4gIHBob25lSGlzdG9yeUNvdW50OiAwLFxuICBlbnRyaWVzOiBbXG4gICAgeyBuYW1lOiAnYXJpYScsIHBob25lOiAnMzMzMjIyMTExMSd9LFxuICAgIHsgbmFtZTogJ2dpbGJveCcsIHBob25lOiAnNjY2NTU1MjIyMid9LFxuICAgIHsgbmFtZTogJ2ppbWJvJywgcGhvbmU6ICc5OTkzMzMyMjIyJ30sXG4gICAgeyBuYW1lOiAnbGVib3dza2knLCBwaG9uZTogJzc3NzQ0NDIyMjInfSxcbiAgICB7IG5hbWU6ICdtdXJwaHknLCBwaG9uZTogJzg4ODQ0NDIyMjInfSxcbiAgICB7IG5hbWU6ICd2YW5kZXJiaWx0JywgcGhvbmU6ICc5OTkzMzMyMjIyJ30sXG4gIF1cbn0pO1xuXG5jb25zdCBwYXJzZU5hbWUgPSB2ID0+IHYgJiYgdi5yZXBsYWNlKC9cXGQvZywgJycpO1xuXG5jb25zdCBpZGVudGl0eSA9IHYgPT4gdjtcblxuY29uc3QgcGFyc2VQaG9uZSA9IHYgPT4gdiAmJiB2LnJlcGxhY2UoL1xcRC9nLCAnJykuc3Vic3RyKDAsMTApO1xuXG5jb25zdCBmb3JtYXRQaG9uZSA9IHAgPT4gcCAmJlxuW3BbMF0scFsxXSxwWzJdLCctJyxwWzNdLHBbNF0scFs1XSwnLScscFs2XSxwWzddLHBbOF0scFs5XV1cbiAgLmpvaW4oJycpXG4gIC5yZXBsYWNlKC8tKyQvLCcnKTtcblxuQGVsZWdhbnRcbmNsYXNzIEZvcm1hdHRlZElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZSwgZm9ybWF0dGVyLCBwYXJzZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZWRpdH0gPSB0aGlzLnByb3BzLnN0YXRpY3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgdmFsdWU9e2Zvcm1hdHRlcih2YWx1ZSl9XG4gICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQgPT5cbiAgICAgICAgICBlZGl0KHZhbHVlID0+IHBhcnNlcihldmVudC50YXJnZXQudmFsdWUpKSB9IC8+XG4gICAgKVxuICB9XG59XG5cbi8vIGlucHV0IGZpZWxkIHRoYXQgb25seSBhbGxvd3MgMTAgZGlnaXRzLCBhbmQgZm9ybWF0cyBsaWtlIFhYWC1YWFgtWFhYWFxuQGVsZWdhbnRcbmNsYXNzIFBob25lSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2VkaXRQaG9uZX0gPSB0aGlzLnByb3BzLnN0YXRpY3M7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1hdHRlZElucHV0IHsuLi50aGlzLnByb3BzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXG4gICAgICAgIGZvcm1hdHRlcj17Zm9ybWF0UGhvbmV9XG4gICAgICAgIHBhcnNlcj17cGFyc2VQaG9uZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBzdGF0aWNzPXt7IGVkaXQ6IGVkaXRQaG9uZSB9fSAvPlxuICAgIClcbiAgfVxufVxuXG4vLyBpbnB1dCBmaWVsZCB0aGF0IGRpc2FsbG93cyBkaWdpdHNcbkBlbGVnYW50XG5jbGFzcyBOYW1lSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2VkaXROYW1lfSA9IHRoaXMucHJvcHMuc3RhdGljcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgIGZvcm1hdHRlcj17aWRlbnRpdHl9XG4gICAgICAgIHBhcnNlcj17cGFyc2VOYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHN0YXRpY3M9e3sgZWRpdDogZWRpdE5hbWUgfX0gLz5cbiAgICApO1xuICB9XG59XG5cbi8vIGEgc2luZ2xlIHBob25lIGJvb2sgZW50cnlcbkBlbGVnYW50XG5jbGFzcyBFbnRyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZW50cnl9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZGVsZXRlRW50cnl9ID0gdGhpcy5wcm9wcy5zdGF0aWNzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRW50cnlcIj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtkZWxldGVFbnRyeX0gY2xhc3NOYW1lPVwiRW50cnktZGVsZXRlXCI+w5c8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbnRyeS1uYW1lXCI+e2VudHJ5LmdldCgnbmFtZScpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVudHJ5LXBob25lXCI+e2Zvcm1hdFBob25lKGVudHJ5LmdldCgncGhvbmUnKSl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGdyaWQgb2YgcGhvbmUgYm9vayBlbnRyaWVzXG5AZWxlZ2FudFxuY2xhc3MgRW50cmllcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZW50cmllc30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtlZGl0RW50cmllc30gPSB0aGlzLnByb3BzLnN0YXRpY3M7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbnRyaWVzXCI+XG4gICAgICAgIHtlbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PlxuICAgICAgICAgICAgPEVudHJ5XG4gICAgICAgICAgICAgIGtleT17YCR7ZW50cnkuZ2V0KCdwaG9uZScpfSR7ZW50cnkuZ2V0KCduYW1lJyl9YH1cbiAgICAgICAgICAgICAgZW50cnk9e2VudHJ5fVxuICAgICAgICAgICAgICBzdGF0aWNzPXt7XG4gICAgICAgICAgICAgICAgZGVsZXRlRW50cnk6IF89PiBlZGl0RW50cmllcyhlbnRyaWVzID0+IGVudHJpZXMuZGVsZXRlKGluZGV4KSApXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICkudG9BcnJheSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVFdmVudCA9IGhhbmRsZXIgPT4gZXZlbnQgPT4ge1xuICBoYW5kbGVyKGV2ZW50KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8vIEZvcm0gZm9yIGNyZWF0aW5nIGEgbmV3IHBob25lIGJvb2sgZW50cnlcbkBlbGVnYW50XG5jbGFzcyBOZXdFbnRyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZGF0YSwgbmFtZUhpc3RvcnlDb3VudCwgcGhvbmVIaXN0b3J5Q291bnR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZWRpdCwgYWRkTmV3RW50cnksIG5hbWVVbmRvLCBwaG9uZVVuZG99ID0gdGhpcy5wcm9wcy5zdGF0aWNzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0VudHJ5XCIgb25TdWJtaXQ9e2hhbmRsZUV2ZW50KGFkZE5ld0VudHJ5KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3RW50cnktdGl0bGVcIj5BREQgTkVXPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRXcmFwXCI+XG4gICAgICAgICAge25hbWVIaXN0b3J5Q291bnQgPyA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFdmVudChuYW1lVW5kbyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dFVuZG9CdG5cIj7ijow8L2E+IDogbnVsbH1cbiAgICAgICAgICA8TmFtZUlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJOZXdFbnRyeS1uYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLmdldCgnbmFtZScpfVxuICAgICAgICAgICAgc3RhdGljcz17e1xuICAgICAgICAgICAgICBlZGl0TmFtZTogc3ViZWRpdChlZGl0LCAnbmFtZScpIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIklucHV0V3JhcFwiPlxuICAgICAgICAgIHtwaG9uZUhpc3RvcnlDb3VudCA/IDxhIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV2ZW50KHBob25lVW5kbyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dFVuZG9CdG5cIj7ijow8L2E+IDogbnVsbH1cbiAgICAgICAgICA8UGhvbmVJbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiTmV3RW50cnktcGhvbmVcIlxuICAgICAgICAgICAgdmFsdWU9e2RhdGEuZ2V0KCdwaG9uZScpfVxuICAgICAgICAgICAgc3RhdGljcz17e1xuICAgICAgICAgICAgICBlZGl0UGhvbmU6IHN1YmVkaXQoZWRpdCwgJ3Bob25lJykgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fSAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgcHVzaE5ld0VudHJ5ID0gZWRpdCA9PlxuICBlZGl0KGRhdGEgPT5cbiAgICBkYXRhLmdldEluKFsnbmV3RW50cnknLCAnbmFtZSddKSAmJlxuICAgICAgZGF0YS51cGRhdGUoJ2VudHJpZXMnLFxuICAgICAgICAgIGVudHJpZXMgPT5cbiAgICAgICAgICAgIGVudHJpZXMucHVzaChkYXRhLmdldCgnbmV3RW50cnknKSlcbiAgICAgICAgICAgICAgICAgICAuc29ydEJ5KGVudHJ5ID0+IGVudHJ5LmdldCgnbmFtZScpKSlcbiAgICAgICAgICAudXBkYXRlKCduZXdFbnRyeScsIG5ld0JsYW5rRW50cnkpKTtcblxuQGVsZWdhbnRcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsXG4gICAgICAgICAgICBuYW1lSGlzdG9yeUNvdW50LFxuICAgICAgICAgICAgcGhvbmVIaXN0b3J5Q291bnQsXG4gICAgICAgICAgICBlbnRyaWVzSGlzdG9yeUNvdW50fSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7ZWRpdCwgbmFtZVVuZG8sIHBob25lVW5kbywgZW50cmllc1VuZG99ID0gdGhpcy5wcm9wcy5zdGF0aWNzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5BZGRyZXNzIEJvb2sgRGVtb1xuICAgICAgICAgIHtkYXRhLmdldCgnZW50cmllc0hpc3RvcnlDb3VudCcpID8gPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV2ZW50KGVudHJpZXNVbmRvKX1cbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJVbmRvQnRuXCI+4o6MPC9hPiA6IG51bGx9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxOZXdFbnRyeVxuICAgICAgICAgIG5hbWVIaXN0b3J5Q291bnQ9e2RhdGEuZ2V0KCduYW1lSGlzdG9yeUNvdW50Jyl9XG4gICAgICAgICAgcGhvbmVIaXN0b3J5Q291bnQ9e2RhdGEuZ2V0KCdwaG9uZUhpc3RvcnlDb3VudCcpfVxuICAgICAgICAgIGRhdGE9e2RhdGEuZ2V0KCduZXdFbnRyeScpfVxuICAgICAgICAgIHN0YXRpY3M9e3tcbiAgICAgICAgICAgIG5hbWVVbmRvLFxuICAgICAgICAgICAgcGhvbmVVbmRvLFxuICAgICAgICAgICAgZWRpdDogc3ViZWRpdChlZGl0LCAnbmV3RW50cnknKSxcbiAgICAgICAgICAgIGFkZE5ld0VudHJ5OiBfPT4gcHVzaE5ld0VudHJ5KGVkaXQpIH19IC8+XG4gICAgICAgIDxFbnRyaWVzXG4gICAgICAgICAgZW50cmllcz17ZGF0YS5nZXQoJ2VudHJpZXMnKX1cbiAgICAgICAgICBzdGF0aWNzPXt7IGVkaXRFbnRyaWVzOiBzdWJlZGl0KGVkaXQsICdlbnRyaWVzJykgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgZmlsdGVyU3RyZWFtID0gKHByZWRpY2F0ZSwgcykgPT5cbiAgZmx5ZC5zdHJlYW0oW3NdLCAoc2VsZikgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUocygpKSkgc2VsZihzLnZhbCk7XG4gIH0pO1xuXG5jb25zdCBsYXN0ID0gYXJyID0+IGFyclthcnIubGVuZ3RoIC0gMV07XG5cbmNvbnN0IHN1YlN0cmVhbSA9IChkYXRhU3RyZWFtLCAuLi5wYXRoKSA9PlxuICBmbHlkLm1hcChkYXRhID0+IGRhdGEuZ2V0SW4ocGF0aCksIGRhdGFTdHJlYW0pO1xuXG5jb25zdCBjcmVhdGVIaXN0b3J5U3RvcmUgPVxuICAocHJldmlvdXNTdGF0ZVN0cmVhbSwgc3RhdGVTdHJlYW0sIHVuZG9TdHJlYW0sIG91dHB1dFN0cmVhbSwgb3V0cHV0Q291bnRTdHJlYW0pID0+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gW107XG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZVN0cmVhbSA9XG4gICAgICBmaWx0ZXJTdHJlYW0oc3RhdGUgPT4gc3RhdGUgIT09IHByZXZpb3VzU3RhdGVTdHJlYW0oKSwgc3RhdGVTdHJlYW0pO1xuXG4gICAgZmx5ZC5vbihzdGF0ZSA9PiB7XG4gICAgICBvdXRwdXRDb3VudFN0cmVhbShoaXN0b3J5LnB1c2gocHJldmlvdXNTdGF0ZVN0cmVhbSgpKSlcbiAgICB9LCBmaWx0ZXJlZFN0YXRlU3RyZWFtKTtcblxuICAgIGZseWQub24odW5kbyA9PiB7XG4gICAgICBvdXRwdXRTdHJlYW0oaGlzdG9yeS5wb3AoKSk7XG4gICAgICBvdXRwdXRDb3VudFN0cmVhbShoaXN0b3J5Lmxlbmd0aCk7XG4gICAgfSwgdW5kb1N0cmVhbSk7XG4gIH07XG5cbmNvbnN0IGxvZ3N0cmVhbSA9IHMgPT4ge1xuICBzID0gcyB8fCBzdHJlYW0oKTtcbiAgZmx5ZC5vbih2ID0+IGNvbnNvbGUubG9nKCdzdHJlYW06Jywgdi50b0pTID8gdi50b0pTKCkgOiB2KSwgcyk7XG4gIHJldHVybiBzO1xufTtcblxuLy8gdGhlIFJlbmRlcmVyIGNvbXBvbmVudCBtYW5hZ2VzIHRoZSB0b3AtbGV2ZWwgYXBwIHN0YXRlLlxuLy8gaXQgYWxzbyBoYW5kbGVzIHRoZSB1bmRvIGhpc3Rvcnkgd2hpY2ggdGFrZXMgYSBzbmFwc2hvdCBvZlxuLy8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbiBzdGF0ZSBldmVyeSB0aW1lIHRoZSAnZW50cmllcycgY2hhbmdlXG5AZWxlZ2FudFxuY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB0aGlzLmRhdGEgPSBwcm9wcy5pbml0aWFsU3RhdGV9XG4gICAgLy8gY3JlYXRlIG91ciBzdHJlYW1zLi4uXG5cbiAgICB0aGlzLnN0YXRlU3RyZWFtID0gc3RyZWFtKCk7XG4gICAgdGhpcy5wcmV2aW91c1N0YXRlU3RyZWFtID0gc3RyZWFtKCk7XG4gICAgdGhpcy5uYW1lVW5kb0FjdGlvblN0cmVhbSA9IHN0cmVhbSgpO1xuICAgIHRoaXMucGhvbmVVbmRvQWN0aW9uU3RyZWFtID0gc3RyZWFtKCk7XG4gICAgdGhpcy5lbnRyaWVzVW5kb0FjdGlvblN0cmVhbSA9IHN0cmVhbSgpO1xuXG4gICAgLy8gYW5kIGNvbm5lY3QgdGhlIHdpcmVzLi4uXG5cbiAgICBjb25zdCB3aXJlZFN0cmVhbSA9IDo6dGhpcy53aXJlZFN0cmVhbTtcblxuICAgIGNyZWF0ZUhpc3RvcnlTdG9yZShcbiAgICAgIHN1YlN0cmVhbSh0aGlzLnByZXZpb3VzU3RhdGVTdHJlYW0sICduZXdFbnRyeScsICduYW1lJyksXG4gICAgICBzdWJTdHJlYW0odGhpcy5zdGF0ZVN0cmVhbSwgJ25ld0VudHJ5JywgJ25hbWUnKSxcbiAgICAgIHRoaXMubmFtZVVuZG9BY3Rpb25TdHJlYW0sXG4gICAgICB3aXJlZFN0cmVhbSgnbmV3RW50cnknLCAnbmFtZScpLFxuICAgICAgd2lyZWRTdHJlYW0oJ25hbWVIaXN0b3J5Q291bnQnKSk7XG5cbiAgICBjcmVhdGVIaXN0b3J5U3RvcmUoXG4gICAgICBzdWJTdHJlYW0odGhpcy5wcmV2aW91c1N0YXRlU3RyZWFtLCAnbmV3RW50cnknLCAncGhvbmUnKSxcbiAgICAgIHN1YlN0cmVhbSh0aGlzLnN0YXRlU3RyZWFtLCAnbmV3RW50cnknLCAncGhvbmUnKSxcbiAgICAgIHRoaXMucGhvbmVVbmRvQWN0aW9uU3RyZWFtLFxuICAgICAgd2lyZWRTdHJlYW0oJ25ld0VudHJ5JywgJ3Bob25lJyksXG4gICAgICB3aXJlZFN0cmVhbSgncGhvbmVIaXN0b3J5Q291bnQnKSk7XG5cbiAgICBjcmVhdGVIaXN0b3J5U3RvcmUoXG4gICAgICBzdWJTdHJlYW0odGhpcy5wcmV2aW91c1N0YXRlU3RyZWFtLCAnZW50cmllcycpLFxuICAgICAgc3ViU3RyZWFtKHRoaXMuc3RhdGVTdHJlYW0sICdlbnRyaWVzJyksXG4gICAgICB0aGlzLmVudHJpZXNVbmRvQWN0aW9uU3RyZWFtLFxuICAgICAgd2lyZWRTdHJlYW0oJ2VudHJpZXMnKSxcbiAgICAgIHdpcmVkU3RyZWFtKCdlbnRyaWVzSGlzdG9yeUNvdW50JykpO1xuICB9XG5cbiAgdXBkYXRlRGF0YSh0cmFuc2Zvcm0pIHtcbiAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoaXMuc3RhdGUuZGF0YSBpcyB1cGRhdGVkIGFzeW5jaHJvbm91c2x5XG4gICAgLy8gd2hpbGUgdGhpcy5kYXRhIGlzIGFsd2F5cyB1cC10by1kYXRlIGltbWVkaWF0ZWx5XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiB0aGlzLmRhdGEgPSB0cmFuc2Zvcm0odGhpcy5kYXRhKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gcmV0dXJucyBhIHN0cmVhbSB3aG9zZSB3cml0ZXNcbiAgLy8gZGlyZWN0bHkgdXBkYXRlIGFwcGxpY2F0aW9uIHN0YXRlXG4gIHdpcmVkU3RyZWFtKC4uLnBhdGgpIHtcbiAgICBjb25zdCBzID0gc3RyZWFtKCk7XG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IDo6dGhpcy51cGRhdGVEYXRhO1xuXG4gICAgZmx5ZC5vbihuZXdEYXRhID0+IHtcbiAgICAgIHVwZGF0ZURhdGEoZGF0YSA9PiBkYXRhLnNldEluKHBhdGgsIG5ld0RhdGEpKTtcbiAgICB9LCBzKTtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGVkaXQgKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucHJldmlvdXNTdGF0ZVN0cmVhbSh0aGlzLmRhdGEpO1xuICAgIHRoaXMudXBkYXRlRGF0YSh0cmFuc2Zvcm0pO1xuICAgIHRoaXMuc3RhdGVTdHJlYW0odGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEFwcFxuICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgc3RhdGljcz17e1xuICAgICAgICBlZGl0OiA6OnRoaXMuZWRpdCxcbiAgICAgICAgbmFtZVVuZG86IF89PiB0aGlzLm5hbWVVbmRvQWN0aW9uU3RyZWFtKDEpLFxuICAgICAgICBwaG9uZVVuZG86IF89PiB0aGlzLnBob25lVW5kb0FjdGlvblN0cmVhbSgxKSxcbiAgICAgICAgZW50cmllc1VuZG86IF89PiB0aGlzLmVudHJpZXNVbmRvQWN0aW9uU3RyZWFtKDEpIH19IC8+XG4gIH1cbn1cblxuUmVhY3QucmVuZGVyKDxSZW5kZXJlciBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9hZGRyZXNzLWJvb2stc3RvcmUtc3RyZWFtcy1jbGFzc3kvYXBwLmpzXG4gKiovIiwiLy8gQ29tcG9uZW50UmVuZGVyTWl4aW4gaXMgYSBzbGlnaHRseSBtb2RpZmllZCB2ZXJzaW9uIG9mIFB1cmVSZW5kZXJNaXhpblxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxQcm9wcyhvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHxcbiAgICB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNBW2ldID09PSAnc3RhdGljcycpIGNvbnRpbnVlO1xuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleXNBW2ldKSB8fCBvYmpBW2tleXNBW2ldXSAhPT0gb2JqQltrZXlzQVtpXV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fFxuICAgIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXlzQVtpXSkgfHwgb2JqQVtrZXlzQVtpXV0gIT09IG9iakJba2V5c0FbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBDb21wb25lbnRSZW5kZXJNaXhpbiA9IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsUHJvcHModGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fFxuICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudFJlbmRlck1peGluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50LXJlbmRlci1taXhpbi5qc1xuICoqLyIsImZ1bmN0aW9uIGRlbGVnYXRlKGRlbGVnZWUpIHtcbiAgdmFyIGRlbGVnYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlLmRlbGVnZWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBkZWxlZ2F0ZS5kZWxlZ2VlID0gZGVsZWdlZTtcbiAgZGVsZWdhdGUuaXNEZWxlZ2F0ZSA9IHRydWU7XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuZnVuY3Rpb24gd3JhcFdpdGhEZWxlZ2F0ZSAoa2V5KSB7XG4gIHZhciBzdGF0aWNzID0gdGhpcztcbiAgdmFyIGRlbGVnZWUgPSBzdGF0aWNzW2tleV07XG4gIGlmICh0eXBlb2YgZGVsZWdlZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHN0YXRpY3Nba2V5XSA9IGlzRGVsZWdhdGUoZGVsZWdlZSkgPyBkZWxlZ2VlIDogZGVsZWdhdGUoZGVsZWdlZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEZWxlZ2F0ZSAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlzRGVsZWdhdGU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gIHZhciBzdGF0aWNzID0gdGhpcy5wcm9wcy5zdGF0aWNzO1xuICBpZiAoc3RhdGljcyAmJiB0eXBlb2Ygc3RhdGljcyA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0aWNzKS5mb3JFYWNoKHdyYXBXaXRoRGVsZWdhdGUsIHN0YXRpY3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gIHZhciBjdXJyZW50UHJvcHMgPSB0aGlzLnByb3BzO1xuICB2YXIgY3VycmVudFN0YXRpY3MgPSBjdXJyZW50UHJvcHMuc3RhdGljcztcbiAgdmFyIG5ld1N0YXRpY3MgPSBuZXdQcm9wcy5zdGF0aWNzO1xuICB2YXIgaGF2ZUNoYW5nZWRTdGF0aWNzID0gbmV3U3RhdGljcyAhPT0gY3VycmVudFN0YXRpY3MgJiZcbiAgICBuZXdTdGF0aWNzICYmXG4gICAgdHlwZW9mIG5ld1N0YXRpY3MgPT09ICdvYmplY3QnO1xuXG4gIGlmIChoYXZlQ2hhbmdlZFN0YXRpY3MpIHtcbiAgICBPYmplY3Qua2V5cyhuZXdTdGF0aWNzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIG5ld01lbWJlciA9IG5ld1N0YXRpY3Nba2V5XTtcbiAgICAgIGlmICh0eXBlb2YobmV3TWVtYmVyKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjdXJyZW50TWVtYmVyID0gY3VycmVudFN0YXRpY3MgJiYgY3VycmVudFN0YXRpY3Nba2V5XTtcbiAgICAgICAgaWYgKGlzRGVsZWdhdGUoY3VycmVudE1lbWJlcikpIHtcbiAgICAgICAgICB2YXIgZGVsZWdlZSA9IGlzRGVsZWdhdGUobmV3TWVtYmVyKSA/IG5ld01lbWJlci5kZWxlZ2VlIDogbmV3TWVtYmVyO1xuICAgICAgICAgIGN1cnJlbnRNZW1iZXIuZGVsZWdlZSA9IGRlbGVnZWU7XG4gICAgICAgICAgbmV3U3RhdGljc1trZXldID0gY3VycmVudE1lbWJlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTdGF0aWNzW2tleV0gPSBkZWxlZ2F0ZShuZXdNZW1iZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgU3RhdGljc01peGluID0ge1xuICBjb21wb25lbnRXaWxsTW91bnQsXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGljc01peGluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGljcy1taXhpbi5qc1xuICoqLyIsIi8qKlxuICogIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIGdsb2JhbC5JbW11dGFibGUgPSBmYWN0b3J5KClcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7dmFyIFNMSUNFJDAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3MoY3Rvciwgc3VwZXJDbGFzcykge1xuICAgIGlmIChzdXBlckNsYXNzKSB7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICAgIH1cbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3I7XG4gIH1cblxuICAvLyBVc2VkIGZvciBzZXR0aW5nIHByb3RvdHlwZSBtZXRob2RzIHRoYXQgSUU4IGNob2tlcyBvbi5cbiAgdmFyIERFTEVURSA9ICdkZWxldGUnO1xuXG4gIC8vIENvbnN0YW50cyBkZXNjcmliaW5nIHRoZSBzaXplIG9mIHRyaWUgbm9kZXMuXG4gIHZhciBTSElGVCA9IDU7IC8vIFJlc3VsdGVkIGluIGJlc3QgcGVyZm9ybWFuY2UgYWZ0ZXIgX19fX19fP1xuICB2YXIgU0laRSA9IDEgPDwgU0hJRlQ7XG4gIHZhciBNQVNLID0gU0laRSAtIDE7XG5cbiAgLy8gQSBjb25zaXN0ZW50IHNoYXJlZCB2YWx1ZSByZXByZXNlbnRpbmcgXCJub3Qgc2V0XCIgd2hpY2ggZXF1YWxzIG5vdGhpbmcgb3RoZXJcbiAgLy8gdGhhbiBpdHNlbGYsIGFuZCBub3RoaW5nIHRoYXQgY291bGQgYmUgcHJvdmlkZWQgZXh0ZXJuYWxseS5cbiAgdmFyIE5PVF9TRVQgPSB7fTtcblxuICAvLyBCb29sZWFuIHJlZmVyZW5jZXMsIFJvdWdoIGVxdWl2YWxlbnQgb2YgYGJvb2wgJmAuXG4gIHZhciBDSEFOR0VfTEVOR1RIID0geyB2YWx1ZTogZmFsc2UgfTtcbiAgdmFyIERJRF9BTFRFUiA9IHsgdmFsdWU6IGZhbHNlIH07XG5cbiAgZnVuY3Rpb24gTWFrZVJlZihyZWYpIHtcbiAgICByZWYudmFsdWUgPSBmYWxzZTtcbiAgICByZXR1cm4gcmVmO1xuICB9XG5cbiAgZnVuY3Rpb24gU2V0UmVmKHJlZikge1xuICAgIHJlZiAmJiAocmVmLnZhbHVlID0gdHJ1ZSk7XG4gIH1cblxuICAvLyBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWx1ZSByZXByZXNlbnRpbmcgYW4gXCJvd25lclwiIGZvciB0cmFuc2llbnQgd3JpdGVzXG4gIC8vIHRvIHRyaWVzLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgb25seSBldmVyIGVxdWFsIGl0c2VsZiwgYW5kIHdpbGwgbm90IGVxdWFsXG4gIC8vIHRoZSByZXR1cm4gb2YgYW55IHN1YnNlcXVlbnQgY2FsbCBvZiB0aGlzIGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBPd25lcklEKCkge31cblxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3B5LWFycmF5LWlubGluZVxuICBmdW5jdGlvbiBhcnJDb3B5KGFyciwgb2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgdmFyIGxlbiA9IE1hdGgubWF4KDAsIGFyci5sZW5ndGggLSBvZmZzZXQpO1xuICAgIHZhciBuZXdBcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICBuZXdBcnJbaWldID0gYXJyW2lpICsgb2Zmc2V0XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuc3VyZVNpemUoaXRlcikge1xuICAgIGlmIChpdGVyLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaXRlci5zaXplID0gaXRlci5fX2l0ZXJhdGUocmV0dXJuVHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVyLnNpemU7XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwSW5kZXgoaXRlciwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPj0gMCA/ICgraW5kZXgpIDogZW5zdXJlU2l6ZShpdGVyKSArICgraW5kZXgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgc2l6ZSkge1xuICAgIHJldHVybiAoYmVnaW4gPT09IDAgfHwgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBiZWdpbiA8PSAtc2l6ZSkpICYmXG4gICAgICAoZW5kID09PSB1bmRlZmluZWQgfHwgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBlbmQgPj0gc2l6ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUJlZ2luKGJlZ2luLCBzaXplKSB7XG4gICAgcmV0dXJuIHJlc29sdmVJbmRleChiZWdpbiwgc2l6ZSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlRW5kKGVuZCwgc2l6ZSkge1xuICAgIHJldHVybiByZXNvbHZlSW5kZXgoZW5kLCBzaXplLCBzaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVJbmRleChpbmRleCwgc2l6ZSwgZGVmYXVsdEluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSB1bmRlZmluZWQgP1xuICAgICAgZGVmYXVsdEluZGV4IDpcbiAgICAgIGluZGV4IDwgMCA/XG4gICAgICAgIE1hdGgubWF4KDAsIHNpemUgKyBpbmRleCkgOlxuICAgICAgICBzaXplID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGluZGV4IDpcbiAgICAgICAgICBNYXRoLm1pbihzaXplLCBpbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzSXRlcmFibGUodmFsdWUpID8gdmFsdWUgOiBTZXEodmFsdWUpO1xuICAgIH1cblxuXG4gIGNyZWF0ZUNsYXNzKEtleWVkSXRlcmFibGUsIEl0ZXJhYmxlKTtcbiAgICBmdW5jdGlvbiBLZXllZEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNLZXllZCh2YWx1ZSkgPyB2YWx1ZSA6IEtleWVkU2VxKHZhbHVlKTtcbiAgICB9XG5cblxuICBjcmVhdGVDbGFzcyhJbmRleGVkSXRlcmFibGUsIEl0ZXJhYmxlKTtcbiAgICBmdW5jdGlvbiBJbmRleGVkSXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0luZGV4ZWQodmFsdWUpID8gdmFsdWUgOiBJbmRleGVkU2VxKHZhbHVlKTtcbiAgICB9XG5cblxuICBjcmVhdGVDbGFzcyhTZXRJdGVyYWJsZSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIFNldEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNJdGVyYWJsZSh2YWx1ZSkgJiYgIWlzQXNzb2NpYXRpdmUodmFsdWUpID8gdmFsdWUgOiBTZXRTZXEodmFsdWUpO1xuICAgIH1cblxuXG5cbiAgZnVuY3Rpb24gaXNJdGVyYWJsZShtYXliZUl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuICEhKG1heWJlSXRlcmFibGUgJiYgbWF5YmVJdGVyYWJsZVtJU19JVEVSQUJMRV9TRU5USU5FTF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNLZXllZChtYXliZUtleWVkKSB7XG4gICAgcmV0dXJuICEhKG1heWJlS2V5ZWQgJiYgbWF5YmVLZXllZFtJU19LRVlFRF9TRU5USU5FTF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJbmRleGVkKG1heWJlSW5kZXhlZCkge1xuICAgIHJldHVybiAhIShtYXliZUluZGV4ZWQgJiYgbWF5YmVJbmRleGVkW0lTX0lOREVYRURfU0VOVElORUxdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXNzb2NpYXRpdmUobWF5YmVBc3NvY2lhdGl2ZSkge1xuICAgIHJldHVybiBpc0tleWVkKG1heWJlQXNzb2NpYXRpdmUpIHx8IGlzSW5kZXhlZChtYXliZUFzc29jaWF0aXZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3JkZXJlZChtYXliZU9yZGVyZWQpIHtcbiAgICByZXR1cm4gISEobWF5YmVPcmRlcmVkICYmIG1heWJlT3JkZXJlZFtJU19PUkRFUkVEX1NFTlRJTkVMXSk7XG4gIH1cblxuICBJdGVyYWJsZS5pc0l0ZXJhYmxlID0gaXNJdGVyYWJsZTtcbiAgSXRlcmFibGUuaXNLZXllZCA9IGlzS2V5ZWQ7XG4gIEl0ZXJhYmxlLmlzSW5kZXhlZCA9IGlzSW5kZXhlZDtcbiAgSXRlcmFibGUuaXNBc3NvY2lhdGl2ZSA9IGlzQXNzb2NpYXRpdmU7XG4gIEl0ZXJhYmxlLmlzT3JkZXJlZCA9IGlzT3JkZXJlZDtcblxuICBJdGVyYWJsZS5LZXllZCA9IEtleWVkSXRlcmFibGU7XG4gIEl0ZXJhYmxlLkluZGV4ZWQgPSBJbmRleGVkSXRlcmFibGU7XG4gIEl0ZXJhYmxlLlNldCA9IFNldEl0ZXJhYmxlO1xuXG5cbiAgdmFyIElTX0lURVJBQkxFX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfSVRFUkFCTEVfX0BAJztcbiAgdmFyIElTX0tFWUVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfS0VZRURfX0BAJztcbiAgdmFyIElTX0lOREVYRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JTkRFWEVEX19AQCc7XG4gIHZhciBJU19PUkRFUkVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfT1JERVJFRF9fQEAnO1xuXG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cblxuICB2YXIgSVRFUkFURV9LRVlTID0gMDtcbiAgdmFyIElURVJBVEVfVkFMVUVTID0gMTtcbiAgdmFyIElURVJBVEVfRU5UUklFUyA9IDI7XG5cbiAgdmFyIFJFQUxfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gUkVBTF9JVEVSQVRPUl9TWU1CT0wgfHwgRkFVWF9JVEVSQVRPUl9TWU1CT0w7XG5cblxuICBmdW5jdGlvbiBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKG5leHQpIHtcbiAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgfVxuXG4gICAgc3JjX0l0ZXJhdG9yX19JdGVyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnW0l0ZXJhdG9yXSc7XG4gICAgfTtcblxuXG4gIHNyY19JdGVyYXRvcl9fSXRlcmF0b3IuS0VZUyA9IElURVJBVEVfS0VZUztcbiAgc3JjX0l0ZXJhdG9yX19JdGVyYXRvci5WQUxVRVMgPSBJVEVSQVRFX1ZBTFVFUztcbiAgc3JjX0l0ZXJhdG9yX19JdGVyYXRvci5FTlRSSUVTID0gSVRFUkFURV9FTlRSSUVTO1xuXG4gIHNyY19JdGVyYXRvcl9fSXRlcmF0b3IucHJvdG90eXBlLmluc3BlY3QgPVxuICBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yLnByb3RvdHlwZS50b1NvdXJjZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfVxuICBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yLnByb3RvdHlwZVtJVEVSQVRPUl9TWU1CT0xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBpdGVyYXRvclJlc3VsdCkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGUgPT09IDAgPyBrIDogdHlwZSA9PT0gMSA/IHYgOiBbaywgdl07XG4gICAgaXRlcmF0b3JSZXN1bHQgPyAoaXRlcmF0b3JSZXN1bHQudmFsdWUgPSB2YWx1ZSkgOiAoaXRlcmF0b3JSZXN1bHQgPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsIGRvbmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yUmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gaXRlcmF0b3JEb25lKCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0l0ZXJhdG9yKG1heWJlSXRlcmFibGUpIHtcbiAgICByZXR1cm4gISFnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJdGVyYXRvcihtYXliZUl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3IgJiYgdHlwZW9mIG1heWJlSXRlcmF0b3IubmV4dCA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGl0ZXJhYmxlKTtcbiAgICByZXR1cm4gaXRlcmF0b3JGbiAmJiBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihpdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gaXRlcmFibGUgJiYgKFxuICAgICAgKFJFQUxfSVRFUkFUT1JfU1lNQk9MICYmIGl0ZXJhYmxlW1JFQUxfSVRFUkFUT1JfU1lNQk9MXSkgfHxcbiAgICAgIGl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXVxuICAgICk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFNlcSwgSXRlcmFibGUpO1xuICAgIGZ1bmN0aW9uIFNlcSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVNlcXVlbmNlKCkgOlxuICAgICAgICBpc0l0ZXJhYmxlKHZhbHVlKSA/IHZhbHVlLnRvU2VxKCkgOiBzZXFGcm9tVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIFNlcS5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiBTZXEoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU2VxLnByb3RvdHlwZS50b1NlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFNlcS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ1NlcSB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgU2VxLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLl9jYWNoZSAmJiB0aGlzLl9faXRlcmF0ZVVuY2FjaGVkKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gdGhpcy5lbnRyeVNlcSgpLnRvQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5fY2FjaGUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0ZVVuY2FjaGVkKGZuLCByZXZlcnNlKVxuXG4gICAgU2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHNlcUl0ZXJhdGUodGhpcywgZm4sIHJldmVyc2UsIHRydWUpO1xuICAgIH07XG5cbiAgICAvLyBhYnN0cmFjdCBfX2l0ZXJhdG9yVW5jYWNoZWQodHlwZSwgcmV2ZXJzZSlcblxuICAgIFNlcS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBzZXFJdGVyYXRvcih0aGlzLCB0eXBlLCByZXZlcnNlLCB0cnVlKTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhLZXllZFNlcSwgU2VxKTtcbiAgICBmdW5jdGlvbiBLZXllZFNlcSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgP1xuICAgICAgICBlbXB0eVNlcXVlbmNlKCkudG9LZXllZFNlcSgpIDpcbiAgICAgICAgaXNJdGVyYWJsZSh2YWx1ZSkgP1xuICAgICAgICAgIChpc0tleWVkKHZhbHVlKSA/IHZhbHVlLnRvU2VxKCkgOiB2YWx1ZS5mcm9tRW50cnlTZXEoKSkgOlxuICAgICAgICAgIGtleWVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBLZXllZFNlcS5wcm90b3R5cGUudG9LZXllZFNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoSW5kZXhlZFNlcSwgU2VxKTtcbiAgICBmdW5jdGlvbiBJbmRleGVkU2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2VxdWVuY2UoKSA6XG4gICAgICAgICFpc0l0ZXJhYmxlKHZhbHVlKSA/IGluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIDpcbiAgICAgICAgaXNLZXllZCh2YWx1ZSkgPyB2YWx1ZS5lbnRyeVNlcSgpIDogdmFsdWUudG9JbmRleGVkU2VxKCk7XG4gICAgfVxuXG4gICAgSW5kZXhlZFNlcS5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiBJbmRleGVkU2VxKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIEluZGV4ZWRTZXEucHJvdG90eXBlLnRvSW5kZXhlZFNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEluZGV4ZWRTZXEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXEgWycsICddJyk7XG4gICAgfTtcblxuICAgIEluZGV4ZWRTZXEucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0ZSh0aGlzLCBmbiwgcmV2ZXJzZSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBJbmRleGVkU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHNlcUl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UsIGZhbHNlKTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhTZXRTZXEsIFNlcSk7XG4gICAgZnVuY3Rpb24gU2V0U2VxKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTZXF1ZW5jZSgpIDpcbiAgICAgICAgIWlzSXRlcmFibGUodmFsdWUpID8gaW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkgOlxuICAgICAgICBpc0tleWVkKHZhbHVlKSA/IHZhbHVlLmVudHJ5U2VxKCkgOiB2YWx1ZVxuICAgICAgKS50b1NldFNlcSgpO1xuICAgIH1cblxuICAgIFNldFNlcS5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiBTZXRTZXEoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU2V0U2VxLnByb3RvdHlwZS50b1NldFNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG5cbiAgU2VxLmlzU2VxID0gaXNTZXE7XG4gIFNlcS5LZXllZCA9IEtleWVkU2VxO1xuICBTZXEuU2V0ID0gU2V0U2VxO1xuICBTZXEuSW5kZXhlZCA9IEluZGV4ZWRTZXE7XG5cbiAgdmFyIElTX1NFUV9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX1NFUV9fQEAnO1xuXG4gIFNlcS5wcm90b3R5cGVbSVNfU0VRX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuXG4gIC8vICNwcmFnbWEgUm9vdCBTZXF1ZW5jZXNcblxuICBjcmVhdGVDbGFzcyhBcnJheVNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gQXJyYXlTZXEoYXJyYXkpIHtcbiAgICAgIHRoaXMuX2FycmF5ID0gYXJyYXk7XG4gICAgICB0aGlzLnNpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgQXJyYXlTZXEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGluZGV4KSA/IHRoaXMuX2FycmF5W3dyYXBJbmRleCh0aGlzLCBpbmRleCldIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGFycmF5ID0gdGhpcy5fYXJyYXk7XG4gICAgICB2YXIgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8PSBtYXhJbmRleDsgaWkrKykge1xuICAgICAgICBpZiAoZm4oYXJyYXlbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV0sIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGFycmF5ID0gdGhpcy5fYXJyYXk7XG4gICAgICB2YXIgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpIFxuICAgICAgICB7cmV0dXJuIGlpID4gbWF4SW5kZXggP1xuICAgICAgICAgIGl0ZXJhdG9yRG9uZSgpIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGlpLCBhcnJheVtyZXZlcnNlID8gbWF4SW5kZXggLSBpaSsrIDogaWkrK10pfVxuICAgICAgKTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhPYmplY3RTZXEsIEtleWVkU2VxKTtcbiAgICBmdW5jdGlvbiBPYmplY3RTZXEob2JqZWN0KSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICB0aGlzLl9vYmplY3QgPSBvYmplY3Q7XG4gICAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICAgIHRoaXMuc2l6ZSA9IGtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgaWYgKG5vdFNldFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdFtrZXldO1xuICAgIH07XG5cbiAgICBPYmplY3RTZXEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgIH07XG5cbiAgICBPYmplY3RTZXEucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gdGhpcy5fb2JqZWN0O1xuICAgICAgdmFyIGtleXMgPSB0aGlzLl9rZXlzO1xuICAgICAgdmFyIG1heEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8PSBtYXhJbmRleDsgaWkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICAgICAgaWYgKGZuKG9iamVjdFtrZXldLCBrZXksIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9O1xuXG4gICAgT2JqZWN0U2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIG9iamVjdCA9IHRoaXMuX29iamVjdDtcbiAgICAgIHZhciBrZXlzID0gdGhpcy5fa2V5cztcbiAgICAgIHZhciBtYXhJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICAgICAgcmV0dXJuIGlpKysgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwga2V5LCBvYmplY3Rba2V5XSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIE9iamVjdFNlcS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cbiAgY3JlYXRlQ2xhc3MoSXRlcmFibGVTZXEsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIEl0ZXJhYmxlU2VxKGl0ZXJhYmxlKSB7XG4gICAgICB0aGlzLl9pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuICAgICAgdGhpcy5zaXplID0gaXRlcmFibGUubGVuZ3RoIHx8IGl0ZXJhYmxlLnNpemU7XG4gICAgfVxuXG4gICAgSXRlcmFibGVTZXEucHJvdG90eXBlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYWJsZSA9IHRoaXMuX2l0ZXJhYmxlO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaWYgKGlzSXRlcmF0b3IoaXRlcmF0b3IpKSB7XG4gICAgICAgIHZhciBzdGVwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGZuKHN0ZXAudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBJdGVyYWJsZVNlcS5wcm90b3R5cGUuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhYmxlID0gdGhpcy5faXRlcmFibGU7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XG4gICAgICBpZiAoIWlzSXRlcmF0b3IoaXRlcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihpdGVyYXRvckRvbmUpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoSXRlcmF0b3JTZXEsIEluZGV4ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU2VxKGl0ZXJhdG9yKSB7XG4gICAgICB0aGlzLl9pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgICAgdGhpcy5faXRlcmF0b3JDYWNoZSA9IFtdO1xuICAgIH1cblxuICAgIEl0ZXJhdG9yU2VxLnByb3RvdHlwZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyYXRvcjtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuX2l0ZXJhdG9yQ2FjaGU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB3aGlsZSAoaXRlcmF0aW9ucyA8IGNhY2hlLmxlbmd0aCkge1xuICAgICAgICBpZiAoZm4oY2FjaGVbaXRlcmF0aW9uc10sIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzdGVwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICB2YXIgdmFsID0gc3RlcC52YWx1ZTtcbiAgICAgICAgY2FjaGVbaXRlcmF0aW9uc10gPSB2YWw7XG4gICAgICAgIGlmIChmbih2YWwsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBJdGVyYXRvclNlcS5wcm90b3R5cGUuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlcmF0b3I7XG4gICAgICB2YXIgY2FjaGUgPSB0aGlzLl9pdGVyYXRvckNhY2hlO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gY2FjaGUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhY2hlW2l0ZXJhdGlvbnNdID0gc3RlcC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zLCBjYWNoZVtpdGVyYXRpb25zKytdKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cbiAgLy8gIyBwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGlzU2VxKG1heWJlU2VxKSB7XG4gICAgcmV0dXJuICEhKG1heWJlU2VxICYmIG1heWJlU2VxW0lTX1NFUV9TRU5USU5FTF0pO1xuICB9XG5cbiAgdmFyIEVNUFRZX1NFUTtcblxuICBmdW5jdGlvbiBlbXB0eVNlcXVlbmNlKCkge1xuICAgIHJldHVybiBFTVBUWV9TRVEgfHwgKEVNUFRZX1NFUSA9IG5ldyBBcnJheVNlcShbXSkpO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID1cbiAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gbmV3IEFycmF5U2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICBpc0l0ZXJhdG9yKHZhbHVlKSA/IG5ldyBJdGVyYXRvclNlcSh2YWx1ZSkuZnJvbUVudHJ5U2VxKCkgOlxuICAgICAgaGFzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhYmxlU2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gbmV3IE9iamVjdFNlcSh2YWx1ZSkgOlxuICAgICAgdW5kZWZpbmVkO1xuICAgIGlmICghc2VxKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnRXhwZWN0ZWQgQXJyYXkgb3IgaXRlcmFibGUgb2JqZWN0IG9mIFtrLCB2XSBlbnRyaWVzLCAnK1xuICAgICAgICAnb3Iga2V5ZWQgb2JqZWN0OiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHNlcSA9IG1heWJlSW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgdmFsdWVzOiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID0gbWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgbmV3IE9iamVjdFNlcSh2YWx1ZSkpO1xuICAgIGlmICghc2VxKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnRXhwZWN0ZWQgQXJyYXkgb3IgaXRlcmFibGUgb2JqZWN0IG9mIHZhbHVlcywgb3Iga2V5ZWQgb2JqZWN0OiAnICsgdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzZXE7XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNBcnJheUxpa2UodmFsdWUpID8gbmV3IEFycmF5U2VxKHZhbHVlKSA6XG4gICAgICBpc0l0ZXJhdG9yKHZhbHVlKSA/IG5ldyBJdGVyYXRvclNlcSh2YWx1ZSkgOlxuICAgICAgaGFzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhYmxlU2VxKHZhbHVlKSA6XG4gICAgICB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VxSXRlcmF0ZShzZXEsIGZuLCByZXZlcnNlLCB1c2VLZXlzKSB7XG4gICAgdmFyIGNhY2hlID0gc2VxLl9jYWNoZTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHZhciBtYXhJbmRleCA9IGNhY2hlLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGNhY2hlW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICBpZiAoZm4oZW50cnlbMV0sIHVzZUtleXMgPyBlbnRyeVswXSA6IGlpLCBzZXEpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcS5fX2l0ZXJhdGVVbmNhY2hlZChmbiwgcmV2ZXJzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFJdGVyYXRvcihzZXEsIHR5cGUsIHJldmVyc2UsIHVzZUtleXMpIHtcbiAgICB2YXIgY2FjaGUgPSBzZXEuX2NhY2hlO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gY2FjaGUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgZW50cnkgPSBjYWNoZVtyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICAgICAgcmV0dXJuIGlpKysgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgdXNlS2V5cyA/IGVudHJ5WzBdIDogaWkgLSAxLCBlbnRyeVsxXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcS5fX2l0ZXJhdG9yVW5jYWNoZWQodHlwZSwgcmV2ZXJzZSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhDb2xsZWN0aW9uLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gQ29sbGVjdGlvbigpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignQWJzdHJhY3QnKTtcbiAgICB9XG5cblxuICBjcmVhdGVDbGFzcyhLZXllZENvbGxlY3Rpb24sIENvbGxlY3Rpb24pO2Z1bmN0aW9uIEtleWVkQ29sbGVjdGlvbigpIHt9XG5cbiAgY3JlYXRlQ2xhc3MoSW5kZXhlZENvbGxlY3Rpb24sIENvbGxlY3Rpb24pO2Z1bmN0aW9uIEluZGV4ZWRDb2xsZWN0aW9uKCkge31cblxuICBjcmVhdGVDbGFzcyhTZXRDb2xsZWN0aW9uLCBDb2xsZWN0aW9uKTtmdW5jdGlvbiBTZXRDb2xsZWN0aW9uKCkge31cblxuXG4gIENvbGxlY3Rpb24uS2V5ZWQgPSBLZXllZENvbGxlY3Rpb247XG4gIENvbGxlY3Rpb24uSW5kZXhlZCA9IEluZGV4ZWRDb2xsZWN0aW9uO1xuICBDb2xsZWN0aW9uLlNldCA9IFNldENvbGxlY3Rpb247XG5cbiAgLyoqXG4gICAqIEFuIGV4dGVuc2lvbiBvZiB0aGUgXCJzYW1lLXZhbHVlXCIgYWxnb3JpdGhtIGFzIFtkZXNjcmliZWQgZm9yIHVzZSBieSBFUzYgTWFwXG4gICAqIGFuZCBTZXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcCNLZXlfZXF1YWxpdHkpXG4gICAqXG4gICAqIE5hTiBpcyBjb25zaWRlcmVkIHRoZSBzYW1lIGFzIE5hTiwgaG93ZXZlciAtMCBhbmQgMCBhcmUgY29uc2lkZXJlZCB0aGUgc2FtZVxuICAgKiB2YWx1ZSwgd2hpY2ggaXMgZGlmZmVyZW50IGZyb20gdGhlIGFsZ29yaXRobSBkZXNjcmliZWQgYnlcbiAgICogW2BPYmplY3QuaXNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXMpLlxuICAgKlxuICAgKiBUaGlzIGlzIGV4dGVuZGVkIGZ1cnRoZXIgdG8gYWxsb3cgT2JqZWN0cyB0byBkZXNjcmliZSB0aGUgdmFsdWVzIHRoZXlcbiAgICogcmVwcmVzZW50LCBieSB3YXkgb2YgYHZhbHVlT2ZgIG9yIGBlcXVhbHNgIChhbmQgYGhhc2hDb2RlYCkuXG4gICAqXG4gICAqIE5vdGU6IGJlY2F1c2Ugb2YgdGhpcyBleHRlbnNpb24sIHRoZSBrZXkgZXF1YWxpdHkgb2YgSW1tdXRhYmxlLk1hcCBhbmQgdGhlXG4gICAqIHZhbHVlIGVxdWFsaXR5IG9mIEltbXV0YWJsZS5TZXQgd2lsbCBkaWZmZXIgZnJvbSBFUzYgTWFwIGFuZCBTZXQuXG4gICAqXG4gICAqICMjIyBEZWZpbmluZyBjdXN0b20gdmFsdWVzXG4gICAqXG4gICAqIFRoZSBlYXNpZXN0IHdheSB0byBkZXNjcmliZSB0aGUgdmFsdWUgYW4gb2JqZWN0IHJlcHJlc2VudHMgaXMgYnkgaW1wbGVtZW50aW5nXG4gICAqIGB2YWx1ZU9mYC4gRm9yIGV4YW1wbGUsIGBEYXRlYCByZXByZXNlbnRzIGEgdmFsdWUgYnkgcmV0dXJuaW5nIGEgdW5peFxuICAgKiB0aW1lc3RhbXAgZm9yIGB2YWx1ZU9mYDpcbiAgICpcbiAgICogICAgIHZhciBkYXRlMSA9IG5ldyBEYXRlKDEyMzQ1Njc4OTAwMDApOyAvLyBGcmkgRmViIDEzIDIwMDkgLi4uXG4gICAqICAgICB2YXIgZGF0ZTIgPSBuZXcgRGF0ZSgxMjM0NTY3ODkwMDAwKTtcbiAgICogICAgIGRhdGUxLnZhbHVlT2YoKTsgLy8gMTIzNDU2Nzg5MDAwMFxuICAgKiAgICAgYXNzZXJ0KCBkYXRlMSAhPT0gZGF0ZTIgKTtcbiAgICogICAgIGFzc2VydCggSW1tdXRhYmxlLmlzKCBkYXRlMSwgZGF0ZTIgKSApO1xuICAgKlxuICAgKiBOb3RlOiBvdmVycmlkaW5nIGB2YWx1ZU9mYCBtYXkgaGF2ZSBvdGhlciBpbXBsaWNhdGlvbnMgaWYgeW91IHVzZSB0aGlzIG9iamVjdFxuICAgKiB3aGVyZSBKYXZhU2NyaXB0IGV4cGVjdHMgYSBwcmltaXRpdmUsIHN1Y2ggYXMgaW1wbGljaXQgc3RyaW5nIGNvZXJjaW9uLlxuICAgKlxuICAgKiBGb3IgbW9yZSBjb21wbGV4IHR5cGVzLCBlc3BlY2lhbGx5IGNvbGxlY3Rpb25zLCBpbXBsZW1lbnRpbmcgYHZhbHVlT2ZgIG1heVxuICAgKiBub3QgYmUgcGVyZm9ybWFudC4gQW4gYWx0ZXJuYXRpdmUgaXMgdG8gaW1wbGVtZW50IGBlcXVhbHNgIGFuZCBgaGFzaENvZGVgLlxuICAgKlxuICAgKiBgZXF1YWxzYCB0YWtlcyBhbm90aGVyIG9iamVjdCwgcHJlc3VtYWJseSBvZiBzaW1pbGFyIHR5cGUsIGFuZCByZXR1cm5zIHRydWVcbiAgICogaWYgdGhlIGl0IGlzIGVxdWFsLiBFcXVhbGl0eSBpcyBzeW1tZXRyaWNhbCwgc28gdGhlIHNhbWUgcmVzdWx0IHNob3VsZCBiZVxuICAgKiByZXR1cm5lZCBpZiB0aGlzIGFuZCB0aGUgYXJndW1lbnQgYXJlIGZsaXBwZWQuXG4gICAqXG4gICAqICAgICBhc3NlcnQoIGEuZXF1YWxzKGIpID09PSBiLmVxdWFscyhhKSApO1xuICAgKlxuICAgKiBgaGFzaENvZGVgIHJldHVybnMgYSAzMmJpdCBpbnRlZ2VyIG51bWJlciByZXByZXNlbnRpbmcgdGhlIG9iamVjdCB3aGljaCB3aWxsXG4gICAqIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGhvdyB0byBzdG9yZSB0aGUgdmFsdWUgb2JqZWN0IGluIGEgTWFwIG9yIFNldC4gWW91IG11c3RcbiAgICogcHJvdmlkZSBib3RoIG9yIG5laXRoZXIgbWV0aG9kcywgb25lIG11c3Qgbm90IGV4aXN0IHdpdGhvdXQgdGhlIG90aGVyLlxuICAgKlxuICAgKiBBbHNvLCBhbiBpbXBvcnRhbnQgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlc2UgbWV0aG9kcyBtdXN0IGJlIHVwaGVsZDogaWYgdHdvXG4gICAqIHZhbHVlcyBhcmUgZXF1YWwsIHRoZXkgKm11c3QqIHJldHVybiB0aGUgc2FtZSBoYXNoQ29kZS4gSWYgdGhlIHZhbHVlcyBhcmUgbm90XG4gICAqIGVxdWFsLCB0aGV5IG1pZ2h0IGhhdmUgdGhlIHNhbWUgaGFzaENvZGU7IHRoaXMgaXMgY2FsbGVkIGEgaGFzaCBjb2xsaXNpb24sXG4gICAqIGFuZCB3aGlsZSB1bmRlc2lyYWJsZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgaXQgaXMgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogICAgIGlmIChhLmVxdWFscyhiKSkge1xuICAgKiAgICAgICBhc3NlcnQoIGEuaGFzaENvZGUoKSA9PT0gYi5oYXNoQ29kZSgpICk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEFsbCBJbW11dGFibGUgY29sbGVjdGlvbnMgaW1wbGVtZW50IGBlcXVhbHNgIGFuZCBgaGFzaENvZGVgLlxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gaXModmFsdWVBLCB2YWx1ZUIpIHtcbiAgICBpZiAodmFsdWVBID09PSB2YWx1ZUIgfHwgKHZhbHVlQSAhPT0gdmFsdWVBICYmIHZhbHVlQiAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghdmFsdWVBIHx8ICF2YWx1ZUIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZUEudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgdmFsdWVCLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbHVlQSA9IHZhbHVlQS52YWx1ZU9mKCk7XG4gICAgICB2YWx1ZUIgPSB2YWx1ZUIudmFsdWVPZigpO1xuICAgICAgaWYgKHZhbHVlQSA9PT0gdmFsdWVCIHx8ICh2YWx1ZUEgIT09IHZhbHVlQSAmJiB2YWx1ZUIgIT09IHZhbHVlQikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlQSB8fCAhdmFsdWVCKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZUEuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHR5cGVvZiB2YWx1ZUIuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHZhbHVlQS5lcXVhbHModmFsdWVCKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21KUyhqc29uLCBjb252ZXJ0ZXIpIHtcbiAgICByZXR1cm4gY29udmVydGVyID9cbiAgICAgIGZyb21KU1dpdGgoY29udmVydGVyLCBqc29uLCAnJywgeycnOiBqc29ufSkgOlxuICAgICAgZnJvbUpTRGVmYXVsdChqc29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyb21KU1dpdGgoY29udmVydGVyLCBqc29uLCBrZXksIHBhcmVudEpTT04pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRlci5jYWxsKHBhcmVudEpTT04sIGtleSwgSW5kZXhlZFNlcShqc29uKS5tYXAoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZnJvbUpTV2l0aChjb252ZXJ0ZXIsIHYsIGssIGpzb24pfSkpO1xuICAgIH1cbiAgICBpZiAoaXNQbGFpbk9iaihqc29uKSkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRlci5jYWxsKHBhcmVudEpTT04sIGtleSwgS2V5ZWRTZXEoanNvbikubWFwKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZyb21KU1dpdGgoY29udmVydGVyLCB2LCBrLCBqc29uKX0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBmdW5jdGlvbiBmcm9tSlNEZWZhdWx0KGpzb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgcmV0dXJuIEluZGV4ZWRTZXEoanNvbikubWFwKGZyb21KU0RlZmF1bHQpLnRvTGlzdCgpO1xuICAgIH1cbiAgICBpZiAoaXNQbGFpbk9iaihqc29uKSkge1xuICAgICAgcmV0dXJuIEtleWVkU2VxKGpzb24pLm1hcChmcm9tSlNEZWZhdWx0KS50b01hcCgpO1xuICAgIH1cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmoodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgfHwgdmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICB2YXIgc3JjX01hdGhfX2ltdWwgPVxuICAgIHR5cGVvZiBNYXRoLmltdWwgPT09ICdmdW5jdGlvbicgJiYgTWF0aC5pbXVsKDB4ZmZmZmZmZmYsIDIpID09PSAtMiA/XG4gICAgTWF0aC5pbXVsIDpcbiAgICBmdW5jdGlvbiBzcmNfTWF0aF9faW11bChhLCBiKSB7XG4gICAgICBhID0gYSB8IDA7IC8vIGludFxuICAgICAgYiA9IGIgfCAwOyAvLyBpbnRcbiAgICAgIHZhciBjID0gYSAmIDB4ZmZmZjtcbiAgICAgIHZhciBkID0gYiAmIDB4ZmZmZjtcbiAgICAgIC8vIFNoaWZ0IGJ5IDAgZml4ZXMgdGhlIHNpZ24gb24gdGhlIGhpZ2ggcGFydC5cbiAgICAgIHJldHVybiAoYyAqIGQpICsgKCgoKGEgPj4+IDE2KSAqIGQgKyBjICogKGIgPj4+IDE2KSkgPDwgMTYpID4+PiAwKSB8IDA7IC8vIGludFxuICAgIH07XG5cbiAgLy8gdjggaGFzIGFuIG9wdGltaXphdGlvbiBmb3Igc3RvcmluZyAzMS1iaXQgc2lnbmVkIG51bWJlcnMuXG4gIC8vIFZhbHVlcyB3aGljaCBoYXZlIGVpdGhlciAwMCBvciAxMSBhcyB0aGUgaGlnaCBvcmRlciBiaXRzIHF1YWxpZnkuXG4gIC8vIFRoaXMgZnVuY3Rpb24gZHJvcHMgdGhlIGhpZ2hlc3Qgb3JkZXIgYml0IGluIGEgc2lnbmVkIG51bWJlciwgbWFpbnRhaW5pbmdcbiAgLy8gdGhlIHNpZ24gYml0LlxuICBmdW5jdGlvbiBzbWkoaTMyKSB7XG4gICAgcmV0dXJuICgoaTMyID4+PiAxKSAmIDB4NDAwMDAwMDApIHwgKGkzMiAmIDB4QkZGRkZGRkYpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzaChvKSB7XG4gICAgaWYgKG8gPT09IGZhbHNlIHx8IG8gPT09IG51bGwgfHwgbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG8gPSBvLnZhbHVlT2YoKTtcbiAgICAgIGlmIChvID09PSBmYWxzZSB8fCBvID09PSBudWxsIHx8IG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG8gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvO1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFyIGggPSBvIHwgMDtcbiAgICAgIGlmIChoICE9PSBvKSB7XG4gICAgICAgIGggXj0gbyAqIDB4RkZGRkZGRkY7XG4gICAgICB9XG4gICAgICB3aGlsZSAobyA+IDB4RkZGRkZGRkYpIHtcbiAgICAgICAgbyAvPSAweEZGRkZGRkZGO1xuICAgICAgICBoIF49IG87XG4gICAgICB9XG4gICAgICByZXR1cm4gc21pKGgpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvLmxlbmd0aCA+IFNUUklOR19IQVNIX0NBQ0hFX01JTl9TVFJMRU4gPyBjYWNoZWRIYXNoU3RyaW5nKG8pIDogaGFzaFN0cmluZyhvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvLmhhc2hDb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gby5oYXNoQ29kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaEpTT2JqKG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FjaGVkSGFzaFN0cmluZyhzdHJpbmcpIHtcbiAgICB2YXIgaGFzaCA9IHN0cmluZ0hhc2hDYWNoZVtzdHJpbmddO1xuICAgIGlmIChoYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc2ggPSBoYXNoU3RyaW5nKHN0cmluZyk7XG4gICAgICBpZiAoU1RSSU5HX0hBU0hfQ0FDSEVfU0laRSA9PT0gU1RSSU5HX0hBU0hfQ0FDSEVfTUFYX1NJWkUpIHtcbiAgICAgICAgU1RSSU5HX0hBU0hfQ0FDSEVfU0laRSA9IDA7XG4gICAgICAgIHN0cmluZ0hhc2hDYWNoZSA9IHt9O1xuICAgICAgfVxuICAgICAgU1RSSU5HX0hBU0hfQ0FDSEVfU0laRSsrO1xuICAgICAgc3RyaW5nSGFzaENhY2hlW3N0cmluZ10gPSBoYXNoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2hhc2hpbmctc3RyaW5nc1xuICBmdW5jdGlvbiBoYXNoU3RyaW5nKHN0cmluZykge1xuICAgIC8vIFRoaXMgaXMgdGhlIGhhc2ggZnJvbSBKVk1cbiAgICAvLyBUaGUgaGFzaCBjb2RlIGZvciBhIHN0cmluZyBpcyBjb21wdXRlZCBhc1xuICAgIC8vIHNbMF0gKiAzMSBeIChuIC0gMSkgKyBzWzFdICogMzEgXiAobiAtIDIpICsgLi4uICsgc1tuIC0gMV0sXG4gICAgLy8gd2hlcmUgc1tpXSBpcyB0aGUgaXRoIGNoYXJhY3RlciBvZiB0aGUgc3RyaW5nIGFuZCBuIGlzIHRoZSBsZW5ndGggb2ZcbiAgICAvLyB0aGUgc3RyaW5nLiBXZSBcIm1vZFwiIHRoZSByZXN1bHQgdG8gbWFrZSBpdCBiZXR3ZWVuIDAgKGluY2x1c2l2ZSkgYW5kIDJeMzFcbiAgICAvLyAoZXhjbHVzaXZlKSBieSBkcm9wcGluZyBoaWdoIGJpdHMuXG4gICAgdmFyIGhhc2ggPSAwO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBzdHJpbmcubGVuZ3RoOyBpaSsrKSB7XG4gICAgICBoYXNoID0gMzEgKiBoYXNoICsgc3RyaW5nLmNoYXJDb2RlQXQoaWkpIHwgMDtcbiAgICB9XG4gICAgcmV0dXJuIHNtaShoYXNoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc2hKU09iaihvYmopIHtcbiAgICB2YXIgaGFzaDtcbiAgICBpZiAodXNpbmdXZWFrTWFwKSB7XG4gICAgICBoYXNoID0gd2Vha01hcC5nZXQob2JqKTtcbiAgICAgIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzaCA9IG9ialtVSURfSEFTSF9LRVldO1xuICAgIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cblxuICAgIGlmICghY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgIGhhc2ggPSBvYmoucHJvcGVydHlJc0VudW1lcmFibGUgJiYgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlW1VJRF9IQVNIX0tFWV07XG4gICAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuXG4gICAgICBoYXNoID0gZ2V0SUVOb2RlSGFzaChvYmopO1xuICAgICAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNoID0gKytvYmpIYXNoVUlEO1xuICAgIGlmIChvYmpIYXNoVUlEICYgMHg0MDAwMDAwMCkge1xuICAgICAgb2JqSGFzaFVJRCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHVzaW5nV2Vha01hcCkge1xuICAgICAgd2Vha01hcC5zZXQob2JqLCBoYXNoKTtcbiAgICB9IGVsc2UgaWYgKGlzRXh0ZW5zaWJsZSAhPT0gdW5kZWZpbmVkICYmIGlzRXh0ZW5zaWJsZShvYmopID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb24tZXh0ZW5zaWJsZSBvYmplY3RzIGFyZSBub3QgYWxsb3dlZCBhcyBrZXlzLicpO1xuICAgIH0gZWxzZSBpZiAoY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFVJRF9IQVNIX0tFWSwge1xuICAgICAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICAgICAnY29uZmlndXJhYmxlJzogZmFsc2UsXG4gICAgICAgICd3cml0YWJsZSc6IGZhbHNlLFxuICAgICAgICAndmFsdWUnOiBoYXNoXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICBvYmoucHJvcGVydHlJc0VudW1lcmFibGUgPT09IG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpIHtcbiAgICAgIC8vIFNpbmNlIHdlIGNhbid0IGRlZmluZSBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRoZSBvYmplY3RcbiAgICAgIC8vIHdlJ2xsIGhpamFjayBvbmUgb2YgdGhlIGxlc3MtdXNlZCBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHRvXG4gICAgICAvLyBzYXZlIG91ciBoYXNoIG9uIGl0LiBTaW5jZSB0aGlzIGlzIGEgZnVuY3Rpb24gaXQgd2lsbCBub3Qgc2hvdyB1cCBpblxuICAgICAgLy8gYEpTT04uc3RyaW5naWZ5YCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICBvYmoucHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlW1VJRF9IQVNIX0tFWV0gPSBoYXNoO1xuICAgIH0gZWxzZSBpZiAob2JqLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQgd2UgY291bGRuJ3QgZ2V0IHRoZSBJRSBgdW5pcXVlSURgIHRvIHVzZSBhcyBhIGhhc2hcbiAgICAgIC8vIGFuZCB3ZSBjb3VsZG4ndCB1c2UgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSB0byBleHBsb2l0IHRoZVxuICAgICAgLy8gZG9udEVudW0gYnVnIHNvIHdlIHNpbXBseSBhZGQgdGhlIGBVSURfSEFTSF9LRVlgIG9uIHRoZSBub2RlXG4gICAgICAvLyBpdHNlbGYuXG4gICAgICBvYmpbVUlEX0hBU0hfS0VZXSA9IGhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHNldCBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIG9iamVjdC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIC8vIEdldCByZWZlcmVuY2VzIHRvIEVTNSBvYmplY3QgbWV0aG9kcy5cbiAgdmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiAgLy8gVHJ1ZSBpZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgd29ya3MgYXMgZXhwZWN0ZWQuIElFOCBmYWlscyB0aGlzIHRlc3QuXG4gIHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnQCcsIHt9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0oKSk7XG5cbiAgLy8gSUUgaGFzIGEgYHVuaXF1ZUlEYCBwcm9wZXJ0eSBvbiBET00gbm9kZXMuIFdlIGNhbiBjb25zdHJ1Y3QgdGhlIGhhc2ggZnJvbSBpdFxuICAvLyBhbmQgYXZvaWQgbWVtb3J5IGxlYWtzIGZyb20gdGhlIElFIGNsb25lTm9kZSBidWcuXG4gIGZ1bmN0aW9uIGdldElFTm9kZUhhc2gobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUubm9kZVR5cGUgPiAwKSB7XG4gICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgY2FzZSAxOiAvLyBFbGVtZW50XG4gICAgICAgICAgcmV0dXJuIG5vZGUudW5pcXVlSUQ7XG4gICAgICAgIGNhc2UgOTogLy8gRG9jdW1lbnRcbiAgICAgICAgICByZXR1cm4gbm9kZS5kb2N1bWVudEVsZW1lbnQgJiYgbm9kZS5kb2N1bWVudEVsZW1lbnQudW5pcXVlSUQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcG9zc2libGUsIHVzZSBhIFdlYWtNYXAuXG4gIHZhciB1c2luZ1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHdlYWtNYXA7XG4gIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICB3ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIHZhciBvYmpIYXNoVUlEID0gMDtcblxuICB2YXIgVUlEX0hBU0hfS0VZID0gJ19faW1tdXRhYmxlaGFzaF9fJztcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgICBVSURfSEFTSF9LRVkgPSBTeW1ib2woVUlEX0hBU0hfS0VZKTtcbiAgfVxuXG4gIHZhciBTVFJJTkdfSEFTSF9DQUNIRV9NSU5fU1RSTEVOID0gMTY7XG4gIHZhciBTVFJJTkdfSEFTSF9DQUNIRV9NQVhfU0laRSA9IDI1NTtcbiAgdmFyIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPSAwO1xuICB2YXIgc3RyaW5nSGFzaENhY2hlID0ge307XG5cbiAgZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZXJyb3IpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydE5vdEluZmluaXRlKHNpemUpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBzaXplICE9PSBJbmZpbml0eSxcbiAgICAgICdDYW5ub3QgcGVyZm9ybSB0aGlzIGFjdGlvbiB3aXRoIGFuIGluZmluaXRlIHNpemUuJ1xuICAgICk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhUb0tleWVkU2VxdWVuY2UsIEtleWVkU2VxKTtcbiAgICBmdW5jdGlvbiBUb0tleWVkU2VxdWVuY2UoaW5kZXhlZCwgdXNlS2V5cykge1xuICAgICAgdGhpcy5faXRlciA9IGluZGV4ZWQ7XG4gICAgICB0aGlzLl91c2VLZXlzID0gdXNlS2V5cztcbiAgICAgIHRoaXMuc2l6ZSA9IGluZGV4ZWQuc2l6ZTtcbiAgICB9XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmdldChrZXksIG5vdFNldFZhbHVlKTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmhhcyhrZXkpO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLnZhbHVlU2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci52YWx1ZVNlcSgpO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciByZXZlcnNlZFNlcXVlbmNlID0gcmV2ZXJzZUZhY3RvcnkodGhpcywgdHJ1ZSk7XG4gICAgICBpZiAoIXRoaXMuX3VzZUtleXMpIHtcbiAgICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS52YWx1ZVNlcSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gdGhpcyQwLl9pdGVyLnRvU2VxKCkucmV2ZXJzZSgpfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXZlcnNlZFNlcXVlbmNlO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIG1hcHBlZFNlcXVlbmNlID0gbWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpO1xuICAgICAgaWYgKCF0aGlzLl91c2VLZXlzKSB7XG4gICAgICAgIG1hcHBlZFNlcXVlbmNlLnZhbHVlU2VxID0gZnVuY3Rpb24oKSAge3JldHVybiB0aGlzJDAuX2l0ZXIudG9TZXEoKS5tYXAobWFwcGVyLCBjb250ZXh0KX07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwcGVkU2VxdWVuY2U7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpaTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShcbiAgICAgICAgdGhpcy5fdXNlS2V5cyA/XG4gICAgICAgICAgZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZm4odiwgaywgdGhpcyQwKX0gOlxuICAgICAgICAgICgoaWkgPSByZXZlcnNlID8gcmVzb2x2ZVNpemUodGhpcykgOiAwKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZuKHYsIHJldmVyc2UgPyAtLWlpIDogaWkrKywgdGhpcyQwKX0pLFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAodGhpcy5fdXNlS2V5cykge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpaSA9IHJldmVyc2UgPyByZXNvbHZlU2l6ZSh0aGlzKSA6IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgcmV2ZXJzZSA/IC0taWkgOiBpaSsrLCBzdGVwLnZhbHVlLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuICBjcmVhdGVDbGFzcyhUb0luZGV4ZWRTZXF1ZW5jZSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gVG9JbmRleGVkU2VxdWVuY2UoaXRlcikge1xuICAgICAgdGhpcy5faXRlciA9IGl0ZXI7XG4gICAgICB0aGlzLnNpemUgPSBpdGVyLnNpemU7XG4gICAgfVxuXG4gICAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmluY2x1ZGVzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiApIHtyZXR1cm4gZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5kb25lID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWUsIHN0ZXApXG4gICAgICB9KTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhUb1NldFNlcXVlbmNlLCBTZXRTZXEpO1xuICAgIGZ1bmN0aW9uIFRvU2V0U2VxdWVuY2UoaXRlcikge1xuICAgICAgdGhpcy5faXRlciA9IGl0ZXI7XG4gICAgICB0aGlzLnNpemUgPSBpdGVyLnNpemU7XG4gICAgfVxuXG4gICAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5pbmNsdWRlcyhrZXkpO1xuICAgIH07XG5cbiAgICBUb1NldFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZuKHYsIHYsIHRoaXMkMCl9LCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgc3RlcC52YWx1ZSwgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG5cblxuICBjcmVhdGVDbGFzcyhGcm9tRW50cmllc1NlcXVlbmNlLCBLZXllZFNlcSk7XG4gICAgZnVuY3Rpb24gRnJvbUVudHJpZXNTZXF1ZW5jZShlbnRyaWVzKSB7XG4gICAgICB0aGlzLl9pdGVyID0gZW50cmllcztcbiAgICAgIHRoaXMuc2l6ZSA9IGVudHJpZXMuc2l6ZTtcbiAgICB9XG5cbiAgICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5lbnRyeVNlcSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIudG9TZXEoKTtcbiAgICB9O1xuXG4gICAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShmdW5jdGlvbihlbnRyeSApIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZW50cnkgZXhpc3RzIGZpcnN0IHNvIGFycmF5IGFjY2VzcyBkb2Vzbid0IHRocm93IGZvciBob2xlc1xuICAgICAgICAvLyBpbiB0aGUgcGFyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFsaWRhdGVFbnRyeShlbnRyeSk7XG4gICAgICAgICAgdmFyIGluZGV4ZWRJdGVyYWJsZSA9IGlzSXRlcmFibGUoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBmbihcbiAgICAgICAgICAgIGluZGV4ZWRJdGVyYWJsZSA/IGVudHJ5LmdldCgxKSA6IGVudHJ5WzFdLFxuICAgICAgICAgICAgaW5kZXhlZEl0ZXJhYmxlID8gZW50cnkuZ2V0KDApIDogZW50cnlbMF0sXG4gICAgICAgICAgICB0aGlzJDBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXIuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIC8vIENoZWNrIGlmIGVudHJ5IGV4aXN0cyBmaXJzdCBzbyBhcnJheSBhY2Nlc3MgZG9lc24ndCB0aHJvdyBmb3IgaG9sZXNcbiAgICAgICAgICAvLyBpbiB0aGUgcGFyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZWRJdGVyYWJsZSA9IGlzSXRlcmFibGUoZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUoXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGluZGV4ZWRJdGVyYWJsZSA/IGVudHJ5LmdldCgwKSA6IGVudHJ5WzBdLFxuICAgICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMSkgOiBlbnRyeVsxXSxcbiAgICAgICAgICAgICAgc3RlcFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cblxuICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9XG4gICAgY2FjaGVSZXN1bHRUaHJvdWdoO1xuXG5cbiAgZnVuY3Rpb24gZmxpcEZhY3RvcnkoaXRlcmFibGUpIHtcbiAgICB2YXIgZmxpcFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBmbGlwU2VxdWVuY2UuX2l0ZXIgPSBpdGVyYWJsZTtcbiAgICBmbGlwU2VxdWVuY2Uuc2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG4gICAgZmxpcFNlcXVlbmNlLmZsaXAgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlfTtcbiAgICBmbGlwU2VxdWVuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXZlcnNlZFNlcXVlbmNlID0gaXRlcmFibGUucmV2ZXJzZS5hcHBseSh0aGlzKTsgLy8gc3VwZXIucmV2ZXJzZSgpXG4gICAgICByZXZlcnNlZFNlcXVlbmNlLmZsaXAgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlLnJldmVyc2UoKX07XG4gICAgICByZXR1cm4gcmV2ZXJzZWRTZXF1ZW5jZTtcbiAgICB9O1xuICAgIGZsaXBTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKSB7cmV0dXJuIGl0ZXJhYmxlLmluY2x1ZGVzKGtleSl9O1xuICAgIGZsaXBTZXF1ZW5jZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKGtleSApIHtyZXR1cm4gaXRlcmFibGUuaGFzKGtleSl9O1xuICAgIGZsaXBTZXF1ZW5jZS5jYWNoZVJlc3VsdCA9IGNhY2hlUmVzdWx0VGhyb3VnaDtcbiAgICBmbGlwU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZm4oaywgdiwgdGhpcyQwKSAhPT0gZmFsc2V9LCByZXZlcnNlKTtcbiAgICB9XG4gICAgZmxpcFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoIXN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgdmFyIGsgPSBzdGVwLnZhbHVlWzBdO1xuICAgICAgICAgICAgc3RlcC52YWx1ZVswXSA9IHN0ZXAudmFsdWVbMV07XG4gICAgICAgICAgICBzdGVwLnZhbHVlWzFdID0gaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhYmxlLl9faXRlcmF0b3IoXG4gICAgICAgIHR5cGUgPT09IElURVJBVEVfVkFMVUVTID8gSVRFUkFURV9LRVlTIDogSVRFUkFURV9WQUxVRVMsXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBmbGlwU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1hcEZhY3RvcnkoaXRlcmFibGUsIG1hcHBlciwgY29udGV4dCkge1xuICAgIHZhciBtYXBwZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgbWFwcGVkU2VxdWVuY2Uuc2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG4gICAgbWFwcGVkU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5ICkge3JldHVybiBpdGVyYWJsZS5oYXMoa2V5KX07XG4gICAgbWFwcGVkU2VxdWVuY2UuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkgIHtcbiAgICAgIHZhciB2ID0gaXRlcmFibGUuZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgICByZXR1cm4gdiA9PT0gTk9UX1NFVCA/XG4gICAgICAgIG5vdFNldFZhbHVlIDpcbiAgICAgICAgbWFwcGVyLmNhbGwoY29udGV4dCwgdiwga2V5LCBpdGVyYWJsZSk7XG4gICAgfTtcbiAgICBtYXBwZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIGl0ZXJhYmxlLl9faXRlcmF0ZShcbiAgICAgICAgZnVuY3Rpb24odiwgaywgYykgIHtyZXR1cm4gZm4obWFwcGVyLmNhbGwoY29udGV4dCwgdiwgaywgYyksIGssIHRoaXMkMCkgIT09IGZhbHNlfSxcbiAgICAgICAgcmV2ZXJzZVxuICAgICAgKTtcbiAgICB9XG4gICAgbWFwcGVkU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24gKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgdmFyIGtleSA9IGVudHJ5WzBdO1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBtYXBwZXIuY2FsbChjb250ZXh0LCBlbnRyeVsxXSwga2V5LCBpdGVyYWJsZSksXG4gICAgICAgICAgc3RlcFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWRTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gcmV2ZXJzZUZhY3RvcnkoaXRlcmFibGUsIHVzZUtleXMpIHtcbiAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5faXRlciA9IGl0ZXJhYmxlO1xuICAgIHJldmVyc2VkU2VxdWVuY2Uuc2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZX07XG4gICAgaWYgKGl0ZXJhYmxlLmZsaXApIHtcbiAgICAgIHJldmVyc2VkU2VxdWVuY2UuZmxpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZsaXBTZXF1ZW5jZSA9IGZsaXBGYWN0b3J5KGl0ZXJhYmxlKTtcbiAgICAgICAgZmxpcFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlLmZsaXAoKX07XG4gICAgICAgIHJldHVybiBmbGlwU2VxdWVuY2U7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXZlcnNlZFNlcXVlbmNlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpIFxuICAgICAge3JldHVybiBpdGVyYWJsZS5nZXQodXNlS2V5cyA/IGtleSA6IC0xIC0ga2V5LCBub3RTZXRWYWx1ZSl9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuaGFzID0gZnVuY3Rpb24oa2V5IClcbiAgICAgIHtyZXR1cm4gaXRlcmFibGUuaGFzKHVzZUtleXMgPyBrZXkgOiAtMSAtIGtleSl9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuaW5jbHVkZXMgPSBmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXRlcmFibGUuaW5jbHVkZXModmFsdWUpfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLmNhY2hlUmVzdWx0ID0gY2FjaGVSZXN1bHRUaHJvdWdoO1xuICAgIHJldmVyc2VkU2VxdWVuY2UuX19pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZuKHYsIGssIHRoaXMkMCl9LCAhcmV2ZXJzZSk7XG4gICAgfTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLl9faXRlcmF0b3IgPVxuICAgICAgZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkgIHtyZXR1cm4gaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCAhcmV2ZXJzZSl9O1xuICAgIHJldHVybiByZXZlcnNlZFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBmaWx0ZXJGYWN0b3J5KGl0ZXJhYmxlLCBwcmVkaWNhdGUsIGNvbnRleHQsIHVzZUtleXMpIHtcbiAgICB2YXIgZmlsdGVyU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIGlmICh1c2VLZXlzKSB7XG4gICAgICBmaWx0ZXJTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKSB7XG4gICAgICAgIHZhciB2ID0gaXRlcmFibGUuZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgICAgIHJldHVybiB2ICE9PSBOT1RfU0VUICYmICEhcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwga2V5LCBpdGVyYWJsZSk7XG4gICAgICB9O1xuICAgICAgZmlsdGVyU2VxdWVuY2UuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkgIHtcbiAgICAgICAgdmFyIHYgPSBpdGVyYWJsZS5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICAgICAgcmV0dXJuIHYgIT09IE5PVF9TRVQgJiYgcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwga2V5LCBpdGVyYWJsZSkgP1xuICAgICAgICAgIHYgOiBub3RTZXRWYWx1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZpbHRlclNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApO1xuICAgICAgICB9XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgZmlsdGVyU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24gKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIGtleSA9IGVudHJ5WzBdO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGVudHJ5WzFdO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwga2V5LCBpdGVyYWJsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIHVzZUtleXMgPyBrZXkgOiBpdGVyYXRpb25zKyssIHZhbHVlLCBzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNvdW50QnlGYWN0b3J5KGl0ZXJhYmxlLCBncm91cGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGdyb3VwcyA9IHNyY19NYXBfX01hcCgpLmFzTXV0YWJsZSgpO1xuICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgZ3JvdXBzLnVwZGF0ZShcbiAgICAgICAgZ3JvdXBlci5jYWxsKGNvbnRleHQsIHYsIGssIGl0ZXJhYmxlKSxcbiAgICAgICAgMCxcbiAgICAgICAgZnVuY3Rpb24oYSApIHtyZXR1cm4gYSArIDF9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cHMuYXNJbW11dGFibGUoKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ3JvdXBCeUZhY3RvcnkoaXRlcmFibGUsIGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgaXNLZXllZEl0ZXIgPSBpc0tleWVkKGl0ZXJhYmxlKTtcbiAgICB2YXIgZ3JvdXBzID0gKGlzT3JkZXJlZChpdGVyYWJsZSkgPyBPcmRlcmVkTWFwKCkgOiBzcmNfTWFwX19NYXAoKSkuYXNNdXRhYmxlKCk7XG4gICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7XG4gICAgICBncm91cHMudXBkYXRlKFxuICAgICAgICBncm91cGVyLmNhbGwoY29udGV4dCwgdiwgaywgaXRlcmFibGUpLFxuICAgICAgICBmdW5jdGlvbihhICkge3JldHVybiAoYSA9IGEgfHwgW10sIGEucHVzaChpc0tleWVkSXRlciA/IFtrLCB2XSA6IHYpLCBhKX1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdmFyIGNvZXJjZSA9IGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpO1xuICAgIHJldHVybiBncm91cHMubWFwKGZ1bmN0aW9uKGFyciApIHtyZXR1cm4gcmVpZnkoaXRlcmFibGUsIGNvZXJjZShhcnIpKX0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBzbGljZUZhY3RvcnkoaXRlcmFibGUsIGJlZ2luLCBlbmQsIHVzZUtleXMpIHtcbiAgICB2YXIgb3JpZ2luYWxTaXplID0gaXRlcmFibGUuc2l6ZTtcblxuICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIG9yaWdpbmFsU2l6ZSkpIHtcbiAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRCZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgb3JpZ2luYWxTaXplKTtcbiAgICB2YXIgcmVzb2x2ZWRFbmQgPSByZXNvbHZlRW5kKGVuZCwgb3JpZ2luYWxTaXplKTtcblxuICAgIC8vIGJlZ2luIG9yIGVuZCB3aWxsIGJlIE5hTiBpZiB0aGV5IHdlcmUgcHJvdmlkZWQgYXMgbmVnYXRpdmUgbnVtYmVycyBhbmRcbiAgICAvLyB0aGlzIGl0ZXJhYmxlJ3Mgc2l6ZSBpcyB1bmtub3duLiBJbiB0aGF0IGNhc2UsIGNhY2hlIGZpcnN0IHNvIHRoZXJlIGlzXG4gICAgLy8gYSBrbm93biBzaXplIGFuZCB0aGVzZSBkbyBub3QgcmVzb2x2ZSB0byBOYU4uXG4gICAgaWYgKHJlc29sdmVkQmVnaW4gIT09IHJlc29sdmVkQmVnaW4gfHwgcmVzb2x2ZWRFbmQgIT09IHJlc29sdmVkRW5kKSB7XG4gICAgICByZXR1cm4gc2xpY2VGYWN0b3J5KGl0ZXJhYmxlLnRvU2VxKCkuY2FjaGVSZXN1bHQoKSwgYmVnaW4sIGVuZCwgdXNlS2V5cyk7XG4gICAgfVxuXG4gICAgLy8gTm90ZTogcmVzb2x2ZWRFbmQgaXMgdW5kZWZpbmVkIHdoZW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlJ3MgbGVuZ3RoIGlzXG4gICAgLy8gdW5rbm93biBhbmQgdGhpcyBzbGljZSBkaWQgbm90IHN1cHBseSBhbiBlbmQgYW5kIHNob3VsZCBjb250YWluIGFsbFxuICAgIC8vIGVsZW1lbnRzIGFmdGVyIHJlc29sdmVkQmVnaW4uXG4gICAgLy8gSW4gdGhhdCBjYXNlLCByZXNvbHZlZFNpemUgd2lsbCBiZSBOYU4gYW5kIHNsaWNlU2l6ZSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXG4gICAgdmFyIHJlc29sdmVkU2l6ZSA9IHJlc29sdmVkRW5kIC0gcmVzb2x2ZWRCZWdpbjtcbiAgICB2YXIgc2xpY2VTaXplO1xuICAgIGlmIChyZXNvbHZlZFNpemUgPT09IHJlc29sdmVkU2l6ZSkge1xuICAgICAgc2xpY2VTaXplID0gcmVzb2x2ZWRTaXplIDwgMCA/IDAgOiByZXNvbHZlZFNpemU7XG4gICAgfVxuXG4gICAgdmFyIHNsaWNlU2VxID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcblxuICAgIHNsaWNlU2VxLnNpemUgPSBzbGljZVNpemU7XG5cbiAgICBpZiAoIXVzZUtleXMgJiYgaXNTZXEoaXRlcmFibGUpICYmIHNsaWNlU2l6ZSA+PSAwKSB7XG4gICAgICBzbGljZVNlcS5nZXQgPSBmdW5jdGlvbiAoaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBzbGljZVNpemUgP1xuICAgICAgICAgIGl0ZXJhYmxlLmdldChpbmRleCArIHJlc29sdmVkQmVnaW4sIG5vdFNldFZhbHVlKSA6XG4gICAgICAgICAgbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpY2VTZXEuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHNsaWNlU2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpc1NraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICBpZiAoIShpc1NraXBwaW5nICYmIChpc1NraXBwaW5nID0gc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICBpdGVyYXRpb25zICE9PSBzbGljZVNpemU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIHNsaWNlU2VxLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChzbGljZVNpemUgIT09IDAgJiYgcmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICAvLyBEb24ndCBib3RoZXIgaW5zdGFudGlhdGluZyBwYXJlbnQgaXRlcmF0b3IgaWYgdGFraW5nIDAuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBzbGljZVNpemUgIT09IDAgJiYgaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIHZhciBza2lwcGVkID0gMDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHdoaWxlIChza2lwcGVkKysgPCByZXNvbHZlZEJlZ2luKSB7XG4gICAgICAgICAgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPiBzbGljZVNpemUpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmICh1c2VLZXlzIHx8IHR5cGUgPT09IElURVJBVEVfVkFMVUVTKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHVuZGVmaW5lZCwgc3RlcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHN0ZXAudmFsdWVbMV0sIHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2VTZXE7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHRha2VXaGlsZUZhY3RvcnkoaXRlcmFibGUsIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciB0YWtlU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIHRha2VTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgXG4gICAgICAgIHtyZXR1cm4gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykgJiYgKytpdGVyYXRpb25zICYmIGZuKHYsIGssIHRoaXMkMCl9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICB0YWtlU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIGl0ZXJhdGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoIWl0ZXJhdGluZykge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIHZhciBrID0gZW50cnlbMF07XG4gICAgICAgIHZhciB2ID0gZW50cnlbMV07XG4gICAgICAgIGlmICghcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgdGhpcyQwKSkge1xuICAgICAgICAgIGl0ZXJhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHRha2VTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc2tpcFdoaWxlRmFjdG9yeShpdGVyYWJsZSwgcHJlZGljYXRlLCBjb250ZXh0LCB1c2VLZXlzKSB7XG4gICAgdmFyIHNraXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgc2tpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXNTa2lwcGluZyA9IHRydWU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKCEoaXNTa2lwcGluZyAmJiAoaXNTa2lwcGluZyA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSkpIHtcbiAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICBza2lwU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIHNraXBwaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwLCBrLCB2O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICBpZiAodXNlS2V5cyB8fCB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUykge1xuICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdW5kZWZpbmVkLCBzdGVwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZVsxXSwgc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgayA9IGVudHJ5WzBdO1xuICAgICAgICAgIHYgPSBlbnRyeVsxXTtcbiAgICAgICAgICBza2lwcGluZyAmJiAoc2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCB0aGlzJDApKTtcbiAgICAgICAgfSB3aGlsZSAoc2tpcHBpbmcpO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gSVRFUkFURV9FTlRSSUVTID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHNraXBTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29uY2F0RmFjdG9yeShpdGVyYWJsZSwgdmFsdWVzKSB7XG4gICAgdmFyIGlzS2V5ZWRJdGVyYWJsZSA9IGlzS2V5ZWQoaXRlcmFibGUpO1xuICAgIHZhciBpdGVycyA9IFtpdGVyYWJsZV0uY29uY2F0KHZhbHVlcykubWFwKGZ1bmN0aW9uKHYgKSB7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgdiA9IGlzS2V5ZWRJdGVyYWJsZSA/XG4gICAgICAgICAga2V5ZWRTZXFGcm9tVmFsdWUodikgOlxuICAgICAgICAgIGluZGV4ZWRTZXFGcm9tVmFsdWUoQXJyYXkuaXNBcnJheSh2KSA/IHYgOiBbdl0pO1xuICAgICAgfSBlbHNlIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgICAgdiA9IEtleWVkSXRlcmFibGUodik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdjtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24odiApIHtyZXR1cm4gdi5zaXplICE9PSAwfSk7XG5cbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgfVxuXG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIHNpbmdsZXRvbiA9IGl0ZXJzWzBdO1xuICAgICAgaWYgKHNpbmdsZXRvbiA9PT0gaXRlcmFibGUgfHxcbiAgICAgICAgICBpc0tleWVkSXRlcmFibGUgJiYgaXNLZXllZChzaW5nbGV0b24pIHx8XG4gICAgICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSAmJiBpc0luZGV4ZWQoc2luZ2xldG9uKSkge1xuICAgICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb25jYXRTZXEgPSBuZXcgQXJyYXlTZXEoaXRlcnMpO1xuICAgIGlmIChpc0tleWVkSXRlcmFibGUpIHtcbiAgICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS50b0tleWVkU2VxKCk7XG4gICAgfSBlbHNlIGlmICghaXNJbmRleGVkKGl0ZXJhYmxlKSkge1xuICAgICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvU2V0U2VxKCk7XG4gICAgfVxuICAgIGNvbmNhdFNlcSA9IGNvbmNhdFNlcS5mbGF0dGVuKHRydWUpO1xuICAgIGNvbmNhdFNlcS5zaXplID0gaXRlcnMucmVkdWNlKFxuICAgICAgZnVuY3Rpb24oc3VtLCBzZXEpICB7XG4gICAgICAgIGlmIChzdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBzaXplID0gc2VxLnNpemU7XG4gICAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSArIHNpemU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIGNvbmNhdFNlcTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZmxhdHRlbkZhY3RvcnkoaXRlcmFibGUsIGRlcHRoLCB1c2VLZXlzKSB7XG4gICAgdmFyIGZsYXRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgZmxhdFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gICAgICBmdW5jdGlvbiBmbGF0RGVlcChpdGVyLCBjdXJyZW50RGVwdGgpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgICAgaXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgICAgICBpZiAoKCFkZXB0aCB8fCBjdXJyZW50RGVwdGggPCBkZXB0aCkgJiYgaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgZmxhdERlZXAodiwgY3VycmVudERlcHRoICsgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMrKywgdGhpcyQwKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIXN0b3BwZWQ7XG4gICAgICAgIH0sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgZmxhdERlZXAoaXRlcmFibGUsIDApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfVxuICAgIGZsYXRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IHNyY19JdGVyYXRvcl9fSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAoaXRlcmF0b3IpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdiA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGUgPT09IElURVJBVEVfRU5UUklFUykge1xuICAgICAgICAgICAgdiA9IHZbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIWRlcHRoIHx8IHN0YWNrLmxlbmd0aCA8IGRlcHRoKSAmJiBpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gdi5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlS2V5cyA/IHN0ZXAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdiwgc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBmbGF0TWFwRmFjdG9yeShpdGVyYWJsZSwgbWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGNvZXJjZSA9IGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpO1xuICAgIHJldHVybiBpdGVyYWJsZS50b1NlcSgpLm1hcChcbiAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGNvZXJjZShtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBpdGVyYWJsZSkpfVxuICAgICkuZmxhdHRlbih0cnVlKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaW50ZXJwb3NlRmFjdG9yeShpdGVyYWJsZSwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGludGVycG9zZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgaW50ZXJwb3NlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplICYmIGl0ZXJhYmxlLnNpemUgKiAyIC0xO1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgXG4gICAgICAgIHtyZXR1cm4gKCFpdGVyYXRpb25zIHx8IGZuKHNlcGFyYXRvciwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZSkgJiZcbiAgICAgICAgZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKCFzdGVwIHx8IGl0ZXJhdGlvbnMgJSAyKSB7XG4gICAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZXJhdGlvbnMgJSAyID9cbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc2VwYXJhdG9yKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWUsIHN0ZXApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gaW50ZXJwb3NlZFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBzb3J0RmFjdG9yeShpdGVyYWJsZSwgY29tcGFyYXRvciwgbWFwcGVyKSB7XG4gICAgaWYgKCFjb21wYXJhdG9yKSB7XG4gICAgICBjb21wYXJhdG9yID0gZGVmYXVsdENvbXBhcmF0b3I7XG4gICAgfVxuICAgIHZhciBpc0tleWVkSXRlcmFibGUgPSBpc0tleWVkKGl0ZXJhYmxlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBlbnRyaWVzID0gaXRlcmFibGUudG9TZXEoKS5tYXAoXG4gICAgICBmdW5jdGlvbih2LCBrKSAge3JldHVybiBbaywgdiwgaW5kZXgrKywgbWFwcGVyID8gbWFwcGVyKHYsIGssIGl0ZXJhYmxlKSA6IHZdfVxuICAgICkudG9BcnJheSgpO1xuICAgIGVudHJpZXMuc29ydChmdW5jdGlvbihhLCBiKSAge3JldHVybiBjb21wYXJhdG9yKGFbM10sIGJbM10pIHx8IGFbMl0gLSBiWzJdfSkuZm9yRWFjaChcbiAgICAgIGlzS2V5ZWRJdGVyYWJsZSA/XG4gICAgICBmdW5jdGlvbih2LCBpKSAgeyBlbnRyaWVzW2ldLmxlbmd0aCA9IDI7IH0gOlxuICAgICAgZnVuY3Rpb24odiwgaSkgIHsgZW50cmllc1tpXSA9IHZbMV07IH1cbiAgICApO1xuICAgIHJldHVybiBpc0tleWVkSXRlcmFibGUgPyBLZXllZFNlcShlbnRyaWVzKSA6XG4gICAgICBpc0luZGV4ZWQoaXRlcmFibGUpID8gSW5kZXhlZFNlcShlbnRyaWVzKSA6XG4gICAgICBTZXRTZXEoZW50cmllcyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1heEZhY3RvcnkoaXRlcmFibGUsIGNvbXBhcmF0b3IsIG1hcHBlcikge1xuICAgIGlmICghY29tcGFyYXRvcikge1xuICAgICAgY29tcGFyYXRvciA9IGRlZmF1bHRDb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAobWFwcGVyKSB7XG4gICAgICB2YXIgZW50cnkgPSBpdGVyYWJsZS50b1NlcSgpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gW3YsIG1hcHBlcih2LCBrLCBpdGVyYWJsZSldfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSAge3JldHVybiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGFbMV0sIGJbMV0pID8gYiA6IGF9KTtcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZXJhYmxlLnJlZHVjZShmdW5jdGlvbihhLCBiKSAge3JldHVybiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGEsIGIpID8gYiA6IGF9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGEsIGIpIHtcbiAgICB2YXIgY29tcCA9IGNvbXBhcmF0b3IoYiwgYSk7XG4gICAgLy8gYiBpcyBjb25zaWRlcmVkIHRoZSBuZXcgbWF4IGlmIHRoZSBjb21wYXJhdG9yIGRlY2xhcmVzIHRoZW0gZXF1YWwsIGJ1dFxuICAgIC8vIHRoZXkgYXJlIG5vdCBlcXVhbCBhbmQgYiBpcyBpbiBmYWN0IGEgbnVsbGlzaCB2YWx1ZS5cbiAgICByZXR1cm4gKGNvbXAgPT09IDAgJiYgYiAhPT0gYSAmJiAoYiA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiAhPT0gYikpIHx8IGNvbXAgPiAwO1xuICB9XG5cblxuICBmdW5jdGlvbiB6aXBXaXRoRmFjdG9yeShrZXlJdGVyLCB6aXBwZXIsIGl0ZXJzKSB7XG4gICAgdmFyIHppcFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGtleUl0ZXIpO1xuICAgIHppcFNlcXVlbmNlLnNpemUgPSBuZXcgQXJyYXlTZXEoaXRlcnMpLm1hcChmdW5jdGlvbihpICkge3JldHVybiBpLnNpemV9KS5taW4oKTtcbiAgICAvLyBOb3RlOiB0aGlzIGEgZ2VuZXJpYyBiYXNlIGltcGxlbWVudGF0aW9uIG9mIF9faXRlcmF0ZSBpbiB0ZXJtcyBvZlxuICAgIC8vIF9faXRlcmF0b3Igd2hpY2ggbWF5IGJlIG1vcmUgZ2VuZXJpY2FsbHkgdXNlZnVsIGluIHRoZSBmdXR1cmUuXG4gICAgemlwU2VxdWVuY2UuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIC8qIGdlbmVyaWM6XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGlmIChmbihzdGVwLnZhbHVlWzFdLCBzdGVwLnZhbHVlWzBdLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgICAqL1xuICAgICAgLy8gaW5kZXhlZDpcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgaWYgKGZuKHN0ZXAudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgemlwU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9ycyA9IGl0ZXJzLm1hcChmdW5jdGlvbihpIClcbiAgICAgICAge3JldHVybiAoaSA9IEl0ZXJhYmxlKGkpLCBnZXRJdGVyYXRvcihyZXZlcnNlID8gaS5yZXZlcnNlKCkgOiBpKSl9XG4gICAgICApO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgICAgIHN0ZXBzID0gaXRlcmF0b3JzLm1hcChmdW5jdGlvbihpICkge3JldHVybiBpLm5leHQoKX0pO1xuICAgICAgICAgIGlzRG9uZSA9IHN0ZXBzLnNvbWUoZnVuY3Rpb24ocyApIHtyZXR1cm4gcy5kb25lfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRG9uZSkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGl0ZXJhdGlvbnMrKyxcbiAgICAgICAgICB6aXBwZXIuYXBwbHkobnVsbCwgc3RlcHMubWFwKGZ1bmN0aW9uKHMgKSB7cmV0dXJuIHMudmFsdWV9KSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHppcFNlcXVlbmNlXG4gIH1cblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIEZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIHJlaWZ5KGl0ZXIsIHNlcSkge1xuICAgIHJldHVybiBpc1NlcShpdGVyKSA/IHNlcSA6IGl0ZXIuY29uc3RydWN0b3Ioc2VxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW50cnkoZW50cnkpIHtcbiAgICBpZiAoZW50cnkgIT09IE9iamVjdChlbnRyeSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFtLLCBWXSB0dXBsZTogJyArIGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlU2l6ZShpdGVyKSB7XG4gICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICByZXR1cm4gZW5zdXJlU2l6ZShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZEl0ZXJhYmxlIDpcbiAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkSXRlcmFibGUgOlxuICAgICAgU2V0SXRlcmFibGU7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2VxdWVuY2UoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICAgIChcbiAgICAgICAgaXNLZXllZChpdGVyYWJsZSkgPyBLZXllZFNlcSA6XG4gICAgICAgIGlzSW5kZXhlZChpdGVyYWJsZSkgPyBJbmRleGVkU2VxIDpcbiAgICAgICAgU2V0U2VxXG4gICAgICApLnByb3RvdHlwZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVJlc3VsdFRocm91Z2goKSB7XG4gICAgaWYgKHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX2l0ZXIuY2FjaGVSZXN1bHQoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2l0ZXIuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU2VxLnByb3RvdHlwZS5jYWNoZVJlc3VsdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUl0ZXJhdG9yKGtleVBhdGgpIHtcbiAgICB2YXIgaXRlciA9IGdldEl0ZXJhdG9yKGtleVBhdGgpO1xuICAgIGlmICghaXRlcikge1xuICAgICAgLy8gQXJyYXkgbWlnaHQgbm90IGJlIGl0ZXJhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQsIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xuICAgICAgLy8gdG8gb3VyIHdyYXBwZWQgdHlwZS5cbiAgICAgIGlmICghaXNBcnJheUxpa2Uoa2V5UGF0aCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgaXRlcmFibGUgb3IgYXJyYXktbGlrZTogJyArIGtleVBhdGgpO1xuICAgICAgfVxuICAgICAgaXRlciA9IGdldEl0ZXJhdG9yKEl0ZXJhYmxlKGtleVBhdGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXI7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhzcmNfTWFwX19NYXAsIEtleWVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gc3JjX01hcF9fTWFwKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5TWFwKCkgOlxuICAgICAgICBpc01hcCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5TWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihtYXAgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBLZXllZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2LCBrKSAge3JldHVybiBtYXAuc2V0KGssIHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ01hcCB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290ID9cbiAgICAgICAgdGhpcy5fcm9vdC5nZXQoMCwgdW5kZWZpbmVkLCBrLCBub3RTZXRWYWx1ZSkgOlxuICAgICAgICBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgcmV0dXJuIHVwZGF0ZU1hcCh0aGlzLCBrLCB2KTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5zZXRJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIHYpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKGtleVBhdGgsIE5PVF9TRVQsIGZ1bmN0aW9uKCkgIHtyZXR1cm4gdn0pO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiB1cGRhdGVNYXAodGhpcywgaywgTk9UX1NFVCk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuZGVsZXRlSW4gPSBmdW5jdGlvbihrZXlQYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVJbihrZXlQYXRoLCBmdW5jdGlvbigpICB7cmV0dXJuIE5PVF9TRVR9KTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuICAgICAgICBrKHRoaXMpIDpcbiAgICAgICAgdGhpcy51cGRhdGVJbihba10sIG5vdFNldFZhbHVlLCB1cGRhdGVyKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS51cGRhdGVJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gICAgICBpZiAoIXVwZGF0ZXIpIHtcbiAgICAgICAgdXBkYXRlciA9IG5vdFNldFZhbHVlO1xuICAgICAgICBub3RTZXRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSB1cGRhdGVJbkRlZXBNYXAoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcmNlSXRlcmF0b3Ioa2V5UGF0aCksXG4gICAgICAgIG5vdFNldFZhbHVlLFxuICAgICAgICB1cGRhdGVyXG4gICAgICApO1xuICAgICAgcmV0dXJuIHVwZGF0ZWRWYWx1ZSA9PT0gTk9UX1NFVCA/IHVuZGVmaW5lZCA6IHVwZGF0ZWRWYWx1ZTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlNYXAoKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBDb21wb3NpdGlvblxuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLm1lcmdlV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgbWVyZ2VyLCBpdGVycyk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUubWVyZ2VJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgbS5tZXJnZS5hcHBseShtLCBpdGVycykgOlxuICAgICAgICAgIGl0ZXJzW2l0ZXJzLmxlbmd0aCAtIDFdfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXAgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIGRlZXBNZXJnZXIodW5kZWZpbmVkKSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXBXaXRoID0gZnVuY3Rpb24obWVyZ2VyKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTWFwV2l0aCh0aGlzLCBkZWVwTWVyZ2VyKG1lcmdlciksIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5tZXJnZURlZXBJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZURlZXAgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIG0ubWVyZ2VEZWVwLmFwcGx5KG0sIGl0ZXJzKSA6XG4gICAgICAgICAgaXRlcnNbaXRlcnMubGVuZ3RoIC0gMV19XG4gICAgICApO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkTWFwKHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRNYXAoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTXV0YWJpbGl0eVxuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHZhciBtdXRhYmxlID0gdGhpcy5hc011dGFibGUoKTtcbiAgICAgIGZuKG11dGFibGUpO1xuICAgICAgcmV0dXJuIG11dGFibGUud2FzQWx0ZXJlZCgpID8gbXV0YWJsZS5fX2Vuc3VyZU93bmVyKHRoaXMuX19vd25lcklEKSA6IHRoaXM7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUuYXNNdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX293bmVySUQgPyB0aGlzIDogdGhpcy5fX2Vuc3VyZU93bmVyKG5ldyBPd25lcklEKCkpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLmFzSW1tdXRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2Vuc3VyZU93bmVyKCk7XG4gICAgfTtcblxuICAgIHNyY19NYXBfX01hcC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19hbHRlcmVkO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMsIHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBzcmNfTWFwX19NYXAucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB0aGlzLl9yb290ICYmIHRoaXMuX3Jvb3QuaXRlcmF0ZShmdW5jdGlvbihlbnRyeSApIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICByZXR1cm4gZm4oZW50cnlbMV0sIGVudHJ5WzBdLCB0aGlzJDApO1xuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgc3JjX01hcF9fTWFwLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU1hcCh0aGlzLnNpemUsIHRoaXMuX3Jvb3QsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNNYXAobWF5YmVNYXApIHtcbiAgICByZXR1cm4gISEobWF5YmVNYXAgJiYgbWF5YmVNYXBbSVNfTUFQX1NFTlRJTkVMXSk7XG4gIH1cblxuICBzcmNfTWFwX19NYXAuaXNNYXAgPSBpc01hcDtcblxuICB2YXIgSVNfTUFQX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfTUFQX19AQCc7XG5cbiAgdmFyIE1hcFByb3RvdHlwZSA9IHNyY19NYXBfX01hcC5wcm90b3R5cGU7XG4gIE1hcFByb3RvdHlwZVtJU19NQVBfU0VOVElORUxdID0gdHJ1ZTtcbiAgTWFwUHJvdG90eXBlW0RFTEVURV0gPSBNYXBQcm90b3R5cGUucmVtb3ZlO1xuICBNYXBQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUuZGVsZXRlSW47XG5cblxuICAvLyAjcHJhZ21hIFRyaWUgTm9kZXNcblxuXG5cbiAgICBmdW5jdGlvbiBBcnJheU1hcE5vZGUob3duZXJJRCwgZW50cmllcykge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgICBmb3IgKHZhciBpaSA9IDAsIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpaSA8IGxlbjsgaWkrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lpXVswXSkpIHtcbiAgICAgICAgICByZXR1cm4gZW50cmllc1tpaV1bMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICBmb3IgKHZhciBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lkeF1bMF0pKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleGlzdHMgPSBpZHggPCBsZW47XG5cbiAgICAgIGlmIChleGlzdHMgPyBlbnRyaWVzW2lkeF1bMV0gPT09IHZhbHVlIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICAgIChyZW1vdmVkIHx8ICFleGlzdHMpICYmIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcblxuICAgICAgaWYgKHJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgIXJlbW92ZWQgJiYgZW50cmllcy5sZW5ndGggPj0gTUFYX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2Rlcyhvd25lcklELCBlbnRyaWVzLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdFbnRyaWVzID0gaXNFZGl0YWJsZSA/IGVudHJpZXMgOiBhcnJDb3B5KGVudHJpZXMpO1xuXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIGlmIChyZW1vdmVkKSB7XG4gICAgICAgICAgaWR4ID09PSBsZW4gLSAxID8gbmV3RW50cmllcy5wb3AoKSA6IChuZXdFbnRyaWVzW2lkeF0gPSBuZXdFbnRyaWVzLnBvcCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdFbnRyaWVzW2lkeF0gPSBba2V5LCB2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VudHJpZXMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXdFbnRyaWVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBcnJheU1hcE5vZGUob3duZXJJRCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmJpdG1hcCA9IGJpdG1hcDtcbiAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB9XG5cbiAgICBCaXRtYXBJbmRleGVkTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBiaXQgPSAoMSA8PCAoKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0spKTtcbiAgICAgIHZhciBiaXRtYXAgPSB0aGlzLmJpdG1hcDtcbiAgICAgIHJldHVybiAoYml0bWFwICYgYml0KSA9PT0gMCA/IG5vdFNldFZhbHVlIDpcbiAgICAgICAgdGhpcy5ub2Rlc1twb3BDb3VudChiaXRtYXAgJiAoYml0IC0gMSkpXS5nZXQoc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXlIYXNoRnJhZyA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgICAgdmFyIGJpdCA9IDEgPDwga2V5SGFzaEZyYWc7XG4gICAgICB2YXIgYml0bWFwID0gdGhpcy5iaXRtYXA7XG4gICAgICB2YXIgZXhpc3RzID0gKGJpdG1hcCAmIGJpdCkgIT09IDA7XG5cbiAgICAgIGlmICghZXhpc3RzICYmIHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWR4ID0gcG9wQ291bnQoYml0bWFwICYgKGJpdCAtIDEpKTtcbiAgICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICB2YXIgbm9kZSA9IGV4aXN0cyA/IG5vZGVzW2lkeF0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgbmV3Tm9kZSA9IHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuXG4gICAgICBpZiAobmV3Tm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGlzdHMgJiYgbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPj0gTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZE5vZGVzKG93bmVySUQsIG5vZGVzLCBiaXRtYXAsIGtleUhhc2hGcmFnLCBuZXdOb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4aXN0cyAmJiAhbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPT09IDIgJiYgaXNMZWFmTm9kZShub2Rlc1tpZHggXiAxXSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2lkeCBeIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3RzICYmIG5ld05vZGUgJiYgbm9kZXMubGVuZ3RoID09PSAxICYmIGlzTGVhZk5vZGUobmV3Tm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gICAgICB2YXIgbmV3Qml0bWFwID0gZXhpc3RzID8gbmV3Tm9kZSA/IGJpdG1hcCA6IGJpdG1hcCBeIGJpdCA6IGJpdG1hcCB8IGJpdDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IGV4aXN0cyA/IG5ld05vZGUgP1xuICAgICAgICBzZXRJbihub2RlcywgaWR4LCBuZXdOb2RlLCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZU91dChub2RlcywgaWR4LCBpc0VkaXRhYmxlKSA6XG4gICAgICAgIHNwbGljZUluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmJpdG1hcCA9IG5ld0JpdG1hcDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ld05vZGVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCBuZXdCaXRtYXAsIG5ld05vZGVzKTtcbiAgICB9O1xuXG5cblxuXG4gICAgZnVuY3Rpb24gSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBjb3VudCwgbm9kZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciBub2RlID0gdGhpcy5ub2Rlc1tpZHhdO1xuICAgICAgcmV0dXJuIG5vZGUgPyBub2RlLmdldChzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpZHhdO1xuXG4gICAgICBpZiAocmVtb3ZlZCAmJiAhbm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld05vZGUgPSB1cGRhdGVOb2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKTtcbiAgICAgIGlmIChuZXdOb2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Q291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIG5ld0NvdW50Kys7XG4gICAgICB9IGVsc2UgaWYgKCFuZXdOb2RlKSB7XG4gICAgICAgIG5ld0NvdW50LS07XG4gICAgICAgIGlmIChuZXdDb3VudCA8IE1JTl9IQVNIX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICAgICAgcmV0dXJuIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgbmV3Q291bnQsIGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdOb2RlcyA9IHNldEluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0aGlzLmNvdW50ID0gbmV3Q291bnQ7XG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXdOb2RlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBuZXdDb3VudCwgbmV3Tm9kZXMpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBIYXNoQ29sbGlzaW9uTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyaWVzKSB7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgfVxuXG4gICAgSGFzaENvbGxpc2lvbk5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIGZvciAodmFyIGlpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWldWzBdKSkge1xuICAgICAgICAgIHJldHVybiBlbnRyaWVzW2lpXVsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBIYXNoQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICBpZiAoa2V5SGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleUhhc2ggPSBoYXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG5cbiAgICAgIGlmIChrZXlIYXNoICE9PSB0aGlzLmtleUhhc2gpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgICAgIHJldHVybiBtZXJnZUludG9Ob2RlKHRoaXMsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgZm9yICh2YXIgbGVuID0gZW50cmllcy5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcbiAgICAgICAgaWYgKGlzKGtleSwgZW50cmllc1tpZHhdWzBdKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZXhpc3RzID0gaWR4IDwgbGVuO1xuXG4gICAgICBpZiAoZXhpc3RzID8gZW50cmllc1tpZHhdWzFdID09PSB2YWx1ZSA6IHJlbW92ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIFNldFJlZihkaWRBbHRlcik7XG4gICAgICAocmVtb3ZlZCB8fCAhZXhpc3RzKSAmJiBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG5cbiAgICAgIGlmIChyZW1vdmVkICYmIGxlbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gbmV3IFZhbHVlTm9kZShvd25lcklELCB0aGlzLmtleUhhc2gsIGVudHJpZXNbaWR4IF4gMV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICAgICAgdmFyIG5ld0VudHJpZXMgPSBpc0VkaXRhYmxlID8gZW50cmllcyA6IGFyckNvcHkoZW50cmllcyk7XG5cbiAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICBpZHggPT09IGxlbiAtIDEgPyBuZXdFbnRyaWVzLnBvcCgpIDogKG5ld0VudHJpZXNbaWR4XSA9IG5ld0VudHJpZXMucG9wKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0VudHJpZXNbaWR4XSA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IG5ld0VudHJpZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgbmV3RW50cmllcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMua2V5SGFzaCA9IGtleUhhc2g7XG4gICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XG4gICAgfVxuXG4gICAgVmFsdWVOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGlzKGtleSwgdGhpcy5lbnRyeVswXSkgPyB0aGlzLmVudHJ5WzFdIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIFZhbHVlTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuICAgICAgdmFyIGtleU1hdGNoID0gaXMoa2V5LCB0aGlzLmVudHJ5WzBdKTtcbiAgICAgIGlmIChrZXlNYXRjaCA/IHZhbHVlID09PSB0aGlzLmVudHJ5WzFdIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcblxuICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgICByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5TWF0Y2gpIHtcbiAgICAgICAgaWYgKG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEKSB7XG4gICAgICAgICAgdGhpcy5lbnRyeVsxXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b05vZGUodGhpcywgb3duZXJJRCwgc2hpZnQsIGhhc2goa2V5KSwgW2tleSwgdmFsdWVdKTtcbiAgICB9O1xuXG5cblxuICAvLyAjcHJhZ21hIEl0ZXJhdG9yc1xuXG4gIEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9XG4gIEhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IGVudHJpZXMubGVuZ3RoIC0gMTsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgIGlmIChmbihlbnRyaWVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS5pdGVyYXRlID1cbiAgSGFzaEFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IG5vZGVzLmxlbmd0aCAtIDE7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pdGVyYXRlKGZuLCByZXZlcnNlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFZhbHVlTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge1xuICAgIHJldHVybiBmbih0aGlzLmVudHJ5KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE1hcEl0ZXJhdG9yLCBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKTtcblxuICAgIGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKG1hcCwgdHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLl9yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICAgIHRoaXMuX3N0YWNrID0gbWFwLl9yb290ICYmIG1hcEl0ZXJhdG9yRnJhbWUobWFwLl9yb290KTtcbiAgICB9XG5cbiAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR5cGUgPSB0aGlzLl90eXBlO1xuICAgICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2s7XG4gICAgICB3aGlsZSAoc3RhY2spIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzdGFjay5ub2RlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdGFjay5pbmRleCsrO1xuICAgICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICAgIGlmIChub2RlLmVudHJ5KSB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBub2RlLmVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgbWF4SW5kZXggPSBub2RlLmVudHJpZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBJdGVyYXRvclZhbHVlKHR5cGUsIG5vZGUuZW50cmllc1t0aGlzLl9yZXZlcnNlID8gbWF4SW5kZXggLSBpbmRleCA6IGluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1heEluZGV4ID0gbm9kZS5ub2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA8PSBtYXhJbmRleCkge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGUgPSBub2RlLm5vZGVzW3RoaXMuX3JldmVyc2UgPyBtYXhJbmRleCAtIGluZGV4IDogaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHN1Yk5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Yk5vZGUuZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBzdWJOb2RlLmVudHJ5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdGFjayA9IHRoaXMuX3N0YWNrID0gbWFwSXRlcmF0b3JGcmFtZShzdWJOb2RlLCBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sgPSB0aGlzLl9zdGFjayA9IHRoaXMuX3N0YWNrLl9fcHJldjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBlbnRyeSkge1xuICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXBJdGVyYXRvckZyYW1lKG5vZGUsIHByZXYpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgX19wcmV2OiBwcmV2XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VNYXAoc2l6ZSwgcm9vdCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKE1hcFByb3RvdHlwZSk7XG4gICAgbWFwLnNpemUgPSBzaXplO1xuICAgIG1hcC5fcm9vdCA9IHJvb3Q7XG4gICAgbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfTUFQO1xuICBmdW5jdGlvbiBlbXB0eU1hcCgpIHtcbiAgICByZXR1cm4gRU1QVFlfTUFQIHx8IChFTVBUWV9NQVAgPSBtYWtlTWFwKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hcChtYXAsIGssIHYpIHtcbiAgICB2YXIgbmV3Um9vdDtcbiAgICB2YXIgbmV3U2l6ZTtcbiAgICBpZiAoIW1hcC5fcm9vdCkge1xuICAgICAgaWYgKHYgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIG5ld1NpemUgPSAxO1xuICAgICAgbmV3Um9vdCA9IG5ldyBBcnJheU1hcE5vZGUobWFwLl9fb3duZXJJRCwgW1trLCB2XV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlkQ2hhbmdlU2l6ZSA9IE1ha2VSZWYoQ0hBTkdFX0xFTkdUSCk7XG4gICAgICB2YXIgZGlkQWx0ZXIgPSBNYWtlUmVmKERJRF9BTFRFUik7XG4gICAgICBuZXdSb290ID0gdXBkYXRlTm9kZShtYXAuX3Jvb3QsIG1hcC5fX293bmVySUQsIDAsIHVuZGVmaW5lZCwgaywgdiwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKCFkaWRBbHRlci52YWx1ZSkge1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfVxuICAgICAgbmV3U2l6ZSA9IG1hcC5zaXplICsgKGRpZENoYW5nZVNpemUudmFsdWUgPyB2ID09PSBOT1RfU0VUID8gLTEgOiAxIDogMCk7XG4gICAgfVxuICAgIGlmIChtYXAuX19vd25lcklEKSB7XG4gICAgICBtYXAuc2l6ZSA9IG5ld1NpemU7XG4gICAgICBtYXAuX3Jvb3QgPSBuZXdSb290O1xuICAgICAgbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIG1hcC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Jvb3QgPyBtYWtlTWFwKG5ld1NpemUsIG5ld1Jvb3QpIDogZW1wdHlNYXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUudXBkYXRlKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xlYWZOb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5jb25zdHJ1Y3RvciA9PT0gVmFsdWVOb2RlIHx8IG5vZGUuY29uc3RydWN0b3IgPT09IEhhc2hDb2xsaXNpb25Ob2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvTm9kZShub2RlLCBvd25lcklELCBzaGlmdCwga2V5SGFzaCwgZW50cnkpIHtcbiAgICBpZiAobm9kZS5rZXlIYXNoID09PSBrZXlIYXNoKSB7XG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIGtleUhhc2gsIFtub2RlLmVudHJ5LCBlbnRyeV0pO1xuICAgIH1cblxuICAgIHZhciBpZHgxID0gKHNoaWZ0ID09PSAwID8gbm9kZS5rZXlIYXNoIDogbm9kZS5rZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgIHZhciBpZHgyID0gKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0s7XG5cbiAgICB2YXIgbmV3Tm9kZTtcbiAgICB2YXIgbm9kZXMgPSBpZHgxID09PSBpZHgyID9cbiAgICAgIFttZXJnZUludG9Ob2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGVudHJ5KV0gOlxuICAgICAgKChuZXdOb2RlID0gbmV3IFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkpLCBpZHgxIDwgaWR4MiA/IFtub2RlLCBuZXdOb2RlXSA6IFtuZXdOb2RlLCBub2RlXSk7XG5cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsICgxIDw8IGlkeDEpIHwgKDEgPDwgaWR4MiksIG5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKG93bmVySUQsIGVudHJpZXMsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIG93bmVySUQgPSBuZXcgT3duZXJJRCgpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgaGFzaChrZXkpLCBba2V5LCB2YWx1ZV0pO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlbnRyaWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tpaV07XG4gICAgICBub2RlID0gbm9kZS51cGRhdGUob3duZXJJRCwgMCwgdW5kZWZpbmVkLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgY291bnQsIGV4Y2x1ZGluZykge1xuICAgIHZhciBiaXRtYXAgPSAwO1xuICAgIHZhciBwYWNrZWRJSSA9IDA7XG4gICAgdmFyIHBhY2tlZE5vZGVzID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGJpdCA9IDEsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaWkgPCBsZW47IGlpKyssIGJpdCA8PD0gMSkge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpaV07XG4gICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkICYmIGlpICE9PSBleGNsdWRpbmcpIHtcbiAgICAgICAgYml0bWFwIHw9IGJpdDtcbiAgICAgICAgcGFja2VkTm9kZXNbcGFja2VkSUkrK10gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgcGFja2VkTm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kTm9kZXMob3duZXJJRCwgbm9kZXMsIGJpdG1hcCwgaW5jbHVkaW5nLCBub2RlKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgZXhwYW5kZWROb2RlcyA9IG5ldyBBcnJheShTSVpFKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGJpdG1hcCAhPT0gMDsgaWkrKywgYml0bWFwID4+Pj0gMSkge1xuICAgICAgZXhwYW5kZWROb2Rlc1tpaV0gPSBiaXRtYXAgJiAxID8gbm9kZXNbY291bnQrK10gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4cGFuZGVkTm9kZXNbaW5jbHVkaW5nXSA9IG5vZGU7XG4gICAgcmV0dXJuIG5ldyBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIGNvdW50ICsgMSwgZXhwYW5kZWROb2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9NYXBXaXRoKG1hcCwgbWVyZ2VyLCBpdGVyYWJsZXMpIHtcbiAgICB2YXIgaXRlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcmFibGVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaXRlcmFibGVzW2lpXTtcbiAgICAgIHZhciBpdGVyID0gS2V5ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgIGl0ZXIgPSBpdGVyLm1hcChmdW5jdGlvbih2ICkge3JldHVybiBmcm9tSlModil9KTtcbiAgICAgIH1cbiAgICAgIGl0ZXJzLnB1c2goaXRlcik7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChtYXAsIG1lcmdlciwgaXRlcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcE1lcmdlcihtZXJnZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXhpc3RpbmcsIHZhbHVlLCBrZXkpIFxuICAgICAge3JldHVybiBleGlzdGluZyAmJiBleGlzdGluZy5tZXJnZURlZXBXaXRoICYmIGlzSXRlcmFibGUodmFsdWUpID9cbiAgICAgICAgZXhpc3RpbmcubWVyZ2VEZWVwV2l0aChtZXJnZXIsIHZhbHVlKSA6XG4gICAgICAgIG1lcmdlciA/IG1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSkgOiB2YWx1ZX07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChjb2xsZWN0aW9uLCBtZXJnZXIsIGl0ZXJzKSB7XG4gICAgaXRlcnMgPSBpdGVycy5maWx0ZXIoZnVuY3Rpb24oeCApIHtyZXR1cm4geC5zaXplICE9PSAwfSk7XG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGlmIChjb2xsZWN0aW9uLnNpemUgPT09IDAgJiYgIWNvbGxlY3Rpb24uX19vd25lcklEICYmIGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uY29uc3RydWN0b3IoaXRlcnNbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbi53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGNvbGxlY3Rpb24gKSB7XG4gICAgICB2YXIgbWVyZ2VJbnRvTWFwID0gbWVyZ2VyID9cbiAgICAgICAgZnVuY3Rpb24odmFsdWUsIGtleSkgIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLnVwZGF0ZShrZXksIE5PVF9TRVQsIGZ1bmN0aW9uKGV4aXN0aW5nIClcbiAgICAgICAgICAgIHtyZXR1cm4gZXhpc3RpbmcgPT09IE5PVF9TRVQgPyB2YWx1ZSA6IG1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSl9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSA6XG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlLCBrZXkpICB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVycy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgaXRlcnNbaWldLmZvckVhY2gobWVyZ2VJbnRvTWFwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUluRGVlcE1hcChleGlzdGluZywga2V5UGF0aEl0ZXIsIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gICAgdmFyIGlzTm90U2V0ID0gZXhpc3RpbmcgPT09IE5PVF9TRVQ7XG4gICAgdmFyIHN0ZXAgPSBrZXlQYXRoSXRlci5uZXh0KCk7XG4gICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBpc05vdFNldCA/IG5vdFNldFZhbHVlIDogZXhpc3Rpbmc7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB1cGRhdGVyKGV4aXN0aW5nVmFsdWUpO1xuICAgICAgcmV0dXJuIG5ld1ZhbHVlID09PSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmcgOiBuZXdWYWx1ZTtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgaXNOb3RTZXQgfHwgKGV4aXN0aW5nICYmIGV4aXN0aW5nLnNldCksXG4gICAgICAnaW52YWxpZCBrZXlQYXRoJ1xuICAgICk7XG4gICAgdmFyIGtleSA9IHN0ZXAudmFsdWU7XG4gICAgdmFyIG5leHRFeGlzdGluZyA9IGlzTm90U2V0ID8gTk9UX1NFVCA6IGV4aXN0aW5nLmdldChrZXksIE5PVF9TRVQpO1xuICAgIHZhciBuZXh0VXBkYXRlZCA9IHVwZGF0ZUluRGVlcE1hcChcbiAgICAgIG5leHRFeGlzdGluZyxcbiAgICAgIGtleVBhdGhJdGVyLFxuICAgICAgbm90U2V0VmFsdWUsXG4gICAgICB1cGRhdGVyXG4gICAgKTtcbiAgICByZXR1cm4gbmV4dFVwZGF0ZWQgPT09IG5leHRFeGlzdGluZyA/IGV4aXN0aW5nIDpcbiAgICAgIG5leHRVcGRhdGVkID09PSBOT1RfU0VUID8gZXhpc3RpbmcucmVtb3ZlKGtleSkgOlxuICAgICAgKGlzTm90U2V0ID8gZW1wdHlNYXAoKSA6IGV4aXN0aW5nKS5zZXQoa2V5LCBuZXh0VXBkYXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BDb3VudCh4KSB7XG4gICAgeCA9IHggLSAoKHggPj4gMSkgJiAweDU1NTU1NTU1KTtcbiAgICB4ID0gKHggJiAweDMzMzMzMzMzKSArICgoeCA+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICAgIHggPSAoeCArICh4ID4+IDQpKSAmIDB4MGYwZjBmMGY7XG4gICAgeCA9IHggKyAoeCA+PiA4KTtcbiAgICB4ID0geCArICh4ID4+IDE2KTtcbiAgICByZXR1cm4geCAmIDB4N2Y7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbihhcnJheSwgaWR4LCB2YWwsIGNhbkVkaXQpIHtcbiAgICB2YXIgbmV3QXJyYXkgPSBjYW5FZGl0ID8gYXJyYXkgOiBhcnJDb3B5KGFycmF5KTtcbiAgICBuZXdBcnJheVtpZHhdID0gdmFsO1xuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwbGljZUluKGFycmF5LCBpZHgsIHZhbCwgY2FuRWRpdCkge1xuICAgIHZhciBuZXdMZW4gPSBhcnJheS5sZW5ndGggKyAxO1xuICAgIGlmIChjYW5FZGl0ICYmIGlkeCArIDEgPT09IG5ld0xlbikge1xuICAgICAgYXJyYXlbaWR4XSA9IHZhbDtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdmFyIG5ld0FycmF5ID0gbmV3IEFycmF5KG5ld0xlbik7XG4gICAgdmFyIGFmdGVyID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmV3TGVuOyBpaSsrKSB7XG4gICAgICBpZiAoaWkgPT09IGlkeCkge1xuICAgICAgICBuZXdBcnJheVtpaV0gPSB2YWw7XG4gICAgICAgIGFmdGVyID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdBcnJheVtpaV0gPSBhcnJheVtpaSArIGFmdGVyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc3BsaWNlT3V0KGFycmF5LCBpZHgsIGNhbkVkaXQpIHtcbiAgICB2YXIgbmV3TGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICBpZiAoY2FuRWRpdCAmJiBpZHggPT09IG5ld0xlbikge1xuICAgICAgYXJyYXkucG9wKCk7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHZhciBuZXdBcnJheSA9IG5ldyBBcnJheShuZXdMZW4pO1xuICAgIHZhciBhZnRlciA9IDA7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5ld0xlbjsgaWkrKykge1xuICAgICAgaWYgKGlpID09PSBpZHgpIHtcbiAgICAgICAgYWZ0ZXIgPSAxO1xuICAgICAgfVxuICAgICAgbmV3QXJyYXlbaWldID0gYXJyYXlbaWkgKyBhZnRlcl07XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIHZhciBNQVhfQVJSQVlfTUFQX1NJWkUgPSBTSVpFIC8gNDtcbiAgdmFyIE1BWF9CSVRNQVBfSU5ERVhFRF9TSVpFID0gU0laRSAvIDI7XG4gIHZhciBNSU5fSEFTSF9BUlJBWV9NQVBfU0laRSA9IFNJWkUgLyA0O1xuXG4gIGNyZWF0ZUNsYXNzKExpc3QsIEluZGV4ZWRDb2xsZWN0aW9uKTtcblxuICAgIC8vIEBwcmFnbWEgQ29uc3RydWN0aW9uXG5cbiAgICBmdW5jdGlvbiBMaXN0KHZhbHVlKSB7XG4gICAgICB2YXIgZW1wdHkgPSBlbXB0eUxpc3QoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0xpc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyID0gSW5kZXhlZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgIHZhciBzaXplID0gaXRlci5zaXplO1xuICAgICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgICAgfVxuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoc2l6ZSk7XG4gICAgICBpZiAoc2l6ZSA+IDAgJiYgc2l6ZSA8IFNJWkUpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VMaXN0KDAsIHNpemUsIFNISUZULCBudWxsLCBuZXcgVk5vZGUoaXRlci50b0FycmF5KCkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIGxpc3Quc2V0U2l6ZShzaXplKTtcbiAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYsIGkpICB7cmV0dXJuIGxpc3Quc2V0KGksIHYpfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBMaXN0Lm9mID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ0xpc3QgWycsICddJyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBMaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5zaXplKSB7XG4gICAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IHRoaXMuX29yaWdpbjtcbiAgICAgIHZhciBub2RlID0gbGlzdE5vZGVGb3IodGhpcywgaW5kZXgpO1xuICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5hcnJheVtpbmRleCAmIE1BU0tdO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgTGlzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdXBkYXRlTGlzdCh0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuICF0aGlzLmhhcyhpbmRleCkgPyB0aGlzIDpcbiAgICAgICAgaW5kZXggPT09IDAgPyB0aGlzLnNoaWZ0KCkgOlxuICAgICAgICBpbmRleCA9PT0gdGhpcy5zaXplIC0gMSA/IHRoaXMucG9wKCkgOlxuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX29yaWdpbiA9IHRoaXMuX2NhcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBTSElGVDtcbiAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUxpc3QoKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgb2xkU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBvbGRTaXplICsgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgbGlzdC5zZXQob2xkU2l6ZSArIGlpLCB2YWx1ZXNbaWldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHModGhpcywgMCwgLTEpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obGlzdCApIHtcbiAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAtdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgbGlzdC5zZXQoaWksIHZhbHVlc1tpaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDEpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgICBMaXN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2VXaXRoID0gZnVuY3Rpb24obWVyZ2VyKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTGlzdFdpdGgodGhpcywgbWVyZ2VyLCBpdGVycyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlRGVlcCA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIGRlZXBNZXJnZXIodW5kZWZpbmVkKSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIGRlZXBNZXJnZXIobWVyZ2VyKSwgaXRlcnMpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHModGhpcywgMCwgc2l6ZSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgSXRlcmF0aW9uXG5cbiAgICBMaXN0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgICAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgc2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0TGlzdEJvdW5kcyhcbiAgICAgICAgdGhpcyxcbiAgICAgICAgcmVzb2x2ZUJlZ2luKGJlZ2luLCBzaXplKSxcbiAgICAgICAgcmVzb2x2ZUVuZChlbmQsIHNpemUpXG4gICAgICApO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciB2YWx1ZXMgPSBpdGVyYXRlTGlzdCh0aGlzLCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBuZXcgc3JjX0l0ZXJhdG9yX19JdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlcygpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IERPTkUgP1xuICAgICAgICAgIGl0ZXJhdG9yRG9uZSgpIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGluZGV4KyssIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciB2YWx1ZXMgPSBpdGVyYXRlTGlzdCh0aGlzLCByZXZlcnNlKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHdoaWxlICgodmFsdWUgPSB2YWx1ZXMoKSkgIT09IERPTkUpIHtcbiAgICAgICAgaWYgKGZuKHZhbHVlLCBpbmRleCsrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZUxpc3QodGhpcy5fb3JpZ2luLCB0aGlzLl9jYXBhY2l0eSwgdGhpcy5fbGV2ZWwsIHRoaXMuX3Jvb3QsIHRoaXMuX3RhaWwsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNMaXN0KG1heWJlTGlzdCkge1xuICAgIHJldHVybiAhIShtYXliZUxpc3QgJiYgbWF5YmVMaXN0W0lTX0xJU1RfU0VOVElORUxdKTtcbiAgfVxuXG4gIExpc3QuaXNMaXN0ID0gaXNMaXN0O1xuXG4gIHZhciBJU19MSVNUX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfTElTVF9fQEAnO1xuXG4gIHZhciBMaXN0UHJvdG90eXBlID0gTGlzdC5wcm90b3R5cGU7XG4gIExpc3RQcm90b3R5cGVbSVNfTElTVF9TRU5USU5FTF0gPSB0cnVlO1xuICBMaXN0UHJvdG90eXBlW0RFTEVURV0gPSBMaXN0UHJvdG90eXBlLnJlbW92ZTtcbiAgTGlzdFByb3RvdHlwZS5zZXRJbiA9IE1hcFByb3RvdHlwZS5zZXRJbjtcbiAgTGlzdFByb3RvdHlwZS5kZWxldGVJbiA9XG4gIExpc3RQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUucmVtb3ZlSW47XG4gIExpc3RQcm90b3R5cGUudXBkYXRlID0gTWFwUHJvdG90eXBlLnVwZGF0ZTtcbiAgTGlzdFByb3RvdHlwZS51cGRhdGVJbiA9IE1hcFByb3RvdHlwZS51cGRhdGVJbjtcbiAgTGlzdFByb3RvdHlwZS5tZXJnZUluID0gTWFwUHJvdG90eXBlLm1lcmdlSW47XG4gIExpc3RQcm90b3R5cGUubWVyZ2VEZWVwSW4gPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwSW47XG4gIExpc3RQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBMaXN0UHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc011dGFibGU7XG4gIExpc3RQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXBQcm90b3R5cGUuYXNJbW11dGFibGU7XG4gIExpc3RQcm90b3R5cGUud2FzQWx0ZXJlZCA9IE1hcFByb3RvdHlwZS53YXNBbHRlcmVkO1xuXG5cblxuICAgIGZ1bmN0aW9uIFZOb2RlKGFycmF5LCBvd25lcklEKSB7XG4gICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHNlZW1zIGxpa2UgdGhlc2UgbWV0aG9kcyBhcmUgdmVyeSBzaW1pbGFyXG5cbiAgICBWTm9kZS5wcm90b3R5cGUucmVtb3ZlQmVmb3JlID0gZnVuY3Rpb24ob3duZXJJRCwgbGV2ZWwsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxldmVsID8gMSA8PCBsZXZlbCA6IDAgfHwgdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb3JpZ2luSW5kZXggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgICBpZiAob3JpZ2luSW5kZXggPj0gdGhpcy5hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWTm9kZShbXSwgb3duZXJJRCk7XG4gICAgICB9XG4gICAgICB2YXIgcmVtb3ZpbmdGaXJzdCA9IG9yaWdpbkluZGV4ID09PSAwO1xuICAgICAgdmFyIG5ld0NoaWxkO1xuICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICB2YXIgb2xkQ2hpbGQgPSB0aGlzLmFycmF5W29yaWdpbkluZGV4XTtcbiAgICAgICAgbmV3Q2hpbGQgPSBvbGRDaGlsZCAmJiBvbGRDaGlsZC5yZW1vdmVCZWZvcmUob3duZXJJRCwgbGV2ZWwgLSBTSElGVCwgaW5kZXgpO1xuICAgICAgICBpZiAobmV3Q2hpbGQgPT09IG9sZENoaWxkICYmIHJlbW92aW5nRmlyc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlbW92aW5nRmlyc3QgJiYgIW5ld0NoaWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIGVkaXRhYmxlID0gZWRpdGFibGVWTm9kZSh0aGlzLCBvd25lcklEKTtcbiAgICAgIGlmICghcmVtb3ZpbmdGaXJzdCkge1xuICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgb3JpZ2luSW5kZXg7IGlpKyspIHtcbiAgICAgICAgICBlZGl0YWJsZS5hcnJheVtpaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICBlZGl0YWJsZS5hcnJheVtvcmlnaW5JbmRleF0gPSBuZXdDaGlsZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlZGl0YWJsZTtcbiAgICB9O1xuXG4gICAgVk5vZGUucHJvdG90eXBlLnJlbW92ZUFmdGVyID0gZnVuY3Rpb24ob3duZXJJRCwgbGV2ZWwsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxldmVsID8gMSA8PCBsZXZlbCA6IDAgfHwgdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgc2l6ZUluZGV4ID0gKChpbmRleCAtIDEpID4+PiBsZXZlbCkgJiBNQVNLO1xuICAgICAgaWYgKHNpemVJbmRleCA+PSB0aGlzLmFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciByZW1vdmluZ0xhc3QgPSBzaXplSW5kZXggPT09IHRoaXMuYXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXdDaGlsZDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgICAgdmFyIG9sZENoaWxkID0gdGhpcy5hcnJheVtzaXplSW5kZXhdO1xuICAgICAgICBuZXdDaGlsZCA9IG9sZENoaWxkICYmIG9sZENoaWxkLnJlbW92ZUFmdGVyKG93bmVySUQsIGxldmVsIC0gU0hJRlQsIGluZGV4KTtcbiAgICAgICAgaWYgKG5ld0NoaWxkID09PSBvbGRDaGlsZCAmJiByZW1vdmluZ0xhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlbW92aW5nTGFzdCAmJiAhbmV3Q2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgZWRpdGFibGUgPSBlZGl0YWJsZVZOb2RlKHRoaXMsIG93bmVySUQpO1xuICAgICAgaWYgKCFyZW1vdmluZ0xhc3QpIHtcbiAgICAgICAgZWRpdGFibGUuYXJyYXkucG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgZWRpdGFibGUuYXJyYXlbc2l6ZUluZGV4XSA9IG5ld0NoaWxkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVkaXRhYmxlO1xuICAgIH07XG5cblxuXG4gIHZhciBET05FID0ge307XG5cbiAgZnVuY3Rpb24gaXRlcmF0ZUxpc3QobGlzdCwgcmV2ZXJzZSkge1xuICAgIHZhciBsZWZ0ID0gbGlzdC5fb3JpZ2luO1xuICAgIHZhciByaWdodCA9IGxpc3QuX2NhcGFjaXR5O1xuICAgIHZhciB0YWlsUG9zID0gZ2V0VGFpbE9mZnNldChyaWdodCk7XG4gICAgdmFyIHRhaWwgPSBsaXN0Ll90YWlsO1xuXG4gICAgcmV0dXJuIGl0ZXJhdGVOb2RlT3JMZWFmKGxpc3QuX3Jvb3QsIGxpc3QuX2xldmVsLCAwKTtcblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVOb2RlT3JMZWFmKG5vZGUsIGxldmVsLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBsZXZlbCA9PT0gMCA/XG4gICAgICAgIGl0ZXJhdGVMZWFmKG5vZGUsIG9mZnNldCkgOlxuICAgICAgICBpdGVyYXRlTm9kZShub2RlLCBsZXZlbCwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRlTGVhZihub2RlLCBvZmZzZXQpIHtcbiAgICAgIHZhciBhcnJheSA9IG9mZnNldCA9PT0gdGFpbFBvcyA/IHRhaWwgJiYgdGFpbC5hcnJheSA6IG5vZGUgJiYgbm9kZS5hcnJheTtcbiAgICAgIHZhciBmcm9tID0gb2Zmc2V0ID4gbGVmdCA/IDAgOiBsZWZ0IC0gb2Zmc2V0O1xuICAgICAgdmFyIHRvID0gcmlnaHQgLSBvZmZzZXQ7XG4gICAgICBpZiAodG8gPiBTSVpFKSB7XG4gICAgICAgIHRvID0gU0laRTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpICB7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIHJldHVybiBET05FO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZHggPSByZXZlcnNlID8gLS10byA6IGZyb20rKztcbiAgICAgICAgcmV0dXJuIGFycmF5ICYmIGFycmF5W2lkeF07XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVOb2RlKG5vZGUsIGxldmVsLCBvZmZzZXQpIHtcbiAgICAgIHZhciB2YWx1ZXM7XG4gICAgICB2YXIgYXJyYXkgPSBub2RlICYmIG5vZGUuYXJyYXk7XG4gICAgICB2YXIgZnJvbSA9IG9mZnNldCA+IGxlZnQgPyAwIDogKGxlZnQgLSBvZmZzZXQpID4+IGxldmVsO1xuICAgICAgdmFyIHRvID0gKChyaWdodCAtIG9mZnNldCkgPj4gbGV2ZWwpICsgMTtcbiAgICAgIGlmICh0byA+IFNJWkUpIHtcbiAgICAgICAgdG8gPSBTSVpFO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlcygpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBET05FKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgICAgcmV0dXJuIERPTkU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpZHggPSByZXZlcnNlID8gLS10byA6IGZyb20rKztcbiAgICAgICAgICB2YWx1ZXMgPSBpdGVyYXRlTm9kZU9yTGVhZihcbiAgICAgICAgICAgIGFycmF5ICYmIGFycmF5W2lkeF0sIGxldmVsIC0gU0hJRlQsIG9mZnNldCArIChpZHggPDwgbGV2ZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VMaXN0KG9yaWdpbiwgY2FwYWNpdHksIGxldmVsLCByb290LCB0YWlsLCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIGxpc3QgPSBPYmplY3QuY3JlYXRlKExpc3RQcm90b3R5cGUpO1xuICAgIGxpc3Quc2l6ZSA9IGNhcGFjaXR5IC0gb3JpZ2luO1xuICAgIGxpc3QuX29yaWdpbiA9IG9yaWdpbjtcbiAgICBsaXN0Ll9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIGxpc3QuX2xldmVsID0gbGV2ZWw7XG4gICAgbGlzdC5fcm9vdCA9IHJvb3Q7XG4gICAgbGlzdC5fdGFpbCA9IHRhaWw7XG4gICAgbGlzdC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIGxpc3QuX19oYXNoID0gaGFzaDtcbiAgICBsaXN0Ll9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgdmFyIEVNUFRZX0xJU1Q7XG4gIGZ1bmN0aW9uIGVtcHR5TGlzdCgpIHtcbiAgICByZXR1cm4gRU1QVFlfTElTVCB8fCAoRU1QVFlfTElTVCA9IG1ha2VMaXN0KDAsIDAsIFNISUZUKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXN0KGxpc3QsIGluZGV4LCB2YWx1ZSkge1xuICAgIGluZGV4ID0gd3JhcEluZGV4KGxpc3QsIGluZGV4KTtcblxuICAgIGlmIChpbmRleCA+PSBsaXN0LnNpemUgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gbGlzdC53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIGluZGV4IDwgMCA/XG4gICAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCBpbmRleCkuc2V0KDAsIHZhbHVlKSA6XG4gICAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBpbmRleCArIDEpLnNldChpbmRleCwgdmFsdWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmRleCArPSBsaXN0Ll9vcmlnaW47XG5cbiAgICB2YXIgbmV3VGFpbCA9IGxpc3QuX3RhaWw7XG4gICAgdmFyIG5ld1Jvb3QgPSBsaXN0Ll9yb290O1xuICAgIHZhciBkaWRBbHRlciA9IE1ha2VSZWYoRElEX0FMVEVSKTtcbiAgICBpZiAoaW5kZXggPj0gZ2V0VGFpbE9mZnNldChsaXN0Ll9jYXBhY2l0eSkpIHtcbiAgICAgIG5ld1RhaWwgPSB1cGRhdGVWTm9kZShuZXdUYWlsLCBsaXN0Ll9fb3duZXJJRCwgMCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Jvb3QgPSB1cGRhdGVWTm9kZShuZXdSb290LCBsaXN0Ll9fb3duZXJJRCwgbGlzdC5fbGV2ZWwsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpO1xuICAgIH1cblxuICAgIGlmICghZGlkQWx0ZXIudmFsdWUpIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGlmIChsaXN0Ll9fb3duZXJJRCkge1xuICAgICAgbGlzdC5fcm9vdCA9IG5ld1Jvb3Q7XG4gICAgICBsaXN0Ll90YWlsID0gbmV3VGFpbDtcbiAgICAgIGxpc3QuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgbGlzdC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIHJldHVybiBtYWtlTGlzdChsaXN0Ll9vcmlnaW4sIGxpc3QuX2NhcGFjaXR5LCBsaXN0Ll9sZXZlbCwgbmV3Um9vdCwgbmV3VGFpbCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWTm9kZShub2RlLCBvd25lcklELCBsZXZlbCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcikge1xuICAgIHZhciBpZHggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgdmFyIG5vZGVIYXMgPSBub2RlICYmIGlkeCA8IG5vZGUuYXJyYXkubGVuZ3RoO1xuICAgIGlmICghbm9kZUhhcyAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Tm9kZTtcblxuICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgIHZhciBsb3dlck5vZGUgPSBub2RlICYmIG5vZGUuYXJyYXlbaWR4XTtcbiAgICAgIHZhciBuZXdMb3dlck5vZGUgPSB1cGRhdGVWTm9kZShsb3dlck5vZGUsIG93bmVySUQsIGxldmVsIC0gU0hJRlQsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKG5ld0xvd2VyTm9kZSA9PT0gbG93ZXJOb2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgICAgbmV3Tm9kZSA9IGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCk7XG4gICAgICBuZXdOb2RlLmFycmF5W2lkeF0gPSBuZXdMb3dlck5vZGU7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZUhhcyAmJiBub2RlLmFycmF5W2lkeF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuXG4gICAgbmV3Tm9kZSA9IGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCk7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgaWR4ID09PSBuZXdOb2RlLmFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIG5ld05vZGUuYXJyYXkucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld05vZGUuYXJyYXlbaWR4XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCkge1xuICAgIGlmIChvd25lcklEICYmIG5vZGUgJiYgb3duZXJJRCA9PT0gbm9kZS5vd25lcklEKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBWTm9kZShub2RlID8gbm9kZS5hcnJheS5zbGljZSgpIDogW10sIG93bmVySUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdE5vZGVGb3IobGlzdCwgcmF3SW5kZXgpIHtcbiAgICBpZiAocmF3SW5kZXggPj0gZ2V0VGFpbE9mZnNldChsaXN0Ll9jYXBhY2l0eSkpIHtcbiAgICAgIHJldHVybiBsaXN0Ll90YWlsO1xuICAgIH1cbiAgICBpZiAocmF3SW5kZXggPCAxIDw8IChsaXN0Ll9sZXZlbCArIFNISUZUKSkge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0Ll9yb290O1xuICAgICAgdmFyIGxldmVsID0gbGlzdC5fbGV2ZWw7XG4gICAgICB3aGlsZSAobm9kZSAmJiBsZXZlbCA+IDApIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuYXJyYXlbKHJhd0luZGV4ID4+PiBsZXZlbCkgJiBNQVNLXTtcbiAgICAgICAgbGV2ZWwgLT0gU0hJRlQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMaXN0Qm91bmRzKGxpc3QsIGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgb3duZXIgPSBsaXN0Ll9fb3duZXJJRCB8fCBuZXcgT3duZXJJRCgpO1xuICAgIHZhciBvbGRPcmlnaW4gPSBsaXN0Ll9vcmlnaW47XG4gICAgdmFyIG9sZENhcGFjaXR5ID0gbGlzdC5fY2FwYWNpdHk7XG4gICAgdmFyIG5ld09yaWdpbiA9IG9sZE9yaWdpbiArIGJlZ2luO1xuICAgIHZhciBuZXdDYXBhY2l0eSA9IGVuZCA9PT0gdW5kZWZpbmVkID8gb2xkQ2FwYWNpdHkgOiBlbmQgPCAwID8gb2xkQ2FwYWNpdHkgKyBlbmQgOiBvbGRPcmlnaW4gKyBlbmQ7XG4gICAgaWYgKG5ld09yaWdpbiA9PT0gb2xkT3JpZ2luICYmIG5ld0NhcGFjaXR5ID09PSBvbGRDYXBhY2l0eSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBnb2luZyB0byBlbmQgYWZ0ZXIgaXQgc3RhcnRzLCBpdCdzIGVtcHR5LlxuICAgIGlmIChuZXdPcmlnaW4gPj0gbmV3Q2FwYWNpdHkpIHtcbiAgICAgIHJldHVybiBsaXN0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdmFyIG5ld0xldmVsID0gbGlzdC5fbGV2ZWw7XG4gICAgdmFyIG5ld1Jvb3QgPSBsaXN0Ll9yb290O1xuXG4gICAgLy8gTmV3IG9yaWdpbiBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gICAgdmFyIG9mZnNldFNoaWZ0ID0gMDtcbiAgICB3aGlsZSAobmV3T3JpZ2luICsgb2Zmc2V0U2hpZnQgPCAwKSB7XG4gICAgICBuZXdSb290ID0gbmV3IFZOb2RlKG5ld1Jvb3QgJiYgbmV3Um9vdC5hcnJheS5sZW5ndGggPyBbdW5kZWZpbmVkLCBuZXdSb290XSA6IFtdLCBvd25lcik7XG4gICAgICBuZXdMZXZlbCArPSBTSElGVDtcbiAgICAgIG9mZnNldFNoaWZ0ICs9IDEgPDwgbmV3TGV2ZWw7XG4gICAgfVxuICAgIGlmIChvZmZzZXRTaGlmdCkge1xuICAgICAgbmV3T3JpZ2luICs9IG9mZnNldFNoaWZ0O1xuICAgICAgb2xkT3JpZ2luICs9IG9mZnNldFNoaWZ0O1xuICAgICAgbmV3Q2FwYWNpdHkgKz0gb2Zmc2V0U2hpZnQ7XG4gICAgICBvbGRDYXBhY2l0eSArPSBvZmZzZXRTaGlmdDtcbiAgICB9XG5cbiAgICB2YXIgb2xkVGFpbE9mZnNldCA9IGdldFRhaWxPZmZzZXQob2xkQ2FwYWNpdHkpO1xuICAgIHZhciBuZXdUYWlsT2Zmc2V0ID0gZ2V0VGFpbE9mZnNldChuZXdDYXBhY2l0eSk7XG5cbiAgICAvLyBOZXcgc2l6ZSBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gICAgd2hpbGUgKG5ld1RhaWxPZmZzZXQgPj0gMSA8PCAobmV3TGV2ZWwgKyBTSElGVCkpIHtcbiAgICAgIG5ld1Jvb3QgPSBuZXcgVk5vZGUobmV3Um9vdCAmJiBuZXdSb290LmFycmF5Lmxlbmd0aCA/IFtuZXdSb290XSA6IFtdLCBvd25lcik7XG4gICAgICBuZXdMZXZlbCArPSBTSElGVDtcbiAgICB9XG5cbiAgICAvLyBMb2NhdGUgb3IgY3JlYXRlIHRoZSBuZXcgdGFpbC5cbiAgICB2YXIgb2xkVGFpbCA9IGxpc3QuX3RhaWw7XG4gICAgdmFyIG5ld1RhaWwgPSBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCA/XG4gICAgICBsaXN0Tm9kZUZvcihsaXN0LCBuZXdDYXBhY2l0eSAtIDEpIDpcbiAgICAgIG5ld1RhaWxPZmZzZXQgPiBvbGRUYWlsT2Zmc2V0ID8gbmV3IFZOb2RlKFtdLCBvd25lcikgOiBvbGRUYWlsO1xuXG4gICAgLy8gTWVyZ2UgVGFpbCBpbnRvIHRyZWUuXG4gICAgaWYgKG9sZFRhaWwgJiYgbmV3VGFpbE9mZnNldCA+IG9sZFRhaWxPZmZzZXQgJiYgbmV3T3JpZ2luIDwgb2xkQ2FwYWNpdHkgJiYgb2xkVGFpbC5hcnJheS5sZW5ndGgpIHtcbiAgICAgIG5ld1Jvb3QgPSBlZGl0YWJsZVZOb2RlKG5ld1Jvb3QsIG93bmVyKTtcbiAgICAgIHZhciBub2RlID0gbmV3Um9vdDtcbiAgICAgIGZvciAodmFyIGxldmVsID0gbmV3TGV2ZWw7IGxldmVsID4gU0hJRlQ7IGxldmVsIC09IFNISUZUKSB7XG4gICAgICAgIHZhciBpZHggPSAob2xkVGFpbE9mZnNldCA+Pj4gbGV2ZWwpICYgTUFTSztcbiAgICAgICAgbm9kZSA9IG5vZGUuYXJyYXlbaWR4XSA9IGVkaXRhYmxlVk5vZGUobm9kZS5hcnJheVtpZHhdLCBvd25lcik7XG4gICAgICB9XG4gICAgICBub2RlLmFycmF5WyhvbGRUYWlsT2Zmc2V0ID4+PiBTSElGVCkgJiBNQVNLXSA9IG9sZFRhaWw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNpemUgaGFzIGJlZW4gcmVkdWNlZCwgdGhlcmUncyBhIGNoYW5jZSB0aGUgdGFpbCBuZWVkcyB0byBiZSB0cmltbWVkLlxuICAgIGlmIChuZXdDYXBhY2l0eSA8IG9sZENhcGFjaXR5KSB7XG4gICAgICBuZXdUYWlsID0gbmV3VGFpbCAmJiBuZXdUYWlsLnJlbW92ZUFmdGVyKG93bmVyLCAwLCBuZXdDYXBhY2l0eSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5ldyBvcmlnaW4gaXMgd2l0aGluIHRoZSB0YWlsLCB0aGVuIHdlIGRvIG5vdCBuZWVkIGEgcm9vdC5cbiAgICBpZiAobmV3T3JpZ2luID49IG5ld1RhaWxPZmZzZXQpIHtcbiAgICAgIG5ld09yaWdpbiAtPSBuZXdUYWlsT2Zmc2V0O1xuICAgICAgbmV3Q2FwYWNpdHkgLT0gbmV3VGFpbE9mZnNldDtcbiAgICAgIG5ld0xldmVsID0gU0hJRlQ7XG4gICAgICBuZXdSb290ID0gbnVsbDtcbiAgICAgIG5ld1RhaWwgPSBuZXdUYWlsICYmIG5ld1RhaWwucmVtb3ZlQmVmb3JlKG93bmVyLCAwLCBuZXdPcmlnaW4pO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgcm9vdCBoYXMgYmVlbiB0cmltbWVkLCBnYXJiYWdlIGNvbGxlY3QuXG4gICAgfSBlbHNlIGlmIChuZXdPcmlnaW4gPiBvbGRPcmlnaW4gfHwgbmV3VGFpbE9mZnNldCA8IG9sZFRhaWxPZmZzZXQpIHtcbiAgICAgIG9mZnNldFNoaWZ0ID0gMDtcblxuICAgICAgLy8gSWRlbnRpZnkgdGhlIG5ldyB0b3Agcm9vdCBub2RlIG9mIHRoZSBzdWJ0cmVlIG9mIHRoZSBvbGQgcm9vdC5cbiAgICAgIHdoaWxlIChuZXdSb290KSB7XG4gICAgICAgIHZhciBiZWdpbkluZGV4ID0gKG5ld09yaWdpbiA+Pj4gbmV3TGV2ZWwpICYgTUFTSztcbiAgICAgICAgaWYgKGJlZ2luSW5kZXggIT09IChuZXdUYWlsT2Zmc2V0ID4+PiBuZXdMZXZlbCkgJiBNQVNLKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ2luSW5kZXgpIHtcbiAgICAgICAgICBvZmZzZXRTaGlmdCArPSAoMSA8PCBuZXdMZXZlbCkgKiBiZWdpbkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIG5ld0xldmVsIC09IFNISUZUO1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5hcnJheVtiZWdpbkluZGV4XTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpbSB0aGUgbmV3IHNpZGVzIG9mIHRoZSBuZXcgcm9vdC5cbiAgICAgIGlmIChuZXdSb290ICYmIG5ld09yaWdpbiA+IG9sZE9yaWdpbikge1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVCZWZvcmUob3duZXIsIG5ld0xldmVsLCBuZXdPcmlnaW4gLSBvZmZzZXRTaGlmdCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Um9vdCAmJiBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCkge1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVBZnRlcihvd25lciwgbmV3TGV2ZWwsIG5ld1RhaWxPZmZzZXQgLSBvZmZzZXRTaGlmdCk7XG4gICAgICB9XG4gICAgICBpZiAob2Zmc2V0U2hpZnQpIHtcbiAgICAgICAgbmV3T3JpZ2luIC09IG9mZnNldFNoaWZ0O1xuICAgICAgICBuZXdDYXBhY2l0eSAtPSBvZmZzZXRTaGlmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGlzdC5fX293bmVySUQpIHtcbiAgICAgIGxpc3Quc2l6ZSA9IG5ld0NhcGFjaXR5IC0gbmV3T3JpZ2luO1xuICAgICAgbGlzdC5fb3JpZ2luID0gbmV3T3JpZ2luO1xuICAgICAgbGlzdC5fY2FwYWNpdHkgPSBuZXdDYXBhY2l0eTtcbiAgICAgIGxpc3QuX2xldmVsID0gbmV3TGV2ZWw7XG4gICAgICBsaXN0Ll9yb290ID0gbmV3Um9vdDtcbiAgICAgIGxpc3QuX3RhaWwgPSBuZXdUYWlsO1xuICAgICAgbGlzdC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICBsaXN0Ll9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VMaXN0KG5ld09yaWdpbiwgbmV3Q2FwYWNpdHksIG5ld0xldmVsLCBuZXdSb290LCBuZXdUYWlsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSW50b0xpc3RXaXRoKGxpc3QsIG1lcmdlciwgaXRlcmFibGVzKSB7XG4gICAgdmFyIGl0ZXJzID0gW107XG4gICAgdmFyIG1heFNpemUgPSAwO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVyYWJsZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVyYWJsZXNbaWldO1xuICAgICAgdmFyIGl0ZXIgPSBJbmRleGVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgaWYgKGl0ZXIuc2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgbWF4U2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgaXRlciA9IGl0ZXIubWFwKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZyb21KUyh2KX0pO1xuICAgICAgfVxuICAgICAgaXRlcnMucHVzaChpdGVyKTtcbiAgICB9XG4gICAgaWYgKG1heFNpemUgPiBsaXN0LnNpemUpIHtcbiAgICAgIGxpc3QgPSBsaXN0LnNldFNpemUobWF4U2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChsaXN0LCBtZXJnZXIsIGl0ZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhaWxPZmZzZXQoc2l6ZSkge1xuICAgIHJldHVybiBzaXplIDwgU0laRSA/IDAgOiAoKChzaXplIC0gMSkgPj4+IFNISUZUKSA8PCBTSElGVCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhPcmRlcmVkTWFwLCBzcmNfTWFwX19NYXApO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIE9yZGVyZWRNYXAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlPcmRlcmVkTWFwKCkgOlxuICAgICAgICBpc09yZGVyZWRNYXAodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eU9yZGVyZWRNYXAoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKG1hcCApIHtcbiAgICAgICAgICB2YXIgaXRlciA9IEtleWVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIG1hcC5zZXQoaywgdil9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT3JkZXJlZE1hcC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdPcmRlcmVkTWFwIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuX21hcC5nZXQoayk7XG4gICAgICByZXR1cm4gaW5kZXggIT09IHVuZGVmaW5lZCA/IHRoaXMuX2xpc3QuZ2V0KGluZGV4KVsxXSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5fbWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2xpc3QuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlPcmRlcmVkTWFwKCk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgIHJldHVybiB1cGRhdGVPcmRlcmVkTWFwKHRoaXMsIGssIHYpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gdXBkYXRlT3JkZXJlZE1hcCh0aGlzLCBrLCBOT1RfU0VUKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC53YXNBbHRlcmVkKCkgfHwgdGhpcy5fbGlzdC53YXNBbHRlcmVkKCk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdC5fX2l0ZXJhdGUoXG4gICAgICAgIGZ1bmN0aW9uKGVudHJ5ICkge3JldHVybiBlbnRyeSAmJiBmbihlbnRyeVsxXSwgZW50cnlbMF0sIHRoaXMkMCl9LFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuZnJvbUVudHJ5U2VxKCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICAgIHZhciBuZXdMaXN0ID0gdGhpcy5fbGlzdC5fX2Vuc3VyZU93bmVyKG93bmVySUQpO1xuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgICB0aGlzLl9saXN0ID0gbmV3TGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU9yZGVyZWRNYXAobmV3TWFwLCBuZXdMaXN0LCBvd25lcklELCB0aGlzLl9faGFzaCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzT3JkZXJlZE1hcChtYXliZU9yZGVyZWRNYXApIHtcbiAgICByZXR1cm4gaXNNYXAobWF5YmVPcmRlcmVkTWFwKSAmJiBpc09yZGVyZWQobWF5YmVPcmRlcmVkTWFwKTtcbiAgfVxuXG4gIE9yZGVyZWRNYXAuaXNPcmRlcmVkTWFwID0gaXNPcmRlcmVkTWFwO1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlW0lTX09SREVSRURfU0VOVElORUxdID0gdHJ1ZTtcbiAgT3JkZXJlZE1hcC5wcm90b3R5cGVbREVMRVRFXSA9IE9yZGVyZWRNYXAucHJvdG90eXBlLnJlbW92ZTtcblxuXG5cbiAgZnVuY3Rpb24gbWFrZU9yZGVyZWRNYXAobWFwLCBsaXN0LCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIG9tYXAgPSBPYmplY3QuY3JlYXRlKE9yZGVyZWRNYXAucHJvdG90eXBlKTtcbiAgICBvbWFwLnNpemUgPSBtYXAgPyBtYXAuc2l6ZSA6IDA7XG4gICAgb21hcC5fbWFwID0gbWFwO1xuICAgIG9tYXAuX2xpc3QgPSBsaXN0O1xuICAgIG9tYXAuX19vd25lcklEID0gb3duZXJJRDtcbiAgICBvbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgcmV0dXJuIG9tYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfT1JERVJFRF9NQVA7XG4gIGZ1bmN0aW9uIGVtcHR5T3JkZXJlZE1hcCgpIHtcbiAgICByZXR1cm4gRU1QVFlfT1JERVJFRF9NQVAgfHwgKEVNUFRZX09SREVSRURfTUFQID0gbWFrZU9yZGVyZWRNYXAoZW1wdHlNYXAoKSwgZW1wdHlMaXN0KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9yZGVyZWRNYXAob21hcCwgaywgdikge1xuICAgIHZhciBtYXAgPSBvbWFwLl9tYXA7XG4gICAgdmFyIGxpc3QgPSBvbWFwLl9saXN0O1xuICAgIHZhciBpID0gbWFwLmdldChrKTtcbiAgICB2YXIgaGFzID0gaSAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBuZXdNYXA7XG4gICAgdmFyIG5ld0xpc3Q7XG4gICAgaWYgKHYgPT09IE5PVF9TRVQpIHsgLy8gcmVtb3ZlZFxuICAgICAgaWYgKCFoYXMpIHtcbiAgICAgICAgcmV0dXJuIG9tYXA7XG4gICAgICB9XG4gICAgICBpZiAobGlzdC5zaXplID49IFNJWkUgJiYgbGlzdC5zaXplID49IG1hcC5zaXplICogMikge1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24oZW50cnksIGlkeCkgIHtyZXR1cm4gZW50cnkgIT09IHVuZGVmaW5lZCAmJiBpICE9PSBpZHh9KTtcbiAgICAgICAgbmV3TWFwID0gbmV3TGlzdC50b0tleWVkU2VxKCkubWFwKGZ1bmN0aW9uKGVudHJ5ICkge3JldHVybiBlbnRyeVswXX0pLmZsaXAoKS50b01hcCgpO1xuICAgICAgICBpZiAob21hcC5fX293bmVySUQpIHtcbiAgICAgICAgICBuZXdNYXAuX19vd25lcklEID0gbmV3TGlzdC5fX293bmVySUQgPSBvbWFwLl9fb3duZXJJRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TWFwID0gbWFwLnJlbW92ZShrKTtcbiAgICAgICAgbmV3TGlzdCA9IGkgPT09IGxpc3Quc2l6ZSAtIDEgPyBsaXN0LnBvcCgpIDogbGlzdC5zZXQoaSwgdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcykge1xuICAgICAgICBpZiAodiA9PT0gbGlzdC5nZXQoaSlbMV0pIHtcbiAgICAgICAgICByZXR1cm4gb21hcDtcbiAgICAgICAgfVxuICAgICAgICBuZXdNYXAgPSBtYXA7XG4gICAgICAgIG5ld0xpc3QgPSBsaXN0LnNldChpLCBbaywgdl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TWFwID0gbWFwLnNldChrLCBsaXN0LnNpemUpO1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5zZXQobGlzdC5zaXplLCBbaywgdl0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob21hcC5fX293bmVySUQpIHtcbiAgICAgIG9tYXAuc2l6ZSA9IG5ld01hcC5zaXplO1xuICAgICAgb21hcC5fbWFwID0gbmV3TWFwO1xuICAgICAgb21hcC5fbGlzdCA9IG5ld0xpc3Q7XG4gICAgICBvbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBvbWFwO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZU9yZGVyZWRNYXAobmV3TWFwLCBuZXdMaXN0KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YWNrLCBJbmRleGVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gU3RhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTdGFjaygpIDpcbiAgICAgICAgaXNTdGFjayh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5U3RhY2soKS51bnNoaWZ0QWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBTdGFjay5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU3RhY2sgWycsICddJyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBTdGFjay5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICB3aGlsZSAoaGVhZCAmJiBpbmRleC0tKSB7XG4gICAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVhZCA/IGhlYWQudmFsdWUgOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oZWFkICYmIHRoaXMuX2hlYWQudmFsdWU7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemUgKyBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgZm9yICh2YXIgaWkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaWkgPj0gMDsgaWktLSkge1xuICAgICAgICBoZWFkID0ge1xuICAgICAgICAgIHZhbHVlOiBhcmd1bWVudHNbaWldLFxuICAgICAgICAgIG5leHQ6IGhlYWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgICB0aGlzLl9oZWFkID0gaGVhZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaEFsbCA9IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIGl0ZXIgPSBJbmRleGVkSXRlcmFibGUoaXRlcik7XG4gICAgICBpZiAoaXRlci5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5zaXplO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgaXRlci5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSApIHtcbiAgICAgICAgbmV3U2l6ZSsrO1xuICAgICAgICBoZWFkID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBuZXh0OiBoZWFkXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgICB0aGlzLl9oZWFkID0gaGVhZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZSgxKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS51bnNoaWZ0QWxsID0gZnVuY3Rpb24oaXRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaEFsbChpdGVyKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX2hlYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5U3RhY2soKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgdGhpcy5zaXplKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciByZXNvbHZlZEJlZ2luID0gcmVzb2x2ZUJlZ2luKGJlZ2luLCB0aGlzLnNpemUpO1xuICAgICAgdmFyIHJlc29sdmVkRW5kID0gcmVzb2x2ZUVuZChlbmQsIHRoaXMuc2l6ZSk7XG4gICAgICBpZiAocmVzb2x2ZWRFbmQgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgICAvLyBzdXBlci5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgICAgcmV0dXJuIEluZGV4ZWRDb2xsZWN0aW9uLnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemUgLSByZXNvbHZlZEJlZ2luO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgd2hpbGUgKHJlc29sdmVkQmVnaW4tLSkge1xuICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBoZWFkO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sobmV3U2l6ZSwgaGVhZCk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTXV0YWJpbGl0eVxuXG4gICAgU3RhY2sucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sodGhpcy5zaXplLCB0aGlzLl9oZWFkLCBvd25lcklELCB0aGlzLl9faGFzaCk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgSXRlcmF0aW9uXG5cbiAgICBTdGFjay5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5fX2l0ZXJhdGUoZm4pO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKGZuKG5vZGUudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5fX2l0ZXJhdG9yKHR5cGUpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzU3RhY2sobWF5YmVTdGFjaykge1xuICAgIHJldHVybiAhIShtYXliZVN0YWNrICYmIG1heWJlU3RhY2tbSVNfU1RBQ0tfU0VOVElORUxdKTtcbiAgfVxuXG4gIFN0YWNrLmlzU3RhY2sgPSBpc1N0YWNrO1xuXG4gIHZhciBJU19TVEFDS19TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX1NUQUNLX19AQCc7XG5cbiAgdmFyIFN0YWNrUHJvdG90eXBlID0gU3RhY2sucHJvdG90eXBlO1xuICBTdGFja1Byb3RvdHlwZVtJU19TVEFDS19TRU5USU5FTF0gPSB0cnVlO1xuICBTdGFja1Byb3RvdHlwZS53aXRoTXV0YXRpb25zID0gTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnM7XG4gIFN0YWNrUHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc011dGFibGU7XG4gIFN0YWNrUHJvdG90eXBlLmFzSW1tdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlO1xuICBTdGFja1Byb3RvdHlwZS53YXNBbHRlcmVkID0gTWFwUHJvdG90eXBlLndhc0FsdGVyZWQ7XG5cblxuICBmdW5jdGlvbiBtYWtlU3RhY2soc2l6ZSwgaGVhZCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKFN0YWNrUHJvdG90eXBlKTtcbiAgICBtYXAuc2l6ZSA9IHNpemU7XG4gICAgbWFwLl9oZWFkID0gaGVhZDtcbiAgICBtYXAuX19vd25lcklEID0gb3duZXJJRDtcbiAgICBtYXAuX19oYXNoID0gaGFzaDtcbiAgICBtYXAuX19hbHRlcmVkID0gZmFsc2U7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIHZhciBFTVBUWV9TVEFDSztcbiAgZnVuY3Rpb24gZW1wdHlTdGFjaygpIHtcbiAgICByZXR1cm4gRU1QVFlfU1RBQ0sgfHwgKEVNUFRZX1NUQUNLID0gbWFrZVN0YWNrKDApKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKHNyY19TZXRfX1NldCwgU2V0Q29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gc3JjX1NldF9fU2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2V0KCkgOlxuICAgICAgICBpc1NldCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5U2V0KCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBTZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiApIHtyZXR1cm4gc2V0LmFkZCh2KX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzcmNfU2V0X19TZXQub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQuZnJvbUtleXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMoS2V5ZWRJdGVyYWJsZSh2YWx1ZSkua2V5U2VxKCkpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXQgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5zZXQodmFsdWUsIHRydWUpKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVNldCh0aGlzLCB0aGlzLl9tYXAucmVtb3ZlKHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1cGRhdGVTZXQodGhpcywgdGhpcy5fbWFwLmNsZWFyKCkpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24oKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICBpdGVycyA9IGl0ZXJzLmZpbHRlcihmdW5jdGlvbih4ICkge3JldHVybiB4LnNpemUgIT09IDB9KTtcbiAgICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwICYmICF0aGlzLl9fb3duZXJJRCAmJiBpdGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoaXRlcnNbMF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVycy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICBTZXRJdGVyYWJsZShpdGVyc1tpaV0pLmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIHNldC5hZGQodmFsdWUpfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uKCkge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGl0ZXJzID0gaXRlcnMubWFwKGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIFNldEl0ZXJhYmxlKGl0ZXIpfSk7XG4gICAgICB2YXIgb3JpZ2luYWxTZXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgIG9yaWdpbmFsU2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7XG4gICAgICAgICAgaWYgKCFpdGVycy5ldmVyeShmdW5jdGlvbihpdGVyICkge3JldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKX0pKSB7XG4gICAgICAgICAgICBzZXQucmVtb3ZlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbigpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpdGVycyA9IGl0ZXJzLm1hcChmdW5jdGlvbihpdGVyICkge3JldHVybiBTZXRJdGVyYWJsZShpdGVyKX0pO1xuICAgICAgdmFyIG9yaWdpbmFsU2V0ID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICBvcmlnaW5hbFNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlICkge1xuICAgICAgICAgIGlmIChpdGVycy5zb21lKGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIGl0ZXIuaW5jbHVkZXModmFsdWUpfSkpIHtcbiAgICAgICAgICAgIHNldC5yZW1vdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5tZXJnZVdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVuaW9uLmFwcGx5KHRoaXMsIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgc3JjX1NldF9fU2V0LnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgLy8gTGF0ZSBiaW5kaW5nXG4gICAgICByZXR1cm4gT3JkZXJlZFNldChzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuc29ydEJ5ID0gZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkU2V0KHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcikpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLndhc0FsdGVyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAud2FzQWx0ZXJlZCgpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLl9faXRlcmF0ZShmdW5jdGlvbihfLCBrKSAge3JldHVybiBmbihrLCBrLCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIHNyY19TZXRfX1NldC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAubWFwKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIGt9KS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBzcmNfU2V0X19TZXQucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwLl9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX19tYWtlKG5ld01hcCwgb3duZXJJRCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzU2V0KG1heWJlU2V0KSB7XG4gICAgcmV0dXJuICEhKG1heWJlU2V0ICYmIG1heWJlU2V0W0lTX1NFVF9TRU5USU5FTF0pO1xuICB9XG5cbiAgc3JjX1NldF9fU2V0LmlzU2V0ID0gaXNTZXQ7XG5cbiAgdmFyIElTX1NFVF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX1NFVF9fQEAnO1xuXG4gIHZhciBTZXRQcm90b3R5cGUgPSBzcmNfU2V0X19TZXQucHJvdG90eXBlO1xuICBTZXRQcm90b3R5cGVbSVNfU0VUX1NFTlRJTkVMXSA9IHRydWU7XG4gIFNldFByb3RvdHlwZVtERUxFVEVdID0gU2V0UHJvdG90eXBlLnJlbW92ZTtcbiAgU2V0UHJvdG90eXBlLm1lcmdlRGVlcCA9IFNldFByb3RvdHlwZS5tZXJnZTtcbiAgU2V0UHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBTZXRQcm90b3R5cGUubWVyZ2VXaXRoO1xuICBTZXRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBTZXRQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgU2V0UHJvdG90eXBlLmFzSW1tdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlO1xuXG4gIFNldFByb3RvdHlwZS5fX2VtcHR5ID0gZW1wdHlTZXQ7XG4gIFNldFByb3RvdHlwZS5fX21ha2UgPSBtYWtlU2V0O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNldChzZXQsIG5ld01hcCkge1xuICAgIGlmIChzZXQuX19vd25lcklEKSB7XG4gICAgICBzZXQuc2l6ZSA9IG5ld01hcC5zaXplO1xuICAgICAgc2V0Ll9tYXAgPSBuZXdNYXA7XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwID09PSBzZXQuX21hcCA/IHNldCA6XG4gICAgICBuZXdNYXAuc2l6ZSA9PT0gMCA/IHNldC5fX2VtcHR5KCkgOlxuICAgICAgc2V0Ll9fbWFrZShuZXdNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVNldChtYXAsIG93bmVySUQpIHtcbiAgICB2YXIgc2V0ID0gT2JqZWN0LmNyZWF0ZShTZXRQcm90b3R5cGUpO1xuICAgIHNldC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICAgIHNldC5fbWFwID0gbWFwO1xuICAgIHNldC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICB2YXIgRU1QVFlfU0VUO1xuICBmdW5jdGlvbiBlbXB0eVNldCgpIHtcbiAgICByZXR1cm4gRU1QVFlfU0VUIHx8IChFTVBUWV9TRVQgPSBtYWtlU2V0KGVtcHR5TWFwKCkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE9yZGVyZWRTZXQsIHNyY19TZXRfX1NldCk7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gT3JkZXJlZFNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eU9yZGVyZWRTZXQoKSA6XG4gICAgICAgIGlzT3JkZXJlZFNldCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5T3JkZXJlZFNldCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICAgIHZhciBpdGVyID0gU2V0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIHNldC5hZGQodil9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT3JkZXJlZFNldC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRTZXQuZnJvbUtleXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMoS2V5ZWRJdGVyYWJsZSh2YWx1ZSkua2V5U2VxKCkpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnT3JkZXJlZFNldCB7JywgJ30nKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNPcmRlcmVkU2V0KG1heWJlT3JkZXJlZFNldCkge1xuICAgIHJldHVybiBpc1NldChtYXliZU9yZGVyZWRTZXQpICYmIGlzT3JkZXJlZChtYXliZU9yZGVyZWRTZXQpO1xuICB9XG5cbiAgT3JkZXJlZFNldC5pc09yZGVyZWRTZXQgPSBpc09yZGVyZWRTZXQ7XG5cbiAgdmFyIE9yZGVyZWRTZXRQcm90b3R5cGUgPSBPcmRlcmVkU2V0LnByb3RvdHlwZTtcbiAgT3JkZXJlZFNldFByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cbiAgT3JkZXJlZFNldFByb3RvdHlwZS5fX2VtcHR5ID0gZW1wdHlPcmRlcmVkU2V0O1xuICBPcmRlcmVkU2V0UHJvdG90eXBlLl9fbWFrZSA9IG1ha2VPcmRlcmVkU2V0O1xuXG4gIGZ1bmN0aW9uIG1ha2VPcmRlcmVkU2V0KG1hcCwgb3duZXJJRCkge1xuICAgIHZhciBzZXQgPSBPYmplY3QuY3JlYXRlKE9yZGVyZWRTZXRQcm90b3R5cGUpO1xuICAgIHNldC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICAgIHNldC5fbWFwID0gbWFwO1xuICAgIHNldC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICB2YXIgRU1QVFlfT1JERVJFRF9TRVQ7XG4gIGZ1bmN0aW9uIGVtcHR5T3JkZXJlZFNldCgpIHtcbiAgICByZXR1cm4gRU1QVFlfT1JERVJFRF9TRVQgfHwgKEVNUFRZX09SREVSRURfU0VUID0gbWFrZU9yZGVyZWRTZXQoZW1wdHlPcmRlcmVkTWFwKCkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJlY29yZCwgS2V5ZWRDb2xsZWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFJlY29yZChkZWZhdWx0VmFsdWVzLCBuYW1lKSB7XG4gICAgICB2YXIgaGFzSW5pdGlhbGl6ZWQ7XG5cbiAgICAgIHZhciBSZWNvcmRUeXBlID0gZnVuY3Rpb24gUmVjb3JkKHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUmVjb3JkVHlwZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlY29yZFR5cGUpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWNvcmRUeXBlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNJbml0aWFsaXplZCkge1xuICAgICAgICAgIGhhc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZXMpO1xuICAgICAgICAgIHNldFByb3BzKFJlY29yZFR5cGVQcm90b3R5cGUsIGtleXMpO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuc2l6ZSA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX25hbWUgPSBuYW1lO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX2tleXMgPSBrZXlzO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX2RlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hcCA9IHNyY19NYXBfX01hcCh2YWx1ZXMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIFJlY29yZFR5cGVQcm90b3R5cGUgPSBSZWNvcmRUeXBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVjb3JkUHJvdG90eXBlKTtcbiAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWNvcmRUeXBlO1xuXG4gICAgICByZXR1cm4gUmVjb3JkVHlwZTtcbiAgICB9XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKHJlY29yZE5hbWUodGhpcykgKyAnIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrKSkge1xuICAgICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgZGVmYXVsdFZhbCA9IHRoaXMuX2RlZmF1bHRWYWx1ZXNba107XG4gICAgICByZXR1cm4gdGhpcy5fbWFwID8gdGhpcy5fbWFwLmdldChrLCBkZWZhdWx0VmFsKSA6IGRlZmF1bHRWYWw7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBSZWNvcmQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5fbWFwICYmIHRoaXMuX21hcC5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBSZWNvcmRUeXBlID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgIHJldHVybiBSZWNvcmRUeXBlLl9lbXB0eSB8fCAoUmVjb3JkVHlwZS5fZW1wdHkgPSBtYWtlUmVjb3JkKHRoaXMsIGVtcHR5TWFwKCkpKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrLCB2KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCB1bmtub3duIGtleSBcIicgKyBrICsgJ1wiIG9uICcgKyByZWNvcmROYW1lKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLnNldChrLCB2KTtcbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCB8fCBuZXdNYXAgPT09IHRoaXMuX21hcCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlUmVjb3JkKHRoaXMsIG5ld01hcCk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oaykge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLnJlbW92ZShrKTtcbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCB8fCBuZXdNYXAgPT09IHRoaXMuX21hcCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlUmVjb3JkKHRoaXMsIG5ld01hcCk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC53YXNBbHRlcmVkKCk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBLZXllZEl0ZXJhYmxlKHRoaXMuX2RlZmF1bHRWYWx1ZXMpLm1hcChmdW5jdGlvbihfLCBrKSAge3JldHVybiB0aGlzJDAuZ2V0KGspfSkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIEtleWVkSXRlcmFibGUodGhpcy5fZGVmYXVsdFZhbHVlcykubWFwKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIHRoaXMkMC5nZXQoayl9KS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwICYmIHRoaXMuX21hcC5fX2Vuc3VyZU93bmVyKG93bmVySUQpO1xuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlUmVjb3JkKHRoaXMsIG5ld01hcCwgb3duZXJJRCk7XG4gICAgfTtcblxuXG4gIHZhciBSZWNvcmRQcm90b3R5cGUgPSBSZWNvcmQucHJvdG90eXBlO1xuICBSZWNvcmRQcm90b3R5cGVbREVMRVRFXSA9IFJlY29yZFByb3RvdHlwZS5yZW1vdmU7XG4gIFJlY29yZFByb3RvdHlwZS5kZWxldGVJbiA9XG4gIFJlY29yZFByb3RvdHlwZS5yZW1vdmVJbiA9IE1hcFByb3RvdHlwZS5yZW1vdmVJbjtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlID0gTWFwUHJvdG90eXBlLm1lcmdlO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VXaXRoID0gTWFwUHJvdG90eXBlLm1lcmdlV2l0aDtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlSW4gPSBNYXBQcm90b3R5cGUubWVyZ2VJbjtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcCA9IE1hcFByb3RvdHlwZS5tZXJnZURlZXA7XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZURlZXBXaXRoID0gTWFwUHJvdG90eXBlLm1lcmdlRGVlcFdpdGg7XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZURlZXBJbiA9IE1hcFByb3RvdHlwZS5tZXJnZURlZXBJbjtcbiAgUmVjb3JkUHJvdG90eXBlLnNldEluID0gTWFwUHJvdG90eXBlLnNldEluO1xuICBSZWNvcmRQcm90b3R5cGUudXBkYXRlID0gTWFwUHJvdG90eXBlLnVwZGF0ZTtcbiAgUmVjb3JkUHJvdG90eXBlLnVwZGF0ZUluID0gTWFwUHJvdG90eXBlLnVwZGF0ZUluO1xuICBSZWNvcmRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBSZWNvcmRQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgUmVjb3JkUHJvdG90eXBlLmFzSW1tdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlO1xuXG5cbiAgZnVuY3Rpb24gbWFrZVJlY29yZChsaWtlUmVjb3JkLCBtYXAsIG93bmVySUQpIHtcbiAgICB2YXIgcmVjb3JkID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobGlrZVJlY29yZCkpO1xuICAgIHJlY29yZC5fbWFwID0gbWFwO1xuICAgIHJlY29yZC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiByZWNvcmROYW1lKHJlY29yZCkge1xuICAgIHJldHVybiByZWNvcmQuX25hbWUgfHwgcmVjb3JkLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ1JlY29yZCc7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcm9wcyhwcm90b3R5cGUsIG5hbWVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5hbWVzLmZvckVhY2goc2V0UHJvcC5iaW5kKHVuZGVmaW5lZCwgcHJvdG90eXBlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBmYWlsZWQuIFByb2JhYmx5IElFOC5cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcm9wKHByb3RvdHlwZSwgbmFtZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGludmFyaWFudCh0aGlzLl9fb3duZXJJRCwgJ0Nhbm5vdCBzZXQgb24gYW4gaW1tdXRhYmxlIHJlY29yZC4nKTtcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIWlzSXRlcmFibGUoYikgfHxcbiAgICAgIGEuc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGIuc2l6ZSAhPT0gdW5kZWZpbmVkICYmIGEuc2l6ZSAhPT0gYi5zaXplIHx8XG4gICAgICBhLl9faGFzaCAhPT0gdW5kZWZpbmVkICYmIGIuX19oYXNoICE9PSB1bmRlZmluZWQgJiYgYS5fX2hhc2ggIT09IGIuX19oYXNoIHx8XG4gICAgICBpc0tleWVkKGEpICE9PSBpc0tleWVkKGIpIHx8XG4gICAgICBpc0luZGV4ZWQoYSkgIT09IGlzSW5kZXhlZChiKSB8fFxuICAgICAgaXNPcmRlcmVkKGEpICE9PSBpc09yZGVyZWQoYilcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYS5zaXplID09PSAwICYmIGIuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG5vdEFzc29jaWF0aXZlID0gIWlzQXNzb2NpYXRpdmUoYSk7XG5cbiAgICBpZiAoaXNPcmRlcmVkKGEpKSB7XG4gICAgICB2YXIgZW50cmllcyA9IGEuZW50cmllcygpO1xuICAgICAgcmV0dXJuIGIuZXZlcnkoZnVuY3Rpb24odiwgaykgIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllcy5uZXh0KCkudmFsdWU7XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBpcyhlbnRyeVsxXSwgdikgJiYgKG5vdEFzc29jaWF0aXZlIHx8IGlzKGVudHJ5WzBdLCBrKSk7XG4gICAgICB9KSAmJiBlbnRyaWVzLm5leHQoKS5kb25lO1xuICAgIH1cblxuICAgIHZhciBmbGlwcGVkID0gZmFsc2U7XG5cbiAgICBpZiAoYS5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChiLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIGEuY2FjaGVSZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhLmNhY2hlUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsaXBwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgXyA9IGE7XG4gICAgICAgIGEgPSBiO1xuICAgICAgICBiID0gXztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYWxsRXF1YWwgPSB0cnVlO1xuICAgIHZhciBiU2l6ZSA9IGIuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7XG4gICAgICBpZiAobm90QXNzb2NpYXRpdmUgPyAhYS5oYXModikgOlxuICAgICAgICAgIGZsaXBwZWQgPyAhaXModiwgYS5nZXQoaywgTk9UX1NFVCkpIDogIWlzKGEuZ2V0KGssIE5PVF9TRVQpLCB2KSkge1xuICAgICAgICBhbGxFcXVhbCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWxsRXF1YWwgJiYgYS5zaXplID09PSBiU2l6ZTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJhbmdlLCBJbmRleGVkU2VxKTtcblxuICAgIGZ1bmN0aW9uIFJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShzdGFydCwgZW5kLCBzdGVwKTtcbiAgICAgIH1cbiAgICAgIGludmFyaWFudChzdGVwICE9PSAwLCAnQ2Fubm90IHN0ZXAgYSBSYW5nZSBieSAwJyk7XG4gICAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kID0gSW5maW5pdHk7XG4gICAgICB9XG4gICAgICBzdGVwID0gc3RlcCA9PT0gdW5kZWZpbmVkID8gMSA6IE1hdGguYWJzKHN0ZXApO1xuICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgIHN0ZXAgPSAtc3RlcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLl9lbmQgPSBlbmQ7XG4gICAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCgoZW5kIC0gc3RhcnQpIC8gc3RlcCAtIDEpICsgMSk7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIGlmIChFTVBUWV9SQU5HRSkge1xuICAgICAgICAgIHJldHVybiBFTVBUWV9SQU5HRTtcbiAgICAgICAgfVxuICAgICAgICBFTVBUWV9SQU5HRSA9IHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnUmFuZ2UgW10nO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdSYW5nZSBbICcgK1xuICAgICAgICB0aGlzLl9zdGFydCArICcuLi4nICsgdGhpcy5fZW5kICtcbiAgICAgICAgKHRoaXMuX3N0ZXAgPiAxID8gJyBieSAnICsgdGhpcy5fc3RlcCA6ICcnKSArXG4gICAgICAnIF0nO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXMoaW5kZXgpID9cbiAgICAgICAgdGhpcy5fc3RhcnQgKyB3cmFwSW5kZXgodGhpcywgaW5kZXgpICogdGhpcy5fc3RlcCA6XG4gICAgICAgIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIHBvc3NpYmxlSW5kZXggPSAoc2VhcmNoVmFsdWUgLSB0aGlzLl9zdGFydCkgLyB0aGlzLl9zdGVwO1xuICAgICAgcmV0dXJuIHBvc3NpYmxlSW5kZXggPj0gMCAmJlxuICAgICAgICBwb3NzaWJsZUluZGV4IDwgdGhpcy5zaXplICYmXG4gICAgICAgIHBvc3NpYmxlSW5kZXggPT09IE1hdGguZmxvb3IocG9zc2libGVJbmRleCk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHRoaXMuc2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgdGhpcy5zaXplKTtcbiAgICAgIGVuZCA9IHJlc29sdmVFbmQoZW5kLCB0aGlzLnNpemUpO1xuICAgICAgaWYgKGVuZCA8PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKDAsIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLmdldChiZWdpbiwgdGhpcy5fZW5kKSwgdGhpcy5nZXQoZW5kLCB0aGlzLl9lbmQpLCB0aGlzLl9zdGVwKTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIG9mZnNldFZhbHVlID0gc2VhcmNoVmFsdWUgLSB0aGlzLl9zdGFydDtcbiAgICAgIGlmIChvZmZzZXRWYWx1ZSAlIHRoaXMuX3N0ZXAgPT09IDApIHtcbiAgICAgICAgdmFyIGluZGV4ID0gb2Zmc2V0VmFsdWUgLyB0aGlzLl9zdGVwO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuc2l6ZSkge1xuICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHNlYXJjaFZhbHVlKTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgICAgdmFyIHN0ZXAgPSB0aGlzLl9zdGVwO1xuICAgICAgdmFyIHZhbHVlID0gcmV2ZXJzZSA/IHRoaXMuX3N0YXJ0ICsgbWF4SW5kZXggKiBzdGVwIDogdGhpcy5fc3RhcnQ7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIGlmIChmbih2YWx1ZSwgaWksIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcmV2ZXJzZSA/IC1zdGVwIDogc3RlcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgICAgdmFyIHN0ZXAgPSB0aGlzLl9zdGVwO1xuICAgICAgdmFyIHZhbHVlID0gcmV2ZXJzZSA/IHRoaXMuX3N0YXJ0ICsgbWF4SW5kZXggKiBzdGVwIDogdGhpcy5fc3RhcnQ7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHYgPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgKz0gcmV2ZXJzZSA/IC1zdGVwIDogc3RlcDtcbiAgICAgICAgcmV0dXJuIGlpID4gbWF4SW5kZXggPyBpdGVyYXRvckRvbmUoKSA6IGl0ZXJhdG9yVmFsdWUodHlwZSwgaWkrKywgdik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICByZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBSYW5nZSA/XG4gICAgICAgIHRoaXMuX3N0YXJ0ID09PSBvdGhlci5fc3RhcnQgJiZcbiAgICAgICAgdGhpcy5fZW5kID09PSBvdGhlci5fZW5kICYmXG4gICAgICAgIHRoaXMuX3N0ZXAgPT09IG90aGVyLl9zdGVwIDpcbiAgICAgICAgZGVlcEVxdWFsKHRoaXMsIG90aGVyKTtcbiAgICB9O1xuXG5cbiAgdmFyIEVNUFRZX1JBTkdFO1xuXG4gIGNyZWF0ZUNsYXNzKFJlcGVhdCwgSW5kZXhlZFNlcSk7XG5cbiAgICBmdW5jdGlvbiBSZXBlYXQodmFsdWUsIHRpbWVzKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVwZWF0KSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlcGVhdCh2YWx1ZSwgdGltZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2l6ZSA9IHRpbWVzID09PSB1bmRlZmluZWQgPyBJbmZpbml0eSA6IE1hdGgubWF4KDAsIHRpbWVzKTtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKEVNUFRZX1JFUEVBVCkge1xuICAgICAgICAgIHJldHVybiBFTVBUWV9SRVBFQVQ7XG4gICAgICAgIH1cbiAgICAgICAgRU1QVFlfUkVQRUFUID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnUmVwZWF0IFtdJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnUmVwZWF0IFsgJyArIHRoaXMuX3ZhbHVlICsgJyAnICsgdGhpcy5zaXplICsgJyB0aW1lcyBdJztcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyhpbmRleCkgPyB0aGlzLl92YWx1ZSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiBpcyh0aGlzLl92YWx1ZSwgc2VhcmNoVmFsdWUpO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gICAgICByZXR1cm4gd2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSA/IHRoaXMgOlxuICAgICAgICBuZXcgUmVwZWF0KHRoaXMuX3ZhbHVlLCByZXNvbHZlRW5kKGVuZCwgc2l6ZSkgLSByZXNvbHZlQmVnaW4oYmVnaW4sIHNpemUpKTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIGlmIChpcyh0aGlzLl92YWx1ZSwgc2VhcmNoVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIGlmIChpcyh0aGlzLl92YWx1ZSwgc2VhcmNoVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB0aGlzLnNpemU7IGlpKyspIHtcbiAgICAgICAgaWYgKGZuKHRoaXMuX3ZhbHVlLCBpaSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBzcmNfSXRlcmF0b3JfX0l0ZXJhdG9yKGZ1bmN0aW9uKCkgXG4gICAgICAgIHtyZXR1cm4gaWkgPCB0aGlzJDAuc2l6ZSA/IGl0ZXJhdG9yVmFsdWUodHlwZSwgaWkrKywgdGhpcyQwLl92YWx1ZSkgOiBpdGVyYXRvckRvbmUoKX1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIFJlcGVhdCA/XG4gICAgICAgIGlzKHRoaXMuX3ZhbHVlLCBvdGhlci5fdmFsdWUpIDpcbiAgICAgICAgZGVlcEVxdWFsKG90aGVyKTtcbiAgICB9O1xuXG5cbiAgdmFyIEVNUFRZX1JFUEVBVDtcblxuICAvKipcbiAgICogQ29udHJpYnV0ZXMgYWRkaXRpb25hbCBtZXRob2RzIHRvIGEgY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIG1peGluKGN0b3IsIG1ldGhvZHMpIHtcbiAgICB2YXIga2V5Q29waWVyID0gZnVuY3Rpb24oa2V5ICkgeyBjdG9yLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldOyB9O1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goa2V5Q29waWVyKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1ldGhvZHMpLmZvckVhY2goa2V5Q29waWVyKTtcbiAgICByZXR1cm4gY3RvcjtcbiAgfVxuXG4gIEl0ZXJhYmxlLkl0ZXJhdG9yID0gc3JjX0l0ZXJhdG9yX19JdGVyYXRvcjtcblxuICBtaXhpbihJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIENvbnZlcnNpb24gdG8gb3RoZXIgdHlwZXNcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciBhcnJheSA9IG5ldyBBcnJheSh0aGlzLnNpemUgfHwgMCk7XG4gICAgICB0aGlzLnZhbHVlU2VxKCkuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGkpICB7IGFycmF5W2ldID0gdjsgfSk7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSxcblxuICAgIHRvSW5kZXhlZFNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFRvSW5kZXhlZFNlcXVlbmNlKHRoaXMpO1xuICAgIH0sXG5cbiAgICB0b0pTOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICBmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRvSlMgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b0pTKCkgOiB2YWx1ZX1cbiAgICAgICkuX190b0pTKCk7XG4gICAgfSxcblxuICAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLm1hcChcbiAgICAgICAgZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b0pTT04oKSA6IHZhbHVlfVxuICAgICAgKS5fX3RvSlMoKTtcbiAgICB9LFxuXG4gICAgdG9LZXllZFNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFRvS2V5ZWRTZXF1ZW5jZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgdG9NYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIHNyY19NYXBfX01hcCh0aGlzLnRvS2V5ZWRTZXEoKSk7XG4gICAgfSxcblxuICAgIHRvT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAgeyBvYmplY3Rba10gPSB2OyB9KTtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSxcblxuICAgIHRvT3JkZXJlZE1hcDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gT3JkZXJlZE1hcCh0aGlzLnRvS2V5ZWRTZXEoKSk7XG4gICAgfSxcblxuICAgIHRvT3JkZXJlZFNldDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gT3JkZXJlZFNldChpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gICAgfSxcblxuICAgIHRvU2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBzcmNfU2V0X19TZXQoaXNLZXllZCh0aGlzKSA/IHRoaXMudmFsdWVTZXEoKSA6IHRoaXMpO1xuICAgIH0sXG5cbiAgICB0b1NldFNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFRvU2V0U2VxdWVuY2UodGhpcyk7XG4gICAgfSxcblxuICAgIHRvU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpc0luZGV4ZWQodGhpcykgPyB0aGlzLnRvSW5kZXhlZFNlcSgpIDpcbiAgICAgICAgaXNLZXllZCh0aGlzKSA/IHRoaXMudG9LZXllZFNlcSgpIDpcbiAgICAgICAgdGhpcy50b1NldFNlcSgpO1xuICAgIH0sXG5cbiAgICB0b1N0YWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBTdGFjayhpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gICAgfSxcblxuICAgIHRvTGlzdDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gTGlzdChpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIENvbW1vbiBKYXZhU2NyaXB0IG1ldGhvZHMgYW5kIHByb3BlcnRpZXNcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnW0l0ZXJhYmxlXSc7XG4gICAgfSxcblxuICAgIF9fdG9TdHJpbmc6IGZ1bmN0aW9uKGhlYWQsIHRhaWwpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhlYWQgKyAnICcgKyB0aGlzLnRvU2VxKCkubWFwKHRoaXMuX190b1N0cmluZ01hcHBlcikuam9pbignLCAnKSArICcgJyArIHRhaWw7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gICAgY29uY2F0OiBmdW5jdGlvbigpIHt2YXIgdmFsdWVzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgY29uY2F0RmFjdG9yeSh0aGlzLCB2YWx1ZXMpKTtcbiAgICB9LFxuXG4gICAgY29udGFpbnM6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmNsdWRlcyhzZWFyY2hWYWx1ZSk7XG4gICAgfSxcblxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc29tZShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBlbnRyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTKTtcbiAgICB9LFxuXG4gICAgZXZlcnk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAoIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZpbHRlckZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCB0cnVlKSk7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IHRoaXMuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICByZXR1cm4gZW50cnkgPyBlbnRyeVsxXSA6IG5vdFNldFZhbHVlO1xuICAgIH0sXG5cbiAgICBmaW5kRW50cnk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgdmFyIGZvdW5kO1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgZm91bmQgPSBbaywgdl07XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9LFxuXG4gICAgZmluZExhc3RFbnRyeTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5maW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgZm9yRWFjaDogZnVuY3Rpb24oc2lkZUVmZmVjdCwgY29udGV4dCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0ZShjb250ZXh0ID8gc2lkZUVmZmVjdC5iaW5kKGNvbnRleHQpIDogc2lkZUVmZmVjdCk7XG4gICAgfSxcblxuICAgIGpvaW46IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHNlcGFyYXRvciA9IHNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gJycgKyBzZXBhcmF0b3IgOiAnLCc7XG4gICAgICB2YXIgam9pbmVkID0gJyc7XG4gICAgICB2YXIgaXNGaXJzdCA9IHRydWU7XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2ICkge1xuICAgICAgICBpc0ZpcnN0ID8gKGlzRmlyc3QgPSBmYWxzZSkgOiAoam9pbmVkICs9IHNlcGFyYXRvcik7XG4gICAgICAgIGpvaW5lZCArPSB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZCA/IHYudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gam9pbmVkO1xuICAgIH0sXG5cbiAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9LRVlTKTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBtYXBGYWN0b3J5KHRoaXMsIG1hcHBlciwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICByZWR1Y2U6IGZ1bmN0aW9uKHJlZHVjZXIsIGluaXRpYWxSZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgcmVkdWN0aW9uO1xuICAgICAgdmFyIHVzZUZpcnN0O1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHVzZUZpcnN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZHVjdGlvbiA9IGluaXRpYWxSZWR1Y3Rpb247XG4gICAgICB9XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAodXNlRmlyc3QpIHtcbiAgICAgICAgICB1c2VGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIHJlZHVjdGlvbiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVkdWN0aW9uID0gcmVkdWNlci5jYWxsKGNvbnRleHQsIHJlZHVjdGlvbiwgdiwgaywgYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlZHVjdGlvbjtcbiAgICB9LFxuXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uKHJlZHVjZXIsIGluaXRpYWxSZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXZlcnNlZCA9IHRoaXMudG9LZXllZFNlcSgpLnJldmVyc2UoKTtcbiAgICAgIHJldHVybiByZXZlcnNlZC5yZWR1Y2UuYXBwbHkocmV2ZXJzZWQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHJldmVyc2VGYWN0b3J5KHRoaXMsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgc2xpY2U6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzbGljZUZhY3RvcnkodGhpcywgYmVnaW4sIGVuZCwgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBzb21lOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiAhdGhpcy5ldmVyeShub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIHNvcnQ6IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKSk7XG4gICAgfSxcblxuICAgIHZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICAgIGJ1dExhc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgLTEpO1xuICAgIH0sXG5cbiAgICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemUgIT09IHVuZGVmaW5lZCA/IHRoaXMuc2l6ZSA9PT0gMCA6ICF0aGlzLnNvbWUoZnVuY3Rpb24oKSAge3JldHVybiB0cnVlfSk7XG4gICAgfSxcblxuICAgIGNvdW50OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBlbnN1cmVTaXplKFxuICAgICAgICBwcmVkaWNhdGUgPyB0aGlzLnRvU2VxKCkuZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCkgOiB0aGlzXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb3VudEJ5OiBmdW5jdGlvbihncm91cGVyLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gY291bnRCeUZhY3RvcnkodGhpcywgZ3JvdXBlciwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGVxdWFsczogZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIHJldHVybiBkZWVwRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH0sXG5cbiAgICBlbnRyeVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaXRlcmFibGUgPSB0aGlzO1xuICAgICAgaWYgKGl0ZXJhYmxlLl9jYWNoZSkge1xuICAgICAgICAvLyBXZSBjYWNoZSBhcyBhbiBlbnRyaWVzIGFycmF5LCBzbyB3ZSBjYW4ganVzdCByZXR1cm4gdGhlIGNhY2hlIVxuICAgICAgICByZXR1cm4gbmV3IEFycmF5U2VxKGl0ZXJhYmxlLl9jYWNoZSk7XG4gICAgICB9XG4gICAgICB2YXIgZW50cmllc1NlcXVlbmNlID0gaXRlcmFibGUudG9TZXEoKS5tYXAoZW50cnlNYXBwZXIpLnRvSW5kZXhlZFNlcSgpO1xuICAgICAgZW50cmllc1NlcXVlbmNlLmZyb21FbnRyeVNlcSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gaXRlcmFibGUudG9TZXEoKX07XG4gICAgICByZXR1cm4gZW50cmllc1NlcXVlbmNlO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJOb3Q6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgZmluZExhc3Q6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKS5yZXZlcnNlKCkuZmluZChwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKTtcbiAgICB9LFxuXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZChyZXR1cm5UcnVlKTtcbiAgICB9LFxuXG4gICAgZmxhdE1hcDogZnVuY3Rpb24obWFwcGVyLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdE1hcEZhY3RvcnkodGhpcywgbWFwcGVyLCBjb250ZXh0KSk7XG4gICAgfSxcblxuICAgIGZsYXR0ZW46IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdHRlbkZhY3RvcnkodGhpcywgZGVwdGgsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgZnJvbUVudHJ5U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRnJvbUVudHJpZXNTZXF1ZW5jZSh0aGlzKTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbihzZWFyY2hLZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKGZ1bmN0aW9uKF8sIGtleSkgIHtyZXR1cm4gaXMoa2V5LCBzZWFyY2hLZXkpfSwgdW5kZWZpbmVkLCBub3RTZXRWYWx1ZSk7XG4gICAgfSxcblxuICAgIGdldEluOiBmdW5jdGlvbihzZWFyY2hLZXlQYXRoLCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIG5lc3RlZCA9IHRoaXM7XG4gICAgICAvLyBOb3RlOiBpbiBhbiBFUzYgZW52aXJvbm1lbnQsIHdlIHdvdWxkIHByZWZlcjpcbiAgICAgIC8vIGZvciAodmFyIGtleSBvZiBzZWFyY2hLZXlQYXRoKSB7XG4gICAgICB2YXIgaXRlciA9IGZvcmNlSXRlcmF0b3Ioc2VhcmNoS2V5UGF0aCk7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyLm5leHQoKSkuZG9uZSkge1xuICAgICAgICB2YXIga2V5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmVzdGVkID0gbmVzdGVkICYmIG5lc3RlZC5nZXQgPyBuZXN0ZWQuZ2V0KGtleSwgTk9UX1NFVCkgOiBOT1RfU0VUO1xuICAgICAgICBpZiAobmVzdGVkID09PSBOT1RfU0VUKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmVzdGVkO1xuICAgIH0sXG5cbiAgICBncm91cEJ5OiBmdW5jdGlvbihncm91cGVyLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gZ3JvdXBCeUZhY3RvcnkodGhpcywgZ3JvdXBlciwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24oc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoc2VhcmNoS2V5LCBOT1RfU0VUKSAhPT0gTk9UX1NFVDtcbiAgICB9LFxuXG4gICAgaGFzSW46IGZ1bmN0aW9uKHNlYXJjaEtleVBhdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEluKHNlYXJjaEtleVBhdGgsIE5PVF9TRVQpICE9PSBOT1RfU0VUO1xuICAgIH0sXG5cbiAgICBpc1N1YnNldDogZnVuY3Rpb24oaXRlcikge1xuICAgICAgaXRlciA9IHR5cGVvZiBpdGVyLmluY2x1ZGVzID09PSAnZnVuY3Rpb24nID8gaXRlciA6IEl0ZXJhYmxlKGl0ZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuZXZlcnkoZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIGl0ZXIuaW5jbHVkZXModmFsdWUpfSk7XG4gICAgfSxcblxuICAgIGlzU3VwZXJzZXQ6IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIGl0ZXIgPSB0eXBlb2YgaXRlci5pc1N1YnNldCA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXIgOiBJdGVyYWJsZShpdGVyKTtcbiAgICAgIHJldHVybiBpdGVyLmlzU3Vic2V0KHRoaXMpO1xuICAgIH0sXG5cbiAgICBrZXlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5tYXAoa2V5TWFwcGVyKS50b0luZGV4ZWRTZXEoKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5maXJzdCgpO1xuICAgIH0sXG5cbiAgICBtYXg6IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpO1xuICAgIH0sXG5cbiAgICBtYXhCeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yLCBtYXBwZXIpO1xuICAgIH0sXG5cbiAgICBtaW46IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvcik7XG4gICAgfSxcblxuICAgIG1pbkJ5OiBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvciwgbWFwcGVyKTtcbiAgICB9LFxuXG4gICAgcmVzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZSgxKTtcbiAgICB9LFxuXG4gICAgc2tpcDogZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZShNYXRoLm1heCgwLCBhbW91bnQpKTtcbiAgICB9LFxuXG4gICAgc2tpcExhc3Q6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHRoaXMudG9TZXEoKS5yZXZlcnNlKCkuc2tpcChhbW91bnQpLnJldmVyc2UoKSk7XG4gICAgfSxcblxuICAgIHNraXBXaGlsZTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgc2tpcFVudGlsOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNraXBXaGlsZShub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIHNvcnRCeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfSxcblxuICAgIHRha2U6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW1vdW50KSk7XG4gICAgfSxcblxuICAgIHRha2VMYXN0OiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0aGlzLnRvU2VxKCkucmV2ZXJzZSgpLnRha2UoYW1vdW50KS5yZXZlcnNlKCkpO1xuICAgIH0sXG5cbiAgICB0YWtlV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHRha2VXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHRha2VVbnRpbDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy50YWtlV2hpbGUobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICB2YWx1ZVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0luZGV4ZWRTZXEoKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgSGFzaGFibGUgT2JqZWN0XG5cbiAgICBoYXNoQ29kZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2hhc2ggfHwgKHRoaXMuX19oYXNoID0gaGFzaEl0ZXJhYmxlKHRoaXMpKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgSW50ZXJuYWxcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0ZShmbiwgcmV2ZXJzZSlcblxuICAgIC8vIGFic3RyYWN0IF9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSlcbiAgfSk7XG5cbiAgLy8gdmFyIElTX0lURVJBQkxFX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfSVRFUkFCTEVfX0BAJztcbiAgLy8gdmFyIElTX0tFWUVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfS0VZRURfX0BAJztcbiAgLy8gdmFyIElTX0lOREVYRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JTkRFWEVEX19AQCc7XG4gIC8vIHZhciBJU19PUkRFUkVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfT1JERVJFRF9fQEAnO1xuXG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVNfSVRFUkFCTEVfU0VOVElORUxdID0gdHJ1ZTtcbiAgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IEl0ZXJhYmxlUHJvdG90eXBlLnZhbHVlcztcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b0pTID0gSXRlcmFibGVQcm90b3R5cGUudG9BcnJheTtcbiAgSXRlcmFibGVQcm90b3R5cGUuX190b1N0cmluZ01hcHBlciA9IHF1b3RlU3RyaW5nO1xuICBJdGVyYWJsZVByb3RvdHlwZS5pbnNwZWN0ID1cbiAgSXRlcmFibGVQcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfTtcbiAgSXRlcmFibGVQcm90b3R5cGUuY2hhaW4gPSBJdGVyYWJsZVByb3RvdHlwZS5mbGF0TWFwO1xuXG4gIC8vIFRlbXBvcmFyeSB3YXJuaW5nIGFib3V0IHVzaW5nIGxlbmd0aFxuICAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghSXRlcmFibGUubm9MZW5ndGhXYXJuaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2s7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhY2suaW5kZXhPZignX3dyYXBPYmplY3QnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICdpdGVyYWJsZS5sZW5ndGggaGFzIGJlZW4gZGVwcmVjYXRlZCwgJytcbiAgICAgICAgICAgICAgICAndXNlIGl0ZXJhYmxlLnNpemUgb3IgaXRlcmFibGUuY291bnQoKS4gJytcbiAgICAgICAgICAgICAgICAnVGhpcyB3YXJuaW5nIHdpbGwgYmVjb21lIGEgc2lsZW50IGVycm9yIGluIGEgZnV0dXJlIHZlcnNpb24uICcgK1xuICAgICAgICAgICAgICAgIHN0YWNrXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9KSgpO1xuXG5cblxuICBtaXhpbihLZXllZEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICAgIGZsaXA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsaXBGYWN0b3J5KHRoaXMpKTtcbiAgICB9LFxuXG4gICAgZmluZEtleTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzBdO1xuICAgIH0sXG5cbiAgICBmaW5kTGFzdEtleTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLnJldmVyc2UoKS5maW5kS2V5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGtleU9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEtleShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBsYXN0S2V5T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kTGFzdEtleShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBtYXBFbnRyaWVzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkubWFwKFxuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIG1hcHBlci5jYWxsKGNvbnRleHQsIFtrLCB2XSwgaXRlcmF0aW9ucysrLCB0aGlzJDApfVxuICAgICAgICApLmZyb21FbnRyeVNlcSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBtYXBLZXlzOiBmdW5jdGlvbihtYXBwZXIsIGNvbnRleHQpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLFxuICAgICAgICB0aGlzLnRvU2VxKCkuZmxpcCgpLm1hcChcbiAgICAgICAgICBmdW5jdGlvbihrLCB2KSAge3JldHVybiBtYXBwZXIuY2FsbChjb250ZXh0LCBrLCB2LCB0aGlzJDApfVxuICAgICAgICApLmZsaXAoKVxuICAgICAgKTtcbiAgICB9LFxuXG4gIH0pO1xuXG4gIHZhciBLZXllZEl0ZXJhYmxlUHJvdG90eXBlID0gS2V5ZWRJdGVyYWJsZS5wcm90b3R5cGU7XG4gIEtleWVkSXRlcmFibGVQcm90b3R5cGVbSVNfS0VZRURfU0VOVElORUxdID0gdHJ1ZTtcbiAgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl9TWU1CT0xdID0gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcztcbiAgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZS5fX3RvSlMgPSBJdGVyYWJsZVByb3RvdHlwZS50b09iamVjdDtcbiAgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZS5fX3RvU3RyaW5nTWFwcGVyID0gZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoaykgKyAnOiAnICsgcXVvdGVTdHJpbmcodil9O1xuXG5cblxuICBtaXhpbihJbmRleGVkSXRlcmFibGUsIHtcblxuICAgIC8vICMjIyBDb252ZXJzaW9uIHRvIG90aGVyIHR5cGVzXG5cbiAgICB0b0tleWVkU2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgVG9LZXllZFNlcXVlbmNlKHRoaXMsIGZhbHNlKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgRVM2IENvbGxlY3Rpb24gbWV0aG9kcyAoRVM2IEFycmF5IGFuZCBNYXApXG5cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZpbHRlckZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5maW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBlbnRyeSA/IGVudHJ5WzBdIDogLTE7XG4gICAgfSxcblxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy50b0tleWVkU2VxKCkua2V5T2Yoc2VhcmNoVmFsdWUpO1xuICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gLTEgOiBrZXk7XG4gICAgfSxcblxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5yZXZlcnNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSk7XG4gICAgfSxcblxuICAgIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHJldmVyc2VGYWN0b3J5KHRoaXMsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIHNsaWNlOiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2xpY2VGYWN0b3J5KHRoaXMsIGJlZ2luLCBlbmQsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIHNwbGljZTogZnVuY3Rpb24oaW5kZXgsIHJlbW92ZU51bSAvKiwgLi4udmFsdWVzKi8pIHtcbiAgICAgIHZhciBudW1BcmdzID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHJlbW92ZU51bSA9IE1hdGgubWF4KHJlbW92ZU51bSB8IDAsIDApO1xuICAgICAgaWYgKG51bUFyZ3MgPT09IDAgfHwgKG51bUFyZ3MgPT09IDIgJiYgIXJlbW92ZU51bSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpbmRleCA9IHJlc29sdmVCZWdpbihpbmRleCwgdGhpcy5zaXplKTtcbiAgICAgIHZhciBzcGxpY2VkID0gdGhpcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICByZXR1cm4gcmVpZnkoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIG51bUFyZ3MgPT09IDEgP1xuICAgICAgICAgIHNwbGljZWQgOlxuICAgICAgICAgIHNwbGljZWQuY29uY2F0KGFyckNvcHkoYXJndW1lbnRzLCAyKSwgdGhpcy5zbGljZShpbmRleCArIHJlbW92ZU51bSkpXG4gICAgICApO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBNb3JlIGNvbGxlY3Rpb24gbWV0aG9kc1xuXG4gICAgZmluZExhc3RJbmRleDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy50b0tleWVkU2VxKCkuZmluZExhc3RLZXkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IC0xIDoga2V5O1xuICAgIH0sXG5cbiAgICBmaXJzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoMCk7XG4gICAgfSxcblxuICAgIGZsYXR0ZW46IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdHRlbkZhY3RvcnkodGhpcywgZGVwdGgsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICByZXR1cm4gKGluZGV4IDwgMCB8fCAodGhpcy5zaXplID09PSBJbmZpbml0eSB8fFxuICAgICAgICAgICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCAmJiBpbmRleCA+IHRoaXMuc2l6ZSkpKSA/XG4gICAgICAgIG5vdFNldFZhbHVlIDpcbiAgICAgICAgdGhpcy5maW5kKGZ1bmN0aW9uKF8sIGtleSkgIHtyZXR1cm4ga2V5ID09PSBpbmRleH0sIHVuZGVmaW5lZCwgbm90U2V0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiAodGhpcy5zaXplICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLnNpemUgPT09IEluZmluaXR5IHx8IGluZGV4IDwgdGhpcy5zaXplIDpcbiAgICAgICAgdGhpcy5pbmRleE9mKGluZGV4KSAhPT0gLTFcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGludGVycG9zZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgaW50ZXJwb3NlRmFjdG9yeSh0aGlzLCBzZXBhcmF0b3IpKTtcbiAgICB9LFxuXG4gICAgaW50ZXJsZWF2ZTogZnVuY3Rpb24oLyouLi5pdGVyYWJsZXMqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IFt0aGlzXS5jb25jYXQoYXJyQ29weShhcmd1bWVudHMpKTtcbiAgICAgIHZhciB6aXBwZWQgPSB6aXBXaXRoRmFjdG9yeSh0aGlzLnRvU2VxKCksIEluZGV4ZWRTZXEub2YsIGl0ZXJhYmxlcyk7XG4gICAgICB2YXIgaW50ZXJsZWF2ZWQgPSB6aXBwZWQuZmxhdHRlbih0cnVlKTtcbiAgICAgIGlmICh6aXBwZWQuc2l6ZSkge1xuICAgICAgICBpbnRlcmxlYXZlZC5zaXplID0gemlwcGVkLnNpemUgKiBpdGVyYWJsZXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGludGVybGVhdmVkKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoLTEpO1xuICAgIH0sXG5cbiAgICBza2lwV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNraXBXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICB6aXA6IGZ1bmN0aW9uKC8qLCAuLi5pdGVyYWJsZXMgKi8pIHtcbiAgICAgIHZhciBpdGVyYWJsZXMgPSBbdGhpc10uY29uY2F0KGFyckNvcHkoYXJndW1lbnRzKSk7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgemlwV2l0aEZhY3RvcnkodGhpcywgZGVmYXVsdFppcHBlciwgaXRlcmFibGVzKSk7XG4gICAgfSxcblxuICAgIHppcFdpdGg6IGZ1bmN0aW9uKHppcHBlci8qLCAuLi5pdGVyYWJsZXMgKi8pIHtcbiAgICAgIHZhciBpdGVyYWJsZXMgPSBhcnJDb3B5KGFyZ3VtZW50cyk7XG4gICAgICBpdGVyYWJsZXNbMF0gPSB0aGlzO1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHppcFdpdGhGYWN0b3J5KHRoaXMsIHppcHBlciwgaXRlcmFibGVzKSk7XG4gICAgfSxcblxuICB9KTtcblxuICBJbmRleGVkSXRlcmFibGUucHJvdG90eXBlW0lTX0lOREVYRURfU0VOVElORUxdID0gdHJ1ZTtcbiAgSW5kZXhlZEl0ZXJhYmxlLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuXG4gIG1peGluKFNldEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgRVM2IENvbGxlY3Rpb24gbWV0aG9kcyAoRVM2IEFycmF5IGFuZCBNYXApXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKHZhbHVlLCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKHZhbHVlKSA/IHZhbHVlIDogbm90U2V0VmFsdWU7XG4gICAgfSxcblxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKHZhbHVlKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICAgIGtleVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVNlcSgpO1xuICAgIH0sXG5cbiAgfSk7XG5cbiAgU2V0SXRlcmFibGUucHJvdG90eXBlLmhhcyA9IEl0ZXJhYmxlUHJvdG90eXBlLmluY2x1ZGVzO1xuXG5cbiAgLy8gTWl4aW4gc3ViY2xhc3Nlc1xuXG4gIG1peGluKEtleWVkU2VxLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRTZXEsIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGUpO1xuICBtaXhpbihTZXRTZXEsIFNldEl0ZXJhYmxlLnByb3RvdHlwZSk7XG5cbiAgbWl4aW4oS2V5ZWRDb2xsZWN0aW9uLCBLZXllZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKEluZGV4ZWRDb2xsZWN0aW9uLCBJbmRleGVkSXRlcmFibGUucHJvdG90eXBlKTtcbiAgbWl4aW4oU2V0Q29sbGVjdGlvbiwgU2V0SXRlcmFibGUucHJvdG90eXBlKTtcblxuXG4gIC8vICNwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGtleU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIGs7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRyeU1hcHBlcih2LCBrKSB7XG4gICAgcmV0dXJuIFtrLCB2XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZyhwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gLXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHF1b3RlU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRaaXBwZXIoKSB7XG4gICAgcmV0dXJuIGFyckNvcHkoYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHROZWdDb21wYXJhdG9yKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAxIDogYSA+IGIgPyAtMSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoSXRlcmFibGUoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUuc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgb3JkZXJlZCA9IGlzT3JkZXJlZChpdGVyYWJsZSk7XG4gICAgdmFyIGtleWVkID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGggPSBvcmRlcmVkID8gMSA6IDA7XG4gICAgdmFyIHNpemUgPSBpdGVyYWJsZS5fX2l0ZXJhdGUoXG4gICAgICBrZXllZCA/XG4gICAgICAgIG9yZGVyZWQgP1xuICAgICAgICAgIGZ1bmN0aW9uKHYsIGspICB7IGggPSAzMSAqIGggKyBoYXNoTWVyZ2UoaGFzaCh2KSwgaGFzaChrKSkgfCAwOyB9IDpcbiAgICAgICAgICBmdW5jdGlvbih2LCBrKSAgeyBoID0gaCArIGhhc2hNZXJnZShoYXNoKHYpLCBoYXNoKGspKSB8IDA7IH0gOlxuICAgICAgICBvcmRlcmVkID9cbiAgICAgICAgICBmdW5jdGlvbih2ICkgeyBoID0gMzEgKiBoICsgaGFzaCh2KSB8IDA7IH0gOlxuICAgICAgICAgIGZ1bmN0aW9uKHYgKSB7IGggPSBoICsgaGFzaCh2KSB8IDA7IH1cbiAgICApO1xuICAgIHJldHVybiBtdXJtdXJIYXNoT2ZTaXplKHNpemUsIGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbXVybXVySGFzaE9mU2l6ZShzaXplLCBoKSB7XG4gICAgaCA9IHNyY19NYXRoX19pbXVsKGgsIDB4Q0M5RTJENTEpO1xuICAgIGggPSBzcmNfTWF0aF9faW11bChoIDw8IDE1IHwgaCA+Pj4gLTE1LCAweDFCODczNTkzKTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCA8PCAxMyB8IGggPj4+IC0xMywgNSk7XG4gICAgaCA9IChoICsgMHhFNjU0NkI2NCB8IDApIF4gc2l6ZTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCBeIGggPj4+IDE2LCAweDg1RUJDQTZCKTtcbiAgICBoID0gc3JjX01hdGhfX2ltdWwoaCBeIGggPj4+IDEzLCAweEMyQjJBRTM1KTtcbiAgICBoID0gc21pKGggXiBoID4+PiAxNik7XG4gICAgcmV0dXJuIGg7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoTWVyZ2UoYSwgYikge1xuICAgIHJldHVybiBhIF4gYiArIDB4OUUzNzc5QjkgKyAoYSA8PCA2KSArIChhID4+IDIpIHwgMDsgLy8gaW50XG4gIH1cblxuICB2YXIgSW1tdXRhYmxlID0ge1xuXG4gICAgSXRlcmFibGU6IEl0ZXJhYmxlLFxuXG4gICAgU2VxOiBTZXEsXG4gICAgQ29sbGVjdGlvbjogQ29sbGVjdGlvbixcbiAgICBNYXA6IHNyY19NYXBfX01hcCxcbiAgICBPcmRlcmVkTWFwOiBPcmRlcmVkTWFwLFxuICAgIExpc3Q6IExpc3QsXG4gICAgU3RhY2s6IFN0YWNrLFxuICAgIFNldDogc3JjX1NldF9fU2V0LFxuICAgIE9yZGVyZWRTZXQ6IE9yZGVyZWRTZXQsXG5cbiAgICBSZWNvcmQ6IFJlY29yZCxcbiAgICBSYW5nZTogUmFuZ2UsXG4gICAgUmVwZWF0OiBSZXBlYXQsXG5cbiAgICBpczogaXMsXG4gICAgZnJvbUpTOiBmcm9tSlMsXG5cbiAgfTtcblxuICByZXR1cm4gSW1tdXRhYmxlO1xuXG59KSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1XG4gKiovIiwidmFyIGN1cnJ5TiA9IHJlcXVpcmUoJ3JhbWRhL3NyYy9jdXJyeU4nKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xufVxuXG4vLyBHbG9iYWxzXG52YXIgdG9VcGRhdGUgPSBbXTtcbnZhciBpblN0cmVhbTtcblxuZnVuY3Rpb24gbWFwKGYsIHMpIHtcbiAgcmV0dXJuIHN0cmVhbShbc10sIGZ1bmN0aW9uKHNlbGYpIHsgc2VsZihmKHMudmFsKSk7IH0pO1xufVxuXG5mdW5jdGlvbiBvbihmLCBzKSB7XG4gIHN0cmVhbShbc10sIGZ1bmN0aW9uKCkgeyBmKHMudmFsKTsgfSk7XG59XG5cbmZ1bmN0aW9uIGJvdW5kTWFwKGYpIHsgcmV0dXJuIG1hcChmLCB0aGlzKTsgfVxuXG52YXIgc2NhbiA9IGN1cnJ5TigzLCBmdW5jdGlvbihmLCBhY2MsIHMpIHtcbiAgdmFyIG5zID0gc3RyZWFtKFtzXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChhY2MgPSBmKGFjYywgcygpKSk7XG4gIH0pO1xuICBpZiAoIW5zLmhhc1ZhbCkgbnMoYWNjKTtcbiAgcmV0dXJuIG5zO1xufSk7XG5cbnZhciBtZXJnZSA9IGN1cnJ5TigyLCBmdW5jdGlvbihzMSwgczIpIHtcbiAgdmFyIHMgPSBpbW1lZGlhdGUoc3RyZWFtKFtzMSwgczJdLCBmdW5jdGlvbihuLCBjaGFuZ2VkKSB7XG4gICAgcmV0dXJuIGNoYW5nZWRbMF0gPyBjaGFuZ2VkWzBdKClcbiAgICAgICAgIDogczEuaGFzVmFsICA/IHMxKClcbiAgICAgICAgICAgICAgICAgICAgICA6IHMyKCk7XG4gIH0pKTtcbiAgZW5kc09uKHN0cmVhbShbczEuZW5kLCBzMi5lbmRdLCBmdW5jdGlvbihzZWxmLCBjaGFuZ2VkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pLCBzKTtcbiAgcmV0dXJuIHM7XG59KTtcblxuZnVuY3Rpb24gYXAoczIpIHtcbiAgdmFyIHMxID0gdGhpcztcbiAgcmV0dXJuIHN0cmVhbShbczEsIHMyXSwgZnVuY3Rpb24oKSB7IHJldHVybiBzMSgpKHMyKCkpOyB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbERlcHNOb3RNZXQoc3RyZWFtKSB7XG4gIHN0cmVhbS5kZXBzTWV0ID0gc3RyZWFtLmRlcHMuZXZlcnkoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLmhhc1ZhbDtcbiAgfSk7XG4gIHJldHVybiAhc3RyZWFtLmRlcHNNZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0cmVhbShzKSB7XG4gIGlmICgocy5kZXBzTWV0ICE9PSB0cnVlICYmIGluaXRpYWxEZXBzTm90TWV0KHMpKSB8fFxuICAgICAgKHMuZW5kICE9PSB1bmRlZmluZWQgJiYgcy5lbmQudmFsID09PSB0cnVlKSkgcmV0dXJuO1xuICBpZiAoaW5TdHJlYW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRvVXBkYXRlLnB1c2gocyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGluU3RyZWFtID0gcztcbiAgdmFyIHJldHVyblZhbCA9IHMuZm4ocywgcy5kZXBzQ2hhbmdlZCk7XG4gIGlmIChyZXR1cm5WYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHMocmV0dXJuVmFsKTtcbiAgfVxuICBpblN0cmVhbSA9IHVuZGVmaW5lZDtcbiAgaWYgKHMuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkgcy5kZXBzQ2hhbmdlZCA9IFtdO1xuICBzLnNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICBpZiAoZmx1c2hpbmcgPT09IGZhbHNlKSBmbHVzaFVwZGF0ZSgpO1xufVxuXG52YXIgb3JkZXIgPSBbXTtcbnZhciBvcmRlck5leHRJZHggPSAtMTtcblxuZnVuY3Rpb24gZmluZERlcHMocykge1xuICB2YXIgaSwgbGlzdGVuZXJzID0gcy5saXN0ZW5lcnM7XG4gIGlmIChzLnF1ZXVlZCA9PT0gZmFsc2UpIHtcbiAgICBzLnF1ZXVlZCA9IHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgZmluZERlcHMobGlzdGVuZXJzW2ldKTtcbiAgICB9XG4gICAgb3JkZXJbKytvcmRlck5leHRJZHhdID0gcztcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEZXBzKHMpIHtcbiAgdmFyIGksIG8sIGxpc3QsIGxpc3RlbmVycyA9IHMubGlzdGVuZXJzO1xuICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgbGlzdCA9IGxpc3RlbmVyc1tpXTtcbiAgICBpZiAobGlzdC5lbmQgPT09IHMpIHtcbiAgICAgIGVuZFN0cmVhbShsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxpc3QuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkgbGlzdC5kZXBzQ2hhbmdlZC5wdXNoKHMpO1xuICAgICAgbGlzdC5zaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgZmluZERlcHMobGlzdCk7XG4gICAgfVxuICB9XG4gIGZvciAoOyBvcmRlck5leHRJZHggPj0gMDsgLS1vcmRlck5leHRJZHgpIHtcbiAgICBvID0gb3JkZXJbb3JkZXJOZXh0SWR4XTtcbiAgICBpZiAoby5zaG91bGRVcGRhdGUgPT09IHRydWUpIHVwZGF0ZVN0cmVhbShvKTtcbiAgICBvLnF1ZXVlZCA9IGZhbHNlO1xuICB9XG59XG5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaFVwZGF0ZSgpIHtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB3aGlsZSAodG9VcGRhdGUubGVuZ3RoID4gMCkge1xuICAgIHZhciBzID0gdG9VcGRhdGUuc2hpZnQoKTtcbiAgICBpZiAocy52YWxzLmxlbmd0aCA+IDApIHMudmFsID0gcy52YWxzLnNoaWZ0KCk7XG4gICAgdXBkYXRlRGVwcyhzKTtcbiAgfVxuICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1N0cmVhbShzdHJlYW0pIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oc3RyZWFtKSAmJiAnaGFzVmFsJyBpbiBzdHJlYW07XG59XG5cbmZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKCkge1xuICByZXR1cm4gJ3N0cmVhbSgnICsgdGhpcy52YWwgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0cmVhbVZhbHVlKHMsIG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCAmJiBuICE9PSBudWxsICYmIGlzRnVuY3Rpb24obi50aGVuKSkge1xuICAgIG4udGhlbihzKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcy52YWwgPSBuO1xuICBzLmhhc1ZhbCA9IHRydWU7XG4gIGlmIChpblN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIHVwZGF0ZURlcHMocyk7XG4gICAgaWYgKHRvVXBkYXRlLmxlbmd0aCA+IDApIGZsdXNoVXBkYXRlKCk7IGVsc2UgZmx1c2hpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpblN0cmVhbSA9PT0gcykge1xuICAgIG1hcmtMaXN0ZW5lcnMocywgcy5saXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIHMudmFscy5wdXNoKG4pO1xuICAgIHRvVXBkYXRlLnB1c2gocyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0xpc3RlbmVycyhzLCBsaXN0cykge1xuICB2YXIgaSwgbGlzdDtcbiAgZm9yIChpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgbGlzdCA9IGxpc3RzW2ldO1xuICAgIGlmIChsaXN0LmVuZCAhPT0gcykge1xuICAgICAgaWYgKGxpc3QuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaXN0LmRlcHNDaGFuZ2VkLnB1c2gocyk7XG4gICAgICB9XG4gICAgICBsaXN0LnNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZFN0cmVhbShsaXN0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKCkge1xuICBmdW5jdGlvbiBzKG4pIHtcbiAgICB2YXIgaSwgbGlzdDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHMudmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTdHJlYW1WYWx1ZShzLCBuKTtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfVxuICBzLmhhc1ZhbCA9IGZhbHNlO1xuICBzLnZhbCA9IHVuZGVmaW5lZDtcbiAgcy52YWxzID0gW107XG4gIHMubGlzdGVuZXJzID0gW107XG4gIHMucXVldWVkID0gZmFsc2U7XG4gIHMuZW5kID0gdW5kZWZpbmVkO1xuXG4gIHMubWFwID0gYm91bmRNYXA7XG4gIHMuYXAgPSBhcDtcbiAgcy5vZiA9IHN0cmVhbTtcbiAgcy50b1N0cmluZyA9IHN0cmVhbVRvU3RyaW5nO1xuXG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZGVwcywgcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyArK2kpIHtcbiAgICBkZXBzW2ldLmxpc3RlbmVycy5wdXNoKHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcGVuZGVudFN0cmVhbShkZXBzLCBmbikge1xuICB2YXIgaSwgcyA9IGNyZWF0ZVN0cmVhbSgpO1xuICBzLmZuID0gZm47XG4gIHMuZGVwcyA9IGRlcHM7XG4gIHMuZGVwc01ldCA9IGZhbHNlO1xuICBzLmRlcHNDaGFuZ2VkID0gZm4ubGVuZ3RoID4gMSA/IFtdIDogdW5kZWZpbmVkO1xuICBzLnNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICBhZGRMaXN0ZW5lcnMoZGVwcywgcyk7XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBpbW1lZGlhdGUocykge1xuICBpZiAocy5kZXBzTWV0ID09PSBmYWxzZSkge1xuICAgIHMuZGVwc01ldCA9IHRydWU7XG4gICAgdXBkYXRlU3RyZWFtKHMpO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihzLCBsaXN0ZW5lcnMpIHtcbiAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKHMpO1xuICBsaXN0ZW5lcnNbaWR4XSA9IGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV07XG4gIGxpc3RlbmVycy5sZW5ndGgtLTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoRGVwcyhzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcy5kZXBzLmxlbmd0aDsgKytpKSB7XG4gICAgcmVtb3ZlTGlzdGVuZXIocywgcy5kZXBzW2ldLmxpc3RlbmVycyk7XG4gIH1cbiAgcy5kZXBzLmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIGVuZFN0cmVhbShzKSB7XG4gIGlmIChzLmRlcHMgIT09IHVuZGVmaW5lZCkgZGV0YWNoRGVwcyhzKTtcbiAgaWYgKHMuZW5kICE9PSB1bmRlZmluZWQpIGRldGFjaERlcHMocy5lbmQpO1xufVxuXG5mdW5jdGlvbiBlbmRzT24oZW5kUywgcykge1xuICBkZXRhY2hEZXBzKHMuZW5kKTtcbiAgZW5kUy5saXN0ZW5lcnMucHVzaChzLmVuZCk7XG4gIHMuZW5kLmRlcHMucHVzaChlbmRTKTtcbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHRydWVGbigpIHsgcmV0dXJuIHRydWU7IH1cblxuZnVuY3Rpb24gc3RyZWFtKGFyZywgZm4pIHtcbiAgdmFyIGksIHMsIGRlcHMsIGRlcEVuZFN0cmVhbXM7XG4gIHZhciBlbmRTdHJlYW0gPSBjcmVhdGVEZXBlbmRlbnRTdHJlYW0oW10sIHRydWVGbik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGRlcHMgPSBbXTsgZGVwRW5kU3RyZWFtcyA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChhcmdbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZXBzLnB1c2goYXJnW2ldKTtcbiAgICAgICAgaWYgKGFyZ1tpXS5lbmQgIT09IHVuZGVmaW5lZCkgZGVwRW5kU3RyZWFtcy5wdXNoKGFyZ1tpXS5lbmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzID0gY3JlYXRlRGVwZW5kZW50U3RyZWFtKGRlcHMsIGZuKTtcbiAgICBzLmVuZCA9IGVuZFN0cmVhbTtcbiAgICBlbmRTdHJlYW0ubGlzdGVuZXJzLnB1c2gocyk7XG4gICAgYWRkTGlzdGVuZXJzKGRlcEVuZFN0cmVhbXMsIGVuZFN0cmVhbSk7XG4gICAgZW5kU3RyZWFtLmRlcHMgPSBkZXBFbmRTdHJlYW1zO1xuICAgIHVwZGF0ZVN0cmVhbShzKTtcbiAgfSBlbHNlIHtcbiAgICBzID0gY3JlYXRlU3RyZWFtKCk7XG4gICAgcy5lbmQgPSBlbmRTdHJlYW07XG4gICAgZW5kU3RyZWFtLmxpc3RlbmVycy5wdXNoKHMpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBzKGFyZyk7XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbnZhciB0cmFuc2R1Y2UgPSBjdXJyeU4oMiwgZnVuY3Rpb24oeGZvcm0sIHNvdXJjZSkge1xuICB4Zm9ybSA9IHhmb3JtKG5ldyBTdHJlYW1UcmFuc2Zvcm1lcigpKTtcbiAgcmV0dXJuIHN0cmVhbShbc291cmNlXSwgZnVuY3Rpb24oc2VsZikge1xuICAgIHZhciByZXMgPSB4Zm9ybVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSh1bmRlZmluZWQsIHNvdXJjZSgpKTtcbiAgICBpZiAocmVzICYmIHJlc1snQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgc2VsZi5lbmQodHJ1ZSk7XG4gICAgICByZXR1cm4gcmVzWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIFN0cmVhbVRyYW5zZm9ybWVyKCkgeyB9XG5TdHJlYW1UcmFuc2Zvcm1lci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBmdW5jdGlvbigpIHsgfTtcblN0cmVhbVRyYW5zZm9ybWVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24oKSB7IH07XG5TdHJlYW1UcmFuc2Zvcm1lci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihzLCB2KSB7IHJldHVybiB2OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RyZWFtOiBzdHJlYW0sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgdHJhbnNkdWNlOiB0cmFuc2R1Y2UsXG4gIG1lcmdlOiBtZXJnZSxcbiAgc2Nhbjogc2NhbixcbiAgZW5kc09uOiBlbmRzT24sXG4gIG1hcDogY3VycnlOKDIsIG1hcCksXG4gIG9uOiBjdXJyeU4oMiwgb24pLFxuICBjdXJyeU46IGN1cnJ5TixcbiAgaW1tZWRpYXRlOiBpbW1lZGlhdGUsXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmx5ZC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDNcbiAqKi8iLCJ2YXIgX18gPSByZXF1aXJlKCcuL19fJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9zbGljZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3NsaWNlJyk7XG52YXIgYXJpdHkgPSByZXF1aXJlKCcuL2FyaXR5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBlcXVpdmFsZW50IG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbiwgd2l0aCB0aGVcbiAqIHNwZWNpZmllZCBhcml0eS4gVGhlIGN1cnJpZWQgZnVuY3Rpb24gaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy5cbiAqIEZpcnN0LCBpdHMgYXJndW1lbnRzIG5lZWRuJ3QgYmUgcHJvdmlkZWQgb25lIGF0IGEgdGltZS4gSWYgYGdgIGlzXG4gKiBgUi5jdXJyeU4oMywgZilgLCB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxKSgyKSgzKWBcbiAqICAgLSBgZygxKSgyLCAzKWBcbiAqICAgLSBgZygxLCAyKSgzKWBcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqXG4gKiBTZWNvbmRseSwgdGhlIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgYFIuX19gIG1heSBiZSB1c2VkIHRvIHNwZWNpZnlcbiAqIFwiZ2Fwc1wiLCBhbGxvd2luZyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMsXG4gKiByZWdhcmRsZXNzIG9mIHRoZWlyIHBvc2l0aW9ucy4gSWYgYGdgIGlzIGFzIGFib3ZlIGFuZCBgX2AgaXMgYFIuX19gLFxuICogdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBmb3IgdGhlIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFkZEZvdXJOdW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgcmV0dXJuIFIuc3VtKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCA0KSk7XG4gKiAgICAgIH07XG4gKlxuICogICAgICB2YXIgY3VycmllZEFkZEZvdXJOdW1iZXJzID0gUi5jdXJyeU4oNCwgYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBjdXJyeU4obGVuZ3RoLCBmbikge1xuICByZXR1cm4gYXJpdHkobGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIHNob3J0ZmFsbCA9IGxlbmd0aCAtIG47XG4gICAgdmFyIGlkeCA9IG47XG4gICAgd2hpbGUgKC0taWR4ID49IDApIHtcbiAgICAgIGlmIChhcmd1bWVudHNbaWR4XSA9PT0gX18pIHtcbiAgICAgICAgc2hvcnRmYWxsICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG9ydGZhbGwgPD0gMCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbml0aWFsQXJncyA9IF9zbGljZShhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGN1cnJ5TihzaG9ydGZhbGwsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudEFyZ3MgPSBfc2xpY2UoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNvbWJpbmVkQXJncyA9IFtdO1xuICAgICAgICB2YXIgaWR4ID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2lkeCA8IG4pIHtcbiAgICAgICAgICB2YXIgdmFsID0gaW5pdGlhbEFyZ3NbaWR4XTtcbiAgICAgICAgICBjb21iaW5lZEFyZ3NbaWR4XSA9ICh2YWwgPT09IF9fID8gY3VycmVudEFyZ3Muc2hpZnQoKSA6IHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGNvbWJpbmVkQXJncy5jb25jYXQoY3VycmVudEFyZ3MpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZseWQvfi9yYW1kYS9zcmMvY3VycnlOLmpzXG4gKiogbW9kdWxlIGlkID0gMTYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiAzXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgdXNlZCB0byBzcGVjaWZ5IFwiZ2Fwc1wiIHdpdGhpbiBjdXJyaWVkIGZ1bmN0aW9ucyxcbiAqIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLlxuICpcbiAqIElmIGBnYCBpcyBhIGN1cnJpZWQgdGVybmFyeSBmdW5jdGlvbiBhbmQgYF9gIGlzIGBSLl9fYCwgdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMiwgXykoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGNvbnN0YW50XG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdyZWV0ID0gUi5yZXBsYWNlKCd7bmFtZX0nLCBSLl9fLCAnSGVsbG8sIHtuYW1lfSEnKTtcbiAqICAgICAgZ3JlZXQoJ0FsaWNlJyk7IC8vPT4gJ0hlbGxvLCBBbGljZSEnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge3JhbWRhOiAncGxhY2Vob2xkZXInfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZseWQvfi9yYW1kYS9zcmMvX18uanNcbiAqKiBtb2R1bGUgaWQgPSAxNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDNcbiAqKi8iLCJ2YXIgX18gPSByZXF1aXJlKCcuLi9fXycpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0d28tYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeTIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYyKGEsIGIpIHtcbiAgICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDEgJiYgYSA9PT0gX18pIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDEpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYSA9PT0gX18gJiYgYiA9PT0gX18pIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYSA9PT0gX18pIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYiA9PT0gX18pIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuKGEsIGIpO1xuICAgIH1cbiAgfTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDNcbiAqKi8iLCJ2YXIgX18gPSByZXF1aXJlKCcuLi9fXycpO1xuXG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHR3by1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5MShmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjEoYSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZjE7XG4gICAgfSBlbHNlIGlmIChhID09PSBfXykge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4oYSk7XG4gICAgfVxuICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5MS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgM1xuICoqLyIsIi8qKlxuICogQW4gb3B0aW1pemVkLCBwcml2YXRlIGFycmF5IGBzbGljZWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJndW1lbnRzfEFycmF5fSBhcmdzIFRoZSBhcnJheSBvciBhcmd1bWVudHMgb2JqZWN0IHRvIGNvbnNpZGVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtmcm9tPTBdIFRoZSBhcnJheSBpbmRleCB0byBzbGljZSBmcm9tLCBpbmNsdXNpdmUuXG4gKiBAcGFyYW0ge051bWJlcn0gW3RvPWFyZ3MubGVuZ3RoXSBUaGUgYXJyYXkgaW5kZXggdG8gc2xpY2UgdG8sIGV4Y2x1c2l2ZS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldywgc2xpY2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9zbGljZShbMSwgMiwgMywgNCwgNV0sIDEsIDMpOyAvLz0+IFsyLCAzXVxuICpcbiAqICAgICAgdmFyIGZpcnN0VGhyZWVBcmdzID0gZnVuY3Rpb24oYSwgYiwgYywgZCkge1xuICogICAgICAgIHJldHVybiBfc2xpY2UoYXJndW1lbnRzLCAwLCAzKTtcbiAqICAgICAgfTtcbiAqICAgICAgZmlyc3RUaHJlZUFyZ3MoMSwgMiwgMywgNCk7IC8vPT4gWzEsIDIsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3NsaWNlKGFyZ3MsIGZyb20sIHRvKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIF9zbGljZShhcmdzLCAwLCBhcmdzLmxlbmd0aCk7XG4gICAgY2FzZSAyOiByZXR1cm4gX3NsaWNlKGFyZ3MsIGZyb20sIGFyZ3MubGVuZ3RoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgIHZhciBpZHggPSAtMTtcbiAgICAgIHZhciBsZW4gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihhcmdzLmxlbmd0aCwgdG8pIC0gZnJvbSk7XG4gICAgICB3aGlsZSAoKytpZHggPCBsZW4pIHtcbiAgICAgICAgbGlzdFtpZHhdID0gYXJnc1tmcm9tICsgaWR4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0O1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fc2xpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDNcbiAqKi8iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogV3JhcHMgYSBmdW5jdGlvbiBvZiBhbnkgYXJpdHkgKGluY2x1ZGluZyBudWxsYXJ5KSBpbiBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBleGFjdGx5IGBuYFxuICogcGFyYW1ldGVycy4gVW5saWtlIGBuQXJ5YCwgd2hpY2ggcGFzc2VzIG9ubHkgYG5gIGFyZ3VtZW50cyB0byB0aGUgd3JhcHBlZCBmdW5jdGlvbixcbiAqIGZ1bmN0aW9ucyBwcm9kdWNlZCBieSBgYXJpdHlgIHdpbGwgcGFzcyBhbGwgcHJvdmlkZWQgYXJndW1lbnRzIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpZyAoTnVtYmVyLCAoKiAtPiAqKSkgLT4gKCogLT4gKilcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIGRlc2lyZWQgYXJpdHkgb2YgdGhlIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpc1xuICogICAgICAgICBndWFyYW50ZWVkIHRvIGJlIG9mIGFyaXR5IGBuYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdGFrZXNUd29BcmdzID0gZnVuY3Rpb24oYSwgYikge1xuICogICAgICAgIHJldHVybiBbYSwgYl07XG4gKiAgICAgIH07XG4gKiAgICAgIHRha2VzVHdvQXJncy5sZW5ndGg7IC8vPT4gMlxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMik7IC8vPT4gWzEsIDJdXG4gKlxuICogICAgICB2YXIgdGFrZXNPbmVBcmcgPSBSLmFyaXR5KDEsIHRha2VzVHdvQXJncyk7XG4gKiAgICAgIHRha2VzT25lQXJnLmxlbmd0aDsgLy89PiAxXG4gKiAgICAgIC8vIEFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uXG4gKiAgICAgIHRha2VzT25lQXJnKDEsIDIpOyAvLz0+IFsxLCAyXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24obiwgZm4pIHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhMCkge3ZvaWQgYTA7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO307XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7dm9pZCBhMTsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyKSB7dm9pZCBhMjsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMykge3ZvaWQgYTM7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO307XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7dm9pZCBhNDsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDY6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7dm9pZCBhNTsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDc6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge3ZvaWQgYTY7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO307XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7dm9pZCBhNzsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDk6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KSB7dm9pZCBhODsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7fTtcbiAgICBjYXNlIDEwOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpIHt2b2lkIGE5OyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTt9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gYXJpdHkgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIG5vIGdyZWF0ZXIgdGhhbiB0ZW4nKTtcbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mbHlkL34vcmFtZGEvc3JjL2FyaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiAzXG4gKiovIiwiaW1wb3J0IGNyZWF0ZUVsZWdhbnREZWNvcmF0b3IgZnJvbSAnLi9jcmVhdGUtZWxlZ2FudC1kZWNvcmF0b3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gc3ViZWRpdChlZGl0LCAuLi5wYXRoKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0gPT5cbiAgICBlZGl0KHN0YXRlID0+IHN0YXRlLnVwZGF0ZUluKHBhdGgsIHRyYW5zZm9ybSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cChkZWJ1Zykge1xuICByZXR1cm4ge1xuICAgIHN1YmVkaXQsXG4gICAgZWxlZ2FudDogY3JlYXRlRWxlZ2FudERlY29yYXRvcihSZWFjdCwgZGVidWcpLFxuICB9XG59XG5cbnNldHVwLmVsZWdhbnQgPSBjcmVhdGVFbGVnYW50RGVjb3JhdG9yKFJlYWN0KTtcbnNldHVwLnN1YmVkaXQgPSBzdWJlZGl0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3N5L2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHtzaG91bGRDb21wb25lbnRVcGRhdGV9IGZyb20gJy4uL2NvbXBvbmVudC1yZW5kZXItbWl4aW4nO1xuaW1wb3J0IHtjb21wb25lbnRXaWxsTW91bnQsIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN9IGZyb20gJy4uL3N0YXRpY3MtbWl4aW4nO1xuXG5jb25zdCBnZXREaXNwbGF5TmFtZSA9IChDb21wb25lbnQpID0+XG4gIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlZ2FudERlY29yYXRvcihSZWFjdCwgZGVidWcpIHtcbiAgY29uc3Qge0NvbXBvbmVudH0gPSBSZWFjdDtcblxuICByZXR1cm4gRGVjb3JhdGVkQ29tcG9uZW50ID0+IGNsYXNzIEVsZWdhbnREZWNvcmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBFbGVnYW50KCR7Z2V0RGlzcGxheU5hbWUoRGVjb3JhdGVkQ29tcG9uZW50KX0pYDtcbiAgICBzdGF0aWMgRGVjb3JhdGVkQ29tcG9uZW50ID0gRGVjb3JhdGVkQ29tcG9uZW50O1xuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlLmNhbGwodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnRXaWxsTW91bnQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5jYWxsKHRoaXMsIG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKGByZW5kZXIgPCR7RWxlZ2FudERlY29yYXRvci5kaXNwbGF5TmFtZX0+YCk7XG4gICAgICByZXR1cm4gKDxEZWNvcmF0ZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+KTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc3kvY3JlYXRlLWVsZWdhbnQtZGVjb3JhdG9yLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
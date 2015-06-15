function delegate(delegee) {
  var delegate = function() {
    return delegate.delegee.apply(this, arguments);
  }
  delegate.delegee = delegee;
  delegate.isDelegate = true;
  return delegate;
}

function wrapWithDelegate (key) {
  var statics = this;
  var delegee = statics[key];
  if (typeof delegee === 'function') {
    statics[key] = isDelegate(delegee) ? delegee : delegate(delegee);
  }
}

function isDelegate (value) {
  return value && value.isDelegate;
}

function componentWillMount () {
  var statics = this.props.statics;
  if (statics && typeof statics === 'object') {
    Object.keys(statics).forEach(wrapWithDelegate, statics);
  }
}

function componentWillReceiveProps (newProps) {
  var currentProps = this.props;
  var currentStatics = currentProps.statics;
  var newStatics = newProps.statics;
  var haveChangedStatics = newStatics !== currentStatics &&
    newStatics &&
    typeof newStatics === 'object';

  if (haveChangedStatics) {
    Object.keys(newStatics).forEach(function(key) {
      var newMember = newStatics[key];
      if (typeof(newMember) == 'function') {
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

const StaticsMixin = {
  componentWillMount,
  componentWillReceiveProps
};

module.exports = StaticsMixin;

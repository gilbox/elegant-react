function delegate(delegee) {
  var delegate = function() {
    return delegate.delegee.apply(this, arguments);
  }
  delegate.delegee = delegee;
  delegate.isDelegate = true;
  return delegate;
}

export function isDelegate (value) {
  return value && value.isDelegate;
}

// perform on render
export function wrapStatics(statics, props) {
  const transformedProps = {...props};
  if (statics) {
    statics.forEach(key => {
      const delegee = props[key];
      if (typeof delegee === 'function') {
        transformedProps[key] = isDelegate(delegee) ? delegee : delegate(delegee);
      }
    });
  }
  return transformedProps;
}

// perform when recieving props
export function updateStatics(statics, wrappedProps, newProps) {
  if (statics && newProps && wrappedProps) {
    statics.forEach(key => {
      const newMember = newProps[key];

      if (typeof(newMember) === 'function') {
        const currentMember = wrappedProps[key];
        if (isDelegate(currentMember)) {
          const delegee = isDelegate(newMember) ? newMember.delegee : newMember;
          currentMember.delegee = delegee;
        }
      }
    });
  }
}

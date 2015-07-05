import React, {Component} from 'react';
import {sub} from 'elegant-react';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

export default function validationDecorator(DecoratedComponent) {
  return class ValidationDecorator extends Component {
    static displayName = `Validation(${getDisplayName(DecoratedComponent)})`;
    static DecoratedComponent = DecoratedComponent;

    render() {
      const {edit: _edit, value: _value} = this.props;
      const value = _value.get('value');
      const isInvalid = !!_value.get('validation');
      const isDirty = !!_value.get('isDirty');

      // decorate the edit function to set dirty state
      // when value changes. note that this could be optimized
      // to only decorate when isDirty is false
      const edit = (transform) => {
        sub(_edit, 'isDirty')(state => true);
        return sub(_edit, 'value')(transform);
      };

      return React.createElement(DecoratedComponent, {
        ...this.props,
        edit,
        value,
        isDirty,
        isInvalid });
    }
  }
}

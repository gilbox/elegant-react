import React, {Component} from 'react';
import {sub} from 'elegant-react';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

export default function validationDecorator(DecoratedComponent) {
  return class ValidationDecorator extends Component {
    static displayName = `Validation(${getDisplayName(DecoratedComponent)})`;
    static DecoratedComponent = DecoratedComponent;

    // todo: 
    // auto-selectable
    // isDirty
    // isInvalid
    // isDisabled

    render() {
      const {edit: _edit, value: _value} = this.props;
      const value = _value.get('value');
      const isInvalid = !!_value.get('validation');
      const edit = sub(_edit, 'value');

      return React.createElement(DecoratedComponent, {
        ...this.props,
        edit,
        value,
        isInvalid });
    }
  }
}

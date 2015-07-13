// todo:
// auto-selectable
// isDirty (done)
// isInvalid (done)
// isDisabled

import React, {Component} from 'react';
import ElegantReact from 'elegant-react';
import validationDecorator from './validation-decorator';

export const styles = {
  invalid: {
    border: '1px solid red'
  },
  dirty: {
    border: '1px solid blue'
  }
};

const {elegant} = ElegantReact({debug: true});

const identity = x => x;

@elegant({statics: ['edit','parser','formatter']})
@validationDecorator
export class Input extends Component {
  static defaultProps = {
    formatter: identity,
    parser: identity
  }
  componentWillUpdate(nextProps) {
    const changed = Object.keys(nextProps).filter(key => nextProps[key] !== this.props[key]);
  }
  render() {
    const {value, edit, isDirty, isInvalid, formatter, parser} = this.props;

    return (
      <input
        style={{ ...(isDirty && styles.dirty),
                 ...(isDirty && isInvalid && styles.invalid) }}
        value={formatter(value)}
        onChange={event =>
          edit(value => parser(event.target.value)) } />
    )
  }
}

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p => p &&
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

@elegant({statics: ['edit']})
export class PhoneInput extends Component {
  render() {
    return <Input {...this.props} formatter={formatPhone} parser={parsePhone} />
  }
}

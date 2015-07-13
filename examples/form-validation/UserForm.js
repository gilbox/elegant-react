import React, {Component} from 'react';
import {Input,PhoneInput} from './ValidatingInput';
import {elegant, sub} from 'elegant-react';

const parseAge = input => ~~input || '';

@elegant({statics: ['editUser']})
export default class UserForm extends Component {
  render() {
    const {data,editUser} = this.props;

    return  <div>
      <label>
        Name:
        <Input
          value={data.getIn(['name'])}
          edit={sub(editUser,'name')} />
      </label>

      <br />

      <label>
        Phone:
        <PhoneInput
          value={data.getIn(['info','phone'])}
          edit={sub(editUser,'info','phone')} />
      </label>

      <br />

      <label>
        Age:
        <Input
          parser={parseAge}
          value={data.getIn(['info','age'])}
          edit={sub(editUser,'info','age')} />
      </label>

    </div>;
  }
}

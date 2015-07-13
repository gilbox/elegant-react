import React, {Component} from 'react';
import {Input,PhoneInput} from './ValidatingInput';
import {elegant, sub} from 'elegant-react';
import {derive,track} from 'react-derive';
import {validateWithSchema, validator, } from './validation-plugin';
import {USER_SCHEMA} from './user-schema';

const parseAge = input => ~~input || '';

@elegant({statics: ['editUser']})
@derive({
  @track('data')
  data({data}) {
    return validateWithSchema(validator, USER_SCHEMA, data);
  }
})
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

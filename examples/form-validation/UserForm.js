import React, {Component} from 'react';
import {Input,PhoneInput} from './ValidatingInput';
import {elegant, sub} from 'elegant-react';
import {derive,track} from 'react-derive';
import {validateWithSchema} from './validation/';
import {validateUser} from './user-validator';

const parseAge = input => ~~input || '';

@elegant({statics: ['editUser']})
@derive({
  @track('data')
  data({data}) {
    // decorate data with validation results
    return validateWithSchema(validateUser, data);
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
          value={data.getIn(['phone'])}
          edit={sub(editUser,'phone')} />
      </label>

      <br />

      <label>
        Age:
        <Input
          parser={parseAge}
          value={data.getIn(['age'])}
          edit={sub(editUser,'age')} />
      </label>

    </div>;
  }
}

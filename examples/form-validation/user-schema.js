import {validator} from './validation-plugin';

export const USER_SCHEMA = 'user';

validator.addSchema(USER_SCHEMA, {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 15
    },
    phone: {
      type: 'string',
      pattern: '^[0-9]{10}$'
    },
    age: {
      type: 'integer'
    }
  },
  required: ['name', 'phone', 'age']
});

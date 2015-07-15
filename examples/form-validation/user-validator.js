import validator from 'is-my-json-valid';

export const validateUser = validator({
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

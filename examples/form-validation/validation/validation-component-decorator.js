import {sub} from 'elegant-react';
import {derive, track} from 'react-derive';
import {VALUE_KEY} from './validate';

export const validationComponentDecorator = derive({
  @track('value')
  value({value}) {
    return value.get(VALUE_KEY);
  },

  @track('value')
  isInvalid({value}) {
    return !!value.get('validation');
  },

  @track('value')
  isDirty({value}) {
    return !!value.get('isDirty');
  },

  @track('edit')
  edit({edit}) {
    return (transform) => {  // "middleware"
      sub(edit, 'isDirty')(state => true);
      return sub(edit, VALUE_KEY)(transform);
    };
  }
})

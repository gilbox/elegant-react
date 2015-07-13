// import React, {Component} from 'react';
import {sub} from 'elegant-react';
import {derive, track} from 'react-derive';

export const validationDecorator = derive({
  @track('value')
  value({value}) {
    return value.get('value');
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
    return (transform) => {
      sub(edit, 'isDirty')(state => true);
      return sub(edit, 'value')(transform);
    };
  }
})

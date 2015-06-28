import createElegantDecorator from './create-elegant-decorator';
import React from 'react-native';

export const elegant = createElegantDecorator(React);

export function subedit(edit, ...path) {
  return transform =>
    edit(state => state.updateIn(path, transform));
}

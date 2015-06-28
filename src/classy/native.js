import createElegantDecorator from './create-elegant-decorator';
import React from 'react-native';

function subedit(edit, ...path) {
  return transform =>
    edit(state => state.updateIn(path, transform));
}

export default function setup(debug) {
  return {
    subedit,
    elegant: createElegantDecorator(React, debug),
  }
}

setup.elegant = createElegantDecorator(React);
setup.subedit = subedit;

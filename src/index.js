// This file is the entry-point for using elegant-react
// with nodejs or in the browser
import createElegantDecorator from './create-elegant-decorator';
import React from 'react';

function subedit(edit, ...path) {
  return transform =>
    edit(state => state.updateIn(path, transform));
}

export default function setup(debug) {
  return {
    subedit,
    sub: subedit,
    elegant: createElegantDecorator(React, debug),
  }
}

setup.elegant = createElegantDecorator(React);
setup.subedit = subedit;
setup.sub = subedit;

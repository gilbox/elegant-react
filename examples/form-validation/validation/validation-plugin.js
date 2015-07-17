import {validateWithSchema} from './validate';
import {on, stream} from 'flyd';

export function createValidationPlugin({
  validate,
  state$=stream(),
  output=stream()
}) {
  on(state => {
    output(state => validateWithSchema(validate, state))
  }, state$);

  return {state$, output};
}

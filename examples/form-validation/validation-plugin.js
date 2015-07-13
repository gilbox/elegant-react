import {on, stream} from 'flyd';
import {fromJS, Map as IMap} from 'immutable';

export const validator = require('jjv')();

function getDataShapedForValidation(data, acc=IMap()) {
  data.forEach(v => {
    if (!v.get) return;

    const validatorPath = v.get('validatorPath');
    if (validatorPath) {
      acc = acc.setIn(validatorPath, v.get('value'));
    } else {
      acc = getDataShapedForValidation(v, acc);
    }
  });

  return acc;
}

function applyValidation(validation, data, path=[]) {
  const subData = data.getIn(path);
  if (!subData || !subData.forEach) return data;

  subData.forEach((v,key) => {
    if (!v.get) return;

    // for simplicity we assume the validator path maps directly to the validation path
    // a slightly different approach would apply to the general case
    const validationPath = v.get('validatorPath');
    if (validationPath) {
      // the deep merge prevents update when nothing has changed
      data = data.mergeDeepIn(path.concat(key, 'validation'), validation.getIn(validationPath));
    } else {
      data = applyValidation(validation, data, path.concat(key));
    }
  });

  return data;
}

export function validateWithSchema(validator, schemaName, data) {
  const dataToValidate = getDataShapedForValidation(data).toJS();
  const errors = validator.validate(schemaName, dataToValidate);
  return applyValidation(fromJS(errors ? errors.validation : {}), data);
}

// value is what we are validating
// validatorPath maps app state data to correct path that value needs to be passed to the validator.validate method
export const createValidatingValue =
  (value, validatorPath) => ({ value, validatorPath });

export function createValidationPlugin({schema, edit$=stream(), output=stream()}) {
  on(state => {
    output(state => validateWithSchema(validator, schema, state))
  }, edit$);

  return {edit$, output};
}

import {fromJS, Map as IMap} from 'immutable';

export const VALUE_KEY = '_value_';

// value is what we are validating
export const createValidatingValue = (value) => ({ [VALUE_KEY]:value });

function getDataShapedForValidation(data, path=[], acc=IMap()) {
  data.forEach((v,k) => {
    if (!v.get) return;

    const validatorPath = v.get('validatorPath');
    if (v.has(VALUE_KEY)) {
      acc = acc.setIn(path.concat(k), v.get(VALUE_KEY));
    } else {
      acc = getDataShapedForValidation(v, path.concat(k), acc);
    }
  });

  return acc;
}

function applyValidation(errorMap, data, path=[]) {
  const subData = data.getIn(path);
  if (!subData || !subData.forEach) return data;

  subData.forEach((v,key) => {
    if (!v.get) return;

    const subPath = path.concat(key);

    if (v.has(VALUE_KEY)) {
      // todo: optimize with merge operation that prevents update when nothing has changed
      const vPath = 'data.' + subPath.join('.');
      data = data.setIn(path.concat(key, 'validation'), errorMap.get(vPath));
    } else {
      data = applyValidation(errorMap, data, subPath);
    }
  });

  return data;
}

export function validateWithSchema(validate, data) {
  const dataToValidate = getDataShapedForValidation(data).toJS();

  const valid = validate(dataToValidate);
  const errors = valid ? [] : validate.errors;
  const errorMap = {};
  errors.forEach(error => errorMap[error.field] = error.message);

  return applyValidation(fromJS(errorMap), data);
}

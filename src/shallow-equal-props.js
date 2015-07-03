// convert statics array to map object
export function createStaticsMap(statics) {
  if (!statics) return {};
  const map = {};
  statics.forEach(key => map[key] = true);
  return map;
};

// modified version of shallowEqualProps fn from PureRenderMixin
export function shallowEqualProps(objA, objB, staticsMap) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (staticsMap[keysA[i]]) continue;
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

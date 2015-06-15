const componentLib = require('./component');
const StaticsMixin = require('./statics-mixin');
const ComponentRenderMixin = require('./component-render-mixin');

function subedit(edit, ...path) {
  return transform =>
    edit(state => state.updateIn(path, transform));
}

const elegant = React => {
  const component = componentLib(React);

  const lib = {
    subedit,
    StaticsMixin,
    ComponentRenderMixin,
    component: component.component,
  };

  const elegantReact = function(options) {
    if (options && options.hasOwnProperty('debug')) {
      component.enableDebugging(options.debug);
    }

    return lib;
  };

  for (let k in lib) {
    elegantReact[k] = lib[k];
  }

  return elegantReact;
};

module.exports = elegant;

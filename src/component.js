const ComponentRenderMixin = require('./component-render-mixin');
const StaticsMixin = require('./statics-mixin');

let debug = false;

module.exports = React => ({
  enableDebugging(enable) { return debug = !!enable; },

  // @param additionalMixins? {Array|Object}
  // @param renderFn {Function}
  // @returns Component
  component(additionalMixins, renderFn) {
    renderFn = renderFn || additionalMixins;
    additionalMixins = (additionalMixins instanceof Function) ? [] : [].concat(additionalMixins);

    const mixins = [ComponentRenderMixin, StaticsMixin].concat(additionalMixins);

    const render = function() {
      if (debug) console.log(`render <${renderFn.name} />`);
      return renderFn.call(this, this.props, this.props.statics, this.props.children);
    };

    const displayName = renderFn.name;

    return React.createClass({displayName, mixins, render});
  }
});

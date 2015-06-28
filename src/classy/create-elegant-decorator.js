import {shouldComponentUpdate} from '../component-render-mixin';
import {componentWillMount, componentWillReceiveProps} from '../statics-mixin';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

export default function createElegantDecorator(React, debug) {
  const {Component} = React;

  return DecoratedComponent => class ElegantDecorator extends Component {
    static displayName = `Elegant(${getDisplayName(DecoratedComponent)})`;
    static DecoratedComponent = DecoratedComponent;

    shouldComponentUpdate(nextProps, nextState) {
      return shouldComponentUpdate.call(this, nextProps, nextState);
    }

    componentWillMount() {
      return componentWillMount.call(this);
    }

    componentWillReceiveProps(newProps) {
      return componentWillReceiveProps.call(this, newProps);
    }

    render() {
      if (debug) console.log(`render <${ElegantDecorator.displayName}>`);
      return (<DecoratedComponent {...this.props} />);
    }
  };
}

import {wrapStatics, updateStatics} from './statics';
import {createStaticsMap, shallowEqualProps} from './shallow-equal-props';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

export default function createElegantDecorator(React, debug) {
  const {Component} = React;

  const decorator = ({statics}) => {
    const staticsMap = createStaticsMap(statics);

    return DecoratedComponent => class ElegantDecorator extends Component {
      static displayName = `Elegant(${getDisplayName(DecoratedComponent)})`;
      static DecoratedComponent = DecoratedComponent;

      shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualProps(this.props, nextProps, staticsMap)
      }

      componentWillReceiveProps(newProps) {
        updateStatics(statics, this.wrappedProps, newProps)
      }

      render() {
        if (debug) console.log(`render <${ElegantDecorator.displayName}>`);

        this.wrappedProps = wrapStatics(statics, this.props);

        return (<DecoratedComponent {...this.wrappedProps} />);

        // could be optimized with createElement
        // return React.createElement(DecoratedComponent, this.wrappedProps, this.wrappedProps.children);
      }
    };
  }

  return optionsOrComponent =>
    (optionsOrComponent.prototype instanceof Component) ?
      decorator({})(optionsOrComponent) : decorator(optionsOrComponent); // Component : options
}

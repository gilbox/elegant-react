import {wrapStatics, updateStatics} from './statics';
import {createStaticsMap, shallowEqualProps} from './shallow-equal-props';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

/**
 * ## createElegantDecorator
 * @param {React} React
 * @param {Boolean} debug
 **/
export default function createElegantDecorator(React, debug) {
  const {Component} = React;

  const decorator = ({statics}) => {
    // create lookup map for statics
    const staticsMap = createStaticsMap(statics);

    return DecoratedComponent => class ElegantDecorator extends Component {
      static displayName = `Elegant(${getDisplayName(DecoratedComponent)})`;
      static DecoratedComponent = DecoratedComponent;

      // optimize render by comparing old & new props
      shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualProps(this.props, nextProps, staticsMap)
      }
      
      // always update statics in case `shouldComponentUpdate`
      // prevents re-render
      componentWillReceiveProps(newProps) {
        updateStatics(statics, this.decoratedProps, newProps)
      }

      render() {
        if (debug) console.log(`render <${ElegantDecorator.displayName}>`);

        this.decoratedProps = wrapStatics(statics, this.props);

        return React.createElement(DecoratedComponent, this.decoratedProps);
      }
    };
  }

  // The decorator can optionally take options
  return (optionsOrComponent={}) =>
    (optionsOrComponent.prototype instanceof Component) ?
      decorator({})(optionsOrComponent) : decorator(optionsOrComponent); // Component : options
}

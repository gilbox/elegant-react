const React = require('react');
const {Component} = React;

const translate3d = (x,y,z) => `translate3d(${x}px, ${y}px, ${z}px)`;

const styles = {
  controlTitle: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle' },
  controlRange: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle' },
  controlValue: { display: 'inline-block', lineHeight: '30px', verticalAlign: 'middle', color: 'grey', fontSize: '10px', width: '20px' }
};

export default class RangeControl extends Component {
  static defaultProps = { value: 0, min: 0, max: 100, name: null }

  render() {
    const {min,max,value,onChange,name} = this.props;

    return <div {...this.props}>
      {name && <div style={styles.controlTitle}>{name}</div> }
      <input type="range" min={min} max={max} style={styles.controlRange}
        value={value}
        onChange={event => onChange(event) }/>
      <div style={styles.controlValue}>{value}</div>
    </div>
  }
};

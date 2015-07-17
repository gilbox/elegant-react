import React, {Component} from 'react';

export default class BoundingRect extends Component {
  constructor(props) {
    super(props);
    this.state = {rect:null};
  }
  
  componentWillReceiveProps() {
    const node = React.findDOMNode(this.sticky);
    const rect = node.getBoundingClientRect();
    this.setState({rect});
  }

  render() {
    return <div ref={r => this.sticky = r} {...this.props}>
      {this.props.children(this.state.rect)}
    </div>;
  }
}

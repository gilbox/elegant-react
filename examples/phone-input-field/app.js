import React, {Component} from 'react';
import ElegantReact from 'elegant-react';
import {fromJS} from 'immutable';

const {elegant, sub} = ElegantReact({debug: true});

const initialState = fromJS({
  phone: '6665552222'
});

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p =>
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

@elegant({statics: ['editPhone']})
class PhoneInput extends Component {
  render() {
    const {value,editPhone} = this.props;

    return (
      <input
        value={formatPhone(value)}
        onChange={event =>
          editPhone(phone => parsePhone(event.target.value)) } />
    )
  }
}

@elegant({statics: ['edit']})
class App extends Component {
  render() {
    const {data,edit} = this.props;

    return  <div>
      <h1>Phone Input Demo</h1>
      <PhoneInput
        value={data.get('phone')}
        editPhone={ sub(edit, 'phone') } />
    </div>;
  }
}

// the Renderer component manages the top-level app state
class Renderer extends Component {
  constructor() {
    super(...arguments);
    this.state = {data:this.props.initialState};
  }
  edit (transform) {
    this.setState({data: transform(this.state.data)})
  }
  render() {
    return <App
      data={this.state.data}
      edit={::this.edit} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

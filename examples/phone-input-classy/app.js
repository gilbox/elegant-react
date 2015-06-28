const React = require('react');
const {Component} = React;
const {elegant, subedit} = require('elegant-react/classy')({debug: true});
const {fromJS} = require('immutable');

const initialState = fromJS({
  phone: '6665552222'
});

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p =>
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

@elegant
class PhoneInput extends Component {
  render() {
    const {value} = this.props;
    const {editPhone} = this.props.statics;

    return (
      <input
        value={formatPhone(value)}
        onChange={event =>
          editPhone(phone => parsePhone(event.target.value)) } />
    )
  }
}

@elegant
class App extends Component {
  render() {
    const {data} = this.props;
    const {edit} = this.props.statics;

    return  <div>
      <h1>Phone Input Demo</h1>
      <PhoneInput
        value={data.get('phone')}
        statics={{
          editPhone: subedit(edit, 'phone') }} />
    </div>;
  }
}

// the Renderer component manages the top-level app state
@elegant
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
      statics={{ edit: ::this.edit }} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

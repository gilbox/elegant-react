const React = require('react');
const {component, subedit} = require('elegant-react')({debug: true});
const {fromJS} = require('immutable');

const initialState = fromJS({
  phone: '6665552222'
});

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p =>
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

const PhoneInput = component(function PhoneInput ({value}, {editPhone}) {
  return (
    <input
      value={formatPhone(value)}
      onChange={event =>
        editPhone(phone => parsePhone(event.target.value))
        } />
  )
});

const App = component(function App ({data}, {edit}) {
  return  <div>
    <h1>Phone Input Demo</h1>
    <PhoneInput
      value={data.get('phone')}
      statics={{
        editPhone: subedit(edit, 'phone') }} />
  </div>;
});

// the Renderer component manages the top-level app state
const rendererMixin = {
  getInitialState() {
    return {data:this.props.initialState}
  },
  edit (transform) {
    this.setState({data: transform(this.state.data)})
  }
};

const Renderer = component(rendererMixin, function Renderer() {
  return <App
    data={this.state.data}
    statics={{ edit:this.edit }} />
});

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

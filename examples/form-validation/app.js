// auto-selectable
// isDirty
// isInvalid
// isDisabled

const React = require('react');
const {Component} = React;
const {elegant, subedit} = require('elegant-react')({debug: true});
const {fromJS} = require('immutable');

const createValue = value => { value };

const initialState = fromJS({
  name: createValue('joe shmoe'),
  phone: createValue('6665552222'),
  age: createValue('')
});

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p =>
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

@elegant({statics: ['editPhone']})
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

@elegant({statics: ['edit']})
class Input extends Component {
  render() {
    const {value,edit} = this.props;

    return (
      <input
        value={value}
        onChange={event =>
          edit(value => event.target.value) } />
    )
  }
}

@elegant({statics: ['edit']})
class App extends Component {
  render() {
    const {data,edit} = this.props;

    return  <div>
      <h1>Validation Demo</h1>
      <PhoneInput
        value={data.getIn(['phone','value'])}
        editPhone={sub(edit,'phone','value')} />

      <Input
        value={data.getIn(['name','value'])}
        edit={sub(edit,'name','value')} />
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
      edit={::this.edit} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

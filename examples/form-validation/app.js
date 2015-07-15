import React, {Component} from 'react';
import ElegantReact from 'elegant-react';
import {fromJS, Map as IMap} from 'immutable';
import flyd, {on, stream} from 'flyd';
import {createValidatingValue,
        createValidationPlugin} from './validation/';
import UserForm from './UserForm';
// import {USER_SCHEMA} from './user-schema';
import {styles} from './ValidatingInput';
import Atom from './Atom';

const {elegant, sub} = ElegantReact({debug: true});

const initialState = fromJS({
  userForm: {
    name: createValidatingValue('joe shmoe'),
    phone: createValidatingValue('6665552222'),
    age: createValidatingValue('')
  }
});

const atom = window.atom = new Atom(initialState);

const subStream = (dataStream, ...path) =>
  flyd.map(data => data.getIn(path), dataStream);

class App extends Component {
  constructor(props) {
    super(props);
    const {atom} = this.props;

    this.edit = ::atom.updateState;
    this.state = {state: atom.getState()};
  }

  componentWillMount() {
    const {atom} = this.props;
    on(state => this.setState({state}), atom.didSetState$);

    // createValidationPlugin( {validate: ....,
    //                          state$: subStream(atom.didUpdateState$, 'userForm'),
    //                          output: sub(::atom.silentlyUpdateState, 'userForm')} );
  }

  render() {
    const {state} = this.state;
    const {edit} = this;

    return  <div>
      <h1>Validation Demo</h1>
      <UserForm
        data={state.get('userForm')}
        editUser={sub(edit, 'userForm')} />

      <p>When a field is <b>dirty</b> there is a <span style={styles.dirty}>blue</span> border.</p>
      <p>When a field is <b>invalid</b> there is a <span style={styles.invalid}>red</span> border.</p>
    </div>;
  }
}


React.render(<App atom={atom} />, document.getElementById('example'));

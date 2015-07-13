// todo:
// auto-selectable
// isDirty (done)
// isInvalid (done)
// isDisabled

import React, {Component} from 'react';
import ElegantReact from 'elegant-react';
import {fromJS, Map as IMap} from 'immutable';
import flyd, {stream} from 'flyd';
import {createValidatingValue,
        createValidationPlugin} from './validation-plugin';
import UserForm from './UserForm';
import {USER_SCHEMA} from './user-schema';
import {styles} from './ValidatingInput';

const {elegant, sub} = ElegantReact({debug: true});

const initialState = fromJS({
  user: {
    name: createValidatingValue('joe shmoe', ['name']),
    info: { // making this arbitraritly complex for demonstration purposes
      phone: createValidatingValue('6665552222', ['phone']),
      age: createValidatingValue('', ['age'])
    }
  }
});

@elegant({statics: ['edit']})
class App extends Component {
  render() {
    const {data,edit} = this.props;

    return  <div>
      <h1>Validation Demo</h1>
      <UserForm
        data={data.get('user')}
        editUser={sub(edit, 'user')} />

      <p>When a field is <b>dirty</b> there is a <span style={styles.dirty}>blue</span> border.</p>
      <p>When a field is <b>invalid</b> there is a <span style={styles.invalid}>red</span> border.</p>
    </div>;
  }
}

const subStream = (dataStream, ...path) =>
  flyd.map(data => data.getIn(path), dataStream);


// the Renderer component manages the top-level app state
class Renderer extends Component {
  constructor() {
    super(...arguments);

    this.didEdit$ = stream();

    createValidationPlugin( {schema: USER_SCHEMA,
                             didEdit$: subStream(this.didEdit$, 'user'),
                             output: sub(::this.updateData, 'user')} );

    this.state = {data: this.data = this.props.initialState};
  }

  updateData(transform) {
    this.setState({data: this.data = transform(this.data)});
    console.log('this.data', this.data.toJS());
    return this.data;
  }

  edit (transform) {
    this.didEdit$(this.updateData(transform));
  }

  render() {
    return <App
      data={this.state.data}
      edit={::this.edit} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

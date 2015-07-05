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
        createValidationPlugin,
        validator} from './validation-plugin';
import validationDecorator from './validation-decorator';
import {USER_SCHEMA} from './user-schema';

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

const styles = {
  invalid: {
    border: '1px solid red'
  },
  dirty: {
    border: '1px solid blue'
  }
};

@elegant({statics: ['edit']})
@validationDecorator
class Input extends Component {
  static defaultProps = {
    formatter: x => x,
    parser: x => x
  }
  render() {
    const {value, edit, isDirty, isInvalid, formatter, parser} = this.props;

    return (
      <input
        style={{ ...(isDirty && styles.dirty),
                 ...(isDirty && isInvalid && styles.invalid) }}
        value={formatter(value)}
        onChange={event =>
          edit(value => parser(event.target.value)) } />
    )
  }
}

const parsePhone = v => v.replace(/\D/g, '').substr(0,10);

const formatPhone = p => p &&
  [p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
    .join('')
    .replace(/-+$/,'');

@elegant({statics: ['edit']})
class PhoneInput extends Component {
  render() {
    return <Input {...this.props} formatter={formatPhone} parser={parsePhone} />
  }
}

@elegant({statics: ['editUser']})
class UserForm extends Component {
  render() {
    const {data,editUser} = this.props;

    return  <div>
      <label>
        Name:
        <Input
          value={data.getIn(['name'])}
          edit={sub(editUser,'name')} />
      </label>

      <br />

      <label>
        Phone:
        <PhoneInput
          value={data.getIn(['info','phone'])}
          edit={sub(editUser,'info','phone')} />
      </label>

      <br />

      <label>
        Age:
        <Input
          parser={input => ~~input || ''}
          value={data.getIn(['info','age'])}
          edit={sub(editUser,'info','age')} />
      </label>

    </div>;
  }
}

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

    const wiredStream = ::this.wiredStream;
    this.edit$ = stream();

    createValidationPlugin( USER_SCHEMA,
                            subStream(this.edit$, 'user'),
                            wiredStream('user') );

    this.state = {data: this.data = this.props.initialState};
  }

  // returns a stream whose writes
  // directly update application state
  wiredStream(...path) {
    const s = stream();
    const updateData = ::this.updateData;

    flyd.on(newData => {
      updateData(data => data.setIn(path, newData));
    }, s);
    return s;
  }

  updateData(transform) {
    this.setState({data: this.data = transform(this.data)});
    console.log('this.data', this.data.toJS());
  }

  edit (transform) {
    this.updateData(transform);
    this.edit$(this.data);
  }

  render() {
    return <App
      data={this.state.data}
      edit={::this.edit} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

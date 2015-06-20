const React = require('react');
const {component, subedit} = require('elegant-react')({debug: true});
const {fromJS} = require('immutable');
const flyd = require('flyd');
const {stream} = flyd;

const newBlankEntry = _ => fromJS({name: '', phone: ''});

const initialState = fromJS({
  newEntry: newBlankEntry(),
  entriesHistoryCount: 0,
  nameHistoryCount: 0,
  phoneHistoryCount: 0,
  entries: [
    { name: 'aria', phone: '3332221111'},
    { name: 'gilbox', phone: '6665552222'},
    { name: 'jimbo', phone: '9993332222'},
    { name: 'lebowski', phone: '7774442222'},
    { name: 'murphy', phone: '8884442222'},
    { name: 'vanderbilt', phone: '9993332222'},
  ]
});

const parseName = v => v && v.replace(/\d/g, '');

const identity = v => v;

const parsePhone = v => v && v.replace(/\D/g, '').substr(0,10);

const formatPhone = p => p &&
[p[0],p[1],p[2],'-',p[3],p[4],p[5],'-',p[6],p[7],p[8],p[9]]
  .join('')
  .replace(/-+$/,'');

const FormattedInput = component(function FormattedInput ({value, formatter, parser}, {edit}) {
  return (
    <input {...this.props}
      value={formatter(value)}
      onChange={ event =>
        edit(value => parser(event.target.value)) } />
  )
});

// input field that only allows 10 digits, and formats like XXX-XXX-XXXX
const PhoneInput = component(function PhoneInput ({value}, {editPhone}) {
  return (
    <FormattedInput {...this.props}
      placeholder="Phone Number"
      formatter={formatPhone}
      parser={parsePhone}
      value={value}
      statics={{ edit: editPhone }} />
  )
});

// input field that disallows digits
const NameInput = component(function NameInput ({value}, {editName}) {
  return (
    <FormattedInput {...this.props}
      placeholder="Name"
      formatter={identity}
      parser={parseName}
      value={value}
      statics={{ edit: editName }} />
  );
});

// a single phone book entry
const Entry = component(function Entry({entry}, {deleteEntry}) {
  return (
    <div className="Entry">
      <div onClick={deleteEntry} className="Entry-delete">×</div>
      <div className="Entry-name">{entry.get('name')}</div>
      <div className="Entry-phone">{formatPhone(entry.get('phone'))}</div>
    </div>
  );
});

// grid of phone book entries
const Entries = component(function Entries({entries}, {editEntries}) {
  return (
    <div className="Entries">
      {entries.map((entry, index) =>
          <Entry
            key={`${entry.get('phone')}${entry.get('name')}`}
            entry={entry}
            statics={{
              deleteEntry: _=> editEntries(entries => entries.delete(index) )
            }} />
      ).toArray()}
    </div>
  );
});

const handleEvent = handler => event => {
  handler(event);
  event.preventDefault();
};

// Form for creating a new phone book entry
const NewEntry = component(function NewEntry({data, nameHistoryCount, phoneHistoryCount}, {edit, addNewEntry, nameUndo, phoneUndo}) {
  return (
    <form className="NewEntry" onSubmit={handleEvent(addNewEntry)}>
      <div className="NewEntry-title">ADD NEW</div>
      <div className="InputWrap">
        {nameHistoryCount ? <a href="#"
          onClick={handleEvent(nameUndo)}
          className="InputUndoBtn">⎌</a> : null}
        <NameInput
          className="NewEntry-name"
          value={data.get('name')}
          statics={{
            editName: subedit(edit, 'name') }} />
      </div>
      <div className="InputWrap">
        {phoneHistoryCount ? <a href="#"
          onClick={handleEvent(phoneUndo)}
          className="InputUndoBtn">⎌</a> : null}
        <PhoneInput
          className="NewEntry-phone"
          value={data.get('phone')}
          statics={{
            editPhone: subedit(edit, 'phone') }} />
      </div>
      <button style={{display: 'none'}} />
    </form>
  );
});

const pushNewEntry = edit =>
  edit(data =>
    data.getIn(['newEntry', 'name']) &&
      data.update('entries',
          entries =>
            entries.push(data.get('newEntry'))
                   .sortBy(entry => entry.get('name')))
          .update('newEntry', newBlankEntry));

const App = component(function App ({data, nameHistoryCount, phoneHistoryCount, entriesHistoryCount}, {edit, nameUndo, phoneUndo, entriesUndo}) {
  return (
    <div>
      <h1>Address Book Demo
        {data.get('entriesHistoryCount') ? <a href="#"
           onClick={handleEvent(entriesUndo)}
           className="UndoBtn">⎌</a> : null}
      </h1>
      <NewEntry
        nameHistoryCount={data.get('nameHistoryCount')}
        phoneHistoryCount={data.get('phoneHistoryCount')}
        data={data.get('newEntry')}
        statics={{
          nameUndo,
          phoneUndo,
          edit: subedit(edit, 'newEntry'),
          addNewEntry: _=> pushNewEntry(edit) }} />
      <Entries
        entries={data.get('entries')}
        statics={{ editEntries: subedit(edit, 'entries') }} />
    </div>
  );
});

const filterStream = (predicate, s) =>
  flyd.stream([s], (self) => {
    if (predicate(s())) self(s.val);
  });

const last = arr => arr[arr.length - 1];

const subStream = (dataStream, ...path) =>
  flyd.map(data => data.getIn(path), dataStream);

const createHistoryStore = (previousStateStream, stateStream, undoStream, outputStream, outputCountStream) => {
  const history = [];
  const filteredStateStream =
    filterStream(state => state !== previousStateStream(), stateStream);
  
  flyd.on(state => {
    outputCountStream(history.push(previousStateStream()))
  }, filteredStateStream);

  flyd.on(undo => {
    outputStream(history.pop());
    outputCountStream(history.length);
  }, undoStream);
};

const logstream = s => {
  s = s || stream();
  flyd.on(v => console.log('stream:', v.toJS ? v.toJS() : v), s);
  return s;
};

// the Renderer component manages the top-level app state.
// it also handles the undo history which takes a snapshot of
// the entire application state every time the 'entries' change
const rendererMixin = {
  updateData(transform) {
    // this is necessary because this.state.data is updated asynchronously
    // while this.data is always up-to-date immediately
    this.setState({
      data: this.data = transform(this.data)
    });
  },

  // returns a stream whose writes
  // directly update application state
  wiredStream(...path) {
    const s = stream();
    flyd.on(newData => {
      this.updateData(data => data.setIn(path, newData));
    }, s);
    return s;
  },

  getInitialState() {
    return {data: this.data = this.props.initialState}
  },

  componentWillMount() {
    // create our streams...

    this.stateStream = stream();
    this.previousStateStream = stream();
    this.nameUndoActionStream = stream();
    this.phoneUndoActionStream = stream();
    this.entriesUndoActionStream = stream();

    // and connect the wires...

    const {wiredStream} = this;

    createHistoryStore(
      subStream(this.previousStateStream, 'newEntry', 'name'),
      subStream(this.stateStream, 'newEntry', 'name'),
      this.nameUndoActionStream,
      wiredStream('newEntry', 'name'),
      wiredStream('nameHistoryCount'));

    createHistoryStore(
      subStream(this.previousStateStream, 'newEntry', 'phone'),
      subStream(this.stateStream, 'newEntry', 'phone'),
      this.phoneUndoActionStream,
      wiredStream('newEntry', 'phone'),
      wiredStream('phoneHistoryCount'));

    createHistoryStore(
      subStream(this.previousStateStream, 'entries'),
      subStream(this.stateStream, 'entries'),
      this.entriesUndoActionStream,
      wiredStream('entries'),
      wiredStream('entriesHistoryCount'));
  },

  edit (transform) {
    this.previousStateStream(this.data);
    this.updateData(transform);
    this.stateStream(this.data);
  }
};
const Renderer = component(rendererMixin, function Renderer() {
  return <App
    data={this.state.data}
    statics={{
      edit: this.edit,
      nameUndo: _=> this.nameUndoActionStream(1),
      phoneUndo: _=> this.phoneUndoActionStream(1),
      entriesUndo: _=> this.entriesUndoActionStream(1) }} />
});

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));


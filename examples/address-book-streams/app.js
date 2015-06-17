const React = require('react');
const {component, subedit} = require('elegant-react')({debug: true});
const {fromJS} = require('immutable');
const flyd = require('flyd');
const {stream} = flyd;

const newBlankEntry = _ => fromJS({name: '', phone: ''});

const data = fromJS({
  newEntry: newBlankEntry(),
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
      onChange={event =>
        edit(value => parser(event.target.value))
        } />
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
const NewEntry = component(function NewEntry({data}, {edit, addNewEntry}) {
  return (
    <form className="NewEntry" onSubmit={handleEvent(addNewEntry)}>
      <div className="NewEntry-title">ADD NEW</div>
      <NameInput
        className="NewEntry-name"
        value={data.get('name')}
        statics={{
          editName: subedit(edit, 'name') }} />
      <PhoneInput
        className="NewEntry-phone"
        value={data.get('phone')}
        statics={{
          editPhone: subedit(edit, 'phone') }} />
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

const App = component(function App ({data, historyLength}, {edit, undo}) {
  return (
    <div>
      <h1>Address Book Demo
        {historyLength ? <a href="#"
           onClick={handleEvent(undo)}
           className="UndoBtn">⎌</a> : null}
      </h1>
      <NewEntry
        data={data.get('newEntry')}
        statics={{
          edit: subedit(edit, 'newEntry'),
          addNewEntry: _=> pushNewEntry(edit) }} />
      <Entries
        entries={data.get('entries')}
        statics={{ editEntries: subedit(edit, 'entries') }} />
    </div>
  );
});


// pushes onto the stream only when
// data at (optional) sub-path changes
const createHistoryStream = (s, history, ...path) => {
  const s2 = stream();
  const last = arr => arr[arr.length - 1];

  flyd.on(data => {
    const nextValue = data.getIn(path);
    if (last(history) !== nextValue) {
      s2(nextValue);
    }
  }, s);

  return s2;
};

window.stream = stream;

// the Renderer component manages the top-level app state.
// it also handles the undo history which takes a snapshot of
// the entire application state every time the 'entries' change
const rendererMixin = {
  history: [],
  getInitialState() {
    this.historyStream = stream();
    this.entriesHistoryStream = createHistoryStream(this.historyStream, this.history, 'entries');

    flyd.on(entries => this.history.push(entries), this.entriesHistoryStream);

    return {data:this.props.data}
  },
  undo() {
    const lastEntries = this.history.pop();
    this.setState({data: this.state.data.set('entries', lastEntries) });
  },
  edit (transform) {
    this.historyStream(this.state.data);
    const newData = transform(this.state.data);
    this.setState({data: newData});
  }
};
const Renderer = component(rendererMixin, function Renderer() {
  return <App
    data={this.state.data}
    historyLength={this.history.length}
    statics={{ edit: this.edit, undo: this.undo }} />
});

React.render(<Renderer data={data} />, document.getElementById('example'));

import {stream} from 'flyd';

window.stream = stream;

export default class Atoam {
  constructor(state) {
    this.state = state;

    // directly-updated state, used to update "watcher" App component
    this.didSetState$ = stream();

    // used to indicate "user" update
    this.didUpdateState$ = stream();
  }

  _setState(state) {
    return this.didSetState$(this.state = state).val;
  }

  _updateState(transform) {
    return this._setState(this.state.update(transform));
  }

  getState() {
    return this.state;
  }

  updateState(transform) {
    return this.didUpdateState$(this._updateState(transform)).val;
  }
}

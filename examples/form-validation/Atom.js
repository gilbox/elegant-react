import {stream} from 'flyd';

const identity2 = x=>x=>x;

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

  silentlyUpdateState(transform) {
    return this._setState(this.state.update(transform));
  }

  updateState(transform) {
    return this.didUpdateState$(this._setState(this.state.update(transform))).val;
  }

  getState() {
    return this.state;
  }
}

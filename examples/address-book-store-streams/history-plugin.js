import flyd, {stream} from 'flyd';

const filterStream = (predicate, s) =>
  stream([s], (self) => {
    if (predicate(s())) self(s.val);
  });

export const createHistoryPlugin =
  (previousStateStream, stateStream, undoStream, outputStream, outputCountStream) => {
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

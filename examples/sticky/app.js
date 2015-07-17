import React, {Component} from 'react';
import Scroll from './scroll';
import BoundingRect from './bounding-rect';

const styles = {
  sticky: {position: 'fixed', top: 0},
  title: {marginBottom: '100px'},
  container: { width: '100vw', height: '400px', overflow: 'hidden', position: 'relative' },
  image: { width: '100%', minWidth: '800px' }
};

class App extends Component {
  render() {
    return  <div>
      <h1 style={styles.title}>The image is Sticky!</h1>
      <Scroll>{ scrollTop =>
        <BoundingRect>{rect =>
          <div style={{...(rect && rect.top <= 0 && styles.sticky)}}>
            <img src="bg.jpg" style={styles.image} />
          </div>
        }</BoundingRect>
      }</Scroll>
    </div>;
  }
};

React.render(<App />, document.getElementById('example'));

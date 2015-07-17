import React, {Component} from 'react';
import Scroll from './scroll';
import BoundingRect from './bounding-rect';

const containerHeight = '100px';

const styles = {
  sticky: {position: 'fixed', top: 0},
  title: {marginBottom: '100px'},
  container: { width: '100vw', height: containerHeight, overflow: 'hidden', position: 'relative' },
  image: { width: '100%', minWidth: '800px' },
  boundingRect: { height: containerHeight }
};

class App extends Component {
  render() {
    return  <div>
      <h1 style={styles.title}>The image is Sticky!</h1>
      <Scroll>{ scrollTop =>
        <BoundingRect style={styles.boundingRect}>{rect =>
          <div style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
            <img src="bg.jpg" style={styles.image} />
          </div>
        }</BoundingRect>
      }</Scroll>

      <div style={styles.moreStuff}>
        <h2> Wow wow </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>;
  }
};

React.render(<App />, document.getElementById('example'));

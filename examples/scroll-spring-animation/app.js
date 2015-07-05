import React, {Component} from 'react';
import {Spring} from './springs';
import Scroll from './scroll';
import RangeControl from './range-control';

const translate3d = (x,y,z) => `translate3d(${x}px, ${y}px, ${z}px)`;

const styles = {
  title: {marginBottom: '100px'},
  parallaxContainer: { width: '100vw', height: '400px', overflow: 'hidden', position: 'relative' },
  parallaxTitle: { zIndex: 10, position: 'absolute', top: '50px', left: '50px', color: 'white', textShadow: '0 10px 40px black',fontSize: '100px', fontWeight: 1000 },
  parallaxImage: { zIndex: 1, position: 'absolute' },
  control: {display: 'inline-block', padding: '0 20px'}
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { friction: 15, tension: 180 };
  }

  render() {
    return  <div>
      <h1 style={styles.title}>Scroll and Spring Animation Demo</h1>

      <RangeControl name="tension" type="range" min="1" max="200" style={styles.control}
        value={this.state.tension}
        onChange={event => this.setState({ tension: ~~event.target.value })}/>

      <RangeControl name="friction" min="1" max="30" style={styles.control}
        value={this.state.friction}
        onChange={event => this.setState({ friction: ~~event.target.value })}/>

      <Scroll>{ scrollTop =>
        <Spring to={scrollTop} friction={this.state.friction} tension={this.state.tension}>{ offsetY =>
          <div style={styles.parallaxContainer}>
            <h2 style={styles.parallaxTitle}>
              Music is ❤
            </h2>
            <img src="bg.jpg" width="1920px"
              style={{
                ...styles.parallaxImage,
                width: '100%',
                minWidth: '800px',
                transform: translate3d(0,-offsetY/2-50,0) }} />
          </div>
        }</Spring>
      }</Scroll>

      <div><a href="https://www.flickr.com/photos/ubeyd/19152848669/in/pool-83823859@N00/">
        image by Ubeyd</a></div>
    </div>;
  }
};

React.render(<App />, document.getElementById('example'));

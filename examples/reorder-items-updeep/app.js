import React, {Component} from 'react';
import ElegantReact from 'elegant-react';
import u from 'updeep';

const immutable = u({});
const {elegant} = ElegantReact({debug: true});

const initialState = immutable({
  items: [
    { name: 'one', value: 0 },
    { name: 'two', value: 1 },
    { name: 'three', value: 2 },
  ]
});

// reverse operation mutates array, so we must slice to clone array
const inc = n => n + 1;
const reverse = data => data.slice().reverse();

@elegant({statics: ['editValue']})
class Item extends Component {
  render() {
    const {item,editValue} = this.props;
    const onClick = _ => editValue(inc);
    return <li onClick={ onClick }>
      { item.name } - { item.value }
    </li>
  }
}
  
@elegant({statics: ['edit']})
class Items extends Component {
  render() {
    const {items,edit} = this.props;

    const children = items.map(
      (item, index) =>
        <Item key={item.name}
              item={item}
              editValue={ xf => edit(u({ [index]: { value: xf }})) } /> );

    return  <div key="root">
      <button onClick={_ => edit(reverse)}>reverse</button>
      <ul>{ children }</ul>
    </div>;
  }
}

@elegant({statics: ['edit']})
class App extends Component {
  render() {
    const {data,edit} = this.props;

    return  <div>
        <h1><i>statics</i> reorder demo</h1>
        <Items
            items={data.items}
            edit={ xf => edit(u({items: xf})) } />
    </div>;
  }
}

// the Renderer component manages the top-level app state
class Renderer extends Component {
  constructor() {
    super(...arguments);
    this.state = {data:this.props.initialState};
  }
  edit (transform) {
    this.setState({data: transform(this.state.data)})
  }
  render() {
    return <App
      data={this.state.data}
      edit={::this.edit} />
  }
}

React.render(<Renderer initialState={initialState} />, document.getElementById('example'));

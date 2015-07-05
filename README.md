# elegant-react

Functional React Architecture inspired by [omniscient](http://omniscientjs.github.io/) and [browser.html](https://github.com/mozilla/browser.html/).
Comments/suggestions/PRs are all welcome. This is still experimental.


## what is elegant-react?

`elegant-react` is an npm package. The source code for the npm package is in the `src/`
directory of this repo. This package provides a simple ES7 class decorator (`@elegant-react`)
that via a higher-order component that facilitates working with immutable data:

  - Automatically optimizes your shouldComponentUpdate. In order
    for this optimization to be efficient, all props passed to components should be
    scalar or immutable values.

  - Provides a simple subedit function that looks like this:

          const subedit = (edit, ...path) => transform =>
              edit(state => state.updateIn(path, transform));

  - Allows designated props to be treated as static so that changes to those
    props don't trigger render updates.

This github repo is also currently the home for a growing number of experiments
related to React functional patterns. The code for these experiemnts
live in the `examples/` dir. Some use the `elegant-react` npm package but others,
for the sake of simplicity, do not.


## about

This repo started off as a demonstration of some concepts that I wrote about in [this Medium article](https://medium.com/@gilbox/an-elegant-functional-architecture-for-react-faa3fb42b75b) and [this one](https://medium.com/p/7acf5d0cf00e) as well. However, since that time elegant-react
has continued to evolve and things have changed significantly. For the purpose of education,
you can check out the [elegant-react-og](https://github.com/gilbox/elegant-react) repo which
is a copy of the elegant-react repo immediately before it began to diverge from the content
in those two Medium articles.


## Installation

Install via npm

    npm install elegant-react


## Bringing it into your project

Require it:

    const {elegant, subedit} = require('elegant-react');

Or if you'd like to enable debug mode:

    const {elegant, subedit} = require('elegant-react')({debug: true});

Note: the `subedit` function is also available as `sub`. It's a personal
preference which you use. I like the way that `sub(edit, 'foo')` reads.

## react-native support

Require it:

    const {elegant, subedit} = require('elegant-react/native');

Or if you'd like to enable debug mode:

    const {elegant, subedit} = require('elegant-react/native')({debug: true});


## Using in codepen, jsbin, etc.

Add the script:

    //rawgit.com/gilbox/elegant-react/master/build/global/elegant-react.js

This exposes the global object `ElegantReact`.

    const {elegant, subedit} = ElegantReact;

Or if you'd like to enable `debug` mode:

    const {elegant, subedit} = ElegantReact({debug: true});


## Usage

First, make sure you understand the `subedit` (aka `sub`) function described in
[this Medium article](https://medium.com/@gilbox/an-elegant-functional-architecture-for-react-faa3fb42b75b)

Then add the `@elegant` decorator to your component, specifying which
props are static.

    const inc = n => n + 1;

    @elegant({statics: ['editValue']})
    class Item extends Component {
      render() {
        const {item,editValue} = this.props;
        const onClick = _ => editValue(inc);
        return <li onClick={ onClick }>
          { item.get('name') } - { item.get('value') }
        </li>
      }
    }

Now put that component to use:

    const reverse = data => data.reverse();

    @elegant({statics: ['edit']})
    class Items extends Component {
      render() {
        const {items,edit} = this.props;

        const children = items.toArray().map(
          (item, index) =>
            <Item key={item.get('name')}
                  item={item}
                  editValue={sub(edit, index,'value')} /> );

        return  <div key="root">
          <button onClick={_ => edit(reverse)}>reverse</button>
          <ul>{ children }</ul>
        </div>;
      }
    }

The rest of the source for this demo is [here](https://github.com/gilbox/elegant-react/blob/master/examples/reorder-items/app.js)
and you can [see it in action](http://gilbox.github.io/elegant-react/examples/reorder-items/demo.html)
as well.


## dependencies

You might notice that elegant-react has no `dependencies` nor `peerDependencies`
listed in it's package.json file. This is so it can support both react and react-native
from the same npm package.


## Run the examples

Clone this repo, then:

    npm install
    npm run examples

... and navigate to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)


## differences from omniscient

- elegant-react uses higher-order components where omniscient uses mixins
- elegant-react components use a decorator to specify which props are static while
  omniscient uses a single prop called `statics`.
- omniscient will perform deep comparisons on props of any type with `lodash.isequal`,
  elegant-react only performs shallow comparison assuming that if you need deep comparison
  you will use immutable objects or define your own `shouldComponentUpdate`
- elegant-react uses idiomatic react approach ([see this article](https://medium.com/p/7acf5d0cf00e) for more info)
- omniscient supports components as function without JSX
- omniscient supports cursors
- omniscient is battle-tested
- omniscient is unit-tested
- omniscient is ~18kb minified. elegant-react is ~4kb

## live examples

- [Phone Input](http://gilbox.github.io/elegant-react/examples/phone-input-field/demo.html)
- [Address Book w/"Store" streams](http://gilbox.github.io/elegant-react/examples/address-book-store-streams/demo.html)
- [Scroll Spring Animation](http://gilbox.github.io/elegant-react/examples/scroll-spring-animation/demo.html)
- [Reorder Items](http://gilbox.github.io/elegant-react/examples/reorder-items/demo.html)

## credit

This project was originally a simplified version of [omniscient](http://omniscientjs.github.io/)
which promotes the functional approach of [browser.html](https://github.com/mozilla/browser.html/).
However, it has since evolved to become a more unique thing of it's own (see *differences from omniscient* above)

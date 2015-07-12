# elegant-react

Functional React Architecture inspired by [omniscient](http://omniscientjs.github.io/) and [browser.html](https://github.com/mozilla/browser.html/).
Comments/suggestions/PRs are all welcome. This is still experimental.

BTW, you might also find it useful to use this in conjunction with [react-derive](https://github.com/gilbox/react-derive). And check out **[elegant-react-hot-demo](https://github.com/gilbox/elegant-react-hot-demo)** which combines them.


## what is elegant-react?

`elegant-react` is an npm package. The source code for the npm package is in the `src/`
directory of this repo.

This github repo is also currently the home for a growing number of experiments
related to React functional patterns. The code for these experiments
live in the `examples/` dir. Some use the `elegant-react` npm package but others,
for the sake of simplicity, do not.

The `elegant-react` npm package provides:

  - A simple ES7 class decorator ([`@elegant-react`](https://github.com/gilbox/elegant-react/blob/master/src/create-elegant-decorator.js))
    that via a higher-order component (HoC) facilitates working with immutable data:

      * Automatically optimizes your shouldComponentUpdate. In order
        for this optimization to be efficient, all props passed to components should be
        scalar or immutable values. If you need to further optimize `shouldComponentUpdate`
        you can define your own, and because the `@elegant` decorator is a HoC there's
        no need to worry about collisions.

      * Allows designated props to be treated as *static* so that changes to those
        props don't trigger render updates.

  - A simple [subedit](https://github.com/gilbox/elegant-react/blob/master/src/index.js#L4) function that looks like this:

          const subedit = (edit, ...path) => transform =>
              edit(state => state.updateIn(path, transform));


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

Import it:

    import {elegant, subedit} from 'elegant-react';

Or if you'd like to enable debug mode:

    import ElegantReact from 'elegant-react';
    const {elegant, subedit} = ElegantReact({debug: true});

Note: the `subedit` function is also available as `sub`. It's a personal
preference which you use. I like the way that `sub(edit, 'foo')` reads.

## react-native support

Require it:

    import {elegant, subedit} from 'elegant-react/native';

Or if you'd like to enable debug mode:

    import ElegantReact from 'elegant-react/native';
    const {elegant, subedit} = ElegantReact({debug: true});


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

Although it's not a hard dependency, the provided `subedit` function is known
to work with `immutable-js`. If you wish to use a different immutable lib,
just create your own subedit function and it should work.

- subedit for [mori](http://swannodette.github.io/mori/) *(untested)*

        const subedit = (edit, ...path) => transform =>
            edit(state => mori.updateIn(state, path, transform));


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
  A very simple example of how to use `elegant-react` and a functional approach to creating
  an input component with custom formatting and masking rules.
- [Address Book with Stream-based Plugins](http://gilbox.github.io/elegant-react/examples/address-book-store-streams/demo.html)
  Demonstrates how to use streams to create an undo/redo plugin.
  Introduces the concepts of `previousEditStream`, `editStream`, and `wiredStream` that allows a plugin to gain read and/or write
  access only to specific parts of the application state.
- [Scroll Spring Animation](http://gilbox.github.io/elegant-react/examples/scroll-spring-animation/demo.html)
  Demonstrates how to use `react-springs` (or `react-animation`) and how to create a scroll
  handling component using the same functional technique.
- [Reorder Items](http://gilbox.github.io/elegant-react/examples/reorder-items/demo.html)
  A very simple demo showing how to use `elegant-react`.
- [Form Validation (wip)](http://gilbox.github.io/elegant-react/examples/form-validation/demo.html)
  Demonstrates how to create a robust plugin to handle validating form fields with a
  json scema using the `jjv` npm package. Also demonstrates how to compose
  decorators by combining `@elegant` with `@validationDecorator`.


- **[elegant-react-hot-demo](https://github.com/gilbox/elegant-react-hot-demo)** - This github repo demonstrates stream-based plugins (with flyd), animation with react-motion, hot reload, and time-travel scrubbing.

## credit

This project was originally a simplified version of [omniscient](http://omniscientjs.github.io/)
which promotes the functional approach of [browser.html](https://github.com/mozilla/browser.html/).
However, it has since evolved to become a more unique thing of it's own (see *differences from omniscient* above)

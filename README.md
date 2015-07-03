# elegant-react

Functional React Architecture inspired by [omniscient](http://omniscientjs.github.io/) and [browser.html](https://github.com/mozilla/browser.html/).
Comments/suggestions/PRs are all welcome. This is still experimental.


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

Add the `@elegant` decorator to your component, specifying which
props are static.

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

## credit

This project was originally a simplified version of [omniscient](http://omniscientjs.github.io/)
which promotes the functional approach of [browser.html](https://github.com/mozilla/browser.html/).
However, it has since evolved to become a more unique thing of it's own (see *differences from omniscient* above)

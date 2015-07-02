# elegant-react

Functional React Architecture based on [omniscient](http://omniscientjs.github.io/) and [browser.html](https://github.com/mozilla/browser.html/).
Comments/suggestions/PRs are all welcome.
This is still experimental. If you are interested in something like
this for a production application, consider using [omniscient](http://omniscientjs.github.io/) instead.


## about

See [this Medium article](https://medium.com/@gilbox/an-elegant-functional-architecture-for-react-faa3fb42b75b) and [this one](https://medium.com/p/7acf5d0cf00e) as well

## Installation

Install via npm

    npm install elegant-react

## Using in your project (functional style)

Require it:

    var {component, subedit} = require('elegant-react');

Or if you'd like to enable debug mode:

    var {component, subedit} = require('elegant-react')({debug: true});

## Using in your project (classical style)

Require it:

    var {elegant, subedit} = require('elegant-react/classy');

Or if you'd like to enable debug mode:

    var {elegant, subedit} = require('elegant-react/classy')({debug: true});

## react-native support

Same as the previous two sections, except replace:

- `require('elegant-react')` with `require('elegant-react/native')`
- `require('elegant-react/classy')` with `require('elegant-react/classy/native')`

## Using in codepen, jsbin, etc.

Add the script:

    //rawgit.com/gilbox/elegant-react/master/build/global/elegant-react.js

This exposes the global object `ElegantReact`.

Now grab the component function:

    var component = ElegantReact.component;

Or if you'd like to enable `debug` mode:

    var component = ElegantReact({debug: true}).component;


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

- omniscient will perform deep comparisons on props of any type with `lodash.isequal`.
- omniscient supports components as function without JSX
- omniscient supports cursors
- omniscient is battle-tested
- omniscient is unit-tested
- omniscient is ~18kb minified. elegant-react is <3kb minified (or ~4kb for classical style).
- omniscient doesn't have the same idiomatic approach found in the `elegant-react/classy` package ([see this article](https://medium.com/p/7acf5d0cf00e) for more info)

## live examples

- [Phone Input](http://gilbox.github.io/elegant-react/examples/phone-input/demo.html)
- [Phone Input (using classes)](http://gilbox.github.io/elegant-react/examples/phone-input-classy/demo.html)
- [Address Book](http://gilbox.github.io/elegant-react/examples/address-book/demo.html)
- [Address Book w/streams](http://gilbox.github.io/elegant-react/examples/address-book-streams/demo.html)
- [Address Book w/"Store" streams](http://gilbox.github.io/elegant-react/examples/address-book-store-streams/demo.html)
- [Address Book w/"Store" streams (using classes)](http://gilbox.github.io/elegant-react/examples/address-book-store-streams-classy/demo.html)
- [Scroll Spring Animation](http://gilbox.github.io/elegant-react/examples/scroll-spring-animation/demo.html)

## credit

This project is essentially a simplified version of [omniscient](http://omniscientjs.github.io/)
and promotes the functional approach of [browser.html](https://github.com/mozilla/browser.html/)

# elegant-react

Functional React Architecture based on [omniscient](http://omniscientjs.github.io/). 
I've created this repo for use in my own projects. You're welcome to use it as well. 
Comments/suggestions/PRs are all welcome.
If you are interested in something like
this for a production application, consider using [omniscient](http://omniscientjs.github.io/) instead.


## about

See [this Medium article](https://medium.com/@gilbox/an-elegant-functional-architecture-for-react-faa3fb42b75b)


## Using in your project

Install via npm

    npm install elegant-react
    
Require it:

    var component = require('elegant-react').component;
    
Or if you'd like to enable debug mode:

    var component = require('elegant-react')({debug: true}).component;
    
    
## react-native support

Same as the previous section, except replace `require('elegant-react')` with `require('elegant-react/native')`
    
    
## Using in codepen, jsbin, etc.

Add the script:

    //rawgit.com/gilbox/elegant-react/master/build/global/elegant-react.min.js
    
This exposes the global object `ElegantReact`.

Now grab the component function:

    var component = ElegantReact.component;
    
Or if you'd like to enable `debug` mode:

    var component = ElegantReact({debug: true}).component;


## Run the examples

Clone this repo, then:

    npm install
    npm run examples
    
... and navigate to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

## credit

This project is essentially a simplified version of [omniscient](http://omniscientjs.github.io/)

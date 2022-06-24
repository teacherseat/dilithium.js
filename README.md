# Dilithium

To boldy go where no javascript framework has gone before.
A conventional and opionated javascript framework build ontop of
[MithrilJs](https://mithril.js.org/) with developer productivty in mind.

## Divisons of Code

The Dilithium codebase is divided into three departments:

* [Command](https://github.com/teacherseat/Dilithium/tree/master/src/command)       - common views you can extend eg. List, Show, Collection
* [Sciences](https://github.com/teacherseat/Dilithium/tree/master/src/sciences)     - common components eg. Field, Form, Popup
* [Operations](https://github.com/teacherseat/Dilithium/tree/master/src/operations) - core functionality eg. Api, Model, View

## How to Build

Install all the dependencies
```sh
npm i
```

We use a Cakfile. This is similar to a Rubyfile but its for coffescript.
In order to use the cake command you'll to need globally install
coffescript

```sh
npm i --global coffeescript
```

To compile the code:
```
cake compile
```

The compiled code will output to the `build` directory


## How to specify local package for development


npm 2.0 supprts installing local packages with the following command:

```
npm i --save /path/to/dilithium.js
```

you'll see something like this in your package.json

```
"dependencies": {
  "dilithium-js": "file:../../dilithium.js"
}
```

## Debugging

When you attempt to reference dilithium.js with a local path for
development you will run into this error.

```
ERROR in /Users/andrewbrown/Sites/teacherseat/dilithium.js/build/popup/popup.js
Module not found: Error: Can't resolve 'mithril/stream' in '/Users/andrewbrown/Sites/teacherseat/dilithium.js/build/popup'
 @ /Users/andrewbrown/Sites/teacherseat/dilithium.js/build/popup/popup.js 10:37-62
 @ /Users/andrewbrown/Sites/teacherseat/dilithium.js/build/index.js
 @ ./javascripts/app.coffee
```


What you need to do is temporary mass find and replace on src from this:

```
import * as m from 'mithril'
```

to this:

```
import * as m from './../../node_modules/mithril'
```

And then you need to revert it back when you've updated dilithium.js

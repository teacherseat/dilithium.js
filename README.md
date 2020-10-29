# Dilithium

To boldy go where no javascript framework has gone before.
A conventional and opionated javascript framework build ontop of
[MithrilJs](https://mithril.js.org/) with developer productivty in mind.

## Divisons of Code

The Dilithium codebase is divided into three departments:

* [Command](https://github.com/ExamProCo/Dilithium/tree/master/src/command)       - common views you can extend eg. List, Show, Collection
* [Sciences](https://github.com/ExamProCo/Dilithium/tree/master/src/sciences)     - common components eg. Field, Form, Popup
* [Operations](https://github.com/ExamProCo/Dilithium/tree/master/src/operations) - core functionality eg. Api, Model, View

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


## How to specific local package for development


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


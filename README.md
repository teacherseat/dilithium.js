# Dilithium

To boldy go where no javascript framework has gone before.
A tiny, conventional and opionated javascript framework build ontop of
[MithrilJs](https://mithril.js.org/) with developer productivity in mind.

## How to Use

## Core
- [base](#base)
- [component](#component)
- [events](#events)

## Data
- [api](#api)
- [model](./src/model/README.md)
- [attribute](./src/attribute/README.md)
- [attribute_array](./src/attribute_array/README.md)
- [attribute_model_array](./src/attribute_model_array/README.md)

## Fields
- [field](#field)
- [field_checkbox](#field_checkbox)
- [field_err](#field_err)
- [field_file](#field_file)
- [field_input_password](#field_input_password)
- [field_input_text](#field_input_text)
- [field_radio](#field_radio)
- [field_select](#field_select)
- [field_textarea](#field_textarea)

## Views
- [view](#view)
- [form](#form)
- [list](#list)
- [show](#show)
- [collection](#collection)
- [member](#member)
- [popup](#popup)

## Utils
- [location](#location)
- [util](#util)


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


npm 3.0 supprts installing local packages with the following command:

```
npm i --save /Users/andrewbrown/Sites/dilithium.js
```

you'll see something like this in your package.json

```
"dependencies": {
  "dilithium-js": "file:../../dilithium.js"
}
```


## Pathing issues


In local development it can be hard for nodejs to find mithril
and you have to temporarily fix the paths.

So change this:

```
import { m } from 'mithril'
import * as m from 'mithril'
import stream from 'mithril/stream'
```

to this:

```coffee
import { m } from './../../node_modules/mithril/mithril.js'
import * as m from './../../node_modules/mithril/mithril.js'
import stream from './../../node_modules/mithril/stream/stream.js'
```

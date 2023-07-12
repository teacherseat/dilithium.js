# Dilithium

To boldy go where no javascript framework has gone before.
A tiny, conventional and opionated javascript framework build ontop of
[MithrilJs](https://mithril.js.org/) with developer productivity in mind.

## How to Use

- [api](#api)
- [attribute](#attribute)
- [attribute_array](#attribute_rray)
- [attribute_model_array](#attribute_model_array)
- [base](#base)
- [collection](#collection)
- [component](#component)
- [events](#events)
- [field](#field)
- [field_checkbox](#field_checkbox)
- [field_err](#field_err)
- [field_file](#field_file)
- [field_input_password](#field_input_password)
- [field_input_text](#field_input_text)
- [field_radio](#field_radio)
- [field_select](#field_select)
- [field_textarea](#field_textarea)
- [form](#form)
- [list](#list)
- [location](#location)
- [member](#member)
- [model](#model)
- [popup](#popup)
- [show](#show)
- [util](#util)
- [view](#view)

### api

### attribute

### attribute_array

### attribute_model_array

### base

### collection

### component

### events

### field

### field_checkbox

### field_err

### field_file

### field_input_password

### field_input_text

### field_radio

### field_select

### field_textarea

### form

### index.coffee

### list

### location

### member

### model

### popup

### show

### util

### view

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
npm i --save /path/to/dilithium.js
```

you'll see something like this in your package.json

```
"dependencies": {
  "dilithium-js": "file:../../dilithium.js"
}
```


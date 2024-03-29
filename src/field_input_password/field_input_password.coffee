import { m } from 'mithril'
import { Component } from './../component/component.js'

export class InputPassword extends Component
  expects:
    attribute: true
    handle: true
    label:
      allow_nil: true
    placeholder:
      allow_nil: true
    inputmode:
      allow_nil: true
    pattern:
      allow_nil: true
    autocomplete:
      allow_nil: true
    onchange:
      allow_nil: true
    disabled:
      allow_nil: true
    readonly:
      allow_nil: true
  _onchange:(ev)=>
    @attribute.value ev.target.value
    if @onchange
      @onchange()
  attrs:=>
    attrs =
      onchange: @_onchange
      value: @attribute.value()
    attrs.placeholder = @placeholder if @placeholder
    attrs.inputmode = @inputmode if @inputmode
    attrs.pattern = @pattern if @pattern
    attrs.autocomplete = @autocomplete if @autocomplete
    attrs.disabled = true if @disabled
    attrs.readonly = true if @readonly
    attrs
  classes:=>
    if @attribute.errors().length > 0
      'err'
    else
      ''
  view:(vnode)=>
    m ".field.password_field.#{@handle}", class: @classes(),
      if @label
        m 'label', @label
      m "input[type='password']", @attrs()
      vnode.children

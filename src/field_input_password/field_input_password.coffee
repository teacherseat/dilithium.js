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
    onchange:
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

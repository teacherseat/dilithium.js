import { m } from 'mithril'
import { Component } from './../component/component.js'

export class InputText extends Component
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
    onkeyup:
      allow_nil: true
    onkeydown:
      allow_nil: true
    onkeypress:
      allow_nil: true
    disabled:
      allow_nil: true
    readonly:
      allow_nil: true
  _onkeyup:(ev)=>
    @onkeyup(ev) if @onkeyup
  _onkeydown:(ev)=>
    @onkeydown(ev) if @onkeydown
  _onkeypress:(ev)=>
    @onkeypress(ev) if @onkeypress
  _oninput:(ev)=>
    @attribute.value ev.target.value
    @onchange(ev) if @onchange
  _onchange:(ev)=>
    @attribute.value ev.target.value
    @onchange(ev) if @onchange
  attrs:=>
    attrs =
      onchange: @_onchange
      oninput: @_oninput
      onkeyup: @_onkeyup
      onkeypress: @_onkeypress
      onkeydown: @_onkeydown
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
  render:(vnode)=>
    m ".field.text_field.#{@handle}", class: @classes(),
      if @label
        m 'label', @label
      m "input[type='text']", @attrs()
      vnode.children

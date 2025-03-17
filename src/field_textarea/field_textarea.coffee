import { m } from 'mithril'
import { Component } from './../component/component.js'

export class Textarea extends Component
  expects:
    attribute: true
    handle: true
    label:
      allow_nil: true
    oninput:
      allow_nil: true
    onchange:
      allow_nil: true
    onkeyup:
      allow_nil: true
    onkeydown:
      allow_nil: true
    onkeypress:
      allow_nil: true
    placeholder:
      allow_nil: true
    naked:
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
    @oninput(ev) if @oninput
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
    attrs.disabled = true if @disabled
    attrs.readonly = true if @readonly
    attrs.placeholder = @placeholder if @placeholder
    attrs
  classes:=>
    if @attribute.errors().length > 0
      'err'
    else
      ''
  view:(vnode)=>
    if @naked is true
      m "textarea", @attrs(), @attribute.value()
    else
      m ".field.textarea.#{@handle}", class: @classes(),
        if @label
          m 'label', @label
        m "textarea", @attrs()
        vnode.children

import { m } from 'mithril'
import { Component } from './../component/component.js'

export class Textarea extends Component
  expects:
    attribute: true
    handle: true
    onchange:
      allow_nil: true
    placeholder:
      allow_nil: true
    label:
      allow_nil: true
    naked:
      allow_nil: true
  _onchange:(ev)=>
    @attribute.value ev.target.value
    if @onchange
      @onchange()
  attrs:=>
    attrs =
      onchange: @_onchange
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
        m "textarea", @attrs(), @attribute.value()

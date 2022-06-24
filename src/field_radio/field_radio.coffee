import { m } from 'mithril'
import { Component } from './../component/component.js'

export class Radio extends Component
  expects:
    attribute: true
    handle: true
    name: true
    value: true
    label:
      allow_nil: true
  ev_onchange:(ev)=>
    @attribute.value @value
  attrs:->
    attrs =
      onchange: @ev_onchange
      name: @name
    attrs.checked = true if @attribute.value() is @value
    attrs
  view:(vnode)=>
    m ".field.radio.#{@handle}",
      m "input[type='radio']", @attrs()
      if @label
        m 'label', @label

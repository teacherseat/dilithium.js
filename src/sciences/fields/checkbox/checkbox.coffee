import * as m from 'mithril'
import { Component } from './../../../operations/component/component.js'

export default class Checkbox extends Component
  expects:
    attribute: true
    handle: true
    label: true
    value: true
    value_unselected:
      allow_nil: true
  ev_onclick:(ev)=>
    if @attribute.value()
      @attribute.value @value_unselected
    else
      @attribute.value @value
  attrs:=>
    attrs =
      onclick: @ev_onclick
      value: @attribute.value()
    attrs.checked = true if @attribute.value()
    attrs
  render:=>
    m ".field.checkbox.#{@handle}",
      m 'label', @label
      m "input[type='checkbox']", @attrs()

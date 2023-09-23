import { m } from 'mithril'
import { Component } from './../component/component.js'

export class Checkbox extends Component
  expects:
    attribute: true
    handle: true
    label: true
    value: true
    value_unselected:
      allow_nil: true
    disabled:
      allow_nil: true
    readonly:
      allow_nil: true
  ev_onclick:(ev)=>
    switch @attribute._attribute_type
      when 'AttributeArray'
        index = @attribute.value().indexOf @value
        if index is -1
          @attribute.value().push @value
        else
          @attribute.value().splice(index,1)
      when 'Attribute'
        if @attribute.value()
          @attribute.value @value
        else
          @attribute.value @value_unselected
  attrs:=>
    attrs =
      onclick: @ev_onclick
    attrs.disabled = true if @disabled
    attrs.readonly = true if @readonly
    switch @attribute._attribute_type
      when 'AttributeArray'
        attrs.value   = @attribute.value().indexOf(@value) != -1
        attrs.checked = true if @attribute.value().indexOf(@value) != -1
      when 'Attribute'
        attrs.value   = @attribute.value()
        attrs.checked = true if @attribute.value()
    attrs
  render:(vnode)=>
    m ".field.checkbox.#{@handle}",
      m 'label', @label
      m "input[type='checkbox']", @attrs()
      vnode.children

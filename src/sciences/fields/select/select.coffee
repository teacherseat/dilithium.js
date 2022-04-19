import { m } from '../../../../node_modules/mithril'
import { Component } from './../../../operations/component/component.js'

export class Select extends Component
  expects:
    attribute: true
    options: true
    handle: true
    label:
      allow_nil: true
    onchange:
      allow_nil: true
    include_blank:
      allow_nil: true
  ev_onchange:(ev)=>
    @attribute.value ev.target.value
    if @onchange
      @onchange(ev.target.value)
  attrs:=>
    console.log 'attrs', @handle, @attribute.value()
    attrs =
      onchange: @ev_onchange
      value: @attribute.value()
    attrs
  option:(option)=>
    console.log @handle, @attribute.value(), option.id, option.id is @attribute.value()
    m 'option', value: option.id, option.name
  view:(vnode)=>
    console.log 'select'
    m ".field.select.#{@handle}",
      if @label
        m 'label', @label
      m "select", @attrs(),
        if @include_blank
          m 'option'
        for option in @options
          @option(option)

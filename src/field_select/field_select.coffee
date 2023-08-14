import { m } from 'mithril'
import { Component } from './../component/component.js'

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
    disabled:
      allow_nil: true
    readonly:
      allow_nil: true
  ev_onchange:(ev)=>
    @attribute.value ev.target.value
    if @onchange
      @onchange(ev.target.value)
  attrs:=>
    attrs =
      onchange: @ev_onchange
      value: @attribute.value()
    attrs.disabled = true if @disabled
    attrs.readonly = true if @readonly
    attrs
  option:(option)=>
    m 'option', value: option.id, option.name
  view:(vnode)=>
    m ".field.select.#{@handle}",
      if @label
        m 'label', @label
      m "select", @attrs(),
        if @include_blank
          if typeof(@include_blank) is 'string'
            m 'option',
              @include_blank
          else
            m 'option'
        for option in @options
          @option(option)
      vnode.children

import { m } from 'mithril'
import { Component } from './../../../operations/component/component'

export class InputPassword extends Component
  oninit:(vnode)->
    super(vnode)
    @attribute = vnode.attrs.attribute
    @handle = vnode.attrs.handle
    @placeholder = vnode.attrs.placeholder
  onkeyup:(ev)=>
    @attribute.value ev.target.value
  attrs:=>
    attrs =
      onkeyup: @onkeyup
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

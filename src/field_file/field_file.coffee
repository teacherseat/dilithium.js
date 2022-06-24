import { m } from 'mithril'
import { Component } from './../component/component.js'

export class FileField extends Component
  expects:
    attribute: true
    handle: true
    label:
      allow_nil: true
    button_label:
      allow_nil: true
    multi:
      allow_nil: true
    onchange:
      allow_nil: true
  _onchange:(ev)=>
    filelist = ev.target.files
    files = null
    if @multi
      if filelist.length is 1
        files = [filelist[0]]
      else if filelist.length > 1
        files = []
        for file in filelist
          files.push file
    else
      if filelist.length is 1
        files = filelist[0]
    @attribute.value files
    @onchange() if @onchange
  click:(vnode)=>
    (ev)->
      document.querySelector('.field.file_field input').click()
  attrs:=>
    attrs =
      onchange: @_onchange
    attrs.multiple = true if @multi
    attrs
  classes:=>
    if @attribute.errors().length > 0
      'err'
    else
      ''
  render:(vnode)=>
    m ".field.file_field.#{@handle}", class: @classes(),
      if @label
        m 'label', @label
      if @button_label
        m '.upload.button.bttn', onclick: @click(vnode), @button_label
      m "input[type='file']", @attrs()



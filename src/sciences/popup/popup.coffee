import * as m from 'mithril'
import stream from 'mithril/stream'
import Component from './../../operations/component/component.js'

export class Popup extends Component
  constructor:(args)->
    super args
    @popped = stream(false)
  oninit:(vnode)=>
    super(vnode)
    @$on "#{@handle}#pop", @pop
  onremove:(vnode)=>
    super(vnode)
    @$off "#{@handle}#pop", @pop
  pop:(data)=>
    @popped(true)
    @reindex(data)
  reindex:(data)=>
  heading:=>
  close:=>
    @popped(false)
  classes:=>
    classes = []
    classes.push 'pop' if @popped()
    classes.join ' '
  view:(vnode)=>
    return unless @popped()
    m ".popup_wrap.#{@handle}", class: @classes(),
      m '.popup',
        m '.popup_heading',
          m '.title', @heading()
          m '.bttn.close.fa.fa-times', onclick: @close
        m '.popup_content',
         @render()

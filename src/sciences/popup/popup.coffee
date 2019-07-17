import * as m from 'mithril'
import stream from 'mithril/stream'
import { Component } from './component'

export class Popup extends Component
  constructor:(args)->
    super args
    @popped = stream(false)
    @classes = @classes.bind(@)
    @pop     = @pop.bind(@)
    @close   = @close.bind(@)
    @heading = @heading.bind(@)
    @popped  = @popped.bind(@)
    @render  = @render.bind(@)
    @reindex = @reindex.bind(@)
    @$on "#{@handle}#pop", @pop
  pop:(data)->
    console.log 'popping', data
    @popped(true)
  reindex:->
  close:->
    @popped(false)
  classes:->
    classes = []
    classes.push 'pop' if @popped()
    classes.join ' '
  view:(vnode)=>
    m ".popup_wrap.#{@handle}", class: @classes(),
      m '.popup',
        m '.popup_heading',
          m 'span', @heading()
          m '.fa.fa-times', onclick: @close
        m '.popup_content',
          @render()

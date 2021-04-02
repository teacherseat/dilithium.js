import { underscore } from 'inflection'
import { m } from 'mithril'
import { Base } from './../base/base'

export class View extends Base
  constructor:(args)->
    super(args)
  oninit:(vnode)->
    super(vnode)
    @reindex()
    body_location   = @body.location if @body && @body.location
    body_location ||= underscore(@constructor.name)
    body_view       = @body.view if @body && @body.view
    document.body.setAttribute('location',body_location) if body_location
    document.body.setAttribute('view'    , body_view)    if body_view
    return true
  # reindex is where you would normally make
  # your api call. If reindex is not overwritten
  # then it will immediately return sucess telling
  # the page to load.
  reindex:=>
    @loading = true
    @success()
  # success is where you would assign the return data
  # if you had made an api call
  onremove:(vnode)=>
    document.body.classList.remove(@body_class) if @body_class
  err:(err)=>
    if err.code is 403
      if err.response && err.response.redirect_to
        window.location.href = err.response.redirect_to
      else
        window.location.href = '/'
    else if err.code is 404
      window.location.href = '/'

  success:(data={})=>
    @model   = data
    @loading = false
  view:(vnode)->
    if @loading
      m '.loading'
    else
      @render(vnode)

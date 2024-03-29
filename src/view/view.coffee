import { underscore } from 'inflection'
import { m } from 'mithril'
import { Base } from './../base/base.js'

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
  ## reindex is where you would normally make
  ## your api call. If reindex is not overwritten
  ## then it will immediately return sucess telling
  # the page to load.
  reindex:=>
    @loading = true
    @success()
  # success is where you would assign the return data
  # if you had made an api call
  onremove:(vnode)=>
    document.body.removeAttribute('location')
    document.body.removeAttribute('view')
  err:(err)=>
    if err.code is 403
      # 403 is access denied
      if err.response && err.response.redirect_to
        window.location.href = err.response.redirect_to
      else
        window.location.href = '/'
    # 404 is page not found, send them to home page
    else if err.code is 404
      window.location.href = '/'
  success:(data={})=>
    @model   = data
    @loading = false
  view:(vnode)->
    if @page_error && @page_error.template
      @page_error.template(vnode)
    else if @loading
      m '.loading'
    else
      @render(vnode)

import { v4 as uuidv4 } from 'uuid'
import { $register, $deregister } from './../events/events.js'

export class Base
  # unique way of indentifying each components
  scope:->
    uuidv4()
  # register events and bind to instance methods
  # eg. @$on 'users/index', @success
  $on: (name,fun,opts={})=>
    $register @_scope, name, fun
  $off:(name)=>
    $deregister @_scope, name
  oninit:(vnode)=>
    return unless vnode
    @_scope = @scope()
    for name,func of @events
      @$on name, @[func]
    return true
  onremove:(vnode)=>
    # remove events
    for name,func of @events
      @$off name, @[func]
    return true
  view:(vnode)->
    @render(vnode)

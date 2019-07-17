import uuid from 'uuid/v4'
import { $register } from './events'
export default class Base
  scope:->
    uuid()
  $on: (name,fun,opts={})=>
    $register @scope(), name, fun
  $export: (args...)=>
    for arg in args
      @$[arg] = @[arg]

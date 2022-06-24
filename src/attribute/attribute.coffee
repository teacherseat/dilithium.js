import stream from '/mithril/stream'

export class Attribute
  _attribute_type: 'Attribute'
  constructor:(attrs)->
    @kind = stream()
    @_value = stream(null)
    @errors = stream([])
  value:(value)=>
    if value is undefined
      @_value()
    else if typeof value is 'string' && value.trim() is ''
      @_value(null)
    else if value is null
      @_value(null)
    else
      @_value(value)

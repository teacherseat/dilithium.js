import stream from 'mithril/stream'

export class Model
  constructor:(attrs={})->
    @id = stream(attrs.id || null)
    for k,v of @attributes
      @[k] = v
  params:=>
    attrs = {}
    attrs.id = @id()
    for k,v of @attributes
      attrs[k] = @[k].value()
    attrs
  reset:(attrs={})=>
    @id(attrs.id || null)
    for k,v of @attributes
      if attrs[k]?
        val = attrs[k]
      else
        val = v
      @[k].value(val)


import stream from 'mithril/stream'
import Attribute from './../attribute/attribute.js'

# Represent an array of attributes
# eg. a list of checkboxes
export class AttributeArray
  constructor:->
    @array = []
    @value = stream(null)
  at:(v)=>
    @array[v]
  reset:(size)=>
    @array = []
    for v in [0..size-1]
      @array.push new Attribute()
  values:=>
    values = []
    for a in @array
      if a.value()
        values.push a.value()
    values



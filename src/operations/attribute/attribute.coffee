import stream from '../../../node_modules/mithril/stream'

export class Attribute
  _attribute_type: 'Attribute'
  constructor:->
    @value = stream(null)
    @errors = stream([])

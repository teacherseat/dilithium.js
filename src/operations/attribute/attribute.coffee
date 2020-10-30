import stream from 'mithril/stream'

export class Attribute
  constructor:->
    @value = stream(null)
    @errors = stream([])


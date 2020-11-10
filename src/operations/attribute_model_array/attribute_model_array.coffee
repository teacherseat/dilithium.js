import stream from 'mithril/stream'
# Represent an array of models
# eg. a list of checkboxes
export class AttributeModelArray
  constructor:->
    @array = []
    @value = stream(null)
  at:(v)=>
    @array[v]
  reset:(size,model)=>
    @array = []
    for v in [0..size-1]
      @array.push new model()
  values:(opts)=>
    values = []
    for a in @array
      values.push a.params(opts)
    values


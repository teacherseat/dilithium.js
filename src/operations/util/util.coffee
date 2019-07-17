export Util =
  create:(collection,data,opts={})->
    collection ||= []
    if opts.reverse
      collection.unshift data
    else
      collection.push data
    data
  update:(collection,data)->
    model = null
    for m in collection
      model = m if data.id is m.id
    i = collection.indexOf model
    return null if i is -1
    collection[i] = data
    collection[i]
  destroy:(collection,data)->
    model = null
    for m in collection
      model = m if data.id is m.id
    i = collection.indexOf model
    return null if i is -1
    collection.splice i, 1
    model
  find_by_id:(collection,id)->
    result = null
    for model in collection
      result = model if model.id is id
    result

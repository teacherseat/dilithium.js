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
  find_by:(key,collection,value)->
    result = null
    for model in collection
      result = model if model[key] is value
    result
  find_by_id:(collection,id)->
    result = null
    for model in collection
      result = model if model.id is id
    result
  is_array: (value) ->
    value and
        typeof value is 'object' and
        value instanceof Array and
        typeof value.length is 'number' and
        typeof value.splice is 'function' and
        not ( value.propertyIsEnumerable 'length' )
  # This utility is to provide a shorthand
  # when applying classes to html elements.
  #
  # The key is the class that will be applied
  # The value is the expression to determine if the class should be applied
  #
  # A boolean of true here would set a class called active:
  # eg. {'active': true}
  #
  # An a javascript expression as the evaluator
  # eg. {'active': @hello is 'world'}
  #
  # You can use the coffeescript nil expression on variable
  # eg. {'active': @active?}
  #
  # You can have dynamic keys that are either variables or functions
  # They must be passed a string with the @ sign. If its a function
  # it will simplify be called. The function takes no arguments
  # If its a variable the string value will become the class name
  # {
  #   "@style": style?
  # }
  #
  #
  classes:(hash)->
    return [] unless hash
    classes = []
    for class_name,expression of hash
      apply_class_name = typeof(expression) is 'function' && expression() is true ||
                         typeof(expression) is 'boolean'  && expression   is true

      if apply_class_name
        # variable or a function
        if class_name[0] is '@'
          property = class_name.substr(1,class_name.length)
          if @[property]?
            if typeof(@[property]) is 'function'
              classes.push @[property]()
            else
              classes.push @[property]
        else
          classes.push class_name
    return classes

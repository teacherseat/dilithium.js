import stream from 'mithril/stream'


export class Model
  constructor:(attrs={})->
    @id = stream(attrs.id || null)
    for k,v of @attributes
      @[k] = v()

  errors:(attributes={})=>
    for k,v of attributes
      if @[k]
        @[k].errors(v)

  # exclude - allows you to exclude params
  # eg. exclude: ['exams']
  #
  # rename - allows you to change the name of the param
  # eg. rename: {exams: 'exam_ids' }
  params:(opts={})=>
    attrs = {}
    attrs.id = @id()
    for k,v of @attributes
      # if the exclude key exists ignore it.
      if !!opts.exclude is false || (opts.exclude && opts.exclude.indexOf(k) is -1)
        # rename key
        key =
        if opts.rename
          opts.rename[k] || k
        else
          k

        if v is 'ArrayModelAttribute'
          attrs[key] = @[k].values()
        else if v is 'ArrayAttribute'
          attrs[key] = @[k].values()
        else
          attrs[key] = @[k].value()
    attrs
  reset:(attrs={})=>
    @id(attrs.id || null)
    for k,v of @attributes
      if attrs[k]
        @[k].value(attrs[k])
      else
        @[k].value('')

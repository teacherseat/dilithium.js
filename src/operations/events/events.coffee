# Stores all the events
events = {}

export $register = (scope,name,fun)->
  events[name] ?= {}
  events[name][scope] = fun

export $broadcast = (name, args...)->
  if name != "" && events[name]
    for key,fun of events[name]
      fun(args...) if fun

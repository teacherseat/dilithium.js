sys = require 'child_process'

task 'compile', (options) ->
  console.log 'refueling dilithium chamber'
  sys.exec 'coffee --transpile -o ./build/ -c ./src/index.coffee'

  console.log '> command'
  for n in 'collection list member show'.split(' ')
    console.log "coffee --transpile -o ./build/command/#{n}/ -c ./src/command/#{n}/#{n}.coffee"
    sys.exec "coffee --transpile -o ./build/command/#{n}/ -c ./src/command/#{n}/#{n}.coffee"

  console.log '> operations'
  for n in 'api attribute attribute_array attribute_model_array location base component events model util view'.split(' ')
    console.log "coffee --transpile -o ./build/operations/#{n}/ -c ./src/operations/#{n}/#{n}.coffee"
    sys.exec "coffee --transpile -o ./build/operations/#{n}/ -c ./src/operations/#{n}/#{n}.coffee"

  console.log '> sciences'
  for n in 'field form popup fields/checkbox fields/err fields/file fields/input_password fields/input_text fields/radio fields/select fields/textarea'.split(' ')
    if n.match(/\//)
      result = n.split('/')
      console.log "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{result[0]}/#{result[1]}/#{result[1]}.coffee"
      sys.exec "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{result[0]}/#{result[1]}/#{result[1]}.coffee"
    else
      console.log "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{n}/#{n}.coffee"
      sys.exec "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{n}/#{n}.coffee"

task 'com', (options) ->
  console.log '> command'
  for n in 'collection list member show'.split(' ')
    console.log "coffee --transpile -o ./build/command/#{n}/ -c ./src/command/#{n}/#{n}.coffee"
    sys.exec "coffee --transpile -o ./build/command/#{n}/ -c ./src/command/#{n}/#{n}.coffee"

task 'ops', (options) ->
  console.log '> operations'
  for n in 'api attribute attribute_array attribute_model_array location base component events model util view'.split(' ')
    console.log "coffee --transpile -o ./build/operations/#{n}/ -c ./src/operations/#{n}/#{n}.coffee"
    sys.exec "coffee --transpile -o ./build/operations/#{n}/ -c ./src/operations/#{n}/#{n}.coffee"

task 'sci', (options) ->
  for n in 'field form popup fields/checkbox fields/err fields/file fields/input_password fields/input_text fields/radio fields/select fields/textarea'.split(' ')
    if n.match(/\//)
      result = n.split('/')
      console.log "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{result[0]}/#{result[1]}/#{result[1]}.coffee"
      sys.exec "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{result[0]}/#{result[1]}/#{result[1]}.coffee"
    else
      console.log "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{n}/#{n}.coffee"
      sys.exec "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{n}/#{n}.coffee"

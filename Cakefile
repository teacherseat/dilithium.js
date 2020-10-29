sys = require 'child_process'

task 'compile', (options) ->
  console.log 'refueling dilithium chamber'
  sys.exec 'coffee --transpile -o ./build/ -c ./src/index.coffee'

  for n in 'collection list member show'.split(' ')
    sys.exec "coffee --transpile -o ./build/command/#{n}/ -c ./src/command/#{n}/#{n}.coffee"

  for n in 'api attribute base component events model util view'.split(' ')
    sys.exec "coffee --transpile -o ./build/operations/#{n}/ -c ./src/operations/#{n}/#{n}.coffee"

  for n in 'field form popup'.split(' ')
    sys.exec "coffee --transpile -o ./build/sciences/#{n}/ -c ./src/sciences/#{n}/#{n}.coffee"

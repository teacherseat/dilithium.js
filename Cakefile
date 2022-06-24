sys = require 'child_process'

task 'compile', (options) ->
  console.log 'refueling dilithium chamber'
  sys.exec 'coffee --transpile -o ./build/ -c ./src/index.coffee'

  files = [
    'api',
    'attribute',
    'attribute_array',
    'attribute_model_array',
    'location',
    'base',
    'component',
    'events',
    'model',
    'util',
    'view',
    'field',
    'form',
    'popup',
    'field_checkbox',
    'field_err',
    'field_file',
    'field_input_password',
    'field_input_text',
    'field_radio',
    'field_select',
    'field_textarea',
    'collection',
    'list',
    'member',
    'show'
  ]

  for n in files
    console.log "coffee --transpile -o ./build/#{n}/ -c ./src/#{n}/#{n}.coffee"
    sys.exec "coffee --transpile -o ./build/#{n}/ -c ./src/#{n}/#{n}.coffee"

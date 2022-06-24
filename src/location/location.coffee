export $location = (input)->
  pairs = location.search.slice(1).split('&')
  result = {}
  for pair in pairs
    p = pair.split('=')
    unless p[0] is ''
      result[p[0]] = decodeURIComponent(p[1] or '')
  result


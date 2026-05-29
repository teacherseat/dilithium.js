Don't use global constants

For example:
```coffee
LEVEL      = 'n5'
SECTION_ID = 'quick_response'
VIDEOS_ID  = 'mondai-4'
```

Should be:

```coffee
export default class ListeningQuickResponse extends View
  constructor:(args)->
    @level      = 'n5'
    @section_id = 'quick_response'
    @videos_id  = 'mondai-4'
```
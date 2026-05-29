1. routes parameters should be named using snake case

For example this:
```coffee
routes =
  '/':                                            Home
  '/video/:videoId/:questionIdx':                 Video
  '/video/:videoId':                              Video
  '/listening/task_based/:questionId':            TaskBased
  '/listening/task_based':                        TaskBased
  '/listening/key_points/:questionId':            KeyPoints
  '/listening/key_points':                        KeyPoints
  '/listening/verbal_expressions/:questionId':    VerbalExpressions
  '/listening/verbal_expressions':                VerbalExpressions
  '/listening/quick_response/:questionId':        QuickResponse
  '/listening/quick_response':                    QuickResponse
  '/jlpt/:level':                                 JlptExam
  '/practice/:level/:sectionId/:questionIdx':     Practice
  '/practice/:level/:sectionId':                  Practice
  '/browse/:browseMode/:browseKey':               Browse
  '/drill/:drillName':                            Drill
  '/transcript/:sectionId/:questionId':           TranscriptEditor
```

Refactored to this:
```coffee
routes =
  '/':                                            Home
  '/video/:video_id/:question_id':                 Video
  '/video/:video_id':                              Video
  '/listening/task_based/:question)id':            TaskBased
  '/listening/task_based':                        TaskBased
  '/listening/key_points/:question_id':            KeyPoints
  '/listening/key_points':                        KeyPoints
  '/listening/verbal_expressions/:question_id':    VerbalExpressions
  '/listening/verbal_expressions':                VerbalExpressions
  '/listening/quick_response/:question_id':        QuickResponse
  '/listening/quick_response':                    QuickResponse
  '/jlpt/:level':                                 JlptExam
  '/practice/:level/:section_id/:question_id':     Practice
  '/practice/:level/:section_id':                  Practice
  '/browse/:browse_mode/:browse_key':               Browse
  '/drill/:dill_name':                            Drill
  '/transcript/:section_id/:question_id':           TranscriptEditor
```

2. app should be mounted to document.body


so this:
```coffee
route document.getElementById('app'), '/', routes
```

should be this
```coffee
route document.body, "/", routes
```

- when you change the routes you need to update them wherever they are referenced.
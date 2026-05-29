We want to keep function and variables names simple and reply on context and convention.

So the following example:
```coffee
export default class PracticeAnswers extends Component
  expects:
    question: true
    answer_state: true
    on_select_answer: true
  answer_result_text:=>
    # ...
  answer_classes:(answer_num)=>
    # ...
  answers_list:=>
    # ...
```

Should be refactored as such:
```coffee
export default class PracticeAnswers extends Component
  expects:
    model: true
    state: true
    on_select: true
  result_text:=>
    # ...
  classes:(answer_num)=>
    # ...
  list:=>
    # ...
```

- notice that we renamed the question to model, based on convention whatever the main data model is it should be named model.
- notice we removed the answer_ prefix from the function names since it clear based on context they belong to anwser
- notice answer_state is renamed as state since we assume this is a state object for anwser
- noitce on_select_answer is changed to on_select, we assume this a function callback and based on context we can implicty assume its for anwser
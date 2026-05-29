There are three levels of refactoring we can apply to render for dom markup:

1. in-class component refactor

An in-class component refactor is when we move the dom markup into own function. 

Look at the following example:

```coffee
# components/hello_world.coffee
export default class HelloWorld extends Component
  render:=>
    m '.hello_world',
      if @foo
        m '.foo', 'bar'
      m '.content',
        'hello world'
```

- content would be refactored because its high enough in the dom hierarchy and has a generic label meaning it would have lots of data
- foo is conditional content and will serve better to be refactored

This is the refactor:
```coffee
export default class HelloWorld extends Component
  el_foo:=>
    return unless @foo
    m '.foo', 'bar'
  content:=>
    m '.content',
      'hello world'
  render:=>
    m '.hello_world',
      @foo()
      @content()
```

Consider the following in this refactor:
- we named the content function content since we prefer to keep naming short simple and reflective of the dom markup contained
- we could not name foo the function name since it would conflict with the local variable, so we prefixed it with el, if there was something more descrpitive based on the dom content of foo we could have named it foo_bar, foo_status_bar but instead choose the generic el_foo
- note that we refactored the if to reduced the indentation level for readability and we prefer to always do this for if statements.
- we could (and show) refactor the classes furhter since we have a built in classes help function in Components.

2. external component refactor

An external component refactor is when we move the dom markup into own component. 

Look at the following example:

```coffee
# views/tasks/index.coffee
export default class TasksIndex extends View
  task_class:(task)=>
    classes = []
    classes.push 'active'
    if task.is_late
      classes.push 'late'
    return classes.join(' ')
  render:=>
    m 'main',
      for task in @tasks
        m '.task', class: @task_class(task),
          m '.name', task.name
          m '.due', task.due_at
          m '.assigned', task.assignee.name
```

This is the refactor:

```coffee
# views/tasks/index.coffee
import Task from 'components/tasks'
export default class TasksIndex extends View
  render:=>
    m 'main',
      for task in @tasks
        m Task, model: task
```

```coffee
# components/task.coffee
export default class Task extends Component
  expects:
    model: true
classes:=>
  classes = []
  classes.push 'active'
  if @model.is_late
    classes.push 'late'
  return classes.join(' ')
render:=>
  m '.task', class: @classes(),
    m '.name', @model.name
    m '.due', @model.due_at
    m '.assigned', @model.assignee.name
```

- notice that when we refactored we changed task name to model, naming our model data as data makes it easier by convention to know what the main model data is, we assume it task data based on component's name.
- noticed that we generalize the function task_class to classes, because again we know we based on context we are in task, we want to use generalized names based on context.
- notice we dont have to pass the task to the classes function any longer since the model is avaliable anywhere in the component
- this refactor didn't contain much business logic or dom markup and could have been an in-class refactor but since its a for a loop these often grow into external components so we were proactive to make it an external component.

3. in-file component refactor

Components can have in-class components that pile up because you don't want to create another external component but the business logic of multiple components are polluting the context.

Look at the following example:


```coffee
# components/task_card.coffee
export default class TaskCard extends Component
  expects:
    model: true

  # header related
  el_priority_badge:=>
    return unless @model.priority
    m '.priority_badge', class: @model.priority,
      m '.icon'
      m '.label', @model.priority.toUpperCase()
  el_due_indicator:=>
    return unless @model.due_at
    days_left = @days_until_due()
    m '.due_indicator', class: @due_class(days_left),
      m '.days', days_left
      m '.label', if days_left < 0 then 'overdue' else 'days left'
  days_until_due:=>
    Math.floor (@model.due_at - Date.now()) / (1000 * 60 * 60 * 24)
  due_class:(days)=>
    return 'overdue' if days < 0
    return 'urgent' if days < 3
    return 'soon' if days < 7
    'normal'
  header:=>
    m '.header',
      m '.title', @model.name
      @el_priority_badge()
      @el_due_indicator()

  # assignee related
  el_avatar:=>
    if @model.assignee.avatar_url
      m 'img.avatar', src: @model.assignee.avatar_url
    else
      m '.avatar.placeholder', @assignee_initials()
  assignee_initials:=>
    parts = @model.assignee.name.split(' ')
    "#{parts[0][0]}#{parts[parts.length - 1][0]}".toUpperCase()
  assignee_status_class:=>
    return 'online' if @model.assignee.is_online
    return 'away' if @model.assignee.last_seen_minutes < 30
    'offline'
  assignee:=>
    m '.assignee',
      @el_avatar()
      m '.name', @model.assignee.name
      m '.status', class: @assignee_status_class()

  render:=>
    m '.task_card',
      @header()
      @assignee()
      m '.body', @model.description
```

```coffee
# components/task_card.coffee
class Header extends Component
  expects:
    model: true
  priority_badge:=>
    return unless @model.priority
    m '.priority_badge', class: @model.priority,
      m '.icon'
      m '.label', @model.priority.toUpperCase()
  due_indicator:=>
    return unless @model.due_at
    m '.due_indicator', class: @classes(),
      m '.days', days_left
      m '.label', if days_left < 0 then 'overdue' else 'days left'
  days_until_due:=>
    Math.floor (@model.due_at - Date.now()) / (1000 * 60 * 60 * 24)
  classes:=>
    days = @days_until_due()
    return 'overdue' if days < 0
    return 'urgent' if days < 3
    return 'soon' if days < 7
    'normal'
  render:=>
    m '.header',
      m '.title', @model.name
      @priority_badge()
      @due_indicator()

class Assignee extends Component
  expects:
    model: true
  el_avatar:=>
    if @model.avatar_url
      m 'img.avatar', src: @model.avatar_url
    else
      m '.avatar.placeholder', @initials()
  initials:=>
    parts = @model.name.split(' ')
    "#{parts[0][0]}#{parts[parts.length - 1][0]}".toUpperCase()
  classes:=>
    return 'online' if @model.is_online
    return 'away' if @model.last_seen_minutes < 30
    'offline'
  render:=>
    m '.assignee',
      @el_avatar()
      m '.name', @model.name
      m '.status', class: @classes()

export default class TaskCard extends Component
  expects:
    model: true
  render:=>
    m '.task_card',
      m Header, model: @model
      m Assignee, model: @model.assignee
      m '.body', @model.description
```
- we were able to indentify two possible components to refactor
- notice we do not export the in-file components and keep a single defaulted exported component

## When to use in-class refactor vs component refactor

Use in-class refactor when:
- the component is unique to the view
- its business logic is simple
- when we are encroaching on 3 levels of external components
  - we want to avoid atomizing external components because it requires too much code navigation for developers

Use external components refactor when:
- the has considerable business logic that is polluting the View or Component for speecific dom markup
  - Views are more susceptible to business logic pollution since they are an umbrella for lots of functionality  
- there is a considerable amount of dom markup you can tell when dom nesting is 4 levels deep.

Use in-file refactor when
- you are a component and you want to avoid creating another nesting of external components files but it will make the component easier to understand implicty by seperating the in-class component into an in-file-component

Don't use in-file refactor when:
- you are a View, views never should have in-file components
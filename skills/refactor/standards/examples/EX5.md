## Naming Views

Views generally follow rails convention for naming views.

/views/tasks/index.coffee => class TasksIndex extends View
/views/tasks/show.coffee => class TasksShow extends View
/views/tasks/form.coffee => class TasksForm extends View

We put views at the top level or two levels of nesting.
- No: /views/tasks_index.coffee
- No: /views/tasks/legacy/index.coffee

### Naming lists

Often a a view such as a Index will often have a liste.

```coffee
list:=>
  m 'tasks',
    for item in @tasks
      m Task, model: item
```
- notice we default to class the in-class component 'list'
- notice we used 'item' as the name, this is always what we will call it, not row, or row_item or task_item
- since this a View for the item component we generally will make this an external component.

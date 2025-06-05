## Attribute Array

When you need an array of value as an attribute

```coffee
import { Model, Attribute, AttributeArray } from 'dilithium-js'

export default class CourseAccessOverride extends Model
  attributes:
    access_all:=> new Attribute()
    course_ids:=> new AttributeArray()
```

```coffee
  @model.multiple_select_items.reset data.model.choices.length, ModelMultipleSelectItem
  for choice,i in data.model.choices
    @model.multiple_select_items.at(i).reset choice
    @model.multiple_select_items.at(i).position.value(i+1)
    @model.multiple_select_items.at(i).remove.value(false)
    @revisions.choices.push
      choice     : choice.revs_choice
      explanation: choice.revs_explanation
```
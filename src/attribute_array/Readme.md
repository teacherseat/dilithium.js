## Attribute Array

When you need an array of value as an attribute

```coffee
import { Model, Attribute, AttributeArray } from 'dilithium-js'

export default class CourseAccessOverride extends Model
  attributes:
    access_all:=> new Attribute()
    course_ids:=> new AttributeArray()
```
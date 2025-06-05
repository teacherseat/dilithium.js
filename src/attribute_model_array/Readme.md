## Attribute Model Array

When you need an array of models as an attribute


```coffee
export class ResourceTags extends Model
  attributes:
    resource_id:=> new Attribute()
    resource_tags:=> new AttributeModelArray()

export class ResourceTag extends Model
  attributes:
    key:=> new Attribute()
    value:=> new Attribute()
```

```coffee
  constructor:(args)->
    super(args)
    @model = new ResourceTags()
  index_success:(data)=>
    unless data.length is 0
      @model.resource_tags.reset(data.length+1,ResourceTag)
      for model,i in @model.resource_tags.array
        model.reset data[i]
    @loading = false
  reindex:=>
    @model.resource_id.value @resource_id()
    @model.resource_tags.reset(3,ResourceTag)
    ResourceApi.resource_tags.resource_index
      resource_id: @resource_id()
  add_tag:=>
    @model.resource_tags.array.push new ResourceTag()
  render:=>
    m 'form', onsubmit: @submit,
      m '.fields',
        m '.resource_tags_fields',
          m 'table.resource_tags',
            m 'tbody',
              for model in @model.resource_tags.array
                @tag_row(model)

```
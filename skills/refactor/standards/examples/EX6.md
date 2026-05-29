Instead of this:
```coffee
m '.answers',
  @model.answers.map (ans, i) =>
    m '.answer', key: i, ans.text
```

User the for loop
```coffee
m '.answers',
  for item, i in @model.answers
    m '.answer', key: i, item.text
```

- notice we changed the variable name from anws to item, if there no conflict generalize the name.
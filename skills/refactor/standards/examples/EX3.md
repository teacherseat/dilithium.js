1. Avoid using single line if statements for dom components:

Instead of this:

```coffee
  render:=>
    m '.foo', 'bar' if @foo
```

Do this:

```coffee
  render:=>
    if @foo
      m '.foo', 'bar'
```

.2 Use return if/unless to keep nesting level low for both dom and business logic

Instead of this:
```coffee
  foo_bar:=>
    if @foo
      m '.foo', 
        m 'span', 'bar'
        unless @hello
          m 'span.hello', 'world'
  render:=>
    @foo_bar()
```

Do this:
```coffee
  foo_bar:=>
    return unless @foo
    m '.foo', 
      m 'span', 'bar'
      unless @hello
        m 'span.hello', 'world'
  render:=>
    @foo_bar()
```
- for dom we generally only use return if/unless at the top level of the function

Instead of this:

```coffee
  classes:=>
    classes = []
    if @level_1
      classes.push 'lvl_1'
      if @level_2
        classes.push 'lvl_2'
        if @level_3
          classes.push 'lvl_3'
    else
      classes.push 'lvl_na'
    return classes   
```

Consider doing this:

```coffee
  classes = []
  return ['lvl_na'] unless @level_1
  classes.push 'lvl_1'
  return classes unless @level_2
  classes.push 'lvl_2'
  return classes unless @level_3
  classes.push 'lvl_3'
  classes
```

3. Avoid using if then else single line statements

Instead of this:
```coffee
  m 'span.sequence-fragment',
    class: if i is 2 then 'target-fragment' else '',
    @fragment()
```

Do this:
```coffee
  m 'span.sequence_fragment', class: @classes({'target_fragment': i is 2}),
    @fragment()
```
- notice I changed it to snake case as this is our preferred convention
- we were able to get rid of the if then with the built helper class in Components and Views
- noitce that we want to keep dom properties all on a single line,

4. Try and uplift statement true/false statements in variables when possible.

Instead of this:
```coffee
render:=>
  m 'main',
    if user.age >= 18 and user.country in ['US', 'CA', 'UK'] and user.verified and not user.banned
      content()
```

```coffee
render:=>
  m 'main',
    is_adult = @user.age >= 18 and @user.country in ['US', 'CA', 'UK']
    is_accessible = @user.verified and not @user.banned
    if is_adult and is_accessible
      content()
```
- we first want to refactor the complex logic into variables
- notice we put is_ as the prefix as as the convention
- notice we keep the names simple instead of is_eligable_adult its just is_adult
- but we have a new problem, the vars are now poluting the markup

So we do this next:
```coffee
is_accessible:=>
  is_adult = @user.age >= 18 and @user.country in ['US', 'CA', 'UK']
  return is_adult and @user.verified and not @user.banned
render:=>
  m 'main',
    if is_accessible()
      content()
```
- we refactor business logic into a function
- notice didn't really need the is_accessible variable and we reused it as the function name

And now we do this:
```coffee
content:=>
  return unless @is_accessible()
is_accessible:=>
  is_adult = @user.age >= 18 and @user.country in ['US', 'CA', 'UK']
  return is_adult and @user.verified and not @user.banned
render:=>
  m 'main',
    content()
```

- we keep the if logic with the inline component
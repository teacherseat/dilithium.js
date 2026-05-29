When a component has a render function with a top level array:

```coffee
export default class HelloWorld extends Component
  render:=>
    [
      if @foo
        m '.foo', 'bar'
      m '.content',
        'hello world'
    ]
```

We should elminiate the top level array by replacing it with a dom element reflecting the name of the component in snake case

```coffee
export default class HelloWorld extends Component
  render:=>
    m '.hello_world'
      if @foo
        m '.foo', 'bar'
      m '.content',
        'hello world'
```

- we want to have a selector class for each component for easier styling.
- arrays used in this fashtion break readability and add unnecessary lines
- arrays are often the cause of multiple components or conditional content and this should encourage further refactoring
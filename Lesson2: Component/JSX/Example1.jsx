<MyComponent color="yellow" customAttribute={35}>
  Some Text
</MyComponent>


React.createElement(
  MyComponent,
  {color: 'yellow', customAttribute: 35},
  'Some Text'
)


<MyComponent color="yellow" customAttribute={35}>
  <SomeCustomComponent />
</MyComponent>


React.createElement(
  MyComponent,
  {color: 'yellow', customAttribute: 35},
  [React.createElement(...)]
)





import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(MyComponent, {color: 'yellow'}, null);
  return <MyComponent color="yellow" />;
}

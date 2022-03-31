# Create React Template

## Steps

1. create a react app called "template"
```
yarn create react-app template
```

## React Files & Folders
- public repo
  - static
    - ex) HTML, images, etc
    - 
- src folder
  - dynamical
  - ex) APP.js

2. Clean the template
- Public Folder
  - index.html
  - delete all except index.html & favicon.ico
  
- src folder
   - APP.js => APP.jsx


3. Starting React APP
```
yarn start
```



# JSX vs HTML 
JSX => 
- pure JavaScript
  - 
- className
- onClick

HTML => 
- markup language
- class
- onclick

### Without Using JSX

- complicated
- it is hard to read for UX designer

```
function App() {
  return React.createElement('h1', {}, 'helloe');
}

export default App;
```

## JSX form
- 
- easy to read & write
- Babel transfers JSX to HTML & JavaScript 

```
import React from 'react';
import './App.css';

function App() {
  const meta = 'Two Sum'

  return (
    // in order to use state variable, must write inside of {}. 
  <h1>Today's meta question is {meta}</h1>
  );
}
```

### Grouping Element
```
<>
<>

or

<React.Fragment>

```

## JSX Function
```
function App() {
  const meta = 'Two Sum'

  return (
    <>
    <h1>Good Morning Developer today's 
      morning diagonizses is {meta}
    </h1>

    {['Tom', 'Jerry'].map(item => (
      <h1>{item}</h1>
    ))}
    
    </>
  );
```


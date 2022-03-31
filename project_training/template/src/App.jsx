import React from 'react';
import './App.css';

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
}

// // With out JSX form
// function App() {
//   return React.createElement('h1', {}, 'helloe');
// }


export default App;

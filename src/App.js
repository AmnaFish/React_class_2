import React from 'react';
import './App.css';
import Hello from './Hello';

/*function App(props)  { //all properties are coming here as an object
  return <div>
    Hellow from app.js {props.name}
    Age={props.age + 10} 
  </div>
}*/

//OR

function App({name,age})  { //all properties are coming here as an object
  return <div>
    Hellow from app.js <strong>{name}</strong>  My Age is = {age + 10}
  <p>I am a fan of 
  <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul> 
</p>
<p>My early morning ritua is<ol>
  <li>Prayer</li>
  <li>Excercise</li>
  <li>Meditation</li>
</ol></p>
  
  <Hello firstname={name}> This is an example of putting JS in JSX</Hello>
  </div>
}
export default App;

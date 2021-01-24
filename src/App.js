import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {

  const state = useState(0);
  const count = state[0];
  const handleIncrement = state[1]

   
   return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={
        (e) => {
          handleIncrement(count + 1);
        }
      }
      >Increment</button>

      <button onClick={
        (e) => {
          handleIncrement(count -1);
        }
      }
      >Decrement</button>
      
    </div>
  );
}




export default App;

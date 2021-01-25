import React, { useState } from 'react';


function Counter(props){
const state = useState(0);
  const count = state[0];
  const handleIncrement = state[1]

  return(
 
      <>

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
        </>
  )
    }

    export default Counter;
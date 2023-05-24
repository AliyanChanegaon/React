

import { useState } from 'react';


function Counter() {

 const [count, setCount] = useState(10);

function Increment(){

  // eslint-disable-next-line no-const-assign
  console.log("object");
  setCount(count+1)

}

function Decrement(){
  setCount(count-1)
 
 }

 const myCss = {
     padding : "100px",
     color: "red"
 }

 const myCssS= {
    padding : "100px",
    color: "green"
}

  return (
    <>
      <h1 style={count==10 ? myCss : myCssS}>MyCounter ; { count }</h1> 
        <h2 id='append'>1</h2>
      <div>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
      </div>


      {count==10 &&  <h2 >ALIYAN CHUYTA</h2>}
     
    </>
  )
}

export default Counter

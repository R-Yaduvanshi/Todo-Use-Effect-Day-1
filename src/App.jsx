import React from 'react'
import "./App.css";
import Todos from './components/Todos';

const App = () => {

  return (
    <div className="App">
      <Todos />
    </div>
  )
}

export default App


























// import './App.css';
// import React, { useEffect, useState } from "react"

// let A = () => {
//   const [count, setCount] = useState(0)
//   return <div onClick={() => setCount(count2+1)}><h2>Component A: {count}</h2></div>
// }
// let B = () => <div><h1>Welcome Component B</h1></div>

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2,setCount2] = useState(0);
//   const [showComponent, setShowComponent] = useState(false);

//   console.log(1)

//   useEffect(() => {
//     console.log("inside 1",count1,count2);
//     alert("hello")
//   },[]);

//   useEffect(() => {
//     console.log("inside 2");
//   });

//   useEffect(() => {
//     console.log("inside 3");
//   });

//   useEffect(() => {
//     console.log("inside 4");
//   });
//   console.log(3);

//   return (
//     <div className="App">
//       <h1>hello: {count1}</h1>
//       <h1 onClick={() => setCount1(count1+1)}>Counter1: {count1}</h1>
//       <h1 onClick={() => setCount2(count2+1)}>Counter2: {count2}</h1>
//       <button onClick={() => {setShowComponent(!showComponent)}}>Magic</button>
//       {showComponent ? <A/> : <B />}
//     </div>
//   );
// }

// export default App;

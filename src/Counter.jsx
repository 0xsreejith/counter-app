import { useState } from "react"
import "./style.css"
const Counter = () => {
  const [count,setCount]= useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  return (
    <div className="container">
      <h1 className="number">{count}</h1>
      <div className="btn-container">
        <button className="btn" onClick={increment}>+</button>
        <button className="btn" onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'

 function One() {
  const [count,setCount]=useState(0)
  const increase=()=>{
    setCount(count+1)
  }
  const decrease=()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>Hello World i there</h1>
      <h2>{count}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default One
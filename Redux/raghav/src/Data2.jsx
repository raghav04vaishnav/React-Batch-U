import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, multiplication, divide, reset} from "./counter/counterSlice" 

function Data2() {
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.counter.data)
  console.log(data)
  return (
    <div>
      <h2>Count: {data}</h2>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(multiplication())}>*</button>
      <button onClick={()=> dispatch(divide())}>/</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Data2
import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {ordered,restocked} from "./cakeSlice"
function CakeView() {
  const [value,setValue]=useState(1)
  const numOfCakes=useSelector((state)=>state.cake.numOfCake)
  const dispatch=useDispatch();
  return (
    <div>
        <h2>num Of Cakes = {numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <div>
          <input type='number' value={value} onChange={e=>{setValue(parseInt(e.target.value))}}/>
          <button onClick={()=>dispatch(restocked(value))}>restock cakes</button>
        </div>
    </div>
  )
}

export default CakeView
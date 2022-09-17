import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered ,restocked} from './icecreamSlice'

function IcecreamView() {
  const [value,setValue] = useState(1)
  const dispatch=useDispatch()
  const numOfIcecream=useSelector((state)=>state.icecream.numOfIcecream)
  return (
    <div>
        <h2>numOf icecream = {numOfIcecream}</h2>
        <button onClick={()=>dispatch(ordered())}>order icecream</button>
        <div>

        <input type='number' value={value} onChange={e=>{setValue(parseInt(e.target.value))}}/>
        <button onClick={()=>dispatch(restocked(value))}>restock icecream</button>
        </div>
    </div>
  )
}

export default IcecreamView
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {creategoal} from '../features/goal/goalSlice'
function Goalform() {
    const [text,setText]=useState('')
    const dispatch=useDispatch()
    const onsubmit=(e)=>{
        e.preventDefault()
        dispatch(creategoal({text}))
        setText('')
    }
  return (
    <>
        <section className="form">
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="text">Goal</label>
                    <input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Goal</button>
                </div>
            </form>
        </section>
    </>
    
  )
}

export default Goalform

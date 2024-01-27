import { useDispatch } from "react-redux"
import { addTask } from "../slices/Todo.Slice"
import { useState } from "react";

const Head =()=>{
    const [value,setValue]=useState('')
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTask(value))
        setValue('')
    }
    return (
        <div className="head">
            <h1>Redux Toolkit TODO</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Head
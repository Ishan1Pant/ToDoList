import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { deleteTask } from '../slices/Todo.Slice';


const Display=()=>{
    const dispatch=useDispatch();

    const handleDelete=(id)=>{
        dispatch(deleteTask(id))
    }
    const data =useSelector((state)=>{
        return state.todoList.allTasks
    })
    if (!data) {
        return <div>Loading...</div>;
    }
    return(
        <div className='display'>
            <h2>Tasks</h2>
            <ul>
                {data.map((task)=>{
                    return (
                        <li key={task.id}>{task.task} <button onClick={()=>handleDelete(task.id)}>Delete</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Display

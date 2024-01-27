import { createSlice,nanoid } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState={
    allTasks:[]
}

const todoSlice = createSlice({
    name:'todoList',
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            const newTask ={
                id:nanoid(),
                task:action.payload
            }
            state.allTasks.push(newTask)
        },
        deleteTask:(state,action)=>{
            state.allTasks=state.allTasks.filter((task)=>{
                return task.id!==action.payload
            })
        }
    }
})

export const {addTask,deleteTask}=todoSlice.actions
export default todoSlice.reducer
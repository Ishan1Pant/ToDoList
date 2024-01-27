import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../slices/Todo.Slice'

const store = configureStore({
    reducer:{
        todoList:todoSlice
    }
})

export default store 

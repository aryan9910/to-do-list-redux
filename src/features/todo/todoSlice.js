import { createSlice } from "@reduxjs/toolkit";
const initialState=[

];
const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state, action) =>{
            const newTodo={
                id:Date.now(),
                text:action.payload,
                completed:false,
            };
            state.push(newTodo)
        },
        toggleTodo:(state,action) =>{
            const todo=state.find(todo =>todo.id ===action.payload)
            if (todo) {
                    todo.completed=!todo.completed;
            }
        },
        deleteTodo:(state,action)=>{
            return state.filter(todo => todo.id!==action.payload);
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;
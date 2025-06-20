import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from './todoSlice'

const TodoItem = ({todo}) => {
const dispatch=useDispatch();
  return (
    <div style={{display:'flex', alignItems:'center', margin:'0.5rem', gap:'1rem'}}>
      <input type="checkbox" checked={todo.completed} onChange={()=> dispatch(toggleTodo(todo.id))}/>
      <span style={{textDecoration: todo.Completed?'line-through':'none', flexGrow: 1}}>
        {todo.text}
      </span>
      <button onClick={()=> dispatch(deleteTodo(todo.id))}>❌</button>
    </div>
  )
}

export default TodoItem

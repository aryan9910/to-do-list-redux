import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
const todos= useSelector((state)=> state.todos);
  return (
    <div>
        {todos.length==0?(
            <p>No Todo's yet</p>
        ):(
            todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} />
            ))
        )}
    </div>
    
  )
}

export default TodoList

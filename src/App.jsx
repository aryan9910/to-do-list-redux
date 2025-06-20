import React from 'react'
import TodoList from './features/todo/TodoList';
import TodoInput from './features/todo/TodoInput';
const App = () => {
  return (
    <div style={{padding:'2rem', maxWidth:'600px', margin:'0 auto'}}>
      <h1 style={{textAlign:'center'}}>Todo App</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default App

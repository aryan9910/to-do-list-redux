import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              marginRight: "8px",
              padding: "6px 12px",
              backgroundColor: filter === type ? "#28a745" : "#ddd",
              color: filter === type ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      {filteredTodos.length == 0 ? <p>No Todo's yet</p> : filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;

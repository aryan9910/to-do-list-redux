import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
const TodoInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedtext = text.trim();
    if (!trimmedtext) {
      return;
    }
    dispatch(addTodo(trimmedtext));
    setText("");
  };
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a todo" style={{ padding: "8px", fontSize: "16px" }} />
      <button type="submit" style={{ marginLeft: "8px", padding: "8px" }}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;

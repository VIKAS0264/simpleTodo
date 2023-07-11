import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(task) {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
    }
  }
  function completeTask(index) {
    const clone = [...todos];
    clone.splice(index, 1);
    setTodos([...clone]);
  }

  return (
    <div className="todo">
      <h2>Todo</h2>
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList todos={todos} completeTask={completeTask} />
    </div>
  );
}

export default App;

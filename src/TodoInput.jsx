import { useState } from "react";
const TodoInput = ({ handleSubmit }) => {
  const [task, setTask] = useState("");
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(task);
        setTask("");
      }}
    >
      <input
        className="todo-input"
        type="text"
        name="todo"
        placeholder="Plan your day"
        maxLength="30"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="submit-btn" type="Submit">
        New Task
      </button>
    </form>
  );
};
export default TodoInput;

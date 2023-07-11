const TodoList = ({ todos, completeTask }) => {
    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button
                className="complete-btn"
                onClick={() => completeTask(index)}
              >
                <i className="fa-solid fa-check"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default TodoList;
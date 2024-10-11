import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    if (todo === "") return false;

    setTodos((currentArr) => [todo, ...currentArr]);
    setTodo("");
  };

  return (
    <div>
      <h1>내 할일 ({todos.length}건)</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="할일을 작성하세요..."
        />
        <button type="submit">할일 추가</button>
      </form>

      <hr />
      {/* todo list 뿌리기 */}
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

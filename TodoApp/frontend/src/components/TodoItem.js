import React from 'react';
import { updateTodo, deleteTodo } from '../services/todoService';

const TodoItem = ({ todo, setTodos, todos }) => {
  const toggleComplete = async () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodo(todo.id, updatedTodo);
    setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
  };

  const removeTodo = async () => {
    await deleteTodo(todo.id);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span>{todo.title}</span>
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
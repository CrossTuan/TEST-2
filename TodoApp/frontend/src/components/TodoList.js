import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
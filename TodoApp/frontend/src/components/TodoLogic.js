import React, { useState, useEffect } from 'react';
import { GetTodos, addTodo } from '../services/todoService';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await GetTodos();
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }, []);

  const addNewTodo = async (title) => {
    const newTodo = await addTodo({ title, completed: false });
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodo={addNewTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoLogic;
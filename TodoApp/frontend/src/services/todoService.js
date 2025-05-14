import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const getTodos = async () => {
  const response = await axios.get(API_URL, authHeader());
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo, authHeader());
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/${id}`, updates, authHeader());
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, authHeader());
  return response.data;
};
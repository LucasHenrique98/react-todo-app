import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    console.log(todos);
  }

  function removeTodo(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('LOCAL_STORAGE_TASK'));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('LOCAL_STORAGE_TASK', JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ margin: 'auto' }} className="container">
      <h1
        style={{
          textAlign: 'center',
          marginTop: '70px',
          marginBottom: '70px',
          fontFamily: 'Comic Sans',
        }}
      >
        To-Do App!
      </h1>
      <TodoList
        completedTodo={completeTodo}
        removeTodo={removeTodo}
        todoList={todos}
      />
      <TodoForm todos={todos} handleButtonClick={addTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;

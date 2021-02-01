import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoList, removeTodo, completedTodo }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '4px solid black',
        borderRadius: '5px',
        backgroundColor: '#05668d',
        boxShadow: '10px 5px 10px black',
      }}
    >
      <ul>
        {todoList.map((todo) => {
          return (
            <Todo
              completedTodo={completedTodo}
              removeTodo={removeTodo}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}

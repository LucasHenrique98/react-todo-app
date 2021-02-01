import React from 'react';
import css from './todo.module.css';

export default function Todo({ todo, removeTodo, completedTodo }) {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  function handleCompleteClick() {
    completedTodo(todo.id);
  }

  return (
    <li>
      <div
        className={todo.completed === true ? css.completedTask : ''}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '2px solid black',
          borderRadius: '8px',
          height: '40px',
          width: '700px',
          alignItems: 'center',
          fontSize: '25px',
          margin: '20px',
          color: 'black',
          backgroundColor: 'chartreuse',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        <p
          style={{
            marginLeft: '30px',
          }}
        >
          Task: {todo.task}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
          }}
        >
          <button
            onClick={handleCompleteClick}
            style={{
              backgroundColor: '#06d6a0',
              borderRadius: '10px',
              width: 'auto',
              fontSize: '20px',
              textAlign: 'center',
              textJustify: 'center',
              color: 'white',
              border: '2px solid grey',
              height: 'auto',
            }}
          >
            Complete
          </button>
          <button
            onClick={handleRemoveClick}
            style={{
              backgroundColor: '#d90429',
              borderRadius: '10px',
              width: '70px',
              fontSize: '20px',
              textAlign: 'center',
              textJustify: 'center',
              color: 'white',
              border: '2px solid grey',
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

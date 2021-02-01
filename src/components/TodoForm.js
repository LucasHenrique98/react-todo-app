import React, { useState } from 'react';

export default function TodoForm({ addTodo, todos }) {
  const [input, setInput] = useState({
    id: '',
    task: '',
    completed: false,
  });

  function handleInputChange({ target }) {
    setInput({ ...input, task: target.value });
    console.log(target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (input.task === '') {
      console.log('Insert a valid Task');
    } else {
      addTodo({ ...input, id: todos.length + 1 });
      setInput({ ...input, task: '' });
    }
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <form action="">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            value={input.task}
            style={{ width: '600px' }}
            onChange={handleInputChange}
            type="text"
          />
          <button
            style={{
              border: '2px solid black',
              borderRadius: '10px',
              backgroundColor: '#028090',
              color: 'white',
            }}
            onClick={onSubmit}
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import './style.css';

function App() {
  // useState Here
  const [todos, setTodos] = useState(['Habib', 'ALi', 'Hassan']);

  const [task, setTask] = useState('');

  // Add Todo in the List
  function createTodo() {
    setTask(''); // For Empty input

    setTodos((oldtodo) => {
      return [...oldtodo, task];
    });
  }

  function enterKey(e) {
    // console.log('Event ', e);
    if (e.keyCode == 13) {
      createTodo();
    }
  }

  return (
    <div className="App-header">
      <input
        style={{ padding: '.5rem' }}
        onKeyDown={enterKey}
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />

      <button
        style={{
          marginTop: '1rem',
          padding: '.5rem .8rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={createTodo}
      >
        Add Todos
      </button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

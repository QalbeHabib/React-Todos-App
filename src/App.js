import React, { useState } from 'react';
import './style.css';

export default function App() {
  // Use State will used here
  const [todos, setTodos] = useState(['ALi']);
  const [tasks, setTask] = useState('QalbeHabib Mudassar');

  // Add Todo in The List

  function createTodo() {
    if (!tasks) {
      alert('Please Enter A Task');
    } else {
      setTodos((h) => {
        setTask(''); // For Empty the input field
        return [...h, tasks];
      });
    }
  }

  // Delete ToDo

  const deleteTodo = (id) => {
    setTodos((todos) =>
      todos.filter((el, idx) => {
        return idx != id;
      })
    );
  };

  // Clear All the List
  const clearAllTodos = () => {
    setTodos([]);
  };

  // Enter Key Function

  function enterKey(e) {
    // console.log('Event :', e);
    if (e.keyCode == 13) {
      createTodo();
    }
  }

  // MAin Layout is Here
  return (
    <div className="App-header">
      <h1>Todos App</h1>

      <input
        className="iput"
        type="text"
        // Here is the Input Value changing
        value={tasks}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyDown={enterKey}
      />

      <button className="btn" onClick={createTodo}>
        Add Todos
      </button>

      <div className="todo-container">
        <ul>
          {todos.map((item, idx) => {
            return (
              <div className="todos" key={idx}>
                <li> ✔ {item} </li>
                <button className="Del-btn" onClick={() => deleteTodo(idx)}>
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* <button className="btn" onClick={clearAllTodos}>
        Clear All
      </button> */}
    </div>
  );
}

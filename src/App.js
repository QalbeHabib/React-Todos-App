import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTask] = useState('QalbeHabib');

  // console.log(tasks)

  function createTodo() {
    if (!tasks) {
    } else {
      setTodos((h) => {
        setTask(''); // For Empty the input field
        return [...h, tasks];
      });
    }
  }

  const deleteTodo = (id) => {
    setTodos((todos) =>
      todos.filter((el, idx) => {
        return idx != id;
      })
    );
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  function enterKey(e) {
    // console.log('Event :', e);
    if (e.keyCode == 13) {
      createTodo();
    }
  }

  return (
    <div className="App-header">
      <h1>Todos App</h1>

      <input
        className="iput"
        type="text"
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
                <li> {item} </li>
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

// import React, { useState } from 'react';
// import './style.css';

// export default function App() {
//   const [todos, setTodos] = useState(['habib', 'ali', 'hassan']);
//   const [tasks, setTask] = useState('QalbeHabib');

//   // console.log(tasks)

//   function createTodo() {
    
//     setTodos((h) => {
//       setTask('');
//       return [...h, tasks];
//     });
   
//   }

//   function enterKey(e) {
//     // console.log('Event :', e);
//     if (e.keyCode == 13) {
//       createTodo();
//     }
//   }

//   return (
//     <div className="App-header">
//       <h1>Todos App</h1>

//       <input
//         className="iput"
//         type="text"
//         value={tasks}
//         onChange={(e) => {
//           setTask(e.target.value);
//         }}
//         onKeyDown={enterKey}
//       />

//       <button className="btn" onClick={createTodo}>
//         Add Todos
//       </button>

//       <div className="todo-container">
//         <ul>
//           {todos.map((todo) => {
//             return <li> {todo} </li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

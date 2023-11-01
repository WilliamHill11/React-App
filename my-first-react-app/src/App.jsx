// import { useState } from 'react';
// import './App.css';
// import Task from './Task';

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList([...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}> Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <Task
//               taskName={task.taskName}
//               id={task.id}
//               completed={task.completed}
//               deleteTask={deleteTask}
//               completeTask={completeTask}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import './App.css';
// import Task from './Task';

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };

//     setTodoList([...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((newTask) => id !== newTask.id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         console.log(task, 'task');
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input type="text" onChange={handleChange} />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         <div>
//           {todoList.map((task) => {
//             return (
//               <Task
//                 taskName={task.taskName}
//                 id={task.id}
//                 deleteTask={deleteTask}
//                 completeTask={completeTask}
//                 completed={task.completed}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}

export default App;

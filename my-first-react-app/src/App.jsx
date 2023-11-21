// import './App.css';
// import { useState } from 'react';
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
//         <button onClick={addTask}>addTask</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <Task
//               taskName={task.taskName}
//               id={task.id}
//               deleteTask={deleteTask}
//               completeTask={completeTask}
//               completed={task.completed}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const App = ({ name }) => {
//   const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
//   const [inputVal, setInputVal] = useState('');

//   const handleInputChange = (e) => {
//     setInputVal(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos((todo) => [...todo, inputVal]);
//     setInputVal('');
//   };

//   return (
//     <section>
//       <h3>{name}</h3>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="task-entry">Enter a task: </label>
//         <input
//           type="text"
//           name="task-entry"
//           value={inputVal}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <h4>All the tasks!</h4>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo}>{todo}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Nav from './Nav';
import ProfileIndex from './Pages/ProfileIndex';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:username" element={<ProfileIndex />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>Footer</div>
    </Router>
  );
}
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from "./assets/task.png";
import "./App.css";
import Header from "./components/Header.tsx";
import { useState } from "react";
import TaskList from "./components/TaskList.tsx";

//here we are defining a type for our task object
//since we will be using this type in multiple places its better to export it from here so that other components can import and use it.
export type Tasks = {
  id: number;
  title: string;
  description: string;
};
function App() {
  const [task, setTask] = useState<Tasks[]>([]);

  //
  function handleAddTask() {
    //so to update this state here we will use the function form of the setState because we are updating based on the previous state. here we will automatically get the previous state as an argument , when react calls this function
    //if your new state depends on the old state always use the function form of the setState
    setTask((prevTasks) => {
      const newTask: Tasks = {
        id: prevTasks.length + 1, // just to ensure unique ids for each task
        title: "New Task",
        description: "Task Description",
      };
      return [...prevTasks, newTask];// we are returning the updated array here . 
    });
  }
  return (
    <main>
      <Header image={{ src: logo, alt: "logo" }}>
        <h1>Task Lists</h1>
      </Header>
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList task={task}/>
     
    
    </main>
  );
}

export default App;

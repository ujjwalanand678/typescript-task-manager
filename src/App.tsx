// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from "./assets/task.png";
import "./App.css";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";
import { useState } from "react";

type Tasks = {
  id: number;
  title: string;
  description: string;
};
function App() {
  const [task , setTask] = useState<Tasks[]>([])
  function handleAddTask(){
setTask([])
  }
  return (
    <main>
      <Header image={{ src: logo, alt: "logo" }}>
        <h1>Task Lists</h1>
      </Header>
      <button onClick={handleAddTask}>Add Task</button>
      <TaskManager
        title="Learn Typescript"
        description="Learning from the basics"
      />
    </main>
  );
}

export default App;

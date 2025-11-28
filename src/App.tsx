// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <main>
      <TaskManager
        title="Learn Typescript"
        description="Learning from the basics"
      />
    </main>
  );
}

export default App;

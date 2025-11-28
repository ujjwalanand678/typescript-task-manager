import logo from "./assets/task.png";
import Header from "./components/Header.tsx";
import { useState } from "react";
import TaskList from "./components/TaskList.tsx";
import NewTask from "./components/NewTask.tsx";

//here we are defining a type for our task object
//since we will be using this type in multiple places its better to export it from here so that other components can import and use it.
export type Tasks = {
  id: number;
  title: string;
  description: string;
};
function App() {
  const [task, setTask] = useState<Tasks[]>([]);

  function handleAddTask(title: string, description: string) {
    //so to update this state here we will use the function form of the setState because we are updating based on the previous state. here we will automatically get the previous state as an argument , when react calls this function
    //if your new state depends on the old state always use the function form of the setState
    setTask((prevTasks) => {
      const newTask: Tasks = {
        id: prevTasks.length + 1, // just to ensure unique ids for each task
        title,
        description,
      };
      return [...prevTasks, newTask]; // we are returning the updated array here .
    });
  }

  function handleDeleteTask(id: number) {
    // here also we are using the function form of setState to ensure we are working with the latest state.
    // also we are accessing the previous state via the argument prevTasks
    //we want to return a new array that is minus the task with the given id
    //and for that we can use filter method that is a bult-in array method in javascript
    // filter method creates a new array from an existing array based on a condition we provide in the callback function. fro that filter recieves a function as an argument that is called for each element in the array. if the function returns true for an element that element is included in the new array otherwise its excluded.
    setTask((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-8">
      <Header image={{ src: logo, alt: "logo" }}>
        <h1 className="text-3xl font-bold text-gray-800">Task Lists</h1>
      </Header>

      <div className="mt-6 flex justify-center">
        <NewTask onAddTask={handleAddTask}/>
      
      </div>

      <div className="mt-8">
        <TaskList task={task} onDeleteTask={handleDeleteTask} />
      </div>
    </main>
  );
}

export default App;

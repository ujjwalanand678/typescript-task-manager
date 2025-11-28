import TaskManager from "./TaskManager";
//here we are importing the Tasks type from App.tsx and giving it an alias TaskAlias to avoid naming conflicts.
import type { Tasks as TaskAlias } from "../App.tsx";

type TaskListProps = {
    task: TaskAlias[];
}

const TaskList = ({task}:TaskListProps) => {
  return (
    <ul>
         {task.map((t)=>( 
        <li key={t.id}>
          <TaskManager
        title= {t.title}
        description={t.description}
      />
        </li>
      ))}
      </ul>
  );
};

export default TaskList;

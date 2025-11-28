import TaskManager from "./TaskManager";
//here we are importing the Tasks type from App.tsx and giving it an alias TaskAlias to avoid naming conflicts.
import type { Tasks as TaskAlias } from "../App.tsx";

type TaskListProps = {
  task: TaskAlias[];
  onDeleteTask: (id: number) => void; // prop for delete function . void means it does not return anything
};

const TaskList = ({ task, onDeleteTask }: TaskListProps) => {
  return (
    <ul
      className="
        mt-6 
        space-y-5 
        font-hand 
        filter-wobble
      "
    >
      {task.map((t) => (
        <li key={t.id} className="list-none">
          <TaskManager
            title={t.title}
            description={t.description}
            id={t.id}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

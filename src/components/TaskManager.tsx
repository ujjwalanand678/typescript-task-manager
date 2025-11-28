interface TaskManagerProps {
  title: string;
  description: string;
}

const TaskManager = ({title , description}: TaskManagerProps) => {
  return (
  <article>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <button>Delete</button>
  </article>);
};

export default TaskManager;

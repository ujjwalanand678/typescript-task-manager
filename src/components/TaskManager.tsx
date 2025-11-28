interface TaskManagerProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

const TaskManager = ({
  title,
  description,
  onDelete,
  id,
}: TaskManagerProps) => {
  return (
    <article className="bg-white p-4 rounded-xl shadow flex items-start justify-between border border-gray-200">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="ml-4 px-3 py-1 rounded-lg bg-red-500 text-white text-sm shadow hover:bg-red-600 transition"
      >
        Delete
      </button>
    </article>
  );
};

export default TaskManager;

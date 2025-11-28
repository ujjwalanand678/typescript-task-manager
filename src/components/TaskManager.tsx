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
    <article
      className="
        bg-white 
        p-5 
        rounded-sketch 
        border-pencil 
        shadow-pencil 
        flex justify-between items-start gap-4 
        filter-wobble
      "
    >
      <div className="flex-1">
        <h2
          className="
            text-xl 
            font-hand 
            text-gray-900
            filter-wobble
          "
        >
          {title}
        </h2>

        <p
          className="
            text-gray-700 
            mt-1 
            font-hand
            filter-wobble
          "
        >
          {description}
        </p>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="
          shrink-0 px-3 py-1 
          rounded-sketch 
          border-pencil 
          bg-white
          shadow-pencil
          font-hand
          text-red-600
          hover:bg-red-100
          active:translate-x-1 active:translate-y-1 active:shadow-none
          transition
          filter-wobble
        "
      >
        Delete
      </button>
    </article>
  );
};

export default TaskManager;

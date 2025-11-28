import type { FormEvent } from "react";

type NewTaskProps = {
  onAddTask: (title: string, description: string) => void;
};

const NewTask = ({ onAddTask }: NewTaskProps) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const title = data.get("task")?.toString().trim() || "";
    const description = data.get("description")?.toString().trim() || "";

    if (!title) return;

    onAddTask(title, description);

    event.currentTarget.reset();
  }

  return (
 <form
      onSubmit={handleSubmit}
      className="
        bg-white 
        p-6 
        rounded-sketch 
        border-pencil 
        shadow-pencil 
        filter-wobble
        w-full
      "
    >
      {/* layout: stacked on mobile, row on md+, bottom-align contents */}
      <div className="flex flex-col md:flex-row md:items-end gap-6 w-full">

        {/* Title column */}
        <div className="flex-1 flex flex-col">
          <label
            htmlFor="task"
            className="block text-2xl font-hand text-gray-800 mb-2"
          >
            Task Title
          </label>

          {/* keep input same height as textarea & button so bottoms line up */}
          <input
            type="text"
            id="task"
            name="task"
            className="
              w-full 
              h-14                /* explicit height */
              px-4 py-3
              rounded-sketch 
              border-pencil 
              shadow-pencil
              bg-white 
              font-hand text-xl
              focus:outline-none
              filter-wobble
            "
            placeholder="Write your task…"
          />
        </div>

        {/* Description column */}
        <div className="flex-1 flex flex-col">
          <label
            htmlFor="description"
            className="block text-2xl font-hand text-gray-800 mb-2"
          >
            Description
          </label>

          {/* make textarea the same height as input on desktop (h-14) */}
          <textarea
            id="description"
            name="description"
            className="
              w-full 
              h-14              /* same explicit height as input */
              px-4 py-3
              rounded-sketch 
              border-pencil 
              shadow-pencil
              bg-white 
              font-hand text-xl
              resize-none
              focus:outline-none 
              filter-wobble
            "
            placeholder="Add some details…"
          />
        </div>

        {/* Button column: align to bottom with md:items-end and this wrapper */}
        <div className="flex items-end">
          <button
            type="submit"
            className="
              w-full md:w-auto 
              px-8 py-3
              bg-white 
              rounded-sketch 
              border-pencil 
              shadow-pencil 
              font-hand text-xl
              text-gray-900
              hover:bg-gray-100
              active:translate-x-1 active:translate-y-1 active:shadow-none
              transition 
              filter-wobble
            "
          >
            Add Task
          </button>
        </div>
      </div>
    </form>



  );
};

export default NewTask;

//--- NOTES ---
//about forms
// label element is used to provide a caption for an input element. it improves accessibility by associating text with a specific form control.
// the htmlFor attribute in the label element links the label to the input element with the corresponding id. this association helps screen readers to identify which label belongs to which input field, enhancing accessibility for users with disabilities.
// in this example, the label "New Task" is associated with the input field having the id "task". when a user clicks on the label, the focus will automatically move to the associated input field, making it easier for users to interact with the form.
//FORM TYPES IN TYPESCRIPT
// FormEvent is a type provided by React that represents the event object passed to event handlers for form elements. it is a generic type that can be used to type the event parameter in form-related event handlers, such as onSubmit, onChange, etc.
// by using FormEvent, we can ensure that the event object has the correct properties and methods specific to form events, providing better type safety and autocompletion when working with forms in React and TypeScript.
//new FormData(event.currentTarget) = this line extracts the form data from the form element that triggered the submit event. event.currentTarget refers to the form element itself, and new FormData(...) creates a new FormData object containing all the input values from that form.
// FormData is a built-in web API that provides a way to easily construct a set of key/value pairs representing form fields and their values. it is commonly used to send form data via XMLHttpRequest or the Fetch API.

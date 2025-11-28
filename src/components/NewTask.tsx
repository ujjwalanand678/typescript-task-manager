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
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <div>
        <label
          htmlFor="task"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Task title
        </label>
        <input
          type="text"
          id="task"
          name="task"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task description"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add task
      </button>
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
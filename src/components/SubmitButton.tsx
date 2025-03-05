import React, { useState, useEffect } from "react";

interface SubmitButtonProps {
  setTasks: React.Dispatch<React.SetStateAction<{ task: string; description: string }[]>>;
  editTask: { task: string; description: string } | null;
  editIndex: number | null;
  setEditTask: React.Dispatch<React.SetStateAction<{ task: string; description: string } | null>>;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ setTasks, editTask, editIndex, setEditTask, setEditIndex }) => {
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  //  form fields when an edit task is selected
  useEffect(() => {
    if (editTask) {
      setTask(editTask.task);
      setDescription(editTask.description);
      setShowForm(true);
    }
  }, [editTask]);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      setTasks((prevTasks) =>
        prevTasks.map((t, i) => (i === editIndex ? { task, description } : t))
      );
      setEditTask(null);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks((prevTasks) => [...prevTasks, { task, description }]);
    }

    setTask("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <>
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          + New Task
        </button>
      )}

      {showForm && (
        <form
          onSubmit={submitHandle}
          className="font-sans inset-0 flex items-end justify-center absolute bg-white text-black bg-opacity-55"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between mb-3">
              <h1 className="text-2xl font-semibold">{editTask ? "Edit Task" : "New Task"}</h1>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditTask(null);
                  setEditIndex(null);
                }}
                className="text-lg"
              >
                ✖️
              </button>
            </div>
            <section className="flex flex-col gap-6">
              <div>
                <label className="text-lg font-medium block mb-2">Task</label>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all w-full md:w-auto">
                {editTask ? "Update Task" : "Add Task"}
              </button>
            </section>
          </div>
        </form>
      )}
    </>
  );
};

export default SubmitButton;

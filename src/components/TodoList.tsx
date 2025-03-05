import { useState } from "react";
import SubmitButton from "./SubmitButton";

const TodoList = () => {
  const [tasks, setTasks] = useState<{ task: string; description: string }[]>([]);
  const [completeTasks, setCompleteTasks] = useState<{ task: string; description: string }[]>([]);
  const [editTask, setEditTask] = useState<{ task: string; description: string } | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Move task to completed
  const completeTask = (index: number) => {
    setCompleteTasks((prev) => [...prev, tasks[index]]);
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // Remove task from completed list
  const deleteTask = (index: number) => {
    setCompleteTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col h-screen p-3">
      <h1 className="p-3 text-3xl font-bold">Todo List</h1>
      <div className="overflow-auto max-h-[350px] pb-20">
        {tasks.length === 0 ? (
          <p className="text-xl">No task added! Add task</p>
        ) : (
          tasks.map((t, index) => (
            <section
              key={index}
              className="text-xl p-5 gap-y-3 border border-white rounded-md mt-4  w-full"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1>{t.task}</h1>
                  <span>{t.description}</span>
                </div>
                <div className="space-x-4">
                  <button onClick={() => completeTask(index)}>✔️</button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setEditTask(t);
                      setEditIndex(index);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      {/* Completed Tasks */}
      <div className="overflow-auto max-h-[200px] pb-20">
        <h2 className="text-xl font-semibold mb-3">Completed</h2>
        {completeTasks.length === 0 ? (
          <p className="text-xl">No task Completed!</p>
        ) : (
          completeTasks.map((t, index) => (
            <section key={index} className="w-full mt-6">
              <div className="p-5 border border-black opacity-45 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h1>{t.task}</h1>
                    <span>{t.description}</span>
                  </div>
                  <button onClick={() => deleteTask(index)}>❌</button>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      {/* Task Form */}
      <SubmitButton
        setTasks={setTasks}
        editTask={editTask}
        editIndex={editIndex}
        setEditTask={setEditTask}
        setEditIndex={setEditIndex}
      />
    </div>
  );
};

export default TodoList;

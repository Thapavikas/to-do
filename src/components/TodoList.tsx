// import React from "react";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

const TodoList = () => {
  const [tasks, setTasks] = useState<{ task: string; description: string }[]>(
    []
  );
  const [completeTasks, setCompleteTasks] = useState<
    { task: string; description: string }[]
  >([]);

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
    <div className=" flex flex-col h-screen  p-4">
      <h1 className="p-3 text-3xl font-bold">Todo App</h1>
      <div className="overflow-auto max-h-[350px]  pb-20">
        {/* Task Section */}
        {tasks.length === 0 ? (
          <p className=" text-xl ">No task added! Add task</p>
        ) : (
          tasks.map((t, index) => (
            <section
              key={index}
              className="text-xl p-5 gap-y-3 border rounded-md mt-4 w-full max-w-lg md:max-w-auto sm:max-w-full"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1>{t.task}</h1>
                  <span> {t.description}</span>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => {
                      completeTask(index);
                    }}
                  >
                    ✔️
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      {/* Completed Section */}
      <div className="overflow-auto max-h-[200px]  pb-20">
        <h2 className="text-xl font-semibold mb-3">Completed</h2>
        {completeTasks.length == 0 ? (
          <p className=" text-xl ">No task Completed!</p>
        ) : (
          completeTasks.map((t, index) => (
            <section
              key={index}
              className="w-full max-w-lg md:max-w-auto sm:max-w-full mt-6"
            >
              <div className="p-5 border rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h1>{t.task}</h1>
                    <span> {t.description}</span>
                  </div>
                  <button
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      {/* Task Button */}
      <SubmitButton setTasks={setTasks} />
    </div>
  );
};

export default TodoList;

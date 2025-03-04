// import React from "react";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
const TodoList = () => {
  const [user, setUser] = useState<Boolean>(true);

  const handleClick: any = () => {
    setUser(!user);
  };
  return (
    <div className=" flex flex-col h-screen  p-4">
      <h1 className="p-3 text-3xl font-bold">Todo App</h1>
      <div className="overflow-auto max-h-[200px]  pb-20">
        {/* Task Section */}
        <section className="text-xl p-5 gap-y-3 border rounded-md mt-4 w-full max-w-lg md:max-w-auto sm:max-w-full">
          <div className="flex justify-between items-center">
            <span>Buy groceries</span>
            <div className="space-x-4">
              <button>✔️</button>
              <button>❌</button>
              <button className="text-blue-500 hover:text-blue-700">
                Edit
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Completed Section */}
      <div className="overflow-auto max-h-[200px]  pb-20">
      <section className="w-full max-w-lg md:max-w-auto sm:max-w-full mt-6">
        <h2 className="text-xl font-semibold mb-3">Completed</h2>
        <div className="p-5 border rounded-md">
          <div className="flex justify-between items-center">
            <span>Buy groceries</span>
            <button>❌</button>
          </div>
        </div>
      </section>

      </div>

      {/* Fixed Add Task Button */}
      <footer className="fixed bottom-4 w-[90%]  max-w-lg sm:max-w-full">
        {user ? (
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white w-full m-8 px-6 py-3 rounded-full  hover:bg-blue-600"
          >
            Add Task
          </button>
        ) : (
            <SubmitButton />
        )}
      </footer>
    </div>
  );
};

export default TodoList;

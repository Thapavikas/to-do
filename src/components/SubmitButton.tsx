import { useState } from "react";

const SubmitButton = () => {
  const [cross, setCross] = useState(true);

  const handleClick = () => {
    setCross(!cross);
  };

  return (
    <>
      {/* Button to Open Modal */}
      {!cross && (
        <button
          onClick={handleClick}
          className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          + New Task
        </button>
      )}

      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between mb-3">
              <h1 className="text-2xl font-semibold">New Task</h1>
              <button onClick={handleClick} className="text-lg">✖️</button>
            </div>
            <section className="flex flex-col gap-6">
              {/* Task Input */}
              <div>
                <label className="text-lg font-medium block mb-2">Task</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description Textarea */}
              <div>
                <label className="text-lg font-medium block mb-2">Description</label>
                <textarea
                  className="w-full border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all w-full md:w-auto">
                Add Task
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default SubmitButton;

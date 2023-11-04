import React from "react";

const Task = ({ task, selectTask }) => (
  <form>
    <div className="flex items-center gap-1">
      <input
        onChange={() => selectTask(task)}
        type="checkbox"
        className="text-indigo-400 border-gray-300 rounded focus:ring-indigo-500"
      />
      <span className="block ml-2 text-sm font-medium text-gray-700">
        {task.content}
      </span>
    </div>
  </form>
);

export default Task;

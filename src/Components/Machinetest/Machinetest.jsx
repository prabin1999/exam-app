import React, { useState } from "react";
import "../../assets/Styles/Machine.css"

const Machinetest = () => {
  const [add, setAdd] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (add.trim() === "") return;
    setTasks([...tasks, add]);
    setAdd("");
  };
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h2 className="text-center mytask mt-5">My Task</h2>
      <div className="form-action text-center mb-3">
        <input
          type="text"
          placeholder="Type your task"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button className="addbt px-5" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button className="delebt" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Machinetest;

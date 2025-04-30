import React, { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Column from "./Column";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  const handleAdd = async (task) => {
    let maxId = 0;
    for (let i = 0; i < tasks.length; i++) {
      const taskId = Number(tasks[i].id);
      if (taskId > maxId) {
        maxId = taskId;
      }
    }

    const newId = (maxId + 1).toString();
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, id: newId }),
    });
    const newTask = await res.json();
    setTasks((prev) => prev.concat(newTask));
    setShowModal(false);
  };

  const updateStatus = async (id, newStatus) => {
    console.log("Updating task with id:", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    const updatedTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        updatedTasks.push({ ...tasks[i], status: newStatus });
      } else {
        updatedTasks.push(tasks[i]);
      }
    }
    setTasks(updatedTasks);
  };
  
  const getTasksByStatus = (status) => {
    const result = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].status === status) {
        result.push(tasks[i]);
      }
    }
    return result;
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add New Task</button>
      {showModal && <AddTaskModal onAdd={handleAdd} onClose={() => setShowModal(false)} nextId={tasks.length + 1} />}
      
      <div className="columns">
          <Column
            status="To Do"
            tasks={getTasksByStatus("To Do")}
            onDrop={updateStatus}
          />
          <Column
            status="In Progress"
            tasks={getTasksByStatus("In Progress")}
            onDrop={updateStatus}
          />
          <Column
            status="Done"
            tasks={getTasksByStatus("Done")}
            onDrop={updateStatus}
          />
      </div>
    </div>
  );
  
};

export default TaskBoard;

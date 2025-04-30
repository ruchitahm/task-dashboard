import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const Column = ({ status, tasks, onDrop }) => {

  const getColumnClass = (status) => {
    switch (status) {
      case "To Do":
        return "todo";
      case "In Progress":
        return "in-progress";
      case "Done":
        return "done";
      default:
        return "other";
    }
  };

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      if (item.status !== status) {
        onDrop(item.id, status);
      }
    },
  });


  return (
    <div ref={drop} className={"column " + getColumnClass(status)}>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;

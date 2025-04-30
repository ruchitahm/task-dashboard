import React, { useState } from "react";

const AddTaskModal = ({ onAdd, onClose, nextId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const submit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ id: nextId, title, description, status });
    }
  };

  return (
    <div className="modal">
      <form onSubmit={submit}>
        <label>Title</label>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddTaskModal;

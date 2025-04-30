import React from "react";
import TaskBoard from "./components/TaskBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Task Management Dashboard</h1>
        <TaskBoard />
      </div>
    </DndProvider>
  );
}

export default App;

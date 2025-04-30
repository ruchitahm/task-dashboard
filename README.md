# Task Management Dashboard

This project is a simple task management web application that allows users to create and view tasks. The tasks are categorized by their status, and users can drag and drop tasks to different status values such as To Do, In Progress, Done.

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js (version 14.x or later)
- npm (comes with Node.js)

## Steps to Run Locally
- Clone the repository:
    Clone the repository to your local machine using the following command:
    ### `git clone https://github.com/ruchitahm/task-dashboard.git`

- Install dependencies:
    Navigate to the project directory and install the necessary dependencies for the React app:
    ### `cd task-dashboard`
    ### `npm install`

- Start the project:
    To start both the React app and the server concurrently, use the following command:
    ### `npm start`
    The app should now be running on http://localhost:3000.

- Data Flow
    - Tasks are fetched from the json-server(https://jsonplaceholder.typicode.com/todos?_limit=5) when the app loads.
    - 5 Tasks are displayed in columns based on their status (To Do, In Progress, Done).
    - Users can update the status of tasks by drag-and-drop.
    - New tasks can be added via a modal.

- Libraries and Tools Used
    - React: For building the user interface.
    - json-server: For simulating a REST API backend to store and retrieve tasks.
    - react-dnd: For implementing the drag-and-drop feature.
    - concurrently: For running the server and React app simultaneously.


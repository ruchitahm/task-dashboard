const fs = require("fs");

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

async function loadTasks() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const tasks = [];
  for (let i = 0; i < data.length; i++) {
    const { id, title, completed } = data[i];
    let status;
    if (completed) {
      status = "Done";
    } else {
      status = "To Do";
    }

    tasks.push({
      id,
      title,
      description: "",
      status,
    });
  }

  fs.writeFileSync("db.json", JSON.stringify({ tasks }, null, 2));
  console.log("5 Data Samples is loaded into db.json file");
}

loadTasks();

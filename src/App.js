import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      title: "title",
      desc: "desc",
      done: false,
      deadline: "22.12.22",
    },
  ]);

  const handleAdd = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDel = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Form tasks={tasks} handleAdd={handleAdd} />
      <List tasks={tasks} handleDel={handleDel} />
    </div>
  );
}

export default App;

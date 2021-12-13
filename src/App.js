import { createContext, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

export const tasksContext = createContext();

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
    <tasksContext.Provider value={{tasks, handleAdd, handleDel}}>
      <div className="App">
        <Form />
        <List />
      </div>
    </tasksContext.Provider>
  );
}

export default App;

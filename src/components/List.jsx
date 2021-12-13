import React, { useContext } from "react";
import { tasksContext } from "../App";
import { Task } from "./Task";

export const List = () => {
  const { tasks, handleDel } = useContext(tasksContext);
  
  return (
    <ol style={{ display: "flex" }}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleDel={handleDel} />
      ))}
    </ol>
  );
};

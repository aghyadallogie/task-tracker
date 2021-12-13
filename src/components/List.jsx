import React from "react";
import { Task } from "./Task";

export const List = ({ tasks, handleDel }) => {
  return (
    <ol style={{ display: "flex" }}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleDel={handleDel} />
      ))}
    </ol>
  );
};
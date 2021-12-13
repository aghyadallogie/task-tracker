import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task";

export const List = () => {
  const tasks = useSelector((state) => state);

  return (
    <ol style={{ display: "flex" }}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ol>
  );
};

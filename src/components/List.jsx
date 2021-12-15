import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task";

export const List = () => {
  const tasks = useSelector((state) => state.tasks);
  const email = useSelector((state) => state.user.user.email);

  return (
    <>
      <ol style={{ display: "flex" }}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ol>
      <h3>these are the tasks of the user with the email: {email}</h3>
    </>
  );
};

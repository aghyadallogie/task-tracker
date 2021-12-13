import React from "react";
import { useDispatch } from "react-redux";
import { delTaskAction } from "../store/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={taskCard}
      onDoubleClick={() => dispatch(delTaskAction(task.id))}
    >
      <h1>{task.title}</h1>
      <h2>{task.desc}</h2>
      <h3>status: {task.done ? "finished" : "unfinished"} </h3>
      <p>{task.deadline}</p>
    </div>
  );
};

const taskCard = {
  margin: "15px",
  padding: "15px",
  width: "200px",
  height: "260px",
  border: "1px solid tomato",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  background: "whitesmoke",
  cursor: "pointer",
};

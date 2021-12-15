import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../store/actions/tasksActions";
import { logoutAction } from "../store/actions/usersActions";

export const Form = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    id: Date.now(),
    title: "title",
    desc: "desc",
    done: false,
    deadline: "22.12.22",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTaskAction(task));
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Task title:
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value, id: Date.now() })
          }
        />
      </label>
      <label>
        Task description:
        <input
          type="text"
          name="description"
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
        />
      </label>
      <input type="submit" value="Submit" />
      <input type="button" value="Logout" onClick={() => dispatch(logoutAction())} />
    </form>
  );
};

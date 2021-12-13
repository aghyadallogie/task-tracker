export const delTaskAction = (id) => ({
  type: "DEL_TASK",
  payload: id,
});

export const addTaskAction = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

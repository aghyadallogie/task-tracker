export const addTaskAction = (newTask) => {
  return {
    type: "ADD_TASK",
    payload: newTask,
  };
};

export const delTaskAction = (id) => {
    return {
        type: 'DEL_TASK',
        payload: id
    }
}
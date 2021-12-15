const initialState = [
  {
    id: Math.random(),
    title: "title",
    desc: "desc",
    done: false,
    deadline: "22.12.22",
  },
];

export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return [...state, payload];
    case "DEL_TASK":
      return state.filter((task) => task.id !== payload);
    default:
      return state;
  }
};

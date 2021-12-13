const initialState = [
  {
    id: Math.random(),
    title: "title",
    desc: "desc",
    done: false,
    deadline: "22.12.22",
  },
];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DEL_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

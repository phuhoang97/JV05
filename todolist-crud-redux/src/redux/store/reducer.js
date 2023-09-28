import * as actionType from "../action/action";

const initalState = {
  newTask: "",
  tasks: [],
};

const reducer = (state = initalState, action) => {
  console.log(state);
  switch (action.type) {
    case actionType.SET_NEW_TASK:
      return { ...state, newTask: action.payload };
    case actionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case actionType.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload ? { ...e, complete: !e.complete } : e
        ),
      };
    case actionType.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionType.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    default:
      break;
  }
  return state;
};

export default reducer;

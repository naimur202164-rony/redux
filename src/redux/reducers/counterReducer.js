const counterReducer = (state, action) => {
  switch (action.tyoe) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    case "RESET":
      return (state = 0);

      default :
      return state
  }
};

const conunterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: count.state + 1,
      };

    case "DEC":
      return {
        ...state,
        count: count.state - 1,
      };
    case "RESET":
      return {
        ...state,
        count: (count.state = 0),
      };
  }
};

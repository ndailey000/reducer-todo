



export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589  
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      if (!action.payload) {
        return {
          ...state,
          editing: !state.editing
        };
      } else {
        return {
          ...state,
          title: action.payload,
          editing: !state.editing
        }
      }
        case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing
      };
        default:
        return state;
        };
      };
   
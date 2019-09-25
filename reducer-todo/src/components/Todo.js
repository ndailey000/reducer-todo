import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducers';





const Todo = () => {
    const [newTodoState, setNewTodoState] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState );
    const handleChanges = e => {
        setNewTodoState(e.target.value);
    };
    return(
        <div> 
             <div className= "Todo" >
          <input
            className="todo-input"
            type="text"
            name="newTodoState"
            value={newTodoState}
            onChange={handleChanges}
          />
        </div>
        <button
            onClick={() => {
              dispatch({ type: "UPDATE_TODO", payload: newTodoState });
            }}
          >
          </button>
        </div>
    )
}
export default Todo;
import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            console.log(action.payload);
            return state.filter((todo: Todo) => {
                return todo.id !== action.payload;
            });
        default:
            return state;
    }
};

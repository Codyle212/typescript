import { FetchTodosAction, DeleteTodoAction } from './todos';
export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}
//in enum a auto incrementing number is assigned to the types i.e fetchTodos=0
export type Action = FetchTodosAction | DeleteTodoAction;

import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
//use interface to define structure of properties
interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: Function;
}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false };
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <h1 onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
                    {todo.title}
                </h1>
            );
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'Loading' : null}
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos };
};
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

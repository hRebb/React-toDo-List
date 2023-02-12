import React from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onTodoClick: (id: number) => void;
}

interface TodoItemProps {
    todo: Todo;
    onClick: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onClick(todo.id)}
        >
            {todo.text}
        </li>
    )
};

const TodoList: React.FC<TodoListProps>= ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onClick={onTodoClick} />
            ))}
        </ul>
    );
};

export default TodoList;
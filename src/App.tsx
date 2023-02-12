import React, {useState} from "react";
import TodoList from "./TodoList";
import './App.css'

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    text: 'Task 1',
    done: false
  },
  {
    id: 2,
    text: 'Task 2',
    done: false
  },
  {
    id: 3,
    text: 'Task 3',
    done: false
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextId] = useState(4);
  const [newTodoText, setNewTodoText] = useState('');

  const handleTodoClick = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, done: !todo.done}
        }
        return todo;
      })
    );
  };

  const handleAddTodo: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (!newTodoText) {
      return;
    }

    setTodos([...todos, {id: nextId, text: newTodoText, done: false}])
    setNextId(nextId + 1);
    setNewTodoText('');
  }

  return (
    <div>
      <main>
        <TodoList todos={todos} onTodoClick={handleTodoClick} />
        <input
          type="text"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button onClick={handleAddTodo}>
          Add a Task
        </button>
      </main>
    </div>
  )
}

export default App;
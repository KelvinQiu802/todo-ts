import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Todo } from './utils/iinterface';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    setTodos((prev) => [
      ...prev,
      {
        id: nanoid(),
        content: input,
        done: false,
      },
    ]);
    setInput('');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className='App'>
      <h1>Todo List with React and TypeScript</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

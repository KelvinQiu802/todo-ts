import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';

interface Todo {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    </div>
  );
}

export default App;

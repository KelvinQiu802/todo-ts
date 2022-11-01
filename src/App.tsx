import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Todo } from './utils/interface';
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

  const handleSwitch = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    const id = e.currentTarget.dataset.id as string;
    setTodos((prev) => {
      const copy = [...prev];
      const index = copy.findIndex((item) => item.id === id);
      const todo = copy[index];
      copy.splice(index, 1, { id, content: todo.content, done: !todo.done });
      return copy;
    });
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    const id = e.currentTarget.dataset.id as string;
    setTodos((prev) => {
      const copy = [...prev];
      const index = copy.findIndex((item) => item.id === id);
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div className='App'>
      <h1>Todo List with React and TypeScript</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
      <TodoList
        todos={todos}
        handleSwitch={handleSwitch}
        handleDelete={handleDelete}
        isTodo={true}
      />
      <hr />
      <TodoList
        todos={todos}
        handleSwitch={handleSwitch}
        handleDelete={handleDelete}
        isTodo={false}
      />
    </div>
  );
}

export default App;

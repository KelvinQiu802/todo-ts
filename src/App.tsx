import React from 'react';
import './App.css';

function App() {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

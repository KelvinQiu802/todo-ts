import React from 'react';
import { Todo } from '../utils/iinterface';

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='list'>
          <h3>{todo.content}</h3>
          <div className='option'>
            <h4>Done</h4>
            <h4>Delete</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

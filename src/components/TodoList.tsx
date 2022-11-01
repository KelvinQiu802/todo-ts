import React from 'react';
import { Todo } from '../utils/interface';

interface Props {
  todos: Todo[];
  handleDone: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
  handleDelete: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
}

function TodoList({ todos, handleDelete, handleDone }: Props) {
  return (
    <div>
      {todos
        .filter((todo) => !todo.done)
        .map((todo) => (
          <div key={todo.id} className='list'>
            <h3>{todo.content}</h3>
            <div className='option'>
              <h4 onClick={handleDone} data-id={todo.id}>
                Done
              </h4>
              <h4 onClick={handleDelete} data-id={todo.id}>
                Delete
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;

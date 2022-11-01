import React from 'react';
import { Todo } from '../utils/interface';

interface Props {
  todos: Todo[];
  handleSwitch: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
  handleDelete: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
  isTodo: boolean;
}

function TodoList({ todos, handleDelete, handleSwitch, isTodo }: Props) {
  return (
    <div>
      {todos
        .filter((each) => {
          return isTodo ? !each.done : each.done;
        })
        .map((todo) => (
          <div key={todo.id} className='list'>
            <h3>{todo.content}</h3>
            <div className='option'>
              <h4 onClick={handleSwitch} data-id={todo.id}>
                {isTodo ? 'Done' : 'Redo'}
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

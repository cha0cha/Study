import React from 'react';
import TodoListitem from './TodoListitem';
import './TodoList.scss';
function TodoList({ todos, onRemove, onToggle }) {
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListitem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;

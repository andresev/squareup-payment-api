import Link from 'next/link';
import React from 'react';
import { Todo } from '../../typings';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  console.log('This is the todos', todos);
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <Link href={`/todos/${item.id}`}>Todo: {item.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodosList;

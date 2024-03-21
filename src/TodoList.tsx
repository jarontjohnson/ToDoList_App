import React, { useState } from 'react'

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoList: React.FC = () => {
    const [todo, setTodos] = useState<item[]>([
        { id: 1, text: 'Build Todo App', completed: false },
        { id: 2, text: 'Second Todo', completed: false }
    ])
    const [input, setInput] = useState<string>('');

    const handleToggle = (id:number) => {
        setTodos(todo.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
            })
        );
    };

    const handleClick = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false};
        setTodos([...todo, newTodo]);
    };
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todo.map((todo) => (
            <li
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
            </li>
        ))}
      </ul>
      <input type="text" placeholder="Add todo item" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
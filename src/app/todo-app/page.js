"use client";
import { useState, useEffect } from "react";
import styles from '@styles/todo.module.scss';

const TodoApp = () => {
    const [todo, setTodo] = useState({ task: '', status: 'pending' });
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todo.task.trim() === '') {
            alert('Task is required');
        } else {
            setTodos([...todos, todo]);
            setTodo({ task: '', status: 'pending' });
        }
    };

    useEffect(() => {
        console.log('I am triggered');
    }, [todos]);

    return (
        <>
            <div className={styles.container}>
                <h1>Todo Application</h1>
                <div className={styles.todo_container}>
                    <input
                        type="text"
                        placeholder="Enter task here..."
                        value={todo.task}
                        onChange={e => setTodo({ ...todo, task: e.target.value })}
                    />
                    <button onClick={handleAddTodo}>Add Todo</button>
                </div>
                <div className={styles.todo_list}>
                    {todos.map((todo, index) => (
                        <div className={styles.todo} key={index}>
                            <p>{todo.task}</p>
                            <button>Done</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TodoApp;

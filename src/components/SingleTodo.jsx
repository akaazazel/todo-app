import React from "react";
import { doneToggle } from "../todo_function";

const SingleTodo = ({ todo, todosList, setTodosList }) => {
    const handleDate = (date) => {
        return date.toDateString();
    };

    const handleTodoToggle = () => {
        setTodosList(doneToggle(todosList, todo.todo_id));
    };

    return (
        <div className="single-todo-box">
            <input
                type="checkbox"
                checked={todo.is_done}
                onChange={() => handleTodoToggle()}
            />
            <div
                className={
                    todo.is_done ? "todo-details crossed" : "todo-details"
                }
            >
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <p>{handleDate(todo.date_created)}</p>
            </div>
            <div className="action-buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default SingleTodo;

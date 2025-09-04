import React from "react";
import { doneToggle } from "../todo_function";

const SingleTodo = ({
    todo,
    todosList,
    setTodosList,
    editingState,
    setEditingState,
    setTitle,
    setDescription,
    setDate,
    setIsDone,
}) => {
    const handleDate = (date) => {
        return date.toDateString();
    };

    const handleTodoToggle = () => {
        setTodosList(doneToggle(todosList, todo.todo_id));
    };

    const handleEditing = () => {
        setEditingState(true);
        setTitle(todo.title);
        setDescription(todo.description);
        setDate(todo.date_created.toISOString().split("T")[0]);
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
                <button onClick={() => handleEditing()}>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default SingleTodo;

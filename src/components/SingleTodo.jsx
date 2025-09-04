import React from "react";
import { doneToggle, removeTodo } from "../todo_function";

const SingleTodo = ({
    todo,
    todosList,
    setTodosList,
    editingState,
    setEditingState,
    setEditingTodo,
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
        setEditingState(2);
        setEditingTodo(todo);
        setTitle(todo.title);
        setDescription(todo.description);
        setDate(todo.date_created.toISOString().split("T")[0]);
    };

    const handleRemove = () => {
        setTodosList(removeTodo(todosList, todo.todo_id));
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
                <button onClick={() => handleRemove()}>Delete</button>
            </div>
        </div>
    );
};

export default SingleTodo;

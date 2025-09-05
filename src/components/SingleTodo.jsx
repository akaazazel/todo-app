import React from "react";
import { Checkbox } from "@mui/material";
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
        <div
            className={
                todo.is_done ? "single-todo-box checked" : "single-todo-box"
            }
        >
            <div className="todo-details-box">
                <div className="title-checkbox">
                    <div className="checkbox-box">
                        <input
                            type="checkbox"
                            id="todo-checkbox"
                            checked={todo.is_done}
                            onChange={() => handleTodoToggle()}
                        />
                    </div>

                    <p
                        className={
                            todo.is_done ? "crossed todo-title" : "todo-title"
                        }
                    >
                        {todo.title}
                    </p>
                </div>
                <p className="todo-info todo-date">
                    {handleDate(todo.date_created)}
                </p>
                <p
                    className={
                        todo.is_done
                            ? "todo-info todo-description crossed"
                            : "todo-info todo-description"
                    }
                >
                    {todo.description}
                </p>
            </div>
            <div className="todo-action-buttons">
                <button className="edit-button" onClick={() => handleEditing()}>
                    <img
                        src="./edit.svg"
                        alt="edit"
                        className="todo-action-icon edit-icon"
                    />
                </button>
                <button
                    className="delete-button"
                    onClick={() => handleRemove()}
                >
                    <img
                        src="./delete.svg"
                        alt="delete"
                        className="todo-action-icon delete-icon"
                    />
                </button>
            </div>
        </div>
    );
};

export default SingleTodo;

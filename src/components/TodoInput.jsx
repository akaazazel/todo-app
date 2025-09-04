import React, { useEffect } from "react";
import { Todo, addTodo, editTodo } from "../todo_function";

const TodoInput = ({
    todosList,
    editingTodo = null,
    setTodosList,
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    editingState,
    setEditingState,
    clearFields,
}) => {
    const handleDateFormat = () => {
        return new Date(date);
    };

    const handleAddingNewTodo = () => {
        if (title === "") {
            alert("Please enter a title");
            return;
        }

        //* 1: Adding; 2: Editing

        if (editingState === 1) {
            const newTodo = new Todo({
                title: title,
                description: description,
                date_created: date === "" ? new Date() : handleDateFormat(),
                is_done: false,
            });

            setTodosList(addTodo(todosList, newTodo));
        } else if (editingState === 2) {
            setTodosList(
                editTodo({
                    todoList: todosList,
                    todo_id: editingTodo.todo_id,
                    newTitle: title,
                    newDescription: description,
                    newDate: date === "" ? new Date() : handleDateFormat(),
                })
            );
        }

        setEditingState(false);
    };

    return (
        <div className="todo-input-box">
            <div className="input-header">
                <h2 className="heading">
                    {editingState === 2 ? "Edit" : "New"} Todo
                </h2>
                <button onClick={() => setEditingState(false)}>Cancel</button>
            </div>
            <div className="input-fields">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    id="title-input"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    id="date-input"
                    onChange={(e) => setDate(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="Task Description"
                    value={description}
                    id="description-input"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="input-action-buttons">
                <button
                    className="add-todo-button"
                    onClick={() => handleAddingNewTodo()}
                >
                    {editingState === 2 ? "Save" : "Add"}
                </button>
                <button
                    className="clear-todo-button"
                    onClick={() => clearFields()}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default TodoInput;

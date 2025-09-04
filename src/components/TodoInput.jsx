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
            <div className="input-fields">
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="action-buttons">
                <button onClick={() => handleAddingNewTodo()}>
                    {editingState === 2 ? "Save" : "Add"}
                </button>
                <button onClick={() => clearFields()}>Clear</button>
            </div>
        </div>
    );
};

export default TodoInput;

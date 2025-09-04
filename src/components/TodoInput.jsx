import React, { useEffect } from "react";
import { Todo, addTodo } from "../todo_function";

const TodoInput = ({
    todosList,
    setTodosList,
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    setEditingState,
}) => {
    const handleDateFormat = () => {
        return new Date(date);
    };

    const handleAddingNewTodo = () => {
        if (title === "") {
            alert("Please enter a title");
            return;
        }

        const newTodo = new Todo({
            title: title,
            description: description,
            date_created: date === "" ? new Date() : handleDateFormat(),
            is_done: false,
        });

        setTodosList(addTodo(todosList, newTodo));
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
                <button onClick={() => handleAddingNewTodo()}>Add</button>
                <button>Clear</button>
            </div>
        </div>
    );
};

export default TodoInput;

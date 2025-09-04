import React from "react";
import { useState } from "react";
import { addTodo, Todo } from "../todo_function";

const TaskInput = ({ tasksList, setTasksList, setInputBoxHidden }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date_created, setDateCreated] = useState("");
    const [is_done, setIsDone] = useState(false);

    const manageSubmit = () => {
        if (title === "") {
            alert("Please enter a title");
            return;
        }

        const newTodo = new Todo({
            title: title,
            description: description,
            date_created:
                date_created === "" ? new Date() : new Date(date_created),
            is_done: is_done,
        });

        console.log(newTodo);

        setTasksList(addTodo(tasksList, newTodo));
        setInputBoxHidden(true);
    };

    const clearInputFields = () => {
        setTitle("");
        setDescription("");
        setDateCreated("");
        setIsDone(false);
    };

    return (
        <div className="todo-input-box">
            <input
                type="text"
                placeholder="title"
                id="todo-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="description"
                id="todo-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                placeholder="date"
                id="todo-date"
                value={date_created}
                onChange={(e) => setDateCreated(e.target.value)}
            />
            <input
                type="checkbox"
                name="is-done"
                id="todo-is-done"
                value={is_done}
                onChange={(e) => setIsDone(e.target.checked)}
            />
            <button className="reset" type="button" onClick={clearInputFields}>
                Clear
            </button>
            <button className="submit" type="button" onClick={manageSubmit}>
                Add
            </button>
        </div>
    );
};

export default TaskInput;

import React from "react";
import { addTodo, Todo } from "../todo_function";

const TaskInput = ({ tasksList, setTasksList, setInputBoxHidden }) => {
    const manageSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        const title = e.target[0].value;
        const description = e.target[1].value;
        const date_created =
            e.target[2].value === "" ? new Date() : new Date(e.target[2].value);
        const is_done = e.target[3].checked;

        if (title === "") {
            alert("Enter a title");
            return;
        }

        // create todo object with the info user provided
        const newTodo = new Todo({
            title: title,
            description: description,
            date_created: date_created,
            is_done: is_done,
        });
        setTasksList(addTodo(tasksList, newTodo));
        setInputBoxHidden(true);
        clearInputFields(e);
    };

    const clearInputFields = (e) => {
        console.log(e);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
    };

    return (
        <div className="todo-input-box">
            <form className="add-task-form" onSubmit={(e) => manageSubmit(e)}>
                <input type="text" placeholder="title" id="todo-title" />
                <input
                    type="text"
                    placeholder="description"
                    id="todo-description"
                />
                <input type="date" placeholder="date" id="todo-date" />
                <input type="checkbox" name="is-done" id="todo-is-done" />
                <button type="reset">Clear</button>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TaskInput;

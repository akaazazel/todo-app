import React from "react";
import { doneToggle, removeTodo } from "../todo_function";

const SingleTask = ({ task, tasksList, setTasksList }) => {
    const manageToggle = () => {
        setTasksList(doneToggle(tasksList, task.todo_id));
    };

    const manageDelete = () => {
        setTasksList(removeTodo(tasksList, task.todo_id));
    };

    const formatDate = (date) => {
        // const day = date.getDay();
        // const month = date.getMonth() + 1;
        // const year = date.getFullYear();
        return date.toLocaleDateString();
    };

    return (
        <div className="single-task ">
            <div className="task-info">
                <input
                    type="checkbox"
                    checked={task.is_done}
                    onChange={() => manageToggle()}
                />
                <div
                    className={task.is_done ? "task-text checked" : "task-text"}
                >
                    <p>{task.todo_id}</p>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <p>{formatDate(task.date_created)}</p>
                </div>
            </div>
            <div className="buttons">
                {
                    //todo Implement edit task function
                }
                <button className="edit-button">Edit</button>
                <button
                    className="delete-button"
                    onClick={() => manageDelete()}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SingleTask;

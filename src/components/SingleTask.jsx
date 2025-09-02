import React from "react";
import TaskList from "./TaskList";

const SingleTask = ({ task, tasksList, setTasksList }) => {
    const handleDelete = (task_id) => {
        const updatedTasksList = tasksList.filter((t) => t.id !== task_id);
        setTasksList(updatedTasksList);
    };

    const handleTaskCompletion = (task_id) => {
        const updatedTasksList = tasksList.map((t) =>
            t.id === task_id ? { ...t, is_completed: !t.is_completed } : t
        );
        setTasksList(updatedTasksList);
    };

    return (
        <div className="single-task">
            <input
                type="checkbox"
                onChange={() => handleTaskCompletion(task.id)}
                checked={task.is_completed}
            />
            {task.is_completed ? (
                <p className="striked-text">{task.task}</p>
            ) : (
                <p>{task.task}</p>
            )}
            <button onClick={() => handleDelete(task.id)}>delete</button>
        </div>
    );
};

export default SingleTask;

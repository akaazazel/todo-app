import React from "react";

const TaskInput = ({ tasksList, setTasksList }) => {
    const [task, setTask] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (task === "") {
            console.error("Enter a task");
            alert("Task cannot be empty");
            return;
        }

        const task_class = {
            id: tasksList.length,
            task: task,
            is_completed: false,
        };

        const new_task_list = [...tasksList, task_class];
        setTasksList(new_task_list);
        setTask("");
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskInput;

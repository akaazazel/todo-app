import React from "react";
import SingleTask from "./SingleTask";

const TaskList = ({ tasksList, setTasksList }) => {
    return (
        <div className="task-list">
            {tasksList.length > 0 ? (
                tasksList.map((task, index) => {
                    return (
                        <SingleTask
                            key={index}
                            task={task}
                            tasksList={tasksList}
                            setTasksList={setTasksList}
                        />
                    );
                })
            ) : (
                <p className="no-tasks">No tasks added yet.</p>
            )}
        </div>
    );
};

export default TaskList;

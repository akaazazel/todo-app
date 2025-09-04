import React from "react";

function AddNewTask({ inputBoxHidden, setInputBoxHidden }) {
    return (
        <button
            className="add-new-task"
            onClick={() => setInputBoxHidden(!inputBoxHidden)}
        >
            {inputBoxHidden ? "New Task" : "Cancel"}
        </button>
    );
}

export default AddNewTask;

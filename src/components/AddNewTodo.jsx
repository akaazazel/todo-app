import React from "react";

function AddNewTodo({ editingState, setEditingState, clearFields }) {
    // const clearFields = () => {
    //     setTitle("");
    //     setDescription("");
    //     setDate("");
    //     setIsDone(false);
    // };

    const handleButtonClick = () => {
        setEditingState(!editingState ? 1 : false);
        clearFields();
    };

    return (
        <button
            className={editingState ? "hidden" : "add-cancel-todo-button"}
            onClick={() => handleButtonClick()}
        >
            Add
        </button>
    );
}

export default AddNewTodo;

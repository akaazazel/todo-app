import React from "react";

function AddNewTodo({
    editingState,
    setEditingState,
    setTitle,
    setDescription,
    setDate,
    setIsDone,
}) {
    const clearFields = () => {
        setTitle("");
        setDescription("");
        setDate("");
        setIsDone(false);
    };

    const handleButtonClick = () => {
        setEditingState(!editingState);
        clearFields();
    };

    return (
        <button
            className="add-cancel-todo-button"
            onClick={() => handleButtonClick()}
        >
            {editingState ? "Cancel" : "Add"}
        </button>
    );
}

export default AddNewTodo;

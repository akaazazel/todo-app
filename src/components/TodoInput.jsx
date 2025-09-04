import React, { useEffect } from "react";

const TodoInput = () => {
    return (
        <div className="todo-input-box">
            <div className="input-fields">
                <input type="text" placeholder="title" />
                <input type="text" placeholder="description" />
                <input type="date" />
            </div>
            <div className="action-buttons">
                <button>Add</button>
                <button>Clear</button>
            </div>
        </div>
    );
};

export default TodoInput;

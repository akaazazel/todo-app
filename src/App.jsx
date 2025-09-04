import React, { useEffect } from "react";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {
    addTodo,
    removeTodo,
    doneToggle,
    editTodo,
    Todo,
} from "./todo_function";

function App() {
    const [tasksList, setTasksList] = useState([
        new Todo(
            "Sample Task",
            "This is a sample task description",
            new Date().toLocaleDateString()
        ),
        new Todo(
            "Another Task",
            "This is another task description",
            new Date().toLocaleDateString()
        ),
    ]);

    return (
        <div className="wrapper">
            <header>
                <h1 className="app-title">To Do App</h1>
            </header>
            <section>
                <TaskInput tasksList={tasksList} setTasksList={setTasksList} />
                <TaskList tasksList={tasksList} setTasksList={setTasksList} />
            </section>
        </div>
    );
}

export default App;

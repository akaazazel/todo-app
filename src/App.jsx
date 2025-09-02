import React, { useEffect } from "react";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
    const [tasksList, setTasksList] = useState([]);

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

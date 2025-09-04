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
        new Todo({
            todo_id: "mf5adwv45qg24dh1",
            title: "Wash dishes",
            description: "This is a wash dishes description",
            date_created: new Date(),
            is_done: false,
        }),
        new Todo({
            todo_id: "mf52dwv45qg24dh1",
            title: "Clean clothes",
            description: "This is a clean clothes description",
            date_created: new Date(),
            is_done: false,
        }),
    ]);

    const [inputBoxHidden, setInputBoxHidden] = useState(true);

    return (
        <div className="wrapper">
            <header>
                <h1 className="app-title">To Do App</h1>
            </header>
            <button
                className="add-new-task"
                onClick={() => setInputBoxHidden(!inputBoxHidden)}
            >
                {inputBoxHidden ? "New Task" : "Cancel"}
            </button>
            <section>
                {!inputBoxHidden && (
                    <TaskInput
                        tasksList={tasksList}
                        setTasksList={setTasksList}
                        setInputBoxHidden={setInputBoxHidden}
                    />
                )}
                <TaskList tasksList={tasksList} setTasksList={setTasksList} />
            </section>
        </div>
    );
}

export default App;

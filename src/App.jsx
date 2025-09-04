import React, { useEffect } from "react";
import { useState } from "react";
import TodoListContainer from "./components/TodoListContainer";
import AddNewTodo from "./components/AddNewTodo";
import TodoInput from "./components/TodoInput";

import { Todo } from "./todo_function";

function App() {
    const testData = [
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
    ];

    const [todosList, setTodosList] = useState(testData);

    return (
        <div className="wrapper">
            <header>
                <h1 className="app-title">To Do App</h1>
                <AddNewTodo />
            </header>
            <section>
                <TodoInput />
                <TodoListContainer
                    todosList={todosList}
                    setTodosList={setTodosList}
                />
            </section>
        </div>
    );
}

export default App;

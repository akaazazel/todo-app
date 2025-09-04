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

    // const [editingTodo, setEditingTodo] = useState(null);
    const [editingState, setEditingState] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [is_done, setIsDone] = useState(false);

    return (
        <div className="wrapper">
            <header>
                <h1 className="app-title">To Do App</h1>
                <AddNewTodo
                    editingState={editingState}
                    setEditingState={setEditingState}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setDate={setDate}
                    setIsDone={setIsDone}
                />
            </header>
            <section>
                {editingState && (
                    <TodoInput
                        todosList={todosList}
                        setTodosList={setTodosList}
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                        setEditingState={setEditingState}
                    />
                )}

                <TodoListContainer
                    todosList={todosList}
                    setTodosList={setTodosList}
                    editingState={editingState}
                    setEditingState={setEditingState}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setDate={setDate}
                    setIsDone={setIsDone}
                />
            </section>
        </div>
    );
}

export default App;

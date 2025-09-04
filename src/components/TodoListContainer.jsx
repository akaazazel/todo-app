import React from "react";
import SingleTodo from "./SingleTodo";

const TodoListContainer = ({
    todosList,
    setTodosList,
    editingState,
    setEditingState,
    setTitle,
    setDescription,
    setDate,
    setIsDone,
}) => {
    return (
        <div className="todo-list-container">
            {todosList.length > 0 ? (
                todosList.map((todo, index) => {
                    return (
                        <SingleTodo
                            key={index}
                            todo={todo}
                            todosList={todosList}
                            setTodosList={setTodosList}
                            editingState={editingState}
                            setEditingState={setEditingState}
                            setTitle={setTitle}
                            setDescription={setDescription}
                            setDate={setDate}
                            setIsDone={setIsDone}
                        />
                    );
                })
            ) : (
                <p className="no-todos">No todos added yet.</p>
            )}
        </div>
    );
};

export default TodoListContainer;

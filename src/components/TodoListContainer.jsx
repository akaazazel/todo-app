import React from "react";
import SingleTodo from "./SingleTodo";

const TodoListContainer = ({ todosList, setTodosList }) => {
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

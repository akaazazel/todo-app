export class Todo {
    constructor(title, description, date_created, is_done = false) {
        this.todo_id = this.randomId()
        this.title = title
        this.description = description
        this.date_created = date_created
        this.is_done = is_done
    }

    randomId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
    }

}

export function addTodo(todoList, todo) {
    return [...todoList, todo]
}

export function removeTodo(todoList, todo_id) {
    const newTodoList = todoList.filter(todo => todo.todo_id !== todo_id)
    return newTodoList
}

export function doneToggle(todoList, todo_id) {
    return (todoList.map((todo) => (
        todo.todo_id === todo_id ? {
            ...todo,
            is_done: !todo.is_done
        } : todo
    )))
}

export function editTodo(todoList, todo_id, newTitle, newDescription) {
    return (
        todoList.map((todo) => (
            todo.todo_id === todo_id ? {
                ...todo,
                title: newTitle,
                description: newDescription
            } : todo
        ))
    )
}


/**======================
 **      Testing
 *========================**/
// const todoList = []
// const todo1 = new Todo("Title 1", "Description 1", new Date().toLocaleDateString())
// const todo2 = new Todo("Title 2", "Description 2", new Date().toLocaleDateString())
// const todo3 = new Todo("Title 3", "Description 3", new Date().toLocaleDateString())
// let updatedList = addTodo(todoList, todo1)
// updatedList = addTodo(updatedList, todo2)
// updatedList = addTodo(updatedList, todo3)
// console.log("After adding todos:", updatedList)
// updatedList = removeTodo(updatedList, todo2.todo_id)
// console.log("After removing todo 2:", updatedList)
// updatedList = doneToggle(updatedList, todo1.todo_id)
// console.log("After toggling done for todo 1:", updatedList)
// updatedList = editTodo(updatedList, todo3.todo_id, "Updated Title 3", "Updated Description 3")
// console.log("After editing todo 3:", updatedList)

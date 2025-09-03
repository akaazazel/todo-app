class Todo {
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

class TodoList {
    constructor() {
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    displayTodos() {
        return this.todos
    }

    removeTodo(todo_id) {
        this.todos = this.todos.filter(todo => todo.todo_id !== todo_id)
    }

    doneToggle(todo_id) {
        const todo = this.todos.find(todo => todo.todo_id === todo_id)
        if (todo) {
            todo.is_done = !todo.is_done
        }
    }

    editTodo(todo_id, newTitle, newDescription) {
        const todo = this.todos.find(todo => todo.todo_id === todo_id)
        if (todo) {
            todo.title = newTitle
            todo.description = newDescription
        }
    }
}

export default { Todo, TodoList }

// const todoList = new TodoList()
// todoList.addTodo(new Todo("Sample Todo", "This is a sample todo item", new Date().toLocaleDateString()))
// todoList.addTodo(new Todo("Another Todo", "This is another sample todo item", new Date().toLocaleDateString()))
// console.log(todoList.displayTodos())
// todoList.doneToggle(todoList.todos[0].todo_id)
// console.log(todoList.displayTodos())

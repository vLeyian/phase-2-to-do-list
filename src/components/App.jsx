import { useState } from "react";
import todoList from "../data/data";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function App() {
    const [todos, setTodos] = useState(todoList);

    // add a new todo
    function handleTodoFormSubmit(newTodo) {
        setTodos([...todos, newTodo])
    }
    console.log(todos);
    return (
        <>
        <TodoForm onTodoFormSubmit={handleTodoFormSubmit} />
        <Todo todos={todos} />
        </>
    );
}

export default App;
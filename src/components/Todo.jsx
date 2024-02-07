function Todo({ todos }) {
    return (
        <>
            <h1>My Todos</h1>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </>
    );
}

export default Todo;
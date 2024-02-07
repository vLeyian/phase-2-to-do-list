import { useState } from "react";

function TodoForm({onTodoFormSubmit}) {
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onTodoFormSubmit({
            id: Date.now(),
            title
        });
        setTitle('');
    }
    
    
    return (
        <>
            <h1>Add a Todo</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                type="text" 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default TodoForm;
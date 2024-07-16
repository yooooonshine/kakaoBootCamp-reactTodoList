import TodoInput from "../todoInput/todoInput";
import {useState} from "react";
import TodoItem from "../todoItem/todoItem";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const end = false;

        setTodos([...todos, new Todo(text, end)])
    };

    const deleteTodo = (id) => {

        let filteredTodos = todos.filter(todo => todo.id !== id);

        setTodos([...filteredTodos]);
    }

    const finishTodo = (id) => {

        setTodos([...todos.map(todo => {
                if (todo.id === id) {
                    const updatedTodo = {...todo};
                    updatedTodo.end = !todo.end;

                    return updatedTodo;
                } else {
                    return todo;
                }
            }
        )])
    };

    return (
        <section id="todoWrapper">
            <TodoInput addTodo={addTodo}></TodoInput>

            <ol id="toDoList">
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} clickDelete={deleteTodo} clickCheckbox={finishTodo} text={todo.text} end={todo.end}></TodoItem>)}
            </ol>
        </section>
    );
}

class Todo {


    constructor(text, end) {
        this.id = Date.now();
        this.text = text;
        this.end = end;
    }
}
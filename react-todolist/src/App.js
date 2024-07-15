import './App.css';
import TodoInput from "./modules/todoInput/todoInput";
import TodoList from "./modules/todoList/todoList";

function App() {

    function handleClickTodoInput() {

    }

    return (
        <div className="App">
            <header>
                <h1>TO DO LIST</h1>
            </header>
            <TodoInput onClick={handleClickTodoInput}></TodoInput>

            <hr/>
            <TodoList></TodoList>
        </div>
    );
}

export default App;

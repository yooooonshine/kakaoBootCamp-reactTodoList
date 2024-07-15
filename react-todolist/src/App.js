import './App.css';
import TodoList from "./modules/todoList/todoList";

function App() {

    return (
        <div className="App">
            <header>
                <h1>TO DO LIST</h1>
            </header>
            <hr/>
            <TodoList></TodoList>
        </div>
    );
}

export default App;

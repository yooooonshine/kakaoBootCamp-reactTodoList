import "./todoItem.css"

export default function TodoItem({id, clickDelete, clickCheckbox, text, end}) {

    return (
        <li id="todoItem">
            <input type="checkbox" onClick={() => clickCheckbox(id)}/>
            <span className= {end ? "todoTextEnd" : "todoText"}>{text}</span>
            <button onClick={() => clickDelete(id)} type="button">삭제</button>
        </li>
    );
};
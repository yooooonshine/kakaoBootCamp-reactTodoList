export default function TodoItem({id, clickDelete, clickCheckbox, text}) {

    return (
        <li>
            <input type="checkbox" onClick={() => clickCheckbox(id)}/>
            {text}
            <button onClick={() => clickDelete(id)} type="button">삭제</button>
        </li>
    );
};
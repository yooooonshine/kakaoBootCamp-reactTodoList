import {useState} from "react";


export default function TodoInput({addTodo}) {
    const [text, setText] = useState();

    function handleTextChange(e) {
        setText(e.target.value);
    }

    const handleText = () => {
        addTodo(text);
    }

    return (

        <section>
            <input id="toDoText" type="text" autoFocus placeholder="할 일을 입력해주세요." onChange={handleTextChange}/>
            <button onClick={() => handleText()} type="button">확인</button>
        </section>
    );
};
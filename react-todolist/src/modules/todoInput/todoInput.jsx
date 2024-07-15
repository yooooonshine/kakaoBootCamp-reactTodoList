

export default function TodoInput({onClick}) {
    return (
        <section>
            <input id="toDoText" type="text" autoFocus placeholder="할 일을 입력해주세요."/>
            <button onClick={onClick} type="button">확인</button>
        </section>
    );
};
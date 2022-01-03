import { useState } from "react";
import Todos from "../general/Todos";

const DemoMemo = () => {

    const [count, setCount] = useState(0);
    const [ todos, setTodos] = useState(["Todo 1", "Todo 2"]);

    const increment = () => {
        setCount(count + 1)
    }

    const addTodos = () => {
        setTodos([...todos, "New Todo"]);
    }

    return (
        <>
            <h1>Memo</h1>
            <Todos todos={todos} />
            <button onClick={addTodos}>Add</button>
            <hr></hr>
            <p>{count}</p>
            <button onClick={increment}>Increase</button>

        </>
    );
}

export default DemoMemo;
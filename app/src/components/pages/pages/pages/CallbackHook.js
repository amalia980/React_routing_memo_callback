
import { useState, useCallback } from "react";
import Todos from "../general/Todos";

const CallbackHook = () => {

    const [count, setCount] = useState(0);
    const [ todos, setTodos] = useState(["Todo 1", "Todo 2"]);

    const increment = () => {
        setCount(count + 1)
    }

    // const addTodos = () => {
    //     setTodos([...todos, "New Todo"]);
    // }

    const addTodos = useCallback(() => setTodos([...todos, "New Todo"]), [todos]);
   
    return (
        <>
            <h1>Callback</h1>
            <Todos todos={todos} addTodos={addTodos} />
            <hr></hr>
            <p>{count}</p>
            <button onClick={increment}>Increase</button>

        </>
    );
}

export default CallbackHook;
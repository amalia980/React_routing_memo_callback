import { memo } from "react";
//dont need to update the values in Todos with memo, but the DemoMemo component will be re-rendered

const Todos = (props) => {

    const {todos, addTodos} = props;

    return (
        <>
        <h1>My todos</h1>
            <p>{todos.map((todo, i) => {
                return (
                    <>
                        <p key={i.id}>{todo}</p>
                    </>
                )
                
                })}</p>
                 <button onClick={addTodos}>Add todo</button>
        </>
    )
}

export default memo(Todos);
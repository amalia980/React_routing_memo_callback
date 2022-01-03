import { useState, useMemo } from "react";

const MemoHook = () => {

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    //const calculation = expensiveCalculation(count)
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount(count + 1)
    }

    const addPost = () => {
        setPosts([...posts, "New Post"]);
    }


    return (
        <>
        <h1>Memo Hook</h1>
        <h2>Post</h2>
        {posts.map((post) => {
            return (
                <p>{post}</p>
            )
        })}
        <button onClick={addPost}>Add Post</button>

        <hr></hr>

        <h2>Count</h2>
        <p>{count}</p>
        <button onClick={increment}>Increase</button>
        <div>
            <h3>expensive Calculation</h3>
            <p>{calculation}</p>
        </div>
        </>
    )
}

const expensiveCalculation = (num) => {
    for(let i = 0; i < 1000000; i++) {
        num += 1
    }
    return num;
}


export default MemoHook;
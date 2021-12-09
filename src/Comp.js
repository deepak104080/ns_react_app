import React, {useEffect, useState} from 'react';

const Comp = () => {
    const [count, setCount] = useState(0);
    // const [data, setData] = useState(0)

    // useEffect(()=> {
    //     console.log("Component Mounts...");
    // },[data])

    const increment = () => {
        setCount( count + 1);
    }

    const decrement = () => {
        setCount( count - 1);
    }

    return (
        <>
            <h1>My Functional Component.</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Button ++</button>
            <button onClick={decrement}>Button --</button>
        </>
    )
};

export default Comp;
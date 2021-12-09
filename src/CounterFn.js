import React, { useEffect, useState } from 'react';

const CounterFn = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    const increment = () => {
        setCount(preCount => preCount + 1);
    }

    const decrement = () => {
        setCount(preCount => preCount - 1);
    }

    useEffect(() => {
        document.title = `Count is ${count}`;
    })

    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res);
            const item = res.data;
            setData(item);
        })

        return function cleanup() {
            console.log('Unmounting...');
          };

    },[count])

    console.log(data);
    return (
        <>
        <h1>Counter using Functional Component</h1>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
        <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
        <h1></h1>
        <ol>
            {data && data.map((tempItem, index) => (
                <li key={tempItem + index}>{tempItem.Population}</li>
            ))}
        </ol>
        </>
    );
};

export default CounterFn;
import {useCallback, useState} from "react";
import styles from './counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const onIncrement = useCallback(() => {
        setCount((prevState) => ++prevState)
    }, [])
    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.btn} onClick={onIncrement}>increment</button>
        </div>
    );
};

export default Counter;
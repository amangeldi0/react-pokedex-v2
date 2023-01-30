import { useState, FC } from "react";
import styles from './counter.module.scss';
export const Counte = () => {

    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div className={styles.button}>{count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>+++</button>
        </>
    )
}
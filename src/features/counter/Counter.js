import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, selectCount, incrementByAmount, incrementAsync} from "./counterSlice";
import styles from './Counter.module.css'
import { useState } from "react";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div>
        <div className={styles.row}>
            <button className={styles.button} onClick={() => dispatch(increment())}>+</button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div className={styles.row}>
        <input className={styles.textbox} value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount)) || 0)}>Increment By Amount</button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount)) || 0)}>Increment By Async</button>
        </div>
        </div>
        

  )
}

export default Counter
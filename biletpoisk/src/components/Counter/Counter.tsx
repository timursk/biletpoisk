'use client';

import { FC, useState } from 'react';
import styles from './counter.module.css';
import { CountBtn } from '../CountBtn/CountBtn';

export const Counter: FC = () => {
    const [count, setCount] = useState(0);
    const MAX_COUNT = 30;

    return (
        <div className={styles.counter}>
            <CountBtn
                isPlus={false}
                callback={() => {
                    setCount((count) => count - 1);
                }}
                isDisabled={count === 0}
            />

            <span>{count}</span>

            <CountBtn
                isPlus={true}
                callback={() => {
                    setCount((count) => count + 1);
                }}
                isDisabled={count === MAX_COUNT}
            />
        </div>
    );
};

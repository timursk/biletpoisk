'use client';

import styles from './filter.module.css';
import { FC } from 'react';

export const FilterInput: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>Название</div>
            <input className={styles.input} placeholder="Введите название"></input>
        </div>
    );
};

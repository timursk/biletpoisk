'use client';

import Image from 'next/image';
import styles from './acceptBtn.module.css';
import { FC } from 'react';

interface Props {
    isAccept: boolean;
}

export const AcceptBtn: FC<Props> = ({ isAccept }) => {
    return (
        <button className={styles.btn}>
            <span className={styles.title}>{isAccept ? 'Да' : 'Нет'}</span>
        </button>
    );
};

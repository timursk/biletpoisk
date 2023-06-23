'use client';

import Image from 'next/image';
import styles from './acceptBtn.module.css';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
    isAccept: boolean;
}

export const AcceptBtn: FC<Props> = ({ isAccept }) => {
    return (
        <button className={classNames(styles.btn, isAccept ? styles.accept : styles.reject)}>
            <span className={styles.title}>{isAccept ? 'Да' : 'Нет'}</span>
        </button>
    );
};

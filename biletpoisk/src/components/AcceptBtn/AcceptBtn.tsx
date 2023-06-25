'use client';

import styles from './acceptBtn.module.css';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
    isAccept: boolean;
    onClick: () => void;
}

export const AcceptBtn: FC<Props> = ({ isAccept, onClick }) => {
    return (
        <button
            className={classNames(styles.btn, isAccept ? styles.accept : styles.reject)}
            onClick={onClick}
        >
            <span className={styles.title}>{isAccept ? 'Да' : 'Нет'}</span>
        </button>
    );
};

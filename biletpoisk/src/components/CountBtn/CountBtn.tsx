'use client';

import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
import Image from 'next/image';
import styles from './countBtn.module.css';
import { FC } from 'react';
import classNames from 'classnames';

interface Props {
    isPlus: boolean;
    isDisabled: boolean;
    callback: () => void;
}

export const CountBtn: FC<Props> = ({ isPlus, isDisabled, callback }) => {
    return (
        <button
            className={classNames(styles.btn, isDisabled ? styles.disabled : styles.active)}
            onClick={!isDisabled ? callback : () => {}}
        >
            <Image
                src={isPlus ? plus : minus}
                alt={isPlus ? 'plus' : 'minus'}
                width={12}
                height={12}
            ></Image>
        </button>
    );
};

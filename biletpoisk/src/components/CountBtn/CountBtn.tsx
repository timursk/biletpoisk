'use client';

import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
import Image from 'next/image';
import styles from './countBtn.module.css';
import { FC } from 'react';

interface Props {
    isPlus: boolean;
}

export const CountBtn: FC<Props> = ({ isPlus }) => {
    return (
        <button className={styles.btn}>
            <Image
                src={isPlus ? plus : minus}
                alt={isPlus ? 'plus' : 'minus'}
                width={12}
                height={12}
            ></Image>
        </button>
    );
};

'use client';

import { FC } from 'react';
import styles from './counter.module.css';
import { CountBtn } from '../CountBtn/CountBtn';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '@/store/features/basket/selectors';
import { RootState, useAppDispatch } from '@/store/store';
import { basketActions } from '@/store/features/basket';

interface Props {
    id: string;
}

const MAX_COUNT = 30;

export const Counter: FC<Props> = ({ id }) => {
    const productAmount = useSelector((state: RootState) => selectProductAmount(state, id));
    const dispatch = useAppDispatch();

    return (
        <div className={styles.counter}>
            <CountBtn
                isPlus={false}
                callback={() => {
                    dispatch(basketActions.decrement(id));
                }}
                isDisabled={productAmount === 0}
            />

            <span>{productAmount}</span>

            <CountBtn
                isPlus={true}
                callback={() => {
                    dispatch(basketActions.increment(id));
                }}
                isDisabled={productAmount === MAX_COUNT}
            />
        </div>
    );
};

import { FC } from 'react';
import styles from './basketCounter.module.css';
import { useGetBasketTotalAmount } from '@/hooks/useGetBasketTotalAmount';

export const BasketCounter: FC = () => {
    const totalAmount = useGetBasketTotalAmount();

    return <div className={styles.counter}>{totalAmount}</div>;
};

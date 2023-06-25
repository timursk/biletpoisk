import { FC } from 'react';
import styles from './totalBasketCounter.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { useGetBasketTotalAmount } from '@/hooks/useGetBasketTotalAmount';

export const TotalBasketCounter: FC = () => {
    const totalAmount = useGetBasketTotalAmount();

    return (
        <BoxWrapper>
            <div className={styles.totalContainer}>
                <p>Итого билетов:</p>
                <p>{totalAmount}</p>
            </div>
        </BoxWrapper>
    );
};

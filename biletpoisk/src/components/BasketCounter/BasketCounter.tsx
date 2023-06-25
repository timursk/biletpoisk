import { FC } from 'react';
import styles from './basketCounter.module.css';
import { useSelector } from 'react-redux';
import { selectBasketModule } from '@/store/features/basket/selectors';

export const BasketCounter: FC = () => {
    const basket = useSelector(selectBasketModule);
    const generalCount = Object.values(basket).reduce((prev, curr) => prev + curr, 0);

    return <div className={styles.counter}>{generalCount}</div>;
};

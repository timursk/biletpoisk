'use client';

import { FC, useState } from 'react';
import styles from './counter.module.css';
import { CountBtn } from '../CountBtn/CountBtn';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '@/store/features/basket/selectors';
import { RootState, useAppDispatch } from '@/store/store';
import { basketActions } from '@/store/features/basket';
import { createPortal } from 'react-dom';
import { Modal } from '../Modal/Modal';
import { usePathname } from 'next/navigation';

interface Props {
    id: string;
}

const MAX_COUNT = 30;

export const Counter: FC<Props> = ({ id }) => {
    const path = usePathname();
    const isBasket = path === '/basket';

    const productAmount = useSelector((state: RootState) => selectProductAmount(state, id));
    const [isActiveModal, setIsActiveModal] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.counter}>
            <CountBtn
                isPlus={false}
                callback={() => {
                    if (productAmount === 1 && isBasket) {
                        setIsActiveModal(true);
                        return;
                    }

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

            {isActiveModal &&
                createPortal(
                    <Modal
                        title="Удаление билета"
                        question="Вы уверены, что хотите удалить билет?"
                        onAccept={() => {
                            dispatch(basketActions.remove(id));
                            setIsActiveModal(false);
                        }}
                        onDecline={() => {
                            setIsActiveModal(false);
                        }}
                    />,
                    document.body.querySelector('.modals-container') || document.body
                )}
        </div>
    );
};

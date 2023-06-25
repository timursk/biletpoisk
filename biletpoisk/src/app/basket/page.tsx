'use client';

import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './basket.module.css';
import { Modal } from '@/components/Modal/Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalsContainer } from '@/components/PortalContainers/ModalsContainer';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '@/store/features/basket/selectors';
import { TotalBasketCounter } from '@/components/TotalBasketCounter/TotalBasketCounter';

export default function Basket() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.ticketsContainer}>
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'444'}
                    genre={'fantasy'}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'445'}
                    genre={'genre'}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'446'}
                    genre={'asd'}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'448'}
                    genre={'blabla'}
                />
            </div>

            <TotalBasketCounter />

            {isModalOpen &&
                createPortal(
                    <Modal />,
                    document.body.querySelector('.modals-container') || document.body
                )}
            {/* {isModalOpen && createPortal(<Modal />, document.body)} */}
        </div>
    );
}

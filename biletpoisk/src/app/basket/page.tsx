'use client';

import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './basket.module.css';
import { Modal } from '@/components/Modal/Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalsContainer } from '@/components/PortalContainers/ModalsContainer';

export default function Basket() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.ticketsContainer}>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>

            <BoxWrapper>
                <div className={styles.totalContainer}>
                    <p>Итого билетов:</p>
                    <p>7</p>
                </div>
            </BoxWrapper>

            {isModalOpen &&
                createPortal(
                    <Modal />,
                    document.body.querySelector('.modals-container') || document.body
                )}
            {/* {isModalOpen && createPortal(<Modal />, document.body)} */}
        </div>
    );
}

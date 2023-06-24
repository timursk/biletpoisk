'use client';

import { FC, useState } from 'react';
import styles from './ticketCard.module.css';
import Image from 'next/image';
import { CountBtn } from '../CountBtn/CountBtn';
import close from '../../assets/icons/close.svg';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { Counter } from '../Counter/Counter';

export const TicketCard: FC = () => {
    return (
        <BoxWrapper>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={''} alt={''} width={100} height={120} />
                </div>

                <div className={styles.main}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>Властелин колец: Братство кольца</h3>

                        <span>Фэнтези</span>
                    </div>

                    <Counter />

                    {true && (
                        <button className={styles.closeBtn}>
                            <Image src={close} alt={'delete'} width={20} height={20} />
                        </button>
                    )}
                </div>
            </div>
        </BoxWrapper>
    );
};

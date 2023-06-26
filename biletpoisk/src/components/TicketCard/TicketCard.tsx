'use client';

import { FC, useState } from 'react';
import styles from './ticketCard.module.css';
import Image from 'next/image';
import { CountBtn } from '../CountBtn/CountBtn';
import close from '../../assets/icons/close.svg';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { Counter } from '../Counter/Counter';
import Link from 'next/link';
import { FILTER_GENRES } from '@/utils/constants';
import { usePathname } from 'next/navigation';

interface Props {
    title: string;
    posterUrl: string;
    id: string;
    genre: string;
    handleDelete?: () => void;
}

export const TicketCard: FC<Props> = ({ title, posterUrl, id, genre, handleDelete }) => {
    const pathname = usePathname();

    return (
        <BoxWrapper>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={posterUrl} alt={'poster'} width={100} height={120} />
                </div>

                <div className={styles.main}>
                    <div className={styles.titleContainer}>
                        <Link href={`/film/${id}`}>
                            <h3 className={styles.title}>{title}</h3>
                        </Link>

                        <span>{FILTER_GENRES[genre as keyof typeof FILTER_GENRES]}</span>
                    </div>

                    <Counter id={id} />

                    {pathname === '/basket' && (
                        <button className={styles.closeBtn} onClick={handleDelete}>
                            <Image src={close} alt={'delete'} width={20} height={20} />
                        </button>
                    )}
                </div>
            </div>
        </BoxWrapper>
    );
};

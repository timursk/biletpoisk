'use client';

import { FC } from 'react';
import styles from './tickets.module.css';
import { useGetMoviesQuery } from '@/store/services/movieApi';
import { TicketCard } from '../TicketCard/TicketCard';

export const Tickets: FC = () => {
    const { data, isLoading, error } = useGetMoviesQuery('');

    if (isLoading) {
        return <span>Загрузка...</span>;
    }
    if (!data || error) {
        return <span>Фильмы не найдены!</span>;
    }

    return (
        <div className={styles.ticketsContainer}>
            {data.map(({ title, posterUrl, id, genre }) => {
                return (
                    <TicketCard
                        key={id}
                        title={title}
                        posterUrl={posterUrl}
                        id={id}
                        genre={genre}
                    />
                );
            })}
        </div>
    );
};

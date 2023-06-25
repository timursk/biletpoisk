'use client';

import { FC, useEffect } from 'react';
import styles from './tickets.module.css';
import { useGetMoviesQuery } from '@/store/services/movieApi';
import { TicketCard } from '../TicketCard/TicketCard';
import { useGetFilteredMovies } from '@/hooks/useGetFilteredMovies';

export const Tickets: FC = () => {
    const { data, isLoading, error } = useGetMoviesQuery();
    const { filteredData } = useGetFilteredMovies(data);

    if (isLoading) {
        return <span>Загрузка...</span>;
    }
    if (!data || !filteredData || filteredData.length === 0 || error) {
        return <span>Фильмы не найдены!</span>;
    }

    return (
        <div className={styles.ticketsContainer}>
            {filteredData.map(({ title, posterUrl, id, genre }) => {
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

'use client';

import { FC } from 'react';
import styles from './tickets.module.css';
import { TicketCard } from '../TicketCard/TicketCard';
import { useGetFilteredMovies } from '@/hooks/useGetFilteredMovies';
import { useLoadMovies } from '@/hooks/useLoadMovies';
import { Loader } from '../Loader/Loader';

export const Tickets: FC = () => {
    const { data, isLoading, error } = useLoadMovies();
    const { filteredData } = useGetFilteredMovies();

    if (isLoading) {
        return <Loader />;
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

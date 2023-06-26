'use client';

import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './basket.module.css';
import { Modal } from '@/components/Modal/Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { TotalBasketCounter } from '@/components/TotalBasketCounter/TotalBasketCounter';
import { useGetAllBasketMovies } from '@/hooks/useGetAllBasketMovies';
import { useAppDispatch } from '@/store/store';
import { basketActions } from '@/store/features/basket';

export default function Basket() {
    const basketMovies = useGetAllBasketMovies();
    const dispatch = useAppDispatch();
    const [modalMovieId, setModalMovieId] = useState<string>('');

    return (
        <div className={styles.container}>
            <div className={styles.ticketsContainer}>
                {Boolean(basketMovies) && basketMovies.length > 0
                    ? basketMovies.map(({ id, title, posterUrl, genre }) => {
                          return (
                              <TicketCard
                                  key={id}
                                  title={title}
                                  posterUrl={posterUrl}
                                  id={id}
                                  genre={genre}
                                  handleDelete={() => setModalMovieId(id)}
                              />
                          );
                      })
                    : null}
            </div>

            <TotalBasketCounter />

            {modalMovieId &&
                createPortal(
                    <Modal
                        title="Удаление билета"
                        question="Вы уверены, что хотите удалить билет?"
                        onAccept={() => {
                            dispatch(basketActions.remove(modalMovieId));
                            setModalMovieId('');
                        }}
                        onDecline={() => {
                            setModalMovieId('');
                        }}
                    />,
                    document.body.querySelector('.modals-container') || document.body
                )}
        </div>
    );
}

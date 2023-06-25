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
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'444'}
                    genre={'fantasy'}
                    handleDelete={() => setModalMovieId('id')}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'445'}
                    genre={'genre'}
                    handleDelete={() => setModalMovieId('id')}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'446'}
                    genre={'asd'}
                    handleDelete={() => setModalMovieId('id')}
                />
                <TicketCard
                    title={'Властелин колец: Братство кольца'}
                    posterUrl={'https://i.postimg.cc/pdCLNMqX/1.webp'}
                    id={'448'}
                    genre={'blabla'}
                    handleDelete={() => setModalMovieId('id')}
                />
            </div>

            <TotalBasketCounter />

            {modalMovieId &&
                createPortal(
                    <Modal
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

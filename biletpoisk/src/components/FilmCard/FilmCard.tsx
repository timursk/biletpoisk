import { FC } from 'react';
import styles from './filmCard.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import Image from 'next/image';
import { TicketCard } from '../TicketCard/TicketCard';
import { Counter } from '../Counter/Counter';

export const FilmCard: FC = () => {
    return (
        <BoxWrapper>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={''} alt={'poster'} width={400} height={500}></Image>
                </div>

                <div>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>Властелин колец: Братство кольца</h3>
                        <Counter />
                    </div>

                    <div className={styles.filmMetaContainer}>
                        <p>
                            <span className={styles.filmMetaTitle}>Жанр: </span>
                            Фэнтези
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Год выпуска: </span>
                            2001
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Рейтинг: </span>8
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Режиссер:</span>
                            Питер Джексон
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.descriptionTitle}>Описание</h4>
                        <p>
                            Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся
                            не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную
                            власть, но был обязан служить злу. Тихая деревня, где живут хоббиты.
                            Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу,
                            волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо
                            нашел много лет назад. Это кольцо принадлежало когда-то темному
                            властителю Средиземья Саурону, и оно дает большую власть своему
                            обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем.
                            Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой
                            Горе и уничтожил.
                        </p>
                    </div>
                </div>
            </div>
        </BoxWrapper>
    );
};

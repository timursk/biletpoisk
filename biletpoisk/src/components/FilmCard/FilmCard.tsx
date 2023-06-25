import { FC } from 'react';
import styles from './filmCard.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import Image from 'next/image';
import { Counter } from '../Counter/Counter';
import { Movie } from '@/utils/types';
import { FILTER_GENRES } from '@/utils/constants';

interface Props {
    movie: Movie;
}

export const FilmCard: FC<Props> = ({ movie }) => {
    const { title, posterUrl, releaseYear, description, genre, id, rating, director } = movie;

    return (
        <BoxWrapper>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={posterUrl} alt={'poster'} width={400} height={500}></Image>
                </div>

                <div>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>{title}</h3>

                        <Counter id={id} />
                    </div>

                    <div className={styles.filmMetaContainer}>
                        <p>
                            <span className={styles.filmMetaTitle}>Жанр: </span>
                            {FILTER_GENRES[genre as keyof typeof FILTER_GENRES]}
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Год выпуска: </span>
                            {releaseYear}
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Рейтинг: </span>
                            {rating}
                        </p>
                        <p>
                            <span className={styles.filmMetaTitle}>Режиссер: </span>
                            {director}
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.descriptionTitle}>Описание</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </BoxWrapper>
    );
};

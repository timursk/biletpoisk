'use client';

import { useGetMovieQuery } from '@/store/services/movieApi';
import styles from './page.module.css';
import { FilmCard } from '@/components/FilmCard/FilmCard';
import { Comment } from '@/components/Comment/Comment';

interface NextParams {
    id: string;
}

interface Params {
    params: NextParams;
}

export default function FilmPage({ params }: Params) {
    const { data, isLoading, error } = useGetMovieQuery(params.id);

    if (isLoading) {
        return <span>Загрузка...</span>;
    }
    if (!data || error) {
        return <span>Такого фильма нет! Возможно Вы ввели неверную ссылку.</span>;
    }

    return (
        <div className={styles.container}>
            <FilmCard movie={data.movie} />

            {data.reviews.map((review) => {
                return <Comment key={review.id} review={review} />;
            })}
        </div>
    );
}

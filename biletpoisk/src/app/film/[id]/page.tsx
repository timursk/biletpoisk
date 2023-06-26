'use client';

import { useGetMovieQuery } from '@/store/services/movieApi';
import styles from './page.module.css';
import { FilmCard } from '@/components/FilmCard/FilmCard';
import { Comment } from '@/components/Comment/Comment';
import { Loader } from '@/components/Loader/Loader';

interface NextParams {
    id: string;
}

interface Params {
    params: NextParams;
}

export default function FilmPage({ params }: Params) {
    const { data, isLoading, error } = useGetMovieQuery(params.id);

    if (isLoading) {
        return <Loader />;
    }
    if (!data || !data.movie || error) {
        return <span>Такого фильма нет! Возможно Вы ввели неверную ссылку.</span>;
    }

    return (
        <div className={styles.container}>
            <FilmCard movie={data.movie} />

            {Boolean(data.reviews?.length > 0)
                ? data.reviews.map((review) => {
                      return <Comment key={review.id} review={review} />;
                  })
                : null}
        </div>
    );
}

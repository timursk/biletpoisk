import { selectBasketModule } from '@/store/features/basket/selectors';
import { selectMoviesModule } from '@/store/features/movies/selectors';
import { Movie } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useGetAllBasketMovies = () => {
    const movies = useSelector(selectMoviesModule);
    const basket = useSelector(selectBasketModule);
    const moviesIds = Object.keys(basket);
    const [basketMovies, setBasketMovies] = useState<Movie[]>([]);

    useEffect(() => {
        if (movies) {
            const basketMovies: Movie[] = [];

            for (let movieId of moviesIds) {
                const movie = movies.find((currentMovie) => currentMovie.id === movieId);

                if (movie) {
                    basketMovies.push(movie);
                }
            }

            setBasketMovies(basketMovies);
        }
    }, [movies, basket]);

    return basketMovies;
};

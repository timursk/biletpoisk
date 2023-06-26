import { selectBasketModule } from '@/store/features/basket/selectors';
import { selectMoviesModule } from '@/store/features/movies/selectors';
import { getFilmsByBasket } from '@/utils/helpers';
import { Movie } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useGetAllBasketMovies = () => {
    const movies = useSelector(selectMoviesModule);
    const basket = useSelector(selectBasketModule);
    const [basketMovies, setBasketMovies] = useState<Movie[]>(getFilmsByBasket(movies, basket));

    useEffect(() => {
        const result = getFilmsByBasket(movies, basket);
        setBasketMovies(result);
    }, [movies, basket]);

    return basketMovies;
};

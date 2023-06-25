import { selectBasketModule } from '@/store/features/basket/selectors';
import { Movie } from '@/utils/types';
import { useSelector } from 'react-redux';

const SOME_ARR: any[] = [];

export const useGetAllBasketMovies = () => {
    const basket = useSelector(selectBasketModule);
    const moviesIds = Object.keys(basket);
    const basketMovies: Movie[] = moviesIds.map((movieId) =>
        SOME_ARR.find((item) => item.id === movieId)
    );

    return basketMovies;
};

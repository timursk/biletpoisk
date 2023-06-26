import { selectCinemasModule } from '@/store/features/cinemas/selectors';
import { selectFiltersModule } from '@/store/features/filters/selectors';
import { selectMoviesModule } from '@/store/features/movies/selectors';
import { filterMovies } from '@/utils/helpers';
import { Movie } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useGetFilteredMovies = () => {
    const data = useSelector(selectMoviesModule);
    const filters = useSelector(selectFiltersModule);
    const cinemas = useSelector(selectCinemasModule);
    const [filteredData, setFilteredData] = useState<Movie[]>(filterMovies(data, filters, cinemas));

    useEffect(() => {
        const newFilteredData = filterMovies(data, filters, cinemas);
        setFilteredData(newFilteredData);
    }, [cinemas, data, filters]);

    return { filteredData };
};

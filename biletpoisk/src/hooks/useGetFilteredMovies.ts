import { selectCinemasModule } from '@/store/features/cinemas/selectors';
import { selectFiltersModule } from '@/store/features/filters/selectors';
import { selectMoviesModule } from '@/store/features/movies/selectors';
import { Movie } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Data = Movie[] | undefined;

export const useGetFilteredMovies = () => {
    const data = useSelector(selectMoviesModule);
    const filters = useSelector(selectFiltersModule);
    const cinemas = useSelector(selectCinemasModule);
    const [filteredData, setFilteredData] = useState<Movie[]>([]);

    useEffect(() => {
        if (!data) {
            return;
        }

        const newFilteredData = data.filter((currentMovie) => {
            const isIncludes = currentMovie.title
                .toLowerCase()
                .includes(filters.title?.toLowerCase() || '');

            const isCurrentGenre =
                filters.genre && filters.genre !== 'none'
                    ? currentMovie.genre === filters.genre
                    : true;

            const isInCinema = filters.cinemaId
                ? cinemas[filters.cinemaId].movieIds.includes(currentMovie.id)
                : true;

            return isIncludes && isCurrentGenre && isInCinema;
        });

        setFilteredData(newFilteredData);
    }, [cinemas, data, filters.cinemaId, filters.genre, filters.title]);

    return { filteredData };
};

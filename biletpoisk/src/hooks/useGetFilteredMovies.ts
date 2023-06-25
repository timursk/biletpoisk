import { selectFiltersModule } from '@/store/features/filters/selectors';
import { Movie } from '@/utils/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Data = Movie[] | undefined;

export const useGetFilteredMovies = (data: Data) => {
    const filters = useSelector(selectFiltersModule);
    const [filteredData, setFilteredData] = useState<Movie[]>([]);

    useEffect(() => {
        if (!data) {
            return;
        }

        const newFilteredData = data.filter((currentMovie) => {
            const isIncludes = currentMovie.title.includes(filters.title || '');
            const isCurrentGenre = filters.genre ? currentMovie.genre === filters.genre : true;

            return isIncludes && isCurrentGenre;
        });

        setFilteredData(newFilteredData);
    }, [data, filters]);

    return { filteredData };
};

import { moviesActions } from '@/store/features/movies';
import { useGetMoviesQuery } from '@/store/services/movieApi';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';

export const useLoadMovies = () => {
    const { data, isLoading, error } = useGetMoviesQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(moviesActions.setMovies(data));
        }
    }, [data, dispatch]);

    return { data, isLoading, error };
};

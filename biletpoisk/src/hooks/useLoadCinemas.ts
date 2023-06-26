import { cinemasActions } from '@/store/features/cinemas';
import { useGetCinemasQuery } from '@/store/services/movieApi';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';

export const useLoadCinemas = () => {
    const { data, isLoading, error } = useGetCinemasQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(cinemasActions.setCinemas(data));
        }
    }, [data, dispatch]);

    return { data, isLoading, error };
};

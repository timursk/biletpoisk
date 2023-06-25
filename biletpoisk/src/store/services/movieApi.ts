import { Movie } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], string>({
            query: (cinemaId) => (cinemaId ? `movies?cinemaId=${cinemaId}` : `movies`),
        }),
    }),
});

export const { useGetMoviesQuery } = movieApi;

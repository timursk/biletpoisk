import { Cinema, CurrentMovie, Movie, Review } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], string | void>({
            query: (cinemaId) => (cinemaId ? `movies?cinemaId=${cinemaId}` : `movies`),
        }),
        getCinemas: builder.query<Cinema[], void>({
            query: () => 'cinemas',
        }),
        getMovie: builder.query<CurrentMovie, string>({
            async queryFn(movieId, queryApi, extraOptions, baseQuery) {
                const movie = baseQuery(`movie?movieId=${movieId}`);
                const reviews = baseQuery(`reviews?movieId=${movieId}`);

                const promiseResult = await Promise.all([movie, reviews]);
                const [movieData, reviewsData] = promiseResult;

                const data = {
                    movie: movieData.data as Movie,
                    reviews: reviewsData.data as Review[],
                };

                return { data };
            },
        }),
    }),
});

export const { useGetMoviesQuery, useGetCinemasQuery, useGetMovieQuery } = movieApi;

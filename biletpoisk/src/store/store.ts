import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './features/basket';
import { useDispatch } from 'react-redux';
import { movieApi } from './services/movieApi';
import { filtersReducer } from './features/filters';
import { cinemasReducer } from './features/cinemas';
import { moviesReducer } from './features/movies';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        filters: filtersReducer,
        cinemas: cinemasReducer,
        movies: moviesReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

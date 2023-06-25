import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './features/basket';
import { useDispatch } from 'react-redux';
import { movieApi } from './services/movieApi';
import { filtersReducer } from './features/filters';
import { cinemasReducer } from './features/cinemas';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        filters: filtersReducer,
        cinemas: cinemasReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

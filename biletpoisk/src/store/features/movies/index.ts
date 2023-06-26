import { Cinema, Movie } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = Movie[];

const initialState: InitialState = [];

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            const { payload } = action;

            if (!payload || payload.length === 0) {
                return;
            }

            state = [...payload];
            return state;
        },
    },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;

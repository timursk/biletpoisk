import { FILTER_GENRES } from '@/utils/constants';
import { Movie } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
    title?: string;
    genre?: keyof typeof FILTER_GENRES;
    cinemaId?: string;
    filteredMovies?: Movie[];
}

export type Filters = typeof initialState;

const initialState: InitialState = {};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            const { payload } = action;

            if (!payload) {
                delete state.title;
            }

            state.title = payload;
        },

        setGenre: (state, action: PayloadAction<keyof typeof FILTER_GENRES>) => {
            const { payload } = action;

            if (!payload) {
                delete state.genre;
            }

            state.genre = payload;
        },

        setCinemaId: (state, action: PayloadAction<string>) => {
            const { payload } = action;

            if (!payload) {
                delete state.cinemaId;
            }

            state.cinemaId = payload;
        },

        setFilteredMovies: (state, action: PayloadAction<Movie[]>) => {
            const { payload } = action;

            if (!payload) {
                delete state.filteredMovies;
            }

            state.filteredMovies = payload;
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;

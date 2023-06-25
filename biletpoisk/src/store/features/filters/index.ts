import { Movie } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
    title?: string;
    genre?: string;
    filteredMovies?: Movie[];
}

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

        setGenre: (state, action: PayloadAction<string>) => {
            const { payload } = action;

            if (!payload) {
                delete state.genre;
            }

            state.genre = payload;
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
import { Cinema, Movie } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = Record<string, Cinema>;

const initialState: InitialState = {};

const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {
        setCinemas: (state, action: PayloadAction<Cinema[]>) => {
            const { payload } = action;

            if (!payload || payload.length === 0) {
                return;
            }

            state = initialState;

            for (let cinema of payload) {
                state[cinema.id] = cinema;
            }
        },
    },
});

export const cinemasReducer = cinemasSlice.reducer;
export const cinemasActions = cinemasSlice.actions;

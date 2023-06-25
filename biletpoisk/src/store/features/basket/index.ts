import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = Record<string, number>;
const initialState: InitialState = {};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },
        decrement: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            const count = state[payload];

            if (!count) {
                return;
            }

            if (count === 1) {
                delete state[payload];
                return;
            }

            state[payload] = count - 1;
        },
        // reset: () => initialState,
    },
});

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;

import { RootState } from '@/store/store';

export const selectBasketModule = (state: RootState) => state.basket;

export const selectProductAmount = (state: RootState, id: string) =>
    selectBasketModule(state)[id] || 0;

import { RootState } from '@/store/store';

export const selectCinemasModule = (state: RootState) => state.cinemas;
export const selectCinema = (state: RootState, id: string) => selectCinemasModule(state)[id];

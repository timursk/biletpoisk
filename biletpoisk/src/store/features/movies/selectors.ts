import { RootState } from '@/store/store';

export const selectMoviesModule = (state: RootState) => state.movies;
export const selectMovie = (state: RootState, idx: number) => selectMoviesModule(state)[idx];

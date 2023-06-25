import { RootState } from '@/store/store';

export const selectFiltersModule = (state: RootState) => state.filters;

export const selectTitle = (state: RootState) => selectFiltersModule(state).title;
export const selectGenre = (state: RootState) => selectFiltersModule(state).genre;
export const selectCinemaId = (state: RootState) => selectFiltersModule(state).cinemaId;

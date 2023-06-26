import {
    BtnElementRef,
    AbsoluteStylesRef,
} from '@/components/FilterComponents/common/FilterSelect';
import { CSSProperties } from 'react';
import { Cinema, Movie } from './types';
import { Filters } from '@/store/features/filters';

export function setAbsoluteCSSCoordinates(
    btnElementRef: BtnElementRef,
    AbsoluteStylesRef: AbsoluteStylesRef
) {
    if (!btnElementRef.current) {
        return;
    }

    const PAD = 4;
    const result: CSSProperties = {};

    const { left, top, width, height } = btnElementRef.current.getBoundingClientRect();
    const scrollTop = document.scrollingElement?.scrollTop || 0;

    result.left = `${left}px`;
    result.top = `${top + height + PAD + scrollTop}px`;
    result.width = `${width}px`;

    AbsoluteStylesRef.current = result;
}

export const debounce = (fn: Function, ms = 200) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

export const getFilmsByBasket = (movies: Movie[], basket: Record<string, number>) => {
    const result: Movie[] = [];

    if (movies?.length === 0 || !basket) {
        return result;
    }

    const movieIds = Object.keys(basket);

    for (let movieId of movieIds) {
        const movie = movies.find((currentMovie) => currentMovie.id === movieId);

        if (movie) {
            result.push(movie);
        }
    }

    return result;
};

export const filterMovies = (
    movies: Movie[],
    filters: Filters,
    cinemas: Record<string, Cinema>
) => {
    let result: Movie[] = [];

    if (movies?.length === 0) {
        return result;
    }

    result = movies.filter((currentMovie) => {
        const isIncludes = currentMovie.title
            .toLowerCase()
            .includes(filters.title?.toLowerCase() || '');

        const isCurrentGenre =
            filters.genre && filters.genre !== 'none' ? currentMovie.genre === filters.genre : true;

        const isInCinema = filters.cinemaId
            ? cinemas[filters.cinemaId].movieIds.includes(currentMovie.id)
            : true;

        return isIncludes && isCurrentGenre && isInCinema;
    });

    return result;
};

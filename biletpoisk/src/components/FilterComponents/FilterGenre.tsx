'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectGenre } from '@/store/features/filters/selectors';
import { FILTER_GENRES, FILTER_ITEMS } from '@/utils/constants';
import { FilterGenreList } from './FilterGenreList';
import { FilterSelect } from './common/FilterSelect';

export const FilterGenre: FC = () => {
    const genre = useSelector(selectGenre);

    return (
        <FilterSelect
            activeKey={genre && genre !== 'none' ? FILTER_GENRES[genre] : null}
            placeholder={FILTER_ITEMS.genre.placeholder}
            id={FILTER_ITEMS.genre.id}
            selectListFn={(style) => {
                return <FilterGenreList style={style} />;
            }}
        />
    );
};

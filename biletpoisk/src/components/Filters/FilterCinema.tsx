'use client';

import { FC } from 'react';
import { FilterSelect } from './FilterSelect';
import { useSelector } from 'react-redux';
import { selectCinemaId } from '@/store/features/filters/selectors';
import { FILTER_ITEMS } from '@/utils/constants';
import { selectCinema } from '@/store/features/cinemas/selectors';
import { RootState } from '@/store/store';
import { FilterCinemaList } from './FilterCinemaList';
import { useLoadCinemas } from '@/hooks/useLoadCinemas';

export const FilterCinema: FC = () => {
    const cinemaId = useSelector(selectCinemaId);
    const cinema = useSelector((state: RootState) => selectCinema(state, cinemaId || ''));
    const { data, isLoading, error } = useLoadCinemas();

    if (isLoading) {
        return <span>Загрузка...</span>;
    }
    if (!data || error) {
        return <span>В кинотеатрах пусто!</span>;
    }

    return (
        <FilterSelect
            activeKey={Boolean(cinema) ? cinema.name : null}
            placeholder={FILTER_ITEMS.cinemas.placeholder}
            id={FILTER_ITEMS.cinemas.id}
            selectListFn={(style) => {
                return <FilterCinemaList style={style} />;
            }}
        />
    );
};

'use client';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCinemaId } from '@/store/features/filters/selectors';
import { FILTER_ITEMS } from '@/utils/constants';
import { selectCinema } from '@/store/features/cinemas/selectors';
import { RootState } from '@/store/store';
import { FilterCinemaList } from './FilterCinemaList';
import { useLoadCinemas } from '@/hooks/useLoadCinemas';
import { FilterSelect } from './common/FilterSelect';

export const FilterCinema: FC = () => {
    const cinemaId = useSelector(selectCinemaId);
    const cinema = useSelector((state: RootState) => selectCinema(state, cinemaId || ''));
    const { data, isLoading, error } = useLoadCinemas();

    if (!isLoading && (!data || error)) {
        return null;
    }

    return (
        <FilterSelect
            activeKey={Boolean(cinema) ? cinema.name : null}
            placeholder={FILTER_ITEMS.cinemas.placeholder}
            id={FILTER_ITEMS.cinemas.id}
            isLoading={isLoading}
            selectListFn={(style) => {
                return <FilterCinemaList style={style} />;
            }}
        />
    );
};

import { CSSProperties, FC, useContext } from 'react';
import { FiltersContext } from './FiltersWrapper';
import { useAppDispatch } from '@/store/store';
import { FilterList } from './FilterList';
import { useSelector } from 'react-redux';
import { selectCinemasModule } from '@/store/features/cinemas/selectors';
import { filtersActions } from '@/store/features/filters';
import { FilterSelectListItem } from './FilterSelectListItem';

interface Props {
    style: CSSProperties;
}

export const FilterCinemaList: FC<Props> = ({ style }) => {
    const cinemas = useSelector(selectCinemasModule);
    const dispatch = useAppDispatch();
    const { switchFilter } = useContext(FiltersContext);

    return (
        <FilterList style={style}>
            <FilterSelectListItem
                key={''}
                title={'Не выбран'}
                onClick={() => {
                    switchFilter(-1);
                    dispatch(filtersActions.setCinemaId(''));
                }}
            />

            {Boolean(cinemas) &&
                Object.keys(cinemas).map((cinemaId) => {
                    const cinema = cinemas[cinemaId];

                    return (
                        <FilterSelectListItem
                            key={cinemaId}
                            title={cinema.name}
                            onClick={() => {
                                switchFilter(-1);
                                dispatch(filtersActions.setCinemaId(cinemaId));
                            }}
                        />
                    );
                })}
        </FilterList>
    );
};

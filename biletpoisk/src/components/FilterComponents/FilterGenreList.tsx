import { CSSProperties, FC, useContext } from 'react';
import { FiltersContext } from './common/FiltersWrapper';
import { useAppDispatch } from '@/store/store';
import { FILTER_GENRES } from '@/utils/constants';
import { FilterSelectListItem } from './common/FilterSelectListItem';
import { filtersActions } from '@/store/features/filters';
import { FilterList } from './common/FilterList';

interface Props {
    style: CSSProperties;
}

export const FilterGenreList: FC<Props> = ({ style }) => {
    const { switchFilter } = useContext(FiltersContext);
    const dispatch = useAppDispatch();

    return (
        <FilterList style={style}>
            {Object.keys(FILTER_GENRES).map((key, idx) => {
                const genreKey = key as keyof typeof FILTER_GENRES;
                const title = FILTER_GENRES[genreKey];

                return (
                    <FilterSelectListItem
                        key={idx}
                        title={title}
                        onClick={() => {
                            switchFilter(-1);
                            dispatch(filtersActions.setGenre(genreKey));
                        }}
                    />
                );
            })}
        </FilterList>
    );
};

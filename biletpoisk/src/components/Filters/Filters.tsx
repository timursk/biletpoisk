'use client';

import { FC } from 'react';
import styles from './filters.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { FILTER_GENRES, FILTER_ITEMS } from '@/utils/constants';
import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterInput } from './FilterInput';
import { FilterSelect } from './FilterSelect';
import { FiltersWrapper } from './FiltersWrapper';
import { FilterSelectList } from './FilterSelectList';
import { filtersActions } from '@/store/features/filters';

interface Props {}

export const Filters: FC = () => {
    return (
        <div className={styles.filterContainer}>
            <BoxWrapper>
                <div className={styles.filterWrapper}>
                    <h3 className={styles.filterContainerTitle}>Фильтр поиска</h3>

                    <div className={styles.filters}>
                        <FiltersWrapper>
                            <FilterContainer title={FILTER_ITEMS.title.title}>
                                <FilterInput
                                    placeholder={FILTER_ITEMS.title.placeholder}
                                    id={FILTER_ITEMS.title.id}
                                />
                            </FilterContainer>

                            <FilterContainer title={FILTER_ITEMS.genre.title}>
                                <FilterSelect
                                    placeholder={FILTER_ITEMS.genre.placeholder}
                                    id={FILTER_ITEMS.genre.id}
                                    selectListFn={(style) => {
                                        return (
                                            <FilterSelectList
                                                listItems={FILTER_GENRES}
                                                style={style}
                                                dispatchAction={filtersActions.setGenre}
                                            />
                                        );
                                    }}
                                />
                            </FilterContainer>

                            <FilterContainer title={FILTER_ITEMS.cinemas.title}>
                                <FilterSelect
                                    placeholder={FILTER_ITEMS.cinemas.placeholder}
                                    id={FILTER_ITEMS.cinemas.id}
                                    selectListFn={(style) => {
                                        return (
                                            <FilterSelectList
                                                listItems={{
                                                    CTfrB5PGEJHBwxCNlU4uo: 'sinema sad',
                                                    '2a2976KdjBek0e2ZR_07V': '4 stars',
                                                }}
                                                style={style}
                                                dispatchAction={filtersActions.setCinemaId}
                                            />
                                        );
                                    }}
                                />
                            </FilterContainer>
                        </FiltersWrapper>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
};

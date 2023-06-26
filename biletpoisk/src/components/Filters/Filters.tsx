'use client';

import { FC } from 'react';
import styles from './filters.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { FILTER_ITEMS } from '@/utils/constants';
import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterInput } from './FilterInput';
import { FiltersWrapper } from './FiltersWrapper';
import { FilterGenre } from './FilterGenre';
import { FilterCinema } from './FilterCinema';

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
                                <FilterGenre />
                            </FilterContainer>

                            <FilterContainer title={FILTER_ITEMS.cinemas.title}>
                                <FilterCinema />
                            </FilterContainer>
                        </FiltersWrapper>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
};

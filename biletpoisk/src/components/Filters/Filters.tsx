'use client';

import { FC } from 'react';
import styles from './filters.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { FILTER_ITEMS } from '@/utils/constants';
import { FilterContainer } from '../FilterComponents/common/FilterContainer';
import { FilterInput } from '../FilterComponents/common/FilterInput';
import { FiltersWrapper } from '../FilterComponents/common/FiltersWrapper';
import { FilterGenre } from '../FilterComponents/FilterGenre';
import { FilterCinema } from '../FilterComponents/FilterCinema';

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

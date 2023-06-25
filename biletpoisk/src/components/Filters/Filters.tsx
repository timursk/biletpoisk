import { FC } from 'react';
import styles from './filters.module.css';
import { BoxWrapper } from '../BoxWrapper/BoxWrapper';
import { FILTER_SELECTS } from '@/utils/constants';
import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterInput } from './FilterInput';
import { FilterSelect } from './FilterSelect';
import { FiltersWrapper } from './FiltersWrapper';

interface Props {}

export const Filters: FC = () => {
    return (
        <div className={styles.filterContainer}>
            <BoxWrapper>
                <div className={styles.filterWrapper}>
                    <h3 className={styles.filterContainerTitle}>Фильтр поиска</h3>

                    <div className={styles.filters}>
                        <FiltersWrapper>
                            {FILTER_SELECTS.map(({ title, placeholder, isInput }, idx) => {
                                return (
                                    <FilterContainer key={idx} title={title}>
                                        {isInput ? (
                                            <FilterInput placeholder={placeholder} id={idx} />
                                        ) : (
                                            <FilterSelect placeholder={placeholder} id={idx} />
                                        )}
                                    </FilterContainer>
                                );
                            })}
                        </FiltersWrapper>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
};

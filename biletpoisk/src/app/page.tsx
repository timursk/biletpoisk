import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import { FilterContainer } from '@/components/FilterContainer/FilterContainer';
import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './page.module.css';
import { FilterInput } from '@/components/Filters/FilterInput';
import { FilterSelect } from '@/components/Filters/FilterSelect';
import { FILTER_SELECTS } from '@/utils/constants';
import { Filters } from '@/components/Filters/Filters';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <BoxWrapper>
                    <div className={styles.filterWrapper}>
                        <h3 className={styles.filterContainerTitle}>Фильтр поиска</h3>

                        <div className={styles.filters}>
                            <Filters>
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
                            </Filters>
                        </div>
                    </div>
                </BoxWrapper>
            </div>

            <div className={styles.ticketsContainer}>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    );
}

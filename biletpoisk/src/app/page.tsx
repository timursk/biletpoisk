import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import { FilterInput } from '@/components/FilterInput/FilterInput';
import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <BoxWrapper>
                    <div className={styles.filterWrapper}>
                        <h3 className={styles.filterContainerTitle}>Фильтр поиска</h3>

                        <div className={styles.filters}>
                            <FilterInput />
                            <FilterInput />
                            <FilterInput />
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

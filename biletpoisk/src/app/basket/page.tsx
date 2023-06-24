import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import { TicketCard } from '@/components/TicketCard/TicketCard';
import styles from './basket.module.css';

export default function Basket() {
    return (
        <div className={styles.container}>
            <div className={styles.ticketsContainer}>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>

            <BoxWrapper>
                <div className={styles.totalContainer}>
                    <p>Итого билетов:</p>
                    <p>7</p>
                </div>
            </BoxWrapper>
        </div>
    );
}

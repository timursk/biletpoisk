import styles from './page.module.css';
import { Tickets } from '@/components/Tickets/Tickets';
import { Filters } from '@/components/Filters/Filters';

export default function Home() {
    return (
        <div className={styles.container}>
            <Filters />
            <Tickets />
        </div>
    );
}

import { BoxWrapper } from '@/components/BoxWrapper/BoxWrapper';
import styles from './about.module.css';
import { ABOUT } from '@/utils/constants';

export default function About() {
    return (
        <>
            <BoxWrapper>
                <h2 className={styles.title}>О нас</h2>

                {ABOUT.map((info, idx) => (
                    <span key={idx} className={styles.item}>
                        {info}
                    </span>
                ))}
            </BoxWrapper>
        </>
    );
}

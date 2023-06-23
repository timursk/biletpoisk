import { FC } from 'react';
import styles from './boxWrapper.module.css';

interface Props {
    children: React.ReactNode;
}

export const BoxWrapper: FC<Props> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

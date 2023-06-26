import { CSSProperties, FC } from 'react';
import styles from './loader.module.css';

interface Props {
    style?: CSSProperties;
}

export const Loader: FC<Props> = ({ style }) => {
    return <span style={style} className={styles.loader}></span>;
};

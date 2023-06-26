import { FC } from 'react';
import styles from './filterSelectListItem.module.css';

interface Props {
    title: string;
    onClick: () => void;
}

export const FilterSelectListItem: FC<Props> = ({ title, onClick }) => {
    return (
        <li className={styles.listItem} onClick={onClick}>
            {title}
        </li>
    );
};

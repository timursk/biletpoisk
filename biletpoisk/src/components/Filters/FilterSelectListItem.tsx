import { FC } from 'react';
import styles from './filterSelectListItem.module.css';

interface Props {
    filterKey: string;
    title: string;
    dispatchFn: (key: string) => void;
}

export const FilterSelectListItem: FC<Props> = ({ filterKey, title, dispatchFn }) => {
    return (
        <li
            className={styles.listItem}
            onClick={() => {
                dispatchFn(filterKey);
            }}
        >
            {title}
        </li>
    );
};

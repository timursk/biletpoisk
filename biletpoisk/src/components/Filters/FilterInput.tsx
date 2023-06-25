'use client';

import { FC, useContext } from 'react';
import styles from './filterInput.module.css';
import { FiltersContext } from './FiltersWrapper';

interface Props {
    placeholder: string;
    id: number;
}

export const FilterInput: FC<Props> = ({ placeholder, id }) => {
    const { switchFilter } = useContext(FiltersContext);

    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onClick={() => switchFilter(id)}
        ></input>
    );
};

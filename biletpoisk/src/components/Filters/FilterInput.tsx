'use client';

import { FC, useContext } from 'react';
import styles from './filterInput.module.css';
import { FiltersContext } from './FiltersWrapper';
import { useAppDispatch } from '@/store/store';
import { filtersActions } from '@/store/features/filters';
import { useSelector } from 'react-redux';
import { selectTitle } from '@/store/features/filters/selectors';

interface Props {
    placeholder: string;
    id: number;
}

export const FilterInput: FC<Props> = ({ placeholder, id }) => {
    const { switchFilter } = useContext(FiltersContext);
    const title = useSelector(selectTitle);
    const dispatch = useAppDispatch();

    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onClick={() => switchFilter(id)}
            onChange={(e) => {
                const { value } = e.target;
                dispatch(filtersActions.setTitle(value));
            }}
            value={title}
        ></input>
    );
};

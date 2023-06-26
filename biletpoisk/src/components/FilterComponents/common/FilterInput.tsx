'use client';

import { ChangeEvent, FC, useCallback, useContext, useMemo } from 'react';
import styles from './filterInput.module.css';
import { FiltersContext } from './FiltersWrapper';
import { useAppDispatch } from '@/store/store';
import { filtersActions } from '@/store/features/filters';
import { debounce } from '@/utils/helpers';

interface Props {
    placeholder: string;
    id: number;
}

export const FilterInput: FC<Props> = ({ placeholder, id }) => {
    const { switchFilter } = useContext(FiltersContext);
    const dispatch = useAppDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = useCallback(
        debounce((e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            dispatch(filtersActions.setTitle(value));
        }, 200),
        []
    );

    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onClick={() => switchFilter(id)}
            onChange={handleChange}
        ></input>
    );
};

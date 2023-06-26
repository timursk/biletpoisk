'use client';

import { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from './filterInput.module.css';
import { FiltersContext } from './FiltersWrapper';
import { useAppDispatch } from '@/store/store';
import { filtersActions } from '@/store/features/filters';
import { debounce } from '@/utils/helpers';
import { useSelector } from 'react-redux';
import { selectTitle } from '@/store/features/filters/selectors';

interface Props {
    placeholder: string;
    id: number;
}

export const FilterInput: FC<Props> = ({ placeholder, id }) => {
    const title = useSelector(selectTitle);
    const [value, setValue] = useState(title);
    const { switchFilter } = useContext(FiltersContext);
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const changeFilter = useCallback(
        debounce((value: string) => {
            dispatch(filtersActions.setTitle(value));
        }, 200),
        []
    );

    useEffect(() => {
        changeFilter(value);
    }, [value, changeFilter]);

    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onClick={() => switchFilter(id)}
            onChange={handleChange}
            value={value}
        ></input>
    );
};

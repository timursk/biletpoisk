'use client';

import { defaultFiltersContextValue } from '@/utils/constants';
import { FC, ReactNode, createContext, useCallback, useState } from 'react';

export const FiltersContext = createContext(defaultFiltersContextValue);

interface FiltersProps {
    children: ReactNode;
}

export const Filters: FC<FiltersProps> = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState(-1);

    const switchFilter = useCallback((id: number) => {
        setActiveFilter(() => id);
    }, []);

    return (
        <FiltersContext.Provider value={{ activeFilter, switchFilter }}>
            {children}
        </FiltersContext.Provider>
    );
};

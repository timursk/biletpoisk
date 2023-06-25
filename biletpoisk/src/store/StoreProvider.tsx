'use client';

import { FC, ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

interface Props {
    children: ReactNode;
}

export const StoreProvider: FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

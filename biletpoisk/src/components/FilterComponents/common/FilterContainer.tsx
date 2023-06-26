import classNames from 'classnames';
import styles from './filterContainer.module.css';
import { FC, ReactNode } from 'react';
import { sfpro } from '@/app/fonts';

interface Props {
    title: string;
    children: ReactNode;
}

export const FilterContainer: FC<Props> = ({ children, title }) => {
    return (
        <div className={classNames(styles.container, sfpro.className)}>
            <div className={styles.label}>{title}</div>
            {children}
        </div>
    );
};

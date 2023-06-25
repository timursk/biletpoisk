'use client';

import { CSSProperties, FC, MutableRefObject, useContext, useEffect, useRef } from 'react';
import styles from './filterSelect.module.css';
import Image from 'next/image';
import { FilterSelectList } from './FilterSelectList';
import { createPortal } from 'react-dom';
import arrowSelect from '../../assets/icons/arrowSelect.svg';
import classNames from 'classnames';
import { FiltersContext } from './Filters';
import { setAbsoluteCSSCoordinates } from '@/utils/helpers';

interface Props {
    placeholder: string;
    id: number;
}

export type BtnElementRef = MutableRefObject<HTMLButtonElement | null>;
export type AbsoluteStylesRef = MutableRefObject<CSSProperties>;

export const FilterSelect: FC<Props> = ({ placeholder, id }) => {
    const { activeFilter, switchFilter } = useContext(FiltersContext);
    const isActive = activeFilter === id;
    const btnElementRef: BtnElementRef = useRef(null);
    const absoluteStylesRef: AbsoluteStylesRef = useRef({});

    useEffect(() => {
        if (!isActive) {
            return;
        }

        document.addEventListener('scroll', handleScroll);

        function handleScroll() {
            switchFilter(-1);
        }

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isActive, switchFilter]);

    return (
        <>
            <button
                className={classNames(styles.container, isActive ? styles.active : '')}
                ref={btnElementRef}
                onClick={() => {
                    setAbsoluteCSSCoordinates(btnElementRef, absoluteStylesRef);
                    switchFilter(isActive ? -1 : id);
                }}
            >
                <span className={styles.placeholder}>{placeholder}</span>
                <Image
                    className={classNames(styles.icon, isActive ? styles.rotateIcon : '')}
                    src={arrowSelect}
                    alt={'arrow'}
                    width={20}
                    height={20}
                />
            </button>

            {isActive &&
                createPortal(
                    <FilterSelectList
                        listItems={['test', 'item', 'item']}
                        style={absoluteStylesRef.current}
                    />,
                    document.body.querySelector('.dropdown-container') || document.body
                )}
        </>
    );
};

'use client';

import {
    CSSProperties,
    FC,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useRef,
} from 'react';
import styles from './filterSelect.module.css';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import arrowSelect from '@/icons/arrowSelect.svg';
import classNames from 'classnames';
import { setAbsoluteCSSCoordinates } from '@/utils/helpers';
import { useHideOnScroll } from '@/hooks/useHideOnScroll';
import { FiltersContext } from './FiltersWrapper';
import { Loader } from '@/components/Loader/Loader';

interface Props {
    activeKey: string | null;
    placeholder: string;
    id: number;
    isLoading?: boolean;
    selectListFn: (style: CSSProperties) => ReactNode;
}

export type BtnElementRef = MutableRefObject<HTMLButtonElement | null>;
export type AbsoluteStylesRef = MutableRefObject<CSSProperties>;

export const FilterSelect: FC<Props> = ({
    activeKey,
    placeholder,
    id,
    isLoading,
    selectListFn,
}) => {
    const { activeFilter, switchFilter } = useContext(FiltersContext);
    const isActive = activeFilter === id;

    const btnElementRef: BtnElementRef = useRef(null);
    const absoluteStylesRef: AbsoluteStylesRef = useRef({});

    const onScroll = useCallback(() => {
        switchFilter(-1);
    }, [switchFilter]);

    useHideOnScroll({
        isActive,
        onScroll,
    });

    return (
        <>
            <button
                className={classNames(styles.container, isActive ? styles.active : '')}
                ref={btnElementRef}
                onClick={() => {
                    if (!isLoading) {
                        setAbsoluteCSSCoordinates(btnElementRef, absoluteStylesRef);
                        switchFilter(isActive ? -1 : id);
                    }
                }}
            >
                {Boolean(activeKey) ? (
                    <span>{activeKey}</span>
                ) : (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}

                {isLoading ? (
                    <Loader />
                ) : (
                    <Image
                        className={classNames(styles.icon, isActive ? styles.rotateIcon : '')}
                        src={arrowSelect}
                        alt={'arrow'}
                        width={20}
                        height={20}
                    />
                )}
            </button>

            {isActive &&
                !isLoading &&
                createPortal(
                    selectListFn(absoluteStylesRef.current),
                    document.body.querySelector('.dropdown-container') || document.body
                )}
        </>
    );
};

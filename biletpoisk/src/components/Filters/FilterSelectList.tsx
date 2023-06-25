'use client';

import { CSSProperties, FC, MutableRefObject, useContext, useEffect, useRef } from 'react';
import styles from './filterSelectList.module.css';
import classNames from 'classnames';
import { sfpro } from '@/app/fonts';
import { FiltersContext } from './FiltersWrapper';
import { FilterSelectListItem } from './FilterSelectListItem';
import { useAppDispatch } from '@/store/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface Props {
    listItems: Record<string, string>;
    style: CSSProperties;
    dispatchAction: ActionCreatorWithPayload<string, string>;
}

type ContainerElement = MutableRefObject<HTMLUListElement | null>;

export const FilterSelectList: FC<Props> = ({ listItems, style, dispatchAction }) => {
    const { switchFilter } = useContext(FiltersContext);
    const containerElement: ContainerElement = useRef(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const target = e.target;
            const hasElementTarget = target instanceof HTMLElement;

            if (hasElementTarget && !containerElement.current?.contains(target)) {
                switchFilter(-1);
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [switchFilter]);

    return (
        <ul
            className={classNames(styles.container, sfpro.className)}
            style={style}
            ref={containerElement}
        >
            {Boolean(listItems) && Object.keys(listItems).length
                ? Object.keys(listItems).map((listItemKey, idx) => {
                      return (
                          <FilterSelectListItem
                              key={idx}
                              filterKey={listItemKey}
                              title={listItems[listItemKey]}
                              dispatchFn={() => {
                                  dispatch(dispatchAction(listItemKey));
                              }}
                          />
                      );
                  })
                : null}
        </ul>
    );
};

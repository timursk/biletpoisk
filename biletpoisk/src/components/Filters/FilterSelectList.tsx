import { CSSProperties, FC, MutableRefObject, useContext, useEffect, useRef } from 'react';
import styles from './filterSelectList.module.css';
import classNames from 'classnames';
import { sfpro } from '@/app/fonts';
import { FiltersContext } from './FiltersWrapper';

interface Props {
    listItems: string[];
    style: CSSProperties;
}

type ContainerElement = MutableRefObject<HTMLUListElement | null>;

export const FilterSelectList: FC<Props> = ({ listItems, style }) => {
    const { switchFilter } = useContext(FiltersContext);
    const containerElement: ContainerElement = useRef(null);

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
            {Boolean(listItems.length) &&
                listItems.map((listItem, idx) => (
                    <li key={idx} className={styles.listItem}>
                        {listItem}
                    </li>
                ))}
        </ul>
    );
};

import classNames from 'classnames';
import {
    CSSProperties,
    FC,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useRef,
} from 'react';
import { FiltersContext } from './FiltersWrapper';
import { useHandleOutsideClick } from '@/hooks/useHandleOutsideClick';
import { sfpro } from '@/app/fonts';
import styles from './filterGenreList.module.css';

interface FilterListProps {
    style: CSSProperties;
    children: ReactNode;
}
export type ContainerElement = MutableRefObject<HTMLUListElement | null>;

export const FilterList: FC<FilterListProps> = ({ style, children }) => {
    const { switchFilter } = useContext(FiltersContext);
    const containerElement: ContainerElement = useRef(null);

    const handleClickOutside = useCallback(() => {
        switchFilter(-1);
    }, [switchFilter]);

    useHandleOutsideClick({ containerElement, handleClickOutside });

    return (
        <ul
            className={classNames(styles.container, sfpro.className)}
            style={style}
            ref={containerElement}
        >
            {children}
        </ul>
    );
};

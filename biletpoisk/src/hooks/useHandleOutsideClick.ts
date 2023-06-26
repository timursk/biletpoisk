import { ContainerElement } from '@/components/Filters/FilterList';
import { useEffect } from 'react';

interface Props {
    containerElement: ContainerElement;
    handleClickOutside: () => void;
}

export const useHandleOutsideClick = ({ containerElement, handleClickOutside }: Props) => {
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const target = e.target;
            const hasElementTarget = target instanceof HTMLElement;

            if (hasElementTarget && !containerElement.current?.contains(target)) {
                handleClickOutside();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [containerElement, handleClickOutside]);
};

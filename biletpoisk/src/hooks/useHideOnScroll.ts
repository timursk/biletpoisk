import { useEffect } from 'react';

interface Props {
    isActive: boolean;
    onScroll: () => void;
}

export const useHideOnScroll = ({ isActive, onScroll }: Props) => {
    useEffect(() => {
        if (!isActive) {
            return;
        }

        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, [isActive, onScroll]);
};

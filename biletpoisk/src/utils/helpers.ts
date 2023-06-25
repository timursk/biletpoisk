import { BtnElementRef, AbsoluteStylesRef } from '@/components/Filters/FilterSelect';
import { CSSProperties } from 'react';

export function setAbsoluteCSSCoordinates(
    btnElementRef: BtnElementRef,
    AbsoluteStylesRef: AbsoluteStylesRef
) {
    if (!btnElementRef.current) {
        return;
    }

    const PAD = 4;
    const result: CSSProperties = {};

    const { left, top, width, height } = btnElementRef.current.getBoundingClientRect();
    const scrollTop = document.scrollingElement?.scrollTop || 0;

    result.left = `${left}px`;
    result.top = `${top + height + PAD + scrollTop}px`;
    result.width = `${width}px`;

    AbsoluteStylesRef.current = result;
}
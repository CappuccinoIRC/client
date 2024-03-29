import React, { FC } from 'react';
import { useRandom } from '../hooks';

export interface INav {
    position?: 'left' | 'middle' | 'right';
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Nav: FC<INav> = ({position, className, children}) => {
    const { id } = useRandom();

    // @ts-ignore
    className = position && `nav-${position}`;

    return (
        <ul className={`nav ${className ? className : ''}`.trim()} role={'navigation'} key={`nav-${id}`}>
            {children}
        </ul>
    );
};
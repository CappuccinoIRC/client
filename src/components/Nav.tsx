import React, { FC } from 'react';

export interface INav {
    position?: 'left' | 'middle' | 'right';
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Nav: FC<INav> = ({position, className, children}) => {
    return (
        <ul className={`nav ${position ? `nav-${position}` : ''} ${className ? className : ''}`} role={'navigation'} key={`nav-${Math.floor(Math.random() * 9999)}`}>
            {children}
        </ul>
    );
};
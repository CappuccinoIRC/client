import React, { FC, useEffect, useState } from 'react';
import { INavItem, NavItem } from '.';

export interface INav {
    position?: 'left' | 'middle' | 'right';
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Nav: FC<INav> = ({position, className, children}) => {
    return (
        <ul className={`nav ${position ? `nav-${position}` : ''} ${className ? className : ''}`} role={'navigation'}>
            {children}
        </ul>
    );
};
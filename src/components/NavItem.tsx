import React, { FC, useLayoutEffect } from 'react';
import $ from 'jquery';
import { useRandom } from '../hooks';

export interface INavItem {
    className?: string | undefined;
    children?: React.ReactNode;

    selected?: boolean;
    onClick?: () => void;
}

export const NavItem: FC<INavItem> = ({selected = false, onClick, className, children}) => {
    const { id } = useRandom();

    // @ts-ignore
    className = selected && 'active';

    return (
        <li className={`nav-item ${className ? className : ''}`.trim()}
            onClick={onClick} key={`nav-item-${id}`}>
            {children}
        </li>
    );
};
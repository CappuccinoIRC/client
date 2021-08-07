import React, { FC } from 'react';

export interface INavItem {
    className?: string | undefined;
    children?: React.ReactNode;

    onClick?: () => void;
}

export const NavItem: FC<INavItem> = ({onClick, className, children}) => {
    return (
        <li className={`nav-item ${className ? className : ''}`} onClick={onClick}>
            {children}
        </li>
    );
};
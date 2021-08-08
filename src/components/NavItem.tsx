import React, { FC, useLayoutEffect } from 'react';
import $ from 'jquery';

export interface INavItem {
    className?: string | undefined;
    children?: React.ReactNode;

    selected?: boolean;
    onClick?: () => void;
}

export const NavItem: FC<INavItem> = ({selected = false, onClick, className, children}) => {
    function handleClick(event: any) {
        $('.active').removeClass('active');
        $(event.target).addClass('active');

        if (onClick) {
            onClick();
        }
    }

    return (
        <li className={`nav-item ${selected ? 'active' : ''} ${className ? className : ''}`} onClick={handleClick}>
            {children}
        </li>
    );
};
import React, { FC, useLayoutEffect } from 'react';
import $ from 'jquery';

export interface INavItem {
    className?: string | undefined;
    children?: React.ReactNode;

    onClick?: () => void;
}

export const NavItem: FC<INavItem> = ({onClick, className, children}) => {
    function handleClick(event: any) {
        $('.active').removeClass('active');
        $(event.target).addClass('active');

        if (onClick) {
            onClick();
        }
    }

    return (
        <li className={`nav-item ${className ? className : ''}`} onClick={handleClick}>
            {children}
        </li>
    );
};
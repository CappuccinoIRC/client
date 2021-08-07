import React, { FC } from 'react';
import $ from 'jquery';

export interface ISidebar {
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Sidebar: FC<ISidebar> = ({className, children}) => {
    return (
        <aside className={`sidebar ${className ? className : ''}`}>
            {children}
        </aside>
    );
};
import React, { FC } from 'react';
import { useRandom } from '../hooks';

export interface ISidebar {
    className?: string | undefined;
    children?: React.ReactNode;

    collapsed?: boolean;
}

export const Sidebar: FC<ISidebar> = ({collapsed= false, className, children}) => {
    const { id } = useRandom();

    return (
       <>
           <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${className ? className : ''}`} key={`sidebar-${id}`}>
               {children}
           </aside>
       </>
    );
};
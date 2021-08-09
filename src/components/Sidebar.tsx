import React, { FC } from 'react';
import { useRandom } from '../hooks';

export interface ISidebar {
    className?: string | undefined;
    children?: React.ReactNode;

    collapsed?: boolean;
}

export const Sidebar: FC<ISidebar> = ({collapsed= false, className, children}) => {
    const { id } = useRandom();

    // @ts-ignore
    className = collapsed && 'sidebar-collapsed';

    return (
       <>
           <aside className={`sidebar ${className ? className : ''}`.trim()} key={`sidebar-${id}`}>
               {children}
           </aside>
       </>
    );
};
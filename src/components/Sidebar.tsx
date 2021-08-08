import React, { FC } from 'react';

export interface ISidebar {
    className?: string | undefined;
    children?: React.ReactNode;

    collapsed?: boolean;
}

export const Sidebar: FC<ISidebar> = ({collapsed= false, className, children}) => {
    // const [, forceUpdate] = useReducer((x) => x + 1, 0);
    
    // useEffect(() => {
    //     $('.nav-item span').each((index, element) => {
    //         $(element).text($(element).text().substr(0, 1));
    //     });
    // }, [ collapsed ]);

    // useEffect(() => {
    //     forceUpdate();
    // }, []);

    return (
       <>
           <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${className ? className : ''}`} key={`sidebar-${Math.floor(Math.random() * 9999)}`}>
               {children}
           </aside>
       </>
    );
};
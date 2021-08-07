import React, { FC } from 'react';

type SidebarProps = {
    classes?: string | undefined;
    children?: React.ReactNode;
};

const Sidebar: FC<SidebarProps> = ({classes, children}) => {
    return (
        <aside className={`sidebar ${classes ? classes : ''}`}>
            {children}
        </aside>
    );
};

export default Sidebar;
import React, {CSSProperties, FC} from 'react';

type NavItemProps = {
    className?: string | undefined;
    children?: React.ReactNode;
};

const NavItem: FC<NavItemProps> = ({className, children}) => {
    return (
        <li className={`nav-item ${className}`}>
            {children}
        </li>
    );
}

export default NavItem;
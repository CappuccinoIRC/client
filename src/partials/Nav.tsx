import React, { FC } from 'react';

type NavProps = {
    position?: 'left' | 'middle' | 'right';
    className?: string | undefined;
    children?: React.ReactNode;
};

const Nav: FC<NavProps> = ({position, className, children}) => {
    return (
        <ul className={`nav nav-${position} ${className}`} role={'navigation'}>
            {children}
        </ul>
    );
};

export default Nav;
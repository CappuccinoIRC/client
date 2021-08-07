import React, { FC } from 'react';

type HeaderProps = {
    className?: string | undefined;
    children?: React.ReactNode;
};

const Header: FC<HeaderProps> = ({className, children}) => {
    return (
        <header className={`header ${className ? className : ''}`}>
            {children}
        </header>
    );
};

export default Header;
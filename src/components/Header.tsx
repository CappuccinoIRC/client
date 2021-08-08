import React, { FC } from 'react';

export interface IHeader {
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Header: FC<IHeader> = ({className, children}) => {
    return (
        <header className={`header ${className ? className : ''}`} key={`header-${Math.floor(Math.random() * 9999)}`}>
            {children}
        </header>
    );
};
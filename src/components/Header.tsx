import React, { FC } from 'react';

export interface IHeader {
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Header: FC<IHeader> = ({className, children}) => {
    return (
        <header className={`header ${className ? className : ''}`}>
            {children}
        </header>
    );
};
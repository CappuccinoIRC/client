import React, { FC } from 'react';
import { useRandom } from '../hooks';

export interface IHeader {
    className?: string | undefined;
    children?: React.ReactNode;
}

export const Header: FC<IHeader> = ({className, children}) => {
    const { id } = useRandom();

    return (
        <header className={`header ${className ? className : ''}`.trim()} key={`header-${id}`}>
            {children}
        </header>
    );
};
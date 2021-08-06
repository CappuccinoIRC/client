import React from 'react';
import { Header, Nav, NavItem } from './components';

import './App.scss';

export default () => {
    return (
        <>
            <Header>
                <Nav position={'left'}>
                    <NavItem><h3><a href="#" className={'nav-brand'}>CappuccinoIRC</a></h3></NavItem>
                </Nav>

                <Nav position={'right'}>
                    <NavItem><a href="#" className={'nav-link'}>Home</a></NavItem>
                    <NavItem><a href="#" className={'nav-link'}>Members</a></NavItem>
                    <NavItem><a href="#" className={'nav-link'}>About</a></NavItem>
                </Nav>
            </Header>
        </>
    );
};

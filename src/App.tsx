import React from 'react';

import Header from './partials/Header';
import Nav from './partials/Nav';
import NavItem from './partials/NavItem';

import './App.scss';

export function App() {
    return (
        <>
            <Header>
                <Nav position={"left"}>
                    <NavItem><h3><a href="#">CappuccinoIRC</a></h3></NavItem>
                </Nav>

                <Nav position={"right"}>
                    <NavItem><a href="#" className={'nav-link'}>Home</a></NavItem>
                    <NavItem><a href="#" className={'nav-link'}>Members</a></NavItem>
                    <NavItem><a href="#" className={'nav-link'}>About</a></NavItem>
                </Nav>
            </Header>
        </>
    );
}

export default App;

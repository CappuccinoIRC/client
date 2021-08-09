import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Nav, NavItem } from './components';
import { About, Home, Members } from './pages';

import './App.scss';
import { useSocket } from './hooks';

export default () => {
    // @ts-ignore
    const socket = useSocket(process.env.REACT_APP_SERVER_URL);

    socket.addEventListener('connection', () => {
        socket.send('Hello World!');
    });

    return (
        <>
            <Router>
                <Header>
                    <Nav position={'left'}>
                        <NavItem><h3><Link to="/" className={'nav-brand'}>CappuccinoIRC</Link></h3></NavItem>
                    </Nav>

                    <Nav position={'right'}>
                        <NavItem><Link to="/" className={'nav-link'}>Home</Link></NavItem>
                        <NavItem><Link to="/members" className={'nav-link'}>Members</Link></NavItem>
                        <NavItem><Link to="/about" className={'nav-link'}>About</Link></NavItem>
                    </Nav>
                </Header>

                <main>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/members'} component={Members}/>
                    <Route path={'/about'} component={About}/>
                </main>
            </Router>
        </>
    );
};
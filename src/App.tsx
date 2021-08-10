import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Nav, NavItem } from './components';
import { About, Home, Members } from './pages';

import './App.scss';
import { useSocket } from './hooks';
import { WebSocketStatus } from './hooks/UseSocket';

export default () => {
    // @ts-ignore
    const ws = useSocket(process.env.REACT_APP_SERVER_URL);

    ws.addEventListener('open', (ev) => {
        // @ts-ignore
        console.log('Opened', { url: ws.url, status: WebSocketStatus[ws.readyState] });

        ws.send('Hello');
    });

    ws.addEventListener('error', (ev) => {
        if (ws.readyState !== ws.CLOSED) {
            ws.close();
        }
    });

    ws.addEventListener('message', (ev) => {
        console.log('Messaged', { data: ev.data });
    });

    ws.addEventListener('close', (ev) => {
        console.error('Closed', { code: ev.code, reason: ev.reason });
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
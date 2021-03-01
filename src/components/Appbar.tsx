import React from 'react';

import {Button, IconButton} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';

import Profile from "./Profile";
import {ThemeConsumer} from "../contexts/ThemeContext";

export const Appbar = () => {
    function toggleMenu() {
        document.getElementById('mobile-nav')!!.classList.toggle('active');
    }

    return (
        <>
            <ThemeConsumer>
                { cxt => (
                    <div className={`appbar appbar-${cxt.theme}`}>
                        <span className={`brand brand-${cxt.theme}`}>Cappuccino</span>

                        <ul className={`appbar-nav appbar-nav-${cxt.theme}`}>
                            <li>
                                <Profile name={'You'} avatar={'avatar.svg'} />
                            </li>

                            <li>
                                <IconButton>
                                    <NotificationsIcon />
                                </IconButton>
                            </li>

                            <li>
                                <IconButton>
                                    <SettingsIcon/>
                                </IconButton>
                            </li>

                            <li data-target={'mobile'}>
                                <IconButton onClick={e => toggleMenu()}>
                                    <MenuIcon />
                                </IconButton>
                            </li>

                            <ul id={'mobile-nav'} className={'mobile-nav'}>
                                <li><Button variant={'text'}>Action 1</Button></li>
                                <li><Button variant={'text'}>Action 2</Button></li>
                                <li><Button variant={'text'}>Action 3</Button></li>
                            </ul>
                        </ul>
                    </div>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Appbar;

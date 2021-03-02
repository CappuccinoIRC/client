import React from 'react';

import MoonIcon from '@material-ui/icons/Brightness1';
import SunIcon from '@material-ui/icons/Brightness7';

import {Switch} from "@material-ui/core";
import {ThemeConsumer, ThemeContextDescriptor} from "../contexts/ThemeContext";

const Sidebar = () => {
    function toggleTheme(cxt: ThemeContextDescriptor) {
        cxt.setTheme(cxt.theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <ThemeConsumer>
                {cxt => (
                    <div className={`sidebar sidebar-${cxt.theme}`}>
                        {/* TODO: Implement */}

                        <Switch id={'theme-switcher-toggle'}
                                className={`theme-switcher theme-switcher-${cxt.theme}`}
                                icon={<MoonIcon className={'theme-icon-dark'}/>}
                                checkedIcon={<SunIcon className={`theme-icon-light`}/>}
                                size={"medium"}
                                color={'default'}
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                checked={cxt.theme === 'light'}
                                onClick={e => toggleTheme(cxt)}
                        />
                    </div>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Sidebar;

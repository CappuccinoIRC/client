import React from 'react';

import MoonIcon from '@material-ui/icons/Brightness1';
import SunIcon from '@material-ui/icons/Brightness7';

import {Switch} from "@material-ui/core";
import {ThemeConsumer} from "../contexts/ThemeContext";

const Sidebar = () => {
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
                                onClick={e => cxt.toggleTheme()}
                        />
                    </div>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Sidebar;

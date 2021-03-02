import React from 'react';

import {Button} from "@material-ui/core";
import {ThemeConsumer, ThemeContextDescriptor} from "../contexts/ThemeContext";
import Cookies from "js-cookie";

const Messagebox = () => {
    // Easter-egg
    function checkMessage(e: React.ChangeEvent<HTMLInputElement>, cxt: ThemeContextDescriptor) {
        if ((e.target.value === '#EASTEREGG ON') && cxt.theme !== 'rainbow') {
            cxt.setTheme('rainbow');
        } else if (e.target.value === '#EASTEREGG OFF' && cxt.theme === 'rainbow') {
            cxt.setTheme(Cookies.get('x-cappuccino-last-theme')!!);
        }
    }

    return (
        <>
            <ThemeConsumer>
                { cxt => (
                    <div className={`message-box message-box-${cxt.theme}`}>
                        <form method={'post'} action={'#'} acceptCharset={'utf-8'}>
                            <input type={"text"} placeholder={'Type a message'} onChange={e => checkMessage(e, cxt)} />
                            <Button>Send</Button>
                        </form>
                    </div>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Messagebox;

import React from 'react';

import {ThemeConsumer} from "../contexts/ThemeContext";

const Chatbox = () => {
    return (
        <>
            <ThemeConsumer>
                { cxt => (
                    <section className={`chat-box chat-box-${cxt.theme}`}>
                        {/* TODO: Implement */}
                    </section>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Chatbox;

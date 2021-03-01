import React from 'react';
import {ThemeConsumer} from "../contexts/ThemeContext";

// @ts-ignore
const Profile = ({ name, avatar }) => {
    return (
        <>
            <ThemeConsumer>
                { cxt => (
                    <div className={`profile profile-${cxt.theme}`}>
                        <span>{name}</span>
                        <img src={avatar}  alt={name} />
                    </div>
                )}
            </ThemeConsumer>
        </>
    );
};

export default Profile;

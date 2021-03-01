import React from 'react';

import "./App.scss";
import Sidebar from './components/Sidebar';
import Appbar from "./components/Appbar";
import Chatbox from "./components/Chatbox";
import Messagebox from "./components/Messagebox";
import {ThemeProvider} from "./contexts/ThemeContext";

const App = () => {
    const [
        theme,
        setTheme,
        toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }
    ] = React.useState('light');

    React.useEffect(() => {
        const _theme = sessionStorage.getItem('x-theme');

        if (_theme === null) {
            sessionStorage.setItem('x-theme', theme);
            return;
        }

        setTheme(_theme!!);
    }, []);

    React.useEffect(() => {
        sessionStorage.setItem('x-last-theme', sessionStorage.getItem('x-theme')!!);
        sessionStorage.setItem('x-theme', theme);

        try {
            import(`./themes/${theme}/app.scss`);
        } catch (e) {
            console.warn('Theme is not present.');
        }
    }, [theme]);

    return (
        <>
            <ThemeProvider value={{theme, setTheme, toggleTheme}}>
                <header>
                    <Appbar/>
                </header>

                <aside>
                    <Sidebar/>
                </aside>

                <main>
                    <Chatbox/>
                    <Messagebox/>
                </main>
            </ThemeProvider>
        </>
    );
};

export default App;

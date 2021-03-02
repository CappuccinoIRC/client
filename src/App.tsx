import React from 'react';

import "./App.scss";
import Sidebar from './components/Sidebar';
import Appbar from "./components/Appbar";
import Chatbox from "./components/Chatbox";
import Messagebox from "./components/Messagebox";
import {ThemeProvider} from "./contexts/ThemeContext";
import Cookies from "js-cookie";

export const X_LAST_THEME = 'x-cappuccino-last-theme';
export const X_THEME = 'x-cappuccino-theme';

const App = () => {
    const [
        theme,
        setTheme
    ] = React.useState('light');

    React.useEffect(() => {
        let _theme = Cookies.get(X_THEME);

        if (_theme === null) {
            Cookies.set(X_THEME, theme);
            return;
        }

        setTheme(_theme!!);
    }, []);

    React.useEffect(() => {
        Cookies.set(X_LAST_THEME, Cookies.get(X_THEME)!!);
        Cookies.set(X_THEME, theme);

        try {
            import(`./themes/${theme}/app.scss`);
        } catch (e) {
            console.warn('Theme is not present.');
        }
    }, [theme]);

    return (
        <>
            <ThemeProvider value={{theme, setTheme}}>
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

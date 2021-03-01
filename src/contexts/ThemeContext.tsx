import React from 'react';

export interface ThemeContextDescriptor {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextDescriptor>(null!!);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
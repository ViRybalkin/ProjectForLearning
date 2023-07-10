import {useContext} from 'react';
import {ThemeContext, ThemeTypes} from './ThemeContext';

export const UseTheme = () => {
    const {setTheme, theme} = useContext(ThemeContext);

    document.body.className = theme || 'light';
    const onToggleTheme = (saveAction: (newTheme: ThemeTypes) => void) => {
        let newTheme: ThemeTypes;

        switch (theme) {
            case 'dark':
                newTheme = 'light';
                break;
            case 'light':
                newTheme = 'orange';
                break;
            case 'orange':
                newTheme = 'dark';
                break;
            default:
                newTheme = 'light';
        }
        document.body.className = newTheme;
        if (setTheme) {
            setTheme(newTheme);
        }
        saveAction?.(newTheme);
    };

    return {
        onToggleTheme,
        theme: theme || 'light',
    };
};

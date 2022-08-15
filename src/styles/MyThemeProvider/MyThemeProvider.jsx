// GLOBAL
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
import GlobalStyles from '../GlobalStyles';

// THEMES
import defaultTheme from '../themes/default-theme';

export default function MyThemeProvider({ children }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    );
}

MyThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

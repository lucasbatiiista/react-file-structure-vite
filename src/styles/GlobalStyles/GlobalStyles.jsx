import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }
`;

const GlobalStyle = createGlobalStyle``;

export default function GlobalStyles() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
        </>
    );
}

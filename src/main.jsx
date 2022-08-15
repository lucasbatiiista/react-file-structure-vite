// GLOBAL
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// STYLES
import MyThemeProvider from './styles/MyThemeProvider';

// TRANSLATIONS
import './i18n';

// COMPONENTS
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyThemeProvider>
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <Footer />
        </MyThemeProvider>
    </React.StrictMode>
);

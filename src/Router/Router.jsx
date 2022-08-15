// GLOBAL
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// ROUTES
import PublicRoute from './PublicRoute';
import PrivateRote from './PrivateRoute';

// PAGES
import Auth from '../pages/Auth';
import Product from '../pages/Product';
import Page404 from '../pages/Page404';

export default function Router() {
    const [auth] = useState(true);

    return (
        <Routes>
            <Route
                path="login"
                element={
                    <PublicRoute authenticated={auth}>
                        <Auth.Login />
                    </PublicRoute>
                }
            />
            <Route
                index
                element={
                    <PrivateRote authenticated={auth}>
                        <Product.List />
                    </PrivateRote>
                }
            />
            <Route
                path="*"
                element={
                    <PrivateRote authenticated={auth}>
                        <Page404 />
                    </PrivateRote>
                }
            />
        </Routes>
    );
}

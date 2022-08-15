// GLOBAL
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ authenticated, redirect, children }) {
    if (!authenticated) return <Navigate to={redirect} replace />;

    return children;
}

PrivateRoute.defaultProps = {
    redirect: '/login',
};

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    redirect: PropTypes.string,
    children: PropTypes.element.isRequired,
};

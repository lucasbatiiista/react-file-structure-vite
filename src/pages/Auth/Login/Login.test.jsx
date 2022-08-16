// GLOBAL - imports from npm
import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Login from './Login';

describe('Login integration test', () => {
    it('Should render the Login component', () => {
        const { getByText } = render(<Login />);
        expect(getByText('LOGIN PAGE')).toBeInTheDocument();
    });
});

import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Header from './Header';

describe('Header integration test', () => {
    it('Should render the Header component', () => {
        const { getByText } = render(<Header />);
        expect(getByText('HEADER')).toBeInTheDocument();
    });
});

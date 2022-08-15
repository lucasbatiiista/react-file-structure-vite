import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Footer from './Footer';

describe('Footer integration test', () => {
    it('Should render the Footer component', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('FOOTER')).toBeInTheDocument();
    });
});

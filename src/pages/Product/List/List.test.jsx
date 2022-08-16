// GLOBAL - imports from npm
import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import List from './List';

describe('List integration test', () => {
    it('Should render the List component', () => {
        const { getByText } = render(<List />);
        expect(getByText('PRODUCT LIST PAGE')).toBeInTheDocument();
    });
});

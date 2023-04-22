import { render, screen } from '@testing-library/react';
import { Error } from '../../../components/Error';

describe('Error component', () => {
    test('renders error message and button', () => {
        render(<Error />);
        const errorMessage = screen.getByText('Oops, something went wrong. Please, try again later.');
        const okButton = screen.getByText('OK');
        expect(errorMessage).toBeInTheDocument();
        expect(okButton).toBeInTheDocument();
    });
});
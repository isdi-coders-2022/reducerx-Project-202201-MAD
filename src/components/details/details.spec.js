import { render, screen } from '@testing-library/react';
import { Details } from './details';

describe('Given the component function Details', () => {
    describe('When calling the Details function', () => {
        test('And h3 and image should be loaded', () => {
            render(<Details />);
            const imageAlt = screen.getByAltText('Cocktail glass');
            expect(imageAlt).toBeInTheDocument();

            // const textElemtent = screen.getByText(/Home/i);
            // expect(textElemtent).toBeInTheDocument();
        });
    });
});

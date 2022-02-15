import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component function Header', () => {
    describe('When calling the Header function', () => {
        test('An h1 and image should be loaded', () => {
            render(<Header />);
            const headerTestComponent = new Header('#header');

            expect(headerTestComponent).toBeDefined();

            const textElemtent = screen.getByText(/Home/i);
            expect(textElemtent).toBeInTheDocument();
        });
    });
});

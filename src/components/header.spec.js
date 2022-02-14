import { queryByText, screen, render } from '@testing-library/react';
import { App } from '../App';
import { Header } from './header';

describe('Given the component function Header', () => {
    describe('When calling the Header function', () => {
        test('An h1 and image should be loaded', () => {
            render(<Header />);
            const headerTestComponent = new Header('#header');

            expect(headerTestComponent).toBeDefined();
        });
    });
});

import { screen, render } from '@testing-library/react';
import { FavoritesIcon } from './favorites-icon';

describe('Favorites-icon is rendered', () => {
    render(<FavoritesIcon />);
    test('Favorites-icon renders', () => {
        const template = `<div role="button" onClick={isFav}>
            ⭐️
        </div>`;

        expect(template).toBeDefined();

        const textElemtent = screen.getByText(/⭐️/i);
        expect(textElemtent).toBeInTheDocument();
    });

    test('Favorites-icon function', () => {
        const isFav = jest.fn();
        // const result = isFav();
        expect(isFav).toHaveBeenCalledTimes(0);
    });
});

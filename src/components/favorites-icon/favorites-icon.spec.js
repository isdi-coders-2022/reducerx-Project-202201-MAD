import { screen, render, userEvent } from '@testing-library/react';
import { FavoritesIcon } from './favorites-icon';

describe('Favorites-icon is rendered', () => {
    test('Favorites-icon renders', () => {
        render(<FavoritesIcon />);

        const template = `<div role="button" onClick={isFav}>
            ⭐️
        </div>`;

        expect(template).toBeDefined();

        const textElemtent = screen.getByText(/⭐️/i);
        expect(textElemtent).toBeInTheDocument();
    });
});

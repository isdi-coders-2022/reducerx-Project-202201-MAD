import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders App', () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Shaked and mixed by ReducerX with love/i
    );
    expect(linkElement).toBeInTheDocument();
});

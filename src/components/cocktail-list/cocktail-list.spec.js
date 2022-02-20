import { render, screen, userEvent, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactDOM } from 'react';
import { Context } from '../../context/context';
import { CocktailList } from './cocktail-list';

const state = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
        ],
    },
};
const mockCocktailPhoto = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
                strDrink: '155 Belmont',
                alt_description: 'Cocktail',
            },
        ],
    },
};
const mockPrevNext = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15347',
                idDrink: '15347',
                strDrink: '155 Belmont',
            },
            {
                id: '15348',
                idDrink: '15348',
                strDrink: '155 Belmont',
            },
            {
                id: '15349',
                idDrink: '15349',
                strDrink: '155 Belmont',
            },
            {
                id: '15350',
                idDrink: '15350',
                strDrink: '155 Belmont',
            },
            {
                id: '15351',
                idDrink: '15351',
                strDrink: '155 Belmont',
            },
            {
                id: '15352',
                idDrink: '15352',
                strDrink: '155 Belmont',
            },
            {
                id: '15353',
                idDrink: '15353',
                strDrink: '155 Belmont',
            },
            {
                id: '15354',
                idDrink: '15354',
                strDrink: '155 Belmont',
            },
            {
                id: '15355',
                idDrink: '15355',
                strDrink: '155 Belmont',
            },
            {
                id: '15356',
                idDrink: '15356',
                strDrink: '155 Belmont',
            },
            {
                id: '15357',
                idDrink: '15357',
                strDrink: '155 Belmont',
            },
        ],
    },
};
describe('first', () => {
    test('should first', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={state}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );
        expect(screen.getAllByText(/155 Belmont/)).toHaveLength(2);
    });
});
describe('Given CocktailList component', () => {
    describe('When passed a cocktail obj', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Context.Provider value={mockCocktailPhoto}>
                        <CocktailList />
                    </Context.Provider>
                </BrowserRouter>
            );
            expect(screen.getByAltText(/Cocktail/)).toBeInTheDocument();
        });
    });
});
describe('Given CocktailList', () => {
    test('display indexMarker', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={mockPrevNext}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );
        expect(
            screen.queryByDisplayValue('indexMarker-text')
        ).toHaveBeenCalledTimes('1');
    });
});
describe('Given CocktailList buttons Next and Previous', () => {
    test('previous button click', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={mockPrevNext}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );

        fireEvent.click(screen.queryByTestId('btn-prev'));
        expect(screen.getByText('Previous')).toHaveTextContent();
        expect(screen.getByTestId('btn-prev')).toBeInTheDocument();
        expect(screen.queryByTestId('btn-prev')).not.toBeInTheDocument();
    });
    test('next button click', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={mockPrevNext}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );

        fireEvent.click(screen.queryByTestId('btn-next'));
        expect(screen.getByText('Next')).toHaveTextContent();
        expect(screen.getByTestId('btn-next')).toBeInTheDocument();
        expect(screen.queryByTestId('btn-next')).not.toBeInTheDocument();
    });
});

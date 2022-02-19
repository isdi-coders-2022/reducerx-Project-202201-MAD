import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15349',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15350',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15351',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15352',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15353',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15354',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15355',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15356',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
            {
                id: '15357',
                idDrink: '15346',
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
        expect(screen.queryByTestId('indexMarker-text')).toHaveTextContent('0');
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
        expect(screen.queryByTestId('Next')).toHaveTextContent('1');
    });
    test('previous button click', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={mockPrevNext}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );

        fireEvent.click(screen.queryByTestId('btn-prev'));
        expect(screen.queryByTestId('Previous')).toHaveTextContent('-1');
    });
});

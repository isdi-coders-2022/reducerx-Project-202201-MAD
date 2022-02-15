import { cocktailActionTypes } from './action-type';

export const loadCocktails = (cocktails) => ({
    type: cocktailActionTypes.load,
    payload: cocktails,
});

export const addCocktail = (cocktail) => ({
    type: cocktailActionTypes.add,
    cocktail,
});

export const toggleCocktail = (cocktail) => ({
    type: cocktailActionTypes.toggle,
    cocktail,
});

export const removeCocktail = (cocktail) => ({
    type: cocktailActionTypes.remove,
    cocktail,
});

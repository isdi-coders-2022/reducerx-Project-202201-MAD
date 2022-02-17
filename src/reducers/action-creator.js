import { cocktailActionTypes } from './action-type';

export const loadCocktails = (cocktails) => ({
    type: cocktailActionTypes.load,
    payload: cocktails,
});

export const loadCocktailsFav = (favorites) => ({
    type: cocktailActionTypes.loadFav,
    payload: favorites,
});

export const addCocktail = (favorites) => ({
    type: cocktailActionTypes.add,
    favorites,
});

export const toggleCocktail = (cocktail) => ({
    type: cocktailActionTypes.toggle,
    cocktail,
});

export const removeCocktail = (cocktail) => ({
    type: cocktailActionTypes.remove,
    cocktail,
});

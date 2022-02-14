import { cocktailActionTypes } from './action-type';

export function CocktailsReducer(state, action) {
    switch (action.type) {
        case cocktailActionTypes.load:
            return [...action.cocktails];
        case cocktailActionTypes.add:
            return [...state, action.cocktail];
        case cocktailActionTypes.toggle:
            return state.some((item) => item.id === action.cocktail.id);
        case cocktailActionTypes.remove:
            return state.filter((item) => item.id !== action.cocktail.id);
        default:
            return state;
    }
}

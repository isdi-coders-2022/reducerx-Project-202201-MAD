/* eslint-disable react/jsx-no-constructed-context-values */
import { CocktailsReducer } from '../reducers/reducers';
import * as api from '../services/api';
import * as actions from '../reducers/action-creator';

const { createContext, useEffect, useReducer } = require('react');

const Context = createContext({
    cocktails: [],
    addCocktail: () => {},
    deleteCocktail: () => {},
});

export function ContextProvider({ children }) {
    const [cocktails, dispatch] = useReducer(CocktailsReducer, []);

    useEffect(() => {
        api.getAll().then((resp) => dispatch(actions.loadCocktails(resp.data)));
    }, []);

    useEffect(() => {
        api.getAllFav().then((resp) =>
            dispatch(actions.loadCocktails(resp.data))
        );
    }, []);

    // const addCocktail = (newCocktail) => {
    //     api.set(newCocktail).then((resp) => {
    //         dispatch(actions.addCocktail(resp.data));
    //     });
    // };

    // const isFav = (id) => {};

    // const deleteCocktail = (cocktail) => {
    //     api.remove(cocktail.id).then((resp) => {
    //         if (resp.status === 200) {
    //             dispatch(actions.removeCocktail(cocktail));
    //         }
    //     });
    // };

    const contextValue = {
        cocktails,
        // addCocktail,
        // deleteCocktail,
    };
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
